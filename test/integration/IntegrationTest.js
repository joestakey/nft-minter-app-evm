const { ethers } = require('hardhat');
const chai = require('chai');
const BN = require('bn.js');
const { solidity } = require('ethereum-waffle');
const { assert } = require('chai');
chai.use(solidity);
chai.use(require('chai-bn')(BN));
const { expect } = chai;

describe('Polynians Integration Test', function () {
  let owner, player;
  let polynians;
  let polyniansFactory;

  const PRICE_ONE_NFT = ethers.utils.parseEther('2');

  before(async function () {
    [owner, player] = await ethers.getSigners();
    polyniansFactory = await ethers.getContractFactory('Polynians');
    polynians = await polyniansFactory
      .connect(owner)
      .deploy('https://polynians.s3.eu-west-2.amazonaws.com/json/');

    await polynians.deployed();
  });
  it('requires the sale to be open', async () => {
    await expect(
      polynians.mint(1, { value: PRICE_ONE_NFT })
    ).to.be.revertedWith('Sale closed');
  });
  it('only allows the owner to open the sale', async () => {
    const saleStatus = await polynians.isSaleActive();
    expect(saleStatus).to.be.false;
    await expect(polynians.connect(player).setSale(true)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    );
    await polynians.connect(owner).setSale(true);
    assert(polynians.isSaleActive());
  });
  it('cannot mint more than 5', async () => {
    await polynians.connect(owner).setSale(true);
    await expect(
      polynians.mint(6, { value: PRICE_ONE_NFT.mul(6) })
    ).to.be.revertedWith('min 5 max 5');
  });
  it('sends an error if trying to mint 0 or negative number', async () => {
    await expect(polynians.mint(-50, { value: 0 })).to.be.reverted;
    await expect(polynians.mint(0, { value: 0 })).to.be.revertedWith(
      'min 5 max 5'
    );
  });
  it('requires the correct amount of MATIC to be sent to mint', async () => {
    await expect(
      polynians.connect(player).mint(5, { value: PRICE_ONE_NFT })
    ).to.be.revertedWith('wrong price');
  });
  it('prevents anyone else than the owner to withdraw funds', async () => {
    await polynians.connect(player).mint(5, { value: PRICE_ONE_NFT.mul(5) });
    await expect(polynians.connect(player).withdraw()).to.be.revertedWith(
      'Ownable: caller is not the owner'
    );
  });
  it('updates the balance upon purchase of NFTs', async () => {
    let tx = await polynians.connect(player).balanceOf(player.address, 1);
    expect(tx).to.equal(1);
  });
  it('displays 0 when the account does not own the NFT', async () => {
    let tx = await polynians.connect(owner).balanceOf(owner.address, 1);
    expect(tx).to.equal(0);
  });
  it('allows the owner to withdraw funds', async () => {
    await expect(
      await polynians.connect(owner).withdraw()
    ).to.changeEtherBalance(owner, PRICE_ONE_NFT.mul(5));
  });
  it('allows only 1000 assets that can be minted', async () => {
    for (let i = 0; i < 199; i++) {
      await polynians.connect(player).mint(5, { value: PRICE_ONE_NFT.mul(5) });
    }
    await expect(
      polynians.mint(1, { value: PRICE_ONE_NFT })
    ).to.be.revertedWith('All are minted');
  });
});
