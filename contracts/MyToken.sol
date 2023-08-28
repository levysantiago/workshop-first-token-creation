// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./openzeppelin/ERC20.sol";

contract MyToken is ERC20{
  address public owner;

  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    owner = _msgSender();
  }

  modifier onlyOwner{
    require(_msgSender() == owner, "");
    _;
  }

  function mint(address to, uint256 value) public onlyOwner returns (bool) {
    _mint(to, value);
    return true;
  }

  function burn(uint256 value) public onlyOwner returns (bool) {
    _burn(_msgSender(), value);
    return true;
  }

  function burnFrom(address from, uint256 value) public onlyOwner returns (bool) {
    require(allowance(from, _msgSender()) >= value, "INSUFICIENT_ALLOWANCE");
    _burn(from, value);
    return true;
  }
}