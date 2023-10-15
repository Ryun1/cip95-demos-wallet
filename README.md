#### ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠

### **❗ Do not use this wallet to store funds. This wallet's security is compromised. ❗**

#### ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠


# CIP-95 demos Mock wallet 

This is a *mock* wallet, based on [Nami](https://github.com/berry-pool/nami).

Currently corresponding CIP-95 commit: [6153866](https://github.com/cardano-foundation/CIPs/blob/6153866bbafe874e196431f736d6bf6691359988/CIP-0095/README.md).

| Tag  | CIP-95 Commit | Feature Details | demos dApp Tag |
| ---- | ------------- | --------------- | -------------- |
| [1.4.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.4.0) | [1f75f99](https://github.com/cardano-foundation/CIPs/pull/509/commits/1f75f990c4e8fdf308c3ed209bac723a84822931) | [Here](./CHANGELOG.md#140) | [1.4.0](https://github.com/Ryun1/cip95-cardano-wallet-connector/releases/tag/1.4.0) |
| [1.5.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.5.0) | [6153866](https://github.com/cardano-foundation/CIPs/blob/6153866bbafe874e196431f736d6bf6691359988/CIP-0095/README.md) | [Here](./CHANGELOG.md#150) | [1.5.0](https://github.com/Ryun1/cip95-cardano-wallet-connector/releases/tag/1.5.0) |
| [1.5.1](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.5.1) | [6153866](https://github.com/cardano-foundation/CIPs/blob/6153866bbafe874e196431f736d6bf6691359988/CIP-0095/README.md) | [Here](./CHANGELOG.md#151) | [1.5.4+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |
| [1.5.2](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.5.2) | [6153866](https://github.com/cardano-foundation/CIPs/blob/6153866bbafe874e196431f736d6bf6691359988/CIP-0095/README.md) | [Here](./CHANGELOG.md#152) | [1.5.4+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |
| [1.5.3](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.5.3) | [6153866](https://github.com/cardano-foundation/CIPs/blob/6153866bbafe874e196431f736d6bf6691359988/CIP-0095/README.md) | [Here](./CHANGELOG.md#153) | [1.5.4+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |

## CIP-95/Conway Features Supported Notes

### 1.5.3 
- A lot nicer UI to inspect Conway certs, votes and gov actions

### 1.5.4 (In progress)
- `.cip95.signData()`

## To Develop

### Create secret files

1. Make development secrets file, from testing secrets template.

```bash
cat secrets.testing.js > secrets.development.js
```

2. Make production secrets file, from testing secrets template.

```bash
cat secrets.testing.js > secrets.production.js
```

3. Go to [Blockfrost](https://blockfrost.io/auth/signin) and make a free workspace key. You can make one free workspace for one network that can do 50K requests a day. I just made one for PreProd network.

4. Open `secrets.development.js` and `secrets.production.js` and paste in your correct key from Blockfrost. 
   
**DON'T place keys into `secrets.testing.js` because this is not ignored by git!**

```bash
code secrets.development.js secrets.production.js
```

### Start Dev Env

1. Install modules, youll probably have to fight with node here due to conflicts.

```bash
sudo npm install
```

2. Try to start


```bash
sudo npm start
```

## To Test Wallet

### Build wallet

If you are running from `npm start` you'll already have a build otherwise:

```bash
sudo npm run build
```

### Load extension into Chrome (for first time)

1. In chrome go to `chrome://extensions/`, in the top right enable developer mode.

2. Then press `Load unpacked` and select your `/build` folder.

### Load into Chrome (refresh for new build)

1. In chrome go to `chrome://extensions/`, and on the wallet press the reload button to refresh it.

## demos Etymology

The common people of an ancient Greek state. The populace of a democracy as a political unit.