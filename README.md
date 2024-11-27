# Referral Contract

This project is a Solidity-based smart contract designed for managing referral codes. It enables the generation, storage, and usage of referral codes, assigned to specific addresses. The contract is built using the HardHat framework and deployed to the **LUKSO Testnet**.

---

## Features

- **Referral Code Management**:
  - Create referral codes.
  - Store referral codes in the contract's storage.
  - Assign referral codes to specific Ethereum addresses.
  - Use and delete referral codes after successful verification.

- **Access Controls**:
  - Only the owner of a referral code can use or delete it.
  - Comprehensive checks to ensure security and correctness.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: >=18
- **npm**: >=7
- **HardHat**: Installed globally or locally in the project.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:AdrianJemiolo/referral-contract.git
cd referral-contract
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Create `.env` file. It should contain:
```plaintext
LUKSO_RPC_URL=<your-lukso-testnet-rpc-url>
PRIVATE_KEY=<your-private-key>
```
Replace `<your-lukso-testnet-rpc-url>` and `<your-private-key>` with your LUKSO Testnet RPC URL and wallet private key, respectively.

---

### Testing
Run the following command:
```bash
npx hardhat test
```
The tests include:

- Creating referral codes.
- Preventing duplicate referral codes.
- Ensuring only the owner can use or delete a referral code.
- Verifying emitted events for referral creation and usage.

---

### Deployment
1. Update the `.env` file with your LUKSO Testnet credentials.
2. Run the deployment script:
```bash
npx hardhat run scripts/deploy.js --network luksoTestnet
```
3. The script will output the contract address. Copy this address for future reference.
4. Once deployed, the contract can be viewed on the LUKSO Testnet block explorer:
- [Contract on LUKSO Testnet](https://chatgpt.com/c/673c92d3-e4c4-8000-9de8-8f0da7bd1d4b#:~:text=Contract%20on%20LUKSO%20Testnet)

---

### Build and Compilation
To compile the smart contract:
```bash
npx hardhat compile
```

---

### License
This project is licensed under the MIT License.



