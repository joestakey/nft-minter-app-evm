// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Polynians is ERC1155, Ownable {
    
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY_PLUS_ONE = 1001;
    uint256 public constant MAX_PER_MINT_PLUS_ONE = 6;
    uint256 public constant PRICE = 2*10**18; //2 MATIC
    uint256 public currentIndex = 1;
    bool public isSaleActive;
    address[MAX_SUPPLY_PLUS_ONE - 1] private _owners;
    string public name = "Polynians";
    string public symbol = "PLN";
    string public baseURI;

    event SaleIsActive(bool _status);

    constructor(string memory _uri) ERC1155(_uri) {
        baseURI = _uri;
    }

    function balanceOf(address account, uint256 id) public view virtual override returns (uint256) {
        require(account != address(0), "ERC1155: balance query for the zero address");
        require(id < MAX_SUPPLY_PLUS_ONE, "ERC1155: id exceeds maximum");
        return _owners[id] == account? 1 : 0;
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) public override {
        require(
                from == _msgSender() || isApprovedForAll(from, _msgSender()),
                "ERC1155: caller is not owner nor approved"
            );
        require(to != address(0), "ERC1155: transfer to the zero address");
        require(amount == 1, "this is a NFT contract, there is only one copy of each asset");
        address ownerNFT = _owners[id];
        require(ownerNFT == from, "ERC1155: the sender is not the owner of this NFT");
        _owners[id] = to;
        emit TransferSingle(msg.sender, from, to, id, 1);

    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes calldata data
    ) public override {
        require(
                from == _msgSender() || isApprovedForAll(from, _msgSender()),
                "ERC1155: caller is not owner nor approved"
            );
        require(to != address(0), "ERC1155: transfer to the zero address");
        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");

        for(uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];
            require(amount == 1, "this is a NFT contract, there is only one copy of each asset");
            address ownerNFT = _owners[id];
            require(ownerNFT == from, "ERC1155: the sender is not the owner of this NFT");
            _owners[id] = to;

        }
        
        emit TransferBatch(msg.sender, from, to, ids, amounts);

    }

    function uri(uint256 _id) public view override returns(string memory) {
        require(_id < MAX_SUPPLY_PLUS_ONE && _id > 0, "invalid id");
        return string(abi.encodePacked(baseURI, _id.toString(), ".json"));
    }

    function mint(uint256 _amount) external payable {
        uint256 _currentIndex = currentIndex;
        uint256 _price = PRICE;
        address msgSender = msg.sender;
        /*
        @dev
        We prevent any smart contract from minting our NFTs.
        Please note that this require statement is not good practice in general, because:
        -it prevents any multisig wallet/ smart contract from interacting with the contract. 
        -A future upgrade of EOAs may turn them into smart contracts, meaning our function 
        cannot be interacted with.
        However in this case, we do not care about future proofing this function,
        because the minting process is expected to be taking part for a limited amount of time,
        until all the tokens are minted.
        */
        require(msg.sender == tx.origin, "only EOAs");
        require(isSaleActive, "Sale closed");
        require(_currentIndex + _amount - 1 < MAX_SUPPLY_PLUS_ONE, "All are minted");
        require(_amount > 0 && _amount < MAX_PER_MINT_PLUS_ONE, "min 5 max 5");
        require(msg.value == _amount * _price, "wrong price");     
        //use _owners array instead of  ERC1155_balance mapping
        if (_amount > 1) {
            uint256[] memory indexes = new uint256[](_amount);
            uint256[] memory values = new uint256[](_amount);
            for (uint256 i=0; i < _amount; i++) {
                assembly {
                    sstore(add(_owners.slot, _currentIndex), msgSender)
                }
                indexes[i] = _currentIndex;
                values[i] = 1;
                unchecked {
                    _currentIndex ++;
                }
            }
            emit TransferBatch(msg.sender, address(0), msg.sender, indexes, values);
        } else {
            assembly {
                sstore(add(_owners.slot, _currentIndex), msgSender)
            }
            emit TransferSingle(msg.sender, address(0), msg.sender, _currentIndex, 1);
            unchecked {
                _currentIndex ++;
            }
        }   
        currentIndex = _currentIndex;    
    }

    function setSale(bool _status) external onlyOwner {
        isSaleActive = _status;
        emit SaleIsActive(_status);
    }

    function setURI(string memory newUri) external onlyOwner {
        baseURI = newUri;
    }

    function withdraw() external onlyOwner {
        (bool success,) = payable(owner()).call{value: address(this).balance}("");
        require(success, "the withdraw failed!");
    }
}