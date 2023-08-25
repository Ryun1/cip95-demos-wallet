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
  // CIP-95
  getDRepKey,
  getStakeKey,
  // somed
  setWhitelisted,
  getCurrentAccount,
  getCurrentAccountIndex,
  signTx,
  getPassword,
} from '../../api/extension';
import { Messaging } from '../../api/messaging';
import {
  APIError,
  METHOD,
  NETWORKD_ID_NUMBER,
  POPUP,
  SENDER,
  TARGET,
} from '../../config/config';

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

app.add(METHOD.getStakeKey, async (request, sendResponse) => {
  const key = await getStakeKey();
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

  await sendResponse({
    id: request.id,
    data: true,
    target: TARGET,
    sender: SENDER.extension,
  });
  // isWhitelisted(request.origin)
  //   .then(async (whitelisted) => {
  //     if (whitelisted) {
  //       sendResponse({
  //         id: request.id,
  //         data: true,
  //         target: TARGET,
  //         sender: SENDER.extension,
  //       });
  //     } else {
  //       const response = await createPopup(POPUP.internal)
  //         .then((tab) => Messaging.sendToPopupInternal(tab, request))
  //         .then((response) => response);
  //       if (response.data === true) {
  //         sendResponse({
  //           id: request.id,
  //           data: true,
  //           target: TARGET,
  //           sender: SENDER.extension,
  //         });
  //       } else if (response.error) {
  //         sendResponse({
  //           id: request.id,
  //           error: response.error,
  //           target: TARGET,
  //           sender: SENDER.extension,
  //         });
  //       } else {
  //         sendResponse({
  //           id: request.id,
  //           error: APIError.InternalError,
  //           target: TARGET,
  //           sender: SENDER.extension,
  //         });
  //       }
  //     }
  //   })
  //   .catch(() =>
  //     sendResponse({
  //       id: request.id,
  //       error: APIError.InternalError,
  //       target: TARGET,
  //       sender: SENDER.extension,
  //     })
  //   );
});

app.add(METHOD.isEnabled, (request, sendResponse) => {

  setWhitelisted(request.origin);

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
  // const whitelisted = await isWhitelisted(request.origin);
  // if (whitelisted) {
  //   sendResponse({
  //     data: whitelisted,
  //     target: TARGET,
  //     sender: SENDER.extension,
  //   });
  // } else {
  //   sendResponse({
  //     error: APIError.Refused,
  //     target: TARGET,
  //     sender: SENDER.extension,
  //   });
  // }
  sendResponse({
    data: true,
    target: TARGET,
    sender: SENDER.extension,
  });

});

app.add(METHOD.getNetworkId, async (request, sendResponse) => {
  const network = await getNetwork();
  if (network)
    sendResponse({
      id: request.id,
      data: NETWORKD_ID_NUMBER[network.id],
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
    const password = await getPassword();
    const witnessSet = await signTx(request.data.tx, [paymentKeyHash], password, accountIndex)

    sendResponse({
      id: request.id,
      data: (Buffer.from(witnessSet.to_bytes(), 'hex')).toString('hex'),
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
