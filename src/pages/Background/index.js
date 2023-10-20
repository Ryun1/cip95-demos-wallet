import {
  createPopup,
  extractKeyHash,
  getAddress,
  getBalance,
  getCollateral,
  getNetwork,
  getRewardAddress,
  getUtxos,
  isWhitelisted,
  submitTx,
  verifyPayload,
  verifyTx,
  // CSL Alpha
  verifyTxCSL,
  // CIP-95
  getDRepKey,
  getRegisteredPubStakeKeys,
  getUnregisteredPubStakeKeys,
  // somed wallet
  setWhitelisted,
  getCurrentAccount,
  getCurrentAccountIndex,
  signTxCIP95,
  signTx,
  getAccounts,
  createWallet,
  setNetwork,
} from '../../api/extension';
import { Messaging } from '../../api/messaging';
import {
  APIError,
  METHOD,
  NETWORK_ID_NUMBER,
  POPUP,
  SENDER,
  TARGET,
} from '../../config/config';

import {
  entropyToMnemonic,
} from 'bip39';

import secrets from 'secrets';

import Loader from '../../api/loader';

const app = Messaging.createBackgroundController();

// CIP-95 -----------------------------
app.add(METHOD.getDRepKey, async (request, sendResponse) => {
  const key = await getDRepKey();
  if (key) {
    sendResponse({
      id: request.id,
      data: key,
      target: TARGET,
      sender: SENDER.extension,
    });
  } else {
    sendResponse({
      id: request.id,
      error: APIError.InternalError,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.getRegisteredPubStakeKeys, async (request, sendResponse) => {
  const key = await getRegisteredPubStakeKeys();
  if (key) {
    sendResponse({
      id: request.id,
      data: key,
      target: TARGET,
      sender: SENDER.extension,
    });
  } else {
    sendResponse({
      id: request.id,
      error: APIError.InternalError,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.getUnregisteredPubStakeKeys, async (request, sendResponse) => {
  const key = await getUnregisteredPubStakeKeys();
  if (key) {
    sendResponse({
      id: request.id,
      data: key,
      target: TARGET,
      sender: SENDER.extension,
    });
  } else {
    sendResponse({
      id: request.id,
      error: APIError.InternalError,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.signTxCIP95, async (request, sendResponse) => {

  // somed wallet ---------------------------------------

  // try {
    await Loader.load();
    // await verifyTxCSL(request.data.tx);

    const account = await getCurrentAccount();

    const tx = Loader.CSL.Transaction.from_bytes(
      Buffer.from(request.data.tx, 'hex')
    );

    const baseAddr = Loader.CSL.BaseAddress.from_address(
      Loader.CSL.Address.from_bech32(account.paymentAddr)
    );
    const paymentKeyHash = Buffer.from(
      baseAddr.payment_cred().to_keyhash().to_bytes()
    ).toString('hex');

    let requiredKeyHashes = [paymentKeyHash];
  
    try {

      const txBody = tx.body();

      const votes = txBody.voting_procedures();
      const keyHashFromVote = (votes) => {
        const voters = votes.get_voters();
        let voterKeyhash;
        for (let i = 0; i < voters.len(); i++) {
          voterKeyhash = (voters.get(i)).to_key_hash();
          requiredKeyHashes.push(voterKeyhash.to_hex());
        }
      };
      if (votes) keyHashFromVote(votes);

      for (let i = 0; i < txBody.certs().len(); i++) {
          const cert = txBody.certs().get(i);

          if (cert.kind() === 15) {
            const credential = cert.as_vote_delegation().stake_credential();
            // if credential is a key hash
            if (credential.kind() === 0) {
                const keyHash = Buffer.from(
                  credential.to_keyhash().to_bytes()
                ).toString('hex');
                requiredKeyHashes.push(keyHash);
            }
          // conway drep registration, add drep credential
          } else if (cert.kind() === 10) {
            const credential = cert.as_drep_registration().voting_credential();
            // if credential is a key hash
            if (credential.kind() === 0) {
              // DRep registration doesn't required key hash
            }
          // conway drep update, add drep credential
          } else if (cert.kind() === 11) {
            const credential = cert.as_drep_update().voting_credential();
            // if credential is a key hash
            if (credential.kind() === 0) {
              const keyHash = Buffer.from(
                credential.to_keyhash().to_bytes()
              ).toString('hex');
              requiredKeyHashes.push(keyHash);
            }
          // conway drep retirement, add drep credential
          } else if (cert.kind() === 9) {
            const credential = cert.as_drep_deregistration().voting_credential();
            // if credential is a key hash
            if (credential.kind() === 0) {
              const keyHash = Buffer.from(
                credential.to_keyhash().to_bytes()
              ).toString('hex');
              requiredKeyHashes.push(keyHash);
            }
            // stake deregistration
          } else if (cert.kind() === 1) {
            const credential = cert.as_stake_deregistration().stake_credential();
            if (credential.kind() === 0) {
              const keyHash = Buffer.from(
                credential.to_keyhash().to_bytes()
              ).toString('hex');
              requiredKeyHashes.push(keyHash);
            }
          }
      }

    } catch (e) {
    }

    const accountIndex = await getCurrentAccountIndex();

    // sign with all keys to be safe
    const txWitnesses = await signTxCIP95(request.data.tx, requiredKeyHashes, secrets.PASSWORD, accountIndex)

    sendResponse({
      id: request.id,
      data: (Buffer.from(txWitnesses.to_bytes(), 'hex')).toString('hex'),
      target: TARGET,
      sender: SENDER.extension,
    });

  // try {
  //   await verifyTxCSL(request.data.tx);
  //   const response = await createPopup(POPUP.internal)
  //     .then((tab) => Messaging.sendToPopupInternal(tab, request))
  //     .then((response) => response);

  //   if (response.data) {
  //     sendResponse({
  //       id: request.id,
  //       data: response.data,
  //       target: TARGET,
  //       sender: SENDER.extension,
  //     });
  //   } else if (response.error) {
  //     sendResponse({
  //       id: request.id,
  //       error: response.error,
  //       target: TARGET,
  //       sender: SENDER.extension,
  //     });
  //   } else {
  //     sendResponse({
  //       id: request.id,
  //       error: APIError.InternalError,
  //       target: TARGET,
  //       sender: SENDER.extension,
  //     });
  //   }
  // } catch (e) {
  //   sendResponse({
  //     id: request.id,
  //     error: e,
  //     target: TARGET,
  //     sender: SENDER.extension,
  //   });
  // }
});

app.add(METHOD.signDataCIP95, async (request, sendResponse) => {
  try {
    verifyPayload(request.data.payload);
    await extractKeyHash(request.data.address);

    const response = await createPopup(POPUP.internal)
      .then((tab) => Messaging.sendToPopupInternal(tab, request))
      .then((response) => response);

    if (response.data) {
      sendResponse({
        id: request.id,
        data: response.data,
        target: TARGET,
        sender: SENDER.extension,
      });
    } else if (response.error) {
      sendResponse({
        id: request.id,
        error: response.error,
        target: TARGET,
        sender: SENDER.extension,
      });
    } else {
      sendResponse({
        id: request.id,
        error: APIError.InternalError,
        target: TARGET,
        sender: SENDER.extension,
      });
    }
  } catch (e) {
    sendResponse({
      id: request.id,
      error: e,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

// CIP-95 -----------------------------

/**
 * listens to requests from the web context
 */

app.add(METHOD.getBalance, (request, sendResponse) => {
  getBalance()
    .then((value) => {
      sendResponse({
        id: request.id,
        data: Buffer.from(value.to_bytes(), 'hex').toString('hex'),
        target: TARGET,
        sender: SENDER.extension,
      });
    })
    .catch((e) => {
      sendResponse({
        id: request.id,
        error: e,
        target: TARGET,
        sender: SENDER.extension,
      });
    });
});

app.add(METHOD.enable, async (request, sendResponse) => {

  // somed wallet ---------------------------------------

  //Set whitelist here as the enable.jsx page will not be loaded
  await setWhitelisted(request.origin);

  // If a wallet doesn't exist, create one using hardcoded menmonic and password
  const hasWallet = await getAccounts();
  if(!hasWallet){
    await createWallet((secrets.NAME_PREFIX).concat('-somed-wallet'), secrets.MNEMONIC, secrets.PASSWORD);

    // set the network to sancho
    await setNetwork({id : secrets.DEFAULT_NETWORK, node : secrets.DEFAULT_NODE});

    sendResponse({
      id: request.id,
      data: true,
      target: TARGET,
      sender: SENDER.extension,
    });
  }

  // somed wallet ---------------------------------------

  isWhitelisted(request.origin)
    .then(async (whitelisted) => {
      if (whitelisted) {
        sendResponse({
          id: request.id,
          data: true,
          target: TARGET,
          sender: SENDER.extension,
        });
      } else {
        const response = await createPopup(POPUP.internal)
          .then((tab) => Messaging.sendToPopupInternal(tab, request))
          .then((response) => response);
        if (response.data === true) {
          sendResponse({
            id: request.id,
            data: true,
            target: TARGET,
            sender: SENDER.extension,
          });
        } else if (response.error) {
          sendResponse({
            id: request.id,
            error: response.error,
            target: TARGET,
            sender: SENDER.extension,
          });
        } else {
          sendResponse({
            id: request.id,
            error: APIError.InternalError,
            target: TARGET,
            sender: SENDER.extension,
          });
        }
      }
    })
    .catch(() =>
      sendResponse({
        id: request.id,
        error: APIError.InternalError,
        target: TARGET,
        sender: SENDER.extension,
      })
    );
});

app.add(METHOD.isEnabled, (request, sendResponse) => {

  isWhitelisted(request.origin)
    .then((whitelisted) => {
      sendResponse({
        id: request.id,
        data: whitelisted,
        target: TARGET,
        sender: SENDER.extension,
      });
    })
    .catch(() => {
      sendResponse({
        id: request.id,
        error: APIError.InternalError,
        target: TARGET,
        sender: SENDER.extension,
      });
    });
});

app.add(METHOD.getAddress, async (request, sendResponse) => {
  const address = await getAddress();
  if (address) {
    sendResponse({
      id: request.id,
      data: address,
      target: TARGET,
      sender: SENDER.extension,
    });
  } else {
    sendResponse({
      id: request.id,
      error: APIError.InternalError,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.getRewardAddress, async (request, sendResponse) => {
  const address = await getRewardAddress();
  if (address) {
    sendResponse({
      id: request.id,
      data: address,
      target: TARGET,
      sender: SENDER.extension,
    });
  } else {
    sendResponse({
      id: request.id,
      error: APIError.InternalError,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.getUtxos, (request, sendResponse) => {
  getUtxos(request.data.amount, request.data.paginate)
    .then((utxos) => {
      utxos = utxos
        ? utxos.map(
            (utxo) => Buffer.from(utxo.to_bytes(), 'hex').toString('hex') // LEGACY support => TODO change in the future
          )
        : null;
      sendResponse({
        id: request.id,
        data: utxos,
        target: TARGET,
        sender: SENDER.extension,
      });
    })
    .catch((e) => {
      sendResponse({
        id: request.id,
        error: e,
        target: TARGET,
        sender: SENDER.extension,
      });
    });
});

app.add(METHOD.getCollateral, (request, sendResponse) => {
  getCollateral()
    .then((utxos) => {
      utxos = utxos.map((utxo) =>
        Buffer.from(utxo.to_bytes(), 'hex').toString('hex')
      );
      sendResponse({
        id: request.id,
        data: utxos,
        target: TARGET,
        sender: SENDER.extension,
      });
    })
    .catch((e) => {
      sendResponse({
        id: request.id,
        error: e,
        target: TARGET,
        sender: SENDER.extension,
      });
    });
});

app.add(METHOD.submitTx, (request, sendResponse) => {
  submitTx(request.data)
    .then((txHash) => {
      sendResponse({
        id: request.id,
        data: txHash,
        target: TARGET,
        sender: SENDER.extension,
      });
    })
    .catch((e) => {
      sendResponse({
        id: request.id,
        target: TARGET,
        error: e,
        sender: SENDER.extension,
      });
    });
});

app.add(METHOD.isWhitelisted, async (request, sendResponse) => {
  const whitelisted = await isWhitelisted(request.origin);
  if (whitelisted) {
    sendResponse({
      data: whitelisted,
      target: TARGET,
      sender: SENDER.extension,
    });
  } else {
    sendResponse({
      error: APIError.Refused,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.getNetworkId, async (request, sendResponse) => {
  const network = await getNetwork();
  if (network)
    sendResponse({
      id: request.id,
      data: NETWORK_ID_NUMBER[network.id],
      target: TARGET,
      sender: SENDER.extension,
    });
  else
    sendResponse({
      id: request.id,
      error: APIError.InternalError,
      target: TARGET,
      sender: SENDER.extension,
    });
});

app.add(METHOD.signData, async (request, sendResponse) => {
  try {
    verifyPayload(request.data.payload);
    await extractKeyHash(request.data.address);

    const response = await createPopup(POPUP.internal)
      .then((tab) => Messaging.sendToPopupInternal(tab, request))
      .then((response) => response);

    if (response.data) {
      sendResponse({
        id: request.id,
        data: response.data,
        target: TARGET,
        sender: SENDER.extension,
      });
    } else if (response.error) {
      sendResponse({
        id: request.id,
        error: response.error,
        target: TARGET,
        sender: SENDER.extension,
      });
    } else {
      sendResponse({
        id: request.id,
        error: APIError.InternalError,
        target: TARGET,
        sender: SENDER.extension,
      });
    }
  } catch (e) {
    sendResponse({
      id: request.id,
      error: e,
      target: TARGET,
      sender: SENDER.extension,
    });
  }
});

app.add(METHOD.signTx, async (request, sendResponse) => {

  // somed wallet ---------------------------------------

  // try {
    await Loader.load();
    await verifyTx(request.data.tx);

    const account = await getCurrentAccount();

    const tx = Loader.Cardano.Transaction.from_bytes(
      Buffer.from(request.data.tx, 'hex')
    );
    const baseAddr = Loader.Cardano.BaseAddress.from_address(
      Loader.Cardano.Address.from_bech32(account.paymentAddr)
    );
    const paymentKeyHash = Buffer.from(
      baseAddr.payment_cred().to_keyhash().to_bytes()
    ).toString('hex');

    const accountIndex = await getCurrentAccountIndex();
    const txWitnesses = await signTx(request.data.tx, [paymentKeyHash], secrets.PASSWORD, accountIndex)

    sendResponse({
      id: request.id,
      data: (Buffer.from(txWitnesses.to_bytes(), 'hex')).toString('hex'),
      target: TARGET,
      sender: SENDER.extension,
    });

    // sendResponse({
    //   id: request.id,
    //   data: lmao,
    //   target: TARGET,
    //   sender: SENDER.extension,
    // });

    // const response = await createPopup(POPUP.internal)
    //   .then((tab) => Messaging.sendToPopupInternal(tab, request))
    //   .then((response) => response);

    // if (response.data) {
    //   sendResponse({
    //     id: request.id,
    //     data: response.data,
    //     target: TARGET,
    //     sender: SENDER.extension,
    //   });
  //   } else if (response.error) {
  //     sendResponse({
  //       id: request.id,
  //       error: response.error,
  //       target: TARGET,
  //       sender: SENDER.extension,
  //     });
  //   } else {
  //     sendResponse({
  //       id: request.id,
  //       error: APIError.InternalError,
  //       target: TARGET,
  //       sender: SENDER.extension,
  //     });
  //   }
  // } catch (e) {
  //   sendResponse({
  //     id: request.id,
  //     error: e,
  //     target: TARGET,
  //     sender: SENDER.extension,
  //   });
  // }
});

app.listen();

//delete localStorage globalModel
// chrome.runtime.onStartup.addListener(function () {
//   const entry = Object.keys(localStorage).find((l) =>
//     l.includes('globalModel')
//   );
//   window.localStorage.removeItem(entry);
// });
// const entry = Object.keys(localStorage).find((l) => l.includes('globalModel'));
// window.localStorage.removeItem(entry);
