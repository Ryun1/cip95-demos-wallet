import {
  enable,
  getAddress,
  getBalance,
  getCollateral,
  getNetworkId,
  getRewardAddress,
  getUtxos,
  isEnabled,
  off,
  on,
  signData,
  signDataCIP30,
  signTx,
  submitTx,
  //CIP-95
  getDRepKey,
  getRegisteredPubStakeKeys,
  getUnregisteredPubStakeKeys,
  signTxCIP95,
  signDataCIP95,
} from '../../api/webpage';

// todo: improve extension handelling
// CIP-30
window.cardano = {
  ...(window.cardano || {}),
  demos: {
    enable: async (obj) => {
      let enableCIP95 = undefined;
      try {
        // Check if CIP-95 extension has been requested
        enableCIP95 = obj.extensions.some((item) => item.cip === 95);
      } catch (err) {
        console.log('demos: No extensions passed to wallet');
      }
      // CIP-95 extension
      if (enableCIP95 == true) {
        // console.log('demos: extension enabled: ', extension)
        if (await enable()) {
          return {
            getBalance: () => getBalance(),
            signData: (address, payload) => signDataCIP30(address, payload),
            // disabled as CIP-95 replacement is used
            // signTx: (tx, partialSign) => signTx(tx, partialSign),
            submitTx: (tx) => submitTx(tx),
            getUtxos: (amount, paginate) => getUtxos(amount, paginate),
            getUsedAddresses: async () => [await getAddress()],
            getUnusedAddresses: async () => [],
            getChangeAddress: () => getAddress(),
            getRewardAddresses: async () => [await getRewardAddress()],
            getNetworkId: () => getNetworkId(),
            experimental: {
              on: (eventName, callback) => on(eventName, callback),
              off: (eventName, callback) => off(eventName, callback),
              getCollateral: () => getCollateral(),
            },
            // CIP-95 -----------------------------
            getExtensions: () => [{ cip: 95 }],
            signTx: (tx, partialSign) => signTxCIP95(tx, partialSign),
            // Namespaced endpoints
            cip95: {
              getPubDRepKey: () => getDRepKey(),
              getRegisteredPubStakeKeys: () => getRegisteredPubStakeKeys(),
              getUnregisteredPubStakeKeys: () => getUnregisteredPubStakeKeys(),
              signData: (address, payload) => signDataCIP95(address, payload),
            },
          };
        }
      } else if (enableCIP95 == null) {
        if (await enable()) {
          return {
            getBalance: () => getBalance(),
            signData: (address, payload) => signDataCIP30(address, payload),
            signTx: (tx, partialSign) => signTx(tx, partialSign),
            submitTx: (tx) => submitTx(tx),
            getUtxos: (amount, paginate) => getUtxos(amount, paginate),
            getUsedAddresses: async () => [await getAddress()],
            getUnusedAddresses: async () => [],
            getChangeAddress: () => getAddress(),
            getRewardAddresses: async () => [await getRewardAddress()],
            getNetworkId: () => getNetworkId(),
            experimental: {
              on: (eventName, callback) => on(eventName, callback),
              off: (eventName, callback) => off(eventName, callback),
              getCollateral: () => getCollateral(),
            },
            getExtensions: () => [],
          };
        }
      }
    },
    isEnabled: () => isEnabled(),
    apiVersion: '1.5.1',
    supportedExtensions: [{ cip: 95 }],
    name: 'demos',
    icon: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='309.36' y='12.441' width='121.115' height='472.347' style='fill: rgb(128  177  211)%3B'/%3E%3Cellipse style='fill: rgb(128  177  211)%3B' cx='231.272' cy='320.966' rx='171.791' ry='137.051'/%3E%3C/svg%3E",
    _events: {},
  },
};
