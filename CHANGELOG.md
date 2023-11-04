# Tags

### 1.6.0
- CSL Alpha 13
- Combination certificate support
- UI Tx balancing bug

### 1.5.3 
- A lot nicer UI to inspect Conway certs, votes and gov actions

### 1.5.2
- Bumped CSL to alpha version 10

### 1.5.1
- Bumped CSL to alpha version 8
- Fixed vote signing
- Fixed Gov action inspection

### 1.5.0

#### SanchoNet:
- Can connect using sancho Blockfrost.
- Can view correct balance etc.
- Can view transaction history.
  
#### Cardano Serialization Library Conway Alpha:
- Uses Alpha build to support serilization of Conaway items.
- Import using as a temp modules.
- Supports inspection and signing transactions with:
  - Empty Tx 
  - DRep Registration
  - DRep Retirement
  - DRep Update
  - Vote Delegation
  - Governance Action 

#### CIP-95:
- `.cip95.getPubDRepKey()`
- `.cip95.getRegisteredPubStakeKeys()`
- `.cip95.getUnregisteredPubStakeKeys()`
- `.cip95.signData()` **NOT implemented**
- `signTx()`

#### Misc
Added .getSupportedExtensions() and .getExtensions()

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