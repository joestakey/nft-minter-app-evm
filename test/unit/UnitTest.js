const { ethers } = require('hardhat');
const chai = require('chai');
const { solidity } = require('ethereum-waffle');
const { assert } = require('chai');
chai.use(solidity);
const { expect } = chai;




describe('Polynians Unit Test', function () {
  let owner, player;

  let polynians;
  let polyniansFactory;
  const BASE_URI = 'https://polynians.s3.eu-west-2.amazonaws.com/json/';
  const PRICE_ONE_NFT = ethers.utils.parseEther('2');

  beforeEach(async function () {
    [owner, player] = await ethers.getSigners();
    polyniansFactory = await ethers.getContractFactory('Polynians');
    polynians = await polyniansFactory.connect(owner).deploy(
      BASE_URI
    );

    await polynians.deployed();
  });
  describe('Sale status test', function () {
    it('requires the sale to be open', async () => {
      await expect(polynians.mint(1, { value: PRICE_ONE_NFT })).to.be.revertedWith(
        'Sale closed'
      );
    });
  })
  
  describe('Ownership tests', function () {
    it('only allows the owner to open the sale', async () => {
      const saleStatus = await polynians.isSaleActive();
      expect(saleStatus).to.be.false;
      await expect(
        polynians.connect(player).setSale(true)
      ).to.be.revertedWith('Ownable: caller is not the owner');
      await polynians.connect(owner).setSale(true);
      assert(polynians.isSaleActive());
    });
    it('prevents anyone else than the owner to withdraw funds', async () => {
      await polynians.connect(owner).setSale(true);
      await polynians
        .connect(player)
        .mint(5, { value: PRICE_ONE_NFT.mul(5) });
      await expect(polynians.connect(player).withdraw()).to.be.revertedWith(
        'Ownable: caller is not the owner'
      );
    });
    it('allows the owner to withdraw funds', async () => {
      await polynians.connect(owner).setSale(true);
      await polynians.connect(player).mint(5, { value: PRICE_ONE_NFT.mul(5) });
      await expect(await polynians.connect(owner).withdraw()).to.changeEtherBalance(
        owner,
        PRICE_ONE_NFT.mul(5)
      );
    });
  });
  describe('BalanceOf tests', function () {
    it('updates the balance upon purchase of NFTs', async () => {
      await polynians.connect(owner).setSale(true);
      await polynians.connect(player).mint(5, { value: PRICE_ONE_NFT.mul(5) });
      let tx = await polynians.connect(player).balanceOf(player.address, 1);
      expect(tx).to.equal(1);
    });
    it('displays 0 when the account does not own the NFT', async () => {
      let tx = await polynians.connect(owner).balanceOf(owner.address, 1);
      expect(tx).to.equal(0);
    });
  });

  describe('Minting tests', function () {
    it('cannot mint more than 5', async () => {
      await polynians.connect(owner).setSale(true);
      await expect(
        polynians.mint(6, { value: PRICE_ONE_NFT.mul(6) })
      ).to.be.revertedWith('min 5 max 5');
    });
    it('sends an error if trying to mint 0 or negative number', async () => {
      await polynians.connect(owner).setSale(true);
      await expect(polynians.mint(-50, { value: 0 })).to.be.reverted;
      await expect(polynians.mint(0, { value: 0 })).to.be.revertedWith(
        'min 5 max 5'
      );
    });
    it('requires the correct amount of MATIC to be sent to mint', async () => {
      await polynians.connect(owner).setSale(true);
      await expect(
        polynians.connect(player).mint(5, { value: PRICE_ONE_NFT })
      ).to.be.revertedWith('wrong price');
    });
    it('allows only 1000 assets that can be minted', async () => {
      await polynians.connect(owner).setSale(true);
      for (let i = 0; i < 200; i++) {
        await polynians
          .connect(player)
          .mint(5, { value: PRICE_ONE_NFT.mul(5) });
      }
      await expect(
        polynians.mint(1, { value: PRICE_ONE_NFT })
      ).to.be.revertedWith('All are minted');
    });
  });
  describe('Gas tests', function () {
    it('consumes less than 54,000 gas per mint', async () => {
      await polynians.connect(owner).setSale(true);
      const tx = await 
        polynians.mint(1, { value: PRICE_ONE_NFT });
      const receipt = await tx.wait();
      assert.isBelow(receipt.gasUsed, 54000, "minting used less than 54,000 gas");
    });
    it('consumes less than 25,000 gas for each additional asset minted', async () => {
      await polynians.connect(owner).setSale(true);
      const tx = await 
        polynians.mint(2, { value: PRICE_ONE_NFT.mul(2) });
      const receipt = await tx.wait();
      assert.isBelow(
        receipt.gasUsed.sub(54000),
        25000,
        'second minting used less than 25,000 gas'
      );
    });
    it('consumes less than 35,000 gas to transfer', async () => {
      await polynians.connect(owner).setSale(true);
      await 
        polynians.connect(player).mint(1, { value: PRICE_ONE_NFT });
      expect(
        await polynians.connect(player).balanceOf(player.address, 1)
      ).to.equal(1);
      const tx = await polynians.connect(player).safeTransferFrom(player.address, owner.address, 1, 1, "0x00")
      const receipt = await tx.wait();
      expect(await polynians.connect(owner).balanceOf(owner.address, 1)).to.equal(1);
      expect(await polynians.connect(player).balanceOf(player.address, 1)).to.equal(0);
      console.log(`transfer cost is ${receipt.gasUsed}`);
      assert.isBelow(
        receipt.gasUsed,
        35000,
        'transfer used less than 35,000 gas'
      );
    });
    it('consumes less than 8,000 gas per extra transfer in a batch transfer', async () => {
      await polynians.connect(owner).setSale(true);
      await 
        polynians.connect(player).mint(5, { value: PRICE_ONE_NFT.mul(5) });
      for (let i = 1; i <6 ;i++) {
        expect(await polynians.connect(player).balanceOf(player.address, i)).to.equal(
          1
        );
      }
      
      const tx = await polynians.connect(player).safeBatchTransferFrom(player.address, owner.address, [1, 2, 3, 4, 5], [1, 1, 1, 1, 1], "0x00")
      const receipt = await tx.wait();
      for (let i = 1; i < 6; i++) {
        expect(
          await polynians.connect(owner).balanceOf(owner.address, i)
        ).to.equal(1);
      }
      for (let i = 1; i < 6; i++) {
        expect(
          await polynians.connect(player).balanceOf(player.address, i)
        ).to.equal(0);
      }
      console.log(`transfer cost is ${receipt.gasUsed}`);
      assert.isBelow(
        receipt.gasUsed,
        63000,
        'second minting used less than 8,000 gas per asset transfered'
      );
    });
    
  });
  describe('URI tests', function () {
    it('gives an error if we query the URI of a token id that does not exist', async () => {
      await expect(polynians.connect(owner).uri(0)).to.be.reverted;
      await expect(polynians.connect(owner).uri(1001)).to.be.reverted;
    });
    it('returns the correct URI', async () => {
      expect(await polynians.connect(owner).uri(100)).to.equal(
        `https://polynians.s3.eu-west-2.amazonaws.com/json/${100}.json`
      );
    });
    it('allows the owner to change the base URI', async () => {
      expect(await polynians.connect(owner).uri(100)).to.equal(
        `https://polynians.s3.eu-west-2.amazonaws.com/json/${100}.json`
      );
      await polynians.connect(owner).setURI('test/');
      expect(await polynians.connect(owner).uri(100)).to.equal(
        `test/${100}.json`
      );
    });
    it('ensures only the owner can change the base URI', async () => {
      await expect(polynians.connect(player).setURI('test/')).to.be.revertedWith('Ownable: caller is not the owner')
    });
  });  

});
