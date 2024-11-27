const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying Referral contract...");

  const Referral = await ethers.getContractFactory("Referral");
  const referral = await Referral.deploy();
  await referral.waitForDeployment();

  console.log("Referral contract deployed to:", referral.target);
}

main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});
