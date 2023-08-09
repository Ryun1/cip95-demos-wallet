(() => {
  var e = {
      './node_modules/@trezor/blockchain-link/lib/constants/errors.js': (
        e,
        t
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CustomError = void 0);
        const n = 'blockchain_link/',
          r = {
            worker_not_found: 'Worker not found',
            worker_invalid: 'Invalid worker object',
            worker_timeout: 'Worker timeout',
            worker_unknown_request: 'Unknown message type:',
            worker_runtime: void 0,
            invalid_param: 'Invalid parameter:',
            websocket_not_initialized: 'WebSocket not initialized',
            websocket_no_url: 'Cannot connect because no server was specified',
            websocket_timeout: 'Websocket timeout',
            websocket_error_message: void 0,
            websocket_runtime_error: void 0,
          };
        class s extends Error {
          constructor(e, t = '') {
            if (
              (super(t),
              (this.message = ''),
              (this.message = t),
              'string' == typeof e)
            ) {
              const s =
                0 === e.indexOf(n) ? e.substring(n.length, e.length) : e;
              this.code = `${n}${s}`;
              const i = r[s];
              'string' == typeof i &&
                ('' === this.message
                  ? (this.message = i)
                  : 0 === t.indexOf('+') &&
                    (this.message = `${i} ${t.substr(1, t.length)}`));
            }
            ('string' == typeof this.message && '' !== this.message) ||
              (this.message = 'Message not set');
          }
        }
        t.CustomError = s;
      },
      './node_modules/@trezor/blockchain-link/lib/constants/index.js': (
        e,
        t,
        n
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.NETWORKS = t.RESPONSES = t.MESSAGES = void 0);
        const r = n(
          './node_modules/@trezor/blockchain-link/lib/constants/messages.js'
        );
        t.MESSAGES = r;
        const s = n(
          './node_modules/@trezor/blockchain-link/lib/constants/responses.js'
        );
        (t.RESPONSES = s),
          (t.NETWORKS = {
            RIPPLE: 'ripple',
            BLOCKBOOK: 'blockbook',
            BLOCKFROST: 'blockfrost',
          });
      },
      './node_modules/@trezor/blockchain-link/lib/constants/messages.js': (
        e,
        t
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TERMINATE =
            t.PUSH_TRANSACTION =
            t.UNSUBSCRIBE =
            t.SUBSCRIBE =
            t.ESTIMATE_FEE =
            t.GET_TRANSACTION =
            t.GET_ACCOUNT_UTXO =
            t.GET_ACCOUNT_INFO =
            t.GET_BLOCK_HASH =
            t.GET_FIAT_RATES_TICKERS_LIST =
            t.GET_ACCOUNT_BALANCE_HISTORY =
            t.GET_FIAT_RATES_FOR_TIMESTAMPS =
            t.GET_CURRENT_FIAT_RATES =
            t.GET_INFO =
            t.DISCONNECT =
            t.CONNECT =
            t.INIT =
            t.HANDSHAKE =
              void 0),
          (t.HANDSHAKE = 'm_handshake'),
          (t.INIT = 'm_init'),
          (t.CONNECT = 'm_connect'),
          (t.DISCONNECT = 'm_disconnect'),
          (t.GET_INFO = 'm_get_info'),
          (t.GET_CURRENT_FIAT_RATES = 'm_get_current_fiat_rates'),
          (t.GET_FIAT_RATES_FOR_TIMESTAMPS = 'm_get_fiat_rates_for_timestamps'),
          (t.GET_ACCOUNT_BALANCE_HISTORY = 'm_get_account_balance_history'),
          (t.GET_FIAT_RATES_TICKERS_LIST = 'm_get_fiat_rates_tickers_list'),
          (t.GET_BLOCK_HASH = 'm_get_block_hash'),
          (t.GET_ACCOUNT_INFO = 'm_get_account_info'),
          (t.GET_ACCOUNT_UTXO = 'm_get_account_utxo'),
          (t.GET_TRANSACTION = 'm_get_transaction'),
          (t.ESTIMATE_FEE = 'm_estimate_fee'),
          (t.SUBSCRIBE = 'm_subscribe'),
          (t.UNSUBSCRIBE = 'm_unsubscribe'),
          (t.PUSH_TRANSACTION = 'm_push_tx'),
          (t.TERMINATE = 'terminate');
      },
      './node_modules/@trezor/blockchain-link/lib/constants/responses.js': (
        e,
        t
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.NOTIFICATION =
            t.DISCONNECTED =
            t.CONNECTED =
            t.PUSH_TRANSACTION =
            t.UNSUBSCRIBE =
            t.SUBSCRIBE =
            t.ESTIMATE_FEE =
            t.GET_TRANSACTION =
            t.GET_ACCOUNT_BALANCE_HISTORY =
            t.GET_ACCOUNT_UTXO =
            t.GET_ACCOUNT_INFO =
            t.GET_FIAT_RATES_TICKERS_LIST =
            t.GET_FIAT_RATES_FOR_TIMESTAMPS =
            t.GET_CURRENT_FIAT_RATES =
            t.GET_BLOCK_HASH =
            t.GET_INFO =
            t.CONNECT =
            t.ERROR =
              void 0),
          (t.ERROR = 'r_error'),
          (t.CONNECT = 'r_connect'),
          (t.GET_INFO = 'r_info'),
          (t.GET_BLOCK_HASH = 'r_get_block_hash'),
          (t.GET_CURRENT_FIAT_RATES = 'r_get_current_fiat_rates'),
          (t.GET_FIAT_RATES_FOR_TIMESTAMPS = 'r_get_fiat_rates_for_timestamps'),
          (t.GET_FIAT_RATES_TICKERS_LIST = 'r_GET_FIAT_RATES_TICKERS_LIST'),
          (t.GET_ACCOUNT_INFO = 'r_account_info'),
          (t.GET_ACCOUNT_UTXO = 'r_get_account_utxo'),
          (t.GET_ACCOUNT_BALANCE_HISTORY = 'r_get_account_balance_history'),
          (t.GET_TRANSACTION = 'r_get_transaction'),
          (t.ESTIMATE_FEE = 'r_estimate_fee'),
          (t.SUBSCRIBE = 'r_subscribe'),
          (t.UNSUBSCRIBE = 'r_unsubscribe'),
          (t.PUSH_TRANSACTION = 'r_push_tx'),
          (t.CONNECTED = 'r_connected'),
          (t.DISCONNECTED = 'r_disconnected'),
          (t.NOTIFICATION = 'r_notification');
      },
      './node_modules/@trezor/blockchain-link/lib/utils/socks-proxy-agent.js': (
        e
      ) => {
        'use strict';
        e.exports = (e) => ({});
      },
      './node_modules/@trezor/blockchain-link/lib/utils/ws.js': (e, t, n) => {
        'use strict';
        const r = n('./node_modules/events/events.js');
        class s extends r.EventEmitter {
          constructor(e, t, n) {
            super(),
              this.setMaxListeners(1 / 0),
              (this._ws = new WebSocket(e)),
              (this._ws.onclose = () => {
                this.emit('close');
              }),
              (this._ws.onopen = () => {
                this.emit('open');
              }),
              (this._ws.onerror = (e) => {
                this.emit('error', e);
              }),
              (this._ws.onmessage = (e) => {
                this.emit('message', e.data);
              });
          }
          close() {
            1 === this.readyState && this._ws.close();
          }
          send(e) {
            this._ws.send(e);
          }
          get readyState() {
            return this._ws.readyState;
          }
        }
        (s.CONNECTING = 0),
          (s.OPEN = 1),
          (s.CLOSING = 2),
          (s.CLOSED = 3),
          (e.exports = s);
      },
      './node_modules/@trezor/blockchain-link/lib/workers/base.js': (
        e,
        t,
        n
      ) => {
        'use strict';
        var r = n('./node_modules/es6-promise/dist/es6-promise.js').Promise;
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.BaseWorker = t.CONTEXT = void 0);
        const s = n(
            './node_modules/@trezor/blockchain-link/lib/utils/socks-proxy-agent.js'
          ),
          i = n(
            './node_modules/@trezor/blockchain-link/lib/constants/errors.js'
          ),
          o = n('./node_modules/@trezor/blockchain-link/lib/workers/state.js'),
          c = n(
            './node_modules/@trezor/blockchain-link/lib/constants/index.js'
          );
        t.CONTEXT =
          ('undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope) ||
          'undefined' != typeof importScripts
            ? 'worker'
            : 'main';
        t.BaseWorker = class {
          constructor() {
            (this.settings = {}),
              (this.endpoints = []),
              'worker' === t.CONTEXT
                ? (this.post = (e) => self.postMessage(e))
                : (this.post = (e) => this.onmessage({ data: e })),
              (this.state = new o.WorkerState()),
              setTimeout(() => {
                this.post({ id: -1, type: c.MESSAGES.HANDSHAKE });
              }, 10);
          }
          debug(...e) {
            if (!this.settings.debug) return;
            const t = `[Worker "${this.settings.name}"]:`,
              n = e[0];
            'warn' === n || 'error' === n
              ? console[n](t, ...e.slice(1))
              : console.log(t, ...e);
          }
          cleanup() {
            (this.api = void 0), (this.endpoints = []), this.state.cleanup();
          }
          connect() {
            return r.reject();
          }
          validateEndpoints() {
            const { server: e } = this.settings;
            if (!e || !Array.isArray(e) || e.length < 1)
              throw new i.CustomError('connect', 'Endpoint not set');
            this.endpoints.length < 1 &&
              (this.endpoints = ((e) => {
                for (let t = e.length - 1; t > 0; t--) {
                  const n = Math.floor(Math.random() * (t + 1));
                  [e[t], e[n]] = [e[n], e[t]];
                }
                return e;
              })(e.slice(0))),
              this.proxyAgent &&
                (this.proxyAgent.protocol = /^(https|wss):/.test(
                  this.endpoints[0]
                )
                  ? 'https:'
                  : 'http:');
          }
          disconnect() {}
          async messageHandler(e) {
            if (!e.data) return !0;
            const { data: t } = e,
              { id: n } = t;
            return (
              this.debug('onmessage', t),
              t.type === c.MESSAGES.HANDSHAKE
                ? ((this.settings = t.settings),
                  (this.proxyAgent = t.settings.proxy
                    ? s(t.settings.proxy)
                    : void 0),
                  !0)
                : t.type === c.MESSAGES.CONNECT
                ? (await this.connect(),
                  this.post({ id: n, type: c.RESPONSES.CONNECT, payload: !0 }),
                  !0)
                : t.type === c.MESSAGES.DISCONNECT
                ? (this.disconnect(),
                  this.post({
                    id: n,
                    type: c.RESPONSES.DISCONNECTED,
                    payload: !0,
                  }),
                  !0)
                : t.type === c.MESSAGES.TERMINATE
                ? (this.disconnect(), this.cleanup(), !0)
                : void 0
            );
          }
          errorResponse(e, t) {
            const n = { code: '', message: '' };
            t instanceof Error &&
              ((n.message = t.message),
              (n.code = t instanceof i.CustomError && t.code ? t.code : '')),
              this.post({ id: e, type: c.RESPONSES.ERROR, payload: n });
          }
          postMessage(e) {
            this.messageHandler({ data: e });
          }
          onmessage(e) {}
          onmessageerror(e) {}
          onerror(e) {}
          terminate() {
            this.postMessage({ id: -1, type: c.MESSAGES.TERMINATE });
          }
        };
      },
      './node_modules/@trezor/blockchain-link/lib/workers/blockbook/utils.js': (
        e,
        t,
        n
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.transformAccountUtxo =
            t.transformAccountInfo =
            t.transformAddresses =
            t.transformTokenInfo =
            t.transformTransaction =
            t.filterTokenTransfers =
            t.transformServerInfo =
              void 0);
        const r = n('./node_modules/bignumber.js/bignumber.js'),
          s = n('./node_modules/@trezor/blockchain-link/lib/workers/utils.js');
        t.transformServerInfo = (e) => ({
          name: e.name,
          shortcut: e.shortcut,
          testnet: e.testnet,
          version: e.version,
          decimals: e.decimals,
          blockHeight: e.bestHeight,
          blockHash: e.bestHash,
        });
        t.filterTokenTransfers = (e, t) => {
          if (
            ('string' == typeof e && (e = [e]),
            !(e && Array.isArray(e) && t && Array.isArray(t)))
          )
            return [];
          const n = e.map((e) =>
            'string' == typeof e
              ? e
              : 'object' == typeof e && 'string' == typeof e.address
              ? e.address
              : null
          );
          return t
            .filter(
              (e) =>
                !(!e || 'object' != typeof e) &&
                ((e.from && n.indexOf(e.from) >= 0) ||
                  (e.to && n.indexOf(e.to) >= 0))
            )
            .map((e) => {
              const t = e.from && n.indexOf(e.from) >= 0,
                r = e.to && n.indexOf(e.to) >= 0;
              let s = 'unknown';
              return (
                t && r ? (s = 'self') : (t && (s = 'sent'), r && (s = 'recv')),
                {
                  type: s,
                  name: e.name,
                  symbol: e.symbol,
                  address: e.token,
                  decimals: e.decimals || 0,
                  amount: e.value,
                  from: e.from,
                  to: e.to,
                }
              );
            });
        };
        t.transformTransaction = (e, n, i) => {
          var o, c;
          const a = n ? n.change.concat(n.used, n.unused) : [e],
            u = Array.isArray(i.vin) ? i.vin.length : 0,
            l = Array.isArray(i.vout) ? i.vout.length : 0,
            f = (0, s.filterTargets)(a, i.vin),
            d = (0, s.filterTargets)(a, i.vout),
            h = n ? (0, s.filterTargets)(n.change, i.vout) : [],
            p = (0, t.filterTokenTransfers)(a, i.tokenTransfers);
          let m,
            g = [],
            _ = i.value,
            b = i.value;
          const v = (0, s.sumVinVout)(u ? i.vin : []),
            y = (0, s.sumVinVout)(l ? i.vout : []);
          if (0 === f.length && 0 === d.length && 0 === p.length) m = 'unknown';
          else if (u > 0 && l > 0 && f.length === u && d.length === l)
            (m = 'self'),
              (g = i.vout.filter((e) => h.indexOf(e) < 0)),
              g.length < 1 && (g = i.vout),
              (_ = i.fees),
              (b = _);
          else if (0 === f.length && (d.length > 0 || p.length > 0))
            (m = 'recv'),
              (_ = '0'),
              d.length > 0 && ((g = d), (_ = (0, s.sumVinVout)(d, _)), (b = _));
          else if (
            ((m = 'sent'),
            !l ||
              (p.length && '0' === y && '0' === v) ||
              (g = i.vout.filter((e) => h.indexOf(e) < 0)),
            i.ethereumSpecific)
          )
            (_ = i.value),
              (b = new r.default(_)
                .plus(null !== (o = i.fees) && void 0 !== o ? o : '0')
                .toString());
          else if (l) {
            const e = (0, s.sumVinVout)(f, '0');
            (b = (0, s.sumVinVout)(d, e, 'reduce')),
              (_ = new r.default(b)
                .minus(null !== (c = i.fees) && void 0 !== c ? c : '0')
                .toString());
          }
          let E;
          u &&
            i.vin.forEach((e) => {
              'number' == typeof e.sequence &&
                e.sequence < 4294967294 &&
                (E = !0);
            });
          let T = i.fees;
          return (
            i.ethereumSpecific &&
              !i.ethereumSpecific.gasUsed &&
              (T = new r.default(i.ethereumSpecific.gasPrice)
                .times(i.ethereumSpecific.gasLimit)
                .toString()),
            {
              type: m,
              txid: i.txid,
              blockTime: i.blockTime,
              blockHeight: i.blockHeight,
              blockHash: i.blockHash,
              lockTime: i.lockTime,
              amount: _,
              fee: T,
              totalSpent: b,
              targets: g
                .filter((e) => 'object' == typeof e)
                .map((e) => (0, s.transformTarget)(e, d)),
              tokens: p,
              rbf: E,
              ethereumSpecific: i.ethereumSpecific,
              details: {
                vin: i.vin,
                vout: i.vout,
                size: 'string' == typeof i.hex ? i.hex.length / 2 : 0,
                totalInput: v ? v.toString() : '0',
                totalOutput: y ? y.toString() : '0',
              },
            }
          );
        };
        t.transformTokenInfo = (e) => {
          if (!e || !Array.isArray(e)) return;
          const t = e.reduce(
            (e, t) =>
              'ERC20' !== t.type
                ? e
                : e.concat([
                    {
                      type: t.type,
                      name: t.name,
                      symbol: t.symbol,
                      address: t.contract,
                      balance: t.balance,
                      decimals: t.decimals || 0,
                    },
                  ]),
            []
          );
          return t.length > 0 ? t : void 0;
        };
        t.transformAddresses = (e) => {
          if (!e || !Array.isArray(e)) return;
          const t = e.reduce(
            (e, t) =>
              'XPUBAddress' !== t.type
                ? e
                : e.concat([
                    {
                      address: t.name,
                      path: t.path,
                      transfers: t.transfers,
                      balance: t.balance,
                      sent: t.totalSent,
                      received: t.totalReceived,
                    },
                  ]),
            []
          );
          if (t.length < 1) return;
          const n = t.filter((e) => '1' === e.path.split('/')[4]),
            r = t.filter((e) => n.indexOf(e) < 0);
          return {
            change: n,
            used: r.filter((e) => e.transfers > 0),
            unused: r.filter((e) => 0 === e.transfers),
          };
        };
        t.transformAccountInfo = (e) => {
          let n;
          'number' == typeof e.page &&
            (n = { index: e.page, size: e.itemsOnPage, total: e.totalPages });
          let s = {};
          if (
            ('string' == typeof e.nonce && (s.nonce = e.nonce), e.erc20Contract)
          ) {
            const n = (0, t.transformTokenInfo)([
              Object.assign(Object.assign({}, e.erc20Contract), {
                type: e.erc20Contract.type || 'ERC20',
              }),
            ]);
            if (n) {
              const [e] = n;
              s.erc20Contract = e;
            }
          }
          Object.keys(s).length < 1 && (s = void 0);
          const i = e.address,
            o = (0, t.transformAddresses)(e.tokens),
            c = (0, t.transformTokenInfo)(e.tokens),
            a = new r.default(e.unconfirmedBalance),
            u =
              a.isNaN() || a.isZero()
                ? e.balance
                : a.plus(e.balance).toString(),
            l =
              0 === e.txs &&
              0 === e.unconfirmedTxs &&
              new r.default(u).isZero();
          return {
            descriptor: i,
            balance: e.balance,
            availableBalance: u,
            empty: l,
            tokens: c,
            addresses: o,
            history: {
              total: e.txs,
              tokens:
                'number' == typeof e.nonTokenTxs
                  ? e.txs - e.nonTokenTxs
                  : void 0,
              unconfirmed: e.unconfirmedTxs,
              transactions: e.transactions
                ? e.transactions.map((e) =>
                    (0, t.transformTransaction)(i, o, e)
                  )
                : void 0,
            },
            misc: s,
            page: n,
          };
        };
        t.transformAccountUtxo = (e) =>
          e.map((e) => ({
            txid: e.txid,
            vout: e.vout,
            amount: e.value,
            blockHeight: e.height,
            address: e.address,
            path: e.path,
            confirmations: e.confirmations,
            coinbase: e.coinbase,
          }));
      },
      './node_modules/@trezor/blockchain-link/lib/workers/blockbook/websocket.js':
        (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.BlockbookAPI = void 0);
          const r = n('./node_modules/@trezor/blockchain-link/lib/utils/ws.js'),
            s = n('./node_modules/events/events.js'),
            i = n('./node_modules/@trezor/utils/lib/createDeferred.js'),
            o = n(
              './node_modules/@trezor/blockchain-link/lib/constants/errors.js'
            ),
            c = new o.CustomError('websocket_not_initialized');
          class a extends s.EventEmitter {
            constructor(e) {
              super(),
                (this.messageID = 0),
                (this.messages = []),
                (this.subscriptions = []),
                (this.send = (e, t = {}) => {
                  const { ws: n } = this;
                  if (!n) throw c;
                  const r = this.messageID.toString(),
                    s = (0, i.createDeferred)(r),
                    o = { id: r, method: e, params: t };
                  return (
                    this.messageID++,
                    this.messages.push(s),
                    this.setConnectionTimeout(),
                    this.setPingTimeout(),
                    n.send(JSON.stringify(o)),
                    s.promise
                  );
                }),
                this.setMaxListeners(1 / 0),
                (this.options = e);
            }
            setConnectionTimeout() {
              this.clearConnectionTimeout(),
                (this.connectionTimeout = setTimeout(
                  this.onTimeout.bind(this),
                  this.options.timeout || 2e4
                ));
            }
            clearConnectionTimeout() {
              this.connectionTimeout &&
                (clearTimeout(this.connectionTimeout),
                (this.connectionTimeout = void 0));
            }
            setPingTimeout() {
              this.pingTimeout && clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(
                  this.onPing.bind(this),
                  this.options.pingTimeout || 5e4
                ));
            }
            onTimeout() {
              const { ws: e } = this;
              if (e)
                if (e.listenerCount('open') > 0) {
                  e.emit('error', 'Websocket timeout');
                  try {
                    e.close();
                  } catch (e) {}
                } else
                  this.messages.forEach((e) =>
                    e.reject(new o.CustomError('websocket_timeout'))
                  ),
                    e.close();
            }
            async onPing() {
              if (this.ws && this.isConnected())
                if (this.subscriptions.length > 0 || this.options.keepAlive)
                  await this.getBlockHash(0);
                else
                  try {
                    this.ws.close();
                  } catch (e) {}
            }
            onError() {
              this.dispose();
            }
            onmessage(e) {
              try {
                const t = JSON.parse(e),
                  { id: n, data: r } = t,
                  s = this.messages.find((e) => e.id === n);
                if (s)
                  r.error
                    ? s.reject(
                        new o.CustomError(
                          'websocket_error_message',
                          r.error.message
                        )
                      )
                    : s.resolve(r),
                    this.messages.splice(this.messages.indexOf(s), 1);
                else {
                  const e = this.subscriptions.find((e) => e && e.id === n);
                  e && e.callback(r);
                }
              } catch (e) {}
              0 === this.messages.length && this.clearConnectionTimeout(),
                this.setPingTimeout();
            }
            connect() {
              let { url: e } = this.options;
              if ('string' != typeof e)
                throw new o.CustomError('websocket_no_url');
              if (
                (e.startsWith('https') && (e = e.replace('https', 'wss')),
                e.startsWith('http') && (e = e.replace('http', 'ws')),
                !e.endsWith('/websocket'))
              ) {
                const t = e.endsWith('/') ? 'websocket' : '/websocket';
                e += t;
              }
              this.setConnectionTimeout();
              const t = (0, i.createDeferred)(-1),
                n = new r(e, {
                  agent: this.options.agent,
                  headers: {
                    Origin: 'https://node.trezor.io',
                    'User-Agent': 'Trezor Suite',
                  },
                });
              return (
                'function' == typeof n.setMaxListeners &&
                  n.setMaxListeners(1 / 0),
                n.once('error', (e) => {
                  this.dispose(),
                    t.reject(
                      new o.CustomError('websocket_runtime_error', e.message)
                    );
                }),
                n.on('open', () => {
                  this.init(), t.resolve();
                }),
                (this.ws = n),
                t.promise
              );
            }
            init() {
              const { ws: e } = this;
              if (!e || !this.isConnected())
                throw Error('Blockbook websocket init cannot be called');
              this.clearConnectionTimeout(),
                e.removeAllListeners(),
                e.on('error', this.onError.bind(this)),
                e.on('message', this.onmessage.bind(this)),
                e.on('close', () => {
                  this.emit('disconnected'), this.dispose();
                });
            }
            disconnect() {
              this.ws && this.ws.close();
            }
            isConnected() {
              const { ws: e } = this;
              return e && e.readyState === r.OPEN;
            }
            getServerInfo() {
              return this.send('getInfo');
            }
            getBlockHash(e) {
              return this.send('getBlockHash', { height: e });
            }
            getAccountInfo(e) {
              return this.send('getAccountInfo', e);
            }
            getAccountUtxo(e) {
              return this.send('getAccountUtxo', { descriptor: e });
            }
            getTransaction(e) {
              return this.send('getTransaction', { txid: e });
            }
            pushTransaction(e) {
              return this.send('sendTransaction', { hex: e });
            }
            estimateFee(e) {
              return this.send('estimateFee', e);
            }
            getCurrentFiatRates(e) {
              return this.send('getCurrentFiatRates', e);
            }
            getAccountBalanceHistory(e) {
              return this.send('getBalanceHistory', e);
            }
            getFiatRatesForTimestamps(e) {
              return this.send('getFiatRatesForTimestamps', e);
            }
            getFiatRatesTickersList(e) {
              return this.send('getFiatRatesTickersList', e);
            }
            subscribeAddresses(e) {
              const t = this.subscriptions.findIndex(
                (e) => 'notification' === e.type
              );
              t >= 0 && this.subscriptions.splice(t, 1);
              const n = this.messageID.toString();
              return (
                this.subscriptions.push({
                  id: n,
                  type: 'notification',
                  callback: (e) => {
                    this.emit('notification', e);
                  },
                }),
                this.send('subscribeAddresses', { addresses: e })
              );
            }
            unsubscribeAddresses() {
              const e = this.subscriptions.findIndex(
                (e) => 'notification' === e.type
              );
              return e >= 0
                ? (this.subscriptions.splice(e, 1),
                  this.send('unsubscribeAddresses'))
                : { subscribed: !1 };
            }
            subscribeBlock() {
              const e = this.subscriptions.findIndex((e) => 'block' === e.type);
              e >= 0 && this.subscriptions.splice(e, 1);
              const t = this.messageID.toString();
              return (
                this.subscriptions.push({
                  id: t,
                  type: 'block',
                  callback: (e) => {
                    this.emit('block', e);
                  },
                }),
                this.send('subscribeNewBlock')
              );
            }
            unsubscribeBlock() {
              const e = this.subscriptions.findIndex((e) => 'block' === e.type);
              return e >= 0
                ? (this.subscriptions.splice(e, 1),
                  this.send('unsubscribeNewBlock'))
                : { subscribed: !1 };
            }
            subscribeFiatRates(e) {
              const t = this.subscriptions.findIndex(
                (e) => 'fiatRates' === e.type
              );
              t >= 0 && this.subscriptions.splice(t, 1);
              const n = this.messageID.toString();
              return (
                this.subscriptions.push({
                  id: n,
                  type: 'fiatRates',
                  callback: (e) => {
                    this.emit('fiatRates', e);
                  },
                }),
                this.send('subscribeFiatRates', { currency: e })
              );
            }
            unsubscribeFiatRates() {
              const e = this.subscriptions.findIndex(
                (e) => 'fiatRates' === e.type
              );
              return e >= 0
                ? (this.subscriptions.splice(e, 1),
                  this.send('unsubscribeFiatRates'))
                : { subscribed: !1 };
            }
            dispose() {
              this.pingTimeout && clearTimeout(this.pingTimeout),
                this.connectionTimeout && clearTimeout(this.connectionTimeout);
              const { ws: e } = this;
              this.isConnected() && this.disconnect(),
                e && e.removeAllListeners(),
                this.removeAllListeners();
            }
          }
          t.BlockbookAPI = a;
        },
      './node_modules/@trezor/blockchain-link/lib/workers/state.js': (
        e,
        t,
        n
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.WorkerState = void 0);
        const r = n(
          './node_modules/@trezor/blockchain-link/lib/constants/errors.js'
        );
        t.WorkerState = class {
          constructor() {
            (this.addresses = []),
              (this.accounts = []),
              (this.subscription = {});
          }
          validateAddresses(e) {
            if (!Array.isArray(e))
              throw new r.CustomError('invalid_param', '+addresses');
            const t = [];
            return e.filter(
              (e) =>
                'string' == typeof e && !(t.indexOf(e) >= 0) && (t.push(e), !0)
            );
          }
          addAddresses(e) {
            const t = this.validateAddresses(e).filter(
              (e) => this.addresses.indexOf(e) < 0
            );
            return (this.addresses = this.addresses.concat(t)), t;
          }
          getAddresses() {
            return this.addresses;
          }
          removeAddresses(e) {
            const t = this.validateAddresses(e);
            return (
              (this.addresses = this.addresses.filter((e) => t.indexOf(e) < 0)),
              this.addresses
            );
          }
          validateAccounts(e) {
            if (!Array.isArray(e))
              throw new r.CustomError('invalid_param', '+accounts');
            const t = [];
            return e.filter(
              (e) =>
                !(
                  !e ||
                  'object' != typeof e ||
                  'string' != typeof e.descriptor
                ) &&
                !(t.indexOf(e.descriptor) >= 0) &&
                (t.push(e.descriptor), !0)
            );
          }
          getAccountAddresses(e) {
            if (e.addresses) {
              const { change: t, used: n, unused: r } = e.addresses;
              return t.concat(n, r).map((e) => e.address);
            }
            return [e.descriptor];
          }
          addAccounts(e) {
            const t = this.validateAccounts(e),
              n = this.accounts.filter(
                (e) => !t.find((t) => t.descriptor === e.descriptor)
              );
            this.accounts = n.concat(t);
            const r = this.accounts.reduce(
              (e, t) => e.concat(this.getAccountAddresses(t)),
              []
            );
            return this.addAddresses(r), t;
          }
          getAccount(e) {
            return this.accounts.find((t) => {
              if (t.descriptor === e) return !0;
              if (t.addresses) {
                const { change: n, used: r, unused: s } = t.addresses;
                if (n.find((t) => t.address === e)) return !0;
                if (r.find((t) => t.address === e)) return !0;
                if (s.find((t) => t.address === e)) return !0;
              }
              return !1;
            });
          }
          getAccounts() {
            return this.accounts;
          }
          removeAccounts(e) {
            const t = this.validateAccounts(e),
              n = this.accounts.filter((e) =>
                t.find((t) => t.descriptor === e.descriptor)
              ),
              r = n.reduce((e, t) => e.concat(this.getAccountAddresses(t)), []);
            return (
              (this.accounts = this.accounts.filter((e) => n.indexOf(e) < 0)),
              this.removeAddresses(r),
              this.accounts
            );
          }
          addSubscription(e) {
            this.subscription[e] = !0;
          }
          getSubscription(e) {
            return this.subscription[e];
          }
          hasSubscriptions() {
            return Object.keys(this.subscription).length > 0;
          }
          removeSubscription(e) {
            delete this.subscription[e];
          }
          clearSubscriptions() {
            Object.keys(this.subscription).forEach((e) => {
              delete this.subscription[e];
            });
          }
          removeEmpty(e) {
            return (
              Object.keys(e).forEach((t) => {
                Array.isArray(e[t]) && e[t].map((e) => this.removeEmpty(e)),
                  e[t] && 'object' == typeof e[t]
                    ? this.removeEmpty(e[t])
                    : void 0 === e[t] && delete e[t];
              }),
              e
            );
          }
          cleanup() {
            this.removeAccounts(this.getAccounts()),
              this.removeAddresses(this.getAddresses()),
              this.clearSubscriptions();
          }
        };
      },
      './node_modules/@trezor/blockchain-link/lib/workers/utils.js': (
        e,
        t,
        n
      ) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.transformTarget = t.sumVinVout = t.filterTargets = void 0);
        const r = n('./node_modules/bignumber.js/bignumber.js');
        t.filterTargets = (e, t) => {
          if (
            ('string' == typeof e && (e = [e]),
            !(e && Array.isArray(e) && t && Array.isArray(t)))
          )
            return [];
          const n = e.map((e) =>
            'string' == typeof e
              ? e
              : 'object' == typeof e && 'string' == typeof e.address
              ? e.address
              : null
          );
          return t.filter(
            (e) =>
              !(!e || !Array.isArray(e.addresses)) &&
              e.addresses.filter((e) => n.indexOf(e) >= 0).length > 0
          );
        };
        t.sumVinVout = (e, t = '0', n = 'sum') =>
          e
            .reduce(
              (e, t) =>
                'string' != typeof t.value
                  ? e
                  : 'sum' === n
                  ? e.plus(t.value)
                  : e.minus(t.value),
              new r.default(t)
            )
            .toString();
        t.transformTarget = (e, t) => ({
          n: e.n || 0,
          addresses: e.addresses,
          isAddress: e.isAddress,
          amount: e.value,
          coinbase: e.coinbase,
          isAccountTarget: !!t.includes(e) || void 0,
        });
      },
      './node_modules/@trezor/utils/lib/createDeferred.js': (e, t, n) => {
        'use strict';
        var r = n('./node_modules/es6-promise/dist/es6-promise.js').Promise;
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createDeferred = void 0);
        t.createDeferred = (e) => {
          let t = () => {},
            n = () => {};
          const s = new r((e, r) => {
            (t = e), (n = r);
          });
          return { id: e, resolve: t, reject: n, promise: s };
        };
      },
      './node_modules/bignumber.js/bignumber.js': function (e, t, n) {
        var r;
        !(function (s) {
          'use strict';
          var i,
            o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            c = Math.ceil,
            a = Math.floor,
            u = '[BigNumber Error] ',
            l = u + 'Number primitive has more than 15 significant digits: ',
            f = 1e14,
            d = 14,
            h = 9007199254740991,
            p = [
              1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
              1e13,
            ],
            m = 1e7,
            g = 1e9;
          function _(e) {
            var t = 0 | e;
            return e > 0 || e === t ? t : t - 1;
          }
          function b(e) {
            for (var t, n, r = 1, s = e.length, i = e[0] + ''; r < s; ) {
              for (t = e[r++] + '', n = d - t.length; n--; t = '0' + t);
              i += t;
            }
            for (s = i.length; 48 === i.charCodeAt(--s); );
            return i.slice(0, s + 1 || 1);
          }
          function v(e, t) {
            var n,
              r,
              s = e.c,
              i = t.c,
              o = e.s,
              c = t.s,
              a = e.e,
              u = t.e;
            if (!o || !c) return null;
            if (((n = s && !s[0]), (r = i && !i[0]), n || r))
              return n ? (r ? 0 : -c) : o;
            if (o != c) return o;
            if (((n = o < 0), (r = a == u), !s || !i))
              return r ? 0 : !s ^ n ? 1 : -1;
            if (!r) return (a > u) ^ n ? 1 : -1;
            for (c = (a = s.length) < (u = i.length) ? a : u, o = 0; o < c; o++)
              if (s[o] != i[o]) return (s[o] > i[o]) ^ n ? 1 : -1;
            return a == u ? 0 : (a > u) ^ n ? 1 : -1;
          }
          function y(e, t, n, r) {
            if (e < t || e > n || e !== a(e))
              throw Error(
                u +
                  (r || 'Argument') +
                  ('number' == typeof e
                    ? e < t || e > n
                      ? ' out of range: '
                      : ' not an integer: '
                    : ' not a primitive number: ') +
                  String(e)
              );
          }
          function E(e) {
            var t = e.c.length - 1;
            return _(e.e / d) == t && e.c[t] % 2 != 0;
          }
          function T(e, t) {
            return (
              (e.length > 1 ? e.charAt(0) + '.' + e.slice(1) : e) +
              (t < 0 ? 'e' : 'e+') +
              t
            );
          }
          function S(e, t, n) {
            var r, s;
            if (t < 0) {
              for (s = n + '.'; ++t; s += n);
              e = s + e;
            } else if (++t > (r = e.length)) {
              for (s = n, t -= r; --t; s += n);
              e += s;
            } else t < r && (e = e.slice(0, t) + '.' + e.slice(t));
            return e;
          }
          (i = (function e(t) {
            var n,
              r,
              s,
              i,
              A,
              w,
              O,
              N,
              k,
              C,
              R = (W.prototype = {
                constructor: W,
                toString: null,
                valueOf: null,
              }),
              I = new W(1),
              x = 20,
              L = 4,
              j = -7,
              P = 21,
              M = -1e7,
              G = 1e7,
              F = !1,
              U = 1,
              B = 0,
              H = {
                prefix: '',
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ',',
                decimalSeparator: '.',
                fractionGroupSize: 0,
                fractionGroupSeparator: ' ',
                suffix: '',
              },
              D = '0123456789abcdefghijklmnopqrstuvwxyz',
              z = !0;
            function W(e, t) {
              var n,
                i,
                c,
                u,
                f,
                p,
                m,
                g,
                _ = this;
              if (!(_ instanceof W)) return new W(e, t);
              if (null == t) {
                if (e && !0 === e._isBigNumber)
                  return (
                    (_.s = e.s),
                    void (!e.c || e.e > G
                      ? (_.c = _.e = null)
                      : e.e < M
                      ? (_.c = [(_.e = 0)])
                      : ((_.e = e.e), (_.c = e.c.slice())))
                  );
                if ((p = 'number' == typeof e) && 0 * e == 0) {
                  if (((_.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                    for (u = 0, f = e; f >= 10; f /= 10, u++);
                    return void (u > G
                      ? (_.c = _.e = null)
                      : ((_.e = u), (_.c = [e])));
                  }
                  g = String(e);
                } else {
                  if (!o.test((g = String(e)))) return s(_, g, p);
                  _.s = 45 == g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
                }
                (u = g.indexOf('.')) > -1 && (g = g.replace('.', '')),
                  (f = g.search(/e/i)) > 0
                    ? (u < 0 && (u = f),
                      (u += +g.slice(f + 1)),
                      (g = g.substring(0, f)))
                    : u < 0 && (u = g.length);
              } else {
                if ((y(t, 2, D.length, 'Base'), 10 == t && z))
                  return $((_ = new W(e)), x + _.e + 1, L);
                if (((g = String(e)), (p = 'number' == typeof e))) {
                  if (0 * e != 0) return s(_, g, p, t);
                  if (
                    ((_.s = 1 / e < 0 ? ((g = g.slice(1)), -1) : 1),
                    W.DEBUG && g.replace(/^0\.0*|\./, '').length > 15)
                  )
                    throw Error(l + e);
                } else
                  _.s = 45 === g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
                for (n = D.slice(0, t), u = f = 0, m = g.length; f < m; f++)
                  if (n.indexOf((i = g.charAt(f))) < 0) {
                    if ('.' == i) {
                      if (f > u) {
                        u = m;
                        continue;
                      }
                    } else if (
                      !c &&
                      ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
                        (g == g.toLowerCase() && (g = g.toUpperCase())))
                    ) {
                      (c = !0), (f = -1), (u = 0);
                      continue;
                    }
                    return s(_, String(e), p, t);
                  }
                (p = !1),
                  (u = (g = r(g, t, 10, _.s)).indexOf('.')) > -1
                    ? (g = g.replace('.', ''))
                    : (u = g.length);
              }
              for (f = 0; 48 === g.charCodeAt(f); f++);
              for (m = g.length; 48 === g.charCodeAt(--m); );
              if ((g = g.slice(f, ++m))) {
                if (((m -= f), p && W.DEBUG && m > 15 && (e > h || e !== a(e))))
                  throw Error(l + _.s * e);
                if ((u = u - f - 1) > G) _.c = _.e = null;
                else if (u < M) _.c = [(_.e = 0)];
                else {
                  if (
                    ((_.e = u),
                    (_.c = []),
                    (f = (u + 1) % d),
                    u < 0 && (f += d),
                    f < m)
                  ) {
                    for (f && _.c.push(+g.slice(0, f)), m -= d; f < m; )
                      _.c.push(+g.slice(f, (f += d)));
                    f = d - (g = g.slice(f)).length;
                  } else f -= m;
                  for (; f--; g += '0');
                  _.c.push(+g);
                }
              } else _.c = [(_.e = 0)];
            }
            function K(e, t, n, r) {
              var s, i, o, c, a;
              if ((null == n ? (n = L) : y(n, 0, 8), !e.c)) return e.toString();
              if (((s = e.c[0]), (o = e.e), null == t))
                (a = b(e.c)),
                  (a =
                    1 == r || (2 == r && (o <= j || o >= P))
                      ? T(a, o)
                      : S(a, o, '0'));
              else if (
                ((i = (e = $(new W(e), t, n)).e),
                (c = (a = b(e.c)).length),
                1 == r || (2 == r && (t <= i || i <= j)))
              ) {
                for (; c < t; a += '0', c++);
                a = T(a, i);
              } else if (((t -= o), (a = S(a, i, '0')), i + 1 > c)) {
                if (--t > 0) for (a += '.'; t--; a += '0');
              } else if ((t += i - c) > 0)
                for (i + 1 == c && (a += '.'); t--; a += '0');
              return e.s < 0 && s ? '-' + a : a;
            }
            function V(e, t) {
              for (var n, r = 1, s = new W(e[0]); r < e.length; r++) {
                if (!(n = new W(e[r])).s) {
                  s = n;
                  break;
                }
                t.call(s, n) && (s = n);
              }
              return s;
            }
            function q(e, t, n) {
              for (var r = 1, s = t.length; !t[--s]; t.pop());
              for (s = t[0]; s >= 10; s /= 10, r++);
              return (
                (n = r + n * d - 1) > G
                  ? (e.c = e.e = null)
                  : n < M
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = n), (e.c = t)),
                e
              );
            }
            function $(e, t, n, r) {
              var s,
                i,
                o,
                u,
                l,
                h,
                m,
                g = e.c,
                _ = p;
              if (g) {
                e: {
                  for (s = 1, u = g[0]; u >= 10; u /= 10, s++);
                  if ((i = t - s) < 0)
                    (i += d),
                      (o = t),
                      (m = ((l = g[(h = 0)]) / _[s - o - 1]) % 10 | 0);
                  else if ((h = c((i + 1) / d)) >= g.length) {
                    if (!r) break e;
                    for (; g.length <= h; g.push(0));
                    (l = m = 0), (s = 1), (o = (i %= d) - d + 1);
                  } else {
                    for (l = u = g[h], s = 1; u >= 10; u /= 10, s++);
                    m =
                      (o = (i %= d) - d + s) < 0
                        ? 0
                        : (l / _[s - o - 1]) % 10 | 0;
                  }
                  if (
                    ((r =
                      r ||
                      t < 0 ||
                      null != g[h + 1] ||
                      (o < 0 ? l : l % _[s - o - 1])),
                    (r =
                      n < 4
                        ? (m || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                        : m > 5 ||
                          (5 == m &&
                            (4 == n ||
                              r ||
                              (6 == n &&
                                (i > 0
                                  ? o > 0
                                    ? l / _[s - o]
                                    : 0
                                  : g[h - 1]) %
                                  10 &
                                  1) ||
                              n == (e.s < 0 ? 8 : 7)))),
                    t < 1 || !g[0])
                  )
                    return (
                      (g.length = 0),
                      r
                        ? ((t -= e.e + 1),
                          (g[0] = _[(d - (t % d)) % d]),
                          (e.e = -t || 0))
                        : (g[0] = e.e = 0),
                      e
                    );
                  if (
                    (0 == i
                      ? ((g.length = h), (u = 1), h--)
                      : ((g.length = h + 1),
                        (u = _[d - i]),
                        (g[h] = o > 0 ? a((l / _[s - o]) % _[o]) * u : 0)),
                    r)
                  )
                    for (;;) {
                      if (0 == h) {
                        for (i = 1, o = g[0]; o >= 10; o /= 10, i++);
                        for (o = g[0] += u, u = 1; o >= 10; o /= 10, u++);
                        i != u && (e.e++, g[0] == f && (g[0] = 1));
                        break;
                      }
                      if (((g[h] += u), g[h] != f)) break;
                      (g[h--] = 0), (u = 1);
                    }
                  for (i = g.length; 0 === g[--i]; g.pop());
                }
                e.e > G ? (e.c = e.e = null) : e.e < M && (e.c = [(e.e = 0)]);
              }
              return e;
            }
            function X(e) {
              var t,
                n = e.e;
              return null === n
                ? e.toString()
                : ((t = b(e.c)),
                  (t = n <= j || n >= P ? T(t, n) : S(t, n, '0')),
                  e.s < 0 ? '-' + t : t);
            }
            return (
              (W.clone = e),
              (W.ROUND_UP = 0),
              (W.ROUND_DOWN = 1),
              (W.ROUND_CEIL = 2),
              (W.ROUND_FLOOR = 3),
              (W.ROUND_HALF_UP = 4),
              (W.ROUND_HALF_DOWN = 5),
              (W.ROUND_HALF_EVEN = 6),
              (W.ROUND_HALF_CEIL = 7),
              (W.ROUND_HALF_FLOOR = 8),
              (W.EUCLID = 9),
              (W.config = W.set =
                function (e) {
                  var t, n;
                  if (null != e) {
                    if ('object' != typeof e)
                      throw Error(u + 'Object expected: ' + e);
                    if (
                      (e.hasOwnProperty((t = 'DECIMAL_PLACES')) &&
                        (y((n = e[t]), 0, g, t), (x = n)),
                      e.hasOwnProperty((t = 'ROUNDING_MODE')) &&
                        (y((n = e[t]), 0, 8, t), (L = n)),
                      e.hasOwnProperty((t = 'EXPONENTIAL_AT')) &&
                        ((n = e[t]) && n.pop
                          ? (y(n[0], -g, 0, t),
                            y(n[1], 0, g, t),
                            (j = n[0]),
                            (P = n[1]))
                          : (y(n, -g, g, t), (j = -(P = n < 0 ? -n : n)))),
                      e.hasOwnProperty((t = 'RANGE')))
                    )
                      if ((n = e[t]) && n.pop)
                        y(n[0], -g, -1, t),
                          y(n[1], 1, g, t),
                          (M = n[0]),
                          (G = n[1]);
                      else {
                        if ((y(n, -g, g, t), !n))
                          throw Error(u + t + ' cannot be zero: ' + n);
                        M = -(G = n < 0 ? -n : n);
                      }
                    if (e.hasOwnProperty((t = 'CRYPTO'))) {
                      if ((n = e[t]) !== !!n)
                        throw Error(u + t + ' not true or false: ' + n);
                      if (n) {
                        if (
                          'undefined' == typeof crypto ||
                          !crypto ||
                          (!crypto.getRandomValues && !crypto.randomBytes)
                        )
                          throw ((F = !n), Error(u + 'crypto unavailable'));
                        F = n;
                      } else F = n;
                    }
                    if (
                      (e.hasOwnProperty((t = 'MODULO_MODE')) &&
                        (y((n = e[t]), 0, 9, t), (U = n)),
                      e.hasOwnProperty((t = 'POW_PRECISION')) &&
                        (y((n = e[t]), 0, g, t), (B = n)),
                      e.hasOwnProperty((t = 'FORMAT')))
                    ) {
                      if ('object' != typeof (n = e[t]))
                        throw Error(u + t + ' not an object: ' + n);
                      H = n;
                    }
                    if (e.hasOwnProperty((t = 'ALPHABET'))) {
                      if (
                        'string' != typeof (n = e[t]) ||
                        /^.?$|[+\-.\s]|(.).*\1/.test(n)
                      )
                        throw Error(u + t + ' invalid: ' + n);
                      (z = '0123456789' == n.slice(0, 10)), (D = n);
                    }
                  }
                  return {
                    DECIMAL_PLACES: x,
                    ROUNDING_MODE: L,
                    EXPONENTIAL_AT: [j, P],
                    RANGE: [M, G],
                    CRYPTO: F,
                    MODULO_MODE: U,
                    POW_PRECISION: B,
                    FORMAT: H,
                    ALPHABET: D,
                  };
                }),
              (W.isBigNumber = function (e) {
                if (!e || !0 !== e._isBigNumber) return !1;
                if (!W.DEBUG) return !0;
                var t,
                  n,
                  r = e.c,
                  s = e.e,
                  i = e.s;
                e: if ('[object Array]' == {}.toString.call(r)) {
                  if (
                    (1 === i || -1 === i) &&
                    s >= -g &&
                    s <= g &&
                    s === a(s)
                  ) {
                    if (0 === r[0]) {
                      if (0 === s && 1 === r.length) return !0;
                      break e;
                    }
                    if (
                      ((t = (s + 1) % d) < 1 && (t += d),
                      String(r[0]).length == t)
                    ) {
                      for (t = 0; t < r.length; t++)
                        if ((n = r[t]) < 0 || n >= f || n !== a(n)) break e;
                      if (0 !== n) return !0;
                    }
                  }
                } else if (
                  null === r &&
                  null === s &&
                  (null === i || 1 === i || -1 === i)
                )
                  return !0;
                throw Error(u + 'Invalid BigNumber: ' + e);
              }),
              (W.maximum = W.max =
                function () {
                  return V(arguments, R.lt);
                }),
              (W.minimum = W.min =
                function () {
                  return V(arguments, R.gt);
                }),
              (W.random =
                ((i = 9007199254740992),
                (A =
                  (Math.random() * i) & 2097151
                    ? function () {
                        return a(Math.random() * i);
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      }),
                function (e) {
                  var t,
                    n,
                    r,
                    s,
                    i,
                    o = 0,
                    l = [],
                    f = new W(I);
                  if ((null == e ? (e = x) : y(e, 0, g), (s = c(e / d)), F))
                    if (crypto.getRandomValues) {
                      for (
                        t = crypto.getRandomValues(new Uint32Array((s *= 2)));
                        o < s;

                      )
                        (i = 131072 * t[o] + (t[o + 1] >>> 11)) >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (t[o] = n[0]),
                            (t[o + 1] = n[1]))
                          : (l.push(i % 1e14), (o += 2));
                      o = s / 2;
                    } else {
                      if (!crypto.randomBytes)
                        throw ((F = !1), Error(u + 'crypto unavailable'));
                      for (t = crypto.randomBytes((s *= 7)); o < s; )
                        (i =
                          281474976710656 * (31 & t[o]) +
                          1099511627776 * t[o + 1] +
                          4294967296 * t[o + 2] +
                          16777216 * t[o + 3] +
                          (t[o + 4] << 16) +
                          (t[o + 5] << 8) +
                          t[o + 6]) >= 9e15
                          ? crypto.randomBytes(7).copy(t, o)
                          : (l.push(i % 1e14), (o += 7));
                      o = s / 7;
                    }
                  if (!F)
                    for (; o < s; ) (i = A()) < 9e15 && (l[o++] = i % 1e14);
                  for (
                    s = l[--o],
                      e %= d,
                      s && e && ((i = p[d - e]), (l[o] = a(s / i) * i));
                    0 === l[o];
                    l.pop(), o--
                  );
                  if (o < 0) l = [(r = 0)];
                  else {
                    for (r = -1; 0 === l[0]; l.splice(0, 1), r -= d);
                    for (o = 1, i = l[0]; i >= 10; i /= 10, o++);
                    o < d && (r -= d - o);
                  }
                  return (f.e = r), (f.c = l), f;
                })),
              (W.sum = function () {
                for (var e = 1, t = arguments, n = new W(t[0]); e < t.length; )
                  n = n.plus(t[e++]);
                return n;
              }),
              (r = (function () {
                var e = '0123456789';
                function t(e, t, n, r) {
                  for (var s, i, o = [0], c = 0, a = e.length; c < a; ) {
                    for (i = o.length; i--; o[i] *= t);
                    for (
                      o[0] += r.indexOf(e.charAt(c++)), s = 0;
                      s < o.length;
                      s++
                    )
                      o[s] > n - 1 &&
                        (null == o[s + 1] && (o[s + 1] = 0),
                        (o[s + 1] += (o[s] / n) | 0),
                        (o[s] %= n));
                  }
                  return o.reverse();
                }
                return function (r, s, i, o, c) {
                  var a,
                    u,
                    l,
                    f,
                    d,
                    h,
                    p,
                    m,
                    g = r.indexOf('.'),
                    _ = x,
                    v = L;
                  for (
                    g >= 0 &&
                      ((f = B),
                      (B = 0),
                      (r = r.replace('.', '')),
                      (h = (m = new W(s)).pow(r.length - g)),
                      (B = f),
                      (m.c = t(S(b(h.c), h.e, '0'), 10, i, e)),
                      (m.e = m.c.length)),
                      l = f =
                        (p = t(r, s, i, c ? ((a = D), e) : ((a = e), D)))
                          .length;
                    0 == p[--f];
                    p.pop()
                  );
                  if (!p[0]) return a.charAt(0);
                  if (
                    (g < 0
                      ? --l
                      : ((h.c = p),
                        (h.e = l),
                        (h.s = o),
                        (p = (h = n(h, m, _, v, i)).c),
                        (d = h.r),
                        (l = h.e)),
                    (g = p[(u = l + _ + 1)]),
                    (f = i / 2),
                    (d = d || u < 0 || null != p[u + 1]),
                    (d =
                      v < 4
                        ? (null != g || d) && (0 == v || v == (h.s < 0 ? 3 : 2))
                        : g > f ||
                          (g == f &&
                            (4 == v ||
                              d ||
                              (6 == v && 1 & p[u - 1]) ||
                              v == (h.s < 0 ? 8 : 7)))),
                    u < 1 || !p[0])
                  )
                    r = d ? S(a.charAt(1), -_, a.charAt(0)) : a.charAt(0);
                  else {
                    if (((p.length = u), d))
                      for (--i; ++p[--u] > i; )
                        (p[u] = 0), u || (++l, (p = [1].concat(p)));
                    for (f = p.length; !p[--f]; );
                    for (g = 0, r = ''; g <= f; r += a.charAt(p[g++]));
                    r = S(r, l, a.charAt(0));
                  }
                  return r;
                };
              })()),
              (n = (function () {
                function e(e, t, n) {
                  var r,
                    s,
                    i,
                    o,
                    c = 0,
                    a = e.length,
                    u = t % m,
                    l = (t / m) | 0;
                  for (e = e.slice(); a--; )
                    (c =
                      (((s =
                        u * (i = e[a] % m) +
                        ((r = l * i + (o = (e[a] / m) | 0) * u) % m) * m +
                        c) /
                        n) |
                        0) +
                      ((r / m) | 0) +
                      l * o),
                      (e[a] = s % n);
                  return c && (e = [c].concat(e)), e;
                }
                function t(e, t, n, r) {
                  var s, i;
                  if (n != r) i = n > r ? 1 : -1;
                  else
                    for (s = i = 0; s < n; s++)
                      if (e[s] != t[s]) {
                        i = e[s] > t[s] ? 1 : -1;
                        break;
                      }
                  return i;
                }
                function n(e, t, n, r) {
                  for (var s = 0; n--; )
                    (e[n] -= s),
                      (s = e[n] < t[n] ? 1 : 0),
                      (e[n] = s * r + e[n] - t[n]);
                  for (; !e[0] && e.length > 1; e.splice(0, 1));
                }
                return function (r, s, i, o, c) {
                  var u,
                    l,
                    h,
                    p,
                    m,
                    g,
                    b,
                    v,
                    y,
                    E,
                    T,
                    S,
                    A,
                    w,
                    O,
                    N,
                    k,
                    C = r.s == s.s ? 1 : -1,
                    R = r.c,
                    I = s.c;
                  if (!(R && R[0] && I && I[0]))
                    return new W(
                      r.s && s.s && (R ? !I || R[0] != I[0] : I)
                        ? (R && 0 == R[0]) || !I
                          ? 0 * C
                          : C / 0
                        : NaN
                    );
                  for (
                    y = (v = new W(C)).c = [],
                      C = i + (l = r.e - s.e) + 1,
                      c ||
                        ((c = f),
                        (l = _(r.e / d) - _(s.e / d)),
                        (C = (C / d) | 0)),
                      h = 0;
                    I[h] == (R[h] || 0);
                    h++
                  );
                  if ((I[h] > (R[h] || 0) && l--, C < 0)) y.push(1), (p = !0);
                  else {
                    for (
                      w = R.length,
                        N = I.length,
                        h = 0,
                        C += 2,
                        (m = a(c / (I[0] + 1))) > 1 &&
                          ((I = e(I, m, c)),
                          (R = e(R, m, c)),
                          (N = I.length),
                          (w = R.length)),
                        A = N,
                        T = (E = R.slice(0, N)).length;
                      T < N;
                      E[T++] = 0
                    );
                    (k = I.slice()),
                      (k = [0].concat(k)),
                      (O = I[0]),
                      I[1] >= c / 2 && O++;
                    do {
                      if (((m = 0), (u = t(I, E, N, T)) < 0)) {
                        if (
                          ((S = E[0]),
                          N != T && (S = S * c + (E[1] || 0)),
                          (m = a(S / O)) > 1)
                        )
                          for (
                            m >= c && (m = c - 1),
                              b = (g = e(I, m, c)).length,
                              T = E.length;
                            1 == t(g, E, b, T);

                          )
                            m--,
                              n(g, N < b ? k : I, b, c),
                              (b = g.length),
                              (u = 1);
                        else
                          0 == m && (u = m = 1), (b = (g = I.slice()).length);
                        if (
                          (b < T && (g = [0].concat(g)),
                          n(E, g, T, c),
                          (T = E.length),
                          -1 == u)
                        )
                          for (; t(I, E, N, T) < 1; )
                            m++, n(E, N < T ? k : I, T, c), (T = E.length);
                      } else 0 === u && (m++, (E = [0]));
                      (y[h++] = m),
                        E[0] ? (E[T++] = R[A] || 0) : ((E = [R[A]]), (T = 1));
                    } while ((A++ < w || null != E[0]) && C--);
                    (p = null != E[0]), y[0] || y.splice(0, 1);
                  }
                  if (c == f) {
                    for (h = 1, C = y[0]; C >= 10; C /= 10, h++);
                    $(v, i + (v.e = h + l * d - 1) + 1, o, p);
                  } else (v.e = l), (v.r = +p);
                  return v;
                };
              })()),
              (w = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
              (O = /^([^.]+)\.$/),
              (N = /^\.([^.]+)$/),
              (k = /^-?(Infinity|NaN)$/),
              (C = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
              (s = function (e, t, n, r) {
                var s,
                  i = n ? t : t.replace(C, '');
                if (k.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
                else {
                  if (
                    !n &&
                    ((i = i.replace(w, function (e, t, n) {
                      return (
                        (s =
                          'x' == (n = n.toLowerCase()) ? 16 : 'b' == n ? 2 : 8),
                        r && r != s ? e : t
                      );
                    })),
                    r && ((s = r), (i = i.replace(O, '$1').replace(N, '0.$1'))),
                    t != i)
                  )
                    return new W(i, s);
                  if (W.DEBUG)
                    throw Error(
                      u + 'Not a' + (r ? ' base ' + r : '') + ' number: ' + t
                    );
                  e.s = null;
                }
                e.c = e.e = null;
              }),
              (R.absoluteValue = R.abs =
                function () {
                  var e = new W(this);
                  return e.s < 0 && (e.s = 1), e;
                }),
              (R.comparedTo = function (e, t) {
                return v(this, new W(e, t));
              }),
              (R.decimalPlaces = R.dp =
                function (e, t) {
                  var n,
                    r,
                    s,
                    i = this;
                  if (null != e)
                    return (
                      y(e, 0, g),
                      null == t ? (t = L) : y(t, 0, 8),
                      $(new W(i), e + i.e + 1, t)
                    );
                  if (!(n = i.c)) return null;
                  if (
                    ((r = ((s = n.length - 1) - _(this.e / d)) * d), (s = n[s]))
                  )
                    for (; s % 10 == 0; s /= 10, r--);
                  return r < 0 && (r = 0), r;
                }),
              (R.dividedBy = R.div =
                function (e, t) {
                  return n(this, new W(e, t), x, L);
                }),
              (R.dividedToIntegerBy = R.idiv =
                function (e, t) {
                  return n(this, new W(e, t), 0, 1);
                }),
              (R.exponentiatedBy = R.pow =
                function (e, t) {
                  var n,
                    r,
                    s,
                    i,
                    o,
                    l,
                    f,
                    h,
                    p = this;
                  if ((e = new W(e)).c && !e.isInteger())
                    throw Error(u + 'Exponent not an integer: ' + X(e));
                  if (
                    (null != t && (t = new W(t)),
                    (o = e.e > 14),
                    !p.c ||
                      !p.c[0] ||
                      (1 == p.c[0] && !p.e && 1 == p.c.length) ||
                      !e.c ||
                      !e.c[0])
                  )
                    return (
                      (h = new W(Math.pow(+X(p), o ? 2 - E(e) : +X(e)))),
                      t ? h.mod(t) : h
                    );
                  if (((l = e.s < 0), t)) {
                    if (t.c ? !t.c[0] : !t.s) return new W(NaN);
                    (r = !l && p.isInteger() && t.isInteger()) &&
                      (p = p.mod(t));
                  } else {
                    if (
                      e.e > 9 &&
                      (p.e > 0 ||
                        p.e < -1 ||
                        (0 == p.e
                          ? p.c[0] > 1 || (o && p.c[1] >= 24e7)
                          : p.c[0] < 8e13 || (o && p.c[0] <= 9999975e7)))
                    )
                      return (
                        (i = p.s < 0 && E(e) ? -0 : 0),
                        p.e > -1 && (i = 1 / i),
                        new W(l ? 1 / i : i)
                      );
                    B && (i = c(B / d + 2));
                  }
                  for (
                    o
                      ? ((n = new W(0.5)), l && (e.s = 1), (f = E(e)))
                      : (f = (s = Math.abs(+X(e))) % 2),
                      h = new W(I);
                    ;

                  ) {
                    if (f) {
                      if (!(h = h.times(p)).c) break;
                      i
                        ? h.c.length > i && (h.c.length = i)
                        : r && (h = h.mod(t));
                    }
                    if (s) {
                      if (0 === (s = a(s / 2))) break;
                      f = s % 2;
                    } else if (($((e = e.times(n)), e.e + 1, 1), e.e > 14))
                      f = E(e);
                    else {
                      if (0 === (s = +X(e))) break;
                      f = s % 2;
                    }
                    (p = p.times(p)),
                      i
                        ? p.c && p.c.length > i && (p.c.length = i)
                        : r && (p = p.mod(t));
                  }
                  return r
                    ? h
                    : (l && (h = I.div(h)),
                      t ? h.mod(t) : i ? $(h, B, L, undefined) : h);
                }),
              (R.integerValue = function (e) {
                var t = new W(this);
                return null == e ? (e = L) : y(e, 0, 8), $(t, t.e + 1, e);
              }),
              (R.isEqualTo = R.eq =
                function (e, t) {
                  return 0 === v(this, new W(e, t));
                }),
              (R.isFinite = function () {
                return !!this.c;
              }),
              (R.isGreaterThan = R.gt =
                function (e, t) {
                  return v(this, new W(e, t)) > 0;
                }),
              (R.isGreaterThanOrEqualTo = R.gte =
                function (e, t) {
                  return 1 === (t = v(this, new W(e, t))) || 0 === t;
                }),
              (R.isInteger = function () {
                return !!this.c && _(this.e / d) > this.c.length - 2;
              }),
              (R.isLessThan = R.lt =
                function (e, t) {
                  return v(this, new W(e, t)) < 0;
                }),
              (R.isLessThanOrEqualTo = R.lte =
                function (e, t) {
                  return -1 === (t = v(this, new W(e, t))) || 0 === t;
                }),
              (R.isNaN = function () {
                return !this.s;
              }),
              (R.isNegative = function () {
                return this.s < 0;
              }),
              (R.isPositive = function () {
                return this.s > 0;
              }),
              (R.isZero = function () {
                return !!this.c && 0 == this.c[0];
              }),
              (R.minus = function (e, t) {
                var n,
                  r,
                  s,
                  i,
                  o = this,
                  c = o.s;
                if (((t = (e = new W(e, t)).s), !c || !t)) return new W(NaN);
                if (c != t) return (e.s = -t), o.plus(e);
                var a = o.e / d,
                  u = e.e / d,
                  l = o.c,
                  h = e.c;
                if (!a || !u) {
                  if (!l || !h) return l ? ((e.s = -t), e) : new W(h ? o : NaN);
                  if (!l[0] || !h[0])
                    return h[0]
                      ? ((e.s = -t), e)
                      : new W(l[0] ? o : 3 == L ? -0 : 0);
                }
                if (((a = _(a)), (u = _(u)), (l = l.slice()), (c = a - u))) {
                  for (
                    (i = c < 0) ? ((c = -c), (s = l)) : ((u = a), (s = h)),
                      s.reverse(),
                      t = c;
                    t--;
                    s.push(0)
                  );
                  s.reverse();
                } else
                  for (
                    r = (i = (c = l.length) < (t = h.length)) ? c : t,
                      c = t = 0;
                    t < r;
                    t++
                  )
                    if (l[t] != h[t]) {
                      i = l[t] < h[t];
                      break;
                    }
                if (
                  (i && ((s = l), (l = h), (h = s), (e.s = -e.s)),
                  (t = (r = h.length) - (n = l.length)) > 0)
                )
                  for (; t--; l[n++] = 0);
                for (t = f - 1; r > c; ) {
                  if (l[--r] < h[r]) {
                    for (n = r; n && !l[--n]; l[n] = t);
                    --l[n], (l[r] += f);
                  }
                  l[r] -= h[r];
                }
                for (; 0 == l[0]; l.splice(0, 1), --u);
                return l[0]
                  ? q(e, l, u)
                  : ((e.s = 3 == L ? -1 : 1), (e.c = [(e.e = 0)]), e);
              }),
              (R.modulo = R.mod =
                function (e, t) {
                  var r,
                    s,
                    i = this;
                  return (
                    (e = new W(e, t)),
                    !i.c || !e.s || (e.c && !e.c[0])
                      ? new W(NaN)
                      : !e.c || (i.c && !i.c[0])
                      ? new W(i)
                      : (9 == U
                          ? ((s = e.s),
                            (e.s = 1),
                            (r = n(i, e, 0, 3)),
                            (e.s = s),
                            (r.s *= s))
                          : (r = n(i, e, 0, U)),
                        (e = i.minus(r.times(e))).c[0] || 1 != U || (e.s = i.s),
                        e)
                  );
                }),
              (R.multipliedBy = R.times =
                function (e, t) {
                  var n,
                    r,
                    s,
                    i,
                    o,
                    c,
                    a,
                    u,
                    l,
                    h,
                    p,
                    g,
                    b,
                    v,
                    y,
                    E = this,
                    T = E.c,
                    S = (e = new W(e, t)).c;
                  if (!(T && S && T[0] && S[0]))
                    return (
                      !E.s || !e.s || (T && !T[0] && !S) || (S && !S[0] && !T)
                        ? (e.c = e.e = e.s = null)
                        : ((e.s *= E.s),
                          T && S
                            ? ((e.c = [0]), (e.e = 0))
                            : (e.c = e.e = null)),
                      e
                    );
                  for (
                    r = _(E.e / d) + _(e.e / d),
                      e.s *= E.s,
                      (a = T.length) < (h = S.length) &&
                        ((b = T), (T = S), (S = b), (s = a), (a = h), (h = s)),
                      s = a + h,
                      b = [];
                    s--;
                    b.push(0)
                  );
                  for (v = f, y = m, s = h; --s >= 0; ) {
                    for (
                      n = 0, p = S[s] % y, g = (S[s] / y) | 0, i = s + (o = a);
                      i > s;

                    )
                      (n =
                        (((u =
                          p * (u = T[--o] % y) +
                          ((c = g * u + (l = (T[o] / y) | 0) * p) % y) * y +
                          b[i] +
                          n) /
                          v) |
                          0) +
                        ((c / y) | 0) +
                        g * l),
                        (b[i--] = u % v);
                    b[i] = n;
                  }
                  return n ? ++r : b.splice(0, 1), q(e, b, r);
                }),
              (R.negated = function () {
                var e = new W(this);
                return (e.s = -e.s || null), e;
              }),
              (R.plus = function (e, t) {
                var n,
                  r = this,
                  s = r.s;
                if (((t = (e = new W(e, t)).s), !s || !t)) return new W(NaN);
                if (s != t) return (e.s = -t), r.minus(e);
                var i = r.e / d,
                  o = e.e / d,
                  c = r.c,
                  a = e.c;
                if (!i || !o) {
                  if (!c || !a) return new W(s / 0);
                  if (!c[0] || !a[0]) return a[0] ? e : new W(c[0] ? r : 0 * s);
                }
                if (((i = _(i)), (o = _(o)), (c = c.slice()), (s = i - o))) {
                  for (
                    s > 0 ? ((o = i), (n = a)) : ((s = -s), (n = c)),
                      n.reverse();
                    s--;
                    n.push(0)
                  );
                  n.reverse();
                }
                for (
                  (s = c.length) - (t = a.length) < 0 &&
                    ((n = a), (a = c), (c = n), (t = s)),
                    s = 0;
                  t;

                )
                  (s = ((c[--t] = c[t] + a[t] + s) / f) | 0),
                    (c[t] = f === c[t] ? 0 : c[t] % f);
                return s && ((c = [s].concat(c)), ++o), q(e, c, o);
              }),
              (R.precision = R.sd =
                function (e, t) {
                  var n,
                    r,
                    s,
                    i = this;
                  if (null != e && e !== !!e)
                    return (
                      y(e, 1, g),
                      null == t ? (t = L) : y(t, 0, 8),
                      $(new W(i), e, t)
                    );
                  if (!(n = i.c)) return null;
                  if (((r = (s = n.length - 1) * d + 1), (s = n[s]))) {
                    for (; s % 10 == 0; s /= 10, r--);
                    for (s = n[0]; s >= 10; s /= 10, r++);
                  }
                  return e && i.e + 1 > r && (r = i.e + 1), r;
                }),
              (R.shiftedBy = function (e) {
                return y(e, -9007199254740991, h), this.times('1e' + e);
              }),
              (R.squareRoot = R.sqrt =
                function () {
                  var e,
                    t,
                    r,
                    s,
                    i,
                    o = this,
                    c = o.c,
                    a = o.s,
                    u = o.e,
                    l = x + 4,
                    f = new W('0.5');
                  if (1 !== a || !c || !c[0])
                    return new W(
                      !a || (a < 0 && (!c || c[0])) ? NaN : c ? o : 1 / 0
                    );
                  if (
                    (0 == (a = Math.sqrt(+X(o))) || a == 1 / 0
                      ? (((t = b(c)).length + u) % 2 == 0 && (t += '0'),
                        (a = Math.sqrt(+t)),
                        (u = _((u + 1) / 2) - (u < 0 || u % 2)),
                        (r = new W(
                          (t =
                            a == 1 / 0
                              ? '5e' + u
                              : (t = a.toExponential()).slice(
                                  0,
                                  t.indexOf('e') + 1
                                ) + u)
                        )))
                      : (r = new W(a + '')),
                    r.c[0])
                  )
                    for ((a = (u = r.e) + l) < 3 && (a = 0); ; )
                      if (
                        ((i = r),
                        (r = f.times(i.plus(n(o, i, l, 1)))),
                        b(i.c).slice(0, a) === (t = b(r.c)).slice(0, a))
                      ) {
                        if (
                          (r.e < u && --a,
                          '9999' != (t = t.slice(a - 3, a + 1)) &&
                            (s || '4999' != t))
                        ) {
                          (+t && (+t.slice(1) || '5' != t.charAt(0))) ||
                            ($(r, r.e + x + 2, 1), (e = !r.times(r).eq(o)));
                          break;
                        }
                        if (!s && ($(i, i.e + x + 2, 0), i.times(i).eq(o))) {
                          r = i;
                          break;
                        }
                        (l += 4), (a += 4), (s = 1);
                      }
                  return $(r, r.e + x + 1, L, e);
                }),
              (R.toExponential = function (e, t) {
                return null != e && (y(e, 0, g), e++), K(this, e, t, 1);
              }),
              (R.toFixed = function (e, t) {
                return (
                  null != e && (y(e, 0, g), (e = e + this.e + 1)), K(this, e, t)
                );
              }),
              (R.toFormat = function (e, t, n) {
                var r,
                  s = this;
                if (null == n)
                  null != e && t && 'object' == typeof t
                    ? ((n = t), (t = null))
                    : e && 'object' == typeof e
                    ? ((n = e), (e = t = null))
                    : (n = H);
                else if ('object' != typeof n)
                  throw Error(u + 'Argument not an object: ' + n);
                if (((r = s.toFixed(e, t)), s.c)) {
                  var i,
                    o = r.split('.'),
                    c = +n.groupSize,
                    a = +n.secondaryGroupSize,
                    l = n.groupSeparator || '',
                    f = o[0],
                    d = o[1],
                    h = s.s < 0,
                    p = h ? f.slice(1) : f,
                    m = p.length;
                  if (
                    (a && ((i = c), (c = a), (a = i), (m -= i)), c > 0 && m > 0)
                  ) {
                    for (i = m % c || c, f = p.substr(0, i); i < m; i += c)
                      f += l + p.substr(i, c);
                    a > 0 && (f += l + p.slice(i)), h && (f = '-' + f);
                  }
                  r = d
                    ? f +
                      (n.decimalSeparator || '') +
                      ((a = +n.fractionGroupSize)
                        ? d.replace(
                            new RegExp('\\d{' + a + '}\\B', 'g'),
                            '$&' + (n.fractionGroupSeparator || '')
                          )
                        : d)
                    : f;
                }
                return (n.prefix || '') + r + (n.suffix || '');
              }),
              (R.toFraction = function (e) {
                var t,
                  r,
                  s,
                  i,
                  o,
                  c,
                  a,
                  l,
                  f,
                  h,
                  m,
                  g,
                  _ = this,
                  v = _.c;
                if (
                  null != e &&
                  ((!(a = new W(e)).isInteger() && (a.c || 1 !== a.s)) ||
                    a.lt(I))
                )
                  throw Error(
                    u +
                      'Argument ' +
                      (a.isInteger() ? 'out of range: ' : 'not an integer: ') +
                      X(a)
                  );
                if (!v) return new W(_);
                for (
                  t = new W(I),
                    f = r = new W(I),
                    s = l = new W(I),
                    g = b(v),
                    o = t.e = g.length - _.e - 1,
                    t.c[0] = p[(c = o % d) < 0 ? d + c : c],
                    e = !e || a.comparedTo(t) > 0 ? (o > 0 ? t : f) : a,
                    c = G,
                    G = 1 / 0,
                    a = new W(g),
                    l.c[0] = 0;
                  (h = n(a, t, 0, 1)),
                    1 != (i = r.plus(h.times(s))).comparedTo(e);

                )
                  (r = s),
                    (s = i),
                    (f = l.plus(h.times((i = f)))),
                    (l = i),
                    (t = a.minus(h.times((i = t)))),
                    (a = i);
                return (
                  (i = n(e.minus(r), s, 0, 1)),
                  (l = l.plus(i.times(f))),
                  (r = r.plus(i.times(s))),
                  (l.s = f.s = _.s),
                  (m =
                    n(f, s, (o *= 2), L)
                      .minus(_)
                      .abs()
                      .comparedTo(n(l, r, o, L).minus(_).abs()) < 1
                      ? [f, s]
                      : [l, r]),
                  (G = c),
                  m
                );
              }),
              (R.toNumber = function () {
                return +X(this);
              }),
              (R.toPrecision = function (e, t) {
                return null != e && y(e, 1, g), K(this, e, t, 2);
              }),
              (R.toString = function (e) {
                var t,
                  n = this,
                  s = n.s,
                  i = n.e;
                return (
                  null === i
                    ? s
                      ? ((t = 'Infinity'), s < 0 && (t = '-' + t))
                      : (t = 'NaN')
                    : (null == e
                        ? (t =
                            i <= j || i >= P ? T(b(n.c), i) : S(b(n.c), i, '0'))
                        : 10 === e && z
                        ? (t = S(
                            b((n = $(new W(n), x + i + 1, L)).c),
                            n.e,
                            '0'
                          ))
                        : (y(e, 2, D.length, 'Base'),
                          (t = r(S(b(n.c), i, '0'), 10, e, s, !0))),
                      s < 0 && n.c[0] && (t = '-' + t)),
                  t
                );
              }),
              (R.valueOf = R.toJSON =
                function () {
                  return X(this);
                }),
              (R._isBigNumber = !0),
              null != t && W.set(t),
              W
            );
          })()),
            (i.default = i.BigNumber = i),
            void 0 ===
              (r = function () {
                return i;
              }.call(t, n, t, e)) || (e.exports = r);
        })();
      },
      './node_modules/es6-promise/dist/es6-promise.js': function (e, t, n) {
        var r = n('./node_modules/process/browser.js');
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.8+1e68dce6
         */ e.exports = (function () {
          'use strict';
          function e(e) {
            var t = typeof e;
            return null !== e && ('object' === t || 'function' === t);
          }
          function t(e) {
            return 'function' == typeof e;
          }
          var s = Array.isArray
              ? Array.isArray
              : function (e) {
                  return '[object Array]' === Object.prototype.toString.call(e);
                },
            i = 0,
            o = void 0,
            c = void 0,
            a = function (e, t) {
              (E[i] = e), (E[i + 1] = t), 2 === (i += 2) && (c ? c(T) : A());
            };
          function u(e) {
            c = e;
          }
          function l(e) {
            a = e;
          }
          var f = 'undefined' != typeof window ? window : void 0,
            d = f || {},
            h = d.MutationObserver || d.WebKitMutationObserver,
            p =
              'undefined' == typeof self &&
              void 0 !== r &&
              '[object process]' === {}.toString.call(r),
            m =
              'undefined' != typeof Uint8ClampedArray &&
              'undefined' != typeof importScripts &&
              'undefined' != typeof MessageChannel;
          function g() {
            return function () {
              return r.nextTick(T);
            };
          }
          function _() {
            return void 0 !== o
              ? function () {
                  o(T);
                }
              : y();
          }
          function b() {
            var e = 0,
              t = new h(T),
              n = document.createTextNode('');
            return (
              t.observe(n, { characterData: !0 }),
              function () {
                n.data = e = ++e % 2;
              }
            );
          }
          function v() {
            var e = new MessageChannel();
            return (
              (e.port1.onmessage = T),
              function () {
                return e.port2.postMessage(0);
              }
            );
          }
          function y() {
            var e = setTimeout;
            return function () {
              return e(T, 1);
            };
          }
          var E = new Array(1e3);
          function T() {
            for (var e = 0; e < i; e += 2)
              (0, E[e])(E[e + 1]), (E[e] = void 0), (E[e + 1] = void 0);
            i = 0;
          }
          function S() {
            try {
              var e = Function('return this')().require('vertx');
              return (o = e.runOnLoop || e.runOnContext), _();
            } catch (e) {
              return y();
            }
          }
          var A = void 0;
          function w(e, t) {
            var n = this,
              r = new this.constructor(k);
            void 0 === r[N] && $(r);
            var s = n._state;
            if (s) {
              var i = arguments[s - 1];
              a(function () {
                return W(s, r, i, n._result);
              });
            } else D(n, r, e, t);
            return r;
          }
          function O(e) {
            var t = this;
            if (e && 'object' == typeof e && e.constructor === t) return e;
            var n = new t(k);
            return F(n, e), n;
          }
          A = p ? g() : h ? b() : m ? v() : void 0 === f ? S() : y();
          var N = Math.random().toString(36).substring(2);
          function k() {}
          var C = void 0,
            R = 1,
            I = 2;
          function x() {
            return new TypeError('You cannot resolve a promise with itself');
          }
          function L() {
            return new TypeError(
              'A promises callback cannot return that same promise.'
            );
          }
          function j(e, t, n, r) {
            try {
              e.call(t, n, r);
            } catch (e) {
              return e;
            }
          }
          function P(e, t, n) {
            a(function (e) {
              var r = !1,
                s = j(
                  n,
                  t,
                  function (n) {
                    r || ((r = !0), t !== n ? F(e, n) : B(e, n));
                  },
                  function (t) {
                    r || ((r = !0), H(e, t));
                  },
                  'Settle: ' + (e._label || ' unknown promise')
                );
              !r && s && ((r = !0), H(e, s));
            }, e);
          }
          function M(e, t) {
            t._state === R
              ? B(e, t._result)
              : t._state === I
              ? H(e, t._result)
              : D(
                  t,
                  void 0,
                  function (t) {
                    return F(e, t);
                  },
                  function (t) {
                    return H(e, t);
                  }
                );
          }
          function G(e, n, r) {
            n.constructor === e.constructor &&
            r === w &&
            n.constructor.resolve === O
              ? M(e, n)
              : void 0 === r
              ? B(e, n)
              : t(r)
              ? P(e, n, r)
              : B(e, n);
          }
          function F(t, n) {
            if (t === n) H(t, x());
            else if (e(n)) {
              var r = void 0;
              try {
                r = n.then;
              } catch (e) {
                return void H(t, e);
              }
              G(t, n, r);
            } else B(t, n);
          }
          function U(e) {
            e._onerror && e._onerror(e._result), z(e);
          }
          function B(e, t) {
            e._state === C &&
              ((e._result = t),
              (e._state = R),
              0 !== e._subscribers.length && a(z, e));
          }
          function H(e, t) {
            e._state === C && ((e._state = I), (e._result = t), a(U, e));
          }
          function D(e, t, n, r) {
            var s = e._subscribers,
              i = s.length;
            (e._onerror = null),
              (s[i] = t),
              (s[i + R] = n),
              (s[i + I] = r),
              0 === i && e._state && a(z, e);
          }
          function z(e) {
            var t = e._subscribers,
              n = e._state;
            if (0 !== t.length) {
              for (
                var r = void 0, s = void 0, i = e._result, o = 0;
                o < t.length;
                o += 3
              )
                (r = t[o]), (s = t[o + n]), r ? W(n, r, s, i) : s(i);
              e._subscribers.length = 0;
            }
          }
          function W(e, n, r, s) {
            var i = t(r),
              o = void 0,
              c = void 0,
              a = !0;
            if (i) {
              try {
                o = r(s);
              } catch (e) {
                (a = !1), (c = e);
              }
              if (n === o) return void H(n, L());
            } else o = s;
            n._state !== C ||
              (i && a
                ? F(n, o)
                : !1 === a
                ? H(n, c)
                : e === R
                ? B(n, o)
                : e === I && H(n, o));
          }
          function K(e, t) {
            try {
              t(
                function (t) {
                  F(e, t);
                },
                function (t) {
                  H(e, t);
                }
              );
            } catch (t) {
              H(e, t);
            }
          }
          var V = 0;
          function q() {
            return V++;
          }
          function $(e) {
            (e[N] = V++),
              (e._state = void 0),
              (e._result = void 0),
              (e._subscribers = []);
          }
          function X() {
            return new Error('Array Methods must be provided an Array');
          }
          var Y = (function () {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(k)),
                this.promise[N] || $(this.promise),
                s(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? B(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        0 === this._remaining && B(this.promise, this._result)))
                  : H(this.promise, X());
            }
            return (
              (e.prototype._enumerate = function (e) {
                for (var t = 0; this._state === C && t < e.length; t++)
                  this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  r = n.resolve;
                if (r === O) {
                  var s = void 0,
                    i = void 0,
                    o = !1;
                  try {
                    s = e.then;
                  } catch (e) {
                    (o = !0), (i = e);
                  }
                  if (s === w && e._state !== C)
                    this._settledAt(e._state, t, e._result);
                  else if ('function' != typeof s)
                    this._remaining--, (this._result[t] = e);
                  else if (n === ne) {
                    var c = new n(k);
                    o ? H(c, i) : G(c, e, s), this._willSettleAt(c, t);
                  } else
                    this._willSettleAt(
                      new n(function (t) {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(r(e), t);
              }),
              (e.prototype._settledAt = function (e, t, n) {
                var r = this.promise;
                r._state === C &&
                  (this._remaining--,
                  e === I ? H(r, n) : (this._result[t] = n)),
                  0 === this._remaining && B(r, this._result);
              }),
              (e.prototype._willSettleAt = function (e, t) {
                var n = this;
                D(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(R, t, e);
                  },
                  function (e) {
                    return n._settledAt(I, t, e);
                  }
                );
              }),
              e
            );
          })();
          function J(e) {
            return new Y(this, e).promise;
          }
          function Z(e) {
            var t = this;
            return s(e)
              ? new t(function (n, r) {
                  for (var s = e.length, i = 0; i < s; i++)
                    t.resolve(e[i]).then(n, r);
                })
              : new t(function (e, t) {
                  return t(new TypeError('You must pass an array to race.'));
                });
          }
          function Q(e) {
            var t = new this(k);
            return H(t, e), t;
          }
          function ee() {
            throw new TypeError(
              'You must pass a resolver function as the first argument to the promise constructor'
            );
          }
          function te() {
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          }
          var ne = (function () {
            function e(t) {
              (this[N] = q()),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                k !== t &&
                  ('function' != typeof t && ee(),
                  this instanceof e ? K(this, t) : te());
            }
            return (
              (e.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (e.prototype.finally = function (e) {
                var n = this,
                  r = n.constructor;
                return t(e)
                  ? n.then(
                      function (t) {
                        return r.resolve(e()).then(function () {
                          return t;
                        });
                      },
                      function (t) {
                        return r.resolve(e()).then(function () {
                          throw t;
                        });
                      }
                    )
                  : n.then(e, e);
              }),
              e
            );
          })();
          function re() {
            var e = void 0;
            if (void 0 !== n.g) e = n.g;
            else if ('undefined' != typeof self) e = self;
            else
              try {
                e = Function('return this')();
              } catch (e) {
                throw new Error(
                  'polyfill failed because global object is unavailable in this environment'
                );
              }
            var t = e.Promise;
            if (t) {
              var r = null;
              try {
                r = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ('[object Promise]' === r && !t.cast) return;
            }
            e.Promise = ne;
          }
          return (
            (ne.prototype.then = w),
            (ne.all = J),
            (ne.race = Z),
            (ne.resolve = O),
            (ne.reject = Q),
            (ne._setScheduler = u),
            (ne._setAsap = l),
            (ne._asap = a),
            (ne.polyfill = re),
            (ne.Promise = ne),
            ne
          );
        })();
      },
      './node_modules/events/events.js': (e, t, n) => {
        'use strict';
        var r,
          s = n('./node_modules/es6-promise/dist/es6-promise.js').Promise,
          i = 'object' == typeof Reflect ? Reflect : null,
          o =
            i && 'function' == typeof i.apply
              ? i.apply
              : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
                };
        r =
          i && 'function' == typeof i.ownKeys
            ? i.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
        var c =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        function a() {
          a.init.call(this);
        }
        (e.exports = a),
          (e.exports.once = function (e, t) {
            return new s(function (n, r) {
              function s(n) {
                e.removeListener(t, i), r(n);
              }
              function i() {
                'function' == typeof e.removeListener &&
                  e.removeListener('error', s),
                  n([].slice.call(arguments));
              }
              b(e, t, i, { once: !0 }),
                'error' !== t &&
                  (function (e, t, n) {
                    'function' == typeof e.on && b(e, 'error', t, n);
                  })(e, s, { once: !0 });
            });
          }),
          (a.EventEmitter = a),
          (a.prototype._events = void 0),
          (a.prototype._eventsCount = 0),
          (a.prototype._maxListeners = void 0);
        var u = 10;
        function l(e) {
          if ('function' != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
        }
        function f(e) {
          return void 0 === e._maxListeners
            ? a.defaultMaxListeners
            : e._maxListeners;
        }
        function d(e, t, n, r) {
          var s, i, o, c;
          if (
            (l(n),
            void 0 === (i = e._events)
              ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== i.newListener &&
                  (e.emit('newListener', t, n.listener ? n.listener : n),
                  (i = e._events)),
                (o = i[t])),
            void 0 === o)
          )
            (o = i[t] = n), ++e._eventsCount;
          else if (
            ('function' == typeof o
              ? (o = i[t] = r ? [n, o] : [o, n])
              : r
              ? o.unshift(n)
              : o.push(n),
            (s = f(e)) > 0 && o.length > s && !o.warned)
          ) {
            o.warned = !0;
            var a = new Error(
              'Possible EventEmitter memory leak detected. ' +
                o.length +
                ' ' +
                String(t) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            );
            (a.name = 'MaxListenersExceededWarning'),
              (a.emitter = e),
              (a.type = t),
              (a.count = o.length),
              (c = a),
              console && console.warn && console.warn(c);
          }
          return e;
        }
        function h() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function p(e, t, n) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: n,
            },
            s = h.bind(r);
          return (s.listener = n), (r.wrapFn = s), s;
        }
        function m(e, t, n) {
          var r = e._events;
          if (void 0 === r) return [];
          var s = r[t];
          return void 0 === s
            ? []
            : 'function' == typeof s
            ? n
              ? [s.listener || s]
              : [s]
            : n
            ? (function (e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                  t[n] = e[n].listener || e[n];
                return t;
              })(s)
            : _(s, s.length);
        }
        function g(e) {
          var t = this._events;
          if (void 0 !== t) {
            var n = t[e];
            if ('function' == typeof n) return 1;
            if (void 0 !== n) return n.length;
          }
          return 0;
        }
        function _(e, t) {
          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
          return n;
        }
        function b(e, t, n, r) {
          if ('function' == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
          else {
            if ('function' != typeof e.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof e
              );
            e.addEventListener(t, function s(i) {
              r.once && e.removeEventListener(t, s), n(i);
            });
          }
        }
        Object.defineProperty(a, 'defaultMaxListeners', {
          enumerable: !0,
          get: function () {
            return u;
          },
          set: function (e) {
            if ('number' != typeof e || e < 0 || c(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            u = e;
          },
        }),
          (a.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (a.prototype.setMaxListeners = function (e) {
            if ('number' != typeof e || e < 0 || c(e))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            return (this._maxListeners = e), this;
          }),
          (a.prototype.getMaxListeners = function () {
            return f(this);
          }),
          (a.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t.push(arguments[n]);
            var r = 'error' === e,
              s = this._events;
            if (void 0 !== s) r = r && void 0 === s.error;
            else if (!r) return !1;
            if (r) {
              var i;
              if ((t.length > 0 && (i = t[0]), i instanceof Error)) throw i;
              var c = new Error(
                'Unhandled error.' + (i ? ' (' + i.message + ')' : '')
              );
              throw ((c.context = i), c);
            }
            var a = s[e];
            if (void 0 === a) return !1;
            if ('function' == typeof a) o(a, this, t);
            else {
              var u = a.length,
                l = _(a, u);
              for (n = 0; n < u; ++n) o(l[n], this, t);
            }
            return !0;
          }),
          (a.prototype.addListener = function (e, t) {
            return d(this, e, t, !1);
          }),
          (a.prototype.on = a.prototype.addListener),
          (a.prototype.prependListener = function (e, t) {
            return d(this, e, t, !0);
          }),
          (a.prototype.once = function (e, t) {
            return l(t), this.on(e, p(this, e, t)), this;
          }),
          (a.prototype.prependOnceListener = function (e, t) {
            return l(t), this.prependListener(e, p(this, e, t)), this;
          }),
          (a.prototype.removeListener = function (e, t) {
            var n, r, s, i, o;
            if ((l(t), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[e],
                  r.removeListener &&
                    this.emit('removeListener', e, n.listener || t));
            else if ('function' != typeof n) {
              for (s = -1, i = n.length - 1; i >= 0; i--)
                if (n[i] === t || n[i].listener === t) {
                  (o = n[i].listener), (s = i);
                  break;
                }
              if (s < 0) return this;
              0 === s
                ? n.shift()
                : (function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop();
                  })(n, s),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener &&
                  this.emit('removeListener', e, o || t);
            }
            return this;
          }),
          (a.prototype.off = a.prototype.removeListener),
          (a.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== n[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete n[e]),
                this
              );
            if (0 === arguments.length) {
              var s,
                i = Object.keys(n);
              for (r = 0; r < i.length; ++r)
                'removeListener' !== (s = i[r]) && this.removeAllListeners(s);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ('function' == typeof (t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t)
              for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
          }),
          (a.prototype.listeners = function (e) {
            return m(this, e, !0);
          }),
          (a.prototype.rawListeners = function (e) {
            return m(this, e, !1);
          }),
          (a.listenerCount = function (e, t) {
            return 'function' == typeof e.listenerCount
              ? e.listenerCount(t)
              : g.call(e, t);
          }),
          (a.prototype.listenerCount = g),
          (a.prototype.eventNames = function () {
            return this._eventsCount > 0 ? r(this._events) : [];
          });
      },
      './node_modules/process/browser.js': (e) => {
        var t,
          n,
          r = (e.exports = {});
        function s() {
          throw new Error('setTimeout has not been defined');
        }
        function i() {
          throw new Error('clearTimeout has not been defined');
        }
        function o(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === s || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = 'function' == typeof setTimeout ? setTimeout : s;
          } catch (e) {
            t = s;
          }
          try {
            n = 'function' == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            n = i;
          }
        })();
        var c,
          a = [],
          u = !1,
          l = -1;
        function f() {
          u &&
            c &&
            ((u = !1),
            c.length ? (a = c.concat(a)) : (l = -1),
            a.length && d());
        }
        function d() {
          if (!u) {
            var e = o(f);
            u = !0;
            for (var t = a.length; t; ) {
              for (c = a, a = []; ++l < t; ) c && c[l].run();
              (l = -1), (t = a.length);
            }
            (c = null),
              (u = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === i || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              })(e);
          }
        }
        function h(e, t) {
          (this.fun = e), (this.array = t);
        }
        function p() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          a.push(new h(e, t)), 1 !== a.length || u || o(d);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = 'browser'),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ''),
          (r.versions = {}),
          (r.on = p),
          (r.addListener = p),
          (r.once = p),
          (r.off = p),
          (r.removeListener = p),
          (r.removeAllListeners = p),
          (r.emit = p),
          (r.prependListener = p),
          (r.prependOnceListener = p),
          (r.listeners = function (e) {
            return [];
          }),
          (r.binding = function (e) {
            throw new Error('process.binding is not supported');
          }),
          (r.cwd = function () {
            return '/';
          }),
          (r.chdir = function (e) {
            throw new Error('process.chdir is not supported');
          }),
          (r.umask = function () {
            return 0;
          });
      },
    },
    t = {};
  function n(r) {
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  n.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })();
  (() => {
    'use strict';
    const e = n(
        './node_modules/@trezor/blockchain-link/lib/constants/errors.js'
      ),
      t = n('./node_modules/@trezor/blockchain-link/lib/constants/index.js'),
      r = n('./node_modules/@trezor/blockchain-link/lib/workers/base.js'),
      s = n(
        './node_modules/@trezor/blockchain-link/lib/workers/blockbook/websocket.js'
      ),
      i = n(
        './node_modules/@trezor/blockchain-link/lib/workers/blockbook/utils.js'
      ),
      o = ({ state: e, post: n }, r) => {
        if (!r.tx) return;
        const s = r.address,
          o = e.getAccount(s);
        n({
          id: -1,
          type: t.RESPONSES.NOTIFICATION,
          payload: {
            type: 'notification',
            payload: {
              descriptor: o ? o.descriptor : s,
              tx: o
                ? i.transformTransaction(o.descriptor, o.addresses, r.tx)
                : i.transformTransaction(s, void 0, r.tx),
            },
          },
        });
      },
      c = async (e) => {
        if (e.state.getSubscription('block')) return { subscribed: !0 };
        const n = await e.connect();
        return (
          e.state.addSubscription('block'),
          n.on('block', (n) =>
            (({ post: e }, n) => {
              e({
                id: -1,
                type: t.RESPONSES.NOTIFICATION,
                payload: {
                  type: 'block',
                  payload: { blockHeight: n.height, blockHash: n.hash },
                },
              });
            })(e, n)
          ),
          n.subscribeBlock()
        );
      },
      a = async (e, n) => {
        const r = await e.connect();
        return (
          e.state.getSubscription('fiatRates') ||
            (e.state.addSubscription('fiatRates'),
            r.on('fiatRates', (n) =>
              (({ post: e }, n) => {
                e({
                  id: -1,
                  type: t.RESPONSES.NOTIFICATION,
                  payload: { type: 'fiatRates', payload: { rates: n.rates } },
                });
              })(e, n)
            )),
          r.subscribeFiatRates(n)
        );
      },
      u = async (n) => {
        const { payload: r } = n;
        let s;
        if ('accounts' === r.type)
          s = await (async (e, t) => {
            const n = await e.connect(),
              { state: r } = e;
            return (
              r.addAccounts(t),
              r.getSubscription('notification') ||
                (n.on('notification', (t) => o(e, t)),
                r.addSubscription('notification')),
              n.subscribeAddresses(r.getAddresses())
            );
          })(n, r.accounts);
        else if ('addresses' === r.type)
          s = await (async (e, t) => {
            const n = await e.connect(),
              { state: r } = e;
            return (
              r.addAddresses(t),
              r.getSubscription('notification') ||
                (n.on('notification', (t) => o(e, t)),
                r.addSubscription('notification')),
              n.subscribeAddresses(r.getAddresses())
            );
          })(n, r.addresses);
        else if ('block' === r.type) s = await c(n);
        else {
          if ('fiatRates' !== r.type)
            throw new e.CustomError('invalid_param', '+type');
          s = await a(n, r.currency);
        }
        return { type: t.RESPONSES.SUBSCRIBE, payload: s };
      },
      l = (n) => {
        switch (n.type) {
          case t.MESSAGES.GET_INFO:
            return (async (e) => {
              const n = await e.connect(),
                r = await n.getServerInfo();
              return {
                type: t.RESPONSES.GET_INFO,
                payload: Object.assign(
                  { url: n.options.url },
                  i.transformServerInfo(r)
                ),
              };
            })(n);
          case t.MESSAGES.GET_BLOCK_HASH:
            return (async (e) => {
              const n = await e.connect(),
                r = await n.getBlockHash(e.payload);
              return { type: t.RESPONSES.GET_BLOCK_HASH, payload: r.hash };
            })(n);
          case t.MESSAGES.GET_ACCOUNT_INFO:
            return (async (e) => {
              const { payload: n } = e,
                r = await e.connect(),
                s = await r.getAccountInfo(n);
              return {
                type: t.RESPONSES.GET_ACCOUNT_INFO,
                payload: i.transformAccountInfo(s),
              };
            })(n);
          case t.MESSAGES.GET_ACCOUNT_UTXO:
            return (async (e) => {
              const { payload: n } = e,
                r = await e.connect(),
                s = await r.getAccountUtxo(n);
              return {
                type: t.RESPONSES.GET_ACCOUNT_UTXO,
                payload: i.transformAccountUtxo(s),
              };
            })(n);
          case t.MESSAGES.GET_TRANSACTION:
            return (async (e) => {
              const n = await e.connect(),
                r = await n.getTransaction(e.payload);
              return {
                type: t.RESPONSES.GET_TRANSACTION,
                payload: { type: 'blockbook', tx: r },
              };
            })(n);
          case t.MESSAGES.GET_ACCOUNT_BALANCE_HISTORY:
            return (async (e) => {
              const { payload: n } = e,
                r = await e.connect(),
                s = await r.getAccountBalanceHistory(n);
              return {
                type: t.RESPONSES.GET_ACCOUNT_BALANCE_HISTORY,
                payload: s,
              };
            })(n);
          case t.MESSAGES.GET_CURRENT_FIAT_RATES:
            return (async (e) => {
              const { payload: n } = e,
                r = await e.connect(),
                s = await r.getCurrentFiatRates(n);
              return { type: t.RESPONSES.GET_CURRENT_FIAT_RATES, payload: s };
            })(n);
          case t.MESSAGES.GET_FIAT_RATES_FOR_TIMESTAMPS:
            return (async (e) => {
              const { payload: n } = e,
                r = await e.connect(),
                { tickers: s } = await r.getFiatRatesForTimestamps(n);
              return {
                type: t.RESPONSES.GET_FIAT_RATES_FOR_TIMESTAMPS,
                payload: { tickers: s },
              };
            })(n);
          case t.MESSAGES.GET_FIAT_RATES_TICKERS_LIST:
            return (async (e) => {
              const { payload: n } = e,
                r = await e.connect(),
                s = await r.getFiatRatesTickersList(n);
              return {
                type: t.RESPONSES.GET_FIAT_RATES_TICKERS_LIST,
                payload: {
                  ts: s.ts,
                  availableCurrencies: s.available_currencies,
                },
              };
            })(n);
          case t.MESSAGES.ESTIMATE_FEE:
            return (async (e) => {
              const n = await e.connect(),
                r = await n.estimateFee(e.payload);
              return { type: t.RESPONSES.ESTIMATE_FEE, payload: r };
            })(n);
          case t.MESSAGES.PUSH_TRANSACTION:
            return (async (e) => {
              const n = await e.connect(),
                r = await n.pushTransaction(e.payload);
              return { type: t.RESPONSES.PUSH_TRANSACTION, payload: r.result };
            })(n);
          case t.MESSAGES.SUBSCRIBE:
            return u(n);
          case t.MESSAGES.UNSUBSCRIBE:
            return (async (n) => {
              const { payload: r } = n;
              let s;
              if ('accounts' === r.type)
                s = await (async ({ state: e, connect: t }, n) => {
                  e.removeAccounts(n || e.getAccounts());
                  const r = await t(),
                    s = e.getAddresses();
                  return s.length < 1
                    ? (r.removeAllListeners('notification'),
                      e.removeSubscription('notification'),
                      r.unsubscribeAddresses())
                    : r.subscribeAddresses(s);
                })(n, r.accounts);
              else if ('addresses' === r.type)
                s = await (async ({ state: e, connect: t }, n) => {
                  const r = await t();
                  n || e.removeAccounts(e.getAccounts());
                  const s = e.removeAddresses(n || e.getAddresses());
                  return s.length < 1
                    ? (r.removeAllListeners('notification'),
                      e.removeSubscription('notification'),
                      r.unsubscribeAddresses())
                    : r.subscribeAddresses(s);
                })(n, r.addresses);
              else if ('block' === r.type)
                s = await (async ({ state: e, connect: t }) => {
                  if (!e.getSubscription('block')) return { subscribed: !1 };
                  const n = await t();
                  return (
                    n.removeAllListeners('block'),
                    e.removeSubscription('block'),
                    n.unsubscribeBlock()
                  );
                })(n);
              else {
                if ('fiatRates' !== r.type)
                  throw new e.CustomError('invalid_param', '+type');
                s = await (async ({ state: e, connect: t }) => {
                  if (!e.getSubscription('fiatRates'))
                    return { subscribed: !1 };
                  const n = await t();
                  return (
                    n.removeAllListeners('fiatRates'),
                    e.removeSubscription('fiatRates'),
                    n.unsubscribeFiatRates()
                  );
                })(n);
              }
              return { type: t.RESPONSES.UNSUBSCRIBE, payload: s };
            })(n);
          default:
            throw new e.CustomError('worker_unknown_request', `+${n.type}`);
        }
      };
    class f extends r.BaseWorker {
      cleanup() {
        this.api && (this.api.dispose(), this.api.removeAllListeners()),
          super.cleanup();
      }
      async connect() {
        if (this.api && this.api.isConnected()) return this.api;
        const { timeout: n, pingTimeout: r, keepAlive: i } = this.settings;
        this.validateEndpoints(),
          this.debug('Connecting to', this.endpoints[0]);
        const o = new s.BlockbookAPI({
          url: this.endpoints[0],
          timeout: n,
          pingTimeout: r,
          keepAlive: i,
          agent: this.proxyAgent,
        });
        try {
          await o.connect(), (this.api = o);
        } catch (t) {
          if (
            (this.debug('Websocket connection failed', t),
            (this.api = void 0),
            this.endpoints.splice(0, 1),
            this.endpoints.length < 1)
          )
            throw new e.CustomError('connect', 'All backends are down');
          return this.connect();
        }
        return (
          o.on('disconnected', () => {
            this.post({ id: -1, type: t.RESPONSES.DISCONNECTED, payload: !0 }),
              this.cleanup();
          }),
          this.post({ id: -1, type: t.RESPONSES.CONNECTED }),
          this.debug('Connected'),
          o
        );
      }
      disconnect() {
        this.api && this.api.disconnect();
      }
      async messageHandler(e) {
        try {
          if (await super.messageHandler(e)) return !0;
          const t = Object.assign(Object.assign({}, e.data), {
              connect: () => this.connect(),
              post: (e) => this.post(e),
              state: this.state,
            }),
            n = await l(t);
          this.post(Object.assign({ id: e.data.id }, n));
        } catch (t) {
          this.errorResponse(e.data.id, t);
        }
      }
    }
    if (
      (function () {
        return new f();
      },
      'worker' === r.CONTEXT)
    ) {
      const e = new f();
      onmessage = e.messageHandler.bind(e);
    }
  })();
})();
