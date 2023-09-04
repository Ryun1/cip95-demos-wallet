#### ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠

### **❗ Do not use this wallet to store funds. This wallet's security is compromised. ❗**

#### ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠


# CIP-95 Demos Mock wallet 

This is a *mock* wallet, based on [Nami](https://github.com/berry-pool/nami).


Currently corresponding CIP-95 commit: [fbc5fcb](https://github.com/cardano-foundation/CIPs/pull/509/commits/fbc5fcbb127313ccfd2a30376145f63627f3afd9).

| Tag  | CIP-95 Commit | demos dApp Tag |
| ---- | ------------- | -------------- |
| [1.4.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.4.0) | [fbc5fcb](https://github.com/cardano-foundation/CIPs/pull/509/commits/fbc5fcbb127313ccfd2a30376145f63627f3afd9) | [1.4.0](https://github.com/Ryun1/cip95-cardano-wallet-connector/releases/tag/1.4.0) |
| [1.4.0](https://github.com/Ryun1/cip95-demos-wallet/releases/tag/1.4.0) | [1f75f99](https://github.com/cardano-foundation/CIPs/pull/509/commits/1f75f990c4e8fdf308c3ed209bac723a84822931) | [1.4.0](https://github.com/Ryun1/cip95-cardano-wallet-connector/releases/tag/1.4.0) |

## CIP-95/Conway Features Supported Notes

### 1.4.0

#### SanchoNet:
- Cannot connect.
  
#### Cardano Serialization Library Conway Alpha:
- Does not use any Conway alpha builds.

#### CIP-95:
- `.getPubDRepKey()`
  - Should work correctly as expected.
- `.getPubActiveStakeKeys()`
  - Since this is a one stake key wallet, only one is ever returned.
  - Currently there is no `active` check currently because it is easier for testing.
- `.signTx()`
  - No conway items supported properly (waiting for Sancho + CML/CSL).
  - Supports signing transactions with DRep key, if DRep key in required signers field only.
- `.signData()`
  - No conway items supported properly (waiting for Sancho + CML/CSL).

### 1.5.XX (In progress)

#### SanchoNet:
- Can connect using sancho Blockfrost.
- Can view correct balance etc.
- Some things might be broke.
- May not be able to submit to Sancho
  
#### Cardano Serialization Library Conway Alpha:
- Uses Alpha build to support connecting to Sancho and CIP-95.
- Probably import using temporary modules.

#### CIP-95:
- `.getPubDRepKey()`
  - Should work correctly as expected.
- `.getPubActiveStakeKeys()`
  - Since this is a one stake key wallet, only one is ever returned.
  - Currently there is no `active` check currently because it is easier for testing.
- `.signTx()`
  - Supports inspection and signature of all Conway items.
- `.signData()`
  - Supports properly signing with DRep Key.

#### Misc
- Rebase against Nami
- Fix chrome extension errors

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

1. Install modules

```bash
sudo npm install
```

2. Try to start


```bash
sudo npm start
```

2. Fight with node and install any missing packages :)

I had to do:

```bash
sudo npm install --save-dev webpack-dev-server

sudo npm audit fix

sudo npm rebuild node-sass
```

## To Test Wallet

### Build wallet

Build a chrome extension from the `/src` code.

```bash
sudo npm run build
```

### Load into Chrome (for first time)

1. In chrome go to `chrome://extensions/`, in the top right enable developer mode.

2. Then press `Load unpacked` and select your `/build` folder.

### Load into Chrome (refresh for new build)

1. In chrome go to `chrome://extensions/`, and on the mock-wallet press the reload button to refresh it.
