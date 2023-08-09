!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.TrezorConnect = e())
    : (t.TrezorConnect = e());
})(self, function () {
  return (() => {
    var t = {
        './node_modules/@babel/runtime/helpers/regeneratorRuntime.js': (
          t,
          e,
          r
        ) => {
          var n = r('./node_modules/es6-promise/dist/es6-promise.js').Promise,
            o = r('./node_modules/@babel/runtime/helpers/typeof.js').default;
          function i() {
            'use strict';
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (t.exports =
              i =
                function () {
                  return e;
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports);
            var e = {},
              r = Object.prototype,
              s = r.hasOwnProperty,
              a = 'function' == typeof Symbol ? Symbol : {},
              u = a.iterator || '@@iterator',
              c = a.asyncIterator || '@@asyncIterator',
              f = a.toStringTag || '@@toStringTag';
            function l(t, e, r) {
              return (
                Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[e]
              );
            }
            try {
              l({}, '');
            } catch (t) {
              l = function (t, e, r) {
                return (t[e] = r);
              };
            }
            function h(t, e, r, n) {
              var o = e && e.prototype instanceof y ? e : y,
                i = Object.create(o.prototype),
                s = new O(n || []);
              return (
                (i._invoke = (function (t, e, r) {
                  var n = 'suspendedStart';
                  return function (o, i) {
                    if ('executing' === n)
                      throw new Error('Generator is already running');
                    if ('completed' === n) {
                      if ('throw' === o) throw i;
                      return S();
                    }
                    for (r.method = o, r.arg = i; ; ) {
                      var s = r.delegate;
                      if (s) {
                        var a = T(s, r);
                        if (a) {
                          if (a === d) continue;
                          return a;
                        }
                      }
                      if ('next' === r.method) r.sent = r._sent = r.arg;
                      else if ('throw' === r.method) {
                        if ('suspendedStart' === n)
                          throw ((n = 'completed'), r.arg);
                        r.dispatchException(r.arg);
                      } else 'return' === r.method && r.abrupt('return', r.arg);
                      n = 'executing';
                      var u = p(t, e, r);
                      if ('normal' === u.type) {
                        if (
                          ((n = r.done ? 'completed' : 'suspendedYield'),
                          u.arg === d)
                        )
                          continue;
                        return { value: u.arg, done: r.done };
                      }
                      'throw' === u.type &&
                        ((n = 'completed'),
                        (r.method = 'throw'),
                        (r.arg = u.arg));
                    }
                  };
                })(t, r, s)),
                i
              );
            }
            function p(t, e, r) {
              try {
                return { type: 'normal', arg: t.call(e, r) };
              } catch (t) {
                return { type: 'throw', arg: t };
              }
            }
            e.wrap = h;
            var d = {};
            function y() {}
            function v() {}
            function m() {}
            var b = {};
            l(b, u, function () {
              return this;
            });
            var w = Object.getPrototypeOf,
              g = w && w(w(L([])));
            g && g !== r && s.call(g, u) && (b = g);
            var _ = (m.prototype = y.prototype = Object.create(b));
            function x(t) {
              ['next', 'throw', 'return'].forEach(function (e) {
                l(t, e, function (t) {
                  return this._invoke(e, t);
                });
              });
            }
            function E(t, e) {
              function r(n, i, a, u) {
                var c = p(t[n], t, i);
                if ('throw' !== c.type) {
                  var f = c.arg,
                    l = f.value;
                  return l && 'object' == o(l) && s.call(l, '__await')
                    ? e.resolve(l.__await).then(
                        function (t) {
                          r('next', t, a, u);
                        },
                        function (t) {
                          r('throw', t, a, u);
                        }
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (f.value = t), a(f);
                        },
                        function (t) {
                          return r('throw', t, a, u);
                        }
                      );
                }
                u(c.arg);
              }
              var n;
              this._invoke = function (t, o) {
                function i() {
                  return new e(function (e, n) {
                    r(t, o, e, n);
                  });
                }
                return (n = n ? n.then(i, i) : i());
              };
            }
            function T(t, e) {
              var r = t.iterator[e.method];
              if (void 0 === r) {
                if (((e.delegate = null), 'throw' === e.method)) {
                  if (
                    t.iterator.return &&
                    ((e.method = 'return'),
                    (e.arg = void 0),
                    T(t, e),
                    'throw' === e.method)
                  )
                    return d;
                  (e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return d;
              }
              var n = p(r, t.iterator, e.arg);
              if ('throw' === n.type)
                return (
                  (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), d
                );
              var o = n.arg;
              return o
                ? o.done
                  ? ((e[t.resultName] = o.value),
                    (e.next = t.nextLoc),
                    'return' !== e.method &&
                      ((e.method = 'next'), (e.arg = void 0)),
                    (e.delegate = null),
                    d)
                  : o
                : ((e.method = 'throw'),
                  (e.arg = new TypeError('iterator result is not an object')),
                  (e.delegate = null),
                  d);
            }
            function j(t) {
              var e = { tryLoc: t[0] };
              1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e);
            }
            function A(t) {
              var e = t.completion || {};
              (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function O(t) {
              (this.tryEntries = [{ tryLoc: 'root' }]),
                t.forEach(j, this),
                this.reset(!0);
            }
            function L(t) {
              if (t) {
                var e = t[u];
                if (e) return e.call(t);
                if ('function' == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var r = -1,
                    n = function e() {
                      for (; ++r < t.length; )
                        if (s.call(t, r))
                          return (e.value = t[r]), (e.done = !1), e;
                      return (e.value = void 0), (e.done = !0), e;
                    };
                  return (n.next = n);
                }
              }
              return { next: S };
            }
            function S() {
              return { value: void 0, done: !0 };
            }
            return (
              (v.prototype = m),
              l(_, 'constructor', m),
              l(m, 'constructor', v),
              (v.displayName = l(m, f, 'GeneratorFunction')),
              (e.isGeneratorFunction = function (t) {
                var e = 'function' == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === v || 'GeneratorFunction' === (e.displayName || e.name))
                );
              }),
              (e.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, m)
                    : ((t.__proto__ = m), l(t, f, 'GeneratorFunction')),
                  (t.prototype = Object.create(_)),
                  t
                );
              }),
              (e.awrap = function (t) {
                return { __await: t };
              }),
              x(E.prototype),
              l(E.prototype, c, function () {
                return this;
              }),
              (e.AsyncIterator = E),
              (e.async = function (t, r, o, i, s) {
                void 0 === s && (s = n);
                var a = new E(h(t, r, o, i), s);
                return e.isGeneratorFunction(r)
                  ? a
                  : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                    });
              }),
              x(_),
              l(_, f, 'Generator'),
              l(_, u, function () {
                return this;
              }),
              l(_, 'toString', function () {
                return '[object Generator]';
              }),
              (e.keys = function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return (
                  e.reverse(),
                  function r() {
                    for (; e.length; ) {
                      var n = e.pop();
                      if (n in t) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (e.values = L),
              (O.prototype = {
                constructor: O,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = void 0),
                    this.tryEntries.forEach(A),
                    !t)
                  )
                    for (var e in this)
                      't' === e.charAt(0) &&
                        s.call(this, e) &&
                        !isNaN(+e.slice(1)) &&
                        (this[e] = void 0);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ('throw' === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var e = this;
                  function r(r, n) {
                    return (
                      (i.type = 'throw'),
                      (i.arg = t),
                      (e.next = r),
                      n && ((e.method = 'next'), (e.arg = void 0)),
                      !!n
                    );
                  }
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n],
                      i = o.completion;
                    if ('root' === o.tryLoc) return r('end');
                    if (o.tryLoc <= this.prev) {
                      var a = s.call(o, 'catchLoc'),
                        u = s.call(o, 'finallyLoc');
                      if (a && u) {
                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                      } else if (a) {
                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      } else {
                        if (!u)
                          throw new Error(
                            'try statement without catch or finally'
                          );
                        if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, e) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (
                      n.tryLoc <= this.prev &&
                      s.call(n, 'finallyLoc') &&
                      this.prev < n.finallyLoc
                    ) {
                      var o = n;
                      break;
                    }
                  }
                  o &&
                    ('break' === t || 'continue' === t) &&
                    o.tryLoc <= e &&
                    e <= o.finallyLoc &&
                    (o = null);
                  var i = o ? o.completion : {};
                  return (
                    (i.type = t),
                    (i.arg = e),
                    o
                      ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
                      : this.complete(i)
                  );
                },
                complete: function (t, e) {
                  if ('throw' === t.type) throw t.arg;
                  return (
                    'break' === t.type || 'continue' === t.type
                      ? (this.next = t.arg)
                      : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                    d
                  );
                },
                finish: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                      return this.complete(r.completion, r.afterLoc), A(r), d;
                  }
                },
                catch: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                      var n = r.completion;
                      if ('throw' === n.type) {
                        var o = n.arg;
                        A(r);
                      }
                      return o;
                    }
                  }
                  throw new Error('illegal catch attempt');
                },
                delegateYield: function (t, e, r) {
                  return (
                    (this.delegate = {
                      iterator: L(t),
                      resultName: e,
                      nextLoc: r,
                    }),
                    'next' === this.method && (this.arg = void 0),
                    d
                  );
                },
              }),
              e
            );
          }
          (t.exports = i),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        './node_modules/@babel/runtime/helpers/typeof.js': (t) => {
          function e(r) {
            return (
              (t.exports = e =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              e(r)
            );
          }
          (t.exports = e),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        './node_modules/@babel/runtime/regenerator/index.js': (t, e, r) => {
          t.exports = r(
            './node_modules/@babel/runtime/helpers/regeneratorRuntime.js'
          )();
        },
        './node_modules/cross-fetch/dist/browser-ponyfill.js': function (
          t,
          e,
          r
        ) {
          var n = r('./node_modules/es6-promise/dist/es6-promise.js').Promise,
            o = 'undefined' != typeof self ? self : this,
            i = (function () {
              function t() {
                (this.fetch = !1), (this.DOMException = o.DOMException);
              }
              return (t.prototype = o), new t();
            })();
          !(function (t) {
            !(function (e) {
              var r = 'URLSearchParams' in t,
                o = 'Symbol' in t && 'iterator' in Symbol,
                i =
                  'FileReader' in t &&
                  'Blob' in t &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch (t) {
                      return !1;
                    }
                  })(),
                s = 'FormData' in t,
                a = 'ArrayBuffer' in t;
              if (a)
                var u = [
                    '[object Int8Array]',
                    '[object Uint8Array]',
                    '[object Uint8ClampedArray]',
                    '[object Int16Array]',
                    '[object Uint16Array]',
                    '[object Int32Array]',
                    '[object Uint32Array]',
                    '[object Float32Array]',
                    '[object Float64Array]',
                  ],
                  c =
                    ArrayBuffer.isView ||
                    function (t) {
                      return (
                        t && u.indexOf(Object.prototype.toString.call(t)) > -1
                      );
                    };
              function f(t) {
                if (
                  ('string' != typeof t && (t = String(t)),
                  /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
                )
                  throw new TypeError('Invalid character in header field name');
                return t.toLowerCase();
              }
              function l(t) {
                return 'string' != typeof t && (t = String(t)), t;
              }
              function h(t) {
                var e = {
                  next: function () {
                    var e = t.shift();
                    return { done: void 0 === e, value: e };
                  },
                };
                return (
                  o &&
                    (e[Symbol.iterator] = function () {
                      return e;
                    }),
                  e
                );
              }
              function p(t) {
                (this.map = {}),
                  t instanceof p
                    ? t.forEach(function (t, e) {
                        this.append(e, t);
                      }, this)
                    : Array.isArray(t)
                    ? t.forEach(function (t) {
                        this.append(t[0], t[1]);
                      }, this)
                    : t &&
                      Object.getOwnPropertyNames(t).forEach(function (e) {
                        this.append(e, t[e]);
                      }, this);
              }
              function d(t) {
                if (t.bodyUsed) return n.reject(new TypeError('Already read'));
                t.bodyUsed = !0;
              }
              function y(t) {
                return new n(function (e, r) {
                  (t.onload = function () {
                    e(t.result);
                  }),
                    (t.onerror = function () {
                      r(t.error);
                    });
                });
              }
              function v(t) {
                var e = new FileReader(),
                  r = y(e);
                return e.readAsArrayBuffer(t), r;
              }
              function m(t) {
                if (t.slice) return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)), e.buffer;
              }
              function b() {
                return (
                  (this.bodyUsed = !1),
                  (this._initBody = function (t) {
                    var e;
                    (this._bodyInit = t),
                      t
                        ? 'string' == typeof t
                          ? (this._bodyText = t)
                          : i && Blob.prototype.isPrototypeOf(t)
                          ? (this._bodyBlob = t)
                          : s && FormData.prototype.isPrototypeOf(t)
                          ? (this._bodyFormData = t)
                          : r && URLSearchParams.prototype.isPrototypeOf(t)
                          ? (this._bodyText = t.toString())
                          : a &&
                            i &&
                            (e = t) &&
                            DataView.prototype.isPrototypeOf(e)
                          ? ((this._bodyArrayBuffer = m(t.buffer)),
                            (this._bodyInit = new Blob([
                              this._bodyArrayBuffer,
                            ])))
                          : a &&
                            (ArrayBuffer.prototype.isPrototypeOf(t) || c(t))
                          ? (this._bodyArrayBuffer = m(t))
                          : (this._bodyText = t =
                              Object.prototype.toString.call(t))
                        : (this._bodyText = ''),
                      this.headers.get('content-type') ||
                        ('string' == typeof t
                          ? this.headers.set(
                              'content-type',
                              'text/plain;charset=UTF-8'
                            )
                          : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set(
                              'content-type',
                              this._bodyBlob.type
                            )
                          : r &&
                            URLSearchParams.prototype.isPrototypeOf(t) &&
                            this.headers.set(
                              'content-type',
                              'application/x-www-form-urlencoded;charset=UTF-8'
                            ));
                  }),
                  i &&
                    ((this.blob = function () {
                      var t = d(this);
                      if (t) return t;
                      if (this._bodyBlob) return n.resolve(this._bodyBlob);
                      if (this._bodyArrayBuffer)
                        return n.resolve(new Blob([this._bodyArrayBuffer]));
                      if (this._bodyFormData)
                        throw new Error('could not read FormData body as blob');
                      return n.resolve(new Blob([this._bodyText]));
                    }),
                    (this.arrayBuffer = function () {
                      return this._bodyArrayBuffer
                        ? d(this) || n.resolve(this._bodyArrayBuffer)
                        : this.blob().then(v);
                    })),
                  (this.text = function () {
                    var t,
                      e,
                      r,
                      o = d(this);
                    if (o) return o;
                    if (this._bodyBlob)
                      return (
                        (t = this._bodyBlob),
                        (e = new FileReader()),
                        (r = y(e)),
                        e.readAsText(t),
                        r
                      );
                    if (this._bodyArrayBuffer)
                      return n.resolve(
                        (function (t) {
                          for (
                            var e = new Uint8Array(t),
                              r = new Array(e.length),
                              n = 0;
                            n < e.length;
                            n++
                          )
                            r[n] = String.fromCharCode(e[n]);
                          return r.join('');
                        })(this._bodyArrayBuffer)
                      );
                    if (this._bodyFormData)
                      throw new Error('could not read FormData body as text');
                    return n.resolve(this._bodyText);
                  }),
                  s &&
                    (this.formData = function () {
                      return this.text().then(_);
                    }),
                  (this.json = function () {
                    return this.text().then(JSON.parse);
                  }),
                  this
                );
              }
              (p.prototype.append = function (t, e) {
                (t = f(t)), (e = l(e));
                var r = this.map[t];
                this.map[t] = r ? r + ', ' + e : e;
              }),
                (p.prototype.delete = function (t) {
                  delete this.map[f(t)];
                }),
                (p.prototype.get = function (t) {
                  return (t = f(t)), this.has(t) ? this.map[t] : null;
                }),
                (p.prototype.has = function (t) {
                  return this.map.hasOwnProperty(f(t));
                }),
                (p.prototype.set = function (t, e) {
                  this.map[f(t)] = l(e);
                }),
                (p.prototype.forEach = function (t, e) {
                  for (var r in this.map)
                    this.map.hasOwnProperty(r) &&
                      t.call(e, this.map[r], r, this);
                }),
                (p.prototype.keys = function () {
                  var t = [];
                  return (
                    this.forEach(function (e, r) {
                      t.push(r);
                    }),
                    h(t)
                  );
                }),
                (p.prototype.values = function () {
                  var t = [];
                  return (
                    this.forEach(function (e) {
                      t.push(e);
                    }),
                    h(t)
                  );
                }),
                (p.prototype.entries = function () {
                  var t = [];
                  return (
                    this.forEach(function (e, r) {
                      t.push([r, e]);
                    }),
                    h(t)
                  );
                }),
                o && (p.prototype[Symbol.iterator] = p.prototype.entries);
              var w = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
              function g(t, e) {
                var r,
                  n,
                  o = (e = e || {}).body;
                if (t instanceof g) {
                  if (t.bodyUsed) throw new TypeError('Already read');
                  (this.url = t.url),
                    (this.credentials = t.credentials),
                    e.headers || (this.headers = new p(t.headers)),
                    (this.method = t.method),
                    (this.mode = t.mode),
                    (this.signal = t.signal),
                    o ||
                      null == t._bodyInit ||
                      ((o = t._bodyInit), (t.bodyUsed = !0));
                } else this.url = String(t);
                if (
                  ((this.credentials =
                    e.credentials || this.credentials || 'same-origin'),
                  (!e.headers && this.headers) ||
                    (this.headers = new p(e.headers)),
                  (this.method =
                    ((r = e.method || this.method || 'GET'),
                    (n = r.toUpperCase()),
                    w.indexOf(n) > -1 ? n : r)),
                  (this.mode = e.mode || this.mode || null),
                  (this.signal = e.signal || this.signal),
                  (this.referrer = null),
                  ('GET' === this.method || 'HEAD' === this.method) && o)
                )
                  throw new TypeError(
                    'Body not allowed for GET or HEAD requests'
                  );
                this._initBody(o);
              }
              function _(t) {
                var e = new FormData();
                return (
                  t
                    .trim()
                    .split('&')
                    .forEach(function (t) {
                      if (t) {
                        var r = t.split('='),
                          n = r.shift().replace(/\+/g, ' '),
                          o = r.join('=').replace(/\+/g, ' ');
                        e.append(decodeURIComponent(n), decodeURIComponent(o));
                      }
                    }),
                  e
                );
              }
              function x(t, e) {
                e || (e = {}),
                  (this.type = 'default'),
                  (this.status = void 0 === e.status ? 200 : e.status),
                  (this.ok = this.status >= 200 && this.status < 300),
                  (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
                  (this.headers = new p(e.headers)),
                  (this.url = e.url || ''),
                  this._initBody(t);
              }
              (g.prototype.clone = function () {
                return new g(this, { body: this._bodyInit });
              }),
                b.call(g.prototype),
                b.call(x.prototype),
                (x.prototype.clone = function () {
                  return new x(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new p(this.headers),
                    url: this.url,
                  });
                }),
                (x.error = function () {
                  var t = new x(null, { status: 0, statusText: '' });
                  return (t.type = 'error'), t;
                });
              var E = [301, 302, 303, 307, 308];
              (x.redirect = function (t, e) {
                if (-1 === E.indexOf(e))
                  throw new RangeError('Invalid status code');
                return new x(null, { status: e, headers: { location: t } });
              }),
                (e.DOMException = t.DOMException);
              try {
                new e.DOMException();
              } catch (t) {
                (e.DOMException = function (t, e) {
                  (this.message = t), (this.name = e);
                  var r = Error(t);
                  this.stack = r.stack;
                }),
                  (e.DOMException.prototype = Object.create(Error.prototype)),
                  (e.DOMException.prototype.constructor = e.DOMException);
              }
              function T(t, r) {
                return new n(function (n, o) {
                  var s = new g(t, r);
                  if (s.signal && s.signal.aborted)
                    return o(new e.DOMException('Aborted', 'AbortError'));
                  var a = new XMLHttpRequest();
                  function u() {
                    a.abort();
                  }
                  (a.onload = function () {
                    var t,
                      e,
                      r = {
                        status: a.status,
                        statusText: a.statusText,
                        headers:
                          ((t = a.getAllResponseHeaders() || ''),
                          (e = new p()),
                          t
                            .replace(/\r?\n[\t ]+/g, ' ')
                            .split(/\r?\n/)
                            .forEach(function (t) {
                              var r = t.split(':'),
                                n = r.shift().trim();
                              if (n) {
                                var o = r.join(':').trim();
                                e.append(n, o);
                              }
                            }),
                          e),
                      };
                    r.url =
                      'responseURL' in a
                        ? a.responseURL
                        : r.headers.get('X-Request-URL');
                    var o = 'response' in a ? a.response : a.responseText;
                    n(new x(o, r));
                  }),
                    (a.onerror = function () {
                      o(new TypeError('Network request failed'));
                    }),
                    (a.ontimeout = function () {
                      o(new TypeError('Network request failed'));
                    }),
                    (a.onabort = function () {
                      o(new e.DOMException('Aborted', 'AbortError'));
                    }),
                    a.open(s.method, s.url, !0),
                    'include' === s.credentials
                      ? (a.withCredentials = !0)
                      : 'omit' === s.credentials && (a.withCredentials = !1),
                    'responseType' in a && i && (a.responseType = 'blob'),
                    s.headers.forEach(function (t, e) {
                      a.setRequestHeader(e, t);
                    }),
                    s.signal &&
                      (s.signal.addEventListener('abort', u),
                      (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          s.signal.removeEventListener('abort', u);
                      })),
                    a.send(void 0 === s._bodyInit ? null : s._bodyInit);
                });
              }
              (T.polyfill = !0),
                t.fetch ||
                  ((t.fetch = T),
                  (t.Headers = p),
                  (t.Request = g),
                  (t.Response = x)),
                (e.Headers = p),
                (e.Request = g),
                (e.Response = x),
                (e.fetch = T),
                Object.defineProperty(e, '__esModule', { value: !0 });
            })({});
          })(i),
            (i.fetch.ponyfill = !0),
            delete i.fetch.polyfill;
          var s = i;
          ((e = s.fetch).default = s.fetch),
            (e.fetch = s.fetch),
            (e.Headers = s.Headers),
            (e.Request = s.Request),
            (e.Response = s.Response),
            (t.exports = e);
        },
        './node_modules/es6-promise/dist/es6-promise.js': function (t, e, r) {
          var n = r('./node_modules/process/browser.js');
          /*!
           * @overview es6-promise - a tiny implementation of Promises/A+.
           * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
           * @license   Licensed under MIT license
           *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
           * @version   v4.2.8+1e68dce6
           */ t.exports = (function () {
            'use strict';
            function t(t) {
              var e = typeof t;
              return null !== t && ('object' === e || 'function' === e);
            }
            function e(t) {
              return 'function' == typeof t;
            }
            var o = Array.isArray
                ? Array.isArray
                : function (t) {
                    return (
                      '[object Array]' === Object.prototype.toString.call(t)
                    );
                  },
              i = 0,
              s = void 0,
              a = void 0,
              u = function (t, e) {
                (_[i] = t), (_[i + 1] = e), 2 === (i += 2) && (a ? a(x) : T());
              };
            function c(t) {
              a = t;
            }
            function f(t) {
              u = t;
            }
            var l = 'undefined' != typeof window ? window : void 0,
              h = l || {},
              p = h.MutationObserver || h.WebKitMutationObserver,
              d =
                'undefined' == typeof self &&
                void 0 !== n &&
                '[object process]' === {}.toString.call(n),
              y =
                'undefined' != typeof Uint8ClampedArray &&
                'undefined' != typeof importScripts &&
                'undefined' != typeof MessageChannel;
            function v() {
              return function () {
                return n.nextTick(x);
              };
            }
            function m() {
              return void 0 !== s
                ? function () {
                    s(x);
                  }
                : g();
            }
            function b() {
              var t = 0,
                e = new p(x),
                r = document.createTextNode('');
              return (
                e.observe(r, { characterData: !0 }),
                function () {
                  r.data = t = ++t % 2;
                }
              );
            }
            function w() {
              var t = new MessageChannel();
              return (
                (t.port1.onmessage = x),
                function () {
                  return t.port2.postMessage(0);
                }
              );
            }
            function g() {
              var t = setTimeout;
              return function () {
                return t(x, 1);
              };
            }
            var _ = new Array(1e3);
            function x() {
              for (var t = 0; t < i; t += 2)
                (0, _[t])(_[t + 1]), (_[t] = void 0), (_[t + 1] = void 0);
              i = 0;
            }
            function E() {
              try {
                var t = Function('return this')().require('vertx');
                return (s = t.runOnLoop || t.runOnContext), m();
              } catch (t) {
                return g();
              }
            }
            var T = void 0;
            function j(t, e) {
              var r = this,
                n = new this.constructor(L);
              void 0 === n[O] && V(n);
              var o = r._state;
              if (o) {
                var i = arguments[o - 1];
                u(function () {
                  return Y(o, n, i, r._result);
                });
              } else G(r, n, t, e);
              return n;
            }
            function A(t) {
              var e = this;
              if (t && 'object' == typeof t && t.constructor === e) return t;
              var r = new e(L);
              return F(r, t), r;
            }
            T = d ? v() : p ? b() : y ? w() : void 0 === l ? E() : g();
            var O = Math.random().toString(36).substring(2);
            function L() {}
            var S = void 0,
              B = 1,
              P = 2;
            function k() {
              return new TypeError('You cannot resolve a promise with itself');
            }
            function D() {
              return new TypeError(
                'A promises callback cannot return that same promise.'
              );
            }
            function R(t, e, r, n) {
              try {
                t.call(e, r, n);
              } catch (t) {
                return t;
              }
            }
            function M(t, e, r) {
              u(function (t) {
                var n = !1,
                  o = R(
                    r,
                    e,
                    function (r) {
                      n || ((n = !0), e !== r ? F(t, r) : N(t, r));
                    },
                    function (e) {
                      n || ((n = !0), q(t, e));
                    },
                    'Settle: ' + (t._label || ' unknown promise')
                  );
                !n && o && ((n = !0), q(t, o));
              }, t);
            }
            function I(t, e) {
              e._state === B
                ? N(t, e._result)
                : e._state === P
                ? q(t, e._result)
                : G(
                    e,
                    void 0,
                    function (e) {
                      return F(t, e);
                    },
                    function (e) {
                      return q(t, e);
                    }
                  );
            }
            function U(t, r, n) {
              r.constructor === t.constructor &&
              n === j &&
              r.constructor.resolve === A
                ? I(t, r)
                : void 0 === n
                ? N(t, r)
                : e(n)
                ? M(t, r, n)
                : N(t, r);
            }
            function F(e, r) {
              if (e === r) q(e, k());
              else if (t(r)) {
                var n = void 0;
                try {
                  n = r.then;
                } catch (t) {
                  return void q(e, t);
                }
                U(e, r, n);
              } else N(e, r);
            }
            function C(t) {
              t._onerror && t._onerror(t._result), H(t);
            }
            function N(t, e) {
              t._state === S &&
                ((t._result = e),
                (t._state = B),
                0 !== t._subscribers.length && u(H, t));
            }
            function q(t, e) {
              t._state === S && ((t._state = P), (t._result = e), u(C, t));
            }
            function G(t, e, r, n) {
              var o = t._subscribers,
                i = o.length;
              (t._onerror = null),
                (o[i] = e),
                (o[i + B] = r),
                (o[i + P] = n),
                0 === i && t._state && u(H, t);
            }
            function H(t) {
              var e = t._subscribers,
                r = t._state;
              if (0 !== e.length) {
                for (
                  var n = void 0, o = void 0, i = t._result, s = 0;
                  s < e.length;
                  s += 3
                )
                  (n = e[s]), (o = e[s + r]), n ? Y(r, n, o, i) : o(i);
                t._subscribers.length = 0;
              }
            }
            function Y(t, r, n, o) {
              var i = e(n),
                s = void 0,
                a = void 0,
                u = !0;
              if (i) {
                try {
                  s = n(o);
                } catch (t) {
                  (u = !1), (a = t);
                }
                if (r === s) return void q(r, D());
              } else s = o;
              r._state !== S ||
                (i && u
                  ? F(r, s)
                  : !1 === u
                  ? q(r, a)
                  : t === B
                  ? N(r, s)
                  : t === P && q(r, s));
            }
            function z(t, e) {
              try {
                e(
                  function (e) {
                    F(t, e);
                  },
                  function (e) {
                    q(t, e);
                  }
                );
              } catch (e) {
                q(t, e);
              }
            }
            var J = 0;
            function K() {
              return J++;
            }
            function V(t) {
              (t[O] = J++),
                (t._state = void 0),
                (t._result = void 0),
                (t._subscribers = []);
            }
            function X() {
              return new Error('Array Methods must be provided an Array');
            }
            var W = (function () {
              function t(t, e) {
                (this._instanceConstructor = t),
                  (this.promise = new t(L)),
                  this.promise[O] || V(this.promise),
                  o(e)
                    ? ((this.length = e.length),
                      (this._remaining = e.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? N(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(e),
                          0 === this._remaining &&
                            N(this.promise, this._result)))
                    : q(this.promise, X());
              }
              return (
                (t.prototype._enumerate = function (t) {
                  for (var e = 0; this._state === S && e < t.length; e++)
                    this._eachEntry(t[e], e);
                }),
                (t.prototype._eachEntry = function (t, e) {
                  var r = this._instanceConstructor,
                    n = r.resolve;
                  if (n === A) {
                    var o = void 0,
                      i = void 0,
                      s = !1;
                    try {
                      o = t.then;
                    } catch (t) {
                      (s = !0), (i = t);
                    }
                    if (o === j && t._state !== S)
                      this._settledAt(t._state, e, t._result);
                    else if ('function' != typeof o)
                      this._remaining--, (this._result[e] = t);
                    else if (r === rt) {
                      var a = new r(L);
                      s ? q(a, i) : U(a, t, o), this._willSettleAt(a, e);
                    } else
                      this._willSettleAt(
                        new r(function (e) {
                          return e(t);
                        }),
                        e
                      );
                  } else this._willSettleAt(n(t), e);
                }),
                (t.prototype._settledAt = function (t, e, r) {
                  var n = this.promise;
                  n._state === S &&
                    (this._remaining--,
                    t === P ? q(n, r) : (this._result[e] = r)),
                    0 === this._remaining && N(n, this._result);
                }),
                (t.prototype._willSettleAt = function (t, e) {
                  var r = this;
                  G(
                    t,
                    void 0,
                    function (t) {
                      return r._settledAt(B, e, t);
                    },
                    function (t) {
                      return r._settledAt(P, e, t);
                    }
                  );
                }),
                t
              );
            })();
            function $(t) {
              return new W(this, t).promise;
            }
            function Q(t) {
              var e = this;
              return o(t)
                ? new e(function (r, n) {
                    for (var o = t.length, i = 0; i < o; i++)
                      e.resolve(t[i]).then(r, n);
                  })
                : new e(function (t, e) {
                    return e(new TypeError('You must pass an array to race.'));
                  });
            }
            function Z(t) {
              var e = new this(L);
              return q(e, t), e;
            }
            function tt() {
              throw new TypeError(
                'You must pass a resolver function as the first argument to the promise constructor'
              );
            }
            function et() {
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
              );
            }
            var rt = (function () {
              function t(e) {
                (this[O] = K()),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  L !== e &&
                    ('function' != typeof e && tt(),
                    this instanceof t ? z(this, e) : et());
              }
              return (
                (t.prototype.catch = function (t) {
                  return this.then(null, t);
                }),
                (t.prototype.finally = function (t) {
                  var r = this,
                    n = r.constructor;
                  return e(t)
                    ? r.then(
                        function (e) {
                          return n.resolve(t()).then(function () {
                            return e;
                          });
                        },
                        function (e) {
                          return n.resolve(t()).then(function () {
                            throw e;
                          });
                        }
                      )
                    : r.then(t, t);
                }),
                t
              );
            })();
            function nt() {
              var t = void 0;
              if (void 0 !== r.g) t = r.g;
              else if ('undefined' != typeof self) t = self;
              else
                try {
                  t = Function('return this')();
                } catch (t) {
                  throw new Error(
                    'polyfill failed because global object is unavailable in this environment'
                  );
                }
              var e = t.Promise;
              if (e) {
                var n = null;
                try {
                  n = Object.prototype.toString.call(e.resolve());
                } catch (t) {}
                if ('[object Promise]' === n && !e.cast) return;
              }
              t.Promise = rt;
            }
            return (
              (rt.prototype.then = j),
              (rt.all = $),
              (rt.race = Q),
              (rt.resolve = A),
              (rt.reject = Z),
              (rt._setScheduler = c),
              (rt._setAsap = f),
              (rt._asap = u),
              (rt.polyfill = nt),
              (rt.Promise = rt),
              rt
            );
          })();
        },
        './node_modules/process/browser.js': (t) => {
          var e,
            r,
            n = (t.exports = {});
          function o() {
            throw new Error('setTimeout has not been defined');
          }
          function i() {
            throw new Error('clearTimeout has not been defined');
          }
          function s(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === o || !e) && setTimeout)
              return (e = setTimeout), setTimeout(t, 0);
            try {
              return e(t, 0);
            } catch (r) {
              try {
                return e.call(null, t, 0);
              } catch (r) {
                return e.call(this, t, 0);
              }
            }
          }
          !(function () {
            try {
              e = 'function' == typeof setTimeout ? setTimeout : o;
            } catch (t) {
              e = o;
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : i;
            } catch (t) {
              r = i;
            }
          })();
          var a,
            u = [],
            c = !1,
            f = -1;
          function l() {
            c &&
              a &&
              ((c = !1),
              a.length ? (u = a.concat(u)) : (f = -1),
              u.length && h());
          }
          function h() {
            if (!c) {
              var t = s(l);
              c = !0;
              for (var e = u.length; e; ) {
                for (a = u, u = []; ++f < e; ) a && a[f].run();
                (f = -1), (e = u.length);
              }
              (a = null),
                (c = !1),
                (function (t) {
                  if (r === clearTimeout) return clearTimeout(t);
                  if ((r === i || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(t);
                  try {
                    r(t);
                  } catch (e) {
                    try {
                      return r.call(null, t);
                    } catch (e) {
                      return r.call(this, t);
                    }
                  }
                })(t);
            }
          }
          function p(t, e) {
            (this.fun = t), (this.array = e);
          }
          function d() {}
          (n.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            u.push(new p(t, e)), 1 !== u.length || c || s(h);
          }),
            (p.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (n.title = 'browser'),
            (n.browser = !0),
            (n.env = {}),
            (n.argv = []),
            (n.version = ''),
            (n.versions = {}),
            (n.on = d),
            (n.addListener = d),
            (n.once = d),
            (n.off = d),
            (n.removeListener = d),
            (n.removeAllListeners = d),
            (n.emit = d),
            (n.prependListener = d),
            (n.prependOnceListener = d),
            (n.listeners = function (t) {
              return [];
            }),
            (n.binding = function (t) {
              throw new Error('process.binding is not supported');
            }),
            (n.cwd = function () {
              return '/';
            }),
            (n.chdir = function (t) {
              throw new Error('process.chdir is not supported');
            }),
            (n.umask = function () {
              return 0;
            });
        },
      },
      e = {};
    function r(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var i = (e[n] = { exports: {} });
      return t[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return r.d(e, { a: e }), e;
    }),
      (r.d = (t, e) => {
        for (var n in e)
          r.o(e, n) &&
            !r.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (r.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (t) {
          if ('object' == typeof window) return window;
        }
      })()),
      (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
    var n = {};
    return (
      (() => {
        'use strict';
        var t = r('./node_modules/es6-promise/dist/es6-promise.js').Promise;
        function e(e, r, n, o, i, s, a) {
          try {
            var u = e[s](a),
              c = u.value;
          } catch (t) {
            return void n(t);
          }
          u.done ? r(c) : t.resolve(c).then(o, i);
        }
        function n(r) {
          return function () {
            var n = this,
              o = arguments;
            return new t(function (t, i) {
              var s = r.apply(n, o);
              function a(r) {
                e(s, t, i, a, u, 'next', r);
              }
              function u(r) {
                e(s, t, i, a, u, 'throw', r);
              }
              a(void 0);
            });
          };
        }
        var o,
          i = r('./node_modules/@babel/runtime/regenerator/index.js'),
          s = r.n(i),
          a = r('./node_modules/cross-fetch/dist/browser-ponyfill.js'),
          u = r.n(a),
          c = (function () {
            var t = n(
              s().mark(function t(e, r) {
                var n, o;
                return s().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          void 0 === r && (r = 'text'),
                          (t.next = 3),
                          u()(e, { credentials: 'same-origin' })
                        );
                      case 3:
                        if (!(n = t.sent).ok) {
                          t.next = 13;
                          break;
                        }
                        if ('json' !== r) {
                          t.next = 10;
                          break;
                        }
                        return (t.next = 8), n.text();
                      case 8:
                        return (o = t.sent), t.abrupt('return', JSON.parse(o));
                      case 10:
                        if ('binary' !== r) {
                          t.next = 12;
                          break;
                        }
                        return t.abrupt('return', n.arrayBuffer());
                      case 12:
                        return t.abrupt('return', n.text());
                      case 13:
                        throw new Error(
                          'httpRequest error: ' + e + ' ' + n.statusText
                        );
                      case 14:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })(),
          f = function (t, e) {
            return window.parent.postMessage(t, e);
          },
          l = (function () {
            var t = n(
              s().mark(function t() {
                return s().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), c('./data/config.json', 'json');
                      case 2:
                        (o = t.sent), f('usb-permissions-init', '*');
                      case 4:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        window.addEventListener('load', l, !1),
          window.addEventListener(
            'message',
            function t(e) {
              var r = e.data,
                i = e.origin;
              if (r && 'usb-permissions-init' === r.type) {
                window.removeEventListener('message', t, !1);
                var a = o.knownHosts.find(function (t) {
                  return t.origin === r.extension;
                });
                !(function (t) {
                  document.getElementsByClassName(
                    'extension-name'
                  )[0].innerText = t;
                  var e = document.getElementsByClassName('confirm')[0],
                    r = document.getElementsByClassName('cancel')[0];
                  (e.onclick = n(
                    s().mark(function t() {
                      var e, r, n;
                      return s().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e = o.webusb.map(function (t) {
                                    return {
                                      vendorId: parseInt(t.vendorId, 16),
                                      productId: parseInt(t.productId, 16),
                                    };
                                  })),
                                  (r = navigator),
                                  !(n = r.usb))
                                ) {
                                  t.next = 11;
                                  break;
                                }
                                return (
                                  (t.prev = 3),
                                  (t.next = 6),
                                  n.requestDevice({ filters: e })
                                );
                              case 6:
                                f('usb-permissions-close', '*'), (t.next = 11);
                                break;
                              case 9:
                                (t.prev = 9), (t.t0 = t.catch(3));
                              case 11:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[3, 9]]
                      );
                    })
                  )),
                    (r.onclick = function () {
                      f('usb-permissions-close', '*');
                    });
                })(a && a.label ? a.label : i);
              }
            },
            !1
          );
      })(),
      (n = n.default)
    );
  })();
});
