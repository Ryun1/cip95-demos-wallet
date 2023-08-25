/**
 * indexInternal is the entry point for the popup windows (e.g. data signing, tx signing)
 */

import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getAccounts } from '../api/extension';
import { Messaging } from '../api/messaging';

import { METHOD, POPUP } from '../config/config';
import Enable from './app/pages/enable';
import NoWallet from './app/pages/noWallet';
import SignData from './app/pages/signData';
import SignTx from './app/pages/signTx';
import Main from './index';

import secrets from 'secrets';
import {createWallet} from '../api/extension';
import Loader from '../api/loader';
import { entropyToMnemonic} from 'bip39';

import { setWhitelisted } from '../api/extension';

const App = () => {
  const controller = Messaging.createInternalController();
  const history = useHistory();
  const [request, setRequest] = React.useState(null);

  const init = async () => {
    const request = await controller.requestData();
    const hasWallet = await getAccounts();
    setRequest(request);

    // Import the mnemonic and password from secrets files
    const mnemonic = secrets.MNEMONIC;
    const password = secrets.PASSWORD;

    // If a wallet doesn't exist, create one
    if(!hasWallet){
      await createWallet("😈", mnemonic, password);
    }

    // If we are enabling the extension, whitelist the connection
    if (request.method === METHOD.enable){
      await setWhitelisted(request.origin);
    }
    // else if (request.method === METHOD.signData) history.push('/signData');
    // else if (request.method === METHOD.signTx) history.push('/signTx');
    // else if (request.method === METHOD.signTx){
    //   const account = await getCurrentAccount();

    //   const baseAddr = Loader.Cardano.BaseAddress.from_address(
    //     Loader.Cardano.Address.from_bech32(account.paymentAddr)
    //   );
    //   const paymentKeyHash = Buffer.from(
    //     baseAddr.payment_cred().to_keyhash().to_bytes()
    //   ).toString('hex');

    // controller.returnData = await signTx(request.data.tx, paymentKeyHash, "ryan",
    //   account.index,
    //   request.data.partialSign
    // );

    // };
  };

  React.useEffect(() => {
    init();
  }, []);

  return !request ? (
    <Box
      height="full"
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color="teal" speed="0.5s" />
    </Box>
  ) : (
    <div style={{ overflowX: 'hidden' }}>
      <Switch>
        <Route exact path="/signData">
          <SignData request={request} controller={controller} />
        </Route>
        <Route exact path="/signTx">
          <SignTx request={request} controller={controller} />
        </Route>
        {/* <Route exact path="/enable">
          <Enable request={request} controller={controller} />
        </Route> */}
        <Route exact path="/noWallet">
          <NoWallet />
        </Route>
      </Switch>
    </div>
  );
};

render(
  <Main>
    <Router>
      <App />
    </Router>
  </Main>,
  window.document.querySelector(`#${POPUP.internal}`)
);

if (module.hot) module.hot.accept();
