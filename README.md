#### ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠

### **❗ Do not use this wallet to store funds. This wallet's security is compromised. ❗**

#### ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠


# CIP-95 demos Mock wallet 

This is a *mock* wallet, based on [Nami](https://github.com/berry-pool/nami).

| Tag  | Feature Details | demos dApp Tag |
| ---- | --------------- | -------------- |
| [1.6.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.6.0) | [Here](./CHANGELOG.md#160) | [1.6.0+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |
| [1.7.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.7.0) | [Here](./CHANGELOG.md#170) | [1.7.0+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |
| [1.8.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.8.0) | [Here](./CHANGELOG.md#180) | [1.8.0+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |
| [1.8.1](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.8.1) | [Here](./CHANGELOG.md#181) | [1.8.0+](https://github.com/Ryun1/cip95-cardano-wallet-connector/tags) |

## CIP-95/Conway Features Supported Notes

### 1.8.1
- CSL 12 alpha 29

### 1.8.2 (In progress)
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
npm install
```

2. Try to start


```bash
npm start
```

## To Test Wallet

### Build wallet

If you are running from `npm start` you'll already have a build otherwise:

```bash
npm run build
```

### Load extension into Chrome (for first time)

1. In chrome go to `chrome://extensions/`, in the top right enable developer mode.

2. Then press `Load unpacked` and select your `/build` folder.

### Load into Chrome (refresh for new build)

1. In chrome go to `chrome://extensions/`, and on the wallet press the reload button to refresh it.

## demos Etymology

The common people of an ancient Greek state. The populace of a democracy as a political unit.