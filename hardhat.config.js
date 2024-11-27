require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.28",
    networks: {
        luksoTestnet: {
            url: process.env.LUKSO_RPC_URL || "", 
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [], 
        },
    },
};
