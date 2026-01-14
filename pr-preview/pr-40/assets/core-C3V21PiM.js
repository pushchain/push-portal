const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CrBOfWm2.js","assets/main-URSK6qZW.js","assets/main-BN-Qqfmx.css","assets/ccip-DrJEkkUX.js","assets/features-BsqgqJ7F.js","assets/basic-DDtGeGWo.js","assets/index-Dp6WSd9M.js","assets/w3m-modal-DD7H8bE_.js"])))=>i.map(i=>d[i]);
import { q as dm, b1 as hm, b8 as um, au as fm, cR as pm, cS as Xt, cL as rf, cQ as Mo, s as io, cT as gm, cU as Pi, cV as Yr, cW as mt, cX as G, cY as Ft, cZ as mm, c_ as kt, c$ as wm, d0 as ve, d1 as Ii, d2 as Nc, d3 as of, d4 as hr, d5 as ym, d6 as bm, d7 as Is, d8 as Zr, d9 as Al, da as Em, db as Il, dc as Nl, dd as $i, de as _l, df as dd, dg as vm, dh as Cm, di as hd, dj as Yn, dk as af, dl as Us, dm as As, dn as Am, dp as Im, dq as Nm, dr as _m, ds as Sm, dt as Tm, du as Qs, dv as cf, dw as Om, dx as km, r as oo, cb as ud, __tla as __tla_0 } from "./main-URSK6qZW.js";
let q, re, he, y, rO, pe, wf, Zt, TT, Sn, gk, nm, El, ge, lf, D, Ze, fk, le, oe, Lt, zr, Ac, Vs, ji, ar, Hs, Tr, W, Ai, yk, ne, jm, Ns, Z, fd, co, Jt, se, Pw, Ut, Tl, be, bf, K, De, nt, st, xm, ds, pk, mk, es, Bo, uk, wk;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _b2;
  fd = function(t, e = {}) {
    const { key: s = "fallback", name: n = "Fallback", rank: r = false, shouldThrow: i = xm, retryCount: o, retryDelay: a } = e;
    return (({ chain: c, pollingInterval: l = 4e3, timeout: d, ...h }) => {
      let u = t, f = () => {
      };
      const g = dm({
        key: s,
        name: n,
        async request({ method: p, params: w }) {
          let T;
          const I = async (N = 0) => {
            const $ = u[N]({
              ...h,
              chain: c,
              retryCount: 0,
              timeout: d
            });
            try {
              const U = await $.request({
                method: p,
                params: w
              });
              return f({
                method: p,
                params: w,
                response: U,
                transport: $,
                status: "success"
              }), U;
            } catch (U) {
              if (f({
                error: U,
                method: p,
                params: w,
                transport: $,
                status: "error"
              }), i(U) || N === u.length - 1 || (T ?? (T = u.slice(N + 1).some((L) => {
                const { include: M, exclude: j } = L({
                  chain: c
                }).config.methods || {};
                return M ? M.includes(p) : j ? !j.includes(p) : true;
              })), !T)) throw U;
              return I(N + 1);
            }
          };
          return I();
        },
        retryCount: o,
        retryDelay: a,
        type: "fallback"
      }, {
        onResponse: (p) => f = p,
        transports: u.map((p) => p({
          chain: c,
          retryCount: 0
        }))
      });
      if (r) {
        const p = typeof r == "object" ? r : {};
        Pm({
          chain: c,
          interval: p.interval ?? l,
          onTransports: (w) => u = w,
          ping: p.ping,
          sampleCount: p.sampleCount,
          timeout: p.timeout,
          transports: u,
          weights: p.weights
        });
      }
      return g;
    });
  };
  xm = function(t) {
    return !!("code" in t && typeof t.code == "number" && (t.code === hm.code || t.code === um.code || fm.nodeMessage.test(t.message) || t.code === 5e3));
  };
  function Pm({ chain: t, interval: e = 4e3, onTransports: s, ping: n, sampleCount: r = 10, timeout: i = 1e3, transports: o, weights: a = {} }) {
    const { stability: c = 0.7, latency: l = 0.3 } = a, d = [], h = async () => {
      const u = await Promise.all(o.map(async (p) => {
        const w = p({
          chain: t,
          retryCount: 0,
          timeout: i
        }), T = Date.now();
        let I, N;
        try {
          await (n ? n({
            transport: w
          }) : w.request({
            method: "net_listening"
          })), N = 1;
        } catch {
          N = 0;
        } finally {
          I = Date.now();
        }
        return {
          latency: I - T,
          success: N
        };
      }));
      d.push(u), d.length > r && d.shift();
      const f = Math.max(...d.map((p) => Math.max(...p.map(({ latency: w }) => w)))), g = o.map((p, w) => {
        const T = d.map((L) => L[w].latency), N = 1 - T.reduce((L, M) => L + M, 0) / T.length / f, $ = d.map((L) => L[w].success), U = $.reduce((L, M) => L + M, 0) / $.length;
        return U === 0 ? [
          0,
          w
        ] : [
          l * N + c * U,
          w
        ];
      }).sort((p, w) => w[0] - p[0]);
      s(g.map(([, p]) => o[p])), await pm(e), h();
    };
    h();
  }
  var pd = {};
  let df;
  W = {
    WC_NAME_SUFFIX: ".reown.id",
    WC_NAME_SUFFIX_LEGACY: ".wcn.id",
    BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
    PULSE_API_URL: "https://pulse.walletconnect.org",
    W3M_API_URL: "https://api.web3modal.org",
    CONNECTOR_ID: {
      WALLET_CONNECT: "walletConnect",
      INJECTED: "injected",
      WALLET_STANDARD: "announced",
      COINBASE: "coinbaseWallet",
      COINBASE_SDK: "coinbaseWalletSDK",
      SAFE: "safe",
      LEDGER: "ledger",
      OKX: "okx",
      EIP6963: "eip6963",
      AUTH: "AUTH"
    },
    CONNECTOR_NAMES: {
      AUTH: "Auth"
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: [
      "eip155",
      "solana"
    ],
    LIMITS: {
      PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
      EVM: "eip155",
      SOLANA: "solana",
      POLKADOT: "polkadot",
      BITCOIN: "bip122"
    },
    CHAIN_NAME_MAP: {
      eip155: "EVM Networks",
      solana: "Solana",
      polkadot: "Polkadot",
      bip122: "Bitcoin",
      cosmos: "Cosmos",
      sui: "Sui",
      stacks: "Stacks"
    },
    ADAPTER_TYPES: {
      BITCOIN: "bitcoin",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5"
    },
    USDT_CONTRACT_ADDRESSES: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
      "0x919C1c267BC06a7039e03fcc2eF738525769109c",
      "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
      "0x55d398326f99059fF775485246999027B3197955",
      "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
    ],
    SOLANA_SPL_TOKEN_ADDRESSES: {
      SOL: "So11111111111111111111111111111111111111112"
    },
    HTTP_STATUS_CODES: {
      SERVER_ERROR: 500,
      TOO_MANY_REQUESTS: 429,
      SERVICE_UNAVAILABLE: 503,
      FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: "Unknown Network",
    SECURE_SITE_SDK_ORIGIN: (typeof Xt < "u" && typeof pd < "u" ? pd.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
    REMOTE_FEATURES_ALERTS: {
      MULTI_WALLET_NOT_ENABLED: {
        DEFAULT: {
          displayMessage: "Multi-Wallet Not Enabled",
          debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
        },
        CONNECTIONS_HOOK: {
          displayMessage: "Multi-Wallet Not Enabled",
          debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
        },
        CONNECTION_HOOK: {
          displayMessage: "Multi-Wallet Not Enabled",
          debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
        }
      }
    },
    IS_DEVELOPMENT: typeof Xt < "u" && false,
    DEFAULT_ALLOWED_ANCESTORS: [
      "http://localhost:*",
      "https://localhost:*",
      "http://127.0.0.1:*",
      "https://127.0.0.1:*",
      "https://*.pages.dev",
      "https://*.vercel.app",
      "https://*.ngrok-free.app",
      "https://secure-mobile.walletconnect.com",
      "https://secure-mobile.walletconnect.org"
    ]
  };
  lf = {
    caipNetworkIdToNumber(t) {
      return t ? Number(t.split(":")[1]) : void 0;
    },
    parseEvmChainId(t) {
      return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
    },
    getNetworksByNamespace(t, e) {
      return (t == null ? void 0 : t.filter((s) => s.chainNamespace === e)) || [];
    },
    getFirstNetworkByNamespace(t, e) {
      return this.getNetworksByNamespace(t, e)[0];
    },
    getNetworkNameByCaipNetworkId(t, e) {
      var _a2;
      if (!e) return;
      const s = t.find((r) => r.caipNetworkId === e);
      if (s) return s.name;
      const [n] = e.split(":");
      return ((_a2 = W.CHAIN_NAME_MAP) == null ? void 0 : _a2[n]) || void 0;
    }
  };
  df = [
    "eip155",
    "solana",
    "polkadot",
    "bip122",
    "cosmos",
    "sui",
    "stacks"
  ];
  var $m = 20, Rm = 1, or = 1e6, gd = 1e6, Um = -7, Dm = 21, Lm = false, Vi = "[big.js] ", ur = Vi + "Invalid ", ca = ur + "decimal places", Bm = ur + "rounding mode", hf = Vi + "Division by zero", xe = {}, Ts = void 0, Mm = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function uf() {
    function t(e) {
      var s = this;
      if (!(s instanceof t)) return e === Ts ? uf() : new t(e);
      if (e instanceof t) s.s = e.s, s.e = e.e, s.c = e.c.slice();
      else {
        if (typeof e != "string") {
          if (t.strict === true && typeof e != "bigint") throw TypeError(ur + "value");
          e = e === 0 && 1 / e < 0 ? "-0" : String(e);
        }
        Fm(s, e);
      }
      s.constructor = t;
    }
    return t.prototype = xe, t.DP = $m, t.RM = Rm, t.NE = Um, t.PE = Dm, t.strict = Lm, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
  }
  function Fm(t, e) {
    var s, n, r;
    if (!Mm.test(e)) throw Error(ur + "number");
    for (t.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (s = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (s < 0 && (s = n), s += +e.slice(n + 1), e = e.substring(0, n)) : s < 0 && (s = e.length), r = e.length, n = 0; n < r && e.charAt(n) == "0"; ) ++n;
    if (n == r) t.c = [
      t.e = 0
    ];
    else {
      for (; r > 0 && e.charAt(--r) == "0"; ) ;
      for (t.e = s - n - 1, t.c = [], s = 0; n <= r; ) t.c[s++] = +e.charAt(n++);
    }
    return t;
  }
  function fr(t, e, s, n) {
    var r = t.c;
    if (s === Ts && (s = t.constructor.RM), s !== 0 && s !== 1 && s !== 2 && s !== 3) throw Error(Bm);
    if (e < 1) n = s === 3 && (n || !!r[0]) || e === 0 && (s === 1 && r[0] >= 5 || s === 2 && (r[0] > 5 || r[0] === 5 && (n || r[1] !== Ts))), r.length = 1, n ? (t.e = t.e - e + 1, r[0] = 1) : r[0] = t.e = 0;
    else if (e < r.length) {
      if (n = s === 1 && r[e] >= 5 || s === 2 && (r[e] > 5 || r[e] === 5 && (n || r[e + 1] !== Ts || r[e - 1] & 1)) || s === 3 && (n || !!r[0]), r.length = e, n) {
        for (; ++r[--e] > 9; ) if (r[e] = 0, e === 0) {
          ++t.e, r.unshift(1);
          break;
        }
      }
      for (e = r.length; !r[--e]; ) r.pop();
    }
    return t;
  }
  function pr(t, e, s) {
    var n = t.e, r = t.c.join(""), i = r.length;
    if (e) r = r.charAt(0) + (i > 1 ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
    else if (n < 0) {
      for (; ++n; ) r = "0" + r;
      r = "0." + r;
    } else if (n > 0) if (++n > i) for (n -= i; n--; ) r += "0";
    else n < i && (r = r.slice(0, n) + "." + r.slice(n));
    else i > 1 && (r = r.charAt(0) + "." + r.slice(1));
    return t.s < 0 && s ? "-" + r : r;
  }
  xe.abs = function() {
    var t = new this.constructor(this);
    return t.s = 1, t;
  };
  xe.cmp = function(t) {
    var e, s = this, n = s.c, r = (t = new s.constructor(t)).c, i = s.s, o = t.s, a = s.e, c = t.e;
    if (!n[0] || !r[0]) return n[0] ? i : r[0] ? -o : 0;
    if (i != o) return i;
    if (e = i < 0, a != c) return a > c ^ e ? 1 : -1;
    for (o = (a = n.length) < (c = r.length) ? a : c, i = -1; ++i < o; ) if (n[i] != r[i]) return n[i] > r[i] ^ e ? 1 : -1;
    return a == c ? 0 : a > c ^ e ? 1 : -1;
  };
  xe.div = function(t) {
    var e = this, s = e.constructor, n = e.c, r = (t = new s(t)).c, i = e.s == t.s ? 1 : -1, o = s.DP;
    if (o !== ~~o || o < 0 || o > or) throw Error(ca);
    if (!r[0]) throw Error(hf);
    if (!n[0]) return t.s = i, t.c = [
      t.e = 0
    ], t;
    var a, c, l, d, h, u = r.slice(), f = a = r.length, g = n.length, p = n.slice(0, a), w = p.length, T = t, I = T.c = [], N = 0, $ = o + (T.e = e.e - t.e) + 1;
    for (T.s = i, i = $ < 0 ? 0 : $, u.unshift(0); w++ < a; ) p.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (a != (w = p.length)) d = a > w ? 1 : -1;
        else for (h = -1, d = 0; ++h < a; ) if (r[h] != p[h]) {
          d = r[h] > p[h] ? 1 : -1;
          break;
        }
        if (d < 0) {
          for (c = w == a ? r : u; w; ) {
            if (p[--w] < c[w]) {
              for (h = w; h && !p[--h]; ) p[h] = 9;
              --p[h], p[w] += 10;
            }
            p[w] -= c[w];
          }
          for (; !p[0]; ) p.shift();
        } else break;
      }
      I[N++] = d ? l : ++l, p[0] && d ? p[w] = n[f] || 0 : p = [
        n[f]
      ];
    } while ((f++ < g || p[0] !== Ts) && i--);
    return !I[0] && N != 1 && (I.shift(), T.e--, $--), N > $ && fr(T, $, s.RM, p[0] !== Ts), T;
  };
  xe.eq = function(t) {
    return this.cmp(t) === 0;
  };
  xe.gt = function(t) {
    return this.cmp(t) > 0;
  };
  xe.gte = function(t) {
    return this.cmp(t) > -1;
  };
  xe.lt = function(t) {
    return this.cmp(t) < 0;
  };
  xe.lte = function(t) {
    return this.cmp(t) < 1;
  };
  xe.minus = xe.sub = function(t) {
    var e, s, n, r, i = this, o = i.constructor, a = i.s, c = (t = new o(t)).s;
    if (a != c) return t.s = -c, i.plus(t);
    var l = i.c.slice(), d = i.e, h = t.c, u = t.e;
    if (!l[0] || !h[0]) return h[0] ? t.s = -c : l[0] ? t = new o(i) : t.s = 1, t;
    if (a = d - u) {
      for ((r = a < 0) ? (a = -a, n = l) : (u = d, n = h), n.reverse(), c = a; c--; ) n.push(0);
      n.reverse();
    } else for (s = ((r = l.length < h.length) ? l : h).length, a = c = 0; c < s; c++) if (l[c] != h[c]) {
      r = l[c] < h[c];
      break;
    }
    if (r && (n = l, l = h, h = n, t.s = -t.s), (c = (s = h.length) - (e = l.length)) > 0) for (; c--; ) l[e++] = 0;
    for (c = e; s > a; ) {
      if (l[--s] < h[s]) {
        for (e = s; e && !l[--e]; ) l[e] = 9;
        --l[e], l[s] += 10;
      }
      l[s] -= h[s];
    }
    for (; l[--c] === 0; ) l.pop();
    for (; l[0] === 0; ) l.shift(), --u;
    return l[0] || (t.s = 1, l = [
      u = 0
    ]), t.c = l, t.e = u, t;
  };
  xe.mod = function(t) {
    var e, s = this, n = s.constructor, r = s.s, i = (t = new n(t)).s;
    if (!t.c[0]) throw Error(hf);
    return s.s = t.s = 1, e = t.cmp(s) == 1, s.s = r, t.s = i, e ? new n(s) : (r = n.DP, i = n.RM, n.DP = n.RM = 0, s = s.div(t), n.DP = r, n.RM = i, this.minus(s.times(t)));
  };
  xe.neg = function() {
    var t = new this.constructor(this);
    return t.s = -t.s, t;
  };
  xe.plus = xe.add = function(t) {
    var e, s, n, r = this, i = r.constructor;
    if (t = new i(t), r.s != t.s) return t.s = -t.s, r.minus(t);
    var o = r.e, a = r.c, c = t.e, l = t.c;
    if (!a[0] || !l[0]) return l[0] || (a[0] ? t = new i(r) : t.s = r.s), t;
    if (a = a.slice(), e = o - c) {
      for (e > 0 ? (c = o, n = l) : (e = -e, n = a), n.reverse(); e--; ) n.push(0);
      n.reverse();
    }
    for (a.length - l.length < 0 && (n = l, l = a, a = n), e = l.length, s = 0; e; a[e] %= 10) s = (a[--e] = a[e] + l[e] + s) / 10 | 0;
    for (s && (a.unshift(s), ++c), e = a.length; a[--e] === 0; ) a.pop();
    return t.c = a, t.e = c, t;
  };
  xe.pow = function(t) {
    var e = this, s = new e.constructor("1"), n = s, r = t < 0;
    if (t !== ~~t || t < -gd || t > gd) throw Error(ur + "exponent");
    for (r && (t = -t); t & 1 && (n = n.times(e)), t >>= 1, !!t; ) e = e.times(e);
    return r ? s.div(n) : n;
  };
  xe.prec = function(t, e) {
    if (t !== ~~t || t < 1 || t > or) throw Error(ur + "precision");
    return fr(new this.constructor(this), t, e);
  };
  xe.round = function(t, e) {
    if (t === Ts) t = 0;
    else if (t !== ~~t || t < -or || t > or) throw Error(ca);
    return fr(new this.constructor(this), t + this.e + 1, e);
  };
  xe.sqrt = function() {
    var t, e, s, n = this, r = n.constructor, i = n.s, o = n.e, a = new r("0.5");
    if (!n.c[0]) return new r(n);
    if (i < 0) throw Error(Vi + "No square root");
    i = Math.sqrt(+pr(n, true, true)), i === 0 || i === 1 / 0 ? (e = n.c.join(""), e.length + o & 1 || (e += "0"), i = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), t = new r((i == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + o)) : t = new r(i + ""), o = t.e + (r.DP += 4);
    do
      s = t, t = a.times(s.plus(n.div(s)));
    while (s.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
    return fr(t, (r.DP -= 4) + t.e + 1, r.RM);
  };
  xe.times = xe.mul = function(t) {
    var e, s = this, n = s.constructor, r = s.c, i = (t = new n(t)).c, o = r.length, a = i.length, c = s.e, l = t.e;
    if (t.s = s.s == t.s ? 1 : -1, !r[0] || !i[0]) return t.c = [
      t.e = 0
    ], t;
    for (t.e = c + l, o < a && (e = r, r = i, i = e, l = o, o = a, a = l), e = new Array(l = o + a); l--; ) e[l] = 0;
    for (c = a; c--; ) {
      for (a = 0, l = o + c; l > c; ) a = e[l] + i[c] * r[l - c - 1] + a, e[l--] = a % 10, a = a / 10 | 0;
      e[l] = a;
    }
    for (a ? ++t.e : e.shift(), c = e.length; !e[--c]; ) e.pop();
    return t.c = e, t;
  };
  xe.toExponential = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Ts) {
      if (t !== ~~t || t < 0 || t > or) throw Error(ca);
      for (s = fr(new s.constructor(s), ++t, e); s.c.length < t; ) s.c.push(0);
    }
    return pr(s, true, !!n);
  };
  xe.toFixed = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Ts) {
      if (t !== ~~t || t < 0 || t > or) throw Error(ca);
      for (s = fr(new s.constructor(s), t + s.e + 1, e), t = t + s.e + 1; s.c.length < t; ) s.c.push(0);
    }
    return pr(s, false, !!n);
  };
  xe[Symbol.for("nodejs.util.inspect.custom")] = xe.toJSON = xe.toString = function() {
    var t = this, e = t.constructor;
    return pr(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
  };
  xe.toNumber = function() {
    var t = +pr(this, true, true);
    if (this.constructor.strict === true && !this.eq(t.toString())) throw Error(Vi + "Imprecise conversion");
    return t;
  };
  xe.toPrecision = function(t, e) {
    var s = this, n = s.constructor, r = s.c[0];
    if (t !== Ts) {
      if (t !== ~~t || t < 1 || t > or) throw Error(ur + "precision");
      for (s = fr(new n(s), t, e); s.c.length < t; ) s.c.push(0);
    }
    return pr(s, t <= s.e || s.e <= n.NE || s.e >= n.PE, !!r);
  };
  xe.valueOf = function() {
    var t = this, e = t.constructor;
    if (e.strict === true) throw Error(Vi + "valueOf disallowed");
    return pr(t, t.e <= e.NE || t.e >= e.PE, true);
  };
  var en = uf();
  let qm, Wm, Hm, Vm, tt;
  jm = {
    bigNumber(t) {
      return t ? new en(t) : new en(0);
    },
    multiply(t, e) {
      if (t === void 0 || e === void 0) return new en(0);
      const s = new en(t), n = new en(e);
      return s.times(n);
    },
    toFixed(t, e = 2) {
      return t === void 0 || t === "" ? new en(0).toFixed(e) : new en(t).toFixed(e);
    },
    formatNumberToLocalString(t, e = 2) {
      return t === void 0 || t === "" ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
        maximumFractionDigits: e,
        minimumFractionDigits: e,
        roundingMode: "floor"
      }) : parseFloat(t).toLocaleString("en-US", {
        maximumFractionDigits: e,
        minimumFractionDigits: e,
        roundingMode: "floor"
      });
    },
    parseLocalStringToNumber(t) {
      if (t === void 0 || t === "") return 0;
      const e = t.replace(/,/gu, "");
      return new en(e).toNumber();
    }
  };
  qm = [
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "_to",
          type: "address"
        },
        {
          name: "_value",
          type: "uint256"
        }
      ],
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ]
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "_from",
          type: "address"
        },
        {
          name: "_to",
          type: "address"
        },
        {
          name: "_value",
          type: "uint256"
        }
      ],
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ]
    }
  ];
  Wm = [
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "spender",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    }
  ];
  Hm = [
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: []
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ]
    }
  ];
  Vm = {
    getERC20Abi: (t) => W.USDT_CONTRACT_ADDRESSES.includes(t) ? Hm : qm,
    getSwapAbi: () => Wm
  };
  tt = {
    validateCaipAddress(t) {
      var _a2;
      if (((_a2 = t.split(":")) == null ? void 0 : _a2.length) !== 3) throw new Error("Invalid CAIP Address");
      return t;
    },
    parseCaipAddress(t) {
      const e = t.split(":");
      if (e.length !== 3) throw new Error(`Invalid CAIP-10 address: ${t}`);
      const [s, n, r] = e;
      if (!s || !n || !r) throw new Error(`Invalid CAIP-10 address: ${t}`);
      return {
        chainNamespace: s,
        chainId: n,
        address: r
      };
    },
    parseCaipNetworkId(t) {
      const e = t.split(":");
      if (e.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${t}`);
      const [s, n] = e;
      if (!s || !n) throw new Error(`Invalid CAIP-2 network id: ${t}`);
      return {
        chainNamespace: s,
        chainId: n
      };
    }
  };
  Hs = {
    RPC_ERROR_CODE: {
      USER_REJECTED_REQUEST: 4001,
      USER_REJECTED_METHODS: 5002,
      USER_REJECTED: 5e3
    },
    PROVIDER_RPC_ERROR_NAME: {
      PROVIDER_RPC: "ProviderRpcError",
      USER_REJECTED_REQUEST: "UserRejectedRequestError"
    },
    isRpcProviderError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          const e = t, s = typeof e.message == "string", n = typeof e.code == "number";
          return s && n;
        }
        return false;
      } catch {
        return false;
      }
    },
    isUserRejectedMessage(t) {
      return t.toLowerCase().includes("user rejected") || t.toLowerCase().includes("user cancelled") || t.toLowerCase().includes("user canceled");
    },
    isUserRejectedRequestError(t) {
      if (Hs.isRpcProviderError(t)) {
        const e = t.code === Hs.RPC_ERROR_CODE.USER_REJECTED_REQUEST, s = t.code === Hs.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return e || s || Hs.isUserRejectedMessage(t.message);
      }
      return t instanceof Error ? Hs.isUserRejectedMessage(t.message) : false;
    }
  };
  class Km extends Error {
    constructor(e, s) {
      super(s.message, {
        cause: e
      }), this.name = Hs.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = s.code;
    }
  }
  class ff extends Km {
    constructor(e) {
      super(e, {
        code: Hs.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request"
      }), this.name = Hs.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
  }
  oe = {
    WALLET_ID: "@appkit/wallet_id",
    WALLET_NAME: "@appkit/wallet_name",
    SOLANA_WALLET: "@appkit/solana_wallet",
    SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
    ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
    CONNECTED_SOCIAL: "@appkit/connected_social",
    CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
    RECENT_WALLETS: "@appkit/recent_wallets",
    RECENT_WALLET: "@appkit/recent_wallet",
    DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    ACTIVE_NAMESPACE: "@appkit/active_namespace",
    CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
    CONNECTION_STATUS: "@appkit/connection_status",
    SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
    SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
    TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
    NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
    PORTFOLIO_CACHE: "@appkit/portfolio_cache",
    ENS_CACHE: "@appkit/ens_cache",
    IDENTITY_CACHE: "@appkit/identity_cache",
    PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
    CONNECTIONS: "@appkit/connections",
    DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
    HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
    TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
    RECENT_EMAILS: "@appkit/recent_emails",
    LATEST_APPKIT_VERSION: "@appkit/latest_version"
  };
  function ka(t) {
    if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`;
  }
  ne = {
    setItem(t, e) {
      gi() && e !== void 0 && localStorage.setItem(t, e);
    },
    getItem(t) {
      if (gi()) return localStorage.getItem(t) || void 0;
    },
    removeItem(t) {
      gi() && localStorage.removeItem(t);
    },
    clear() {
      gi() && localStorage.clear();
    }
  };
  function gi() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function Fo(t, e) {
    return e === "light" ? {
      "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#202020"
    };
  }
  const zm = Symbol(), md = Object.getPrototypeOf, _c = /* @__PURE__ */ new WeakMap(), Gm = (t) => t && (_c.has(t) ? _c.get(t) : md(t) === Object.prototype || md(t) === Array.prototype), Ym = (t) => Gm(t) && t[zm] || null, wd = (t, e = true) => {
    _c.set(t, e);
  }, jo = {}, Sl = (t) => typeof t == "object" && t !== null, Zm = (t) => Sl(t) && !Ki.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer) && !(t instanceof Promise), pf = (t, e) => {
    const s = Sc.get(t);
    if ((s == null ? void 0 : s[0]) === e) return s[1];
    const n = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
    return wd(n, true), Sc.set(t, [
      e,
      n
    ]), Reflect.ownKeys(t).forEach((r) => {
      if (Object.getOwnPropertyDescriptor(n, r)) return;
      const i = Reflect.get(t, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(t, r), a = {
        value: i,
        enumerable: o,
        configurable: true
      };
      if (Ki.has(i)) wd(i, false);
      else if (Pn.has(i)) {
        const [c, l] = Pn.get(i);
        a.value = pf(c, l());
      }
      Object.defineProperty(n, r, a);
    }), Object.preventExtensions(n);
  }, Jm = (t, e, s, n) => ({
    deleteProperty(r, i) {
      const o = Reflect.get(r, i);
      s(i);
      const a = Reflect.deleteProperty(r, i);
      return a && n([
        "delete",
        [
          i
        ],
        o
      ]), a;
    },
    set(r, i, o, a) {
      const c = !t() && Reflect.has(r, i), l = Reflect.get(r, i, a);
      if (c && (yd(l, o) || Ri.has(o) && yd(l, Ri.get(o)))) return true;
      s(i), Sl(o) && (o = Ym(o) || o);
      const d = !Pn.has(o) && Qm(o) ? De(o) : o;
      return e(i, d), Reflect.set(r, i, d, a), n([
        "set",
        [
          i
        ],
        o,
        l
      ]), true;
    }
  }), Pn = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakSet(), Sc = /* @__PURE__ */ new WeakMap(), ko = [
    1
  ], Ri = /* @__PURE__ */ new WeakMap();
  let yd = Object.is, Xm = (t, e) => new Proxy(t, e), Qm = Zm, ew = pf, tw = Jm;
  De = function(t = {}) {
    if (!Sl(t)) throw new Error("object required");
    const e = Ri.get(t);
    if (e) return e;
    let s = ko[0];
    const n = /* @__PURE__ */ new Set(), r = (w, T = ++ko[0]) => {
      s !== T && (i = s = T, n.forEach((I) => I(w, T)));
    };
    let i = s;
    const o = (w = ko[0]) => (i !== w && (i = w, c.forEach(([T]) => {
      const I = T[1](w);
      I > s && (s = I);
    })), s), a = (w) => (T, I) => {
      const N = [
        ...T
      ];
      N[1] = [
        w,
        ...N[1]
      ], r(N, I);
    }, c = /* @__PURE__ */ new Map(), l = (w, T) => {
      const I = !Ki.has(T) && Pn.get(T);
      if (I) {
        if ((jo ? "production" : void 0) !== "production" && c.has(w)) throw new Error("prop listener already exists");
        if (n.size) {
          const N = I[2](a(w));
          c.set(w, [
            I,
            N
          ]);
        } else c.set(w, [
          I
        ]);
      }
    }, d = (w) => {
      var T;
      const I = c.get(w);
      I && (c.delete(w), (T = I[1]) == null || T.call(I));
    }, h = (w) => (n.add(w), n.size === 1 && c.forEach(([I, N], $) => {
      if ((jo ? "production" : void 0) !== "production" && N) throw new Error("remove already exists");
      const U = I[2](a($));
      c.set($, [
        I,
        U
      ]);
    }), () => {
      n.delete(w), n.size === 0 && c.forEach(([I, N], $) => {
        N && (N(), c.set($, [
          I
        ]));
      });
    });
    let u = true;
    const f = tw(() => u, l, d, r), g = Xm(t, f);
    Ri.set(t, g);
    const p = [
      t,
      o,
      h
    ];
    return Pn.set(g, p), Reflect.ownKeys(t).forEach((w) => {
      const T = Object.getOwnPropertyDescriptor(t, w);
      "value" in T && T.writable && (g[w] = t[w]);
    }), u = false, g;
  };
  st = function(t, e, s) {
    const n = Pn.get(t);
    (jo ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
    let r;
    const i = [], o = n[2];
    let a = false;
    const l = o((d) => {
      i.push(d), r || (r = Promise.resolve().then(() => {
        r = void 0, a && e(i.splice(0));
      }));
    });
    return a = true, () => {
      a = false, l();
    };
  };
  function Ui(t) {
    const e = Pn.get(t);
    (jo ? "production" : void 0) !== "production" && !e && console.warn("Please use proxy object");
    const [s, n] = e;
    return ew(s, n());
  }
  function Di(t) {
    return Ki.add(t), t;
  }
  function sw() {
    return {
      proxyStateMap: Pn,
      refSet: Ki,
      snapCache: Sc,
      versionHolder: ko,
      proxyCache: Ri
    };
  }
  nt = function(t, e, s, n) {
    let r = t[e];
    return st(t, () => {
      const i = t[e];
      Object.is(r, i) || s(r = i);
    });
  };
  const { proxyStateMap: nw, snapCache: rw } = sw(), ao = (t) => nw.has(t);
  function iw(t) {
    const e = [];
    let s = 0;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = () => {
      const l = rw.get(a), d = l == null ? void 0 : l[1];
      if (d && !r.has(d)) {
        const h = new Map(n);
        r.set(d, h);
      }
    }, o = (l) => r.get(l) || n, a = {
      data: e,
      index: s,
      epoch: 0,
      get size() {
        return ao(this) || i(), o(this).size;
      },
      get(l) {
        const h = o(this).get(l);
        if (h === void 0) {
          this.epoch;
          return;
        }
        return this.data[h];
      },
      has(l) {
        const d = o(this);
        return this.epoch, d.has(l);
      },
      set(l, d) {
        if (!ao(this)) throw new Error("Cannot perform mutations on a snapshot");
        const h = n.get(l);
        return h === void 0 ? (n.set(l, this.index), this.data[this.index++] = d) : this.data[h] = d, this.epoch++, this;
      },
      delete(l) {
        if (!ao(this)) throw new Error("Cannot perform mutations on a snapshot");
        const d = n.get(l);
        return d === void 0 ? false : (delete this.data[d], n.delete(l), this.epoch++, true);
      },
      clear() {
        if (!ao(this)) throw new Error("Cannot perform mutations on a snapshot");
        this.data.length = 0, this.index = 0, this.epoch++, n.clear();
      },
      forEach(l) {
        this.epoch, o(this).forEach((h, u) => {
          l(this.data[h], u, this);
        });
      },
      *entries() {
        this.epoch;
        const l = o(this);
        for (const [d, h] of l) yield [
          d,
          this.data[h]
        ];
      },
      *keys() {
        this.epoch;
        const l = o(this);
        for (const d of l.keys()) yield d;
      },
      *values() {
        this.epoch;
        const l = o(this);
        for (const d of l.values()) yield this.data[d];
      },
      [Symbol.iterator]() {
        return this.entries();
      },
      get [Symbol.toStringTag]() {
        return "Map";
      },
      toJSON() {
        return new Map(this.entries());
      }
    }, c = De(a);
    return Object.defineProperties(c, {
      size: {
        enumerable: false
      },
      index: {
        enumerable: false
      },
      epoch: {
        enumerable: false
      },
      data: {
        enumerable: false
      },
      toJSON: {
        enumerable: false
      }
    }), Object.seal(c), c;
  }
  var bd = {};
  let xa, gf, ow, xo, aw, Pa;
  xa = (typeof Xt < "u" && typeof bd < "u" ? bd.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
  gf = [
    {
      label: "Meld.io",
      name: "meld",
      feeRange: "1-2%",
      url: "https://meldcrypto.com",
      supportedChains: [
        "eip155",
        "solana"
      ]
    }
  ];
  ow = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
  be = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: xa,
    SECURE_SITE_DASHBOARD: `${xa}/dashboard`,
    SECURE_SITE_FAVICON: `${xa}/images/favicon.png`,
    SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
    RESTRICTED_TIMEZONES: [
      "ASIA/SHANGHAI",
      "ASIA/URUMQI",
      "ASIA/CHONGQING",
      "ASIA/HARBIN",
      "ASIA/KASHGAR",
      "ASIA/MACAU",
      "ASIA/HONG_KONG",
      "ASIA/MACAO",
      "ASIA/BEIJING",
      "ASIA/HARBIN"
    ],
    SWAP_SUGGESTED_TOKENS: [
      "ETH",
      "UNI",
      "1INCH",
      "AAVE",
      "SOL",
      "ADA",
      "AVAX",
      "DOT",
      "LINK",
      "NITRO",
      "GAIA",
      "MILK",
      "TRX",
      "NEAR",
      "GNO",
      "WBTC",
      "DAI",
      "WETH",
      "USDC",
      "USDT",
      "ARB",
      "BAL",
      "BICO",
      "CRV",
      "ENS",
      "MATIC",
      "OP"
    ],
    SWAP_POPULAR_TOKENS: [
      "ETH",
      "UNI",
      "1INCH",
      "AAVE",
      "SOL",
      "ADA",
      "AVAX",
      "DOT",
      "LINK",
      "NITRO",
      "GAIA",
      "MILK",
      "TRX",
      "NEAR",
      "GNO",
      "WBTC",
      "DAI",
      "WETH",
      "USDC",
      "USDT",
      "ARB",
      "BAL",
      "BICO",
      "CRV",
      "ENS",
      "MATIC",
      "OP",
      "METAL",
      "DAI",
      "CHAMP",
      "WOLF",
      "SALE",
      "BAL",
      "BUSD",
      "MUST",
      "BTCpx",
      "ROUTE",
      "HEX",
      "WELT",
      "amDAI",
      "VSQ",
      "VISION",
      "AURUM",
      "pSP",
      "SNX",
      "VC",
      "LINK",
      "CHP",
      "amUSDT",
      "SPHERE",
      "FOX",
      "GIDDY",
      "GFC",
      "OMEN",
      "OX_OLD",
      "DE",
      "WNT"
    ],
    SUGGESTED_TOKENS_BY_CHAIN: {
      "eip155:42161": [
        "USD\u20AE0"
      ]
    },
    BALANCE_SUPPORTED_CHAINS: [
      W.CHAIN.EVM,
      W.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [
      W.CHAIN.EVM
    ],
    SWAP_SUPPORTED_NETWORKS: [
      "eip155:1",
      "eip155:42161",
      "eip155:10",
      "eip155:324",
      "eip155:8453",
      "eip155:56",
      "eip155:137",
      "eip155:100",
      "eip155:43114",
      "eip155:250",
      "eip155:8217",
      "eip155:1313161554"
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [
      W.CHAIN.EVM
    ],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
      W.CHAIN.EVM,
      W.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
      W.CHAIN.EVM,
      W.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
      W.CHAIN.EVM
    ],
    NATIVE_TOKEN_ADDRESS: {
      eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      solana: "So11111111111111111111111111111111111111111",
      polkadot: "0x",
      bip122: "0x",
      cosmos: "0x",
      sui: "0x",
      stacks: "0x"
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
      MOBILE: "Open and continue in the wallet app",
      WEB: "Open and continue in the wallet app"
    },
    SEND_SUPPORTED_NAMESPACES: [
      W.CHAIN.EVM,
      W.CHAIN.SOLANA
    ],
    DEFAULT_REMOTE_FEATURES: {
      swaps: [
        "1inch"
      ],
      onramp: [
        "meld"
      ],
      email: true,
      socials: [
        "google",
        "x",
        "discord",
        "farcaster",
        "github",
        "apple",
        "facebook"
      ],
      activity: true,
      reownBranding: true,
      multiWallet: false,
      emailCapture: false,
      payWithExchange: false,
      payments: false,
      reownAuthentication: false
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
      email: false,
      socials: false,
      swaps: false,
      onramp: false,
      activity: false,
      reownBranding: false,
      emailCapture: false,
      reownAuthentication: false
    },
    DEFAULT_FEATURES: {
      receive: true,
      send: true,
      emailShowWallets: true,
      connectorTypeOrder: [
        "walletConnect",
        "recent",
        "injected",
        "featured",
        "custom",
        "external",
        "recommended"
      ],
      analytics: true,
      allWallets: true,
      legalCheckbox: false,
      smartSessions: false,
      collapseWallets: false,
      walletFeaturesOrder: [
        "onramp",
        "swaps",
        "receive",
        "send"
      ],
      connectMethodsOrder: void 0,
      pay: false,
      reownAuthentication: false
    },
    DEFAULT_SOCIALS: [
      "google",
      "x",
      "farcaster",
      "discord",
      "apple",
      "github",
      "facebook"
    ],
    DEFAULT_ACCOUNT_TYPES: {
      bip122: "payment",
      eip155: "smartAccount",
      polkadot: "eoa",
      solana: "eoa"
    },
    ADAPTER_TYPES: {
      UNIVERSAL: "universal",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5",
      BITCOIN: "bitcoin"
    },
    SIWX_DEFAULTS: {
      signOutOnDisconnect: true
    }
  };
  q = {
    cacheExpiry: {
      portfolio: 3e4,
      nativeBalance: 3e4,
      ens: 3e5,
      identity: 3e5,
      transactionsHistory: 15e3,
      tokenPrice: 15e3,
      latestAppKitVersion: 6048e5
    },
    isCacheExpired(t, e) {
      return Date.now() - t > e;
    },
    getActiveNetworkProps() {
      const t = q.getActiveNamespace(), e = q.getActiveCaipNetworkId(), s = e ? e.split(":")[1] : void 0, n = s ? isNaN(Number(s)) ? s : Number(s) : void 0;
      return {
        namespace: t,
        caipNetworkId: e,
        chainId: n
      };
    },
    setWalletConnectDeepLink({ name: t, href: e }) {
      try {
        ne.setItem(oe.DEEPLINK_CHOICE, JSON.stringify({
          href: e,
          name: t
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const t = ne.getItem(oe.DEEPLINK_CHOICE);
        if (t) return JSON.parse(t);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        ne.removeItem(oe.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(t) {
      try {
        ne.setItem(oe.ACTIVE_NAMESPACE, t);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(t) {
      try {
        ne.setItem(oe.ACTIVE_CAIP_NETWORK_ID, t), q.setActiveNamespace(t.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return ne.getItem(oe.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        ne.removeItem(oe.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(t) {
      try {
        const e = ka(t);
        ne.removeItem(e);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(t) {
      try {
        const e = q.getRecentWallets();
        e.find((n) => n.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), ne.setItem(oe.RECENT_WALLETS, JSON.stringify(e)), ne.setItem(oe.RECENT_WALLET, JSON.stringify(t)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const t = ne.getItem(oe.RECENT_WALLETS);
        return t ? JSON.parse(t) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    getRecentWallet() {
      try {
        const t = ne.getItem(oe.RECENT_WALLET);
        return t ? JSON.parse(t) : null;
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return null;
    },
    deleteRecentWallet() {
      try {
        ne.removeItem(oe.RECENT_WALLET);
      } catch {
        console.info("Unable to delete AppKit recent");
      }
    },
    setConnectedConnectorId(t, e) {
      try {
        const s = ka(t);
        ne.setItem(s, e);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return ne.getItem(oe.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(t) {
      if (t) try {
        const e = ka(t);
        return ne.getItem(e);
      } catch {
        console.info("Unable to get connected connector id in namespace", t);
      }
    },
    setConnectedSocialProvider(t) {
      try {
        ne.setItem(oe.CONNECTED_SOCIAL, t);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return ne.getItem(oe.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        ne.removeItem(oe.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return ne.getItem(oe.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var _a2, _b3;
      return (_b3 = (_a2 = ne.getItem(oe.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a2.split(":")) == null ? void 0 : _b3[1];
    },
    setConnectionStatus(t) {
      try {
        ne.setItem(oe.CONNECTION_STATUS, t);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return ne.getItem(oe.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const t = ne.getItem(oe.CONNECTED_NAMESPACES);
        return (t == null ? void 0 : t.length) ? t.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(t) {
      try {
        const e = Array.from(new Set(t));
        ne.setItem(oe.CONNECTED_NAMESPACES, e.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(t) {
      try {
        const e = q.getConnectedNamespaces();
        e.includes(t) || (e.push(t), q.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(t) {
      try {
        const e = q.getConnectedNamespaces(), s = e.indexOf(t);
        s > -1 && (e.splice(s, 1), q.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return ne.getItem(oe.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(t) {
      try {
        ne.setItem(oe.TELEGRAM_SOCIAL_PROVIDER, t);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        ne.removeItem(oe.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let t = {};
      try {
        const e = ne.getItem(oe.PORTFOLIO_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromBalanceCache(t) {
      try {
        const e = q.getBalanceCache();
        ne.setItem(oe.PORTFOLIO_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getBalanceCacheForCaipAddress(t) {
      try {
        const s = q.getBalanceCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.portfolio)) return s.balance;
        q.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateBalanceCache(t) {
      try {
        const e = q.getBalanceCache();
        e[t.caipAddress] = t, ne.setItem(oe.PORTFOLIO_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getNativeBalanceCache() {
      let t = {};
      try {
        const e = ne.getItem(oe.NATIVE_BALANCE_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromNativeBalanceCache(t) {
      try {
        const e = q.getBalanceCache();
        ne.setItem(oe.NATIVE_BALANCE_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getNativeBalanceCacheForCaipAddress(t) {
      try {
        const s = q.getNativeBalanceCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.nativeBalance)) return s;
        console.info("Discarding cache for address", t), q.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateNativeBalanceCache(t) {
      try {
        const e = q.getNativeBalanceCache();
        e[t.caipAddress] = t, ne.setItem(oe.NATIVE_BALANCE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getEnsCache() {
      let t = {};
      try {
        const e = ne.getItem(oe.ENS_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return t;
    },
    getEnsFromCacheForAddress(t) {
      try {
        const s = q.getEnsCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.ens)) return s.ens;
        q.removeEnsFromCache(t);
      } catch {
        console.info("Unable to get ens name from cache", t);
      }
    },
    updateEnsCache(t) {
      try {
        const e = q.getEnsCache();
        e[t.address] = t, ne.setItem(oe.ENS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ens name cache", t);
      }
    },
    removeEnsFromCache(t) {
      try {
        const e = q.getEnsCache();
        ne.setItem(oe.ENS_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove ens name from cache", t);
      }
    },
    getIdentityCache() {
      let t = {};
      try {
        const e = ne.getItem(oe.IDENTITY_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return t;
    },
    getIdentityFromCacheForAddress(t) {
      try {
        const s = q.getIdentityCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.identity)) return s.identity;
        q.removeIdentityFromCache(t);
      } catch {
        console.info("Unable to get identity from cache", t);
      }
    },
    updateIdentityCache(t) {
      try {
        const e = q.getIdentityCache();
        e[t.address] = {
          identity: t.identity,
          timestamp: t.timestamp
        }, ne.setItem(oe.IDENTITY_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update identity cache", t);
      }
    },
    removeIdentityFromCache(t) {
      try {
        const e = q.getIdentityCache();
        ne.setItem(oe.IDENTITY_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove identity from cache", t);
      }
    },
    clearAddressCache() {
      try {
        ne.removeItem(oe.PORTFOLIO_CACHE), ne.removeItem(oe.NATIVE_BALANCE_CACHE), ne.removeItem(oe.ENS_CACHE), ne.removeItem(oe.IDENTITY_CACHE), ne.removeItem(oe.HISTORY_TRANSACTIONS_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(t) {
      try {
        ne.setItem(oe.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
      } catch {
        console.info("Unable to set preferred account types", t);
      }
    },
    getPreferredAccountTypes() {
      try {
        const t = ne.getItem(oe.PREFERRED_ACCOUNT_TYPES);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get preferred account types");
      }
      return {};
    },
    setConnections(t, e) {
      try {
        const s = q.getConnections(), n = s[e] ?? [], r = /* @__PURE__ */ new Map();
        for (const o of n) r.set(o.connectorId, {
          ...o
        });
        for (const o of t) {
          const a = r.get(o.connectorId), c = o.connectorId === W.CONNECTOR_ID.AUTH;
          if (a && !c) {
            const l = new Set(a.accounts.map((h) => h.address.toLowerCase())), d = o.accounts.filter((h) => !l.has(h.address.toLowerCase()));
            a.accounts.push(...d);
          } else r.set(o.connectorId, {
            ...o
          });
        }
        const i = {
          ...s,
          [e]: Array.from(r.values())
        };
        ne.setItem(oe.CONNECTIONS, JSON.stringify(i));
      } catch (s) {
        console.error("Unable to sync connections to storage", s);
      }
    },
    getConnections() {
      try {
        const t = ne.getItem(oe.CONNECTIONS);
        return t ? JSON.parse(t) : {};
      } catch (t) {
        return console.error("Unable to get connections from storage", t), {};
      }
    },
    deleteAddressFromConnection({ connectorId: t, address: e, namespace: s }) {
      try {
        const n = q.getConnections(), r = n[s] ?? [], i = new Map(r.map((a) => [
          a.connectorId,
          a
        ])), o = i.get(t);
        o && (o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase()).length === 0 ? i.delete(t) : i.set(t, {
          ...o,
          accounts: o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase())
        })), ne.setItem(oe.CONNECTIONS, JSON.stringify({
          ...n,
          [s]: Array.from(i.values())
        }));
      } catch {
        console.error(`Unable to remove address "${e}" from connector "${t}" in namespace "${s}"`);
      }
    },
    getDisconnectedConnectorIds() {
      try {
        const t = ne.getItem(oe.DISCONNECTED_CONNECTOR_IDS);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get disconnected connector ids");
      }
      return {};
    },
    addDisconnectedConnectorId(t, e) {
      try {
        const s = q.getDisconnectedConnectorIds(), n = s[e] ?? [];
        n.push(t), ne.setItem(oe.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...s,
          [e]: Array.from(new Set(n))
        }));
      } catch {
        console.error(`Unable to set disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    removeDisconnectedConnectorId(t, e) {
      try {
        const s = q.getDisconnectedConnectorIds();
        let n = s[e] ?? [];
        n = n.filter((r) => r.toLowerCase() !== t.toLowerCase()), ne.setItem(oe.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...s,
          [e]: Array.from(new Set(n))
        }));
      } catch {
        console.error(`Unable to remove disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    isConnectorDisconnected(t, e) {
      try {
        return (q.getDisconnectedConnectorIds()[e] ?? []).some((r) => r.toLowerCase() === t.toLowerCase());
      } catch {
        console.info(`Unable to get disconnected connector id "${t}" for namespace "${e}"`);
      }
      return false;
    },
    getTransactionsCache() {
      try {
        const t = ne.getItem(oe.HISTORY_TRANSACTIONS_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get transactions cache");
      }
      return {};
    },
    getTransactionsCacheForAddress({ address: t, chainId: e = "" }) {
      var _a2;
      try {
        const n = (_a2 = q.getTransactionsCache()[t]) == null ? void 0 : _a2[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.transactionsHistory)) return n.transactions;
        q.removeTransactionsCache({
          address: t,
          chainId: e
        });
      } catch {
        console.info("Unable to get transactions cache");
      }
    },
    updateTransactionsCache({ address: t, chainId: e = "", timestamp: s, transactions: n }) {
      try {
        const r = q.getTransactionsCache();
        r[t] = {
          ...r[t],
          [e]: {
            timestamp: s,
            transactions: n
          }
        }, ne.setItem(oe.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(r));
      } catch {
        console.info("Unable to update transactions cache", {
          address: t,
          chainId: e,
          timestamp: s,
          transactions: n
        });
      }
    },
    removeTransactionsCache({ address: t, chainId: e }) {
      try {
        const s = q.getTransactionsCache(), n = (s == null ? void 0 : s[t]) || {}, { [e]: r, ...i } = n;
        ne.setItem(oe.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
          ...s,
          [t]: i
        }));
      } catch {
        console.info("Unable to remove transactions cache", {
          address: t,
          chainId: e
        });
      }
    },
    getTokenPriceCache() {
      try {
        const t = ne.getItem(oe.TOKEN_PRICE_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get token price cache");
      }
      return {};
    },
    getTokenPriceCacheForAddresses(t) {
      try {
        const s = q.getTokenPriceCache()[t.join(",")];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.tokenPrice)) return s.tokenPrice;
        q.removeTokenPriceCache(t);
      } catch {
        console.info("Unable to get token price cache for addresses", t);
      }
    },
    updateTokenPriceCache(t) {
      try {
        const e = q.getTokenPriceCache();
        e[t.addresses.join(",")] = {
          timestamp: t.timestamp,
          tokenPrice: t.tokenPrice
        }, ne.setItem(oe.TOKEN_PRICE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update token price cache", t);
      }
    },
    removeTokenPriceCache(t) {
      try {
        const e = q.getTokenPriceCache();
        ne.setItem(oe.TOKEN_PRICE_CACHE, JSON.stringify({
          ...e,
          [t.join(",")]: void 0
        }));
      } catch {
        console.info("Unable to remove token price cache", t);
      }
    },
    getLatestAppKitVersion() {
      try {
        const t = this.getLatestAppKitVersionCache(), e = t == null ? void 0 : t.version;
        return e && !this.isCacheExpired(t.timestamp, this.cacheExpiry.latestAppKitVersion) ? e : void 0;
      } catch {
        console.info("Unable to get latest AppKit version");
      }
    },
    getLatestAppKitVersionCache() {
      try {
        const t = ne.getItem(oe.LATEST_APPKIT_VERSION);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get latest AppKit version cache");
      }
      return {};
    },
    updateLatestAppKitVersion(t) {
      try {
        const e = q.getLatestAppKitVersionCache();
        e.timestamp = t.timestamp, e.version = t.version, ne.setItem(oe.LATEST_APPKIT_VERSION, JSON.stringify(e));
      } catch {
        console.info("Unable to update latest AppKit version on local storage", t);
      }
    }
  };
  se = {
    isMobile() {
      var _a2;
      return this.isClient() ? !!((window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" && ((_a2 = window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a2.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
    },
    checkCaipNetwork(t, e = "") {
      return t == null ? void 0 : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase());
    },
    isAndroid() {
      if (!this.isMobile()) return false;
      const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return se.isMobile() && t.includes("android");
    },
    isIos() {
      if (!this.isMobile()) return false;
      const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return t.includes("iphone") || t.includes("ipad");
    },
    isSafari() {
      return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : false;
    },
    isClient() {
      return typeof window < "u";
    },
    isPairingExpired(t) {
      return t ? t - Date.now() <= be.TEN_SEC_MS : true;
    },
    isAllowedRetry(t, e = be.ONE_SEC_MS) {
      return Date.now() - t >= e;
    },
    copyToClopboard(t) {
      navigator.clipboard.writeText(t);
    },
    isIframe() {
      try {
        return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
      } catch {
        return false;
      }
    },
    isSafeApp() {
      var _a2, _b3;
      if (se.isClient() && window.self !== window.top) try {
        const t = (_b3 = (_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.ancestorOrigins) == null ? void 0 : _b3[0], e = "https://app.safe.global";
        if (t) {
          const s = new URL(t), n = new URL(e);
          return s.hostname === n.hostname;
        }
      } catch {
        return false;
      }
      return false;
    },
    getPairingExpiry() {
      return Date.now() + be.FOUR_MINUTES_MS;
    },
    getNetworkId(t) {
      return t == null ? void 0 : t.split(":")[1];
    },
    getPlainAddress(t) {
      return t == null ? void 0 : t.split(":")[2];
    },
    async wait(t) {
      return new Promise((e) => {
        setTimeout(e, t);
      });
    },
    debounce(t, e = 500) {
      let s;
      return (...n) => {
        function r() {
          t(...n);
        }
        s && clearTimeout(s), s = setTimeout(r, e);
      };
    },
    isHttpUrl(t) {
      return t.startsWith("http://") || t.startsWith("https://");
    },
    formatNativeUrl(t, e, s = null) {
      if (se.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
      let n = t, r = s;
      n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), r && !(r == null ? void 0 : r.endsWith("/")) && (r = `${r}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
      const i = encodeURIComponent(e);
      return {
        redirect: `${n}wc?uri=${i}`,
        redirectUniversalLink: r ? `${r}wc?uri=${i}` : void 0,
        href: n
      };
    },
    formatUniversalUrl(t, e) {
      if (!se.isHttpUrl(t)) return this.formatNativeUrl(t, e);
      let s = t;
      s.endsWith("/") || (s = `${s}/`);
      const n = encodeURIComponent(e);
      return {
        redirect: `${s}wc?uri=${n}`,
        href: s
      };
    },
    getOpenTargetForPlatform(t) {
      return t === "popupWindow" ? t : this.isTelegram() ? q.getTelegramSocialProvider() ? "_top" : "_blank" : t;
    },
    openHref(t, e, s) {
      window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
    },
    returnOpenHref(t, e, s) {
      return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
    },
    isTelegram() {
      return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
    },
    isPWA() {
      var _a2, _b3;
      if (typeof window > "u") return false;
      const t = (window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" ? (_a2 = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : _a2.matches : false, e = (_b3 = window == null ? void 0 : window.navigator) == null ? void 0 : _b3.standalone;
      return !!(t || e);
    },
    async preloadImage(t) {
      const e = new Promise((s, n) => {
        const r = new Image();
        r.onload = s, r.onerror = n, r.crossOrigin = "anonymous", r.src = t;
      });
      return Promise.race([
        e,
        se.wait(2e3)
      ]);
    },
    parseBalance(t, e) {
      let s = "0.000";
      if (typeof t == "string") {
        const c = Number(t);
        if (!isNaN(c)) {
          const l = (Math.floor(c * 1e3) / 1e3).toFixed(3);
          l && (s = l);
        }
      }
      const [n, r] = s.split("."), i = n || "0", o = r || "000";
      return {
        formattedText: `${i}.${o}${e ? ` ${e}` : ""}`,
        value: i,
        decimals: o,
        symbol: e
      };
    },
    getApiUrl() {
      return W.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return W.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return W.PULSE_API_URL;
    },
    getUUID() {
      return (crypto == null ? void 0 : crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
        const e = Math.random() * 16 | 0;
        return (t === "x" ? e : e & 3 | 8).toString(16);
      });
    },
    parseError(t) {
      var _a2, _b3;
      return typeof t == "string" ? t : typeof ((_b3 = (_a2 = t == null ? void 0 : t.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b3.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error";
    },
    sortRequestedNetworks(t, e = []) {
      const s = {};
      return e && t && (t.forEach((n, r) => {
        s[n] = r;
      }), e.sort((n, r) => {
        const i = s[n.id], o = s[r.id];
        return i !== void 0 && o !== void 0 ? i - o : i !== void 0 ? -1 : o !== void 0 ? 1 : 0;
      })), e;
    },
    calculateBalance(t) {
      let e = 0;
      for (const s of t) e += s.value ?? 0;
      return e;
    },
    formatTokenBalance(t) {
      const e = t.toFixed(2), [s, n] = e.split(".");
      return {
        dollars: s,
        pennies: n
      };
    },
    isAddress(t, e = "eip155") {
      switch (e) {
        case "eip155":
          if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
            if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t)) return true;
          } else return false;
          return false;
        case "solana":
          return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
        default:
          return false;
      }
    },
    uniqueBy(t, e) {
      const s = /* @__PURE__ */ new Set();
      return t.filter((n) => {
        const r = n[e];
        return s.has(r) ? false : (s.add(r), true);
      });
    },
    generateSdkVersion(t, e, s) {
      const r = t.length === 0 ? be.ADAPTER_TYPES.UNIVERSAL : t.map((i) => i.adapterType).join(",");
      return `${e}-${r}-${s}`;
    },
    createAccount(t, e, s, n, r) {
      return {
        namespace: t,
        address: e,
        type: s,
        publicKey: n,
        path: r
      };
    },
    isCaipAddress(t) {
      if (typeof t != "string") return false;
      const e = t.split(":"), s = e[0];
      return e.filter(Boolean).length === 3 && s in W.CHAIN_NAME_MAP;
    },
    getAccount(t) {
      return t ? typeof t == "string" ? {
        address: t,
        chainId: void 0
      } : {
        address: t.address,
        chainId: t.chainId
      } : {
        address: void 0,
        chainId: void 0
      };
    },
    isMac() {
      const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return t.includes("macintosh") && !t.includes("safari");
    },
    formatTelegramSocialLoginUrl(t) {
      const e = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, s = "state=";
      if (new URL(t).host === "auth.magic.link") {
        const r = "provider_authorization_url=", i = t.substring(t.indexOf(r) + r.length), o = this.injectIntoUrl(decodeURIComponent(i), s, e);
        return t.replace(i, encodeURIComponent(o));
      }
      return this.injectIntoUrl(t, s, e);
    },
    injectIntoUrl(t, e, s) {
      const n = t.indexOf(e);
      if (n === -1) throw new Error(`${e} parameter not found in the URL: ${t}`);
      const r = t.indexOf("&", n), i = e.length, o = r !== -1 ? r : t.length, a = t.substring(0, n + i), c = t.substring(n + i, o), l = t.substring(r), d = c + s;
      return a + d + l;
    }
  };
  xo = {
    STORAGE_KEY: "@appkit-wallet/",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
  };
  Vs = {
    SAFE_RPC_METHODS: [
      "eth_accounts",
      "eth_blockNumber",
      "eth_call",
      "eth_chainId",
      "eth_estimateGas",
      "eth_feeHistory",
      "eth_gasPrice",
      "eth_getAccount",
      "eth_getBalance",
      "eth_getBlockByHash",
      "eth_getBlockByNumber",
      "eth_getBlockReceipts",
      "eth_getBlockTransactionCountByHash",
      "eth_getBlockTransactionCountByNumber",
      "eth_getCode",
      "eth_getFilterChanges",
      "eth_getFilterLogs",
      "eth_getLogs",
      "eth_getProof",
      "eth_getStorageAt",
      "eth_getTransactionByBlockHashAndIndex",
      "eth_getTransactionByBlockNumberAndIndex",
      "eth_getTransactionByHash",
      "eth_getTransactionCount",
      "eth_getTransactionReceipt",
      "eth_getUncleCountByBlockHash",
      "eth_getUncleCountByBlockNumber",
      "eth_maxPriorityFeePerGas",
      "eth_newBlockFilter",
      "eth_newFilter",
      "eth_newPendingTransactionFilter",
      "eth_sendRawTransaction",
      "eth_syncing",
      "eth_uninstallFilter",
      "wallet_getCapabilities",
      "wallet_getCallsStatus",
      "eth_getUserOperationReceipt",
      "eth_estimateUserOperationGas",
      "eth_getUserOperationByHash",
      "eth_supportedEntryPoints",
      "wallet_getAssets"
    ],
    NOT_SAFE_RPC_METHODS: [
      "personal_sign",
      "eth_signTypedData_v4",
      "eth_sendTransaction",
      "solana_signMessage",
      "solana_signTransaction",
      "solana_signAllTransactions",
      "solana_signAndSendTransaction",
      "wallet_sendCalls",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "eth_sendUserOperation"
    ],
    GET_CHAIN_ID: "eth_chainId",
    RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
    RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
    ACCOUNT_TYPES: {
      EOA: "eoa",
      SMART_ACCOUNT: "smartAccount"
    }
  };
  aw = {
    set(t, e) {
      Pa.isClient && localStorage.setItem(`${xo.STORAGE_KEY}${t}`, e);
    },
    get(t) {
      return Pa.isClient ? localStorage.getItem(`${xo.STORAGE_KEY}${t}`) : null;
    },
    delete(t, e) {
      Pa.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${xo.STORAGE_KEY}${t}`));
    }
  };
  Pa = {
    isClient: typeof window < "u"
  };
  async function ei(...t) {
    const e = await fetch(...t);
    if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
    return e;
  }
  class zi {
    constructor({ baseUrl: e, clientId: s }) {
      this.baseUrl = e, this.clientId = s;
    }
    async get({ headers: e, signal: s, cache: n, ...r }) {
      const i = this.createUrl(r);
      return (await ei(i, {
        method: "GET",
        headers: e,
        signal: s,
        cache: n
      })).json();
    }
    async getBlob({ headers: e, signal: s, ...n }) {
      const r = this.createUrl(n);
      return (await ei(r, {
        method: "GET",
        headers: e,
        signal: s
      })).blob();
    }
    async post({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await ei(i, {
        method: "POST",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async put({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await ei(i, {
        method: "PUT",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async delete({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await ei(i, {
        method: "DELETE",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    createUrl({ path: e, params: s }) {
      const n = new URL(e, this.baseUrl);
      return s && Object.entries(s).forEach(([r, i]) => {
        i && n.searchParams.append(r, i);
      }), this.clientId && n.searchParams.append("clientId", this.clientId), n;
    }
    sendBeacon({ body: e, ...s }) {
      const n = this.createUrl(s);
      return navigator.sendBeacon(n.toString(), e ? JSON.stringify(e) : void 0);
    }
  }
  let Tc, ie, Vn, We, cw, lw, mf, At, Gt, dw, hw, uw, fw, pw, tn, gw;
  Tc = {
    getFeatureValue(t, e) {
      const s = e == null ? void 0 : e[t];
      return s === void 0 ? be.DEFAULT_FEATURES[t] : s;
    },
    filterSocialsByPlatform(t) {
      if (!t || !t.length) return t;
      let e = t;
      return se.isTelegram() && (se.isIos() && (e = e.filter((s) => s !== "google")), se.isMac() && (e = e.filter((s) => s !== "x")), se.isAndroid() && (e = e.filter((s) => ![
        "facebook",
        "x"
      ].includes(s)))), se.isMobile() && (e = e.filter((s) => s !== "facebook")), e;
    },
    isSocialsEnabled() {
      var _a2, _b3, _c2, _d2;
      return Array.isArray((_a2 = D.state.features) == null ? void 0 : _a2.socials) && ((_b3 = D.state.features) == null ? void 0 : _b3.socials.length) > 0 || Array.isArray((_c2 = D.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d2 = D.state.remoteFeatures) == null ? void 0 : _d2.socials.length) > 0;
    },
    isEmailEnabled() {
      var _a2, _b3;
      return !!(((_a2 = D.state.features) == null ? void 0 : _a2.email) || ((_b3 = D.state.remoteFeatures) == null ? void 0 : _b3.email));
    }
  };
  ie = De({
    features: be.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: be.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: "all"
  });
  D = {
    state: ie,
    subscribeKey(t, e) {
      return nt(ie, t, e);
    },
    setOptions(t) {
      Object.assign(ie, t);
    },
    setRemoteFeatures(t) {
      var _a2, _b3;
      if (!t) return;
      const e = {
        ...ie.remoteFeatures,
        ...t
      };
      ie.remoteFeatures = e, ((_a2 = ie.remoteFeatures) == null ? void 0 : _a2.socials) && (ie.remoteFeatures.socials = Tc.filterSocialsByPlatform(ie.remoteFeatures.socials)), ((_b3 = ie.features) == null ? void 0 : _b3.pay) && (ie.remoteFeatures.email = false, ie.remoteFeatures.socials = false);
    },
    setFeatures(t) {
      var _a2;
      if (!t) return;
      ie.features || (ie.features = be.DEFAULT_FEATURES);
      const e = {
        ...ie.features,
        ...t
      };
      ie.features = e, ((_a2 = ie.features) == null ? void 0 : _a2.pay) && ie.remoteFeatures && (ie.remoteFeatures.email = false, ie.remoteFeatures.socials = false);
    },
    setProjectId(t) {
      ie.projectId = t;
    },
    setCustomRpcUrls(t) {
      ie.customRpcUrls = t;
    },
    setAllWallets(t) {
      ie.allWallets = t;
    },
    setIncludeWalletIds(t) {
      ie.includeWalletIds = t;
    },
    setExcludeWalletIds(t) {
      ie.excludeWalletIds = t;
    },
    setFeaturedWalletIds(t) {
      ie.featuredWalletIds = t;
    },
    setTokens(t) {
      ie.tokens = t;
    },
    setTermsConditionsUrl(t) {
      ie.termsConditionsUrl = t;
    },
    setPrivacyPolicyUrl(t) {
      ie.privacyPolicyUrl = t;
    },
    setCustomWallets(t) {
      ie.customWallets = t;
    },
    setIsSiweEnabled(t) {
      ie.isSiweEnabled = t;
    },
    setIsUniversalProvider(t) {
      ie.isUniversalProvider = t;
    },
    setSdkVersion(t) {
      ie.sdkVersion = t;
    },
    setMetadata(t) {
      ie.metadata = t;
    },
    setDisableAppend(t) {
      ie.disableAppend = t;
    },
    setEIP6963Enabled(t) {
      ie.enableEIP6963 = t;
    },
    setDebug(t) {
      ie.debug = t;
    },
    setEnableWalletGuide(t) {
      ie.enableWalletGuide = t;
    },
    setEnableAuthLogger(t) {
      ie.enableAuthLogger = t;
    },
    setEnableWallets(t) {
      ie.enableWallets = t;
    },
    setPreferUniversalLinks(t) {
      ie.experimental_preferUniversalLinks = t;
    },
    setSIWX(t) {
      if (t) for (const [e, s] of Object.entries(be.SIWX_DEFAULTS)) t[e] ?? (t[e] = s);
      ie.siwx = t;
    },
    setConnectMethodsOrder(t) {
      ie.features = {
        ...ie.features,
        connectMethodsOrder: t
      };
    },
    setWalletFeaturesOrder(t) {
      ie.features = {
        ...ie.features,
        walletFeaturesOrder: t
      };
    },
    setSocialsOrder(t) {
      ie.remoteFeatures = {
        ...ie.remoteFeatures,
        socials: t
      };
    },
    setCollapseWallets(t) {
      ie.features = {
        ...ie.features,
        collapseWallets: t
      };
    },
    setEnableEmbedded(t) {
      ie.enableEmbedded = t;
    },
    setAllowUnsupportedChain(t) {
      ie.allowUnsupportedChain = t;
    },
    setManualWCControl(t) {
      ie.manualWCControl = t;
    },
    setEnableNetworkSwitch(t) {
      ie.enableNetworkSwitch = t;
    },
    setEnableMobileFullScreen(t) {
      ie.enableMobileFullScreen = se.isMobile() && t;
    },
    setEnableReconnect(t) {
      ie.enableReconnect = t;
    },
    setCoinbasePreference(t) {
      ie.coinbasePreference = t;
    },
    setDefaultAccountTypes(t = {}) {
      Object.entries(t).forEach(([e, s]) => {
        s && (ie.defaultAccountTypes[e] = s);
      });
    },
    setUniversalProviderConfigOverride(t) {
      ie.universalProviderConfigOverride = t;
    },
    getUniversalProviderConfigOverride() {
      return ie.universalProviderConfigOverride;
    },
    getSnapshot() {
      return Ui(ie);
    }
  };
  Vn = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  We = De({
    ...Vn
  });
  cw = {
    state: We,
    subscribeKey(t, e) {
      return nt(We, t, e);
    },
    showLoading(t, e = {}) {
      this._showMessage({
        message: t,
        variant: "loading",
        ...e
      });
    },
    showSuccess(t) {
      this._showMessage({
        message: t,
        variant: "success"
      });
    },
    showSvg(t, e) {
      this._showMessage({
        message: t,
        svg: e
      });
    },
    showError(t) {
      const e = se.parseError(t);
      this._showMessage({
        message: e,
        variant: "error"
      });
    },
    hide() {
      We.message = Vn.message, We.variant = Vn.variant, We.svg = Vn.svg, We.open = Vn.open, We.autoClose = Vn.autoClose;
    },
    _showMessage({ message: t, svg: e, variant: s = "success", autoClose: n = Vn.autoClose }) {
      We.open ? (We.open = false, setTimeout(() => {
        We.message = t, We.variant = s, We.svg = e, We.open = true, We.autoClose = n;
      }, 150)) : (We.message = t, We.variant = s, We.svg = e, We.open = true, We.autoClose = n);
    }
  };
  Ns = cw;
  lw = {
    purchaseCurrencies: [
      {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "USD Coin",
        symbol: "USDC",
        networks: [
          {
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
          },
          {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        ]
      },
      {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "Ether",
        symbol: "ETH",
        networks: [
          {
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
          },
          {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        ]
      }
    ],
    paymentCurrencies: [
      {
        id: "USD",
        payment_method_limits: [
          {
            id: "card",
            min: "10.00",
            max: "7500.00"
          },
          {
            id: "ach_bank_account",
            min: "10.00",
            max: "25000.00"
          }
        ]
      },
      {
        id: "EUR",
        payment_method_limits: [
          {
            id: "card",
            min: "10.00",
            max: "7500.00"
          },
          {
            id: "ach_bank_account",
            min: "10.00",
            max: "25000.00"
          }
        ]
      }
    ]
  };
  mf = se.getBlockchainApiUrl();
  At = De({
    clientId: null,
    api: new zi({
      baseUrl: mf,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  he = {
    state: At,
    async get(t) {
      const { st: e, sv: s } = he.getSdkProperties(), n = D.state.projectId, r = {
        ...t.params || {},
        st: e,
        sv: s,
        projectId: n
      };
      return At.api.get({
        ...t,
        params: r
      });
    },
    getSdkProperties() {
      const { sdkType: t, sdkVersion: e } = D.state;
      return {
        st: t || "unknown",
        sv: e || "unknown"
      };
    },
    async isNetworkSupported(t) {
      if (!t) return false;
      try {
        At.supportedChains.http.length || await he.getSupportedNetworks();
      } catch {
        return false;
      }
      return At.supportedChains.http.includes(t);
    },
    async getSupportedNetworks() {
      try {
        const t = await he.get({
          path: "v1/supported-chains"
        });
        return At.supportedChains = t, t;
      } catch {
        return At.supportedChains;
      }
    },
    async fetchIdentity({ address: t }) {
      const e = q.getIdentityFromCacheForAddress(t);
      if (e) return e;
      const s = await he.get({
        path: `/v1/identity/${t}`,
        params: {
          sender: y.state.activeCaipAddress ? se.getPlainAddress(y.state.activeCaipAddress) : void 0
        }
      });
      return q.updateIdentityCache({
        address: t,
        identity: s,
        timestamp: Date.now()
      }), s;
    },
    async fetchTransactions({ account: t, cursor: e, signal: s, cache: n, chainId: r }) {
      var _a2;
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        data: [],
        next: void 0
      };
      const o = q.getTransactionsCacheForAddress({
        address: t,
        chainId: r
      });
      if (o) return o;
      const a = await he.get({
        path: `/v1/account/${t}/history`,
        params: {
          cursor: e,
          chainId: r
        },
        signal: s,
        cache: n
      });
      return q.updateTransactionsCache({
        address: t,
        chainId: r,
        timestamp: Date.now(),
        transactions: a
      }), a;
    },
    async fetchSwapQuote({ amount: t, userAddress: e, from: s, to: n, gasPrice: r }) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? he.get({
        path: "/v1/convert/quotes",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          amount: t,
          userAddress: e,
          from: s,
          to: n,
          gasPrice: r
        }
      }) : {
        quotes: []
      };
    },
    async fetchSwapTokens({ chainId: t }) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? he.get({
        path: "/v1/convert/tokens",
        params: {
          chainId: t
        }
      }) : {
        tokens: []
      };
    },
    async fetchTokenPrice({ addresses: t }) {
      var _a2;
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        fungibles: []
      };
      const s = q.getTokenPriceCacheForAddresses(t);
      if (s) return s;
      const n = await At.api.post({
        path: "/v1/fungible/price",
        body: {
          currency: "usd",
          addresses: t,
          projectId: D.state.projectId
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      return q.updateTokenPriceCache({
        addresses: t,
        timestamp: Date.now(),
        tokenPrice: n
      }), n;
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? he.get({
        path: "/v1/convert/allowance",
        params: {
          tokenAddress: t,
          userAddress: e
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        allowance: "0"
      };
    },
    async fetchGasPrice({ chainId: t }) {
      var _a2;
      const { st: e, sv: s } = he.getSdkProperties();
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Gas Price");
      return he.get({
        path: "/v1/convert/gas-price",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          chainId: t,
          st: e,
          sv: s
        }
      });
    },
    async generateSwapCalldata({ amount: t, from: e, to: s, userAddress: n, disableEstimate: r }) {
      var _a2;
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return At.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: t,
          eip155: {
            slippage: be.CONVERT_SLIPPAGE_TOLERANCE
          },
          projectId: D.state.projectId,
          from: e,
          to: s,
          userAddress: n,
          disableEstimate: r
        }
      });
    },
    async generateApproveCalldata({ from: t, to: e, userAddress: s }) {
      var _a2;
      const { st: n, sv: r } = he.getSdkProperties();
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return he.get({
        path: "/v1/convert/build-approve",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          userAddress: s,
          from: t,
          to: e,
          st: n,
          sv: r
        }
      });
    },
    async getBalance(t, e, s) {
      var _a2;
      const { st: n, sv: r } = he.getSdkProperties();
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return Ns.showError("Token Balance Unavailable"), {
        balances: []
      };
      const o = `${e}:${t}`, a = q.getBalanceCacheForCaipAddress(o);
      if (a) return a;
      const c = await he.get({
        path: `/v1/account/${t}/balance`,
        params: {
          currency: "usd",
          chainId: e,
          forceUpdate: s,
          st: n,
          sv: r
        }
      });
      return q.updateBalanceCache({
        caipAddress: o,
        balance: c,
        timestamp: Date.now()
      }), c;
    },
    async lookupEnsName(t) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? he.get({
        path: `/v1/profile/account/${t}`,
        params: {
          apiVersion: "2"
        }
      }) : {
        addresses: {},
        attributes: []
      };
    },
    async reverseLookupEnsName({ address: t }) {
      var _a2, _b3;
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return [];
      const s = (_b3 = y.getAccountData()) == null ? void 0 : _b3.address;
      return he.get({
        path: `/v1/profile/reverse/${t}`,
        params: {
          sender: s,
          apiVersion: "2"
        }
      });
    },
    async getEnsNameSuggestions(t) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? he.get({
        path: `/v1/profile/suggestions/${t}`,
        params: {
          zone: "reown.id"
        }
      }) : {
        suggestions: []
      };
    },
    async registerEnsName({ coinType: t, address: e, message: s, signature: n }) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? At.api.post({
        path: "/v1/profile/account",
        body: {
          coin_type: t,
          address: e,
          message: s,
          signature: n
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        success: false
      };
    },
    async generateOnRampURL({ destinationWallets: t, partnerUserId: e, defaultNetwork: s, purchaseAmount: n, paymentAmount: r }) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? (await At.api.post({
        path: "/v1/generators/onrampurl",
        params: {
          projectId: D.state.projectId
        },
        body: {
          destinationWallets: t,
          defaultNetwork: s,
          partnerUserId: e,
          defaultExperience: "buy",
          presetCryptoAmount: n,
          presetFiatAmount: r
        }
      })).url : "";
    },
    async getOnrampOptions() {
      var _a2;
      if (!await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        paymentCurrencies: [],
        purchaseCurrencies: []
      };
      try {
        return await he.get({
          path: "/v1/onramp/options"
        });
      } catch {
        return lw;
      }
    },
    async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: s, network: n }) {
      var _a2;
      try {
        return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? await At.api.post({
          path: "/v1/onramp/quote",
          params: {
            projectId: D.state.projectId
          },
          body: {
            purchaseCurrency: t,
            paymentCurrency: e,
            amount: s,
            network: n
          }
        }) : null;
      } catch {
        return {
          networkFee: {
            amount: s,
            currency: e.id
          },
          paymentSubtotal: {
            amount: s,
            currency: e.id
          },
          paymentTotal: {
            amount: s,
            currency: e.id
          },
          purchaseAmount: {
            amount: s,
            currency: e.id
          },
          quoteId: "mocked-quote-id"
        };
      }
    },
    async getSmartSessions(t) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? he.get({
        path: `/v1/sessions/${t}`
      }) : [];
    },
    async revokeSmartSession(t, e, s) {
      var _a2;
      return await he.isNetworkSupported((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? At.api.post({
        path: `/v1/sessions/${t}/revoke`,
        params: {
          projectId: D.state.projectId
        },
        body: {
          pci: e,
          signature: s
        }
      }) : {
        success: false
      };
    },
    setClientId(t) {
      At.clientId = t, At.api = new zi({
        baseUrl: mf,
        clientId: t
      });
    }
  };
  Gt = {
    PHANTOM: {
      id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      url: "https://phantom.app"
    },
    SOLFLARE: {
      id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      url: "https://solflare.com"
    },
    COINBASE: {
      id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      url: "https://go.cb-w.com"
    },
    BINANCE: {
      id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
      appId: "yFK5FCqYprrXDiVFbhyRx7",
      deeplink: "bnc://app.binance.com/mp/app",
      url: "https://app.binance.com/en/download"
    }
  };
  dw = {
    handleMobileDeeplinkRedirect(t, e) {
      const s = window.location.href, n = encodeURIComponent(s);
      if (t === Gt.PHANTOM.id && !("phantom" in window)) {
        const r = s.startsWith("https") ? "https" : "http", i = s.split("/")[2], o = encodeURIComponent(`${r}://${i}`);
        window.location.href = `${Gt.PHANTOM.url}/ul/browse/${n}?ref=${o}`;
      }
      if (t === Gt.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${Gt.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`), e === W.CHAIN.SOLANA && t === Gt.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${Gt.COINBASE.url}/dapp?cb_url=${n}`), e === W.CHAIN.BITCOIN && t === Gt.BINANCE.id && !("binancew3w" in window)) {
        const r = y.state.activeCaipNetwork, i = window.btoa("/pages/browser/index"), o = window.btoa(`url=${n}&defaultChainId=${(r == null ? void 0 : r.id) ?? 1}`), a = new URL(Gt.BINANCE.deeplink);
        a.searchParams.set("appId", Gt.BINANCE.appId), a.searchParams.set("startPagePath", i), a.searchParams.set("startPageQuery", o);
        const c = new URL(Gt.BINANCE.url);
        c.searchParams.set("_dp", window.btoa(a.toString())), window.location.href = c.toString();
      }
    }
  };
  hw = Object.freeze({
    enabled: true,
    events: []
  });
  uw = new zi({
    baseUrl: se.getAnalyticsUrl(),
    clientId: null
  });
  fw = 5;
  pw = 60 * 1e3;
  tn = De({
    ...hw
  });
  gw = {
    state: tn,
    subscribeKey(t, e) {
      return nt(tn, t, e);
    },
    async sendError(t, e) {
      if (!tn.enabled) return;
      const s = Date.now();
      if (tn.events.filter((i) => {
        const o = new Date(i.properties.timestamp || "").getTime();
        return s - o < pw;
      }).length >= fw) return;
      const r = {
        type: "error",
        event: e,
        properties: {
          errorType: t.name,
          errorMessage: t.message,
          stackTrace: t.stack,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
      tn.events.push(r);
      try {
        if (typeof window > "u") return;
        const { projectId: i, sdkType: o, sdkVersion: a } = D.state;
        await uw.post({
          path: "/e",
          params: {
            projectId: i,
            st: o,
            sv: a || "html-wagmi-4.2.2"
          },
          body: {
            eventId: se.getUUID(),
            url: window.location.href,
            domain: window.location.hostname,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            props: {
              type: "error",
              event: e,
              errorType: t.name,
              errorMessage: t.message,
              stackTrace: t.stack
            }
          }
        });
      } catch {
      }
    },
    enable() {
      tn.enabled = true;
    },
    disable() {
      tn.enabled = false;
    },
    clearEvents() {
      tn.events = [];
    }
  };
  ar = class extends Error {
    constructor(e, s, n) {
      super(e), this.originalName = "AppKitError", this.name = "AppKitError", this.category = s, this.originalError = n, n && n instanceof Error && (this.originalName = n.name), Object.setPrototypeOf(this, ar.prototype);
      let r = false;
      if (n instanceof Error && typeof n.stack == "string" && n.stack) {
        const i = n.stack, o = i.indexOf(`
`);
        if (o > -1) {
          const a = i.substring(o + 1);
          this.stack = `${this.name}: ${this.message}
${a}`, r = true;
        }
      }
      r || (Error.captureStackTrace ? Error.captureStackTrace(this, ar) : this.stack || (this.stack = `${this.name}: ${this.message}`));
    }
  };
  function Ed(t, e) {
    let s = "";
    try {
      t instanceof Error ? s = t.message : typeof t == "string" ? s = t : typeof t == "object" && t !== null ? Object.keys(t).length === 0 ? s = "Unknown error" : s = (t == null ? void 0 : t.message) || JSON.stringify(t) : s = String(t);
    } catch (r) {
      s = "Unknown error", console.error("Error parsing error message", r);
    }
    const n = t instanceof ar ? t : new ar(s, e, t);
    throw gw.sendError(n, n.category), n;
  }
  es = function(t, e = "INTERNAL_SDK_ERROR") {
    const s = {};
    return Object.keys(t).forEach((n) => {
      const r = t[n];
      if (typeof r == "function") {
        let i = r;
        r.constructor.name === "AsyncFunction" ? i = async (...o) => {
          try {
            return await r(...o);
          } catch (a) {
            return Ed(a, e);
          }
        } : i = (...o) => {
          try {
            return r(...o);
          } catch (a) {
            return Ed(a, e);
          }
        }, s[n] = i;
      } else s[n] = r;
    }), s;
  };
  let $t, mw, ww, $a, yw, bw, Ew, vw, vd, Me, Cw, wt, Aw, Cd, Iw, ue, Nw, Se, _w, Ps, Oc, yf, Sw, Ce, Tw, Ow, ti;
  $t = De({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  mw = {
    state: $t,
    subscribeNetworkImages(t) {
      return st($t.networkImages, () => t($t.networkImages));
    },
    subscribeKey(t, e) {
      return nt($t, t, e);
    },
    subscribe(t) {
      return st($t, () => t($t));
    },
    setWalletImage(t, e) {
      $t.walletImages[t] = e;
    },
    setNetworkImage(t, e) {
      $t.networkImages[t] = e;
    },
    setChainImage(t, e) {
      $t.chainImages[t] = e;
    },
    setConnectorImage(t, e) {
      $t.connectorImages = {
        ...$t.connectorImages,
        [t]: e
      };
    },
    setTokenImage(t, e) {
      $t.tokenImages[t] = e;
    },
    setCurrencyImage(t, e) {
      $t.currencyImages[t] = e;
    }
  };
  Zt = es(mw);
  ww = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: ""
  };
  $a = De({
    networkImagePromises: {}
  });
  wf = {
    async fetchWalletImage(t) {
      if (t) return await re._fetchWalletImage(t), this.getWalletImageById(t);
    },
    async fetchNetworkImage(t) {
      if (!t) return;
      const e = this.getNetworkImageById(t);
      return e || ($a.networkImagePromises[t] || ($a.networkImagePromises[t] = re._fetchNetworkImage(t)), await $a.networkImagePromises[t], this.getNetworkImageById(t));
    },
    getWalletImageById(t) {
      if (t) return Zt.state.walletImages[t];
    },
    getWalletImage(t) {
      if (t == null ? void 0 : t.image_url) return t == null ? void 0 : t.image_url;
      if (t == null ? void 0 : t.image_id) return Zt.state.walletImages[t.image_id];
    },
    getNetworkImage(t) {
      var _a2, _b3, _c2;
      if ((_a2 = t == null ? void 0 : t.assets) == null ? void 0 : _a2.imageUrl) return (_b3 = t == null ? void 0 : t.assets) == null ? void 0 : _b3.imageUrl;
      if ((_c2 = t == null ? void 0 : t.assets) == null ? void 0 : _c2.imageId) return Zt.state.networkImages[t.assets.imageId];
    },
    getNetworkImageById(t) {
      if (t) return Zt.state.networkImages[t];
    },
    getConnectorImage(t) {
      var _a2;
      if (t == null ? void 0 : t.imageUrl) return t.imageUrl;
      if ((_a2 = t == null ? void 0 : t.info) == null ? void 0 : _a2.icon) return t.info.icon;
      if (t == null ? void 0 : t.imageId) return Zt.state.connectorImages[t.imageId];
    },
    getChainImage(t) {
      return Zt.state.networkImages[ww[t]];
    },
    getTokenImage(t) {
      if (t) return Zt.state.tokenImages[t];
    }
  };
  yw = se.getAnalyticsUrl();
  bw = new zi({
    baseUrl: yw,
    clientId: null
  });
  Ew = [
    "MODAL_CREATED"
  ];
  vw = 45;
  vd = 1e3 * 10;
  Me = De({
    timestamp: Date.now(),
    lastFlush: Date.now(),
    reportedErrors: {},
    data: {
      type: "track",
      event: "MODAL_CREATED"
    },
    pendingEvents: [],
    subscribedToVisibilityChange: false,
    walletImpressions: []
  });
  pe = {
    state: Me,
    subscribe(t) {
      return st(Me, () => t(Me));
    },
    getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: s } = D.state;
      return {
        projectId: t,
        st: e,
        sv: s || "html-wagmi-4.2.2"
      };
    },
    shouldFlushEvents() {
      const t = JSON.stringify(Me.pendingEvents).length / 1024 > vw, e = Me.lastFlush + vd < Date.now();
      return t || e;
    },
    _setPendingEvent(t) {
      var _a2, _b3;
      try {
        let e = (_a2 = y.getAccountData()) == null ? void 0 : _a2.address;
        if ("address" in t.data && t.data.address && (e = t.data.address), Ew.includes(t.data.event) || typeof window > "u") return;
        const s = (_b3 = y.getActiveCaipNetwork()) == null ? void 0 : _b3.caipNetworkId;
        this.state.pendingEvents.push({
          eventId: se.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: t.timestamp,
          props: {
            ...t.data,
            address: e,
            properties: {
              ..."properties" in t.data ? t.data.properties : {},
              caipNetworkId: s
            }
          }
        }), Me.reportedErrors.FORBIDDEN = false, pe.shouldFlushEvents() && pe._submitPendingEvents();
      } catch (e) {
        console.warn("_setPendingEvent", e);
      }
    },
    sendEvent(t) {
      var _a2;
      Me.timestamp = Date.now(), Me.data = t;
      const e = [
        "INITIALIZE",
        "CONNECT_SUCCESS",
        "SOCIAL_LOGIN_SUCCESS"
      ];
      (((_a2 = D.state.features) == null ? void 0 : _a2.analytics) || e.includes(t.event)) && pe._setPendingEvent(Me), this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(t) {
      Me.walletImpressions.push(t);
    },
    _transformPendingEventsForBatch(t) {
      try {
        return t.filter((e) => e.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return t;
      }
    },
    _submitPendingEvents() {
      if (Me.lastFlush = Date.now(), !(Me.pendingEvents.length === 0 && Me.walletImpressions.length === 0)) try {
        const t = pe._transformPendingEventsForBatch(Me.pendingEvents);
        Me.walletImpressions.length && t.push({
          eventId: se.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [
              ...Me.walletImpressions
            ]
          }
        }), bw.sendBeacon({
          path: "/batch",
          params: pe.getSdkProperties(),
          body: t
        }), Me.reportedErrors.FORBIDDEN = false, Me.pendingEvents = [], Me.walletImpressions = [];
      } catch {
        Me.reportedErrors.FORBIDDEN = true;
      }
    },
    subscribeToFlushTriggers() {
      var _a2, _b3, _c2;
      Me.subscribedToVisibilityChange || typeof document > "u" || (Me.subscribedToVisibilityChange = true, (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && pe._submitPendingEvents();
      }), (_b3 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b3.call(document, "freeze", () => {
        pe._submitPendingEvents();
      }), (_c2 = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c2.call(window, "pagehide", () => {
        pe._submitPendingEvents();
      }), setInterval(() => {
        pe._submitPendingEvents();
      }, vd));
    }
  };
  Cw = se.getApiUrl();
  wt = new zi({
    baseUrl: Cw,
    clientId: null
  });
  Aw = 40;
  Cd = 4;
  Iw = 20;
  ue = De({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    filteredWallets: [],
    search: [],
    isAnalyticsEnabled: false,
    excludedWallets: [],
    isFetchingRecommendedWallets: false,
    explorerWallets: [],
    explorerFilteredWallets: [],
    plan: {
      tier: "none",
      hasExceededUsageLimit: false,
      limits: {
        isAboveRpcLimit: false,
        isAboveMauLimit: false
      }
    }
  });
  re = {
    state: ue,
    subscribeKey(t, e) {
      return nt(ue, t, e);
    },
    _getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: s } = D.state;
      return {
        projectId: t,
        st: e || "appkit",
        sv: s || "html-wagmi-4.2.2"
      };
    },
    _filterOutExtensions(t) {
      return D.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
    },
    async _fetchWalletImage(t) {
      const e = `${wt.baseUrl}/getWalletImage/${t}`, s = await wt.getBlob({
        path: e,
        params: re._getSdkProperties()
      });
      Zt.setWalletImage(t, URL.createObjectURL(s));
    },
    async _fetchNetworkImage(t) {
      const e = `${wt.baseUrl}/public/getAssetImage/${t}`, s = await wt.getBlob({
        path: e,
        params: re._getSdkProperties()
      });
      Zt.setNetworkImage(t, URL.createObjectURL(s));
    },
    async _fetchConnectorImage(t) {
      const e = `${wt.baseUrl}/public/getAssetImage/${t}`, s = await wt.getBlob({
        path: e,
        params: re._getSdkProperties()
      });
      Zt.setConnectorImage(t, URL.createObjectURL(s));
    },
    async _fetchCurrencyImage(t) {
      const e = `${wt.baseUrl}/public/getCurrencyImage/${t}`, s = await wt.getBlob({
        path: e,
        params: re._getSdkProperties()
      });
      Zt.setCurrencyImage(t, URL.createObjectURL(s));
    },
    async _fetchTokenImage(t) {
      const e = `${wt.baseUrl}/public/getTokenImage/${t}`, s = await wt.getBlob({
        path: e,
        params: re._getSdkProperties()
      });
      Zt.setTokenImage(t, URL.createObjectURL(s));
    },
    _filterWalletsByPlatform(t) {
      const e = t.length, s = se.isMobile() ? t == null ? void 0 : t.filter((r) => r.mobile_link || r.webapp_link ? true : Object.values(Gt).map((o) => o.id).includes(r.id)) : t, n = e - s.length;
      return {
        filteredWallets: s,
        mobileFilteredOutWalletsLength: n
      };
    },
    async fetchProjectConfig() {
      return (await wt.get({
        path: "/appkit/v1/config",
        params: re._getSdkProperties()
      })).features;
    },
    async fetchUsage() {
      try {
        const t = await wt.get({
          path: "/appkit/v1/project-limits",
          params: re._getSdkProperties()
        }), { tier: e, isAboveMauLimit: s, isAboveRpcLimit: n } = t.planLimits, r = e === "starter", i = s || n;
        re.state.plan = {
          tier: e,
          hasExceededUsageLimit: r && i,
          limits: {
            isAboveRpcLimit: n,
            isAboveMauLimit: s
          }
        };
      } catch (t) {
        console.warn("Failed to fetch usage", t);
      }
    },
    async fetchAllowedOrigins() {
      try {
        const { allowedOrigins: t } = await wt.get({
          path: "/projects/v1/origins",
          params: re._getSdkProperties()
        });
        return t;
      } catch (t) {
        if (t instanceof Error && t.cause instanceof Response) {
          const e = t.cause.status;
          if (e === W.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
            cause: t
          });
          if (e >= W.HTTP_STATUS_CODES.SERVER_ERROR && e < 600) throw new Error("SERVER_ERROR", {
            cause: t
          });
          return [];
        }
        return [];
      }
    },
    async fetchNetworkImages() {
      var _a2;
      const e = (_a2 = y.getAllRequestedCaipNetworks()) == null ? void 0 : _a2.map(({ assets: s }) => s == null ? void 0 : s.imageId).filter(Boolean).filter((s) => !wf.getNetworkImageById(s));
      e && await Promise.allSettled(e.map((s) => re._fetchNetworkImage(s)));
    },
    async fetchConnectorImages() {
      const { connectors: t } = K.state, e = t.map(({ imageId: s }) => s).filter(Boolean);
      await Promise.allSettled(e.map((s) => re._fetchConnectorImage(s)));
    },
    async fetchCurrencyImages(t = []) {
      await Promise.allSettled(t.map((e) => re._fetchCurrencyImage(e)));
    },
    async fetchTokenImages(t = []) {
      await Promise.allSettled(t.map((e) => re._fetchTokenImage(e)));
    },
    async fetchWallets(t) {
      var _a2;
      const e = t.exclude ?? [];
      re._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(Gt).map((o) => o.id));
      const n = await wt.get({
        path: "/getWallets",
        params: {
          ...re._getSdkProperties(),
          ...t,
          page: String(t.page),
          entries: String(t.entries),
          include: (_a2 = t.include) == null ? void 0 : _a2.join(","),
          exclude: e.join(",")
        }
      }), { filteredWallets: r, mobileFilteredOutWalletsLength: i } = re._filterWalletsByPlatform(n == null ? void 0 : n.data);
      return {
        data: r || [],
        count: n == null ? void 0 : n.count,
        mobileFilteredOutWalletsLength: i
      };
    },
    async prefetchWalletRanks() {
      const t = K.state.connectors;
      if (!(t == null ? void 0 : t.length)) return;
      const e = {
        page: 1,
        entries: 20,
        badge: "certified"
      };
      if (e.names = t.map((r) => r.name).join(","), y.state.activeChain === W.CHAIN.EVM) {
        const r = [
          ...t.flatMap((i) => {
            var _a2;
            return ((_a2 = i.connectors) == null ? void 0 : _a2.map((o) => {
              var _a3;
              return (_a3 = o.info) == null ? void 0 : _a3.rdns;
            })) || [];
          }),
          ...t.map((i) => {
            var _a2;
            return (_a2 = i.info) == null ? void 0 : _a2.rdns;
          })
        ].filter((i) => typeof i == "string" && i.length > 0);
        r.length && (e.rdns = r.join(","));
      }
      const { data: s } = await re.fetchWallets(e);
      ue.explorerWallets = s;
      const n = y.getRequestedCaipNetworkIds().join(",");
      ue.explorerFilteredWallets = s.filter((r) => {
        var _a2;
        return (_a2 = r.chains) == null ? void 0 : _a2.some((i) => n.includes(i));
      });
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: t } = D.state;
      if (t == null ? void 0 : t.length) {
        const e = {
          ...re._getSdkProperties(),
          page: 1,
          entries: (t == null ? void 0 : t.length) ?? Cd,
          include: t
        }, { data: s } = await re.fetchWallets(e), n = [
          ...s
        ].sort((i, o) => t.indexOf(i.id) - t.indexOf(o.id)), r = n.map((i) => i.image_id).filter(Boolean);
        await Promise.allSettled(r.map((i) => re._fetchWalletImage(i))), ue.featured = n, ue.allFeatured = n;
      }
    },
    async fetchRecommendedWallets() {
      try {
        ue.isFetchingRecommendedWallets = true;
        const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s } = D.state, n = [
          ...e ?? [],
          ...s ?? []
        ].filter(Boolean), r = y.getRequestedCaipNetworkIds().join(","), i = {
          page: 1,
          entries: Cd,
          include: t,
          exclude: n,
          chains: r
        }, { data: o, count: a } = await re.fetchWallets(i), c = q.getRecentWallets(), l = o.map((h) => h.image_id).filter(Boolean), d = c.map((h) => h.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...d
        ].map((h) => re._fetchWalletImage(h))), ue.recommended = o, ue.allRecommended = o, ue.count = a ?? 0;
      } catch {
      } finally {
        ue.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: t }) {
      const { includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: n } = D.state, r = y.getRequestedCaipNetworkIds().join(","), i = [
        ...ue.recommended.map(({ id: h }) => h),
        ...s ?? [],
        ...n ?? []
      ].filter(Boolean), o = {
        page: t,
        entries: Aw,
        include: e,
        exclude: i,
        chains: r
      }, { data: a, count: c, mobileFilteredOutWalletsLength: l } = await re.fetchWallets(o);
      ue.mobileFilteredOutWalletsLength = l + (ue.mobileFilteredOutWalletsLength ?? 0);
      const d = a.slice(0, Iw).map((h) => h.image_id).filter(Boolean);
      await Promise.allSettled(d.map((h) => re._fetchWalletImage(h))), ue.wallets = se.uniqueBy([
        ...ue.wallets,
        ...re._filterOutExtensions(a)
      ], "id").filter((h) => {
        var _a2;
        return (_a2 = h.chains) == null ? void 0 : _a2.some((u) => r.includes(u));
      }), ue.count = c > ue.count ? c : ue.count, ue.page = t;
    },
    async initializeExcludedWallets({ ids: t }) {
      const e = {
        page: 1,
        entries: t.length,
        include: t
      }, { data: s } = await re.fetchWallets(e);
      s && s.forEach((n) => {
        ue.excludedWallets.push({
          rdns: n.rdns,
          name: n.name
        });
      });
    },
    async searchWallet({ search: t, badge: e }) {
      const { includeWalletIds: s, excludeWalletIds: n } = D.state, r = y.getRequestedCaipNetworkIds().join(",");
      ue.search = [];
      const i = {
        page: 1,
        entries: 100,
        search: t == null ? void 0 : t.trim(),
        badge_type: e,
        include: s,
        exclude: n,
        chains: r
      }, { data: o } = await re.fetchWallets(i);
      pe.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: {
          badge: e ?? "",
          search: t ?? ""
        }
      });
      const a = o.map((c) => c.image_id).filter(Boolean);
      await Promise.allSettled([
        ...a.map((c) => re._fetchWalletImage(c)),
        se.wait(300)
      ]), ue.search = re._filterOutExtensions(o);
    },
    initPromise(t, e) {
      const s = ue.promises[t];
      return s || (ue.promises[t] = e());
    },
    prefetch({ fetchConnectorImages: t = true, fetchFeaturedWallets: e = true, fetchRecommendedWallets: s = true, fetchNetworkImages: n = true, fetchWalletRanks: r = true } = {}) {
      const i = [
        t && re.initPromise("connectorImages", re.fetchConnectorImages),
        e && re.initPromise("featuredWallets", re.fetchFeaturedWallets),
        s && re.initPromise("recommendedWallets", re.fetchRecommendedWallets),
        n && re.initPromise("networkImages", re.fetchNetworkImages),
        r && re.initPromise("walletRanks", re.prefetchWalletRanks)
      ].filter(Boolean);
      return Promise.allSettled(i);
    },
    prefetchAnalyticsConfig() {
      var _a2;
      ((_a2 = D.state.features) == null ? void 0 : _a2.analytics) && re.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: t } = await wt.get({
          path: "/getAnalyticsConfig",
          params: re._getSdkProperties()
        });
        D.setFeatures({
          analytics: t
        });
      } catch {
        D.setFeatures({
          analytics: false
        });
      }
    },
    filterByNamespaces(t) {
      if (!(t == null ? void 0 : t.length)) {
        ue.featured = ue.allFeatured, ue.recommended = ue.allRecommended;
        return;
      }
      const e = y.getRequestedCaipNetworkIds().join(",");
      ue.featured = ue.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.recommended = ue.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.filteredWallets = ue.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    },
    clearFilterByNamespaces() {
      ue.filteredWallets = [];
    },
    setFilterByNamespace(t) {
      if (!t) {
        ue.featured = ue.allFeatured, ue.recommended = ue.allRecommended;
        return;
      }
      const e = y.getRequestedCaipNetworkIds().join(",");
      ue.featured = ue.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.recommended = ue.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.filteredWallets = ue.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    }
  };
  Nw = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster"
  ];
  Se = De({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  _w = {
    state: Se,
    subscribeKey(t, e) {
      return nt(Se, t, e);
    },
    pushTransactionStack(t) {
      Se.transactionStack.push(t);
    },
    popTransactionStack(t) {
      const e = Se.transactionStack.pop();
      if (!e) return;
      const { onSuccess: s, onError: n, onCancel: r } = e;
      switch (t) {
        case "success":
          s == null ? void 0 : s();
          break;
        case "error":
          n == null ? void 0 : n(), le.goBack();
          break;
        case "cancel":
          r == null ? void 0 : r(), le.goBack();
          break;
      }
    },
    push(t, e) {
      let s = t, n = e;
      re.state.plan.hasExceededUsageLimit && Nw.includes(t) && (s = "UsageExceeded", n = void 0), s !== Se.view && (Se.view = s, Se.history.push(s), Se.data = n);
    },
    reset(t, e) {
      Se.view = t, Se.history = [
        t
      ], Se.data = e;
    },
    replace(t, e) {
      Se.history.at(-1) === t || (Se.view = t, Se.history[Se.history.length - 1] = t, Se.data = e);
    },
    goBack() {
      var _a2, _b3;
      const t = y.state.activeCaipAddress, e = le.state.view === "ConnectingFarcaster", s = !t && e;
      if (Se.history.length > 1) {
        Se.history.pop();
        const [n] = Se.history.slice(-1);
        n && (t && n === "Connect" ? Se.view = "Account" : Se.view = n);
      } else ge.close();
      ((_a2 = Se.data) == null ? void 0 : _a2.wallet) && (Se.data.wallet = void 0), ((_b3 = Se.data) == null ? void 0 : _b3.redirectView) && (Se.data.redirectView = void 0), setTimeout(() => {
        var _a3, _b4, _c2;
        if (s) {
          y.setAccountProp("farcasterUrl", void 0, y.state.activeChain);
          const n = K.getAuthConnector();
          (_a3 = n == null ? void 0 : n.provider) == null ? void 0 : _a3.reload();
          const r = Ui(D.state);
          (_c2 = (_b4 = n == null ? void 0 : n.provider) == null ? void 0 : _b4.syncDappData) == null ? void 0 : _c2.call(_b4, {
            metadata: r.metadata,
            sdkVersion: r.sdkVersion,
            projectId: r.projectId,
            sdkType: r.sdkType
          });
        }
      }, 100);
    },
    goBackToIndex(t) {
      if (Se.history.length > 1) {
        Se.history = Se.history.slice(0, t + 1);
        const [e] = Se.history.slice(-1);
        e && (Se.view = e);
      }
    },
    goBackOrCloseModal() {
      le.state.history.length > 1 ? le.goBack() : ge.close();
    }
  };
  le = es(_w);
  Ps = De({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  Oc = {
    state: Ps,
    subscribe(t) {
      return st(Ps, () => t(Ps));
    },
    setThemeMode(t) {
      Ps.themeMode = t;
      try {
        const e = K.getAuthConnector();
        if (e) {
          const s = Oc.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeMode: t,
            themeVariables: s,
            w3mThemeVariables: Fo(s, t)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(t) {
      Ps.themeVariables = {
        ...Ps.themeVariables,
        ...t
      };
      try {
        const e = K.getAuthConnector();
        if (e) {
          const s = Oc.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeVariables: s,
            w3mThemeVariables: Fo(Ps.themeVariables, Ps.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return Ui(Ps);
    }
  };
  Lt = es(Oc);
  yf = Object.fromEntries(df.map((t) => [
    t,
    void 0
  ]));
  Sw = Object.fromEntries(df.map((t) => [
    t,
    true
  ]));
  Ce = De({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: yf,
    filterByNamespaceMap: Sw
  });
  Tw = {
    state: Ce,
    subscribe(t) {
      return st(Ce, () => {
        t(Ce);
      });
    },
    subscribeKey(t, e) {
      return nt(Ce, t, e);
    },
    initialize(t) {
      t.forEach((e) => {
        const s = q.getConnectedConnectorId(e);
        s && K.setConnectorId(s, e);
      });
    },
    setActiveConnector(t) {
      t && (Ce.activeConnector = Di(t));
    },
    setConnectors(t) {
      t.filter((r) => !Ce.allConnectors.some((i) => i.id === r.id && K.getConnectorName(i.name) === K.getConnectorName(r.name) && i.chain === r.chain)).forEach((r) => {
        r.type !== "MULTI_CHAIN" && Ce.allConnectors.push(Di(r));
      });
      const s = K.getEnabledNamespaces(), n = K.getEnabledConnectors(s);
      Ce.connectors = K.mergeMultiChainConnectors(n);
    },
    filterByNamespaces(t) {
      Object.keys(Ce.filterByNamespaceMap).forEach((e) => {
        Ce.filterByNamespaceMap[e] = false;
      }), t.forEach((e) => {
        Ce.filterByNamespaceMap[e] = true;
      }), K.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(t, e) {
      Ce.filterByNamespaceMap[t] = e, K.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const t = K.getEnabledNamespaces(), e = K.getEnabledConnectors(t), s = K.areAllNamespacesEnabled();
      Ce.connectors = K.mergeMultiChainConnectors(e), s ? re.clearFilterByNamespaces() : re.filterByNamespaces(t);
    },
    getEnabledNamespaces() {
      return Object.entries(Ce.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
    },
    getEnabledConnectors(t) {
      return Ce.allConnectors.filter((e) => t.includes(e.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(Ce.filterByNamespaceMap).every((t) => t);
    },
    mergeMultiChainConnectors(t) {
      const e = K.generateConnectorMapByName(t), s = [];
      return e.forEach((n) => {
        const r = n[0], i = (r == null ? void 0 : r.id) === W.CONNECTOR_ID.AUTH;
        n.length > 1 && r ? s.push({
          name: r.name,
          imageUrl: r.imageUrl,
          imageId: r.imageId,
          connectors: [
            ...n
          ],
          type: i ? "AUTH" : "MULTI_CHAIN",
          chain: "eip155",
          id: (r == null ? void 0 : r.id) || ""
        }) : r && s.push(r);
      }), s;
    },
    generateConnectorMapByName(t) {
      const e = /* @__PURE__ */ new Map();
      return t.forEach((s) => {
        const { name: n } = s, r = K.getConnectorName(n);
        if (!r) return;
        const i = e.get(r) || [];
        i.find((a) => a.chain === s.chain) || i.push(s), e.set(r, i);
      }), e;
    },
    getConnectorName(t) {
      return t && ({
        "Trust Wallet": "Trust"
      }[t] || t);
    },
    getUniqueConnectorsByName(t) {
      const e = [];
      return t.forEach((s) => {
        e.find((n) => n.chain === s.chain) || e.push(s);
      }), e;
    },
    addConnector(t) {
      var _a2, _b3, _c2;
      if (t.id === W.CONNECTOR_ID.AUTH) {
        const e = t, s = Ui(D.state), n = Lt.getSnapshot().themeMode, r = Lt.getSnapshot().themeVariables;
        (_b3 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b3.call(_a2, {
          metadata: s.metadata,
          sdkVersion: s.sdkVersion,
          projectId: s.projectId,
          sdkType: s.sdkType
        }), (_c2 = e == null ? void 0 : e.provider) == null ? void 0 : _c2.syncTheme({
          themeMode: n,
          themeVariables: r,
          w3mThemeVariables: Fo(r, n)
        }), K.setConnectors([
          t
        ]);
      } else K.setConnectors([
        t
      ]);
    },
    getAuthConnector(t) {
      var _a2;
      const e = t || y.state.activeChain, s = Ce.connectors.find((n) => n.id === W.CONNECTOR_ID.AUTH);
      if (s) return ((_a2 = s == null ? void 0 : s.connectors) == null ? void 0 : _a2.length) ? s.connectors.find((r) => r.chain === e) : s;
    },
    getAnnouncedConnectorRdns() {
      return Ce.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
        var _a2;
        return (_a2 = t.info) == null ? void 0 : _a2.rdns;
      });
    },
    getConnectorById(t) {
      return Ce.allConnectors.find((e) => e.id === t);
    },
    getConnector({ id: t, rdns: e, namespace: s }) {
      const n = s || y.state.activeChain;
      return Ce.allConnectors.filter((i) => i.chain === n).find((i) => {
        var _a2;
        return i.explorerId === t || ((_a2 = i.info) == null ? void 0 : _a2.rdns) === e;
      });
    },
    syncIfAuthConnector(t) {
      var _a2, _b3;
      if (t.id !== "AUTH") return;
      const e = t, s = Ui(D.state), n = Lt.getSnapshot().themeMode, r = Lt.getSnapshot().themeVariables;
      (_b3 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b3.call(_a2, {
        metadata: s.metadata,
        sdkVersion: s.sdkVersion,
        sdkType: s.sdkType,
        projectId: s.projectId
      }), e.provider.syncTheme({
        themeMode: n,
        themeVariables: r,
        w3mThemeVariables: Fo(r, n)
      });
    },
    getConnectorsByNamespace(t) {
      const e = Ce.allConnectors.filter((s) => s.chain === t);
      return K.mergeMultiChainConnectors(e);
    },
    canSwitchToSmartAccount(t) {
      return y.checkIfSmartAccountEnabled() && Jt(t) === Vs.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(t) {
      var _a2;
      const e = (_a2 = le.state.data) == null ? void 0 : _a2.redirectView, s = K.getConnector({
        id: t.id,
        rdns: t.rdns
      });
      dw.handleMobileDeeplinkRedirect((s == null ? void 0 : s.explorerId) || t.id, y.state.activeChain), s ? le.push("ConnectingExternal", {
        connector: s,
        wallet: t,
        redirectView: e
      }) : le.push("ConnectingWalletConnect", {
        wallet: t,
        redirectView: e
      });
    },
    getConnectors(t) {
      return t ? K.getConnectorsByNamespace(t) : K.mergeMultiChainConnectors(Ce.allConnectors);
    },
    setFilterByNamespace(t) {
      Ce.filterByNamespace = t, Ce.connectors = K.getConnectors(t), re.setFilterByNamespace(t);
    },
    setConnectorId(t, e) {
      t && (Ce.activeConnectorIds = {
        ...Ce.activeConnectorIds,
        [e]: t
      }, q.setConnectedConnectorId(e, t));
    },
    removeConnectorId(t) {
      Ce.activeConnectorIds = {
        ...Ce.activeConnectorIds,
        [t]: void 0
      }, q.deleteConnectedConnectorId(t);
    },
    getConnectorId(t) {
      if (t) return Ce.activeConnectorIds[t];
    },
    isConnected(t) {
      return t ? !!Ce.activeConnectorIds[t] : Object.values(Ce.activeConnectorIds).some((e) => !!e);
    },
    resetConnectorIds() {
      Ce.activeConnectorIds = {
        ...yf
      };
    }
  };
  K = es(Tw);
  Ow = 1e3;
  ti = {
    checkNamespaceConnectorId(t, e) {
      return K.getConnectorId(t) === e;
    },
    isSocialProvider(t) {
      return be.DEFAULT_REMOTE_FEATURES.socials.includes(t);
    },
    connectWalletConnect({ walletConnect: t, connector: e, closeModalOnConnect: s = true, redirectViewOnModalClose: n = "Connect", onOpen: r, onConnect: i }) {
      return new Promise((o, a) => {
        if (t && K.setActiveConnector(e), r == null ? void 0 : r(se.isMobile() && t), n) {
          const l = ge.subscribeKey("open", (d) => {
            d || (le.state.view !== n && le.replace(n), l(), a(new Error("Modal closed")));
          });
        }
        const c = y.subscribeKey("activeCaipAddress", (l) => {
          l && (i == null ? void 0 : i(), s && ge.close(), c(), o(tt.parseCaipAddress(l)));
        });
      });
    },
    connectExternal(t) {
      return new Promise((e, s) => {
        const n = y.subscribeKey("activeCaipAddress", (r) => {
          r && (ge.close(), n(), e(tt.parseCaipAddress(r)));
        });
        Z.connectExternal(t, t.chain).catch(() => {
          n(), s(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({ social: t, namespace: e, closeModalOnConnect: s = true, onOpenFarcaster: n, onConnect: r }) {
      let i, o = false, a = null;
      const c = e || y.state.activeChain, l = y.subscribeKey("activeCaipAddress", (d) => {
        d && (s && ge.close(), l());
      });
      return new Promise((d, h) => {
        async function u(g) {
          var _a2;
          if ((_a2 = g.data) == null ? void 0 : _a2.resultUri) if (g.origin === W.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", u, false);
            try {
              const p = K.getAuthConnector(c);
              if (p && !o) {
                i && i.close(), o = true;
                const w = g.data.resultUri;
                pe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: {
                    provider: t
                  }
                }), q.setConnectedSocialProvider(t), await Z.connectExternal({
                  id: p.id,
                  type: p.type,
                  socialUri: w
                }, p.chain);
                const T = y.state.activeCaipAddress;
                if (!T) {
                  h(new Error("Failed to connect"));
                  return;
                }
                d(tt.parseCaipAddress(T)), pe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: t
                  }
                });
              }
            } catch (p) {
              pe.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: {
                  provider: t,
                  message: se.parseError(p)
                }
              }), h(new Error("Failed to connect"));
            }
          } else pe.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_ERROR",
            properties: {
              provider: t,
              message: "Untrusted Origin"
            }
          });
        }
        async function f() {
          var _a2;
          if (pe.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: {
              provider: t
            }
          }), t === "farcaster") {
            n == null ? void 0 : n();
            const g = ge.subscribeKey("open", (w) => {
              !w && t === "farcaster" && (h(new Error("Popup closed")), r == null ? void 0 : r(), g());
            }), p = K.getAuthConnector();
            if (p && !((_a2 = y.getAccountData(c)) == null ? void 0 : _a2.farcasterUrl)) try {
              const { url: T } = await p.provider.getFarcasterUri();
              y.setAccountProp("farcasterUrl", T, c);
            } catch {
              h(new Error("Failed to connect to farcaster"));
            }
          } else {
            const g = K.getAuthConnector();
            a = se.returnOpenHref(`${W.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
            try {
              if (g) {
                const { uri: p } = await g.provider.getSocialRedirectUri({
                  provider: t
                });
                if (a && p) {
                  a.location.href = p, i = a;
                  const w = setInterval(() => {
                    (i == null ? void 0 : i.closed) && !o && (h(new Error("Popup closed")), clearInterval(w));
                  }, 1e3);
                  window.addEventListener("message", u, false);
                } else a == null ? void 0 : a.close(), h(new Error("Failed to initiate social connection"));
              }
            } catch {
              h(new Error("Failed to initiate social connection")), a == null ? void 0 : a.close();
            }
          }
        }
        f();
      });
    },
    connectEmail({ closeModalOnConnect: t = true, redirectViewOnModalClose: e = "Connect", onOpen: s, onConnect: n }) {
      return new Promise((r, i) => {
        if (s == null ? void 0 : s(), e) {
          const a = ge.subscribeKey("open", (c) => {
            c || (le.state.view !== e && le.replace(e), a(), i(new Error("Modal closed")));
          });
        }
        const o = y.subscribeKey("activeCaipAddress", (a) => {
          a && (n == null ? void 0 : n(), t && ge.close(), o(), r(tt.parseCaipAddress(a)));
        });
      });
    },
    async updateEmail() {
      const t = q.getConnectedConnectorId(y.state.activeChain), e = K.getAuthConnector();
      if (!e) throw new Error("No auth connector found");
      if (t !== W.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
      const s = e.provider.getEmail() ?? "";
      return await ge.open({
        view: "UpdateEmailWallet",
        data: {
          email: s,
          redirectView: void 0
        }
      }), new Promise((n, r) => {
        const i = setInterval(() => {
          const a = e.provider.getEmail() ?? "";
          a !== s && (ge.close(), clearInterval(i), o(), n({
            email: a
          }));
        }, Ow), o = ge.subscribeKey("open", (a) => {
          a || (le.state.view !== "Connect" && le.push("Connect"), clearInterval(i), o(), r(new Error("Modal closed")));
        });
      });
    },
    canSwitchToSmartAccount(t) {
      return y.checkIfSmartAccountEnabled() && Jt(t) === Vs.ACCOUNT_TYPES.EOA;
    }
  };
  bf = function() {
    var _a2, _b3;
    const t = ((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155", e = ((_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.id) || 1, s = be.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${s}`;
  };
  Jt = function(t) {
    var _a2;
    return (_a2 = y.getAccountData(t)) == null ? void 0 : _a2.preferredAccountType;
  };
  co = function(t) {
    return y.state.activeCaipNetwork;
  };
  const qo = {
    getConnectionStatus(t, e) {
      const s = K.state.activeConnectorIds[e], n = Z.getConnections(e);
      return !!s && t.connectorId === s ? "connected" : n.some((o) => o.connectorId.toLowerCase() === t.connectorId.toLowerCase()) ? "active" : "disconnected";
    },
    excludeConnectorAddressFromConnections({ connections: t, connectorId: e, addresses: s }) {
      return t.map((n) => {
        if ((e ? n.connectorId.toLowerCase() === e.toLowerCase() : false) && s) {
          const i = n.accounts.filter((o) => !s.some((c) => c.toLowerCase() === o.address.toLowerCase()));
          return {
            ...n,
            accounts: i
          };
        }
        return n;
      });
    },
    excludeExistingConnections(t, e) {
      const s = new Set(t);
      return e.filter((n) => !s.has(n.connectorId));
    },
    getConnectionsByConnectorId(t, e) {
      return t.filter((s) => s.connectorId.toLowerCase() === e.toLowerCase());
    },
    getConnectionsData(t) {
      var _a2;
      const e = !!((_a2 = D.state.remoteFeatures) == null ? void 0 : _a2.multiWallet), s = K.state.activeConnectorIds[t], n = Z.getConnections(t), i = (Z.state.recentConnections.get(t) ?? []).filter((a) => K.getConnectorById(a.connectorId)), o = qo.excludeExistingConnections([
        ...n.map((a) => a.connectorId),
        ...s ? [
          s
        ] : []
      ], i);
      return e ? {
        connections: n,
        recentConnections: o
      } : {
        connections: n.filter((a) => a.connectorId.toLowerCase() === (s == null ? void 0 : s.toLowerCase())),
        recentConnections: []
      };
    }
  }, Le = De({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  }), kw = {
    state: Le,
    subscribe(t) {
      return st(Le, () => t(Le));
    },
    setLastNetworkInView(t) {
      Le.lastNetworkInView = t;
    },
    async fetchTransactions(t) {
      var _a2;
      if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
      Le.loading = true;
      try {
        const e = await he.fetchTransactions({
          account: t,
          cursor: Le.next,
          chainId: (_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
        }), s = Po.filterSpamTransactions(e.data), n = Po.filterByConnectedChain(s), r = [
          ...Le.transactions,
          ...n
        ];
        Le.loading = false, Le.transactions = r, Le.transactionsByYear = Po.groupTransactionsByYearAndMonth(Le.transactionsByYear, n), Le.empty = r.length === 0, Le.next = e.next ? e.next : void 0;
      } catch {
        const s = y.state.activeChain;
        pe.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: t,
            projectId: D.state.projectId,
            cursor: Le.next,
            isSmartAccount: Jt(s) === Vs.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), Ns.showError("Failed to fetch transactions"), Le.loading = false, Le.empty = true, Le.next = void 0;
      }
    },
    groupTransactionsByYearAndMonth(t = {}, e = []) {
      const s = t;
      return e.forEach((n) => {
        const r = new Date(n.metadata.minedAt).getFullYear(), i = new Date(n.metadata.minedAt).getMonth(), o = s[r] ?? {}, c = (o[i] ?? []).filter((l) => l.id !== n.id);
        s[r] = {
          ...o,
          [i]: [
            ...c,
            n
          ].sort((l, d) => new Date(d.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
        };
      }), s;
    },
    filterSpamTransactions(t) {
      return t.filter((e) => !e.transfers.every((n) => {
        var _a2;
        return ((_a2 = n.nft_info) == null ? void 0 : _a2.flags.is_spam) === true;
      }));
    },
    filterByConnectedChain(t) {
      var _a2;
      const e = (_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
      return t.filter((n) => n.metadata.chain === e);
    },
    clearCursor() {
      Le.next = void 0;
    },
    resetTransactions() {
      Le.transactions = [], Le.transactionsByYear = {}, Le.lastNetworkInView = void 0, Le.loading = false, Le.empty = false, Le.next = void 0;
    }
  }, Po = es(kw, "API_ERROR"), Ae = De({
    connections: /* @__PURE__ */ new Map(),
    recentConnections: /* @__PURE__ */ new Map(),
    isSwitchingConnection: false,
    wcError: false,
    buffering: false,
    status: "disconnected"
  });
  let Bn;
  let xw, Ra;
  xw = {
    state: Ae,
    subscribe(t) {
      return st(Ae, () => t(Ae));
    },
    subscribeKey(t, e) {
      return nt(Ae, t, e);
    },
    _getClient() {
      return Ae._client;
    },
    setClient(t) {
      Ae._client = Di(t);
    },
    initialize(t) {
      const e = t.filter((s) => !!s.namespace).map((s) => s.namespace);
      Z.syncStorageConnections(e);
    },
    syncStorageConnections(t) {
      const e = q.getConnections(), s = t ?? Array.from(y.state.chains.keys());
      for (const n of s) {
        const r = e[n] ?? [], i = new Map(Ae.recentConnections);
        i.set(n, r), Ae.recentConnections = i;
      }
    },
    getConnections(t) {
      return t ? Ae.connections.get(t) ?? [] : [];
    },
    hasAnyConnection(t) {
      const e = Z.state.connections;
      return Array.from(e.values()).flatMap((s) => s).some(({ connectorId: s }) => s === t);
    },
    async connectWalletConnect({ cache: t = "auto" } = {}) {
      var _a2, _b3, _c2, _d2;
      const e = se.isTelegram() || se.isSafari() && se.isIos();
      if (t === "always" || t === "auto" && e) {
        if (Bn) {
          await Bn, Bn = void 0;
          return;
        }
        if (!se.isPairingExpired(Ae == null ? void 0 : Ae.wcPairingExpiry)) {
          const s = Ae.wcUri;
          Ae.wcUri = s;
          return;
        }
        Bn = (_b3 = (_a2 = Z._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b3.call(_a2).catch(() => {
        }), Z.state.status = "connecting", await Bn, Bn = void 0, Ae.wcPairingExpiry = void 0, Z.state.status = "connected";
      } else await ((_d2 = (_c2 = Z._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d2.call(_c2));
    },
    async connectExternal(t, e, s = true) {
      var _a2, _b3;
      const n = await ((_b3 = (_a2 = Z._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b3.call(_a2, t));
      return s && y.setActiveNamespace(e), n;
    },
    async reconnectExternal(t) {
      var _a2, _b3;
      await ((_b3 = (_a2 = Z._getClient()) == null ? void 0 : _a2.reconnectExternal) == null ? void 0 : _b3.call(_a2, t));
      const e = t.chain || y.state.activeChain;
      e && K.setConnectorId(t.id, e);
    },
    async setPreferredAccountType(t, e) {
      var _a2;
      if (!e) return;
      ge.setLoading(true, y.state.activeChain);
      const s = K.getAuthConnector();
      s && (y.setAccountProp("preferredAccountType", t, e), await s.provider.setPreferredAccount(t), q.setPreferredAccountTypes(Object.entries(y.state.chains).reduce((n, [r, i]) => {
        const o = r, a = Jt(o);
        return a !== void 0 && (n[o] = a), n;
      }, {})), await Z.reconnectExternal(s), ge.setLoading(false, y.state.activeChain), pe.sendEvent({
        type: "track",
        event: "SET_PREFERRED_ACCOUNT_TYPE",
        properties: {
          accountType: t,
          network: ((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || ""
        }
      }));
    },
    async signMessage(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.signMessage(t);
    },
    parseUnits(t, e) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.parseUnits(t, e);
    },
    formatUnits(t, e) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.formatUnits(t, e);
    },
    updateBalance(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.updateBalance(t);
    },
    async sendTransaction(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.sendTransaction(t);
    },
    async getCapabilities(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.getCapabilities(t);
    },
    async grantPermissions(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.grantPermissions(t);
    },
    async walletGetAssets(t) {
      var _a2;
      return ((_a2 = Z._getClient()) == null ? void 0 : _a2.walletGetAssets(t)) ?? {};
    },
    async estimateGas(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.estimateGas(t);
    },
    async writeContract(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.writeContract(t);
    },
    async getEnsAddress(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.getEnsAddress(t);
    },
    async getEnsAvatar(t) {
      var _a2;
      return (_a2 = Z._getClient()) == null ? void 0 : _a2.getEnsAvatar(t);
    },
    checkInstalled(t) {
      var _a2, _b3;
      return ((_b3 = (_a2 = Z._getClient()) == null ? void 0 : _a2.checkInstalled) == null ? void 0 : _b3.call(_a2, t)) || false;
    },
    resetWcConnection() {
      Ae.wcUri = void 0, Ae.wcPairingExpiry = void 0, Ae.wcLinking = void 0, Ae.recentWallet = void 0, Ae.status = "disconnected", Po.resetTransactions(), q.deleteWalletConnectDeepLink(), q.deleteRecentWallet();
    },
    resetUri() {
      Ae.wcUri = void 0, Ae.wcPairingExpiry = void 0, Bn = void 0;
    },
    finalizeWcConnection(t) {
      var _a2, _b3;
      const { wcLinking: e, recentWallet: s } = Z.state;
      e && q.setWalletConnectDeepLink(e), s && q.setAppKitRecent(s), t && pe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: t,
        properties: {
          method: e ? "mobile" : "qrcode",
          name: ((_b3 = (_a2 = le.state.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b3.name) || "Unknown",
          view: le.state.view,
          walletRank: s == null ? void 0 : s.order
        }
      });
    },
    setWcBasic(t) {
      Ae.wcBasic = t;
    },
    setUri(t) {
      Ae.wcUri = t, Ae.wcPairingExpiry = se.getPairingExpiry();
    },
    setWcLinking(t) {
      Ae.wcLinking = t;
    },
    setWcError(t) {
      Ae.wcError = t, Ae.buffering = false;
    },
    setRecentWallet(t) {
      Ae.recentWallet = t;
    },
    setBuffering(t) {
      Ae.buffering = t;
    },
    setStatus(t) {
      Ae.status = t;
    },
    setIsSwitchingConnection(t) {
      Ae.isSwitchingConnection = t;
    },
    async disconnect({ id: t, namespace: e, initialDisconnect: s } = {}) {
      var _a2;
      try {
        await ((_a2 = Z._getClient()) == null ? void 0 : _a2.disconnect({
          id: t,
          chainNamespace: e,
          initialDisconnect: s
        }));
      } catch (n) {
        throw new ar("Failed to disconnect", "INTERNAL_SDK_ERROR", n);
      }
    },
    async disconnectConnector({ id: t, namespace: e }) {
      var _a2;
      try {
        await ((_a2 = Z._getClient()) == null ? void 0 : _a2.disconnectConnector({
          id: t,
          namespace: e
        }));
      } catch (s) {
        throw new ar("Failed to disconnect connector", "INTERNAL_SDK_ERROR", s);
      }
    },
    setConnections(t, e) {
      const s = new Map(Ae.connections);
      s.set(e, t), Ae.connections = s;
    },
    async handleAuthAccountSwitch({ address: t, namespace: e }) {
      var _a2, _b3, _c2;
      const n = (_c2 = (_b3 = (_a2 = y.getAccountData(e)) == null ? void 0 : _a2.user) == null ? void 0 : _b3.accounts) == null ? void 0 : _c2.find((i) => i.type === "smartAccount"), r = n && n.address.toLowerCase() === t.toLowerCase() && ti.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
      await Z.setPreferredAccountType(r, e);
    },
    async handleActiveConnection({ connection: t, namespace: e, address: s }) {
      var _a2;
      const n = K.getConnectorById(t.connectorId), r = t.connectorId === W.CONNECTOR_ID.AUTH;
      if (!n) throw new Error(`No connector found for connection: ${t.connectorId}`);
      if (r) s && await Z.handleAuthAccountSwitch({
        address: s,
        namespace: e
      });
      else return (_a2 = await Z.connectExternal({
        id: n.id,
        type: n.type,
        provider: n.provider,
        address: s,
        chain: e
      }, e)) == null ? void 0 : _a2.address;
      return s;
    },
    async handleDisconnectedConnection({ connection: t, namespace: e, address: s, closeModalOnConnect: n }) {
      var _a2, _b3;
      const r = K.getConnectorById(t.connectorId), i = (_b3 = (_a2 = t.auth) == null ? void 0 : _a2.name) == null ? void 0 : _b3.toLowerCase(), o = t.connectorId === W.CONNECTOR_ID.AUTH, a = t.connectorId === W.CONNECTOR_ID.WALLET_CONNECT;
      if (!r) throw new Error(`No connector found for connection: ${t.connectorId}`);
      let c;
      if (o) if (i && ti.isSocialProvider(i)) {
        const { address: l } = await ti.connectSocial({
          social: i,
          closeModalOnConnect: n,
          onOpenFarcaster() {
            ge.open({
              view: "ConnectingFarcaster"
            });
          },
          onConnect() {
            le.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const { address: l } = await ti.connectEmail({
          closeModalOnConnect: n,
          onOpen() {
            ge.open({
              view: "EmailLogin"
            });
          },
          onConnect() {
            le.replace("ProfileWallets");
          }
        });
        c = l;
      }
      else if (a) {
        const { address: l } = await ti.connectWalletConnect({
          walletConnect: true,
          connector: r,
          closeModalOnConnect: n,
          onOpen(d) {
            const h = d ? "AllWallets" : "ConnectingWalletConnect";
            ge.state.open ? le.push(h) : ge.open({
              view: h
            });
          },
          onConnect() {
            le.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const l = await Z.connectExternal({
          id: r.id,
          type: r.type,
          provider: r.provider,
          chain: e
        }, e);
        l && (c = l.address);
      }
      return o && s && await Z.handleAuthAccountSwitch({
        address: s,
        namespace: e
      }), c;
    },
    async switchConnection({ connection: t, address: e, namespace: s, closeModalOnConnect: n, onChange: r }) {
      var _a2;
      let i;
      const o = (_a2 = y.getAccountData(s)) == null ? void 0 : _a2.caipAddress;
      if (o) {
        const { address: c } = tt.parseCaipAddress(o);
        i = c;
      }
      const a = qo.getConnectionStatus(t, s);
      switch (a) {
        case "connected":
        case "active": {
          const c = await Z.handleActiveConnection({
            connection: t,
            namespace: s,
            address: e
          });
          if (i && c) {
            const l = c.toLowerCase() !== i.toLowerCase();
            r == null ? void 0 : r({
              address: c,
              namespace: s,
              hasSwitchedAccount: l,
              hasSwitchedWallet: a === "active"
            });
          }
          break;
        }
        case "disconnected": {
          const c = await Z.handleDisconnectedConnection({
            connection: t,
            namespace: s,
            address: e,
            closeModalOnConnect: n
          });
          c && (r == null ? void 0 : r({
            address: c,
            namespace: s,
            hasSwitchedAccount: true,
            hasSwitchedWallet: true
          }));
          break;
        }
        default:
          throw new Error(`Invalid connection status: ${a}`);
      }
    }
  };
  Z = es(xw);
  Ra = {
    createBalance(t, e) {
      const s = {
        name: t.metadata.name || "",
        symbol: t.metadata.symbol || "",
        decimals: t.metadata.decimals || 0,
        value: t.metadata.value || 0,
        price: t.metadata.price || 0,
        iconUrl: t.metadata.iconUrl || ""
      };
      return {
        name: s.name,
        symbol: s.symbol,
        chainId: e,
        address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
        value: s.value,
        price: s.price,
        quantity: {
          decimals: s.decimals.toString(),
          numeric: this.convertHexToBalance({
            hex: t.balance,
            decimals: s.decimals
          })
        },
        iconUrl: s.iconUrl
      };
    },
    convertHexToBalance({ hex: t, decimals: e }) {
      return rf(BigInt(t), e);
    },
    convertAddressToCAIP10Address(t, e) {
      return `${e}:${t}`;
    },
    createCAIP2ChainId(t, e) {
      return `${e}:${parseInt(t, 16)}`;
    },
    getChainIdHexFromCAIP2ChainId(t) {
      const e = t.split(":");
      if (e.length < 2 || !e[1]) return "0x0";
      const s = e[1], n = parseInt(s, 10);
      return isNaN(n) ? "0x0" : `0x${n.toString(16)}`;
    },
    isWalletGetAssetsResponse(t) {
      return typeof t != "object" || t === null ? false : Object.values(t).every((e) => Array.isArray(e) && e.every((s) => this.isValidAsset(s)));
    },
    isValidAsset(t) {
      return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string";
    }
  };
  let Ua;
  async function Ad() {
    if (!Ua) {
      const { createPublicClient: t, http: e, defineChain: s } = await Mo(async () => {
        const { createPublicClient: n, http: r, defineChain: i } = await import("./index-CrBOfWm2.js");
        return {
          createPublicClient: n,
          http: r,
          defineChain: i
        };
      }, __vite__mapDeps([0,1,2,3]));
      Ua = {
        createPublicClient: t,
        http: e,
        defineChain: s
      };
    }
    return Ua;
  }
  let kc, Da, Ef, Wo, It, Be, yr, Ks, ye, $w, fe, La, lo, J, vf, Rw, Nt, Uw, Ni, xc, Dw, Ee, Lw, Pc;
  kc = {
    getBlockchainApiRpcUrl(t, e) {
      const s = new URL("https://rpc.walletconnect.org/v1/");
      return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
    },
    async getViemChain(t) {
      const { defineChain: e } = await Ad(), { chainId: s } = tt.parseCaipNetworkId(t.caipNetworkId);
      return e({
        ...t,
        id: Number(s)
      });
    },
    async createViemPublicClient(t) {
      const { createPublicClient: e, http: s } = await Ad(), n = D.state.projectId, r = await kc.getViemChain(t);
      if (!r) throw new Error(`Chain ${t.caipNetworkId} not found in viem/chains`);
      return e({
        chain: r,
        transport: s(kc.getBlockchainApiRpcUrl(t.caipNetworkId, n))
      });
    }
  };
  Tl = {
    async getMyTokensWithBalance(t) {
      var _a2;
      const e = (_a2 = y.getAccountData()) == null ? void 0 : _a2.address, s = y.state.activeCaipNetwork, n = K.getConnectorId("eip155") === W.CONNECTOR_ID.AUTH;
      if (!e || !s) return [];
      const r = `${s.caipNetworkId}:${e}`, i = q.getBalanceCacheForCaipAddress(r);
      if (i) return i.balances;
      if (s.chainNamespace === W.CHAIN.EVM && n) {
        const a = await this.getEIP155Balances(e, s);
        if (a) return this.filterLowQualityTokens(a);
      }
      const o = await he.getBalance(e, s.caipNetworkId, t);
      return this.filterLowQualityTokens(o.balances);
    },
    async getEIP155Balances(t, e) {
      var _a2, _b3, _c2;
      try {
        const s = Ra.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
        if (!((_c2 = (_b3 = (_a2 = await Z.getCapabilities(t)) == null ? void 0 : _a2[s]) == null ? void 0 : _b3.assetDiscovery) == null ? void 0 : _c2.supported)) return null;
        const r = await Z.walletGetAssets({
          account: t,
          chainFilter: [
            s
          ]
        });
        if (!Ra.isWalletGetAssetsResponse(r)) return null;
        const o = (r[s] || []).map((a) => Ra.createBalance(a, e.caipNetworkId));
        return q.updateBalanceCache({
          caipAddress: `${e.caipNetworkId}:${t}`,
          balance: {
            balances: o
          },
          timestamp: Date.now()
        }), o;
      } catch {
        return null;
      }
    },
    filterLowQualityTokens(t) {
      return t.filter((e) => e.quantity.decimals !== "0");
    },
    async fetchERC20Balance({ caipAddress: t, assetAddress: e, caipNetwork: s }) {
      const n = await kc.createViemPublicClient(s), { address: r } = tt.parseCaipAddress(t), [{ result: i }, { result: o }, { result: a }, { result: c }] = await n.multicall({
        contracts: [
          {
            address: e,
            functionName: "name",
            args: [],
            abi: io
          },
          {
            address: e,
            functionName: "symbol",
            args: [],
            abi: io
          },
          {
            address: e,
            functionName: "balanceOf",
            args: [
              r
            ],
            abi: io
          },
          {
            address: e,
            functionName: "decimals",
            args: [],
            abi: io
          }
        ]
      });
      return {
        name: i,
        symbol: o,
        decimals: c,
        balance: a && c ? rf(a, c) : "0"
      };
    }
  };
  Da = {
    adapters: {}
  };
  Ef = {
    state: Da,
    initialize(t) {
      Da.adapters = {
        ...t
      };
    },
    get(t) {
      return Da.adapters[t];
    }
  };
  Wo = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0,
    sui: void 0,
    stacks: void 0
  };
  It = De({
    providers: {
      ...Wo
    },
    providerIds: {
      ...Wo
    }
  });
  Be = {
    state: It,
    subscribeKey(t, e) {
      return nt(It, t, e);
    },
    subscribe(t) {
      return st(It, () => {
        t(It);
      });
    },
    subscribeProviders(t) {
      return st(It.providers, () => t(It.providers));
    },
    setProvider(t, e) {
      t && e && (It.providers[t] = Di(e));
    },
    getProvider(t) {
      if (t) return It.providers[t];
    },
    setProviderId(t, e) {
      e && (It.providerIds[t] = e);
    },
    getProviderId(t) {
      if (t) return It.providerIds[t];
    },
    reset() {
      It.providers = {
        ...Wo
      }, It.providerIds = {
        ...Wo
      };
    },
    resetChain(t) {
      It.providers[t] = void 0, It.providerIds[t] = void 0;
    }
  };
  yr = De({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false
  });
  Ks = {
    state: yr,
    subscribe(t) {
      return st(yr, () => t(yr));
    },
    subscribeOpen(t) {
      return nt(yr, "open", t);
    },
    set(t) {
      Object.assign(yr, {
        ...yr,
        ...t
      });
    }
  };
  Pw = {
    async getTokenList(t) {
      var _a2, _b3;
      return ((_b3 = (_a2 = await he.fetchSwapTokens({
        chainId: t
      })) == null ? void 0 : _a2.tokens) == null ? void 0 : _b3.map((n) => ({
        ...n,
        eip2612: false,
        quantity: {
          decimals: "0",
          numeric: "0"
        },
        price: 0,
        value: 0
      }))) || [];
    },
    async fetchGasPrice() {
      var _a2;
      const t = y.state.activeCaipNetwork;
      if (!t) return null;
      try {
        switch (t.chainNamespace) {
          case "solana":
            const e = (_a2 = await (Z == null ? void 0 : Z.estimateGas({
              chainNamespace: "solana"
            }))) == null ? void 0 : _a2.toString();
            return {
              standard: e,
              fast: e,
              instant: e
            };
          case "eip155":
          default:
            return await he.fetchGasPrice({
              chainId: t.caipNetworkId
            });
        }
      } catch {
        return null;
      }
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e, sourceTokenAmount: s, sourceTokenDecimals: n }) {
      const r = await he.fetchSwapAllowance({
        tokenAddress: t,
        userAddress: e
      });
      if ((r == null ? void 0 : r.allowance) && s && n) {
        const i = Z.parseUnits(s, n) || 0;
        return BigInt(r.allowance) >= i;
      }
      return false;
    },
    async getMyTokensWithBalance(t) {
      const e = await Tl.getMyTokensWithBalance(t);
      return y.setAccountProp("tokenBalance", e, y.state.activeChain), this.mapBalancesToSwapTokens(e);
    },
    mapBalancesToSwapTokens(t) {
      return (t == null ? void 0 : t.map((e) => ({
        ...e,
        address: (e == null ? void 0 : e.address) ? e.address : bf(),
        decimals: parseInt(e.quantity.decimals, 10),
        logoUri: e.iconUrl,
        eip2612: false
      }))) || [];
    },
    async handleSwapError(t) {
      var _a2, _b3, _c2, _d2;
      try {
        const e = t == null ? void 0 : t.cause;
        return (e == null ? void 0 : e.json) && ((_d2 = (_c2 = (_b3 = (_a2 = await e.json()) == null ? void 0 : _a2.reasons) == null ? void 0 : _b3[0]) == null ? void 0 : _c2.description) == null ? void 0 : _d2.includes("insufficient liquidity")) ? "Insufficient liquidity" : void 0;
      } catch {
        return;
      }
    }
  };
  ye = De({
    tokenBalances: [],
    loading: false
  });
  $w = {
    state: ye,
    subscribe(t) {
      return st(ye, () => t(ye));
    },
    subscribeKey(t, e) {
      return nt(ye, t, e);
    },
    setToken(t) {
      t && (ye.token = Di(t));
    },
    setTokenAmount(t) {
      ye.sendTokenAmount = t;
    },
    setReceiverAddress(t) {
      ye.receiverAddress = t;
    },
    setReceiverProfileImageUrl(t) {
      ye.receiverProfileImageUrl = t;
    },
    setReceiverProfileName(t) {
      ye.receiverProfileName = t;
    },
    setNetworkBalanceInUsd(t) {
      ye.networkBalanceInUSD = t;
    },
    setLoading(t) {
      ye.loading = t;
    },
    getSdkEventProperties(t) {
      var _a2, _b3;
      return {
        message: se.parseError(t),
        isSmartAccount: Jt(y.state.activeChain) === Vs.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_a2 = ye.token) == null ? void 0 : _a2.symbol) || "",
        amount: ye.sendTokenAmount ?? 0,
        network: ((_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.caipNetworkId) || ""
      };
    },
    async sendToken() {
      var _a2;
      try {
        switch (fe.setLoading(true), (_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
          case "eip155":
            await fe.sendEvmToken();
            return;
          case "solana":
            await fe.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } catch (t) {
        throw Hs.isUserRejectedRequestError(t) ? new ff(t) : t;
      } finally {
        fe.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a2, _b3, _c2;
      const t = y.state.activeChain;
      if (!t) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
      const e = Jt(t);
      if (!fe.state.sendTokenAmount || !fe.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!fe.state.token) throw new Error("A token is required");
      if ((_a2 = fe.state.token) == null ? void 0 : _a2.address) {
        pe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === Vs.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: fe.state.token.address,
            amount: fe.state.sendTokenAmount,
            network: ((_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.caipNetworkId) || ""
          }
        });
        const { hash: s } = await fe.sendERC20Token({
          receiverAddress: fe.state.receiverAddress,
          tokenAddress: fe.state.token.address,
          sendTokenAmount: fe.state.sendTokenAmount,
          decimals: fe.state.token.quantity.decimals
        });
        s && (ye.hash = s);
      } else {
        pe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === Vs.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: fe.state.token.symbol || "",
            amount: fe.state.sendTokenAmount,
            network: ((_c2 = y.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await fe.sendNativeToken({
          receiverAddress: fe.state.receiverAddress,
          sendTokenAmount: fe.state.sendTokenAmount,
          decimals: fe.state.token.quantity.decimals
        });
        s && (ye.hash = s);
      }
    },
    async fetchTokenBalance(t) {
      var _a2, _b3, _c2;
      ye.loading = true;
      const e = y.state.activeChain, s = (_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.chainNamespace, r = ((_c2 = y.getAccountData(e)) == null ? void 0 : _c2.caipAddress) ?? y.state.activeCaipAddress, i = r ? se.getPlainAddress(r) : void 0;
      if (ye.lastRetry && !se.isAllowedRetry(ye.lastRetry, 30 * be.ONE_SEC_MS)) return ye.loading = false, [];
      try {
        if (i && s && n) {
          const o = await Tl.getMyTokensWithBalance();
          return ye.tokenBalances = o, ye.lastRetry = void 0, o;
        }
      } catch (o) {
        ye.lastRetry = Date.now(), t == null ? void 0 : t(o), Ns.showError("Token Balance Unavailable");
      } finally {
        ye.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (ye.tokenBalances.length === 0) return;
      const t = Pw.mapBalancesToSwapTokens(ye.tokenBalances);
      if (!t) return;
      const e = t.find((s) => s.address === bf());
      e && (ye.networkBalanceInUSD = e ? jm.multiply(e.quantity.numeric, e.price).toString() : "0");
    },
    async sendNativeToken(t) {
      var _a2, _b3, _c2, _d2;
      le.pushTransactionStack({});
      const e = t.receiverAddress, s = (_a2 = y.getAccountData()) == null ? void 0 : _a2.address, n = Z.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), i = await Z.sendTransaction({
        chainNamespace: W.CHAIN.EVM,
        to: e,
        address: s,
        data: "0x",
        value: n ?? BigInt(0)
      });
      return pe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: Jt("eip155") === Vs.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b3 = fe.state.token) == null ? void 0 : _b3.symbol) || "",
          amount: t.sendTokenAmount,
          network: ((_c2 = y.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: i || ""
        }
      }), (_d2 = Z._getClient()) == null ? void 0 : _d2.updateBalance("eip155"), fe.resetSend(), {
        hash: i
      };
    },
    async sendERC20Token(t) {
      var _a2, _b3, _c2;
      le.pushTransactionStack({
        onSuccess() {
          le.replace("Account");
        }
      });
      const e = Z.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), s = (_a2 = y.getAccountData()) == null ? void 0 : _a2.address;
      if (s && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
        const n = se.getPlainAddress(t.tokenAddress);
        if (!n) throw new Error("SendController:sendERC20Token - tokenAddress is required");
        const r = await Z.writeContract({
          fromAddress: s,
          tokenAddress: n,
          args: [
            t.receiverAddress,
            e ?? BigInt(0)
          ],
          method: "transfer",
          abi: Vm.getERC20Abi(n),
          chainNamespace: W.CHAIN.EVM
        });
        return pe.sendEvent({
          type: "track",
          event: "SEND_SUCCESS",
          properties: {
            isSmartAccount: Jt("eip155") === Vs.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((_b3 = fe.state.token) == null ? void 0 : _b3.symbol) || "",
            amount: t.sendTokenAmount,
            network: ((_c2 = y.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
            hash: r || ""
          }
        }), fe.resetSend(), {
          hash: r
        };
      }
      return {
        hash: void 0
      };
    },
    async sendSolanaToken() {
      var _a2, _b3, _c2;
      if (!fe.state.sendTokenAmount || !fe.state.receiverAddress) throw new Error("An amount and receiver address are required");
      le.pushTransactionStack({
        onSuccess() {
          le.replace("Account");
        }
      });
      let t;
      fe.state.token && fe.state.token.address !== be.SOLANA_NATIVE_TOKEN_ADDRESS && (se.isCaipAddress(fe.state.token.address) ? t = se.getPlainAddress(fe.state.token.address) : t = fe.state.token.address);
      const e = await Z.sendTransaction({
        chainNamespace: "solana",
        tokenMint: t,
        to: fe.state.receiverAddress,
        value: fe.state.sendTokenAmount
      });
      e && (ye.hash = e), (_a2 = Z._getClient()) == null ? void 0 : _a2.updateBalance("solana"), pe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: false,
          token: ((_b3 = fe.state.token) == null ? void 0 : _b3.symbol) || "",
          amount: fe.state.sendTokenAmount,
          network: ((_c2 = y.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: e || ""
        }
      }), fe.resetSend();
    },
    resetSend() {
      ye.token = void 0, ye.sendTokenAmount = void 0, ye.receiverAddress = void 0, ye.receiverProfileImageUrl = void 0, ye.receiverProfileName = void 0, ye.loading = false, ye.tokenBalances = [];
    }
  };
  fe = es($w);
  La = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    user: void 0,
    preferredAccountType: void 0
  };
  lo = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  J = De({
    chains: iw(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  vf = {
    state: J,
    subscribe(t) {
      return st(J, () => {
        t(J);
      });
    },
    subscribeKey(t, e) {
      return nt(J, t, e);
    },
    subscribeAccountStateProp(t, e, s) {
      var _a2;
      const n = s || J.activeChain;
      return n ? nt(((_a2 = J.chains.get(n)) == null ? void 0 : _a2.accountState) || {}, t, e) : () => {
      };
    },
    subscribeChainProp(t, e, s) {
      let n;
      return st(J.chains, () => {
        var _a2;
        const r = s || J.activeChain;
        if (r) {
          const i = (_a2 = J.chains.get(r)) == null ? void 0 : _a2[t];
          n !== i && (n = i, e(i));
        }
      });
    },
    initialize(t, e, s) {
      const { chainId: n, namespace: r } = q.getActiveNetworkProps(), i = e == null ? void 0 : e.find((d) => d.id.toString() === (n == null ? void 0 : n.toString())), a = t.find((d) => (d == null ? void 0 : d.namespace) === r) || (t == null ? void 0 : t[0]), c = t.map((d) => d.namespace).filter((d) => d !== void 0), l = D.state.enableEmbedded ? /* @__PURE__ */ new Set([
        ...c
      ]) : /* @__PURE__ */ new Set([
        ...(e == null ? void 0 : e.map((d) => d.chainNamespace)) ?? []
      ]);
      ((t == null ? void 0 : t.length) === 0 || !a) && (J.noAdapters = true), J.noAdapters || (J.activeChain = a == null ? void 0 : a.namespace, J.activeCaipNetwork = i, y.setChainNetworkData(a == null ? void 0 : a.namespace, {
        caipNetwork: i
      }), J.activeChain && Ks.set({
        activeChain: a == null ? void 0 : a.namespace
      })), l.forEach((d) => {
        const h = e == null ? void 0 : e.filter((g) => g.chainNamespace === d), u = q.getPreferredAccountTypes() || {}, f = {
          ...D.state.defaultAccountTypes,
          ...u
        };
        y.state.chains.set(d, {
          namespace: d,
          networkState: De({
            ...lo,
            caipNetwork: h == null ? void 0 : h[0]
          }),
          accountState: De({
            ...La,
            preferredAccountType: f[d]
          }),
          caipNetworks: h ?? [],
          ...s
        }), y.setRequestedCaipNetworks(h ?? [], d);
      });
    },
    removeAdapter(t) {
      var _a2, _b3;
      if (J.activeChain === t) {
        const e = Array.from(J.chains.entries()).find(([s]) => s !== t);
        if (e) {
          const s = (_b3 = (_a2 = e[1]) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b3[0];
          s && y.setActiveCaipNetwork(s);
        }
      }
      J.chains.delete(t);
    },
    addAdapter(t, { connectionControllerClient: e }, s) {
      if (!t.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
      J.chains.set(t.namespace, {
        namespace: t.namespace,
        networkState: {
          ...lo,
          caipNetwork: s[0]
        },
        accountState: {
          ...La
        },
        caipNetworks: s,
        connectionControllerClient: e
      }), y.setRequestedCaipNetworks((s == null ? void 0 : s.filter((n) => n.chainNamespace === t.namespace)) ?? [], t.namespace);
    },
    addNetwork(t) {
      var _a2;
      const e = J.chains.get(t.chainNamespace);
      if (e) {
        const s = [
          ...e.caipNetworks || []
        ];
        ((_a2 = e.caipNetworks) == null ? void 0 : _a2.find((n) => n.id === t.id)) || s.push(t), J.chains.set(t.chainNamespace, {
          ...e,
          caipNetworks: s
        }), y.setRequestedCaipNetworks(s, t.chainNamespace), K.filterByNamespace(t.chainNamespace, true);
      }
    },
    removeNetwork(t, e) {
      var _a2, _b3, _c2;
      const s = J.chains.get(t);
      if (s) {
        const n = ((_a2 = J.activeCaipNetwork) == null ? void 0 : _a2.id) === e, r = [
          ...((_b3 = s.caipNetworks) == null ? void 0 : _b3.filter((i) => i.id !== e)) || []
        ];
        n && ((_c2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _c2[0]) && y.setActiveCaipNetwork(s.caipNetworks[0]), J.chains.set(t, {
          ...s,
          caipNetworks: r
        }), y.setRequestedCaipNetworks(r || [], t), r.length === 0 && K.filterByNamespace(t, false);
      }
    },
    setAdapterNetworkState(t, e) {
      const s = J.chains.get(t);
      s && (s.networkState = {
        ...s.networkState || lo,
        ...e
      }, J.chains.set(t, s));
    },
    setChainAccountData(t, e, s = true) {
      if (!t) throw new Error("Chain is required to update chain account data");
      const n = J.chains.get(t);
      if (n) {
        const r = {
          ...n.accountState || La,
          ...e
        };
        J.chains.set(t, {
          ...n,
          accountState: r
        }), (J.chains.size === 1 || J.activeChain === t) && e.caipAddress && (J.activeCaipAddress = e.caipAddress);
      }
    },
    setChainNetworkData(t, e) {
      if (!t) return;
      const s = J.chains.get(t);
      if (s) {
        const n = {
          ...s.networkState || lo,
          ...e
        };
        J.chains.set(t, {
          ...s,
          networkState: n
        });
      }
    },
    setAccountProp(t, e, s, n = true) {
      y.setChainAccountData(s, {
        [t]: e
      }, n);
    },
    setActiveNamespace(t) {
      var _a2, _b3;
      J.activeChain = t;
      const e = t ? J.chains.get(t) : void 0, s = (_a2 = e == null ? void 0 : e.networkState) == null ? void 0 : _a2.caipNetwork;
      (s == null ? void 0 : s.id) && t && (J.activeCaipAddress = (_b3 = e == null ? void 0 : e.accountState) == null ? void 0 : _b3.caipAddress, J.activeCaipNetwork = s, y.setChainNetworkData(t, {
        caipNetwork: s
      }), q.setActiveCaipNetworkId(s == null ? void 0 : s.caipNetworkId), Ks.set({
        activeChain: t,
        selectedNetworkId: s == null ? void 0 : s.caipNetworkId
      }));
    },
    setActiveCaipNetwork(t) {
      var _a2, _b3;
      if (!t) return;
      const e = J.activeChain === t.chainNamespace;
      e || y.setIsSwitchingNamespace(true);
      const s = J.chains.get(t.chainNamespace);
      J.activeChain = t.chainNamespace, J.activeCaipNetwork = t, y.setChainNetworkData(t.chainNamespace, {
        caipNetwork: t
      });
      let n = (_a2 = s == null ? void 0 : s.accountState) == null ? void 0 : _a2.address;
      if (n) J.activeCaipAddress = `${t.chainNamespace}:${t.id}:${n}`;
      else if (e && J.activeCaipAddress) {
        const { address: i } = tt.parseCaipAddress(J.activeCaipAddress);
        n = i, J.activeCaipAddress = `${t.caipNetworkId}:${n}`;
      } else J.activeCaipAddress = void 0;
      y.setChainAccountData(t.chainNamespace, {
        address: n,
        caipAddress: J.activeCaipAddress
      }), fe.resetSend(), Ks.set({
        activeChain: J.activeChain,
        selectedNetworkId: (_b3 = J.activeCaipNetwork) == null ? void 0 : _b3.caipNetworkId
      }), q.setActiveCaipNetworkId(t.caipNetworkId), !y.checkIfSupportedNetwork(t.chainNamespace) && D.state.enableNetworkSwitch && !D.state.allowUnsupportedChain && !Z.state.wcBasic && y.showUnsupportedChainUI();
    },
    addCaipNetwork(t) {
      var _a2;
      if (!t) return;
      const e = J.chains.get(t.chainNamespace);
      e && ((_a2 = e == null ? void 0 : e.caipNetworks) == null ? void 0 : _a2.push(t));
    },
    async switchActiveNamespace(t) {
      var _a2;
      if (!t) return;
      const e = t !== y.state.activeChain, s = (_a2 = y.getNetworkData(t)) == null ? void 0 : _a2.caipNetwork, n = y.getCaipNetworkByNamespace(t, s == null ? void 0 : s.id);
      e && n && await y.switchActiveNetwork(n);
    },
    async switchActiveNetwork(t, { throwOnFailure: e = false } = {}) {
      var _a2;
      const s = y.state.activeChain;
      if (!s) throw new Error("ChainController:switchActiveNetwork - namespace is required");
      const n = Be.getProviderId(J.activeChain) === "AUTH", r = (_a2 = y.getAccountData(s)) == null ? void 0 : _a2.address, i = W.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t.chainNamespace);
      try {
        if (r && t.chainNamespace === s || n && i) {
          const o = Ef.get(t.chainNamespace);
          if (!o) throw new Error("Adapter not found");
          await o.switchNetwork({
            caipNetwork: t
          });
        }
        y.setActiveCaipNetwork(t);
      } catch (o) {
        if (e) throw o;
      }
      pe.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: {
          network: t.caipNetworkId
        }
      });
    },
    getConnectionControllerClient(t) {
      const e = t || J.activeChain;
      if (!e) throw new Error("Chain is required to get connection controller client");
      const s = J.chains.get(e);
      if (!(s == null ? void 0 : s.connectionControllerClient)) throw new Error("ConnectionController client not set");
      return s.connectionControllerClient;
    },
    getNetworkProp(t, e) {
      var _a2;
      const s = (_a2 = J.chains.get(e)) == null ? void 0 : _a2.networkState;
      if (s) return s[t];
    },
    getRequestedCaipNetworks(t) {
      const e = J.chains.get(t), { approvedCaipNetworkIds: s = [], requestedCaipNetworks: n = [] } = (e == null ? void 0 : e.networkState) || {};
      return se.sortRequestedNetworks(s, n).filter((o) => o == null ? void 0 : o.id);
    },
    getAllRequestedCaipNetworks() {
      const t = [];
      return J.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
        const s = y.getRequestedCaipNetworks(e.namespace);
        t.push(...s);
      }), t;
    },
    setRequestedCaipNetworks(t, e) {
      y.setAdapterNetworkState(e, {
        requestedCaipNetworks: t
      });
      const n = y.getAllRequestedCaipNetworks().map((i) => i.chainNamespace), r = Array.from(new Set(n));
      K.filterByNamespaces(r);
    },
    getAllApprovedCaipNetworkIds() {
      const t = [];
      return J.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
        const s = y.getApprovedCaipNetworkIds(e.namespace);
        t.push(...s);
      }), t;
    },
    getActiveCaipNetwork(t) {
      var _a2, _b3;
      return t ? (_b3 = (_a2 = J.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b3.caipNetwork : J.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return J.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(t) {
      var _a2, _b3;
      return ((_b3 = (_a2 = J.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b3.approvedCaipNetworkIds) || [];
    },
    setApprovedCaipNetworksData(t, e) {
      y.setAdapterNetworkState(t, e);
    },
    checkIfSupportedNetwork(t, e) {
      var _a2;
      const s = e || ((_a2 = J.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId), n = y.getRequestedCaipNetworks(t);
      return n.length ? n == null ? void 0 : n.some((r) => r.caipNetworkId === s) : true;
    },
    checkIfSupportedChainId(t) {
      var _a2;
      return J.activeChain ? (_a2 = y.getRequestedCaipNetworks(J.activeChain)) == null ? void 0 : _a2.some((s) => s.id === t) : true;
    },
    checkIfSmartAccountEnabled() {
      var _a2, _b3, _c2;
      const t = lf.caipNetworkIdToNumber((_a2 = J.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
      return !J.activeChain || !t ? false : !!((_c2 = ((_b3 = aw.get(xo.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b3.split(",")) || []) == null ? void 0 : _c2.includes(t.toString()));
    },
    showUnsupportedChainUI() {
      ge.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const t = J.activeCaipNetwork;
      return !!((t == null ? void 0 : t.chainNamespace) && be.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
    },
    resetNetwork(t) {
      y.setAdapterNetworkState(t, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: true
      });
    },
    resetAccount(t) {
      var _a2, _b3;
      const e = t;
      if (!e) throw new Error("Chain is required to set account prop");
      const s = (_b3 = (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b3.preferredAccountType, n = D.state.defaultAccountTypes[e];
      J.activeCaipAddress = void 0, y.setChainAccountData(e, {
        smartAccountDeployed: false,
        currentTab: 0,
        caipAddress: void 0,
        address: void 0,
        balance: void 0,
        balanceSymbol: void 0,
        profileName: void 0,
        profileImage: void 0,
        addressExplorerUrl: void 0,
        tokenBalance: [],
        connectedWalletInfo: void 0,
        preferredAccountType: n || s,
        socialProvider: void 0,
        socialWindow: void 0,
        farcasterUrl: void 0,
        user: void 0,
        status: "disconnected"
      }), K.removeConnectorId(e);
    },
    setIsSwitchingNamespace(t) {
      J.isSwitchingNamespace = t;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var _a2, _b3;
      const t = [];
      let e;
      if (J.chains.forEach((s) => {
        W.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((n) => n === s.namespace) && s.namespace && t.push(s.namespace);
      }), t.length > 0) {
        const s = t[0];
        return e = s ? (_b3 = (_a2 = J.chains.get(s)) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b3[0] : void 0, e;
      }
    },
    getAccountData(t) {
      var _a2;
      const e = t || J.activeChain;
      if (e) return (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.accountState;
    },
    getNetworkData(t) {
      var _a2;
      const e = t || J.activeChain;
      if (e) return (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.networkState;
    },
    getCaipNetworkByNamespace(t, e) {
      var _a2, _b3, _c2;
      if (!t) return;
      const s = y.state.chains.get(t), n = (_a2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _a2.find((r) => r.id.toString() === (e == null ? void 0 : e.toString()));
      return n || ((_b3 = s == null ? void 0 : s.networkState) == null ? void 0 : _b3.caipNetwork) || ((_c2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _c2[0]);
    },
    getRequestedCaipNetworkIds() {
      const t = K.state.filterByNamespace;
      return (t ? [
        J.chains.get(t)
      ] : Array.from(J.chains.values())).flatMap((s) => (s == null ? void 0 : s.caipNetworks) || []).map((s) => s.caipNetworkId);
    },
    getCaipNetworks(t) {
      return t ? y.getRequestedCaipNetworks(t) : y.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(t, e) {
      return vf.getCaipNetworks(e).find((s) => s.id.toString() === t.toString() || s.caipNetworkId.toString() === t.toString());
    },
    setLastConnectedSIWECaipNetwork(t) {
      J.lastConnectedSIWECaipNetwork = t;
    },
    getLastConnectedSIWECaipNetwork() {
      return J.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(t) {
      var _a2, _b3;
      const e = y.getAccountData();
      if (!e) return [];
      const s = (_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.chainNamespace, r = y.state.activeCaipAddress, i = r ? se.getPlainAddress(r) : void 0;
      if (y.setAccountProp("balanceLoading", true, n), e.lastRetry && !se.isAllowedRetry(e.lastRetry, 30 * be.ONE_SEC_MS)) return y.setAccountProp("balanceLoading", false, n), [];
      try {
        if (i && s && n) {
          const o = await Tl.getMyTokensWithBalance();
          return y.setAccountProp("tokenBalance", o, n), y.setAccountProp("lastRetry", void 0, n), y.setAccountProp("balanceLoading", false, n), o;
        }
      } catch (o) {
        y.setAccountProp("lastRetry", Date.now(), n), t == null ? void 0 : t(o), Ns.showError("Token Balance Unavailable");
      } finally {
        y.setAccountProp("balanceLoading", false, n);
      }
      return [];
    },
    isCaipNetworkDisabled(t) {
      var _a2;
      const e = t.chainNamespace, s = !!((_a2 = y.getAccountData(e)) == null ? void 0 : _a2.caipAddress), n = y.getAllApprovedCaipNetworkIds(), r = y.getNetworkProp("supportsAllNetworks", e) !== false, i = K.getConnectorId(e), o = K.getAuthConnector(), a = i === W.CONNECTOR_ID.AUTH && o;
      return !s || r || a ? false : !(n == null ? void 0 : n.includes(t.caipNetworkId));
    }
  };
  y = es(vf);
  Rw = {
    onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = false }) {
      var _a2, _b3;
      const s = y.state.activeCaipNetwork, n = y.state.activeChain, r = le.state.data;
      if (t.id === (s == null ? void 0 : s.id)) return;
      const o = !!((_a2 = y.getAccountData(n)) == null ? void 0 : _a2.address), a = !!((_b3 = y.getAccountData(t.chainNamespace)) == null ? void 0 : _b3.address), c = t.chainNamespace !== n, d = K.getConnectorId(n) === W.CONNECTOR_ID.AUTH, h = W.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((u) => u === t.chainNamespace);
      e || d && h ? le.push("SwitchNetwork", {
        ...r,
        network: t
      }) : o && c && !a ? le.push("SwitchActiveChain", {
        switchToChain: t.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network: t
      }) : le.push("SwitchNetwork", {
        ...r,
        network: t
      });
    }
  };
  Nt = De({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  Uw = {
    state: Nt,
    subscribe(t) {
      return st(Nt, () => t(Nt));
    },
    subscribeKey(t, e) {
      return nt(Nt, t, e);
    },
    async open(t) {
      var _a2, _b3;
      const e = t == null ? void 0 : t.namespace, s = y.state.activeChain, n = e && e !== s, r = (_a2 = y.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : _a2.caipAddress, i = y.state.noAdapters;
      if (Z.state.wcBasic ? re.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      }) : await re.prefetch(), K.setFilterByNamespace(t == null ? void 0 : t.namespace), ge.setLoading(true, e), e && n) {
        const o = ((_b3 = y.getNetworkData(e)) == null ? void 0 : _b3.caipNetwork) || y.getRequestedCaipNetworks(e)[0];
        o && (i ? (await y.switchActiveNetwork(o), le.push("ConnectingWalletConnectBasic")) : Rw.onSwitchNetwork({
          network: o,
          ignoreSwitchConfirmation: true
        }));
      } else D.state.manualWCControl || i && !r ? se.isMobile() ? le.reset("AllWallets") : le.reset("ConnectingWalletConnectBasic") : (t == null ? void 0 : t.view) ? le.reset(t.view, t.data) : r ? le.reset("Account") : le.reset("Connect");
      Nt.open = true, Ks.set({
        open: true
      }), pe.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close() {
      const t = D.state.enableEmbedded, e = !!y.state.activeCaipAddress;
      Nt.open && pe.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: {
          connected: e
        }
      }), Nt.open = false, le.reset("Connect"), ge.clearLoading(), t ? e ? le.replace("Account") : le.push("Connect") : Ks.set({
        open: false
      }), Z.resetUri();
    },
    setLoading(t, e) {
      e && Nt.loadingNamespaceMap.set(e, t), Nt.loading = t, Ks.set({
        loading: t
      });
    },
    clearLoading() {
      Nt.loadingNamespaceMap.clear(), Nt.loading = false, Ks.set({
        loading: false
      });
    },
    shake() {
      Nt.shake || (Nt.shake = true, setTimeout(() => {
        Nt.shake = false;
      }, 500));
    }
  };
  ge = es(Uw);
  Ni = {
    id: "2b92315d-eab7-5bef-84fa-089a131333f5",
    name: "USD Coin",
    symbol: "USDC",
    networks: [
      {
        name: "ethereum-mainnet",
        display_name: "Ethereum",
        chain_id: "1",
        contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      {
        name: "polygon-mainnet",
        display_name: "Polygon",
        chain_id: "137",
        contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
      }
    ]
  };
  xc = {
    id: "USD",
    payment_method_limits: [
      {
        id: "card",
        min: "10.00",
        max: "7500.00"
      },
      {
        id: "ach_bank_account",
        min: "10.00",
        max: "25000.00"
      }
    ]
  };
  Dw = {
    providers: gf,
    selectedProvider: null,
    error: null,
    purchaseCurrency: Ni,
    paymentCurrency: xc,
    purchaseCurrencies: [
      Ni
    ],
    paymentCurrencies: [],
    quotesLoading: false
  };
  Ee = De(Dw);
  Lw = {
    state: Ee,
    subscribe(t) {
      return st(Ee, () => t(Ee));
    },
    subscribeKey(t, e) {
      return nt(Ee, t, e);
    },
    setSelectedProvider(t) {
      var _a2, _b3;
      if (t && t.name === "meld") {
        const e = y.state.activeChain, s = e === W.CHAIN.SOLANA ? "SOL" : "USDC", n = e ? ((_b3 = (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b3.address) ?? "" : "", r = new URL(t.url);
        r.searchParams.append("publicKey", ow), r.searchParams.append("destinationCurrencyCode", s), r.searchParams.append("walletAddress", n), r.searchParams.append("externalCustomerId", D.state.projectId), Ee.selectedProvider = {
          ...t,
          url: r.toString()
        };
      } else Ee.selectedProvider = t;
    },
    setOnrampProviders(t) {
      if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
        const e = t, s = gf.filter((n) => e.includes(n.name));
        Ee.providers = s;
      } else Ee.providers = [];
    },
    setPurchaseCurrency(t) {
      Ee.purchaseCurrency = t;
    },
    setPaymentCurrency(t) {
      Ee.paymentCurrency = t;
    },
    setPurchaseAmount(t) {
      Pc.state.purchaseAmount = t;
    },
    setPaymentAmount(t) {
      Pc.state.paymentAmount = t;
    },
    async getAvailableCurrencies() {
      const t = await he.getOnrampOptions();
      Ee.purchaseCurrencies = t.purchaseCurrencies, Ee.paymentCurrencies = t.paymentCurrencies, Ee.paymentCurrency = t.paymentCurrencies[0] || xc, Ee.purchaseCurrency = t.purchaseCurrencies[0] || Ni, await re.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await re.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
    },
    async getQuote() {
      var _a2, _b3;
      Ee.quotesLoading = true;
      try {
        const t = await he.getOnrampQuote({
          purchaseCurrency: Ee.purchaseCurrency,
          paymentCurrency: Ee.paymentCurrency,
          amount: ((_a2 = Ee.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
          network: (_b3 = Ee.purchaseCurrency) == null ? void 0 : _b3.symbol
        });
        return Ee.quotesLoading = false, Ee.purchaseAmount = Number(t == null ? void 0 : t.purchaseAmount.amount), t;
      } catch (t) {
        return Ee.error = t.message, Ee.quotesLoading = false, null;
      } finally {
        Ee.quotesLoading = false;
      }
    },
    resetState() {
      Ee.selectedProvider = null, Ee.error = null, Ee.purchaseCurrency = Ni, Ee.paymentCurrency = xc, Ee.purchaseCurrencies = [
        Ni
      ], Ee.paymentCurrencies = [], Ee.paymentAmount = void 0, Ee.purchaseAmount = void 0, Ee.quotesLoading = false;
    }
  };
  Pc = es(Lw);
  var si = {
    exports: {}
  }, Ba, Id;
  function Bw() {
    if (Id) return Ba;
    Id = 1;
    function t(s) {
      try {
        return JSON.stringify(s);
      } catch {
        return '"[Circular]"';
      }
    }
    Ba = e;
    function e(s, n, r) {
      var i = r && r.stringify || t, o = 1;
      if (typeof s == "object" && s !== null) {
        var a = n.length + o;
        if (a === 1) return s;
        var c = new Array(a);
        c[0] = i(s);
        for (var l = 1; l < a; l++) c[l] = i(n[l]);
        return c.join(" ");
      }
      if (typeof s != "string") return s;
      var d = n.length;
      if (d === 0) return s;
      for (var h = "", u = 1 - o, f = -1, g = s && s.length || 0, p = 0; p < g; ) {
        if (s.charCodeAt(p) === 37 && p + 1 < g) {
          switch (f = f > -1 ? f : 0, s.charCodeAt(p + 1)) {
            case 100:
            case 102:
              if (u >= d || n[u] == null) break;
              f < p && (h += s.slice(f, p)), h += Number(n[u]), f = p + 2, p++;
              break;
            case 105:
              if (u >= d || n[u] == null) break;
              f < p && (h += s.slice(f, p)), h += Math.floor(Number(n[u])), f = p + 2, p++;
              break;
            case 79:
            case 111:
            case 106:
              if (u >= d || n[u] === void 0) break;
              f < p && (h += s.slice(f, p));
              var w = typeof n[u];
              if (w === "string") {
                h += "'" + n[u] + "'", f = p + 2, p++;
                break;
              }
              if (w === "function") {
                h += n[u].name || "<anonymous>", f = p + 2, p++;
                break;
              }
              h += i(n[u]), f = p + 2, p++;
              break;
            case 115:
              if (u >= d) break;
              f < p && (h += s.slice(f, p)), h += String(n[u]), f = p + 2, p++;
              break;
            case 37:
              f < p && (h += s.slice(f, p)), h += "%", f = p + 2, p++, u--;
              break;
          }
          ++u;
        }
        ++p;
      }
      return f === -1 ? s : (f < g && (h += s.slice(f)), h);
    }
    return Ba;
  }
  var Nd;
  function Mw() {
    if (Nd) return si.exports;
    Nd = 1;
    const t = Bw();
    si.exports = d;
    const e = E().console || {}, s = {
      mapHttpRequest: M,
      mapHttpResponse: M,
      wrapRequestSerializer: j,
      wrapResponseSerializer: j,
      wrapErrorSerializer: j,
      req: M,
      res: M,
      err: U,
      errWithCause: U
    };
    function n(m, v) {
      return m === "silent" ? 1 / 0 : v.levels.values[m];
    }
    const r = Symbol("pino.logFuncs"), i = Symbol("pino.hierarchy"), o = {
      error: "log",
      fatal: "error",
      warn: "error",
      info: "log",
      debug: "log",
      trace: "log"
    };
    function a(m, v) {
      const A = {
        logger: v,
        parent: m[i]
      };
      v[i] = A;
    }
    function c(m, v, A) {
      const S = {};
      v.forEach((C) => {
        S[C] = A[C] ? A[C] : e[C] || e[o[C] || "log"] || k;
      }), m[r] = S;
    }
    function l(m, v) {
      return Array.isArray(m) ? m.filter(function(S) {
        return S !== "!stdSerializers.err";
      }) : m === true ? Object.keys(v) : false;
    }
    function d(m) {
      m = m || {}, m.browser = m.browser || {};
      const v = m.browser.transmit;
      if (v && typeof v.send != "function") throw Error("pino: transmit option must have a send function");
      const A = m.browser.write || e;
      m.browser.write && (m.browser.asObject = true);
      const S = m.serializers || {}, C = l(m.browser.serialize, S);
      let _ = m.browser.serialize;
      Array.isArray(m.browser.serialize) && m.browser.serialize.indexOf("!stdSerializers.err") > -1 && (_ = false);
      const P = Object.keys(m.customLevels || {}), x = [
        "error",
        "fatal",
        "warn",
        "info",
        "debug",
        "trace"
      ].concat(P);
      typeof A == "function" && x.forEach(function(ae) {
        A[ae] = A;
      }), (m.enabled === false || m.browser.disabled) && (m.level = "silent");
      const z = m.level || "info", R = Object.create(A);
      R.log || (R.log = k), c(R, x, A), a({}, R), Object.defineProperty(R, "levelVal", {
        get: Y
      }), Object.defineProperty(R, "level", {
        get: X,
        set: de
      });
      const B = {
        transmit: v,
        serialize: C,
        asObject: m.browser.asObject,
        asObjectBindingsOnly: m.browser.asObjectBindingsOnly,
        formatters: m.browser.formatters,
        levels: x,
        timestamp: L(m),
        messageKey: m.messageKey || "msg",
        onChild: m.onChild || k
      };
      R.levels = h(m), R.level = z, R.isLevelEnabled = function(ae) {
        return this.levels.values[ae] ? this.levels.values[ae] >= this.levels.values[this.level] : false;
      }, R.setMaxListeners = R.getMaxListeners = R.emit = R.addListener = R.on = R.prependListener = R.once = R.prependOnceListener = R.removeListener = R.removeAllListeners = R.listeners = R.listenerCount = R.eventNames = R.write = R.flush = k, R.serializers = S, R._serialize = C, R._stdErrSerialize = _, R.child = function(...ae) {
        return te.call(this, B, ...ae);
      }, v && (R._logEvent = $());
      function Y() {
        return n(this.level, this);
      }
      function X() {
        return this._level;
      }
      function de(ae) {
        if (ae !== "silent" && !this.levels.values[ae]) throw Error("unknown level " + ae);
        this._level = ae, g(this, B, R, "error"), g(this, B, R, "fatal"), g(this, B, R, "warn"), g(this, B, R, "info"), g(this, B, R, "debug"), g(this, B, R, "trace"), P.forEach((Oe) => {
          g(this, B, R, Oe);
        });
      }
      function te(ae, Oe, je) {
        if (!Oe) throw new Error("missing bindings for child Pino");
        je = je || {}, C && Oe.serializers && (je.serializers = Oe.serializers);
        const it = je.serializers;
        if (C && it) {
          var Ct = Object.assign({}, S, it), no = m.browser.serialize === true ? Object.keys(Ct) : C;
          delete Oe.serializers, I([
            Oe
          ], no, Ct, this._stdErrSerialize);
        }
        function ld(ro) {
          this._childLevel = (ro._childLevel | 0) + 1, this.bindings = Oe, Ct && (this.serializers = Ct, this._serialize = no), v && (this._logEvent = $([].concat(ro._logEvent.bindings, Oe)));
        }
        ld.prototype = this;
        const Qr = new ld(this);
        return a(this, Qr), Qr.child = function(...ro) {
          return te.call(this, ae, ...ro);
        }, Qr.level = je.level || this.level, ae.onChild(Qr), Qr;
      }
      return R;
    }
    function h(m) {
      const v = m.customLevels || {}, A = Object.assign({}, d.levels.values, v), S = Object.assign({}, d.levels.labels, u(v));
      return {
        values: A,
        labels: S
      };
    }
    function u(m) {
      const v = {};
      return Object.keys(m).forEach(function(A) {
        v[m[A]] = A;
      }), v;
    }
    d.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    }, d.stdSerializers = s, d.stdTimeFunctions = Object.assign({}, {
      nullTime: H,
      epochTime: V,
      unixTime: O,
      isoTime: b
    });
    function f(m) {
      const v = [];
      m.bindings && v.push(m.bindings);
      let A = m[i];
      for (; A.parent; ) A = A.parent, A.logger.bindings && v.push(A.logger.bindings);
      return v.reverse();
    }
    function g(m, v, A, S) {
      if (Object.defineProperty(m, S, {
        value: n(m.level, A) > n(S, A) ? k : A[r][S],
        writable: true,
        enumerable: true,
        configurable: true
      }), m[S] === k) {
        if (!v.transmit) return;
        const _ = v.transmit.level || m.level, P = n(_, A);
        if (n(S, A) < P) return;
      }
      m[S] = w(m, v, A, S);
      const C = f(m);
      C.length !== 0 && (m[S] = p(C, m[S]));
    }
    function p(m, v) {
      return function() {
        return v.apply(this, [
          ...m,
          ...arguments
        ]);
      };
    }
    function w(m, v, A, S) {
      return /* @__PURE__ */ (function(C) {
        return function() {
          const P = v.timestamp(), x = new Array(arguments.length), z = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
          for (var R = 0; R < x.length; R++) x[R] = arguments[R];
          var B = false;
          if (v.serialize && (I(x, this._serialize, this.serializers, this._stdErrSerialize), B = true), v.asObject || v.formatters ? C.call(z, ...T(this, S, x, P, v)) : C.apply(z, x), v.transmit) {
            const Y = v.transmit.level || m._level, X = n(Y, A), de = n(S, A);
            if (de < X) return;
            N(this, {
              ts: P,
              methodLevel: S,
              methodValue: de,
              transmitValue: A.levels.values[v.transmit.level || m._level],
              send: v.transmit.send,
              val: n(m._level, A)
            }, x, B);
          }
        };
      })(m[r][S]);
    }
    function T(m, v, A, S, C) {
      const { level: _, log: P = (Y) => Y } = C.formatters || {}, x = A.slice();
      let z = x[0];
      const R = {};
      let B = (m._childLevel | 0) + 1;
      if (B < 1 && (B = 1), S && (R.time = S), _) {
        const Y = _(v, m.levels.values[v]);
        Object.assign(R, Y);
      } else R.level = m.levels.values[v];
      if (C.asObjectBindingsOnly) {
        if (z !== null && typeof z == "object") for (; B-- && typeof x[0] == "object"; ) Object.assign(R, x.shift());
        return [
          P(R),
          ...x
        ];
      } else {
        if (z !== null && typeof z == "object") {
          for (; B-- && typeof x[0] == "object"; ) Object.assign(R, x.shift());
          z = x.length ? t(x.shift(), x) : void 0;
        } else typeof z == "string" && (z = t(x.shift(), x));
        return z !== void 0 && (R[C.messageKey] = z), [
          P(R)
        ];
      }
    }
    function I(m, v, A, S) {
      for (const C in m) if (S && m[C] instanceof Error) m[C] = d.stdSerializers.err(m[C]);
      else if (typeof m[C] == "object" && !Array.isArray(m[C]) && v) for (const _ in m[C]) v.indexOf(_) > -1 && _ in A && (m[C][_] = A[_](m[C][_]));
    }
    function N(m, v, A, S = false) {
      const C = v.send, _ = v.ts, P = v.methodLevel, x = v.methodValue, z = v.val, R = m._logEvent.bindings;
      S || I(A, m._serialize || Object.keys(m.serializers), m.serializers, m._stdErrSerialize === void 0 ? true : m._stdErrSerialize), m._logEvent.ts = _, m._logEvent.messages = A.filter(function(B) {
        return R.indexOf(B) === -1;
      }), m._logEvent.level.label = P, m._logEvent.level.value = x, C(P, m._logEvent, z), m._logEvent = $(R);
    }
    function $(m) {
      return {
        ts: 0,
        messages: [],
        bindings: m || [],
        level: {
          label: "",
          value: 0
        }
      };
    }
    function U(m) {
      const v = {
        type: m.constructor.name,
        msg: m.message,
        stack: m.stack
      };
      for (const A in m) v[A] === void 0 && (v[A] = m[A]);
      return v;
    }
    function L(m) {
      return typeof m.timestamp == "function" ? m.timestamp : m.timestamp === false ? H : V;
    }
    function M() {
      return {};
    }
    function j(m) {
      return m;
    }
    function k() {
    }
    function H() {
      return false;
    }
    function V() {
      return Date.now();
    }
    function O() {
      return Math.round(Date.now() / 1e3);
    }
    function b() {
      return new Date(Date.now()).toISOString();
    }
    function E() {
      function m(v) {
        return typeof v < "u" && v;
      }
      try {
        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            return delete Object.prototype.globalThis, this.globalThis = this;
          },
          configurable: true
        }), globalThis;
      } catch {
        return m(self) || m(window) || m(this) || {};
      }
    }
    return si.exports.default = d, si.exports.pino = d, si.exports;
  }
  var hs = Mw();
  const la = gm(hs), Fw = {
    level: "info"
  }, da = "custom_context", Ol = 1e3 * 1024;
  var jw = Object.defineProperty, qw = (t, e, s) => e in t ? jw(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, An = (t, e, s) => qw(t, typeof e != "symbol" ? e + "" : e, s);
  let Ww = class {
    constructor(e) {
      An(this, "nodeValue"), An(this, "sizeInBytes"), An(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  }, _d = class {
    constructor(e) {
      An(this, "lengthInNodes"), An(this, "sizeInBytes"), An(this, "head"), An(this, "tail"), An(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
      const s = new Ww(e);
      if (s.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${s.size}`);
      for (; this.size + s.size > this.maxSizeInBytes; ) this.shift();
      this.head ? (this.tail && (this.tail.next = s), this.tail = s) : (this.head = s, this.tail = s), this.lengthInNodes++, this.sizeInBytes += s.size;
    }
    shift() {
      if (!this.head) return;
      const e = this.head;
      this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
      const e = [];
      let s = this.head;
      for (; s !== null; ) e.push(s.value), s = s.next;
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return {
            done: true,
            value: null
          };
          const s = e.value;
          return e = e.next, {
            done: false,
            value: s
          };
        }
      };
    }
  };
  var Hw = Object.defineProperty, Vw = (t, e, s) => e in t ? Hw(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ho = (t, e, s) => Vw(t, typeof e != "symbol" ? e + "" : e, s);
  let Cf = class {
    constructor(e, s = Ol) {
      ho(this, "logs"), ho(this, "level"), ho(this, "levelValue"), ho(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = hs.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = s, this.logs = new _d(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, s) {
      s === hs.levels.values.error ? console.error(e) : s === hs.levels.values.warn ? console.warn(e) : s === hs.levels.values.debug ? console.debug(e) : s === hs.levels.values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(Pi({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        log: e
      }));
      const s = typeof e == "string" ? JSON.parse(e).level : e.level;
      s >= this.levelValue && this.forwardToConsole(e, s);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new _d(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      const s = this.getLogArray();
      return s.push(Pi({
        extraMetadata: e
      })), new Blob(s, {
        type: "application/json"
      });
    }
  };
  var Kw = Object.defineProperty, zw = (t, e, s) => e in t ? Kw(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Gw = (t, e, s) => zw(t, e + "", s);
  let Yw = class {
    constructor(e, s = Ol) {
      Gw(this, "baseChunkLogger"), this.baseChunkLogger = new Cf(e, s);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      const s = URL.createObjectURL(this.logsToBlob(e)), n = document.createElement("a");
      n.href = s, n.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(s);
    }
  };
  var Zw = Object.defineProperty, Jw = (t, e, s) => e in t ? Zw(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Xw = (t, e, s) => Jw(t, e + "", s);
  let Qw = class {
    constructor(e, s = Ol) {
      Xw(this, "baseChunkLogger"), this.baseChunkLogger = new Cf(e, s);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  };
  var ey = Object.defineProperty, ty = Object.defineProperties, sy = Object.getOwnPropertyDescriptors, Sd = Object.getOwnPropertySymbols, ny = Object.prototype.hasOwnProperty, ry = Object.prototype.propertyIsEnumerable, Td = (t, e, s) => e in t ? ey(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ho = (t, e) => {
    for (var s in e || (e = {})) ny.call(e, s) && Td(t, s, e[s]);
    if (Sd) for (var s of Sd(e)) ry.call(e, s) && Td(t, s, e[s]);
    return t;
  }, Vo = (t, e) => ty(t, sy(e));
  function iy(t) {
    return Vo(Ho({}, t), {
      level: (t == null ? void 0 : t.level) || Fw.level
    });
  }
  function oy(t, e, s = da) {
    return t[s] = e, t;
  }
  function jt(t, e = da) {
    return t[e] || "";
  }
  function ay(t, e, s = da) {
    const n = jt(t, s);
    return n.trim() ? `${n}/${e}` : e;
  }
  function qt(t, e, s = da) {
    const n = ay(t, e, s), r = t.child({
      context: n
    });
    return oy(r, n, s);
  }
  function cy(t) {
    var e, s;
    const n = new Yw((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
    return {
      logger: la(Vo(Ho({}, t.opts), {
        level: "trace",
        browser: Vo(Ho({}, (s = t.opts) == null ? void 0 : s.browser), {
          write: (r) => n.write(r)
        })
      })),
      chunkLoggerController: n
    };
  }
  function ly(t) {
    var e;
    const s = new Qw((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
    return {
      logger: la(Vo(Ho({}, t.opts), {
        level: "trace"
      }), s),
      chunkLoggerController: s
    };
  }
  function Af(t) {
    return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string" ? {
      logger: t.loggerOverride,
      chunkLoggerController: null
    } : typeof window < "u" ? cy(t) : ly(t);
  }
  var dy = Object.defineProperty, hy = (t, e, s) => e in t ? dy(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Od = (t, e, s) => hy(t, typeof e != "symbol" ? e + "" : e, s);
  let uy = class extends Yr {
    constructor(e) {
      super(), this.opts = e, Od(this, "protocol", "wc"), Od(this, "version", 2);
    }
  };
  var fy = Object.defineProperty, py = (t, e, s) => e in t ? fy(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, gy = (t, e, s) => py(t, e + "", s);
  let my = class extends Yr {
    constructor(e, s) {
      super(), this.core = e, this.logger = s, gy(this, "records", /* @__PURE__ */ new Map());
    }
  }, wy = class {
    constructor(e, s) {
      this.logger = e, this.core = s;
    }
  }, yy = class extends Yr {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, by = class extends Yr {
    constructor(e) {
      super();
    }
  }, Ey = class {
    constructor(e, s, n, r) {
      this.core = e, this.logger = s, this.name = n;
    }
  }, vy = class extends Yr {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, Cy = class extends Yr {
    constructor(e, s) {
      super(), this.core = e, this.logger = s;
    }
  }, Ay = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.store = n;
    }
  }, Iy = class {
    constructor(e, s) {
      this.projectId = e, this.logger = s;
    }
  }, Ny = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.telemetryEnabled = n;
    }
  };
  function _y(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), h = d.charCodeAt(0);
      if (e[h] !== 255) throw new TypeError(d + " is ambiguous");
      e[h] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, h = 0, u = 0;
      const f = l.length;
      for (; u !== f && l[u] === 0; ) u++, d++;
      const g = (f - u) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; u !== f; ) {
        let I = l[u], N = 0;
        for (let $ = g - 1; (I !== 0 || N < h) && $ !== -1; $--, N++) I += 256 * p[$] >>> 0, p[$] = I % s >>> 0, I = I / s >>> 0;
        if (I !== 0) throw new Error("Non-zero carry");
        h = N, u++;
      }
      let w = g - h;
      for (; w !== g && p[w] === 0; ) w++;
      let T = n.repeat(d);
      for (; w < g; ++w) T += t.charAt(p[w]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, h = 0, u = 0;
      for (; l[d] === n; ) h++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const I = l.charCodeAt(d);
        if (I > 255) return;
        let N = e[I];
        if (N === 255) return;
        let $ = 0;
        for (let U = f - 1; (N !== 0 || $ < u) && U !== -1; U--, $++) N += s * g[U] >>> 0, g[U] = N % 256 >>> 0, N = N / 256 >>> 0;
        if (N !== 0) throw new Error("Non-zero carry");
        u = $, d++;
      }
      let p = f - u;
      for (; p !== f && g[p] === 0; ) p++;
      const w = new Uint8Array(h + (f - p));
      let T = h;
      for (; p !== f; ) w[T++] = g[p++];
      return w;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var Sy = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  _y(Sy);
  var Ty = {};
  const Oy = "ReactNative", fs = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  }, ky = "js";
  function Ko() {
    return typeof Xt < "u" && typeof Xt.versions < "u" && typeof Xt.versions.node < "u";
  }
  function gr() {
    return !Ft.getDocument() && !!Ft.getNavigator() && navigator.product === Oy;
  }
  function xy() {
    return gr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "android";
  }
  function Py() {
    return gr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "ios";
  }
  function Gi() {
    return !Ko() && !!Ft.getNavigator() && !!Ft.getDocument();
  }
  function ha() {
    return gr() ? fs.reactNative : Ko() ? fs.node : Gi() ? fs.browser : fs.unknown;
  }
  function kd() {
    var t;
    try {
      return gr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Application) < "u" ? (t = globalThis.Application) == null ? void 0 : t.applicationId : void 0;
    } catch {
      return;
    }
  }
  function $y(t, e) {
    const s = new URLSearchParams(t);
    return Object.entries(e).sort(([n], [r]) => n.localeCompare(r)).forEach(([n, r]) => {
      r != null && s.set(n, String(r));
    }), s.toString();
  }
  function Ry() {
    return of.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function Uy() {
    if (ha() === fs.reactNative && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u") {
      const { OS: s, Version: n } = globalThis.Platform;
      return [
        s,
        n
      ].join("-");
    }
    const t = wm();
    if (t === null) return "unknown";
    const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
    return t.type === "browser" ? [
      e,
      t.name,
      t.version
    ].join("-") : [
      e,
      t.version
    ].join("-");
  }
  function Dy() {
    var t;
    const e = ha();
    return e === fs.browser ? [
      e,
      ((t = Ft.getLocation()) == null ? void 0 : t.host) || "unknown"
    ].join(":") : e;
  }
  function If(t, e, s) {
    const n = Uy(), r = Dy();
    return [
      [
        t,
        e
      ].join("-"),
      [
        ky,
        s
      ].join("-"),
      n,
      r
    ].join("/");
  }
  function Ly({ protocol: t, version: e, relayUrl: s, sdkVersion: n, auth: r, projectId: i, useOnCloseEvent: o, bundleId: a, packageName: c }) {
    const l = s.split("?"), d = If(t, e, n), h = {
      auth: r,
      ua: d,
      projectId: i,
      useOnCloseEvent: o,
      packageName: c || void 0,
      bundleId: a || void 0
    }, u = $y(l[1] || "", h);
    return l[0] + "?" + u;
  }
  function $c(t) {
    return Object.fromEntries(t.entries());
  }
  function Rc(t) {
    return new Map(Object.entries(t));
  }
  function By(t = G.FIVE_MINUTES, e) {
    const s = G.toMiliseconds(t || G.FIVE_MINUTES);
    let n, r, i, o;
    return {
      resolve: (a) => {
        i && n && (clearTimeout(i), n(a), o = Promise.resolve(a));
      },
      reject: (a) => {
        i && r && (clearTimeout(i), r(a));
      },
      done: () => new Promise((a, c) => {
        if (o) return a(o);
        i = setTimeout(() => {
          const l = new Error(e);
          o = Promise.reject(l), c(l);
        }, s), n = a, r = c;
      })
    };
  }
  function _s(t, e, s) {
    return new Promise(async (n, r) => {
      const i = setTimeout(() => r(new Error(s)), e);
      try {
        const o = await t;
        n(o);
      } catch (o) {
        r(o);
      }
      clearTimeout(i);
    });
  }
  function Nf(t, e) {
    if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
    if (t.toLowerCase() === "topic") {
      if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
      return `topic:${e}`;
    } else if (t.toLowerCase() === "id") {
      if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
      return `id:${e}`;
    }
    throw new Error(`Unknown expirer target type: ${t}`);
  }
  function My(t) {
    return Nf("topic", t);
  }
  function Fy(t) {
    return Nf("id", t);
  }
  function jy(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function _i(t, e) {
    return G.fromMiliseconds(Date.now() + G.toMiliseconds(t));
  }
  function xd(t) {
    return Date.now() >= G.toMiliseconds(t);
  }
  function Ma(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Pd() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
  function _f() {
    return typeof Xt < "u" && Ty.IS_VITEST === "true";
  }
  function Sf(t) {
    return ve.from(t, "base64").toString("utf-8");
  }
  function qy(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  const uo = BigInt(2 ** 32 - 1), $d = BigInt(32);
  function Tf(t, e = false) {
    return e ? {
      h: Number(t & uo),
      l: Number(t >> $d & uo)
    } : {
      h: Number(t >> $d & uo) | 0,
      l: Number(t & uo) | 0
    };
  }
  function Of(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Tf(t[i], e);
      [n[i], r[i]] = [
        o,
        a
      ];
    }
    return [
      n,
      r
    ];
  }
  const Rd = (t, e, s) => t >>> s, Ud = (t, e, s) => t << 32 - s | e >>> s, mn = (t, e, s) => t >>> s | e << 32 - s, wn = (t, e, s) => t << 32 - s | e >>> s, mi = (t, e, s) => t << 64 - s | e >>> s - 32, wi = (t, e, s) => t >>> s - 32 | e << 64 - s, Wy = (t, e) => e, Hy = (t, e) => t, Vy = (t, e, s) => t << s | e >>> 32 - s, Ky = (t, e, s) => e << s | t >>> 32 - s, zy = (t, e, s) => e << s - 32 | t >>> 64 - s, Gy = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function as(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const kl = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), xl = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, Yy = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), Zy = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, Jy = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), Xy = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, br = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function ua(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Xs(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function gs(t, ...e) {
    if (!ua(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function fa(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Xs(t.outputLen), Xs(t.blockLen);
  }
  function $n(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Pl(t, e) {
    gs(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function Li(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function Qt(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function Fa(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function ys(t, e) {
    return t << 32 - e | t >>> e;
  }
  const kf = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function xf(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Ds = kf ? (t) => t : (t) => xf(t);
  function Qy(t) {
    for (let e = 0; e < t.length; e++) t[e] = xf(t[e]);
    return t;
  }
  const yn = kf ? (t) => t : Qy, Pf = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", e0 = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function Dr(t) {
    if (gs(t), Pf) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += e0[t[s]];
    return e;
  }
  const $s = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Dd(t) {
    if (t >= $s._0 && t <= $s._9) return t - $s._0;
    if (t >= $s.A && t <= $s.F) return t - ($s.A - 10);
    if (t >= $s.a && t <= $s.f) return t - ($s.a - 10);
  }
  function zo(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Pf) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = Dd(t.charCodeAt(i)), a = Dd(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function $f(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function ps(t) {
    return typeof t == "string" && (t = $f(t)), gs(t), t;
  }
  function In(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      gs(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  let pa = class {
  };
  function Yi(t) {
    const e = (n) => t().update(ps(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function t0(t) {
    const e = (n, r) => t(r).update(ps(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function mr(t = 32) {
    if (br && typeof br.getRandomValues == "function") return br.getRandomValues(new Uint8Array(t));
    if (br && typeof br.randomBytes == "function") return Uint8Array.from(br.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const s0 = BigInt(0), ni = BigInt(1), n0 = BigInt(2), r0 = BigInt(7), i0 = BigInt(256), o0 = BigInt(113), Rf = [], Uf = [], Df = [];
  for (let t = 0, e = ni, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], Rf.push(2 * (5 * n + s)), Uf.push((t + 1) * (t + 2) / 2 % 64);
    let r = s0;
    for (let i = 0; i < 7; i++) e = (e << ni ^ (e >> r0) * o0) % i0, e & n0 && (r ^= ni << (ni << BigInt(i)) - ni);
    Df.push(r);
  }
  const Lf = Of(Df, true), a0 = Lf[0], c0 = Lf[1], Ld = (t, e, s) => s > 32 ? zy(t, e, s) : Vy(t, e, s), Bd = (t, e, s) => s > 32 ? Gy(t, e, s) : Ky(t, e, s);
  function l0(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], h = Ld(l, d, 1) ^ s[a], u = Bd(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= h, t[o + f + 1] ^= u;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = Uf[o], c = Ld(r, i, a), l = Bd(r, i, a), d = Rf[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= a0[n], t[1] ^= c0[n];
    }
    Qt(s);
  }
  let d0 = class Bf extends pa {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, Xs(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = Li(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      yn(this.state32), l0(this.state32, this.rounds), yn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      $n(this), e = ps(e), gs(e);
      const { blockLen: s, state: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(s - this.pos, r - i);
        for (let a = 0; a < o; a++) n[this.pos++] ^= e[i++];
        this.pos === s && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: s, pos: n, blockLen: r } = this;
      e[n] ^= s, (s & 128) !== 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      $n(this, false), gs(e), this.finish();
      const s = this.state, { blockLen: n } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= n && this.keccak();
        const o = Math.min(n - this.posOut, i - r);
        e.set(s.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return Xs(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Pl(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, Qt(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new Bf(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  };
  const h0 = (t, e, s) => Yi(() => new d0(e, t, s));
  h0(1, 136, 256 / 8);
  function u0(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function f0(t, e, s) {
    return t & e ^ ~t & s;
  }
  function p0(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  let Mf = class extends pa {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Fa(this.buffer);
    }
    update(e) {
      $n(this), e = ps(e), gs(e);
      const { view: s, buffer: n, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = Fa(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      $n(this), Pl(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, Qt(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let h = o; h < r; h++) s[h] = 0;
      u0(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = Fa(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let h = 0; h < l; h++) a.setUint32(4 * h, d[h], i);
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: s, buffer: n, length: r, finished: i, destroyed: o, pos: a } = this;
      return e.destroyed = o, e.finished = i, e.length = r, e.pos = a, r % s && e.buffer.set(n), e;
    }
    clone() {
      return this._cloneInto();
    }
  };
  const sn = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), ot = Uint32Array.from([
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ]), at = Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]), g0 = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), nn = new Uint32Array(64);
  let m0 = class extends Mf {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = sn[0] | 0, this.B = sn[1] | 0, this.C = sn[2] | 0, this.D = sn[3] | 0, this.E = sn[4] | 0, this.F = sn[5] | 0, this.G = sn[6] | 0, this.H = sn[7] | 0;
    }
    get() {
      const { A: e, B: s, C: n, D: r, E: i, F: o, G: a, H: c } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c
      ];
    }
    set(e, s, n, r, i, o, a, c) {
      this.A = e | 0, this.B = s | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(e, s) {
      for (let h = 0; h < 16; h++, s += 4) nn[h] = e.getUint32(s, false);
      for (let h = 16; h < 64; h++) {
        const u = nn[h - 15], f = nn[h - 2], g = ys(u, 7) ^ ys(u, 18) ^ u >>> 3, p = ys(f, 17) ^ ys(f, 19) ^ f >>> 10;
        nn[h] = p + nn[h - 7] + g + nn[h - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let h = 0; h < 64; h++) {
        const u = ys(a, 6) ^ ys(a, 11) ^ ys(a, 25), f = d + u + f0(a, c, l) + g0[h] + nn[h] | 0, g = (ys(n, 2) ^ ys(n, 13) ^ ys(n, 22)) + p0(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      Qt(nn);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Qt(this.buffer);
    }
  };
  const Ff = Of([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((t) => BigInt(t))), w0 = Ff[0], y0 = Ff[1], rn = new Uint32Array(80), on = new Uint32Array(80);
  let $l = class extends Mf {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = at[0] | 0, this.Al = at[1] | 0, this.Bh = at[2] | 0, this.Bl = at[3] | 0, this.Ch = at[4] | 0, this.Cl = at[5] | 0, this.Dh = at[6] | 0, this.Dl = at[7] | 0, this.Eh = at[8] | 0, this.El = at[9] | 0, this.Fh = at[10] | 0, this.Fl = at[11] | 0, this.Gh = at[12] | 0, this.Gl = at[13] | 0, this.Hh = at[14] | 0, this.Hl = at[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: h, Fl: u, Gh: f, Gl: g, Hh: p, Hl: w } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        w
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, w) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = w | 0;
    }
    process(e, s) {
      for (let N = 0; N < 16; N++, s += 4) rn[N] = e.getUint32(s), on[N] = e.getUint32(s += 4);
      for (let N = 16; N < 80; N++) {
        const $ = rn[N - 15] | 0, U = on[N - 15] | 0, L = mn($, U, 1) ^ mn($, U, 8) ^ Rd($, U, 7), M = wn($, U, 1) ^ wn($, U, 8) ^ Ud($, U, 7), j = rn[N - 2] | 0, k = on[N - 2] | 0, H = mn(j, k, 19) ^ mi(j, k, 61) ^ Rd(j, k, 6), V = wn(j, k, 19) ^ wi(j, k, 61) ^ Ud(j, k, 6), O = Yy(M, V, on[N - 7], on[N - 16]), b = Zy(O, L, H, rn[N - 7], rn[N - 16]);
        rn[N] = b | 0, on[N] = O | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: h, El: u, Fh: f, Fl: g, Gh: p, Gl: w, Hh: T, Hl: I } = this;
      for (let N = 0; N < 80; N++) {
        const $ = mn(h, u, 14) ^ mn(h, u, 18) ^ mi(h, u, 41), U = wn(h, u, 14) ^ wn(h, u, 18) ^ wi(h, u, 41), L = h & f ^ ~h & p, M = u & g ^ ~u & w, j = Jy(I, U, M, y0[N], on[N]), k = Xy(j, T, $, L, w0[N], rn[N]), H = j | 0, V = mn(n, r, 28) ^ mi(n, r, 34) ^ mi(n, r, 39), O = wn(n, r, 28) ^ wi(n, r, 34) ^ wi(n, r, 39), b = n & i ^ n & a ^ i & a, E = r & o ^ r & c ^ o & c;
        T = p | 0, I = w | 0, p = f | 0, w = g | 0, f = h | 0, g = u | 0, { h, l: u } = as(l | 0, d | 0, k | 0, H | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const m = kl(H, O, E);
        n = xl(m, k, V, b), r = m | 0;
      }
      ({ h: n, l: r } = as(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = as(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = as(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = as(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h, l: u } = as(this.Eh | 0, this.El | 0, h | 0, u | 0), { h: f, l: g } = as(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: w } = as(this.Gh | 0, this.Gl | 0, p | 0, w | 0), { h: T, l: I } = as(this.Hh | 0, this.Hl | 0, T | 0, I | 0), this.set(n, r, i, o, a, c, l, d, h, u, f, g, p, w, T, I);
    }
    roundClean() {
      Qt(rn, on);
    }
    destroy() {
      Qt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }, b0 = class extends $l {
    constructor() {
      super(48), this.Ah = ot[0] | 0, this.Al = ot[1] | 0, this.Bh = ot[2] | 0, this.Bl = ot[3] | 0, this.Ch = ot[4] | 0, this.Cl = ot[5] | 0, this.Dh = ot[6] | 0, this.Dl = ot[7] | 0, this.Eh = ot[8] | 0, this.El = ot[9] | 0, this.Fh = ot[10] | 0, this.Fl = ot[11] | 0, this.Gh = ot[12] | 0, this.Gl = ot[13] | 0, this.Hh = ot[14] | 0, this.Hl = ot[15] | 0;
    }
  };
  const ct = Uint32Array.from([
    573645204,
    4230739756,
    2673172387,
    3360449730,
    596883563,
    1867755857,
    2520282905,
    1497426621,
    2519219938,
    2827943907,
    3193839141,
    1401305490,
    721525244,
    746961066,
    246885852,
    2177182882
  ]);
  let E0 = class extends $l {
    constructor() {
      super(32), this.Ah = ct[0] | 0, this.Al = ct[1] | 0, this.Bh = ct[2] | 0, this.Bl = ct[3] | 0, this.Ch = ct[4] | 0, this.Cl = ct[5] | 0, this.Dh = ct[6] | 0, this.Dl = ct[7] | 0, this.Eh = ct[8] | 0, this.El = ct[9] | 0, this.Fh = ct[10] | 0, this.Fl = ct[11] | 0, this.Gh = ct[12] | 0, this.Gl = ct[13] | 0, this.Hh = ct[14] | 0, this.Hl = ct[15] | 0;
    }
  };
  const jf = Yi(() => new m0()), v0 = Yi(() => new $l()), C0 = Yi(() => new b0());
  Yi(() => new E0());
  const A0 = Uint8Array.from([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9
  ]), He = Uint32Array.from([
    4089235720,
    1779033703,
    2227873595,
    3144134277,
    4271175723,
    1013904242,
    1595750129,
    2773480762,
    2917565137,
    1359893119,
    725511199,
    2600822924,
    4215389547,
    528734635,
    327033209,
    1541459225
  ]), Q = new Uint32Array(32);
  function an(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = Q[2 * t], l = Q[2 * t + 1], d = Q[2 * e], h = Q[2 * e + 1], u = Q[2 * s], f = Q[2 * s + 1], g = Q[2 * n], p = Q[2 * n + 1], w = kl(c, d, o);
    l = xl(w, l, h, a), c = w | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: Wy(p, g),
      Dl: Hy(p)
    }, { h: f, l: u } = as(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: mn(h, d, 24),
      Bl: wn(h, d, 24)
    }, Q[2 * t] = c, Q[2 * t + 1] = l, Q[2 * e] = d, Q[2 * e + 1] = h, Q[2 * s] = u, Q[2 * s + 1] = f, Q[2 * n] = g, Q[2 * n + 1] = p;
  }
  function cn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = Q[2 * t], l = Q[2 * t + 1], d = Q[2 * e], h = Q[2 * e + 1], u = Q[2 * s], f = Q[2 * s + 1], g = Q[2 * n], p = Q[2 * n + 1], w = kl(c, d, o);
    l = xl(w, l, h, a), c = w | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: mn(p, g, 16),
      Dl: wn(p, g, 16)
    }, { h: f, l: u } = as(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: mi(h, d, 63),
      Bl: wi(h, d, 63)
    }, Q[2 * t] = c, Q[2 * t + 1] = l, Q[2 * e] = d, Q[2 * e + 1] = h, Q[2 * s] = u, Q[2 * s + 1] = f, Q[2 * n] = g, Q[2 * n + 1] = p;
  }
  function I0(t, e = {}, s, n, r) {
    if (Xs(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  let N0 = class extends pa {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, Xs(e), Xs(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = Li(this.buffer);
    }
    update(e) {
      $n(this), e = ps(e), gs(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (yn(r), this.compress(r, 0, false), yn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const h = new Uint32Array(a, d, Math.floor((i - c) / 4));
          yn(h);
          for (let u = 0; c + s < i; u += r.length, c += s) this.length += s, this.compress(h, u, false);
          yn(h);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      $n(this), Pl(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, Qt(this.buffer.subarray(s)), yn(n), this.compress(n, 0, true), yn(n);
      const r = Li(e);
      this.get().forEach((i, o) => r[o] = Ds(i));
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      const { buffer: s, length: n, finished: r, destroyed: i, outputLen: o, pos: a } = this;
      return e || (e = new this.constructor({
        dkLen: o
      })), e.set(...this.get()), e.buffer.set(s), e.destroyed = i, e.finished = r, e.length = n, e.pos = a, e.outputLen = o, e;
    }
    clone() {
      return this._cloneInto();
    }
  }, _0 = class extends N0 {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = He[0] | 0, this.v0h = He[1] | 0, this.v1l = He[2] | 0, this.v1h = He[3] | 0, this.v2l = He[4] | 0, this.v2h = He[5] | 0, this.v3l = He[6] | 0, this.v3h = He[7] | 0, this.v4l = He[8] | 0, this.v4h = He[9] | 0, this.v5l = He[10] | 0, this.v5h = He[11] | 0, this.v6l = He[12] | 0, this.v6h = He[13] | 0, this.v7l = He[14] | 0, this.v7h = He[15] | 0, I0(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = ps(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = ps(i);
        const a = Li(i);
        this.v4l ^= Ds(a[0]), this.v4h ^= Ds(a[1]), this.v5l ^= Ds(a[2]), this.v5h ^= Ds(a[3]);
      }
      if (r !== void 0) {
        r = ps(r);
        const a = Li(r);
        this.v6l ^= Ds(a[0]), this.v6h ^= Ds(a[1]), this.v7l ^= Ds(a[2]), this.v7h ^= Ds(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: h, v5h: u, v6l: f, v6h: g, v7l: p, v7h: w } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        w
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, w) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = h | 0, this.v5h = u | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = w | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => Q[l] = c), Q.set(He, 16);
      let { h: r, l: i } = Tf(BigInt(this.length));
      Q[24] = He[8] ^ i, Q[25] = He[9] ^ r, n && (Q[28] = ~Q[28], Q[29] = ~Q[29]);
      let o = 0;
      const a = A0;
      for (let c = 0; c < 12; c++) an(0, 4, 8, 12, e, s + 2 * a[o++]), cn(0, 4, 8, 12, e, s + 2 * a[o++]), an(1, 5, 9, 13, e, s + 2 * a[o++]), cn(1, 5, 9, 13, e, s + 2 * a[o++]), an(2, 6, 10, 14, e, s + 2 * a[o++]), cn(2, 6, 10, 14, e, s + 2 * a[o++]), an(3, 7, 11, 15, e, s + 2 * a[o++]), cn(3, 7, 11, 15, e, s + 2 * a[o++]), an(0, 5, 10, 15, e, s + 2 * a[o++]), cn(0, 5, 10, 15, e, s + 2 * a[o++]), an(1, 6, 11, 12, e, s + 2 * a[o++]), cn(1, 6, 11, 12, e, s + 2 * a[o++]), an(2, 7, 8, 13, e, s + 2 * a[o++]), cn(2, 7, 8, 13, e, s + 2 * a[o++]), an(3, 4, 9, 14, e, s + 2 * a[o++]), cn(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= Q[0] ^ Q[16], this.v0h ^= Q[1] ^ Q[17], this.v1l ^= Q[2] ^ Q[18], this.v1h ^= Q[3] ^ Q[19], this.v2l ^= Q[4] ^ Q[20], this.v2h ^= Q[5] ^ Q[21], this.v3l ^= Q[6] ^ Q[22], this.v3h ^= Q[7] ^ Q[23], this.v4l ^= Q[8] ^ Q[24], this.v4h ^= Q[9] ^ Q[25], this.v5l ^= Q[10] ^ Q[26], this.v5h ^= Q[11] ^ Q[27], this.v6l ^= Q[12] ^ Q[28], this.v6h ^= Q[13] ^ Q[29], this.v7l ^= Q[14] ^ Q[30], this.v7h ^= Q[15] ^ Q[31], Qt(Q);
    }
    destroy() {
      this.destroyed = true, Qt(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  t0((t) => new _0(t));
  function qf(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Uc(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function ja(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function St(t, ...e) {
    if (!qf(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Md(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function S0(t, e) {
    St(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function On(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function Wr(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function T0(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const O0 = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function k0(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Dc(t) {
    if (typeof t == "string") t = k0(t);
    else if (qf(t)) t = Lc(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function x0(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function P0(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const $0 = (t, e) => {
    function s(n, ...r) {
      if (St(n), !O0) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? St(l) : St(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && St(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          St(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, St(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (St(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function Fd(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !U0(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function jd(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function R0(t, e, s) {
    Uc(s);
    const n = new Uint8Array(16), r = T0(n);
    return jd(r, 0, BigInt(e), s), jd(r, 8, BigInt(t), s), n;
  }
  function U0(t) {
    return t.byteOffset % 4 === 0;
  }
  function Lc(t) {
    return Uint8Array.from(t);
  }
  const Wf = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), D0 = Wf("expand 16-byte k"), L0 = Wf("expand 32-byte k"), B0 = On(D0), M0 = On(L0);
  function Ie(t, e) {
    return t << e | t >>> 32 - e;
  }
  function Bc(t) {
    return t.byteOffset % 4 === 0;
  }
  const fo = 64, F0 = 16, Hf = 2 ** 32 - 1, qd = new Uint32Array();
  function j0(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(fo), d = On(l), h = Bc(r) && Bc(i), u = h ? On(r) : qd, f = h ? On(i) : qd;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= Hf) throw new Error("arx: counter overflow");
      const p = Math.min(fo, c - g);
      if (h && p === fo) {
        const w = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let T = 0, I; T < F0; T++) I = w + T, f[I] = u[I] ^ d[T];
        g += fo;
        continue;
      }
      for (let w = 0, T; w < p; w++) T = g + w, i[T] = r[T] ^ l[w];
      g += p;
    }
  }
  function q0(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = x0({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return ja(r), ja(o), Uc(i), Uc(s), (a, c, l, d, h = 0) => {
      St(a), St(c), St(l);
      const u = l.length;
      if (d === void 0 && (d = new Uint8Array(u)), St(d), ja(h), h < 0 || h >= Hf) throw new Error("arx: counter overflow");
      if (d.length < u) throw new Error(`arx: output (${d.length}) is shorter than data (${u})`);
      const f = [];
      let g = a.length, p, w;
      if (g === 32) f.push(p = Lc(a)), w = M0;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), w = B0, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      Bc(c) || f.push(c = Lc(c));
      const T = On(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(w, T, On(c.subarray(0, 16)), T), c = c.subarray(16);
      }
      const I = 16 - r;
      if (I !== c.length) throw new Error(`arx: nonce must be ${I} or 16 bytes`);
      if (I !== 12) {
        const $ = new Uint8Array(12);
        $.set(c, i ? 0 : 12 - c.length), c = $, f.push(c);
      }
      const N = On(c);
      return j0(t, w, T, N, l, d, h, o), Wr(...f), d;
    };
  }
  const Je = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  let W0 = class {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = Dc(e), St(e, 32);
      const s = Je(e, 0), n = Je(e, 2), r = Je(e, 4), i = Je(e, 6), o = Je(e, 8), a = Je(e, 10), c = Je(e, 12), l = Je(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = Je(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], h = o[4], u = o[5], f = o[6], g = o[7], p = o[8], w = o[9], T = Je(e, s + 0), I = Je(e, s + 2), N = Je(e, s + 4), $ = Je(e, s + 6), U = Je(e, s + 8), L = Je(e, s + 10), M = Je(e, s + 12), j = Je(e, s + 14);
      let k = i[0] + (T & 8191), H = i[1] + ((T >>> 13 | I << 3) & 8191), V = i[2] + ((I >>> 10 | N << 6) & 8191), O = i[3] + ((N >>> 7 | $ << 9) & 8191), b = i[4] + (($ >>> 4 | U << 12) & 8191), E = i[5] + (U >>> 1 & 8191), m = i[6] + ((U >>> 14 | L << 2) & 8191), v = i[7] + ((L >>> 11 | M << 5) & 8191), A = i[8] + ((M >>> 8 | j << 8) & 8191), S = i[9] + (j >>> 5 | r), C = 0, _ = C + k * a + H * (5 * w) + V * (5 * p) + O * (5 * g) + b * (5 * f);
      C = _ >>> 13, _ &= 8191, _ += E * (5 * u) + m * (5 * h) + v * (5 * d) + A * (5 * l) + S * (5 * c), C += _ >>> 13, _ &= 8191;
      let P = C + k * c + H * a + V * (5 * w) + O * (5 * p) + b * (5 * g);
      C = P >>> 13, P &= 8191, P += E * (5 * f) + m * (5 * u) + v * (5 * h) + A * (5 * d) + S * (5 * l), C += P >>> 13, P &= 8191;
      let x = C + k * l + H * c + V * a + O * (5 * w) + b * (5 * p);
      C = x >>> 13, x &= 8191, x += E * (5 * g) + m * (5 * f) + v * (5 * u) + A * (5 * h) + S * (5 * d), C += x >>> 13, x &= 8191;
      let z = C + k * d + H * l + V * c + O * a + b * (5 * w);
      C = z >>> 13, z &= 8191, z += E * (5 * p) + m * (5 * g) + v * (5 * f) + A * (5 * u) + S * (5 * h), C += z >>> 13, z &= 8191;
      let R = C + k * h + H * d + V * l + O * c + b * a;
      C = R >>> 13, R &= 8191, R += E * (5 * w) + m * (5 * p) + v * (5 * g) + A * (5 * f) + S * (5 * u), C += R >>> 13, R &= 8191;
      let B = C + k * u + H * h + V * d + O * l + b * c;
      C = B >>> 13, B &= 8191, B += E * a + m * (5 * w) + v * (5 * p) + A * (5 * g) + S * (5 * f), C += B >>> 13, B &= 8191;
      let Y = C + k * f + H * u + V * h + O * d + b * l;
      C = Y >>> 13, Y &= 8191, Y += E * c + m * a + v * (5 * w) + A * (5 * p) + S * (5 * g), C += Y >>> 13, Y &= 8191;
      let X = C + k * g + H * f + V * u + O * h + b * d;
      C = X >>> 13, X &= 8191, X += E * l + m * c + v * a + A * (5 * w) + S * (5 * p), C += X >>> 13, X &= 8191;
      let de = C + k * p + H * g + V * f + O * u + b * h;
      C = de >>> 13, de &= 8191, de += E * d + m * l + v * c + A * a + S * (5 * w), C += de >>> 13, de &= 8191;
      let te = C + k * w + H * p + V * g + O * f + b * u;
      C = te >>> 13, te &= 8191, te += E * h + m * d + v * l + A * c + S * a, C += te >>> 13, te &= 8191, C = (C << 2) + C | 0, C = C + _ | 0, _ = C & 8191, C = C >>> 13, P += C, i[0] = _, i[1] = P, i[2] = x, i[3] = z, i[4] = R, i[5] = B, i[6] = Y, i[7] = X, i[8] = de, i[9] = te;
    }
    finalize() {
      const { h: e, pad: s } = this, n = new Uint16Array(10);
      let r = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
      e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, n[0] = e[0] + 5, r = n[0] >>> 13, n[0] &= 8191;
      for (let a = 1; a < 10; a++) n[a] = e[a] + r, r = n[a] >>> 13, n[a] &= 8191;
      n[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let a = 0; a < 10; a++) n[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = e[a] & i | n[a];
      e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
      let o = e[0] + s[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
      Wr(n);
    }
    update(e) {
      Md(this), e = Dc(e), St(e);
      const { buffer: s, blockLen: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(n - this.pos, r - i);
        if (o === n) {
          for (; n <= r - i; i += n) this.process(e, i);
          continue;
        }
        s.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(s, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      Wr(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      Md(this), S0(e, this), this.finished = true;
      const { buffer: s, h: n } = this;
      let { pos: r } = this;
      if (r) {
        for (s[r++] = 1; r < 16; r++) s[r] = 0;
        this.process(s, 0, true);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) e[i++] = n[o] >>> 0, e[i++] = n[o] >>> 8;
      return e;
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
  };
  function H0(t) {
    const e = (n, r) => t(r).update(Dc(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const V0 = H0((t) => new W0(t));
  function K0(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], h = e[1], u = e[2], f = e[3], g = e[4], p = e[5], w = e[6], T = e[7], I = r, N = s[0], $ = s[1], U = s[2], L = o, M = a, j = c, k = l, H = d, V = h, O = u, b = f, E = g, m = p, v = w, A = T, S = I, C = N, _ = $, P = U;
    for (let z = 0; z < i; z += 2) L = L + H | 0, S = Ie(S ^ L, 16), E = E + S | 0, H = Ie(H ^ E, 12), L = L + H | 0, S = Ie(S ^ L, 8), E = E + S | 0, H = Ie(H ^ E, 7), M = M + V | 0, C = Ie(C ^ M, 16), m = m + C | 0, V = Ie(V ^ m, 12), M = M + V | 0, C = Ie(C ^ M, 8), m = m + C | 0, V = Ie(V ^ m, 7), j = j + O | 0, _ = Ie(_ ^ j, 16), v = v + _ | 0, O = Ie(O ^ v, 12), j = j + O | 0, _ = Ie(_ ^ j, 8), v = v + _ | 0, O = Ie(O ^ v, 7), k = k + b | 0, P = Ie(P ^ k, 16), A = A + P | 0, b = Ie(b ^ A, 12), k = k + b | 0, P = Ie(P ^ k, 8), A = A + P | 0, b = Ie(b ^ A, 7), L = L + V | 0, P = Ie(P ^ L, 16), v = v + P | 0, V = Ie(V ^ v, 12), L = L + V | 0, P = Ie(P ^ L, 8), v = v + P | 0, V = Ie(V ^ v, 7), M = M + O | 0, S = Ie(S ^ M, 16), A = A + S | 0, O = Ie(O ^ A, 12), M = M + O | 0, S = Ie(S ^ M, 8), A = A + S | 0, O = Ie(O ^ A, 7), j = j + b | 0, C = Ie(C ^ j, 16), E = E + C | 0, b = Ie(b ^ E, 12), j = j + b | 0, C = Ie(C ^ j, 8), E = E + C | 0, b = Ie(b ^ E, 7), k = k + H | 0, _ = Ie(_ ^ k, 16), m = m + _ | 0, H = Ie(H ^ m, 12), k = k + H | 0, _ = Ie(_ ^ k, 8), m = m + _ | 0, H = Ie(H ^ m, 7);
    let x = 0;
    n[x++] = o + L | 0, n[x++] = a + M | 0, n[x++] = c + j | 0, n[x++] = l + k | 0, n[x++] = d + H | 0, n[x++] = h + V | 0, n[x++] = u + O | 0, n[x++] = f + b | 0, n[x++] = g + E | 0, n[x++] = p + m | 0, n[x++] = w + v | 0, n[x++] = T + A | 0, n[x++] = I + S | 0, n[x++] = N + C | 0, n[x++] = $ + _ | 0, n[x++] = U + P | 0;
  }
  const z0 = q0(K0, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), G0 = new Uint8Array(16), Wd = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(G0.subarray(s));
  }, Y0 = new Uint8Array(32);
  function Hd(t, e, s, n, r) {
    const i = t(e, s, Y0), o = V0.create(i);
    r && Wd(o, r), Wd(o, n);
    const a = R0(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return Wr(i, a), c;
  }
  const Z0 = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = Fd(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = Hd(t, e, s, a, n);
      return i.set(c, o), Wr(c), i;
    },
    decrypt(r, i) {
      i = Fd(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = Hd(t, e, s, o, n);
      if (!P0(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), Wr(c), i;
    }
  }), Vf = $0({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, Z0(z0));
  let Kf = class extends pa {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, fa(e);
      const n = ps(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), Qt(i);
    }
    update(e) {
      return $n(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      $n(this), gs(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: s, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
      return e = e, e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  };
  const ga = (t, e, s) => new Kf(t, e).update(s).digest();
  ga.create = (t, e) => new Kf(t, e);
  function J0(t, e, s) {
    return fa(t), s === void 0 && (s = new Uint8Array(t.outputLen)), ga(t, ps(s), ps(e));
  }
  const qa = Uint8Array.from([
    0
  ]), Vd = Uint8Array.of();
  function X0(t, e, s, n = 32) {
    fa(t), Xs(n);
    const r = t.outputLen;
    if (n > 255 * r) throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(n / r);
    s === void 0 && (s = Vd);
    const o = new Uint8Array(i * r), a = ga.create(t, e), c = a._cloneInto(), l = new Uint8Array(a.outputLen);
    for (let d = 0; d < i; d++) qa[0] = d + 1, c.update(d === 0 ? Vd : l).update(s).update(qa).digestInto(l), o.set(l, r * d), a._cloneInto(c);
    return a.destroy(), c.destroy(), Qt(l, qa), o.slice(0, n);
  }
  const Q0 = (t, e, s, n, r) => X0(t, J0(t, e, s), n, r), ma = jf, Rl = BigInt(0), Mc = BigInt(1);
  function Go(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function Zn(t, e, s = "") {
    const n = ua(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function po(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function zf(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Rl : BigInt("0x" + t);
  }
  function wa(t) {
    return zf(Dr(t));
  }
  function Yo(t) {
    return gs(t), zf(Dr(Uint8Array.from(t).reverse()));
  }
  function Ul(t, e) {
    return zo(t.toString(16).padStart(e * 2, "0"));
  }
  function Dl(t, e) {
    return Ul(t, e).reverse();
  }
  function pt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = zo(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (ua(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const Wa = (t) => typeof t == "bigint" && Rl <= t;
  function eb(t, e, s) {
    return Wa(t) && Wa(e) && Wa(s) && e <= t && t < s;
  }
  function Fc(t, e, s, n) {
    if (!eb(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function Gf(t) {
    let e;
    for (e = 0; t > Rl; t >>= Mc, e += 1) ;
    return e;
  }
  const Zi = (t) => (Mc << BigInt(t)) - Mc;
  function tb(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    const n = (u) => new Uint8Array(u), r = (u) => Uint8Array.of(u);
    let i = n(t), o = n(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...u) => s(o, i, ...u), d = (u = n(0)) => {
      o = l(r(0), u), i = l(), u.length !== 0 && (o = l(r(1), u), i = l());
    }, h = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const f = [];
      for (; u < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), u += i.length;
      }
      return In(...f);
    };
    return (u, f) => {
      c(), d(u);
      let g;
      for (; !(g = f(h())); ) d();
      return c(), g;
    };
  }
  function ya(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function Kd(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const xt = BigInt(0), bt = BigInt(1), Jn = BigInt(2), Yf = BigInt(3), Zf = BigInt(4), Jf = BigInt(5), sb = BigInt(7), Xf = BigInt(8), nb = BigInt(9), Qf = BigInt(16);
  function Bt(t, e) {
    const s = t % e;
    return s >= xt ? s : e + s;
  }
  function is(t, e, s) {
    let n = t;
    for (; e-- > xt; ) n *= n, n %= s;
    return n;
  }
  function zd(t, e) {
    if (t === xt) throw new Error("invert: expected non-zero number");
    if (e <= xt) throw new Error("invert: expected positive modulus, got " + e);
    let s = Bt(t, e), n = e, r = xt, i = bt;
    for (; s !== xt; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== bt) throw new Error("invert: does not exist");
    return Bt(r, e);
  }
  function Ll(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function ep(t, e) {
    const s = (t.ORDER + bt) / Zf, n = t.pow(e, s);
    return Ll(t, n, e), n;
  }
  function rb(t, e) {
    const s = (t.ORDER - Jf) / Xf, n = t.mul(e, Jn), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, Jn), r), a = t.mul(i, t.sub(o, t.ONE));
    return Ll(t, a, e), a;
  }
  function ib(t) {
    const e = Dn(t), s = tp(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + sb) / Qf;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const h = a.mul(l, r), u = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(h), c);
      l = a.cmov(l, d, f), d = a.cmov(u, h, g);
      const p = a.eql(a.sqr(d), c), w = a.cmov(l, d, p);
      return Ll(a, w, c), w;
    };
  }
  function tp(t) {
    if (t < Yf) throw new Error("sqrt is not defined for small field");
    let e = t - bt, s = 0;
    for (; e % Jn === xt; ) e /= Jn, s++;
    let n = Jn;
    const r = Dn(t);
    for (; Gd(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return ep;
    let i = r.pow(n, e);
    const o = (e + bt) / Jn;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (Gd(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), h = a.pow(c, e), u = a.pow(c, o);
      for (; !a.eql(h, a.ONE); ) {
        if (a.is0(h)) return a.ZERO;
        let f = 1, g = a.sqr(h);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = bt << BigInt(l - f - 1), w = a.pow(d, p);
        l = f, d = a.sqr(w), h = a.mul(h, d), u = a.mul(u, w);
      }
      return u;
    };
  }
  function ob(t) {
    return t % Zf === Yf ? ep : t % Xf === Jf ? rb : t % Qf === nb ? ib(t) : tp(t);
  }
  const ab = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function cb(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = ab.reduce((n, r) => (n[r] = "function", n), e);
    return ya(t, s), t;
  }
  function lb(t, e, s) {
    if (s < xt) throw new Error("invalid exponent, negatives unsupported");
    if (s === xt) return t.ONE;
    if (s === bt) return e;
    let n = t.ONE, r = e;
    for (; s > xt; ) s & bt && (n = t.mul(n, r)), r = t.sqr(r), s >>= bt;
    return n;
  }
  function sp(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function Gd(t, e) {
    const s = (t.ORDER - bt) / Jn, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function np(t, e) {
    e !== void 0 && Xs(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Dn(t, e, s = false, n = {}) {
    if (t <= xt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const u = e;
      u.BITS && (r = u.BITS), u.sqrt && (i = u.sqrt), typeof u.isLE == "boolean" && (s = u.isLE), typeof u.modFromBytes == "boolean" && (o = u.modFromBytes), a = u.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = np(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const h = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: Zi(c),
      ZERO: xt,
      ONE: bt,
      allowedLengths: a,
      create: (u) => Bt(u, t),
      isValid: (u) => {
        if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
        return xt <= u && u < t;
      },
      is0: (u) => u === xt,
      isValidNot0: (u) => !h.is0(u) && h.isValid(u),
      isOdd: (u) => (u & bt) === bt,
      neg: (u) => Bt(-u, t),
      eql: (u, f) => u === f,
      sqr: (u) => Bt(u * u, t),
      add: (u, f) => Bt(u + f, t),
      sub: (u, f) => Bt(u - f, t),
      mul: (u, f) => Bt(u * f, t),
      pow: (u, f) => lb(h, u, f),
      div: (u, f) => Bt(u * zd(f, t), t),
      sqrN: (u) => u * u,
      addN: (u, f) => u + f,
      subN: (u, f) => u - f,
      mulN: (u, f) => u * f,
      inv: (u) => zd(u, t),
      sqrt: i || ((u) => (d || (d = ob(t)), d(h, u))),
      toBytes: (u) => s ? Dl(u, l) : Ul(u, l),
      fromBytes: (u, f = true) => {
        if (a) {
          if (!a.includes(u.length) || u.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
          const p = new Uint8Array(l);
          p.set(u, s ? 0 : p.length - u.length), u = p;
        }
        if (u.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + u.length);
        let g = s ? Yo(u) : wa(u);
        if (o && (g = Bt(g, t)), !f && !h.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (u) => sp(h, u),
      cmov: (u, f, g) => g ? f : u
    });
    return Object.freeze(h);
  }
  function rp(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function ip(t) {
    const e = rp(t);
    return e + Math.ceil(e / 2);
  }
  function db(t, e, s = false) {
    const n = t.length, r = rp(e), i = ip(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? Yo(t) : wa(t), a = Bt(o, e - bt) + bt;
    return s ? Dl(a, r) : Ul(a, r);
  }
  const Hr = BigInt(0), Xn = BigInt(1);
  function Zo(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function Ha(t, e) {
    const s = sp(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function op(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function Va(t, e) {
    op(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = Zi(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Yd(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += Xn);
    const l = e * n, d = l + Math.abs(a) - 1, h = a === 0, u = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: h,
      isNeg: u,
      isNegF: f,
      offsetF: l
    };
  }
  function hb(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function ub(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const Ka = /* @__PURE__ */ new WeakMap(), ap = /* @__PURE__ */ new WeakMap();
  function za(t) {
    return ap.get(t) || 1;
  }
  function Zd(t) {
    if (t !== Hr) throw new Error("invalid wNAF");
  }
  let fb = class {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > Hr; ) s & Xn && (n = n.add(r)), r = r.double(), s >>= Xn;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = Va(s, this.bits), i = [];
      let o = e, a = o;
      for (let c = 0; c < n; c++) {
        a = o, i.push(a);
        for (let l = 1; l < r; l++) a = a.add(o), i.push(a);
        o = a.double();
      }
      return i;
    }
    wNAF(e, s, n) {
      if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
      let r = this.ZERO, i = this.BASE;
      const o = Va(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: h, isNegF: u, offsetF: f } = Yd(n, a, o);
        n = c, d ? i = i.add(Zo(u, s[f])) : r = r.add(Zo(h, s[l]));
      }
      return Zd(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = Va(e, this.bits);
      for (let o = 0; o < i.windows && n !== Hr; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = Yd(n, o, i);
        if (n = a, !l) {
          const h = s[c];
          r = r.add(d ? h.negate() : h);
        }
      }
      return Zd(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = Ka.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), Ka.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = za(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = za(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      op(s, this.bits), ap.set(e, s), Ka.delete(e);
    }
    hasCache(e) {
      return za(e) !== 1;
    }
  };
  function pb(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > Hr || n > Hr; ) s & Xn && (i = i.add(r)), n & Xn && (o = o.add(r)), r = r.double(), s >>= Xn, n >>= Xn;
    return {
      p1: i,
      p2: o
    };
  }
  function gb(t, e, s, n) {
    hb(s, t), ub(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = Gf(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = Zi(c), d = new Array(Number(l) + 1).fill(o), h = Math.floor((e.BITS - 1) / c) * c;
    let u = o;
    for (let f = h; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const w = n[p], T = Number(w >> BigInt(f) & l);
        d[T] = d[T].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, w = o; p > 0; p--) w = w.add(d[p]), g = g.add(w);
      if (u = u.add(g), f !== 0) for (let p = 0; p < c; p++) u = u.double();
    }
    return u;
  }
  function Jd(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return cb(e), e;
    } else return Dn(t, {
      isLE: s
    });
  }
  function mb(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > Hr)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = Jd(e.p, s.Fp, n), i = Jd(e.n, s.Fn, n), o = [
      "Gx",
      "Gy",
      "a",
      "b"
    ];
    for (const a of o) if (!r.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return e = Object.freeze(Object.assign({}, e)), {
      CURVE: e,
      Fp: r,
      Fn: i
    };
  }
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), $f("HashToScalar-");
  const ri = BigInt(0), Er = BigInt(1), go = BigInt(2);
  function wb(t) {
    return ya(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function yb(t) {
    const e = wb(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || mr, l = a ? 255 : 448, d = a ? 32 : 56, h = BigInt(a ? 9 : 5), u = BigInt(a ? 121665 : 39081), f = a ? go ** BigInt(254) : go ** BigInt(447), g = a ? BigInt(8) * go ** BigInt(251) - Er : BigInt(4) * go ** BigInt(445) - Er, p = f + g + Er, w = (O) => Bt(O, s), T = I(h);
    function I(O) {
      return Dl(w(O), d);
    }
    function N(O) {
      const b = pt("u coordinate", O, d);
      return a && (b[31] &= 127), w(Yo(b));
    }
    function $(O) {
      return Yo(r(pt("scalar", O, d)));
    }
    function U(O, b) {
      const E = j(N(b), $(O));
      if (E === ri) throw new Error("invalid private or public key received");
      return I(E);
    }
    function L(O) {
      return U(O, T);
    }
    function M(O, b, E) {
      const m = w(O * (b - E));
      return b = w(b - m), E = w(E + m), {
        x_2: b,
        x_3: E
      };
    }
    function j(O, b) {
      Fc("u", O, ri, s), Fc("scalar", b, f, p);
      const E = b, m = O;
      let v = Er, A = ri, S = O, C = Er, _ = ri;
      for (let x = BigInt(l - 1); x >= ri; x--) {
        const z = E >> x & Er;
        _ ^= z, { x_2: v, x_3: S } = M(_, v, S), { x_2: A, x_3: C } = M(_, A, C), _ = z;
        const R = v + A, B = w(R * R), Y = v - A, X = w(Y * Y), de = B - X, te = S + C, ae = S - C, Oe = w(ae * R), je = w(te * Y), it = Oe + je, Ct = Oe - je;
        S = w(it * it), C = w(m * w(Ct * Ct)), v = w(B * X), A = w(de * (B + w(u * de)));
      }
      ({ x_2: v, x_3: S } = M(_, v, S)), { x_2: A, x_3: C } = M(_, A, C);
      const P = i(A);
      return w(v * P);
    }
    const k = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, H = (O = c(d)) => (gs(O, k.seed), O);
    function V(O) {
      const b = H(O);
      return {
        secretKey: b,
        publicKey: L(b)
      };
    }
    return {
      keygen: V,
      getSharedSecret: (O, b) => U(O, b),
      getPublicKey: (O) => L(O),
      scalarMult: U,
      scalarMultBase: L,
      utils: {
        randomSecretKey: H,
        randomPrivateKey: H
      },
      GuBytes: T.slice(),
      lengths: k
    };
  }
  const bb = BigInt(1), Xd = BigInt(2), Eb = BigInt(3), vb = BigInt(5);
  BigInt(8);
  const cp = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), Cb = {
    p: cp,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function Ab(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = cp, o = t * t % i * t % i, a = is(o, Xd, i) * o % i, c = is(a, bb, i) * t % i, l = is(c, vb, i) * c % i, d = is(l, e, i) * l % i, h = is(d, s, i) * d % i, u = is(h, n, i) * h % i, f = is(u, r, i) * u % i, g = is(f, r, i) * u % i, p = is(g, e, i) * l % i;
    return {
      pow_p_5_8: is(p, Xd, i) * t % i,
      b2: o
    };
  }
  function Ib(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const Nb = Dn(Cb.p, {
    isLE: true
  }), jc = (() => {
    const t = Nb.ORDER;
    return yb({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = Ab(e);
        return Bt(is(s, Eb, t) * n, t);
      },
      adjustScalarBytes: Ib
    });
  })(), Qd = (t, e) => (t + (t >= 0 ? e : -e) / lp) / e;
  function _b(t, e, s) {
    const [[n, r], [i, o]] = e, a = Qd(o * t, s), c = Qd(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const h = l < zs, u = d < zs;
    h && (l = -l), u && (d = -d);
    const f = Zi(Math.ceil(Gf(s) / 2)) + Lr;
    if (l < zs || l >= f || d < zs || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: h,
      k1: l,
      k2neg: u,
      k2: d
    };
  }
  function qc(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function Ga(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return Go(s.lowS, "lowS"), Go(s.prehash, "prehash"), s.format !== void 0 && qc(s.format), s;
  }
  let Sb = class extends Error {
    constructor(e = "") {
      super(e);
    }
  };
  const qs = {
    Err: Sb,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = qs;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = po(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? po(r.length / 2 | 128) : "";
        return po(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = qs;
        let n = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[n++] !== t) throw new s("tlv.decode: wrong tlv");
        const r = e[n++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          const l = e.subarray(n, n + c);
          if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (n += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(n, n + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(n + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = qs;
        if (t < zs) throw new e("integer: negative integers are not allowed");
        let s = po(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = qs;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return wa(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = qs, r = pt("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = qs, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  }, zs = BigInt(0), Lr = BigInt(1), lp = BigInt(2), mo = BigInt(3), Tb = BigInt(4);
  function kr(t, e) {
    const { BYTES: s } = t;
    let n;
    if (typeof e == "bigint") n = e;
    else {
      let r = pt("private key", e);
      try {
        n = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
    return n;
  }
  function Ob(t, e = {}) {
    const s = mb("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    ya(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo: c } = e;
    if (c && (!n.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const l = hp(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function h(O, b, E) {
      const { x: m, y: v } = b.toAffine(), A = n.toBytes(m);
      if (Go(E, "isCompressed"), E) {
        d();
        const S = !n.isOdd(v);
        return In(dp(S), A);
      } else return In(Uint8Array.of(4), A, n.toBytes(v));
    }
    function u(O) {
      Zn(O, void 0, "Point");
      const { publicKey: b, publicKeyUncompressed: E } = l, m = O.length, v = O[0], A = O.subarray(1);
      if (m === b && (v === 2 || v === 3)) {
        const S = n.fromBytes(A);
        if (!n.isValid(S)) throw new Error("bad point: is not on curve, wrong x");
        const C = p(S);
        let _;
        try {
          _ = n.sqrt(C);
        } catch (x) {
          const z = x instanceof Error ? ": " + x.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + z);
        }
        d();
        const P = n.isOdd(_);
        return (v & 1) === 1 !== P && (_ = n.neg(_)), {
          x: S,
          y: _
        };
      } else if (m === E && v === 4) {
        const S = n.BYTES, C = n.fromBytes(A.subarray(0, S)), _ = n.fromBytes(A.subarray(S, S * 2));
        if (!w(C, _)) throw new Error("bad point: is not on curve");
        return {
          x: C,
          y: _
        };
      } else throw new Error(`bad point: got length ${m}, expected compressed=${b} or uncompressed=${E}`);
    }
    const f = e.toBytes || h, g = e.fromBytes || u;
    function p(O) {
      const b = n.sqr(O), E = n.mul(b, O);
      return n.add(n.add(E, n.mul(O, i.a)), i.b);
    }
    function w(O, b) {
      const E = n.sqr(b), m = p(O);
      return n.eql(E, m);
    }
    if (!w(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const T = n.mul(n.pow(i.a, mo), Tb), I = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(T, I))) throw new Error("bad curve params: a or b");
    function N(O, b, E = false) {
      if (!n.isValid(b) || E && n.is0(b)) throw new Error(`bad point coordinate ${O}`);
      return b;
    }
    function $(O) {
      if (!(O instanceof k)) throw new Error("ProjectivePoint expected");
    }
    function U(O) {
      if (!c || !c.basises) throw new Error("no endo");
      return _b(O, c.basises, r.ORDER);
    }
    const L = Kd((O, b) => {
      const { X: E, Y: m, Z: v } = O;
      if (n.eql(v, n.ONE)) return {
        x: E,
        y: m
      };
      const A = O.is0();
      b == null && (b = A ? n.ONE : n.inv(v));
      const S = n.mul(E, b), C = n.mul(m, b), _ = n.mul(v, b);
      if (A) return {
        x: n.ZERO,
        y: n.ZERO
      };
      if (!n.eql(_, n.ONE)) throw new Error("invZ was invalid");
      return {
        x: S,
        y: C
      };
    }), M = Kd((O) => {
      if (O.is0()) {
        if (e.allowInfinityPoint && !n.is0(O.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: b, y: E } = O.toAffine();
      if (!n.isValid(b) || !n.isValid(E)) throw new Error("bad point: x or y not field elements");
      if (!w(b, E)) throw new Error("bad point: equation left != right");
      if (!O.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function j(O, b, E, m, v) {
      return E = new k(n.mul(E.X, O), E.Y, E.Z), b = Zo(m, b), E = Zo(v, E), b.add(E);
    }
    class k {
      constructor(b, E, m) {
        this.X = N("x", b), this.Y = N("y", E, true), this.Z = N("z", m), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(b) {
        const { x: E, y: m } = b || {};
        if (!b || !n.isValid(E) || !n.isValid(m)) throw new Error("invalid affine point");
        if (b instanceof k) throw new Error("projective point not allowed");
        return n.is0(E) && n.is0(m) ? k.ZERO : new k(E, m, n.ONE);
      }
      static fromBytes(b) {
        const E = k.fromAffine(g(Zn(b, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(b) {
        return k.fromBytes(pt("pointHex", b));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(b = 8, E = true) {
        return V.createCache(this, b), E || this.multiply(mo), this;
      }
      assertValidity() {
        M(this);
      }
      hasEvenY() {
        const { y: b } = this.toAffine();
        if (!n.isOdd) throw new Error("Field doesn't support isOdd");
        return !n.isOdd(b);
      }
      equals(b) {
        $(b);
        const { X: E, Y: m, Z: v } = this, { X: A, Y: S, Z: C } = b, _ = n.eql(n.mul(E, C), n.mul(A, v)), P = n.eql(n.mul(m, C), n.mul(S, v));
        return _ && P;
      }
      negate() {
        return new k(this.X, n.neg(this.Y), this.Z);
      }
      double() {
        const { a: b, b: E } = i, m = n.mul(E, mo), { X: v, Y: A, Z: S } = this;
        let C = n.ZERO, _ = n.ZERO, P = n.ZERO, x = n.mul(v, v), z = n.mul(A, A), R = n.mul(S, S), B = n.mul(v, A);
        return B = n.add(B, B), P = n.mul(v, S), P = n.add(P, P), C = n.mul(b, P), _ = n.mul(m, R), _ = n.add(C, _), C = n.sub(z, _), _ = n.add(z, _), _ = n.mul(C, _), C = n.mul(B, C), P = n.mul(m, P), R = n.mul(b, R), B = n.sub(x, R), B = n.mul(b, B), B = n.add(B, P), P = n.add(x, x), x = n.add(P, x), x = n.add(x, R), x = n.mul(x, B), _ = n.add(_, x), R = n.mul(A, S), R = n.add(R, R), x = n.mul(R, B), C = n.sub(C, x), P = n.mul(R, z), P = n.add(P, P), P = n.add(P, P), new k(C, _, P);
      }
      add(b) {
        $(b);
        const { X: E, Y: m, Z: v } = this, { X: A, Y: S, Z: C } = b;
        let _ = n.ZERO, P = n.ZERO, x = n.ZERO;
        const z = i.a, R = n.mul(i.b, mo);
        let B = n.mul(E, A), Y = n.mul(m, S), X = n.mul(v, C), de = n.add(E, m), te = n.add(A, S);
        de = n.mul(de, te), te = n.add(B, Y), de = n.sub(de, te), te = n.add(E, v);
        let ae = n.add(A, C);
        return te = n.mul(te, ae), ae = n.add(B, X), te = n.sub(te, ae), ae = n.add(m, v), _ = n.add(S, C), ae = n.mul(ae, _), _ = n.add(Y, X), ae = n.sub(ae, _), x = n.mul(z, te), _ = n.mul(R, X), x = n.add(_, x), _ = n.sub(Y, x), x = n.add(Y, x), P = n.mul(_, x), Y = n.add(B, B), Y = n.add(Y, B), X = n.mul(z, X), te = n.mul(R, te), Y = n.add(Y, X), X = n.sub(B, X), X = n.mul(z, X), te = n.add(te, X), B = n.mul(Y, te), P = n.add(P, B), B = n.mul(ae, te), _ = n.mul(de, _), _ = n.sub(_, B), B = n.mul(de, Y), x = n.mul(ae, x), x = n.add(x, B), new k(_, P, x);
      }
      subtract(b) {
        return this.add(b.negate());
      }
      is0() {
        return this.equals(k.ZERO);
      }
      multiply(b) {
        const { endo: E } = e;
        if (!r.isValidNot0(b)) throw new Error("invalid scalar: out of range");
        let m, v;
        const A = (S) => V.cached(this, S, (C) => Ha(k, C));
        if (E) {
          const { k1neg: S, k1: C, k2neg: _, k2: P } = U(b), { p: x, f: z } = A(C), { p: R, f: B } = A(P);
          v = z.add(B), m = j(E.beta, x, R, S, _);
        } else {
          const { p: S, f: C } = A(b);
          m = S, v = C;
        }
        return Ha(k, [
          m,
          v
        ])[0];
      }
      multiplyUnsafe(b) {
        const { endo: E } = e, m = this;
        if (!r.isValid(b)) throw new Error("invalid scalar: out of range");
        if (b === zs || m.is0()) return k.ZERO;
        if (b === Lr) return m;
        if (V.hasCache(this)) return this.multiply(b);
        if (E) {
          const { k1neg: v, k1: A, k2neg: S, k2: C } = U(b), { p1: _, p2: P } = pb(k, m, A, C);
          return j(E.beta, _, P, v, S);
        } else return V.unsafe(m, b);
      }
      multiplyAndAddUnsafe(b, E, m) {
        const v = this.multiplyUnsafe(E).add(b.multiplyUnsafe(m));
        return v.is0() ? void 0 : v;
      }
      toAffine(b) {
        return L(this, b);
      }
      isTorsionFree() {
        const { isTorsionFree: b } = e;
        return o === Lr ? true : b ? b(k, this) : V.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: b } = e;
        return o === Lr ? this : b ? b(k, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(b = true) {
        return Go(b, "isCompressed"), this.assertValidity(), f(k, this, b);
      }
      toHex(b = true) {
        return Dr(this.toBytes(b));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
      get px() {
        return this.X;
      }
      get py() {
        return this.X;
      }
      get pz() {
        return this.Z;
      }
      toRawBytes(b = true) {
        return this.toBytes(b);
      }
      _setWindowSize(b) {
        this.precompute(b);
      }
      static normalizeZ(b) {
        return Ha(k, b);
      }
      static msm(b, E) {
        return gb(k, r, b, E);
      }
      static fromPrivateKey(b) {
        return k.BASE.multiply(kr(r, b));
      }
    }
    k.BASE = new k(i.Gx, i.Gy, n.ONE), k.ZERO = new k(n.ZERO, n.ONE, n.ZERO), k.Fp = n, k.Fn = r;
    const H = r.BITS, V = new fb(k, e.endo ? Math.ceil(H / 2) : H);
    return k.BASE.precompute(8), k;
  }
  function dp(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function hp(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function kb(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || mr, r = Object.assign(hp(t.Fp, s), {
      seed: ip(s.ORDER)
    });
    function i(u) {
      try {
        return !!kr(s, u);
      } catch {
        return false;
      }
    }
    function o(u, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const w = u.length;
        return f === true && w !== g || f === false && w !== p ? false : !!t.fromBytes(u);
      } catch {
        return false;
      }
    }
    function a(u = n(r.seed)) {
      return db(Zn(u, r.seed, "seed"), s.ORDER);
    }
    function c(u, f = true) {
      return t.BASE.multiply(kr(s, u)).toBytes(f);
    }
    function l(u) {
      const f = a(u);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(u) {
      if (typeof u == "bigint") return false;
      if (u instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (s.allowedLengths || f === g) return;
      const w = pt("key", u).length;
      return w === g || w === p;
    }
    function h(u, f, g = true) {
      if (d(u) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = kr(s, u);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: h,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (u) => kr(s, u),
        precompute(u = 8, f = t.BASE) {
          return f.precompute(u, false);
        }
      },
      lengths: r
    });
  }
  function xb(t, e, s = {}) {
    fa(e), ya(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || mr, r = s.hmac || ((E, ...m) => ga(e, E, In(...m))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: h, utils: u, lengths: f } = kb(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function w(E) {
      const m = a >> Lr;
      return E > m;
    }
    function T(E, m) {
      if (!o.isValidNot0(m)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return m;
    }
    function I(E, m) {
      qc(m);
      const v = f.signature, A = m === "compact" ? v : m === "recovered" ? v + 1 : void 0;
      return Zn(E, A, `${m} signature`);
    }
    class N {
      constructor(m, v, A) {
        this.r = T("r", m), this.s = T("s", v), A != null && (this.recovery = A), Object.freeze(this);
      }
      static fromBytes(m, v = p) {
        I(m, v);
        let A;
        if (v === "der") {
          const { r: P, s: x } = qs.toSig(Zn(m));
          return new N(P, x);
        }
        v === "recovered" && (A = m[0], v = "compact", m = m.subarray(1));
        const S = o.BYTES, C = m.subarray(0, S), _ = m.subarray(S, S * 2);
        return new N(o.fromBytes(C), o.fromBytes(_), A);
      }
      static fromHex(m, v) {
        return this.fromBytes(zo(m), v);
      }
      addRecoveryBit(m) {
        return new N(this.r, this.s, m);
      }
      recoverPublicKey(m) {
        const v = i.ORDER, { r: A, s: S, recovery: C } = this;
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        if (a * lp < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const _ = C === 2 || C === 3 ? A + a : A;
        if (!i.isValid(_)) throw new Error("recovery id 2 or 3 invalid");
        const P = i.toBytes(_), x = t.fromBytes(In(dp((C & 1) === 0), P)), z = o.inv(_), R = U(pt("msgHash", m)), B = o.create(-R * z), Y = o.create(S * z), X = t.BASE.multiplyUnsafe(B).add(x.multiplyUnsafe(Y));
        if (X.is0()) throw new Error("point at infinify");
        return X.assertValidity(), X;
      }
      hasHighS() {
        return w(this.s);
      }
      toBytes(m = p) {
        if (qc(m), m === "der") return zo(qs.hexFromSig(this));
        const v = o.toBytes(this.r), A = o.toBytes(this.s);
        if (m === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return In(Uint8Array.of(this.recovery), v, A);
        }
        return In(v, A);
      }
      toHex(m) {
        return Dr(this.toBytes(m));
      }
      assertValidity() {
      }
      static fromCompact(m) {
        return N.fromBytes(pt("sig", m), "compact");
      }
      static fromDER(m) {
        return N.fromBytes(pt("sig", m), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new N(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return Dr(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return Dr(this.toBytes("compact"));
      }
    }
    const $ = s.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const m = wa(E), v = E.length * 8 - c;
      return v > 0 ? m >> BigInt(v) : m;
    }, U = s.bits2int_modN || function(E) {
      return o.create($(E));
    }, L = Zi(c);
    function M(E) {
      return Fc("num < 2^" + c, E, zs, L), o.toBytes(E);
    }
    function j(E, m) {
      return Zn(E, void 0, "message"), m ? Zn(e(E), void 0, "prehashed message") : E;
    }
    function k(E, m, v) {
      if ([
        "recovered",
        "canonical"
      ].some((Y) => Y in v)) throw new Error("sign() legacy options not supported");
      const { lowS: A, prehash: S, extraEntropy: C } = Ga(v, g);
      E = j(E, S);
      const _ = U(E), P = kr(o, m), x = [
        M(P),
        M(_)
      ];
      if (C != null && C !== false) {
        const Y = C === true ? n(f.secretKey) : C;
        x.push(pt("extraEntropy", Y));
      }
      const z = In(...x), R = _;
      function B(Y) {
        const X = $(Y);
        if (!o.isValidNot0(X)) return;
        const de = o.inv(X), te = t.BASE.multiply(X).toAffine(), ae = o.create(te.x);
        if (ae === zs) return;
        const Oe = o.create(de * o.create(R + ae * P));
        if (Oe === zs) return;
        let je = (te.x === ae ? 0 : 2) | Number(te.y & Lr), it = Oe;
        return A && w(Oe) && (it = o.neg(Oe), je ^= 1), new N(ae, it, je);
      }
      return {
        seed: z,
        k2sig: B
      };
    }
    function H(E, m, v = {}) {
      E = pt("message", E);
      const { seed: A, k2sig: S } = k(E, m, v);
      return tb(e.outputLen, o.BYTES, r)(A, S);
    }
    function V(E) {
      let m;
      const v = typeof E == "string" || ua(E), A = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !A) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (A) m = new N(E.r, E.s);
      else if (v) {
        try {
          m = N.fromBytes(pt("sig", E), "der");
        } catch (S) {
          if (!(S instanceof qs.Err)) throw S;
        }
        if (!m) try {
          m = N.fromBytes(pt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return m || false;
    }
    function O(E, m, v, A = {}) {
      const { lowS: S, prehash: C, format: _ } = Ga(A, g);
      if (v = pt("publicKey", v), m = j(pt("message", m), C), "strict" in A) throw new Error("options.strict was renamed to lowS");
      const P = _ === void 0 ? V(E) : N.fromBytes(pt("sig", E), _);
      if (P === false) return false;
      try {
        const x = t.fromBytes(v);
        if (S && P.hasHighS()) return false;
        const { r: z, s: R } = P, B = U(m), Y = o.inv(R), X = o.create(B * Y), de = o.create(z * Y), te = t.BASE.multiplyUnsafe(X).add(x.multiplyUnsafe(de));
        return te.is0() ? false : o.create(te.x) === z;
      } catch {
        return false;
      }
    }
    function b(E, m, v = {}) {
      const { prehash: A } = Ga(v, g);
      return m = j(m, A), N.fromBytes(E, "recovered").recoverPublicKey(m).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: h,
      utils: u,
      lengths: f,
      Point: t,
      sign: H,
      verify: O,
      recoverPublicKey: b,
      Signature: N,
      hash: e
    });
  }
  function Pb(t) {
    const e = {
      a: t.a,
      b: t.b,
      p: t.Fp.ORDER,
      n: t.n,
      h: t.h,
      Gx: t.Gx,
      Gy: t.Gy
    }, s = t.Fp;
    let n = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
    const r = Dn(e.n, {
      BITS: t.nBitLength,
      allowedLengths: n,
      modFromBytes: t.wrapPrivateKey
    }), i = {
      Fp: s,
      Fn: r,
      allowInfinityPoint: t.allowInfinityPoint,
      endo: t.endo,
      isTorsionFree: t.isTorsionFree,
      clearCofactor: t.clearCofactor,
      fromBytes: t.fromBytes,
      toBytes: t.toBytes
    };
    return {
      CURVE: e,
      curveOpts: i
    };
  }
  function $b(t) {
    const { CURVE: e, curveOpts: s } = Pb(t), n = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN
    };
    return {
      CURVE: e,
      curveOpts: s,
      hash: t.hash,
      ecdsaOpts: n
    };
  }
  function Rb(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, np(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function Ub(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = $b(t), i = Ob(e, s), o = xb(i, n, r);
    return Rb(t, o);
  }
  function Wc(t, e) {
    const s = (n) => Ub({
      ...t,
      hash: n
    });
    return {
      ...s(e),
      create: s
    };
  }
  const up = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, fp = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, pp = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, Db = Dn(up.p), Lb = Dn(fp.p), Bb = Dn(pp.p), Mb = Wc({
    ...up,
    Fp: Db,
    lowS: false
  }, jf);
  Wc({
    ...fp,
    Fp: Lb,
    lowS: false
  }, C0), Wc({
    ...pp,
    Fp: Bb,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, v0);
  const Fb = Mb, gp = "base10", Et = "base16", ir = "base64pad", Bl = "base64url", Ji = "utf8", mp = 0, Jr = 1, ba = 2, jb = 0, eh = 1, Si = 12, Ml = 32;
  function qb() {
    const t = jc.utils.randomPrivateKey(), e = jc.getPublicKey(t);
    return {
      privateKey: mt(t, Et),
      publicKey: mt(e, Et)
    };
  }
  function Hc() {
    const t = mr(Ml);
    return mt(t, Et);
  }
  function Wb(t, e) {
    const s = jc.getSharedSecret(kt(t, Et), kt(e, Et)), n = Q0(ma, s, void 0, void 0, Ml);
    return mt(n, Et);
  }
  function Hb(t) {
    const e = ma(kt(t, Et));
    return mt(e, Et);
  }
  function $o(t) {
    const e = ma(kt(t, Ji));
    return mt(e, Et);
  }
  function wp(t) {
    return kt(`${t}`, gp);
  }
  function cr(t) {
    return Number(mt(t, gp));
  }
  function yp(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function bp(t) {
    const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
    return e + "=".repeat(s);
  }
  function Vb(t) {
    const e = wp(typeof t.type < "u" ? t.type : mp);
    if (cr(e) === Jr && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const s = typeof t.senderPublicKey < "u" ? kt(t.senderPublicKey, Et) : void 0, n = typeof t.iv < "u" ? kt(t.iv, Et) : mr(Si), r = kt(t.symKey, Et), i = Vf(r, n).encrypt(kt(t.message, Ji)), o = Ep({
      type: e,
      sealed: i,
      iv: n,
      senderPublicKey: s
    });
    return t.encoding === Bl ? yp(o) : o;
  }
  function Kb(t) {
    const e = kt(t.symKey, Et), { sealed: s, iv: n } = Bi({
      encoded: t.encoded,
      encoding: t.encoding
    }), r = Vf(e, n).decrypt(s);
    if (r === null) throw new Error("Failed to decrypt");
    return mt(r, Ji);
  }
  function zb(t, e) {
    const s = wp(ba), n = mr(Si), r = kt(t, Ji), i = Ep({
      type: s,
      sealed: r,
      iv: n
    });
    return e === Bl ? yp(i) : i;
  }
  function Gb(t, e) {
    const { sealed: s } = Bi({
      encoded: t,
      encoding: e
    });
    return mt(s, Ji);
  }
  function Ep(t) {
    if (cr(t.type) === ba) return mt(Ii([
      t.type,
      t.sealed
    ]), ir);
    if (cr(t.type) === Jr) {
      if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      return mt(Ii([
        t.type,
        t.senderPublicKey,
        t.iv,
        t.sealed
      ]), ir);
    }
    return mt(Ii([
      t.type,
      t.iv,
      t.sealed
    ]), ir);
  }
  function Bi(t) {
    const e = (t.encoding || ir) === Bl ? bp(t.encoded) : t.encoded, s = kt(e, ir), n = s.slice(jb, eh), r = eh;
    if (cr(n) === Jr) {
      const c = r + Ml, l = c + Si, d = s.slice(r, c), h = s.slice(c, l), u = s.slice(l);
      return {
        type: n,
        sealed: u,
        iv: h,
        senderPublicKey: d
      };
    }
    if (cr(n) === ba) {
      const c = s.slice(r), l = mr(Si);
      return {
        type: n,
        sealed: c,
        iv: l
      };
    }
    const i = r + Si, o = s.slice(r, i), a = s.slice(i);
    return {
      type: n,
      sealed: a,
      iv: o
    };
  }
  function Yb(t, e) {
    const s = Bi({
      encoded: t,
      encoding: e == null ? void 0 : e.encoding
    });
    return vp({
      type: cr(s.type),
      senderPublicKey: typeof s.senderPublicKey < "u" ? mt(s.senderPublicKey, Et) : void 0,
      receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    });
  }
  function vp(t) {
    const e = (t == null ? void 0 : t.type) || mp;
    if (e === Jr) {
      if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
      if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
    }
    return {
      type: e,
      senderPublicKey: t == null ? void 0 : t.senderPublicKey,
      receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    };
  }
  function th(t) {
    return t.type === Jr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
  }
  function sh(t) {
    return t.type === ba;
  }
  function Zb(t) {
    const e = ve.from(t.x, "base64"), s = ve.from(t.y, "base64");
    return Ii([
      new Uint8Array([
        4
      ]),
      e,
      s
    ]);
  }
  function Jb(t, e) {
    const [s, n, r] = t.split("."), i = ve.from(bp(r), "base64");
    if (i.length !== 64) throw new Error("Invalid signature length");
    const o = i.slice(0, 32), a = i.slice(32, 64), c = `${s}.${n}`, l = ma(c), d = Zb(e);
    if (!Fb.verify(Ii([
      o,
      a
    ]), l, d)) throw new Error("Invalid signature");
    return Nc(t).payload;
  }
  const Xb = "irn";
  function Jo(t) {
    return (t == null ? void 0 : t.relay) || {
      protocol: Xb
    };
  }
  function xr(t) {
    const e = mm[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e;
  }
  var Qb = Object.defineProperty, e1 = Object.defineProperties, t1 = Object.getOwnPropertyDescriptors, nh = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, n1 = Object.prototype.propertyIsEnumerable, rh = (t, e, s) => e in t ? Qb(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ya = (t, e) => {
    for (var s in e || (e = {})) s1.call(e, s) && rh(t, s, e[s]);
    if (nh) for (var s of nh(e)) n1.call(e, s) && rh(t, s, e[s]);
    return t;
  }, r1 = (t, e) => e1(t, t1(e));
  function i1(t, e = "-") {
    const s = {}, n = "relay" + e;
    return Object.keys(t).forEach((r) => {
      if (r.startsWith(n)) {
        const i = r.replace(n, ""), o = t[r];
        s[i] = o;
      }
    }), s;
  }
  function ih(t) {
    if (!t.includes("wc:")) {
      const l = Sf(t);
      l != null && l.includes("wc:") && (t = l);
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), r = t.substring(e + 1, s).split("@"), i = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(i), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
      protocol: n,
      topic: o1(r[0]),
      version: parseInt(r[1], 10),
      symKey: a.symKey,
      relay: i1(a),
      methods: c,
      expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    };
  }
  function o1(t) {
    return t.startsWith("//") ? t.substring(2) : t;
  }
  function a1(t, e = "-") {
    const s = "relay", n = {};
    return Object.keys(t).forEach((r) => {
      const i = r, o = s + e + i;
      t[i] && (n[o] = t[i]);
    }), n;
  }
  function oh(t) {
    const e = new URLSearchParams(), s = Ya(Ya(r1(Ya({}, a1(t.relay)), {
      symKey: t.symKey
    }), t.expiryTimestamp && {
      expiryTimestamp: t.expiryTimestamp.toString()
    }), t.methods && {
      methods: t.methods.join(",")
    });
    return Object.entries(s).sort(([n], [r]) => n.localeCompare(r)).forEach(([n, r]) => {
      r !== void 0 && e.append(n, String(r));
    }), `${t.protocol}:${t.topic}@${t.version}?${e}`;
  }
  const c1 = {
    INVALID_METHOD: {
      message: "Invalid method.",
      code: 1001
    },
    INVALID_EVENT: {
      message: "Invalid event.",
      code: 1002
    },
    INVALID_UPDATE_REQUEST: {
      message: "Invalid update request.",
      code: 1003
    },
    INVALID_EXTEND_REQUEST: {
      message: "Invalid extend request.",
      code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005
    },
    UNAUTHORIZED_METHOD: {
      message: "Unauthorized method.",
      code: 3001
    },
    UNAUTHORIZED_EVENT: {
      message: "Unauthorized event.",
      code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004
    },
    USER_REJECTED: {
      message: "User rejected.",
      code: 5e3
    },
    USER_REJECTED_CHAINS: {
      message: "User rejected chains.",
      code: 5001
    },
    USER_REJECTED_METHODS: {
      message: "User rejected methods.",
      code: 5002
    },
    USER_REJECTED_EVENTS: {
      message: "User rejected events.",
      code: 5003
    },
    UNSUPPORTED_CHAINS: {
      message: "Unsupported chains.",
      code: 5100
    },
    UNSUPPORTED_METHODS: {
      message: "Unsupported methods.",
      code: 5101
    },
    UNSUPPORTED_EVENTS: {
      message: "Unsupported events.",
      code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
      message: "Unsupported accounts.",
      code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104
    },
    USER_DISCONNECTED: {
      message: "User disconnected.",
      code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
      message: "Unsupported wc_ method.",
      code: 10001
    }
  }, l1 = {
    NOT_INITIALIZED: {
      message: "Not initialized.",
      code: 1
    },
    NO_MATCHING_KEY: {
      message: "No matching key.",
      code: 2
    },
    RESTORE_WILL_OVERRIDE: {
      message: "Restore will override.",
      code: 3
    },
    RESUBSCRIBED: {
      message: "Resubscribed.",
      code: 4
    },
    MISSING_OR_INVALID: {
      message: "Missing or invalid.",
      code: 5
    },
    EXPIRED: {
      message: "Expired.",
      code: 6
    },
    UNKNOWN_TYPE: {
      message: "Unknown type.",
      code: 7
    },
    MISMATCHED_TOPIC: {
      message: "Mismatched topic.",
      code: 8
    },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9
    }
  };
  function Te(t, e) {
    const { message: s, code: n } = l1[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function yi(t, e) {
    const { message: s, code: n } = c1[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function bi(t) {
    return typeof t > "u";
  }
  function Cp(t, e) {
    return typeof t == "string" && !!t.trim().length;
  }
  function d1(t) {
    function e(s) {
      try {
        return typeof new URL(s) < "u";
      } catch {
        return false;
      }
    }
    try {
      if (Cp(t, false)) {
        if (e(t)) return true;
        const s = Sf(t);
        return e(s);
      }
    } catch {
    }
    return false;
  }
  function h1(t) {
    var e;
    return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
  }
  function u1(t) {
    return t == null ? void 0 : t.topic;
  }
  function Za(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function ah() {
    const t = ha();
    return new Promise((e) => {
      switch (t) {
        case fs.browser:
          e(f1());
          break;
        case fs.reactNative:
          e(p1());
          break;
        case fs.node:
          e(g1());
          break;
        default:
          e(true);
      }
    });
  }
  function f1() {
    return Gi() && (navigator == null ? void 0 : navigator.onLine);
  }
  async function p1() {
    var _a2;
    return gr() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo ? (_a2 = await (globalThis == null ? void 0 : globalThis.NetInfo.fetch())) == null ? void 0 : _a2.isConnected : true;
  }
  function g1() {
    return true;
  }
  function m1(t) {
    switch (ha()) {
      case fs.browser:
        w1(t);
        break;
      case fs.reactNative:
        y1(t);
        break;
    }
  }
  function w1(t) {
    !gr() && Gi() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
  }
  function y1(t) {
    gr() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo && (globalThis == null ? void 0 : globalThis.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
  }
  function b1() {
    var t;
    return Gi() && Ft.getDocument() ? ((t = Ft.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : true;
  }
  function E1({ logger: t, name: e }) {
    const s = typeof t == "string" ? Af({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  var v1 = {};
  const Ap = "wc", Ip = 2, Vc = "core", xs = `${Ap}@2:${Vc}:`, C1 = {
    logger: "error"
  }, A1 = {
    database: ":memory:"
  }, I1 = "crypto", ch = "client_ed25519_seed", N1 = G.ONE_DAY, _1 = "keychain", S1 = "0.3", T1 = "messages", O1 = "0.3", k1 = G.SIX_HOURS, x1 = "publisher", Np = "irn", P1 = "error", _p = "wss://relay.walletconnect.org", $1 = "relayer", Fe = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
  }, R1 = "_subscription", Wt = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
  }, U1 = 0.1, Kc = "2.22.4", Ue = {
    link_mode: "link_mode",
    relay: "relay"
  }, Ro = {
    inbound: "inbound",
    outbound: "outbound"
  }, D1 = "0.3", L1 = "WALLETCONNECT_CLIENT_ID", lh = "WALLETCONNECT_LINK_MODE_APPS", Dt = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
  }, B1 = "subscription", M1 = "0.3", F1 = "pairing", j1 = "0.3", ii = {
    wc_pairingDelete: {
      req: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1e3
      },
      res: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1001
      }
    },
    wc_pairingPing: {
      req: {
        ttl: G.THIRTY_SECONDS,
        prompt: false,
        tag: 1002
      },
      res: {
        ttl: G.THIRTY_SECONDS,
        prompt: false,
        tag: 1003
      }
    },
    unregistered_method: {
      req: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 0
      },
      res: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 0
      }
    }
  }, Kn = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
  }, ts = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  }, q1 = "history", W1 = "0.3", H1 = "expirer", Yt = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
  }, V1 = "0.3", K1 = "verify-api", z1 = "https://verify.walletconnect.com", Sp = "https://verify.walletconnect.org", Ti = Sp, G1 = `${Ti}/v3`, Y1 = [
    z1,
    Sp
  ], Z1 = "echo", J1 = "https://echo.walletconnect.com", Cs = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
  }, Ls = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
  }, ss = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success: "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success",
    session_request_response_started: "session_request_response_started",
    session_request_response_validation_success: "session_request_response_validation_success",
    session_request_response_publish_started: "session_request_response_publish_started"
  }, Mn = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found",
    session_request_response_validation_failure: "session_request_response_validation_failure",
    session_request_response_publish_failure: "session_request_response_publish_failure"
  }, Fn = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
  }, oi = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
  }, X1 = 0.1, Q1 = "event-client", eE = 86400, tE = "https://pulse.walletconnect.org/batch";
  function sE(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var s = new Uint8Array(256), n = 0; n < s.length; n++) s[n] = 255;
    for (var r = 0; r < t.length; r++) {
      var i = t.charAt(r), o = i.charCodeAt(0);
      if (s[o] !== 255) throw new TypeError(i + " is ambiguous");
      s[o] = r;
    }
    var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function h(g) {
      if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (g.length === 0) return "";
      for (var p = 0, w = 0, T = 0, I = g.length; T !== I && g[T] === 0; ) T++, p++;
      for (var N = (I - T) * d + 1 >>> 0, $ = new Uint8Array(N); T !== I; ) {
        for (var U = g[T], L = 0, M = N - 1; (U !== 0 || L < w) && M !== -1; M--, L++) U += 256 * $[M] >>> 0, $[M] = U % a >>> 0, U = U / a >>> 0;
        if (U !== 0) throw new Error("Non-zero carry");
        w = L, T++;
      }
      for (var j = N - w; j !== N && $[j] === 0; ) j++;
      for (var k = c.repeat(p); j < N; ++j) k += t.charAt($[j]);
      return k;
    }
    function u(g) {
      if (typeof g != "string") throw new TypeError("Expected String");
      if (g.length === 0) return new Uint8Array();
      var p = 0;
      if (g[p] !== " ") {
        for (var w = 0, T = 0; g[p] === c; ) w++, p++;
        for (var I = (g.length - p) * l + 1 >>> 0, N = new Uint8Array(I); g[p]; ) {
          var $ = s[g.charCodeAt(p)];
          if ($ === 255) return;
          for (var U = 0, L = I - 1; ($ !== 0 || U < T) && L !== -1; L--, U++) $ += a * N[L] >>> 0, N[L] = $ % 256 >>> 0, $ = $ / 256 >>> 0;
          if ($ !== 0) throw new Error("Non-zero carry");
          T = U, p++;
        }
        if (g[p] !== " ") {
          for (var M = I - T; M !== I && N[M] === 0; ) M++;
          for (var j = new Uint8Array(w + (I - M)), k = w; M !== I; ) j[k++] = N[M++];
          return j;
        }
      }
    }
    function f(g) {
      var p = u(g);
      if (p) return p;
      throw new Error(`Non-${e} character`);
    }
    return {
      encode: h,
      decodeUnsafe: u,
      decode: f
    };
  }
  var nE = sE, rE = nE;
  const Tp = (t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, iE = (t) => new TextEncoder().encode(t), oE = (t) => new TextDecoder().decode(t);
  class aE {
    constructor(e, s, n) {
      this.name = e, this.prefix = s, this.baseEncode = n;
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  }
  class cE {
    constructor(e, s, n) {
      if (this.name = e, this.prefix = s, s.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
      this.prefixCodePoint = s.codePointAt(0), this.baseDecode = n;
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return Op(this, e);
    }
  }
  class lE {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return Op(this, e);
    }
    decode(e) {
      const s = e[0], n = this.decoders[s];
      if (n) return n.decode(e);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
  const Op = (t, e) => new lE({
    ...t.decoders || {
      [t.prefix]: t
    },
    ...e.decoders || {
      [e.prefix]: e
    }
  });
  let dE = class {
    constructor(e, s, n, r) {
      this.name = e, this.prefix = s, this.baseEncode = n, this.baseDecode = r, this.encoder = new aE(e, s, n), this.decoder = new cE(e, s, r);
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  };
  const Ea = ({ name: t, prefix: e, encode: s, decode: n }) => new dE(t, e, s, n), Xi = ({ prefix: t, name: e, alphabet: s }) => {
    const { encode: n, decode: r } = rE(s, e);
    return Ea({
      prefix: t,
      name: e,
      encode: n,
      decode: (i) => Tp(r(i))
    });
  }, hE = (t, e, s, n) => {
    const r = {};
    for (let d = 0; d < e.length; ++d) r[e[d]] = d;
    let i = t.length;
    for (; t[i - 1] === "="; ) --i;
    const o = new Uint8Array(i * s / 8 | 0);
    let a = 0, c = 0, l = 0;
    for (let d = 0; d < i; ++d) {
      const h = r[t[d]];
      if (h === void 0) throw new SyntaxError(`Non-${n} character`);
      c = c << s | h, a += s, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
    }
    if (a >= s || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
    return o;
  }, uE = (t, e, s) => {
    const n = e[e.length - 1] === "=", r = (1 << s) - 1;
    let i = "", o = 0, a = 0;
    for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, i += e[r & a >> o];
    if (o && (i += e[r & a << s - o]), n) for (; i.length * s & 7; ) i += "=";
    return i;
  }, rt = ({ name: t, prefix: e, bitsPerChar: s, alphabet: n }) => Ea({
    prefix: e,
    name: t,
    encode(r) {
      return uE(r, n, s);
    },
    decode(r) {
      return hE(r, n, s, t);
    }
  }), fE = Ea({
    prefix: "\0",
    name: "identity",
    encode: (t) => oE(t),
    decode: (t) => iE(t)
  });
  var pE = Object.freeze({
    __proto__: null,
    identity: fE
  });
  const gE = rt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });
  var mE = Object.freeze({
    __proto__: null,
    base2: gE
  });
  const wE = rt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });
  var yE = Object.freeze({
    __proto__: null,
    base8: wE
  });
  const bE = Xi({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });
  var EE = Object.freeze({
    __proto__: null,
    base10: bE
  });
  const vE = rt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  }), CE = rt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });
  var AE = Object.freeze({
    __proto__: null,
    base16: vE,
    base16upper: CE
  });
  const IE = rt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  }), NE = rt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  }), _E = rt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  }), SE = rt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  }), TE = rt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  }), OE = rt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  }), kE = rt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  }), xE = rt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  }), PE = rt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });
  var $E = Object.freeze({
    __proto__: null,
    base32: IE,
    base32upper: NE,
    base32pad: _E,
    base32padupper: SE,
    base32hex: TE,
    base32hexupper: OE,
    base32hexpad: kE,
    base32hexpadupper: xE,
    base32z: PE
  });
  const RE = Xi({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  }), UE = Xi({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
  var DE = Object.freeze({
    __proto__: null,
    base36: RE,
    base36upper: UE
  });
  const LE = Xi({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  }), BE = Xi({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });
  var ME = Object.freeze({
    __proto__: null,
    base58btc: LE,
    base58flickr: BE
  });
  const FE = rt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  }), jE = rt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  }), qE = rt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  }), WE = rt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });
  var HE = Object.freeze({
    __proto__: null,
    base64: FE,
    base64pad: jE,
    base64url: qE,
    base64urlpad: WE
  });
  const kp = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), VE = kp.reduce((t, e, s) => (t[s] = e, t), []), KE = kp.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
  function zE(t) {
    return t.reduce((e, s) => (e += VE[s], e), "");
  }
  function GE(t) {
    const e = [];
    for (const s of t) {
      const n = KE[s.codePointAt(0)];
      if (n === void 0) throw new Error(`Non-base256emoji character: ${s}`);
      e.push(n);
    }
    return new Uint8Array(e);
  }
  const YE = Ea({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: zE,
    decode: GE
  });
  var ZE = Object.freeze({
    __proto__: null,
    base256emoji: YE
  }), JE = xp, dh = 128, XE = -128, QE = Math.pow(2, 31);
  function xp(t, e, s) {
    e = e || [], s = s || 0;
    for (var n = s; t >= QE; ) e[s++] = t & 255 | dh, t /= 128;
    for (; t & XE; ) e[s++] = t & 255 | dh, t >>>= 7;
    return e[s] = t | 0, xp.bytes = s - n + 1, e;
  }
  var ev = zc, tv = 128, hh = 127;
  function zc(t, n) {
    var s = 0, n = n || 0, r = 0, i = n, o, a = t.length;
    do {
      if (i >= a) throw zc.bytes = 0, new RangeError("Could not decode varint");
      o = t[i++], s += r < 28 ? (o & hh) << r : (o & hh) * Math.pow(2, r), r += 7;
    } while (o >= tv);
    return zc.bytes = i - n, s;
  }
  var sv = Math.pow(2, 7), nv = Math.pow(2, 14), rv = Math.pow(2, 21), iv = Math.pow(2, 28), ov = Math.pow(2, 35), av = Math.pow(2, 42), cv = Math.pow(2, 49), lv = Math.pow(2, 56), dv = Math.pow(2, 63), hv = function(t) {
    return t < sv ? 1 : t < nv ? 2 : t < rv ? 3 : t < iv ? 4 : t < ov ? 5 : t < av ? 6 : t < cv ? 7 : t < lv ? 8 : t < dv ? 9 : 10;
  }, uv = {
    encode: JE,
    decode: ev,
    encodingLength: hv
  }, Pp = uv;
  const uh = (t, e, s = 0) => (Pp.encode(t, e, s), e), fh = (t) => Pp.encodingLength(t), Gc = (t, e) => {
    const s = e.byteLength, n = fh(t), r = n + fh(s), i = new Uint8Array(r + s);
    return uh(t, i, 0), uh(s, i, n), i.set(e, r), new fv(t, s, e, i);
  };
  let fv = class {
    constructor(e, s, n, r) {
      this.code = e, this.size = s, this.digest = n, this.bytes = r;
    }
  };
  const $p = ({ name: t, code: e, encode: s }) => new pv(t, e, s);
  let pv = class {
    constructor(e, s, n) {
      this.name = e, this.code = s, this.encode = n;
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        const s = this.encode(e);
        return s instanceof Uint8Array ? Gc(this.code, s) : s.then((n) => Gc(this.code, n));
      } else throw Error("Unknown type, must be binary type");
    }
  };
  const Rp = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), gv = $p({
    name: "sha2-256",
    code: 18,
    encode: Rp("SHA-256")
  }), mv = $p({
    name: "sha2-512",
    code: 19,
    encode: Rp("SHA-512")
  });
  var wv = Object.freeze({
    __proto__: null,
    sha256: gv,
    sha512: mv
  });
  const Up = 0, yv = "identity", Dp = Tp, bv = (t) => Gc(Up, Dp(t)), Ev = {
    code: Up,
    name: yv,
    encode: Dp,
    digest: bv
  };
  var vv = Object.freeze({
    __proto__: null,
    identity: Ev
  });
  new TextEncoder(), new TextDecoder();
  const ph = {
    ...pE,
    ...mE,
    ...yE,
    ...EE,
    ...AE,
    ...$E,
    ...DE,
    ...ME,
    ...HE,
    ...ZE
  };
  ({
    ...wv,
    ...vv
  });
  function Lp(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
  }
  function Cv(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Lp(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
  }
  function Bp(t, e, s, n) {
    return {
      name: t,
      prefix: e,
      encoder: {
        name: t,
        prefix: e,
        encode: s
      },
      decoder: {
        decode: n
      }
    };
  }
  const gh = Bp("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ja = Bp("ascii", "a", (t) => {
    let e = "a";
    for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
    return e;
  }, (t) => {
    t = t.substring(1);
    const e = Cv(t.length);
    for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
    return e;
  }), Av = {
    utf8: gh,
    "utf-8": gh,
    hex: ph.base16,
    latin1: Ja,
    ascii: Ja,
    binary: Ja,
    ...ph
  };
  function Iv(t, e = "utf8") {
    const s = Av[e];
    if (!s) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Lp(globalThis.Buffer.from(t, "utf-8")) : s.decoder.decode(`${s.prefix}${t}`);
  }
  var Nv = Object.defineProperty, _v = (t, e, s) => e in t ? Nv(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, bs = (t, e, s) => _v(t, typeof e != "symbol" ? e + "" : e, s);
  let Sv = class {
    constructor(e, s) {
      this.core = e, this.logger = s, bs(this, "keychain", /* @__PURE__ */ new Map()), bs(this, "name", _1), bs(this, "version", S1), bs(this, "initialized", false), bs(this, "storagePrefix", xs), bs(this, "init", async () => {
        if (!this.initialized) {
          const n = await this.getKeyChain();
          typeof n < "u" && (this.keychain = n), this.initialized = true;
        }
      }), bs(this, "has", (n) => (this.isInitialized(), this.keychain.has(n))), bs(this, "set", async (n, r) => {
        this.isInitialized(), this.keychain.set(n, r), await this.persist();
      }), bs(this, "get", (n) => {
        this.isInitialized();
        const r = this.keychain.get(n);
        if (typeof r > "u") {
          const { message: i } = Te("NO_MATCHING_KEY", `${this.name}: ${n}`);
          throw new Error(i);
        }
        return r;
      }), bs(this, "del", async (n) => {
        this.isInitialized(), this.keychain.delete(n), await this.persist();
      }), this.core = e, this.logger = qt(s, this.name);
    }
    get context() {
      return jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
      await this.core.storage.setItem(this.storageKey, $c(e));
    }
    async getKeyChain() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? Rc(e) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var Tv = Object.defineProperty, Ov = (t, e, s) => e in t ? Tv(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ze = (t, e, s) => Ov(t, typeof e != "symbol" ? e + "" : e, s);
  class kv {
    constructor(e, s, n) {
      this.core = e, this.logger = s, ze(this, "name", I1), ze(this, "keychain"), ze(this, "randomSessionIdentifier", Hc()), ze(this, "initialized", false), ze(this, "clientId"), ze(this, "init", async () => {
        this.initialized || (await this.keychain.init(), this.initialized = true);
      }), ze(this, "hasKeys", (r) => (this.isInitialized(), this.keychain.has(r))), ze(this, "getClientId", async () => {
        if (this.isInitialized(), this.clientId) return this.clientId;
        const r = await this.getClientSeed(), i = dd(r), o = vm(i.publicKey);
        return this.clientId = o, o;
      }), ze(this, "generateKeyPair", () => {
        this.isInitialized();
        const r = qb();
        return this.setPrivateKey(r.publicKey, r.privateKey);
      }), ze(this, "signJWT", async (r) => {
        this.isInitialized();
        const i = await this.getClientSeed(), o = dd(i), a = this.randomSessionIdentifier;
        return await Cm(a, r, N1, o);
      }), ze(this, "generateSharedKey", (r, i, o) => {
        this.isInitialized();
        const a = this.getPrivateKey(r), c = Wb(a, i);
        return this.setSymKey(c, o);
      }), ze(this, "setSymKey", async (r, i) => {
        this.isInitialized();
        const o = i || Hb(r);
        return await this.keychain.set(o, r), o;
      }), ze(this, "deleteKeyPair", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), ze(this, "deleteSymKey", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), ze(this, "encode", async (r, i, o) => {
        this.isInitialized();
        const a = vp(o), c = Pi(i);
        if (sh(a)) return zb(c, o == null ? void 0 : o.encoding);
        if (th(a)) {
          const u = a.senderPublicKey, f = a.receiverPublicKey;
          r = await this.generateSharedKey(u, f);
        }
        const l = this.getSymKey(r), { type: d, senderPublicKey: h } = a;
        return Vb({
          type: d,
          symKey: l,
          message: c,
          senderPublicKey: h,
          encoding: o == null ? void 0 : o.encoding
        });
      }), ze(this, "decode", async (r, i, o) => {
        this.isInitialized();
        const a = Yb(i, o);
        if (sh(a)) {
          const c = Gb(i, o == null ? void 0 : o.encoding);
          return hd(c);
        }
        if (th(a)) {
          const c = a.receiverPublicKey, l = a.senderPublicKey;
          r = await this.generateSharedKey(c, l);
        }
        try {
          const c = this.getSymKey(r), l = Kb({
            symKey: c,
            encoded: i,
            encoding: o == null ? void 0 : o.encoding
          });
          return hd(l);
        } catch (c) {
          this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
        }
      }), ze(this, "getPayloadType", (r, i = ir) => {
        const o = Bi({
          encoded: r,
          encoding: i
        });
        return cr(o.type);
      }), ze(this, "getPayloadSenderPublicKey", (r, i = ir) => {
        const o = Bi({
          encoded: r,
          encoding: i
        });
        return o.senderPublicKey ? mt(o.senderPublicKey, Et) : void 0;
      }), this.core = e, this.logger = qt(s, this.name), this.keychain = n || new Sv(this.core, this.logger);
    }
    get context() {
      return jt(this.logger);
    }
    async setPrivateKey(e, s) {
      return await this.keychain.set(e, s), e;
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    async getClientSeed() {
      let e = "";
      try {
        e = this.keychain.get(ch);
      } catch {
        e = Hc(), await this.keychain.set(ch, e);
      }
      return Iv(e, "base16");
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var xv = Object.defineProperty, Pv = Object.defineProperties, $v = Object.getOwnPropertyDescriptors, mh = Object.getOwnPropertySymbols, Rv = Object.prototype.hasOwnProperty, Uv = Object.prototype.propertyIsEnumerable, Yc = (t, e, s) => e in t ? xv(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Dv = (t, e) => {
    for (var s in e || (e = {})) Rv.call(e, s) && Yc(t, s, e[s]);
    if (mh) for (var s of mh(e)) Uv.call(e, s) && Yc(t, s, e[s]);
    return t;
  }, Lv = (t, e) => Pv(t, $v(e)), Rt = (t, e, s) => Yc(t, typeof e != "symbol" ? e + "" : e, s);
  class Bv extends wy {
    constructor(e, s) {
      super(e, s), this.logger = e, this.core = s, Rt(this, "messages", /* @__PURE__ */ new Map()), Rt(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), Rt(this, "name", T1), Rt(this, "version", O1), Rt(this, "initialized", false), Rt(this, "storagePrefix", xs), Rt(this, "init", async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const n = await this.getRelayerMessages();
            typeof n < "u" && (this.messages = n);
            const r = await this.getRelayerMessagesWithoutClientAck();
            typeof r < "u" && (this.messagesWithoutClientAck = r), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
              type: "method",
              method: "restore",
              size: this.messages.size
            });
          } catch (n) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
          } finally {
            this.initialized = true;
          }
        }
      }), Rt(this, "set", async (n, r, i) => {
        this.isInitialized();
        const o = $o(r);
        let a = this.messages.get(n);
        if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
        if (a[o] = r, this.messages.set(n, a), i === Ro.inbound) {
          const c = this.messagesWithoutClientAck.get(n) || {};
          this.messagesWithoutClientAck.set(n, Lv(Dv({}, c), {
            [o]: r
          }));
        }
        return await this.persist(), o;
      }), Rt(this, "get", (n) => {
        this.isInitialized();
        let r = this.messages.get(n);
        return typeof r > "u" && (r = {}), r;
      }), Rt(this, "getWithoutAck", (n) => {
        this.isInitialized();
        const r = {};
        for (const i of n) {
          const o = this.messagesWithoutClientAck.get(i) || {};
          r[i] = Object.values(o);
        }
        return r;
      }), Rt(this, "has", (n, r) => {
        this.isInitialized();
        const i = this.get(n), o = $o(r);
        return typeof i[o] < "u";
      }), Rt(this, "ack", async (n, r) => {
        this.isInitialized();
        const i = this.messagesWithoutClientAck.get(n);
        if (typeof i > "u") return;
        const o = $o(r);
        delete i[o], Object.keys(i).length === 0 ? this.messagesWithoutClientAck.delete(n) : this.messagesWithoutClientAck.set(n, i), await this.persist();
      }), Rt(this, "del", async (n) => {
        this.isInitialized(), this.messages.delete(n), this.messagesWithoutClientAck.delete(n), await this.persist();
      }), this.logger = qt(e, this.name), this.core = s;
    }
    get context() {
      return jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get storageKeyWithoutClientAck() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
    }
    async setRelayerMessages(e) {
      await this.core.storage.setItem(this.storageKey, $c(e));
    }
    async setRelayerMessagesWithoutClientAck(e) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, $c(e));
    }
    async getRelayerMessages() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? Rc(e) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e < "u" ? Rc(e) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var Mv = Object.defineProperty, Fv = Object.defineProperties, jv = Object.getOwnPropertyDescriptors, wh = Object.getOwnPropertySymbols, qv = Object.prototype.hasOwnProperty, Wv = Object.prototype.propertyIsEnumerable, Zc = (t, e, s) => e in t ? Mv(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, vr = (t, e) => {
    for (var s in e || (e = {})) qv.call(e, s) && Zc(t, s, e[s]);
    if (wh) for (var s of wh(e)) Wv.call(e, s) && Zc(t, s, e[s]);
    return t;
  }, yh = (t, e) => Fv(t, jv(e)), Ht = (t, e, s) => Zc(t, typeof e != "symbol" ? e + "" : e, s);
  let Hv = class extends yy {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, Ht(this, "events", new hr.EventEmitter()), Ht(this, "name", x1), Ht(this, "queue", /* @__PURE__ */ new Map()), Ht(this, "publishTimeout", G.toMiliseconds(G.ONE_MINUTE)), Ht(this, "initialPublishTimeout", G.toMiliseconds(G.ONE_SECOND * 15)), Ht(this, "needsTransportRestart", false), Ht(this, "publish", async (n, r, i) => {
        var o, a, c, l, d;
        this.logger.debug("Publishing Payload"), this.logger.trace({
          type: "method",
          method: "publish",
          params: {
            topic: n,
            message: r,
            opts: i
          }
        });
        const h = (i == null ? void 0 : i.ttl) || k1, u = (i == null ? void 0 : i.prompt) || false, f = (i == null ? void 0 : i.tag) || 0, g = (i == null ? void 0 : i.id) || Yn().toString(), p = xr(Jo().protocol), w = {
          id: g,
          method: (i == null ? void 0 : i.publishMethod) || p.publish,
          params: vr({
            topic: n,
            message: r,
            ttl: h,
            prompt: u,
            tag: f,
            attestation: i == null ? void 0 : i.attestation
          }, i == null ? void 0 : i.tvf)
        }, T = `Failed to publish payload, please try again. id:${g} tag:${f}`;
        try {
          bi((o = w.params) == null ? void 0 : o.prompt) && ((a = w.params) == null || delete a.prompt), bi((c = w.params) == null ? void 0 : c.tag) && ((l = w.params) == null || delete l.tag);
          const I = new Promise(async (N) => {
            const $ = ({ id: L }) => {
              var M;
              ((M = w.id) == null ? void 0 : M.toString()) === L.toString() && (this.removeRequestFromQueue(L), this.relayer.events.removeListener(Fe.publish, $), N());
            };
            this.relayer.events.on(Fe.publish, $);
            const U = _s(new Promise((L, M) => {
              this.rpcPublish(w, i).then(L).catch((j) => {
                this.logger.warn(j, j == null ? void 0 : j.message), M(j);
              });
            }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g} tag:${f}`);
            try {
              await U, this.events.removeListener(Fe.publish, $);
            } catch (L) {
              this.queue.set(g, {
                request: w,
                opts: i,
                attempt: 1
              }), this.logger.warn(L, L == null ? void 0 : L.message);
            }
          });
          this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              id: g,
              topic: n,
              message: r,
              opts: i
            }
          }), await _s(I, this.publishTimeout, T);
        } catch (I) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(I), (d = i == null ? void 0 : i.internal) != null && d.throwOnFailedPublish) throw I;
        } finally {
          this.queue.delete(g);
        }
      }), Ht(this, "publishCustom", async (n) => {
        var r, i, o, a, c;
        this.logger.debug("Publishing custom payload"), this.logger.trace({
          type: "method",
          method: "publishCustom",
          params: n
        });
        const { payload: l, opts: d = {} } = n, { attestation: h, tvf: u, publishMethod: f, prompt: g, tag: p, ttl: w = G.FIVE_MINUTES } = d, T = d.id || Yn().toString(), I = xr(Jo().protocol), N = f || I.publish, $ = {
          id: T,
          method: N,
          params: vr(yh(vr({}, l), {
            ttl: w,
            prompt: g,
            tag: p,
            attestation: h
          }), u)
        }, U = `Failed to publish custom payload, please try again. id:${T} tag:${p}`;
        try {
          bi((r = $.params) == null ? void 0 : r.prompt) && ((i = $.params) == null || delete i.prompt), bi((o = $.params) == null ? void 0 : o.tag) && ((a = $.params) == null || delete a.tag);
          const L = new Promise(async (M) => {
            const j = ({ id: H }) => {
              var V;
              ((V = $.id) == null ? void 0 : V.toString()) === H.toString() && (this.removeRequestFromQueue(H), this.relayer.events.removeListener(Fe.publish, j), M());
            };
            this.relayer.events.on(Fe.publish, j);
            const k = _s(new Promise((H, V) => {
              this.rpcPublish($, d).then(H).catch((O) => {
                this.logger.warn(O, O == null ? void 0 : O.message), V(O);
              });
            }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${N} id:${T} tag:${p}`);
            try {
              await k, this.events.removeListener(Fe.publish, j);
            } catch (H) {
              this.queue.set(T, {
                request: $,
                opts: d,
                attempt: 1
              }), this.logger.warn(H, H == null ? void 0 : H.message);
            }
          });
          this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              id: T,
              payload: l,
              opts: d
            }
          }), await _s(L, this.publishTimeout, U);
        } catch (L) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(L), (c = d == null ? void 0 : d.internal) != null && c.throwOnFailedPublish) throw L;
        } finally {
          this.queue.delete(T);
        }
      }), Ht(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Ht(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Ht(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Ht(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.relayer = e, this.logger = qt(s, this.name), this.registerEventListeners();
    }
    get context() {
      return jt(this.logger);
    }
    async rpcPublish(e, s) {
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "message",
        direction: "outgoing",
        request: e
      });
      const n = await this.relayer.request(e);
      return this.relayer.events.emit(Fe.publish, vr(vr({}, e), s)), this.logger.debug("Successfully Published Payload"), n;
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach(async (e, s) => {
        var n;
        const r = e.attempt + 1;
        this.queue.set(s, yh(vr({}, e), {
          attempt: r
        })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(n = e.request.params) == null ? void 0 : n.tag}, attempt: ${r}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(Zr.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(Fe.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(Fe.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
    }
  };
  var Vv = Object.defineProperty, Kv = (t, e, s) => e in t ? Vv(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Cr = (t, e, s) => Kv(t, typeof e != "symbol" ? e + "" : e, s);
  class zv {
    constructor() {
      Cr(this, "map", /* @__PURE__ */ new Map()), Cr(this, "set", (e, s) => {
        const n = this.get(e);
        this.exists(e, s) || this.map.set(e, [
          ...n,
          s
        ]);
      }), Cr(this, "get", (e) => this.map.get(e) || []), Cr(this, "exists", (e, s) => this.get(e).includes(s)), Cr(this, "delete", (e, s) => {
        if (typeof s > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const n = this.get(e);
        if (!this.exists(e, s)) return;
        const r = n.filter((i) => i !== s);
        if (!r.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, r);
      }), Cr(this, "clear", () => {
        this.map.clear();
      });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  }
  var Gv = Object.defineProperty, Yv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptors, bh = Object.getOwnPropertySymbols, Jv = Object.prototype.hasOwnProperty, Xv = Object.prototype.propertyIsEnumerable, Jc = (t, e, s) => e in t ? Gv(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ai = (t, e) => {
    for (var s in e || (e = {})) Jv.call(e, s) && Jc(t, s, e[s]);
    if (bh) for (var s of bh(e)) Xv.call(e, s) && Jc(t, s, e[s]);
    return t;
  }, Xa = (t, e) => Yv(t, Zv(e)), Pe = (t, e, s) => Jc(t, typeof e != "symbol" ? e + "" : e, s);
  class Qv extends vy {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, Pe(this, "subscriptions", /* @__PURE__ */ new Map()), Pe(this, "topicMap", new zv()), Pe(this, "events", new hr.EventEmitter()), Pe(this, "name", B1), Pe(this, "version", M1), Pe(this, "pending", /* @__PURE__ */ new Map()), Pe(this, "cached", []), Pe(this, "initialized", false), Pe(this, "storagePrefix", xs), Pe(this, "subscribeTimeout", G.toMiliseconds(G.ONE_MINUTE)), Pe(this, "initialSubscribeTimeout", G.toMiliseconds(G.ONE_SECOND * 15)), Pe(this, "clientId"), Pe(this, "batchSubscribeTopicsLimit", 500), Pe(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
      }), Pe(this, "subscribe", async (n, r) => {
        var i;
        this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
          type: "method",
          method: "subscribe",
          params: {
            topic: n,
            opts: r
          }
        });
        try {
          const o = Jo(r), a = {
            topic: n,
            relay: o,
            transportType: r == null ? void 0 : r.transportType
          };
          (i = r == null ? void 0 : r.internal) != null && i.skipSubscribe || this.pending.set(n, a);
          const c = await this.rpcSubscribe(n, o, r);
          return typeof c == "string" && (this.onSubscribe(c, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
            type: "method",
            method: "subscribe",
            params: {
              topic: n,
              opts: r
            }
          })), c;
        } catch (o) {
          throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
        }
      }), Pe(this, "unsubscribe", async (n, r) => {
        this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(n, r.id, r) : await this.unsubscribeByTopic(n, r);
      }), Pe(this, "isSubscribed", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n));
      })), Pe(this, "isKnownTopic", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n) || this.pending.has(n) || this.cached.some((i) => i.topic === n));
      })), Pe(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Pe(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Pe(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Pe(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), Pe(this, "start", async () => {
        await this.onConnect();
      }), Pe(this, "stop", async () => {
        await this.onDisconnect();
      }), Pe(this, "restart", async () => {
        await this.restore(), await this.onRestart();
      }), Pe(this, "checkPending", async () => {
        if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
        const n = [];
        this.pending.forEach((r) => {
          n.push(r);
        }), await this.batchSubscribe(n);
      }), Pe(this, "registerEventListeners", () => {
        this.relayer.core.heartbeat.on(Zr.pulse, async () => {
          await this.checkPending();
        }), this.events.on(Dt.created, async (n) => {
          const r = Dt.created;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        }), this.events.on(Dt.deleted, async (n) => {
          const r = Dt.deleted;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        });
      }), this.relayer = e, this.logger = qt(s, this.name), this.clientId = "";
    }
    get context() {
      return jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    get hasAnyTopics() {
      return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
    }
    hasSubscription(e, s) {
      let n = false;
      try {
        n = this.getSubscription(e).topic === s;
      } catch {
      }
      return n;
    }
    reset() {
      this.cached = [], this.initialized = true;
    }
    onDisable() {
      this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, s) {
      const n = this.topicMap.get(e);
      await Promise.all(n.map(async (r) => await this.unsubscribeById(e, r, s)));
    }
    async unsubscribeById(e, s, n) {
      this.logger.debug("Unsubscribing Topic"), this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: {
          topic: e,
          id: s,
          opts: n
        }
      });
      try {
        const r = Jo(n);
        await this.restartToComplete({
          topic: e,
          id: s,
          relay: r
        }), await this.rpcUnsubscribe(e, s, r);
        const i = yi("USER_DISCONNECTED", `${this.name}, ${e}`);
        await this.onUnsubscribe(e, s, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: {
            topic: e,
            id: s,
            opts: n
          }
        });
      } catch (r) {
        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r;
      }
    }
    async rpcSubscribe(e, s, n) {
      var r, i;
      const o = await this.getSubscriptionId(e);
      if ((r = n == null ? void 0 : n.internal) != null && r.skipSubscribe) return o;
      (!n || (n == null ? void 0 : n.transportType) === Ue.relay) && await this.restartToComplete({
        topic: e,
        id: e,
        relay: s
      });
      const a = {
        method: xr(s.protocol).subscribe,
        params: {
          topic: e
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: a
      });
      const c = (i = n == null ? void 0 : n.internal) == null ? void 0 : i.throwOnFailedPublish;
      try {
        if ((n == null ? void 0 : n.transportType) === Ue.link_mode) return setTimeout(() => {
          (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((h) => this.logger.warn(h));
        }, G.toMiliseconds(G.ONE_SECOND)), o;
        const l = new Promise(async (h) => {
          const u = (f) => {
            f.topic === e && (this.events.removeListener(Dt.created, u), h(f.id));
          };
          this.events.on(Dt.created, u);
          try {
            const f = await _s(new Promise((g, p) => {
              this.relayer.request(a).catch((w) => {
                this.logger.warn(w, w == null ? void 0 : w.message), p(w);
              }).then(g);
            }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
            this.events.removeListener(Dt.created, u), h(f);
          } catch {
          }
        }), d = await _s(l, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
        if (!d && c) throw new Error(`Subscribing to ${e} failed, please try again`);
        return d ? o : null;
      } catch (l) {
        if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Fe.connection_stalled), c) throw l;
      }
      return null;
    }
    async rpcBatchSubscribe(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: xr(s.protocol).batchSubscribe,
        params: {
          topics: e.map((r) => r.topic)
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: n
      });
      try {
        await await _s(new Promise((r) => {
          this.relayer.request(n).catch((i) => this.logger.warn(i)).then(r);
        }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
      } catch {
        this.relayer.events.emit(Fe.connection_stalled);
      }
    }
    async rpcBatchFetchMessages(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: xr(s.protocol).batchFetchMessages,
        params: {
          topics: e.map((i) => i.topic)
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: n
      });
      let r;
      try {
        r = await await _s(new Promise((i, o) => {
          this.relayer.request(n).catch((a) => {
            this.logger.warn(a), o(a);
          }).then(i);
        }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
      } catch {
        this.relayer.events.emit(Fe.connection_stalled);
      }
      return r;
    }
    rpcUnsubscribe(e, s, n) {
      const r = {
        method: xr(n.protocol).unsubscribe,
        params: {
          topic: e,
          id: s
        }
      };
      return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: r
      }), this.relayer.request(r);
    }
    onSubscribe(e, s) {
      this.setSubscription(e, Xa(ai({}, s), {
        id: e
      })), this.pending.delete(s.topic);
    }
    onBatchSubscribe(e) {
      e.length && e.forEach((s) => {
        this.setSubscription(s.id, ai({}, s)), this.pending.delete(s.topic);
      });
    }
    async onUnsubscribe(e, s, n) {
      this.events.removeAllListeners(s), this.hasSubscription(s, e) && this.deleteSubscription(s, n), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
      await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
      return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, s) {
      this.logger.debug("Setting subscription"), this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: s
      }), this.addSubscription(e, s);
    }
    addSubscription(e, s) {
      this.subscriptions.set(e, ai({}, s)), this.topicMap.set(s.topic, e), this.events.emit(Dt.created, s);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"), this.logger.trace({
        type: "method",
        method: "getSubscription",
        id: e
      });
      const s = this.subscriptions.get(e);
      if (!s) {
        const { message: n } = Te("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(n);
      }
      return s;
    }
    deleteSubscription(e, s) {
      this.logger.debug("Deleting subscription"), this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: s
      });
      const n = this.getSubscription(e);
      this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Dt.deleted, Xa(ai({}, n), {
        reason: s
      }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(Dt.sync);
    }
    async onRestart() {
      if (this.cached.length) {
        const e = [
          ...this.cached
        ], s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
        for (let n = 0; n < s; n++) {
          const r = e.splice(0, this.batchSubscribeTopicsLimit);
          await this.batchSubscribe(r);
        }
      }
      this.events.emit(Dt.resubscribed);
    }
    async restore() {
      try {
        const e = await this.getRelayerSubscriptions();
        if (typeof e > "u" || !e.length) return;
        if (this.subscriptions.size && !e.every((s) => {
          var n;
          return s.topic === ((n = this.subscriptions.get(s.id)) == null ? void 0 : n.topic);
        })) {
          const { message: s } = Te("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
      }
    }
    async batchSubscribe(e) {
      e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (s) => Xa(ai({}, s), {
        id: await this.getSubscriptionId(s.topic)
      })))));
    }
    async batchFetchMessages(e) {
      if (!e.length) return;
      this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
      const s = await this.rpcBatchFetchMessages(e);
      s && s.messages && (await qy(G.toMiliseconds(G.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(s.messages));
    }
    async onConnect() {
      await this.restart(), this.reset();
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async restartToComplete(e) {
      !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
    }
    async getClientId() {
      return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
    }
    async getSubscriptionId(e) {
      return $o(e + await this.getClientId());
    }
  }
  var eC = Object.defineProperty, Eh = Object.getOwnPropertySymbols, tC = Object.prototype.hasOwnProperty, sC = Object.prototype.propertyIsEnumerable, Xc = (t, e, s) => e in t ? eC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, vh = (t, e) => {
    for (var s in e || (e = {})) tC.call(e, s) && Xc(t, s, e[s]);
    if (Eh) for (var s of Eh(e)) sC.call(e, s) && Xc(t, s, e[s]);
    return t;
  }, Ne = (t, e, s) => Xc(t, typeof e != "symbol" ? e + "" : e, s);
  class nC extends by {
    constructor(e) {
      var s;
      super(e), Ne(this, "protocol", "wc"), Ne(this, "version", 2), Ne(this, "core"), Ne(this, "logger"), Ne(this, "events", new hr.EventEmitter()), Ne(this, "provider"), Ne(this, "messages"), Ne(this, "subscriber"), Ne(this, "publisher"), Ne(this, "name", $1), Ne(this, "transportExplicitlyClosed", false), Ne(this, "initialized", false), Ne(this, "connectionAttemptInProgress", false), Ne(this, "relayUrl"), Ne(this, "projectId"), Ne(this, "packageName"), Ne(this, "bundleId"), Ne(this, "hasExperiencedNetworkDisruption", false), Ne(this, "pingTimeout"), Ne(this, "heartBeatTimeout", G.toMiliseconds(G.THIRTY_SECONDS + G.FIVE_SECONDS)), Ne(this, "reconnectTimeout"), Ne(this, "connectPromise"), Ne(this, "reconnectInProgress", false), Ne(this, "requestsInFlight", []), Ne(this, "connectTimeout", G.toMiliseconds(G.ONE_SECOND * 15)), Ne(this, "request", async (n) => {
        var r, i;
        this.logger.debug("Publishing Request Payload");
        const o = n.id || Yn().toString();
        await this.toEstablishConnection();
        try {
          this.logger.trace({
            id: o,
            method: n.method,
            topic: (r = n.params) == null ? void 0 : r.topic
          }, "relayer.request - publishing...");
          const a = `${o}:${((i = n.params) == null ? void 0 : i.tag) || ""}`;
          this.requestsInFlight.push(a);
          const c = await this.provider.request(n);
          return this.requestsInFlight = this.requestsInFlight.filter((l) => l !== a), c;
        } catch (a) {
          throw this.logger.debug(`Failed to Publish Request: ${o}`), a;
        }
      }), Ne(this, "resetPingTimeout", () => {
        Ko() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var n, r, i, o;
          try {
            this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o = (i = (r = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || o.call(i);
          } catch (a) {
            this.logger.warn(a, a == null ? void 0 : a.message);
          }
        }, this.heartBeatTimeout));
      }), Ne(this, "onPayloadHandler", (n) => {
        this.onProviderPayload(n), this.resetPingTimeout();
      }), Ne(this, "onConnectHandler", () => {
        this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(Fe.connect);
      }), Ne(this, "onDisconnectHandler", () => {
        this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
      }), Ne(this, "onProviderErrorHandler", (n) => {
        this.logger.fatal(`Fatal socket error: ${n.message}`), this.events.emit(Fe.error, n), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
      }), Ne(this, "registerProviderListeners", () => {
        this.provider.on(Wt.payload, this.onPayloadHandler), this.provider.on(Wt.connect, this.onConnectHandler), this.provider.on(Wt.disconnect, this.onDisconnectHandler), this.provider.on(Wt.error, this.onProviderErrorHandler);
      }), this.core = e.core, this.logger = E1({
        logger: (s = e.logger) != null ? s : P1,
        name: this.name
      }), this.messages = new Bv(this.logger, e.core), this.subscriber = new Qv(this, this.logger), this.publisher = new Hv(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || _p, xy() ? this.packageName = kd() : Py() && (this.bundleId = kd()), this.provider = {};
    }
    async init() {
      this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
        this.messages.init(),
        this.subscriber.init()
      ]), this.initialized = true, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
    }
    get context() {
      return jt(this.logger);
    }
    get connected() {
      var e, s, n;
      return ((n = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : n.readyState) === 1 || false;
    }
    get connecting() {
      var e, s, n;
      return ((n = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : n.readyState) === 0 || this.connectPromise !== void 0 || false;
    }
    async publish(e, s, n) {
      this.isInitialized(), await this.publisher.publish(e, s, n), await this.recordMessageEvent({
        topic: e,
        message: s,
        publishedAt: Date.now(),
        transportType: Ue.relay
      }, Ro.outbound);
    }
    async publishCustom(e) {
      this.isInitialized(), await this.publisher.publishCustom(e);
    }
    async subscribe(e, s) {
      var n, r, i;
      this.isInitialized(), (!(s != null && s.transportType) || (s == null ? void 0 : s.transportType) === "relay") && await this.toEstablishConnection();
      const o = typeof ((n = s == null ? void 0 : s.internal) == null ? void 0 : n.throwOnFailedPublish) > "u" ? true : (r = s == null ? void 0 : s.internal) == null ? void 0 : r.throwOnFailedPublish;
      let a = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", c;
      const l = (d) => {
        d.topic === e && (this.subscriber.off(Dt.created, l), c());
      };
      return await Promise.all([
        new Promise((d) => {
          c = d, this.subscriber.on(Dt.created, l);
        }),
        new Promise(async (d, h) => {
          a = await this.subscriber.subscribe(e, vh({
            internal: {
              throwOnFailedPublish: o
            }
          }, s)).catch((u) => {
            o && h(u);
          }) || a, d();
        })
      ]), a;
    }
    async unsubscribe(e, s) {
      this.isInitialized(), await this.subscriber.unsubscribe(e, s);
    }
    on(e, s) {
      this.events.on(e, s);
    }
    once(e, s) {
      this.events.once(e, s);
    }
    off(e, s) {
      this.events.off(e, s);
    }
    removeListener(e, s) {
      this.events.removeListener(e, s);
    }
    async transportDisconnect() {
      this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await _s(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
      this.transportExplicitlyClosed = true, await this.transportDisconnect();
    }
    async transportOpen(e) {
      if (!this.subscriber.hasAnyTopics) {
        this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
        return;
      }
      if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (s, n) => {
        await this.connect(e).then(s).catch(n).finally(() => {
          this.connectPromise = void 0;
        });
      }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
    }
    async restartTransport(e) {
      this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
      if (!await ah()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e) {
      if ((e == null ? void 0 : e.length) === 0) {
        this.logger.trace("Batch message events is empty. Ignoring...");
        return;
      }
      const s = e.sort((n, r) => n.publishedAt - r.publishedAt);
      this.logger.debug(`Batch of ${s.length} message events sorted`);
      for (const n of s) try {
        await this.onMessageEvent(n);
      } catch (r) {
        this.logger.warn(r, "Error while processing batch message event: " + (r == null ? void 0 : r.message));
      }
      this.logger.trace(`Batch of ${s.length} message events processed`);
    }
    async onLinkMessageEvent(e, s) {
      const { topic: n } = e;
      if (!s.sessionExists) {
        const r = _i(G.FIVE_MINUTES), i = {
          topic: n,
          expiry: r,
          relay: {
            protocol: "irn"
          },
          active: false
        };
        await this.core.pairing.pairings.set(n, i);
      }
      this.events.emit(Fe.message, e), await this.recordMessageEvent(e, Ro.inbound);
    }
    async connect(e) {
      await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
      let s = 1;
      for (; s < 6; ) {
        try {
          if (this.transportExplicitlyClosed) break;
          this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${s}...`), await this.createProvider(), await new Promise(async (n, r) => {
            const i = () => {
              r(new Error("Connection interrupted while trying to connect"));
            };
            this.provider.once(Wt.disconnect, i), await _s(new Promise((o, a) => {
              this.provider.connect().then(o).catch(a);
            }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
              r(o);
            }).finally(() => {
              this.provider.off(Wt.disconnect, i), clearTimeout(this.reconnectTimeout);
            }), await new Promise(async (o, a) => {
              const c = () => {
                r(new Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.once(Wt.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
                this.provider.off(Wt.disconnect, c);
              });
            }), this.hasExperiencedNetworkDisruption = false, n();
          });
        } catch (n) {
          await this.subscriber.stop();
          const r = n;
          this.logger.warn({}, r.message), this.hasExperiencedNetworkDisruption = true;
        } finally {
          this.connectionAttemptInProgress = false;
        }
        if (this.connected) {
          this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${s}`);
          break;
        }
        await new Promise((n) => setTimeout(n, G.toMiliseconds(s * 1))), s++;
      }
    }
    startPingTimeout() {
      var e, s, n, r, i;
      if (Ko()) try {
        (s = (e = this.provider) == null ? void 0 : e.connection) != null && s.socket && ((i = (r = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : r.socket) == null || i.on("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (o) {
        this.logger.warn(o, o == null ? void 0 : o.message);
      }
    }
    async createProvider() {
      this.provider.connection && this.unregisterProviderListeners();
      const e = await this.core.crypto.signJWT(this.relayUrl);
      this.provider = new Al(new Em(Ly({
        sdkVersion: Kc,
        protocol: this.protocol,
        version: this.version,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
        auth: e,
        useOnCloseEvent: true,
        bundleId: this.bundleId,
        packageName: this.packageName
      }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e, s) {
      const { topic: n, message: r } = e;
      await this.messages.set(n, r, s);
    }
    async shouldIgnoreMessageEvent(e) {
      const { topic: s, message: n } = e;
      if (!n || n.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${n}`), true;
      if (!await this.subscriber.isKnownTopic(s)) return this.logger.warn(`Ignoring message for unknown topic ${s}`), true;
      const r = this.messages.has(s, n);
      return r && this.logger.warn(`Ignoring duplicate message: ${n}`), r;
    }
    async onProviderPayload(e) {
      if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "incoming",
        payload: e
      }), Il(e)) {
        if (!e.method.endsWith(R1)) return;
        const s = e.params, { topic: n, message: r, publishedAt: i, attestation: o } = s.data, a = {
          topic: n,
          message: r,
          publishedAt: i,
          transportType: Ue.relay,
          attestation: o
        };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(vh({
          type: "event",
          event: s.id
        }, a)), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
      } else Nl(e) && this.events.emit(Fe.message_ack, e);
    }
    async onMessageEvent(e) {
      await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Ro.inbound), this.events.emit(Fe.message, e));
    }
    async acknowledgePayload(e) {
      const s = $i(e.id, true);
      await this.provider.connection.send(s);
    }
    unregisterProviderListeners() {
      this.provider.off(Wt.payload, this.onPayloadHandler), this.provider.off(Wt.connect, this.onConnectHandler), this.provider.off(Wt.disconnect, this.onDisconnectHandler), this.provider.off(Wt.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e = await ah();
      m1(async (s) => {
        e !== s && (e = s, s ? await this.transportOpen().catch((n) => this.logger.error(n, n == null ? void 0 : n.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
      }), this.core.heartbeat.on(Zr.pulse, async () => {
        if (!this.transportExplicitlyClosed && !this.connected && b1()) try {
          await this.confirmOnlineStateOrThrow(), await this.transportOpen();
        } catch (s) {
          this.logger.warn(s, s == null ? void 0 : s.message);
        }
      });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout), this.events.emit(Fe.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
        await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
      }, G.toMiliseconds(U1)))));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async toEstablishConnection() {
      if (await this.confirmOnlineStateOrThrow(), !this.connected) {
        if (this.connectPromise) {
          await this.connectPromise;
          return;
        }
        await this.connect();
      }
    }
  }
  function rC(t, e) {
    return t === e || Number.isNaN(t) && Number.isNaN(e);
  }
  function Ch(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function Ah(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const iC = "[object RegExp]", oC = "[object String]", aC = "[object Number]", cC = "[object Boolean]", Ih = "[object Arguments]", lC = "[object Symbol]", dC = "[object Date]", hC = "[object Map]", uC = "[object Set]", fC = "[object Array]", pC = "[object Function]", gC = "[object ArrayBuffer]", Qa = "[object Object]", mC = "[object Error]", wC = "[object DataView]", yC = "[object Uint8Array]", bC = "[object Uint8ClampedArray]", EC = "[object Uint16Array]", vC = "[object Uint32Array]", CC = "[object BigUint64Array]", AC = "[object Int8Array]", IC = "[object Int16Array]", NC = "[object Int32Array]", _C = "[object BigInt64Array]", SC = "[object Float32Array]", TC = "[object Float64Array]";
  function OC() {
  }
  function Nh(t) {
    if (!t || typeof t != "object") return false;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : false;
  }
  function kC(t, e, s) {
    return Ei(t, e, void 0, void 0, void 0, void 0, s);
  }
  function Ei(t, e, s, n, r, i, o) {
    const a = o(t, e, s, n, r, i);
    if (a !== void 0) return a;
    if (typeof t == typeof e) switch (typeof t) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return t === e;
      case "number":
        return t === e || Object.is(t, e);
      case "function":
        return t === e;
      case "object":
        return Oi(t, e, i, o);
    }
    return Oi(t, e, i, o);
  }
  function Oi(t, e, s, n) {
    if (Object.is(t, e)) return true;
    let r = Ah(t), i = Ah(e);
    if (r === Ih && (r = Qa), i === Ih && (i = Qa), r !== i) return false;
    switch (r) {
      case oC:
        return t.toString() === e.toString();
      case aC: {
        const c = t.valueOf(), l = e.valueOf();
        return rC(c, l);
      }
      case cC:
      case dC:
      case lC:
        return Object.is(t.valueOf(), e.valueOf());
      case iC:
        return t.source === e.source && t.flags === e.flags;
      case pC:
        return t === e;
    }
    s = s ?? /* @__PURE__ */ new Map();
    const o = s.get(t), a = s.get(e);
    if (o != null && a != null) return o === e;
    s.set(t, e), s.set(e, t);
    try {
      switch (r) {
        case hC: {
          if (t.size !== e.size) return false;
          for (const [c, l] of t.entries()) if (!e.has(c) || !Ei(l, e.get(c), c, t, e, s, n)) return false;
          return true;
        }
        case uC: {
          if (t.size !== e.size) return false;
          const c = Array.from(t.values()), l = Array.from(e.values());
          for (let d = 0; d < c.length; d++) {
            const h = c[d], u = l.findIndex((f) => Ei(h, f, void 0, t, e, s, n));
            if (u === -1) return false;
            l.splice(u, 1);
          }
          return true;
        }
        case fC:
        case yC:
        case bC:
        case EC:
        case vC:
        case CC:
        case AC:
        case IC:
        case NC:
        case _C:
        case SC:
        case TC: {
          if (typeof ve < "u" && ve.isBuffer(t) !== ve.isBuffer(e) || t.length !== e.length) return false;
          for (let c = 0; c < t.length; c++) if (!Ei(t[c], e[c], c, t, e, s, n)) return false;
          return true;
        }
        case gC:
          return t.byteLength !== e.byteLength ? false : Oi(new Uint8Array(t), new Uint8Array(e), s, n);
        case wC:
          return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? false : Oi(new Uint8Array(t), new Uint8Array(e), s, n);
        case mC:
          return t.name === e.name && t.message === e.message;
        case Qa: {
          if (!(Oi(t.constructor, e.constructor, s, n) || Nh(t) && Nh(e))) return false;
          const c = [
            ...Object.keys(t),
            ...Ch(t)
          ], l = [
            ...Object.keys(e),
            ...Ch(e)
          ];
          if (c.length !== l.length) return false;
          for (let d = 0; d < c.length; d++) {
            const h = c[d], u = t[h];
            if (!Object.hasOwn(e, h)) return false;
            const f = e[h];
            if (!Ei(u, f, h, t, e, s, n)) return false;
          }
          return true;
        }
        default:
          return false;
      }
    } finally {
      s.delete(t), s.delete(e);
    }
  }
  function xC(t, e) {
    return kC(t, e, OC);
  }
  var PC = Object.defineProperty, _h = Object.getOwnPropertySymbols, $C = Object.prototype.hasOwnProperty, RC = Object.prototype.propertyIsEnumerable, Qc = (t, e, s) => e in t ? PC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Sh = (t, e) => {
    for (var s in e || (e = {})) $C.call(e, s) && Qc(t, s, e[s]);
    if (_h) for (var s of _h(e)) RC.call(e, s) && Qc(t, s, e[s]);
    return t;
  }, _t = (t, e, s) => Qc(t, typeof e != "symbol" ? e + "" : e, s);
  let wr = class extends Ey {
    constructor(e, s, n, r = xs, i = void 0) {
      super(e, s, n, r), this.core = e, this.logger = s, this.name = n, _t(this, "map", /* @__PURE__ */ new Map()), _t(this, "version", D1), _t(this, "cached", []), _t(this, "initialized", false), _t(this, "getKey"), _t(this, "storagePrefix", xs), _t(this, "recentlyDeleted", []), _t(this, "recentlyDeletedLimit", 200), _t(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
          this.getKey && o !== null && !bi(o) ? this.map.set(this.getKey(o), o) : h1(o) ? this.map.set(o.id, o) : u1(o) && this.map.set(o.topic, o);
        }), this.cached = [], this.initialized = true);
      }), _t(this, "set", async (o, a) => {
        this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
          type: "method",
          method: "set",
          key: o,
          value: a
        }), this.map.set(o, a), await this.persist());
      }), _t(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
        type: "method",
        method: "get",
        key: o
      }), this.getData(o))), _t(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => xC(a[c], o[c]))) : this.values)), _t(this, "update", async (o, a) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
          type: "method",
          method: "update",
          key: o,
          update: a
        });
        const c = Sh(Sh({}, this.getData(o)), a);
        this.map.set(o, c), await this.persist();
      }), _t(this, "delete", async (o, a) => {
        this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
          type: "method",
          method: "delete",
          key: o,
          reason: a
        }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
      }), this.logger = qt(s, this.name), this.storagePrefix = r, this.getKey = i;
    }
    get context() {
      return jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
      this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
      const s = this.map.get(e);
      if (!s) {
        if (this.recentlyDeleted.includes(e)) {
          const { message: r } = Te("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
          throw this.logger.error(r), new Error(r);
        }
        const { message: n } = Te("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.error(n), new Error(n);
      }
      return s;
    }
    async persist() {
      await this.setDataStore(this.values);
    }
    async restore() {
      try {
        const e = await this.getDataStore();
        if (typeof e > "u" || !e.length) return;
        if (this.map.size) {
          const { message: s } = Te("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var UC = Object.defineProperty, DC = (t, e, s) => e in t ? UC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, me = (t, e, s) => DC(t, typeof e != "symbol" ? e + "" : e, s);
  let LC = class {
    constructor(e, s) {
      this.core = e, this.logger = s, me(this, "name", F1), me(this, "version", j1), me(this, "events", new _l()), me(this, "pairings"), me(this, "initialized", false), me(this, "storagePrefix", xs), me(this, "ignoredPayloadTypes", [
        Jr
      ]), me(this, "registeredMethods", []), me(this, "init", async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }), me(this, "register", ({ methods: n }) => {
        this.isInitialized(), this.registeredMethods = [
          .../* @__PURE__ */ new Set([
            ...this.registeredMethods,
            ...n
          ])
        ];
      }), me(this, "create", async (n) => {
        this.isInitialized();
        const r = Hc(), i = await this.core.crypto.setSymKey(r), o = _i(G.FIVE_MINUTES), a = {
          protocol: Np
        }, c = {
          topic: i,
          expiry: o,
          relay: a,
          active: false,
          methods: n == null ? void 0 : n.methods
        }, l = oh({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: i,
          symKey: r,
          relay: a,
          expiryTimestamp: o,
          methods: n == null ? void 0 : n.methods
        });
        return this.events.emit(Kn.create, c), this.core.expirer.set(i, o), await this.pairings.set(i, c), await this.core.relayer.subscribe(i, {
          transportType: n == null ? void 0 : n.transportType,
          internal: n == null ? void 0 : n.internal
        }), {
          topic: i,
          uri: l
        };
      }), me(this, "pair", async (n) => {
        this.isInitialized();
        const r = this.core.eventClient.createEvent({
          properties: {
            topic: n == null ? void 0 : n.uri,
            trace: [
              Cs.pairing_started
            ]
          }
        });
        this.isValidPair(n, r);
        const { topic: i, symKey: o, relay: a, expiryTimestamp: c, methods: l } = ih(n.uri);
        r.props.properties.topic = i, r.addTrace(Cs.pairing_uri_validation_success), r.addTrace(Cs.pairing_uri_not_expired);
        let d;
        if (this.pairings.keys.includes(i)) {
          if (d = this.pairings.get(i), r.addTrace(Cs.existing_pairing), d.active) throw r.setError(Ls.active_pairing_already_exists), new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
          r.addTrace(Cs.pairing_not_expired);
        }
        const h = c || _i(G.FIVE_MINUTES), u = {
          topic: i,
          relay: a,
          expiry: h,
          active: false,
          methods: l
        };
        this.core.expirer.set(i, h), await this.pairings.set(i, u), r.addTrace(Cs.store_new_pairing), n.activatePairing && await this.activate({
          topic: i
        }), this.events.emit(Kn.create, u), r.addTrace(Cs.emit_inactive_pairing), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(o, i), r.addTrace(Cs.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          r.setError(Ls.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(i, {
            relay: a
          });
        } catch (f) {
          throw r.setError(Ls.subscribe_pairing_topic_failure), f;
        }
        return r.addTrace(Cs.subscribe_pairing_topic_success), u;
      }), me(this, "activate", async ({ topic: n }) => {
        this.isInitialized();
        const r = _i(G.FIVE_MINUTES);
        this.core.expirer.set(n, r), await this.pairings.update(n, {
          active: true,
          expiry: r
        });
      }), me(this, "ping", async (n) => {
        this.isInitialized(), await this.isValidPing(n), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
        const { topic: r } = n;
        if (this.pairings.keys.includes(r)) {
          const i = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = By();
          this.events.once(Ma("pairing_ping", i), ({ error: l }) => {
            l ? c(l) : a();
          }), await o();
        }
      }), me(this, "updateExpiry", async ({ topic: n, expiry: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          expiry: r
        });
      }), me(this, "updateMetadata", async ({ topic: n, metadata: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          peerMetadata: r
        });
      }), me(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), me(this, "disconnect", async (n) => {
        this.isInitialized(), await this.isValidDisconnect(n);
        const { topic: r } = n;
        this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", yi("USER_DISCONNECTED")), await this.deletePairing(r));
      }), me(this, "formatUriFromPairing", (n) => {
        this.isInitialized();
        const { topic: r, relay: i, expiry: o, methods: a } = n, c = this.core.crypto.keychain.get(r);
        return oh({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: r,
          symKey: c,
          relay: i,
          expiryTimestamp: o,
          methods: a
        });
      }), me(this, "sendRequest", async (n, r, i) => {
        const o = Is(r, i), a = await this.core.crypto.encode(n, o), c = ii[r].req;
        return this.core.history.set(n, o), this.core.relayer.publish(n, a, c), o.id;
      }), me(this, "sendResult", async (n, r, i) => {
        const o = $i(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = ii[c].res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), me(this, "sendError", async (n, r, i) => {
        const o = af(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = ii[c] ? ii[c].res : ii.unregistered_method.res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), me(this, "deletePairing", async (n, r) => {
        await this.core.relayer.unsubscribe(n), await Promise.all([
          this.pairings.delete(n, yi("USER_DISCONNECTED")),
          this.core.crypto.deleteSymKey(n),
          r ? Promise.resolve() : this.core.expirer.del(n)
        ]);
      }), me(this, "cleanup", async () => {
        const n = this.pairings.getAll().filter((r) => xd(r.expiry));
        await Promise.all(n.map((r) => this.deletePairing(r.topic)));
      }), me(this, "onRelayEventRequest", async (n) => {
        const { topic: r, payload: i } = n;
        switch (i.method) {
          case "wc_pairingPing":
            return await this.onPairingPingRequest(r, i);
          case "wc_pairingDelete":
            return await this.onPairingDeleteRequest(r, i);
          default:
            return await this.onUnknownRpcMethodRequest(r, i);
        }
      }), me(this, "onRelayEventResponse", async (n) => {
        const { topic: r, payload: i } = n, o = (await this.core.history.get(r, i.id)).request.method;
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(r, i);
          default:
            return this.onUnknownRpcMethodResponse(o);
        }
      }), me(this, "onPairingPingRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidPing({
            topic: n
          }), await this.sendResult(i, n, true), this.events.emit(Kn.ping, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), me(this, "onPairingPingResponse", (n, r) => {
        const { id: i } = r;
        setTimeout(() => {
          Us(r) ? this.events.emit(Ma("pairing_ping", i), {}) : As(r) && this.events.emit(Ma("pairing_ping", i), {
            error: r.error
          });
        }, 500);
      }), me(this, "onPairingDeleteRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidDisconnect({
            topic: n
          }), await this.deletePairing(n), this.events.emit(Kn.delete, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), me(this, "onUnknownRpcMethodRequest", async (n, r) => {
        const { id: i, method: o } = r;
        try {
          if (this.registeredMethods.includes(o)) return;
          const a = yi("WC_METHOD_UNSUPPORTED", o);
          await this.sendError(i, n, a), this.logger.error(a);
        } catch (a) {
          await this.sendError(i, n, a), this.logger.error(a);
        }
      }), me(this, "onUnknownRpcMethodResponse", (n) => {
        this.registeredMethods.includes(n) || this.logger.error(yi("WC_METHOD_UNSUPPORTED", n));
      }), me(this, "isValidPair", (n, r) => {
        var i;
        if (!Za(n)) {
          const { message: a } = Te("MISSING_OR_INVALID", `pair() params: ${n}`);
          throw r.setError(Ls.malformed_pairing_uri), new Error(a);
        }
        if (!d1(n.uri)) {
          const { message: a } = Te("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
          throw r.setError(Ls.malformed_pairing_uri), new Error(a);
        }
        const o = ih(n == null ? void 0 : n.uri);
        if (!((i = o == null ? void 0 : o.relay) != null && i.protocol)) {
          const { message: a } = Te("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw r.setError(Ls.malformed_pairing_uri), new Error(a);
        }
        if (!(o != null && o.symKey)) {
          const { message: a } = Te("MISSING_OR_INVALID", "pair() uri#symKey");
          throw r.setError(Ls.malformed_pairing_uri), new Error(a);
        }
        if (o != null && o.expiryTimestamp && G.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
          r.setError(Ls.pairing_expired);
          const { message: a } = Te("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(a);
        }
      }), me(this, "isValidPing", async (n) => {
        if (!Za(n)) {
          const { message: i } = Te("MISSING_OR_INVALID", `ping() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), me(this, "isValidDisconnect", async (n) => {
        if (!Za(n)) {
          const { message: i } = Te("MISSING_OR_INVALID", `disconnect() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), me(this, "isValidPairingTopic", async (n) => {
        if (!Cp(n)) {
          const { message: r } = Te("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
          throw new Error(r);
        }
        if (!this.pairings.keys.includes(n)) {
          const { message: r } = Te("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
          throw new Error(r);
        }
        if (xd(this.pairings.get(n).expiry)) {
          await this.deletePairing(n);
          const { message: r } = Te("EXPIRED", `pairing topic: ${n}`);
          throw new Error(r);
        }
      }), this.core = e, this.logger = qt(s, this.name), this.pairings = new wr(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return jt(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(Fe.message, async (e) => {
        const { topic: s, message: n, transportType: r } = e;
        if (this.pairings.keys.includes(s) && r !== Ue.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) try {
          const i = await this.core.crypto.decode(s, n);
          Il(i) ? (this.core.history.set(s, i), await this.onRelayEventRequest({
            topic: s,
            payload: i
          })) : Nl(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
            topic: s,
            payload: i
          }), this.core.history.delete(s, i.id)), await this.core.relayer.messages.ack(s, n);
        } catch (i) {
          this.logger.error(i);
        }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(Yt.expired, async (e) => {
        const { topic: s } = jy(e.target);
        s && this.pairings.keys.includes(s) && (await this.deletePairing(s, true), this.events.emit(Kn.expire, {
          topic: s
        }));
      });
    }
  };
  var BC = Object.defineProperty, MC = (t, e, s) => e in t ? BC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Xe = (t, e, s) => MC(t, typeof e != "symbol" ? e + "" : e, s);
  let FC = class extends my {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, Xe(this, "records", /* @__PURE__ */ new Map()), Xe(this, "events", new hr.EventEmitter()), Xe(this, "name", q1), Xe(this, "version", W1), Xe(this, "cached", []), Xe(this, "initialized", false), Xe(this, "storagePrefix", xs), Xe(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), Xe(this, "set", (n, r, i) => {
        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
          type: "method",
          method: "set",
          topic: n,
          request: r,
          chainId: i
        }), this.records.has(r.id)) return;
        const o = {
          id: r.id,
          topic: n,
          request: {
            method: r.method,
            params: r.params || null
          },
          chainId: i,
          expiry: _i(G.THIRTY_DAYS)
        };
        this.records.set(o.id, o), this.persist(), this.events.emit(ts.created, o);
      }), Xe(this, "resolve", async (n) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
          type: "method",
          method: "update",
          response: n
        }), !this.records.has(n.id)) return;
        const r = await this.getRecord(n.id);
        typeof r.response > "u" && (r.response = As(n) ? {
          error: n.error
        } : {
          result: n.result
        }, this.records.set(r.id, r), this.persist(), this.events.emit(ts.updated, r));
      }), Xe(this, "get", async (n, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
        type: "method",
        method: "get",
        topic: n,
        id: r
      }), await this.getRecord(r))), Xe(this, "delete", (n, r) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
          type: "method",
          method: "delete",
          id: r
        }), this.values.forEach((i) => {
          if (i.topic === n) {
            if (typeof r < "u" && i.id !== r) return;
            this.records.delete(i.id), this.events.emit(ts.deleted, i);
          }
        }), this.persist();
      }), Xe(this, "exists", async (n, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === n : false)), Xe(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Xe(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Xe(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Xe(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = qt(s, this.name);
    }
    get context() {
      return jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      const e = [];
      return this.values.forEach((s) => {
        if (typeof s.response < "u") return;
        const n = {
          topic: s.topic,
          request: Is(s.request.method, s.request.params, s.id),
          chainId: s.chainId
        };
        return e.push(n);
      }), e;
    }
    async setJsonRpcRecords(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
      this.isInitialized();
      const s = this.records.get(e);
      if (!s) {
        const { message: n } = Te("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(n);
      }
      return s;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(ts.sync);
    }
    async restore() {
      try {
        const e = await this.getJsonRpcRecords();
        if (typeof e > "u" || !e.length) return;
        if (this.records.size) {
          const { message: s } = Te("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
      }
    }
    registerEventListeners() {
      this.events.on(ts.created, (e) => {
        const s = ts.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(ts.updated, (e) => {
        const s = ts.updated;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(ts.deleted, (e) => {
        const s = ts.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.core.heartbeat.on(Zr.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = false;
        this.records.forEach((s) => {
          G.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(ts.deleted, s, false), e = true);
        }), e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var jC = Object.defineProperty, qC = (t, e, s) => e in t ? jC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, lt = (t, e, s) => qC(t, typeof e != "symbol" ? e + "" : e, s);
  let WC = class extends Cy {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, lt(this, "expirations", /* @__PURE__ */ new Map()), lt(this, "events", new hr.EventEmitter()), lt(this, "name", H1), lt(this, "version", V1), lt(this, "cached", []), lt(this, "initialized", false), lt(this, "storagePrefix", xs), lt(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), lt(this, "has", (n) => {
        try {
          const r = this.formatTarget(n);
          return typeof this.getExpiration(r) < "u";
        } catch {
          return false;
        }
      }), lt(this, "set", (n, r) => {
        this.isInitialized();
        const i = this.formatTarget(n), o = {
          target: i,
          expiry: r
        };
        this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(Yt.created, {
          target: i,
          expiration: o
        });
      }), lt(this, "get", (n) => {
        this.isInitialized();
        const r = this.formatTarget(n);
        return this.getExpiration(r);
      }), lt(this, "del", (n) => {
        if (this.isInitialized(), this.has(n)) {
          const r = this.formatTarget(n), i = this.getExpiration(r);
          this.expirations.delete(r), this.events.emit(Yt.deleted, {
            target: r,
            expiration: i
          });
        }
      }), lt(this, "on", (n, r) => {
        this.events.on(n, r);
      }), lt(this, "once", (n, r) => {
        this.events.once(n, r);
      }), lt(this, "off", (n, r) => {
        this.events.off(n, r);
      }), lt(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = qt(s, this.name);
    }
    get context() {
      return jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e) {
      if (typeof e == "string") return My(e);
      if (typeof e == "number") return Fy(e);
      const { message: s } = Te("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(s);
    }
    async setExpirations(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(Yt.sync);
    }
    async restore() {
      try {
        const e = await this.getExpirations();
        if (typeof e > "u" || !e.length) return;
        if (this.expirations.size) {
          const { message: s } = Te("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
      }
    }
    getExpiration(e) {
      const s = this.expirations.get(e);
      if (!s) {
        const { message: n } = Te("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.warn(n), new Error(n);
      }
      return s;
    }
    checkExpiry(e, s) {
      const { expiry: n } = s;
      G.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, s);
    }
    expire(e, s) {
      this.expirations.delete(e), this.events.emit(Yt.expired, {
        target: e,
        expiration: s
      });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(Zr.pulse, () => this.checkExpirations()), this.events.on(Yt.created, (e) => {
        const s = Yt.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(Yt.expired, (e) => {
        const s = Yt.expired;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(Yt.deleted, (e) => {
        const s = Yt.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Te("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var HC = Object.defineProperty, VC = (t, e, s) => e in t ? HC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, qe = (t, e, s) => VC(t, typeof e != "symbol" ? e + "" : e, s);
  let KC = class extends Ay {
    constructor(e, s, n) {
      super(e, s, n), this.core = e, this.logger = s, this.store = n, qe(this, "name", K1), qe(this, "abortController"), qe(this, "isDevEnv"), qe(this, "verifyUrlV3", G1), qe(this, "storagePrefix", xs), qe(this, "version", Ip), qe(this, "publicKey"), qe(this, "fetchPromise"), qe(this, "init", async () => {
        var r;
        this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && G.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
      }), qe(this, "register", async (r) => {
        if (!Gi() || this.isDevEnv) return;
        const i = window.location.origin, { id: o, decryptedId: a } = r, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${i}&id=${o}&decryptedId=${a}`;
        try {
          const l = Ft.getDocument(), d = this.startAbortTimer(G.ONE_SECOND * 5), h = await new Promise((u, f) => {
            const g = () => {
              window.removeEventListener("message", w), l.body.removeChild(p), f("attestation aborted");
            };
            this.abortController.signal.addEventListener("abort", g);
            const p = l.createElement("iframe");
            p.src = c, p.style.display = "none", p.addEventListener("error", g, {
              signal: this.abortController.signal
            });
            const w = (T) => {
              if (T.data && typeof T.data == "string") try {
                const I = JSON.parse(T.data);
                if (I.type === "verify_attestation") {
                  if (Nc(I.attestation).payload.id !== o) return;
                  clearInterval(d), l.body.removeChild(p), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", w), u(I.attestation === null ? "" : I.attestation);
                }
              } catch (I) {
                this.logger.warn(I);
              }
            };
            l.body.appendChild(p), window.addEventListener("message", w, {
              signal: this.abortController.signal
            });
          });
          return this.logger.debug(h, "jwt attestation"), h;
        } catch (l) {
          this.logger.warn(l);
        }
        return "";
      }), qe(this, "resolve", async (r) => {
        if (this.isDevEnv) return "";
        const { attestationId: i, hash: o, encryptedId: a } = r;
        if (i === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (i) {
          if (Nc(i).payload.id !== a) return;
          const l = await this.isValidJwtAttestation(i);
          if (l) {
            if (!l.isVerified) {
              this.logger.warn("resolve: jwt attestation: origin url not verified");
              return;
            }
            return l;
          }
        }
        if (!o) return;
        const c = this.getVerifyUrl(r == null ? void 0 : r.verifyUrl);
        return this.fetchAttestation(o, c);
      }), qe(this, "fetchAttestation", async (r, i) => {
        this.logger.debug(`resolving attestation: ${r} from url: ${i}`);
        const o = this.startAbortTimer(G.ONE_SECOND * 5), a = await fetch(`${i}/attestation/${r}?v2Supported=true`, {
          signal: this.abortController.signal
        });
        return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
      }), qe(this, "getVerifyUrl", (r) => {
        let i = r || Ti;
        return Y1.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Ti}`), i = Ti), i;
      }), qe(this, "fetchPublicKey", async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const r = this.startAbortTimer(G.FIVE_SECONDS), i = await fetch(`${this.verifyUrlV3}/public-key`, {
            signal: this.abortController.signal
          });
          return clearTimeout(r), await i.json();
        } catch (r) {
          this.logger.warn(r);
        }
      }), qe(this, "persistPublicKey", async (r) => {
        this.logger.debug(r, "persisting public key to local storage"), await this.store.setItem(this.storeKey, r), this.publicKey = r;
      }), qe(this, "removePublicKey", async () => {
        this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
      }), qe(this, "isValidJwtAttestation", async (r) => {
        const i = await this.getPublicKey();
        try {
          if (i) return this.validateAttestation(r, i);
        } catch (a) {
          this.logger.error(a), this.logger.warn("error validating attestation");
        }
        const o = await this.fetchAndPersistPublicKey();
        try {
          if (o) return this.validateAttestation(r, o);
        } catch (a) {
          this.logger.error(a), this.logger.warn("error validating attestation");
        }
      }), qe(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), qe(this, "fetchAndPersistPublicKey", async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (i) => {
          const o = await this.fetchPublicKey();
          o && (await this.persistPublicKey(o), i(o));
        });
        const r = await this.fetchPromise;
        return this.fetchPromise = void 0, r;
      }), qe(this, "validateAttestation", (r, i) => {
        const o = Jb(r, i.publicKey), a = {
          hasExpired: G.toMiliseconds(o.exp) < Date.now(),
          payload: o
        };
        if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
        return {
          origin: a.payload.origin,
          isScam: a.payload.isScam,
          isVerified: a.payload.isVerified
        };
      }), this.logger = qt(s, this.name), this.abortController = new AbortController(), this.isDevEnv = _f(), this.init();
    }
    get storeKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
      return jt(this.logger);
    }
    startAbortTimer(e) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), G.toMiliseconds(e));
    }
  };
  var zC = Object.defineProperty, GC = (t, e, s) => e in t ? zC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Th = (t, e, s) => GC(t, typeof e != "symbol" ? e + "" : e, s);
  let YC = class extends Iy {
    constructor(e, s) {
      super(e, s), this.projectId = e, this.logger = s, Th(this, "context", Z1), Th(this, "registerDeviceToken", async (n) => {
        const { clientId: r, token: i, notificationType: o, enableEncrypted: a = false } = n, c = `${J1}/${this.projectId}/clients`;
        await fetch(c, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            client_id: r,
            type: o,
            token: i,
            always_raw: a
          })
        });
      }), this.logger = qt(s, this.context);
    }
  };
  var ZC = Object.defineProperty, Oh = Object.getOwnPropertySymbols, JC = Object.prototype.hasOwnProperty, XC = Object.prototype.propertyIsEnumerable, el = (t, e, s) => e in t ? ZC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ci = (t, e) => {
    for (var s in e || (e = {})) JC.call(e, s) && el(t, s, e[s]);
    if (Oh) for (var s of Oh(e)) XC.call(e, s) && el(t, s, e[s]);
    return t;
  }, Ge = (t, e, s) => el(t, typeof e != "symbol" ? e + "" : e, s);
  let QC = class extends Ny {
    constructor(e, s, n = true) {
      super(e, s, n), this.core = e, this.logger = s, Ge(this, "context", Q1), Ge(this, "storagePrefix", xs), Ge(this, "storageVersion", X1), Ge(this, "events", /* @__PURE__ */ new Map()), Ge(this, "shouldPersist", false), Ge(this, "init", async () => {
        if (!_f()) try {
          const r = {
            eventId: Pd(),
            timestamp: Date.now(),
            domain: this.getAppDomain(),
            props: {
              event: "INIT",
              type: "",
              properties: {
                client_id: await this.core.crypto.getClientId(),
                user_agent: If(this.core.relayer.protocol, this.core.relayer.version, Kc)
              }
            }
          };
          await this.sendEvent([
            r
          ]);
        } catch (r) {
          this.logger.warn(r);
        }
      }), Ge(this, "createEvent", (r) => {
        const { event: i = "ERROR", type: o = "", properties: { topic: a, trace: c } } = r, l = Pd(), d = this.core.projectId || "", h = Date.now(), u = ci({
          eventId: l,
          timestamp: h,
          props: {
            event: i,
            type: o,
            properties: {
              topic: a,
              trace: c
            }
          },
          bundleId: d,
          domain: this.getAppDomain()
        }, this.setMethods(l));
        return this.telemetryEnabled && (this.events.set(l, u), this.shouldPersist = true), u;
      }), Ge(this, "getEvent", (r) => {
        const { eventId: i, topic: o } = r;
        if (i) return this.events.get(i);
        const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
        if (a) return ci(ci({}, a), this.setMethods(a.eventId));
      }), Ge(this, "deleteEvent", (r) => {
        const { eventId: i } = r;
        this.events.delete(i), this.shouldPersist = true;
      }), Ge(this, "setEventListeners", () => {
        this.core.heartbeat.on(Zr.pulse, async () => {
          this.shouldPersist && await this.persist(), this.events.forEach((r) => {
            G.fromMiliseconds(Date.now()) - G.fromMiliseconds(r.timestamp) > eE && (this.events.delete(r.eventId), this.shouldPersist = true);
          });
        });
      }), Ge(this, "setMethods", (r) => ({
        addTrace: (i) => this.addTrace(r, i),
        setError: (i) => this.setError(r, i)
      })), Ge(this, "addTrace", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.properties.trace.push(i), this.events.set(r, o), this.shouldPersist = true);
      }), Ge(this, "setError", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.type = i, o.timestamp = Date.now(), this.events.set(r, o), this.shouldPersist = true);
      }), Ge(this, "persist", async () => {
        await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
      }), Ge(this, "restore", async () => {
        try {
          const r = await this.core.storage.getItem(this.storageKey) || [];
          if (!r.length) return;
          r.forEach((i) => {
            this.events.set(i.eventId, ci(ci({}, i), this.setMethods(i.eventId)));
          });
        } catch (r) {
          this.logger.warn(r);
        }
      }), Ge(this, "submit", async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const r = [];
        for (const [i, o] of this.events) o.props.type && r.push(o);
        if (r.length !== 0) try {
          if ((await this.sendEvent(r)).ok) for (const i of r) this.events.delete(i.eventId), this.shouldPersist = true;
        } catch (i) {
          this.logger.warn(i);
        }
      }), Ge(this, "sendEvent", async (r) => {
        const i = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(`${tE}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Kc}${i}`, {
          method: "POST",
          body: JSON.stringify(r)
        });
      }), Ge(this, "getAppDomain", () => Ry().url), this.logger = qt(s, this.context), this.telemetryEnabled = n, n ? this.restore().then(async () => {
        await this.submit(), this.setEventListeners();
      }) : this.persist();
    }
    get storageKey() {
      return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
  };
  var eA = Object.defineProperty, kh = Object.getOwnPropertySymbols, tA = Object.prototype.hasOwnProperty, sA = Object.prototype.propertyIsEnumerable, tl = (t, e, s) => e in t ? eA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, xh = (t, e) => {
    for (var s in e || (e = {})) tA.call(e, s) && tl(t, s, e[s]);
    if (kh) for (var s of kh(e)) sA.call(e, s) && tl(t, s, e[s]);
    return t;
  }, Re = (t, e, s) => tl(t, typeof e != "symbol" ? e + "" : e, s);
  let nA = class Mp extends uy {
    constructor(e) {
      var s;
      super(e), Re(this, "protocol", Ap), Re(this, "version", Ip), Re(this, "name", Vc), Re(this, "relayUrl"), Re(this, "projectId"), Re(this, "customStoragePrefix"), Re(this, "events", new hr.EventEmitter()), Re(this, "logger"), Re(this, "heartbeat"), Re(this, "relayer"), Re(this, "crypto"), Re(this, "storage"), Re(this, "history"), Re(this, "expirer"), Re(this, "pairing"), Re(this, "verify"), Re(this, "echoClient"), Re(this, "linkModeSupportedApps"), Re(this, "eventClient"), Re(this, "initialized", false), Re(this, "logChunkController"), Re(this, "on", (a, c) => this.events.on(a, c)), Re(this, "once", (a, c) => this.events.once(a, c)), Re(this, "off", (a, c) => this.events.off(a, c)), Re(this, "removeListener", (a, c) => this.events.removeListener(a, c)), Re(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
        if (!a || !c) return;
        const d = {
          topic: a,
          message: c,
          publishedAt: Date.now(),
          transportType: Ue.link_mode
        };
        this.relayer.onLinkMessageEvent(d, {
          sessionExists: l
        });
      });
      const n = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
      if (n) try {
        return this.customStoragePrefix = n.customStoragePrefix, this.logger = n.logger, this.heartbeat = n.heartbeat, this.crypto = n.crypto, this.history = n.history, this.expirer = n.expirer, this.storage = n.storage, this.relayer = n.relayer, this.pairing = n.pairing, this.verify = n.verify, this.echoClient = n.echoClient, this.linkModeSupportedApps = n.linkModeSupportedApps, this.eventClient = n.eventClient, this.initialized = n.initialized, this.logChunkController = n.logChunkController, n;
      } catch (a) {
        console.warn("Failed to copy global core", a);
      }
      this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || _p, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
      const r = iy({
        level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : C1.logger,
        name: Vc
      }), { logger: i, chunkLoggerController: o } = Af({
        opts: r,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger
      });
      this.logChunkController = o, (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
        var a, c;
        (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
          clientId: await this.crypto.getClientId()
        }));
      }), this.logger = qt(i, this.name), this.heartbeat = new ym(), this.crypto = new kv(this, this.logger, e == null ? void 0 : e.keychain), this.history = new FC(this, this.logger), this.expirer = new WC(this, this.logger), this.storage = e != null && e.storage ? e.storage : new bm(xh(xh({}, A1), e == null ? void 0 : e.storageOptions)), this.relayer = new nC({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId
      }), this.pairing = new LC(this, this.logger), this.verify = new KC(this, this.logger, this.storage), this.echoClient = new YC(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new QC(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
    }
    static async init(e) {
      const s = new Mp(e);
      await s.initialize();
      const n = await s.crypto.getClientId();
      return await s.storage.setItem(L1, n), s;
    }
    get context() {
      return jt(this.logger);
    }
    async start() {
      this.initialized || await this.initialize();
    }
    async getLogsBlob() {
      var e;
      return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
        clientId: await this.crypto.getClientId()
      });
    }
    async addLinkModeSupportedApp(e) {
      this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(lh, this.linkModeSupportedApps));
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(lh) || [], this.initialized = true, this.logger.info("Core Initialization Success");
      } catch (e) {
        throw this.logger.warn(e, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e.message), e;
      }
    }
    getGlobalCore(e = "") {
      try {
        if (this.isGlobalCoreDisabled()) return;
        const s = `_walletConnectCore_${e}`, n = `${s}_count`;
        return globalThis[n] = (globalThis[n] || 0) + 1, globalThis[n] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[n]} times.`), globalThis[s];
      } catch (s) {
        console.warn("Failed to get global WalletConnect core", s);
        return;
      }
    }
    setGlobalCore(e) {
      var s;
      try {
        if (this.isGlobalCoreDisabled()) return;
        const n = `_walletConnectCore_${((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""}`;
        globalThis[n] = e;
      } catch (n) {
        console.warn("Failed to set global WalletConnect core", n);
      }
    }
    isGlobalCoreDisabled() {
      try {
        return typeof Xt < "u" && v1.DISABLE_GLOBAL_CORE === "true";
      } catch {
        return true;
      }
    }
  };
  const rA = nA;
  var iA = Object.defineProperty, oA = (t, e, s) => e in t ? iA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ph = (t, e, s) => oA(t, typeof e != "symbol" ? e + "" : e, s);
  let aA = class {
    constructor(e) {
      this.opts = e, Ph(this, "protocol", "wc"), Ph(this, "version", 2);
    }
  }, cA = class {
    constructor(e) {
      this.client = e;
    }
  };
  function lA(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), h = d.charCodeAt(0);
      if (e[h] !== 255) throw new TypeError(d + " is ambiguous");
      e[h] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, h = 0, u = 0;
      const f = l.length;
      for (; u !== f && l[u] === 0; ) u++, d++;
      const g = (f - u) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; u !== f; ) {
        let I = l[u], N = 0;
        for (let $ = g - 1; (I !== 0 || N < h) && $ !== -1; $--, N++) I += 256 * p[$] >>> 0, p[$] = I % s >>> 0, I = I / s >>> 0;
        if (I !== 0) throw new Error("Non-zero carry");
        h = N, u++;
      }
      let w = g - h;
      for (; w !== g && p[w] === 0; ) w++;
      let T = n.repeat(d);
      for (; w < g; ++w) T += t.charAt(p[w]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, h = 0, u = 0;
      for (; l[d] === n; ) h++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const I = l.charCodeAt(d);
        if (I > 255) return;
        let N = e[I];
        if (N === 255) return;
        let $ = 0;
        for (let U = f - 1; (N !== 0 || $ < u) && U !== -1; U--, $++) N += s * g[U] >>> 0, g[U] = N % 256 >>> 0, N = N / 256 >>> 0;
        if (N !== 0) throw new Error("Non-zero carry");
        u = $, d++;
      }
      let p = f - u;
      for (; p !== f && g[p] === 0; ) p++;
      const w = new Uint8Array(h + (f - p));
      let T = h;
      for (; p !== f; ) w[T++] = g[p++];
      return w;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var dA = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const Qi = lA(dA), hA = "custom_context", Fl = 1e3 * 1024;
  var uA = Object.defineProperty, fA = (t, e, s) => e in t ? uA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Nn = (t, e, s) => fA(t, typeof e != "symbol" ? e + "" : e, s);
  let pA = class {
    constructor(e) {
      Nn(this, "nodeValue"), Nn(this, "sizeInBytes"), Nn(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  }, $h = class {
    constructor(e) {
      Nn(this, "lengthInNodes"), Nn(this, "sizeInBytes"), Nn(this, "head"), Nn(this, "tail"), Nn(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
      const s = new pA(e);
      if (s.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${s.size}`);
      for (; this.size + s.size > this.maxSizeInBytes; ) this.shift();
      this.head ? (this.tail && (this.tail.next = s), this.tail = s) : (this.head = s, this.tail = s), this.lengthInNodes++, this.sizeInBytes += s.size;
    }
    shift() {
      if (!this.head) return;
      const e = this.head;
      this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
      const e = [];
      let s = this.head;
      for (; s !== null; ) e.push(s.value), s = s.next;
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return {
            done: true,
            value: null
          };
          const s = e.value;
          return e = e.next, {
            done: false,
            value: s
          };
        }
      };
    }
  };
  var gA = Object.defineProperty, mA = (t, e, s) => e in t ? gA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, wo = (t, e, s) => mA(t, typeof e != "symbol" ? e + "" : e, s);
  let Fp = class {
    constructor(e, s = Fl) {
      wo(this, "logs"), wo(this, "level"), wo(this, "levelValue"), wo(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = hs.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = s, this.logs = new $h(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, s) {
      s === hs.levels.values.error ? console.error(e) : s === hs.levels.values.warn ? console.warn(e) : s === hs.levels.values.debug ? console.debug(e) : s === hs.levels.values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(Pi({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        log: e
      }));
      const s = typeof e == "string" ? JSON.parse(e).level : e.level;
      s >= this.levelValue && this.forwardToConsole(e, s);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new $h(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      const s = this.getLogArray();
      return s.push(Pi({
        extraMetadata: e
      })), new Blob(s, {
        type: "application/json"
      });
    }
  };
  var wA = Object.defineProperty, yA = (t, e, s) => e in t ? wA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, bA = (t, e, s) => yA(t, e + "", s);
  let EA = class {
    constructor(e, s = Fl) {
      bA(this, "baseChunkLogger"), this.baseChunkLogger = new Fp(e, s);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      const s = URL.createObjectURL(this.logsToBlob(e)), n = document.createElement("a");
      n.href = s, n.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(s);
    }
  };
  var vA = Object.defineProperty, CA = (t, e, s) => e in t ? vA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, AA = (t, e, s) => CA(t, e + "", s);
  let IA = class {
    constructor(e, s = Fl) {
      AA(this, "baseChunkLogger"), this.baseChunkLogger = new Fp(e, s);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  };
  var NA = Object.defineProperty, _A = Object.defineProperties, SA = Object.getOwnPropertyDescriptors, Rh = Object.getOwnPropertySymbols, TA = Object.prototype.hasOwnProperty, OA = Object.prototype.propertyIsEnumerable, Uh = (t, e, s) => e in t ? NA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, sl = (t, e) => {
    for (var s in e || (e = {})) TA.call(e, s) && Uh(t, s, e[s]);
    if (Rh) for (var s of Rh(e)) OA.call(e, s) && Uh(t, s, e[s]);
    return t;
  }, nl = (t, e) => _A(t, SA(e));
  function kA(t, e = hA) {
    return t[e] || "";
  }
  function xA(t) {
    var e, s;
    const n = new EA((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
    return {
      logger: la(nl(sl({}, t.opts), {
        level: "trace",
        browser: nl(sl({}, (s = t.opts) == null ? void 0 : s.browser), {
          write: (r) => n.write(r)
        })
      })),
      chunkLoggerController: n
    };
  }
  function PA(t) {
    var e;
    const s = new IA((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
    return {
      logger: la(nl(sl({}, t.opts), {
        level: "trace"
      }), s),
      chunkLoggerController: s
    };
  }
  function $A(t) {
    return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string" ? {
      logger: t.loggerOverride,
      chunkLoggerController: null
    } : typeof window < "u" ? xA(t) : PA(t);
  }
  var RA = {};
  const UA = ":";
  function Ys(t) {
    const [e, s] = t.split(UA);
    return {
      namespace: e,
      reference: s
    };
  }
  function jp(t, e) {
    return t.includes(":") ? [
      t
    ] : e.chains || [];
  }
  var DA = Object.defineProperty, LA = Object.defineProperties, BA = Object.getOwnPropertyDescriptors, Dh = Object.getOwnPropertySymbols, MA = Object.prototype.hasOwnProperty, FA = Object.prototype.propertyIsEnumerable, rl = (t, e, s) => e in t ? DA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Lh = (t, e) => {
    for (var s in e || (e = {})) MA.call(e, s) && rl(t, s, e[s]);
    if (Dh) for (var s of Dh(e)) FA.call(e, s) && rl(t, s, e[s]);
    return t;
  }, jA = (t, e) => LA(t, BA(e)), Bh = (t, e, s) => rl(t, typeof e != "symbol" ? e + "" : e, s);
  const qA = "ReactNative", Pr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  };
  function qp() {
    return typeof Xt < "u" && typeof Xt.versions < "u" && typeof Xt.versions.node < "u";
  }
  function Wp() {
    return !Ft.getDocument() && !!Ft.getNavigator() && navigator.product === qA;
  }
  function Hp() {
    return !qp() && !!Ft.getNavigator() && !!Ft.getDocument();
  }
  function WA() {
    return Wp() ? Pr.reactNative : qp() ? Pr.node : Hp() ? Pr.browser : Pr.unknown;
  }
  function HA(t) {
    var e, s;
    const n = VA();
    try {
      return t != null && t.url && n.url && new URL(t.url).host !== new URL(n.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${n.url}. This is probably unintended and can lead to issues.`), t.url = n.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((r) => r !== "")), jA(Lh(Lh({}, n), t), {
        url: (t == null ? void 0 : t.url) || n.url,
        name: (t == null ? void 0 : t.name) || n.name,
        description: (t == null ? void 0 : t.description) || n.description,
        icons: (s = t == null ? void 0 : t.icons) != null && s.length && t.icons.length > 0 ? t.icons : n.icons
      });
    } catch (r) {
      return console.warn("Error populating app metadata", r), t || n;
    }
  }
  function VA() {
    return of.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function Qn(t, e) {
    return t.filter((s) => e.includes(s)).length === t.length;
  }
  function Ar(t = G.FIVE_MINUTES, e) {
    const s = G.toMiliseconds(t || G.FIVE_MINUTES);
    let n, r, i, o;
    return {
      resolve: (a) => {
        i && n && (clearTimeout(i), n(a), o = Promise.resolve(a));
      },
      reject: (a) => {
        i && r && (clearTimeout(i), r(a));
      },
      done: () => new Promise((a, c) => {
        if (o) return a(o);
        i = setTimeout(() => {
          const l = new Error(e);
          o = Promise.reject(l), c(l);
        }, s), n = a, r = c;
      })
    };
  }
  function KA(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function yt(t, e) {
    return G.fromMiliseconds(Date.now() + G.toMiliseconds(t));
  }
  function bn(t) {
    return Date.now() >= G.toMiliseconds(t);
  }
  function $e(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Os(t = [], e = []) {
    return [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ];
  }
  async function zA({ id: t, topic: e, wcDeepLink: s }) {
    var n;
    try {
      if (!s) return;
      const r = typeof s == "string" ? JSON.parse(s) : s, i = r == null ? void 0 : r.href;
      if (typeof i != "string") return;
      const o = GA(i, t, e), a = WA();
      if (a === Pr.browser) {
        if (!((n = Ft.getDocument()) != null && n.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        YA(o);
      } else a === Pr.reactNative && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u" && await globalThis.Linking.openURL(o);
    } catch (r) {
      console.error(r);
    }
  }
  function GA(t, e, s) {
    const n = `requestId=${e}&sessionTopic=${s}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let r = `${t}`;
    if (t.startsWith("https://t.me")) {
      const i = t.includes("?") ? "&startapp=" : "?startapp=";
      r = `${r}${i}${eI(n, true)}`;
    } else r = `${r}/wc?${n}`;
    return r;
  }
  function YA(t) {
    let e = "_self";
    QA() ? e = "_top" : (XA() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
  }
  async function ZA(t, e) {
    let s = "";
    try {
      if (Hp() && (s = localStorage.getItem(e), s)) return s;
      s = await t.getItem(e);
    } catch (n) {
      console.error(n);
    }
    return s;
  }
  function Mh(t, e) {
    if (!t.includes(e)) return null;
    const s = t.split(/([&,?,=])/), n = s.indexOf(e);
    return s[n + 2];
  }
  function JA() {
    return typeof Xt < "u" && RA.IS_VITEST === "true";
  }
  function XA() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
  }
  function QA() {
    try {
      return window.self !== window.top;
    } catch {
      return false;
    }
  }
  function eI(t, e = false) {
    const s = ve.from(t).toString("base64");
    return e ? s.replace(/[=]/g, "") : s;
  }
  class tI {
    constructor({ limit: e }) {
      Bh(this, "limit"), Bh(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
    }
    add(e) {
      if (!this.set.has(e)) {
        if (this.set.size >= this.limit) {
          const s = this.set.values().next().value;
          s && this.set.delete(s);
        }
        this.set.add(e);
      }
    }
    has(e) {
      return this.set.has(e);
    }
  }
  const yo = BigInt(2 ** 32 - 1), Fh = BigInt(32);
  function Vp(t, e = false) {
    return e ? {
      h: Number(t & yo),
      l: Number(t >> Fh & yo)
    } : {
      h: Number(t >> Fh & yo) | 0,
      l: Number(t & yo) | 0
    };
  }
  function Kp(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Vp(t[i], e);
      [n[i], r[i]] = [
        o,
        a
      ];
    }
    return [
      n,
      r
    ];
  }
  const jh = (t, e, s) => t >>> s, qh = (t, e, s) => t << 32 - s | e >>> s, En = (t, e, s) => t >>> s | e << 32 - s, vn = (t, e, s) => t << 32 - s | e >>> s, vi = (t, e, s) => t << 64 - s | e >>> s - 32, Ci = (t, e, s) => t >>> s - 32 | e << 64 - s, sI = (t, e) => e, nI = (t, e) => t, rI = (t, e, s) => t << s | e >>> 32 - s, iI = (t, e, s) => e << s | t >>> 32 - s, oI = (t, e, s) => e << s - 32 | t >>> 64 - s, aI = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function cs(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const jl = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), ql = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, cI = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), lI = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, dI = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), hI = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, Ir = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function va(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Rn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function ms(t, ...e) {
    if (!va(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function zp(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Rn(t.outputLen), Rn(t.blockLen);
  }
  function Un(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Wl(t, e) {
    ms(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function Mi(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function ws(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function ec(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function Es(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Gp = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function Yp(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Bs = Gp ? (t) => t : (t) => Yp(t);
  function uI(t) {
    for (let e = 0; e < t.length; e++) t[e] = Yp(t[e]);
    return t;
  }
  const Cn = Gp ? (t) => t : uI, Zp = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", fI = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function Br(t) {
    if (ms(t), Zp) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += fI[t[s]];
    return e;
  }
  const Rs = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Wh(t) {
    if (t >= Rs._0 && t <= Rs._9) return t - Rs._0;
    if (t >= Rs.A && t <= Rs.F) return t - (Rs.A - 10);
    if (t >= Rs.a && t <= Rs.f) return t - (Rs.a - 10);
  }
  function Xo(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Zp) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = Wh(t.charCodeAt(i)), a = Wh(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function Jp(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Zs(t) {
    return typeof t == "string" && (t = Jp(t)), ms(t), t;
  }
  function _n(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      ms(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  class Ca {
  }
  function eo(t) {
    const e = (n) => t().update(Zs(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function pI(t) {
    const e = (n, r) => t(r).update(Zs(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function Hl(t = 32) {
    if (Ir && typeof Ir.getRandomValues == "function") return Ir.getRandomValues(new Uint8Array(t));
    if (Ir && typeof Ir.randomBytes == "function") return Uint8Array.from(Ir.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const gI = BigInt(0), li = BigInt(1), mI = BigInt(2), wI = BigInt(7), yI = BigInt(256), bI = BigInt(113), Xp = [], Qp = [], eg = [];
  for (let t = 0, e = li, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], Xp.push(2 * (5 * n + s)), Qp.push((t + 1) * (t + 2) / 2 % 64);
    let r = gI;
    for (let i = 0; i < 7; i++) e = (e << li ^ (e >> wI) * bI) % yI, e & mI && (r ^= li << (li << BigInt(i)) - li);
    eg.push(r);
  }
  const tg = Kp(eg, true), EI = tg[0], vI = tg[1], Hh = (t, e, s) => s > 32 ? oI(t, e, s) : rI(t, e, s), Vh = (t, e, s) => s > 32 ? aI(t, e, s) : iI(t, e, s);
  function CI(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], h = Hh(l, d, 1) ^ s[a], u = Vh(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= h, t[o + f + 1] ^= u;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = Qp[o], c = Hh(r, i, a), l = Vh(r, i, a), d = Xp[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= EI[n], t[1] ^= vI[n];
    }
    ws(s);
  }
  class Vl extends Ca {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, Rn(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = Mi(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Cn(this.state32), CI(this.state32, this.rounds), Cn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      Un(this), e = Zs(e), ms(e);
      const { blockLen: s, state: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(s - this.pos, r - i);
        for (let a = 0; a < o; a++) n[this.pos++] ^= e[i++];
        this.pos === s && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: s, pos: n, blockLen: r } = this;
      e[n] ^= s, (s & 128) !== 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      Un(this, false), ms(e), this.finish();
      const s = this.state, { blockLen: n } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= n && this.keccak();
        const o = Math.min(n - this.posOut, i - r);
        e.set(s.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return Rn(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Wl(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, ws(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new Vl(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  }
  const AI = (t, e, s) => eo(() => new Vl(e, t, s)), II = AI(1, 136, 256 / 8);
  function NI(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function _I(t, e, s) {
    return t & e ^ ~t & s;
  }
  function SI(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  class sg extends Ca {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = ec(this.buffer);
    }
    update(e) {
      Un(this), e = Zs(e), ms(e);
      const { view: s, buffer: n, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = ec(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      Un(this), Wl(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, ws(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let h = o; h < r; h++) s[h] = 0;
      NI(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = ec(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let h = 0; h < l; h++) a.setUint32(4 * h, d[h], i);
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: s, buffer: n, length: r, finished: i, destroyed: o, pos: a } = this;
      return e.destroyed = o, e.finished = i, e.length = r, e.pos = a, r % s && e.buffer.set(n), e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  const ln = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), dt = Uint32Array.from([
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ]), ht = Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]), TI = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), dn = new Uint32Array(64);
  class OI extends sg {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = ln[0] | 0, this.B = ln[1] | 0, this.C = ln[2] | 0, this.D = ln[3] | 0, this.E = ln[4] | 0, this.F = ln[5] | 0, this.G = ln[6] | 0, this.H = ln[7] | 0;
    }
    get() {
      const { A: e, B: s, C: n, D: r, E: i, F: o, G: a, H: c } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c
      ];
    }
    set(e, s, n, r, i, o, a, c) {
      this.A = e | 0, this.B = s | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(e, s) {
      for (let h = 0; h < 16; h++, s += 4) dn[h] = e.getUint32(s, false);
      for (let h = 16; h < 64; h++) {
        const u = dn[h - 15], f = dn[h - 2], g = Es(u, 7) ^ Es(u, 18) ^ u >>> 3, p = Es(f, 17) ^ Es(f, 19) ^ f >>> 10;
        dn[h] = p + dn[h - 7] + g + dn[h - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let h = 0; h < 64; h++) {
        const u = Es(a, 6) ^ Es(a, 11) ^ Es(a, 25), f = d + u + _I(a, c, l) + TI[h] + dn[h] | 0, g = (Es(n, 2) ^ Es(n, 13) ^ Es(n, 22)) + SI(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      ws(dn);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), ws(this.buffer);
    }
  }
  const ng = Kp([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((t) => BigInt(t))), kI = ng[0], xI = ng[1], hn = new Uint32Array(80), un = new Uint32Array(80);
  class Kl extends sg {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = ht[0] | 0, this.Al = ht[1] | 0, this.Bh = ht[2] | 0, this.Bl = ht[3] | 0, this.Ch = ht[4] | 0, this.Cl = ht[5] | 0, this.Dh = ht[6] | 0, this.Dl = ht[7] | 0, this.Eh = ht[8] | 0, this.El = ht[9] | 0, this.Fh = ht[10] | 0, this.Fl = ht[11] | 0, this.Gh = ht[12] | 0, this.Gl = ht[13] | 0, this.Hh = ht[14] | 0, this.Hl = ht[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: h, Fl: u, Gh: f, Gl: g, Hh: p, Hl: w } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        w
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, w) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = w | 0;
    }
    process(e, s) {
      for (let N = 0; N < 16; N++, s += 4) hn[N] = e.getUint32(s), un[N] = e.getUint32(s += 4);
      for (let N = 16; N < 80; N++) {
        const $ = hn[N - 15] | 0, U = un[N - 15] | 0, L = En($, U, 1) ^ En($, U, 8) ^ jh($, U, 7), M = vn($, U, 1) ^ vn($, U, 8) ^ qh($, U, 7), j = hn[N - 2] | 0, k = un[N - 2] | 0, H = En(j, k, 19) ^ vi(j, k, 61) ^ jh(j, k, 6), V = vn(j, k, 19) ^ Ci(j, k, 61) ^ qh(j, k, 6), O = cI(M, V, un[N - 7], un[N - 16]), b = lI(O, L, H, hn[N - 7], hn[N - 16]);
        hn[N] = b | 0, un[N] = O | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: h, El: u, Fh: f, Fl: g, Gh: p, Gl: w, Hh: T, Hl: I } = this;
      for (let N = 0; N < 80; N++) {
        const $ = En(h, u, 14) ^ En(h, u, 18) ^ vi(h, u, 41), U = vn(h, u, 14) ^ vn(h, u, 18) ^ Ci(h, u, 41), L = h & f ^ ~h & p, M = u & g ^ ~u & w, j = dI(I, U, M, xI[N], un[N]), k = hI(j, T, $, L, kI[N], hn[N]), H = j | 0, V = En(n, r, 28) ^ vi(n, r, 34) ^ vi(n, r, 39), O = vn(n, r, 28) ^ Ci(n, r, 34) ^ Ci(n, r, 39), b = n & i ^ n & a ^ i & a, E = r & o ^ r & c ^ o & c;
        T = p | 0, I = w | 0, p = f | 0, w = g | 0, f = h | 0, g = u | 0, { h, l: u } = cs(l | 0, d | 0, k | 0, H | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const m = jl(H, O, E);
        n = ql(m, k, V, b), r = m | 0;
      }
      ({ h: n, l: r } = cs(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = cs(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = cs(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = cs(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h, l: u } = cs(this.Eh | 0, this.El | 0, h | 0, u | 0), { h: f, l: g } = cs(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: w } = cs(this.Gh | 0, this.Gl | 0, p | 0, w | 0), { h: T, l: I } = cs(this.Hh | 0, this.Hl | 0, T | 0, I | 0), this.set(n, r, i, o, a, c, l, d, h, u, f, g, p, w, T, I);
    }
    roundClean() {
      ws(hn, un);
    }
    destroy() {
      ws(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  class PI extends Kl {
    constructor() {
      super(48), this.Ah = dt[0] | 0, this.Al = dt[1] | 0, this.Bh = dt[2] | 0, this.Bl = dt[3] | 0, this.Ch = dt[4] | 0, this.Cl = dt[5] | 0, this.Dh = dt[6] | 0, this.Dl = dt[7] | 0, this.Eh = dt[8] | 0, this.El = dt[9] | 0, this.Fh = dt[10] | 0, this.Fl = dt[11] | 0, this.Gh = dt[12] | 0, this.Gl = dt[13] | 0, this.Hh = dt[14] | 0, this.Hl = dt[15] | 0;
    }
  }
  const ut = Uint32Array.from([
    573645204,
    4230739756,
    2673172387,
    3360449730,
    596883563,
    1867755857,
    2520282905,
    1497426621,
    2519219938,
    2827943907,
    3193839141,
    1401305490,
    721525244,
    746961066,
    246885852,
    2177182882
  ]);
  class $I extends Kl {
    constructor() {
      super(32), this.Ah = ut[0] | 0, this.Al = ut[1] | 0, this.Bh = ut[2] | 0, this.Bl = ut[3] | 0, this.Ch = ut[4] | 0, this.Cl = ut[5] | 0, this.Dh = ut[6] | 0, this.Dl = ut[7] | 0, this.Eh = ut[8] | 0, this.El = ut[9] | 0, this.Fh = ut[10] | 0, this.Fl = ut[11] | 0, this.Gh = ut[12] | 0, this.Gl = ut[13] | 0, this.Hh = ut[14] | 0, this.Hl = ut[15] | 0;
    }
  }
  const Aa = eo(() => new OI()), RI = eo(() => new Kl()), UI = eo(() => new PI()), DI = eo(() => new $I()), LI = Uint8Array.from([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9
  ]), Ve = Uint32Array.from([
    4089235720,
    1779033703,
    2227873595,
    3144134277,
    4271175723,
    1013904242,
    1595750129,
    2773480762,
    2917565137,
    1359893119,
    725511199,
    2600822924,
    4215389547,
    528734635,
    327033209,
    1541459225
  ]), ee = new Uint32Array(32);
  function fn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = ee[2 * t], l = ee[2 * t + 1], d = ee[2 * e], h = ee[2 * e + 1], u = ee[2 * s], f = ee[2 * s + 1], g = ee[2 * n], p = ee[2 * n + 1], w = jl(c, d, o);
    l = ql(w, l, h, a), c = w | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: sI(p, g),
      Dl: nI(p)
    }, { h: f, l: u } = cs(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: En(h, d, 24),
      Bl: vn(h, d, 24)
    }, ee[2 * t] = c, ee[2 * t + 1] = l, ee[2 * e] = d, ee[2 * e + 1] = h, ee[2 * s] = u, ee[2 * s + 1] = f, ee[2 * n] = g, ee[2 * n + 1] = p;
  }
  function pn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = ee[2 * t], l = ee[2 * t + 1], d = ee[2 * e], h = ee[2 * e + 1], u = ee[2 * s], f = ee[2 * s + 1], g = ee[2 * n], p = ee[2 * n + 1], w = jl(c, d, o);
    l = ql(w, l, h, a), c = w | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: En(p, g, 16),
      Dl: vn(p, g, 16)
    }, { h: f, l: u } = cs(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: vi(h, d, 63),
      Bl: Ci(h, d, 63)
    }, ee[2 * t] = c, ee[2 * t + 1] = l, ee[2 * e] = d, ee[2 * e + 1] = h, ee[2 * s] = u, ee[2 * s + 1] = f, ee[2 * n] = g, ee[2 * n + 1] = p;
  }
  function BI(t, e = {}, s, n, r) {
    if (Rn(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  class MI extends Ca {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, Rn(e), Rn(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = Mi(this.buffer);
    }
    update(e) {
      Un(this), e = Zs(e), ms(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (Cn(r), this.compress(r, 0, false), Cn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const h = new Uint32Array(a, d, Math.floor((i - c) / 4));
          Cn(h);
          for (let u = 0; c + s < i; u += r.length, c += s) this.length += s, this.compress(h, u, false);
          Cn(h);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      Un(this), Wl(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, ws(this.buffer.subarray(s)), Cn(n), this.compress(n, 0, true), Cn(n);
      const r = Mi(e);
      this.get().forEach((i, o) => r[o] = Bs(i));
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      const { buffer: s, length: n, finished: r, destroyed: i, outputLen: o, pos: a } = this;
      return e || (e = new this.constructor({
        dkLen: o
      })), e.set(...this.get()), e.buffer.set(s), e.destroyed = i, e.finished = r, e.length = n, e.pos = a, e.outputLen = o, e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  class FI extends MI {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = Ve[0] | 0, this.v0h = Ve[1] | 0, this.v1l = Ve[2] | 0, this.v1h = Ve[3] | 0, this.v2l = Ve[4] | 0, this.v2h = Ve[5] | 0, this.v3l = Ve[6] | 0, this.v3h = Ve[7] | 0, this.v4l = Ve[8] | 0, this.v4h = Ve[9] | 0, this.v5l = Ve[10] | 0, this.v5h = Ve[11] | 0, this.v6l = Ve[12] | 0, this.v6h = Ve[13] | 0, this.v7l = Ve[14] | 0, this.v7h = Ve[15] | 0, BI(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = Zs(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = Zs(i);
        const a = Mi(i);
        this.v4l ^= Bs(a[0]), this.v4h ^= Bs(a[1]), this.v5l ^= Bs(a[2]), this.v5h ^= Bs(a[3]);
      }
      if (r !== void 0) {
        r = Zs(r);
        const a = Mi(r);
        this.v6l ^= Bs(a[0]), this.v6h ^= Bs(a[1]), this.v7l ^= Bs(a[2]), this.v7h ^= Bs(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: h, v5h: u, v6l: f, v6h: g, v7l: p, v7h: w } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        w
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, w) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = h | 0, this.v5h = u | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = w | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => ee[l] = c), ee.set(Ve, 16);
      let { h: r, l: i } = Vp(BigInt(this.length));
      ee[24] = Ve[8] ^ i, ee[25] = Ve[9] ^ r, n && (ee[28] = ~ee[28], ee[29] = ~ee[29]);
      let o = 0;
      const a = LI;
      for (let c = 0; c < 12; c++) fn(0, 4, 8, 12, e, s + 2 * a[o++]), pn(0, 4, 8, 12, e, s + 2 * a[o++]), fn(1, 5, 9, 13, e, s + 2 * a[o++]), pn(1, 5, 9, 13, e, s + 2 * a[o++]), fn(2, 6, 10, 14, e, s + 2 * a[o++]), pn(2, 6, 10, 14, e, s + 2 * a[o++]), fn(3, 7, 11, 15, e, s + 2 * a[o++]), pn(3, 7, 11, 15, e, s + 2 * a[o++]), fn(0, 5, 10, 15, e, s + 2 * a[o++]), pn(0, 5, 10, 15, e, s + 2 * a[o++]), fn(1, 6, 11, 12, e, s + 2 * a[o++]), pn(1, 6, 11, 12, e, s + 2 * a[o++]), fn(2, 7, 8, 13, e, s + 2 * a[o++]), pn(2, 7, 8, 13, e, s + 2 * a[o++]), fn(3, 4, 9, 14, e, s + 2 * a[o++]), pn(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= ee[0] ^ ee[16], this.v0h ^= ee[1] ^ ee[17], this.v1l ^= ee[2] ^ ee[18], this.v1h ^= ee[3] ^ ee[19], this.v2l ^= ee[4] ^ ee[20], this.v2h ^= ee[5] ^ ee[21], this.v3l ^= ee[6] ^ ee[22], this.v3h ^= ee[7] ^ ee[23], this.v4l ^= ee[8] ^ ee[24], this.v4h ^= ee[9] ^ ee[25], this.v5l ^= ee[10] ^ ee[26], this.v5h ^= ee[11] ^ ee[27], this.v6l ^= ee[12] ^ ee[28], this.v6h ^= ee[13] ^ ee[29], this.v7l ^= ee[14] ^ ee[30], this.v7h ^= ee[15] ^ ee[31], ws(ee);
    }
    destroy() {
      this.destroyed = true, ws(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const jI = pI((t) => new FI(t)), qI = "https://rpc.walletconnect.org/v1";
  function rg(t) {
    const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
    return "0x" + ve.from(II(s)).toString("hex");
  }
  async function WI(t, e, s, n, r, i) {
    switch (s.t) {
      case "eip191":
        return await HI(t, e, s.s);
      case "eip1271":
        return await VI(t, e, s.s, n, r, i);
      default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
    }
  }
  function HI(t, e, s) {
    const n = Sm(s);
    return Tm({
      payload: rg(e),
      signature: n
    }).toLowerCase() === t.toLowerCase();
  }
  async function VI(t, e, s, n, r, i) {
    const o = Ys(n);
    if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${n}`);
    try {
      const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = s.substring(2), d = (l.length / 2).toString(16).padStart(64, "0"), h = (e.startsWith("0x") ? e : rg(e)).substring(2), u = a + h + c + d + l, f = await fetch(`${i || qI}/?chainId=${n}&projectId=${r}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          id: KI(),
          jsonrpc: "2.0",
          method: "eth_call",
          params: [
            {
              to: t,
              data: u
            },
            "latest"
          ]
        })
      }), { result: g } = await f.json();
      return g ? g.slice(0, a.length).toLowerCase() === a.toLowerCase() : false;
    } catch (a) {
      return console.error("isValidEip1271Signature: ", a), false;
    }
  }
  function KI() {
    return Date.now() + Math.floor(Math.random() * 1e3);
  }
  function zI(t) {
    const e = atob(t), s = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
    const n = s[0];
    if (n === 0) throw new Error("No signatures found");
    const r = 1 + n * 64;
    if (s.length < r) throw new Error("Transaction data too short for claimed signature count");
    if (s.length < 100) throw new Error("Transaction too short");
    const i = ve.from(t, "base64").slice(1, 65);
    return Qi.encode(i);
  }
  function GI(t) {
    const e = new Uint8Array(ve.from(t, "base64")), s = Array.from("TransactionData::").map((i) => i.charCodeAt(0)), n = new Uint8Array(s.length + e.length);
    n.set(s), n.set(e, s.length);
    const r = jI(n, {
      dkLen: 32
    });
    return Qi.encode(r);
  }
  function Kh(t) {
    const e = new Uint8Array(Aa(YI(t)));
    return Qi.encode(e);
  }
  function YI(t) {
    if (t instanceof Uint8Array) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
    if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
    throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
  }
  function zh(t) {
    const e = ve.from(t, "base64"), s = Am(e).txn;
    if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
    const n = Im(s), r = ve.from("TX"), i = ve.concat([
      r,
      ve.from(n)
    ]), o = DI(i);
    return Nm.encode(o).replace(/=+$/, "");
  }
  function tc(t) {
    const e = [];
    let s = BigInt(t);
    for (; s >= BigInt(128); ) e.push(Number(s & BigInt(127) | BigInt(128))), s >>= BigInt(7);
    return e.push(Number(s)), ve.from(e);
  }
  function ZI(t) {
    const e = ve.from(t.signed.bodyBytes, "base64"), s = ve.from(t.signed.authInfoBytes, "base64"), n = ve.from(t.signature.signature, "base64"), r = [];
    r.push(ve.from([
      10
    ])), r.push(tc(e.length)), r.push(e), r.push(ve.from([
      18
    ])), r.push(tc(s.length)), r.push(s), r.push(ve.from([
      26
    ])), r.push(tc(n.length)), r.push(n);
    const i = ve.concat(r), o = Aa(i);
    return ve.from(o).toString("hex").toUpperCase();
  }
  function JI(t) {
    var e, s;
    const n = [];
    try {
      if (typeof t == "string") return n.push(t), n;
      if (typeof t != "object") return n;
      t != null && t.id && n.push(t.id);
      const r = (s = (e = t == null ? void 0 : t.capabilities) == null ? void 0 : e.caip345) == null ? void 0 : s.transactionHashes;
      r && n.push(...r);
    } catch (r) {
      console.warn("getWalletSendCallsHashes failed: ", r);
    }
    return n;
  }
  var XI = Object.defineProperty, QI = Object.defineProperties, eN = Object.getOwnPropertyDescriptors, Gh = Object.getOwnPropertySymbols, tN = Object.prototype.hasOwnProperty, sN = Object.prototype.propertyIsEnumerable, Yh = (t, e, s) => e in t ? XI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, nN = (t, e) => {
    for (var s in e || (e = {})) tN.call(e, s) && Yh(t, s, e[s]);
    if (Gh) for (var s of Gh(e)) sN.call(e, s) && Yh(t, s, e[s]);
    return t;
  }, rN = (t, e) => QI(t, eN(e));
  const iN = "did:pkh:", zl = (t) => t == null ? void 0 : t.split(":"), oN = (t) => {
    const e = t && zl(t);
    if (e) return t.includes(iN) ? e[3] : e[1];
  }, il = (t) => {
    const e = t && zl(t);
    if (e) return e[2] + ":" + e[3];
  }, Qo = (t) => {
    const e = t && zl(t);
    if (e) return e.pop();
  };
  async function Zh(t) {
    const { cacao: e, projectId: s } = t, { s: n, p: r } = e, i = ig(r, r.iss), o = Qo(r.iss);
    return await WI(o, i, n, il(r.iss), s);
  }
  const ig = (t, e) => {
    const s = `${t.domain} wants you to sign in with your Ethereum account:`, n = Qo(e);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let r = t.statement || void 0;
    const i = `URI: ${t.aud || t.uri}`, o = `Version: ${t.version}`, a = `Chain ID: ${oN(e)}`, c = `Nonce: ${t.nonce}`, l = `Issued At: ${t.iat}`, d = t.exp ? `Expiration Time: ${t.exp}` : void 0, h = t.nbf ? `Not Before: ${t.nbf}` : void 0, u = t.requestId ? `Request ID: ${t.requestId}` : void 0, f = t.resources ? `Resources:${t.resources.map((p) => `
- ${p}`).join("")}` : void 0, g = Uo(t.resources);
    if (g) {
      const p = Fi(g);
      r = gN(r, p);
    }
    return [
      s,
      n,
      "",
      r,
      "",
      i,
      o,
      a,
      c,
      l,
      d,
      h,
      u,
      f
    ].filter((p) => p != null).join(`
`);
  };
  function aN(t) {
    return ve.from(JSON.stringify(t)).toString("base64");
  }
  function cN(t) {
    return JSON.parse(ve.from(t, "base64").toString("utf-8"));
  }
  function lr(t) {
    if (!t) throw new Error("No recap provided, value is undefined");
    if (!t.att) throw new Error("No `att` property found");
    const e = Object.keys(t.att);
    if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
    e.forEach((s) => {
      const n = t.att[s];
      if (Array.isArray(n)) throw new Error(`Resource must be an object: ${s}`);
      if (typeof n != "object") throw new Error(`Resource must be an object: ${s}`);
      if (!Object.keys(n).length) throw new Error(`Resource object is empty: ${s}`);
      Object.keys(n).forEach((r) => {
        const i = n[r];
        if (!Array.isArray(i)) throw new Error(`Ability limits ${r} must be an array of objects, found: ${i}`);
        if (!i.length) throw new Error(`Value of ${r} is empty array, must be an array with objects`);
        i.forEach((o) => {
          if (typeof o != "object") throw new Error(`Ability limits (${r}) must be an array of objects, found: ${o}`);
        });
      });
    });
  }
  function lN(t, e, s, n = {}) {
    return s == null ? void 0 : s.sort((r, i) => r.localeCompare(i)), {
      att: {
        [t]: dN(e, s, n)
      }
    };
  }
  function dN(t, e, s = {}) {
    e = e == null ? void 0 : e.sort((r, i) => r.localeCompare(i));
    const n = e.map((r) => ({
      [`${t}/${r}`]: [
        s
      ]
    }));
    return Object.assign({}, ...n);
  }
  function og(t) {
    return lr(t), `urn:recap:${aN(t).replace(/=/g, "")}`;
  }
  function Fi(t) {
    const e = cN(t.replace("urn:recap:", ""));
    return lr(e), e;
  }
  function hN(t, e, s) {
    const n = lN(t, e, s);
    return og(n);
  }
  function uN(t) {
    return t && t.includes("urn:recap:");
  }
  function fN(t, e) {
    const s = Fi(t), n = Fi(e), r = pN(s, n);
    return og(r);
  }
  function pN(t, e) {
    lr(t), lr(e);
    const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((r, i) => r.localeCompare(i)), n = {
      att: {}
    };
    return s.forEach((r) => {
      var i, o;
      Object.keys(((i = t.att) == null ? void 0 : i[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
        var c, l;
        n.att[r] = rN(nN({}, n.att[r]), {
          [a]: ((c = t.att[r]) == null ? void 0 : c[a]) || ((l = e.att[r]) == null ? void 0 : l[a])
        });
      });
    }), n;
  }
  function gN(t = "", e) {
    lr(e);
    const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (t.includes(s)) return t;
    const n = [];
    let r = 0;
    Object.keys(e.att).forEach((a) => {
      const c = Object.keys(e.att[a]).map((h) => ({
        ability: h.split("/")[0],
        action: h.split("/")[1]
      }));
      c.sort((h, u) => h.action.localeCompare(u.action));
      const l = {};
      c.forEach((h) => {
        l[h.ability] || (l[h.ability] = []), l[h.ability].push(h.action);
      });
      const d = Object.keys(l).map((h) => (r++, `(${r}) '${h}': '${l[h].join("', '")}' for '${a}'.`));
      n.push(d.join(", ").replace(".,", "."));
    });
    const i = n.join(" "), o = `${s}${i}`;
    return `${t ? t + " " : ""}${o}`;
  }
  function Jh(t) {
    var e;
    const s = Fi(t);
    lr(s);
    const n = (e = s.att) == null ? void 0 : e.eip155;
    return n ? Object.keys(n).map((r) => r.split("/")[1]) : [];
  }
  function Xh(t) {
    const e = Fi(t);
    lr(e);
    const s = [];
    return Object.values(e.att).forEach((n) => {
      Object.values(n).forEach((r) => {
        var i;
        (i = r == null ? void 0 : r[0]) != null && i.chains && s.push(r[0].chains);
      });
    }), [
      ...new Set(s.flat())
    ];
  }
  function Uo(t) {
    if (!t) return;
    const e = t == null ? void 0 : t[t.length - 1];
    return uN(e) ? e : void 0;
  }
  function ag(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function ol(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function sc(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Tt(t, ...e) {
    if (!ag(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Qh(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function mN(t, e) {
    Tt(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function kn(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function Vr(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function wN(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const yN = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function bN(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function al(t) {
    if (typeof t == "string") t = bN(t);
    else if (ag(t)) t = cl(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function EN(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function vN(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const CN = (t, e) => {
    function s(n, ...r) {
      if (Tt(n), !yN) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? Tt(l) : Tt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && Tt(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          Tt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, Tt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (Tt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function eu(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !IN(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function tu(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function AN(t, e, s) {
    ol(s);
    const n = new Uint8Array(16), r = wN(n);
    return tu(r, 0, BigInt(e), s), tu(r, 8, BigInt(t), s), n;
  }
  function IN(t) {
    return t.byteOffset % 4 === 0;
  }
  function cl(t) {
    return Uint8Array.from(t);
  }
  const cg = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), NN = cg("expand 16-byte k"), _N = cg("expand 32-byte k"), SN = kn(NN), TN = kn(_N);
  function _e(t, e) {
    return t << e | t >>> 32 - e;
  }
  function ll(t) {
    return t.byteOffset % 4 === 0;
  }
  const bo = 64, ON = 16, lg = 2 ** 32 - 1, su = new Uint32Array();
  function kN(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(bo), d = kn(l), h = ll(r) && ll(i), u = h ? kn(r) : su, f = h ? kn(i) : su;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= lg) throw new Error("arx: counter overflow");
      const p = Math.min(bo, c - g);
      if (h && p === bo) {
        const w = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let T = 0, I; T < ON; T++) I = w + T, f[I] = u[I] ^ d[T];
        g += bo;
        continue;
      }
      for (let w = 0, T; w < p; w++) T = g + w, i[T] = r[T] ^ l[w];
      g += p;
    }
  }
  function xN(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = EN({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return sc(r), sc(o), ol(i), ol(s), (a, c, l, d, h = 0) => {
      Tt(a), Tt(c), Tt(l);
      const u = l.length;
      if (d === void 0 && (d = new Uint8Array(u)), Tt(d), sc(h), h < 0 || h >= lg) throw new Error("arx: counter overflow");
      if (d.length < u) throw new Error(`arx: output (${d.length}) is shorter than data (${u})`);
      const f = [];
      let g = a.length, p, w;
      if (g === 32) f.push(p = cl(a)), w = TN;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), w = SN, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      ll(c) || f.push(c = cl(c));
      const T = kn(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(w, T, kn(c.subarray(0, 16)), T), c = c.subarray(16);
      }
      const I = 16 - r;
      if (I !== c.length) throw new Error(`arx: nonce must be ${I} or 16 bytes`);
      if (I !== 12) {
        const $ = new Uint8Array(12);
        $.set(c, i ? 0 : 12 - c.length), c = $, f.push(c);
      }
      const N = kn(c);
      return kN(t, w, T, N, l, d, h, o), Vr(...f), d;
    };
  }
  const Qe = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  class PN {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = al(e), Tt(e, 32);
      const s = Qe(e, 0), n = Qe(e, 2), r = Qe(e, 4), i = Qe(e, 6), o = Qe(e, 8), a = Qe(e, 10), c = Qe(e, 12), l = Qe(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = Qe(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], h = o[4], u = o[5], f = o[6], g = o[7], p = o[8], w = o[9], T = Qe(e, s + 0), I = Qe(e, s + 2), N = Qe(e, s + 4), $ = Qe(e, s + 6), U = Qe(e, s + 8), L = Qe(e, s + 10), M = Qe(e, s + 12), j = Qe(e, s + 14);
      let k = i[0] + (T & 8191), H = i[1] + ((T >>> 13 | I << 3) & 8191), V = i[2] + ((I >>> 10 | N << 6) & 8191), O = i[3] + ((N >>> 7 | $ << 9) & 8191), b = i[4] + (($ >>> 4 | U << 12) & 8191), E = i[5] + (U >>> 1 & 8191), m = i[6] + ((U >>> 14 | L << 2) & 8191), v = i[7] + ((L >>> 11 | M << 5) & 8191), A = i[8] + ((M >>> 8 | j << 8) & 8191), S = i[9] + (j >>> 5 | r), C = 0, _ = C + k * a + H * (5 * w) + V * (5 * p) + O * (5 * g) + b * (5 * f);
      C = _ >>> 13, _ &= 8191, _ += E * (5 * u) + m * (5 * h) + v * (5 * d) + A * (5 * l) + S * (5 * c), C += _ >>> 13, _ &= 8191;
      let P = C + k * c + H * a + V * (5 * w) + O * (5 * p) + b * (5 * g);
      C = P >>> 13, P &= 8191, P += E * (5 * f) + m * (5 * u) + v * (5 * h) + A * (5 * d) + S * (5 * l), C += P >>> 13, P &= 8191;
      let x = C + k * l + H * c + V * a + O * (5 * w) + b * (5 * p);
      C = x >>> 13, x &= 8191, x += E * (5 * g) + m * (5 * f) + v * (5 * u) + A * (5 * h) + S * (5 * d), C += x >>> 13, x &= 8191;
      let z = C + k * d + H * l + V * c + O * a + b * (5 * w);
      C = z >>> 13, z &= 8191, z += E * (5 * p) + m * (5 * g) + v * (5 * f) + A * (5 * u) + S * (5 * h), C += z >>> 13, z &= 8191;
      let R = C + k * h + H * d + V * l + O * c + b * a;
      C = R >>> 13, R &= 8191, R += E * (5 * w) + m * (5 * p) + v * (5 * g) + A * (5 * f) + S * (5 * u), C += R >>> 13, R &= 8191;
      let B = C + k * u + H * h + V * d + O * l + b * c;
      C = B >>> 13, B &= 8191, B += E * a + m * (5 * w) + v * (5 * p) + A * (5 * g) + S * (5 * f), C += B >>> 13, B &= 8191;
      let Y = C + k * f + H * u + V * h + O * d + b * l;
      C = Y >>> 13, Y &= 8191, Y += E * c + m * a + v * (5 * w) + A * (5 * p) + S * (5 * g), C += Y >>> 13, Y &= 8191;
      let X = C + k * g + H * f + V * u + O * h + b * d;
      C = X >>> 13, X &= 8191, X += E * l + m * c + v * a + A * (5 * w) + S * (5 * p), C += X >>> 13, X &= 8191;
      let de = C + k * p + H * g + V * f + O * u + b * h;
      C = de >>> 13, de &= 8191, de += E * d + m * l + v * c + A * a + S * (5 * w), C += de >>> 13, de &= 8191;
      let te = C + k * w + H * p + V * g + O * f + b * u;
      C = te >>> 13, te &= 8191, te += E * h + m * d + v * l + A * c + S * a, C += te >>> 13, te &= 8191, C = (C << 2) + C | 0, C = C + _ | 0, _ = C & 8191, C = C >>> 13, P += C, i[0] = _, i[1] = P, i[2] = x, i[3] = z, i[4] = R, i[5] = B, i[6] = Y, i[7] = X, i[8] = de, i[9] = te;
    }
    finalize() {
      const { h: e, pad: s } = this, n = new Uint16Array(10);
      let r = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
      e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, n[0] = e[0] + 5, r = n[0] >>> 13, n[0] &= 8191;
      for (let a = 1; a < 10; a++) n[a] = e[a] + r, r = n[a] >>> 13, n[a] &= 8191;
      n[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let a = 0; a < 10; a++) n[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = e[a] & i | n[a];
      e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
      let o = e[0] + s[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
      Vr(n);
    }
    update(e) {
      Qh(this), e = al(e), Tt(e);
      const { buffer: s, blockLen: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(n - this.pos, r - i);
        if (o === n) {
          for (; n <= r - i; i += n) this.process(e, i);
          continue;
        }
        s.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(s, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      Vr(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      Qh(this), mN(e, this), this.finished = true;
      const { buffer: s, h: n } = this;
      let { pos: r } = this;
      if (r) {
        for (s[r++] = 1; r < 16; r++) s[r] = 0;
        this.process(s, 0, true);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) e[i++] = n[o] >>> 0, e[i++] = n[o] >>> 8;
      return e;
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
  }
  function $N(t) {
    const e = (n, r) => t(r).update(al(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const RN = $N((t) => new PN(t));
  function UN(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], h = e[1], u = e[2], f = e[3], g = e[4], p = e[5], w = e[6], T = e[7], I = r, N = s[0], $ = s[1], U = s[2], L = o, M = a, j = c, k = l, H = d, V = h, O = u, b = f, E = g, m = p, v = w, A = T, S = I, C = N, _ = $, P = U;
    for (let z = 0; z < i; z += 2) L = L + H | 0, S = _e(S ^ L, 16), E = E + S | 0, H = _e(H ^ E, 12), L = L + H | 0, S = _e(S ^ L, 8), E = E + S | 0, H = _e(H ^ E, 7), M = M + V | 0, C = _e(C ^ M, 16), m = m + C | 0, V = _e(V ^ m, 12), M = M + V | 0, C = _e(C ^ M, 8), m = m + C | 0, V = _e(V ^ m, 7), j = j + O | 0, _ = _e(_ ^ j, 16), v = v + _ | 0, O = _e(O ^ v, 12), j = j + O | 0, _ = _e(_ ^ j, 8), v = v + _ | 0, O = _e(O ^ v, 7), k = k + b | 0, P = _e(P ^ k, 16), A = A + P | 0, b = _e(b ^ A, 12), k = k + b | 0, P = _e(P ^ k, 8), A = A + P | 0, b = _e(b ^ A, 7), L = L + V | 0, P = _e(P ^ L, 16), v = v + P | 0, V = _e(V ^ v, 12), L = L + V | 0, P = _e(P ^ L, 8), v = v + P | 0, V = _e(V ^ v, 7), M = M + O | 0, S = _e(S ^ M, 16), A = A + S | 0, O = _e(O ^ A, 12), M = M + O | 0, S = _e(S ^ M, 8), A = A + S | 0, O = _e(O ^ A, 7), j = j + b | 0, C = _e(C ^ j, 16), E = E + C | 0, b = _e(b ^ E, 12), j = j + b | 0, C = _e(C ^ j, 8), E = E + C | 0, b = _e(b ^ E, 7), k = k + H | 0, _ = _e(_ ^ k, 16), m = m + _ | 0, H = _e(H ^ m, 12), k = k + H | 0, _ = _e(_ ^ k, 8), m = m + _ | 0, H = _e(H ^ m, 7);
    let x = 0;
    n[x++] = o + L | 0, n[x++] = a + M | 0, n[x++] = c + j | 0, n[x++] = l + k | 0, n[x++] = d + H | 0, n[x++] = h + V | 0, n[x++] = u + O | 0, n[x++] = f + b | 0, n[x++] = g + E | 0, n[x++] = p + m | 0, n[x++] = w + v | 0, n[x++] = T + A | 0, n[x++] = I + S | 0, n[x++] = N + C | 0, n[x++] = $ + _ | 0, n[x++] = U + P | 0;
  }
  const DN = xN(UN, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), LN = new Uint8Array(16), nu = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(LN.subarray(s));
  }, BN = new Uint8Array(32);
  function ru(t, e, s, n, r) {
    const i = t(e, s, BN), o = RN.create(i);
    r && nu(o, r), nu(o, n);
    const a = AN(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return Vr(i, a), c;
  }
  const MN = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = eu(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = ru(t, e, s, a, n);
      return i.set(c, o), Vr(c), i;
    },
    decrypt(r, i) {
      i = eu(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = ru(t, e, s, o, n);
      if (!vN(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), Vr(c), i;
    }
  });
  CN({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, MN(DN));
  class dg extends Ca {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, zp(e);
      const n = Zs(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), ws(i);
    }
    update(e) {
      return Un(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Un(this), ms(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: s, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
      return e = e, e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const hg = (t, e, s) => new dg(t, e).update(s).digest();
  hg.create = (t, e) => new dg(t, e);
  Uint8Array.from([
    0
  ]);
  const ug = Aa, Gl = BigInt(0), dl = BigInt(1);
  function ea(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function er(t, e, s = "") {
    const n = va(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function Eo(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function fg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Gl : BigInt("0x" + t);
  }
  function Ia(t) {
    return fg(Br(t));
  }
  function ta(t) {
    return ms(t), fg(Br(Uint8Array.from(t).reverse()));
  }
  function Yl(t, e) {
    return Xo(t.toString(16).padStart(e * 2, "0"));
  }
  function Zl(t, e) {
    return Yl(t, e).reverse();
  }
  function gt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = Xo(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (va(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const nc = (t) => typeof t == "bigint" && Gl <= t;
  function FN(t, e, s) {
    return nc(t) && nc(e) && nc(s) && e <= t && t < s;
  }
  function hl(t, e, s, n) {
    if (!FN(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function pg(t) {
    let e;
    for (e = 0; t > Gl; t >>= dl, e += 1) ;
    return e;
  }
  const to = (t) => (dl << BigInt(t)) - dl;
  function jN(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    const n = (u) => new Uint8Array(u), r = (u) => Uint8Array.of(u);
    let i = n(t), o = n(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...u) => s(o, i, ...u), d = (u = n(0)) => {
      o = l(r(0), u), i = l(), u.length !== 0 && (o = l(r(1), u), i = l());
    }, h = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const f = [];
      for (; u < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), u += i.length;
      }
      return _n(...f);
    };
    return (u, f) => {
      c(), d(u);
      let g;
      for (; !(g = f(h())); ) d();
      return c(), g;
    };
  }
  function Na(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function iu(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const Pt = BigInt(0), vt = BigInt(1), tr = BigInt(2), gg = BigInt(3), mg = BigInt(4), wg = BigInt(5), qN = BigInt(7), yg = BigInt(8), WN = BigInt(9), bg = BigInt(16);
  function Mt(t, e) {
    const s = t % e;
    return s >= Pt ? s : e + s;
  }
  function os(t, e, s) {
    let n = t;
    for (; e-- > Pt; ) n *= n, n %= s;
    return n;
  }
  function ou(t, e) {
    if (t === Pt) throw new Error("invert: expected non-zero number");
    if (e <= Pt) throw new Error("invert: expected positive modulus, got " + e);
    let s = Mt(t, e), n = e, r = Pt, i = vt;
    for (; s !== Pt; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== vt) throw new Error("invert: does not exist");
    return Mt(r, e);
  }
  function Jl(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function Eg(t, e) {
    const s = (t.ORDER + vt) / mg, n = t.pow(e, s);
    return Jl(t, n, e), n;
  }
  function HN(t, e) {
    const s = (t.ORDER - wg) / yg, n = t.mul(e, tr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, tr), r), a = t.mul(i, t.sub(o, t.ONE));
    return Jl(t, a, e), a;
  }
  function VN(t) {
    const e = Ln(t), s = vg(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + qN) / bg;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const h = a.mul(l, r), u = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(h), c);
      l = a.cmov(l, d, f), d = a.cmov(u, h, g);
      const p = a.eql(a.sqr(d), c), w = a.cmov(l, d, p);
      return Jl(a, w, c), w;
    };
  }
  function vg(t) {
    if (t < gg) throw new Error("sqrt is not defined for small field");
    let e = t - vt, s = 0;
    for (; e % tr === Pt; ) e /= tr, s++;
    let n = tr;
    const r = Ln(t);
    for (; au(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return Eg;
    let i = r.pow(n, e);
    const o = (e + vt) / tr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (au(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), h = a.pow(c, e), u = a.pow(c, o);
      for (; !a.eql(h, a.ONE); ) {
        if (a.is0(h)) return a.ZERO;
        let f = 1, g = a.sqr(h);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = vt << BigInt(l - f - 1), w = a.pow(d, p);
        l = f, d = a.sqr(w), h = a.mul(h, d), u = a.mul(u, w);
      }
      return u;
    };
  }
  function KN(t) {
    return t % mg === gg ? Eg : t % yg === wg ? HN : t % bg === WN ? VN(t) : vg(t);
  }
  const zN = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function GN(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = zN.reduce((n, r) => (n[r] = "function", n), e);
    return Na(t, s), t;
  }
  function YN(t, e, s) {
    if (s < Pt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Pt) return t.ONE;
    if (s === vt) return e;
    let n = t.ONE, r = e;
    for (; s > Pt; ) s & vt && (n = t.mul(n, r)), r = t.sqr(r), s >>= vt;
    return n;
  }
  function Cg(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function au(t, e) {
    const s = (t.ORDER - vt) / tr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function Ag(t, e) {
    e !== void 0 && Rn(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Ln(t, e, s = false, n = {}) {
    if (t <= Pt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const u = e;
      u.BITS && (r = u.BITS), u.sqrt && (i = u.sqrt), typeof u.isLE == "boolean" && (s = u.isLE), typeof u.modFromBytes == "boolean" && (o = u.modFromBytes), a = u.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = Ag(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const h = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: to(c),
      ZERO: Pt,
      ONE: vt,
      allowedLengths: a,
      create: (u) => Mt(u, t),
      isValid: (u) => {
        if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
        return Pt <= u && u < t;
      },
      is0: (u) => u === Pt,
      isValidNot0: (u) => !h.is0(u) && h.isValid(u),
      isOdd: (u) => (u & vt) === vt,
      neg: (u) => Mt(-u, t),
      eql: (u, f) => u === f,
      sqr: (u) => Mt(u * u, t),
      add: (u, f) => Mt(u + f, t),
      sub: (u, f) => Mt(u - f, t),
      mul: (u, f) => Mt(u * f, t),
      pow: (u, f) => YN(h, u, f),
      div: (u, f) => Mt(u * ou(f, t), t),
      sqrN: (u) => u * u,
      addN: (u, f) => u + f,
      subN: (u, f) => u - f,
      mulN: (u, f) => u * f,
      inv: (u) => ou(u, t),
      sqrt: i || ((u) => (d || (d = KN(t)), d(h, u))),
      toBytes: (u) => s ? Zl(u, l) : Yl(u, l),
      fromBytes: (u, f = true) => {
        if (a) {
          if (!a.includes(u.length) || u.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
          const p = new Uint8Array(l);
          p.set(u, s ? 0 : p.length - u.length), u = p;
        }
        if (u.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + u.length);
        let g = s ? ta(u) : Ia(u);
        if (o && (g = Mt(g, t)), !f && !h.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (u) => Cg(h, u),
      cmov: (u, f, g) => g ? f : u
    });
    return Object.freeze(h);
  }
  function Ig(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function Ng(t) {
    const e = Ig(t);
    return e + Math.ceil(e / 2);
  }
  function ZN(t, e, s = false) {
    const n = t.length, r = Ig(e), i = Ng(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? ta(t) : Ia(t), a = Mt(o, e - vt) + vt;
    return s ? Zl(a, r) : Yl(a, r);
  }
  const Kr = BigInt(0), sr = BigInt(1);
  function sa(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function rc(t, e) {
    const s = Cg(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function _g(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function ic(t, e) {
    _g(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = to(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function cu(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += sr);
    const l = e * n, d = l + Math.abs(a) - 1, h = a === 0, u = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: h,
      isNeg: u,
      isNegF: f,
      offsetF: l
    };
  }
  function JN(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function XN(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const oc = /* @__PURE__ */ new WeakMap(), Sg = /* @__PURE__ */ new WeakMap();
  function ac(t) {
    return Sg.get(t) || 1;
  }
  function lu(t) {
    if (t !== Kr) throw new Error("invalid wNAF");
  }
  class QN {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > Kr; ) s & sr && (n = n.add(r)), r = r.double(), s >>= sr;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = ic(s, this.bits), i = [];
      let o = e, a = o;
      for (let c = 0; c < n; c++) {
        a = o, i.push(a);
        for (let l = 1; l < r; l++) a = a.add(o), i.push(a);
        o = a.double();
      }
      return i;
    }
    wNAF(e, s, n) {
      if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
      let r = this.ZERO, i = this.BASE;
      const o = ic(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: h, isNegF: u, offsetF: f } = cu(n, a, o);
        n = c, d ? i = i.add(sa(u, s[f])) : r = r.add(sa(h, s[l]));
      }
      return lu(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = ic(e, this.bits);
      for (let o = 0; o < i.windows && n !== Kr; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = cu(n, o, i);
        if (n = a, !l) {
          const h = s[c];
          r = r.add(d ? h.negate() : h);
        }
      }
      return lu(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = oc.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), oc.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = ac(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = ac(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      _g(s, this.bits), Sg.set(e, s), oc.delete(e);
    }
    hasCache(e) {
      return ac(e) !== 1;
    }
  }
  function e2(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > Kr || n > Kr; ) s & sr && (i = i.add(r)), n & sr && (o = o.add(r)), r = r.double(), s >>= sr, n >>= sr;
    return {
      p1: i,
      p2: o
    };
  }
  function t2(t, e, s, n) {
    JN(s, t), XN(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = pg(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = to(c), d = new Array(Number(l) + 1).fill(o), h = Math.floor((e.BITS - 1) / c) * c;
    let u = o;
    for (let f = h; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const w = n[p], T = Number(w >> BigInt(f) & l);
        d[T] = d[T].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, w = o; p > 0; p--) w = w.add(d[p]), g = g.add(w);
      if (u = u.add(g), f !== 0) for (let p = 0; p < c; p++) u = u.double();
    }
    return u;
  }
  function du(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return GN(e), e;
    } else return Ln(t, {
      isLE: s
    });
  }
  function s2(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > Kr)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = du(e.p, s.Fp, n), i = du(e.n, s.Fn, n), o = [
      "Gx",
      "Gy",
      "a",
      "b"
    ];
    for (const a of o) if (!r.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return e = Object.freeze(Object.assign({}, e)), {
      CURVE: e,
      Fp: r,
      Fn: i
    };
  }
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), Jp("HashToScalar-");
  const di = BigInt(0), Nr = BigInt(1), vo = BigInt(2);
  function n2(t) {
    return Na(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function r2(t) {
    const e = n2(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || Hl, l = a ? 255 : 448, d = a ? 32 : 56, h = BigInt(a ? 9 : 5), u = BigInt(a ? 121665 : 39081), f = a ? vo ** BigInt(254) : vo ** BigInt(447), g = a ? BigInt(8) * vo ** BigInt(251) - Nr : BigInt(4) * vo ** BigInt(445) - Nr, p = f + g + Nr, w = (O) => Mt(O, s), T = I(h);
    function I(O) {
      return Zl(w(O), d);
    }
    function N(O) {
      const b = gt("u coordinate", O, d);
      return a && (b[31] &= 127), w(ta(b));
    }
    function $(O) {
      return ta(r(gt("scalar", O, d)));
    }
    function U(O, b) {
      const E = j(N(b), $(O));
      if (E === di) throw new Error("invalid private or public key received");
      return I(E);
    }
    function L(O) {
      return U(O, T);
    }
    function M(O, b, E) {
      const m = w(O * (b - E));
      return b = w(b - m), E = w(E + m), {
        x_2: b,
        x_3: E
      };
    }
    function j(O, b) {
      hl("u", O, di, s), hl("scalar", b, f, p);
      const E = b, m = O;
      let v = Nr, A = di, S = O, C = Nr, _ = di;
      for (let x = BigInt(l - 1); x >= di; x--) {
        const z = E >> x & Nr;
        _ ^= z, { x_2: v, x_3: S } = M(_, v, S), { x_2: A, x_3: C } = M(_, A, C), _ = z;
        const R = v + A, B = w(R * R), Y = v - A, X = w(Y * Y), de = B - X, te = S + C, ae = S - C, Oe = w(ae * R), je = w(te * Y), it = Oe + je, Ct = Oe - je;
        S = w(it * it), C = w(m * w(Ct * Ct)), v = w(B * X), A = w(de * (B + w(u * de)));
      }
      ({ x_2: v, x_3: S } = M(_, v, S)), { x_2: A, x_3: C } = M(_, A, C);
      const P = i(A);
      return w(v * P);
    }
    const k = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, H = (O = c(d)) => (ms(O, k.seed), O);
    function V(O) {
      const b = H(O);
      return {
        secretKey: b,
        publicKey: L(b)
      };
    }
    return {
      keygen: V,
      getSharedSecret: (O, b) => U(O, b),
      getPublicKey: (O) => L(O),
      scalarMult: U,
      scalarMultBase: L,
      utils: {
        randomSecretKey: H,
        randomPrivateKey: H
      },
      GuBytes: T.slice(),
      lengths: k
    };
  }
  const i2 = BigInt(1), hu = BigInt(2), o2 = BigInt(3), a2 = BigInt(5);
  BigInt(8);
  const Tg = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), c2 = {
    p: Tg,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function l2(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = Tg, o = t * t % i * t % i, a = os(o, hu, i) * o % i, c = os(a, i2, i) * t % i, l = os(c, a2, i) * c % i, d = os(l, e, i) * l % i, h = os(d, s, i) * d % i, u = os(h, n, i) * h % i, f = os(u, r, i) * u % i, g = os(f, r, i) * u % i, p = os(g, e, i) * l % i;
    return {
      pow_p_5_8: os(p, hu, i) * t % i,
      b2: o
    };
  }
  function d2(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const h2 = Ln(c2.p, {
    isLE: true
  });
  (() => {
    const t = h2.ORDER;
    return r2({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = l2(e);
        return Mt(os(s, o2, t) * n, t);
      },
      adjustScalarBytes: d2
    });
  })();
  const uu = (t, e) => (t + (t >= 0 ? e : -e) / Og) / e;
  function u2(t, e, s) {
    const [[n, r], [i, o]] = e, a = uu(o * t, s), c = uu(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const h = l < Gs, u = d < Gs;
    h && (l = -l), u && (d = -d);
    const f = to(Math.ceil(pg(s) / 2)) + Mr;
    if (l < Gs || l >= f || d < Gs || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: h,
      k1: l,
      k2neg: u,
      k2: d
    };
  }
  function ul(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function cc(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return ea(s.lowS, "lowS"), ea(s.prehash, "prehash"), s.format !== void 0 && ul(s.format), s;
  }
  class f2 extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const Ws = {
    Err: f2,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = Ws;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = Eo(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? Eo(r.length / 2 | 128) : "";
        return Eo(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = Ws;
        let n = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[n++] !== t) throw new s("tlv.decode: wrong tlv");
        const r = e[n++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          const l = e.subarray(n, n + c);
          if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (n += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(n, n + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(n + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = Ws;
        if (t < Gs) throw new e("integer: negative integers are not allowed");
        let s = Eo(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = Ws;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Ia(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = Ws, r = gt("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = Ws, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  }, Gs = BigInt(0), Mr = BigInt(1), Og = BigInt(2), Co = BigInt(3), p2 = BigInt(4);
  function $r(t, e) {
    const { BYTES: s } = t;
    let n;
    if (typeof e == "bigint") n = e;
    else {
      let r = gt("private key", e);
      try {
        n = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
    return n;
  }
  function g2(t, e = {}) {
    const s = s2("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    Na(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo: c } = e;
    if (c && (!n.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const l = xg(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function h(O, b, E) {
      const { x: m, y: v } = b.toAffine(), A = n.toBytes(m);
      if (ea(E, "isCompressed"), E) {
        d();
        const S = !n.isOdd(v);
        return _n(kg(S), A);
      } else return _n(Uint8Array.of(4), A, n.toBytes(v));
    }
    function u(O) {
      er(O, void 0, "Point");
      const { publicKey: b, publicKeyUncompressed: E } = l, m = O.length, v = O[0], A = O.subarray(1);
      if (m === b && (v === 2 || v === 3)) {
        const S = n.fromBytes(A);
        if (!n.isValid(S)) throw new Error("bad point: is not on curve, wrong x");
        const C = p(S);
        let _;
        try {
          _ = n.sqrt(C);
        } catch (x) {
          const z = x instanceof Error ? ": " + x.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + z);
        }
        d();
        const P = n.isOdd(_);
        return (v & 1) === 1 !== P && (_ = n.neg(_)), {
          x: S,
          y: _
        };
      } else if (m === E && v === 4) {
        const S = n.BYTES, C = n.fromBytes(A.subarray(0, S)), _ = n.fromBytes(A.subarray(S, S * 2));
        if (!w(C, _)) throw new Error("bad point: is not on curve");
        return {
          x: C,
          y: _
        };
      } else throw new Error(`bad point: got length ${m}, expected compressed=${b} or uncompressed=${E}`);
    }
    const f = e.toBytes || h, g = e.fromBytes || u;
    function p(O) {
      const b = n.sqr(O), E = n.mul(b, O);
      return n.add(n.add(E, n.mul(O, i.a)), i.b);
    }
    function w(O, b) {
      const E = n.sqr(b), m = p(O);
      return n.eql(E, m);
    }
    if (!w(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const T = n.mul(n.pow(i.a, Co), p2), I = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(T, I))) throw new Error("bad curve params: a or b");
    function N(O, b, E = false) {
      if (!n.isValid(b) || E && n.is0(b)) throw new Error(`bad point coordinate ${O}`);
      return b;
    }
    function $(O) {
      if (!(O instanceof k)) throw new Error("ProjectivePoint expected");
    }
    function U(O) {
      if (!c || !c.basises) throw new Error("no endo");
      return u2(O, c.basises, r.ORDER);
    }
    const L = iu((O, b) => {
      const { X: E, Y: m, Z: v } = O;
      if (n.eql(v, n.ONE)) return {
        x: E,
        y: m
      };
      const A = O.is0();
      b == null && (b = A ? n.ONE : n.inv(v));
      const S = n.mul(E, b), C = n.mul(m, b), _ = n.mul(v, b);
      if (A) return {
        x: n.ZERO,
        y: n.ZERO
      };
      if (!n.eql(_, n.ONE)) throw new Error("invZ was invalid");
      return {
        x: S,
        y: C
      };
    }), M = iu((O) => {
      if (O.is0()) {
        if (e.allowInfinityPoint && !n.is0(O.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: b, y: E } = O.toAffine();
      if (!n.isValid(b) || !n.isValid(E)) throw new Error("bad point: x or y not field elements");
      if (!w(b, E)) throw new Error("bad point: equation left != right");
      if (!O.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function j(O, b, E, m, v) {
      return E = new k(n.mul(E.X, O), E.Y, E.Z), b = sa(m, b), E = sa(v, E), b.add(E);
    }
    class k {
      constructor(b, E, m) {
        this.X = N("x", b), this.Y = N("y", E, true), this.Z = N("z", m), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(b) {
        const { x: E, y: m } = b || {};
        if (!b || !n.isValid(E) || !n.isValid(m)) throw new Error("invalid affine point");
        if (b instanceof k) throw new Error("projective point not allowed");
        return n.is0(E) && n.is0(m) ? k.ZERO : new k(E, m, n.ONE);
      }
      static fromBytes(b) {
        const E = k.fromAffine(g(er(b, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(b) {
        return k.fromBytes(gt("pointHex", b));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(b = 8, E = true) {
        return V.createCache(this, b), E || this.multiply(Co), this;
      }
      assertValidity() {
        M(this);
      }
      hasEvenY() {
        const { y: b } = this.toAffine();
        if (!n.isOdd) throw new Error("Field doesn't support isOdd");
        return !n.isOdd(b);
      }
      equals(b) {
        $(b);
        const { X: E, Y: m, Z: v } = this, { X: A, Y: S, Z: C } = b, _ = n.eql(n.mul(E, C), n.mul(A, v)), P = n.eql(n.mul(m, C), n.mul(S, v));
        return _ && P;
      }
      negate() {
        return new k(this.X, n.neg(this.Y), this.Z);
      }
      double() {
        const { a: b, b: E } = i, m = n.mul(E, Co), { X: v, Y: A, Z: S } = this;
        let C = n.ZERO, _ = n.ZERO, P = n.ZERO, x = n.mul(v, v), z = n.mul(A, A), R = n.mul(S, S), B = n.mul(v, A);
        return B = n.add(B, B), P = n.mul(v, S), P = n.add(P, P), C = n.mul(b, P), _ = n.mul(m, R), _ = n.add(C, _), C = n.sub(z, _), _ = n.add(z, _), _ = n.mul(C, _), C = n.mul(B, C), P = n.mul(m, P), R = n.mul(b, R), B = n.sub(x, R), B = n.mul(b, B), B = n.add(B, P), P = n.add(x, x), x = n.add(P, x), x = n.add(x, R), x = n.mul(x, B), _ = n.add(_, x), R = n.mul(A, S), R = n.add(R, R), x = n.mul(R, B), C = n.sub(C, x), P = n.mul(R, z), P = n.add(P, P), P = n.add(P, P), new k(C, _, P);
      }
      add(b) {
        $(b);
        const { X: E, Y: m, Z: v } = this, { X: A, Y: S, Z: C } = b;
        let _ = n.ZERO, P = n.ZERO, x = n.ZERO;
        const z = i.a, R = n.mul(i.b, Co);
        let B = n.mul(E, A), Y = n.mul(m, S), X = n.mul(v, C), de = n.add(E, m), te = n.add(A, S);
        de = n.mul(de, te), te = n.add(B, Y), de = n.sub(de, te), te = n.add(E, v);
        let ae = n.add(A, C);
        return te = n.mul(te, ae), ae = n.add(B, X), te = n.sub(te, ae), ae = n.add(m, v), _ = n.add(S, C), ae = n.mul(ae, _), _ = n.add(Y, X), ae = n.sub(ae, _), x = n.mul(z, te), _ = n.mul(R, X), x = n.add(_, x), _ = n.sub(Y, x), x = n.add(Y, x), P = n.mul(_, x), Y = n.add(B, B), Y = n.add(Y, B), X = n.mul(z, X), te = n.mul(R, te), Y = n.add(Y, X), X = n.sub(B, X), X = n.mul(z, X), te = n.add(te, X), B = n.mul(Y, te), P = n.add(P, B), B = n.mul(ae, te), _ = n.mul(de, _), _ = n.sub(_, B), B = n.mul(de, Y), x = n.mul(ae, x), x = n.add(x, B), new k(_, P, x);
      }
      subtract(b) {
        return this.add(b.negate());
      }
      is0() {
        return this.equals(k.ZERO);
      }
      multiply(b) {
        const { endo: E } = e;
        if (!r.isValidNot0(b)) throw new Error("invalid scalar: out of range");
        let m, v;
        const A = (S) => V.cached(this, S, (C) => rc(k, C));
        if (E) {
          const { k1neg: S, k1: C, k2neg: _, k2: P } = U(b), { p: x, f: z } = A(C), { p: R, f: B } = A(P);
          v = z.add(B), m = j(E.beta, x, R, S, _);
        } else {
          const { p: S, f: C } = A(b);
          m = S, v = C;
        }
        return rc(k, [
          m,
          v
        ])[0];
      }
      multiplyUnsafe(b) {
        const { endo: E } = e, m = this;
        if (!r.isValid(b)) throw new Error("invalid scalar: out of range");
        if (b === Gs || m.is0()) return k.ZERO;
        if (b === Mr) return m;
        if (V.hasCache(this)) return this.multiply(b);
        if (E) {
          const { k1neg: v, k1: A, k2neg: S, k2: C } = U(b), { p1: _, p2: P } = e2(k, m, A, C);
          return j(E.beta, _, P, v, S);
        } else return V.unsafe(m, b);
      }
      multiplyAndAddUnsafe(b, E, m) {
        const v = this.multiplyUnsafe(E).add(b.multiplyUnsafe(m));
        return v.is0() ? void 0 : v;
      }
      toAffine(b) {
        return L(this, b);
      }
      isTorsionFree() {
        const { isTorsionFree: b } = e;
        return o === Mr ? true : b ? b(k, this) : V.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: b } = e;
        return o === Mr ? this : b ? b(k, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(b = true) {
        return ea(b, "isCompressed"), this.assertValidity(), f(k, this, b);
      }
      toHex(b = true) {
        return Br(this.toBytes(b));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
      get px() {
        return this.X;
      }
      get py() {
        return this.X;
      }
      get pz() {
        return this.Z;
      }
      toRawBytes(b = true) {
        return this.toBytes(b);
      }
      _setWindowSize(b) {
        this.precompute(b);
      }
      static normalizeZ(b) {
        return rc(k, b);
      }
      static msm(b, E) {
        return t2(k, r, b, E);
      }
      static fromPrivateKey(b) {
        return k.BASE.multiply($r(r, b));
      }
    }
    k.BASE = new k(i.Gx, i.Gy, n.ONE), k.ZERO = new k(n.ZERO, n.ONE, n.ZERO), k.Fp = n, k.Fn = r;
    const H = r.BITS, V = new QN(k, e.endo ? Math.ceil(H / 2) : H);
    return k.BASE.precompute(8), k;
  }
  function kg(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function xg(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function m2(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || Hl, r = Object.assign(xg(t.Fp, s), {
      seed: Ng(s.ORDER)
    });
    function i(u) {
      try {
        return !!$r(s, u);
      } catch {
        return false;
      }
    }
    function o(u, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const w = u.length;
        return f === true && w !== g || f === false && w !== p ? false : !!t.fromBytes(u);
      } catch {
        return false;
      }
    }
    function a(u = n(r.seed)) {
      return ZN(er(u, r.seed, "seed"), s.ORDER);
    }
    function c(u, f = true) {
      return t.BASE.multiply($r(s, u)).toBytes(f);
    }
    function l(u) {
      const f = a(u);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(u) {
      if (typeof u == "bigint") return false;
      if (u instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (s.allowedLengths || f === g) return;
      const w = gt("key", u).length;
      return w === g || w === p;
    }
    function h(u, f, g = true) {
      if (d(u) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = $r(s, u);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: h,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (u) => $r(s, u),
        precompute(u = 8, f = t.BASE) {
          return f.precompute(u, false);
        }
      },
      lengths: r
    });
  }
  function w2(t, e, s = {}) {
    zp(e), Na(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || Hl, r = s.hmac || ((E, ...m) => hg(e, E, _n(...m))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: h, utils: u, lengths: f } = m2(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function w(E) {
      const m = a >> Mr;
      return E > m;
    }
    function T(E, m) {
      if (!o.isValidNot0(m)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return m;
    }
    function I(E, m) {
      ul(m);
      const v = f.signature, A = m === "compact" ? v : m === "recovered" ? v + 1 : void 0;
      return er(E, A, `${m} signature`);
    }
    class N {
      constructor(m, v, A) {
        this.r = T("r", m), this.s = T("s", v), A != null && (this.recovery = A), Object.freeze(this);
      }
      static fromBytes(m, v = p) {
        I(m, v);
        let A;
        if (v === "der") {
          const { r: P, s: x } = Ws.toSig(er(m));
          return new N(P, x);
        }
        v === "recovered" && (A = m[0], v = "compact", m = m.subarray(1));
        const S = o.BYTES, C = m.subarray(0, S), _ = m.subarray(S, S * 2);
        return new N(o.fromBytes(C), o.fromBytes(_), A);
      }
      static fromHex(m, v) {
        return this.fromBytes(Xo(m), v);
      }
      addRecoveryBit(m) {
        return new N(this.r, this.s, m);
      }
      recoverPublicKey(m) {
        const v = i.ORDER, { r: A, s: S, recovery: C } = this;
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        if (a * Og < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const _ = C === 2 || C === 3 ? A + a : A;
        if (!i.isValid(_)) throw new Error("recovery id 2 or 3 invalid");
        const P = i.toBytes(_), x = t.fromBytes(_n(kg((C & 1) === 0), P)), z = o.inv(_), R = U(gt("msgHash", m)), B = o.create(-R * z), Y = o.create(S * z), X = t.BASE.multiplyUnsafe(B).add(x.multiplyUnsafe(Y));
        if (X.is0()) throw new Error("point at infinify");
        return X.assertValidity(), X;
      }
      hasHighS() {
        return w(this.s);
      }
      toBytes(m = p) {
        if (ul(m), m === "der") return Xo(Ws.hexFromSig(this));
        const v = o.toBytes(this.r), A = o.toBytes(this.s);
        if (m === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return _n(Uint8Array.of(this.recovery), v, A);
        }
        return _n(v, A);
      }
      toHex(m) {
        return Br(this.toBytes(m));
      }
      assertValidity() {
      }
      static fromCompact(m) {
        return N.fromBytes(gt("sig", m), "compact");
      }
      static fromDER(m) {
        return N.fromBytes(gt("sig", m), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new N(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return Br(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return Br(this.toBytes("compact"));
      }
    }
    const $ = s.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const m = Ia(E), v = E.length * 8 - c;
      return v > 0 ? m >> BigInt(v) : m;
    }, U = s.bits2int_modN || function(E) {
      return o.create($(E));
    }, L = to(c);
    function M(E) {
      return hl("num < 2^" + c, E, Gs, L), o.toBytes(E);
    }
    function j(E, m) {
      return er(E, void 0, "message"), m ? er(e(E), void 0, "prehashed message") : E;
    }
    function k(E, m, v) {
      if ([
        "recovered",
        "canonical"
      ].some((Y) => Y in v)) throw new Error("sign() legacy options not supported");
      const { lowS: A, prehash: S, extraEntropy: C } = cc(v, g);
      E = j(E, S);
      const _ = U(E), P = $r(o, m), x = [
        M(P),
        M(_)
      ];
      if (C != null && C !== false) {
        const Y = C === true ? n(f.secretKey) : C;
        x.push(gt("extraEntropy", Y));
      }
      const z = _n(...x), R = _;
      function B(Y) {
        const X = $(Y);
        if (!o.isValidNot0(X)) return;
        const de = o.inv(X), te = t.BASE.multiply(X).toAffine(), ae = o.create(te.x);
        if (ae === Gs) return;
        const Oe = o.create(de * o.create(R + ae * P));
        if (Oe === Gs) return;
        let je = (te.x === ae ? 0 : 2) | Number(te.y & Mr), it = Oe;
        return A && w(Oe) && (it = o.neg(Oe), je ^= 1), new N(ae, it, je);
      }
      return {
        seed: z,
        k2sig: B
      };
    }
    function H(E, m, v = {}) {
      E = gt("message", E);
      const { seed: A, k2sig: S } = k(E, m, v);
      return jN(e.outputLen, o.BYTES, r)(A, S);
    }
    function V(E) {
      let m;
      const v = typeof E == "string" || va(E), A = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !A) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (A) m = new N(E.r, E.s);
      else if (v) {
        try {
          m = N.fromBytes(gt("sig", E), "der");
        } catch (S) {
          if (!(S instanceof Ws.Err)) throw S;
        }
        if (!m) try {
          m = N.fromBytes(gt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return m || false;
    }
    function O(E, m, v, A = {}) {
      const { lowS: S, prehash: C, format: _ } = cc(A, g);
      if (v = gt("publicKey", v), m = j(gt("message", m), C), "strict" in A) throw new Error("options.strict was renamed to lowS");
      const P = _ === void 0 ? V(E) : N.fromBytes(gt("sig", E), _);
      if (P === false) return false;
      try {
        const x = t.fromBytes(v);
        if (S && P.hasHighS()) return false;
        const { r: z, s: R } = P, B = U(m), Y = o.inv(R), X = o.create(B * Y), de = o.create(z * Y), te = t.BASE.multiplyUnsafe(X).add(x.multiplyUnsafe(de));
        return te.is0() ? false : o.create(te.x) === z;
      } catch {
        return false;
      }
    }
    function b(E, m, v = {}) {
      const { prehash: A } = cc(v, g);
      return m = j(m, A), N.fromBytes(E, "recovered").recoverPublicKey(m).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: h,
      utils: u,
      lengths: f,
      Point: t,
      sign: H,
      verify: O,
      recoverPublicKey: b,
      Signature: N,
      hash: e
    });
  }
  function y2(t) {
    const e = {
      a: t.a,
      b: t.b,
      p: t.Fp.ORDER,
      n: t.n,
      h: t.h,
      Gx: t.Gx,
      Gy: t.Gy
    }, s = t.Fp;
    let n = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
    const r = Ln(e.n, {
      BITS: t.nBitLength,
      allowedLengths: n,
      modFromBytes: t.wrapPrivateKey
    }), i = {
      Fp: s,
      Fn: r,
      allowInfinityPoint: t.allowInfinityPoint,
      endo: t.endo,
      isTorsionFree: t.isTorsionFree,
      clearCofactor: t.clearCofactor,
      fromBytes: t.fromBytes,
      toBytes: t.toBytes
    };
    return {
      CURVE: e,
      curveOpts: i
    };
  }
  function b2(t) {
    const { CURVE: e, curveOpts: s } = y2(t), n = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN
    };
    return {
      CURVE: e,
      curveOpts: s,
      hash: t.hash,
      ecdsaOpts: n
    };
  }
  function E2(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, Ag(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function v2(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = b2(t), i = g2(e, s), o = w2(i, n, r);
    return E2(t, o);
  }
  function fl(t, e) {
    const s = (n) => v2({
      ...t,
      hash: n
    });
    return {
      ...s(e),
      create: s
    };
  }
  const Pg = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, $g = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, Rg = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, C2 = Ln(Pg.p), A2 = Ln($g.p), I2 = Ln(Rg.p);
  fl({
    ...Pg,
    Fp: C2,
    lowS: false
  }, Aa);
  fl({
    ...$g,
    Fp: A2,
    lowS: false
  }, UI), fl({
    ...Rg,
    Fp: I2,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, RI);
  const pl = "base16", jn = "base64pad", hi = "base64url", N2 = "utf8", lc = 1, _2 = 2;
  function dc(t) {
    const e = ug(kt(t, pl));
    return mt(e, pl);
  }
  function gn(t) {
    const e = ug(kt(t, N2));
    return mt(e, pl);
  }
  function Ao(t, e, s) {
    return `${t}?wc_ev=${s}&topic=${e}`;
  }
  var S2 = Object.defineProperty, T2 = Object.defineProperties, O2 = Object.getOwnPropertyDescriptors, fu = Object.getOwnPropertySymbols, k2 = Object.prototype.hasOwnProperty, x2 = Object.prototype.propertyIsEnumerable, pu = (t, e, s) => e in t ? S2(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, P2 = (t, e) => {
    for (var s in e || (e = {})) k2.call(e, s) && pu(t, s, e[s]);
    if (fu) for (var s of fu(e)) x2.call(e, s) && pu(t, s, e[s]);
    return t;
  }, $2 = (t, e) => T2(t, O2(e));
  function Xr(t) {
    const e = [];
    return t.forEach((s) => {
      const [n, r] = s.split(":");
      e.push(`${n}:${r}`);
    }), e;
  }
  function R2(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...Xr(s.accounts));
    }), e;
  }
  function U2(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      Xr(n.accounts).includes(e) && s.push(...n.methods);
    }), s;
  }
  function D2(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      Xr(n.accounts).includes(e) && s.push(...n.events);
    }), s;
  }
  function _a(t) {
    return t.includes(":");
  }
  function Rr(t) {
    return _a(t) ? t.split(":")[0] : t;
  }
  function gu(t) {
    var e, s, n;
    const r = {};
    if (!ks(t)) return r;
    for (const [i, o] of Object.entries(t)) {
      const a = _a(i) ? [
        i
      ] : o.chains, c = o.methods || [], l = o.events || [], d = Rr(i);
      r[d] = $2(P2({}, r[d]), {
        chains: Os(a, (e = r[d]) == null ? void 0 : e.chains),
        methods: Os(c, (s = r[d]) == null ? void 0 : s.methods),
        events: Os(l, (n = r[d]) == null ? void 0 : n.events)
      });
    }
    return r;
  }
  function L2(t) {
    const e = {};
    return t == null ? void 0 : t.forEach((s) => {
      var n;
      const [r, i] = s.split(":");
      e[r] || (e[r] = {
        accounts: [],
        chains: [],
        events: [],
        methods: []
      }), e[r].accounts.push(s), (n = e[r].chains) == null || n.push(`${r}:${i}`);
    }), e;
  }
  function mu(t, e) {
    e = e.map((n) => n.replace("did:pkh:", ""));
    const s = L2(e);
    for (const [n, r] of Object.entries(s)) r.methods ? r.methods = Os(r.methods, t) : r.methods = t, r.events = [
      "chainChanged",
      "accountsChanged"
    ];
    return s;
  }
  function B2(t, e) {
    var s, n, r, i, o, a;
    const c = gu(t), l = gu(e), d = {}, h = Object.keys(c).concat(Object.keys(l));
    for (const u of h) d[u] = {
      chains: Os((s = c[u]) == null ? void 0 : s.chains, (n = l[u]) == null ? void 0 : n.chains),
      methods: Os((r = c[u]) == null ? void 0 : r.methods, (i = l[u]) == null ? void 0 : i.methods),
      events: Os((o = c[u]) == null ? void 0 : o.events, (a = l[u]) == null ? void 0 : a.events)
    };
    return d;
  }
  const M2 = {
    INVALID_METHOD: {
      message: "Invalid method.",
      code: 1001
    },
    INVALID_EVENT: {
      message: "Invalid event.",
      code: 1002
    },
    INVALID_UPDATE_REQUEST: {
      message: "Invalid update request.",
      code: 1003
    },
    INVALID_EXTEND_REQUEST: {
      message: "Invalid extend request.",
      code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005
    },
    UNAUTHORIZED_METHOD: {
      message: "Unauthorized method.",
      code: 3001
    },
    UNAUTHORIZED_EVENT: {
      message: "Unauthorized event.",
      code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004
    },
    USER_REJECTED: {
      message: "User rejected.",
      code: 5e3
    },
    USER_REJECTED_CHAINS: {
      message: "User rejected chains.",
      code: 5001
    },
    USER_REJECTED_METHODS: {
      message: "User rejected methods.",
      code: 5002
    },
    USER_REJECTED_EVENTS: {
      message: "User rejected events.",
      code: 5003
    },
    UNSUPPORTED_CHAINS: {
      message: "Unsupported chains.",
      code: 5100
    },
    UNSUPPORTED_METHODS: {
      message: "Unsupported methods.",
      code: 5101
    },
    UNSUPPORTED_EVENTS: {
      message: "Unsupported events.",
      code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
      message: "Unsupported accounts.",
      code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104
    },
    USER_DISCONNECTED: {
      message: "User disconnected.",
      code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
      message: "Unsupported wc_ method.",
      code: 10001
    }
  }, F2 = {
    NOT_INITIALIZED: {
      message: "Not initialized.",
      code: 1
    },
    NO_MATCHING_KEY: {
      message: "No matching key.",
      code: 2
    },
    RESTORE_WILL_OVERRIDE: {
      message: "Restore will override.",
      code: 3
    },
    RESUBSCRIBED: {
      message: "Resubscribed.",
      code: 4
    },
    MISSING_OR_INVALID: {
      message: "Missing or invalid.",
      code: 5
    },
    EXPIRED: {
      message: "Expired.",
      code: 6
    },
    UNKNOWN_TYPE: {
      message: "Unknown type.",
      code: 7
    },
    MISMATCHED_TOPIC: {
      message: "Mismatched topic.",
      code: 8
    },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9
    }
  };
  function ce(t, e) {
    const { message: s, code: n } = F2[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Ke(t, e) {
    const { message: s, code: n } = M2[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Js(t, e) {
    return !!Array.isArray(t);
  }
  function ks(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
  }
  function Ot(t) {
    return typeof t > "u";
  }
  function Ye(t, e) {
    return e && Ot(t) ? true : typeof t == "string" && !!t.trim().length;
  }
  function Xl(t, e) {
    return e && Ot(t) ? true : typeof t == "number" && !isNaN(t);
  }
  function j2(t, e) {
    const { requiredNamespaces: s } = e, n = Object.keys(t.namespaces), r = Object.keys(s);
    let i = true;
    return Qn(r, n) ? (n.forEach((o) => {
      const { accounts: a, methods: c, events: l } = t.namespaces[o], d = Xr(a), h = s[o];
      (!Qn(jp(o, h), d) || !Qn(h.methods, c) || !Qn(h.events, l)) && (i = false);
    }), i) : false;
  }
  function na(t) {
    return Ye(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
  }
  function q2(t) {
    if (Ye(t, false) && t.includes(":")) {
      const e = t.split(":");
      if (e.length === 3) {
        const s = e[0] + ":" + e[1];
        return !!e[2] && na(s);
      }
    }
    return false;
  }
  function W2(t, e) {
    let s = null;
    return Ye(t == null ? void 0 : t.publicKey, false) || (s = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
  }
  function wu(t) {
    let e = true;
    return Js(t) ? t.length && (e = t.every((s) => Ye(s, false))) : e = false, e;
  }
  function H2(t, e, s) {
    let n = null;
    return Js(e) && e.length ? e.forEach((r) => {
      n || na(r) || (n = Ke("UNSUPPORTED_CHAINS", `${s}, chain ${r} should be a string and conform to "namespace:chainId" format`));
    }) : na(t) || (n = Ke("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
  }
  function V2(t, e, s) {
    let n = null;
    return Object.entries(t).forEach(([r, i]) => {
      if (n) return;
      const o = H2(r, jp(r, i), `${e} ${s}`);
      o && (n = o);
    }), n;
  }
  function K2(t, e) {
    let s = null;
    return Js(t) ? t.forEach((n) => {
      s || q2(n) || (s = Ke("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
    }) : s = Ke("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
  }
  function z2(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = K2(n == null ? void 0 : n.accounts, `${e} namespace`);
      r && (s = r);
    }), s;
  }
  function G2(t, e) {
    let s = null;
    return wu(t == null ? void 0 : t.methods) ? wu(t == null ? void 0 : t.events) || (s = Ke("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = Ke("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
  }
  function Ug(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = G2(n, `${e}, namespace`);
      r && (s = r);
    }), s;
  }
  function Y2(t, e, s) {
    let n = null;
    if (t && ks(t)) {
      const r = Ug(t, e);
      r && (n = r);
      const i = V2(t, e, s);
      i && (n = i);
    } else n = ce("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
    return n;
  }
  function hc(t, e) {
    let s = null;
    if (t && ks(t)) {
      const n = Ug(t, e);
      n && (s = n);
      const r = z2(t, e);
      r && (s = r);
    } else s = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return s;
  }
  function Dg(t) {
    return Ye(t.protocol, true);
  }
  function Z2(t, e) {
    let s = false;
    return t ? t && Js(t) && t.length && t.forEach((n) => {
      s = Dg(n);
    }) : s = true, s;
  }
  function J2(t) {
    return typeof t == "number";
  }
  function ns(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function X2(t) {
    return !(!t || typeof t != "object" || !t.code || !Xl(t.code, false) || !t.message || !Ye(t.message, false));
  }
  function Q2(t) {
    return !(Ot(t) || !Ye(t.method, false));
  }
  function e_(t) {
    return !(Ot(t) || Ot(t.result) && Ot(t.error) || !Xl(t.id, false) || !Ye(t.jsonrpc, false));
  }
  function t_(t) {
    return !(Ot(t) || !Ye(t.name, false));
  }
  function yu(t, e) {
    return !(!na(e) || !R2(t).includes(e));
  }
  function s_(t, e, s) {
    return Ye(s, false) ? U2(t, e).includes(s) : false;
  }
  function n_(t, e, s) {
    return Ye(s, false) ? D2(t, e).includes(s) : false;
  }
  function bu(t, e, s) {
    let n = null;
    const r = r_(t), i = i_(e), o = Object.keys(r), a = Object.keys(i), c = Eu(Object.keys(t)), l = Eu(Object.keys(e)), d = c.filter((h) => !l.includes(h));
    return d.length && (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Qn(o, a) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((h) => {
      if (!h.includes(":") || n) return;
      const u = Xr(e[h].accounts);
      u.includes(h) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${h}
        Required: ${h}
        Approved: ${u.toString()}`));
    }), o.forEach((h) => {
      n || (Qn(r[h].methods, i[h].methods) ? Qn(r[h].events, i[h].events) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${h}`)) : n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${h}`));
    }), n;
  }
  function r_(t) {
    const e = {};
    return Object.keys(t).forEach((s) => {
      var n;
      s.includes(":") ? e[s] = t[s] : (n = t[s].chains) == null || n.forEach((r) => {
        e[r] = {
          methods: t[s].methods,
          events: t[s].events
        };
      });
    }), e;
  }
  function Eu(t) {
    return [
      ...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))
    ];
  }
  function i_(t) {
    const e = {};
    return Object.keys(t).forEach((s) => {
      var _a2;
      s.includes(":") ? e[s] = t[s] : (_a2 = Xr(t[s].accounts)) == null ? void 0 : _a2.forEach((r) => {
        e[r] = {
          accounts: t[s].accounts.filter((i) => i.includes(`${r}:`)),
          methods: t[s].methods,
          events: t[s].events
        };
      });
    }), e;
  }
  function o_(t, e) {
    return Xl(t, false) && t <= e.max && t >= e.min;
  }
  const uc = {};
  class ui {
    static get(e) {
      return uc[e];
    }
    static set(e, s) {
      uc[e] = s;
    }
    static delete(e) {
      delete uc[e];
    }
  }
  function a_(t) {
    const e = Qi.decode(t);
    if (e.length < 33) throw new Error("Too short to contain a public key");
    return e.slice(1, 33);
  }
  function c_({ publicKey: t, signature: e, payload: s }) {
    var n;
    const r = gl(s.method), i = 128 | parseInt(((n = s.version) == null ? void 0 : n.toString()) || "4"), o = h_(s.address), a = s.era === "00" ? new Uint8Array([
      0
    ]) : gl(s.era);
    if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
    const c = parseInt(s.nonce, 16), l = new Uint8Array([
      c & 255,
      c >> 8 & 255
    ]), d = BigInt(`0x${d_(s.tip)}`), h = f_(d), u = new Uint8Array([
      0,
      ...t,
      o,
      ...e,
      ...a,
      ...l,
      ...h,
      ...r
    ]), f = u_(u.length + 1);
    return new Uint8Array([
      ...f,
      i,
      ...u
    ]);
  }
  function l_(t) {
    const e = gl(t), s = _m.blake2b(e, void 0, 32);
    return "0x" + ve.from(s).toString("hex");
  }
  function gl(t) {
    return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
  }
  function d_(t) {
    return t.startsWith("0x") ? t.slice(2) : t;
  }
  function h_(t) {
    const e = Qi.decode(t)[0];
    return e === 42 ? 0 : e === 60 ? 2 : 1;
  }
  function u_(t) {
    if (t < 64) return new Uint8Array([
      t << 2
    ]);
    if (t < 16384) {
      const e = t << 2 | 1;
      return new Uint8Array([
        e & 255,
        e >> 8 & 255
      ]);
    } else if (t < 1 << 30) {
      const e = t << 2 | 2;
      return new Uint8Array([
        e & 255,
        e >> 8 & 255,
        e >> 16 & 255,
        e >> 24 & 255
      ]);
    } else throw new Error("Compact encoding > 2^30 not supported");
  }
  function f_(t) {
    if (t < BigInt(1) << BigInt(6)) return new Uint8Array([
      Number(t << BigInt(2))
    ]);
    if (t < BigInt(1) << BigInt(14)) {
      const e = t << BigInt(2) | BigInt(1);
      return new Uint8Array([
        Number(e & BigInt(255)),
        Number(e >> BigInt(8) & BigInt(255))
      ]);
    } else if (t < BigInt(1) << BigInt(30)) {
      const e = t << BigInt(2) | BigInt(2);
      return new Uint8Array([
        Number(e & BigInt(255)),
        Number(e >> BigInt(8) & BigInt(255)),
        Number(e >> BigInt(16) & BigInt(255)),
        Number(e >> BigInt(24) & BigInt(255))
      ]);
    } else throw new Error("BigInt compact encoding not supported > 2^30");
  }
  function p_(t) {
    const e = Uint8Array.from(ve.from(t.signature, "hex")), s = a_(t.transaction.address), n = c_({
      publicKey: s,
      signature: e,
      payload: t.transaction
    }), r = ve.from(n).toString("hex");
    return l_(r);
  }
  function Lg({ logger: t, name: e }) {
    const s = typeof t == "string" ? $A({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  const Bg = "wc", Mg = 2, Fg = "client", Ql = `${Bg}@${Mg}:${Fg}:`, fc = {
    name: Fg,
    logger: "error"
  }, vu = "WALLETCONNECT_DEEPLINK_CHOICE", g_ = "proposal", Cu = "Proposal expired", m_ = "session", _r = G.SEVEN_DAYS, w_ = "engine", et = {
    wc_sessionPropose: {
      req: {
        ttl: G.FIVE_MINUTES,
        prompt: true,
        tag: 1100
      },
      res: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1101
      },
      reject: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1120
      },
      autoReject: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1121
      }
    },
    wc_sessionSettle: {
      req: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1102
      },
      res: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1103
      }
    },
    wc_sessionUpdate: {
      req: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1104
      },
      res: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1105
      }
    },
    wc_sessionExtend: {
      req: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1106
      },
      res: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1107
      }
    },
    wc_sessionRequest: {
      req: {
        ttl: G.FIVE_MINUTES,
        prompt: true,
        tag: 1108
      },
      res: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1109
      }
    },
    wc_sessionEvent: {
      req: {
        ttl: G.FIVE_MINUTES,
        prompt: true,
        tag: 1110
      },
      res: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1111
      }
    },
    wc_sessionDelete: {
      req: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1112
      },
      res: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1113
      }
    },
    wc_sessionPing: {
      req: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1114
      },
      res: {
        ttl: G.ONE_DAY,
        prompt: false,
        tag: 1115
      }
    },
    wc_sessionAuthenticate: {
      req: {
        ttl: G.ONE_HOUR,
        prompt: true,
        tag: 1116
      },
      res: {
        ttl: G.ONE_HOUR,
        prompt: false,
        tag: 1117
      },
      reject: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1118
      },
      autoReject: {
        ttl: G.FIVE_MINUTES,
        prompt: false,
        tag: 1119
      }
    }
  }, pc = {
    min: G.FIVE_MINUTES,
    max: G.SEVEN_DAYS
  }, vs = {
    idle: "IDLE",
    active: "ACTIVE"
  }, y_ = {
    eth_sendTransaction: {
      key: ""
    },
    eth_sendRawTransaction: {
      key: ""
    },
    wallet_sendCalls: {
      key: ""
    },
    solana_signTransaction: {
      key: "signature"
    },
    solana_signAllTransactions: {
      key: "transactions"
    },
    solana_signAndSendTransaction: {
      key: "signature"
    },
    sui_signAndExecuteTransaction: {
      key: "digest"
    },
    sui_signTransaction: {
      key: ""
    },
    hedera_signAndExecuteTransaction: {
      key: "transactionId"
    },
    hedera_executeTransaction: {
      key: "transactionId"
    },
    near_signTransaction: {
      key: ""
    },
    near_signTransactions: {
      key: ""
    },
    tron_signTransaction: {
      key: "txID"
    },
    xrpl_signTransaction: {
      key: ""
    },
    xrpl_signTransactionFor: {
      key: ""
    },
    algo_signTxn: {
      key: ""
    },
    sendTransfer: {
      key: "txid"
    },
    stacks_stxTransfer: {
      key: "txId"
    },
    polkadot_signTransaction: {
      key: ""
    },
    cosmos_signDirect: {
      key: ""
    }
  }, b_ = "request", E_ = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate"
  ], v_ = "wc", C_ = "auth", A_ = "authKeys", I_ = "pairingTopics", N_ = "requests", Sa = `${v_}@${1.5}:${C_}:`, Do = `${Sa}:PUB_KEY`;
  var __ = Object.defineProperty, S_ = Object.defineProperties, T_ = Object.getOwnPropertyDescriptors, Au = Object.getOwnPropertySymbols, O_ = Object.prototype.hasOwnProperty, k_ = Object.prototype.propertyIsEnumerable, ml = (t, e, s) => e in t ? __(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ke = (t, e) => {
    for (var s in e || (e = {})) O_.call(e, s) && ml(t, s, e[s]);
    if (Au) for (var s of Au(e)) k_.call(e, s) && ml(t, s, e[s]);
    return t;
  }, ft = (t, e) => S_(t, T_(e)), F = (t, e, s) => ml(t, typeof e != "symbol" ? e + "" : e, s);
  class x_ extends cA {
    constructor(e) {
      super(e), F(this, "name", w_), F(this, "events", new _l()), F(this, "initialized", false), F(this, "requestQueue", {
        state: vs.idle,
        queue: []
      }), F(this, "sessionRequestQueue", {
        state: vs.idle,
        queue: []
      }), F(this, "emittedSessionRequests", new tI({
        limit: 500
      })), F(this, "requestQueueDelay", G.ONE_SECOND), F(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), F(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), F(this, "recentlyDeletedLimit", 200), F(this, "relayMessageCache", []), F(this, "pendingSessions", /* @__PURE__ */ new Map()), F(this, "init", async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
          methods: Object.keys(et)
        }), this.initialized = true, setTimeout(async () => {
          await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, G.toMiliseconds(this.requestQueueDelay)));
      }), F(this, "connect", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const n = ft(ke({}, s), {
          requiredNamespaces: s.requiredNamespaces || {},
          optionalNamespaces: s.optionalNamespaces || {}
        });
        await this.isValidConnect(n), n.optionalNamespaces = B2(n.requiredNamespaces, n.optionalNamespaces), n.requiredNamespaces = {};
        const { pairingTopic: r, requiredNamespaces: i, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: l } = n;
        let d = r, h, u = false;
        try {
          if (d) {
            const L = this.client.core.pairing.pairings.get(d);
            this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u = L.active;
          }
        } catch (L) {
          throw this.client.logger.error(`connect() -> pairing.get(${d}) failed`), L;
        }
        if (!d || !u) {
          const { topic: L, uri: M } = await this.client.core.pairing.create({
            internal: {
              skipSubscribe: true
            }
          });
          d = L, h = M;
        }
        if (!d) {
          const { message: L } = ce("NO_MATCHING_KEY", `connect() pairing topic: ${d}`);
          throw new Error(L);
        }
        const f = await this.client.core.crypto.generateKeyPair(), g = et.wc_sessionPropose.req.ttl || G.FIVE_MINUTES, p = yt(g), w = ft(ke(ke({
          requiredNamespaces: i,
          optionalNamespaces: o,
          relays: l ?? [
            {
              protocol: Np
            }
          ],
          proposer: {
            publicKey: f,
            metadata: this.client.metadata
          },
          expiryTimestamp: p,
          pairingTopic: d
        }, a && {
          sessionProperties: a
        }), c && {
          scopedProperties: c
        }), {
          id: Qs()
        }), T = $e("session_connect", w.id), { reject: I, resolve: N, done: $ } = Ar(g, Cu), U = ({ id: L }) => {
          L === w.id && (this.client.events.off("proposal_expire", U), this.pendingSessions.delete(w.id), this.events.emit(T, {
            error: {
              message: Cu,
              code: 0
            }
          }));
        };
        return this.client.events.on("proposal_expire", U), this.events.once(T, ({ error: L, session: M }) => {
          this.client.events.off("proposal_expire", U), L ? I(L) : M && N(M);
        }), await this.sendProposeSession({
          proposal: w,
          publishOpts: {
            internal: {
              throwOnFailedPublish: true
            },
            tvf: {
              correlationId: w.id
            }
          }
        }), await this.setProposal(w.id, w), {
          uri: h,
          approval: $
        };
      }), F(this, "pair", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          return await this.client.core.pairing.pair(s);
        } catch (n) {
          throw this.client.logger.error("pair() failed"), n;
        }
      }), F(this, "approve", async (s) => {
        var n, r, i;
        const o = this.client.core.eventClient.createEvent({
          properties: {
            topic: (n = s == null ? void 0 : s.id) == null ? void 0 : n.toString(),
            trace: [
              ss.session_approve_started
            ]
          }
        });
        try {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
        } catch (k) {
          throw o.setError(Mn.no_internet_connection), k;
        }
        try {
          await this.isValidProposalId(s == null ? void 0 : s.id);
        } catch (k) {
          throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), o.setError(Mn.proposal_not_found), k;
        }
        try {
          await this.isValidApprove(s);
        } catch (k) {
          throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(Mn.session_approve_namespace_validation_failure), k;
        }
        const { id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: h, sessionConfig: u } = s, f = this.client.proposal.get(a);
        this.client.core.eventClient.deleteEvent({
          eventId: o.eventId
        });
        const { pairingTopic: g, proposer: p, requiredNamespaces: w, optionalNamespaces: T } = f;
        let I = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
          topic: g
        });
        I || (I = (i = this.client.core.eventClient) == null ? void 0 : i.createEvent({
          type: ss.session_approve_started,
          properties: {
            topic: g,
            trace: [
              ss.session_approve_started,
              ss.session_namespaces_validation_success
            ]
          }
        }));
        const N = await this.client.core.crypto.generateKeyPair(), $ = p.publicKey, U = await this.client.core.crypto.generateSharedKey(N, $), L = ke(ke(ke({
          relay: {
            protocol: c ?? "irn"
          },
          namespaces: l,
          controller: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiry: yt(_r)
        }, d && {
          sessionProperties: d
        }), h && {
          scopedProperties: h
        }), u && {
          sessionConfig: u
        }), M = Ue.relay;
        I.addTrace(ss.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(U, {
            transportType: M,
            internal: {
              skipSubscribe: true
            }
          });
        } catch (k) {
          throw I.setError(Mn.subscribe_session_topic_failure), k;
        }
        I.addTrace(ss.subscribe_session_topic_success);
        const j = ft(ke({}, L), {
          topic: U,
          requiredNamespaces: w,
          optionalNamespaces: T,
          pairingTopic: g,
          acknowledged: false,
          self: L.controller,
          peer: {
            publicKey: p.publicKey,
            metadata: p.metadata
          },
          controller: N,
          transportType: Ue.relay
        });
        await this.client.session.set(U, j), I.addTrace(ss.store_session);
        try {
          await this.sendApproveSession({
            sessionTopic: U,
            proposal: f,
            pairingProposalResponse: {
              relay: {
                protocol: c ?? "irn"
              },
              responderPublicKey: N
            },
            sessionSettleRequest: L,
            publishOpts: {
              internal: {
                throwOnFailedPublish: true
              },
              tvf: {
                correlationId: a
              }
            }
          }), I.addTrace(ss.session_approve_publish_success);
        } catch (k) {
          throw this.client.logger.error(k), this.client.session.delete(U, Ke("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(U), k;
        }
        return this.client.core.eventClient.deleteEvent({
          eventId: I.eventId
        }), await this.client.core.pairing.updateMetadata({
          topic: g,
          metadata: p.metadata
        }), await this.deleteProposal(a), await this.client.core.pairing.activate({
          topic: g
        }), await this.setExpiry(U, yt(_r)), {
          topic: U,
          acknowledged: () => Promise.resolve(this.client.session.get(U))
        };
      }), F(this, "reject", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidReject(s);
        } catch (o) {
          throw this.client.logger.error("reject() -> isValidReject() failed"), o;
        }
        const { id: n, reason: r } = s;
        let i;
        try {
          i = this.client.proposal.get(n).pairingTopic;
        } catch (o) {
          throw this.client.logger.error(`reject() -> proposal.get(${n}) failed`), o;
        }
        i && await this.sendError({
          id: n,
          topic: i,
          error: r,
          rpcOpts: et.wc_sessionPropose.reject
        }), await this.deleteProposal(n);
      }), F(this, "update", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(s);
        } catch (h) {
          throw this.client.logger.error("update() -> isValidUpdate() failed"), h;
        }
        const { topic: n, namespaces: r } = s, { done: i, resolve: o, reject: a } = Ar(), c = Qs(), l = Yn().toString(), d = this.client.session.get(n).namespaces;
        return this.events.once($e("session_update", c), ({ error: h }) => {
          h ? a(h) : o();
        }), await this.client.session.update(n, {
          namespaces: r
        }), await this.sendRequest({
          topic: n,
          method: "wc_sessionUpdate",
          params: {
            namespaces: r
          },
          throwOnFailedPublish: true,
          clientRpcId: c,
          relayRpcId: l
        }).catch((h) => {
          this.client.logger.error(h), this.client.session.update(n, {
            namespaces: d
          }), a(h);
        }), {
          acknowledged: i
        };
      }), F(this, "extend", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidExtend(s);
        } catch (c) {
          throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
        }
        const { topic: n } = s, r = Qs(), { done: i, resolve: o, reject: a } = Ar();
        return this.events.once($e("session_extend", r), ({ error: c }) => {
          c ? a(c) : o();
        }), await this.setExpiry(n, yt(_r)), this.sendRequest({
          topic: n,
          method: "wc_sessionExtend",
          params: {},
          clientRpcId: r,
          throwOnFailedPublish: true
        }).catch((c) => {
          a(c);
        }), {
          acknowledged: i
        };
      }), F(this, "request", async (s) => {
        this.isInitialized();
        try {
          await this.isValidRequest(s);
        } catch (w) {
          throw this.client.logger.error("request() -> isValidRequest() failed"), w;
        }
        const { chainId: n, request: r, topic: i, expiry: o = et.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(i);
        (a == null ? void 0 : a.transportType) === Ue.relay && await this.confirmOnlineStateOrThrow();
        const c = Qs(), l = Yn().toString(), { done: d, resolve: h, reject: u } = Ar(o, "Request expired. Please try again.");
        this.events.once($e("session_request", c), ({ error: w, result: T }) => {
          w ? u(w) : h(T);
        });
        const f = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
        if (g) return await this.sendRequest({
          clientRpcId: c,
          relayRpcId: l,
          topic: i,
          method: f,
          params: {
            request: ft(ke({}, r), {
              expiryTimestamp: yt(o)
            }),
            chainId: n
          },
          expiry: o,
          throwOnFailedPublish: true,
          appLink: g
        }).catch((w) => u(w)), this.client.events.emit("session_request_sent", {
          topic: i,
          request: r,
          chainId: n,
          id: c
        }), await d();
        const p = {
          request: ft(ke({}, r), {
            expiryTimestamp: yt(o)
          }),
          chainId: n
        };
        return await Promise.all([
          new Promise(async (w) => {
            await this.sendRequest({
              clientRpcId: c,
              relayRpcId: l,
              topic: i,
              method: f,
              params: p,
              expiry: o,
              throwOnFailedPublish: true,
              tvf: this.getTVFParams(c, p)
            }).catch((T) => u(T)), this.client.events.emit("session_request_sent", {
              topic: i,
              request: r,
              chainId: n,
              id: c
            }), w();
          }),
          new Promise(async (w) => {
            var T;
            if (!((T = a.sessionConfig) != null && T.disableDeepLink)) {
              const I = await ZA(this.client.core.storage, vu);
              await zA({
                id: c,
                topic: i,
                wcDeepLink: I
              });
            }
            w();
          }),
          d()
        ]).then((w) => w[2]);
      }), F(this, "respond", async (s) => {
        var n, r;
        this.isInitialized();
        const i = this.client.core.eventClient.createEvent({
          properties: {
            topic: (s == null ? void 0 : s.topic) || ((r = (n = s == null ? void 0 : s.response) == null ? void 0 : n.id) == null ? void 0 : r.toString()),
            trace: [
              ss.session_request_response_started
            ]
          }
        });
        try {
          await this.isValidRespond(s);
        } catch (h) {
          throw i.addTrace(h == null ? void 0 : h.message), i.setError(Mn.session_request_response_validation_failure), h;
        }
        i.addTrace(ss.session_request_response_validation_success);
        const { topic: o, response: a } = s, { id: c } = a, l = this.client.session.get(o);
        l.transportType === Ue.relay && await this.confirmOnlineStateOrThrow();
        const d = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
        try {
          i.addTrace(ss.session_request_response_publish_started), Us(a) ? await this.sendResult({
            id: c,
            topic: o,
            result: a.result,
            throwOnFailedPublish: true,
            appLink: d
          }) : As(a) && await this.sendError({
            id: c,
            topic: o,
            error: a.error,
            appLink: d
          }), this.cleanupAfterResponse(s);
        } catch (h) {
          throw i.addTrace(h == null ? void 0 : h.message), i.setError(Mn.session_request_response_publish_failure), h;
        }
      }), F(this, "ping", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidPing(s);
        } catch (r) {
          throw this.client.logger.error("ping() -> isValidPing() failed"), r;
        }
        const { topic: n } = s;
        if (this.client.session.keys.includes(n)) {
          const r = Qs(), i = Yn().toString(), { done: o, resolve: a, reject: c } = Ar();
          this.events.once($e("session_ping", r), ({ error: l }) => {
            l ? c(l) : a();
          }), await Promise.all([
            this.sendRequest({
              topic: n,
              method: "wc_sessionPing",
              params: {},
              throwOnFailedPublish: true,
              clientRpcId: r,
              relayRpcId: i
            }),
            o()
          ]);
        } else this.client.core.pairing.pairings.keys.includes(n) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({
          topic: n
        }));
      }), F(this, "emit", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(s);
        const { topic: n, event: r, chainId: i } = s, o = Yn().toString(), a = Qs();
        await this.sendRequest({
          topic: n,
          method: "wc_sessionEvent",
          params: {
            event: r,
            chainId: i
          },
          throwOnFailedPublish: true,
          relayRpcId: o,
          clientRpcId: a
        });
      }), F(this, "disconnect", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(s);
        const { topic: n } = s;
        if (this.client.session.keys.includes(n)) await this.sendRequest({
          topic: n,
          method: "wc_sessionDelete",
          params: Ke("USER_DISCONNECTED"),
          throwOnFailedPublish: true
        }), await this.deleteSession({
          topic: n,
          emitEvent: false
        });
        else if (this.client.core.pairing.pairings.keys.includes(n)) await this.client.core.pairing.disconnect({
          topic: n
        });
        else {
          const { message: r } = ce("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
          throw new Error(r);
        }
      }), F(this, "find", (s) => (this.isInitialized(), this.client.session.getAll().filter((n) => j2(n, s)))), F(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), F(this, "authenticate", async (s, n) => {
        var r;
        this.isInitialized(), this.isValidAuthenticate(s);
        const i = n && this.client.core.linkModeSupportedApps.includes(n) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode), o = i ? Ue.link_mode : Ue.relay;
        o === Ue.relay && await this.confirmOnlineStateOrThrow();
        const { chains: a, statement: c = "", uri: l, domain: d, nonce: h, type: u, exp: f, nbf: g, methods: p = [], expiry: w } = s, T = [
          ...s.resources || []
        ], { topic: I, uri: N } = await this.client.core.pairing.create({
          methods: [
            "wc_sessionAuthenticate"
          ],
          transportType: o
        });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: {
            topic: I,
            uri: N
          }
        });
        const $ = await this.client.core.crypto.generateKeyPair(), U = dc($);
        if (await Promise.all([
          this.client.auth.authKeys.set(Do, {
            responseTopic: U,
            publicKey: $
          }),
          this.client.auth.pairingTopics.set(U, {
            topic: U,
            pairingTopic: I
          })
        ]), await this.client.core.relayer.subscribe(U, {
          transportType: o
        }), this.client.logger.info(`sending request to new pairing topic: ${I}`), p.length > 0) {
          const { namespace: C } = Ys(a[0]);
          let _ = hN(C, "request", p);
          Uo(T) && (_ = fN(_, T.pop())), T.push(_);
        }
        const L = w && w > et.wc_sessionAuthenticate.req.ttl ? w : et.wc_sessionAuthenticate.req.ttl, M = {
          authPayload: {
            type: u ?? "caip122",
            chains: a,
            statement: c,
            aud: l,
            domain: d,
            version: "1",
            nonce: h,
            iat: (/* @__PURE__ */ new Date()).toISOString(),
            exp: f,
            nbf: g,
            resources: T
          },
          requester: {
            publicKey: $,
            metadata: this.client.metadata
          },
          expiryTimestamp: yt(L)
        }, j = {
          eip155: {
            chains: a,
            methods: [
              .../* @__PURE__ */ new Set([
                "personal_sign",
                ...p
              ])
            ],
            events: [
              "chainChanged",
              "accountsChanged"
            ]
          }
        }, k = {
          requiredNamespaces: {},
          optionalNamespaces: j,
          relays: [
            {
              protocol: "irn"
            }
          ],
          pairingTopic: I,
          proposer: {
            publicKey: $,
            metadata: this.client.metadata
          },
          expiryTimestamp: yt(et.wc_sessionPropose.req.ttl),
          id: Qs()
        }, { done: H, resolve: V, reject: O } = Ar(L, "Request expired"), b = Qs(), E = $e("session_connect", k.id), m = $e("session_request", b), v = async ({ error: C, session: _ }) => {
          this.events.off(m, A), C ? O(C) : _ && V({
            session: _
          });
        }, A = async (C) => {
          var _, P, x;
          if (await this.deletePendingAuthRequest(b, {
            message: "fulfilled",
            code: 0
          }), C.error) {
            const te = Ke("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
            return C.error.code === te.code ? void 0 : (this.events.off(E, v), O(C.error.message));
          }
          await this.deleteProposal(k.id), this.events.off(E, v);
          const { cacaos: z, responder: R } = C.result, B = [], Y = [];
          for (const te of z) {
            await Zh({
              cacao: te,
              projectId: this.client.core.projectId
            }) || (this.client.logger.error(te, "Signature verification failed"), O(Ke("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
            const { p: ae } = te, Oe = Uo(ae.resources), je = [
              il(ae.iss)
            ], it = Qo(ae.iss);
            if (Oe) {
              const Ct = Jh(Oe), no = Xh(Oe);
              B.push(...Ct), je.push(...no);
            }
            for (const Ct of je) Y.push(`${Ct}:${it}`);
          }
          const X = await this.client.core.crypto.generateSharedKey($, R.publicKey);
          let de;
          B.length > 0 && (de = {
            topic: X,
            acknowledged: true,
            self: {
              publicKey: $,
              metadata: this.client.metadata
            },
            peer: R,
            controller: R.publicKey,
            expiry: yt(_r),
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: I,
            namespaces: mu([
              ...new Set(B)
            ], [
              ...new Set(Y)
            ]),
            transportType: o
          }, await this.client.core.relayer.subscribe(X, {
            transportType: o
          }), await this.client.session.set(X, de), I && await this.client.core.pairing.updateMetadata({
            topic: I,
            metadata: R.metadata
          }), de = this.client.session.get(X)), (_ = this.client.metadata.redirect) != null && _.linkMode && (P = R.metadata.redirect) != null && P.linkMode && (x = R.metadata.redirect) != null && x.universal && n && (this.client.core.addLinkModeSupportedApp(R.metadata.redirect.universal), this.client.session.update(X, {
            transportType: Ue.link_mode
          })), V({
            auths: z,
            session: de
          });
        };
        this.events.once(E, v), this.events.once(m, A);
        let S;
        try {
          if (i) {
            const C = Is("wc_sessionAuthenticate", M, b);
            this.client.core.history.set(I, C);
            const _ = await this.client.core.crypto.encode("", C, {
              type: _2,
              encoding: hi
            });
            S = Ao(n, I, _);
          } else await Promise.all([
            this.sendRequest({
              topic: I,
              method: "wc_sessionAuthenticate",
              params: M,
              expiry: s.expiry,
              throwOnFailedPublish: true,
              clientRpcId: b
            }),
            this.sendRequest({
              topic: I,
              method: "wc_sessionPropose",
              params: k,
              expiry: et.wc_sessionPropose.req.ttl,
              throwOnFailedPublish: true,
              clientRpcId: k.id
            })
          ]);
        } catch (C) {
          throw this.events.off(E, v), this.events.off(m, A), C;
        }
        return await this.setProposal(k.id, k), await this.setAuthRequest(b, {
          request: ft(ke({}, M), {
            verifyContext: {}
          }),
          pairingTopic: I,
          transportType: o
        }), {
          uri: S ?? N,
          response: H
        };
      }), F(this, "approveSessionAuthenticate", async (s) => {
        const { id: n, auths: r } = s, i = this.client.core.eventClient.createEvent({
          properties: {
            topic: n.toString(),
            trace: [
              Fn.authenticated_session_approve_started
            ]
          }
        });
        try {
          this.isInitialized();
        } catch (w) {
          throw i.setError(oi.no_internet_connection), w;
        }
        const o = this.getPendingAuthRequest(n);
        if (!o) throw i.setError(oi.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${n}`);
        const a = o.transportType || Ue.relay;
        a === Ue.relay && await this.confirmOnlineStateOrThrow();
        const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), d = dc(c), h = {
          type: lc,
          receiverPublicKey: c,
          senderPublicKey: l
        }, u = [], f = [];
        for (const w of r) {
          if (!await Zh({
            cacao: w,
            projectId: this.client.core.projectId
          })) {
            i.setError(oi.invalid_cacao);
            const U = Ke("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
            throw await this.sendError({
              id: n,
              topic: d,
              error: U,
              encodeOpts: h
            }), new Error(U.message);
          }
          i.addTrace(Fn.cacaos_verified);
          const { p: T } = w, I = Uo(T.resources), N = [
            il(T.iss)
          ], $ = Qo(T.iss);
          if (I) {
            const U = Jh(I), L = Xh(I);
            u.push(...U), N.push(...L);
          }
          for (const U of N) f.push(`${U}:${$}`);
        }
        const g = await this.client.core.crypto.generateSharedKey(l, c);
        i.addTrace(Fn.create_authenticated_session_topic);
        let p;
        if ((u == null ? void 0 : u.length) > 0) {
          p = {
            topic: g,
            acknowledged: true,
            self: {
              publicKey: l,
              metadata: this.client.metadata
            },
            peer: {
              publicKey: c,
              metadata: o.requester.metadata
            },
            controller: c,
            expiry: yt(_r),
            authentication: r,
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: o.pairingTopic,
            namespaces: mu([
              ...new Set(u)
            ], [
              ...new Set(f)
            ]),
            transportType: a
          }, i.addTrace(Fn.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(g, {
              transportType: a
            });
          } catch (w) {
            throw i.setError(oi.subscribe_authenticated_session_topic_failure), w;
          }
          i.addTrace(Fn.subscribe_authenticated_session_topic_success), await this.client.session.set(g, p), i.addTrace(Fn.store_authenticated_session), await this.client.core.pairing.updateMetadata({
            topic: o.pairingTopic,
            metadata: o.requester.metadata
          });
        }
        i.addTrace(Fn.publishing_authenticated_session_approve);
        try {
          await this.sendResult({
            topic: d,
            id: n,
            result: {
              cacaos: r,
              responder: {
                publicKey: l,
                metadata: this.client.metadata
              }
            },
            encodeOpts: h,
            throwOnFailedPublish: true,
            appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
          });
        } catch (w) {
          throw i.setError(oi.authenticated_session_approve_publish_failure), w;
        }
        return await this.client.auth.requests.delete(n, {
          message: "fulfilled",
          code: 0
        }), await this.client.core.pairing.activate({
          topic: o.pairingTopic
        }), this.client.core.eventClient.deleteEvent({
          eventId: i.eventId
        }), {
          session: p
        };
      }), F(this, "rejectSessionAuthenticate", async (s) => {
        this.isInitialized();
        const { id: n, reason: r } = s, i = this.getPendingAuthRequest(n);
        if (!i) throw new Error(`Could not find pending auth request with id ${n}`);
        i.transportType === Ue.relay && await this.confirmOnlineStateOrThrow();
        const o = i.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = dc(o), l = {
          type: lc,
          receiverPublicKey: o,
          senderPublicKey: a
        };
        await this.sendError({
          id: n,
          topic: c,
          error: r,
          encodeOpts: l,
          rpcOpts: et.wc_sessionAuthenticate.reject,
          appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
        }), await this.client.auth.requests.delete(n, {
          message: "rejected",
          code: 0
        }), await this.deleteProposal(n);
      }), F(this, "formatAuthMessage", (s) => {
        this.isInitialized();
        const { request: n, iss: r } = s;
        return ig(n, r);
      }), F(this, "processRelayMessageCache", () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
            const s = this.relayMessageCache.shift();
            s && await this.onRelayMessage(s);
          } catch (s) {
            this.client.logger.error(s);
          }
        }, 50);
      }), F(this, "cleanupDuplicatePairings", async (s) => {
        if (s.pairingTopic) try {
          const n = this.client.core.pairing.pairings.get(s.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((i) => {
            var o, a;
            return ((o = i.peerMetadata) == null ? void 0 : o.url) && ((a = i.peerMetadata) == null ? void 0 : a.url) === s.peer.metadata.url && i.topic && i.topic !== n.topic;
          });
          if (r.length === 0) return;
          this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((i) => this.client.core.pairing.disconnect({
            topic: i.topic
          }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
      }), F(this, "deleteSession", async (s) => {
        var n;
        const { topic: r, expirerHasDeleted: i = false, emitEvent: o = true, id: a = 0 } = s, { self: c } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(vu).catch((l) => this.client.logger.warn(l)), this.getPendingSessionRequests().forEach((l) => {
          l.topic === r && this.deletePendingSessionRequest(l.id, Ke("USER_DISCONNECTED"));
        }), r === ((n = this.sessionRequestQueue.queue[0]) == null ? void 0 : n.topic) && (this.sessionRequestQueue.state = vs.idle), o && this.client.events.emit("session_delete", {
          id: a,
          topic: r
        });
      }), F(this, "deleteProposal", async (s, n) => {
        var _a2;
        if (n) try {
          const r = this.client.proposal.get(s);
          (_a2 = this.client.core.eventClient.getEvent({
            topic: r.pairingTopic
          })) == null ? void 0 : _a2.setError(Mn.proposal_expired);
        } catch {
        }
        await Promise.all([
          this.client.proposal.delete(s, Ke("USER_DISCONNECTED")),
          n ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "proposal");
      }), F(this, "deletePendingSessionRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.pendingRequest.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== s), r && (this.sessionRequestQueue.state = vs.idle, this.client.events.emit("session_request_expire", {
          id: s
        }));
      }), F(this, "deletePendingAuthRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.auth.requests.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]);
      }), F(this, "setExpiry", async (s, n) => {
        this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, n), await this.client.session.update(s, {
          expiry: n
        }));
      }), F(this, "setProposal", async (s, n) => {
        this.client.core.expirer.set(s, yt(et.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, n);
      }), F(this, "setAuthRequest", async (s, n) => {
        const { request: r, pairingTopic: i, transportType: o = Ue.relay } = n;
        this.client.core.expirer.set(s, r.expiryTimestamp), await this.client.auth.requests.set(s, {
          authPayload: r.authPayload,
          requester: r.requester,
          expiryTimestamp: r.expiryTimestamp,
          id: s,
          pairingTopic: i,
          verifyContext: r.verifyContext,
          transportType: o
        });
      }), F(this, "setPendingSessionRequest", async (s) => {
        const { id: n, topic: r, params: i, verifyContext: o } = s, a = i.request.expiryTimestamp || yt(et.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(n, a), await this.client.pendingRequest.set(n, {
          id: n,
          topic: r,
          params: i,
          verifyContext: o
        });
      }), F(this, "sendRequest", async (s) => {
        const { topic: n, method: r, params: i, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: h, publishOpts: u = {} } = s, f = Is(r, i, c);
        let g;
        const p = !!d;
        try {
          const I = p ? hi : jn;
          g = await this.client.core.crypto.encode(n, f, {
            encoding: I
          });
        } catch (I) {
          throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${n} failed`), I;
        }
        let w;
        if (E_.includes(r)) {
          const I = gn(JSON.stringify(f)), N = gn(g);
          w = await this.client.core.verify.register({
            id: N,
            decryptedId: I
          });
        }
        const T = ke(ke({}, et[r].req), u);
        if (T.attestation = w, o && (T.ttl = o), a && (T.id = a), this.client.core.history.set(n, f), p) {
          const I = Ao(d, n, g);
          await globalThis.Linking.openURL(I, this.client.name);
        } else T.tvf = ft(ke({}, h), {
          correlationId: f.id
        }), l ? (T.internal = ft(ke({}, T.internal), {
          throwOnFailedPublish: true
        }), await this.client.core.relayer.publish(n, g, T)) : this.client.core.relayer.publish(n, g, T).catch((I) => this.client.logger.error(I));
        return f.id;
      }), F(this, "sendProposeSession", async (s) => {
        const { proposal: n, publishOpts: r } = s, i = Is("wc_sessionPropose", n, n.id);
        this.client.core.history.set(n.pairingTopic, i);
        const o = await this.client.core.crypto.encode(n.pairingTopic, i, {
          encoding: jn
        }), a = gn(JSON.stringify(i)), c = gn(o), l = await this.client.core.verify.register({
          id: c,
          decryptedId: a
        });
        await this.client.core.relayer.publishCustom({
          payload: {
            pairingTopic: n.pairingTopic,
            sessionProposal: o
          },
          opts: ft(ke({}, r), {
            publishMethod: "wc_proposeSession",
            attestation: l
          })
        });
      }), F(this, "sendApproveSession", async (s) => {
        const { sessionTopic: n, pairingProposalResponse: r, proposal: i, sessionSettleRequest: o, publishOpts: a } = s, c = $i(i.id, r), l = await this.client.core.crypto.encode(i.pairingTopic, c, {
          encoding: jn
        }), d = Is("wc_sessionSettle", o, a == null ? void 0 : a.id), h = await this.client.core.crypto.encode(n, d, {
          encoding: jn
        });
        this.client.core.history.set(n, d), await this.client.core.relayer.publishCustom({
          payload: {
            sessionTopic: n,
            pairingTopic: i.pairingTopic,
            sessionProposalResponse: l,
            sessionSettlementRequest: h
          },
          opts: ft(ke({}, a), {
            publishMethod: "wc_approveSession"
          })
        });
      }), F(this, "sendResult", async (s) => {
        const { id: n, topic: r, result: i, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, l = $i(n, i);
        let d;
        const h = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const g = h ? hi : jn;
          d = await this.client.core.crypto.encode(r, l, ft(ke({}, a || {}), {
            encoding: g
          }));
        } catch (g) {
          throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`), g;
        }
        let u, f;
        try {
          u = await this.client.core.history.get(r, n);
          const g = u.request;
          try {
            f = this.getTVFParams(n, g.params, i);
          } catch (p) {
            this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${p == null ? void 0 : p.message}`);
          }
        } catch (g) {
          throw this.client.logger.error(`sendResult() -> history.get(${r}, ${n}) failed`), g;
        }
        if (h) {
          const g = Ao(c, r, d);
          await globalThis.Linking.openURL(g, this.client.name);
        } else {
          const g = u.request.method, p = et[g].res;
          p.tvf = ft(ke({}, f), {
            correlationId: n
          }), o ? (p.internal = ft(ke({}, p.internal), {
            throwOnFailedPublish: true
          }), await this.client.core.relayer.publish(r, d, p)) : this.client.core.relayer.publish(r, d, p).catch((w) => this.client.logger.error(w));
        }
        await this.client.core.history.resolve(l);
      }), F(this, "sendError", async (s) => {
        const { id: n, topic: r, error: i, encodeOpts: o, rpcOpts: a, appLink: c } = s, l = af(n, i);
        let d;
        const h = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const f = h ? hi : jn;
          d = await this.client.core.crypto.encode(r, l, ft(ke({}, o || {}), {
            encoding: f
          }));
        } catch (f) {
          throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`), f;
        }
        let u;
        try {
          u = await this.client.core.history.get(r, n);
        } catch (f) {
          throw this.client.logger.error(`sendError() -> history.get(${r}, ${n}) failed`), f;
        }
        if (h) {
          const f = Ao(c, r, d);
          await globalThis.Linking.openURL(f, this.client.name);
        } else {
          const f = u.request.method, g = a || et[f].res;
          this.client.core.relayer.publish(r, d, g);
        }
        await this.client.core.history.resolve(l);
      }), F(this, "cleanup", async () => {
        const s = [], n = [];
        this.client.session.getAll().forEach((r) => {
          let i = false;
          bn(r.expiry) && (i = true), this.client.core.crypto.keychain.has(r.topic) || (i = true), i && s.push(r.topic);
        }), this.client.proposal.getAll().forEach((r) => {
          bn(r.expiryTimestamp) && n.push(r.id);
        }), await Promise.all([
          ...s.map((r) => this.deleteSession({
            topic: r
          })),
          ...n.map((r) => this.deleteProposal(r))
        ]);
      }), F(this, "onProviderMessageEvent", async (s) => {
        !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s);
      }), F(this, "onRelayEventRequest", async (s) => {
        this.requestQueue.queue.push(s), await this.processRequestsQueue();
      }), F(this, "processRequestsQueue", async () => {
        if (this.requestQueue.state === vs.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = vs.active;
          const s = this.requestQueue.queue.shift();
          if (s) try {
            await this.processRequest(s);
          } catch (n) {
            this.client.logger.warn(n);
          }
        }
        this.requestQueue.state = vs.idle;
      }), F(this, "processRequest", async (s) => {
        const { topic: n, payload: r, attestation: i, transportType: o, encryptedId: a } = s, c = r.method;
        if (!this.shouldIgnorePairingRequest({
          topic: n,
          requestMethod: c
        })) switch (c) {
          case "wc_sessionPropose":
            return await this.onSessionProposeRequest({
              topic: n,
              payload: r,
              attestation: i,
              encryptedId: a
            });
          case "wc_sessionSettle":
            return await this.onSessionSettleRequest(n, r);
          case "wc_sessionUpdate":
            return await this.onSessionUpdateRequest(n, r);
          case "wc_sessionExtend":
            return await this.onSessionExtendRequest(n, r);
          case "wc_sessionPing":
            return await this.onSessionPingRequest(n, r);
          case "wc_sessionDelete":
            return await this.onSessionDeleteRequest(n, r);
          case "wc_sessionRequest":
            return await this.onSessionRequest({
              topic: n,
              payload: r,
              attestation: i,
              encryptedId: a,
              transportType: o
            });
          case "wc_sessionEvent":
            return await this.onSessionEventRequest(n, r);
          case "wc_sessionAuthenticate":
            return await this.onSessionAuthenticateRequest({
              topic: n,
              payload: r,
              attestation: i,
              encryptedId: a,
              transportType: o
            });
          default:
            return this.client.logger.info(`Unsupported request method ${c}`);
        }
      }), F(this, "onRelayEventResponse", async (s) => {
        const { topic: n, payload: r, transportType: i } = s, o = (await this.client.core.history.get(n, r.id)).request.method;
        switch (o) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(n, r, i);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(n, r);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(n, r);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(n, r);
          case "wc_sessionPing":
            return this.onSessionPingResponse(n, r);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(n, r);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateResponse(n, r);
          default:
            return this.client.logger.info(`Unsupported response method ${o}`);
        }
      }), F(this, "onRelayEventUnknownPayload", (s) => {
        const { topic: n } = s, { message: r } = ce("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
        throw new Error(r);
      }), F(this, "shouldIgnorePairingRequest", (s) => {
        const { topic: n, requestMethod: r } = s, i = this.expectedPairingMethodMap.get(n);
        return !i || i.includes(r) ? false : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
      }), F(this, "onSessionProposeRequest", async (s) => {
        const { topic: n, payload: r, attestation: i, encryptedId: o } = s, { params: a, id: c } = r;
        try {
          const l = this.client.core.eventClient.getEvent({
            topic: n
          });
          this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null ? void 0 : l.setError(Ls.proposal_listener_not_found)), this.isValidConnect(ke({}, r.params));
          const d = a.expiryTimestamp || yt(et.wc_sessionPropose.req.ttl), h = ke({
            id: c,
            pairingTopic: n,
            expiryTimestamp: d,
            attestation: i,
            encryptedId: o
          }, a);
          await this.setProposal(c, h);
          const u = await this.getVerifyContext({
            attestationId: i,
            hash: gn(JSON.stringify(r)),
            encryptedId: o,
            metadata: h.proposer.metadata
          });
          l == null ? void 0 : l.addTrace(Cs.emit_session_proposal), this.client.events.emit("session_proposal", {
            id: c,
            params: h,
            verifyContext: u
          });
        } catch (l) {
          await this.sendError({
            id: c,
            topic: n,
            error: l,
            rpcOpts: et.wc_sessionPropose.autoReject
          }), this.client.logger.error(l);
        }
      }), F(this, "onSessionProposeResponse", async (s, n, r) => {
        const { id: i } = n;
        if (Us(n)) {
          const { result: o } = n;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: o
          });
          const a = this.client.proposal.get(i);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: a
          });
          const c = a.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: c
          });
          const l = o.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: l
          });
          const d = await this.client.core.crypto.generateSharedKey(c, l);
          this.pendingSessions.set(i, {
            sessionTopic: d,
            pairingTopic: s,
            proposalId: i,
            publicKey: c
          });
          const h = await this.client.core.relayer.subscribe(d, {
            transportType: r
          });
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: h
          }), await this.client.core.pairing.activate({
            topic: s
          });
        } else if (As(n)) {
          await this.deleteProposal(i);
          const o = $e("session_connect", i);
          if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
          this.events.emit(o, {
            error: n.error
          });
        }
      }), F(this, "onSessionSettleRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          this.isValidSessionSettleRequest(i);
          const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: h, sessionConfig: u } = n.params, f = [
            ...this.pendingSessions.values()
          ].find((w) => w.sessionTopic === s);
          if (!f) return this.client.logger.error(`Pending session not found for topic ${s}`);
          const g = this.client.proposal.get(f.proposalId), p = ft(ke(ke(ke({
            topic: s,
            relay: o,
            expiry: c,
            namespaces: l,
            acknowledged: true,
            pairingTopic: f.pairingTopic,
            requiredNamespaces: g.requiredNamespaces,
            optionalNamespaces: g.optionalNamespaces,
            controller: a.publicKey,
            self: {
              publicKey: f.publicKey,
              metadata: this.client.metadata
            },
            peer: {
              publicKey: a.publicKey,
              metadata: a.metadata
            }
          }, d && {
            sessionProperties: d
          }), h && {
            scopedProperties: h
          }), u && {
            sessionConfig: u
          }), {
            transportType: Ue.relay
          });
          await this.client.session.set(p.topic, p), await this.setExpiry(p.topic, p.expiry), await this.client.core.pairing.updateMetadata({
            topic: f.pairingTopic,
            metadata: p.peer.metadata
          }), this.client.events.emit("session_connect", {
            session: p
          }), this.events.emit($e("session_connect", f.proposalId), {
            session: p
          }), this.pendingSessions.delete(f.proposalId), this.deleteProposal(f.proposalId, false), this.cleanupDuplicatePairings(p), await this.sendResult({
            id: n.id,
            topic: s,
            result: true
          });
        } catch (o) {
          await this.sendError({
            id: r,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), F(this, "onSessionSettleResponse", async (s, n) => {
        const { id: r } = n;
        Us(n) ? (await this.client.session.update(s, {
          acknowledged: true
        }), this.events.emit($e("session_approve", r), {})) : As(n) && (await this.client.session.delete(s, Ke("USER_DISCONNECTED")), this.events.emit($e("session_approve", r), {
          error: n.error
        }));
      }), F(this, "onSessionUpdateRequest", async (s, n) => {
        const { params: r, id: i } = n;
        try {
          const o = `${s}_session_update`, a = ui.get(o);
          if (a && this.isRequestOutOfSync(a, i)) {
            this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
              id: i,
              topic: s,
              error: Ke("INVALID_UPDATE_REQUEST")
            });
            return;
          }
          this.isValidUpdate(ke({
            topic: s
          }, r));
          try {
            ui.set(o, i), await this.client.session.update(s, {
              namespaces: r.namespaces
            }), await this.sendResult({
              id: i,
              topic: s,
              result: true
            });
          } catch (c) {
            throw ui.delete(o), c;
          }
          this.client.events.emit("session_update", {
            id: i,
            topic: s,
            params: r
          });
        } catch (o) {
          await this.sendError({
            id: i,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), F(this, "isRequestOutOfSync", (s, n) => n.toString().slice(0, -3) < s.toString().slice(0, -3)), F(this, "onSessionUpdateResponse", (s, n) => {
        const { id: r } = n, i = $e("session_update", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Us(n) ? this.events.emit($e("session_update", r), {}) : As(n) && this.events.emit($e("session_update", r), {
          error: n.error
        });
      }), F(this, "onSessionExtendRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidExtend({
            topic: s
          }), await this.setExpiry(s, yt(_r)), await this.sendResult({
            id: r,
            topic: s,
            result: true
          }), this.client.events.emit("session_extend", {
            id: r,
            topic: s
          });
        } catch (i) {
          await this.sendError({
            id: r,
            topic: s,
            error: i
          }), this.client.logger.error(i);
        }
      }), F(this, "onSessionExtendResponse", (s, n) => {
        const { id: r } = n, i = $e("session_extend", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Us(n) ? this.events.emit($e("session_extend", r), {}) : As(n) && this.events.emit($e("session_extend", r), {
          error: n.error
        });
      }), F(this, "onSessionPingRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidPing({
            topic: s
          }), await this.sendResult({
            id: r,
            topic: s,
            result: true,
            throwOnFailedPublish: true
          }), this.client.events.emit("session_ping", {
            id: r,
            topic: s
          });
        } catch (i) {
          await this.sendError({
            id: r,
            topic: s,
            error: i
          }), this.client.logger.error(i);
        }
      }), F(this, "onSessionPingResponse", (s, n) => {
        const { id: r } = n, i = $e("session_ping", r);
        setTimeout(() => {
          if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners 2176`);
          Us(n) ? this.events.emit($e("session_ping", r), {}) : As(n) && this.events.emit($e("session_ping", r), {
            error: n.error
          });
        }, 500);
      }), F(this, "onSessionDeleteRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidDisconnect({
            topic: s,
            reason: n.params
          }), await Promise.all([
            new Promise((i) => {
              this.client.core.relayer.once(Fe.publish, async () => {
                i(await this.deleteSession({
                  topic: s,
                  id: r
                }));
              });
            }),
            this.sendResult({
              id: r,
              topic: s,
              result: true
            }),
            this.cleanupPendingSentRequestsForTopic({
              topic: s,
              error: Ke("USER_DISCONNECTED")
            })
          ]).catch((i) => this.client.logger.error(i));
        } catch (i) {
          this.client.logger.error(i);
        }
      }), F(this, "onSessionRequest", async (s) => {
        var n, r, i;
        const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: d } = s, { id: h, params: u } = a;
        try {
          await this.isValidRequest(ke({
            topic: o
          }, u));
          const f = this.client.session.get(o), g = await this.getVerifyContext({
            attestationId: c,
            hash: gn(JSON.stringify(Is("wc_sessionRequest", u, h))),
            encryptedId: l,
            metadata: f.peer.metadata,
            transportType: d
          }), p = {
            id: h,
            topic: o,
            params: u,
            verifyContext: g
          };
          await this.setPendingSessionRequest(p), d === Ue.link_mode && (n = f.peer.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp((r = f.peer.metadata.redirect) == null ? void 0 : r.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(p) : (this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue());
        } catch (f) {
          await this.sendError({
            id: h,
            topic: o,
            error: f
          }), this.client.logger.error(f);
        }
      }), F(this, "onSessionRequestResponse", (s, n) => {
        const { id: r } = n, i = $e("session_request", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Us(n) ? this.events.emit($e("session_request", r), {
          result: n.result
        }) : As(n) && this.events.emit($e("session_request", r), {
          error: n.error
        });
      }), F(this, "onSessionEventRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          const o = `${s}_session_event_${i.event.name}`, a = ui.get(o);
          if (a && this.isRequestOutOfSync(a, r)) {
            this.client.logger.info(`Discarding out of sync request - ${r}`);
            return;
          }
          this.isValidEmit(ke({
            topic: s
          }, i)), this.client.events.emit("session_event", {
            id: r,
            topic: s,
            params: i
          }), ui.set(o, r);
        } catch (o) {
          await this.sendError({
            id: r,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), F(this, "onSessionAuthenticateResponse", (s, n) => {
        const { id: r } = n;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: s,
          payload: n
        }), Us(n) ? this.events.emit($e("session_request", r), {
          result: n.result
        }) : As(n) && this.events.emit($e("session_request", r), {
          error: n.error
        });
      }), F(this, "onSessionAuthenticateRequest", async (s) => {
        var n;
        const { topic: r, payload: i, attestation: o, encryptedId: a, transportType: c } = s;
        try {
          const { requester: l, authPayload: d, expiryTimestamp: h } = i.params, u = await this.getVerifyContext({
            attestationId: o,
            hash: gn(JSON.stringify(i)),
            encryptedId: a,
            metadata: l.metadata,
            transportType: c
          }), f = {
            requester: l,
            pairingTopic: r,
            id: i.id,
            authPayload: d,
            verifyContext: u,
            expiryTimestamp: h
          };
          await this.setAuthRequest(i.id, {
            request: f,
            pairingTopic: r,
            transportType: c
          }), c === Ue.link_mode && (n = l.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
            topic: r,
            params: i.params,
            id: i.id,
            verifyContext: u
          });
        } catch (l) {
          this.client.logger.error(l);
          const d = i.params.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), u = this.getAppLinkIfEnabled(i.params.requester.metadata, c), f = {
            type: lc,
            receiverPublicKey: d,
            senderPublicKey: h
          };
          await this.sendError({
            id: i.id,
            topic: r,
            error: l,
            encodeOpts: f,
            rpcOpts: et.wc_sessionAuthenticate.autoReject,
            appLink: u
          });
        }
      }), F(this, "addSessionRequestToSessionRequestQueue", (s) => {
        this.sessionRequestQueue.queue.push(s);
      }), F(this, "cleanupAfterResponse", (s) => {
        this.deletePendingSessionRequest(s.response.id, {
          message: "fulfilled",
          code: 0
        }), setTimeout(() => {
          this.sessionRequestQueue.state = vs.idle, this.processSessionRequestQueue();
        }, G.toMiliseconds(this.requestQueueDelay));
      }), F(this, "cleanupPendingSentRequestsForTopic", ({ topic: s, error: n }) => {
        const r = this.client.core.history.pending;
        r.length > 0 && r.filter((i) => i.topic === s && i.request.method === "wc_sessionRequest").forEach((i) => {
          const o = i.request.id, a = $e("session_request", o);
          if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
          this.events.emit($e("session_request", i.request.id), {
            error: n
          });
        });
      }), F(this, "processSessionRequestQueue", () => {
        if (this.sessionRequestQueue.state === vs.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const s = this.sessionRequestQueue.queue[0];
        if (!s) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          this.emitSessionRequest(s);
        } catch (n) {
          this.client.logger.error(n);
        }
      }), F(this, "emitSessionRequest", (s) => {
        if (this.emittedSessionRequests.has(s.id)) {
          this.client.logger.warn({
            id: s.id
          }, `Skipping emitting \`session_request\` event for duplicate request. id: ${s.id}`);
          return;
        }
        this.sessionRequestQueue.state = vs.active, this.emittedSessionRequests.add(s.id), this.client.events.emit("session_request", s);
      }), F(this, "onPairingCreated", (s) => {
        if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
        const n = this.client.proposal.getAll().find((r) => r.pairingTopic === s.topic);
        n && this.onSessionProposeRequest({
          topic: s.topic,
          payload: Is("wc_sessionPropose", ft(ke({}, n), {
            requiredNamespaces: n.requiredNamespaces,
            optionalNamespaces: n.optionalNamespaces,
            relays: n.relays,
            proposer: n.proposer,
            sessionProperties: n.sessionProperties,
            scopedProperties: n.scopedProperties
          }), n.id),
          attestation: n.attestation,
          encryptedId: n.encryptedId
        });
      }), F(this, "isValidConnect", async (s) => {
        if (!ns(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
          throw new Error(l);
        }
        const { pairingTopic: n, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: o, scopedProperties: a, relays: c } = s;
        if (Ot(n) || await this.isValidPairingTopic(n), !Z2(c)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() relays: ${c}`);
          throw new Error(l);
        }
        if (r && !Ot(r) && ks(r) !== 0) {
          const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
          [
            "fatal",
            "error",
            "silent"
          ].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(r, "requiredNamespaces");
        }
        if (i && !Ot(i) && ks(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), o && !Ot(o) && this.validateSessionProps(o, "sessionProperties"), a && !Ot(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const l = Object.keys(r || {}).concat(Object.keys(i || {}));
          if (!Object.keys(a).every((d) => l.includes(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
        }
      }), F(this, "validateNamespaces", (s, n) => {
        const r = Y2(s, "connect()", n);
        if (r) throw new Error(r.message);
      }), F(this, "isValidApprove", async (s) => {
        if (!ns(s)) throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${s}`).message);
        const { id: n, namespaces: r, relayProtocol: i, sessionProperties: o, scopedProperties: a } = s;
        this.checkRecentlyDeleted(n), await this.isValidProposalId(n);
        const c = this.client.proposal.get(n), l = hc(r, "approve()");
        if (l) throw new Error(l.message);
        const d = bu(c.requiredNamespaces, r, "approve()");
        if (d) throw new Error(d.message);
        if (!Ye(i, true)) {
          const { message: h } = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
          throw new Error(h);
        }
        if (o && !Ot(o) && this.validateSessionProps(o, "sessionProperties"), a && !Ot(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const h = new Set(Object.keys(r));
          if (!Object.keys(a).every((u) => h.has(u.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(h).join(", ")}`);
        }
      }), F(this, "isValidReject", async (s) => {
        if (!ns(s)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() params: ${s}`);
          throw new Error(i);
        }
        const { id: n, reason: r } = s;
        if (this.checkRecentlyDeleted(n), await this.isValidProposalId(n), !X2(r)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
          throw new Error(i);
        }
      }), F(this, "isValidSessionSettleRequest", (s) => {
        if (!ns(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
          throw new Error(l);
        }
        const { relay: n, controller: r, namespaces: i, expiry: o } = s;
        if (!Dg(n)) {
          const { message: l } = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(l);
        }
        const a = W2(r, "onSessionSettleRequest()");
        if (a) throw new Error(a.message);
        const c = hc(i, "onSessionSettleRequest()");
        if (c) throw new Error(c.message);
        if (bn(o)) {
          const { message: l } = ce("EXPIRED", "onSessionSettleRequest()");
          throw new Error(l);
        }
      }), F(this, "isValidUpdate", async (s) => {
        if (!ns(s)) {
          const { message: c } = ce("MISSING_OR_INVALID", `update() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, namespaces: r } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const i = this.client.session.get(n), o = hc(r, "update()");
        if (o) throw new Error(o.message);
        const a = bu(i.requiredNamespaces, r, "update()");
        if (a) throw new Error(a.message);
      }), F(this, "isValidExtend", async (s) => {
        if (!ns(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `extend() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
      }), F(this, "isValidRequest", async (s) => {
        if (!ns(s)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, request: r, chainId: i, expiry: o } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const { namespaces: a } = this.client.session.get(n);
        if (!yu(a, i)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() chainId: ${i}`);
          throw new Error(c);
        }
        if (!Q2(r)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
          throw new Error(c);
        }
        if (!s_(a, i, r.method)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() method: ${r.method}`);
          throw new Error(c);
        }
        if (o && !o_(o, pc)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${pc.min} and ${pc.max}`);
          throw new Error(c);
        }
      }), F(this, "isValidRespond", async (s) => {
        var n;
        if (!ns(s)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() params: ${s}`);
          throw new Error(a);
        }
        const { topic: r, response: i } = s;
        try {
          await this.isValidSessionTopic(r);
        } catch (a) {
          throw (n = s == null ? void 0 : s.response) != null && n.id && this.cleanupAfterResponse(s), a;
        }
        if (!e_(i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
          throw new Error(a);
        }
        const o = this.client.pendingRequest.get(i.id);
        if (o.topic !== r) {
          const { message: a } = ce("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i.id}, expected topic: ${o.topic}, received topic: ${r}`);
          throw new Error(a);
        }
      }), F(this, "isValidPing", async (s) => {
        if (!ns(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), F(this, "isValidEmit", async (s) => {
        if (!ns(s)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() params: ${s}`);
          throw new Error(a);
        }
        const { topic: n, event: r, chainId: i } = s;
        await this.isValidSessionTopic(n);
        const { namespaces: o } = this.client.session.get(n);
        if (!yu(o, i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() chainId: ${i}`);
          throw new Error(a);
        }
        if (!t_(r)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
        if (!n_(o, i, r.name)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
      }), F(this, "isValidDisconnect", async (s) => {
        if (!ns(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `disconnect() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), F(this, "isValidAuthenticate", (s) => {
        const { chains: n, uri: r, domain: i, nonce: o } = s;
        if (!Array.isArray(n) || n.length === 0) throw new Error("chains is required and must be a non-empty array");
        if (!Ye(r, false)) throw new Error("uri is required parameter");
        if (!Ye(i, false)) throw new Error("domain is required parameter");
        if (!Ye(o, false)) throw new Error("nonce is required parameter");
        if ([
          ...new Set(n.map((c) => Ys(c).namespace))
        ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
        const { namespace: a } = Ys(n[0]);
        if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
      }), F(this, "getVerifyContext", async (s) => {
        const { attestationId: n, hash: r, encryptedId: i, metadata: o, transportType: a } = s, c = {
          verified: {
            verifyUrl: o.verifyUrl || Ti,
            validation: "UNKNOWN",
            origin: o.url || ""
          }
        };
        try {
          if (a === Ue.link_mode) {
            const d = this.getAppLinkIfEnabled(o, a);
            return c.verified.validation = d && new URL(d).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
          }
          const l = await this.client.core.verify.resolve({
            attestationId: n,
            hash: r,
            encryptedId: i,
            verifyUrl: o.verifyUrl
          });
          l && (c.verified.origin = l.origin, c.verified.isScam = l.isScam, c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID");
        } catch (l) {
          this.client.logger.warn(l);
        }
        return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
      }), F(this, "validateSessionProps", (s, n) => {
        Object.values(s).forEach((r, i) => {
          if (r == null) {
            const { message: o } = ce("MISSING_OR_INVALID", `${n} must contain an existing value for each key. Received: ${r} for key ${Object.keys(s)[i]}`);
            throw new Error(o);
          }
        });
      }), F(this, "getPendingAuthRequest", (s) => {
        const n = this.client.auth.requests.get(s);
        return typeof n == "object" ? n : void 0;
      }), F(this, "addToRecentlyDeleted", (s, n) => {
        if (this.recentlyDeletedMap.set(s, n), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
          let r = 0;
          const i = this.recentlyDeletedLimit / 2;
          for (const o of this.recentlyDeletedMap.keys()) {
            if (r++ >= i) break;
            this.recentlyDeletedMap.delete(o);
          }
        }
      }), F(this, "checkRecentlyDeleted", (s) => {
        const n = this.recentlyDeletedMap.get(s);
        if (n) {
          const { message: r } = ce("MISSING_OR_INVALID", `Record was recently deleted - ${n}: ${s}`);
          throw new Error(r);
        }
      }), F(this, "isLinkModeEnabled", (s, n) => {
        var r, i, o, a, c, l, d, h, u;
        return !s || n !== Ue.link_mode ? false : ((i = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : i.linkMode) === true && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.universal) !== void 0 && ((h = s == null ? void 0 : s.redirect) == null ? void 0 : h.universal) !== "" && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.linkMode) === true && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      }), F(this, "getAppLinkIfEnabled", (s, n) => {
        var r;
        return this.isLinkModeEnabled(s, n) ? (r = s == null ? void 0 : s.redirect) == null ? void 0 : r.universal : void 0;
      }), F(this, "handleLinkModeMessage", ({ url: s }) => {
        if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
        const n = Mh(s, "topic") || "", r = decodeURIComponent(Mh(s, "wc_ev") || ""), i = this.client.session.keys.includes(n);
        i && this.client.session.update(n, {
          transportType: Ue.link_mode
        }), this.client.core.dispatchEnvelope({
          topic: n,
          message: r,
          sessionExists: i
        });
      }), F(this, "registerLinkModeListeners", async () => {
        var s;
        if (JA() || Wp() && (s = this.client.metadata.redirect) != null && s.linkMode) {
          const n = globalThis == null ? void 0 : globalThis.Linking;
          if (typeof n < "u") {
            n.addEventListener("url", this.handleLinkModeMessage, this.client.name);
            const r = await n.getInitialURL();
            r && setTimeout(() => {
              this.handleLinkModeMessage({
                url: r
              });
            }, 50);
          }
        }
      }), F(this, "getTVFParams", (s, n, r) => {
        var i, o, a;
        if (!((i = n.request) != null && i.method)) return {};
        const c = {
          correlationId: s,
          rpcMethods: [
            n.request.method
          ],
          chainId: n.chainId
        };
        try {
          const l = this.extractTxHashesFromResult(n.request, r);
          c.txHashes = l, c.contractAddresses = this.isValidContractData(n.request.params) ? [
            (a = (o = n.request.params) == null ? void 0 : o[0]) == null ? void 0 : a.to
          ] : [];
        } catch (l) {
          this.client.logger.warn(l, "Error getting TVF params");
        }
        return c;
      }), F(this, "isValidContractData", (s) => {
        var n;
        if (!s) return false;
        try {
          const r = (s == null ? void 0 : s.data) || ((n = s == null ? void 0 : s[0]) == null ? void 0 : n.data);
          if (!r.startsWith("0x")) return false;
          const i = r.slice(2);
          return /^[0-9a-fA-F]*$/.test(i) ? i.length % 2 === 0 : false;
        } catch {
        }
        return false;
      }), F(this, "extractTxHashesFromResult", (s, n) => {
        var r;
        try {
          if (!n) return [];
          const i = s.method, o = y_[i];
          if (i === "sui_signTransaction") return [
            GI(n.transactionBytes)
          ];
          if (i === "near_signTransaction") return [
            Kh(n)
          ];
          if (i === "near_signTransactions") return n.map((c) => Kh(c));
          if (i === "xrpl_signTransactionFor" || i === "xrpl_signTransaction") return [
            (r = n.tx_json) == null ? void 0 : r.hash
          ];
          if (i === "polkadot_signTransaction") return [
            p_({
              transaction: s.params.transactionPayload,
              signature: n.signature
            })
          ];
          if (i === "algo_signTxn") return Js(n) ? n.map((c) => zh(c)) : [
            zh(n)
          ];
          if (i === "cosmos_signDirect") return [
            ZI(n)
          ];
          if (i === "wallet_sendCalls") return JI(n);
          if (typeof n == "string") return [
            n
          ];
          const a = n[o.key];
          if (Js(a)) return i === "solana_signAllTransactions" ? a.map((c) => zI(c)) : a;
          if (typeof a == "string") return [
            a
          ];
        } catch (i) {
          this.client.logger.warn(i, "Error extracting tx hashes from result");
        }
        return [];
      });
    }
    async processPendingMessageEvents() {
      try {
        const e = this.client.session.keys, s = this.client.core.relayer.messages.getWithoutAck(e);
        for (const [n, r] of Object.entries(s)) for (const i of r) try {
          await this.onProviderMessageEvent({
            topic: n,
            message: i,
            publishedAt: Date.now()
          });
        } catch {
          this.client.logger.warn(`Error processing pending message event for topic: ${n}, message: ${i}`);
        }
      } catch (e) {
        this.client.logger.warn(e, "processPendingMessageEvents failed");
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = ce("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async confirmOnlineStateOrThrow() {
      await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(Fe.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    async onRelayMessage(e) {
      const { topic: s, message: n, attestation: r, transportType: i } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(Do) ? this.client.auth.authKeys.get(Do) : {
        publicKey: void 0
      };
      try {
        const a = await this.client.core.crypto.decode(s, n, {
          receiverPublicKey: o,
          encoding: i === Ue.link_mode ? hi : jn
        });
        Il(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({
          topic: s,
          payload: a,
          attestation: r,
          transportType: i,
          encryptedId: gn(n)
        })) : Nl(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
          topic: s,
          payload: a,
          transportType: i
        }), this.client.core.history.delete(s, a.id)) : await this.onRelayEventUnknownPayload({
          topic: s,
          payload: a,
          transportType: i
        }), await this.client.core.relayer.messages.ack(s, n);
      } catch (a) {
        this.client.logger.error(a);
      }
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(Yt.expired, async (e) => {
        const { topic: s, id: n } = KA(e.target);
        if (n && this.client.pendingRequest.keys.includes(n)) return await this.deletePendingSessionRequest(n, ce("EXPIRED"), true);
        if (n && this.client.auth.requests.keys.includes(n)) return await this.deletePendingAuthRequest(n, ce("EXPIRED"), true);
        s ? this.client.session.keys.includes(s) && (await this.deleteSession({
          topic: s,
          expirerHasDeleted: true
        }), this.client.events.emit("session_expire", {
          topic: s
        })) : n && (await this.deleteProposal(n, true), this.client.events.emit("proposal_expire", {
          id: n
        }));
      });
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(Kn.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(Kn.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
    }
    isValidPairingTopic(e) {
      if (!Ye(e, false)) {
        const { message: s } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (bn(this.client.core.pairing.pairings.get(e).expiry)) {
        const { message: s } = ce("EXPIRED", `pairing topic: ${e}`);
        throw new Error(s);
      }
    }
    async isValidSessionTopic(e) {
      if (!Ye(e, false)) {
        const { message: s } = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (bn(this.client.session.get(e).expiry)) {
        await this.deleteSession({
          topic: e
        });
        const { message: s } = ce("EXPIRED", `session topic: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.crypto.keychain.has(e)) {
        const { message: s } = ce("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
        throw await this.deleteSession({
          topic: e
        }), new Error(s);
      }
    }
    async isValidSessionOrPairingTopic(e) {
      if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
      else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
      else if (Ye(e, false)) {
        const { message: s } = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      } else {
        const { message: s } = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
    }
    async isValidProposalId(e) {
      if (!J2(e)) {
        const { message: s } = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
        throw new Error(s);
      }
      if (!this.client.proposal.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (bn(this.client.proposal.get(e).expiryTimestamp)) {
        await this.deleteProposal(e);
        const { message: s } = ce("EXPIRED", `proposal id: ${e}`);
        throw new Error(s);
      }
    }
  }
  class P_ extends wr {
    constructor(e, s) {
      super(e, s, g_, Ql), this.core = e, this.logger = s;
    }
  }
  let $_ = class extends wr {
    constructor(e, s) {
      super(e, s, m_, Ql), this.core = e, this.logger = s;
    }
  };
  class R_ extends wr {
    constructor(e, s) {
      super(e, s, b_, Ql, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  class U_ extends wr {
    constructor(e, s) {
      super(e, s, A_, Sa, () => Do), this.core = e, this.logger = s;
    }
  }
  class D_ extends wr {
    constructor(e, s) {
      super(e, s, I_, Sa), this.core = e, this.logger = s;
    }
  }
  class L_ extends wr {
    constructor(e, s) {
      super(e, s, N_, Sa, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  var B_ = Object.defineProperty, M_ = (t, e, s) => e in t ? B_(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, gc = (t, e, s) => M_(t, typeof e != "symbol" ? e + "" : e, s);
  class F_ {
    constructor(e, s) {
      this.core = e, this.logger = s, gc(this, "authKeys"), gc(this, "pairingTopics"), gc(this, "requests"), this.authKeys = new U_(this.core, this.logger), this.pairingTopics = new D_(this.core, this.logger), this.requests = new L_(this.core, this.logger);
    }
    async init() {
      await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
  }
  var j_ = Object.defineProperty, q_ = (t, e, s) => e in t ? j_(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, we = (t, e, s) => q_(t, typeof e != "symbol" ? e + "" : e, s);
  let W_ = class jg extends aA {
    constructor(e) {
      super(e), we(this, "protocol", Bg), we(this, "version", Mg), we(this, "name", fc.name), we(this, "metadata"), we(this, "core"), we(this, "logger"), we(this, "events", new hr.EventEmitter()), we(this, "engine"), we(this, "session"), we(this, "proposal"), we(this, "pendingRequest"), we(this, "auth"), we(this, "signConfig"), we(this, "on", (n, r) => this.events.on(n, r)), we(this, "once", (n, r) => this.events.once(n, r)), we(this, "off", (n, r) => this.events.off(n, r)), we(this, "removeListener", (n, r) => this.events.removeListener(n, r)), we(this, "removeAllListeners", (n) => this.events.removeAllListeners(n)), we(this, "connect", async (n) => {
        try {
          return await this.engine.connect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "pair", async (n) => {
        try {
          return await this.engine.pair(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "approve", async (n) => {
        try {
          return await this.engine.approve(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "reject", async (n) => {
        try {
          return await this.engine.reject(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "update", async (n) => {
        try {
          return await this.engine.update(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "extend", async (n) => {
        try {
          return await this.engine.extend(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "request", async (n) => {
        try {
          return await this.engine.request(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "respond", async (n) => {
        try {
          return await this.engine.respond(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "ping", async (n) => {
        try {
          return await this.engine.ping(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "emit", async (n) => {
        try {
          return await this.engine.emit(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "disconnect", async (n) => {
        try {
          return await this.engine.disconnect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "find", (n) => {
        try {
          return this.engine.find(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "getPendingSessionRequests", () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (n) {
          throw this.logger.error(n.message), n;
        }
      }), we(this, "authenticate", async (n, r) => {
        try {
          return await this.engine.authenticate(n, r);
        } catch (i) {
          throw this.logger.error(i.message), i;
        }
      }), we(this, "formatAuthMessage", (n) => {
        try {
          return this.engine.formatAuthMessage(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "approveSessionAuthenticate", async (n) => {
        try {
          return await this.engine.approveSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), we(this, "rejectSessionAuthenticate", async (n) => {
        try {
          return await this.engine.rejectSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), this.name = (e == null ? void 0 : e.name) || fc.name, this.metadata = HA(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
      const s = Lg({
        logger: (e == null ? void 0 : e.logger) || fc.logger,
        name: this.name
      });
      this.logger = s, this.core = (e == null ? void 0 : e.core) || new rA(e), this.session = new $_(this.core, this.logger), this.proposal = new P_(this.core, this.logger), this.pendingRequest = new R_(this.core, this.logger), this.engine = new x_(this), this.auth = new F_(this.core, this.logger);
    }
    static async init(e) {
      const s = new jg(e);
      return await s.initialize(), s;
    }
    get context() {
      return kA(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
      } catch (e) {
        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
      }
    }
  };
  const H_ = W_;
  function ed(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  function qg(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function Wg(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const V_ = "[object RegExp]", Hg = "[object String]", Vg = "[object Number]", Kg = "[object Boolean]", zg = "[object Arguments]", K_ = "[object Symbol]", z_ = "[object Date]", G_ = "[object Map]", Y_ = "[object Set]", Z_ = "[object Array]", J_ = "[object ArrayBuffer]", X_ = "[object Object]", Q_ = "[object DataView]", eS = "[object Uint8Array]", tS = "[object Uint8ClampedArray]", sS = "[object Uint16Array]", nS = "[object Uint32Array]", rS = "[object Int8Array]", iS = "[object Int16Array]", oS = "[object Int32Array]", aS = "[object Float32Array]", cS = "[object Float64Array]";
  function td(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  function lS(t, e) {
    return Ur(t, void 0, t, /* @__PURE__ */ new Map(), e);
  }
  function Ur(t, e, s, n = /* @__PURE__ */ new Map(), r = void 0) {
    const i = r == null ? void 0 : r(t, e, s, n);
    if (i != null) return i;
    if (ed(t)) return t;
    if (n.has(t)) return n.get(t);
    if (Array.isArray(t)) {
      const o = new Array(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = Ur(t[a], a, s, n, r);
      return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
    }
    if (t instanceof Date) return new Date(t.getTime());
    if (t instanceof RegExp) {
      const o = new RegExp(t.source, t.flags);
      return o.lastIndex = t.lastIndex, o;
    }
    if (t instanceof Map) {
      const o = /* @__PURE__ */ new Map();
      n.set(t, o);
      for (const [a, c] of t) o.set(a, Ur(c, a, s, n, r));
      return o;
    }
    if (t instanceof Set) {
      const o = /* @__PURE__ */ new Set();
      n.set(t, o);
      for (const a of t) o.add(Ur(a, void 0, s, n, r));
      return o;
    }
    if (typeof ve < "u" && ve.isBuffer(t)) return t.subarray();
    if (td(t)) {
      const o = new (Object.getPrototypeOf(t)).constructor(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = Ur(t[a], a, s, n, r);
      return o;
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    if (t instanceof DataView) {
      const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
      return n.set(t, o), zn(o, t, s, n, r), o;
    }
    if (typeof File < "u" && t instanceof File) {
      const o = new File([
        t
      ], t.name, {
        type: t.type
      });
      return n.set(t, o), zn(o, t, s, n, r), o;
    }
    if (t instanceof Blob) {
      const o = new Blob([
        t
      ], {
        type: t.type
      });
      return n.set(t, o), zn(o, t, s, n, r), o;
    }
    if (t instanceof Error) {
      const o = new t.constructor();
      return n.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, zn(o, t, s, n, r), o;
    }
    if (typeof t == "object" && dS(t)) {
      const o = Object.create(Object.getPrototypeOf(t));
      return n.set(t, o), zn(o, t, s, n, r), o;
    }
    return t;
  }
  function zn(t, e, s = t, n, r) {
    const i = [
      ...Object.keys(e),
      ...qg(e)
    ];
    for (let o = 0; o < i.length; o++) {
      const a = i[o], c = Object.getOwnPropertyDescriptor(t, a);
      (c == null || c.writable) && (t[a] = Ur(e[a], a, s, n, r));
    }
  }
  function dS(t) {
    switch (Wg(t)) {
      case zg:
      case Z_:
      case J_:
      case Q_:
      case Kg:
      case z_:
      case aS:
      case cS:
      case rS:
      case iS:
      case oS:
      case G_:
      case Vg:
      case X_:
      case V_:
      case Y_:
      case Hg:
      case K_:
      case eS:
      case tS:
      case sS:
      case nS:
        return true;
      default:
        return false;
    }
  }
  function hS(t, e) {
    return lS(t, (s, n, r, i) => {
      if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
        case Vg:
        case Hg:
        case Kg: {
          const o = new t.constructor(t == null ? void 0 : t.valueOf());
          return zn(o, t), o;
        }
        case zg: {
          const o = {};
          return zn(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
        }
        default:
          return;
      }
    });
  }
  function Iu(t) {
    return hS(t);
  }
  function Nu(t) {
    return t !== null && typeof t == "object" && Wg(t) === "[object Arguments]";
  }
  function _u(t) {
    return typeof t == "object" && t !== null;
  }
  function uS() {
  }
  function fS(t) {
    return td(t);
  }
  function pS(t) {
    var _a2;
    if (typeof t != "object" || t == null) return false;
    if (Object.getPrototypeOf(t) === null) return true;
    if (Object.prototype.toString.call(t) !== "[object Object]") {
      const s = t[Symbol.toStringTag];
      return s == null || !((_a2 = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) == null ? void 0 : _a2.writable) ? false : t.toString() === `[object ${s}]`;
    }
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
  }
  function gS(t) {
    if (ed(t)) return t;
    if (Array.isArray(t) || td(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    const e = Object.getPrototypeOf(t), s = e.constructor;
    if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
    if (t instanceof RegExp) {
      const n = new s(t);
      return n.lastIndex = t.lastIndex, n;
    }
    if (t instanceof DataView) return new s(t.buffer.slice(0));
    if (t instanceof Error) {
      const n = new s(t.message);
      return n.stack = t.stack, n.name = t.name, n.cause = t.cause, n;
    }
    if (typeof File < "u" && t instanceof File) return new s([
      t
    ], t.name, {
      type: t.type,
      lastModified: t.lastModified
    });
    if (typeof t == "object") {
      const n = Object.create(e);
      return Object.assign(n, t);
    }
    return t;
  }
  function mS(t, ...e) {
    const s = e.slice(0, -1), n = e[e.length - 1];
    let r = t;
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      r = wl(r, o, n, /* @__PURE__ */ new Map());
    }
    return r;
  }
  function wl(t, e, s, n) {
    if (ed(t) && (t = Object(t)), e == null || typeof e != "object") return t;
    if (n.has(e)) return gS(n.get(e));
    if (n.set(e, t), Array.isArray(e)) {
      e = e.slice();
      for (let i = 0; i < e.length; i++) e[i] = e[i] ?? void 0;
    }
    const r = [
      ...Object.keys(e),
      ...qg(e)
    ];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = e[o], c = t[o];
      if (Nu(a) && (a = {
        ...a
      }), Nu(c) && (c = {
        ...c
      }), typeof ve < "u" && ve.isBuffer(a) && (a = Iu(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
        const d = [], h = Reflect.ownKeys(c);
        for (let u = 0; u < h.length; u++) {
          const f = h[u];
          d[f] = c[f];
        }
        c = d;
      } else c = [];
      const l = s(c, a, o, t, e, n);
      l != null ? t[o] = l : Array.isArray(a) || _u(c) && _u(a) ? t[o] = wl(c, a, s, n) : c == null && pS(a) ? t[o] = wl({}, a, s, n) : c == null && fS(a) ? t[o] = Iu(a) : (c === void 0 || a !== void 0) && (t[o] = a);
    }
    return t;
  }
  function wS(t, ...e) {
    return mS(t, ...e, uS);
  }
  const Su = "error", yS = "wss://relay.walletconnect.org", bS = "wc", Gg = "universal_provider", Io = `${bS}@2:${Gg}:`, Yg = "https://rpc.walletconnect.org/v1/", Zg = "generic", ES = `${Yg}bundler`, Fr = "call_status", vS = 86400, sd = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
  };
  var CS = Object.defineProperty, AS = Object.defineProperties, IS = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, NS = Object.prototype.hasOwnProperty, _S = Object.prototype.propertyIsEnumerable, Ou = (t, e, s) => e in t ? CS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, No = (t, e) => {
    for (var s in e || (e = {})) NS.call(e, s) && Ou(t, s, e[s]);
    if (Tu) for (var s of Tu(e)) _S.call(e, s) && Ou(t, s, e[s]);
    return t;
  }, SS = (t, e) => AS(t, IS(e));
  function Jg(t, e, s) {
    var n;
    const r = Ys(t);
    return ((n = e.rpcMap) == null ? void 0 : n[r.reference]) || `${Yg}?chainId=${r.namespace}:${r.reference}&projectId=${s}`;
  }
  function TS(t) {
    return t.includes(":") ? t.split(":")[1] : t;
  }
  function Xg(t) {
    return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
  }
  function OS(t, e) {
    const s = Object.keys(e.namespaces).filter((r) => r.includes(t));
    if (!s.length) return [];
    const n = [];
    return s.forEach((r) => {
      const i = e.namespaces[r].accounts;
      n.push(...i);
    }), n;
  }
  function ku(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
      var n, r;
      return ((n = s == null ? void 0 : s.chains) == null ? void 0 : n.length) && ((r = s == null ? void 0 : s.chains) == null ? void 0 : r.length) > 0;
    }));
  }
  function _o(t = {}, e = {}) {
    const s = ku(xu(t)), n = ku(xu(e));
    return wS(s, n);
  }
  function xu(t) {
    var e, s, n, r, i;
    const o = {};
    if (!ks(t)) return o;
    for (const [a, c] of Object.entries(t)) {
      const l = _a(a) ? [
        a
      ] : c.chains, d = c.methods || [], h = c.events || [], u = c.rpcMap || {}, f = Rr(a);
      o[f] = SS(No(No({}, o[f]), c), {
        chains: Os(l, (e = o[f]) == null ? void 0 : e.chains),
        methods: Os(d, (s = o[f]) == null ? void 0 : s.methods),
        events: Os(h, (n = o[f]) == null ? void 0 : n.events)
      }), (ks(u) || ks(((r = o[f]) == null ? void 0 : r.rpcMap) || {})) && (o[f].rpcMap = No(No({}, u), (i = o[f]) == null ? void 0 : i.rpcMap));
    }
    return o;
  }
  function Pu(t) {
    return t.includes(":") ? t.split(":")[2] : t;
  }
  function $u(t) {
    const e = {};
    for (const [s, n] of Object.entries(t)) {
      const r = n.methods || [], i = n.events || [], o = n.accounts || [], a = _a(s) ? [
        s
      ] : n.chains ? n.chains : Xg(n.accounts);
      e[s] = {
        chains: a,
        methods: r,
        events: i,
        accounts: o
      };
    }
    return e;
  }
  function mc(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
  }
  function kS(t) {
    try {
      const e = JSON.parse(t);
      return typeof e == "object" && e !== null && !Array.isArray(e);
    } catch {
      return false;
    }
  }
  const Qg = {}, jr = (t) => Qg[t], wc = (t, e) => {
    Qg[t] = e;
  };
  var xS = Object.defineProperty, Ru = Object.getOwnPropertySymbols, PS = Object.prototype.hasOwnProperty, $S = Object.prototype.propertyIsEnumerable, Uu = (t, e, s) => e in t ? xS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Du = (t, e) => {
    for (var s in e || (e = {})) PS.call(e, s) && Uu(t, s, e[s]);
    if (Ru) for (var s of Ru(e)) $S.call(e, s) && Uu(t, s, e[s]);
    return t;
  };
  const Lu = "eip155", RS = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds"
  ], US = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, yc = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, Bu = (t) => Object.keys(t).filter((e) => RS.includes(e)).reduce((e, s) => (e[s] = DS(t[s]), e), {}), DS = (t) => typeof t == "string" && kS(t) ? JSON.parse(t) : t, LS = (t, e, s) => {
    const { sessionProperties: n = {}, scopedProperties: r = {} } = t, i = {};
    if (!ks(r) && !ks(n)) return;
    const o = Bu(n);
    for (const a of s) {
      const c = US(a);
      if (!c) continue;
      i[yc(c)] = o;
      const l = r == null ? void 0 : r[`${Lu}:${c}`];
      if (l) {
        const d = l == null ? void 0 : l[`${Lu}:${c}:${e}`];
        i[yc(c)] = Du(Du({}, i[yc(c)]), Bu(d || l));
      }
    }
    for (const [a, c] of Object.entries(i)) Object.keys(c).length === 0 && delete i[a];
    return Object.keys(i).length > 0 ? i : void 0;
  };
  var BS = Object.defineProperty, MS = (t, e, s) => e in t ? BS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, FS = (t, e, s) => MS(t, e + "", s);
  let bc;
  class nd {
    constructor(e) {
      FS(this, "storage"), this.storage = e;
    }
    async getItem(e) {
      return await this.storage.getItem(e);
    }
    async setItem(e, s) {
      return await this.storage.setItem(e, s);
    }
    async removeItem(e) {
      return await this.storage.removeItem(e);
    }
    static getStorage(e) {
      return bc || (bc = new nd(e)), bc;
    }
  }
  var jS = Object.defineProperty, qS = Object.defineProperties, WS = Object.getOwnPropertyDescriptors, Mu = Object.getOwnPropertySymbols, HS = Object.prototype.hasOwnProperty, VS = Object.prototype.propertyIsEnumerable, Fu = (t, e, s) => e in t ? jS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, KS = (t, e) => {
    for (var s in e || (e = {})) HS.call(e, s) && Fu(t, s, e[s]);
    if (Mu) for (var s of Mu(e)) VS.call(e, s) && Fu(t, s, e[s]);
    return t;
  }, zS = (t, e) => qS(t, WS(e));
  async function GS(t, e) {
    const s = Ys(t.result.capabilities.caip345.caip2), n = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(n.map((h) => YS(s.reference, h, e))), i = r.filter((h) => h.status === "fulfilled").map((h) => h.value).filter((h) => h);
    r.filter((h) => h.status === "rejected").forEach((h) => console.warn("Failed to fetch transaction receipt:", h.reason));
    const o = !i.length || i.some((h) => !h), a = i.every((h) => (h == null ? void 0 : h.status) === "0x1"), c = i.every((h) => (h == null ? void 0 : h.status) === "0x0"), l = i.some((h) => (h == null ? void 0 : h.status) === "0x0");
    let d;
    return o ? d = 100 : a ? d = 200 : c ? d = 500 : l && (d = 600), {
      id: t.result.id,
      version: t.request.version,
      atomic: t.request.atomicRequired,
      chainId: t.request.chainId,
      capabilities: t.result.capabilities,
      receipts: i,
      status: d
    };
  }
  async function YS(t, e, s) {
    return await s(parseInt(t)).request(Is("eth_getTransactionReceipt", [
      e
    ]));
  }
  async function ZS({ sendCalls: t, storage: e }) {
    const s = await e.getItem(Fr);
    await e.setItem(Fr, zS(KS({}, s), {
      [t.result.id]: {
        request: t.request,
        result: t.result,
        expiry: yt(vS)
      }
    }));
  }
  async function JS({ resultId: t, storage: e }) {
    const s = await e.getItem(Fr);
    if (s) {
      delete s[t], await e.setItem(Fr, s);
      for (const n in s) bn(s[n].expiry) && delete s[n];
      await e.setItem(Fr, s);
    }
  }
  async function XS({ resultId: t, storage: e }) {
    const s = await e.getItem(Fr), n = s == null ? void 0 : s[t];
    if (n && !bn(n.expiry)) return n;
    await JS({
      resultId: t,
      storage: e
    });
  }
  var QS = Object.defineProperty, eT = Object.defineProperties, tT = Object.getOwnPropertyDescriptors, ju = Object.getOwnPropertySymbols, sT = Object.prototype.hasOwnProperty, nT = Object.prototype.propertyIsEnumerable, yl = (t, e, s) => e in t ? QS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ec = (t, e) => {
    for (var s in e || (e = {})) sT.call(e, s) && yl(t, s, e[s]);
    if (ju) for (var s of ju(e)) nT.call(e, s) && yl(t, s, e[s]);
    return t;
  }, vc = (t, e) => eT(t, tT(e)), qn = (t, e, s) => yl(t, typeof e != "symbol" ? e + "" : e, s);
  class rT {
    constructor(e) {
      qn(this, "name", "eip155"), qn(this, "client"), qn(this, "chainId"), qn(this, "namespace"), qn(this, "httpProviders"), qn(this, "events"), qn(this, "storage"), this.namespace = e.namespace, this.events = jr("events"), this.client = jr("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = nd.getStorage(this.client.core.storage);
    }
    async request(e) {
      switch (e.request.method) {
        case "eth_requestAccounts":
          return this.getAccounts();
        case "eth_accounts":
          return this.getAccounts();
        case "wallet_switchEthereumChain":
          return await this.handleSwitchChain(e);
        case "eth_chainId":
          return parseInt(this.getDefaultChain());
        case "wallet_getCapabilities":
          return await this.getCapabilities(e);
        case "wallet_getCallsStatus":
          return await this.getCallStatus(e);
        case "wallet_sendCalls":
          return await this.sendCalls(e);
      }
      return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, s) {
      this.httpProviders[e] || this.setHttpProvider(parseInt(e), s);
      const n = this.chainId;
      this.chainId = parseInt(e), this.events.emit(sd.DEFAULT_CHAIN_CHANGED, {
        currentCaipChainId: `${this.name}:${e}`,
        previousCaipChainId: `${this.name}:${n}`
      });
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId.toString();
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      const e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    createHttpProvider(e, s) {
      const n = s || Jg(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Al(new cf(n, jr("disableProviderPing")));
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProviders() {
      const e = {};
      return this.namespace.chains.forEach((s) => {
        var n;
        const r = parseInt(TS(s));
        e[r] = this.createHttpProvider(r, (n = this.namespace.rpcMap) == null ? void 0 : n[s]);
      }), e;
    }
    getAccounts() {
      const e = this.namespace.accounts;
      return e ? [
        ...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))
      ] : [];
    }
    getHttpProvider(e) {
      const s = e || this.chainId;
      return this.httpProviders[s] || (this.httpProviders = vc(Ec({}, this.httpProviders), {
        [s]: this.createHttpProvider(s)
      }), this.httpProviders[s]);
    }
    async handleSwitchChain(e) {
      var s, n;
      let r = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
      r = r.startsWith("0x") ? r : `0x${r}`;
      const i = parseInt(r, 16);
      if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
      else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
        topic: e.topic,
        request: {
          method: e.request.method,
          params: [
            {
              chainId: r
            }
          ]
        },
        chainId: (n = this.namespace.chains) == null ? void 0 : n[0]
      }), this.setDefaultChain(`${i}`);
      else throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
      return null;
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    async getCapabilities(e) {
      var s, n, r, i, o;
      const a = (n = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : n[0], c = ((i = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : i[1]) || [];
      if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
      const l = this.client.session.get(e.topic), d = ((o = l == null ? void 0 : l.sessionProperties) == null ? void 0 : o.capabilities) || {}, h = `${a}${c.join(",")}`, u = d == null ? void 0 : d[h];
      if (u) return u;
      let f;
      try {
        f = LS(l, a, c);
      } catch (p) {
        console.warn("Failed to extract capabilities from session", p);
      }
      if (f) return f;
      const g = await this.client.request(e);
      try {
        await this.client.session.update(e.topic, {
          sessionProperties: vc(Ec({}, l.sessionProperties || {}), {
            capabilities: vc(Ec({}, d || {}), {
              [h]: g
            })
          })
        });
      } catch (p) {
        console.warn("Failed to update session with capabilities", p);
      }
      return g;
    }
    async getCallStatus(e) {
      var s, n, r;
      const i = this.client.session.get(e.topic), o = (s = i.sessionProperties) == null ? void 0 : s.bundler_name;
      if (o) {
        const l = this.getBundlerUrl(e.chainId, o);
        try {
          return await this.getUserOperationReceipt(l, e);
        } catch (d) {
          console.warn("Failed to fetch call status from bundler", d, l);
        }
      }
      const a = (n = i.sessionProperties) == null ? void 0 : n.bundler_url;
      if (a) try {
        return await this.getUserOperationReceipt(a, e);
      } catch (l) {
        console.warn("Failed to fetch call status from custom bundler", l, a);
      }
      const c = await XS({
        resultId: (r = e.request.params) == null ? void 0 : r[0],
        storage: this.storage
      });
      if (c) try {
        return await GS(c, this.getHttpProvider.bind(this));
      } catch (l) {
        console.warn("Failed to fetch call status from stored send calls", l, c);
      }
      if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
      throw new Error("Fetching call status not approved by the wallet.");
    }
    async getUserOperationReceipt(e, s) {
      var n;
      const r = new URL(e), i = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Is("eth_getUserOperationReceipt", [
          (n = s.request.params) == null ? void 0 : n[0]
        ]))
      });
      if (!i.ok) throw new Error(`Failed to fetch user operation receipt - ${i.status}`);
      return await i.json();
    }
    getBundlerUrl(e, s) {
      return `${ES}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
    }
    async sendCalls(e) {
      var s, n, r;
      const i = await this.client.request(e), o = (s = e.request.params) == null ? void 0 : s[0], a = i == null ? void 0 : i.id, c = (i == null ? void 0 : i.capabilities) || {}, l = (n = c == null ? void 0 : c.caip345) == null ? void 0 : n.caip2, d = (r = c == null ? void 0 : c.caip345) == null ? void 0 : r.transactionHashes;
      return !a || !l || !(d != null && d.length) || await ZS({
        sendCalls: {
          request: o,
          result: i
        },
        storage: this.storage
      }), i;
    }
  }
  var iT = Object.defineProperty, oT = (t, e, s) => e in t ? iT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Sr = (t, e, s) => oT(t, typeof e != "symbol" ? e + "" : e, s);
  class aT {
    constructor(e) {
      Sr(this, "name", Zg), Sr(this, "client"), Sr(this, "httpProviders"), Sr(this, "events"), Sr(this, "namespace"), Sr(this, "chainId"), this.namespace = e.namespace, this.events = jr("events"), this.client = jr("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(e) {
      this.namespace.chains = [
        ...new Set((this.namespace.chains || []).concat(e.chains || []))
      ], this.namespace.accounts = [
        ...new Set((this.namespace.accounts || []).concat(e.accounts || []))
      ], this.namespace.methods = [
        ...new Set((this.namespace.methods || []).concat(e.methods || []))
      ], this.namespace.events = [
        ...new Set((this.namespace.events || []).concat(e.events || []))
      ], this.httpProviders = this.createHttpProviders();
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
    }
    setDefaultChain(e, s) {
      this.httpProviders[e] || this.setHttpProvider(e, s);
      const n = this.chainId;
      this.chainId = e, this.events.emit(sd.DEFAULT_CHAIN_CHANGED, {
        currentCaipChainId: `${this.name}:${e}`,
        previousCaipChainId: `${this.name}:${n}`
      });
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      const e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getNamespaceName() {
      const e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return Ys(e).namespace;
    }
    getAccounts() {
      const e = this.namespace.accounts;
      return e ? [
        ...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))
      ] : [];
    }
    createHttpProviders() {
      var e, s;
      const n = {};
      return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach((r) => {
        var i, o;
        const a = Ys(r), c = (o = (i = this.namespace) == null ? void 0 : i.rpcMap) == null ? void 0 : o[`${a.namespace}:${a.reference}`];
        n[a.reference] = this.createHttpProvider(r, c);
      }), n;
    }
    getHttpProvider(e) {
      const s = Ys(e).reference, n = this.httpProviders[s];
      if (typeof n > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
      return n;
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProvider(e, s) {
      const n = s || Jg(e, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Al(new cf(n, jr("disableProviderPing")));
    }
  }
  var cT = Object.defineProperty, lT = Object.defineProperties, dT = Object.getOwnPropertyDescriptors, qu = Object.getOwnPropertySymbols, hT = Object.prototype.hasOwnProperty, uT = Object.prototype.propertyIsEnumerable, bl = (t, e, s) => e in t ? cT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, fi = (t, e) => {
    for (var s in e || (e = {})) hT.call(e, s) && bl(t, s, e[s]);
    if (qu) for (var s of qu(e)) uT.call(e, s) && bl(t, s, e[s]);
    return t;
  }, So = (t, e) => lT(t, dT(e)), Vt = (t, e, s) => bl(t, typeof e != "symbol" ? e + "" : e, s);
  let fT = class em {
    constructor(e) {
      Vt(this, "client"), Vt(this, "namespaces"), Vt(this, "optionalNamespaces"), Vt(this, "sessionProperties"), Vt(this, "scopedProperties"), Vt(this, "events", new _l()), Vt(this, "rpcProviders", {}), Vt(this, "session"), Vt(this, "providerOpts"), Vt(this, "logger"), Vt(this, "uri"), Vt(this, "disableProviderPing", false);
      var s, n;
      this.providerOpts = e, this.logger = Lg({
        logger: (s = e.logger) != null ? s : Su,
        name: (n = this.providerOpts.name) != null ? n : Gg
      }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || false;
    }
    static async init(e) {
      const s = new em(e);
      return await s.initialize(), s;
    }
    async request(e, s, n) {
      const [r, i] = this.validateChain(s);
      if (!this.session) throw new Error("Please call connect() before request()");
      return await this.getProvider(r).request({
        request: fi({}, e),
        chainId: `${r}:${i}`,
        topic: this.session.topic,
        expiry: n
      });
    }
    sendAsync(e, s, n, r) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      this.request(e, n, r).then((o) => s(null, $i(i, o))).catch((o) => s(o, void 0));
    }
    async enable() {
      if (!this.client) throw new Error("Sign Client not initialized");
      return this.session || await this.connect({
        namespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
        scopedProperties: this.scopedProperties
      }), await this.requestAccounts();
    }
    async disconnect() {
      var e;
      if (!this.session) throw new Error("Please call connect() before enable()");
      await this.client.disconnect({
        topic: (e = this.session) == null ? void 0 : e.topic,
        reason: Ke("USER_DISCONNECTED")
      }), await this.cleanup();
    }
    async connect(e) {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
    }
    async authenticate(e, s) {
      if (!this.client) throw new Error("Sign Client not initialized");
      this.setNamespaces(e), await this.cleanupPendingPairings();
      const { uri: n, response: r } = await this.client.authenticate(e, s);
      n && (this.uri = n, this.events.emit("display_uri", n));
      const i = await r();
      if (this.session = i.session, this.session) {
        const o = $u(this.session.namespaces);
        this.namespaces = _o(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
      }
      return i;
    }
    on(e, s) {
      this.events.on(e, s);
    }
    once(e, s) {
      this.events.once(e, s);
    }
    removeListener(e, s) {
      this.events.removeListener(e, s);
    }
    off(e, s) {
      this.events.off(e, s);
    }
    get isWalletConnect() {
      return true;
    }
    async pair(e) {
      const { uri: s, approval: n } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
        scopedProperties: this.scopedProperties
      });
      s && (this.uri = s, this.events.emit("display_uri", s));
      const r = await n();
      this.session = r;
      const i = $u(r.namespaces);
      return this.namespaces = _o(this.namespaces, i), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
    }
    setDefaultChain(e, s) {
      try {
        if (!this.session) return;
        const [n, r] = this.validateChain(e);
        this.getProvider(n).setDefaultChain(r, s);
      } catch (n) {
        if (!/Please call connect/.test(n.message)) throw n;
      }
    }
    async cleanupPendingPairings(e = {}) {
      try {
        this.logger.info("Cleaning up inactive pairings...");
        const s = this.client.pairing.getAll();
        if (!Js(s)) return;
        for (const n of s) e.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
        this.logger.info(`Inactive pairings cleared: ${s.length}`);
      } catch (s) {
        this.logger.warn(s, "Failed to cleanup pending pairings");
      }
    }
    abortPairingAttempt() {
      this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
    }
    async checkStorage() {
      this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
    }
    async initialize() {
      this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
    }
    async createClient() {
      var e, s;
      if (this.client = this.providerOpts.client || await H_.init({
        core: this.providerOpts.core,
        logger: this.providerOpts.logger || Su,
        relayUrl: this.providerOpts.relayUrl || yS,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
        customStoragePrefix: this.providerOpts.customStoragePrefix,
        telemetryEnabled: this.providerOpts.telemetryEnabled
      }), this.providerOpts.session) try {
        this.session = this.client.session.get(this.providerOpts.session.topic);
      } catch (n) {
        throw this.logger.error(n, "Failed to get session"), new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
      }
      else {
        const n = this.client.session.getAll();
        this.session = n[0];
      }
      this.logger.trace("SignClient Initialized");
    }
    createProviders() {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
      const e = [
        ...new Set(Object.keys(this.session.namespaces).map((s) => Rr(s)))
      ];
      wc("client", this.client), wc("events", this.events), wc("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
        if (!this.session) return;
        const n = OS(s, this.session);
        if ((n == null ? void 0 : n.length) === 0) return;
        const r = Xg(n), i = _o(this.namespaces, this.optionalNamespaces), o = So(fi({}, i[s]), {
          accounts: n,
          chains: r
        });
        switch (s) {
          case "eip155":
            this.rpcProviders[s] = new rT({
              namespace: o
            });
            break;
          default:
            this.rpcProviders[s] = new aT({
              namespace: o
            });
        }
      });
    }
    registerEventListeners() {
      if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
      this.client.on("session_ping", (e) => {
        var s;
        const { topic: n } = e;
        n === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e);
      }), this.client.on("session_event", (e) => {
        var s;
        const { params: n, topic: r } = e;
        if (r !== ((s = this.session) == null ? void 0 : s.topic)) return;
        const { event: i } = n;
        if (i.name === "accountsChanged") {
          const o = i.data;
          o && Js(o) && this.events.emit("accountsChanged", o.map(Pu));
        } else if (i.name === "chainChanged") {
          const o = n.chainId, a = n.event.data, c = Rr(o), l = mc(o) !== mc(a) ? `${c}:${mc(a)}` : o;
          this.onChainChanged({
            currentCaipChainId: l
          });
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }), this.client.on("session_update", ({ topic: e, params: s }) => {
        var n, r;
        if (e !== ((n = this.session) == null ? void 0 : n.topic)) return;
        const { namespaces: i } = s, o = (r = this.client) == null ? void 0 : r.session.get(e);
        this.session = So(fi({}, o), {
          namespaces: i
        }), this.onSessionUpdate(), this.events.emit("session_update", {
          topic: e,
          params: s
        });
      }), this.client.on("session_delete", async (e) => {
        var s;
        e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", So(fi({}, Ke("USER_DISCONNECTED")), {
          data: e.topic
        })));
      }), this.on(sd.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(So(fi({}, e), {
          internal: true
        }));
      });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[Zg];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var s;
        this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
      });
    }
    setNamespaces(e) {
      const { namespaces: s = {}, optionalNamespaces: n = {}, sessionProperties: r, scopedProperties: i } = e;
      this.optionalNamespaces = _o(s, n), this.sessionProperties = r, this.scopedProperties = i;
    }
    validateChain(e) {
      const [s, n] = (e == null ? void 0 : e.split(":")) || [
        "",
        ""
      ];
      if (!this.namespaces || !Object.keys(this.namespaces).length) return [
        s,
        n
      ];
      if (s && !Object.keys(this.namespaces || {}).map((o) => Rr(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
      if (s && n) return [
        s,
        n
      ];
      const r = Rr(Object.keys(this.namespaces)[0]), i = this.rpcProviders[r].getDefaultChain();
      return [
        r,
        i
      ];
    }
    async requestAccounts() {
      const [e] = this.validateChain();
      return await this.getProvider(e).requestAccounts();
    }
    async onChainChanged({ currentCaipChainId: e, previousCaipChainId: s, internal: n = false }) {
      if (!this.namespaces) return;
      const [r, i] = this.validateChain(e);
      i && (this.updateNamespaceChain(r, i), n ? (this.events.emit("chainChanged", i), this.emitAccountsChangedOnChainChange({
        namespace: r,
        currentCaipChainId: e,
        previousCaipChainId: s
      })) : this.getProvider(r).setDefaultChain(i), await this.persist("namespaces", this.namespaces));
    }
    emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: s, previousCaipChainId: n }) {
      var r, i;
      try {
        if (n === s) return;
        const o = (i = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : i.accounts;
        if (!o) return;
        const a = o.filter((c) => c.includes(`${s}:`)).map(Pu);
        if (!Js(a)) return;
        this.events.emit("accountsChanged", a);
      } catch (o) {
        this.logger.warn(o, "Failed to emit accountsChanged on chain change");
      }
    }
    updateNamespaceChain(e, s) {
      if (!this.namespaces) return;
      const n = this.namespaces[e] ? e : `${e}:${s}`, r = {
        chains: [],
        methods: [],
        events: [],
        defaultChain: s
      };
      this.namespaces[n] ? this.namespaces[n] && (this.namespaces[n].defaultChain = s) : this.namespaces[n] = r;
    }
    onConnect() {
      this.createProviders(), this.events.emit("connect", {
        session: this.session
      });
    }
    async cleanup() {
      this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({
        deletePairings: true
      }), await this.cleanupStorage();
    }
    async persist(e, s) {
      var n;
      const r = ((n = this.session) == null ? void 0 : n.topic) || "";
      await this.client.core.storage.setItem(`${Io}/${e}${r}`, s);
    }
    async getFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      return await this.client.core.storage.getItem(`${Io}/${e}${n}`);
    }
    async deleteFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      await this.client.core.storage.removeItem(`${Io}/${e}${n}`);
    }
    async cleanupStorage() {
      var e;
      try {
        if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
        const s = await this.client.core.storage.getKeys();
        for (const n of s) n.startsWith(Io) && await this.client.core.storage.removeItem(n);
      } catch (s) {
        this.logger.warn(s, "Failed to cleanup storage");
      }
    }
  };
  const Wu = 2147483648, pT = {
    convertEVMChainIdToCoinType(t) {
      if (t >= Wu) throw new Error("Invalid chainId");
      return (Wu | t) >>> 0;
    }
  }, Kt = De({
    suggestions: [],
    loading: false
  }), gT = {
    state: Kt,
    subscribe(t) {
      return st(Kt, () => t(Kt));
    },
    subscribeKey(t, e) {
      return nt(Kt, t, e);
    },
    async resolveName(t) {
      var _a2, _b3;
      try {
        return await he.lookupEnsName(t);
      } catch (e) {
        const s = e;
        throw new Error(((_b3 = (_a2 = s == null ? void 0 : s.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b3.description) || "Error resolving name");
      }
    },
    async isNameRegistered(t) {
      try {
        return await he.lookupEnsName(t), true;
      } catch {
        return false;
      }
    },
    async getSuggestions(t) {
      try {
        Kt.loading = true, Kt.suggestions = [];
        const e = await he.getEnsNameSuggestions(t);
        return Kt.suggestions = e.suggestions || [], Kt.suggestions;
      } catch (e) {
        const s = ki.parseEnsApiError(e, "Error fetching name suggestions");
        throw new Error(s);
      } finally {
        Kt.loading = false;
      }
    },
    async getNamesForAddress(t) {
      try {
        if (!y.state.activeCaipNetwork) return [];
        const s = q.getEnsFromCacheForAddress(t);
        if (s) return s;
        const n = await he.reverseLookupEnsName({
          address: t
        });
        return q.updateEnsCache({
          address: t,
          ens: n,
          timestamp: Date.now()
        }), n;
      } catch (e) {
        const s = ki.parseEnsApiError(e, "Error fetching names for address");
        throw new Error(s);
      }
    },
    async registerName(t) {
      var _a2;
      const e = y.state.activeCaipNetwork, s = (_a2 = y.getAccountData(e == null ? void 0 : e.chainNamespace)) == null ? void 0 : _a2.address, n = K.getAuthConnector();
      if (!e) throw new Error("Network not found");
      if (!s || !n) throw new Error("Address or auth connector not found");
      Kt.loading = true;
      try {
        const r = JSON.stringify({
          name: t,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3)
        });
        le.pushTransactionStack({
          onCancel() {
            le.replace("RegisterAccountName");
          }
        });
        const i = await Z.signMessage(r);
        Kt.loading = false;
        const o = e.id;
        if (!o) throw new Error("Network not found");
        const a = pT.convertEVMChainIdToCoinType(Number(o));
        await he.registerEnsName({
          coinType: a,
          address: s,
          signature: i,
          message: r
        }), y.setAccountProp("profileName", t, e.chainNamespace), q.updateEnsCache({
          address: s,
          ens: [
            {
              name: t,
              registered_at: (/* @__PURE__ */ new Date()).toISOString(),
              updated_at: void 0,
              addresses: {},
              attributes: []
            }
          ],
          timestamp: Date.now()
        }), le.replace("RegisterAccountNameSuccess");
      } catch (r) {
        const i = ki.parseEnsApiError(r, `Error registering name ${t}`);
        throw le.replace("RegisterAccountName"), new Error(i);
      } finally {
        Kt.loading = false;
      }
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      var _a2, _b3;
      return ((_b3 = (_a2 = t == null ? void 0 : t.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b3.description) || e;
    }
  }, ki = es(gT), mT = {
    solana: [
      "solana_signMessage",
      "solana_signTransaction",
      "solana_requestAccounts",
      "solana_getAccounts",
      "solana_signAllTransactions",
      "solana_signAndSendTransaction"
    ],
    eip155: [
      "eth_accounts",
      "eth_requestAccounts",
      "eth_sendRawTransaction",
      "eth_sign",
      "eth_signTransaction",
      "eth_signTypedData",
      "eth_signTypedData_v3",
      "eth_signTypedData_v4",
      "eth_sendTransaction",
      "personal_sign",
      "wallet_switchEthereumChain",
      "wallet_addEthereumChain",
      "wallet_getPermissions",
      "wallet_requestPermissions",
      "wallet_registerOnboarding",
      "wallet_watchAsset",
      "wallet_scanQRCode",
      "wallet_getCallsStatus",
      "wallet_showCallsStatus",
      "wallet_sendCalls",
      "wallet_getCapabilities",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "wallet_getAssets"
    ],
    bip122: [
      "sendTransfer",
      "signMessage",
      "signPsbt",
      "getAccountAddresses"
    ]
  }, xn = {
    RPC_ERROR_CODE: {
      USER_REJECTED: 5e3,
      USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(t) {
      return mT[t] || [];
    },
    createDefaultNamespace(t) {
      return {
        methods: this.getMethodsByChainNamespace(t),
        events: [
          "accountsChanged",
          "chainChanged"
        ],
        chains: [],
        rpcMap: {}
      };
    },
    applyNamespaceOverrides(t, e) {
      if (!e) return {
        ...t
      };
      const s = {
        ...t
      }, n = /* @__PURE__ */ new Set();
      if (e.methods && Object.keys(e.methods).forEach((r) => n.add(r)), e.chains && Object.keys(e.chains).forEach((r) => n.add(r)), e.events && Object.keys(e.events).forEach((r) => n.add(r)), e.rpcMap && Object.keys(e.rpcMap).forEach((r) => {
        const [i] = r.split(":");
        i && n.add(i);
      }), n.forEach((r) => {
        s[r] || (s[r] = this.createDefaultNamespace(r));
      }), e.methods && Object.entries(e.methods).forEach(([r, i]) => {
        s[r] && (s[r].methods = i);
      }), e.chains && Object.entries(e.chains).forEach(([r, i]) => {
        s[r] && (s[r].chains = i);
      }), e.events && Object.entries(e.events).forEach(([r, i]) => {
        s[r] && (s[r].events = i);
      }), e.rpcMap) {
        const r = /* @__PURE__ */ new Set();
        Object.entries(e.rpcMap).forEach(([i, o]) => {
          const [a, c] = i.split(":");
          !a || !c || !s[a] || (s[a].rpcMap || (s[a].rpcMap = {}), r.has(a) || (s[a].rpcMap = {}, r.add(a)), s[a].rpcMap[c] = o);
        });
      }
      return s;
    },
    createNamespaces(t, e) {
      const s = t.reduce((n, r) => {
        const { id: i, chainNamespace: o, rpcUrls: a } = r, c = a.default.http[0];
        n[o] || (n[o] = this.createDefaultNamespace(o));
        const l = `${o}:${i}`, d = n[o];
        switch (d.chains.push(l), l) {
          case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            d.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
            break;
          case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
            d.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
            break;
        }
        return (d == null ? void 0 : d.rpcMap) && c && (d.rpcMap[i] = c), n;
      }, {});
      return this.applyNamespaceOverrides(s, e);
    },
    resolveReownName: async (t) => {
      var _a2;
      const e = await ki.resolveName(t);
      return ((_a2 = (Object.values(e == null ? void 0 : e.addresses) || [])[0]) == null ? void 0 : _a2.address) || false;
    },
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((e) => {
        const s = e.chains || [], n = e.accounts.map((r) => {
          const [i, o] = r.split(":");
          return `${i}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...s,
          ...n
        ]));
      });
    },
    isSessionEventData(t) {
      return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null;
    },
    isUserRejectedRequestError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          const e = t, s = typeof e.code == "number", n = s && e.code === xn.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = s && e.code === xn.RPC_ERROR_CODE.USER_REJECTED;
          return n || r;
        }
        return false;
      } catch {
        return false;
      }
    },
    isOriginAllowed(t, e, s) {
      for (const n of [
        ...e,
        ...s
      ]) if (n.includes("*")) {
        const i = `^${n.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&").replace(/\\\*/gu, ".*")}$`;
        if (new RegExp(i, "u").test(t)) return true;
      } else try {
        if (new URL(n).origin === t) return true;
      } catch {
        if (n === t) return true;
      }
      return false;
    },
    listenWcProvider({ universalProvider: t, namespace: e, onConnect: s, onDisconnect: n, onAccountsChanged: r, onChainChanged: i, onDisplayUri: o }) {
      s && t.on("connect", () => {
        const a = xn.getWalletConnectAccounts(t, e);
        s(a);
      }), n && t.on("disconnect", () => {
        n();
      }), r && t.on("accountsChanged", (a) => {
        var _a2, _b3, _c2, _d2, _e2;
        try {
          const c = ((_c2 = (_b3 = (_a2 = t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b3[e]) == null ? void 0 : _c2.accounts) || [], l = (_e2 = (_d2 = t.rpcProviders) == null ? void 0 : _d2[e]) == null ? void 0 : _e2.getDefaultChain(), d = a.map((h) => {
            const u = c.find((p) => p.includes(`${e}:${l}:${h}`));
            if (!u) return;
            const { chainId: f, chainNamespace: g } = tt.parseCaipAddress(u);
            return {
              address: h,
              chainId: f,
              chainNamespace: g
            };
          }).filter((h) => h !== void 0);
          d.length > 0 && r(d);
        } catch (c) {
          console.warn("Failed to parse accounts for namespace on accountsChanged event", e, a, c);
        }
      }), i && t.on("chainChanged", (a) => {
        i(a);
      }), o && t.on("display_uri", (a) => {
        o(a);
      });
    },
    getWalletConnectAccounts(t, e) {
      var _a2, _b3, _c2, _d2;
      const s = /* @__PURE__ */ new Set(), n = (_d2 = (_c2 = (_b3 = (_a2 = t == null ? void 0 : t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b3[e]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d2.map((r) => tt.parseCaipAddress(r)).filter(({ address: r }) => s.has(r.toLowerCase()) ? false : (s.add(r.toLowerCase()), true));
      return n && n.length > 0 ? n : [];
    }
  }, wT = [
    W.CONNECTOR_ID.AUTH,
    W.CONNECTOR_ID.WALLET_CONNECT
  ];
  class yT {
    constructor(e) {
      this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (s) => y.getCaipNetworks(s), this.getConnectorId = (s) => K.getConnectorId(s), e && this.construct(e);
    }
    construct(e) {
      this.projectId = e.projectId, this.namespace = e.namespace, this.adapterType = e.adapterType;
    }
    get connectors() {
      return this.availableConnectors;
    }
    get connections() {
      return this.availableConnections;
    }
    get networks() {
      return this.getCaipNetworks(this.namespace);
    }
    onAuthConnected({ accounts: e, chainId: s }) {
      const n = this.getCaipNetworks().filter((r) => r.chainNamespace === this.namespace).find((r) => r.id.toString() === (s == null ? void 0 : s.toString()));
      e && n && this.addConnection({
        connectorId: W.CONNECTOR_ID.AUTH,
        accounts: e,
        caipNetwork: n
      });
    }
    setAuthProvider(e) {
      e.onConnect(this.onAuthConnected.bind(this)), e.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
        id: W.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: W.CONNECTOR_NAMES.AUTH,
        provider: e,
        imageId: void 0,
        chain: this.namespace,
        chains: []
      });
    }
    addConnector(...e) {
      const s = /* @__PURE__ */ new Set();
      this.availableConnectors = [
        ...e,
        ...this.availableConnectors
      ].filter((n) => s.has(n.id) ? false : (s.add(n.id), true)), this.emit("connectors", this.availableConnectors);
    }
    addConnection(...e) {
      const s = /* @__PURE__ */ new Set();
      this.availableConnections = [
        ...e,
        ...this.availableConnections
      ].filter((n) => s.has(n.connectorId.toLowerCase()) ? false : (s.add(n.connectorId.toLowerCase()), true)), this.emit("connections", this.availableConnections);
    }
    deleteConnection(e) {
      this.availableConnections = this.availableConnections.filter((s) => s.connectorId.toLowerCase() !== e.toLowerCase()), this.emit("connections", this.availableConnections);
    }
    clearConnections(e = false) {
      this.availableConnections = [], e && this.emit("connections", this.availableConnections);
    }
    setStatus(e, s) {
      y.setAccountProp("status", e, s);
    }
    on(e, s) {
      var _a2;
      this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), (_a2 = this.eventListeners.get(e)) == null ? void 0 : _a2.add(s);
    }
    off(e, s) {
      const n = this.eventListeners.get(e);
      n && n.delete(s);
    }
    removeAllEventListeners() {
      this.eventListeners.forEach((e) => {
        e.clear();
      });
    }
    emit(e, s) {
      const n = this.eventListeners.get(e);
      n && n.forEach((r) => r(s));
    }
    async connectWalletConnect(e) {
      try {
        return {
          clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
        };
      } catch (s) {
        throw xn.isUserRejectedRequestError(s) ? new ff(s) : s;
      }
    }
    async switchNetwork(e) {
      var _a2;
      const { caipNetwork: s } = e, n = Be.getProviderId(s.chainNamespace), r = Be.getProvider(s.chainNamespace);
      if (!r) throw new Error("Provider not found");
      if (n === "WALLET_CONNECT") {
        r.setDefaultChain(s.caipNetworkId);
        return;
      }
      if (n === "AUTH") {
        const i = (_a2 = K.getAuthConnector()) == null ? void 0 : _a2.provider;
        if (!i) throw new Error("Auth provider not found");
        const o = Jt(s.chainNamespace);
        await i.switchNetwork({
          chainId: s.caipNetworkId
        });
        const a = await i.getUser({
          chainId: s.caipNetworkId,
          preferredAccountType: o
        });
        this.emit("switchNetwork", a);
      }
    }
    getWalletConnectConnector() {
      const e = this.connectors.find((s) => s.id === "walletConnect");
      if (!e) throw new Error("WalletConnectConnector not found");
      return e;
    }
    onConnect(e, s) {
      if (e.length > 0) {
        const { address: n, chainId: r } = se.getAccount(e[0]), i = this.getCaipNetworks().filter((a) => a.chainNamespace === this.namespace).find((a) => a.id.toString() === (r == null ? void 0 : r.toString())), o = this.connectors.find((a) => a.id === s);
        n && (this.emit("accountChanged", {
          address: n,
          chainId: r,
          connector: o
        }), this.addConnection({
          connectorId: s,
          accounts: e.map((a) => {
            const { address: c } = se.getAccount(a);
            return {
              address: c
            };
          }),
          caipNetwork: i
        }));
      }
    }
    onAccountsChanged(e, s, n = true) {
      var _a2, _b3;
      if (e.length > 0) {
        const { address: r } = se.getAccount(e[0]), i = this.getConnection({
          connectorId: s,
          connections: this.connections,
          connectors: this.connectors
        });
        r && ((_a2 = this.getConnectorId(W.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === s.toLowerCase() && this.emit("accountChanged", {
          address: r,
          chainId: (_b3 = i == null ? void 0 : i.caipNetwork) == null ? void 0 : _b3.id,
          connector: i == null ? void 0 : i.connector
        }), this.addConnection({
          connectorId: s,
          accounts: e.map((o) => {
            const { address: a } = se.getAccount(o);
            return {
              address: a
            };
          }),
          caipNetwork: i == null ? void 0 : i.caipNetwork
        });
      } else n && this.onDisconnect(s);
    }
    onDisconnect(e) {
      var _a2;
      this.removeProviderListeners(e), this.deleteConnection(e), ((_a2 = this.getConnectorId(W.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === e.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
    }
    onChainChanged(e, s) {
      var _a2;
      const n = typeof e == "string" && e.startsWith("0x") ? parseInt(e, 16).toString() : e.toString(), r = this.getConnection({
        connectorId: s,
        connections: this.connections,
        connectors: this.connectors
      }), i = this.getCaipNetworks().filter((o) => o.chainNamespace === this.namespace).find((o) => o.id.toString() === n);
      r && this.addConnection({
        connectorId: s,
        accounts: r.accounts,
        caipNetwork: i
      }), ((_a2 = this.getConnectorId(W.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === s.toLowerCase() && this.emit("switchNetwork", {
        chainId: n
      });
    }
    listenProviderEvents(e, s) {
      if (wT.includes(e)) return;
      const n = (o) => this.onAccountsChanged(o, e), r = (o) => this.onChainChanged(o, e), i = () => this.onDisconnect(e);
      this.providerHandlers[e] || (s.on("disconnect", i), s.on("accountsChanged", n), s.on("chainChanged", r), this.providerHandlers[e] = {
        provider: s,
        disconnect: i,
        accountsChanged: n,
        chainChanged: r
      });
    }
    removeProviderListeners(e) {
      if (this.providerHandlers[e]) {
        const { provider: s, disconnect: n, accountsChanged: r, chainChanged: i } = this.providerHandlers[e];
        s.removeListener("disconnect", n), s.removeListener("accountsChanged", r), s.removeListener("chainChanged", i), this.providerHandlers[e] = null;
      }
    }
    emitFirstAvailableConnection() {
      var _a2;
      const e = this.getConnection({
        connections: this.connections,
        connectors: this.connectors
      });
      if (e) {
        const [s] = e.accounts;
        this.emit("accountChanged", {
          address: s == null ? void 0 : s.address,
          chainId: (_a2 = e.caipNetwork) == null ? void 0 : _a2.id,
          connector: e.connector
        });
      }
    }
    getConnection({ address: e, connectorId: s, connections: n, connectors: r }) {
      if (s) {
        const o = n.find((l) => l.connectorId.toLowerCase() === s.toLowerCase());
        if (!o) return null;
        const a = r.find((l) => l.id.toLowerCase() === o.connectorId.toLowerCase()), c = e ? o.accounts.find((l) => l.address.toLowerCase() === e.toLowerCase()) : o.accounts[0];
        return {
          ...o,
          account: c,
          connector: a
        };
      }
      const i = n.find((o) => o.accounts.length > 0 && r.some((a) => a.id.toLowerCase() === o.connectorId.toLowerCase()));
      if (i) {
        const [o] = i.accounts, a = r.find((c) => c.id.toLowerCase() === i.connectorId.toLowerCase());
        return {
          ...i,
          account: o,
          connector: a
        };
      }
      return null;
    }
  }
  let Wn = null;
  ds = {
    getSIWX() {
      return D.state.siwx;
    },
    async initializeIfEnabled(t = y.getActiveCaipAddress()) {
      var _a2, _b3, _c2;
      const e = D.state.siwx;
      if (!(e && t)) return;
      const [s, n, r] = t.split(":");
      if (y.checkIfSupportedNetwork(s, `${s}:${n}`)) try {
        if ((_a2 = D.state.remoteFeatures) == null ? void 0 : _a2.emailCapture) {
          const o = (_b3 = y.getAccountData(s)) == null ? void 0 : _b3.user;
          await ge.open({
            view: "DataCapture",
            data: {
              email: (o == null ? void 0 : o.email) ?? void 0
            }
          });
          return;
        }
        if (Wn && await Wn, (await e.getSessions(`${s}:${n}`, r)).length) return;
        await ge.open({
          view: "SIWXSignMessage"
        });
      } catch (i) {
        console.error("SIWXUtil:initializeIfEnabled", i), pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(i)
        }), await ((_c2 = Z._getClient()) == null ? void 0 : _c2.disconnect().catch(console.error)), le.reset("Connect"), Ns.showError("A problem occurred while trying initialize authentication");
      }
    },
    async isAuthenticated(t = y.getActiveCaipAddress()) {
      if (!D.state.siwx || !t) return true;
      const { chainNamespace: s, chainId: n, address: r } = tt.parseCaipAddress(t), i = `${s}:${n}`;
      return (await ds.getSessions({
        address: r,
        caipNetworkId: i
      })).length > 0;
    },
    async requestSignMessage() {
      const t = D.state.siwx, e = se.getPlainAddress(y.getActiveCaipAddress()), s = co(), n = Z._getClient();
      if (!t) throw new Error("SIWX is not enabled");
      if (!e) throw new Error("No ActiveCaipAddress found");
      if (!s) throw new Error("No ActiveCaipNetwork or client found");
      if (!n) throw new Error("No ConnectionController client found");
      try {
        const r = await t.createMessage({
          chainId: s.caipNetworkId,
          accountAddress: e
        }), i = r.toString();
        K.getConnectorId(s.chainNamespace) === W.CONNECTOR_ID.AUTH && le.pushTransactionStack({});
        const a = await n.signMessage(i);
        await t.addSession({
          data: r,
          message: i,
          signature: a
        }), y.setLastConnectedSIWECaipNetwork(s), ge.close(), pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (r) {
        (!ge.state.open || le.state.view === "ApproveTransaction") && await ge.open({
          view: "SIWXSignMessage"
        }), Ns.showError("Error signing message"), pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(r)
        }), console.error("SWIXUtil:requestSignMessage", r);
      }
    },
    async cancelSignMessage() {
      var _a2;
      try {
        const t = this.getSIWX();
        if ((_a2 = t == null ? void 0 : t.getRequired) == null ? void 0 : _a2.call(t)) {
          const s = y.getLastConnectedSIWECaipNetwork();
          if (s) {
            const n = await (t == null ? void 0 : t.getSessions(s == null ? void 0 : s.caipNetworkId, se.getPlainAddress(y.getActiveCaipAddress()) || ""));
            n && n.length > 0 ? await y.switchActiveNetwork(s) : await Z.disconnect();
          } else await Z.disconnect();
        } else ge.close();
        ge.close(), pe.sendEvent({
          event: "CLICK_CANCEL_SIWX",
          type: "track",
          properties: this.getSIWXEventProperties()
        });
      } catch (t) {
        console.error("SIWXUtil:cancelSignMessage", t);
      }
    },
    async getAllSessions() {
      const t = this.getSIWX(), e = y.getAllRequestedCaipNetworks(), s = [];
      return await Promise.all(e.map(async (n) => {
        const r = await (t == null ? void 0 : t.getSessions(n.caipNetworkId, se.getPlainAddress(y.getActiveCaipAddress()) || ""));
        r && s.push(...r);
      })), s;
    },
    async getSessions(t) {
      var _a2;
      const e = D.state.siwx;
      let s = t == null ? void 0 : t.address;
      if (!s) {
        const r = y.getActiveCaipAddress();
        s = se.getPlainAddress(r);
      }
      let n = t == null ? void 0 : t.caipNetworkId;
      return n || (n = (_a2 = y.getActiveCaipNetwork()) == null ? void 0 : _a2.caipNetworkId), e && s && n ? e.getSessions(n, s) : [];
    },
    async isSIWXCloseDisabled() {
      var _a2;
      const t = this.getSIWX();
      if (t) {
        const e = le.state.view === "ApproveTransaction", s = le.state.view === "SIWXSignMessage";
        if (e || s) return ((_a2 = t.getRequired) == null ? void 0 : _a2.call(t)) && (await this.getSessions()).length === 0;
      }
      return false;
    },
    async authConnectorAuthenticate({ authConnector: t, chainId: e, socialUri: s, preferredAccountType: n, chainNamespace: r }) {
      var _a2;
      const i = ds.getSIWX(), o = co();
      if (!i || !r.includes(W.CHAIN.EVM) || ((_a2 = D.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
        const h = await t.connect({
          chainId: e,
          socialUri: s,
          preferredAccountType: n
        });
        return {
          address: h.address,
          chainId: h.chainId,
          accounts: h.accounts
        };
      }
      const a = `${r}:${e}`, c = await i.createMessage({
        chainId: a,
        accountAddress: "<<AccountAddress>>"
      }), l = {
        accountAddress: c.accountAddress,
        chainId: c.chainId,
        domain: c.domain,
        uri: c.uri,
        version: c.version,
        nonce: c.nonce,
        notBefore: c.notBefore,
        statement: c.statement,
        resources: c.resources,
        requestId: c.requestId,
        issuedAt: c.issuedAt,
        expirationTime: c.expirationTime,
        serializedMessage: c.toString()
      }, d = await t.connect({
        chainId: e,
        socialUri: s,
        siwxMessage: l,
        preferredAccountType: n
      });
      return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await ds.addEmbeddedWalletSession(l, d.message, d.signature), y.setLastConnectedSIWECaipNetwork(o), {
        address: d.address,
        chainId: d.chainId,
        accounts: d.accounts
      };
    },
    async addEmbeddedWalletSession(t, e, s) {
      if (Wn) return Wn;
      const n = ds.getSIWX();
      return n ? (Wn = n.addSession({
        data: t,
        message: e,
        signature: s
      }).finally(() => {
        Wn = null;
      }), Wn) : Promise.resolve();
    },
    async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: s }) {
      var _a2, _b3, _c2;
      const n = ds.getSIWX(), r = co(), i = new Set(e.map((l) => l.split(":")[0]));
      if (!n || i.size !== 1 || !i.has("eip155")) return false;
      const o = await n.createMessage({
        chainId: ((_a2 = co()) == null ? void 0 : _a2.caipNetworkId) || "",
        accountAddress: ""
      }), a = await t.authenticate({
        nonce: o.nonce,
        domain: o.domain,
        uri: o.uri,
        exp: o.expirationTime,
        iat: o.issuedAt,
        nbf: o.notBefore,
        requestId: o.requestId,
        version: o.version,
        resources: o.resources,
        statement: o.statement,
        chainId: o.chainId,
        methods: s,
        chains: [
          o.chainId,
          ...e.filter((l) => l !== o.chainId)
        ]
      });
      Ns.showLoading("Authenticating...", {
        autoClose: false
      });
      const c = {
        ...a.session.peer.metadata,
        name: a.session.peer.metadata.name,
        icon: (_b3 = a.session.peer.metadata.icons) == null ? void 0 : _b3[0],
        type: "WALLET_CONNECT"
      };
      if (y.setAccountProp("connectedWalletInfo", c, Array.from(i)[0]), (_c2 = a == null ? void 0 : a.auths) == null ? void 0 : _c2.length) {
        const l = a.auths.map((d) => {
          const h = t.client.formatAuthMessage({
            request: d.p,
            iss: d.p.iss
          });
          return {
            data: {
              ...d.p,
              accountAddress: d.p.iss.split(":").slice(-1).join(""),
              chainId: d.p.iss.split(":").slice(2, 4).join(":"),
              uri: d.p.aud,
              version: d.p.version || o.version,
              expirationTime: d.p.exp,
              issuedAt: d.p.iat,
              notBefore: d.p.nbf
            },
            message: h,
            signature: d.s.s,
            cacao: d
          };
        });
        try {
          await n.setSessions(l), r && y.setLastConnectedSIWECaipNetwork(r), pe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: ds.getSIWXEventProperties()
          });
        } catch (d) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), pe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: ds.getSIWXEventProperties(d)
          }), await t.disconnect().catch(console.error), d;
        } finally {
          Ns.hide();
        }
      }
      return true;
    },
    getSIWXEventProperties(t) {
      var _a2;
      const e = y.state.activeChain;
      if (!e) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
      return {
        network: ((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || "",
        isSmartAccount: Jt(e) === Vs.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: t ? se.parseError(t) : void 0
      };
    },
    async clearSessions() {
      const t = this.getSIWX();
      t && await t.setSessions([]);
    }
  };
  class bT {
    constructor({ provider: e, namespace: s }) {
      this.id = W.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = y.getCaipNetworks.bind(y), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = s;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const s = this.getCaipNetworks(), n = D.state.universalProviderConfigOverride, r = xn.createNamespaces(s, n);
        await this.provider.connect({
          optionalNamespaces: r
        });
      }
      return {
        clientId: await this.provider.client.core.crypto.getClientId(),
        session: this.provider.session
      };
    }
    async disconnect() {
      await this.provider.disconnect();
    }
    async authenticate() {
      const e = this.chains.map((s) => s.caipNetworkId);
      return ds.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: e,
        methods: ET
      });
    }
  }
  let ET, rs, vT, CT, AT, Ms, IT, NT, zt, tm, _T, ST;
  ET = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_getCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "wallet_getAssets"
  ];
  rs = De({
    message: "",
    variant: "info",
    open: false
  });
  vT = {
    state: rs,
    subscribeKey(t, e) {
      return nt(rs, t, e);
    },
    open(t, e) {
      const { debug: s } = D.state, { code: n, displayMessage: r, debugMessage: i } = t;
      r && s && (rs.message = r, rs.variant = e, rs.open = true), i && console.error(typeof i == "function" ? i() : i, n ? {
        code: n
      } : void 0);
    },
    warn(t, e, s) {
      rs.open = true, rs.message = t, rs.variant = "warning", e && console.warn(e, s);
    },
    close() {
      rs.open = false, rs.message = "", rs.variant = "info";
    }
  };
  Ut = es(vT);
  CT = {
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  };
  AT = {
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  };
  Ms = {
    EIP155: W.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH"
  };
  IT = {
    NetworkImageIds: {
      1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
      42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
      43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
      56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
      250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
      10: "ab9c186a-c52f-464b-2906-ca59d760a400",
      137: "41d04d42-da3b-4453-8506-668cc0727900",
      5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
      295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
      11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
      84532: "a18a7ecd-e307-4360-4746-283182228e00",
      1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
      130: "2257980a-3463-48c6-cbac-a42d2a956e00",
      10143: "0a728e83-bacb-46db-7844-948f05434900",
      100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
      9001: "f926ff41-260d-4028-635e-91913fc28e00",
      324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
      314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
      4689: "34e68754-e536-40da-c153-6ef2e7188a00",
      1088: "3897a66d-40b9-4833-162f-a2c90531c900",
      1284: "161038da-44ae-4ec7-1208-0ea569454b00",
      1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
      7777777: "845c60df-d429-4991-e687-91ae45791600",
      42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
      8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
      1313161554: "3ff73439-a619-4894-9262-4470c773a100",
      2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
      2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
      80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
      2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
      "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
      "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
      EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
      "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
      "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
      "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700"
    }
  };
  ji = {
    getCaipTokens(t) {
      if (!t) return;
      const e = {};
      return Object.entries(t).forEach(([s, n]) => {
        e[`${Ms.EIP155}:${s}`] = n;
      }), e;
    },
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    },
    getActiveNamespaceConnectedToAuth() {
      const t = y.state.activeChain;
      return W.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e) => K.getConnectorId(e) === W.CONNECTOR_ID.AUTH && e === t);
    },
    withRetry({ conditionFn: t, intervalMs: e, maxRetries: s }) {
      let n = 0;
      return new Promise((r) => {
        async function i() {
          return n += 1, await t() ? r(true) : n >= s ? r(false) : (setTimeout(i, e), null);
        }
        i();
      });
    },
    userChainIdToChainNamespace(t) {
      if (typeof t == "number") return W.CHAIN.EVM;
      const [e] = t.split(":");
      return e;
    },
    getOtherAuthNamespaces(t) {
      return t ? W.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((n) => n !== t) : [];
    },
    getConnectorStorageInfo(t, e) {
      const n = q.getConnections()[e] ?? [];
      return {
        hasDisconnected: q.isConnectorDisconnected(t, e),
        hasConnected: n.some((r) => ji.isLowerCaseMatch(r.connectorId, t))
      };
    }
  };
  NT = new AbortController();
  zt = {
    EmbeddedWalletAbortController: NT,
    UniversalProviderErrors: {
      UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
        message: "Unauthorized: origin not allowed",
        alertErrorKey: "ORIGIN_NOT_ALLOWED"
      },
      JWT_VALIDATION_ERROR: {
        message: "JWT validation error: JWT Token is not yet valid",
        alertErrorKey: "JWT_TOKEN_NOT_VALID"
      },
      INVALID_KEY: {
        message: "Unauthorized: invalid key",
        alertErrorKey: "INVALID_PROJECT_ID"
      }
    },
    ALERT_ERRORS: {
      SWITCH_NETWORK_NOT_FOUND: {
        code: "APKT001",
        displayMessage: "Network Not Found",
        debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
      },
      ORIGIN_NOT_ALLOWED: {
        code: "APKT002",
        displayMessage: "Invalid App Configuration",
        debugMessage: () => `The origin ${gi() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${D.state.projectId}]`
      },
      IFRAME_LOAD_FAILED: {
        code: "APKT003",
        displayMessage: "Network Error: Wallet Load Failed",
        debugMessage: () => "Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
      },
      IFRAME_REQUEST_TIMEOUT: {
        code: "APKT004",
        displayMessage: "Wallet Request Timeout",
        debugMessage: () => "The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
      },
      UNVERIFIED_DOMAIN: {
        code: "APKT005",
        displayMessage: "Unverified Domain",
        debugMessage: () => "Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
      },
      JWT_TOKEN_NOT_VALID: {
        code: "APKT006",
        displayMessage: "Session Expired",
        debugMessage: "Your session is invalid or expired. Please check your system\u2019s date and time settings, then reconnect."
      },
      INVALID_PROJECT_ID: {
        code: "APKT007",
        displayMessage: "Invalid Project ID",
        debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
      },
      PROJECT_ID_NOT_CONFIGURED: {
        code: "APKT008",
        displayMessage: "Project ID Missing",
        debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
      },
      SERVER_ERROR_APP_CONFIGURATION: {
        code: "APKT009",
        displayMessage: "Server Error",
        debugMessage: (t) => `Unable to fetch App Configuration. ${t}. Please check your network connection and try again shortly. Contact support if the issue persists.`
      },
      RATE_LIMITED_APP_CONFIGURATION: {
        code: "APKT010",
        displayMessage: "Rate Limited",
        debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
      }
    },
    ALERT_WARNINGS: {
      LOCAL_CONFIGURATION_IGNORED: {
        debugMessage: (t) => `[Reown Config Notice] ${t}`
      },
      INACTIVE_NAMESPACE_NOT_CONNECTED: {
        code: "APKTW001",
        displayMessage: "Inactive Namespace Not Connected",
        debugMessage: (t, e) => `An error occurred while connecting an inactive namespace ${t}: "${e}"`
      },
      INVALID_EMAIL: {
        code: "APKTW002",
        displayMessage: "Invalid Email Address",
        debugMessage: "Please enter a valid email address"
      }
    }
  };
  tm = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
      USDC: {
        8453: CT.asset,
        84532: AT.asset
      }
    },
    getTokenSymbolByAddress(t) {
      if (!t) return;
      const [e] = Object.entries(tm.TOKEN_ADDRESSES_BY_SYMBOL).find(([s, n]) => Object.values(n).includes(t)) ?? [];
      return e;
    }
  };
  _T = {
    createLogger(t, e = "error") {
      const s = Om({
        level: e
      }), { logger: n } = km({
        opts: s
      });
      return n.error = (...r) => {
        for (const i of r) if (i instanceof Error) {
          t(i, ...r);
          return;
        }
        t(void 0, ...r);
      }, n;
    }
  };
  ST = "rpc.walletconnect.org";
  function Hu(t, e) {
    const s = new URL("https://rpc.walletconnect.org/v1/");
    return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
  }
  let Cc;
  Cc = [
    "near:mainnet",
    "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    "eip155:1101",
    "eip155:56",
    "eip155:42161",
    "eip155:7777777",
    "eip155:59144",
    "eip155:324",
    "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    "eip155:5000",
    "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
    "eip155:80084",
    "eip155:5003",
    "eip155:100",
    "eip155:8453",
    "eip155:42220",
    "eip155:1313161555",
    "eip155:17000",
    "eip155:1",
    "eip155:300",
    "eip155:1313161554",
    "eip155:1329",
    "eip155:84532",
    "eip155:421614",
    "eip155:11155111",
    "eip155:8217",
    "eip155:43114",
    "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
    "eip155:999999999",
    "eip155:11155420",
    "eip155:80002",
    "eip155:97",
    "eip155:43113",
    "eip155:137",
    "eip155:10",
    "eip155:1301",
    "eip155:80094",
    "eip155:80069",
    "eip155:560048",
    "eip155:31",
    "eip155:2818",
    "eip155:57054",
    "eip155:911867",
    "eip155:534351",
    "eip155:1112",
    "eip155:534352",
    "eip155:1111",
    "eip155:146",
    "eip155:130",
    "eip155:1284",
    "eip155:30",
    "eip155:2810",
    "bip122:000000000019d6689c085ae165831e93",
    "bip122:000000000933ea01ad0ee984209779ba"
  ];
  Tr = {
    extendRpcUrlWithProjectId(t, e) {
      let s = false;
      try {
        s = new URL(t).host === ST;
      } catch {
        s = false;
      }
      if (s) {
        const n = new URL(t);
        return n.searchParams.has("projectId") || n.searchParams.set("projectId", e), n.toString();
      }
      return t;
    },
    isCaipNetwork(t) {
      return "chainNamespace" in t && "caipNetworkId" in t;
    },
    getChainNamespace(t) {
      return this.isCaipNetwork(t) ? t.chainNamespace : W.CHAIN.EVM;
    },
    getCaipNetworkId(t) {
      return this.isCaipNetwork(t) ? t.caipNetworkId : `${W.CHAIN.EVM}:${t.id}`;
    },
    getDefaultRpcUrl(t, e, s) {
      var _a2, _b3, _c2;
      const n = (_c2 = (_b3 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b3.http) == null ? void 0 : _c2[0];
      return Cc.includes(e) ? Hu(e, s) : n || "";
    },
    extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
      var _a2, _b3, _c2, _d2, _e2, _f2, _g2;
      const r = this.getChainNamespace(t), i = this.getCaipNetworkId(t), o = (_c2 = (_b3 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b3.http) == null ? void 0 : _c2[0], a = this.getDefaultRpcUrl(t, i, s), c = ((_f2 = (_e2 = (_d2 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _d2.chainDefault) == null ? void 0 : _e2.http) == null ? void 0 : _f2[0]) || o, l = ((_g2 = n == null ? void 0 : n[i]) == null ? void 0 : _g2.map((u) => u.url)) || [], d = [
        ...l,
        ...a ? [
          a
        ] : []
      ], h = [
        ...l
      ];
      return c && !h.includes(c) && h.push(c), {
        ...t,
        chainNamespace: r,
        caipNetworkId: i,
        assets: {
          imageId: IT.NetworkImageIds[t.id],
          imageUrl: e == null ? void 0 : e[t.id]
        },
        rpcUrls: {
          ...t.rpcUrls,
          default: {
            http: d
          },
          chainDefault: {
            http: h
          }
        }
      };
    },
    extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
      return t.map((r) => Tr.extendCaipNetwork(r, {
        customNetworkImageUrls: e,
        customRpcUrls: n,
        projectId: s
      }));
    },
    getViemTransport(t, e, s) {
      var _a2, _b3, _c2;
      const n = [];
      return s == null ? void 0 : s.forEach((r) => {
        n.push(oo(r.url, r.config));
      }), Cc.includes(t.caipNetworkId) && n.push(oo(Hu(t.caipNetworkId, e), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c2 = (_b3 = (_a2 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b3.http) == null ? void 0 : _c2.forEach((r) => {
        n.push(oo(r));
      }), fd(n);
    },
    extendWagmiTransports(t, e, s) {
      if (Cc.includes(t.caipNetworkId)) {
        const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
        return fd([
          s,
          oo(n)
        ]);
      }
      return s;
    },
    getUnsupportedNetwork(t) {
      return {
        id: t.split(":")[1],
        caipNetworkId: t,
        name: W.UNSUPPORTED_NETWORK_NAME,
        chainNamespace: t.split(":")[0],
        nativeCurrency: {
          name: "",
          decimals: 0,
          symbol: ""
        },
        rpcUrls: {
          default: {
            http: []
          }
        }
      };
    },
    getCaipNetworkFromStorage(t) {
      var _a2;
      const e = q.getActiveCaipNetworkId(), s = y.getAllRequestedCaipNetworks(), n = Array.from(((_a2 = y.state.chains) == null ? void 0 : _a2.keys()) || []), r = e == null ? void 0 : e.split(":")[0], i = r ? n.includes(r) : false, o = s == null ? void 0 : s.find((c) => c.caipNetworkId === e);
      return i && !o && e ? this.getUnsupportedNetwork(e) : o || t || (s == null ? void 0 : s[0]);
    }
  };
  TT = {
    ACCOUNT_TABS: [
      {
        label: "Tokens"
      },
      {
        label: "Activity"
      }
    ],
    VIEW_DIRECTION: {
      Next: "next",
      Prev: "prev"
    },
    DEFAULT_CONNECT_METHOD_ORDER: [
      "email",
      "social",
      "wallet"
    ],
    ANIMATION_DURATIONS: {
      HeaderText: 120
    },
    VIEWS_WITH_LEGAL_FOOTER: [
      "Connect",
      "ConnectWallets",
      "OnRampTokenSelect",
      "OnRampFiatSelect",
      "OnRampProviders"
    ],
    VIEWS_WITH_DEFAULT_FOOTER: [
      "Networks"
    ]
  };
  Ai = {
    filterOutDuplicatesByRDNS(t) {
      const e = D.state.enableEIP6963 ? K.state.connectors : [], s = q.getRecentWallets(), n = e.map((a) => {
        var _a2;
        return (_a2 = a.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), r = s.map((a) => a.rdns).filter(Boolean), i = n.concat(r);
      if (i.includes("io.metamask.mobile") && se.isMobile()) {
        const a = i.indexOf("io.metamask.mobile");
        i[a] = "io.metamask";
      }
      return t.filter((a) => !((a == null ? void 0 : a.rdns) && i.includes(String(a.rdns)) || !(a == null ? void 0 : a.rdns) && e.some((l) => l.name === a.name)));
    },
    filterOutDuplicatesByIds(t) {
      const e = K.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED"), s = q.getRecentWallets(), n = e.map((a) => a.explorerId), r = s.map((a) => a.id), i = n.concat(r);
      return t.filter((a) => !i.includes(a == null ? void 0 : a.id));
    },
    filterOutDuplicateWallets(t) {
      const e = this.filterOutDuplicatesByRDNS(t);
      return this.filterOutDuplicatesByIds(e);
    },
    markWalletsAsInstalled(t) {
      const { connectors: e } = K.state, { featuredWalletIds: s } = D.state, n = e.filter((o) => o.type === "ANNOUNCED").reduce((o, a) => {
        var _a2;
        return ((_a2 = a.info) == null ? void 0 : _a2.rdns) && (o[a.info.rdns] = true), o;
      }, {});
      return t.map((o) => ({
        ...o,
        installed: !!o.rdns && !!n[o.rdns ?? ""]
      })).sort((o, a) => {
        const c = Number(a.installed) - Number(o.installed);
        if (c !== 0) return c;
        if (s == null ? void 0 : s.length) {
          const l = s.indexOf(o.id), d = s.indexOf(a.id);
          if (l !== -1 && d !== -1) return l - d;
          if (l !== -1) return -1;
          if (d !== -1) return 1;
        }
        return 0;
      });
    },
    getConnectOrderMethod(t, e) {
      var _a2;
      const s = (t == null ? void 0 : t.connectMethodsOrder) || ((_a2 = D.state.features) == null ? void 0 : _a2.connectMethodsOrder), n = e || K.state.connectors;
      if (s) return s;
      const { injected: r, announced: i } = Ac.getConnectorsByType(n, re.state.recommended, re.state.featured), o = r.filter(Ac.showConnector), a = i.filter(Ac.showConnector);
      return o.length || a.length ? [
        "wallet",
        "email",
        "social"
      ] : TT.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(t) {
      const e = !!t.rdns && re.state.excludedWallets.some((n) => n.rdns === t.rdns), s = !!t.name && re.state.excludedWallets.some((n) => ji.isLowerCaseMatch(n.name, t.name));
      return e || s;
    },
    markWalletsWithDisplayIndex(t) {
      return t.map((e, s) => ({
        ...e,
        display_index: s
      }));
    }
  };
  Ac = {
    getConnectorsByType(t, e, s) {
      const { customWallets: n } = D.state, r = q.getRecentWallets(), i = Ai.filterOutDuplicateWallets(e), o = Ai.filterOutDuplicateWallets(s), a = t.filter((h) => h.type === "MULTI_CHAIN"), c = t.filter((h) => h.type === "ANNOUNCED"), l = t.filter((h) => h.type === "INJECTED"), d = t.filter((h) => h.type === "EXTERNAL");
      return {
        custom: n,
        recent: r,
        external: d,
        multiChain: a,
        announced: c,
        injected: l,
        recommended: i,
        featured: o
      };
    },
    showConnector(t) {
      var _a2;
      const e = (_a2 = t.info) == null ? void 0 : _a2.rdns, s = !!e && re.state.excludedWallets.some((r) => !!r.rdns && r.rdns === e), n = !!t.name && re.state.excludedWallets.some((r) => ji.isLowerCaseMatch(r.name, t.name));
      return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!se.isMobile() || se.isMobile() && !e && !Z.checkInstalled()) || s || n) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (s || n));
    },
    getIsConnectedWithWC() {
      return Array.from(y.state.chains.values()).some((s) => K.getConnectorId(s.namespace) === W.CONNECTOR_ID.WALLET_CONNECT);
    },
    getConnectorTypeOrder({ recommended: t, featured: e, custom: s, recent: n, announced: r, injected: i, multiChain: o, external: a, overriddenConnectors: c = ((_a2) => (_a2 = D.state.features) == null ? void 0 : _a2.connectorTypeOrder)() ?? [] }) {
      const d = [
        {
          type: "walletConnect",
          isEnabled: true
        },
        {
          type: "recent",
          isEnabled: n.length > 0
        },
        {
          type: "injected",
          isEnabled: [
            ...i,
            ...r,
            ...o
          ].length > 0
        },
        {
          type: "featured",
          isEnabled: e.length > 0
        },
        {
          type: "custom",
          isEnabled: s && s.length > 0
        },
        {
          type: "external",
          isEnabled: a.length > 0
        },
        {
          type: "recommended",
          isEnabled: t.length > 0
        }
      ].filter((g) => g.isEnabled), h = new Set(d.map((g) => g.type)), u = c.filter((g) => h.has(g)).map((g) => ({
        type: g,
        isEnabled: true
      })), f = d.filter(({ type: g }) => !u.some(({ type: w }) => w === g));
      return Array.from(new Set([
        ...u,
        ...f
      ].map(({ type: g }) => g)));
    },
    sortConnectorsByExplorerWallet(t) {
      return [
        ...t
      ].sort((e, s) => e.explorerWallet && s.explorerWallet ? (e.explorerWallet.order ?? 0) - (s.explorerWallet.order ?? 0) : e.explorerWallet ? -1 : s.explorerWallet ? 1 : 0);
    },
    getAuthName({ email: t, socialUsername: e, socialProvider: s }) {
      return e ? s && s === "discord" && e.endsWith("0") ? e.slice(0, -1) : e : t.length > 30 ? `${t.slice(0, -3)}...` : t;
    },
    async fetchProviderData(t) {
      var _a2, _b3;
      try {
        if (t.name === "Browser Wallet" && !se.isMobile()) return {
          accounts: [],
          chainId: void 0
        };
        if (t.id === W.CONNECTOR_ID.AUTH) return {
          accounts: [],
          chainId: void 0
        };
        const [e, s] = await Promise.all([
          (_a2 = t.provider) == null ? void 0 : _a2.request({
            method: "eth_accounts"
          }),
          (_b3 = t.provider) == null ? void 0 : _b3.request({
            method: "eth_chainId"
          }).then((n) => Number(n))
        ]);
        return {
          accounts: e,
          chainId: s
        };
      } catch (e) {
        return console.warn(`Failed to fetch provider data for ${t.name}`, e), {
          accounts: [],
          chainId: void 0
        };
      }
    },
    getFilteredCustomWallets(t) {
      const e = q.getRecentWallets(), s = K.state.connectors.map((o) => {
        var _a2;
        return (_a2 = o.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), n = e.map((o) => o.rdns).filter(Boolean), r = s.concat(n);
      if (r.includes("io.metamask.mobile") && se.isMobile()) {
        const o = r.indexOf("io.metamask.mobile");
        r[o] = "io.metamask";
      }
      return t.filter((o) => !r.includes(String(o == null ? void 0 : o.rdns)));
    },
    hasWalletConnector(t) {
      return K.state.connectors.some((e) => e.id === t.id || e.name === t.name);
    },
    isWalletCompatibleWithCurrentChain(t) {
      const e = y.state.activeChain;
      return e && t.chains ? t.chains.some((s) => {
        const n = s.split(":")[0];
        return e === n;
      }) : true;
    },
    getFilteredRecentWallets() {
      return q.getRecentWallets().filter((s) => !Ai.isExcluded(s)).filter((s) => !this.hasWalletConnector(s)).filter((s) => this.isWalletCompatibleWithCurrentChain(s));
    },
    getCappedRecommendedWallets(t) {
      const { connectors: e } = K.state, { customWallets: s, featuredWalletIds: n } = D.state, r = e.find((I) => I.id === "walletConnect"), i = e.filter((I) => I.type === "INJECTED" || I.type === "ANNOUNCED" || I.type === "MULTI_CHAIN");
      if (!r && !i.length && !(s == null ? void 0 : s.length)) return [];
      const o = Tc.isEmailEnabled(), a = Tc.isSocialsEnabled(), c = i.filter((I) => I.name !== "Browser Wallet"), l = (n == null ? void 0 : n.length) || 0, d = (s == null ? void 0 : s.length) || 0, h = c.length || 0, u = o ? 1 : 0, f = a ? 1 : 0, g = l + d + h + u + f, w = Math.max(0, 4 - g);
      return w <= 0 ? [] : Ai.filterOutDuplicateWallets(t).slice(0, w);
    }
  };
  const Lo = globalThis, rd = Lo.ShadowRoot && (Lo.ShadyCSS === void 0 || Lo.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, id = Symbol(), Vu = /* @__PURE__ */ new WeakMap();
  let sm = class {
    constructor(e, s, n) {
      if (this._$cssResult$ = true, n !== id) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = e, this.t = s;
    }
    get styleSheet() {
      let e = this.o;
      const s = this.t;
      if (rd && e === void 0) {
        const n = s !== void 0 && s.length === 1;
        n && (e = Vu.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Vu.set(s, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  };
  let ls, OT, Ku;
  ls = (t) => new sm(typeof t == "string" ? t : t + "", void 0, id);
  Sn = (t, ...e) => {
    const s = t.length === 1 ? t[0] : e.reduce((n, r, i) => n + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(r) + t[i + 1], t[0]);
    return new sm(s, t, id);
  };
  OT = (t, e) => {
    if (rd) t.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    else for (const s of e) {
      const n = document.createElement("style"), r = Lo.litNonce;
      r !== void 0 && n.setAttribute("nonce", r), n.textContent = s.cssText, t.appendChild(n);
    }
  };
  Ku = rd ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
    let s = "";
    for (const n of e.cssRules) s += n.cssText;
    return ls(s);
  })(t) : t;
  let kT, xT, PT, $T, RT, UT, Ta, zu, DT, LT, xi, Gu;
  ({ is: kT, defineProperty: xT, getOwnPropertyDescriptor: PT, getOwnPropertyNames: $T, getOwnPropertySymbols: RT, getPrototypeOf: UT } = Object);
  Ta = globalThis;
  zu = Ta.trustedTypes;
  DT = zu ? zu.emptyScript : "";
  LT = Ta.reactiveElementPolyfillSupport;
  xi = (t, e) => t;
  El = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? DT : null;
          break;
        case Object:
        case Array:
          t = t == null ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let s = t;
      switch (e) {
        case Boolean:
          s = t !== null;
          break;
        case Number:
          s = t === null ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch {
            s = null;
          }
      }
      return s;
    }
  };
  nm = (t, e) => !kT(t, e);
  Gu = {
    attribute: true,
    type: String,
    converter: El,
    reflect: false,
    useDefault: false,
    hasChanged: nm
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ta.litPropertyMetadata ?? (Ta.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let Or = class extends HTMLElement {
    static addInitializer(e) {
      this._$Ei(), (this.l ?? (this.l = [])).push(e);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(e, s = Gu) {
      if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(e, s), !s.noAccessor) {
        const n = Symbol(), r = this.getPropertyDescriptor(e, n, s);
        r !== void 0 && xT(this.prototype, e, r);
      }
    }
    static getPropertyDescriptor(e, s, n) {
      const { get: r, set: i } = PT(this.prototype, e) ?? {
        get() {
          return this[s];
        },
        set(o) {
          this[s] = o;
        }
      };
      return {
        get: r,
        set(o) {
          const a = r == null ? void 0 : r.call(this);
          i == null ? void 0 : i.call(this, o), this.requestUpdate(e, a, n);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(e) {
      return this.elementProperties.get(e) ?? Gu;
    }
    static _$Ei() {
      if (this.hasOwnProperty(xi("elementProperties"))) return;
      const e = UT(this);
      e.finalize(), e.l !== void 0 && (this.l = [
        ...e.l
      ]), this.elementProperties = new Map(e.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(xi("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(xi("properties"))) {
        const s = this.properties, n = [
          ...$T(s),
          ...RT(s)
        ];
        for (const r of n) this.createProperty(r, s[r]);
      }
      const e = this[Symbol.metadata];
      if (e !== null) {
        const s = litPropertyMetadata.get(e);
        if (s !== void 0) for (const [n, r] of s) this.elementProperties.set(n, r);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [s, n] of this.elementProperties) {
        const r = this._$Eu(s, n);
        r !== void 0 && this._$Eh.set(r, s);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(e) {
      const s = [];
      if (Array.isArray(e)) {
        const n = new Set(e.flat(1 / 0).reverse());
        for (const r of n) s.unshift(Ku(r));
      } else e !== void 0 && s.push(Ku(e));
      return s;
    }
    static _$Eu(e, s) {
      const n = s.attribute;
      return n === false ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a2;
      this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((e) => e(this));
    }
    addController(e) {
      var _a2;
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((_a2 = e.hostConnected) == null ? void 0 : _a2.call(e));
    }
    removeController(e) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.delete(e);
    }
    _$E_() {
      const e = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
      for (const n of s.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
      e.size > 0 && (this._$Ep = e);
    }
    createRenderRoot() {
      const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return OT(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
      var _a2;
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((e) => {
        var _a3;
        return (_a3 = e.hostConnected) == null ? void 0 : _a3.call(e);
      });
    }
    enableUpdating(e) {
    }
    disconnectedCallback() {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((e) => {
        var _a3;
        return (_a3 = e.hostDisconnected) == null ? void 0 : _a3.call(e);
      });
    }
    attributeChangedCallback(e, s, n) {
      this._$AK(e, n);
    }
    _$ET(e, s) {
      var _a2;
      const n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
      if (r !== void 0 && n.reflect === true) {
        const i = (((_a2 = n.converter) == null ? void 0 : _a2.toAttribute) !== void 0 ? n.converter : El).toAttribute(s, n.type);
        this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
      }
    }
    _$AK(e, s) {
      var _a2, _b3;
      const n = this.constructor, r = n._$Eh.get(e);
      if (r !== void 0 && this._$Em !== r) {
        const i = n.getPropertyOptions(r), o = typeof i.converter == "function" ? {
          fromAttribute: i.converter
        } : ((_a2 = i.converter) == null ? void 0 : _a2.fromAttribute) !== void 0 ? i.converter : El;
        this._$Em = r;
        const a = o.fromAttribute(s, i.type);
        this[r] = a ?? ((_b3 = this._$Ej) == null ? void 0 : _b3.get(r)) ?? a, this._$Em = null;
      }
    }
    requestUpdate(e, s, n, r = false, i) {
      var _a2;
      if (e !== void 0) {
        const o = this.constructor;
        if (r === false && (i = this[e]), n ?? (n = o.getPropertyOptions(e)), !((n.hasChanged ?? nm)(i, s) || n.useDefault && n.reflect && i === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(e)) && !this.hasAttribute(o._$Eu(e, n)))) return;
        this.C(e, s, n);
      }
      this.isUpdatePending === false && (this._$ES = this._$EP());
    }
    C(e, s, { useDefault: n, reflect: r, wrapped: i }, o) {
      n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? s ?? this[e]), i !== true || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (s = void 0), this._$AL.set(e, s)), r === true && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (s) {
        Promise.reject(s);
      }
      const e = this.scheduleUpdate();
      return e != null && await e, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a2;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [r, i] of this._$Ep) this[r] = i;
          this._$Ep = void 0;
        }
        const n = this.constructor.elementProperties;
        if (n.size > 0) for (const [r, i] of n) {
          const { wrapped: o } = i, a = this[r];
          o !== true || this._$AL.has(r) || a === void 0 || this.C(r, void 0, i, a);
        }
      }
      let e = false;
      const s = this._$AL;
      try {
        e = this.shouldUpdate(s), e ? (this.willUpdate(s), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((n) => {
          var _a3;
          return (_a3 = n.hostUpdate) == null ? void 0 : _a3.call(n);
        }), this.update(s)) : this._$EM();
      } catch (n) {
        throw e = false, this._$EM(), n;
      }
      e && this._$AE(s);
    }
    willUpdate(e) {
    }
    _$AE(e) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((s) => {
        var _a3;
        return (_a3 = s.hostUpdated) == null ? void 0 : _a3.call(s);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(e)), this.updated(e);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(e) {
      return true;
    }
    update(e) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((s) => this._$ET(s, this[s]))), this._$EM();
    }
    updated(e) {
    }
    firstUpdated(e) {
    }
  };
  Or.elementStyles = [], Or.shadowRootOptions = {
    mode: "open"
  }, Or[xi("elementProperties")] = /* @__PURE__ */ new Map(), Or[xi("finalized")] = /* @__PURE__ */ new Map(), LT == null ? void 0 : LT({
    ReactiveElement: Or
  }), (Ta.reactiveElementVersions ?? (Ta.reactiveElementVersions = [])).push("2.1.2");
  let od, Yu, ra, Zu, rm, Tn, im, BT, dr, qi, Wi, ad, MT, Ic, pi, Ju, Xu, Hn, Qu, ef, om, am, tf, nr;
  od = globalThis;
  Yu = (t) => t;
  ra = od.trustedTypes;
  Zu = ra ? ra.createPolicy("lit-html", {
    createHTML: (t) => t
  }) : void 0;
  rm = "$lit$";
  Tn = `lit$${Math.random().toFixed(9).slice(2)}$`;
  im = "?" + Tn;
  BT = `<${im}>`;
  dr = document;
  qi = () => dr.createComment("");
  Wi = (t) => t === null || typeof t != "object" && typeof t != "function";
  ad = Array.isArray;
  MT = (t) => ad(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function";
  Ic = `[ 	
\f\r]`;
  pi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  Ju = /-->/g;
  Xu = />/g;
  Hn = RegExp(`>|${Ic}(?:([^\\s"'>=/]+)(${Ic}*=${Ic}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  Qu = /'/g;
  ef = /"/g;
  om = /^(?:script|style|textarea|title)$/i;
  am = (t) => (e, ...s) => ({
    _$litType$: t,
    strings: e,
    values: s
  });
  uk = am(1);
  fk = am(2);
  zr = Symbol.for("lit-noChange");
  Ze = Symbol.for("lit-nothing");
  tf = /* @__PURE__ */ new WeakMap();
  nr = dr.createTreeWalker(dr, 129);
  function cm(t, e) {
    if (!ad(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Zu !== void 0 ? Zu.createHTML(e) : e;
  }
  const FT = (t, e) => {
    const s = t.length - 1, n = [];
    let r, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = pi;
    for (let a = 0; a < s; a++) {
      const c = t[a];
      let l, d, h = -1, u = 0;
      for (; u < c.length && (o.lastIndex = u, d = o.exec(c), d !== null); ) u = o.lastIndex, o === pi ? d[1] === "!--" ? o = Ju : d[1] !== void 0 ? o = Xu : d[2] !== void 0 ? (om.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = Hn) : d[3] !== void 0 && (o = Hn) : o === Hn ? d[0] === ">" ? (o = r ?? pi, h = -1) : d[1] === void 0 ? h = -2 : (h = o.lastIndex - d[2].length, l = d[1], o = d[3] === void 0 ? Hn : d[3] === '"' ? ef : Qu) : o === ef || o === Qu ? o = Hn : o === Ju || o === Xu ? o = pi : (o = Hn, r = void 0);
      const f = o === Hn && t[a + 1].startsWith("/>") ? " " : "";
      i += o === pi ? c + BT : h >= 0 ? (n.push(l), c.slice(0, h) + rm + c.slice(h) + Tn + f) : c + Tn + (h === -2 ? a : f);
    }
    return [
      cm(t, i + (t[s] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")),
      n
    ];
  };
  class Hi {
    constructor({ strings: e, _$litType$: s }, n) {
      let r;
      this.parts = [];
      let i = 0, o = 0;
      const a = e.length - 1, c = this.parts, [l, d] = FT(e, s);
      if (this.el = Hi.createElement(l, n), nr.currentNode = this.el.content, s === 2 || s === 3) {
        const h = this.el.content.firstChild;
        h.replaceWith(...h.childNodes);
      }
      for (; (r = nr.nextNode()) !== null && c.length < a; ) {
        if (r.nodeType === 1) {
          if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(rm)) {
            const u = d[o++], f = r.getAttribute(h).split(Tn), g = /([.?@])?(.*)/.exec(u);
            c.push({
              type: 1,
              index: i,
              name: g[2],
              strings: f,
              ctor: g[1] === "." ? qT : g[1] === "?" ? WT : g[1] === "@" ? HT : Oa
            }), r.removeAttribute(h);
          } else h.startsWith(Tn) && (c.push({
            type: 6,
            index: i
          }), r.removeAttribute(h));
          if (om.test(r.tagName)) {
            const h = r.textContent.split(Tn), u = h.length - 1;
            if (u > 0) {
              r.textContent = ra ? ra.emptyScript : "";
              for (let f = 0; f < u; f++) r.append(h[f], qi()), nr.nextNode(), c.push({
                type: 2,
                index: ++i
              });
              r.append(h[u], qi());
            }
          }
        } else if (r.nodeType === 8) if (r.data === im) c.push({
          type: 2,
          index: i
        });
        else {
          let h = -1;
          for (; (h = r.data.indexOf(Tn, h + 1)) !== -1; ) c.push({
            type: 7,
            index: i
          }), h += Tn.length - 1;
        }
        i++;
      }
    }
    static createElement(e, s) {
      const n = dr.createElement("template");
      return n.innerHTML = e, n;
    }
  }
  function Gr(t, e, s = t, n) {
    var _a2, _b3;
    if (e === zr) return e;
    let r = n !== void 0 ? (_a2 = s._$Co) == null ? void 0 : _a2[n] : s._$Cl;
    const i = Wi(e) ? void 0 : e._$litDirective$;
    return (r == null ? void 0 : r.constructor) !== i && ((_b3 = r == null ? void 0 : r._$AO) == null ? void 0 : _b3.call(r, false), i === void 0 ? r = void 0 : (r = new i(t), r._$AT(t, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = r : s._$Cl = r), r !== void 0 && (e = Gr(t, r._$AS(t, e.values), r, n)), e;
  }
  class jT {
    constructor(e, s) {
      this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = s;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(e) {
      const { el: { content: s }, parts: n } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? dr).importNode(s, true);
      nr.currentNode = r;
      let i = nr.nextNode(), o = 0, a = 0, c = n[0];
      for (; c !== void 0; ) {
        if (o === c.index) {
          let l;
          c.type === 2 ? l = new so(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new VT(i, this, e)), this._$AV.push(l), c = n[++a];
        }
        o !== (c == null ? void 0 : c.index) && (i = nr.nextNode(), o++);
      }
      return nr.currentNode = dr, r;
    }
    p(e) {
      let s = 0;
      for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
    }
  }
  class so {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(e, s, n, r) {
      this.type = 2, this._$AH = Ze, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = n, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? true;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const s = this._$AM;
      return s !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = s.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, s = this) {
      e = Gr(this, e, s), Wi(e) ? e === Ze || e == null || e === "" ? (this._$AH !== Ze && this._$AR(), this._$AH = Ze) : e !== this._$AH && e !== zr && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : MT(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== Ze && Wi(this._$AH) ? this._$AA.nextSibling.data = e : this.T(dr.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      var _a2;
      const { values: s, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Hi.createElement(cm(n.h, n.h[0]), this.options)), n);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === r) this._$AH.p(s);
      else {
        const i = new jT(r, this), o = i.u(this.options);
        i.p(s), this.T(o), this._$AH = i;
      }
    }
    _$AC(e) {
      let s = tf.get(e.strings);
      return s === void 0 && tf.set(e.strings, s = new Hi(e)), s;
    }
    k(e) {
      ad(this._$AH) || (this._$AH = [], this._$AR());
      const s = this._$AH;
      let n, r = 0;
      for (const i of e) r === s.length ? s.push(n = new so(this.O(qi()), this.O(qi()), this, this.options)) : n = s[r], n._$AI(i), r++;
      r < s.length && (this._$AR(n && n._$AB.nextSibling, r), s.length = r);
    }
    _$AR(e = this._$AA.nextSibling, s) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s); e !== this._$AB; ) {
        const n = Yu(e).nextSibling;
        Yu(e).remove(), e = n;
      }
    }
    setConnected(e) {
      var _a2;
      this._$AM === void 0 && (this._$Cv = e, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, e));
    }
  }
  class Oa {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, s, n, r, i) {
      this.type = 1, this._$AH = Ze, this._$AN = void 0, this.element = e, this.name = s, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Ze;
    }
    _$AI(e, s = this, n, r) {
      const i = this.strings;
      let o = false;
      if (i === void 0) e = Gr(this, e, s, 0), o = !Wi(e) || e !== this._$AH && e !== zr, o && (this._$AH = e);
      else {
        const a = e;
        let c, l;
        for (e = i[0], c = 0; c < i.length - 1; c++) l = Gr(this, a[n + c], s, c), l === zr && (l = this._$AH[c]), o || (o = !Wi(l) || l !== this._$AH[c]), l === Ze ? e = Ze : e !== Ze && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
      }
      o && !r && this.j(e);
    }
    j(e) {
      e === Ze ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class qT extends Oa {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === Ze ? void 0 : e;
    }
  }
  class WT extends Oa {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== Ze);
    }
  }
  class HT extends Oa {
    constructor(e, s, n, r, i) {
      super(e, s, n, r, i), this.type = 5;
    }
    _$AI(e, s = this) {
      if ((e = Gr(this, e, s, 0) ?? Ze) === zr) return;
      const n = this._$AH, r = e === Ze && n !== Ze || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== Ze && (n === Ze || r);
      r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var _a2;
      typeof this._$AH == "function" ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class VT {
    constructor(e, s, n) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      Gr(this, e);
    }
  }
  const KT = od.litHtmlPolyfillSupport;
  KT == null ? void 0 : KT(Hi, so), (od.litHtmlVersions ?? (od.litHtmlVersions = [])).push("3.3.2");
  const zT = (t, e, s) => {
    const n = (s == null ? void 0 : s.renderBefore) ?? e;
    let r = n._$litPart$;
    if (r === void 0) {
      const i = (s == null ? void 0 : s.renderBefore) ?? null;
      n._$litPart$ = r = new so(e.insertBefore(qi(), i), i, void 0, s ?? {});
    }
    return r._$AI(t), r;
  };
  const cd = globalThis;
  Bo = class extends Or {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a2;
      const e = super.createRenderRoot();
      return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = e.firstChild), e;
    }
    update(e) {
      const s = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = zT(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var _a2;
      super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
    }
    disconnectedCallback() {
      var _a2;
      super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
    }
    render() {
      return zr;
    }
  };
  Bo._$litElement$ = true, Bo.finalized = true, (_b2 = cd.litElementHydrateSupport) == null ? void 0 : _b2.call(cd, {
    LitElement: Bo
  });
  const GT = cd.litElementPolyfillSupport;
  GT == null ? void 0 : GT({
    LitElement: Bo
  });
  (cd.litElementVersions ?? (cd.litElementVersions = [])).push("4.2.2");
  let YT, ia, ZT, JT, XT, QT, eO, tO, sO, nO, vl, sf, js;
  YT = {
    black: "#202020",
    white: "#FFFFFF",
    white010: "rgba(255, 255, 255, 0.1)",
    accent010: "rgba(9, 136, 240, 0.1)",
    accent020: "rgba(9, 136, 240, 0.2)",
    accent030: "rgba(9, 136, 240, 0.3)",
    accent040: "rgba(9, 136, 240, 0.4)",
    accent050: "rgba(9, 136, 240, 0.5)",
    accent060: "rgba(9, 136, 240, 0.6)",
    accent070: "rgba(9, 136, 240, 0.7)",
    accent080: "rgba(9, 136, 240, 0.8)",
    accent090: "rgba(9, 136, 240, 0.9)",
    accent100: "rgba(9, 136, 240, 1.0)",
    accentSecondary010: "rgba(199, 185, 148, 0.1)",
    accentSecondary020: "rgba(199, 185, 148, 0.2)",
    accentSecondary030: "rgba(199, 185, 148, 0.3)",
    accentSecondary040: "rgba(199, 185, 148, 0.4)",
    accentSecondary050: "rgba(199, 185, 148, 0.5)",
    accentSecondary060: "rgba(199, 185, 148, 0.6)",
    accentSecondary070: "rgba(199, 185, 148, 0.7)",
    accentSecondary080: "rgba(199, 185, 148, 0.8)",
    accentSecondary090: "rgba(199, 185, 148, 0.9)",
    accentSecondary100: "rgba(199, 185, 148, 1.0)",
    productWalletKit: "#FFB800",
    productAppKit: "#FF573B",
    productCloud: "#0988F0",
    productDocumentation: "#008847",
    neutrals050: "#F6F6F6",
    neutrals100: "#F3F3F3",
    neutrals200: "#E9E9E9",
    neutrals300: "#D0D0D0",
    neutrals400: "#BBB",
    neutrals500: "#9A9A9A",
    neutrals600: "#6C6C6C",
    neutrals700: "#4F4F4F",
    neutrals800: "#363636",
    neutrals900: "#2A2A2A",
    neutrals1000: "#252525",
    semanticSuccess010: "rgba(48, 164, 107, 0.1)",
    semanticSuccess020: "rgba(48, 164, 107, 0.2)",
    semanticSuccess030: "rgba(48, 164, 107, 0.3)",
    semanticSuccess040: "rgba(48, 164, 107, 0.4)",
    semanticSuccess050: "rgba(48, 164, 107, 0.5)",
    semanticSuccess060: "rgba(48, 164, 107, 0.6)",
    semanticSuccess070: "rgba(48, 164, 107, 0.7)",
    semanticSuccess080: "rgba(48, 164, 107, 0.8)",
    semanticSuccess090: "rgba(48, 164, 107, 0.9)",
    semanticSuccess100: "rgba(48, 164, 107, 1.0)",
    semanticError010: "rgba(223, 74, 52, 0.1)",
    semanticError020: "rgba(223, 74, 52, 0.2)",
    semanticError030: "rgba(223, 74, 52, 0.3)",
    semanticError040: "rgba(223, 74, 52, 0.4)",
    semanticError050: "rgba(223, 74, 52, 0.5)",
    semanticError060: "rgba(223, 74, 52, 0.6)",
    semanticError070: "rgba(223, 74, 52, 0.7)",
    semanticError080: "rgba(223, 74, 52, 0.8)",
    semanticError090: "rgba(223, 74, 52, 0.9)",
    semanticError100: "rgba(223, 74, 52, 1.0)",
    semanticWarning010: "rgba(243, 161, 63, 0.1)",
    semanticWarning020: "rgba(243, 161, 63, 0.2)",
    semanticWarning030: "rgba(243, 161, 63, 0.3)",
    semanticWarning040: "rgba(243, 161, 63, 0.4)",
    semanticWarning050: "rgba(243, 161, 63, 0.5)",
    semanticWarning060: "rgba(243, 161, 63, 0.6)",
    semanticWarning070: "rgba(243, 161, 63, 0.7)",
    semanticWarning080: "rgba(243, 161, 63, 0.8)",
    semanticWarning090: "rgba(243, 161, 63, 0.9)",
    semanticWarning100: "rgba(243, 161, 63, 1.0)"
  };
  ia = {
    core: {
      backgroundAccentPrimary: "#0988F0",
      backgroundAccentCertified: "#C7B994",
      backgroundWalletKit: "#FFB800",
      backgroundAppKit: "#FF573B",
      backgroundCloud: "#0988F0",
      backgroundDocumentation: "#008847",
      backgroundSuccess: "rgba(48, 164, 107, 0.20)",
      backgroundError: "rgba(223, 74, 52, 0.20)",
      backgroundWarning: "rgba(243, 161, 63, 0.20)",
      textAccentPrimary: "#0988F0",
      textAccentCertified: "#C7B994",
      textWalletKit: "#FFB800",
      textAppKit: "#FF573B",
      textCloud: "#0988F0",
      textDocumentation: "#008847",
      textSuccess: "#30A46B",
      textError: "#DF4A34",
      textWarning: "#F3A13F",
      borderAccentPrimary: "#0988F0",
      borderSecondary: "#C7B994",
      borderSuccess: "#30A46B",
      borderError: "#DF4A34",
      borderWarning: "#F3A13F",
      foregroundAccent010: "rgba(9, 136, 240, 0.1)",
      foregroundAccent020: "rgba(9, 136, 240, 0.2)",
      foregroundAccent040: "rgba(9, 136, 240, 0.4)",
      foregroundAccent060: "rgba(9, 136, 240, 0.6)",
      foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
      foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
      foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
      iconAccentPrimary: "#0988F0",
      iconAccentCertified: "#C7B994",
      iconSuccess: "#30A46B",
      iconError: "#DF4A34",
      iconWarning: "#F3A13F",
      glass010: "rgba(255, 255, 255, 0.1)",
      zIndex: "9999"
    },
    dark: {
      overlay: "rgba(0, 0, 0, 0.50)",
      backgroundPrimary: "#202020",
      backgroundInvert: "#FFFFFF",
      textPrimary: "#FFFFFF",
      textSecondary: "#9A9A9A",
      textTertiary: "#BBBBBB",
      textInvert: "#202020",
      borderPrimary: "#2A2A2A",
      borderPrimaryDark: "#363636",
      borderSecondary: "#4F4F4F",
      foregroundPrimary: "#252525",
      foregroundSecondary: "#2A2A2A",
      foregroundTertiary: "#363636",
      iconDefault: "#9A9A9A",
      iconInverse: "#FFFFFF"
    },
    light: {
      overlay: "rgba(230 , 230, 230, 0.5)",
      backgroundPrimary: "#FFFFFF",
      borderPrimaryDark: "#E9E9E9",
      backgroundInvert: "#202020",
      textPrimary: "#202020",
      textSecondary: "#9A9A9A",
      textTertiary: "#6C6C6C",
      textInvert: "#FFFFFF",
      borderPrimary: "#E9E9E9",
      borderSecondary: "#D0D0D0",
      foregroundPrimary: "#F3F3F3",
      foregroundSecondary: "#E9E9E9",
      foregroundTertiary: "#D0D0D0",
      iconDefault: "#9A9A9A",
      iconInverse: "#202020"
    }
  };
  ZT = {
    1: "4px",
    2: "8px",
    10: "10px",
    3: "12px",
    4: "16px",
    6: "24px",
    5: "20px",
    8: "32px",
    16: "64px",
    20: "80px",
    32: "128px",
    64: "256px",
    128: "512px",
    round: "9999px"
  };
  JT = {
    0: "0px",
    "01": "2px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    32: "128px",
    64: "256px"
  };
  XT = {
    regular: "KHTeka",
    mono: "KHTekaMono"
  };
  QT = {
    regular: "400",
    medium: "500"
  };
  eO = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px"
  };
  tO = {
    "h1-regular-mono": {
      lineHeight: "50px",
      letterSpacing: "-3px"
    },
    "h1-regular": {
      lineHeight: "50px",
      letterSpacing: "-1px"
    },
    "h1-medium": {
      lineHeight: "50px",
      letterSpacing: "-0.84px"
    },
    "h2-regular-mono": {
      lineHeight: "44px",
      letterSpacing: "-2.64px"
    },
    "h2-regular": {
      lineHeight: "44px",
      letterSpacing: "-0.88px"
    },
    "h2-medium": {
      lineHeight: "44px",
      letterSpacing: "-0.88px"
    },
    "h3-regular-mono": {
      lineHeight: "38px",
      letterSpacing: "-2.28px"
    },
    "h3-regular": {
      lineHeight: "38px",
      letterSpacing: "-0.76px"
    },
    "h3-medium": {
      lineHeight: "38px",
      letterSpacing: "-0.76px"
    },
    "h4-regular-mono": {
      lineHeight: "32px",
      letterSpacing: "-1.92px"
    },
    "h4-regular": {
      lineHeight: "32px",
      letterSpacing: "-0.32px"
    },
    "h4-medium": {
      lineHeight: "32px",
      letterSpacing: "-0.32px"
    },
    "h5-regular-mono": {
      lineHeight: "26px",
      letterSpacing: "-1.56px"
    },
    "h5-regular": {
      lineHeight: "26px",
      letterSpacing: "-0.26px"
    },
    "h5-medium": {
      lineHeight: "26px",
      letterSpacing: "-0.26px"
    },
    "h6-regular-mono": {
      lineHeight: "20px",
      letterSpacing: "-1.2px"
    },
    "h6-regular": {
      lineHeight: "20px",
      letterSpacing: "-0.6px"
    },
    "h6-medium": {
      lineHeight: "20px",
      letterSpacing: "-0.6px"
    },
    "lg-regular-mono": {
      lineHeight: "16px",
      letterSpacing: "-0.96px"
    },
    "lg-regular": {
      lineHeight: "18px",
      letterSpacing: "-0.16px"
    },
    "lg-medium": {
      lineHeight: "18px",
      letterSpacing: "-0.16px"
    },
    "md-regular-mono": {
      lineHeight: "14px",
      letterSpacing: "-0.84px"
    },
    "md-regular": {
      lineHeight: "16px",
      letterSpacing: "-0.14px"
    },
    "md-medium": {
      lineHeight: "16px",
      letterSpacing: "-0.14px"
    },
    "sm-regular-mono": {
      lineHeight: "12px",
      letterSpacing: "-0.72px"
    },
    "sm-regular": {
      lineHeight: "14px",
      letterSpacing: "-0.12px"
    },
    "sm-medium": {
      lineHeight: "14px",
      letterSpacing: "-0.12px"
    }
  };
  sO = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
  };
  nO = {
    xl: "400ms",
    lg: "200ms",
    md: "125ms",
    sm: "75ms"
  };
  vl = {
    colors: YT,
    fontFamily: XT,
    fontWeight: QT,
    textSize: eO,
    typography: tO,
    tokens: {
      core: ia.core,
      theme: ia.dark
    },
    borderRadius: ZT,
    spacing: JT,
    durations: nO,
    easings: sO
  };
  sf = "--apkt";
  js = {
    createCSSVariables(t) {
      const e = {}, s = {};
      function n(i, o, a = "") {
        for (const [c, l] of Object.entries(i)) {
          const d = a ? `${a}-${c}` : c;
          l && typeof l == "object" && Object.keys(l).length ? (o[c] = {}, n(l, o[c], d)) : typeof l == "string" && (o[c] = `${sf}-${d}`);
        }
      }
      function r(i, o) {
        for (const [a, c] of Object.entries(i)) c && typeof c == "object" ? (o[a] = {}, r(c, o[a])) : typeof c == "string" && (o[a] = `var(${c})`);
      }
      return n(t, e), r(e, s), {
        cssVariables: e,
        cssVariablesVarPrefix: s
      };
    },
    assignCSSVariables(t, e) {
      const s = {};
      function n(r, i, o) {
        for (const [a, c] of Object.entries(r)) {
          const l = o ? `${o}-${a}` : a, d = i[a];
          c && typeof c == "object" ? n(c, d, l) : typeof d == "string" && (s[`${sf}-${l}`] = d);
        }
      }
      return n(t, e), s;
    },
    createRootStyles(t, e) {
      const s = {
        ...vl,
        tokens: {
          ...vl.tokens,
          theme: t === "light" ? ia.light : ia.dark
        }
      }, { cssVariables: n } = js.createCSSVariables(s), r = js.assignCSSVariables(n, s), i = js.generateW3MVariables(e), o = js.generateW3MOverrides(e), a = js.generateScaledVariables(e), c = js.generateBaseVariables(r), l = {
        ...r,
        ...c,
        ...i,
        ...o,
        ...a
      }, d = js.applyColorMixToVariables(e, l), h = {
        ...l,
        ...d
      };
      return `:root {${Object.entries(h).map(([f, g]) => `${f}:${g.replace("/[:;{}</>]/g", "")};`).join("")}}`;
    },
    generateW3MVariables(t) {
      if (!t) return {};
      const e = {};
      return e["--w3m-font-family"] = t["--w3m-font-family"] || "KHTeka", e["--w3m-accent"] = t["--w3m-accent"] || "#0988F0", e["--w3m-color-mix"] = t["--w3m-color-mix"] || "#000", e["--w3m-color-mix-strength"] = `${t["--w3m-color-mix-strength"] || 0}%`, e["--w3m-font-size-master"] = t["--w3m-font-size-master"] || "10px", e["--w3m-border-radius-master"] = t["--w3m-border-radius-master"] || "4px", e;
    },
    generateW3MOverrides(t) {
      if (!t) return {};
      const e = {};
      if (t["--w3m-accent"]) {
        const s = t["--w3m-accent"];
        e["--apkt-tokens-core-iconAccentPrimary"] = s, e["--apkt-tokens-core-borderAccentPrimary"] = s, e["--apkt-tokens-core-textAccentPrimary"] = s, e["--apkt-tokens-core-backgroundAccentPrimary"] = s;
      }
      return t["--w3m-font-family"] && (e["--apkt-fontFamily-regular"] = t["--w3m-font-family"]), t["--w3m-z-index"] && (e["--apkt-tokens-core-zIndex"] = `${t["--w3m-z-index"]}`), e;
    },
    generateScaledVariables(t) {
      if (!t) return {};
      const e = {};
      if (t["--w3m-font-size-master"]) {
        const s = parseFloat(t["--w3m-font-size-master"].replace("px", ""));
        e["--apkt-textSize-h1"] = `${Number(s) * 5}px`, e["--apkt-textSize-h2"] = `${Number(s) * 4.4}px`, e["--apkt-textSize-h3"] = `${Number(s) * 3.8}px`, e["--apkt-textSize-h4"] = `${Number(s) * 3.2}px`, e["--apkt-textSize-h5"] = `${Number(s) * 2.6}px`, e["--apkt-textSize-h6"] = `${Number(s) * 2}px`, e["--apkt-textSize-large"] = `${Number(s) * 1.6}px`, e["--apkt-textSize-medium"] = `${Number(s) * 1.4}px`, e["--apkt-textSize-small"] = `${Number(s) * 1.2}px`;
      }
      if (t["--w3m-border-radius-master"]) {
        const s = parseFloat(t["--w3m-border-radius-master"].replace("px", ""));
        e["--apkt-borderRadius-1"] = `${Number(s)}px`, e["--apkt-borderRadius-2"] = `${Number(s) * 2}px`, e["--apkt-borderRadius-3"] = `${Number(s) * 3}px`, e["--apkt-borderRadius-4"] = `${Number(s) * 4}px`, e["--apkt-borderRadius-5"] = `${Number(s) * 5}px`, e["--apkt-borderRadius-6"] = `${Number(s) * 6}px`, e["--apkt-borderRadius-8"] = `${Number(s) * 8}px`, e["--apkt-borderRadius-16"] = `${Number(s) * 16}px`, e["--apkt-borderRadius-20"] = `${Number(s) * 20}px`, e["--apkt-borderRadius-32"] = `${Number(s) * 32}px`, e["--apkt-borderRadius-64"] = `${Number(s) * 64}px`, e["--apkt-borderRadius-128"] = `${Number(s) * 128}px`;
      }
      return e;
    },
    generateColorMixCSS(t, e) {
      if (!(t == null ? void 0 : t["--w3m-color-mix"]) || !t["--w3m-color-mix-strength"]) return "";
      const s = t["--w3m-color-mix"], n = t["--w3m-color-mix-strength"];
      if (!n || n === 0) return "";
      const r = Object.keys(e || {}).filter((o) => {
        const a = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon"), c = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
        return a && !c;
      });
      return r.length === 0 ? "" : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${r.map((o) => {
        const a = (e == null ? void 0 : e[o]) || "";
        return a.includes("color-mix") || a.startsWith("#") || a.startsWith("rgb") ? `${o}: color-mix(in srgb, ${s} ${n}%, ${a});` : `${o}: color-mix(in srgb, ${s} ${n}%, var(${o}-base, ${a}));`;
      }).join("")}
      }
    }`;
    },
    generateBaseVariables(t) {
      const e = {}, s = t["--apkt-tokens-theme-backgroundPrimary"];
      s && (e["--apkt-tokens-theme-backgroundPrimary-base"] = s);
      const n = t["--apkt-tokens-core-backgroundAccentPrimary"];
      return n && (e["--apkt-tokens-core-backgroundAccentPrimary-base"] = n), e;
    },
    applyColorMixToVariables(t, e) {
      const s = {};
      if ((e == null ? void 0 : e["--apkt-tokens-theme-backgroundPrimary"]) && (s["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)"), (e == null ? void 0 : e["--apkt-tokens-core-backgroundAccentPrimary"]) && (s["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)"), !(t == null ? void 0 : t["--w3m-color-mix"]) || !t["--w3m-color-mix-strength"]) return s;
      const n = t["--w3m-color-mix"], r = t["--w3m-color-mix-strength"];
      if (!r || r === 0) return s;
      const i = Object.keys(e || {}).filter((o) => {
        const a = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon") || o.includes("-tokens-theme-overlay"), c = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
        return a && !c;
      });
      return i.length === 0 || i.forEach((o) => {
        const a = (e == null ? void 0 : e[o]) || "";
        o.endsWith("-base") || (o === "--apkt-tokens-theme-backgroundPrimary" || o === "--apkt-tokens-core-backgroundAccentPrimary" ? s[o] = `color-mix(in srgb, ${n} ${r}%, var(${o}-base))` : a.includes("color-mix") || a.startsWith("#") || a.startsWith("rgb") ? s[o] = `color-mix(in srgb, ${n} ${r}%, ${a})` : s[o] = `color-mix(in srgb, ${n} ${r}%, var(${o}-base, ${a}))`);
      }), s;
    }
  };
  ({ cssVariablesVarPrefix: rO } = js.createCSSVariables(vl));
  pk = function(t, ...e) {
    return Sn(t, ...e.map((s) => ls(typeof s == "function" ? s(rO) : s)));
  };
  let Gn, rr, Ss, us, oa;
  const Fs = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
  };
  function aa(t, e = "dark") {
    Gn && document.head.removeChild(Gn), Gn = document.createElement("style"), Gn.textContent = js.createRootStyles(e, t), document.head.appendChild(Gn);
  }
  gk = function(t, e = "dark") {
    if (oa = t, rr = document.createElement("style"), Ss = document.createElement("style"), us = document.createElement("style"), rr.textContent = qr(t).core.cssText, Ss.textContent = qr(t).dark.cssText, us.textContent = qr(t).light.cssText, document.head.appendChild(rr), document.head.appendChild(Ss), document.head.appendChild(us), aa(t, e), Cl(e), !(t == null ? void 0 : t["--w3m-font-family"])) for (const [s, n] of Object.entries(Fs)) {
      const r = document.createElement("link");
      r.rel = "preload", r.href = n, r.as = "font", r.type = s.includes("woff2") ? "font/woff2" : "font/woff", r.crossOrigin = "anonymous", document.head.appendChild(r);
    }
    Cl(e);
  };
  function Cl(t = "dark") {
    Ss && us && Gn && (t === "light" ? (aa(oa, t), Ss.removeAttribute("media"), us.media = "enabled") : (aa(oa, t), us.removeAttribute("media"), Ss.media = "enabled"));
  }
  function iO(t) {
    var _a2, _b3, _c2;
    if (oa = t, rr && Ss && us && (rr.textContent = qr(t).core.cssText, Ss.textContent = qr(t).dark.cssText, us.textContent = qr(t).light.cssText, t == null ? void 0 : t["--w3m-font-family"])) {
      const e = t["--w3m-font-family"];
      rr.textContent = (_a2 = rr.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${e}`), Ss.textContent = (_b3 = Ss.textContent) == null ? void 0 : _b3.replace("font-family: KHTeka", `font-family: ${e}`), us.textContent = (_c2 = us.textContent) == null ? void 0 : _c2.replace("font-family: KHTeka", `font-family: ${e}`);
    }
    if (Gn) {
      const e = (us == null ? void 0 : us.media) === "enabled" ? "light" : "dark";
      aa(t, e);
    }
  }
  function qr(t) {
    const e = !!(t == null ? void 0 : t["--w3m-font-family"]);
    return {
      core: Sn`
      ${e ? Sn`` : Sn`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ls(Fs["KHTeka-400-woff2"])}) format('woff2'),
                url(${ls(Fs["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ls(Fs["KHTeka-300-woff2"])}) format('woff2'),
                url(${ls(Fs["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${ls(Fs["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${ls(Fs["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ls(Fs["KHTeka-400-woff2"])}) format('woff2'),
                url(${ls(Fs["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
      dark: Sn`
      :root {
      }
    `,
      light: Sn`
      :root {
      }
    `
    };
  }
  mk = Sn`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
  wk = Sn`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
  function oO(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), h = d.charCodeAt(0);
      if (e[h] !== 255) throw new TypeError(d + " is ambiguous");
      e[h] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, h = 0, u = 0;
      const f = l.length;
      for (; u !== f && l[u] === 0; ) u++, d++;
      const g = (f - u) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; u !== f; ) {
        let I = l[u], N = 0;
        for (let $ = g - 1; (I !== 0 || N < h) && $ !== -1; $--, N++) I += 256 * p[$] >>> 0, p[$] = I % s >>> 0, I = I / s >>> 0;
        if (I !== 0) throw new Error("Non-zero carry");
        h = N, u++;
      }
      let w = g - h;
      for (; w !== g && p[w] === 0; ) w++;
      let T = n.repeat(d);
      for (; w < g; ++w) T += t.charAt(p[w]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, h = 0, u = 0;
      for (; l[d] === n; ) h++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const I = l.charCodeAt(d);
        if (I > 255) return;
        let N = e[I];
        if (N === 255) return;
        let $ = 0;
        for (let U = f - 1; (N !== 0 || $ < u) && U !== -1; U--, $++) N += s * g[U] >>> 0, g[U] = N % 256 >>> 0, N = N / 256 >>> 0;
        if (N !== 0) throw new Error("Non-zero carry");
        u = $, d++;
      }
      let p = f - u;
      for (; p !== f && g[p] === 0; ) p++;
      const w = new Uint8Array(h + (f - p));
      let T = h;
      for (; p !== f; ) w[T++] = g[p++];
      return w;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var aO = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const cO = oO(aO), To = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603
  };
  class lO extends yT {
    async setUniversalProvider(e) {
      if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
      return this.addConnector(new bT({
        provider: e,
        caipNetworks: this.getCaipNetworks(),
        namespace: this.namespace
      })), Promise.resolve();
    }
    async connect(e) {
      return Promise.resolve({
        id: "WALLET_CONNECT",
        type: "WALLET_CONNECT",
        chainId: Number(e.chainId),
        provider: this.provider,
        address: ""
      });
    }
    async disconnect() {
      try {
        await this.getWalletConnectConnector().disconnect(), this.emit("disconnect");
      } catch (e) {
        console.warn("UniversalAdapter:disconnect - error", e);
      }
      return {
        connections: []
      };
    }
    syncConnections() {
      return Promise.resolve();
    }
    async getAccounts({ namespace: e }) {
      var _a2, _b3, _c2, _d2, _e2;
      const n = ((_e2 = (_d2 = (_c2 = (_b3 = (_a2 = this.provider) == null ? void 0 : _a2.session) == null ? void 0 : _b3.namespaces) == null ? void 0 : _c2[e]) == null ? void 0 : _d2.accounts) == null ? void 0 : _e2.map((r) => {
        const [, , i] = r.split(":");
        return i;
      }).filter((r, i, o) => o.indexOf(r) === i)) || [];
      return Promise.resolve({
        accounts: n.map((r) => se.createAccount(e, r, e === "bip122" ? "payment" : "eoa"))
      });
    }
    async syncConnectors() {
      return Promise.resolve();
    }
    async getBalance(e) {
      var _a2, _b3, _c2, _d2, _e2;
      if (!(e.caipNetwork && be.BALANCE_SUPPORTED_CHAINS.includes((_a2 = e.caipNetwork) == null ? void 0 : _a2.chainNamespace)) || ((_b3 = e.caipNetwork) == null ? void 0 : _b3.testnet)) return {
        balance: "0.00",
        symbol: ((_c2 = e.caipNetwork) == null ? void 0 : _c2.nativeCurrency.symbol) || ""
      };
      const n = y.getAccountData();
      if ((n == null ? void 0 : n.balanceLoading) && e.chainId === ((_d2 = y.state.activeCaipNetwork) == null ? void 0 : _d2.id)) return {
        balance: (n == null ? void 0 : n.balance) || "0.00",
        symbol: (n == null ? void 0 : n.balanceSymbol) || ""
      };
      const i = (await y.fetchTokenBalance()).find((o) => {
        var _a3, _b4;
        return o.chainId === `${(_a3 = e.caipNetwork) == null ? void 0 : _a3.chainNamespace}:${e.chainId}` && o.symbol === ((_b4 = e.caipNetwork) == null ? void 0 : _b4.nativeCurrency.symbol);
      });
      return {
        balance: (i == null ? void 0 : i.quantity.numeric) || "0.00",
        symbol: (i == null ? void 0 : i.symbol) || ((_e2 = e.caipNetwork) == null ? void 0 : _e2.nativeCurrency.symbol) || ""
      };
    }
    async signMessage(e) {
      var _a2, _b3, _c2;
      const { provider: s, message: n, address: r } = e;
      if (!s) throw new Error("UniversalAdapter:signMessage - provider is undefined");
      let i = "";
      return ((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) === W.CHAIN.SOLANA ? i = (await s.request({
        method: "solana_signMessage",
        params: {
          message: cO.encode(new TextEncoder().encode(n)),
          pubkey: r
        }
      }, (_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.caipNetworkId)).signature : i = await s.request({
        method: "personal_sign",
        params: [
          n,
          r
        ]
      }, (_c2 = y.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId), {
        signature: i
      };
    }
    async estimateGas() {
      return Promise.resolve({
        gas: BigInt(0)
      });
    }
    async sendTransaction() {
      return Promise.resolve({
        hash: ""
      });
    }
    walletGetAssets(e) {
      return Promise.resolve({});
    }
    async writeContract() {
      return Promise.resolve({
        hash: ""
      });
    }
    emitFirstAvailableConnection() {
    }
    parseUnits() {
      return 0n;
    }
    formatUnits() {
      return "0";
    }
    async getCapabilities() {
      return Promise.resolve({});
    }
    async grantPermissions() {
      return Promise.resolve({});
    }
    async revokePermissions() {
      return Promise.resolve("0x");
    }
    async syncConnection() {
      return Promise.resolve({
        id: "WALLET_CONNECT",
        type: "WALLET_CONNECT",
        chainId: 1,
        provider: this.provider,
        address: ""
      });
    }
    async switchNetwork(e) {
      var _a2, _b3, _c2, _d2, _e2, _f2;
      const { caipNetwork: s } = e, n = this.getWalletConnectConnector();
      if (s.chainNamespace === W.CHAIN.EVM) try {
        await ((_a2 = n.provider) == null ? void 0 : _a2.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: ud(s.id)
            }
          ]
        }));
      } catch (r) {
        if (r.code === To.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === To.ERROR_INVALID_CHAIN_ID || r.code === To.ERROR_CODE_DEFAULT || ((_c2 = (_b3 = r == null ? void 0 : r.data) == null ? void 0 : _b3.originalError) == null ? void 0 : _c2.code) === To.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f2 = n.provider) == null ? void 0 : _f2.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: ud(s.id),
                rpcUrls: [
                  (_d2 = s == null ? void 0 : s.rpcUrls.chainDefault) == null ? void 0 : _d2.http
                ],
                chainName: s.name,
                nativeCurrency: s.nativeCurrency,
                blockExplorerUrls: [
                  (_e2 = s.blockExplorers) == null ? void 0 : _e2.default.url
                ]
              }
            ]
          }));
        } catch {
          throw new Error("Chain is not supported");
        }
      }
      n.provider.setDefaultChain(s.caipNetworkId);
    }
    getWalletConnectProvider() {
      var _a2;
      return (_a2 = this.connectors.find((n) => n.type === "WALLET_CONNECT")) == null ? void 0 : _a2.provider;
    }
  }
  const dO = [
    "email",
    "socials",
    "swaps",
    "onramp",
    "activity",
    "reownBranding",
    "multiWallet",
    "emailCapture",
    "payWithExchange",
    "payments",
    "reownAuthentication"
  ], Oo = {
    email: {
      apiFeatureName: "social_login",
      localFeatureName: "email",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return !!t.isEnabled && e.includes("email");
      },
      processFallback: (t) => t === void 0 ? be.DEFAULT_REMOTE_FEATURES.email : !!t
    },
    socials: {
      apiFeatureName: "social_login",
      localFeatureName: "socials",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return t.isEnabled && e.length > 0 ? e.filter((s) => s !== "email") : false;
      },
      processFallback: (t) => t === void 0 ? be.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? be.DEFAULT_REMOTE_FEATURES.socials : false : t
    },
    swaps: {
      apiFeatureName: "swap",
      localFeatureName: "swaps",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return t.isEnabled && e.length > 0 ? e : false;
      },
      processFallback: (t) => t === void 0 ? be.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? be.DEFAULT_REMOTE_FEATURES.swaps : false : t
    },
    onramp: {
      apiFeatureName: "onramp",
      localFeatureName: "onramp",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return t.isEnabled && e.length > 0 ? e : false;
      },
      processFallback: (t) => t === void 0 ? be.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? be.DEFAULT_REMOTE_FEATURES.onramp : false : t
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: false,
      isLegacy: true,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? be.DEFAULT_REMOTE_FEATURES.activity : !!t
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? be.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
    },
    emailCapture: {
      apiFeatureName: "email_capture",
      localFeatureName: "emailCapture",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => t.isEnabled && (t.config ?? []),
      processFallback: (t) => false
    },
    multiWallet: {
      apiFeatureName: "multi_wallet",
      localFeatureName: "multiWallet",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => be.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => be.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => be.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => typeof t > "u" ? be.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!t
    }
  }, hO = {
    localSettingsOverridden: /* @__PURE__ */ new Set(),
    getApiConfig(t, e) {
      return e == null ? void 0 : e.find((s) => s.id === t);
    },
    addWarning(t, e) {
      if (t !== void 0) {
        const s = Oo[e], n = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
        this.localSettingsOverridden.add(n);
      }
    },
    processFeature(t, e, s, n, r) {
      const i = Oo[t], o = e[i.localFeatureName];
      if (r && !i.isAvailableOnBasic) return false;
      if (n) {
        const a = this.getApiConfig(i.apiFeatureName, s);
        return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : (a == null ? void 0 : a.config) ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : false;
      }
      return this.processFallbackFeature(t, o);
    },
    processApiFeature(t, e) {
      return Oo[t].processApi(e);
    },
    processFallbackFeature(t, e) {
      return Oo[t].processFallback(e);
    },
    async fetchRemoteFeatures(t) {
      const e = t.basic ?? false, s = t.features || {};
      this.localSettingsOverridden.clear();
      let n = null, r = false;
      try {
        n = await re.fetchProjectConfig(), r = n != null;
      } catch (o) {
        console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
      }
      const i = r && !e ? be.DEFAULT_REMOTE_FEATURES : be.DEFAULT_REMOTE_FEATURES_DISABLED;
      try {
        for (const o of dO) {
          const a = this.processFeature(o, s, n, r, e);
          Object.assign(i, {
            [o]: a
          });
        }
      } catch (o) {
        return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), be.DEFAULT_REMOTE_FEATURES;
      }
      if (r && this.localSettingsOverridden.size > 0) {
        const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
        Ut.open({
          debugMessage: zt.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
        }, "warning");
      }
      return i;
    }
  };
  class uO {
    constructor(e) {
      this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (s, n) => {
        var _a2, _b3, _c2;
        if (s) {
          const r = (_a2 = y.getCaipNetworks(s)) == null ? void 0 : _a2.find((a) => a.id === n);
          if (r) return r;
          const i = (_b3 = y.getNetworkData(s)) == null ? void 0 : _b3.caipNetwork;
          return i || ((_c2 = y.getRequestedCaipNetworks(s).filter((a) => a.chainNamespace === s)) == null ? void 0 : _c2[0]);
        }
        return y.state.activeCaipNetwork || this.defaultCaipNetwork;
      }, this.getCaipNetworkId = () => {
        const s = this.getCaipNetwork();
        if (s) return s.id;
      }, this.getCaipNetworks = (s) => y.getCaipNetworks(s), this.getActiveChainNamespace = () => y.state.activeChain, this.setRequestedCaipNetworks = (s, n) => {
        y.setRequestedCaipNetworks(s, n);
      }, this.getApprovedCaipNetworkIds = () => y.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (s) => {
        var _a2, _b3;
        return y.state.activeChain === s || !s ? y.state.activeCaipAddress : (_b3 = (_a2 = y.state.chains.get(s)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b3.caipAddress;
      }, this.setClientId = (s) => {
        he.setClientId(s);
      }, this.getProvider = (s) => Be.getProvider(s), this.getProviderType = (s) => Be.getProviderId(s), this.getPreferredAccountType = (s) => Jt(s), this.setCaipAddress = (s, n, r = false) => {
        y.setAccountProp("caipAddress", s, n, r), y.setAccountProp("address", se.getPlainAddress(s), n, r);
      }, this.setBalance = (s, n, r) => {
        y.setAccountProp("balance", s, r), y.setAccountProp("balanceSymbol", n, r);
      }, this.setProfileName = (s, n) => {
        y.setAccountProp("profileName", s, n);
      }, this.setProfileImage = (s, n) => {
        y.setAccountProp("profileImage", s, n);
      }, this.setUser = (s, n) => {
        y.setAccountProp("user", s, n);
      }, this.resetAccount = (s) => {
        y.resetAccount(s);
      }, this.setCaipNetwork = (s) => {
        y.setActiveCaipNetwork(s);
      }, this.setCaipNetworkOfNamespace = (s, n) => {
        y.setChainNetworkData(n, {
          caipNetwork: s
        });
      }, this.setStatus = (s, n) => {
        y.setAccountProp("status", s, n), K.isConnected() ? q.setConnectionStatus("connected") : q.setConnectionStatus("disconnected");
      }, this.getAddressByChainNamespace = (s) => {
        var _a2;
        return (_a2 = y.getAccountData(s)) == null ? void 0 : _a2.address;
      }, this.setConnectors = (s) => {
        const n = [
          ...K.state.allConnectors,
          ...s
        ];
        K.setConnectors(n);
      }, this.setConnections = (s, n) => {
        q.setConnections(s, n), Z.setConnections(s, n);
      }, this.fetchIdentity = (s) => he.fetchIdentity(s), this.getReownName = (s) => ki.getNamesForAddress(s), this.getConnectors = () => K.getConnectors(), this.getConnectorImage = (s) => wf.getConnectorImage(s), this.getConnections = (s) => this.remoteFeatures.multiWallet ? qo.getConnectionsData(s).connections : (Ut.open(W.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (s) => this.remoteFeatures.multiWallet ? qo.getConnectionsData(s).recentConnections : (Ut.open(W.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (s) => {
        if (!this.remoteFeatures.multiWallet) {
          Ut.open(W.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        await Z.switchConnection(s);
      }, this.deleteConnection = (s) => {
        if (!this.remoteFeatures.multiWallet) {
          Ut.open(W.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        q.deleteAddressFromConnection(s), Z.syncStorageConnections();
      }, this.setConnectedWalletInfo = (s, n) => {
        const r = Be.getProviderId(n), i = s ? {
          ...s,
          type: r
        } : void 0;
        y.setAccountProp("connectedWalletInfo", i, n);
      }, this.getIsConnectedState = () => !!y.state.activeCaipAddress, this.addAddressLabel = (s, n, r) => {
        var _a2;
        const i = ((_a2 = y.getAccountData(r)) == null ? void 0 : _a2.addressLabels) || {};
        y.setAccountProp("addressLabels", {
          ...i,
          [s]: n
        }, r);
      }, this.removeAddressLabel = (s, n) => {
        var _a2;
        const r = ((_a2 = y.getAccountData(n)) == null ? void 0 : _a2.addressLabels) || {};
        y.setAccountProp("addressLabels", {
          ...r,
          [s]: void 0
        }, n);
      }, this.getAddress = (s) => {
        var _a2;
        const n = s || y.state.activeChain;
        return (_a2 = y.getAccountData(n)) == null ? void 0 : _a2.address;
      }, this.resetNetwork = (s) => {
        y.resetNetwork(s);
      }, this.addConnector = (s) => {
        K.addConnector(s);
      }, this.resetWcConnection = () => {
        Z.resetWcConnection();
      }, this.setAddressExplorerUrl = (s, n) => {
        y.setAccountProp("addressExplorerUrl", s, n);
      }, this.setSmartAccountDeployed = (s, n) => {
        y.setAccountProp("smartAccountDeployed", s, n);
      }, this.setPreferredAccountType = (s, n) => {
        y.setAccountProp("preferredAccountType", s, n);
      }, this.setEIP6963Enabled = (s) => {
        D.setEIP6963Enabled(s);
      }, this.handleUnsafeRPCRequest = () => {
        if (this.isOpen()) {
          if (this.isTransactionStackEmpty()) return;
          this.redirect("ApproveTransaction");
        } else this.open({
          view: "ApproveTransaction"
        });
      }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.readyPromise = this.initialize(e);
    }
    getChainNamespacesSet(e, s) {
      const n = e == null ? void 0 : e.map((i) => i.namespace).filter((i) => !!i);
      if (n == null ? void 0 : n.length) return [
        ...new Set(n)
      ];
      const r = s == null ? void 0 : s.map((i) => i.chainNamespace);
      return [
        ...new Set(r)
      ];
    }
    async initialize(e) {
      var _a2, _b3, _c2, _d2, _e2;
      if (this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), D.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), this.remoteFeatures = await hO.fetchRemoteFeatures(e), await re.fetchUsage(), D.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && Pc.setOnrampProviders(this.remoteFeatures.onramp), (((_a2 = D.state.remoteFeatures) == null ? void 0 : _a2.email) || Array.isArray((_b3 = D.state.remoteFeatures) == null ? void 0 : _b3.socials) && ((_c2 = D.state.remoteFeatures) == null ? void 0 : _c2.socials.length) > 0) && await this.checkAllowedOrigins(), ((_d2 = D.state.features) == null ? void 0 : _d2.reownAuthentication) || ((_e2 = D.state.remoteFeatures) == null ? void 0 : _e2.reownAuthentication)) {
        const { ReownAuthentication: s } = await Mo(async () => {
          const { ReownAuthentication: r } = await import("./features-BsqgqJ7F.js");
          return {
            ReownAuthentication: r
          };
        }, __vite__mapDeps([4,1,2])), n = D.state.siwx;
        n instanceof s || (n && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), D.setSIWX(new s()));
      }
    }
    async openSend(e) {
      var _a2;
      const s = e.namespace || y.state.activeChain, n = this.getCaipAddress(s), r = (_a2 = this.getCaipNetwork(s)) == null ? void 0 : _a2.id;
      if (!n) throw new Error("openSend: caipAddress not found");
      if ((r == null ? void 0 : r.toString()) !== e.chainId.toString()) {
        const i = y.getCaipNetworkById(e.chainId, s);
        if (!i) throw new Error(`openSend: caipNetwork with chainId ${e.chainId} not found`);
        await this.switchNetwork(i, {
          throwOnFailure: true
        });
      }
      try {
        const i = tm.getTokenSymbolByAddress(e.assetAddress);
        i && await re.fetchTokenImages([
          i
        ]);
      } catch {
      }
      return await ge.open({
        view: "WalletSend",
        data: {
          send: e
        }
      }), new Promise((i, o) => {
        const a = fe.subscribeKey("hash", (d) => {
          d && (l(), i({
            hash: d
          }));
        }), c = ge.subscribe((d) => {
          d.open || (l(), o(new Error("Modal closed")));
        }), l = this.createCleanupHandler([
          a,
          c
        ]);
      });
    }
    toModalOptions() {
      function e(n) {
        return (n == null ? void 0 : n.view) === "Swap";
      }
      function s(n) {
        return (n == null ? void 0 : n.view) === "WalletSend";
      }
      return {
        isSwap: e,
        isSend: s
      };
    }
    async checkAllowedOrigins() {
      try {
        const e = await re.fetchAllowedOrigins();
        if (!se.isClient()) return;
        const s = window.location.origin;
        xn.isOriginAllowed(s, e, W.DEFAULT_ALLOWED_ANCESTORS) || Ut.open(zt.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (e) {
        if (!(e instanceof Error)) return;
        switch (e.message) {
          case "RATE_LIMITED":
            Ut.open(zt.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            const s = e.cause instanceof Error ? e.cause : e;
            Ut.open({
              displayMessage: zt.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
              debugMessage: zt.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(s.message)
            }, "error");
            break;
          }
        }
      }
    }
    createCleanupHandler(e) {
      return () => {
        e.forEach((s) => {
          try {
            s();
          } catch {
          }
        });
      };
    }
    sendInitializeEvent(e) {
      var _a2;
      const { ...s } = e;
      delete s.adapters, delete s.universalProvider, pe.sendEvent({
        type: "track",
        event: "INITIALIZE",
        properties: {
          ...s,
          networks: e.networks.map((n) => n.id),
          siweConfig: {
            options: ((_a2 = e.siweConfig) == null ? void 0 : _a2.options) || {}
          }
        }
      });
    }
    initControllers(e) {
      this.initializeOptionsController(e), this.initializeChainController(e), this.initializeThemeController(e), this.initializeConnectionController(e), this.initializeConnectorController();
    }
    initAdapterController() {
      Ef.initialize(this.chainAdapters);
    }
    initializeThemeController(e) {
      e.themeMode && Lt.setThemeMode(e.themeMode), e.themeVariables && Lt.setThemeVariables(e.themeVariables);
    }
    initializeChainController(e) {
      if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
      y.initialize(e.adapters ?? [], this.caipNetworks, {
        connectionControllerClient: this.connectionControllerClient
      });
      const s = this.getDefaultNetwork();
      s && y.setActiveCaipNetwork(s);
    }
    initializeConnectionController(e) {
      Z.initialize(e.adapters ?? []), Z.setWcBasic(e.basic ?? false);
    }
    initializeConnectorController() {
      K.initialize(this.chainNamespaces);
    }
    initializeProjectSettings(e) {
      D.setProjectId(e.projectId), D.setSdkVersion(e.sdkVersion);
    }
    initializeOptionsController(e) {
      var _a2;
      D.setDebug(e.debug !== false), D.setEnableWalletGuide(e.enableWalletGuide !== false), D.setEnableWallets(e.enableWallets !== false), D.setEIP6963Enabled(e.enableEIP6963 !== false), D.setEnableNetworkSwitch(e.enableNetworkSwitch !== false), D.setEnableReconnect(e.enableReconnect !== false), D.setEnableMobileFullScreen(e.enableMobileFullScreen === true), D.setCoinbasePreference(e.coinbasePreference), D.setEnableAuthLogger(e.enableAuthLogger !== false), D.setCustomRpcUrls(e.customRpcUrls), D.setEnableEmbedded(e.enableEmbedded), D.setAllWallets(e.allWallets), D.setIncludeWalletIds(e.includeWalletIds), D.setExcludeWalletIds(e.excludeWalletIds), D.setFeaturedWalletIds(e.featuredWalletIds), D.setTokens(e.tokens), D.setTermsConditionsUrl(e.termsConditionsUrl), D.setPrivacyPolicyUrl(e.privacyPolicyUrl), D.setCustomWallets(e.customWallets), D.setFeatures(e.features), D.setAllowUnsupportedChain(e.allowUnsupportedChain), D.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), D.setPreferUniversalLinks(e.experimental_preferUniversalLinks), D.setDefaultAccountTypes(e.defaultAccountTypes);
      const s = this.getDefaultMetaData();
      if (!e.metadata && s && (e.metadata = s), D.setMetadata(e.metadata), D.setDisableAppend(e.disableAppend), D.setEnableEmbedded(e.enableEmbedded), D.setSIWX(e.siwx), this.features = D.state.features ?? {}, !e.projectId) {
        Ut.open(zt.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        return;
      }
      if (((_a2 = e.adapters) == null ? void 0 : _a2.find((r) => r.namespace === W.CHAIN.EVM)) && e.siweConfig) {
        if (e.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
        D.setSIWX(e.siweConfig.mapToSIWX());
      }
    }
    getDefaultMetaData() {
      var _a2, _b3, _c2, _d2;
      return se.isClient() ? {
        name: ((_b3 = (_a2 = document.getElementsByTagName("title")) == null ? void 0 : _a2[0]) == null ? void 0 : _b3.textContent) || "",
        description: ((_c2 = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c2.content) || "",
        url: window.location.origin,
        icons: [
          ((_d2 = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d2.href) || ""
        ]
      } : null;
    }
    setUnsupportedNetwork(e) {
      const s = this.getActiveChainNamespace();
      if (s) {
        const n = Tr.getUnsupportedNetwork(`${s}:${e}`);
        y.setActiveCaipNetwork(n);
      }
    }
    getDefaultNetwork() {
      return Tr.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(e, s) {
      return Tr.extendCaipNetwork(e, {
        customNetworkImageUrls: s.chainImages,
        projectId: s.projectId
      });
    }
    extendCaipNetworks(e) {
      return Tr.extendCaipNetworks(e.networks, {
        customNetworkImageUrls: e.chainImages,
        customRpcUrls: e.customRpcUrls,
        projectId: e.projectId
      });
    }
    extendDefaultCaipNetwork(e) {
      const s = e.networks.find((r) => {
        var _a2;
        return r.id === ((_a2 = e.defaultNetwork) == null ? void 0 : _a2.id);
      });
      return s ? Tr.extendCaipNetwork(s, {
        customNetworkImageUrls: e.chainImages,
        customRpcUrls: e.customRpcUrls,
        projectId: e.projectId
      }) : void 0;
    }
    async disconnectConnector(e, s) {
      var _a2, _b3;
      try {
        this.setLoading(true, e);
        let n = {
          connections: []
        };
        const r = this.getAdapter(e);
        return (((_b3 = (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b3.caipAddress) || !D.state.enableReconnect) && (r == null ? void 0 : r.disconnect) && (n = await r.disconnect({
          id: s
        })), this.setLoading(false, e), n;
      } catch (n) {
        throw this.setLoading(false, e), new Error(`Failed to disconnect chains: ${n.message}`);
      }
    }
    createClients() {
      this.connectionControllerClient = {
        connectWalletConnect: async () => {
          var _a2;
          const e = y.state.activeChain, s = this.getAdapter(e), n = (_a2 = this.getCaipNetwork(e)) == null ? void 0 : _a2.id, r = Z.getConnections(e), i = this.remoteFeatures.multiWallet, o = r.length > 0;
          if (!s) throw new Error("Adapter not found");
          const a = await s.connectWalletConnect(n);
          (!o || !i) && this.close(), this.setClientId((a == null ? void 0 : a.clientId) || null), q.setConnectedNamespaces([
            ...y.state.chains.keys()
          ]), await this.syncWalletConnectAccount(), await ds.initializeIfEnabled();
        },
        connectExternal: async (e) => {
          const s = await this.onConnectExternal(e);
          return await this.connectInactiveNamespaces(e, s), s ? {
            address: s.address
          } : void 0;
        },
        reconnectExternal: async ({ id: e, info: s, type: n, provider: r }) => {
          var _a2;
          const i = y.state.activeChain, o = this.getAdapter(i);
          if (!i) throw new Error("reconnectExternal: namespace not found");
          if (!o) throw new Error("reconnectExternal: adapter not found");
          (o == null ? void 0 : o.reconnect) && (await (o == null ? void 0 : o.reconnect({
            id: e,
            info: s,
            type: n,
            provider: r,
            chainId: (_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id
          })), q.addConnectedNamespace(i), this.syncConnectedWalletInfo(i));
        },
        disconnectConnector: async (e) => {
          await this.disconnectConnector(e.namespace, e.id);
        },
        disconnect: async (e) => {
          var _a2;
          const { id: s, chainNamespace: n, initialDisconnect: r } = e || {}, i = n || y.state.activeChain, o = K.getConnectorId(i), a = s === W.CONNECTOR_ID.AUTH || o === W.CONNECTOR_ID.AUTH, c = s === W.CONNECTOR_ID.WALLET_CONNECT || o === W.CONNECTOR_ID.WALLET_CONNECT;
          try {
            const l = Array.from(y.state.chains.keys());
            let d = n ? [
              n
            ] : l;
            (c || a) && (d = l);
            const h = d.map(async (g) => {
              const p = K.getConnectorId(g), w = s || p, T = await this.disconnectConnector(g, w);
              T && (a && q.deleteConnectedSocialProvider(), T.connections.forEach((I) => {
                q.addDisconnectedConnectorId(I.connectorId, g);
              })), r && this.onDisconnectNamespace({
                chainNamespace: g,
                closeModal: false
              });
            }), u = await Promise.allSettled(h);
            fe.resetSend(), Z.resetWcConnection(), ((_a2 = ds.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) && await ds.clearSessions(), K.setFilterByNamespace(void 0), Z.syncStorageConnections();
            const f = u.filter((g) => g.status === "rejected");
            if (f.length > 0) throw new Error(f.map((g) => g.reason.message).join(", "));
            pe.sendEvent({
              type: "track",
              event: "DISCONNECT_SUCCESS",
              properties: {
                namespace: n || "all"
              }
            });
          } catch (l) {
            throw new Error(`Failed to disconnect chains: ${l.message}`);
          }
        },
        checkInstalled: (e) => e ? e.some((s) => {
          var _a2;
          return !!((_a2 = window.ethereum) == null ? void 0 : _a2[String(s)]);
        }) : !!window.ethereum,
        signMessage: async (e) => {
          var _a2;
          const s = y.state.activeChain, n = this.getAdapter(y.state.activeChain);
          if (!s) throw new Error("signMessage: namespace not found");
          if (!n) throw new Error("signMessage: adapter not found");
          const r = this.getAddress(s);
          if (!r) throw new Error("signMessage: address not found");
          return ((_a2 = await (n == null ? void 0 : n.signMessage({
            message: e,
            address: r,
            provider: Be.getProvider(s)
          }))) == null ? void 0 : _a2.signature) || "";
        },
        sendTransaction: async (e) => {
          var _a2;
          const s = e.chainNamespace;
          if (!s) throw new Error("sendTransaction: namespace not found");
          if (be.SEND_SUPPORTED_NAMESPACES.includes(s)) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("sendTransaction: adapter not found");
            const r = Be.getProvider(s);
            return ((_a2 = await (n == null ? void 0 : n.sendTransaction({
              ...e,
              caipNetwork: this.getCaipNetwork(),
              provider: r
            }))) == null ? void 0 : _a2.hash) || "";
          }
          return "";
        },
        estimateGas: async (e) => {
          var _a2;
          const s = e.chainNamespace;
          if (s === W.CHAIN.EVM) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("estimateGas: adapter is required but got undefined");
            const r = Be.getProvider(s), i = this.getCaipNetwork();
            if (!i) throw new Error("estimateGas: caipNetwork is required but got undefined");
            return ((_a2 = await (n == null ? void 0 : n.estimateGas({
              ...e,
              provider: r,
              caipNetwork: i
            }))) == null ? void 0 : _a2.gas) || 0n;
          }
          return 0n;
        },
        getEnsAvatar: async () => {
          var _a2, _b3;
          const e = y.state.activeChain;
          if (!e) throw new Error("getEnsAvatar: namespace is required but got undefined");
          const s = this.getAddress(e);
          if (!s) throw new Error("getEnsAvatar: address not found");
          return await this.syncIdentity({
            address: s,
            chainId: Number((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id),
            chainNamespace: e
          }), ((_b3 = y.getAccountData()) == null ? void 0 : _b3.profileImage) || false;
        },
        getEnsAddress: async (e) => await xn.resolveReownName(e),
        writeContract: async (e) => {
          var _a2;
          const s = y.state.activeChain, n = this.getAdapter(s);
          if (!s) throw new Error("writeContract: namespace is required but got undefined");
          if (!n) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = Be.getProvider(s);
          if (!r || !i) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (n == null ? void 0 : n.writeContract({
            ...e,
            caipNetwork: r,
            provider: o,
            caipAddress: i
          }))) == null ? void 0 : _a2.hash;
        },
        parseUnits: (e, s) => {
          const n = this.getAdapter(y.state.activeChain);
          if (!n) throw new Error("parseUnits: adapter is required but got undefined");
          return (n == null ? void 0 : n.parseUnits({
            value: e,
            decimals: s
          })) ?? 0n;
        },
        formatUnits: (e, s) => {
          const n = this.getAdapter(y.state.activeChain);
          if (!n) throw new Error("formatUnits: adapter is required but got undefined");
          return (n == null ? void 0 : n.formatUnits({
            value: e,
            decimals: s
          })) ?? "0";
        },
        getCapabilities: async (e) => {
          const s = this.getAdapter(y.state.activeChain);
          if (!s) throw new Error("getCapabilities: adapter is required but got undefined");
          return await (s == null ? void 0 : s.getCapabilities(e));
        },
        grantPermissions: async (e) => {
          const s = this.getAdapter(y.state.activeChain);
          if (!s) throw new Error("grantPermissions: adapter is required but got undefined");
          return await (s == null ? void 0 : s.grantPermissions(e));
        },
        revokePermissions: async (e) => {
          const s = this.getAdapter(y.state.activeChain);
          if (!s) throw new Error("revokePermissions: adapter is required but got undefined");
          return (s == null ? void 0 : s.revokePermissions) ? await s.revokePermissions(e) : "0x";
        },
        walletGetAssets: async (e) => {
          const s = this.getAdapter(y.state.activeChain);
          if (!s) throw new Error("walletGetAssets: adapter is required but got undefined");
          return await (s == null ? void 0 : s.walletGetAssets(e)) ?? {};
        },
        updateBalance: (e) => {
          const s = this.getAddress(e), n = this.getCaipNetwork(e);
          !n || !s || this.updateNativeBalance(s, n == null ? void 0 : n.id, e);
        }
      }, Z.setClient(this.connectionControllerClient);
    }
    async onConnectExternal(e) {
      var _a2, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
      const s = y.state.activeChain, n = e.chain || s, r = this.getAdapter(n);
      let i = true;
      if (e.type === Ms.CONNECTOR_TYPE_AUTH && W.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((h) => K.getConnectorId(h) === W.CONNECTOR_ID.AUTH) && e.chain !== s && (i = false), e.chain && e.chain !== s && !e.caipNetwork) {
        const l = this.getCaipNetworks().find((d) => d.chainNamespace === e.chain);
        l && i && this.setCaipNetwork(l);
      }
      if (!n) throw new Error("connectExternal: namespace not found");
      if (!r) throw new Error("connectExternal: adapter not found");
      const o = this.getCaipNetwork(n), a = e.caipNetwork || o, c = await r.connect({
        id: e.id,
        address: e.address,
        info: e.info,
        type: e.type,
        provider: e.provider,
        socialUri: e.socialUri,
        chainId: ((_a2 = e.caipNetwork) == null ? void 0 : _a2.id) || (o == null ? void 0 : o.id),
        rpcUrl: ((_e2 = (_d2 = (_c2 = (_b3 = e.caipNetwork) == null ? void 0 : _b3.rpcUrls) == null ? void 0 : _c2.default) == null ? void 0 : _d2.http) == null ? void 0 : _e2[0]) || ((_h2 = (_g2 = (_f2 = o == null ? void 0 : o.rpcUrls) == null ? void 0 : _f2.default) == null ? void 0 : _g2.http) == null ? void 0 : _h2[0])
      });
      if (c) return q.addConnectedNamespace(n), this.syncProvider({
        ...c,
        chainNamespace: n
      }), this.setStatus("connected", n), this.syncConnectedWalletInfo(n), q.removeDisconnectedConnectorId(e.id, n), {
        address: c.address,
        connectedCaipNetwork: a
      };
    }
    async connectInactiveNamespaces(e, s) {
      var _a2;
      const n = e.type === Ms.CONNECTOR_TYPE_AUTH, r = ji.getOtherAuthNamespaces((_a2 = s == null ? void 0 : s.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace), i = y.state.activeCaipNetwork, o = this.getAdapter(i == null ? void 0 : i.chainNamespace);
      n && (await Promise.all(r.map(async (a) => {
        var _a3, _b3, _c2, _d2;
        try {
          const c = Be.getProvider(a), l = this.getCaipNetwork(a);
          await ((_d2 = this.getAdapter(a)) == null ? void 0 : _d2.connect({
            ...e,
            provider: c,
            socialUri: void 0,
            chainId: l == null ? void 0 : l.id,
            rpcUrl: (_c2 = (_b3 = (_a3 = l == null ? void 0 : l.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b3.http) == null ? void 0 : _c2[0]
          })) && (q.addConnectedNamespace(a), q.removeDisconnectedConnectorId(e.id, a), this.setStatus("connected", a), this.syncConnectedWalletInfo(a));
        } catch (c) {
          Ut.warn(zt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, zt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(a, c instanceof Error ? c.message : void 0), zt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      })), i && await (o == null ? void 0 : o.switchNetwork({
        caipNetwork: i
      })));
    }
    getApprovedCaipNetworksData() {
      var _a2, _b3, _c2, _d2, _e2;
      if (Be.getProviderId(y.state.activeChain) === Ms.CONNECTOR_TYPE_WALLET_CONNECT) {
        const s = (_b3 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b3.namespaces;
        return {
          supportsAllNetworks: ((_e2 = (_d2 = (_c2 = this.universalProvider) == null ? void 0 : _c2.session) == null ? void 0 : _d2.peer) == null ? void 0 : _e2.metadata.name) === "MetaMask Wallet",
          approvedCaipNetworkIds: this.getChainsFromNamespaces(s)
        };
      }
      return {
        supportsAllNetworks: true,
        approvedCaipNetworkIds: []
      };
    }
    async switchCaipNetwork(e) {
      var _a2;
      const s = e.chainNamespace;
      if (this.getAddressByChainNamespace(e.chainNamespace)) {
        const r = Be.getProviderId(s);
        if (e.chainNamespace === y.state.activeChain) await ((_a2 = this.getAdapter(s)) == null ? void 0 : _a2.switchNetwork({
          caipNetwork: e
        }));
        else if (this.setCaipNetwork(e), r === Ms.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
        else {
          const i = this.getAddressByChainNamespace(s);
          i && this.syncAccount({
            address: i,
            chainId: e.id,
            chainNamespace: s
          });
        }
      } else this.setCaipNetwork(e);
    }
    getChainsFromNamespaces(e = {}) {
      return Object.values(e).flatMap((s) => {
        const n = s.chains || [], r = s.accounts.map((i) => {
          const { chainId: o, chainNamespace: a } = tt.parseCaipAddress(i);
          return `${a}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...n,
          ...r
        ]));
      });
    }
    createAdapters(e) {
      return this.createClients(), this.chainNamespaces.reduce((s, n) => {
        var _a2, _b3;
        const r = e == null ? void 0 : e.find((i) => i.namespace === n);
        return r ? (r.construct({
          namespace: n,
          projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
          networks: (_b3 = this.caipNetworks) == null ? void 0 : _b3.filter(({ chainNamespace: i }) => i === n)
        }), s[n] = r) : s[n] = new lO({
          namespace: n,
          networks: this.getCaipNetworks()
        }), s;
      }, {});
    }
    async initChainAdapter(e) {
      this.onConnectors(e), this.listenAdapter(e);
      const s = this.getAdapter(e);
      if (!s) throw new Error("adapter not found");
      await s.syncConnectors(), await this.createUniversalProviderForAdapter(e);
    }
    async initChainAdapters() {
      await Promise.all(this.chainNamespaces.map(async (e) => {
        await this.initChainAdapter(e);
      })), this.initAdapterController();
    }
    onConnectors(e) {
      var _a2;
      (_a2 = this.getAdapter(e)) == null ? void 0 : _a2.on("connectors", this.setConnectors.bind(this));
    }
    listenAdapter(e) {
      const s = this.getAdapter(e);
      if (!s) return;
      const n = q.getConnectionStatus();
      D.state.enableReconnect === false ? this.setStatus("disconnected", e) : n === "connected" ? this.setStatus("connecting", e) : n === "disconnected" ? (q.clearAddressCache(), this.setStatus(n, e)) : this.setStatus(n, e), s.on("switchNetwork", ({ address: r, chainId: i }) => {
        var _a2, _b3;
        const o = this.getCaipNetworks().find((l) => l.id.toString() === i.toString() || l.caipNetworkId.toString() === i.toString()), a = y.state.activeChain === e, c = (_b3 = (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b3.address;
        if (o) {
          const l = a && r ? r : c;
          l && this.syncAccount({
            address: l,
            chainId: o.id,
            chainNamespace: e
          });
        } else this.setUnsupportedNetwork(i);
      }), s.on("disconnect", () => {
        const r = this.remoteFeatures.multiWallet, i = Array.from(Z.state.connections.values()).flat();
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: !r || i.length === 0
        });
      }), s.on("connections", (r) => {
        this.setConnections(r, e);
      }), s.on("pendingTransactions", () => {
        const r = this.getAddress(e), i = y.state.activeCaipNetwork;
        !r || !(i == null ? void 0 : i.id) || this.updateNativeBalance(r, i.id, i.chainNamespace);
      }), s.on("accountChanged", ({ address: r, chainId: i, connector: o }) => {
        var _a2, _b3;
        this.handlePreviousConnectorConnection(o);
        const a = y.state.activeChain === e;
        (o == null ? void 0 : o.provider) && (this.syncProvider({
          id: o.id,
          type: o.type,
          provider: o == null ? void 0 : o.provider,
          chainNamespace: e
        }), this.syncConnectedWalletInfo(e));
        const c = (_b3 = (_a2 = y.getNetworkData(e)) == null ? void 0 : _a2.caipNetwork) == null ? void 0 : _b3.id, l = i || c;
        a && l ? this.syncAccount({
          address: r,
          chainId: l,
          chainNamespace: e
        }) : !a && l ? (this.syncAccountInfo(r, l, e), this.syncBalance({
          address: r,
          chainId: l,
          chainNamespace: e
        })) : this.syncAccountInfo(r, i, e), q.addConnectedNamespace(e);
      });
    }
    async handlePreviousConnectorConnection(e) {
      var _a2;
      const s = e == null ? void 0 : e.chain, n = e == null ? void 0 : e.id, r = K.getConnectorId(s), i = (_a2 = D.state.remoteFeatures) == null ? void 0 : _a2.multiWallet, a = s && n && r && r !== n && !i;
      try {
        a && await Z.disconnect({
          id: r,
          namespace: s
        });
      } catch (c) {
        console.warn("Error disconnecting previous connector", c);
      }
    }
    async createUniversalProviderForAdapter(e) {
      var _a2, _b3, _c2;
      await this.getUniversalProvider(), this.universalProvider && await ((_c2 = (_b3 = (_a2 = this.chainAdapters) == null ? void 0 : _a2[e]) == null ? void 0 : _b3.setUniversalProvider) == null ? void 0 : _c2.call(_b3, this.universalProvider));
    }
    async syncExistingConnection() {
      await Promise.allSettled(this.chainNamespaces.map((e) => this.syncNamespaceConnection(e)));
    }
    async unSyncExistingConnection() {
      try {
        await Promise.allSettled(this.chainNamespaces.map((e) => Z.disconnect({
          namespace: e,
          initialDisconnect: true
        })));
      } catch (e) {
        console.error("Error disconnecting existing connections:", e);
      }
    }
    async reconnectWalletConnect() {
      await this.syncWalletConnectAccount();
      const e = this.getAddress();
      this.getCaipAddress() || q.deleteRecentWallet();
      const s = q.getRecentWallet();
      pe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: e,
        properties: {
          method: se.isMobile() ? "mobile" : "qrcode",
          name: (s == null ? void 0 : s.name) || "Unknown",
          reconnect: true,
          view: le.state.view,
          walletRank: s == null ? void 0 : s.order
        }
      });
    }
    async syncNamespaceConnection(e) {
      try {
        e === W.CHAIN.EVM && se.isSafeApp() && K.setConnectorId(W.CONNECTOR_ID.SAFE, e);
        const s = K.getConnectorId(e);
        switch (this.setStatus("connecting", e), s) {
          case W.CONNECTOR_ID.WALLET_CONNECT:
            await this.reconnectWalletConnect();
            break;
          case W.CONNECTOR_ID.AUTH:
            break;
          default:
            await this.syncAdapterConnection(e);
        }
      } catch (s) {
        console.warn("AppKit couldn't sync existing connection", s), this.setStatus("disconnected", e);
      }
    }
    onDisconnectNamespace(e) {
      const { chainNamespace: s, closeModal: n } = e || {};
      y.resetAccount(s), y.resetNetwork(s), q.removeConnectedNamespace(s);
      const r = Array.from(y.state.chains.keys());
      (s ? [
        s
      ] : r).forEach((o) => q.addDisconnectedConnectorId(K.getConnectorId(o) || "", o)), K.removeConnectorId(s), Be.resetChain(s), this.setUser(null, s), this.setStatus("disconnected", s), this.setConnectedWalletInfo(null, s), n !== false && ge.close();
    }
    async syncAdapterConnections() {
      await Promise.allSettled(this.chainNamespaces.map((e) => {
        const s = this.getAdapter(e), n = this.getCaipAddress(e), r = this.getCaipNetwork(e);
        return s == null ? void 0 : s.syncConnections({
          connectToFirstConnector: !n,
          caipNetwork: r
        });
      }));
    }
    async syncAdapterConnection(e) {
      var _a2, _b3, _c2, _d2;
      const s = this.getAdapter(e), n = this.getCaipNetwork(e), r = K.getConnectorId(e), o = K.getConnectors(e).find((a) => a.id === r);
      try {
        if (!s || !o) throw new Error(`Adapter or connector not found for namespace ${e}`);
        if (!(n == null ? void 0 : n.id)) throw new Error("CaipNetwork not found");
        const a = await (s == null ? void 0 : s.syncConnection({
          namespace: e,
          id: o.id,
          chainId: n.id,
          rpcUrl: (_c2 = (_b3 = (_a2 = n == null ? void 0 : n.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b3.http) == null ? void 0 : _c2[0]
        }));
        a ? (this.syncProvider({
          ...a,
          chainNamespace: e
        }), await this.syncAccount({
          ...a,
          chainNamespace: e
        }), this.setStatus("connected", e), pe.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: a.address,
          properties: {
            method: "browser",
            name: ((_d2 = o.info) == null ? void 0 : _d2.name) || o.name || "Unknown",
            reconnect: true,
            view: le.state.view,
            walletRank: void 0
          }
        })) : this.setStatus("disconnected", e);
      } catch {
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: false
        });
      }
    }
    async syncWalletConnectAccount() {
      var _a2, _b3;
      const e = Object.keys(((_b3 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b3.namespaces) || {}), s = this.chainNamespaces.map(async (n) => {
        var _a3, _b4, _c2, _d2, _e2;
        const r = this.getAdapter(n);
        if (!r) return;
        const i = ((_d2 = (_c2 = (_b4 = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b4.namespaces) == null ? void 0 : _c2[n]) == null ? void 0 : _d2.accounts) || [], o = (_e2 = y.state.activeCaipNetwork) == null ? void 0 : _e2.id, a = i.find((l) => {
          const { chainId: d } = tt.parseCaipAddress(l);
          return d === (o == null ? void 0 : o.toString());
        }) || i[0];
        if (a) {
          const l = tt.validateCaipAddress(a), { chainId: d, address: h } = tt.parseCaipAddress(l);
          if (Be.setProviderId(n, Ms.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && y.state.activeCaipNetwork && r.namespace !== W.CHAIN.EVM) {
            const u = r.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: y.state.activeCaipNetwork
            });
            Be.setProvider(n, u);
          } else Be.setProvider(n, this.universalProvider);
          K.setConnectorId(W.CONNECTOR_ID.WALLET_CONNECT, n), q.addConnectedNamespace(n), await this.syncAccount({
            address: h,
            chainId: d,
            chainNamespace: n
          });
        } else e.includes(n) && this.setStatus("disconnected", n);
        const c = this.getApprovedCaipNetworksData();
        this.syncConnectedWalletInfo(n), y.setApprovedCaipNetworksData(n, {
          approvedCaipNetworkIds: c.approvedCaipNetworkIds,
          supportsAllNetworks: c.supportsAllNetworks
        });
      });
      await Promise.all(s);
    }
    syncProvider({ type: e, provider: s, id: n, chainNamespace: r }) {
      Be.setProviderId(r, e), Be.setProvider(r, s), K.setConnectorId(n, r);
    }
    async syncAccount(e) {
      var _a2, _b3;
      const s = e.chainNamespace === y.state.activeChain, n = y.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: r, chainId: i, chainNamespace: o } = e, { chainId: a } = q.getActiveNetworkProps(), c = (n == null ? void 0 : n.id) || a, l = ((_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.name) === W.UNSUPPORTED_NETWORK_NAME, d = y.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !d) && c) {
        let h = this.getCaipNetworks().find((p) => p.id.toString() === c.toString()), u = this.getCaipNetworks().find((p) => p.chainNamespace === o);
        if (!d && !h && !u) {
          const p = this.getApprovedCaipNetworkIds() || [], w = p.find((I) => {
            var _a3;
            return ((_a3 = tt.parseCaipNetworkId(I)) == null ? void 0 : _a3.chainId) === c.toString();
          }), T = p.find((I) => {
            var _a3;
            return ((_a3 = tt.parseCaipNetworkId(I)) == null ? void 0 : _a3.chainNamespace) === o;
          });
          h = this.getCaipNetworks().find((I) => I.caipNetworkId === w), u = this.getCaipNetworks().find((I) => I.caipNetworkId === T || "deprecatedCaipNetworkId" in I && I.deprecatedCaipNetworkId === T);
        }
        const f = h || u;
        (f == null ? void 0 : f.chainNamespace) === y.state.activeChain ? D.state.enableNetworkSwitch && !D.state.allowUnsupportedChain && ((_b3 = y.state.activeCaipNetwork) == null ? void 0 : _b3.name) === W.UNSUPPORTED_NETWORK_NAME ? y.showUnsupportedChainUI() : this.setCaipNetwork(f) : s || n && this.setCaipNetworkOfNamespace(n, o), this.syncConnectedWalletInfo(o);
        const g = this.getAddress(o);
        ji.isLowerCaseMatch(r, g) || this.syncAccountInfo(r, f == null ? void 0 : f.id, o), s ? await this.syncBalance({
          address: r,
          chainId: f == null ? void 0 : f.id,
          chainNamespace: o
        }) : await this.syncBalance({
          address: r,
          chainId: n == null ? void 0 : n.id,
          chainNamespace: o
        }), this.syncIdentity({
          address: r,
          chainId: i,
          chainNamespace: o
        });
      }
    }
    async syncAccountInfo(e, s, n) {
      const r = this.getCaipAddress(n), i = s || (r == null ? void 0 : r.split(":")[1]);
      if (!i) return;
      const o = `${n}:${i}:${e}`;
      this.setCaipAddress(o, n, true), await this.syncIdentity({
        address: e,
        chainId: i,
        chainNamespace: n
      });
    }
    async syncReownName(e, s) {
      try {
        const n = await this.getReownName(e);
        if (n[0]) {
          const r = n[0];
          this.setProfileName(r.name, s);
        } else this.setProfileName(null, s);
      } catch {
        this.setProfileName(null, s);
      }
    }
    syncConnectedWalletInfo(e) {
      var _a2;
      const s = K.getConnectorId(e), n = Be.getProviderId(e);
      if (n === Ms.CONNECTOR_TYPE_ANNOUNCED || n === Ms.CONNECTOR_TYPE_INJECTED) {
        if (s) {
          const i = this.getConnectors().find((o) => {
            var _a3, _b3;
            const a = o.id === s, c = ((_a3 = o.info) == null ? void 0 : _a3.rdns) === s, l = (_b3 = o.connectors) == null ? void 0 : _b3.some((d) => {
              var _a4;
              return d.id === s || ((_a4 = d.info) == null ? void 0 : _a4.rdns) === s;
            });
            return a || c || !!l;
          });
          if (i) {
            const { info: o, name: a, imageUrl: c } = i, l = c || this.getConnectorImage(i);
            this.setConnectedWalletInfo({
              name: a,
              icon: l,
              ...o
            }, e);
          }
        }
      } else if (n === Ms.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = Be.getProvider(e);
        (r == null ? void 0 : r.session) && this.setConnectedWalletInfo({
          ...r.session.peer.metadata,
          name: r.session.peer.metadata.name,
          icon: (_a2 = r.session.peer.metadata.icons) == null ? void 0 : _a2[0]
        }, e);
      } else if (s && (s === W.CONNECTOR_ID.COINBASE_SDK || s === W.CONNECTOR_ID.COINBASE)) {
        const r = this.getConnectors().find((c) => c.id === s), i = (r == null ? void 0 : r.name) || "Coinbase Wallet", o = (r == null ? void 0 : r.imageUrl) || this.getConnectorImage(r), a = r == null ? void 0 : r.info;
        this.setConnectedWalletInfo({
          ...a,
          name: i,
          icon: o
        }, e);
      }
    }
    async syncBalance(e) {
      !lf.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((n) => {
        var _a2;
        return n.id.toString() === ((_a2 = e.chainId) == null ? void 0 : _a2.toString());
      }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
    }
    async ready() {
      await this.readyPromise;
    }
    async updateNativeBalance(e, s, n) {
      const r = this.getAdapter(n), i = y.getCaipNetworkByNamespace(n, s);
      if (r) {
        const o = await r.getBalance({
          address: e,
          chainId: s,
          caipNetwork: i,
          tokens: this.options.tokens
        });
        return this.setBalance(o.balance, o.symbol, n), o;
      }
    }
    async initializeUniversalAdapter() {
      var _a2, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
      const e = _T.createLogger((n, ...r) => {
        n && this.handleAlertError(n), console.error(...r);
      }), s = {
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        metadata: {
          name: ((_b3 = this.options) == null ? void 0 : _b3.metadata) ? (_c2 = this.options) == null ? void 0 : _c2.metadata.name : "",
          description: ((_d2 = this.options) == null ? void 0 : _d2.metadata) ? (_e2 = this.options) == null ? void 0 : _e2.metadata.description : "",
          url: ((_f2 = this.options) == null ? void 0 : _f2.metadata) ? (_g2 = this.options) == null ? void 0 : _g2.metadata.url : "",
          icons: ((_h2 = this.options) == null ? void 0 : _h2.metadata) ? (_i2 = this.options) == null ? void 0 : _i2.metadata.icons : [
            ""
          ]
        },
        logger: e
      };
      D.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await fT.init(s), D.state.enableReconnect === false && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
    }
    listenWalletConnect() {
      this.universalProvider && this.chainNamespaces.forEach((e) => {
        xn.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace: e,
          onDisplayUri: (s) => {
            Z.setUri(s);
          },
          onConnect: (s) => {
            const { address: n } = se.getAccount(s[0]);
            Z.finalizeWcConnection(n);
          },
          onDisconnect: () => {
            y.state.noAdapters && this.resetAccount(e), Z.resetWcConnection();
          },
          onChainChanged: (s) => {
            const n = y.state.activeChain, r = n && K.state.activeConnectorIds[n] === W.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (y.state.noAdapters || r)) {
              const i = this.getCaipNetworks().find((a) => a.id.toString() === s.toString() || a.caipNetworkId.toString() === s.toString()), o = this.getCaipNetwork();
              if (!i) {
                this.setUnsupportedNetwork(s);
                return;
              }
              (o == null ? void 0 : o.id.toString()) !== (i == null ? void 0 : i.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (i == null ? void 0 : i.chainNamespace) && this.setCaipNetwork(i);
            }
          },
          onAccountsChanged: (s) => {
            const n = y.state.activeChain, r = n && K.state.activeConnectorIds[n] === W.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (y.state.noAdapters || r)) {
              const i = s == null ? void 0 : s[0];
              i && this.syncAccount({
                address: i.address,
                chainId: i.chainId,
                chainNamespace: i.chainNamespace
              });
            }
          }
        });
      });
    }
    createUniversalProvider() {
      var _a2;
      return !this.universalProviderInitPromise && se.isClient() && ((_a2 = this.options) == null ? void 0 : _a2.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
      if (!this.universalProvider) try {
        await this.createUniversalProvider();
      } catch (e) {
        pe.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: e instanceof Error ? e.message : "Unknown",
            uncaught: false
          }
        }), console.error("AppKit:getUniversalProvider - Cannot create provider", e);
      }
      return this.universalProvider;
    }
    getDisabledCaipNetworks() {
      const e = y.getAllApprovedCaipNetworkIds(), s = y.getAllRequestedCaipNetworks();
      return se.sortRequestedNetworks(e, s).filter((r) => y.isCaipNetworkDisabled(r));
    }
    handleAlertError(e) {
      const s = Object.entries(zt.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [n, r] = s ?? [], { message: i, alertErrorKey: o } = r ?? {};
      if (n && i && !this.reportedAlertErrors[n]) {
        const a = zt.ALERT_ERRORS[o];
        a && (Ut.open(a, "error"), this.reportedAlertErrors[n] = true);
      }
    }
    getAdapter(e) {
      var _a2;
      if (e) return (_a2 = this.chainAdapters) == null ? void 0 : _a2[e];
    }
    createAdapter(e) {
      var _a2, _b3;
      if (!e) return;
      const s = e.namespace;
      if (!s) return;
      this.createClients();
      const n = e;
      n.namespace = s, n.construct({
        namespace: s,
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        networks: (_b3 = this.caipNetworks) == null ? void 0 : _b3.filter(({ chainNamespace: r }) => r === s)
      }), this.chainNamespaces.includes(s) || this.chainNamespaces.push(s), this.chainAdapters && (this.chainAdapters[s] = n);
    }
    async open(e) {
      await this.injectModalUi(), (e == null ? void 0 : e.uri) && Z.setUri(e.uri);
      const { isSwap: s, isSend: n } = this.toModalOptions();
      return s(e) ? ge.open({
        ...e,
        data: {
          swap: e.arguments
        }
      }) : n(e) && e.arguments ? this.openSend(e.arguments) : ge.open(e);
    }
    async close() {
      await this.injectModalUi(), ge.close();
    }
    setLoading(e, s) {
      ge.setLoading(e, s);
    }
    async disconnect(e) {
      await Z.disconnect({
        namespace: e
      });
    }
    getSIWX() {
      return D.state.siwx;
    }
    getError() {
      return "";
    }
    getChainId() {
      var _a2;
      return (_a2 = y.state.activeCaipNetwork) == null ? void 0 : _a2.id;
    }
    async switchNetwork(e, { throwOnFailure: s = false } = {}) {
      const n = this.getCaipNetworks().find((r) => r.id === e.id);
      if (!n) {
        Ut.open(zt.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await y.switchActiveNetwork(n, {
        throwOnFailure: s
      });
    }
    getWalletProvider() {
      return y.state.activeChain ? Be.state.providers[y.state.activeChain] : null;
    }
    getWalletProviderType() {
      return Be.getProviderId(y.state.activeChain);
    }
    subscribeProviders(e) {
      return Be.subscribeProviders(e);
    }
    getThemeMode() {
      return Lt.state.themeMode;
    }
    getThemeVariables() {
      return Lt.state.themeVariables;
    }
    setThemeMode(e) {
      Lt.setThemeMode(e), Cl(Lt.state.themeMode);
    }
    setTermsConditionsUrl(e) {
      D.setTermsConditionsUrl(e);
    }
    setPrivacyPolicyUrl(e) {
      D.setPrivacyPolicyUrl(e);
    }
    setThemeVariables(e) {
      Lt.setThemeVariables(e), iO(Lt.state.themeVariables);
    }
    subscribeTheme(e) {
      return Lt.subscribe(e);
    }
    subscribeConnections(e) {
      return this.remoteFeatures.multiWallet ? Z.subscribe(e) : (Ut.open(W.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
      });
    }
    getWalletInfo(e) {
      var _a2, _b3, _c2;
      return e ? (_b3 = (_a2 = y.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b3.connectedWalletInfo : (_c2 = y.getAccountData()) == null ? void 0 : _c2.connectedWalletInfo;
    }
    getAccount(e) {
      const s = e || y.state.activeChain, n = K.getAuthConnector(s), r = y.getAccountData(s), i = q.getConnectedConnectorId(y.state.activeChain), o = Z.getConnections(s);
      if (!s) throw new Error("AppKit:getAccount - namespace is required");
      const a = o.flatMap((c) => c.accounts.map(({ address: l, type: d, publicKey: h }) => se.createAccount(s, l, d || "eoa", h)));
      if (r) return {
        allAccounts: a,
        caipAddress: r.caipAddress,
        address: se.getPlainAddress(r.caipAddress),
        isConnected: !!r.caipAddress,
        status: r.status,
        embeddedWalletInfo: n && i === W.CONNECTOR_ID.AUTH ? {
          user: r.user ? {
            ...r.user,
            username: q.getConnectedSocialUsername()
          } : void 0,
          authProvider: r.socialProvider || "email",
          accountType: Jt(s),
          isSmartAccountDeployed: !!r.smartAccountDeployed
        } : void 0
      };
    }
    subscribeAccount(e, s) {
      const n = () => {
        const r = this.getAccount(s);
        r && e(r);
      };
      s ? y.subscribeChainProp("accountState", n, s) : y.subscribe(n), K.subscribe(n);
    }
    subscribeNetwork(e) {
      return y.subscribe(({ activeCaipNetwork: s }) => {
        e({
          caipNetwork: s,
          chainId: s == null ? void 0 : s.id,
          caipNetworkId: s == null ? void 0 : s.caipNetworkId
        });
      });
    }
    subscribeWalletInfo(e, s) {
      return s ? y.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo), s) : y.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo));
    }
    subscribeShouldUpdateToAddress(e) {
      y.subscribeChainProp("accountState", (s) => e(s == null ? void 0 : s.shouldUpdateToAddress));
    }
    subscribeCaipNetworkChange(e) {
      y.subscribeKey("activeCaipNetwork", e);
    }
    getState() {
      return Ks.state;
    }
    getRemoteFeatures() {
      return D.state.remoteFeatures;
    }
    subscribeState(e) {
      return Ks.subscribe(e);
    }
    subscribeRemoteFeatures(e) {
      return D.subscribeKey("remoteFeatures", e);
    }
    showErrorMessage(e) {
      Ns.showError(e);
    }
    showSuccessMessage(e) {
      Ns.showSuccess(e);
    }
    getEvent() {
      return {
        ...pe.state
      };
    }
    subscribeEvents(e) {
      return pe.subscribe(e);
    }
    replace(e) {
      le.replace(e);
    }
    redirect(e) {
      le.push(e);
    }
    popTransactionStack(e) {
      le.popTransactionStack(e);
    }
    isOpen() {
      return ge.state.open;
    }
    isTransactionStackEmpty() {
      return le.state.transactionStack.length === 0;
    }
    static getInstance() {
      return this.instance;
    }
    updateFeatures(e) {
      D.setFeatures(e);
    }
    updateRemoteFeatures(e) {
      D.setRemoteFeatures(e);
    }
    updateOptions(e) {
      const n = {
        ...D.state || {},
        ...e
      };
      D.setOptions(n);
    }
    setConnectMethodsOrder(e) {
      D.setConnectMethodsOrder(e);
    }
    setWalletFeaturesOrder(e) {
      D.setWalletFeaturesOrder(e);
    }
    setCollapseWallets(e) {
      D.setCollapseWallets(e);
    }
    setSocialsOrder(e) {
      D.setSocialsOrder(e);
    }
    getConnectMethodsOrder() {
      return Ai.getConnectOrderMethod(D.state.features, K.getConnectors());
    }
    addNetwork(e, s) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      const n = this.extendCaipNetwork(s, this.options);
      this.getCaipNetworks().find((r) => r.id === n.id) || y.addNetwork(n);
    }
    removeNetwork(e, s) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      this.getCaipNetworks().find((r) => r.id === s) && y.removeNetwork(e, s);
    }
  }
  let nf = false;
  class lm extends uO {
    async open(e) {
      K.isConnected() || await super.open(e);
    }
    async close() {
      var _a2;
      if (await super.close(), this.options.manualWCControl) {
        const e = (_a2 = y.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a2.address;
        Z.finalizeWcConnection(e);
      }
    }
    async syncIdentity(e) {
      return Promise.resolve();
    }
    async syncBalance(e) {
      return Promise.resolve();
    }
    async injectModalUi() {
      if (!nf && se.isClient()) {
        if (await Mo(() => import("./basic-DDtGeGWo.js"), __vite__mapDeps([5,6,1,2])), await Mo(() => import("./w3m-modal-DD7H8bE_.js"), __vite__mapDeps([7,6,1,2])), !document.querySelector("w3m-modal")) {
          const s = document.createElement("w3m-modal");
          !D.state.disableAppend && !D.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s);
        }
        nf = true;
      }
    }
  }
  const fO = "1.8.11";
  function pO(t) {
    return new lm({
      ...t,
      basic: true,
      sdkVersion: `html-core-${fO}`
    });
  }
  yk = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: lm,
    createAppKit: pO
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  q as $,
  re as A,
  he as B,
  y as C,
  rO as D,
  pe as E,
  wf as F,
  Zt as G,
  TT as H,
  Sn as I,
  gk as J,
  nm as K,
  El as L,
  ge as M,
  lf as N,
  D as O,
  Ze as P,
  fk as Q,
  le as R,
  oe as S,
  Lt as T,
  zr as U,
  Ac as V,
  Vs as W,
  ji as X,
  ar as Y,
  Hs as Z,
  Tr as _,
  __tla,
  W as a,
  Ai as a0,
  yk as a1,
  ne as b,
  jm as c,
  Ns as d,
  Z as e,
  fd as f,
  co as g,
  Jt as h,
  se as i,
  Pw as j,
  Ut as k,
  Tl as l,
  be as m,
  bf as n,
  K as o,
  De as p,
  nt as q,
  st as r,
  xm as s,
  ds as t,
  pk as u,
  mk as v,
  es as w,
  Bo as x,
  uk as y,
  wk as z
};
