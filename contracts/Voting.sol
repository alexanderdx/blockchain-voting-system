// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Voting {
    uint256 val = 1;

    function get() public view returns (uint256) {
        return val;
    }

    function double() public {
        val *= 2;
    }
}
