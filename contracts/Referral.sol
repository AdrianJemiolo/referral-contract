// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Referral {
    struct ReferralCode {
        address owner;
        bool exists;
    }

    mapping(string => ReferralCode) private referralCodes;

    event ReferralCreated(string code, address indexed owner);
    event ReferralUsed(string code, address indexed user);

    modifier onlyOwner(string memory code) {
        require(referralCodes[code].exists, "Referral code does not exist");
        require(referralCodes[code].owner == msg.sender, "Not the owner of the referral code");
        _;
    }

    function createReferral(string memory code) external {
        require(!referralCodes[code].exists, "Referral code already exists");
        referralCodes[code] = ReferralCode(msg.sender, true);
        emit ReferralCreated(code, msg.sender);
    }

    function useReferral(string memory code) external {
        require(referralCodes[code].exists, "Referral code does not exist");
        require(referralCodes[code].owner == msg.sender, "Cannot use referral owned by another user");

        delete referralCodes[code];
        emit ReferralUsed(code, msg.sender);
    }

    function getReferralOwner(string memory code) external view returns (address) {
        require(referralCodes[code].exists, "Referral code does not exist");
        return referralCodes[code].owner;
    }
}

