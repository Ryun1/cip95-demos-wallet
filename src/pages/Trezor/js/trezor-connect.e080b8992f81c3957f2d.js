!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.TrezorConnect = t())
    : (e.TrezorConnect = t());
})(self, function () {
  return (() => {
    var e = {
        './node_modules/@babel/runtime/helpers/regeneratorRuntime.js': (
          e,
          t,
          n
        ) => {
          var r = n('./node_modules/es6-promise/dist/es6-promise.js').Promise,
            o = n('./node_modules/@babel/runtime/helpers/typeof.js').default;
          function i() {
            'use strict';
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (e.exports =
              i =
                function () {
                  return t;
                }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports);
            var t = {},
              n = Object.prototype,
              s = n.hasOwnProperty,
              a = 'function' == typeof Symbol ? Symbol : {},
              c = a.iterator || '@@iterator',
              u = a.asyncIterator || '@@asyncIterator',
              l = a.toStringTag || '@@toStringTag';
            function p(e, t, n) {
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              p({}, '');
            } catch (e) {
              p = function (e, t, n) {
                return (e[t] = n);
              };
            }
            function f(e, t, n, r) {
              var o = t && t.prototype instanceof m ? t : m,
                i = Object.create(o.prototype),
                s = new O(r || []);
              return (
                (i._invoke = (function (e, t, n) {
                  var r = 'suspendedStart';
                  return function (o, i) {
                    if ('executing' === r)
                      throw new Error('Generator is already running');
                    if ('completed' === r) {
                      if ('throw' === o) throw i;
                      return k();
                    }
                    for (n.method = o, n.arg = i; ; ) {
                      var s = n.delegate;
                      if (s) {
                        var a = T(s, n);
                        if (a) {
                          if (a === h) continue;
                          return a;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if ('suspendedStart' === r)
                          throw ((r = 'completed'), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      r = 'executing';
                      var c = d(e, t, n);
                      if ('normal' === c.type) {
                        if (
                          ((r = n.done ? 'completed' : 'suspendedYield'),
                          c.arg === h)
                        )
                          continue;
                        return { value: c.arg, done: n.done };
                      }
                      'throw' === c.type &&
                        ((r = 'completed'),
                        (n.method = 'throw'),
                        (n.arg = c.arg));
                    }
                  };
                })(e, n, s)),
                i
              );
            }
            function d(e, t, n) {
              try {
                return { type: 'normal', arg: e.call(t, n) };
              } catch (e) {
                return { type: 'throw', arg: e };
              }
            }
            t.wrap = f;
            var h = {};
            function m() {}
            function v() {}
            function y() {}
            var b = {};
            p(b, c, function () {
              return this;
            });
            var g = Object.getPrototypeOf,
              w = g && g(g(L([])));
            w && w !== n && s.call(w, c) && (b = w);
            var _ = (y.prototype = m.prototype = Object.create(b));
            function E(e) {
              ['next', 'throw', 'return'].forEach(function (t) {
                p(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function x(e, t) {
              function n(r, i, a, c) {
                var u = d(e[r], e, i);
                if ('throw' !== u.type) {
                  var l = u.arg,
                    p = l.value;
                  return p && 'object' == o(p) && s.call(p, '__await')
                    ? t.resolve(p.__await).then(
                        function (e) {
                          n('next', e, a, c);
                        },
                        function (e) {
                          n('throw', e, a, c);
                        }
                      )
                    : t.resolve(p).then(
                        function (e) {
                          (l.value = e), a(l);
                        },
                        function (e) {
                          return n('throw', e, a, c);
                        }
                      );
                }
                c(u.arg);
              }
              var r;
              this._invoke = function (e, o) {
                function i() {
                  return new t(function (t, r) {
                    n(e, o, t, r);
                  });
                }
                return (r = r ? r.then(i, i) : i());
              };
            }
            function T(e, t) {
              var n = e.iterator[t.method];
              if (void 0 === n) {
                if (((t.delegate = null), 'throw' === t.method)) {
                  if (
                    e.iterator.return &&
                    ((t.method = 'return'),
                    (t.arg = void 0),
                    T(e, t),
                    'throw' === t.method)
                  )
                    return h;
                  (t.method = 'throw'),
                    (t.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return h;
              }
              var r = d(n, e.iterator, t.arg);
              if ('throw' === r.type)
                return (
                  (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), h
                );
              var o = r.arg;
              return o
                ? o.done
                  ? ((t[e.resultName] = o.value),
                    (t.next = e.nextLoc),
                    'return' !== t.method &&
                      ((t.method = 'next'), (t.arg = void 0)),
                    (t.delegate = null),
                    h)
                  : o
                : ((t.method = 'throw'),
                  (t.arg = new TypeError('iterator result is not an object')),
                  (t.delegate = null),
                  h);
            }
            function S(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function B(e) {
              var t = e.completion || {};
              (t.type = 'normal'), delete t.arg, (e.completion = t);
            }
            function O(e) {
              (this.tryEntries = [{ tryLoc: 'root' }]),
                e.forEach(S, this),
                this.reset(!0);
            }
            function L(e) {
              if (e) {
                var t = e[c];
                if (t) return t.call(e);
                if ('function' == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var n = -1,
                    r = function t() {
                      for (; ++n < e.length; )
                        if (s.call(e, n))
                          return (t.value = e[n]), (t.done = !1), t;
                      return (t.value = void 0), (t.done = !0), t;
                    };
                  return (r.next = r);
                }
              }
              return { next: k };
            }
            function k() {
              return { value: void 0, done: !0 };
            }
            return (
              (v.prototype = y),
              p(_, 'constructor', y),
              p(y, 'constructor', v),
              (v.displayName = p(y, l, 'GeneratorFunction')),
              (t.isGeneratorFunction = function (e) {
                var t = 'function' == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === v || 'GeneratorFunction' === (t.displayName || t.name))
                );
              }),
              (t.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, y)
                    : ((e.__proto__ = y), p(e, l, 'GeneratorFunction')),
                  (e.prototype = Object.create(_)),
                  e
                );
              }),
              (t.awrap = function (e) {
                return { __await: e };
              }),
              E(x.prototype),
              p(x.prototype, u, function () {
                return this;
              }),
              (t.AsyncIterator = x),
              (t.async = function (e, n, o, i, s) {
                void 0 === s && (s = r);
                var a = new x(f(e, n, o, i), s);
                return t.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              E(_),
              p(_, l, 'Generator'),
              p(_, c, function () {
                return this;
              }),
              p(_, 'toString', function () {
                return '[object Generator]';
              }),
              (t.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return (
                  t.reverse(),
                  function n() {
                    for (; t.length; ) {
                      var r = t.pop();
                      if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                  }
                );
              }),
              (t.values = L),
              (O.prototype = {
                constructor: O,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = void 0),
                    this.tryEntries.forEach(B),
                    !e)
                  )
                    for (var t in this)
                      't' === t.charAt(0) &&
                        s.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = void 0);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ('throw' === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function n(n, r) {
                    return (
                      (i.type = 'throw'),
                      (i.arg = e),
                      (t.next = n),
                      r && ((t.method = 'next'), (t.arg = void 0)),
                      !!r
                    );
                  }
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r],
                      i = o.completion;
                    if ('root' === o.tryLoc) return n('end');
                    if (o.tryLoc <= this.prev) {
                      var a = s.call(o, 'catchLoc'),
                        c = s.call(o, 'finallyLoc');
                      if (a && c) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      } else if (a) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            'try statement without catch or finally'
                          );
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      s.call(r, 'finallyLoc') &&
                      this.prev < r.finallyLoc
                    ) {
                      var o = r;
                      break;
                    }
                  }
                  o &&
                    ('break' === e || 'continue' === e) &&
                    o.tryLoc <= t &&
                    t <= o.finallyLoc &&
                    (o = null);
                  var i = o ? o.completion : {};
                  return (
                    (i.type = e),
                    (i.arg = t),
                    o
                      ? ((this.method = 'next'), (this.next = o.finallyLoc), h)
                      : this.complete(i)
                  );
                },
                complete: function (e, t) {
                  if ('throw' === e.type) throw e.arg;
                  return (
                    'break' === e.type || 'continue' === e.type
                      ? (this.next = e.arg)
                      : 'return' === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === e.type && t && (this.next = t),
                    h
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), B(n), h;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ('throw' === r.type) {
                        var o = r.arg;
                        B(n);
                      }
                      return o;
                    }
                  }
                  throw new Error('illegal catch attempt');
                },
                delegateYield: function (e, t, n) {
                  return (
                    (this.delegate = {
                      iterator: L(e),
                      resultName: t,
                      nextLoc: n,
                    }),
                    'next' === this.method && (this.arg = void 0),
                    h
                  );
                },
              }),
              t
            );
          }
          (e.exports = i),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        },
        './node_modules/@babel/runtime/helpers/typeof.js': (e) => {
          function t(n) {
            return (
              (e.exports = t =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t(n)
            );
          }
          (e.exports = t),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        },
        './node_modules/@babel/runtime/regenerator/index.js': (e, t, n) => {
          e.exports = n(
            './node_modules/@babel/runtime/helpers/regeneratorRuntime.js'
          )();
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
                    return (
                      '[object Array]' === Object.prototype.toString.call(e)
                    );
                  },
              i = 0,
              s = void 0,
              a = void 0,
              c = function (e, t) {
                (_[i] = e), (_[i + 1] = t), 2 === (i += 2) && (a ? a(E) : T());
              };
            function u(e) {
              a = e;
            }
            function l(e) {
              c = e;
            }
            var p = 'undefined' != typeof window ? window : void 0,
              f = p || {},
              d = f.MutationObserver || f.WebKitMutationObserver,
              h =
                'undefined' == typeof self &&
                void 0 !== r &&
                '[object process]' === {}.toString.call(r),
              m =
                'undefined' != typeof Uint8ClampedArray &&
                'undefined' != typeof importScripts &&
                'undefined' != typeof MessageChannel;
            function v() {
              return function () {
                return r.nextTick(E);
              };
            }
            function y() {
              return void 0 !== s
                ? function () {
                    s(E);
                  }
                : w();
            }
            function b() {
              var e = 0,
                t = new d(E),
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
                (e.port1.onmessage = E),
                function () {
                  return e.port2.postMessage(0);
                }
              );
            }
            function w() {
              var e = setTimeout;
              return function () {
                return e(E, 1);
              };
            }
            var _ = new Array(1e3);
            function E() {
              for (var e = 0; e < i; e += 2)
                (0, _[e])(_[e + 1]), (_[e] = void 0), (_[e + 1] = void 0);
              i = 0;
            }
            function x() {
              try {
                var e = Function('return this')().require('vertx');
                return (s = e.runOnLoop || e.runOnContext), y();
              } catch (e) {
                return w();
              }
            }
            var T = void 0;
            function S(e, t) {
              var n = this,
                r = new this.constructor(L);
              void 0 === r[O] && J(r);
              var o = n._state;
              if (o) {
                var i = arguments[o - 1];
                c(function () {
                  return W(o, r, i, n._result);
                });
              } else D(n, r, e, t);
              return r;
            }
            function B(e) {
              var t = this;
              if (e && 'object' == typeof e && e.constructor === t) return e;
              var n = new t(L);
              return z(n, e), n;
            }
            T = h ? v() : d ? b() : m ? g() : void 0 === p ? x() : w();
            var O = Math.random().toString(36).substring(2);
            function L() {}
            var k = void 0,
              C = 1,
              I = 2;
            function F() {
              return new TypeError('You cannot resolve a promise with itself');
            }
            function U() {
              return new TypeError(
                'A promises callback cannot return that same promise.'
              );
            }
            function R(e, t, n, r) {
              try {
                e.call(t, n, r);
              } catch (e) {
                return e;
              }
            }
            function N(e, t, n) {
              c(function (e) {
                var r = !1,
                  o = R(
                    n,
                    t,
                    function (n) {
                      r || ((r = !0), t !== n ? z(e, n) : j(e, n));
                    },
                    function (t) {
                      r || ((r = !0), M(e, t));
                    },
                    'Settle: ' + (e._label || ' unknown promise')
                  );
                !r && o && ((r = !0), M(e, o));
              }, e);
            }
            function P(e, t) {
              t._state === C
                ? j(e, t._result)
                : t._state === I
                ? M(e, t._result)
                : D(
                    t,
                    void 0,
                    function (t) {
                      return z(e, t);
                    },
                    function (t) {
                      return M(e, t);
                    }
                  );
            }
            function Q(e, n, r) {
              n.constructor === e.constructor &&
              r === S &&
              n.constructor.resolve === B
                ? P(e, n)
                : void 0 === r
                ? j(e, n)
                : t(r)
                ? N(e, n, r)
                : j(e, n);
            }
            function z(t, n) {
              if (t === n) M(t, F());
              else if (e(n)) {
                var r = void 0;
                try {
                  r = n.then;
                } catch (e) {
                  return void M(t, e);
                }
                Q(t, n, r);
              } else j(t, n);
            }
            function A(e) {
              e._onerror && e._onerror(e._result), G(e);
            }
            function j(e, t) {
              e._state === k &&
                ((e._result = t),
                (e._state = C),
                0 !== e._subscribers.length && c(G, e));
            }
            function M(e, t) {
              e._state === k && ((e._state = I), (e._result = t), c(A, e));
            }
            function D(e, t, n, r) {
              var o = e._subscribers,
                i = o.length;
              (e._onerror = null),
                (o[i] = t),
                (o[i + C] = n),
                (o[i + I] = r),
                0 === i && e._state && c(G, e);
            }
            function G(e) {
              var t = e._subscribers,
                n = e._state;
              if (0 !== t.length) {
                for (
                  var r = void 0, o = void 0, i = e._result, s = 0;
                  s < t.length;
                  s += 3
                )
                  (r = t[s]), (o = t[s + n]), r ? W(n, r, o, i) : o(i);
                e._subscribers.length = 0;
              }
            }
            function W(e, n, r, o) {
              var i = t(r),
                s = void 0,
                a = void 0,
                c = !0;
              if (i) {
                try {
                  s = r(o);
                } catch (e) {
                  (c = !1), (a = e);
                }
                if (n === s) return void M(n, U());
              } else s = o;
              n._state !== k ||
                (i && c
                  ? z(n, s)
                  : !1 === c
                  ? M(n, a)
                  : e === C
                  ? j(n, s)
                  : e === I && M(n, s));
            }
            function V(e, t) {
              try {
                t(
                  function (t) {
                    z(e, t);
                  },
                  function (t) {
                    M(e, t);
                  }
                );
              } catch (t) {
                M(e, t);
              }
            }
            var H = 0;
            function q() {
              return H++;
            }
            function J(e) {
              (e[O] = H++),
                (e._state = void 0),
                (e._result = void 0),
                (e._subscribers = []);
            }
            function Y() {
              return new Error('Array Methods must be provided an Array');
            }
            var K = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(L)),
                  this.promise[O] || J(this.promise),
                  o(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? j(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            j(this.promise, this._result)))
                    : M(this.promise, Y());
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; this._state === k && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var n = this._instanceConstructor,
                    r = n.resolve;
                  if (r === B) {
                    var o = void 0,
                      i = void 0,
                      s = !1;
                    try {
                      o = e.then;
                    } catch (e) {
                      (s = !0), (i = e);
                    }
                    if (o === S && e._state !== k)
                      this._settledAt(e._state, t, e._result);
                    else if ('function' != typeof o)
                      this._remaining--, (this._result[t] = e);
                    else if (n === ne) {
                      var a = new n(L);
                      s ? M(a, i) : Q(a, e, o), this._willSettleAt(a, t);
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
                  r._state === k &&
                    (this._remaining--,
                    e === I ? M(r, n) : (this._result[t] = n)),
                    0 === this._remaining && j(r, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var n = this;
                  D(
                    e,
                    void 0,
                    function (e) {
                      return n._settledAt(C, t, e);
                    },
                    function (e) {
                      return n._settledAt(I, t, e);
                    }
                  );
                }),
                e
              );
            })();
            function Z(e) {
              return new K(this, e).promise;
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
            function $(e) {
              var t = new this(L);
              return M(t, e), t;
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
                (this[O] = q()),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  L !== t &&
                    ('function' != typeof t && ee(),
                    this instanceof e ? V(this, t) : te());
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
              (ne.prototype.then = S),
              (ne.all = Z),
              (ne.race = X),
              (ne.resolve = B),
              (ne.reject = $),
              (ne._setScheduler = u),
              (ne._setAsap = l),
              (ne._asap = c),
              (ne.polyfill = re),
              (ne.Promise = ne),
              ne
            );
          })();
        },
        './node_modules/events/events.js': (e, t, n) => {
          'use strict';
          var r,
            o = n('./node_modules/es6-promise/dist/es6-promise.js').Promise,
            i = 'object' == typeof Reflect ? Reflect : null,
            s =
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
          var a =
            Number.isNaN ||
            function (e) {
              return e != e;
            };
          function c() {
            c.init.call(this);
          }
          (e.exports = c),
            (e.exports.once = function (e, t) {
              return new o(function (n, r) {
                function o(n) {
                  e.removeListener(t, i), r(n);
                }
                function i() {
                  'function' == typeof e.removeListener &&
                    e.removeListener('error', o),
                    n([].slice.call(arguments));
                }
                b(e, t, i, { once: !0 }),
                  'error' !== t &&
                    (function (e, t, n) {
                      'function' == typeof e.on && b(e, 'error', t, n);
                    })(e, o, { once: !0 });
              });
            }),
            (c.EventEmitter = c),
            (c.prototype._events = void 0),
            (c.prototype._eventsCount = 0),
            (c.prototype._maxListeners = void 0);
          var u = 10;
          function l(e) {
            if ('function' != typeof e)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof e
              );
          }
          function p(e) {
            return void 0 === e._maxListeners
              ? c.defaultMaxListeners
              : e._maxListeners;
          }
          function f(e, t, n, r) {
            var o, i, s, a;
            if (
              (l(n),
              void 0 === (i = e._events)
                ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
                : (void 0 !== i.newListener &&
                    (e.emit('newListener', t, n.listener ? n.listener : n),
                    (i = e._events)),
                  (s = i[t])),
              void 0 === s)
            )
              (s = i[t] = n), ++e._eventsCount;
            else if (
              ('function' == typeof s
                ? (s = i[t] = r ? [n, s] : [s, n])
                : r
                ? s.unshift(n)
                : s.push(n),
              (o = p(e)) > 0 && s.length > o && !s.warned)
            ) {
              s.warned = !0;
              var c = new Error(
                'Possible EventEmitter memory leak detected. ' +
                  s.length +
                  ' ' +
                  String(t) +
                  ' listeners added. Use emitter.setMaxListeners() to increase limit'
              );
              (c.name = 'MaxListenersExceededWarning'),
                (c.emitter = e),
                (c.type = t),
                (c.count = s.length),
                (a = c),
                console && console.warn && console.warn(a);
            }
            return e;
          }
          function d() {
            if (!this.fired)
              return (
                this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                0 === arguments.length
                  ? this.listener.call(this.target)
                  : this.listener.apply(this.target, arguments)
              );
          }
          function h(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n,
              },
              o = d.bind(r);
            return (o.listener = n), (r.wrapFn = o), o;
          }
          function m(e, t, n) {
            var r = e._events;
            if (void 0 === r) return [];
            var o = r[t];
            return void 0 === o
              ? []
              : 'function' == typeof o
              ? n
                ? [o.listener || o]
                : [o]
              : n
              ? (function (e) {
                  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                  return t;
                })(o)
              : y(o, o.length);
          }
          function v(e) {
            var t = this._events;
            if (void 0 !== t) {
              var n = t[e];
              if ('function' == typeof n) return 1;
              if (void 0 !== n) return n.length;
            }
            return 0;
          }
          function y(e, t) {
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
              e.addEventListener(t, function o(i) {
                r.once && e.removeEventListener(t, o), n(i);
              });
            }
          }
          Object.defineProperty(c, 'defaultMaxListeners', {
            enumerable: !0,
            get: function () {
              return u;
            },
            set: function (e) {
              if ('number' != typeof e || e < 0 || a(e))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    e +
                    '.'
                );
              u = e;
            },
          }),
            (c.init = function () {
              (void 0 !== this._events &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (c.prototype.setMaxListeners = function (e) {
              if ('number' != typeof e || e < 0 || a(e))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    e +
                    '.'
                );
              return (this._maxListeners = e), this;
            }),
            (c.prototype.getMaxListeners = function () {
              return p(this);
            }),
            (c.prototype.emit = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
              var r = 'error' === e,
                o = this._events;
              if (void 0 !== o) r = r && void 0 === o.error;
              else if (!r) return !1;
              if (r) {
                var i;
                if ((t.length > 0 && (i = t[0]), i instanceof Error)) throw i;
                var a = new Error(
                  'Unhandled error.' + (i ? ' (' + i.message + ')' : '')
                );
                throw ((a.context = i), a);
              }
              var c = o[e];
              if (void 0 === c) return !1;
              if ('function' == typeof c) s(c, this, t);
              else {
                var u = c.length,
                  l = y(c, u);
                for (n = 0; n < u; ++n) s(l[n], this, t);
              }
              return !0;
            }),
            (c.prototype.addListener = function (e, t) {
              return f(this, e, t, !1);
            }),
            (c.prototype.on = c.prototype.addListener),
            (c.prototype.prependListener = function (e, t) {
              return f(this, e, t, !0);
            }),
            (c.prototype.once = function (e, t) {
              return l(t), this.on(e, h(this, e, t)), this;
            }),
            (c.prototype.prependOnceListener = function (e, t) {
              return l(t), this.prependListener(e, h(this, e, t)), this;
            }),
            (c.prototype.removeListener = function (e, t) {
              var n, r, o, i, s;
              if ((l(t), void 0 === (r = this._events))) return this;
              if (void 0 === (n = r[e])) return this;
              if (n === t || n.listener === t)
                0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : (delete r[e],
                    r.removeListener &&
                      this.emit('removeListener', e, n.listener || t));
              else if ('function' != typeof n) {
                for (o = -1, i = n.length - 1; i >= 0; i--)
                  if (n[i] === t || n[i].listener === t) {
                    (s = n[i].listener), (o = i);
                    break;
                  }
                if (o < 0) return this;
                0 === o
                  ? n.shift()
                  : (function (e, t) {
                      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                      e.pop();
                    })(n, o),
                  1 === n.length && (r[e] = n[0]),
                  void 0 !== r.removeListener &&
                    this.emit('removeListener', e, s || t);
              }
              return this;
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.removeAllListeners = function (e) {
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
                var o,
                  i = Object.keys(n);
                for (r = 0; r < i.length; ++r)
                  'removeListener' !== (o = i[r]) && this.removeAllListeners(o);
                return (
                  this.removeAllListeners('removeListener'),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ('function' == typeof (t = n[e])) this.removeListener(e, t);
              else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                  this.removeListener(e, t[r]);
              return this;
            }),
            (c.prototype.listeners = function (e) {
              return m(this, e, !0);
            }),
            (c.prototype.rawListeners = function (e) {
              return m(this, e, !1);
            }),
            (c.listenerCount = function (e, t) {
              return 'function' == typeof e.listenerCount
                ? e.listenerCount(t)
                : v.call(e, t);
            }),
            (c.prototype.listenerCount = v),
            (c.prototype.eventNames = function () {
              return this._eventsCount > 0 ? r(this._events) : [];
            });
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
          var a,
            c = [],
            u = !1,
            l = -1;
          function p() {
            u &&
              a &&
              ((u = !1),
              a.length ? (c = a.concat(c)) : (l = -1),
              c.length && f());
          }
          function f() {
            if (!u) {
              var e = s(p);
              u = !0;
              for (var t = c.length; t; ) {
                for (a = c, c = []; ++l < t; ) a && a[l].run();
                (l = -1), (t = c.length);
              }
              (a = null),
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
          function d(e, t) {
            (this.fun = e), (this.array = t);
          }
          function h() {}
          (r.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            c.push(new d(e, t)), 1 !== c.length || u || s(f);
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
            (r.on = h),
            (r.addListener = h),
            (r.once = h),
            (r.off = h),
            (r.removeListener = h),
            (r.removeAllListeners = h),
            (r.emit = h),
            (r.prependListener = h),
            (r.prependOnceListener = h),
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
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' == typeof window) return window;
        }
      })()),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var r = {};
    return (
      (() => {
        'use strict';
        function e(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function t(e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            t(e, n)
          );
        }
        function o(e, n) {
          (e.prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            t(e, n);
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        function s() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function a(e, n, r) {
          return (
            (a = s()
              ? Reflect.construct
              : function (e, n, r) {
                  var o = [null];
                  o.push.apply(o, n);
                  var i = new (Function.bind.apply(e, o))();
                  return r && t(i, r.prototype), i;
                }),
            a.apply(null, arguments)
          );
        }
        function c(e) {
          var n = 'function' == typeof Map ? new Map() : void 0;
          return (
            (c = function (e) {
              if (
                null === e ||
                ((r = e),
                -1 === Function.toString.call(r).indexOf('[native code]'))
              )
                return e;
              var r;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, o);
              }
              function o() {
                return a(e, arguments, i(this).constructor);
              }
              return (
                (o.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                t(o, e)
              );
            }),
            c(e)
          );
        }
        n.d(r, { default: () => Ee });
        var u = {
            Init_NotInitialized: 'TrezorConnect not yet initialized',
            Init_AlreadyInitialized:
              'TrezorConnect has been already initialized',
            Init_IframeBlocked: 'Iframe blocked',
            Init_IframeTimeout: 'Iframe timeout',
            Init_ManifestMissing:
              'Manifest not set. Read more at https://github.com/trezor/connect/blob/develop/docs/index.md',
            Popup_ConnectionMissing:
              'Unable to establish connection with iframe',
            Transport_Missing: 'Transport is missing',
            Transport_InvalidProtobuf: '',
            Method_InvalidPackage:
              'This version of trezor-connect is not suitable to work without browser. Use trezor-connect@extended package instead',
            Method_InvalidParameter: '',
            Method_NotAllowed: 'Method not allowed for this configuration',
            Method_PermissionsNotGranted: 'Permissions not granted',
            Method_Cancel: 'Cancelled',
            Method_Interrupted: 'Popup closed',
            Method_UnknownCoin: 'Coin not found',
            Method_AddressNotMatch: 'Addresses do not match',
            Method_FirmwareUpdate_DownloadFailed:
              'Failed to download firmware binary',
            Method_CustomMessage_Callback:
              'Parameter "callback" is not a function',
            Method_Discovery_BundleException: '',
            Method_Override: 'override',
            Method_NoResponse: 'Call resolved without response',
            Backend_NotSupported:
              'BlockchainLink settings not found in coins.json',
            Backend_WorkerMissing: '',
            Backend_Disconnected: 'Backend disconnected',
            Backend_Invalid: 'Invalid backend',
            Backend_Error: '',
            Runtime: '',
            Device_NotFound: 'Device not found',
            Device_InitializeFailed: '',
            Device_FwException: '',
            Device_ModeException: '',
            Device_Disconnected: 'Device disconnected',
            Device_UsedElsewhere: 'Device is used in another window',
            Device_InvalidState: 'Passphrase is incorrect',
            Device_CallInProgress: 'Device call in progress',
          },
          l = (function (e) {
            function t(t, n) {
              var r;
              return (
                ((r = e.call(this, n) || this).code = t), (r.message = n), r
              );
            }
            return o(t, e), t;
          })(c(Error)),
          p = function (e, t) {
            return new l(e, t || u[e]);
          },
          f = 'iframe-loaded',
          d =
            (Object.freeze({
              bitcoin: 'Bitcoin',
              ethereum: 'Ethereum',
              eos: 'Eos',
              nem: 'NEM',
              stellar: 'Stellar',
              cardano: 'Cardano',
              ripple: 'Ripple',
              tezos: 'Tezors',
              binance: 'Binance',
            }),
            'popup-loaded'),
          h = 'popup-init',
          m = 'popup-error',
          v = 'popup-closed',
          y = 'ui-login_challenge_response',
          b = 'ui-address_validation',
          g =
            (Object.freeze({ mainnet: 764824073, testnet: 1097911063 }),
            Object.freeze({ mainnet: 1, testnet: 0 }),
            Object.freeze({
              Base: 0,
              Pointer: 4,
              Enterprise: 6,
              Byron: 8,
              Reward: 14,
            }),
            Object.freeze({
              StakeRegistration: 0,
              StakeDeregistration: 1,
              StakeDelegation: 2,
              StakePoolRegistration: 3,
            }),
            Object.freeze({
              SingleHostIp: 0,
              SingleHostName: 1,
              MultipleHostName: 2,
            }),
            'UI_EVENT'),
          w = n('./node_modules/es6-promise/dist/es6-promise.js').Promise;
        function _(e, t, n, r, o, i, s) {
          try {
            var a = e[i](s),
              c = a.value;
          } catch (e) {
            return void n(e);
          }
          a.done ? t(c) : w.resolve(c).then(r, o);
        }
        function E(e) {
          return function () {
            var t = this,
              n = arguments;
            return new w(function (r, o) {
              var i = e.apply(t, n);
              function s(e) {
                _(i, r, o, s, a, 'next', e);
              }
              function a(e) {
                _(i, r, o, s, a, 'throw', e);
              }
              s(void 0);
            });
          };
        }
        var x = n('./node_modules/@babel/runtime/regenerator/index.js'),
          T = n.n(x),
          S = n('./node_modules/events/events.js'),
          B = n.n(S);
        function O(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        var L = 'TrezorConnectInteractionLayer',
          k = function (e, t) {
            if (!document.getElementById(L)) {
              var n = document.createElement('div');
              (n.id = L),
                (n.className = 'trezorconnect-container'),
                (n.innerHTML =
                  '\n    <div class="trezorconnect-container" id="TrezorConnectInteractionLayer">\n        <div class="trezorconnect-window">\n            <div class="trezorconnect-head">\n                <svg class="trezorconnect-logo" x="0px" y="0px" viewBox="0 0 163.7 41.9" width="78px" height="20px" preserveAspectRatio="xMinYMin meet">\n                    <polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1"/>\n                    <path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>\n                    <path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>\n                    <polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>\n                    <path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>\n                    <path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>\n                    <polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>\n                </svg>\n                <div class="trezorconnect-close">\n                    <svg x="0px" y="0px" viewBox="24 24 60 60" width="24px" height="24px" preserveAspectRatio="xMinYMin meet">\n                        <polygon class="st0" points="40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 "/>\n                    </svg>\n                </div>\n            </div>\n            <div class="trezorconnect-body">\n                <h3>Popup was blocked</h3>\n                <p>Please click to “Continue” to open popup manually</p>\n                <button class="trezorconnect-open">Continue</button>\n            </div>\n        </div>\n    </div>\n'),
                document.body && document.body.appendChild(n),
                (n.getElementsByClassName('trezorconnect-open')[0].onclick =
                  function () {
                    e(), document.body && document.body.removeChild(n);
                  }),
                (n.getElementsByClassName('trezorconnect-close')[0].onclick =
                  function () {
                    t(), document.body && document.body.removeChild(n);
                  });
            }
          },
          C = function (e) {
            if ('string' != typeof e) return 'unknown';
            if (0 === e.indexOf('file://')) return 'file://';
            var t = e.match(/^.+\:\/\/[^\/]+/);
            return Array.isArray(t) && t.length > 0 ? t[0] : 'unknown';
          };
        var I = n('./node_modules/es6-promise/dist/es6-promise.js').Promise;
        function F(e, t) {
          var n,
            r = function (e) {},
            o = function (e) {},
            i = new I(
              (function () {
                var t = E(
                  T().mark(function t(i, s) {
                    return T().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((r = i), (o = s), 'function' != typeof e)) {
                                t.next = 11;
                                break;
                              }
                              return (t.prev = 3), (t.next = 6), e();
                            case 6:
                              t.next = 11;
                              break;
                            case 8:
                              (t.prev = 8), (t.t0 = t.catch(3)), s(t.t0);
                            case 11:
                              'string' == typeof e && (n = e);
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 8]]
                    );
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })()
            );
          return { id: n, device: t, resolve: r, reject: o, promise: i };
        }
        var U = (function (t) {
          function n(n) {
            var r;
            return (
              e(O((r = t.call(this) || this)), 'requestTimeout', 0),
              e(O(r), 'closeInterval', 0),
              e(O(r), 'extensionTabId', 0),
              (r.settings = n),
              (r.origin = C(n.popupSrc)),
              (r.handleMessage = r.handleMessage.bind(O(r))),
              (r.iframeHandshake = F(f)),
              r.settings.env,
              window.addEventListener('message', r.handleMessage, !1),
              r
            );
          }
          o(n, t);
          var r = n.prototype;
          return (
            (r.request = function (e) {
              var t = this;
              if ((void 0 === e && (e = !1), this.locked))
                this._window && (this.settings.env, this._window.focus());
              else {
                var n = this.open.bind(this);
                if (((this.locked = !0), this.settings.supportedBrowser)) {
                  var r = e || (this.settings.env, 0) ? 1 : 850;
                  this.requestTimeout = window.setTimeout(function () {
                    (t.requestTimeout = 0), n(e);
                  }, r);
                } else n();
              }
            }),
            (r.cancel = function () {
              this.close();
            }),
            (r.unlock = function () {
              this.locked = !1;
            }),
            (r.open = function (e) {
              var t = this,
                n = this.settings.popupSrc;
              this.settings.supportedBrowser
                ? ((this.popupPromise = F(d)),
                  this.openWrapper(e ? n + '#loading' : n),
                  (this.closeInterval = window.setInterval(function () {
                    t._window &&
                      (t.settings.env,
                      t._window.closed && (t.close(), t.emit(v)));
                  }, 500)),
                  (this.openTimeout = window.setTimeout(function () {
                    t.close(),
                      k(t.open.bind(t), function () {
                        t.emit(v);
                      });
                  }, 3e3)))
                : this.openWrapper(n + '#unsupported');
            }),
            (r.openWrapper = function (e) {
              if ((this.settings.env, 'electron' === this.settings.env))
                this._window = window.open(e, 'modal');
              else {
                var t = document.getElementById('trezorPopupNami');
                (t.src = e), (this._window = t.contentWindow);
              }
            }),
            (r.handleExtensionConnect = function (e) {
              'trezor-connect' === e.name &&
                (!this._window ||
                (this._window && this._window.id !== e.sender.tab.id)
                  ? e.disconnect()
                  : (window.clearTimeout(this.openTimeout),
                    (this.extensionPort = e),
                    this.extensionPort.onMessage.addListener(
                      this.handleExtensionMessage
                    )));
            }),
            (r.handleExtensionMessage = function (e) {
              var t = this;
              if (this.extensionPort) {
                var n = this.extensionPort,
                  r = e.data;
                if (r && 'object' == typeof r)
                  if (r.type === m) {
                    var o =
                      r.payload && 'string' == typeof r.payload.error
                        ? r.payload.error
                        : null;
                    this.emit(v, o ? 'Popup error: ' + o : null), this.close();
                  } else
                    r.type === d
                      ? (this.popupPromise && this.popupPromise.resolve(),
                        this.iframeHandshake.promise.then(function (e) {
                          n.postMessage({
                            type: h,
                            payload: {
                              settings: t.settings,
                              useBroadcastChannel: e,
                            },
                          });
                        }))
                      : 'open-usb-permissions' === r.type
                      ? chrome.tabs.query(
                          { currentWindow: !0, active: !0 },
                          function (e) {
                            chrome.tabs.create(
                              {
                                url: 'trezor-usb-permissions.html',
                                index: e[0].index + 1,
                              },
                              function (e) {}
                            );
                          }
                        )
                      : 'window.close' === r.type &&
                        (this.emit(v), this.close());
              }
            }),
            (r.handleMessage = function (e) {
              var t = this,
                n = e.data;
              if (C(e.origin) === this.origin && n && 'object' == typeof n)
                if (n.type === f) {
                  var r =
                    !(
                      !n.payload ||
                      'boolean' != typeof n.payload.useBroadcastChannel
                    ) && n.payload.useBroadcastChannel;
                  this.iframeHandshake.resolve(r);
                } else if ('popup-bootstrap' === n.type)
                  window.clearTimeout(this.openTimeout);
                else if (n.type === m && this._window) {
                  var o =
                    n.payload && 'string' == typeof n.payload.error
                      ? n.payload.error
                      : null;
                  this.emit(v, o ? 'Popup error: ' + o : null), this.close();
                } else
                  n.type === d
                    ? (this.popupPromise && this.popupPromise.resolve(),
                      this.iframeHandshake.promise.then(function (e) {
                        t._window.postMessage(
                          {
                            type: h,
                            payload: {
                              settings: t.settings,
                              useBroadcastChannel: e,
                            },
                          },
                          t.origin
                        );
                      }))
                    : ('ui-cancel-popup-request' !== n.type &&
                        'ui-close_window' !== n.type) ||
                      this.close();
            }),
            (r.close = function () {
              ((this.locked = !1),
              (this.popupPromise = void 0),
              this.requestTimeout &&
                (window.clearTimeout(this.requestTimeout),
                (this.requestTimeout = 0)),
              this.openTimeout &&
                (window.clearTimeout(this.openTimeout), (this.openTimeout = 0)),
              this.closeInterval &&
                (window.clearInterval(this.closeInterval),
                (this.closeInterval = 0)),
              this.extensionPort &&
                (this.extensionPort.disconnect(), (this.extensionPort = null)),
              this.extensionTabId &&
                (chrome.tabs.update(this.extensionTabId, { active: !0 }),
                (this.extensionTabId = 0)),
              this._window) &&
                (this.settings.env,
                this._window.close(),
                (this._window = null));
            }),
            (r.postMessage = (function () {
              var e = E(
                T().mark(function e(t) {
                  var n = this;
                  return T().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              this._window ||
                              'ui-request_window' === t.type ||
                              !this.openTimeout
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (
                              this.close(),
                              k(this.open.bind(this), function () {
                                n.emit(v);
                              }),
                              e.abrupt('return')
                            );
                          case 4:
                            if (!this.popupPromise) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 7), this.popupPromise.promise;
                          case 7:
                            this._window &&
                              this._window.postMessage(t, this.origin);
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            n
          );
        })(B());
        const R =
          '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
        var N,
          P,
          Q,
          z = F(),
          A = 0,
          j = 0,
          M = {},
          D = (function () {
            var e = E(
              T().mark(function e(t) {
                var n, r, o, i, s;
                return T().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (z = F()),
                            (n = document.getElementById('trezorconnect'))
                              ? (N = n)
                              : (((N =
                                  document.createElement(
                                    'iframe'
                                  )).frameBorder = '0'),
                                (N.width = '0px'),
                                (N.height = '0px'),
                                (N.style.position = 'absolute'),
                                (N.style.display = 'none'),
                                (N.style.border = '0px'),
                                (N.style.width = '0px'),
                                (N.style.height = '0px'),
                                (N.id = 'trezorconnect')),
                            'web' === t.env
                              ? ((o = t.manifest
                                  ? JSON.stringify(t.manifest)
                                  : 'undefined'),
                                (i =
                                  'version=' +
                                  t.version +
                                  '&manifest=' +
                                  encodeURIComponent(btoa(JSON.stringify(o)))),
                                (r = t.iframeSrc + '?' + i))
                              : (r = t.iframeSrc),
                            N.setAttribute('src', r),
                            t.webusb && N.setAttribute('allow', 'usb'),
                            (P = C(N.src)),
                            (A = window.setTimeout(function () {
                              z.reject(p('Init_IframeTimeout'));
                            }, 1e4)),
                            (s = function () {
                              if (N) {
                                try {
                                  var e = N.contentWindow.location.origin;
                                  if (!e || 'null' === e) return void W();
                                } catch (e) {}
                                var n;
                                'undefined' != typeof chrome &&
                                  chrome.runtime &&
                                  void 0 !== chrome.runtime.onConnect &&
                                  (chrome.runtime.onConnect.addListener(
                                    function () {}
                                  ),
                                  (n = chrome.runtime.id)),
                                  N.contentWindow.postMessage(
                                    {
                                      type: 'iframe-init',
                                      payload: { settings: t, extension: n },
                                    },
                                    P
                                  ),
                                  (N.onload = void 0);
                              } else z.reject(p('Init_IframeBlocked'));
                            }),
                            N.attachEvent
                              ? N.attachEvent('onload', s)
                              : (N.onload = s),
                            document.body &&
                              (document.body.appendChild(N), G()),
                            (e.prev = 11),
                            (e.next = 14),
                            z.promise
                          );
                        case 14:
                          e.next = 20;
                          break;
                        case 16:
                          throw (
                            ((e.prev = 16),
                            (e.t0 = e.catch(11)),
                            N &&
                              (N.parentNode && N.parentNode.removeChild(N),
                              (N = null)),
                            e.t0)
                          );
                        case 20:
                          return (
                            (e.prev = 20),
                            window.clearTimeout(A),
                            (A = 0),
                            e.finish(20)
                          );
                        case 24:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[11, 16, 20, 24]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          G = function () {
            if (!N) throw p('Init_IframeBlocked');
            var e = N.ownerDocument,
              t = e.head || e.getElementsByTagName('head')[0],
              n = document.createElement('style');
            n.setAttribute('type', 'text/css'),
              n.setAttribute('id', 'TrezorConnectStylesheet'),
              n.styleSheet
                ? ((n.styleSheet.cssText = R), t.appendChild(n))
                : (n.appendChild(document.createTextNode(R)), t.append(n));
          },
          W = function () {
            window.clearTimeout(A),
              (Q = p('Init_IframeBlocked')),
              H(),
              z.reject(Q);
          },
          V = function (e, t) {
            if ((void 0 === t && (t = !0), !N)) throw p('Init_IframeBlocked');
            if (t) {
              j++, (e.id = j), (M[j] = F());
              var n = M[j].promise;
              return N.contentWindow.postMessage(e, P), n;
            }
            return N.contentWindow.postMessage(e, P), null;
          },
          H = function () {
            if (N && N.parentNode)
              try {
                N.parentNode.removeChild(N);
              } catch (e) {}
            (N = null), (A = 0);
          };
        const q = function (e, t, n) {
          var r = e || '.trezor-webusb-button',
            o = document.querySelectorAll(r),
            i = t + '?' + Date.now();
          o.forEach(function (e) {
            if (e.getElementsByTagName('iframe').length < 1) {
              var t = e.getBoundingClientRect(),
                r = document.createElement('iframe');
              (r.frameBorder = '0'),
                (r.width = Math.round(t.width) + 'px'),
                (r.height = Math.round(t.height) + 'px'),
                (r.style.position = 'absolute'),
                (r.style.top = '0px'),
                (r.style.left = '0px'),
                (r.style.zIndex = '1'),
                r.setAttribute('allow', 'usb'),
                r.setAttribute('scrolling', 'no'),
                (r.onload = function () {
                  r.contentWindow.postMessage({}, n);
                }),
                (r.src = i),
                e.append(r);
            }
          });
        };
        var J = function (e) {
          return { success: !1, payload: { error: e.message, code: e.code } };
        };
        function Y(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        var K = '8.2.9-beta.1',
          Z =
            'https://connect.trezor.io/' +
            (K.split('.').map(function (e) {
              return parseInt(e, 10);
            })[0] +
              '/'),
          X = {
            configSrc: './data/config.json',
            version: K,
            debug: !1,
            priority: 2,
            trustedHost: !1,
            connectSrc: Z,
            iframeSrc: Z + 'iframe.html',
            popup: !0,
            popupSrc: Z + 'popup.html',
            webusbSrc: Z + 'webusb.html',
            transportReconnect: !1,
            webusb: !0,
            pendingTransportEvent: !0,
            supportedBrowser:
              'undefined' == typeof navigator ||
              !/Trident|MSIE|Edge/.test(navigator.userAgent),
            manifest: null,
            env: 'web',
            lazyLoad: !1,
            timestamp: new Date().getTime(),
            interactionTimeout: 600,
          },
          $ = function (e) {
            if ('string' == typeof e)
              return e.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//) ||
                e.match(/^https?:\/\/localhost:[58][0-9]{3}\//) ||
                e.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//) ||
                e.match(
                  /^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//
                )
                ? e
                : void 0;
          },
          ee = function (t) {
            void 0 === t && (t = {});
            var r = (function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? Y(Object(r), !0).forEach(function (n) {
                      e(t, n, r[n]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : Y(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            })({}, X);
            if (
              (Object.prototype.hasOwnProperty.call(t, 'debug') &&
                (Array.isArray(t),
                'boolean' == typeof t.debug
                  ? (r.debug = t.debug)
                  : 'string' == typeof t.debug &&
                    (r.debug = 'true' === t.debug)),
              'string' == typeof t.connectSrc && (r.connectSrc = t.connectSrc),
              void 0 !== n.g &&
                'string' == typeof n.g.__TREZOR_CONNECT_SRC &&
                ((r.connectSrc = $(n.g.__TREZOR_CONNECT_SRC)), (r.debug = !0)),
              'undefined' != typeof window &&
                window.location &&
                'string' == typeof window.location.search)
            ) {
              var o = window.location.search.split('&').find(function (e) {
                return e.indexOf('trezor-connect-src') >= 0;
              });
              if (o) {
                var i = o.split('=')[1];
                (r.connectSrc = $(decodeURIComponent(i))), (r.debug = !0);
              }
            }
            var s = r.connectSrc || Z;
            return (
              (r.iframeSrc = s + 'iframe.html'),
              (r.popupSrc = s + 'popup.html'),
              (r.webusbSrc = s + 'webusb.html'),
              'boolean' == typeof t.transportReconnect &&
                (r.transportReconnect = t.transportReconnect),
              'boolean' == typeof t.webusb && (r.webusb = t.webusb),
              'boolean' == typeof t.popup && (r.popup = t.popup),
              'boolean' == typeof t.lazyLoad && (r.lazyLoad = t.lazyLoad),
              'boolean' == typeof t.pendingTransportEvent &&
                (r.pendingTransportEvent = t.pendingTransportEvent),
              'undefined' != typeof window &&
                window.location &&
                'file:' === window.location.protocol &&
                ((r.origin = 'file://' + window.location.pathname),
                (r.webusb = !1)),
              'string' == typeof t.extension && (r.extension = t.extension),
              'string' == typeof t.env
                ? (r.env = t.env)
                : (r.env = (function () {
                    if (
                      'undefined' != typeof chrome &&
                      chrome.runtime &&
                      void 0 !== chrome.runtime.onConnect
                    )
                      return 'webextension';
                    if ('undefined' != typeof navigator) {
                      if (
                        'string' == typeof navigator.product &&
                        'reactnative' === navigator.product.toLowerCase()
                      )
                        return 'react-native';
                      if (
                        navigator.userAgent
                          .toLowerCase()
                          .indexOf(' electron/') > -1
                      )
                        return 'electron';
                    }
                    return 'web';
                  })()),
              'number' == typeof t.timestamp && (r.timestamp = t.timestamp),
              'number' == typeof t.interactionTimeout &&
                (r.interactionTimeout = t.interactionTimeout),
              'object' == typeof t.manifest &&
                (r.manifest = (function (e) {
                  if (
                    e &&
                    'string' == typeof e.email &&
                    'string' == typeof e.appUrl
                  )
                    return { email: e.email, appUrl: e.appUrl };
                })(t.manifest)),
              r
            );
          },
          te = {
            DescriptorStream: 'color: #77ab59',
            DeviceList: 'color: #36802d',
            Device: 'color: #bada55',
            Core: 'color: #c9df8a',
            IFrame: 'color: #FFFFFF; background: #f4a742;',
            Popup: 'color: #f48a00',
          },
          ne = (function () {
            function e(e, t) {
              (this.prefix = e),
                (this.enabled = t),
                (this.messages = []),
                (this.css = te[e] || 'color: #000000; background: #FFFFFF;');
            }
            var t = e.prototype;
            return (
              (t.addMessage = function (e, t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 2 ? n - 2 : 0),
                    o = 2;
                  o < n;
                  o++
                )
                  r[o - 2] = arguments[o];
                this.messages.push({
                  level: e,
                  prefix: t,
                  message: r,
                  timestamp: new Date().getTime(),
                }),
                  this.messages.length > 100 && this.messages.shift();
              }),
              (t.log = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r;
                (this.addMessage.apply(this, ['log', this.prefix].concat(t)),
                this.enabled) &&
                  (r = console).log.apply(r, [this.prefix].concat(t));
              }),
              (t.error = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r;
                (this.addMessage.apply(this, ['error', this.prefix].concat(t)),
                this.enabled) &&
                  (r = console).error.apply(r, [this.prefix].concat(t));
              }),
              (t.warn = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r;
                (this.addMessage.apply(this, ['warn', this.prefix].concat(t)),
                this.enabled) &&
                  (r = console).warn.apply(r, [this.prefix].concat(t));
              }),
              (t.debug = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r;
                (this.addMessage.apply(this, ['debug', this.prefix].concat(t)),
                this.enabled) &&
                  (r = console).log.apply(
                    r,
                    ['%c' + this.prefix, this.css].concat(t)
                  );
              }),
              e
            );
          })(),
          re = {},
          oe =
            (Object.freeze({
              OT_UNKNOWN: 0,
              MARKET: 1,
              LIMIT: 2,
              OT_RESERVED: 3,
            }),
            Object.freeze({ SIDE_UNKNOWN: 0, BUY: 1, SELL: 2 }),
            Object.freeze({ TIF_UNKNOWN: 0, GTE: 1, TIF_RESERVED: 2, IOC: 3 }),
            Object.freeze({
              SPENDADDRESS: 0,
              SPENDMULTISIG: 1,
              EXTERNAL: 2,
              SPENDWITNESS: 3,
              SPENDP2SHWITNESS: 4,
              SPENDTAPROOT: 5,
            }),
            Object.freeze({
              PAYTOADDRESS: 0,
              PAYTOSCRIPTHASH: 1,
              PAYTOMULTISIG: 2,
              PAYTOOPRETURN: 3,
              PAYTOWITNESS: 4,
              PAYTOP2SHWITNESS: 5,
              PAYTOTAPROOT: 6,
            }),
            Object.freeze({ SSGen: 0, SSRTX: 1 }),
            Object.freeze({
              BITCOIN: 0,
              MILLIBITCOIN: 1,
              MICROBITCOIN: 2,
              SATOSHI: 3,
            }),
            Object.freeze({
              TXINPUT: 0,
              TXOUTPUT: 1,
              TXMETA: 2,
              TXFINISHED: 3,
              TXEXTRADATA: 4,
              TXORIGINPUT: 5,
              TXORIGOUTPUT: 6,
              TXPAYMENTREQ: 7,
            }),
            Object.freeze({ LEDGER: 0, ICARUS: 1, ICARUS_TREZOR: 2 }),
            Object.freeze({
              BASE: 0,
              BASE_SCRIPT_KEY: 1,
              BASE_KEY_SCRIPT: 2,
              BASE_SCRIPT_SCRIPT: 3,
              POINTER: 4,
              POINTER_SCRIPT: 5,
              ENTERPRISE: 6,
              ENTERPRISE_SCRIPT: 7,
              BYRON: 8,
              REWARD: 14,
              REWARD_SCRIPT: 15,
            }),
            Object.freeze({
              PUB_KEY: 0,
              ALL: 1,
              ANY: 2,
              N_OF_K: 3,
              INVALID_BEFORE: 4,
              INVALID_HEREAFTER: 5,
            }),
            Object.freeze({ HIDE: 0, BECH32: 1, POLICY_ID: 2 }),
            Object.freeze({
              STAKE_REGISTRATION: 0,
              STAKE_DEREGISTRATION: 1,
              STAKE_DELEGATION: 2,
              STAKE_POOL_REGISTRATION: 3,
            }),
            Object.freeze({
              SINGLE_HOST_IP: 0,
              SINGLE_HOST_NAME: 1,
              MULTIPLE_HOST_NAME: 2,
            }),
            Object.freeze({ NONE: 0, CATALYST_REGISTRATION_SIGNATURE: 1 }),
            Object.freeze({
              ORDINARY_TRANSACTION: 0,
              POOL_REGISTRATION_AS_OWNER: 1,
              MULTISIG_TRANSACTION: 2,
              PLUTUS_TRANSACTION: 3,
            }),
            Object.freeze({ BYRON_WITNESS: 0, SHELLEY_WITNESS: 1 }),
            Object.freeze({ ARRAY_LEGACY: 0, MAP_BABBAGE: 1 }),
            Object.freeze({
              Failure_UnexpectedMessage: 1,
              Failure_ButtonExpected: 2,
              Failure_DataError: 3,
              Failure_ActionCancelled: 4,
              Failure_PinExpected: 5,
              Failure_PinCancelled: 6,
              Failure_PinInvalid: 7,
              Failure_InvalidSignature: 8,
              Failure_ProcessError: 9,
              Failure_NotEnoughFunds: 10,
              Failure_NotInitialized: 11,
              Failure_PinMismatch: 12,
              Failure_WipeCodeMismatch: 13,
              Failure_InvalidSession: 14,
              Failure_FirmwareError: 99,
            }),
            Object.freeze({
              ButtonRequest_Other: 1,
              ButtonRequest_FeeOverThreshold: 2,
              ButtonRequest_ConfirmOutput: 3,
              ButtonRequest_ResetDevice: 4,
              ButtonRequest_ConfirmWord: 5,
              ButtonRequest_WipeDevice: 6,
              ButtonRequest_ProtectCall: 7,
              ButtonRequest_SignTx: 8,
              ButtonRequest_FirmwareCheck: 9,
              ButtonRequest_Address: 10,
              ButtonRequest_PublicKey: 11,
              ButtonRequest_MnemonicWordCount: 12,
              ButtonRequest_MnemonicInput: 13,
              _Deprecated_ButtonRequest_PassphraseType: 14,
              ButtonRequest_UnknownDerivationPath: 15,
              ButtonRequest_RecoveryHomepage: 16,
              ButtonRequest_Success: 17,
              ButtonRequest_Warning: 18,
              ButtonRequest_PassphraseEntry: 19,
              ButtonRequest_PinEntry: 20,
            }),
            Object.freeze({
              PinMatrixRequestType_Current: 1,
              PinMatrixRequestType_NewFirst: 2,
              PinMatrixRequestType_NewSecond: 3,
              PinMatrixRequestType_WipeCodeFirst: 4,
              PinMatrixRequestType_WipeCodeSecond: 5,
            }),
            Object.freeze({ NO: 0, YES: 1, INFO: 2 }),
            Object.freeze({
              UINT: 1,
              INT: 2,
              BYTES: 3,
              STRING: 4,
              BOOL: 5,
              ADDRESS: 6,
              ARRAY: 7,
              STRUCT: 8,
            }),
            Object.freeze({ Bip39: 0, Slip39_Basic: 1, Slip39_Advanced: 2 }),
            Object.freeze({ Strict: 0, PromptAlways: 1, PromptTemporarily: 2 }),
            Object.freeze({
              Capability_Bitcoin: 1,
              Capability_Bitcoin_like: 2,
              Capability_Binance: 3,
              Capability_Cardano: 4,
              Capability_Crypto: 5,
              Capability_EOS: 6,
              Capability_Ethereum: 7,
              Capability_Lisk: 8,
              Capability_Monero: 9,
              Capability_NEM: 10,
              Capability_Ripple: 11,
              Capability_Stellar: 12,
              Capability_Tezos: 13,
              Capability_U2F: 14,
              Capability_Shamir: 15,
              Capability_ShamirGroups: 16,
              Capability_PassphraseEntry: 17,
            }),
            Object.freeze({ DISABLE: 0, ENABLE: 1, REFRESH: 2 }),
            Object.freeze({
              RecoveryDeviceType_ScrambledWords: 0,
              RecoveryDeviceType_Matrix: 1,
            }),
            Object.freeze({
              WordRequestType_Plain: 0,
              WordRequestType_Matrix9: 1,
              WordRequestType_Matrix6: 2,
            }),
            Object.freeze({ MosaicLevy_Absolute: 1, MosaicLevy_Percentile: 2 }),
            Object.freeze({
              SupplyChange_Increase: 1,
              SupplyChange_Decrease: 2,
            }),
            Object.freeze({
              CosignatoryModification_Add: 1,
              CosignatoryModification_Delete: 2,
            }),
            Object.freeze({
              ImportanceTransfer_Activate: 1,
              ImportanceTransfer_Deactivate: 2,
            }),
            Object.freeze({ NATIVE: 0, ALPHANUM4: 1, ALPHANUM12: 2 }),
            Object.freeze({ NONE: 0, TEXT: 1, ID: 2, HASH: 3, RETURN: 4 }),
            Object.freeze({ ACCOUNT: 0, PRE_AUTH: 1, HASH: 2 }),
            Object.freeze({ Implicit: 0, Originated: 1 }),
            Object.freeze({ Yay: 0, Nay: 1, Pass: 2 }),
            n('./node_modules/es6-promise/dist/es6-promise.js').Promise);
        function ie(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function se(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? ie(Object(r), !0).forEach(function (n) {
                  e(t, n, r[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : ie(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        var ae,
          ce = new (B())(),
          ue = (function (e, t) {
            var n = new ne(e, !!t);
            return (re[e] = n), n;
          })('[trezor-connect.js]'),
          le = ee(),
          pe = function () {
            var e = new U(le);
            return (
              e.on(v, function (e) {
                V({ type: v, payload: e ? { error: e } : null }, !1);
              }),
              e
            );
          },
          fe = function () {
            ce.removeAllListeners(), H(), (le = ee()), ae && ae.close();
          },
          de = function (e) {
            if (e.origin === P) {
              var t = (function (e) {
                  var t = { event: e.event, type: e.type, payload: e.payload };
                  return (
                    'number' == typeof e.id && (t.id = e.id),
                    'boolean' == typeof e.success && (t.success = e.success),
                    t
                  );
                })(e.data),
                n = t.event,
                r = t.type,
                o = t.payload,
                i = t.id || 0;
              switch ((ue.log('handleMessage', t), n)) {
                case 'RESPONSE_EVENT':
                  M[i]
                    ? (M[i].resolve({ id: i, success: t.success, payload: o }),
                      delete M[i])
                    : ue.warn('Unknown message id ' + i);
                  break;
                case 'DEVICE_EVENT':
                case 'TRANSPORT_EVENT':
                case 'BLOCKCHAIN_EVENT':
                  ce.emit(n, t), ce.emit(r, o);
                  break;
                case g:
                  if ('iframe-bootstrap' === r) {
                    window.clearTimeout(A);
                    break;
                  }
                  r === f && z.resolve(),
                    'iframe-error' === r && z.reject(o.error),
                    ce.emit(n, t),
                    ce.emit(r, o);
                  break;
                default:
                  ue.log('Undefined message', n, e);
              }
            }
          },
          he = (function () {
            var e = E(
              T().mark(function e(t) {
                return T().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((void 0 === t && (t = {}), !N)) {
                          e.next = 3;
                          break;
                        }
                        throw p('Init_AlreadyInitialized');
                      case 3:
                        if ((le = ee(se(se({}, le), t))).manifest) {
                          e.next = 6;
                          break;
                        }
                        throw p('Init_ManifestMissing');
                      case 6:
                        if (!le.lazyLoad) {
                          e.next = 9;
                          break;
                        }
                        return (le.lazyLoad = !1), e.abrupt('return');
                      case 9:
                        return (
                          ae || (ae = pe()),
                          (ue.enabled = !!le.debug),
                          window.addEventListener('message', de),
                          window.addEventListener('unload', fe),
                          (e.next = 15),
                          D(le)
                        );
                      case 15:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          me = (function () {
            var e = E(
              T().mark(function e(t) {
                var n;
                return T().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (N || A) {
                            e.next = 15;
                            break;
                          }
                          if ((le = ee(le)).manifest) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            J(p('Init_ManifestMissing'))
                          );
                        case 4:
                          return (
                            ae || (ae = pe()),
                            ae.request(!0),
                            (e.prev = 6),
                            (e.next = 9),
                            he(le)
                          );
                        case 9:
                          e.next = 15;
                          break;
                        case 11:
                          return (
                            (e.prev = 11),
                            (e.t0 = e.catch(6)),
                            ae &&
                              ([
                                'Init_IframeBlocked',
                                'Init_IframeTimeout',
                              ].includes(e.t0.code)
                                ? ae.postMessage({
                                    event: g,
                                    type: 'ui-iframe_failure',
                                    payload: void 0,
                                  })
                                : ae.close()),
                            e.abrupt('return', J(e.t0))
                          );
                        case 15:
                          if (!A) {
                            e.next = 17;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            J(p('Init_ManifestMissing'))
                          );
                        case 17:
                          if (!Q) {
                            e.next = 19;
                            break;
                          }
                          return e.abrupt('return', J(Q));
                        case 19:
                          return (
                            le.popup && ae && ae.request(),
                            (e.prev = 20),
                            (e.next = 23),
                            V({ type: 'iframe-call', payload: t })
                          );
                        case 23:
                          if (!(n = e.sent)) {
                            e.next = 27;
                            break;
                          }
                          return (
                            !n.success &&
                              'Device_CallInProgress' !== n.payload.code &&
                              ae &&
                              ae.unlock(),
                            e.abrupt('return', n)
                          );
                        case 27:
                          return (
                            ae && ae.unlock(),
                            e.abrupt('return', J(p('Method_NoResponse')))
                          );
                        case 31:
                          return (
                            (e.prev = 31),
                            (e.t1 = e.catch(20)),
                            ue.error('__call error', e.t1),
                            ae && ae.close(),
                            e.abrupt('return', J(e.t1))
                          );
                        case 36:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [6, 11],
                    [20, 31],
                  ]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ve = function (e) {
            V({ event: g, type: 'ui-custom_response', payload: e });
          },
          ye = (function () {
            var e = E(
              T().mark(function e(t) {
                var n, r, o;
                return T().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (N) {
                          e.next = 2;
                          break;
                        }
                        throw p('Init_NotInitialized');
                      case 2:
                        if ('function' == typeof t.callback) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(
                          'return',
                          J(p('Method_CustomMessage_Callback'))
                        );
                      case 4:
                        return (
                          (n = t.callback),
                          (r = (function () {
                            var e = E(
                              T().mark(function e(t) {
                                var r, o;
                                return T().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          !(r = t.data) ||
                                          'ui-custom_request' !== r.type
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (e.next = 4), n(r.payload);
                                      case 4:
                                        (o = e.sent),
                                          ve(o || { message: 'release' });
                                      case 6:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()),
                          window.addEventListener('message', r, !1),
                          (e.next = 9),
                          me(
                            se(
                              se({ method: 'customMessage' }, t),
                              {},
                              { callback: null }
                            )
                          )
                        );
                      case 9:
                        return (
                          (o = e.sent),
                          window.removeEventListener('message', r),
                          e.abrupt('return', o)
                        );
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          be = (function () {
            var e = E(
              T().mark(function e(t) {
                var n, r, o;
                return T().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (N) {
                          e.next = 2;
                          break;
                        }
                        throw p('Init_NotInitialized');
                      case 2:
                        if ('function' != typeof t.callback) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (n = t.callback),
                          (r = (function () {
                            var e = E(
                              T().mark(function e(t) {
                                var r, o;
                                return T().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            !(r = t.data) ||
                                            'ui-login_challenge_request' !==
                                              r.type
                                          ) {
                                            e.next = 12;
                                            break;
                                          }
                                          return (
                                            (e.prev = 2), (e.next = 5), n()
                                          );
                                        case 5:
                                          (o = e.sent),
                                            V({
                                              event: g,
                                              type: y,
                                              payload: o,
                                            }),
                                            (e.next = 12);
                                          break;
                                        case 9:
                                          (e.prev = 9),
                                            (e.t0 = e.catch(2)),
                                            V({
                                              event: g,
                                              type: y,
                                              payload: e.t0.message,
                                            });
                                        case 12:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[2, 9]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()),
                          window.addEventListener('message', r, !1),
                          (e.next = 8),
                          me(
                            se(
                              se({ method: 'requestLogin' }, t),
                              {},
                              { asyncChallenge: !0, callback: null }
                            )
                          )
                        );
                      case 8:
                        return (
                          (o = e.sent),
                          window.removeEventListener('message', r),
                          e.abrupt('return', o)
                        );
                      case 11:
                        return e.abrupt(
                          'return',
                          me(se({ method: 'requestLogin' }, t))
                        );
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        function ge(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function we(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? ge(Object(r), !0).forEach(function (n) {
                  e(t, n, r[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : ge(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        var _e = {
          manifest: function (e) {
            le = ee(se(se({}, le), {}, { manifest: e }));
          },
          init: he,
          getSettings: function () {
            return N
              ? me({ method: 'getSettings' })
              : oe.resolve(J(p('Init_NotInitialized')));
          },
          on: function (e, t) {
            ce.on(e, t);
          },
          off: function (e, t) {
            ce.removeListener(e, t);
          },
          removeAllListeners: function () {
            ce.removeAllListeners();
          },
          uiResponse: function (e) {
            if (!N) throw p('Init_NotInitialized');
            var t = e.type,
              n = e.payload;
            V({ event: g, type: t, payload: n });
          },
          blockchainGetAccountBalanceHistory: function (e) {
            return me(we({ method: 'blockchainGetAccountBalanceHistory' }, e));
          },
          blockchainGetCurrentFiatRates: function (e) {
            return me(we({ method: 'blockchainGetCurrentFiatRates' }, e));
          },
          blockchainGetFiatRatesForTimestamps: function (e) {
            return me(we({ method: 'blockchainGetFiatRatesForTimestamps' }, e));
          },
          blockchainDisconnect: function (e) {
            return me(we({ method: 'blockchainDisconnect' }, e));
          },
          blockchainEstimateFee: function (e) {
            return me(we({ method: 'blockchainEstimateFee' }, e));
          },
          blockchainGetTransactions: function (e) {
            return me(we({ method: 'blockchainGetTransactions' }, e));
          },
          blockchainSetCustomBackend: function (e) {
            return me(we({ method: 'blockchainSetCustomBackend' }, e));
          },
          blockchainSubscribe: function (e) {
            return me(we({ method: 'blockchainSubscribe' }, e));
          },
          blockchainSubscribeFiatRates: function (e) {
            return me(we({ method: 'blockchainSubscribeFiatRates' }, e));
          },
          blockchainUnsubscribe: function (e) {
            return me(we({ method: 'blockchainUnsubscribe' }, e));
          },
          blockchainUnsubscribeFiatRates: function (e) {
            return me(we({ method: 'blockchainUnsubscribeFiatRates' }, e));
          },
          customMessage: function (e) {
            return ye(e);
          },
          requestLogin: function (e) {
            return be(e);
          },
          cardanoGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'cardanoGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          cardanoGetNativeScriptHash: function (e) {
            return me(we({ method: 'cardanoGetNativeScriptHash' }, e));
          },
          cardanoGetPublicKey: function (e) {
            return me(we({ method: 'cardanoGetPublicKey' }, e));
          },
          cardanoSignTransaction: function (e) {
            return me(we({ method: 'cardanoSignTransaction' }, e));
          },
          cipherKeyValue: function (e) {
            return me(we({ method: 'cipherKeyValue' }, e));
          },
          composeTransaction: function (e) {
            return me(we({ method: 'composeTransaction' }, e));
          },
          ethereumGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'ethereumGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          ethereumGetPublicKey: function (e) {
            return me(we({ method: 'ethereumGetPublicKey' }, e));
          },
          ethereumSignMessage: function (e) {
            return me(we({ method: 'ethereumSignMessage' }, e));
          },
          ethereumSignTransaction: function (e) {
            return me(we({ method: 'ethereumSignTransaction' }, e));
          },
          ethereumSignTypedData: function (e) {
            return me(we({ method: 'ethereumSignTypedData' }, e));
          },
          ethereumVerifyMessage: function (e) {
            return me(we({ method: 'ethereumVerifyMessage' }, e));
          },
          getAccountInfo: function (e) {
            return me(we({ method: 'getAccountInfo' }, e));
          },
          getAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(we({ method: 'getAddress' }, e), {}, { useEventListener: t })
            );
          },
          getDeviceState: function (e) {
            return me(we({ method: 'getDeviceState' }, e));
          },
          getFeatures: function (e) {
            return me(we({ method: 'getFeatures' }, e));
          },
          getPublicKey: function (e) {
            return me(we({ method: 'getPublicKey' }, e));
          },
          liskGetAddress: function () {
            return me({ method: 'liskDeprecated' });
          },
          liskGetPublicKey: function () {
            return me({ method: 'liskDeprecated' });
          },
          liskSignMessage: function () {
            return me({ method: 'liskDeprecated' });
          },
          liskSignTransaction: function () {
            return me({ method: 'liskDeprecated' });
          },
          liskVerifyMessage: function () {
            return me({ method: 'liskDeprecated' });
          },
          nemGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'nemGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          nemSignTransaction: function (e) {
            return me(we({ method: 'nemSignTransaction' }, e));
          },
          pushTransaction: function (e) {
            return me(we({ method: 'pushTransaction' }, e));
          },
          rippleGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'rippleGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          rippleSignTransaction: function (e) {
            return me(we({ method: 'rippleSignTransaction' }, e));
          },
          signMessage: function (e) {
            return me(we({ method: 'signMessage' }, e));
          },
          signTransaction: function (e) {
            return me(we({ method: 'signTransaction' }, e));
          },
          stellarGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'stellarGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          stellarSignTransaction: function (e) {
            return me(we({ method: 'stellarSignTransaction' }, e));
          },
          tezosGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'tezosGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          tezosGetPublicKey: function (e) {
            return me(we({ method: 'tezosGetPublicKey' }, e));
          },
          tezosSignTransaction: function (e) {
            return me(we({ method: 'tezosSignTransaction' }, e));
          },
          eosGetPublicKey: function (e) {
            return me(we({ method: 'eosGetPublicKey' }, e));
          },
          eosSignTransaction: function (e) {
            return me(we({ method: 'eosSignTransaction' }, e));
          },
          binanceGetAddress: function (e) {
            var t = ce.listenerCount(b) > 0;
            return me(
              we(
                we({ method: 'binanceGetAddress' }, e),
                {},
                { useEventListener: t }
              )
            );
          },
          binanceGetPublicKey: function (e) {
            return me(we({ method: 'binanceGetPublicKey' }, e));
          },
          binanceSignTransaction: function (e) {
            return me(we({ method: 'binanceSignTransaction' }, e));
          },
          verifyMessage: function (e) {
            return me(we({ method: 'verifyMessage' }, e));
          },
          resetDevice: function (e) {
            return me(we({ method: 'resetDevice' }, e));
          },
          wipeDevice: function (e) {
            return me(we({ method: 'wipeDevice' }, e));
          },
          applyFlags: function (e) {
            return me(we({ method: 'applyFlags' }, e));
          },
          applySettings: function (e) {
            return me(we({ method: 'applySettings' }, e));
          },
          backupDevice: function (e) {
            return me(we({ method: 'backupDevice' }, e));
          },
          changePin: function (e) {
            return me(we({ method: 'changePin' }, e));
          },
          firmwareUpdate: function (e) {
            return me(we({ method: 'firmwareUpdate' }, e));
          },
          recoveryDevice: function (e) {
            return me(we({ method: 'recoveryDevice' }, e));
          },
          getCoinInfo: function (e) {
            return me(we({ method: 'getCoinInfo' }, e));
          },
          rebootToBootloader: function (e) {
            return me(we({ method: 'rebootToBootloader' }, e));
          },
          setProxy: function (e) {
            return me(we({ method: 'setProxy' }, e));
          },
          dispose: fe,
          cancel: function (e) {
            ae && ae.emit(v, e);
          },
          renderWebUSBButton: function (e) {
            q(e, le.webusbSrc, P);
          },
          disableWebUSB: function () {
            if (!N) throw p('Init_NotInitialized');
            V({ event: g, type: 'transport-disable_webusb' });
          },
        };
        const Ee = _e;
      })(),
      (r = r.default)
    );
  })();
});
