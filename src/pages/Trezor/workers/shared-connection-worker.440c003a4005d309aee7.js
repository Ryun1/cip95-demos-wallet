(() => {
  var e = {
      './node_modules/@trezor/transport/lib/utils/defered.js': (e, t, n) => {
        'use strict';
        var r = n('./node_modules/es6-promise/dist/es6-promise.js').Promise;
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.resolveTimeoutPromise = t.create = void 0),
          (t.create = function () {
            let e = () => {},
              t = () => {};
            const n = new r((n, r) => {
                (e = n), (t = r);
              }),
              o = n.then(() => {
                throw new Error('Promise is always rejecting');
              });
            return (
              o.catch(() => {}),
              { resolve: e, reject: t, promise: n, rejectingPromise: o }
            );
          }),
          (t.resolveTimeoutPromise = function (e, t) {
            return new r((n) => {
              setTimeout(() => {
                n(t);
              }, e);
            });
          });
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
          var o = Array.isArray
              ? Array.isArray
              : function (e) {
                  return '[object Array]' === Object.prototype.toString.call(e);
                },
            i = 0,
            s = void 0,
            u = void 0,
            c = function (e, t) {
              (b[i] = e), (b[i + 1] = t), 2 === (i += 2) && (u ? u(T) : A());
            };
          function a(e) {
            u = e;
          }
          function l(e) {
            c = e;
          }
          var f = 'undefined' != typeof window ? window : void 0,
            h = f || {},
            d = h.MutationObserver || h.WebKitMutationObserver,
            p =
              'undefined' == typeof self &&
              void 0 !== r &&
              '[object process]' === {}.toString.call(r),
            v =
              'undefined' != typeof Uint8ClampedArray &&
              'undefined' != typeof importScripts &&
              'undefined' != typeof MessageChannel;
          function y() {
            return function () {
              return r.nextTick(T);
            };
          }
          function m() {
            return void 0 !== s
              ? function () {
                  s(T);
                }
              : w();
          }
          function _() {
            var e = 0,
              t = new d(T),
              n = document.createTextNode('');
            return (
              t.observe(n, { characterData: !0 }),
              function () {
                n.data = e = ++e % 2;
              }
            );
          }
          function g() {
            var e = new MessageChannel();
            return (
              (e.port1.onmessage = T),
              function () {
                return e.port2.postMessage(0);
              }
            );
          }
          function w() {
            var e = setTimeout;
            return function () {
              return e(T, 1);
            };
          }
          var b = new Array(1e3);
          function T() {
            for (var e = 0; e < i; e += 2)
              (0, b[e])(b[e + 1]), (b[e] = void 0), (b[e + 1] = void 0);
            i = 0;
          }
          function j() {
            try {
              var e = Function('return this')().require('vertx');
              return (s = e.runOnLoop || e.runOnContext), m();
            } catch (e) {
              return w();
            }
          }
          var A = void 0;
          function E(e, t) {
            var n = this,
              r = new this.constructor(P);
            void 0 === r[k] && J(r);
            var o = n._state;
            if (o) {
              var i = arguments[o - 1];
              c(function () {
                return B(o, r, i, n._result);
              });
            } else W(n, r, e, t);
            return r;
          }
          function S(e) {
            var t = this;
            if (e && 'object' == typeof e && e.constructor === t) return e;
            var n = new t(P);
            return D(n, e), n;
          }
          A = p ? y() : d ? _() : v ? g() : void 0 === f ? j() : w();
          var k = Math.random().toString(36).substring(2);
          function P() {}
          var x = void 0,
            O = 1,
            M = 2;
          function C() {
            return new TypeError('You cannot resolve a promise with itself');
          }
          function L() {
            return new TypeError(
              'A promises callback cannot return that same promise.'
            );
          }
          function q(e, t, n, r) {
            try {
              e.call(t, n, r);
            } catch (e) {
              return e;
            }
          }
          function F(e, t, n) {
            c(function (e) {
              var r = !1,
                o = q(
                  n,
                  t,
                  function (n) {
                    r || ((r = !0), t !== n ? D(e, n) : N(e, n));
                  },
                  function (t) {
                    r || ((r = !0), U(e, t));
                  },
                  'Settle: ' + (e._label || ' unknown promise')
                );
              !r && o && ((r = !0), U(e, o));
            }, e);
          }
          function Y(e, t) {
            t._state === O
              ? N(e, t._result)
              : t._state === M
              ? U(e, t._result)
              : W(
                  t,
                  void 0,
                  function (t) {
                    return D(e, t);
                  },
                  function (t) {
                    return U(e, t);
                  }
                );
          }
          function z(e, n, r) {
            n.constructor === e.constructor &&
            r === E &&
            n.constructor.resolve === S
              ? Y(e, n)
              : void 0 === r
              ? N(e, n)
              : t(r)
              ? F(e, n, r)
              : N(e, n);
          }
          function D(t, n) {
            if (t === n) U(t, C());
            else if (e(n)) {
              var r = void 0;
              try {
                r = n.then;
              } catch (e) {
                return void U(t, e);
              }
              z(t, n, r);
            } else N(t, n);
          }
          function K(e) {
            e._onerror && e._onerror(e._result), $(e);
          }
          function N(e, t) {
            e._state === x &&
              ((e._result = t),
              (e._state = O),
              0 !== e._subscribers.length && c($, e));
          }
          function U(e, t) {
            e._state === x && ((e._state = M), (e._result = t), c(K, e));
          }
          function W(e, t, n, r) {
            var o = e._subscribers,
              i = o.length;
            (e._onerror = null),
              (o[i] = t),
              (o[i + O] = n),
              (o[i + M] = r),
              0 === i && e._state && c($, e);
          }
          function $(e) {
            var t = e._subscribers,
              n = e._state;
            if (0 !== t.length) {
              for (
                var r = void 0, o = void 0, i = e._result, s = 0;
                s < t.length;
                s += 3
              )
                (r = t[s]), (o = t[s + n]), r ? B(n, r, o, i) : o(i);
              e._subscribers.length = 0;
            }
          }
          function B(e, n, r, o) {
            var i = t(r),
              s = void 0,
              u = void 0,
              c = !0;
            if (i) {
              try {
                s = r(o);
              } catch (e) {
                (c = !1), (u = e);
              }
              if (n === s) return void U(n, L());
            } else s = o;
            n._state !== x ||
              (i && c
                ? D(n, s)
                : !1 === c
                ? U(n, u)
                : e === O
                ? N(n, s)
                : e === M && U(n, s));
          }
          function G(e, t) {
            try {
              t(
                function (t) {
                  D(e, t);
                },
                function (t) {
                  U(e, t);
                }
              );
            } catch (t) {
              U(e, t);
            }
          }
          var H = 0;
          function I() {
            return H++;
          }
          function J(e) {
            (e[k] = H++),
              (e._state = void 0),
              (e._result = void 0),
              (e._subscribers = []);
          }
          function Q() {
            return new Error('Array Methods must be provided an Array');
          }
          var R = (function () {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(P)),
                this.promise[k] || J(this.promise),
                o(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? N(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        0 === this._remaining && N(this.promise, this._result)))
                  : U(this.promise, Q());
            }
            return (
              (e.prototype._enumerate = function (e) {
                for (var t = 0; this._state === x && t < e.length; t++)
                  this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  r = n.resolve;
                if (r === S) {
                  var o = void 0,
                    i = void 0,
                    s = !1;
                  try {
                    o = e.then;
                  } catch (e) {
                    (s = !0), (i = e);
                  }
                  if (o === E && e._state !== x)
                    this._settledAt(e._state, t, e._result);
                  else if ('function' != typeof o)
                    this._remaining--, (this._result[t] = e);
                  else if (n === ne) {
                    var u = new n(P);
                    s ? U(u, i) : z(u, e, o), this._willSettleAt(u, t);
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
                r._state === x &&
                  (this._remaining--,
                  e === M ? U(r, n) : (this._result[t] = n)),
                  0 === this._remaining && N(r, this._result);
              }),
              (e.prototype._willSettleAt = function (e, t) {
                var n = this;
                W(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(O, t, e);
                  },
                  function (e) {
                    return n._settledAt(M, t, e);
                  }
                );
              }),
              e
            );
          })();
          function V(e) {
            return new R(this, e).promise;
          }
          function X(e) {
            var t = this;
            return o(e)
              ? new t(function (n, r) {
                  for (var o = e.length, i = 0; i < o; i++)
                    t.resolve(e[i]).then(n, r);
                })
              : new t(function (e, t) {
                  return t(new TypeError('You must pass an array to race.'));
                });
          }
          function Z(e) {
            var t = new this(P);
            return U(t, e), t;
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
              (this[k] = I()),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                P !== t &&
                  ('function' != typeof t && ee(),
                  this instanceof e ? G(this, t) : te());
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
            (ne.prototype.then = E),
            (ne.all = V),
            (ne.race = X),
            (ne.resolve = S),
            (ne.reject = Z),
            (ne._setScheduler = a),
            (ne._setAsap = l),
            (ne._asap = c),
            (ne.polyfill = re),
            (ne.Promise = ne),
            ne
          );
        })();
      },
      './node_modules/process/browser.js': (e) => {
        var t,
          n,
          r = (e.exports = {});
        function o() {
          throw new Error('setTimeout has not been defined');
        }
        function i() {
          throw new Error('clearTimeout has not been defined');
        }
        function s(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout)
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
            t = 'function' == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            t = o;
          }
          try {
            n = 'function' == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            n = i;
          }
        })();
        var u,
          c = [],
          a = !1,
          l = -1;
        function f() {
          a &&
            u &&
            ((a = !1),
            u.length ? (c = u.concat(c)) : (l = -1),
            c.length && h());
        }
        function h() {
          if (!a) {
            var e = s(f);
            a = !0;
            for (var t = c.length; t; ) {
              for (u = c, c = []; ++l < t; ) u && u[l].run();
              (l = -1), (t = c.length);
            }
            (u = null),
              (a = !1),
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
        function d(e, t) {
          (this.fun = e), (this.array = t);
        }
        function p() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          c.push(new d(e, t)), 1 !== c.length || a || s(h);
        }),
          (d.prototype.run = function () {
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
    var o = t[r];
    if (void 0 !== o) return o.exports;
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
    var e = n('./node_modules/es6-promise/dist/es6-promise.js').Promise;
    const t = n('./node_modules/@trezor/transport/lib/utils/defered.js'),
      r = {},
      o = {};
    let i = null,
      s = e.resolve();
    function u() {
      const e = (0, t.create)();
      (i = e), setTimeout(() => e.reject(new Error('Timed out')), 1e4);
    }
    function c(e) {
      null != i && i.resolve(e);
    }
    function a() {
      return null == i ? e.reject(new Error('???')) : i.promise;
    }
    function l(e) {
      const t = s.then(() => e());
      s = t.catch(() => {});
    }
    function f(e, t, n) {
      n.postMessage({ id: t, message: e });
    }
    function h(e) {
      c({ id: e });
    }
    function d(t, n, i) {
      if (null != i) {
        const e = {};
        i.forEach((t) => {
          e[t.path] = !0;
        }),
          Object.keys(r).forEach((e) => {
            r[e] || delete r[e];
          }),
          Object.keys(o).forEach((e) => {
            o[e] || delete o[e];
          });
      }
      return (
        f({ type: 'sessions', debugSessions: o, normalSessions: r }, t, n),
        e.resolve()
      );
    }
    let p = 0;
    function v({ id: t, message: n }, i) {
      if ('acquire-intent' === n.type) {
        const { path: s } = n,
          { previous: c } = n,
          { debug: h } = n;
        l(() =>
          (function (t, n, i, s, c) {
            let l = !1;
            const h = c ? o : r,
              d = c ? r : o,
              v = h[t];
            return (
              (l = null == v ? null != s : s !== v),
              l
                ? (f({ type: 'wrong-previous-session' }, n, i), e.resolve())
                : (u(),
                  f({ type: 'other-session', otherSession: d[t] }, n, i),
                  a().then((e) => {
                    if (e.good) {
                      p++;
                      let n = p.toString();
                      c && (n = `debug${n}`),
                        (h[t] = n),
                        f({ type: 'session-number', number: n }, e.id, i);
                    } else f({ type: 'ok' }, e.id, i);
                  }))
            );
          })(s, t, i, c, h)
        );
      }
      if (
        ('acquire-done' === n.type &&
          (function (e) {
            c({ good: !0, id: e });
          })(t),
        'acquire-failed' === n.type &&
          (function (e) {
            c({ good: !1, id: e });
          })(t),
        'get-sessions' === n.type && l(() => d(t, i)),
        'get-sessions-and-disconnect' === n.type)
      ) {
        const { devices: e } = n;
        l(() => d(t, i, e));
      }
      if ('release-onclose' === n.type) {
        const { session: t } = n;
        l(() =>
          (function (t) {
            let n = null;
            if (
              (Object.keys(r).forEach((e) => {
                r[e] === t && (n = e);
              }),
              null == n)
            )
              return e.resolve();
            const i = n;
            return delete r[i], delete o[i], e.resolve();
          })(t)
        );
      }
      if ('release-intent' === n.type) {
        const { session: s } = n,
          { debug: c } = n;
        l(() =>
          (function (t, n, i, s) {
            let c = null;
            const l = n ? o : r,
              h = n ? r : o;
            if (
              (Object.keys(l).forEach((e) => {
                l[e] === t && (c = e);
              }),
              null == c)
            )
              return f({ type: 'double-release' }, i, s), e.resolve();
            const d = c,
              p = h[d];
            return (
              u(),
              f({ type: 'path', path: d, otherSession: p }, i, s),
              a().then((e) => {
                delete l[d], f({ type: 'ok' }, e.id, s);
              })
            );
          })(s, c, t, i)
        );
      }
      'release-done' === n.type && h(t),
        'enumerate-intent' === n.type &&
          l(() =>
            (function (e, t) {
              return (
                u(),
                f({ type: 'ok' }, e, t),
                a().then((e) => {
                  f({ type: 'ok' }, e.id, t);
                })
              );
            })(t, i)
          ),
        'enumerate-done' === n.type && h(t);
    }
    'undefined' != typeof onconnect &&
      (onconnect = function (e) {
        const t = e.ports[0];
        t.onmessage = function (e) {
          v(e.data, t);
        };
      });
  })();
})();
