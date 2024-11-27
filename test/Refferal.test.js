const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Referral Contract", function () {
    let referral;
    let owner, addr1;

    beforeEach(async function () {
        const Referral = await ethers.getContractFactory("Referral");
        referral = await Referral.deploy(); 
        await referral.waitForDeployment(); 
        
        [owner, addr1] = await ethers.getSigners();
    });

    it("Should create a referral code", async function () {
        await referral.createReferral("MYREF123");
        const codeOwner = await referral.getReferralOwner("MYREF123");
        expect(codeOwner).to.equal(owner.address);
    });

    it("Should not allow duplicate referral codes", async function () {
        await referral.createReferral("MYREF123");
        await expect(referral.createReferral("MYREF123")).to.be.revertedWith(
            "Referral code already exists"
        );
    });

    it("Should allow the owner to use their referral code", async function () {
        await referral.createReferral("MYREF123");
        await referral.useReferral("MYREF123");
        await expect(referral.getReferralOwner("MYREF123")).to.be.revertedWith(
            "Referral code does not exist"
        );
    });

    it("Should not allow a different user to use a referral code", async function () {
        await referral.createReferral("MYREF123");
        await expect(referral.connect(addr1).useReferral("MYREF123")).to.be.revertedWith(
            "Cannot use referral owned by another user"
        );
    });

    it("Should emit events on referral creation and usage", async function () {
        await expect(referral.createReferral("MYREF123"))
            .to.emit(referral, "ReferralCreated")
            .withArgs("MYREF123", owner.address);

        await expect(referral.useReferral("MYREF123"))
            .to.emit(referral, "ReferralUsed")
            .withArgs("MYREF123", owner.address);
    });
});
