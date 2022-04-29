//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Keyboard {
    string[] public createdKeyboards;

    function getKeyboards() view public returns (string[] memory) {
        return createdKeyboards;
    }
    function create(string calldata _description) public {
        createdKeyboards.push(_description);
    }
}