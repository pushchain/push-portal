const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BthHIC45.js","assets/main-DO5fYsDf.js","assets/main-BN-Qqfmx.css","assets/ccip-CRDZMqUx.js","assets/features-BLA0BWbh.js","assets/basic-qaDUsNSc.js","assets/index-CbN4JRwJ.js","assets/w3m-modal-Br_NU90L.js"])))=>i.map(i=>d[i]);
import { q as Sw, b1 as _w, b8 as Tw, au as Ow, cS as xw, cT as an, cL as Yf, cQ as ta, s as vo, cU as fi, cV as yt, cW as Sa, cX as K, cY as zt, cZ as kw, c_ as $t, c$ as Pw, d0 as Ae, d1 as Mi, d2 as Xc, d3 as Zf, d4 as Sr, d5 as Jf, d6 as Gt, d7 as Rw, d8 as $w, d9 as Yt, da as $n, db as pi, dc as td, dd as Uw, de as nd, df as sd, dg as zi, dh as rd, di as Kd, dj as Dw, dk as Bw, dl as Lw, dm as zd, dn as cr, dp as Xf, dq as zn, dr as Rn, ds as Mw, dt as Fw, du as jw, dv as qw, dw as Ww, dx as Hw, dy as Vw, dz as Kw, dA as zw, dB as Gw, dC as ps, dD as Qf, r as Co, cb as Gd, __tla as __tla_0 } from "./main-DO5fYsDf.js";
let hp, se, le, b, od, ui, ge, up, V, at, ot, bn, cy, me, tp, it, $e, co, ae, ie, ed, j, ck, is, ra, rn, Wt, n3, F, At, Cr, rs, ia, Kr, H, Fs, i3, re, yw, ea, Qk, Yd, Io, Qe, Ls, t3, r3, ip, ln, Un, G, De, fe, s3, Yw, on, Jl, Kx, e3, ee, Gy, jt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _d2;
  Yd = function(t, e = {}) {
    const { key: n = "fallback", name: s = "Fallback", rank: r = false, shouldThrow: i = Yw, retryCount: o, retryDelay: a } = e;
    return (({ chain: c, pollingInterval: l = 4e3, timeout: d, ...u }) => {
      let h = t, f = () => {
      };
      const g = Sw({
        key: n,
        name: s,
        async request({ method: p, params: m }) {
          let T;
          const O = async (A = 0) => {
            const N = h[A]({
              ...u,
              chain: c,
              retryCount: 0,
              timeout: d
            });
            try {
              const P = await N.request({
                method: p,
                params: m
              });
              return f({
                method: p,
                params: m,
                response: P,
                transport: N,
                status: "success"
              }), P;
            } catch (P) {
              if (f({
                error: P,
                method: p,
                params: m,
                transport: N,
                status: "error"
              }), i(P) || A === h.length - 1 || (T ?? (T = h.slice(A + 1).some((U) => {
                const { include: D, exclude: L } = U({
                  chain: c
                }).config.methods || {};
                return D ? D.includes(p) : L ? !L.includes(p) : true;
              })), !T)) throw P;
              return O(A + 1);
            }
          };
          return O();
        },
        retryCount: o,
        retryDelay: a,
        type: "fallback"
      }, {
        onResponse: (p) => f = p,
        transports: h.map((p) => p({
          chain: c,
          retryCount: 0
        }))
      });
      if (r) {
        const p = typeof r == "object" ? r : {};
        Zw({
          chain: c,
          interval: p.interval ?? l,
          onTransports: (m) => h = m,
          ping: p.ping,
          sampleCount: p.sampleCount,
          timeout: p.timeout,
          transports: h,
          weights: p.weights
        });
      }
      return g;
    });
  };
  Yw = function(t) {
    return !!("code" in t && typeof t.code == "number" && (t.code === _w.code || t.code === Tw.code || Ow.nodeMessage.test(t.message) || t.code === 5e3));
  };
  function Zw({ chain: t, interval: e = 4e3, onTransports: n, ping: s, sampleCount: r = 10, timeout: i = 1e3, transports: o, weights: a = {} }) {
    const { stability: c = 0.7, latency: l = 0.3 } = a, d = [], u = async () => {
      const h = await Promise.all(o.map(async (p) => {
        const m = p({
          chain: t,
          retryCount: 0,
          timeout: i
        }), T = Date.now();
        let O, A;
        try {
          await (s ? s({
            transport: m
          }) : m.request({
            method: "net_listening"
          })), A = 1;
        } catch {
          A = 0;
        } finally {
          O = Date.now();
        }
        return {
          latency: O - T,
          success: A
        };
      }));
      d.push(h), d.length > r && d.shift();
      const f = Math.max(...d.map((p) => Math.max(...p.map(({ latency: m }) => m)))), g = o.map((p, m) => {
        const T = d.map((U) => U[m].latency), A = 1 - T.reduce((U, D) => U + D, 0) / T.length / f, N = d.map((U) => U[m].success), P = N.reduce((U, D) => U + D, 0) / N.length;
        return P === 0 ? [
          0,
          m
        ] : [
          l * A + c * P,
          m
        ];
      }).sort((p, m) => m[0] - p[0]);
      n(g.map(([, p]) => o[p])), await xw(e), u();
    };
    u();
  }
  const ep = {
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    }
  };
  var Zd = {};
  let np;
  F = {
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
      BASE_ACCOUNT: "baseAccount",
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
      BITCOIN: "bip122",
      TON: "ton"
    },
    CHAIN_NAME_MAP: {
      eip155: "EVM Networks",
      solana: "Solana",
      polkadot: "Polkadot",
      bip122: "Bitcoin",
      cosmos: "Cosmos",
      sui: "Sui",
      stacks: "Stacks",
      ton: "TON"
    },
    ADAPTER_TYPES: {
      BITCOIN: "bitcoin",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5",
      TON: "ton"
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
    NATIVE_IMAGE_IDS_BY_NAMESPACE: {
      eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
      solana: "3e8119e5-2a6f-4818-c50c-1937011d5900",
      bip122: "0b4838db-0161-4ffe-022d-532bf03dba00"
    },
    TOKEN_SYMBOLS_BY_ADDRESS: {
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDC",
      "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": "USDC",
      "0x0b2c639c533813f4aa9d7837caf62653d097ff85": "USDC",
      "0xaf88d065e77c8cc2239327c5edb3a432268e5831": "USDC",
      "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": "USDC",
      "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "USDC",
      EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: "USDC",
      "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
      "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": "USDT",
      "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDT",
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "USDT",
      Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: "USDT"
    },
    HTTP_STATUS_CODES: {
      SERVER_ERROR: 500,
      TOO_MANY_REQUESTS: 429,
      SERVICE_UNAVAILABLE: 503,
      FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: "Unknown Network",
    SECURE_SITE_SDK_ORIGIN: (typeof an < "u" && typeof Zd < "u" ? Zd.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
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
      },
      HEADLESS_NOT_ENABLED: {
        DEFAULT: {
          displayMessage: "",
          debugMessage: "Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."
        }
      }
    },
    IS_DEVELOPMENT: typeof an < "u" && false,
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
    ],
    METMASK_CONNECTOR_NAME: "MetaMask",
    TRUST_CONNECTOR_NAME: "Trust Wallet",
    SOLFLARE_CONNECTOR_NAME: "Solflare",
    PHANTOM_CONNECTOR_NAME: "Phantom",
    COIN98_CONNECTOR_NAME: "Coin98",
    MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
    BACKPACK_CONNECTOR_NAME: "Backpack",
    BITGET_CONNECTOR_NAME: "Bitget Wallet",
    FRONTIER_CONNECTOR_NAME: "Frontier",
    XVERSE_CONNECTOR_NAME: "Xverse Wallet",
    LEATHER_CONNECTOR_NAME: "Leather",
    OKX_CONNECTOR_NAME: "OKX Wallet",
    BINANCE_CONNECTOR_NAME: "Binance Wallet",
    EIP155: "eip155",
    ADD_CHAIN_METHOD: "wallet_addEthereumChain",
    EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
    EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
    CONNECTOR_RDNS_MAP: {
      coinbaseWallet: "com.coinbase.wallet",
      coinbaseWalletSDK: "com.coinbase.wallet"
    },
    CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH",
    CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
    CONNECTOR_TYPE_W3M_AUTH: "AUTH"
  };
  tp = {
    caipNetworkIdToNumber(t) {
      return t ? Number(t.split(":")[1]) : void 0;
    },
    parseEvmChainId(t) {
      return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
    },
    getNetworksByNamespace(t, e) {
      return (t == null ? void 0 : t.filter((n) => n.chainNamespace === e)) || [];
    },
    getFirstNetworkByNamespace(t, e) {
      return this.getNetworksByNamespace(t, e)[0];
    },
    getNetworkNameByCaipNetworkId(t, e) {
      var _a2;
      if (!e) return;
      const n = t.find((r) => r.caipNetworkId === e);
      if (n) return n.name;
      const [s] = e.split(":");
      return ((_a2 = F.CHAIN_NAME_MAP) == null ? void 0 : _a2[s]) || void 0;
    }
  };
  np = [
    "eip155",
    "solana",
    "polkadot",
    "bip122",
    "cosmos",
    "sui",
    "stacks"
  ];
  var Jw = 20, Xw = 1, vr = 1e6, Jd = 1e6, Qw = -7, ey = 21, ty = false, oo = "[big.js] ", _r = oo + "Invalid ", _a = _r + "decimal places", ny = _r + "rounding mode", sp = oo + "Division by zero", xe = {}, Ln = void 0, sy = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function rp() {
    function t(e) {
      var n = this;
      if (!(n instanceof t)) return e === Ln ? rp() : new t(e);
      if (e instanceof t) n.s = e.s, n.e = e.e, n.c = e.c.slice();
      else {
        if (typeof e != "string") {
          if (t.strict === true && typeof e != "bigint") throw TypeError(_r + "value");
          e = e === 0 && 1 / e < 0 ? "-0" : String(e);
        }
        ry(n, e);
      }
      n.constructor = t;
    }
    return t.prototype = xe, t.DP = Jw, t.RM = Xw, t.NE = Qw, t.PE = ey, t.strict = ty, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
  }
  function ry(t, e) {
    var n, s, r;
    if (!sy.test(e)) throw Error(_r + "number");
    for (t.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (s = e.search(/e/i)) > 0 ? (n < 0 && (n = s), n += +e.slice(s + 1), e = e.substring(0, s)) : n < 0 && (n = e.length), r = e.length, s = 0; s < r && e.charAt(s) == "0"; ) ++s;
    if (s == r) t.c = [
      t.e = 0
    ];
    else {
      for (; r > 0 && e.charAt(--r) == "0"; ) ;
      for (t.e = n - s - 1, t.c = [], n = 0; s <= r; ) t.c[n++] = +e.charAt(s++);
    }
    return t;
  }
  function Tr(t, e, n, s) {
    var r = t.c;
    if (n === Ln && (n = t.constructor.RM), n !== 0 && n !== 1 && n !== 2 && n !== 3) throw Error(ny);
    if (e < 1) s = n === 3 && (s || !!r[0]) || e === 0 && (n === 1 && r[0] >= 5 || n === 2 && (r[0] > 5 || r[0] === 5 && (s || r[1] !== Ln))), r.length = 1, s ? (t.e = t.e - e + 1, r[0] = 1) : r[0] = t.e = 0;
    else if (e < r.length) {
      if (s = n === 1 && r[e] >= 5 || n === 2 && (r[e] > 5 || r[e] === 5 && (s || r[e + 1] !== Ln || r[e - 1] & 1)) || n === 3 && (s || !!r[0]), r.length = e, s) {
        for (; ++r[--e] > 9; ) if (r[e] = 0, e === 0) {
          ++t.e, r.unshift(1);
          break;
        }
      }
      for (e = r.length; !r[--e]; ) r.pop();
    }
    return t;
  }
  function Or(t, e, n) {
    var s = t.e, r = t.c.join(""), i = r.length;
    if (e) r = r.charAt(0) + (i > 1 ? "." + r.slice(1) : "") + (s < 0 ? "e" : "e+") + s;
    else if (s < 0) {
      for (; ++s; ) r = "0" + r;
      r = "0." + r;
    } else if (s > 0) if (++s > i) for (s -= i; s--; ) r += "0";
    else s < i && (r = r.slice(0, s) + "." + r.slice(s));
    else i > 1 && (r = r.charAt(0) + "." + r.slice(1));
    return t.s < 0 && n ? "-" + r : r;
  }
  xe.abs = function() {
    var t = new this.constructor(this);
    return t.s = 1, t;
  };
  xe.cmp = function(t) {
    var e, n = this, s = n.c, r = (t = new n.constructor(t)).c, i = n.s, o = t.s, a = n.e, c = t.e;
    if (!s[0] || !r[0]) return s[0] ? i : r[0] ? -o : 0;
    if (i != o) return i;
    if (e = i < 0, a != c) return a > c ^ e ? 1 : -1;
    for (o = (a = s.length) < (c = r.length) ? a : c, i = -1; ++i < o; ) if (s[i] != r[i]) return s[i] > r[i] ^ e ? 1 : -1;
    return a == c ? 0 : a > c ^ e ? 1 : -1;
  };
  xe.div = function(t) {
    var e = this, n = e.constructor, s = e.c, r = (t = new n(t)).c, i = e.s == t.s ? 1 : -1, o = n.DP;
    if (o !== ~~o || o < 0 || o > vr) throw Error(_a);
    if (!r[0]) throw Error(sp);
    if (!s[0]) return t.s = i, t.c = [
      t.e = 0
    ], t;
    var a, c, l, d, u, h = r.slice(), f = a = r.length, g = s.length, p = s.slice(0, a), m = p.length, T = t, O = T.c = [], A = 0, N = o + (T.e = e.e - t.e) + 1;
    for (T.s = i, i = N < 0 ? 0 : N, h.unshift(0); m++ < a; ) p.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (a != (m = p.length)) d = a > m ? 1 : -1;
        else for (u = -1, d = 0; ++u < a; ) if (r[u] != p[u]) {
          d = r[u] > p[u] ? 1 : -1;
          break;
        }
        if (d < 0) {
          for (c = m == a ? r : h; m; ) {
            if (p[--m] < c[m]) {
              for (u = m; u && !p[--u]; ) p[u] = 9;
              --p[u], p[m] += 10;
            }
            p[m] -= c[m];
          }
          for (; !p[0]; ) p.shift();
        } else break;
      }
      O[A++] = d ? l : ++l, p[0] && d ? p[m] = s[f] || 0 : p = [
        s[f]
      ];
    } while ((f++ < g || p[0] !== Ln) && i--);
    return !O[0] && A != 1 && (O.shift(), T.e--, N--), A > N && Tr(T, N, n.RM, p[0] !== Ln), T;
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
    var e, n, s, r, i = this, o = i.constructor, a = i.s, c = (t = new o(t)).s;
    if (a != c) return t.s = -c, i.plus(t);
    var l = i.c.slice(), d = i.e, u = t.c, h = t.e;
    if (!l[0] || !u[0]) return u[0] ? t.s = -c : l[0] ? t = new o(i) : t.s = 1, t;
    if (a = d - h) {
      for ((r = a < 0) ? (a = -a, s = l) : (h = d, s = u), s.reverse(), c = a; c--; ) s.push(0);
      s.reverse();
    } else for (n = ((r = l.length < u.length) ? l : u).length, a = c = 0; c < n; c++) if (l[c] != u[c]) {
      r = l[c] < u[c];
      break;
    }
    if (r && (s = l, l = u, u = s, t.s = -t.s), (c = (n = u.length) - (e = l.length)) > 0) for (; c--; ) l[e++] = 0;
    for (c = e; n > a; ) {
      if (l[--n] < u[n]) {
        for (e = n; e && !l[--e]; ) l[e] = 9;
        --l[e], l[n] += 10;
      }
      l[n] -= u[n];
    }
    for (; l[--c] === 0; ) l.pop();
    for (; l[0] === 0; ) l.shift(), --h;
    return l[0] || (t.s = 1, l = [
      h = 0
    ]), t.c = l, t.e = h, t;
  };
  xe.mod = function(t) {
    var e, n = this, s = n.constructor, r = n.s, i = (t = new s(t)).s;
    if (!t.c[0]) throw Error(sp);
    return n.s = t.s = 1, e = t.cmp(n) == 1, n.s = r, t.s = i, e ? new s(n) : (r = s.DP, i = s.RM, s.DP = s.RM = 0, n = n.div(t), s.DP = r, s.RM = i, this.minus(n.times(t)));
  };
  xe.neg = function() {
    var t = new this.constructor(this);
    return t.s = -t.s, t;
  };
  xe.plus = xe.add = function(t) {
    var e, n, s, r = this, i = r.constructor;
    if (t = new i(t), r.s != t.s) return t.s = -t.s, r.minus(t);
    var o = r.e, a = r.c, c = t.e, l = t.c;
    if (!a[0] || !l[0]) return l[0] || (a[0] ? t = new i(r) : t.s = r.s), t;
    if (a = a.slice(), e = o - c) {
      for (e > 0 ? (c = o, s = l) : (e = -e, s = a), s.reverse(); e--; ) s.push(0);
      s.reverse();
    }
    for (a.length - l.length < 0 && (s = l, l = a, a = s), e = l.length, n = 0; e; a[e] %= 10) n = (a[--e] = a[e] + l[e] + n) / 10 | 0;
    for (n && (a.unshift(n), ++c), e = a.length; a[--e] === 0; ) a.pop();
    return t.c = a, t.e = c, t;
  };
  xe.pow = function(t) {
    var e = this, n = new e.constructor("1"), s = n, r = t < 0;
    if (t !== ~~t || t < -Jd || t > Jd) throw Error(_r + "exponent");
    for (r && (t = -t); t & 1 && (s = s.times(e)), t >>= 1, !!t; ) e = e.times(e);
    return r ? n.div(s) : s;
  };
  xe.prec = function(t, e) {
    if (t !== ~~t || t < 1 || t > vr) throw Error(_r + "precision");
    return Tr(new this.constructor(this), t, e);
  };
  xe.round = function(t, e) {
    if (t === Ln) t = 0;
    else if (t !== ~~t || t < -vr || t > vr) throw Error(_a);
    return Tr(new this.constructor(this), t + this.e + 1, e);
  };
  xe.sqrt = function() {
    var t, e, n, s = this, r = s.constructor, i = s.s, o = s.e, a = new r("0.5");
    if (!s.c[0]) return new r(s);
    if (i < 0) throw Error(oo + "No square root");
    i = Math.sqrt(+Or(s, true, true)), i === 0 || i === 1 / 0 ? (e = s.c.join(""), e.length + o & 1 || (e += "0"), i = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), t = new r((i == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + o)) : t = new r(i + ""), o = t.e + (r.DP += 4);
    do
      n = t, t = a.times(n.plus(s.div(n)));
    while (n.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
    return Tr(t, (r.DP -= 4) + t.e + 1, r.RM);
  };
  xe.times = xe.mul = function(t) {
    var e, n = this, s = n.constructor, r = n.c, i = (t = new s(t)).c, o = r.length, a = i.length, c = n.e, l = t.e;
    if (t.s = n.s == t.s ? 1 : -1, !r[0] || !i[0]) return t.c = [
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
    var n = this, s = n.c[0];
    if (t !== Ln) {
      if (t !== ~~t || t < 0 || t > vr) throw Error(_a);
      for (n = Tr(new n.constructor(n), ++t, e); n.c.length < t; ) n.c.push(0);
    }
    return Or(n, true, !!s);
  };
  xe.toFixed = function(t, e) {
    var n = this, s = n.c[0];
    if (t !== Ln) {
      if (t !== ~~t || t < 0 || t > vr) throw Error(_a);
      for (n = Tr(new n.constructor(n), t + n.e + 1, e), t = t + n.e + 1; n.c.length < t; ) n.c.push(0);
    }
    return Or(n, false, !!s);
  };
  xe[Symbol.for("nodejs.util.inspect.custom")] = xe.toJSON = xe.toString = function() {
    var t = this, e = t.constructor;
    return Or(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
  };
  xe.toNumber = function() {
    var t = +Or(this, true, true);
    if (this.constructor.strict === true && !this.eq(t.toString())) throw Error(oo + "Imprecise conversion");
    return t;
  };
  xe.toPrecision = function(t, e) {
    var n = this, s = n.constructor, r = n.c[0];
    if (t !== Ln) {
      if (t !== ~~t || t < 1 || t > vr) throw Error(_r + "precision");
      for (n = Tr(new s(n), t, e); n.c.length < t; ) n.c.push(0);
    }
    return Or(n, t <= n.e || n.e <= s.NE || n.e >= s.PE, !!r);
  };
  xe.valueOf = function() {
    var t = this, e = t.constructor;
    if (e.strict === true) throw Error(oo + "valueOf disallowed");
    return Or(t, t.e <= e.NE || t.e >= e.PE, true);
  };
  var _n = rp();
  let iy, oy, ay, Rr;
  ip = {
    bigNumber(t, e = {
      safe: false
    }) {
      try {
        return t ? new _n(t) : new _n(0);
      } catch (n) {
        if (e.safe) return new _n(0);
        throw n;
      }
    },
    formatNumber(t, e) {
      const { decimals: n, round: s = 8, safe: r = true } = e;
      return ip.bigNumber(t, {
        safe: r
      }).div(new _n(10).pow(n)).round(s);
    },
    multiply(t, e) {
      if (t === void 0 || e === void 0) return new _n(0);
      const n = new _n(t), s = new _n(e);
      return n.times(s);
    },
    toFixed(t, e = 2) {
      return t === void 0 || t === "" ? new _n(0).toFixed(e) : new _n(t).toFixed(e);
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
      return new _n(e).toNumber();
    }
  };
  iy = [
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
  oy = [
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
  ay = [
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
  cy = {
    getERC20Abi: (t) => F.USDT_CONTRACT_ADDRESSES.includes(t) ? ay : iy,
    getSwapAbi: () => oy
  };
  Rr = {
    ConnectorExplorerIds: {
      [F.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [F.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [F.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [F.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
      [F.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
      [F.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [F.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      [F.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      [F.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      [F.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      [F.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
      [F.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
      [F.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
      [F.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
      [F.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
      [F.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
      [F.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
      [F.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [F.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
    }
  };
  it = {
    validateCaipAddress(t) {
      var _a2;
      if (((_a2 = t.split(":")) == null ? void 0 : _a2.length) !== 3) throw new Error("Invalid CAIP Address");
      return t;
    },
    parseCaipAddress(t) {
      const e = t.split(":");
      if (e.length !== 3) throw new Error(`Invalid CAIP-10 address: ${t}`);
      const [n, s, r] = e;
      if (!n || !s || !r) throw new Error(`Invalid CAIP-10 address: ${t}`);
      return {
        chainNamespace: n,
        chainId: s,
        address: r
      };
    },
    parseCaipNetworkId(t) {
      const e = t.split(":");
      if (e.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${t}`);
      const [n, s] = e;
      if (!n || !s) throw new Error(`Invalid CAIP-2 network id: ${t}`);
      return {
        chainNamespace: n,
        chainId: s
      };
    }
  };
  rs = {
    RPC_ERROR_CODE: {
      USER_REJECTED_REQUEST: 4001,
      USER_REJECTED_METHODS: 5002,
      USER_REJECTED: 5e3,
      SEND_TRANSACTION_ERROR: 5001
    },
    PROVIDER_RPC_ERROR_NAME: {
      PROVIDER_RPC: "ProviderRpcError",
      USER_REJECTED_REQUEST: "UserRejectedRequestError",
      SEND_TRANSACTION_ERROR: "SendTransactionError"
    },
    isRpcProviderError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          const e = t, n = typeof e.message == "string", s = typeof e.code == "number";
          return n && s;
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
      if (rs.isRpcProviderError(t)) {
        const e = t.code === rs.RPC_ERROR_CODE.USER_REJECTED_REQUEST, n = t.code === rs.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return e || n || rs.isUserRejectedMessage(t.message);
      }
      return t instanceof Error ? rs.isUserRejectedMessage(t.message) : false;
    }
  };
  class ly extends Error {
    constructor(e, n) {
      super(n.message, {
        cause: e
      }), this.name = rs.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = n.code;
    }
  }
  class op extends ly {
    constructor(e) {
      super(e, {
        code: rs.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request"
      }), this.name = rs.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
  }
  ie = {
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
    LATEST_APPKIT_VERSION: "@appkit/latest_version",
    TON_WALLETS_CACHE: "@appkit/ton_wallets_cache"
  };
  function Za(t) {
    if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`;
  }
  re = {
    setItem(t, e) {
      ki() && e !== void 0 && localStorage.setItem(t, e);
    },
    getItem(t) {
      if (ki()) return localStorage.getItem(t) || void 0;
    },
    removeItem(t) {
      ki() && localStorage.removeItem(t);
    },
    clear() {
      ki() && localStorage.clear();
    }
  };
  function ki() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function na(t, e) {
    const n = (t == null ? void 0 : t["--apkt-accent"]) ?? (t == null ? void 0 : t["--w3m-accent"]);
    return e === "light" ? {
      "--w3m-accent": n || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": n || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#202020"
    };
  }
  const dy = Symbol(), Xd = Object.getPrototypeOf, Qc = /* @__PURE__ */ new WeakMap(), uy = (t) => t && (Qc.has(t) ? Qc.get(t) : Xd(t) === Object.prototype || Xd(t) === Array.prototype), hy = (t) => uy(t) && t[dy] || null, Qd = (t, e = true) => {
    Qc.set(t, e);
  }, sa = {}, id = (t) => typeof t == "object" && t !== null, fy = (t) => id(t) && !ao.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer) && !(t instanceof Promise), ap = (t, e) => {
    const n = el.get(t);
    if ((n == null ? void 0 : n[0]) === e) return n[1];
    const s = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
    return Qd(s, true), el.set(t, [
      e,
      s
    ]), Reflect.ownKeys(t).forEach((r) => {
      if (Object.getOwnPropertyDescriptor(s, r)) return;
      const i = Reflect.get(t, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(t, r), a = {
        value: i,
        enumerable: o,
        configurable: true
      };
      if (ao.has(i)) Qd(i, false);
      else if (Hs.has(i)) {
        const [c, l] = Hs.get(i);
        a.value = ap(c, l());
      }
      Object.defineProperty(s, r, a);
    }), Object.preventExtensions(s);
  }, py = (t, e, n, s) => ({
    deleteProperty(r, i) {
      const o = Reflect.get(r, i);
      n(i);
      const a = Reflect.deleteProperty(r, i);
      return a && s([
        "delete",
        [
          i
        ],
        o
      ]), a;
    },
    set(r, i, o, a) {
      const c = !t() && Reflect.has(r, i), l = Reflect.get(r, i, a);
      if (c && (eu(l, o) || Gi.has(o) && eu(l, Gi.get(o)))) return true;
      n(i), id(o) && (o = hy(o) || o);
      const d = !Hs.has(o) && my(o) ? De(o) : o;
      return e(i, d), Reflect.set(r, i, d, a), s([
        "set",
        [
          i
        ],
        o,
        l
      ]), true;
    }
  }), Hs = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakSet(), el = /* @__PURE__ */ new WeakMap(), Ko = [
    1
  ], Gi = /* @__PURE__ */ new WeakMap();
  let eu = Object.is, gy = (t, e) => new Proxy(t, e), my = fy, wy = ap, yy = py;
  De = function(t = {}) {
    if (!id(t)) throw new Error("object required");
    const e = Gi.get(t);
    if (e) return e;
    let n = Ko[0];
    const s = /* @__PURE__ */ new Set(), r = (m, T = ++Ko[0]) => {
      n !== T && (i = n = T, s.forEach((O) => O(m, T)));
    };
    let i = n;
    const o = (m = Ko[0]) => (i !== m && (i = m, c.forEach(([T]) => {
      const O = T[1](m);
      O > n && (n = O);
    })), n), a = (m) => (T, O) => {
      const A = [
        ...T
      ];
      A[1] = [
        m,
        ...A[1]
      ], r(A, O);
    }, c = /* @__PURE__ */ new Map(), l = (m, T) => {
      const O = !ao.has(T) && Hs.get(T);
      if (O) {
        if ((sa ? "production" : void 0) !== "production" && c.has(m)) throw new Error("prop listener already exists");
        if (s.size) {
          const A = O[2](a(m));
          c.set(m, [
            O,
            A
          ]);
        } else c.set(m, [
          O
        ]);
      }
    }, d = (m) => {
      var T;
      const O = c.get(m);
      O && (c.delete(m), (T = O[1]) == null || T.call(O));
    }, u = (m) => (s.add(m), s.size === 1 && c.forEach(([O, A], N) => {
      if ((sa ? "production" : void 0) !== "production" && A) throw new Error("remove already exists");
      const P = O[2](a(N));
      c.set(N, [
        O,
        P
      ]);
    }), () => {
      s.delete(m), s.size === 0 && c.forEach(([O, A], N) => {
        A && (A(), c.set(N, [
          O
        ]));
      });
    });
    let h = true;
    const f = yy(() => h, l, d, r), g = gy(t, f);
    Gi.set(t, g);
    const p = [
      t,
      o,
      u
    ];
    return Hs.set(g, p), Reflect.ownKeys(t).forEach((m) => {
      const T = Object.getOwnPropertyDescriptor(t, m);
      "value" in T && T.writable && (g[m] = t[m]);
    }), h = false, g;
  };
  ot = function(t, e, n) {
    const s = Hs.get(t);
    (sa ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
    let r;
    const i = [], o = s[2];
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
  function Yi(t) {
    const e = Hs.get(t);
    (sa ? "production" : void 0) !== "production" && !e && console.warn("Please use proxy object");
    const [n, s] = e;
    return wy(n, s());
  }
  function Zi(t) {
    return ao.add(t), t;
  }
  function by() {
    return {
      proxyStateMap: Hs,
      refSet: ao,
      snapCache: el,
      versionHolder: Ko,
      proxyCache: Gi
    };
  }
  at = function(t, e, n, s) {
    let r = t[e];
    return ot(t, () => {
      const i = t[e];
      Object.is(r, i) || n(r = i);
    });
  };
  const { proxyStateMap: Ey, snapCache: vy } = by(), Ao = (t) => Ey.has(t);
  function Cy(t) {
    const e = [];
    let n = 0;
    const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = () => {
      const l = vy.get(a), d = l == null ? void 0 : l[1];
      if (d && !r.has(d)) {
        const u = new Map(s);
        r.set(d, u);
      }
    }, o = (l) => r.get(l) || s, a = {
      data: e,
      index: n,
      epoch: 0,
      get size() {
        return Ao(this) || i(), o(this).size;
      },
      get(l) {
        const u = o(this).get(l);
        if (u === void 0) {
          this.epoch;
          return;
        }
        return this.data[u];
      },
      has(l) {
        const d = o(this);
        return this.epoch, d.has(l);
      },
      set(l, d) {
        if (!Ao(this)) throw new Error("Cannot perform mutations on a snapshot");
        const u = s.get(l);
        return u === void 0 ? (s.set(l, this.index), this.data[this.index++] = d) : this.data[u] = d, this.epoch++, this;
      },
      delete(l) {
        if (!Ao(this)) throw new Error("Cannot perform mutations on a snapshot");
        const d = s.get(l);
        return d === void 0 ? false : (delete this.data[d], s.delete(l), this.epoch++, true);
      },
      clear() {
        if (!Ao(this)) throw new Error("Cannot perform mutations on a snapshot");
        this.data.length = 0, this.index = 0, this.epoch++, s.clear();
      },
      forEach(l) {
        this.epoch, o(this).forEach((u, h) => {
          l(this.data[u], h, this);
        });
      },
      *entries() {
        this.epoch;
        const l = o(this);
        for (const [d, u] of l) yield [
          d,
          this.data[u]
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
  var tu = {};
  let Ja, cp, Ay, zo, Iy, Xa;
  Ja = (typeof an < "u" && typeof tu < "u" ? tu.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
  cp = [
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
  Ay = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
  ge = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: Ja,
    SECURE_SITE_DASHBOARD: `${Ja}/dashboard`,
    SECURE_SITE_FAVICON: `${Ja}/images/favicon.png`,
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
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [
      F.CHAIN.EVM
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
      F.CHAIN.EVM
    ],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.TON
    ],
    NATIVE_TOKEN_ADDRESS: {
      eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      solana: "So11111111111111111111111111111111111111111",
      polkadot: "0x",
      bip122: "0x",
      cosmos: "0x",
      sui: "0x",
      stacks: "0x",
      ton: "0x"
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
      MOBILE: "Open and continue in the wallet app",
      WEB: "Open and continue in the wallet app"
    },
    SEND_SUPPORTED_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
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
      reownAuthentication: false,
      headless: false
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
      email: false,
      socials: false,
      swaps: false,
      onramp: false,
      activity: false,
      reownBranding: false,
      emailCapture: false,
      reownAuthentication: false,
      headless: false
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
      reownAuthentication: false,
      headless: false
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
      solana: "eoa",
      ton: "eoa"
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
    },
    MANDATORY_WALLET_IDS_ON_MOBILE: [
      Rr.ConnectorExplorerIds[F.CONNECTOR_ID.COINBASE],
      Rr.ConnectorExplorerIds[F.CONNECTOR_ID.COINBASE_SDK],
      Rr.ConnectorExplorerIds[F.CONNECTOR_ID.BASE_ACCOUNT],
      Rr.ConnectorExplorerIds[F.SOLFLARE_CONNECTOR_NAME],
      Rr.ConnectorExplorerIds[F.PHANTOM_CONNECTOR_NAME],
      Rr.ConnectorExplorerIds[F.BINANCE_CONNECTOR_NAME]
    ],
    DEFAULT_CONNECT_METHOD_ORDER: [
      "email",
      "social",
      "wallet"
    ]
  };
  H = {
    cacheExpiry: {
      portfolio: 3e4,
      nativeBalance: 3e4,
      ens: 3e5,
      identity: 3e5,
      transactionsHistory: 15e3,
      tokenPrice: 15e3,
      latestAppKitVersion: 6048e5,
      tonWallets: 864e5
    },
    isCacheExpired(t, e) {
      return Date.now() - t > e;
    },
    getActiveNetworkProps() {
      const t = H.getActiveNamespace(), e = H.getActiveCaipNetworkId(), n = e ? e.split(":")[1] : void 0, s = n ? isNaN(Number(n)) ? n : Number(n) : void 0;
      return {
        namespace: t,
        caipNetworkId: e,
        chainId: s
      };
    },
    setWalletConnectDeepLink({ name: t, href: e }) {
      try {
        re.setItem(ie.DEEPLINK_CHOICE, JSON.stringify({
          href: e,
          name: t
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const t = re.getItem(ie.DEEPLINK_CHOICE);
        if (t) return JSON.parse(t);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        re.removeItem(ie.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(t) {
      try {
        re.setItem(ie.ACTIVE_NAMESPACE, t);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(t) {
      try {
        re.setItem(ie.ACTIVE_CAIP_NETWORK_ID, t), H.setActiveNamespace(t.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return re.getItem(ie.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        re.removeItem(ie.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(t) {
      try {
        const e = Za(t);
        re.removeItem(e);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(t) {
      try {
        const e = H.getRecentWallets();
        e.find((s) => s.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), re.setItem(ie.RECENT_WALLETS, JSON.stringify(e)), re.setItem(ie.RECENT_WALLET, JSON.stringify(t)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const t = re.getItem(ie.RECENT_WALLETS);
        return t ? JSON.parse(t) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    getRecentWallet() {
      try {
        const t = re.getItem(ie.RECENT_WALLET);
        return t ? JSON.parse(t) : null;
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return null;
    },
    deleteRecentWallet() {
      try {
        re.removeItem(ie.RECENT_WALLET);
      } catch {
        console.info("Unable to delete AppKit recent");
      }
    },
    setConnectedConnectorId(t, e) {
      try {
        const n = Za(t);
        re.setItem(n, e);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return re.getItem(ie.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(t) {
      if (t) try {
        const e = Za(t);
        return re.getItem(e);
      } catch {
        console.info("Unable to get connected connector id in namespace", t);
      }
    },
    setConnectedSocialProvider(t) {
      try {
        re.setItem(ie.CONNECTED_SOCIAL, t);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return re.getItem(ie.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        re.removeItem(ie.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return re.getItem(ie.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var _a2, _b2;
      return (_b2 = (_a2 = re.getItem(ie.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a2.split(":")) == null ? void 0 : _b2[1];
    },
    setConnectionStatus(t) {
      try {
        re.setItem(ie.CONNECTION_STATUS, t);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return re.getItem(ie.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const t = re.getItem(ie.CONNECTED_NAMESPACES);
        return (t == null ? void 0 : t.length) ? t.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(t) {
      try {
        const e = Array.from(new Set(t));
        re.setItem(ie.CONNECTED_NAMESPACES, e.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(t) {
      try {
        const e = H.getConnectedNamespaces();
        e.includes(t) || (e.push(t), H.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(t) {
      try {
        const e = H.getConnectedNamespaces(), n = e.indexOf(t);
        n > -1 && (e.splice(n, 1), H.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return re.getItem(ie.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(t) {
      try {
        re.setItem(ie.TELEGRAM_SOCIAL_PROVIDER, t);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        re.removeItem(ie.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let t = {};
      try {
        const e = re.getItem(ie.PORTFOLIO_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromBalanceCache(t) {
      try {
        const e = H.getBalanceCache();
        re.setItem(ie.PORTFOLIO_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getBalanceCacheForCaipAddress(t) {
      try {
        const n = H.getBalanceCache()[t];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.portfolio)) return n.balance;
        H.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateBalanceCache(t) {
      try {
        const e = H.getBalanceCache();
        e[t.caipAddress] = t, re.setItem(ie.PORTFOLIO_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getNativeBalanceCache() {
      let t = {};
      try {
        const e = re.getItem(ie.NATIVE_BALANCE_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromNativeBalanceCache(t) {
      try {
        const e = H.getBalanceCache();
        re.setItem(ie.NATIVE_BALANCE_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getNativeBalanceCacheForCaipAddress(t) {
      try {
        const n = H.getNativeBalanceCache()[t];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.nativeBalance)) return n;
        console.info("Discarding cache for address", t), H.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateNativeBalanceCache(t) {
      try {
        const e = H.getNativeBalanceCache();
        e[t.caipAddress] = t, re.setItem(ie.NATIVE_BALANCE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getEnsCache() {
      let t = {};
      try {
        const e = re.getItem(ie.ENS_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return t;
    },
    getEnsFromCacheForAddress(t) {
      try {
        const n = H.getEnsCache()[t];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.ens)) return n.ens;
        H.removeEnsFromCache(t);
      } catch {
        console.info("Unable to get ens name from cache", t);
      }
    },
    updateEnsCache(t) {
      try {
        const e = H.getEnsCache();
        e[t.address] = t, re.setItem(ie.ENS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ens name cache", t);
      }
    },
    removeEnsFromCache(t) {
      try {
        const e = H.getEnsCache();
        re.setItem(ie.ENS_CACHE, JSON.stringify({
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
        const e = re.getItem(ie.IDENTITY_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return t;
    },
    getIdentityFromCacheForAddress(t) {
      try {
        const n = H.getIdentityCache()[t];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.identity)) return n.identity;
        H.removeIdentityFromCache(t);
      } catch {
        console.info("Unable to get identity from cache", t);
      }
    },
    updateIdentityCache(t) {
      try {
        const e = H.getIdentityCache();
        e[t.address] = {
          identity: t.identity,
          timestamp: t.timestamp
        }, re.setItem(ie.IDENTITY_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update identity cache", t);
      }
    },
    removeIdentityFromCache(t) {
      try {
        const e = H.getIdentityCache();
        re.setItem(ie.IDENTITY_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove identity from cache", t);
      }
    },
    getTonWalletsCache() {
      try {
        const t = re.getItem(ie.TON_WALLETS_CACHE), e = t ? JSON.parse(t) : void 0;
        if (e && !this.isCacheExpired(e.timestamp, this.cacheExpiry.tonWallets)) return e;
        H.removeTonWalletsCache();
      } catch {
        console.info("Unable to get ton wallets cache");
      }
    },
    updateTonWalletsCache(t) {
      try {
        const e = H.getTonWalletsCache() || {
          timestamp: 0,
          wallets: []
        };
        e.timestamp = (/* @__PURE__ */ new Date()).getTime(), e.wallets = t, re.setItem(ie.TON_WALLETS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ton wallets cache", t);
      }
    },
    removeTonWalletsCache() {
      try {
        re.removeItem(ie.TON_WALLETS_CACHE);
      } catch {
        console.info("Unable to remove ton wallets cache");
      }
    },
    clearAddressCache() {
      try {
        re.removeItem(ie.PORTFOLIO_CACHE), re.removeItem(ie.NATIVE_BALANCE_CACHE), re.removeItem(ie.ENS_CACHE), re.removeItem(ie.IDENTITY_CACHE), re.removeItem(ie.HISTORY_TRANSACTIONS_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(t) {
      try {
        re.setItem(ie.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
      } catch {
        console.info("Unable to set preferred account types", t);
      }
    },
    getPreferredAccountTypes() {
      try {
        const t = re.getItem(ie.PREFERRED_ACCOUNT_TYPES);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get preferred account types");
      }
      return {};
    },
    setConnections(t, e) {
      try {
        const n = H.getConnections(), s = n[e] ?? [], r = /* @__PURE__ */ new Map();
        for (const o of s) r.set(o.connectorId, {
          ...o
        });
        for (const o of t) {
          const a = r.get(o.connectorId), c = o.connectorId === F.CONNECTOR_ID.AUTH;
          if (a && !c) {
            const l = new Set(a.accounts.map((u) => u.address.toLowerCase())), d = o.accounts.filter((u) => !l.has(u.address.toLowerCase()));
            a.accounts.push(...d);
          } else r.set(o.connectorId, {
            ...o
          });
        }
        const i = {
          ...n,
          [e]: Array.from(r.values())
        };
        re.setItem(ie.CONNECTIONS, JSON.stringify(i));
      } catch (n) {
        console.error("Unable to sync connections to storage", n);
      }
    },
    getConnections() {
      try {
        const t = re.getItem(ie.CONNECTIONS);
        return t ? JSON.parse(t) : {};
      } catch (t) {
        return console.error("Unable to get connections from storage", t), {};
      }
    },
    deleteAddressFromConnection({ connectorId: t, address: e, namespace: n }) {
      try {
        const s = H.getConnections(), r = s[n] ?? [], i = new Map(r.map((a) => [
          a.connectorId,
          a
        ])), o = i.get(t);
        o && (o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase()).length === 0 ? i.delete(t) : i.set(t, {
          ...o,
          accounts: o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase())
        })), re.setItem(ie.CONNECTIONS, JSON.stringify({
          ...s,
          [n]: Array.from(i.values())
        }));
      } catch {
        console.error(`Unable to remove address "${e}" from connector "${t}" in namespace "${n}"`);
      }
    },
    getDisconnectedConnectorIds() {
      try {
        const t = re.getItem(ie.DISCONNECTED_CONNECTOR_IDS);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get disconnected connector ids");
      }
      return {};
    },
    addDisconnectedConnectorId(t, e) {
      try {
        const n = H.getDisconnectedConnectorIds(), s = n[e] ?? [];
        s.push(t), re.setItem(ie.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...n,
          [e]: Array.from(new Set(s))
        }));
      } catch {
        console.error(`Unable to set disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    removeDisconnectedConnectorId(t, e) {
      try {
        const n = H.getDisconnectedConnectorIds();
        let s = n[e] ?? [];
        s = s.filter((r) => r.toLowerCase() !== t.toLowerCase()), re.setItem(ie.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...n,
          [e]: Array.from(new Set(s))
        }));
      } catch {
        console.error(`Unable to remove disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    isConnectorDisconnected(t, e) {
      try {
        return (H.getDisconnectedConnectorIds()[e] ?? []).some((r) => r.toLowerCase() === t.toLowerCase());
      } catch {
        console.info(`Unable to get disconnected connector id "${t}" for namespace "${e}"`);
      }
      return false;
    },
    getTransactionsCache() {
      try {
        const t = re.getItem(ie.HISTORY_TRANSACTIONS_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get transactions cache");
      }
      return {};
    },
    getTransactionsCacheForAddress({ address: t, chainId: e = "" }) {
      var _a2;
      try {
        const s = (_a2 = H.getTransactionsCache()[t]) == null ? void 0 : _a2[e];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.transactionsHistory)) return s.transactions;
        H.removeTransactionsCache({
          address: t,
          chainId: e
        });
      } catch {
        console.info("Unable to get transactions cache");
      }
    },
    updateTransactionsCache({ address: t, chainId: e = "", timestamp: n, transactions: s }) {
      try {
        const r = H.getTransactionsCache();
        r[t] = {
          ...r[t],
          [e]: {
            timestamp: n,
            transactions: s
          }
        }, re.setItem(ie.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(r));
      } catch {
        console.info("Unable to update transactions cache", {
          address: t,
          chainId: e,
          timestamp: n,
          transactions: s
        });
      }
    },
    removeTransactionsCache({ address: t, chainId: e }) {
      try {
        const n = H.getTransactionsCache(), s = (n == null ? void 0 : n[t]) || {}, { [e]: r, ...i } = s;
        re.setItem(ie.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
          ...n,
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
        const t = re.getItem(ie.TOKEN_PRICE_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get token price cache");
      }
      return {};
    },
    getTokenPriceCacheForAddresses(t) {
      try {
        const n = H.getTokenPriceCache()[t.join(",")];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.tokenPrice)) return n.tokenPrice;
        H.removeTokenPriceCache(t);
      } catch {
        console.info("Unable to get token price cache for addresses", t);
      }
    },
    updateTokenPriceCache(t) {
      try {
        const e = H.getTokenPriceCache();
        e[t.addresses.join(",")] = {
          timestamp: t.timestamp,
          tokenPrice: t.tokenPrice
        }, re.setItem(ie.TOKEN_PRICE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update token price cache", t);
      }
    },
    removeTokenPriceCache(t) {
      try {
        const e = H.getTokenPriceCache();
        re.setItem(ie.TOKEN_PRICE_CACHE, JSON.stringify({
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
        const t = re.getItem(ie.LATEST_APPKIT_VERSION);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get latest AppKit version cache");
      }
      return {};
    },
    updateLatestAppKitVersion(t) {
      try {
        const e = H.getLatestAppKitVersionCache();
        e.timestamp = t.timestamp, e.version = t.version, re.setItem(ie.LATEST_APPKIT_VERSION, JSON.stringify(e));
      } catch {
        console.info("Unable to update latest AppKit version on local storage", t);
      }
    }
  };
  ee = {
    getWindow() {
      if (!(typeof window > "u")) return window;
    },
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
      return ee.isMobile() && t.includes("android");
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
      return t ? t - Date.now() <= ge.TEN_SEC_MS : true;
    },
    isAllowedRetry(t, e = ge.ONE_SEC_MS) {
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
      var _a2, _b2;
      if (ee.isClient() && window.self !== window.top) try {
        const t = (_b2 = (_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.ancestorOrigins) == null ? void 0 : _b2[0], e = "https://app.safe.global";
        if (t) {
          const n = new URL(t), s = new URL(e);
          return n.hostname === s.hostname;
        }
      } catch {
        return false;
      }
      return false;
    },
    getPairingExpiry() {
      return Date.now() + ge.FOUR_MINUTES_MS;
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
      let n;
      return (...s) => {
        function r() {
          t(...s);
        }
        n && clearTimeout(n), n = setTimeout(r, e);
      };
    },
    isHttpUrl(t) {
      return t.startsWith("http://") || t.startsWith("https://");
    },
    formatNativeUrl(t, e, n = null) {
      if (ee.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
      let s = t, r = n;
      s.includes("://") || (s = t.replaceAll("/", "").replaceAll(":", ""), s = `${s}://`), s.endsWith("/") || (s = `${s}/`), r && !(r == null ? void 0 : r.endsWith("/")) && (r = `${r}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
      const i = encodeURIComponent(e);
      return {
        redirect: `${s}wc?uri=${i}`,
        redirectUniversalLink: r ? `${r}wc?uri=${i}` : void 0,
        href: s
      };
    },
    formatUniversalUrl(t, e) {
      if (!ee.isHttpUrl(t)) return this.formatNativeUrl(t, e);
      let n = t;
      n.endsWith("/") || (n = `${n}/`);
      const s = encodeURIComponent(e);
      return {
        redirect: `${n}wc?uri=${s}`,
        href: n
      };
    },
    getOpenTargetForPlatform(t) {
      return t === "popupWindow" ? t : this.isTelegram() ? H.getTelegramSocialProvider() ? "_top" : "_blank" : t;
    },
    openHref(t, e, n) {
      window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), n || "noreferrer noopener");
    },
    returnOpenHref(t, e, n) {
      return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), n || "noreferrer noopener");
    },
    isTelegram() {
      return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
    },
    isPWA() {
      var _a2, _b2;
      if (typeof window > "u") return false;
      const t = (window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" ? (_a2 = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : _a2.matches : false, e = (_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.standalone;
      return !!(t || e);
    },
    async preloadImage(t) {
      const e = new Promise((n, s) => {
        const r = new Image();
        r.onload = n, r.onerror = s, r.crossOrigin = "anonymous", r.src = t;
      });
      return Promise.race([
        e,
        ee.wait(2e3)
      ]);
    },
    parseBalance(t, e) {
      let n = "0.000";
      if (typeof t == "string") {
        const c = Number(t);
        if (!isNaN(c)) {
          const l = (Math.floor(c * 1e3) / 1e3).toFixed(3);
          l && (n = l);
        }
      }
      const [s, r] = n.split("."), i = s || "0", o = r || "000";
      return {
        formattedText: `${i}.${o}${e ? ` ${e}` : ""}`,
        value: i,
        decimals: o,
        symbol: e
      };
    },
    getApiUrl() {
      return F.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return F.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return F.PULSE_API_URL;
    },
    getUUID() {
      return (crypto == null ? void 0 : crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
        const e = Math.random() * 16 | 0;
        return (t === "x" ? e : e & 3 | 8).toString(16);
      });
    },
    parseError(t) {
      var _a2, _b2;
      return typeof t == "string" ? t : typeof ((_b2 = (_a2 = t == null ? void 0 : t.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error";
    },
    sortRequestedNetworks(t, e = []) {
      const n = {};
      return e && t && (t.forEach((s, r) => {
        n[s] = r;
      }), e.sort((s, r) => {
        const i = n[s.id], o = n[r.id];
        return i !== void 0 && o !== void 0 ? i - o : i !== void 0 ? -1 : o !== void 0 ? 1 : 0;
      })), e;
    },
    calculateBalance(t) {
      let e = 0;
      for (const n of t) e += n.value ?? 0;
      return e;
    },
    formatTokenBalance(t) {
      const e = t.toFixed(2), [n, s] = e.split(".");
      return {
        dollars: n,
        pennies: s
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
        case "bip122": {
          const n = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(t), s = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(t), r = /^bc1[a-z0-9]{39,87}$/u.test(t), i = /^bc1p[a-z0-9]{58}$/u.test(t);
          return n || s || r || i;
        }
        default:
          return false;
      }
    },
    uniqueBy(t, e) {
      const n = /* @__PURE__ */ new Set();
      return t.filter((s) => {
        const r = s[e];
        return n.has(r) ? false : (n.add(r), true);
      });
    },
    generateSdkVersion(t, e, n) {
      const r = t.length === 0 ? ge.ADAPTER_TYPES.UNIVERSAL : t.map((i) => i.adapterType).join(",");
      return `${e}-${r}-${n}`;
    },
    createAccount(t, e, n, s, r) {
      return {
        namespace: t,
        address: e,
        type: n,
        publicKey: s,
        path: r
      };
    },
    isCaipAddress(t) {
      if (typeof t != "string") return false;
      const e = t.split(":"), n = e[0];
      return e.filter(Boolean).length === 3 && n in F.CHAIN_NAME_MAP;
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
      const e = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, n = "state=";
      if (new URL(t).host === "auth.magic.link") {
        const r = "provider_authorization_url=", i = t.substring(t.indexOf(r) + r.length), o = this.injectIntoUrl(decodeURIComponent(i), n, e);
        return t.replace(i, encodeURIComponent(o));
      }
      return this.injectIntoUrl(t, n, e);
    },
    injectIntoUrl(t, e, n) {
      const s = t.indexOf(e);
      if (s === -1) throw new Error(`${e} parameter not found in the URL: ${t}`);
      const r = t.indexOf("&", s), i = e.length, o = r !== -1 ? r : t.length, a = t.substring(0, s + i), c = t.substring(s + i, o), l = t.substring(r), d = c + n;
      return a + d + l;
    },
    isNumber(t) {
      return typeof t != "number" && typeof t != "string" ? false : !isNaN(Number(t));
    }
  };
  zo = {
    STORAGE_KEY: "@appkit-wallet/",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
  };
  is = {
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
  Iy = {
    set(t, e) {
      Xa.isClient && localStorage.setItem(`${zo.STORAGE_KEY}${t}`, e);
    },
    get(t) {
      return Xa.isClient ? localStorage.getItem(`${zo.STORAGE_KEY}${t}`) : null;
    },
    delete(t, e) {
      Xa.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${zo.STORAGE_KEY}${t}`));
    }
  };
  Xa = {
    isClient: typeof window < "u"
  };
  async function wi(...t) {
    const e = await fetch(...t);
    if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
    return e;
  }
  co = class {
    constructor({ baseUrl: e, clientId: n }) {
      this.baseUrl = e, this.clientId = n;
    }
    async get({ headers: e, signal: n, cache: s, ...r }) {
      const i = this.createUrl(r);
      return (await wi(i, {
        method: "GET",
        headers: e,
        signal: n,
        cache: s
      })).json();
    }
    async getBlob({ headers: e, signal: n, ...s }) {
      const r = this.createUrl(s);
      return (await wi(r, {
        method: "GET",
        headers: e,
        signal: n
      })).blob();
    }
    async post({ body: e, headers: n, signal: s, ...r }) {
      const i = this.createUrl(r);
      return (await wi(i, {
        method: "POST",
        headers: n,
        body: e ? JSON.stringify(e) : void 0,
        signal: s
      })).json();
    }
    async put({ body: e, headers: n, signal: s, ...r }) {
      const i = this.createUrl(r);
      return (await wi(i, {
        method: "PUT",
        headers: n,
        body: e ? JSON.stringify(e) : void 0,
        signal: s
      })).json();
    }
    async delete({ body: e, headers: n, signal: s, ...r }) {
      const i = this.createUrl(r);
      return (await wi(i, {
        method: "DELETE",
        headers: n,
        body: e ? JSON.stringify(e) : void 0,
        signal: s
      })).json();
    }
    createUrl({ path: e, params: n }) {
      const s = new URL(e, this.baseUrl);
      return n && Object.entries(n).forEach(([r, i]) => {
        i && s.searchParams.append(r, i);
      }), this.clientId && s.searchParams.append("clientId", this.clientId), s;
    }
    sendBeacon({ body: e, ...n }) {
      const s = this.createUrl(n);
      return navigator.sendBeacon(s.toString(), e ? JSON.stringify(e) : void 0);
    }
  };
  let tl, oe, rr, Ve, Ny, Sy, lp, Et, _y, Ty, Oy, xy, gs, ky;
  tl = {
    getFeatureValue(t, e) {
      const n = e == null ? void 0 : e[t];
      return n === void 0 ? ge.DEFAULT_FEATURES[t] : n;
    },
    filterSocialsByPlatform(t) {
      if (!t || !t.length) return t;
      let e = t;
      return ee.isTelegram() && (ee.isIos() && (e = e.filter((n) => n !== "google")), ee.isMac() && (e = e.filter((n) => n !== "x")), ee.isAndroid() && (e = e.filter((n) => ![
        "facebook",
        "x"
      ].includes(n)))), ee.isMobile() && (e = e.filter((n) => n !== "facebook")), e;
    },
    isSocialsEnabled() {
      var _a2, _b2, _c2, _d3;
      return Array.isArray((_a2 = j.state.features) == null ? void 0 : _a2.socials) && ((_b2 = j.state.features) == null ? void 0 : _b2.socials.length) > 0 || Array.isArray((_c2 = j.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = j.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0;
    },
    isEmailEnabled() {
      var _a2, _b2;
      return !!(((_a2 = j.state.features) == null ? void 0 : _a2.email) || ((_b2 = j.state.remoteFeatures) == null ? void 0 : _b2.email));
    }
  };
  oe = De({
    features: ge.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: ge.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: "all"
  });
  j = {
    state: oe,
    subscribeKey(t, e) {
      return at(oe, t, e);
    },
    setOptions(t) {
      Object.assign(oe, t);
    },
    setRemoteFeatures(t) {
      var _a2, _b2;
      if (!t) return;
      const e = {
        ...oe.remoteFeatures,
        ...t
      };
      oe.remoteFeatures = e, ((_a2 = oe.remoteFeatures) == null ? void 0 : _a2.socials) && (oe.remoteFeatures.socials = tl.filterSocialsByPlatform(oe.remoteFeatures.socials)), ((_b2 = oe.features) == null ? void 0 : _b2.pay) && (oe.remoteFeatures.email = false, oe.remoteFeatures.socials = false);
    },
    setFeatures(t) {
      var _a2;
      if (!t) return;
      oe.features || (oe.features = ge.DEFAULT_FEATURES);
      const e = {
        ...oe.features,
        ...t
      };
      oe.features = e, ((_a2 = oe.features) == null ? void 0 : _a2.pay) && oe.remoteFeatures && (oe.remoteFeatures.email = false, oe.remoteFeatures.socials = false);
    },
    setProjectId(t) {
      oe.projectId = t;
    },
    setCustomRpcUrls(t) {
      oe.customRpcUrls = t;
    },
    setAllWallets(t) {
      oe.allWallets = t;
    },
    setIncludeWalletIds(t) {
      oe.includeWalletIds = t;
    },
    setExcludeWalletIds(t) {
      oe.excludeWalletIds = t;
    },
    setFeaturedWalletIds(t) {
      oe.featuredWalletIds = t;
    },
    setTokens(t) {
      oe.tokens = t;
    },
    setTermsConditionsUrl(t) {
      oe.termsConditionsUrl = t;
    },
    setPrivacyPolicyUrl(t) {
      oe.privacyPolicyUrl = t;
    },
    setCustomWallets(t) {
      oe.customWallets = t;
    },
    setIsSiweEnabled(t) {
      oe.isSiweEnabled = t;
    },
    setIsUniversalProvider(t) {
      oe.isUniversalProvider = t;
    },
    setSdkVersion(t) {
      oe.sdkVersion = t;
    },
    setMetadata(t) {
      oe.metadata = t;
    },
    setDisableAppend(t) {
      oe.disableAppend = t;
    },
    setEIP6963Enabled(t) {
      oe.enableEIP6963 = t;
    },
    setDebug(t) {
      oe.debug = t;
    },
    setEnableWalletGuide(t) {
      oe.enableWalletGuide = t;
    },
    setEnableAuthLogger(t) {
      oe.enableAuthLogger = t;
    },
    setEnableWallets(t) {
      oe.enableWallets = t;
    },
    setPreferUniversalLinks(t) {
      oe.experimental_preferUniversalLinks = t;
    },
    setSIWX(t) {
      if (t) for (const [e, n] of Object.entries(ge.SIWX_DEFAULTS)) t[e] ?? (t[e] = n);
      oe.siwx = t;
    },
    setConnectMethodsOrder(t) {
      oe.features = {
        ...oe.features,
        connectMethodsOrder: t
      };
    },
    setWalletFeaturesOrder(t) {
      oe.features = {
        ...oe.features,
        walletFeaturesOrder: t
      };
    },
    setSocialsOrder(t) {
      oe.remoteFeatures = {
        ...oe.remoteFeatures,
        socials: t
      };
    },
    setCollapseWallets(t) {
      oe.features = {
        ...oe.features,
        collapseWallets: t
      };
    },
    setEnableEmbedded(t) {
      oe.enableEmbedded = t;
    },
    setAllowUnsupportedChain(t) {
      oe.allowUnsupportedChain = t;
    },
    setManualWCControl(t) {
      oe.manualWCControl = t;
    },
    setEnableNetworkSwitch(t) {
      oe.enableNetworkSwitch = t;
    },
    setEnableMobileFullScreen(t) {
      oe.enableMobileFullScreen = ee.isMobile() && t;
    },
    setEnableReconnect(t) {
      oe.enableReconnect = t;
    },
    setCoinbasePreference(t) {
      oe.coinbasePreference = t;
    },
    setDefaultAccountTypes(t = {}) {
      Object.entries(t).forEach(([e, n]) => {
        n && (oe.defaultAccountTypes[e] = n);
      });
    },
    setUniversalProviderConfigOverride(t) {
      oe.universalProviderConfigOverride = t;
    },
    getUniversalProviderConfigOverride() {
      return oe.universalProviderConfigOverride;
    },
    getSnapshot() {
      return Yi(oe);
    }
  };
  rr = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  Ve = De({
    ...rr
  });
  Ny = {
    state: Ve,
    subscribeKey(t, e) {
      return at(Ve, t, e);
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
      const e = ee.parseError(t);
      this._showMessage({
        message: e,
        variant: "error"
      });
    },
    hide() {
      Ve.message = rr.message, Ve.variant = rr.variant, Ve.svg = rr.svg, Ve.open = rr.open, Ve.autoClose = rr.autoClose;
    },
    _showMessage({ message: t, svg: e, variant: n = "success", autoClose: s = rr.autoClose }) {
      Ve.open ? (Ve.open = false, setTimeout(() => {
        Ve.message = t, Ve.variant = n, Ve.svg = e, Ve.open = true, Ve.autoClose = s;
      }, 150)) : (Ve.message = t, Ve.variant = n, Ve.svg = e, Ve.open = true, Ve.autoClose = s);
    }
  };
  Un = Ny;
  Sy = {
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
  lp = ee.getBlockchainApiUrl();
  Et = De({
    clientId: null,
    api: new co({
      baseUrl: lp,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  le = {
    state: Et,
    async get(t) {
      const { st: e, sv: n } = le.getSdkProperties(), s = j.state.projectId, r = {
        ...t.params || {},
        st: e,
        sv: n,
        projectId: s
      };
      return Et.api.get({
        ...t,
        params: r
      });
    },
    getSdkProperties() {
      const { sdkType: t, sdkVersion: e } = j.state;
      return {
        st: t || "unknown",
        sv: e || "unknown"
      };
    },
    async isNetworkSupported(t) {
      if (!t) return false;
      try {
        Et.supportedChains.http.length || await le.getSupportedNetworks();
      } catch {
        return false;
      }
      return Et.supportedChains.http.includes(t);
    },
    async getSupportedNetworks() {
      try {
        const t = await le.get({
          path: "v1/supported-chains"
        });
        return Et.supportedChains = t, t;
      } catch {
        return Et.supportedChains;
      }
    },
    async fetchIdentity({ address: t }) {
      const e = H.getIdentityFromCacheForAddress(t);
      if (e) return e;
      const n = await le.get({
        path: `/v1/identity/${t}`,
        params: {
          sender: b.state.activeCaipAddress ? ee.getPlainAddress(b.state.activeCaipAddress) : void 0
        }
      });
      return H.updateIdentityCache({
        address: t,
        identity: n,
        timestamp: Date.now()
      }), n;
    },
    async fetchTransactions({ account: t, cursor: e, signal: n, cache: s, chainId: r }) {
      var _a2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        data: [],
        next: void 0
      };
      const o = H.getTransactionsCacheForAddress({
        address: t,
        chainId: r
      });
      if (o) return o;
      const a = await le.get({
        path: `/v1/account/${t}/history`,
        params: {
          cursor: e,
          chainId: r
        },
        signal: n,
        cache: s
      });
      return H.updateTransactionsCache({
        address: t,
        chainId: r,
        timestamp: Date.now(),
        transactions: a
      }), a;
    },
    async fetchSwapQuote({ amount: t, userAddress: e, from: n, to: s, gasPrice: r }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: "/v1/convert/quotes",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          amount: t,
          userAddress: e,
          from: n,
          to: s,
          gasPrice: r
        }
      }) : {
        quotes: []
      };
    },
    async fetchSwapTokens({ chainId: t }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: "/v1/convert/tokens",
        params: {
          chainId: t
        }
      }) : {
        tokens: []
      };
    },
    async getAddressBalance({ caipNetworkId: t, address: e }) {
      return Et.api.post({
        path: `/v1?chainId=${t}&projectId=${j.state.projectId}`,
        body: {
          id: "1",
          jsonrpc: "2.0",
          method: "getAddressBalance",
          params: {
            address: e
          }
        }
      }).then((n) => n.result);
    },
    async fetchTokenPrice({ addresses: t, caipNetworkId: e = ((_a2) => (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)() }) {
      if (!await le.isNetworkSupported(e)) return {
        fungibles: []
      };
      const s = H.getTokenPriceCacheForAddresses(t);
      if (s) return s;
      const r = await Et.api.post({
        path: "/v1/fungible/price",
        body: {
          currency: "usd",
          addresses: t,
          projectId: j.state.projectId
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      return H.updateTokenPriceCache({
        addresses: t,
        timestamp: Date.now(),
        tokenPrice: r
      }), r;
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
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
      const { st: e, sv: n } = le.getSdkProperties();
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Gas Price");
      return le.get({
        path: "/v1/convert/gas-price",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          chainId: t,
          st: e,
          sv: n
        }
      });
    },
    async generateSwapCalldata({ amount: t, from: e, to: n, userAddress: s, disableEstimate: r }) {
      var _a2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return Et.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: t,
          eip155: {
            slippage: ge.CONVERT_SLIPPAGE_TOLERANCE
          },
          projectId: j.state.projectId,
          from: e,
          to: n,
          userAddress: s,
          disableEstimate: r
        }
      });
    },
    async generateApproveCalldata({ from: t, to: e, userAddress: n }) {
      var _a2;
      const { st: s, sv: r } = le.getSdkProperties();
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return le.get({
        path: "/v1/convert/build-approve",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          userAddress: n,
          from: t,
          to: e,
          st: s,
          sv: r
        }
      });
    },
    async getBalance(t, e, n) {
      var _a2;
      const { st: s, sv: r } = le.getSdkProperties();
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return Un.showError("Token Balance Unavailable"), {
        balances: []
      };
      const o = `${e}:${t}`, a = H.getBalanceCacheForCaipAddress(o);
      if (a) return a;
      const c = await le.get({
        path: `/v1/account/${t}/balance`,
        params: {
          currency: "usd",
          chainId: e,
          forceUpdate: n,
          st: s,
          sv: r
        }
      });
      return H.updateBalanceCache({
        caipAddress: o,
        balance: c,
        timestamp: Date.now()
      }), c;
    },
    async lookupEnsName(t) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
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
      var _a2, _b2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return [];
      const n = (_b2 = b.getAccountData()) == null ? void 0 : _b2.address;
      return le.get({
        path: `/v1/profile/reverse/${t}`,
        params: {
          sender: n,
          apiVersion: "2"
        }
      });
    },
    async getEnsNameSuggestions(t) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: `/v1/profile/suggestions/${t}`,
        params: {
          zone: "reown.id"
        }
      }) : {
        suggestions: []
      };
    },
    async registerEnsName({ coinType: t, address: e, message: n, signature: s }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? Et.api.post({
        path: "/v1/profile/account",
        body: {
          coin_type: t,
          address: e,
          message: n,
          signature: s
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        success: false
      };
    },
    async generateOnRampURL({ destinationWallets: t, partnerUserId: e, defaultNetwork: n, purchaseAmount: s, paymentAmount: r }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? (await Et.api.post({
        path: "/v1/generators/onrampurl",
        params: {
          projectId: j.state.projectId
        },
        body: {
          destinationWallets: t,
          defaultNetwork: n,
          partnerUserId: e,
          defaultExperience: "buy",
          presetCryptoAmount: s,
          presetFiatAmount: r
        }
      })).url : "";
    },
    async getOnrampOptions() {
      var _a2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        paymentCurrencies: [],
        purchaseCurrencies: []
      };
      try {
        return await le.get({
          path: "/v1/onramp/options"
        });
      } catch {
        return Sy;
      }
    },
    async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: n, network: s }) {
      var _a2;
      try {
        return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? await Et.api.post({
          path: "/v1/onramp/quote",
          params: {
            projectId: j.state.projectId
          },
          body: {
            purchaseCurrency: t,
            paymentCurrency: e,
            amount: n,
            network: s
          }
        }) : null;
      } catch {
        return {
          networkFee: {
            amount: n,
            currency: e.id
          },
          paymentSubtotal: {
            amount: n,
            currency: e.id
          },
          paymentTotal: {
            amount: n,
            currency: e.id
          },
          purchaseAmount: {
            amount: n,
            currency: e.id
          },
          quoteId: "mocked-quote-id"
        };
      }
    },
    async getSmartSessions(t) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: `/v1/sessions/${t}`
      }) : [];
    },
    async revokeSmartSession(t, e, n) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? Et.api.post({
        path: `/v1/sessions/${t}/revoke`,
        params: {
          projectId: j.state.projectId
        },
        body: {
          pci: e,
          signature: n
        }
      }) : {
        success: false
      };
    },
    setClientId(t) {
      Et.clientId = t, Et.api = new co({
        baseUrl: lp,
        clientId: t
      });
    }
  };
  _y = Object.freeze({
    enabled: true,
    events: []
  });
  Ty = new co({
    baseUrl: ee.getAnalyticsUrl(),
    clientId: null
  });
  Oy = 5;
  xy = 60 * 1e3;
  gs = De({
    ..._y
  });
  ky = {
    state: gs,
    subscribeKey(t, e) {
      return at(gs, t, e);
    },
    async sendError(t, e) {
      if (!gs.enabled) return;
      const n = Date.now();
      if (gs.events.filter((i) => {
        const o = new Date(i.properties.timestamp || "").getTime();
        return n - o < xy;
      }).length >= Oy) return;
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
      gs.events.push(r);
      try {
        if (typeof window > "u") return;
        const { projectId: i, sdkType: o, sdkVersion: a } = j.state;
        await Ty.post({
          path: "/e",
          params: {
            projectId: i,
            st: o,
            sv: a || "html-wagmi-4.2.2"
          },
          body: {
            eventId: ee.getUUID(),
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
      gs.enabled = true;
    },
    disable() {
      gs.enabled = false;
    },
    clearEvents() {
      gs.events = [];
    }
  };
  Cr = class extends Error {
    constructor(e, n, s) {
      super(e), this.originalName = "AppKitError", this.name = "AppKitError", this.category = n, this.originalError = s, s && s instanceof Error && (this.originalName = s.name), Object.setPrototypeOf(this, Cr.prototype);
      let r = false;
      if (s instanceof Error && typeof s.stack == "string" && s.stack) {
        const i = s.stack, o = i.indexOf(`
`);
        if (o > -1) {
          const a = i.substring(o + 1);
          this.stack = `${this.name}: ${this.message}
${a}`, r = true;
        }
      }
      r || (Error.captureStackTrace ? Error.captureStackTrace(this, Cr) : this.stack || (this.stack = `${this.name}: ${this.message}`));
    }
  };
  function nu(t, e) {
    let n = "";
    try {
      t instanceof Error ? n = t.message : typeof t == "string" ? n = t : typeof t == "object" && t !== null ? Object.keys(t).length === 0 ? n = "Unknown error" : n = (t == null ? void 0 : t.message) || JSON.stringify(t) : n = String(t);
    } catch (r) {
      n = "Unknown error", console.error("Error parsing error message", r);
    }
    const s = t instanceof Cr ? t : new Cr(n, e, t);
    throw ky.sendError(s, s.category), s;
  }
  ln = function(t, e = "INTERNAL_SDK_ERROR") {
    const n = {};
    return Object.keys(t).forEach((s) => {
      const r = t[s];
      if (typeof r == "function") {
        let i = r;
        r.constructor.name === "AsyncFunction" ? i = async (...o) => {
          try {
            return await r(...o);
          } catch (a) {
            return nu(a, e);
          }
        } : i = (...o) => {
          try {
            return r(...o);
          } catch (a) {
            return nu(a, e);
          }
        }, n[s] = i;
      } else n[s] = r;
    }), n;
  };
  let Lt, Py, su, $r, tn, Ry, $y, Uy, Dy, By, ru, Fe, Ly, vt, My, iu, Fy, he, jy, Te, qy, qn, nl, dp, Wy, Ee, Hy, Vy, yi;
  Lt = De({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  Py = {
    state: Lt,
    subscribeNetworkImages(t) {
      return ot(Lt.networkImages, () => t(Lt.networkImages));
    },
    subscribeKey(t, e) {
      return at(Lt, t, e);
    },
    subscribe(t) {
      return ot(Lt, () => t(Lt));
    },
    setWalletImage(t, e) {
      Lt.walletImages[t] = e;
    },
    setNetworkImage(t, e) {
      Lt.networkImages[t] = e;
    },
    setChainImage(t, e) {
      Lt.chainImages[t] = e;
    },
    setConnectorImage(t, e) {
      Lt.connectorImages = {
        ...Lt.connectorImages,
        [t]: e
      };
    },
    setTokenImage(t, e) {
      Lt.tokenImages[t] = e;
    },
    setCurrencyImage(t, e) {
      Lt.currencyImages[t] = e;
    }
  };
  rn = ln(Py);
  su = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: "",
    ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
  };
  $r = De({
    networkImagePromises: {},
    tokenImagePromises: {}
  });
  ra = {
    async fetchWalletImage(t) {
      if (t) return await se._fetchWalletImage(t), this.getWalletImageById(t);
    },
    async fetchNetworkImage(t) {
      if (!t) return;
      const e = this.getNetworkImageById(t);
      return e || ($r.networkImagePromises[t] || ($r.networkImagePromises[t] = se._fetchNetworkImage(t)), await $r.networkImagePromises[t], this.getNetworkImageById(t));
    },
    async fetchTokenImage(t) {
      if (t) return $r.tokenImagePromises[t] || ($r.tokenImagePromises[t] = se._fetchTokenImage(t)), await $r.tokenImagePromises[t], this.getTokenImage(t);
    },
    getWalletImageById(t) {
      if (t) return rn.state.walletImages[t];
    },
    getWalletImage(t) {
      if (t == null ? void 0 : t.image_url) return t == null ? void 0 : t.image_url;
      if (t == null ? void 0 : t.image_id) return rn.state.walletImages[t.image_id];
    },
    getNetworkImage(t) {
      var _a2, _b2, _c2;
      if ((_a2 = t == null ? void 0 : t.assets) == null ? void 0 : _a2.imageUrl) return (_b2 = t == null ? void 0 : t.assets) == null ? void 0 : _b2.imageUrl;
      if ((_c2 = t == null ? void 0 : t.assets) == null ? void 0 : _c2.imageId) return rn.state.networkImages[t.assets.imageId];
    },
    getNetworkImageById(t) {
      if (t) return rn.state.networkImages[t];
    },
    getConnectorImage(t) {
      var _a2;
      if (t == null ? void 0 : t.imageUrl) return t.imageUrl;
      if ((_a2 = t == null ? void 0 : t.info) == null ? void 0 : _a2.icon) return t.info.icon;
      if (t == null ? void 0 : t.imageId) return rn.state.connectorImages[t.imageId];
    },
    getChainImage(t) {
      return rn.state.networkImages[su[t]];
    },
    getTokenImage(t) {
      if (t) return rn.state.tokenImages[t];
    },
    getWalletImageUrl(t) {
      if (!t) return "";
      const { projectId: e, sdkType: n, sdkVersion: s } = j.state, r = new URL(`${F.W3M_API_URL}/getWalletImage/${t}`);
      return r.searchParams.set("projectId", e), r.searchParams.set("st", n), r.searchParams.set("sv", s), r.toString();
    },
    getAssetImageUrl(t) {
      if (!t) return "";
      const { projectId: e, sdkType: n, sdkVersion: s } = j.state, r = new URL(`${F.W3M_API_URL}/public/getAssetImage/${t}`);
      return r.searchParams.set("projectId", e), r.searchParams.set("st", n), r.searchParams.set("sv", s), r.toString();
    },
    getChainNamespaceImageUrl(t) {
      return this.getAssetImageUrl(su[t]);
    },
    async getImageByToken(t, e) {
      if (t === "native") {
        const s = F.NATIVE_IMAGE_IDS_BY_NAMESPACE[e] ?? null;
        return s ? ra.fetchNetworkImage(s) : void 0;
      }
      const [, n] = Object.entries(F.TOKEN_SYMBOLS_BY_ADDRESS).find(([s]) => s.toLowerCase() === t.toLowerCase()) ?? [];
      if (n) return ra.fetchTokenImage(n);
    }
  };
  tn = {
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
  Ry = {
    handleMobileDeeplinkRedirect(t, e) {
      const n = window.location.href, s = encodeURIComponent(n);
      if (t === tn.PHANTOM.id && !("phantom" in window)) {
        const r = n.startsWith("https") ? "https" : "http", i = n.split("/")[2], o = encodeURIComponent(`${r}://${i}`);
        window.location.href = `${tn.PHANTOM.url}/ul/browse/${s}?ref=${o}`;
      }
      if (t === tn.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${tn.SOLFLARE.url}/ul/v1/browse/${s}?ref=${s}`), e === F.CHAIN.SOLANA && t === tn.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${tn.COINBASE.url}/dapp?cb_url=${s}`), e === F.CHAIN.BITCOIN && t === tn.BINANCE.id && !("binancew3w" in window)) {
        const r = b.state.activeCaipNetwork, i = window.btoa("/pages/browser/index"), o = window.btoa(`url=${s}&defaultChainId=${(r == null ? void 0 : r.id) ?? 1}`), a = new URL(tn.BINANCE.deeplink);
        a.searchParams.set("appId", tn.BINANCE.appId), a.searchParams.set("startPagePath", i), a.searchParams.set("startPageQuery", o);
        const c = new URL(tn.BINANCE.url);
        c.searchParams.set("_dp", window.btoa(a.toString())), window.location.href = c.toString();
      }
    }
  };
  $y = ee.getAnalyticsUrl();
  Uy = new co({
    baseUrl: $y,
    clientId: null
  });
  Dy = [
    "MODAL_CREATED"
  ];
  By = 45;
  ru = 1e3 * 10;
  Fe = De({
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
  fe = {
    state: Fe,
    subscribe(t) {
      return ot(Fe, () => t(Fe));
    },
    getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: n } = j.state;
      return {
        projectId: t,
        st: e,
        sv: n || "html-wagmi-4.2.2"
      };
    },
    shouldFlushEvents() {
      const t = JSON.stringify(Fe.pendingEvents).length / 1024 > By, e = Fe.lastFlush + ru < Date.now();
      return t || e;
    },
    _setPendingEvent(t) {
      var _a2, _b2;
      try {
        let e = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address;
        if ("address" in t.data && t.data.address && (e = t.data.address), Dy.includes(t.data.event) || typeof window > "u") return;
        const n = (_b2 = b.getActiveCaipNetwork()) == null ? void 0 : _b2.caipNetworkId;
        this.state.pendingEvents.push({
          eventId: ee.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: t.timestamp,
          props: {
            ...t.data,
            address: e,
            properties: {
              ..."properties" in t.data ? t.data.properties : {},
              caipNetworkId: n
            }
          }
        }), Fe.reportedErrors.FORBIDDEN = false, fe.shouldFlushEvents() && fe._submitPendingEvents();
      } catch (e) {
        console.warn("_setPendingEvent", e);
      }
    },
    sendEvent(t) {
      var _a2;
      Fe.timestamp = Date.now(), Fe.data = t;
      const e = [
        "INITIALIZE",
        "CONNECT_SUCCESS",
        "SOCIAL_LOGIN_SUCCESS"
      ];
      (((_a2 = j.state.features) == null ? void 0 : _a2.analytics) || e.includes(t.event)) && fe._setPendingEvent(Fe), this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(t) {
      Fe.walletImpressions.push(t);
    },
    _transformPendingEventsForBatch(t) {
      try {
        return t.filter((e) => e.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return t;
      }
    },
    _submitPendingEvents() {
      if (Fe.lastFlush = Date.now(), !(Fe.pendingEvents.length === 0 && Fe.walletImpressions.length === 0)) try {
        const t = fe._transformPendingEventsForBatch(Fe.pendingEvents);
        Fe.walletImpressions.length && t.push({
          eventId: ee.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [
              ...Fe.walletImpressions
            ]
          }
        }), Uy.sendBeacon({
          path: "/batch",
          params: fe.getSdkProperties(),
          body: t
        }), Fe.reportedErrors.FORBIDDEN = false, Fe.pendingEvents = [], Fe.walletImpressions = [];
      } catch {
        Fe.reportedErrors.FORBIDDEN = true;
      }
    },
    subscribeToFlushTriggers() {
      var _a2, _b2, _c2;
      Fe.subscribedToVisibilityChange || typeof document > "u" || (Fe.subscribedToVisibilityChange = true, (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && fe._submitPendingEvents();
      }), (_b2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b2.call(document, "freeze", () => {
        fe._submitPendingEvents();
      }), (_c2 = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c2.call(window, "pagehide", () => {
        fe._submitPendingEvents();
      }), setInterval(() => {
        fe._submitPendingEvents();
      }, ru));
    }
  };
  Ly = ee.getApiUrl();
  vt = new co({
    baseUrl: Ly,
    clientId: null
  });
  My = 40;
  iu = 4;
  Fy = 20;
  he = De({
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
  se = {
    state: he,
    subscribeKey(t, e) {
      return at(he, t, e);
    },
    _getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: n } = j.state;
      return {
        projectId: t,
        st: e || "appkit",
        sv: n || "html-wagmi-4.2.2"
      };
    },
    _filterOutExtensions(t) {
      return j.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
    },
    async _fetchWalletImage(t) {
      const e = `${vt.baseUrl}/getWalletImage/${t}`, n = await vt.getBlob({
        path: e,
        params: se._getSdkProperties()
      });
      rn.setWalletImage(t, URL.createObjectURL(n));
    },
    async _fetchNetworkImage(t) {
      const e = `${vt.baseUrl}/public/getAssetImage/${t}`, n = await vt.getBlob({
        path: e,
        params: se._getSdkProperties()
      });
      rn.setNetworkImage(t, URL.createObjectURL(n));
    },
    async _fetchConnectorImage(t) {
      const e = `${vt.baseUrl}/public/getAssetImage/${t}`, n = await vt.getBlob({
        path: e,
        params: se._getSdkProperties()
      });
      rn.setConnectorImage(t, URL.createObjectURL(n));
    },
    async _fetchCurrencyImage(t) {
      const e = `${vt.baseUrl}/public/getCurrencyImage/${t}`, n = await vt.getBlob({
        path: e,
        params: se._getSdkProperties()
      });
      rn.setCurrencyImage(t, URL.createObjectURL(n));
    },
    async _fetchTokenImage(t) {
      const e = `${vt.baseUrl}/public/getTokenImage/${t}`, n = await vt.getBlob({
        path: e,
        params: se._getSdkProperties()
      });
      rn.setTokenImage(t, URL.createObjectURL(n));
    },
    _filterWalletsByPlatform(t) {
      const e = t.length, n = ee.isMobile() ? t == null ? void 0 : t.filter((r) => r.mobile_link || r.webapp_link ? true : Object.values(tn).map((o) => o.id).includes(r.id)) : t, s = e - n.length;
      return {
        filteredWallets: n,
        mobileFilteredOutWalletsLength: s
      };
    },
    async fetchProjectConfig() {
      return (await vt.get({
        path: "/appkit/v1/config",
        params: se._getSdkProperties()
      })).features;
    },
    async fetchUsage() {
      try {
        const t = await vt.get({
          path: "/appkit/v1/project-limits",
          params: se._getSdkProperties()
        }), { tier: e, isAboveMauLimit: n, isAboveRpcLimit: s } = t.planLimits, r = e === "starter", i = n || s;
        se.state.plan = {
          tier: e,
          hasExceededUsageLimit: r && i,
          limits: {
            isAboveRpcLimit: s,
            isAboveMauLimit: n
          }
        };
      } catch (t) {
        console.warn("Failed to fetch usage", t);
      }
    },
    async fetchAllowedOrigins() {
      try {
        const { allowedOrigins: t } = await vt.get({
          path: "/projects/v1/origins",
          params: se._getSdkProperties()
        });
        return t;
      } catch (t) {
        if (t instanceof Error && t.cause instanceof Response) {
          const e = t.cause.status;
          if (e === F.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
            cause: t
          });
          if (e >= F.HTTP_STATUS_CODES.SERVER_ERROR && e < 600) throw new Error("SERVER_ERROR", {
            cause: t
          });
          return [];
        }
        return [];
      }
    },
    async fetchNetworkImages() {
      var _a2;
      const e = (_a2 = b.getAllRequestedCaipNetworks()) == null ? void 0 : _a2.map(({ assets: n }) => n == null ? void 0 : n.imageId).filter(Boolean).filter((n) => !ra.getNetworkImageById(n));
      e && await Promise.allSettled(e.map((n) => se._fetchNetworkImage(n)));
    },
    async fetchConnectorImages() {
      const { connectors: t } = V.state, e = t.map(({ imageId: n }) => n).filter(Boolean);
      await Promise.allSettled(e.map((n) => se._fetchConnectorImage(n)));
    },
    async fetchCurrencyImages(t = []) {
      await Promise.allSettled(t.map((e) => se._fetchCurrencyImage(e)));
    },
    async fetchTokenImages(t = []) {
      await Promise.allSettled(t.map((e) => se._fetchTokenImage(e)));
    },
    async fetchWallets(t) {
      var _a2;
      const e = t.exclude ?? [];
      se._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(tn).map((o) => o.id));
      const s = await vt.get({
        path: "/getWallets",
        params: {
          ...se._getSdkProperties(),
          ...t,
          page: String(t.page),
          entries: String(t.entries),
          include: (_a2 = t.include) == null ? void 0 : _a2.join(","),
          exclude: e.join(",")
        }
      }), { filteredWallets: r, mobileFilteredOutWalletsLength: i } = se._filterWalletsByPlatform(s == null ? void 0 : s.data);
      return {
        data: r || [],
        count: s == null ? void 0 : s.count,
        mobileFilteredOutWalletsLength: i
      };
    },
    async prefetchWalletRanks() {
      const t = V.state.connectors;
      if (!(t == null ? void 0 : t.length)) return;
      const e = {
        page: 1,
        entries: 20,
        badge: "certified"
      };
      if (e.names = t.map((r) => r.name).join(","), b.state.activeChain === F.CHAIN.EVM) {
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
      const { data: n } = await se.fetchWallets(e);
      he.explorerWallets = n, V.extendConnectorsWithExplorerWallets(n);
      const s = b.getRequestedCaipNetworkIds().join(",");
      he.explorerFilteredWallets = n.filter((r) => {
        var _a2;
        return (_a2 = r.chains) == null ? void 0 : _a2.some((i) => s.includes(i));
      });
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: t } = j.state;
      if (t == null ? void 0 : t.length) {
        const e = {
          ...se._getSdkProperties(),
          page: 1,
          entries: (t == null ? void 0 : t.length) ?? iu,
          include: t
        }, { data: n } = await se.fetchWallets(e), s = [
          ...n
        ].sort((i, o) => t.indexOf(i.id) - t.indexOf(o.id)), r = s.map((i) => i.image_id).filter(Boolean);
        await Promise.allSettled(r.map((i) => se._fetchWalletImage(i))), he.featured = s, he.allFeatured = s;
      }
    },
    async fetchRecommendedWallets() {
      try {
        he.isFetchingRecommendedWallets = true;
        const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: n } = j.state, s = [
          ...e ?? [],
          ...n ?? []
        ].filter(Boolean), r = b.getRequestedCaipNetworkIds().join(","), i = {
          page: 1,
          entries: iu,
          include: t,
          exclude: s,
          chains: r
        }, { data: o, count: a } = await se.fetchWallets(i), c = H.getRecentWallets(), l = o.map((u) => u.image_id).filter(Boolean), d = c.map((u) => u.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...d
        ].map((u) => se._fetchWalletImage(u))), he.recommended = o, he.allRecommended = o, he.count = a ?? 0;
      } catch {
      } finally {
        he.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: t }) {
      const { includeWalletIds: e, excludeWalletIds: n, featuredWalletIds: s } = j.state, r = b.getRequestedCaipNetworkIds().join(","), i = [
        ...he.recommended.map(({ id: u }) => u),
        ...n ?? [],
        ...s ?? []
      ].filter(Boolean), o = {
        page: t,
        entries: My,
        include: e,
        exclude: i,
        chains: r
      }, { data: a, count: c, mobileFilteredOutWalletsLength: l } = await se.fetchWallets(o);
      he.mobileFilteredOutWalletsLength = l + (he.mobileFilteredOutWalletsLength ?? 0);
      const d = a.slice(0, Fy).map((u) => u.image_id).filter(Boolean);
      await Promise.allSettled(d.map((u) => se._fetchWalletImage(u))), he.wallets = ee.uniqueBy([
        ...he.wallets,
        ...se._filterOutExtensions(a)
      ], "id").filter((u) => {
        var _a2;
        return (_a2 = u.chains) == null ? void 0 : _a2.some((h) => r.includes(h));
      }), he.count = c > he.count ? c : he.count, he.page = t;
    },
    async initializeExcludedWallets({ ids: t }) {
      const e = {
        page: 1,
        entries: t.length,
        include: t
      }, { data: n } = await se.fetchWallets(e);
      n && n.forEach((s) => {
        he.excludedWallets.push({
          rdns: s.rdns,
          name: s.name
        });
      });
    },
    async searchWallet({ search: t, badge: e }) {
      const { includeWalletIds: n, excludeWalletIds: s } = j.state, r = b.getRequestedCaipNetworkIds().join(",");
      he.search = [];
      const i = {
        page: 1,
        entries: 100,
        search: t == null ? void 0 : t.trim(),
        badge_type: e,
        include: n,
        exclude: s,
        chains: r
      }, { data: o } = await se.fetchWallets(i);
      fe.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: {
          badge: e ?? "",
          search: t ?? ""
        }
      });
      const a = o.map((c) => c.image_id).filter(Boolean);
      await Promise.allSettled([
        ...a.map((c) => se._fetchWalletImage(c)),
        ee.wait(300)
      ]), he.search = se._filterOutExtensions(o);
    },
    initPromise(t, e) {
      const n = he.promises[t];
      return n || (he.promises[t] = e());
    },
    prefetch({ fetchConnectorImages: t = true, fetchFeaturedWallets: e = true, fetchRecommendedWallets: n = true, fetchNetworkImages: s = true, fetchWalletRanks: r = true } = {}) {
      const i = [
        t && se.initPromise("connectorImages", se.fetchConnectorImages),
        e && se.initPromise("featuredWallets", se.fetchFeaturedWallets),
        n && se.initPromise("recommendedWallets", se.fetchRecommendedWallets),
        s && se.initPromise("networkImages", se.fetchNetworkImages),
        r && se.initPromise("walletRanks", se.prefetchWalletRanks)
      ].filter(Boolean);
      return Promise.allSettled(i);
    },
    prefetchAnalyticsConfig() {
      var _a2;
      ((_a2 = j.state.features) == null ? void 0 : _a2.analytics) && se.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: t } = await vt.get({
          path: "/getAnalyticsConfig",
          params: se._getSdkProperties()
        });
        j.setFeatures({
          analytics: t
        });
      } catch {
        j.setFeatures({
          analytics: false
        });
      }
    },
    filterByNamespaces(t) {
      if (!(t == null ? void 0 : t.length)) {
        he.featured = he.allFeatured, he.recommended = he.allRecommended;
        return;
      }
      const e = b.getRequestedCaipNetworkIds().join(",");
      he.featured = he.allFeatured.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => e.includes(s));
      }), he.recommended = he.allRecommended.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => e.includes(s));
      }), he.filteredWallets = he.wallets.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => e.includes(s));
      });
    },
    clearFilterByNamespaces() {
      he.filteredWallets = [];
    },
    setFilterByNamespace(t) {
      if (!t) {
        he.featured = he.allFeatured, he.recommended = he.allRecommended;
        return;
      }
      const e = b.getRequestedCaipNetworkIds().join(",");
      he.featured = he.allFeatured.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => e.includes(s));
      }), he.recommended = he.allRecommended.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => e.includes(s));
      }), he.filteredWallets = he.wallets.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => e.includes(s));
      });
    }
  };
  Fs = {
    filterOutDuplicatesByRDNS(t) {
      const e = j.state.enableEIP6963 ? V.state.connectors : [], n = H.getRecentWallets(), s = e.map((a) => {
        var _a2;
        return (_a2 = a.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), r = n.map((a) => a.rdns).filter(Boolean), i = s.concat(r);
      if (i.includes("io.metamask.mobile") && ee.isMobile()) {
        const a = i.indexOf("io.metamask.mobile");
        i[a] = "io.metamask";
      }
      return t.filter((a) => !((a == null ? void 0 : a.rdns) && i.includes(String(a.rdns)) || !(a == null ? void 0 : a.rdns) && e.some((l) => l.name === a.name)));
    },
    filterOutDuplicatesByIds(t) {
      const e = V.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED" || a.type === "MULTI_CHAIN"), n = H.getRecentWallets(), s = e.map((a) => {
        var _a2;
        return a.explorerId || ((_a2 = a.explorerWallet) == null ? void 0 : _a2.id) || a.id;
      }), r = n.map((a) => a.id), i = s.concat(r);
      return t.filter((a) => !i.includes(a == null ? void 0 : a.id));
    },
    filterOutDuplicateWallets(t) {
      const e = this.filterOutDuplicatesByRDNS(t);
      return this.filterOutDuplicatesByIds(e);
    },
    markWalletsAsInstalled(t) {
      const { connectors: e } = V.state, { featuredWalletIds: n } = j.state, s = e.filter((o) => o.type === "ANNOUNCED").reduce((o, a) => {
        var _a2;
        return ((_a2 = a.info) == null ? void 0 : _a2.rdns) && (o[a.info.rdns] = true), o;
      }, {});
      return t.map((o) => ({
        ...o,
        installed: !!o.rdns && !!s[o.rdns ?? ""]
      })).sort((o, a) => {
        const c = Number(a.installed) - Number(o.installed);
        if (c !== 0) return c;
        if (n == null ? void 0 : n.length) {
          const l = n.indexOf(o.id), d = n.indexOf(a.id);
          if (l !== -1 && d !== -1) return l - d;
          if (l !== -1) return -1;
          if (d !== -1) return 1;
        }
        return 0;
      });
    },
    getConnectOrderMethod(t, e) {
      var _a2;
      const n = (t == null ? void 0 : t.connectMethodsOrder) || ((_a2 = j.state.features) == null ? void 0 : _a2.connectMethodsOrder), s = e || V.state.connectors;
      if (n) return n;
      const { injected: r, announced: i } = At.getConnectorsByType(s, se.state.recommended, se.state.featured), o = r.filter(At.showConnector), a = i.filter(At.showConnector);
      return o.length || a.length ? [
        "wallet",
        "email",
        "social"
      ] : ge.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(t) {
      const e = !!t.rdns && se.state.excludedWallets.some((s) => s.rdns === t.rdns), n = !!t.name && se.state.excludedWallets.some((s) => ep.isLowerCaseMatch(s.name, t.name));
      return e || n;
    },
    markWalletsWithDisplayIndex(t) {
      return t.map((e, n) => ({
        ...e,
        display_index: n
      }));
    },
    filterWalletsByWcSupport(t) {
      return G.state.wcBasic ? t.filter((e) => e.supports_wc) : ee.isMobile() ? t.filter((e) => e.supports_wc || ge.MANDATORY_WALLET_IDS_ON_MOBILE.includes(e.id)) : t;
    },
    getWalletConnectWallets(t) {
      var _a2;
      const e = [
        ...se.state.featured,
        ...se.state.recommended
      ];
      ((_a2 = se.state.filteredWallets) == null ? void 0 : _a2.length) > 0 ? e.push(...se.state.filteredWallets) : e.push(...t);
      const n = ee.uniqueBy(e, "id"), s = Fs.markWalletsAsInstalled(n), r = Fs.filterWalletsByWcSupport(s);
      return Fs.markWalletsWithDisplayIndex(r);
    }
  };
  At = {
    getConnectorsByType(t, e, n) {
      const { customWallets: s } = j.state, r = H.getRecentWallets(), i = Fs.filterOutDuplicateWallets(e), o = Fs.filterOutDuplicateWallets(n), a = t.filter((u) => u.type === "MULTI_CHAIN"), c = t.filter((u) => u.type === "ANNOUNCED"), l = t.filter((u) => u.type === "INJECTED"), d = t.filter((u) => u.type === "EXTERNAL");
      return {
        custom: s,
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
      const e = (_a2 = t.info) == null ? void 0 : _a2.rdns, n = !!e && se.state.excludedWallets.some((r) => !!r.rdns && r.rdns === e), s = !!t.name && se.state.excludedWallets.some((r) => ep.isLowerCaseMatch(r.name, t.name));
      return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!ee.isMobile() || ee.isMobile() && !e && !G.checkInstalled()) || n || s) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (n || s));
    },
    getIsConnectedWithWC() {
      return Array.from(b.state.chains.values()).some((n) => V.getConnectorId(n.namespace) === F.CONNECTOR_ID.WALLET_CONNECT);
    },
    getConnectorTypeOrder({ recommended: t, featured: e, custom: n, recent: s, announced: r, injected: i, multiChain: o, external: a, overriddenConnectors: c = ((_b2) => (_b2 = j.state.features) == null ? void 0 : _b2.connectorTypeOrder)() ?? [] }) {
      const d = [
        {
          type: "walletConnect",
          isEnabled: true
        },
        {
          type: "recent",
          isEnabled: s.length > 0
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
          isEnabled: n && n.length > 0
        },
        {
          type: "external",
          isEnabled: a.length > 0
        },
        {
          type: "recommended",
          isEnabled: t.length > 0
        }
      ].filter((g) => g.isEnabled), u = new Set(d.map((g) => g.type)), h = c.filter((g) => u.has(g)).map((g) => ({
        type: g,
        isEnabled: true
      })), f = d.filter(({ type: g }) => !h.some(({ type: m }) => m === g));
      return Array.from(new Set([
        ...h,
        ...f
      ].map(({ type: g }) => g)));
    },
    sortConnectorsByExplorerWallet(t) {
      return [
        ...t
      ].sort((e, n) => e.explorerWallet && n.explorerWallet ? (e.explorerWallet.order ?? 0) - (n.explorerWallet.order ?? 0) : e.explorerWallet ? -1 : n.explorerWallet ? 1 : 0);
    },
    getPriority(t) {
      return t.id === F.CONNECTOR_ID.BASE_ACCOUNT ? 0 : t.id === F.CONNECTOR_ID.COINBASE || t.id === F.CONNECTOR_ID.COINBASE_SDK ? 1 : 2;
    },
    sortConnectorsByPriority(t) {
      return [
        ...t
      ].sort((e, n) => At.getPriority(e) - At.getPriority(n));
    },
    getAuthName({ email: t, socialUsername: e, socialProvider: n }) {
      return e ? n && n === "discord" && e.endsWith("0") ? e.slice(0, -1) : e : t.length > 30 ? `${t.slice(0, -3)}...` : t;
    },
    async fetchProviderData(t) {
      var _a2, _b2;
      try {
        if (t.name === "Browser Wallet" && !ee.isMobile()) return {
          accounts: [],
          chainId: void 0
        };
        if (t.id === F.CONNECTOR_ID.AUTH) return {
          accounts: [],
          chainId: void 0
        };
        const [e, n] = await Promise.all([
          (_a2 = t.provider) == null ? void 0 : _a2.request({
            method: "eth_accounts"
          }),
          (_b2 = t.provider) == null ? void 0 : _b2.request({
            method: "eth_chainId"
          }).then((s) => Number(s))
        ]);
        return {
          accounts: e,
          chainId: n
        };
      } catch (e) {
        return console.warn(`Failed to fetch provider data for ${t.name}`, e), {
          accounts: [],
          chainId: void 0
        };
      }
    },
    getFilteredCustomWallets(t) {
      const e = H.getRecentWallets(), n = V.state.connectors.map((o) => {
        var _a2;
        return (_a2 = o.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), s = e.map((o) => o.rdns).filter(Boolean), r = n.concat(s);
      if (r.includes("io.metamask.mobile") && ee.isMobile()) {
        const o = r.indexOf("io.metamask.mobile");
        r[o] = "io.metamask";
      }
      return t.filter((o) => !r.includes(String(o == null ? void 0 : o.rdns)));
    },
    hasWalletConnector(t) {
      return V.state.connectors.some((e) => e.id === t.id || e.name === t.name);
    },
    isWalletCompatibleWithCurrentChain(t) {
      const e = b.state.activeChain;
      return e && t.chains ? t.chains.some((n) => {
        const s = n.split(":")[0];
        return e === s;
      }) : true;
    },
    getFilteredRecentWallets() {
      return H.getRecentWallets().filter((n) => !Fs.isExcluded(n)).filter((n) => !this.hasWalletConnector(n)).filter((n) => this.isWalletCompatibleWithCurrentChain(n));
    },
    getCappedRecommendedWallets(t) {
      const { connectors: e } = V.state, { customWallets: n, featuredWalletIds: s } = j.state, r = e.find((O) => O.id === "walletConnect"), i = e.filter((O) => O.type === "INJECTED" || O.type === "ANNOUNCED" || O.type === "MULTI_CHAIN");
      if (!r && !i.length && !(n == null ? void 0 : n.length)) return [];
      const o = tl.isEmailEnabled(), a = tl.isSocialsEnabled(), c = i.filter((O) => O.name !== "Browser Wallet" && O.name !== "WalletConnect"), l = (s == null ? void 0 : s.length) || 0, d = (n == null ? void 0 : n.length) || 0, u = c.length || 0, h = o ? 1 : 0, f = a ? 1 : 0, g = l + d + u + h + f, m = Math.max(0, 4 - g);
      return m <= 0 ? [] : Fs.filterOutDuplicateWallets(t).slice(0, m);
    },
    processConnectorsByType(t, e = true) {
      const n = At.sortConnectorsByExplorerWallet([
        ...t
      ]);
      return e ? n.filter(At.showConnector) : n;
    },
    connectorList() {
      const t = At.getConnectorsByType(V.state.connectors, se.state.recommended, se.state.featured), e = this.processConnectorsByType(t.announced.filter((f) => f.id !== "walletConnect")), n = this.processConnectorsByType(t.injected), s = this.processConnectorsByType(t.multiChain.filter((f) => f.name !== "WalletConnect"), false), r = t.custom, i = t.recent, o = this.processConnectorsByType(t.external.filter((f) => f.id !== F.CONNECTOR_ID.COINBASE_SDK && f.id !== F.CONNECTOR_ID.BASE_ACCOUNT)), a = t.recommended, c = t.featured, l = At.getConnectorTypeOrder({
        custom: r,
        recent: i,
        announced: e,
        injected: n,
        multiChain: s,
        recommended: a,
        featured: c,
        external: o
      }), d = V.state.connectors.find((f) => f.id === "walletConnect"), u = ee.isMobile(), h = [];
      for (const f of l) switch (f) {
        case "walletConnect": {
          !u && d && h.push({
            kind: "connector",
            subtype: "walletConnect",
            connector: d
          });
          break;
        }
        case "recent": {
          At.getFilteredRecentWallets().forEach((p) => h.push({
            kind: "wallet",
            subtype: "recent",
            wallet: p
          }));
          break;
        }
        case "injected": {
          s.forEach((g) => h.push({
            kind: "connector",
            subtype: "multiChain",
            connector: g
          })), e.forEach((g) => h.push({
            kind: "connector",
            subtype: "announced",
            connector: g
          })), n.forEach((g) => h.push({
            kind: "connector",
            subtype: "injected",
            connector: g
          }));
          break;
        }
        case "featured": {
          c.forEach((g) => h.push({
            kind: "wallet",
            subtype: "featured",
            wallet: g
          }));
          break;
        }
        case "custom": {
          At.getFilteredCustomWallets(r ?? []).forEach((p) => h.push({
            kind: "wallet",
            subtype: "custom",
            wallet: p
          }));
          break;
        }
        case "external": {
          o.forEach((g) => h.push({
            kind: "connector",
            subtype: "external",
            connector: g
          }));
          break;
        }
        case "recommended": {
          At.getCappedRecommendedWallets(a).forEach((p) => h.push({
            kind: "wallet",
            subtype: "recommended",
            wallet: p
          }));
          break;
        }
        default:
          console.warn(`Unknown connector type: ${f}`);
      }
      return h;
    },
    hasInjectedConnectors() {
      return V.state.connectors.filter((t) => (t.type === "INJECTED" || t.type === "ANNOUNCED" || t.type === "MULTI_CHAIN") && t.name !== "Browser Wallet" && t.name !== "WalletConnect").length;
    }
  };
  jy = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster"
  ];
  Te = De({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  qy = {
    state: Te,
    subscribeKey(t, e) {
      return at(Te, t, e);
    },
    pushTransactionStack(t) {
      Te.transactionStack.push(t);
    },
    popTransactionStack(t) {
      const e = Te.transactionStack.pop();
      if (!e) return;
      const { onSuccess: n, onError: s, onCancel: r } = e;
      switch (t) {
        case "success":
          n == null ? void 0 : n();
          break;
        case "error":
          s == null ? void 0 : s(), ae.goBack();
          break;
        case "cancel":
          r == null ? void 0 : r(), ae.goBack();
          break;
      }
    },
    push(t, e) {
      let n = t, s = e;
      se.state.plan.hasExceededUsageLimit && jy.includes(t) && (n = "UsageExceeded", s = void 0), n !== Te.view && (Te.view = n, Te.history.push(n), Te.data = s);
    },
    reset(t, e) {
      Te.view = t, Te.history = [
        t
      ], Te.data = e;
    },
    replace(t, e) {
      Te.history.at(-1) === t || (Te.view = t, Te.history[Te.history.length - 1] = t, Te.data = e);
    },
    goBack() {
      var _a2, _b2;
      const t = b.state.activeCaipAddress, e = ae.state.view === "ConnectingFarcaster", n = !t && e;
      if (Te.history.length > 1) {
        Te.history.pop();
        const [s] = Te.history.slice(-1);
        s && (t && s === "Connect" ? Te.view = "Account" : Te.view = s);
      } else me.close();
      ((_a2 = Te.data) == null ? void 0 : _a2.wallet) && (Te.data.wallet = void 0), ((_b2 = Te.data) == null ? void 0 : _b2.redirectView) && (Te.data.redirectView = void 0), setTimeout(() => {
        var _a3, _b3, _c2;
        if (n) {
          b.setAccountProp("farcasterUrl", void 0, b.state.activeChain);
          const s = V.getAuthConnector();
          (_a3 = s == null ? void 0 : s.provider) == null ? void 0 : _a3.reload();
          const r = Yi(j.state);
          (_c2 = (_b3 = s == null ? void 0 : s.provider) == null ? void 0 : _b3.syncDappData) == null ? void 0 : _c2.call(_b3, {
            metadata: r.metadata,
            sdkVersion: r.sdkVersion,
            projectId: r.projectId,
            sdkType: r.sdkType
          });
        }
      }, 100);
    },
    goBackToIndex(t) {
      if (Te.history.length > 1) {
        Te.history = Te.history.slice(0, t + 1);
        const [e] = Te.history.slice(-1);
        e && (Te.view = e);
      }
    },
    goBackOrCloseModal() {
      ae.state.history.length > 1 ? ae.goBack() : me.close();
    }
  };
  ae = ln(qy);
  qn = De({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  nl = {
    state: qn,
    subscribe(t) {
      return ot(qn, () => t(qn));
    },
    setThemeMode(t) {
      qn.themeMode = t;
      try {
        const e = V.getAuthConnector();
        if (e) {
          const n = nl.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeMode: t,
            themeVariables: n,
            w3mThemeVariables: na(n, t)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(t) {
      qn.themeVariables = {
        ...qn.themeVariables,
        ...t
      };
      try {
        const e = V.getAuthConnector();
        if (e) {
          const n = nl.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeVariables: n,
            w3mThemeVariables: na(qn.themeVariables, qn.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return Yi(qn);
    }
  };
  Wt = ln(nl);
  dp = Object.fromEntries(np.map((t) => [
    t,
    void 0
  ]));
  Wy = Object.fromEntries(np.map((t) => [
    t,
    true
  ]));
  Ee = De({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: dp,
    filterByNamespaceMap: Wy
  });
  Hy = {
    state: Ee,
    subscribe(t) {
      return ot(Ee, () => {
        t(Ee);
      });
    },
    subscribeKey(t, e) {
      return at(Ee, t, e);
    },
    initialize(t) {
      t.forEach((e) => {
        const n = H.getConnectedConnectorId(e);
        n && V.setConnectorId(n, e);
      });
    },
    setActiveConnector(t) {
      t && (Ee.activeConnector = Zi(t));
    },
    setConnectors(t) {
      t.filter((r) => !Ee.allConnectors.some((i) => i.id === r.id && V.getConnectorName(i.name) === V.getConnectorName(r.name) && i.chain === r.chain)).forEach((r) => {
        r.type !== "MULTI_CHAIN" && Ee.allConnectors.push(Zi(r));
      });
      const n = V.getEnabledNamespaces(), s = V.getEnabledConnectors(n);
      Ee.connectors = V.mergeMultiChainConnectors(s);
    },
    filterByNamespaces(t) {
      Object.keys(Ee.filterByNamespaceMap).forEach((e) => {
        Ee.filterByNamespaceMap[e] = false;
      }), t.forEach((e) => {
        Ee.filterByNamespaceMap[e] = true;
      }), V.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(t, e) {
      Ee.filterByNamespaceMap[t] = e, V.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const t = V.getEnabledNamespaces(), e = V.getEnabledConnectors(t), n = V.areAllNamespacesEnabled();
      Ee.connectors = V.mergeMultiChainConnectors(e), n ? se.clearFilterByNamespaces() : se.filterByNamespaces(t);
    },
    getEnabledNamespaces() {
      return Object.entries(Ee.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
    },
    getEnabledConnectors(t) {
      return Ee.allConnectors.filter((e) => t.includes(e.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(Ee.filterByNamespaceMap).every((t) => t);
    },
    mergeMultiChainConnectors(t) {
      const e = V.generateConnectorMapByName(t), n = [];
      return e.forEach((s) => {
        const r = s[0], i = (r == null ? void 0 : r.id) === F.CONNECTOR_ID.AUTH;
        s.length > 1 && r ? n.push({
          name: r.name,
          imageUrl: r.imageUrl,
          imageId: r.imageId,
          connectors: [
            ...s
          ],
          type: i ? "AUTH" : "MULTI_CHAIN",
          chain: "eip155",
          id: (r == null ? void 0 : r.id) || ""
        }) : r && n.push(r);
      }), n;
    },
    generateConnectorMapByName(t) {
      const e = /* @__PURE__ */ new Map();
      return t.forEach((n) => {
        const { name: s } = n, r = V.getConnectorName(s);
        if (!r) return;
        const i = e.get(r) || [];
        i.find((a) => a.chain === n.chain) || i.push(n), e.set(r, i);
      }), e;
    },
    getConnectorName(t) {
      return t && ({
        "Trust Wallet": "Trust"
      }[t] || t);
    },
    getUniqueConnectorsByName(t) {
      const e = [];
      return t.forEach((n) => {
        e.find((s) => s.chain === n.chain) || e.push(n);
      }), e;
    },
    addConnector(t) {
      var _a2, _b2, _c2;
      if (t.id === F.CONNECTOR_ID.AUTH) {
        const e = t, n = Yi(j.state), s = Wt.getSnapshot().themeMode, r = Wt.getSnapshot().themeVariables;
        (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
          metadata: n.metadata,
          sdkVersion: n.sdkVersion,
          projectId: n.projectId,
          sdkType: n.sdkType
        }), (_c2 = e == null ? void 0 : e.provider) == null ? void 0 : _c2.syncTheme({
          themeMode: s,
          themeVariables: r,
          w3mThemeVariables: na(r, s)
        }), V.setConnectors([
          t
        ]);
      } else V.setConnectors([
        t
      ]);
    },
    getAuthConnector(t) {
      var _a2;
      const e = t || b.state.activeChain, n = Ee.connectors.find((s) => s.id === F.CONNECTOR_ID.AUTH);
      if (n) return ((_a2 = n == null ? void 0 : n.connectors) == null ? void 0 : _a2.length) ? n.connectors.find((r) => r.chain === e) : n;
    },
    getAnnouncedConnectorRdns() {
      return Ee.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
        var _a2;
        return (_a2 = t.info) == null ? void 0 : _a2.rdns;
      });
    },
    getConnectorById(t) {
      return At.sortConnectorsByPriority(Ee.allConnectors).find((n) => n.id === t);
    },
    getConnector({ id: t, namespace: e }) {
      const n = e || b.state.activeChain, s = Ee.allConnectors.filter((o) => o.chain === n);
      return At.sortConnectorsByPriority(s).find((o) => o.id === t || o.explorerId === t);
    },
    syncIfAuthConnector(t) {
      var _a2, _b2;
      if (t.id !== "AUTH") return;
      const e = t, n = Yi(j.state), s = Wt.getSnapshot().themeMode, r = Wt.getSnapshot().themeVariables;
      (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
        metadata: n.metadata,
        sdkVersion: n.sdkVersion,
        sdkType: n.sdkType,
        projectId: n.projectId
      }), e.provider.syncTheme({
        themeMode: s,
        themeVariables: r,
        w3mThemeVariables: na(r, s)
      });
    },
    getConnectorsByNamespace(t) {
      const e = Ee.allConnectors.filter((n) => n.chain === t);
      return V.mergeMultiChainConnectors(e);
    },
    canSwitchToSmartAccount(t) {
      return b.checkIfSmartAccountEnabled() && on(t) === is.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(t) {
      var _a2;
      const e = (_a2 = ae.state.data) == null ? void 0 : _a2.redirectView, n = b.state.activeChain, s = n ? V.getConnector({
        id: t.id,
        namespace: n
      }) : void 0;
      Ry.handleMobileDeeplinkRedirect((s == null ? void 0 : s.explorerId) || t.id, b.state.activeChain), s ? ae.push("ConnectingExternal", {
        connector: s,
        wallet: t,
        redirectView: e
      }) : ae.push("ConnectingWalletConnect", {
        wallet: t,
        redirectView: e
      });
    },
    getConnectors(t) {
      return t ? V.getConnectorsByNamespace(t) : V.mergeMultiChainConnectors(Ee.allConnectors);
    },
    setFilterByNamespace(t) {
      Ee.filterByNamespace = t, Ee.connectors = V.getConnectors(t), se.setFilterByNamespace(t);
    },
    setConnectorId(t, e) {
      t && (Ee.activeConnectorIds = {
        ...Ee.activeConnectorIds,
        [e]: t
      }, H.setConnectedConnectorId(e, t));
    },
    removeConnectorId(t) {
      Ee.activeConnectorIds = {
        ...Ee.activeConnectorIds,
        [t]: void 0
      }, H.deleteConnectedConnectorId(t);
    },
    getConnectorId(t) {
      if (t) return Ee.activeConnectorIds[t];
    },
    isConnected(t) {
      return t ? !!Ee.activeConnectorIds[t] : Object.values(Ee.activeConnectorIds).some((e) => !!e);
    },
    resetConnectorIds() {
      Ee.activeConnectorIds = {
        ...dp
      };
    },
    extendConnectorsWithExplorerWallets(t) {
      Ee.allConnectors.forEach((s) => {
        const r = t.find((i) => {
          var _a2;
          return i.id === s.id || i.rdns && i.rdns === ((_a2 = s.info) == null ? void 0 : _a2.rdns);
        });
        r && (s.explorerWallet = r);
      });
      const e = V.getEnabledNamespaces(), n = V.getEnabledConnectors(e);
      Ee.connectors = V.mergeMultiChainConnectors(n);
    },
    async connect(t = {}) {
      const { namespace: e } = t;
      return V.setFilterByNamespace(e), ae.push("Connect", {
        addWalletForNamespace: e
      }), new Promise((n, s) => {
        if (e) {
          const r = b.subscribeChainProp("accountState", (o) => {
            (o == null ? void 0 : o.caipAddress) && (n({
              caipAddress: o == null ? void 0 : o.caipAddress
            }), r());
          }, e), i = me.subscribeKey("open", (o) => {
            o || (s(new Error("Modal closed")), i());
          });
        } else {
          const r = b.subscribeKey("activeCaipAddress", (o) => {
            o && (n({
              caipAddress: o
            }), r());
          }), i = me.subscribeKey("open", (o) => {
            o || (s(new Error("Modal closed")), i());
          });
        }
      });
    }
  };
  V = ln(Hy);
  Vy = 1e3;
  yi = {
    checkNamespaceConnectorId(t, e) {
      return V.getConnectorId(t) === e;
    },
    isSocialProvider(t) {
      return ge.DEFAULT_REMOTE_FEATURES.socials.includes(t);
    },
    connectWalletConnect({ walletConnect: t, connector: e, closeModalOnConnect: n = true, redirectViewOnModalClose: s = "Connect", onOpen: r, onConnect: i }) {
      return new Promise((o, a) => {
        if (t && V.setActiveConnector(e), r == null ? void 0 : r(ee.isMobile() && t), s) {
          const l = me.subscribeKey("open", (d) => {
            d || (ae.state.view !== s && ae.replace(s), l(), a(new Error("Modal closed")));
          });
        }
        const c = b.subscribeKey("activeCaipAddress", (l) => {
          l && (i == null ? void 0 : i(), n && me.close(), c(), o(it.parseCaipAddress(l)));
        });
      });
    },
    connectExternal(t) {
      return new Promise((e, n) => {
        const s = b.subscribeKey("activeCaipAddress", (r) => {
          r && (me.close(), s(), e(it.parseCaipAddress(r)));
        });
        G.connectExternal(t, t.chain).catch(() => {
          s(), n(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({ social: t, namespace: e, closeModalOnConnect: n = true, onOpenFarcaster: s, onConnect: r }) {
      let i, o = false, a = null;
      const c = e || b.state.activeChain, l = b.subscribeKey("activeCaipAddress", (d) => {
        d && (n && me.close(), l());
      });
      return new Promise((d, u) => {
        async function h(g) {
          var _a2;
          if ((_a2 = g.data) == null ? void 0 : _a2.resultUri) if (g.origin === F.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", h, false);
            try {
              const p = V.getAuthConnector(c);
              if (p && !o) {
                i && i.close(), o = true;
                const m = g.data.resultUri;
                fe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: {
                    provider: t
                  }
                }), H.setConnectedSocialProvider(t), await G.connectExternal({
                  id: p.id,
                  type: p.type,
                  socialUri: m
                }, p.chain);
                const T = b.state.activeCaipAddress;
                if (!T) {
                  u(new Error("Failed to connect"));
                  return;
                }
                d(it.parseCaipAddress(T)), fe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: t
                  }
                });
              }
            } catch (p) {
              fe.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: {
                  provider: t,
                  message: ee.parseError(p)
                }
              }), u(new Error("Failed to connect"));
            }
          } else fe.sendEvent({
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
          if (fe.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: {
              provider: t
            }
          }), t === "farcaster") {
            s == null ? void 0 : s();
            const g = me.subscribeKey("open", (m) => {
              !m && t === "farcaster" && (u(new Error("Popup closed")), r == null ? void 0 : r(), g());
            }), p = V.getAuthConnector();
            if (p && !((_a2 = b.getAccountData(c)) == null ? void 0 : _a2.farcasterUrl)) try {
              const { url: T } = await p.provider.getFarcasterUri();
              b.setAccountProp("farcasterUrl", T, c);
            } catch {
              u(new Error("Failed to connect to farcaster"));
            }
          } else {
            const g = V.getAuthConnector();
            a = ee.returnOpenHref(`${F.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
            try {
              if (g) {
                const { uri: p } = await g.provider.getSocialRedirectUri({
                  provider: t
                });
                if (a && p) {
                  a.location.href = p, i = a;
                  const m = setInterval(() => {
                    (i == null ? void 0 : i.closed) && !o && (u(new Error("Popup closed")), clearInterval(m));
                  }, 1e3);
                  window.addEventListener("message", h, false);
                } else a == null ? void 0 : a.close(), u(new Error("Failed to initiate social connection"));
              }
            } catch {
              u(new Error("Failed to initiate social connection")), a == null ? void 0 : a.close();
            }
          }
        }
        f();
      });
    },
    connectEmail({ closeModalOnConnect: t = true, redirectViewOnModalClose: e = "Connect", onOpen: n, onConnect: s }) {
      return new Promise((r, i) => {
        if (n == null ? void 0 : n(), e) {
          const a = me.subscribeKey("open", (c) => {
            c || (ae.state.view !== e && ae.replace(e), a(), i(new Error("Modal closed")));
          });
        }
        const o = b.subscribeKey("activeCaipAddress", (a) => {
          a && (s == null ? void 0 : s(), t && me.close(), o(), r(it.parseCaipAddress(a)));
        });
      });
    },
    async updateEmail() {
      const t = H.getConnectedConnectorId(b.state.activeChain), e = V.getAuthConnector();
      if (!e) throw new Error("No auth connector found");
      if (t !== F.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
      const n = e.provider.getEmail() ?? "";
      return await me.open({
        view: "UpdateEmailWallet",
        data: {
          email: n,
          redirectView: void 0
        }
      }), new Promise((s, r) => {
        const i = setInterval(() => {
          const a = e.provider.getEmail() ?? "";
          a !== n && (me.close(), clearInterval(i), o(), s({
            email: a
          }));
        }, Vy), o = me.subscribeKey("open", (a) => {
          a || (ae.state.view !== "Connect" && ae.push("Connect"), clearInterval(i), o(), r(new Error("Modal closed")));
        });
      });
    },
    canSwitchToSmartAccount(t) {
      return b.checkIfSmartAccountEnabled() && on(t) === is.ACCOUNT_TYPES.EOA;
    }
  };
  up = function() {
    var _a2, _b2;
    const t = ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155", e = ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.id) || 1, n = ge.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${n}`;
  };
  ck = function(t) {
    return ge.NATIVE_TOKEN_ADDRESS[t];
  };
  on = function(t) {
    var _a2;
    return (_a2 = b.getAccountData(t)) == null ? void 0 : _a2.preferredAccountType;
  };
  Io = function(t) {
    return b.state.activeCaipNetwork;
  };
  let Ur, vn, Be, Ky, Go, we;
  ia = {
    getConnectionStatus(t, e) {
      const n = V.state.activeConnectorIds[e], s = G.getConnections(e);
      return !!n && t.connectorId === n ? "connected" : s.some((o) => o.connectorId.toLowerCase() === t.connectorId.toLowerCase()) ? "active" : "disconnected";
    },
    excludeConnectorAddressFromConnections({ connections: t, connectorId: e, addresses: n }) {
      return t.map((s) => {
        if ((e ? s.connectorId.toLowerCase() === e.toLowerCase() : false) && n) {
          const i = s.accounts.filter((o) => !n.some((c) => c.toLowerCase() === o.address.toLowerCase()));
          return {
            ...s,
            accounts: i
          };
        }
        return s;
      });
    },
    excludeExistingConnections(t, e) {
      const n = new Set(t);
      return e.filter((s) => !n.has(s.connectorId));
    },
    getConnectionsByConnectorId(t, e) {
      return t.filter((n) => n.connectorId.toLowerCase() === e.toLowerCase());
    },
    getConnectionsData(t) {
      var _a2;
      const e = !!((_a2 = j.state.remoteFeatures) == null ? void 0 : _a2.multiWallet), n = V.state.activeConnectorIds[t], s = G.getConnections(t), i = (G.state.recentConnections.get(t) ?? []).filter((a) => V.getConnectorById(a.connectorId)), o = ia.excludeExistingConnections([
        ...s.map((a) => a.connectorId),
        ...n ? [
          n
        ] : []
      ], i);
      return e ? {
        connections: s,
        recentConnections: o
      } : {
        connections: s.filter((a) => a.connectorId.toLowerCase() === (n == null ? void 0 : n.toLowerCase())),
        recentConnections: []
      };
    },
    onConnectMobile(t) {
      const e = G.state.wcUri;
      if ((t == null ? void 0 : t.mobile_link) && e) try {
        G.setWcError(false);
        const { mobile_link: n, link_mode: s, name: r } = t, { redirect: i, redirectUniversalLink: o, href: a } = ee.formatNativeUrl(n, e, s), c = i, l = o, d = ee.isIframe() ? "_top" : "_self";
        G.setWcLinking({
          name: r,
          href: a
        }), G.setRecentWallet(t), j.state.experimental_preferUniversalLinks && l ? ee.openHref(l, d) : ee.openHref(c, d);
      } catch (n) {
        fe.sendEvent({
          type: "track",
          event: "CONNECT_PROXY_ERROR",
          properties: {
            message: n instanceof Error ? n.message : "Error parsing the deep link",
            uri: e,
            mobile_link: t.mobile_link,
            name: t.name
          }
        }), G.setWcError(true);
      }
    }
  };
  Ur = De({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false,
    connectingWallet: void 0
  });
  vn = {
    state: Ur,
    subscribe(t) {
      return ot(Ur, () => t(Ur));
    },
    subscribeOpen(t) {
      return at(Ur, "open", t);
    },
    set(t) {
      Object.assign(Ur, {
        ...Ur,
        ...t
      });
    }
  };
  Be = De({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  });
  Ky = {
    state: Be,
    subscribe(t) {
      return ot(Be, () => t(Be));
    },
    setLastNetworkInView(t) {
      Be.lastNetworkInView = t;
    },
    async fetchTransactions(t) {
      var _a2;
      if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
      Be.loading = true;
      try {
        const e = await le.fetchTransactions({
          account: t,
          cursor: Be.next,
          chainId: (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
        }), n = Go.filterSpamTransactions(e.data), s = Go.filterByConnectedChain(n), r = [
          ...Be.transactions,
          ...s
        ];
        Be.loading = false, Be.transactions = r, Be.transactionsByYear = Go.groupTransactionsByYearAndMonth(Be.transactionsByYear, s), Be.empty = r.length === 0, Be.next = e.next ? e.next : void 0;
      } catch {
        const n = b.state.activeChain;
        fe.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: t,
            projectId: j.state.projectId,
            cursor: Be.next,
            isSmartAccount: on(n) === is.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), Un.showError("Failed to fetch transactions"), Be.loading = false, Be.empty = true, Be.next = void 0;
      }
    },
    groupTransactionsByYearAndMonth(t = {}, e = []) {
      const n = t;
      return e.forEach((s) => {
        const r = new Date(s.metadata.minedAt).getFullYear(), i = new Date(s.metadata.minedAt).getMonth(), o = n[r] ?? {}, c = (o[i] ?? []).filter((l) => l.id !== s.id);
        n[r] = {
          ...o,
          [i]: [
            ...c,
            s
          ].sort((l, d) => new Date(d.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
        };
      }), n;
    },
    filterSpamTransactions(t) {
      return t.filter((e) => {
        var _a2;
        return !((_a2 = e.transfers) == null ? void 0 : _a2.every((s) => {
          var _a3;
          return ((_a3 = s.nft_info) == null ? void 0 : _a3.flags.is_spam) === true;
        }));
      });
    },
    filterByConnectedChain(t) {
      var _a2;
      const e = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
      return t.filter((s) => s.metadata.chain === e);
    },
    clearCursor() {
      Be.next = void 0;
    },
    resetTransactions() {
      Be.transactions = [], Be.transactionsByYear = {}, Be.lastNetworkInView = void 0, Be.loading = false, Be.empty = false, Be.next = void 0;
    }
  };
  Go = ln(Ky, "API_ERROR");
  we = De({
    connections: /* @__PURE__ */ new Map(),
    recentConnections: /* @__PURE__ */ new Map(),
    isSwitchingConnection: false,
    wcError: false,
    wcFetchingUri: false,
    buffering: false,
    status: "disconnected"
  });
  let Js;
  let zy, Qa;
  zy = {
    state: we,
    subscribe(t) {
      return ot(we, () => t(we));
    },
    subscribeKey(t, e) {
      return at(we, t, e);
    },
    _getClient() {
      return we._client;
    },
    setClient(t) {
      we._client = Zi(t);
    },
    initialize(t) {
      const e = t.filter((n) => !!n.namespace).map((n) => n.namespace);
      G.syncStorageConnections(e);
    },
    syncStorageConnections(t) {
      const e = H.getConnections(), n = t ?? Array.from(b.state.chains.keys());
      for (const s of n) {
        const r = e[s] ?? [], i = new Map(we.recentConnections);
        i.set(s, r), we.recentConnections = i;
      }
    },
    getConnections(t) {
      return t ? we.connections.get(t) ?? [] : [];
    },
    hasAnyConnection(t) {
      const e = G.state.connections;
      return Array.from(e.values()).flatMap((n) => n).some(({ connectorId: n }) => n === t);
    },
    async connectWalletConnect({ cache: t = "auto" } = {}) {
      var _a2, _b2, _c2, _d3;
      we.wcFetchingUri = true;
      const e = ee.isTelegram() || ee.isSafari() && ee.isIos();
      if (t === "always" || t === "auto" && e) {
        if (Js) {
          await Js, Js = void 0;
          return;
        }
        if (!ee.isPairingExpired(we == null ? void 0 : we.wcPairingExpiry)) {
          const n = we.wcUri;
          we.wcUri = n;
          return;
        }
        Js = (_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b2.call(_a2).catch(() => {
        }), G.state.status = "connecting", await Js, Js = void 0, we.wcPairingExpiry = void 0, G.state.status = "connected";
      } else await ((_d3 = (_c2 = G._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d3.call(_c2));
    },
    async connectExternal(t, e, n = true) {
      var _a2, _b2, _c2;
      const s = await ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b2.call(_a2, t));
      n && b.setActiveNamespace(e);
      const r = V.state.allConnectors.find((o) => o.id === (t == null ? void 0 : t.id)), i = t.type === "AUTH" ? "email" : "browser";
      return fe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: {
          method: i,
          name: (r == null ? void 0 : r.name) || "Unknown",
          view: ae.state.view,
          walletRank: (_c2 = r == null ? void 0 : r.explorerWallet) == null ? void 0 : _c2.order
        }
      }), s;
    },
    async reconnectExternal(t) {
      var _a2, _b2;
      await ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.reconnectExternal) == null ? void 0 : _b2.call(_a2, t));
      const e = t.chain || b.state.activeChain;
      e && V.setConnectorId(t.id, e);
    },
    async setPreferredAccountType(t, e) {
      var _a2;
      if (!e) return;
      me.setLoading(true, b.state.activeChain);
      const n = V.getAuthConnector();
      n && (b.setAccountProp("preferredAccountType", t, e), await n.provider.setPreferredAccount(t), H.setPreferredAccountTypes(Object.entries(b.state.chains).reduce((s, [r, i]) => {
        const o = r, a = on(o);
        return a !== void 0 && (s[o] = a), s;
      }, {})), await G.reconnectExternal(n), me.setLoading(false, b.state.activeChain), fe.sendEvent({
        type: "track",
        event: "SET_PREFERRED_ACCOUNT_TYPE",
        properties: {
          accountType: t,
          network: ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || ""
        }
      }));
    },
    async signMessage(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.signMessage(t);
    },
    parseUnits(t, e) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.parseUnits(t, e);
    },
    formatUnits(t, e) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.formatUnits(t, e);
    },
    updateBalance(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.updateBalance(t);
    },
    async sendTransaction(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.sendTransaction(t);
    },
    async getCapabilities(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.getCapabilities(t);
    },
    async grantPermissions(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.grantPermissions(t);
    },
    async walletGetAssets(t) {
      var _a2;
      return ((_a2 = G._getClient()) == null ? void 0 : _a2.walletGetAssets(t)) ?? {};
    },
    async estimateGas(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.estimateGas(t);
    },
    async writeContract(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.writeContract(t);
    },
    async writeSolanaTransaction(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.writeSolanaTransaction(t);
    },
    async getEnsAddress(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.getEnsAddress(t);
    },
    async getEnsAvatar(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.getEnsAvatar(t);
    },
    checkInstalled(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.checkInstalled) == null ? void 0 : _b2.call(_a2, t)) || false;
    },
    resetWcConnection() {
      we.wcUri = void 0, we.wcPairingExpiry = void 0, we.wcLinking = void 0, we.recentWallet = void 0, we.wcFetchingUri = false, we.status = "disconnected", Go.resetTransactions(), H.deleteWalletConnectDeepLink(), H.deleteRecentWallet(), vn.set({
        connectingWallet: void 0
      });
    },
    resetUri() {
      we.wcUri = void 0, we.wcPairingExpiry = void 0, Js = void 0, we.wcFetchingUri = false, vn.set({
        connectingWallet: void 0
      });
    },
    finalizeWcConnection(t) {
      var _a2, _b2;
      const { wcLinking: e, recentWallet: n } = G.state;
      e && H.setWalletConnectDeepLink(e), n && H.setAppKitRecent(n), t && fe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: t,
        properties: {
          method: e ? "mobile" : "qrcode",
          name: ((_b2 = (_a2 = ae.state.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b2.name) || "Unknown",
          view: ae.state.view,
          walletRank: n == null ? void 0 : n.order
        }
      });
    },
    setWcBasic(t) {
      we.wcBasic = t;
    },
    setUri(t) {
      we.wcUri = t, we.wcFetchingUri = false, we.wcPairingExpiry = ee.getPairingExpiry();
    },
    setWcLinking(t) {
      we.wcLinking = t;
    },
    setWcError(t) {
      we.wcError = t, we.wcFetchingUri = false, we.buffering = false;
    },
    setRecentWallet(t) {
      we.recentWallet = t;
    },
    setBuffering(t) {
      we.buffering = t;
    },
    setStatus(t) {
      we.status = t;
    },
    setIsSwitchingConnection(t) {
      we.isSwitchingConnection = t;
    },
    async disconnect({ id: t, namespace: e, initialDisconnect: n } = {}) {
      var _a2;
      try {
        await ((_a2 = G._getClient()) == null ? void 0 : _a2.disconnect({
          id: t,
          chainNamespace: e,
          initialDisconnect: n
        }));
      } catch (s) {
        throw new Cr("Failed to disconnect", "INTERNAL_SDK_ERROR", s);
      }
    },
    async disconnectConnector({ id: t, namespace: e }) {
      var _a2;
      try {
        await ((_a2 = G._getClient()) == null ? void 0 : _a2.disconnectConnector({
          id: t,
          namespace: e
        }));
      } catch (n) {
        throw new Cr("Failed to disconnect connector", "INTERNAL_SDK_ERROR", n);
      }
    },
    setConnections(t, e) {
      const n = new Map(we.connections);
      n.set(e, t), we.connections = n;
    },
    async handleAuthAccountSwitch({ address: t, namespace: e }) {
      var _a2, _b2, _c2;
      const s = (_c2 = (_b2 = (_a2 = b.getAccountData(e)) == null ? void 0 : _a2.user) == null ? void 0 : _b2.accounts) == null ? void 0 : _c2.find((i) => i.type === "smartAccount"), r = s && s.address.toLowerCase() === t.toLowerCase() && yi.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
      await G.setPreferredAccountType(r, e);
    },
    async handleActiveConnection({ connection: t, namespace: e, address: n }) {
      var _a2;
      const s = V.getConnectorById(t.connectorId), r = t.connectorId === F.CONNECTOR_ID.AUTH;
      if (!s) throw new Error(`No connector found for connection: ${t.connectorId}`);
      if (r) n && await G.handleAuthAccountSwitch({
        address: n,
        namespace: e
      });
      else return (_a2 = await G.connectExternal({
        id: s.id,
        type: s.type,
        provider: s.provider,
        address: n,
        chain: e
      }, e)) == null ? void 0 : _a2.address;
      return n;
    },
    async handleDisconnectedConnection({ connection: t, namespace: e, address: n, closeModalOnConnect: s }) {
      var _a2, _b2;
      const r = V.getConnectorById(t.connectorId), i = (_b2 = (_a2 = t.auth) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase(), o = t.connectorId === F.CONNECTOR_ID.AUTH, a = t.connectorId === F.CONNECTOR_ID.WALLET_CONNECT;
      if (!r) throw new Error(`No connector found for connection: ${t.connectorId}`);
      let c;
      if (o) if (i && yi.isSocialProvider(i)) {
        const { address: l } = await yi.connectSocial({
          social: i,
          closeModalOnConnect: s,
          onOpenFarcaster() {
            me.open({
              view: "ConnectingFarcaster"
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const { address: l } = await yi.connectEmail({
          closeModalOnConnect: s,
          onOpen() {
            me.open({
              view: "EmailLogin"
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      }
      else if (a) {
        const { address: l } = await yi.connectWalletConnect({
          walletConnect: true,
          connector: r,
          closeModalOnConnect: s,
          onOpen(d) {
            const u = d ? "AllWallets" : "ConnectingWalletConnect";
            me.state.open ? ae.push(u) : me.open({
              view: u
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const l = await G.connectExternal({
          id: r.id,
          type: r.type,
          provider: r.provider,
          chain: e
        }, e);
        l && (c = l.address);
      }
      return o && n && await G.handleAuthAccountSwitch({
        address: n,
        namespace: e
      }), c;
    },
    async switchConnection({ connection: t, address: e, namespace: n, closeModalOnConnect: s, onChange: r }) {
      var _a2;
      let i;
      const o = (_a2 = b.getAccountData(n)) == null ? void 0 : _a2.caipAddress;
      if (o) {
        const { address: c } = it.parseCaipAddress(o);
        i = c;
      }
      const a = ia.getConnectionStatus(t, n);
      switch (a) {
        case "connected":
        case "active": {
          const c = await G.handleActiveConnection({
            connection: t,
            namespace: n,
            address: e
          });
          if (i && c) {
            const l = c.toLowerCase() !== i.toLowerCase();
            r == null ? void 0 : r({
              address: c,
              namespace: n,
              hasSwitchedAccount: l,
              hasSwitchedWallet: a === "active"
            });
          }
          break;
        }
        case "disconnected": {
          const c = await G.handleDisconnectedConnection({
            connection: t,
            namespace: n,
            address: e,
            closeModalOnConnect: s
          });
          c && (r == null ? void 0 : r({
            address: c,
            namespace: n,
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
  G = ln(zy);
  Qa = {
    createBalance(t, e) {
      const n = {
        name: t.metadata.name || "",
        symbol: t.metadata.symbol || "",
        decimals: t.metadata.decimals || 0,
        value: t.metadata.value || 0,
        price: t.metadata.price || 0,
        iconUrl: t.metadata.iconUrl || ""
      };
      return {
        name: n.name,
        symbol: n.symbol,
        chainId: e,
        address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
        value: n.value,
        price: n.price,
        quantity: {
          decimals: n.decimals.toString(),
          numeric: this.convertHexToBalance({
            hex: t.balance,
            decimals: n.decimals
          })
        },
        iconUrl: n.iconUrl
      };
    },
    convertHexToBalance({ hex: t, decimals: e }) {
      return Yf(BigInt(t), e);
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
      const n = e[1], s = parseInt(n, 10);
      return isNaN(s) ? "0x0" : `0x${s.toString(16)}`;
    },
    isWalletGetAssetsResponse(t) {
      return typeof t != "object" || t === null ? false : Object.values(t).every((e) => Array.isArray(e) && e.every((n) => this.isValidAsset(n)));
    },
    isValidAsset(t) {
      return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string";
    }
  };
  let ec;
  async function ou() {
    if (!ec) {
      const { createPublicClient: t, http: e, defineChain: n } = await ta(async () => {
        const { createPublicClient: s, http: r, defineChain: i } = await import("./index-BthHIC45.js");
        return {
          createPublicClient: s,
          http: r,
          defineChain: i
        };
      }, __vite__mapDeps([0,1,2,3]));
      ec = {
        createPublicClient: t,
        http: e,
        defineChain: n
      };
    }
    return ec;
  }
  let sl, tc, oa, Tt, ve, Yy, pe, nc, No, Q, fp, Zy, Ot, Jy, Fi, rl, Xy, Ce, Qy, il;
  sl = {
    getBlockchainApiRpcUrl(t, e) {
      const n = new URL("https://rpc.walletconnect.org/v1/");
      return n.searchParams.set("chainId", t), n.searchParams.set("projectId", e), n.toString();
    },
    async getViemChain(t) {
      const { defineChain: e } = await ou(), { chainId: n } = it.parseCaipNetworkId(t.caipNetworkId);
      return e({
        ...t,
        id: Number(n)
      });
    },
    async createViemPublicClient(t) {
      const { createPublicClient: e, http: n } = await ou(), s = j.state.projectId, r = await sl.getViemChain(t);
      if (!r) throw new Error(`Chain ${t.caipNetworkId} not found in viem/chains`);
      return e({
        chain: r,
        transport: n(sl.getBlockchainApiRpcUrl(t.caipNetworkId, s))
      });
    }
  };
  od = {
    async getMyTokensWithBalance(t = {
      forceUpdate: void 0,
      caipNetwork: b.state.activeCaipNetwork,
      address: ((_c2) => (_c2 = b.getAccountData()) == null ? void 0 : _c2.address)()
    }) {
      const { forceUpdate: e, caipNetwork: n, address: s } = t, r = V.getConnectorId("eip155") === F.CONNECTOR_ID.AUTH;
      if (!s) return [];
      const i = n ? `${n.caipNetworkId}:${s}` : s, o = H.getBalanceCacheForCaipAddress(i);
      if (o) return o.balances;
      if (n && n.chainNamespace === F.CHAIN.EVM && r) {
        const c = await this.getEIP155Balances(s, n);
        if (c) return this.filterLowQualityTokens(c);
      }
      const a = await le.getBalance(s, n == null ? void 0 : n.caipNetworkId, e);
      return this.filterLowQualityTokens(a.balances);
    },
    async getEIP155Balances(t, e) {
      var _a2, _b2, _c2;
      try {
        const n = Qa.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
        if (!((_c2 = (_b2 = (_a2 = await G.getCapabilities(t)) == null ? void 0 : _a2[n]) == null ? void 0 : _b2.assetDiscovery) == null ? void 0 : _c2.supported)) return null;
        const r = await G.walletGetAssets({
          account: t,
          chainFilter: [
            n
          ]
        });
        if (!Qa.isWalletGetAssetsResponse(r)) return null;
        const o = (r[n] || []).map((a) => Qa.createBalance(a, e.caipNetworkId));
        return H.updateBalanceCache({
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
    async fetchERC20Balance({ caipAddress: t, assetAddress: e, caipNetwork: n }) {
      const s = await sl.createViemPublicClient(n), { address: r } = it.parseCaipAddress(t), [{ result: i }, { result: o }, { result: a }, { result: c }] = await s.multicall({
        contracts: [
          {
            address: e,
            functionName: "name",
            args: [],
            abi: vo
          },
          {
            address: e,
            functionName: "symbol",
            args: [],
            abi: vo
          },
          {
            address: e,
            functionName: "balanceOf",
            args: [
              r
            ],
            abi: vo
          },
          {
            address: e,
            functionName: "decimals",
            args: [],
            abi: vo
          }
        ]
      });
      return {
        name: i,
        symbol: o,
        decimals: c,
        balance: a && c ? Yf(a, c) : "0"
      };
    }
  };
  tc = {
    adapters: {}
  };
  hp = {
    state: tc,
    initialize(t) {
      tc.adapters = {
        ...t
      };
    },
    get(t) {
      return tc.adapters[t];
    }
  };
  oa = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0,
    sui: void 0,
    stacks: void 0,
    ton: void 0
  };
  Tt = De({
    providers: {
      ...oa
    },
    providerIds: {
      ...oa
    }
  });
  $e = {
    state: Tt,
    subscribeKey(t, e) {
      return at(Tt, t, e);
    },
    subscribe(t) {
      return ot(Tt, () => {
        t(Tt);
      });
    },
    subscribeProviders(t) {
      return ot(Tt.providers, () => t(Tt.providers));
    },
    setProvider(t, e) {
      t && e && (Tt.providers[t] = Zi(e));
    },
    getProvider(t) {
      if (t) return Tt.providers[t];
    },
    setProviderId(t, e) {
      e && (Tt.providerIds[t] = e);
    },
    getProviderId(t) {
      if (t) return Tt.providerIds[t];
    },
    reset() {
      Tt.providers = {
        ...oa
      }, Tt.providerIds = {
        ...oa
      };
    },
    resetChain(t) {
      Tt.providers[t] = void 0, Tt.providerIds[t] = void 0;
    }
  };
  Gy = {
    async getTokenList(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = await le.fetchSwapTokens({
        chainId: t
      })) == null ? void 0 : _a2.tokens) == null ? void 0 : _b2.map((s) => ({
        ...s,
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
      const t = b.state.activeCaipNetwork;
      if (!t) return null;
      try {
        switch (t.chainNamespace) {
          case "solana":
            const e = (_a2 = await (G == null ? void 0 : G.estimateGas({
              chainNamespace: "solana"
            }))) == null ? void 0 : _a2.toString();
            return {
              standard: e,
              fast: e,
              instant: e
            };
          case "eip155":
          default:
            return await le.fetchGasPrice({
              chainId: t.caipNetworkId
            });
        }
      } catch {
        return null;
      }
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e, sourceTokenAmount: n, sourceTokenDecimals: s }) {
      const r = await le.fetchSwapAllowance({
        tokenAddress: t,
        userAddress: e
      });
      if ((r == null ? void 0 : r.allowance) && n && s) {
        const i = G.parseUnits(n, s) || 0;
        return BigInt(r.allowance) >= i;
      }
      return false;
    },
    async getMyTokensWithBalance(t) {
      var _a2;
      const e = await od.getMyTokensWithBalance({
        forceUpdate: t,
        caipNetwork: b.state.activeCaipNetwork,
        address: (_a2 = b.getAccountData()) == null ? void 0 : _a2.address
      });
      return b.setAccountProp("tokenBalance", e, b.state.activeChain), this.mapBalancesToSwapTokens(e);
    },
    mapBalancesToSwapTokens(t) {
      return (t == null ? void 0 : t.map((e) => ({
        ...e,
        address: (e == null ? void 0 : e.address) ? e.address : up(),
        decimals: parseInt(e.quantity.decimals, 10),
        logoUri: e.iconUrl,
        eip2612: false
      }))) || [];
    },
    async handleSwapError(t) {
      var _a2, _b2, _c2, _d3;
      try {
        const e = t == null ? void 0 : t.cause;
        return (e == null ? void 0 : e.json) && ((_d3 = (_c2 = (_b2 = (_a2 = await e.json()) == null ? void 0 : _a2.reasons) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.description) == null ? void 0 : _d3.includes("insufficient liquidity")) ? "Insufficient liquidity" : void 0;
      } catch {
        return;
      }
    }
  };
  ve = De({
    tokenBalances: [],
    loading: false
  });
  Yy = {
    state: ve,
    subscribe(t) {
      return ot(ve, () => t(ve));
    },
    subscribeKey(t, e) {
      return at(ve, t, e);
    },
    setToken(t) {
      t && (ve.token = Zi(t));
    },
    setTokenAmount(t) {
      ve.sendTokenAmount = t;
    },
    setReceiverAddress(t) {
      ve.receiverAddress = t;
    },
    setReceiverProfileImageUrl(t) {
      ve.receiverProfileImageUrl = t;
    },
    setReceiverProfileName(t) {
      ve.receiverProfileName = t;
    },
    setNetworkBalanceInUsd(t) {
      ve.networkBalanceInUSD = t;
    },
    setLoading(t) {
      ve.loading = t;
    },
    getSdkEventProperties(t) {
      var _a2, _b2;
      return {
        message: ee.parseError(t),
        isSmartAccount: on(b.state.activeChain) === is.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_a2 = ve.token) == null ? void 0 : _a2.symbol) || "",
        amount: ve.sendTokenAmount ?? 0,
        network: ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
      };
    },
    async sendToken() {
      var _a2;
      try {
        switch (pe.setLoading(true), (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
          case "eip155":
            await pe.sendEvmToken();
            return;
          case "solana":
            await pe.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } catch (t) {
        throw rs.isUserRejectedRequestError(t) ? new op(t) : t;
      } finally {
        pe.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a2, _b2, _c2;
      const t = b.state.activeChain;
      if (!t) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
      const e = on(t);
      if (!pe.state.sendTokenAmount || !pe.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!pe.state.token) throw new Error("A token is required");
      if ((_a2 = pe.state.token) == null ? void 0 : _a2.address) {
        fe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === is.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: pe.state.token.address,
            amount: pe.state.sendTokenAmount,
            network: ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
          }
        });
        const { hash: n } = await pe.sendERC20Token({
          receiverAddress: pe.state.receiverAddress,
          tokenAddress: pe.state.token.address,
          sendTokenAmount: pe.state.sendTokenAmount,
          decimals: pe.state.token.quantity.decimals
        });
        n && (ve.hash = n);
      } else {
        fe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === is.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: pe.state.token.symbol || "",
            amount: pe.state.sendTokenAmount,
            network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || ""
          }
        });
        const { hash: n } = await pe.sendNativeToken({
          receiverAddress: pe.state.receiverAddress,
          sendTokenAmount: pe.state.sendTokenAmount,
          decimals: pe.state.token.quantity.decimals
        });
        n && (ve.hash = n);
      }
    },
    async fetchTokenBalance(t) {
      var _a2, _b2, _c2;
      ve.loading = true;
      const e = b.state.activeChain, n = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, s = (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = ((_c2 = b.getAccountData(e)) == null ? void 0 : _c2.caipAddress) ?? b.state.activeCaipAddress, i = r ? ee.getPlainAddress(r) : void 0;
      if (ve.lastRetry && !ee.isAllowedRetry(ve.lastRetry, 30 * ge.ONE_SEC_MS)) return ve.loading = false, [];
      try {
        if (i && n && s) {
          const o = await od.getMyTokensWithBalance();
          return ve.tokenBalances = o, ve.lastRetry = void 0, o;
        }
      } catch (o) {
        ve.lastRetry = Date.now(), t == null ? void 0 : t(o), Un.showError("Token Balance Unavailable");
      } finally {
        ve.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (ve.tokenBalances.length === 0) return;
      const t = Gy.mapBalancesToSwapTokens(ve.tokenBalances);
      if (!t) return;
      const e = t.find((n) => n.address === up());
      e && (ve.networkBalanceInUSD = e ? ip.multiply(e.quantity.numeric, e.price).toString() : "0");
    },
    async sendNativeToken(t) {
      var _a2, _b2, _c2, _d3;
      ae.pushTransactionStack({});
      const e = t.receiverAddress, n = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address, s = G.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), i = await G.sendTransaction({
        chainNamespace: F.CHAIN.EVM,
        to: e,
        address: n,
        data: "0x",
        value: s ?? BigInt(0)
      });
      return fe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: on("eip155") === is.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b2 = pe.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: t.sendTokenAmount,
          network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: i || ""
        }
      }), (_d3 = G._getClient()) == null ? void 0 : _d3.updateBalance("eip155"), pe.resetSend(), {
        hash: i
      };
    },
    async sendERC20Token(t) {
      var _a2, _b2, _c2;
      ae.pushTransactionStack({
        onSuccess() {
          ae.replace("Account");
        }
      });
      const e = G.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), n = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address;
      if (n && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
        const s = ee.getPlainAddress(t.tokenAddress);
        if (!s) throw new Error("SendController:sendERC20Token - tokenAddress is required");
        const r = await G.writeContract({
          fromAddress: n,
          tokenAddress: s,
          args: [
            t.receiverAddress,
            e ?? BigInt(0)
          ],
          method: "transfer",
          abi: cy.getERC20Abi(s),
          chainNamespace: F.CHAIN.EVM
        });
        return fe.sendEvent({
          type: "track",
          event: "SEND_SUCCESS",
          properties: {
            isSmartAccount: on("eip155") === is.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((_b2 = pe.state.token) == null ? void 0 : _b2.symbol) || "",
            amount: t.sendTokenAmount,
            network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
            hash: r || ""
          }
        }), pe.resetSend(), {
          hash: r
        };
      }
      return {
        hash: void 0
      };
    },
    async sendSolanaToken() {
      var _a2, _b2, _c2;
      if (!pe.state.sendTokenAmount || !pe.state.receiverAddress) throw new Error("An amount and receiver address are required");
      ae.pushTransactionStack({
        onSuccess() {
          ae.replace("Account");
        }
      });
      let t;
      pe.state.token && pe.state.token.address !== ge.SOLANA_NATIVE_TOKEN_ADDRESS && (ee.isCaipAddress(pe.state.token.address) ? t = ee.getPlainAddress(pe.state.token.address) : t = pe.state.token.address);
      const e = await G.sendTransaction({
        chainNamespace: "solana",
        tokenMint: t,
        to: pe.state.receiverAddress,
        value: pe.state.sendTokenAmount
      });
      e && (ve.hash = e), (_a2 = G._getClient()) == null ? void 0 : _a2.updateBalance("solana"), fe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: false,
          token: ((_b2 = pe.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: pe.state.sendTokenAmount,
          network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: e || ""
        }
      }), pe.resetSend();
    },
    resetSend() {
      ve.token = void 0, ve.sendTokenAmount = void 0, ve.receiverAddress = void 0, ve.receiverProfileImageUrl = void 0, ve.receiverProfileName = void 0, ve.loading = false, ve.tokenBalances = [];
    }
  };
  pe = ln(Yy);
  nc = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    user: void 0,
    preferredAccountType: void 0
  };
  No = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  Q = De({
    chains: Cy(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  fp = {
    state: Q,
    subscribe(t) {
      return ot(Q, () => {
        t(Q);
      });
    },
    subscribeKey(t, e) {
      return at(Q, t, e);
    },
    subscribeAccountStateProp(t, e, n) {
      var _a2;
      const s = n || Q.activeChain;
      return s ? at(((_a2 = Q.chains.get(s)) == null ? void 0 : _a2.accountState) || {}, t, e) : () => {
      };
    },
    subscribeChainProp(t, e, n) {
      let s;
      return ot(Q.chains, () => {
        var _a2;
        const r = n || Q.activeChain;
        if (r) {
          const i = (_a2 = Q.chains.get(r)) == null ? void 0 : _a2[t];
          s !== i && (s = i, e(i));
        }
      });
    },
    initialize(t, e, n) {
      const { chainId: s, namespace: r } = H.getActiveNetworkProps(), i = e == null ? void 0 : e.find((d) => d.id.toString() === (s == null ? void 0 : s.toString())), a = t.find((d) => (d == null ? void 0 : d.namespace) === r) || (t == null ? void 0 : t[0]), c = t.map((d) => d.namespace).filter((d) => d !== void 0), l = j.state.enableEmbedded ? /* @__PURE__ */ new Set([
        ...c
      ]) : /* @__PURE__ */ new Set([
        ...(e == null ? void 0 : e.map((d) => d.chainNamespace)) ?? []
      ]);
      ((t == null ? void 0 : t.length) === 0 || !a) && (Q.noAdapters = true), Q.noAdapters || (Q.activeChain = a == null ? void 0 : a.namespace, Q.activeCaipNetwork = i, b.setChainNetworkData(a == null ? void 0 : a.namespace, {
        caipNetwork: i
      }), Q.activeChain && vn.set({
        activeChain: a == null ? void 0 : a.namespace
      })), l.forEach((d) => {
        const u = e == null ? void 0 : e.filter((g) => g.chainNamespace === d), h = H.getPreferredAccountTypes() || {}, f = {
          ...j.state.defaultAccountTypes,
          ...h
        };
        b.state.chains.set(d, {
          namespace: d,
          networkState: De({
            ...No,
            caipNetwork: u == null ? void 0 : u[0]
          }),
          accountState: De({
            ...nc,
            preferredAccountType: f[d]
          }),
          caipNetworks: u ?? [],
          ...n
        }), b.setRequestedCaipNetworks(u ?? [], d);
      });
    },
    removeAdapter(t) {
      var _a2, _b2;
      if (Q.activeChain === t) {
        const e = Array.from(Q.chains.entries()).find(([n]) => n !== t);
        if (e) {
          const n = (_b2 = (_a2 = e[1]) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0];
          n && b.setActiveCaipNetwork(n);
        }
      }
      Q.chains.delete(t);
    },
    addAdapter(t, { connectionControllerClient: e }, n) {
      if (!t.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
      Q.chains.set(t.namespace, {
        namespace: t.namespace,
        networkState: {
          ...No,
          caipNetwork: n[0]
        },
        accountState: {
          ...nc
        },
        caipNetworks: n,
        connectionControllerClient: e
      }), b.setRequestedCaipNetworks((n == null ? void 0 : n.filter((s) => s.chainNamespace === t.namespace)) ?? [], t.namespace);
    },
    addNetwork(t) {
      var _a2;
      const e = Q.chains.get(t.chainNamespace);
      if (e) {
        const n = [
          ...e.caipNetworks || []
        ];
        ((_a2 = e.caipNetworks) == null ? void 0 : _a2.find((s) => s.id === t.id)) || n.push(t), Q.chains.set(t.chainNamespace, {
          ...e,
          caipNetworks: n
        }), b.setRequestedCaipNetworks(n, t.chainNamespace), V.filterByNamespace(t.chainNamespace, true);
      }
    },
    removeNetwork(t, e) {
      var _a2, _b2, _c2;
      const n = Q.chains.get(t);
      if (n) {
        const s = ((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.id) === e, r = [
          ...((_b2 = n.caipNetworks) == null ? void 0 : _b2.filter((i) => i.id !== e)) || []
        ];
        s && ((_c2 = n == null ? void 0 : n.caipNetworks) == null ? void 0 : _c2[0]) && b.setActiveCaipNetwork(n.caipNetworks[0]), Q.chains.set(t, {
          ...n,
          caipNetworks: r
        }), b.setRequestedCaipNetworks(r || [], t), r.length === 0 && V.filterByNamespace(t, false);
      }
    },
    setAdapterNetworkState(t, e) {
      const n = Q.chains.get(t);
      n && (n.networkState = {
        ...n.networkState || No,
        ...e
      }, Q.chains.set(t, n));
    },
    setChainAccountData(t, e, n = true) {
      if (!t) throw new Error("Chain is required to update chain account data");
      const s = Q.chains.get(t);
      if (s) {
        const r = {
          ...s.accountState || nc,
          ...e
        };
        Q.chains.set(t, {
          ...s,
          accountState: r
        }), (Q.chains.size === 1 || Q.activeChain === t) && e.caipAddress && (Q.activeCaipAddress = e.caipAddress);
      }
    },
    setChainNetworkData(t, e) {
      if (!t) return;
      const n = Q.chains.get(t);
      if (n) {
        const s = {
          ...n.networkState || No,
          ...e
        };
        Q.chains.set(t, {
          ...n,
          networkState: s
        });
      }
    },
    setAccountProp(t, e, n, s = true) {
      b.setChainAccountData(n, {
        [t]: e
      }, s);
    },
    setActiveNamespace(t) {
      var _a2, _b2;
      Q.activeChain = t;
      const e = t ? Q.chains.get(t) : void 0, n = (_a2 = e == null ? void 0 : e.networkState) == null ? void 0 : _a2.caipNetwork;
      (n == null ? void 0 : n.id) && t && (Q.activeCaipAddress = (_b2 = e == null ? void 0 : e.accountState) == null ? void 0 : _b2.caipAddress, Q.activeCaipNetwork = n, b.setChainNetworkData(t, {
        caipNetwork: n
      }), H.setActiveCaipNetworkId(n == null ? void 0 : n.caipNetworkId), vn.set({
        activeChain: t,
        selectedNetworkId: n == null ? void 0 : n.caipNetworkId
      }));
    },
    setActiveCaipNetwork(t) {
      var _a2, _b2;
      if (!t) return;
      const e = Q.activeChain === t.chainNamespace;
      e || b.setIsSwitchingNamespace(true);
      const n = Q.chains.get(t.chainNamespace);
      Q.activeChain = t.chainNamespace, Q.activeCaipNetwork = t, b.setChainNetworkData(t.chainNamespace, {
        caipNetwork: t
      });
      let s = (_a2 = n == null ? void 0 : n.accountState) == null ? void 0 : _a2.address;
      if (s) Q.activeCaipAddress = `${t.chainNamespace}:${t.id}:${s}`;
      else if (e && Q.activeCaipAddress) {
        const { address: i } = it.parseCaipAddress(Q.activeCaipAddress);
        s = i, Q.activeCaipAddress = `${t.caipNetworkId}:${s}`;
      } else Q.activeCaipAddress = void 0;
      b.setChainAccountData(t.chainNamespace, {
        address: s,
        caipAddress: Q.activeCaipAddress
      }), pe.resetSend(), vn.set({
        activeChain: Q.activeChain,
        selectedNetworkId: (_b2 = Q.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId
      }), H.setActiveCaipNetworkId(t.caipNetworkId), !b.checkIfSupportedNetwork(t.chainNamespace) && j.state.enableNetworkSwitch && !j.state.allowUnsupportedChain && !G.state.wcBasic && b.showUnsupportedChainUI();
    },
    addCaipNetwork(t) {
      var _a2;
      if (!t) return;
      const e = Q.chains.get(t.chainNamespace);
      e && ((_a2 = e == null ? void 0 : e.caipNetworks) == null ? void 0 : _a2.push(t));
    },
    async switchActiveNamespace(t) {
      var _a2;
      if (!t) return;
      const e = t !== b.state.activeChain, n = (_a2 = b.getNetworkData(t)) == null ? void 0 : _a2.caipNetwork, s = b.getCaipNetworkByNamespace(t, n == null ? void 0 : n.id);
      e && s && await b.switchActiveNetwork(s);
    },
    async switchActiveNetwork(t, { throwOnFailure: e = false } = {}) {
      var _a2;
      const n = b.state.activeChain;
      if (!n) throw new Error("ChainController:switchActiveNetwork - namespace is required");
      const s = $e.getProviderId(Q.activeChain) === "AUTH", r = (_a2 = b.getAccountData(n)) == null ? void 0 : _a2.address, i = F.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t.chainNamespace);
      try {
        if (r && t.chainNamespace === n || s && i) {
          const o = hp.get(t.chainNamespace);
          if (!o) throw new Error("Adapter not found");
          await o.switchNetwork({
            caipNetwork: t
          });
        }
        b.setActiveCaipNetwork(t);
      } catch (o) {
        if (e) throw o;
      }
      fe.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: {
          network: t.caipNetworkId
        }
      });
    },
    getConnectionControllerClient(t) {
      const e = t || Q.activeChain;
      if (!e) throw new Error("Chain is required to get connection controller client");
      const n = Q.chains.get(e);
      if (!(n == null ? void 0 : n.connectionControllerClient)) throw new Error("ConnectionController client not set");
      return n.connectionControllerClient;
    },
    getNetworkProp(t, e) {
      var _a2;
      const n = (_a2 = Q.chains.get(e)) == null ? void 0 : _a2.networkState;
      if (n) return n[t];
    },
    getRequestedCaipNetworks(t) {
      const e = Q.chains.get(t), { approvedCaipNetworkIds: n = [], requestedCaipNetworks: s = [] } = (e == null ? void 0 : e.networkState) || {};
      return ee.sortRequestedNetworks(n, s).filter((o) => o == null ? void 0 : o.id);
    },
    getAllRequestedCaipNetworks() {
      const t = [];
      return Q.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
        const n = b.getRequestedCaipNetworks(e.namespace);
        t.push(...n);
      }), t;
    },
    setRequestedCaipNetworks(t, e) {
      b.setAdapterNetworkState(e, {
        requestedCaipNetworks: t
      });
      const s = b.getAllRequestedCaipNetworks().map((i) => i.chainNamespace), r = Array.from(new Set(s));
      V.filterByNamespaces(r);
    },
    getAllApprovedCaipNetworkIds() {
      const t = [];
      return Q.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
        const n = b.getApprovedCaipNetworkIds(e.namespace);
        t.push(...n);
      }), t;
    },
    getActiveCaipNetwork(t) {
      var _a2, _b2;
      return t ? (_b2 = (_a2 = Q.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.caipNetwork : Q.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return Q.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = Q.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.approvedCaipNetworkIds) || [];
    },
    setApprovedCaipNetworksData(t, e) {
      b.setAdapterNetworkState(t, e);
    },
    checkIfSupportedNetwork(t, e) {
      var _a2;
      const n = e || ((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId), s = b.getRequestedCaipNetworks(t);
      return s.length ? s == null ? void 0 : s.some((r) => r.caipNetworkId === n) : true;
    },
    checkIfSupportedChainId(t) {
      var _a2;
      return Q.activeChain ? (_a2 = b.getRequestedCaipNetworks(Q.activeChain)) == null ? void 0 : _a2.some((n) => n.id === t) : true;
    },
    checkIfSmartAccountEnabled() {
      var _a2, _b2, _c2;
      const t = tp.caipNetworkIdToNumber((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
      return !Q.activeChain || !t ? false : !!((_c2 = ((_b2 = Iy.get(zo.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b2.split(",")) || []) == null ? void 0 : _c2.includes(t.toString()));
    },
    showUnsupportedChainUI() {
      me.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const t = Q.activeCaipNetwork;
      return !!((t == null ? void 0 : t.chainNamespace) && ge.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
    },
    resetNetwork(t) {
      b.setAdapterNetworkState(t, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: true
      });
    },
    resetAccount(t) {
      var _a2, _b2;
      const e = t;
      if (!e) throw new Error("Chain is required to set account prop");
      const n = (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.preferredAccountType, s = j.state.defaultAccountTypes[e];
      Q.activeCaipAddress = void 0, b.setChainAccountData(e, {
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
        preferredAccountType: s || n,
        socialProvider: void 0,
        socialWindow: void 0,
        farcasterUrl: void 0,
        user: void 0,
        status: "disconnected"
      }), V.removeConnectorId(e);
    },
    setIsSwitchingNamespace(t) {
      Q.isSwitchingNamespace = t;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var _a2, _b2;
      const t = [];
      let e;
      if (Q.chains.forEach((n) => {
        F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((s) => s === n.namespace) && n.namespace && t.push(n.namespace);
      }), t.length > 0) {
        const n = t[0];
        return e = n ? (_b2 = (_a2 = Q.chains.get(n)) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0] : void 0, e;
      }
    },
    getAccountData(t) {
      var _a2;
      const e = t || Q.activeChain;
      if (e) return (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState;
    },
    getNetworkData(t) {
      var _a2;
      const e = t || Q.activeChain;
      if (e) return (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.networkState;
    },
    getCaipNetworkByNamespace(t, e) {
      var _a2, _b2, _c2;
      if (!t) return;
      const n = b.state.chains.get(t), s = (_a2 = n == null ? void 0 : n.caipNetworks) == null ? void 0 : _a2.find((r) => r.id.toString() === (e == null ? void 0 : e.toString()));
      return s || ((_b2 = n == null ? void 0 : n.networkState) == null ? void 0 : _b2.caipNetwork) || ((_c2 = n == null ? void 0 : n.caipNetworks) == null ? void 0 : _c2[0]);
    },
    getRequestedCaipNetworkIds() {
      const t = V.state.filterByNamespace;
      return (t ? [
        Q.chains.get(t)
      ] : Array.from(Q.chains.values())).flatMap((n) => (n == null ? void 0 : n.caipNetworks) || []).map((n) => n.caipNetworkId);
    },
    getCaipNetworks(t) {
      return t ? b.getRequestedCaipNetworks(t) : b.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(t, e) {
      return fp.getCaipNetworks(e).find((n) => n.id.toString() === t.toString() || n.caipNetworkId.toString() === t.toString());
    },
    setLastConnectedSIWECaipNetwork(t) {
      Q.lastConnectedSIWECaipNetwork = t;
    },
    getLastConnectedSIWECaipNetwork() {
      return Q.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(t) {
      var _a2, _b2;
      const e = b.getAccountData();
      if (!e) return [];
      const n = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, s = (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = b.state.activeCaipAddress, i = r ? ee.getPlainAddress(r) : void 0;
      if (b.setAccountProp("balanceLoading", true, s), e.lastRetry && !ee.isAllowedRetry(e.lastRetry, 30 * ge.ONE_SEC_MS)) return b.setAccountProp("balanceLoading", false, s), [];
      try {
        if (i && n && s) {
          const o = await od.getMyTokensWithBalance();
          return b.setAccountProp("tokenBalance", o, s), b.setAccountProp("lastRetry", void 0, s), b.setAccountProp("balanceLoading", false, s), o;
        }
      } catch (o) {
        b.setAccountProp("lastRetry", Date.now(), s), t == null ? void 0 : t(o), Un.showError("Token Balance Unavailable");
      } finally {
        b.setAccountProp("balanceLoading", false, s);
      }
      return [];
    },
    isCaipNetworkDisabled(t) {
      var _a2;
      const e = t.chainNamespace, n = !!((_a2 = b.getAccountData(e)) == null ? void 0 : _a2.caipAddress), s = b.getAllApprovedCaipNetworkIds(), r = b.getNetworkProp("supportsAllNetworks", e) !== false, i = V.getConnectorId(e), o = V.getAuthConnector(), a = i === F.CONNECTOR_ID.AUTH && o;
      return !n || r || a ? false : !(s == null ? void 0 : s.includes(t.caipNetworkId));
    }
  };
  b = ln(fp);
  Zy = {
    onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = false }) {
      var _a2, _b2;
      const n = b.state.activeCaipNetwork, s = b.state.activeChain, r = ae.state.data;
      if (t.id === (n == null ? void 0 : n.id)) return;
      const o = !!((_a2 = b.getAccountData(s)) == null ? void 0 : _a2.address), a = !!((_b2 = b.getAccountData(t.chainNamespace)) == null ? void 0 : _b2.address), c = t.chainNamespace !== s, d = V.getConnectorId(s) === F.CONNECTOR_ID.AUTH, u = F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((h) => h === t.chainNamespace);
      e || d && u ? ae.push("SwitchNetwork", {
        ...r,
        network: t
      }) : o && c && !a ? ae.push("SwitchActiveChain", {
        switchToChain: t.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network: t
      }) : ae.push("SwitchNetwork", {
        ...r,
        network: t
      });
    }
  };
  Ot = De({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  Jy = {
    state: Ot,
    subscribe(t) {
      return ot(Ot, () => t(Ot));
    },
    subscribeKey(t, e) {
      return at(Ot, t, e);
    },
    async open(t) {
      var _a2, _b2;
      const e = t == null ? void 0 : t.namespace, n = b.state.activeChain, s = e && e !== n, r = (_a2 = b.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : _a2.caipAddress, i = b.state.noAdapters;
      if (G.state.wcBasic ? se.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      }) : await se.prefetch(), V.setFilterByNamespace(t == null ? void 0 : t.namespace), me.setLoading(true, e), e && s) {
        const o = ((_b2 = b.getNetworkData(e)) == null ? void 0 : _b2.caipNetwork) || b.getRequestedCaipNetworks(e)[0];
        o && (i ? (await b.switchActiveNetwork(o), ae.push("ConnectingWalletConnectBasic")) : Zy.onSwitchNetwork({
          network: o,
          ignoreSwitchConfirmation: true
        }));
      } else j.state.manualWCControl || i && !r ? ee.isMobile() ? ae.reset("AllWallets") : ae.reset("ConnectingWalletConnectBasic") : (t == null ? void 0 : t.view) ? ae.reset(t.view, t.data) : r ? ae.reset("Account") : ae.reset("Connect");
      Ot.open = true, vn.set({
        open: true
      }), fe.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close() {
      const t = j.state.enableEmbedded, e = !!b.state.activeCaipAddress;
      Ot.open && fe.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: {
          connected: e
        }
      }), Ot.open = false, ae.reset("Connect"), me.clearLoading(), t ? e ? ae.replace("Account") : ae.push("Connect") : vn.set({
        open: false
      }), G.resetUri();
    },
    setLoading(t, e) {
      e && Ot.loadingNamespaceMap.set(e, t), Ot.loading = t, vn.set({
        loading: t
      });
    },
    clearLoading() {
      Ot.loadingNamespaceMap.clear(), Ot.loading = false, vn.set({
        loading: false
      });
    },
    shake() {
      Ot.shake || (Ot.shake = true, setTimeout(() => {
        Ot.shake = false;
      }, 500));
    }
  };
  me = ln(Jy);
  Fi = {
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
  rl = {
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
  Xy = {
    providers: cp,
    selectedProvider: null,
    error: null,
    purchaseCurrency: Fi,
    paymentCurrency: rl,
    purchaseCurrencies: [
      Fi
    ],
    paymentCurrencies: [],
    quotesLoading: false
  };
  Ce = De(Xy);
  Qy = {
    state: Ce,
    subscribe(t) {
      return ot(Ce, () => t(Ce));
    },
    subscribeKey(t, e) {
      return at(Ce, t, e);
    },
    setSelectedProvider(t) {
      var _a2, _b2;
      if (t && t.name === "meld") {
        const e = b.state.activeChain, n = e === F.CHAIN.SOLANA ? "SOL" : "USDC", s = e ? ((_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address) ?? "" : "", r = new URL(t.url);
        r.searchParams.append("publicKey", Ay), r.searchParams.append("destinationCurrencyCode", n), r.searchParams.append("walletAddress", s), r.searchParams.append("externalCustomerId", j.state.projectId), Ce.selectedProvider = {
          ...t,
          url: r.toString()
        };
      } else Ce.selectedProvider = t;
    },
    setOnrampProviders(t) {
      if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
        const e = t, n = cp.filter((s) => e.includes(s.name));
        Ce.providers = n;
      } else Ce.providers = [];
    },
    setPurchaseCurrency(t) {
      Ce.purchaseCurrency = t;
    },
    setPaymentCurrency(t) {
      Ce.paymentCurrency = t;
    },
    setPurchaseAmount(t) {
      il.state.purchaseAmount = t;
    },
    setPaymentAmount(t) {
      il.state.paymentAmount = t;
    },
    async getAvailableCurrencies() {
      const t = await le.getOnrampOptions();
      Ce.purchaseCurrencies = t.purchaseCurrencies, Ce.paymentCurrencies = t.paymentCurrencies, Ce.paymentCurrency = t.paymentCurrencies[0] || rl, Ce.purchaseCurrency = t.purchaseCurrencies[0] || Fi, await se.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await se.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
    },
    async getQuote() {
      var _a2, _b2;
      Ce.quotesLoading = true;
      try {
        const t = await le.getOnrampQuote({
          purchaseCurrency: Ce.purchaseCurrency,
          paymentCurrency: Ce.paymentCurrency,
          amount: ((_a2 = Ce.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
          network: (_b2 = Ce.purchaseCurrency) == null ? void 0 : _b2.symbol
        });
        return Ce.quotesLoading = false, Ce.purchaseAmount = Number(t == null ? void 0 : t.purchaseAmount.amount), t;
      } catch (t) {
        return Ce.error = t.message, Ce.quotesLoading = false, null;
      } finally {
        Ce.quotesLoading = false;
      }
    },
    resetState() {
      Ce.selectedProvider = null, Ce.error = null, Ce.purchaseCurrency = Fi, Ce.paymentCurrency = rl, Ce.purchaseCurrencies = [
        Fi
      ], Ce.paymentCurrencies = [], Ce.paymentAmount = void 0, Ce.purchaseAmount = void 0, Ce.quotesLoading = false;
    }
  };
  il = ln(Qy);
  var e0 = Object.defineProperty, t0 = (t, e, n) => e in t ? e0(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, au = (t, e, n) => t0(t, typeof e != "symbol" ? e + "" : e, n);
  let n0 = class extends fi {
    constructor(e) {
      super(), this.opts = e, au(this, "protocol", "wc"), au(this, "version", 2);
    }
  };
  var s0 = Object.defineProperty, r0 = (t, e, n) => e in t ? s0(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, i0 = (t, e, n) => r0(t, e + "", n);
  let o0 = class extends fi {
    constructor(e, n) {
      super(), this.core = e, this.logger = n, i0(this, "records", /* @__PURE__ */ new Map());
    }
  }, a0 = class {
    constructor(e, n) {
      this.logger = e, this.core = n;
    }
  }, c0 = class extends fi {
    constructor(e, n) {
      super(), this.relayer = e, this.logger = n;
    }
  }, l0 = class extends fi {
    constructor(e) {
      super();
    }
  }, d0 = class {
    constructor(e, n, s, r) {
      this.core = e, this.logger = n, this.name = s;
    }
  }, u0 = class extends fi {
    constructor(e, n) {
      super(), this.relayer = e, this.logger = n;
    }
  }, h0 = class extends fi {
    constructor(e, n) {
      super(), this.core = e, this.logger = n;
    }
  }, f0 = class {
    constructor(e, n, s) {
      this.core = e, this.logger = n, this.store = s;
    }
  };
  class p0 {
    constructor(e, n) {
      this.projectId = e, this.logger = n;
    }
  }
  let g0 = class {
    constructor(e, n, s) {
      this.core = e, this.logger = n, this.telemetryEnabled = s;
    }
  };
  function m0(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), u = d.charCodeAt(0);
      if (e[u] !== 255) throw new TypeError(d + " is ambiguous");
      e[u] = l;
    }
    const n = t.length, s = t.charAt(0), r = Math.log(n) / Math.log(256), i = Math.log(256) / Math.log(n);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, u = 0, h = 0;
      const f = l.length;
      for (; h !== f && l[h] === 0; ) h++, d++;
      const g = (f - h) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; h !== f; ) {
        let O = l[h], A = 0;
        for (let N = g - 1; (O !== 0 || A < u) && N !== -1; N--, A++) O += 256 * p[N] >>> 0, p[N] = O % n >>> 0, O = O / n >>> 0;
        if (O !== 0) throw new Error("Non-zero carry");
        u = A, h++;
      }
      let m = g - u;
      for (; m !== g && p[m] === 0; ) m++;
      let T = s.repeat(d);
      for (; m < g; ++m) T += t.charAt(p[m]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === s; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const O = l.charCodeAt(d);
        if (O > 255) return;
        let A = e[O];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < h) && P !== -1; P--, N++) A += n * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        h = N, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(u + (f - p));
      let T = u;
      for (; p !== f; ) m[T++] = g[p++];
      return m;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + n + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var w0 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  m0(w0);
  var y0 = {};
  const b0 = "ReactNative", Cn = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  }, E0 = "js";
  function aa() {
    return typeof an < "u" && typeof an.versions < "u" && typeof an.versions.node < "u";
  }
  function xr() {
    return !zt.getDocument() && !!zt.getNavigator() && navigator.product === b0;
  }
  function v0() {
    return xr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "android";
  }
  function C0() {
    return xr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "ios";
  }
  function lo() {
    return !aa() && !!zt.getNavigator() && !!zt.getDocument();
  }
  function Ta() {
    return xr() ? Cn.reactNative : aa() ? Cn.node : lo() ? Cn.browser : Cn.unknown;
  }
  function cu() {
    var t;
    try {
      return xr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Application) < "u" ? (t = globalThis.Application) == null ? void 0 : t.applicationId : void 0;
    } catch {
      return;
    }
  }
  function A0(t, e) {
    const n = new URLSearchParams(t);
    return Object.entries(e).sort(([s], [r]) => s.localeCompare(r)).forEach(([s, r]) => {
      r != null && n.set(s, String(r));
    }), n.toString();
  }
  function I0() {
    return Zf.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function N0() {
    if (Ta() === Cn.reactNative && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u") {
      const { OS: n, Version: s } = globalThis.Platform;
      return [
        n,
        s
      ].join("-");
    }
    const t = Pw();
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
  function S0() {
    var t;
    const e = Ta();
    return e === Cn.browser ? [
      e,
      ((t = zt.getLocation()) == null ? void 0 : t.host) || "unknown"
    ].join(":") : e;
  }
  function pp(t, e, n) {
    const s = N0(), r = S0();
    return [
      [
        t,
        e
      ].join("-"),
      [
        E0,
        n
      ].join("-"),
      s,
      r
    ].join("/");
  }
  function _0({ protocol: t, version: e, relayUrl: n, sdkVersion: s, auth: r, projectId: i, useOnCloseEvent: o, bundleId: a, packageName: c }) {
    const l = n.split("?"), d = pp(t, e, s), u = {
      auth: r,
      ua: d,
      projectId: i,
      useOnCloseEvent: o,
      packageName: c || void 0,
      bundleId: a || void 0
    }, h = A0(l[1] || "", u);
    return l[0] + "?" + h;
  }
  function ol(t) {
    return Object.fromEntries(t.entries());
  }
  function al(t) {
    return new Map(Object.entries(t));
  }
  function T0(t = K.FIVE_MINUTES, e) {
    const n = K.toMiliseconds(t || K.FIVE_MINUTES);
    let s, r, i, o;
    return {
      resolve: (a) => {
        i && s && (clearTimeout(i), s(a), o = Promise.resolve(a));
      },
      reject: (a) => {
        i && r && (clearTimeout(i), r(a));
      },
      done: () => new Promise((a, c) => {
        if (o) return a(o);
        i = setTimeout(() => {
          const l = new Error(e);
          o = Promise.reject(l), c(l);
        }, n), s = a, r = c;
      })
    };
  }
  function Dn(t, e, n) {
    return new Promise(async (s, r) => {
      const i = setTimeout(() => r(new Error(n)), e);
      try {
        const o = await t;
        s(o);
      } catch (o) {
        r(o);
      }
      clearTimeout(i);
    });
  }
  function gp(t, e) {
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
  function O0(t) {
    return gp("topic", t);
  }
  function x0(t) {
    return gp("id", t);
  }
  function k0(t) {
    const [e, n] = t.split(":"), s = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof n == "string") s.topic = n;
    else if (e === "id" && Number.isInteger(Number(n))) s.id = Number(n);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);
    return s;
  }
  function ji(t, e) {
    return K.fromMiliseconds(Date.now() + K.toMiliseconds(t));
  }
  function lu(t) {
    return Date.now() >= K.toMiliseconds(t);
  }
  function sc(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function du() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
  function mp() {
    return typeof an < "u" && y0.IS_VITEST === "true";
  }
  function wp(t) {
    return Ae.from(t, "base64").toString("utf-8");
  }
  function P0(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  const So = BigInt(2 ** 32 - 1), uu = BigInt(32);
  function yp(t, e = false) {
    return e ? {
      h: Number(t & So),
      l: Number(t >> uu & So)
    } : {
      h: Number(t >> uu & So) | 0,
      l: Number(t & So) | 0
    };
  }
  function bp(t, e = false) {
    const n = t.length;
    let s = new Uint32Array(n), r = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
      const { h: o, l: a } = yp(t[i], e);
      [s[i], r[i]] = [
        o,
        a
      ];
    }
    return [
      s,
      r
    ];
  }
  const hu = (t, e, n) => t >>> n, fu = (t, e, n) => t << 32 - n | e >>> n, Os = (t, e, n) => t >>> n | e << 32 - n, xs = (t, e, n) => t << 32 - n | e >>> n, Pi = (t, e, n) => t << 64 - n | e >>> n - 32, Ri = (t, e, n) => t >>> n - 32 | e << 64 - n, R0 = (t, e) => e, $0 = (t, e) => t, U0 = (t, e, n) => t << n | e >>> 32 - n, D0 = (t, e, n) => e << n | t >>> 32 - n, B0 = (t, e, n) => e << n - 32 | t >>> 64 - n, L0 = (t, e, n) => t << n - 32 | e >>> 64 - n;
  function mn(t, e, n, s) {
    const r = (e >>> 0) + (s >>> 0);
    return {
      h: t + n + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const ad = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), cd = (t, e, n, s) => e + n + s + (t / 2 ** 32 | 0) | 0, M0 = (t, e, n, s) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0), F0 = (t, e, n, s, r) => e + n + s + r + (t / 2 ** 32 | 0) | 0, j0 = (t, e, n, s, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0) + (r >>> 0), q0 = (t, e, n, s, r, i) => e + n + s + r + i + (t / 2 ** 32 | 0) | 0, Dr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Oa(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function hs(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function In(t, ...e) {
    if (!Oa(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function xa(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    hs(t.outputLen), hs(t.blockLen);
  }
  function Vs(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function ld(t, e) {
    In(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
  }
  function Ji(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function cn(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function rc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function Tn(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Ep = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function vp(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Gn = Ep ? (t) => t : (t) => vp(t);
  function W0(t) {
    for (let e = 0; e < t.length; e++) t[e] = vp(t[e]);
    return t;
  }
  const ks = Ep ? (t) => t : W0, Cp = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", H0 = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function Qr(t) {
    if (In(t), Cp) return t.toHex();
    let e = "";
    for (let n = 0; n < t.length; n++) e += H0[t[n]];
    return e;
  }
  const Wn = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function pu(t) {
    if (t >= Wn._0 && t <= Wn._9) return t - Wn._0;
    if (t >= Wn.A && t <= Wn.F) return t - (Wn.A - 10);
    if (t >= Wn.a && t <= Wn.f) return t - (Wn.a - 10);
  }
  function ca(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Cp) return Uint8Array.fromHex(t);
    const e = t.length, n = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const s = new Uint8Array(n);
    for (let r = 0, i = 0; r < n; r++, i += 2) {
      const o = pu(t.charCodeAt(i)), a = pu(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      s[r] = o * 16 + a;
    }
    return s;
  }
  function Ap(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function An(t) {
    return typeof t == "string" && (t = Ap(t)), In(t), t;
  }
  function Ds(...t) {
    let e = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      In(r), e += r.length;
    }
    const n = new Uint8Array(e);
    for (let s = 0, r = 0; s < t.length; s++) {
      const i = t[s];
      n.set(i, r), r += i.length;
    }
    return n;
  }
  let ka = class {
  };
  function uo(t) {
    const e = (s) => t().update(An(s)).digest(), n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
  }
  function V0(t) {
    const e = (s, r) => t(r).update(An(s)).digest(), n = t({});
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (s) => t(s), e;
  }
  function kr(t = 32) {
    if (Dr && typeof Dr.getRandomValues == "function") return Dr.getRandomValues(new Uint8Array(t));
    if (Dr && typeof Dr.randomBytes == "function") return Uint8Array.from(Dr.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const K0 = BigInt(0), bi = BigInt(1), z0 = BigInt(2), G0 = BigInt(7), Y0 = BigInt(256), Z0 = BigInt(113), Ip = [], Np = [], Sp = [];
  for (let t = 0, e = bi, n = 1, s = 0; t < 24; t++) {
    [n, s] = [
      s,
      (2 * n + 3 * s) % 5
    ], Ip.push(2 * (5 * s + n)), Np.push((t + 1) * (t + 2) / 2 % 64);
    let r = K0;
    for (let i = 0; i < 7; i++) e = (e << bi ^ (e >> G0) * Z0) % Y0, e & z0 && (r ^= bi << (bi << BigInt(i)) - bi);
    Sp.push(r);
  }
  const _p = bp(Sp, true), J0 = _p[0], X0 = _p[1], gu = (t, e, n) => n > 32 ? B0(t, e, n) : U0(t, e, n), mu = (t, e, n) => n > 32 ? L0(t, e, n) : D0(t, e, n);
  function Q0(t, e = 24) {
    const n = new Uint32Array(10);
    for (let s = 24 - e; s < 24; s++) {
      for (let o = 0; o < 10; o++) n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = n[c], d = n[c + 1], u = gu(l, d, 1) ^ n[a], h = mu(l, d, 1) ^ n[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= h;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = Np[o], c = gu(r, i, a), l = mu(r, i, a), d = Ip[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) n[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
      }
      t[0] ^= J0[s], t[1] ^= X0[s];
    }
    cn(n);
  }
  let eb = class Tp extends ka {
    constructor(e, n, s, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = n, this.outputLen = s, this.enableXOF = r, this.rounds = i, hs(s), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = Ji(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      ks(this.state32), Q0(this.state32, this.rounds), ks(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      Vs(this), e = An(e), In(e);
      const { blockLen: n, state: s } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(n - this.pos, r - i);
        for (let a = 0; a < o; a++) s[this.pos++] ^= e[i++];
        this.pos === n && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: n, pos: s, blockLen: r } = this;
      e[s] ^= n, (n & 128) !== 0 && s === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      Vs(this, false), In(e), this.finish();
      const n = this.state, { blockLen: s } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= s && this.keccak();
        const o = Math.min(s - this.posOut, i - r);
        e.set(n.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return hs(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (ld(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, cn(this.state);
    }
    _cloneInto(e) {
      const { blockLen: n, suffix: s, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new Tp(n, s, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = s, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  };
  const tb = (t, e, n) => uo(() => new eb(e, t, n));
  tb(1, 136, 256 / 8);
  function nb(t, e, n, s) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, s);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(n >> r & i), a = Number(n & i), c = s ? 4 : 0, l = s ? 0 : 4;
    t.setUint32(e + c, o, s), t.setUint32(e + l, a, s);
  }
  function sb(t, e, n) {
    return t & e ^ ~t & n;
  }
  function rb(t, e, n) {
    return t & e ^ t & n ^ e & n;
  }
  let Op = class extends ka {
    constructor(e, n, s, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = n, this.padOffset = s, this.isLE = r, this.buffer = new Uint8Array(e), this.view = rc(this.buffer);
    }
    update(e) {
      Vs(this), e = An(e), In(e);
      const { view: n, buffer: s, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = rc(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        s.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(n, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      Vs(this), ld(e, this), this.finished = true;
      const { buffer: n, view: s, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      n[o++] = 128, cn(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(s, 0), o = 0);
      for (let u = o; u < r; u++) n[u] = 0;
      nb(s, r - 8, BigInt(this.length * 8), i), this.process(s, 0);
      const a = rc(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let u = 0; u < l; u++) a.setUint32(4 * u, d[u], i);
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const s = e.slice(0, n);
      return this.destroy(), s;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: n, buffer: s, length: r, finished: i, destroyed: o, pos: a } = this;
      return e.destroyed = o, e.finished = i, e.length = r, e.pos = a, r % n && e.buffer.set(s), e;
    }
    clone() {
      return this._cloneInto();
    }
  };
  const ms = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), lt = Uint32Array.from([
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
  ]), dt = Uint32Array.from([
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
  ]), ib = Uint32Array.from([
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
  ]), ws = new Uint32Array(64);
  let ob = class extends Op {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = ms[0] | 0, this.B = ms[1] | 0, this.C = ms[2] | 0, this.D = ms[3] | 0, this.E = ms[4] | 0, this.F = ms[5] | 0, this.G = ms[6] | 0, this.H = ms[7] | 0;
    }
    get() {
      const { A: e, B: n, C: s, D: r, E: i, F: o, G: a, H: c } = this;
      return [
        e,
        n,
        s,
        r,
        i,
        o,
        a,
        c
      ];
    }
    set(e, n, s, r, i, o, a, c) {
      this.A = e | 0, this.B = n | 0, this.C = s | 0, this.D = r | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(e, n) {
      for (let u = 0; u < 16; u++, n += 4) ws[u] = e.getUint32(n, false);
      for (let u = 16; u < 64; u++) {
        const h = ws[u - 15], f = ws[u - 2], g = Tn(h, 7) ^ Tn(h, 18) ^ h >>> 3, p = Tn(f, 17) ^ Tn(f, 19) ^ f >>> 10;
        ws[u] = p + ws[u - 7] + g + ws[u - 16] | 0;
      }
      let { A: s, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let u = 0; u < 64; u++) {
        const h = Tn(a, 6) ^ Tn(a, 11) ^ Tn(a, 25), f = d + h + sb(a, c, l) + ib[u] + ws[u] | 0, g = (Tn(s, 2) ^ Tn(s, 13) ^ Tn(s, 22)) + rb(s, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = s, s = f + g | 0;
      }
      s = s + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(s, r, i, o, a, c, l, d);
    }
    roundClean() {
      cn(ws);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), cn(this.buffer);
    }
  };
  const xp = bp([
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
  ].map((t) => BigInt(t))), ab = xp[0], cb = xp[1], ys = new Uint32Array(80), bs = new Uint32Array(80);
  let dd = class extends Op {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = dt[0] | 0, this.Al = dt[1] | 0, this.Bh = dt[2] | 0, this.Bl = dt[3] | 0, this.Ch = dt[4] | 0, this.Cl = dt[5] | 0, this.Dh = dt[6] | 0, this.Dl = dt[7] | 0, this.Eh = dt[8] | 0, this.El = dt[9] | 0, this.Fh = dt[10] | 0, this.Fl = dt[11] | 0, this.Gh = dt[12] | 0, this.Gl = dt[13] | 0, this.Hh = dt[14] | 0, this.Hl = dt[15] | 0;
    }
    get() {
      const { Ah: e, Al: n, Bh: s, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: u, Fl: h, Gh: f, Gl: g, Hh: p, Hl: m } = this;
      return [
        e,
        n,
        s,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, n, s, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.Ah = e | 0, this.Al = n | 0, this.Bh = s | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = u | 0, this.Fl = h | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = m | 0;
    }
    process(e, n) {
      for (let A = 0; A < 16; A++, n += 4) ys[A] = e.getUint32(n), bs[A] = e.getUint32(n += 4);
      for (let A = 16; A < 80; A++) {
        const N = ys[A - 15] | 0, P = bs[A - 15] | 0, U = Os(N, P, 1) ^ Os(N, P, 8) ^ hu(N, P, 7), D = xs(N, P, 1) ^ xs(N, P, 8) ^ fu(N, P, 7), L = ys[A - 2] | 0, x = bs[A - 2] | 0, B = Os(L, x, 19) ^ Pi(L, x, 61) ^ hu(L, x, 6), M = xs(L, x, 19) ^ Ri(L, x, 61) ^ fu(L, x, 6), _ = M0(D, M, bs[A - 7], bs[A - 16]), y = F0(_, U, B, ys[A - 7], ys[A - 16]);
        ys[A] = y | 0, bs[A] = _ | 0;
      }
      let { Ah: s, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: u, El: h, Fh: f, Fl: g, Gh: p, Gl: m, Hh: T, Hl: O } = this;
      for (let A = 0; A < 80; A++) {
        const N = Os(u, h, 14) ^ Os(u, h, 18) ^ Pi(u, h, 41), P = xs(u, h, 14) ^ xs(u, h, 18) ^ Ri(u, h, 41), U = u & f ^ ~u & p, D = h & g ^ ~h & m, L = j0(O, P, D, cb[A], bs[A]), x = q0(L, T, N, U, ab[A], ys[A]), B = L | 0, M = Os(s, r, 28) ^ Pi(s, r, 34) ^ Pi(s, r, 39), _ = xs(s, r, 28) ^ Ri(s, r, 34) ^ Ri(s, r, 39), y = s & i ^ s & a ^ i & a, E = r & o ^ r & c ^ o & c;
        T = p | 0, O = m | 0, p = f | 0, m = g | 0, f = u | 0, g = h | 0, { h: u, l: h } = mn(l | 0, d | 0, x | 0, B | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = s | 0, o = r | 0;
        const w = ad(B, _, E);
        s = cd(w, x, M, y), r = w | 0;
      }
      ({ h: s, l: r } = mn(this.Ah | 0, this.Al | 0, s | 0, r | 0)), { h: i, l: o } = mn(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = mn(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = mn(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h: u, l: h } = mn(this.Eh | 0, this.El | 0, u | 0, h | 0), { h: f, l: g } = mn(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: m } = mn(this.Gh | 0, this.Gl | 0, p | 0, m | 0), { h: T, l: O } = mn(this.Hh | 0, this.Hl | 0, T | 0, O | 0), this.set(s, r, i, o, a, c, l, d, u, h, f, g, p, m, T, O);
    }
    roundClean() {
      cn(ys, bs);
    }
    destroy() {
      cn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }, lb = class extends dd {
    constructor() {
      super(48), this.Ah = lt[0] | 0, this.Al = lt[1] | 0, this.Bh = lt[2] | 0, this.Bl = lt[3] | 0, this.Ch = lt[4] | 0, this.Cl = lt[5] | 0, this.Dh = lt[6] | 0, this.Dl = lt[7] | 0, this.Eh = lt[8] | 0, this.El = lt[9] | 0, this.Fh = lt[10] | 0, this.Fl = lt[11] | 0, this.Gh = lt[12] | 0, this.Gl = lt[13] | 0, this.Hh = lt[14] | 0, this.Hl = lt[15] | 0;
    }
  };
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
  let db = class extends dd {
    constructor() {
      super(32), this.Ah = ut[0] | 0, this.Al = ut[1] | 0, this.Bh = ut[2] | 0, this.Bl = ut[3] | 0, this.Ch = ut[4] | 0, this.Cl = ut[5] | 0, this.Dh = ut[6] | 0, this.Dl = ut[7] | 0, this.Eh = ut[8] | 0, this.El = ut[9] | 0, this.Fh = ut[10] | 0, this.Fl = ut[11] | 0, this.Gh = ut[12] | 0, this.Gl = ut[13] | 0, this.Hh = ut[14] | 0, this.Hl = ut[15] | 0;
    }
  };
  const kp = uo(() => new ob()), ub = uo(() => new dd()), hb = uo(() => new lb());
  uo(() => new db());
  const fb = Uint8Array.from([
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
  ]), Ke = Uint32Array.from([
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
  ]), te = new Uint32Array(32);
  function Es(t, e, n, s, r, i) {
    const o = r[i], a = r[i + 1];
    let c = te[2 * t], l = te[2 * t + 1], d = te[2 * e], u = te[2 * e + 1], h = te[2 * n], f = te[2 * n + 1], g = te[2 * s], p = te[2 * s + 1], m = ad(c, d, o);
    l = cd(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: R0(p, g),
      Dl: $0(p)
    }, { h: f, l: h } = mn(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Os(u, d, 24),
      Bl: xs(u, d, 24)
    }, te[2 * t] = c, te[2 * t + 1] = l, te[2 * e] = d, te[2 * e + 1] = u, te[2 * n] = h, te[2 * n + 1] = f, te[2 * s] = g, te[2 * s + 1] = p;
  }
  function vs(t, e, n, s, r, i) {
    const o = r[i], a = r[i + 1];
    let c = te[2 * t], l = te[2 * t + 1], d = te[2 * e], u = te[2 * e + 1], h = te[2 * n], f = te[2 * n + 1], g = te[2 * s], p = te[2 * s + 1], m = ad(c, d, o);
    l = cd(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: Os(p, g, 16),
      Dl: xs(p, g, 16)
    }, { h: f, l: h } = mn(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Pi(u, d, 63),
      Bl: Ri(u, d, 63)
    }, te[2 * t] = c, te[2 * t + 1] = l, te[2 * e] = d, te[2 * e + 1] = u, te[2 * n] = h, te[2 * n + 1] = f, te[2 * s] = g, te[2 * s + 1] = p;
  }
  function pb(t, e = {}, n, s, r) {
    if (hs(n), t < 0 || t > n) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > n)) throw new Error("key length must be undefined or 1.." + n);
    if (o !== void 0 && o.length !== s) throw new Error("salt must be undefined or " + s);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  let gb = class extends ka {
    constructor(e, n) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, hs(e), hs(n), this.blockLen = e, this.outputLen = n, this.buffer = new Uint8Array(e), this.buffer32 = Ji(this.buffer);
    }
    update(e) {
      Vs(this), e = An(e), In(e);
      const { blockLen: n, buffer: s, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === n && (ks(r), this.compress(r, 0, false), ks(r), this.pos = 0);
        const l = Math.min(n - this.pos, i - c), d = o + c;
        if (l === n && !(d % 4) && c + l < i) {
          const u = new Uint32Array(a, d, Math.floor((i - c) / 4));
          ks(u);
          for (let h = 0; c + n < i; h += r.length, c += n) this.length += n, this.compress(u, h, false);
          ks(u);
          continue;
        }
        s.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      Vs(this), ld(e, this);
      const { pos: n, buffer32: s } = this;
      this.finished = true, cn(this.buffer.subarray(n)), ks(s), this.compress(s, 0, true), ks(s);
      const r = Ji(e);
      this.get().forEach((i, o) => r[o] = Gn(i));
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const s = e.slice(0, n);
      return this.destroy(), s;
    }
    _cloneInto(e) {
      const { buffer: n, length: s, finished: r, destroyed: i, outputLen: o, pos: a } = this;
      return e || (e = new this.constructor({
        dkLen: o
      })), e.set(...this.get()), e.buffer.set(n), e.destroyed = i, e.finished = r, e.length = s, e.pos = a, e.outputLen = o, e;
    }
    clone() {
      return this._cloneInto();
    }
  }, mb = class extends gb {
    constructor(e = {}) {
      const n = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, n), this.v0l = Ke[0] | 0, this.v0h = Ke[1] | 0, this.v1l = Ke[2] | 0, this.v1h = Ke[3] | 0, this.v2l = Ke[4] | 0, this.v2h = Ke[5] | 0, this.v3l = Ke[6] | 0, this.v3h = Ke[7] | 0, this.v4l = Ke[8] | 0, this.v4h = Ke[9] | 0, this.v5l = Ke[10] | 0, this.v5h = Ke[11] | 0, this.v6l = Ke[12] | 0, this.v6h = Ke[13] | 0, this.v7l = Ke[14] | 0, this.v7h = Ke[15] | 0, pb(n, e, 64, 16, 16);
      let { key: s, personalization: r, salt: i } = e, o = 0;
      if (s !== void 0 && (s = An(s), o = s.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = An(i);
        const a = Ji(i);
        this.v4l ^= Gn(a[0]), this.v4h ^= Gn(a[1]), this.v5l ^= Gn(a[2]), this.v5h ^= Gn(a[3]);
      }
      if (r !== void 0) {
        r = An(r);
        const a = Ji(r);
        this.v6l ^= Gn(a[0]), this.v6h ^= Gn(a[1]), this.v7l ^= Gn(a[2]), this.v7h ^= Gn(a[3]);
      }
      if (s !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(s), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: n, v1l: s, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: u, v5h: h, v6l: f, v6h: g, v7l: p, v7h: m } = this;
      return [
        e,
        n,
        s,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, n, s, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.v0l = e | 0, this.v0h = n | 0, this.v1l = s | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = u | 0, this.v5h = h | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = m | 0;
    }
    compress(e, n, s) {
      this.get().forEach((c, l) => te[l] = c), te.set(Ke, 16);
      let { h: r, l: i } = yp(BigInt(this.length));
      te[24] = Ke[8] ^ i, te[25] = Ke[9] ^ r, s && (te[28] = ~te[28], te[29] = ~te[29]);
      let o = 0;
      const a = fb;
      for (let c = 0; c < 12; c++) Es(0, 4, 8, 12, e, n + 2 * a[o++]), vs(0, 4, 8, 12, e, n + 2 * a[o++]), Es(1, 5, 9, 13, e, n + 2 * a[o++]), vs(1, 5, 9, 13, e, n + 2 * a[o++]), Es(2, 6, 10, 14, e, n + 2 * a[o++]), vs(2, 6, 10, 14, e, n + 2 * a[o++]), Es(3, 7, 11, 15, e, n + 2 * a[o++]), vs(3, 7, 11, 15, e, n + 2 * a[o++]), Es(0, 5, 10, 15, e, n + 2 * a[o++]), vs(0, 5, 10, 15, e, n + 2 * a[o++]), Es(1, 6, 11, 12, e, n + 2 * a[o++]), vs(1, 6, 11, 12, e, n + 2 * a[o++]), Es(2, 7, 8, 13, e, n + 2 * a[o++]), vs(2, 7, 8, 13, e, n + 2 * a[o++]), Es(3, 4, 9, 14, e, n + 2 * a[o++]), vs(3, 4, 9, 14, e, n + 2 * a[o++]);
      this.v0l ^= te[0] ^ te[16], this.v0h ^= te[1] ^ te[17], this.v1l ^= te[2] ^ te[18], this.v1h ^= te[3] ^ te[19], this.v2l ^= te[4] ^ te[20], this.v2h ^= te[5] ^ te[21], this.v3l ^= te[6] ^ te[22], this.v3h ^= te[7] ^ te[23], this.v4l ^= te[8] ^ te[24], this.v4h ^= te[9] ^ te[25], this.v5l ^= te[10] ^ te[26], this.v5h ^= te[11] ^ te[27], this.v6l ^= te[12] ^ te[28], this.v6h ^= te[13] ^ te[29], this.v7l ^= te[14] ^ te[30], this.v7h ^= te[15] ^ te[31], cn(te);
    }
    destroy() {
      this.destroyed = true, cn(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  V0((t) => new mb(t));
  function Pp(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function cl(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function ic(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function kt(t, ...e) {
    if (!Pp(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function wu(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function wb(t, e) {
    kt(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
  }
  function js(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function ai(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function yb(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const bb = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function Eb(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function ll(t) {
    if (typeof t == "string") t = Eb(t);
    else if (Pp(t)) t = dl(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function vb(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function Cb(t, e) {
    if (t.length !== e.length) return false;
    let n = 0;
    for (let s = 0; s < t.length; s++) n |= t[s] ^ e[s];
    return n === 0;
  }
  const Ab = (t, e) => {
    function n(s, ...r) {
      if (kt(s), !bb) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? kt(l) : kt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && kt(r[1]);
      const o = e(s, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          kt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, kt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (kt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(n, t), n;
  };
  function yu(t, e, n = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (n && !Nb(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function bu(t, e, n, s) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, s);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(n >> r & i), a = Number(n & i);
    t.setUint32(e + 4, o, s), t.setUint32(e + 0, a, s);
  }
  function Ib(t, e, n) {
    cl(n);
    const s = new Uint8Array(16), r = yb(s);
    return bu(r, 0, BigInt(e), n), bu(r, 8, BigInt(t), n), s;
  }
  function Nb(t) {
    return t.byteOffset % 4 === 0;
  }
  function dl(t) {
    return Uint8Array.from(t);
  }
  const Rp = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), Sb = Rp("expand 16-byte k"), _b = Rp("expand 32-byte k"), Tb = js(Sb), Ob = js(_b);
  function Ie(t, e) {
    return t << e | t >>> 32 - e;
  }
  function ul(t) {
    return t.byteOffset % 4 === 0;
  }
  const _o = 64, xb = 16, $p = 2 ** 32 - 1, Eu = new Uint32Array();
  function kb(t, e, n, s, r, i, o, a) {
    const c = r.length, l = new Uint8Array(_o), d = js(l), u = ul(r) && ul(i), h = u ? js(r) : Eu, f = u ? js(i) : Eu;
    for (let g = 0; g < c; o++) {
      if (t(e, n, s, d, o, a), o >= $p) throw new Error("arx: counter overflow");
      const p = Math.min(_o, c - g);
      if (u && p === _o) {
        const m = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let T = 0, O; T < xb; T++) O = m + T, f[O] = h[O] ^ d[T];
        g += _o;
        continue;
      }
      for (let m = 0, T; m < p; m++) T = g + m, i[T] = r[T] ^ l[m];
      g += p;
    }
  }
  function Pb(t, e) {
    const { allowShortKeys: n, extendNonceFn: s, counterLength: r, counterRight: i, rounds: o } = vb({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return ic(r), ic(o), cl(i), cl(n), (a, c, l, d, u = 0) => {
      kt(a), kt(c), kt(l);
      const h = l.length;
      if (d === void 0 && (d = new Uint8Array(h)), kt(d), ic(u), u < 0 || u >= $p) throw new Error("arx: counter overflow");
      if (d.length < h) throw new Error(`arx: output (${d.length}) is shorter than data (${h})`);
      const f = [];
      let g = a.length, p, m;
      if (g === 32) f.push(p = dl(a)), m = Ob;
      else if (g === 16 && n) p = new Uint8Array(32), p.set(a), p.set(a, 16), m = Tb, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      ul(c) || f.push(c = dl(c));
      const T = js(p);
      if (s) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        s(m, T, js(c.subarray(0, 16)), T), c = c.subarray(16);
      }
      const O = 16 - r;
      if (O !== c.length) throw new Error(`arx: nonce must be ${O} or 16 bytes`);
      if (O !== 12) {
        const N = new Uint8Array(12);
        N.set(c, i ? 0 : 12 - c.length), c = N, f.push(c);
      }
      const A = js(c);
      return kb(t, m, T, A, l, d, u, o), ai(...f), d;
    };
  }
  const et = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  let Rb = class {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = ll(e), kt(e, 32);
      const n = et(e, 0), s = et(e, 2), r = et(e, 4), i = et(e, 6), o = et(e, 8), a = et(e, 10), c = et(e, 12), l = et(e, 14);
      this.r[0] = n & 8191, this.r[1] = (n >>> 13 | s << 3) & 8191, this.r[2] = (s >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = et(e, 16 + 2 * d);
    }
    process(e, n, s = false) {
      const r = s ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], u = o[4], h = o[5], f = o[6], g = o[7], p = o[8], m = o[9], T = et(e, n + 0), O = et(e, n + 2), A = et(e, n + 4), N = et(e, n + 6), P = et(e, n + 8), U = et(e, n + 10), D = et(e, n + 12), L = et(e, n + 14);
      let x = i[0] + (T & 8191), B = i[1] + ((T >>> 13 | O << 3) & 8191), M = i[2] + ((O >>> 10 | A << 6) & 8191), _ = i[3] + ((A >>> 7 | N << 9) & 8191), y = i[4] + ((N >>> 4 | P << 12) & 8191), E = i[5] + (P >>> 1 & 8191), w = i[6] + ((P >>> 14 | U << 2) & 8191), v = i[7] + ((U >>> 11 | D << 5) & 8191), I = i[8] + ((D >>> 8 | L << 8) & 8191), k = i[9] + (L >>> 5 | r), C = 0, S = C + x * a + B * (5 * m) + M * (5 * p) + _ * (5 * g) + y * (5 * f);
      C = S >>> 13, S &= 8191, S += E * (5 * h) + w * (5 * u) + v * (5 * d) + I * (5 * l) + k * (5 * c), C += S >>> 13, S &= 8191;
      let R = C + x * c + B * a + M * (5 * m) + _ * (5 * p) + y * (5 * g);
      C = R >>> 13, R &= 8191, R += E * (5 * f) + w * (5 * h) + v * (5 * u) + I * (5 * d) + k * (5 * l), C += R >>> 13, R &= 8191;
      let $ = C + x * l + B * c + M * a + _ * (5 * m) + y * (5 * p);
      C = $ >>> 13, $ &= 8191, $ += E * (5 * g) + w * (5 * f) + v * (5 * h) + I * (5 * u) + k * (5 * d), C += $ >>> 13, $ &= 8191;
      let Y = C + x * d + B * l + M * c + _ * a + y * (5 * m);
      C = Y >>> 13, Y &= 8191, Y += E * (5 * p) + w * (5 * g) + v * (5 * f) + I * (5 * h) + k * (5 * u), C += Y >>> 13, Y &= 8191;
      let z = C + x * u + B * d + M * l + _ * c + y * a;
      C = z >>> 13, z &= 8191, z += E * (5 * m) + w * (5 * p) + v * (5 * g) + I * (5 * f) + k * (5 * h), C += z >>> 13, z &= 8191;
      let q = C + x * h + B * u + M * d + _ * l + y * c;
      C = q >>> 13, q &= 8191, q += E * a + w * (5 * m) + v * (5 * p) + I * (5 * g) + k * (5 * f), C += q >>> 13, q &= 8191;
      let J = C + x * f + B * h + M * u + _ * d + y * l;
      C = J >>> 13, J &= 8191, J += E * c + w * a + v * (5 * m) + I * (5 * p) + k * (5 * g), C += J >>> 13, J &= 8191;
      let Z = C + x * g + B * f + M * h + _ * u + y * d;
      C = Z >>> 13, Z &= 8191, Z += E * l + w * c + v * a + I * (5 * m) + k * (5 * p), C += Z >>> 13, Z &= 8191;
      let de = C + x * p + B * g + M * f + _ * h + y * u;
      C = de >>> 13, de &= 8191, de += E * d + w * l + v * c + I * a + k * (5 * m), C += de >>> 13, de &= 8191;
      let X = C + x * m + B * p + M * g + _ * f + y * h;
      C = X >>> 13, X &= 8191, X += E * u + w * d + v * l + I * c + k * a, C += X >>> 13, X &= 8191, C = (C << 2) + C | 0, C = C + S | 0, S = C & 8191, C = C >>> 13, R += C, i[0] = S, i[1] = R, i[2] = $, i[3] = Y, i[4] = z, i[5] = q, i[6] = J, i[7] = Z, i[8] = de, i[9] = X;
    }
    finalize() {
      const { h: e, pad: n } = this, s = new Uint16Array(10);
      let r = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
      e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, s[0] = e[0] + 5, r = s[0] >>> 13, s[0] &= 8191;
      for (let a = 1; a < 10; a++) s[a] = e[a] + r, r = s[a] >>> 13, s[a] &= 8191;
      s[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let a = 0; a < 10; a++) s[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = e[a] & i | s[a];
      e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
      let o = e[0] + n[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++) o = (e[a] + n[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
      ai(s);
    }
    update(e) {
      wu(this), e = ll(e), kt(e);
      const { buffer: n, blockLen: s } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(s - this.pos, r - i);
        if (o === s) {
          for (; s <= r - i; i += s) this.process(e, i);
          continue;
        }
        n.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === s && (this.process(n, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      ai(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      wu(this), wb(e, this), this.finished = true;
      const { buffer: n, h: s } = this;
      let { pos: r } = this;
      if (r) {
        for (n[r++] = 1; r < 16; r++) n[r] = 0;
        this.process(n, 0, true);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) e[i++] = s[o] >>> 0, e[i++] = s[o] >>> 8;
      return e;
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const s = e.slice(0, n);
      return this.destroy(), s;
    }
  };
  function $b(t) {
    const e = (s, r) => t(r).update(ll(s)).digest(), n = t(new Uint8Array(32));
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (s) => t(s), e;
  }
  const Ub = $b((t) => new Rb(t));
  function Db(t, e, n, s, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], u = e[1], h = e[2], f = e[3], g = e[4], p = e[5], m = e[6], T = e[7], O = r, A = n[0], N = n[1], P = n[2], U = o, D = a, L = c, x = l, B = d, M = u, _ = h, y = f, E = g, w = p, v = m, I = T, k = O, C = A, S = N, R = P;
    for (let Y = 0; Y < i; Y += 2) U = U + B | 0, k = Ie(k ^ U, 16), E = E + k | 0, B = Ie(B ^ E, 12), U = U + B | 0, k = Ie(k ^ U, 8), E = E + k | 0, B = Ie(B ^ E, 7), D = D + M | 0, C = Ie(C ^ D, 16), w = w + C | 0, M = Ie(M ^ w, 12), D = D + M | 0, C = Ie(C ^ D, 8), w = w + C | 0, M = Ie(M ^ w, 7), L = L + _ | 0, S = Ie(S ^ L, 16), v = v + S | 0, _ = Ie(_ ^ v, 12), L = L + _ | 0, S = Ie(S ^ L, 8), v = v + S | 0, _ = Ie(_ ^ v, 7), x = x + y | 0, R = Ie(R ^ x, 16), I = I + R | 0, y = Ie(y ^ I, 12), x = x + y | 0, R = Ie(R ^ x, 8), I = I + R | 0, y = Ie(y ^ I, 7), U = U + M | 0, R = Ie(R ^ U, 16), v = v + R | 0, M = Ie(M ^ v, 12), U = U + M | 0, R = Ie(R ^ U, 8), v = v + R | 0, M = Ie(M ^ v, 7), D = D + _ | 0, k = Ie(k ^ D, 16), I = I + k | 0, _ = Ie(_ ^ I, 12), D = D + _ | 0, k = Ie(k ^ D, 8), I = I + k | 0, _ = Ie(_ ^ I, 7), L = L + y | 0, C = Ie(C ^ L, 16), E = E + C | 0, y = Ie(y ^ E, 12), L = L + y | 0, C = Ie(C ^ L, 8), E = E + C | 0, y = Ie(y ^ E, 7), x = x + B | 0, S = Ie(S ^ x, 16), w = w + S | 0, B = Ie(B ^ w, 12), x = x + B | 0, S = Ie(S ^ x, 8), w = w + S | 0, B = Ie(B ^ w, 7);
    let $ = 0;
    s[$++] = o + U | 0, s[$++] = a + D | 0, s[$++] = c + L | 0, s[$++] = l + x | 0, s[$++] = d + B | 0, s[$++] = u + M | 0, s[$++] = h + _ | 0, s[$++] = f + y | 0, s[$++] = g + E | 0, s[$++] = p + w | 0, s[$++] = m + v | 0, s[$++] = T + I | 0, s[$++] = O + k | 0, s[$++] = A + C | 0, s[$++] = N + S | 0, s[$++] = P + R | 0;
  }
  const Bb = Pb(Db, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), Lb = new Uint8Array(16), vu = (t, e) => {
    t.update(e);
    const n = e.length % 16;
    n && t.update(Lb.subarray(n));
  }, Mb = new Uint8Array(32);
  function Cu(t, e, n, s, r) {
    const i = t(e, n, Mb), o = Ub.create(i);
    r && vu(o, r), vu(o, s);
    const a = Ib(s.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return ai(i, a), c;
  }
  const Fb = (t) => (e, n, s) => ({
    encrypt(r, i) {
      const o = r.length;
      i = yu(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, n, a, a, 1);
      const c = Cu(t, e, n, a, s);
      return i.set(c, o), ai(c), i;
    },
    decrypt(r, i) {
      i = yu(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = Cu(t, e, n, o, s);
      if (!Cb(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, n, i, i, 1), ai(c), i;
    }
  }), Up = Ab({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, Fb(Bb));
  let Dp = class extends ka {
    constructor(e, n) {
      super(), this.finished = false, this.destroyed = false, xa(e);
      const s = An(n);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(s.length > r ? e.create().update(s).digest() : s);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), cn(i);
    }
    update(e) {
      return Vs(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Vs(this), In(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: n, iHash: s, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
      return e = e, e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = s._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  };
  const Pa = (t, e, n) => new Dp(t, e).update(n).digest();
  Pa.create = (t, e) => new Dp(t, e);
  function jb(t, e, n) {
    return xa(t), n === void 0 && (n = new Uint8Array(t.outputLen)), Pa(t, An(n), An(e));
  }
  const oc = Uint8Array.from([
    0
  ]), Au = Uint8Array.of();
  function qb(t, e, n, s = 32) {
    xa(t), hs(s);
    const r = t.outputLen;
    if (s > 255 * r) throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(s / r);
    n === void 0 && (n = Au);
    const o = new Uint8Array(i * r), a = Pa.create(t, e), c = a._cloneInto(), l = new Uint8Array(a.outputLen);
    for (let d = 0; d < i; d++) oc[0] = d + 1, c.update(d === 0 ? Au : l).update(n).update(oc).digestInto(l), o.set(l, r * d), a._cloneInto(c);
    return a.destroy(), c.destroy(), cn(l, oc), o.slice(0, s);
  }
  const Wb = (t, e, n, s, r) => qb(t, jb(t, e, n), s, r), Ra = kp, ud = BigInt(0), hl = BigInt(1);
  function la(t, e = "") {
    if (typeof t != "boolean") {
      const n = e && `"${e}"`;
      throw new Error(n + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function lr(t, e, n = "") {
    const s = Oa(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!s || i && r !== e) {
      const o = n && `"${n}" `, a = i ? ` of length ${e}` : "", c = s ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function To(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function Bp(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? ud : BigInt("0x" + t);
  }
  function $a(t) {
    return Bp(Qr(t));
  }
  function da(t) {
    return In(t), Bp(Qr(Uint8Array.from(t).reverse()));
  }
  function hd(t, e) {
    return ca(t.toString(16).padStart(e * 2, "0"));
  }
  function fd(t, e) {
    return hd(t, e).reverse();
  }
  function mt(t, e, n) {
    let s;
    if (typeof e == "string") try {
      s = ca(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Oa(e)) s = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = s.length;
    if (typeof n == "number" && r !== n) throw new Error(t + " of length " + n + " expected, got " + r);
    return s;
  }
  const ac = (t) => typeof t == "bigint" && ud <= t;
  function Hb(t, e, n) {
    return ac(t) && ac(e) && ac(n) && e <= t && t < n;
  }
  function fl(t, e, n, s) {
    if (!Hb(e, n, s)) throw new Error("expected valid " + t + ": " + n + " <= n < " + s + ", got " + e);
  }
  function Lp(t) {
    let e;
    for (e = 0; t > ud; t >>= hl, e += 1) ;
    return e;
  }
  const ho = (t) => (hl << BigInt(t)) - hl;
  function Vb(t, e, n) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    const s = (h) => new Uint8Array(h), r = (h) => Uint8Array.of(h);
    let i = s(t), o = s(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...h) => n(o, i, ...h), d = (h = s(0)) => {
      o = l(r(0), h), i = l(), h.length !== 0 && (o = l(r(1), h), i = l());
    }, u = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0;
      const f = [];
      for (; h < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), h += i.length;
      }
      return Ds(...f);
    };
    return (h, f) => {
      c(), d(h);
      let g;
      for (; !(g = f(u())); ) d();
      return c(), g;
    };
  }
  function Ua(t, e, n = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function s(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => s(r, i, false)), Object.entries(n).forEach(([r, i]) => s(r, i, true));
  }
  function Iu(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (n, ...s) => {
      const r = e.get(n);
      if (r !== void 0) return r;
      const i = t(n, ...s);
      return e.set(n, i), i;
    };
  }
  const Ut = BigInt(0), It = BigInt(1), dr = BigInt(2), Mp = BigInt(3), Fp = BigInt(4), jp = BigInt(5), Kb = BigInt(7), qp = BigInt(8), zb = BigInt(9), Wp = BigInt(16);
  function Ht(t, e) {
    const n = t % e;
    return n >= Ut ? n : e + n;
  }
  function pn(t, e, n) {
    let s = t;
    for (; e-- > Ut; ) s *= s, s %= n;
    return s;
  }
  function Nu(t, e) {
    if (t === Ut) throw new Error("invert: expected non-zero number");
    if (e <= Ut) throw new Error("invert: expected positive modulus, got " + e);
    let n = Ht(t, e), s = e, r = Ut, i = It;
    for (; n !== Ut; ) {
      const o = s / n, a = s % n, c = r - i * o;
      s = n, n = a, r = i, i = c;
    }
    if (s !== It) throw new Error("invert: does not exist");
    return Ht(r, e);
  }
  function pd(t, e, n) {
    if (!t.eql(t.sqr(e), n)) throw new Error("Cannot find square root");
  }
  function Hp(t, e) {
    const n = (t.ORDER + It) / Fp, s = t.pow(e, n);
    return pd(t, s, e), s;
  }
  function Gb(t, e) {
    const n = (t.ORDER - jp) / qp, s = t.mul(e, dr), r = t.pow(s, n), i = t.mul(e, r), o = t.mul(t.mul(i, dr), r), a = t.mul(i, t.sub(o, t.ONE));
    return pd(t, a, e), a;
  }
  function Yb(t) {
    const e = Ys(t), n = Vp(t), s = n(e, e.neg(e.ONE)), r = n(e, s), i = n(e, e.neg(s)), o = (t + Kb) / Wp;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, s);
      const u = a.mul(l, r), h = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(u), c);
      l = a.cmov(l, d, f), d = a.cmov(h, u, g);
      const p = a.eql(a.sqr(d), c), m = a.cmov(l, d, p);
      return pd(a, m, c), m;
    };
  }
  function Vp(t) {
    if (t < Mp) throw new Error("sqrt is not defined for small field");
    let e = t - It, n = 0;
    for (; e % dr === Ut; ) e /= dr, n++;
    let s = dr;
    const r = Ys(t);
    for (; Su(r, s) === 1; ) if (s++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (n === 1) return Hp;
    let i = r.pow(s, e);
    const o = (e + It) / dr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (Su(a, c) !== 1) throw new Error("Cannot find square root");
      let l = n, d = a.mul(a.ONE, i), u = a.pow(c, e), h = a.pow(c, o);
      for (; !a.eql(u, a.ONE); ) {
        if (a.is0(u)) return a.ZERO;
        let f = 1, g = a.sqr(u);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = It << BigInt(l - f - 1), m = a.pow(d, p);
        l = f, d = a.sqr(m), u = a.mul(u, d), h = a.mul(h, m);
      }
      return h;
    };
  }
  function Zb(t) {
    return t % Fp === Mp ? Hp : t % qp === jp ? Gb : t % Wp === zb ? Yb(t) : Vp(t);
  }
  const Jb = [
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
  function Xb(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, n = Jb.reduce((s, r) => (s[r] = "function", s), e);
    return Ua(t, n), t;
  }
  function Qb(t, e, n) {
    if (n < Ut) throw new Error("invalid exponent, negatives unsupported");
    if (n === Ut) return t.ONE;
    if (n === It) return e;
    let s = t.ONE, r = e;
    for (; n > Ut; ) n & It && (s = t.mul(s, r)), r = t.sqr(r), n >>= It;
    return s;
  }
  function Kp(t, e, n = false) {
    const s = new Array(e.length).fill(n ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (s[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (s[c] = t.mul(o, s[c]), t.mul(o, a)), i), s;
  }
  function Su(t, e) {
    const n = (t.ORDER - It) / dr, s = t.pow(e, n), r = t.eql(s, t.ONE), i = t.eql(s, t.ZERO), o = t.eql(s, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function zp(t, e) {
    e !== void 0 && hs(e);
    const n = e !== void 0 ? e : t.toString(2).length, s = Math.ceil(n / 8);
    return {
      nBitLength: n,
      nByteLength: s
    };
  }
  function Ys(t, e, n = false, s = {}) {
    if (t <= Ut) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (s.sqrt || n) throw new Error("cannot specify opts in two arguments");
      const h = e;
      h.BITS && (r = h.BITS), h.sqrt && (i = h.sqrt), typeof h.isLE == "boolean" && (n = h.isLE), typeof h.modFromBytes == "boolean" && (o = h.modFromBytes), a = h.allowedLengths;
    } else typeof e == "number" && (r = e), s.sqrt && (i = s.sqrt);
    const { nBitLength: c, nByteLength: l } = zp(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const u = Object.freeze({
      ORDER: t,
      isLE: n,
      BITS: c,
      BYTES: l,
      MASK: ho(c),
      ZERO: Ut,
      ONE: It,
      allowedLengths: a,
      create: (h) => Ht(h, t),
      isValid: (h) => {
        if (typeof h != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof h);
        return Ut <= h && h < t;
      },
      is0: (h) => h === Ut,
      isValidNot0: (h) => !u.is0(h) && u.isValid(h),
      isOdd: (h) => (h & It) === It,
      neg: (h) => Ht(-h, t),
      eql: (h, f) => h === f,
      sqr: (h) => Ht(h * h, t),
      add: (h, f) => Ht(h + f, t),
      sub: (h, f) => Ht(h - f, t),
      mul: (h, f) => Ht(h * f, t),
      pow: (h, f) => Qb(u, h, f),
      div: (h, f) => Ht(h * Nu(f, t), t),
      sqrN: (h) => h * h,
      addN: (h, f) => h + f,
      subN: (h, f) => h - f,
      mulN: (h, f) => h * f,
      inv: (h) => Nu(h, t),
      sqrt: i || ((h) => (d || (d = Zb(t)), d(u, h))),
      toBytes: (h) => n ? fd(h, l) : hd(h, l),
      fromBytes: (h, f = true) => {
        if (a) {
          if (!a.includes(h.length) || h.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
          const p = new Uint8Array(l);
          p.set(h, n ? 0 : p.length - h.length), h = p;
        }
        if (h.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + h.length);
        let g = n ? da(h) : $a(h);
        if (o && (g = Ht(g, t)), !f && !u.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (h) => Kp(u, h),
      cmov: (h, f, g) => g ? f : h
    });
    return Object.freeze(u);
  }
  function Gp(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function Yp(t) {
    const e = Gp(t);
    return e + Math.ceil(e / 2);
  }
  function e1(t, e, n = false) {
    const s = t.length, r = Gp(e), i = Yp(e);
    if (s < 16 || s < i || s > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + s);
    const o = n ? da(t) : $a(t), a = Ht(o, e - It) + It;
    return n ? fd(a, r) : hd(a, r);
  }
  const ci = BigInt(0), ur = BigInt(1);
  function ua(t, e) {
    const n = e.negate();
    return t ? n : e;
  }
  function cc(t, e) {
    const n = Kp(t.Fp, e.map((s) => s.Z));
    return e.map((s, r) => t.fromAffine(s.toAffine(n[r])));
  }
  function Zp(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function lc(t, e) {
    Zp(t, e);
    const n = Math.ceil(e / t) + 1, s = 2 ** (t - 1), r = 2 ** t, i = ho(t), o = BigInt(t);
    return {
      windows: n,
      windowSize: s,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function _u(t, e, n) {
    const { windowSize: s, mask: r, maxNumber: i, shiftBy: o } = n;
    let a = Number(t & r), c = t >> o;
    a > s && (a -= i, c += ur);
    const l = e * s, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: u,
      isNeg: h,
      isNegF: f,
      offsetF: l
    };
  }
  function t1(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n, s) => {
      if (!(n instanceof e)) throw new Error("invalid point at index " + s);
    });
  }
  function n1(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n, s) => {
      if (!e.isValid(n)) throw new Error("invalid scalar at index " + s);
    });
  }
  const dc = /* @__PURE__ */ new WeakMap(), Jp = /* @__PURE__ */ new WeakMap();
  function uc(t) {
    return Jp.get(t) || 1;
  }
  function Tu(t) {
    if (t !== ci) throw new Error("invalid wNAF");
  }
  let s1 = class {
    constructor(e, n) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = n;
    }
    _unsafeLadder(e, n, s = this.ZERO) {
      let r = e;
      for (; n > ci; ) n & ur && (s = s.add(r)), r = r.double(), n >>= ur;
      return s;
    }
    precomputeWindow(e, n) {
      const { windows: s, windowSize: r } = lc(n, this.bits), i = [];
      let o = e, a = o;
      for (let c = 0; c < s; c++) {
        a = o, i.push(a);
        for (let l = 1; l < r; l++) a = a.add(o), i.push(a);
        o = a.double();
      }
      return i;
    }
    wNAF(e, n, s) {
      if (!this.Fn.isValid(s)) throw new Error("invalid scalar");
      let r = this.ZERO, i = this.BASE;
      const o = lc(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: u, isNegF: h, offsetF: f } = _u(s, a, o);
        s = c, d ? i = i.add(ua(h, n[f])) : r = r.add(ua(u, n[l]));
      }
      return Tu(s), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, n, s, r = this.ZERO) {
      const i = lc(e, this.bits);
      for (let o = 0; o < i.windows && s !== ci; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = _u(s, o, i);
        if (s = a, !l) {
          const u = n[c];
          r = r.add(d ? u.negate() : u);
        }
      }
      return Tu(s), r;
    }
    getPrecomputes(e, n, s) {
      let r = dc.get(n);
      return r || (r = this.precomputeWindow(n, e), e !== 1 && (typeof s == "function" && (r = s(r)), dc.set(n, r))), r;
    }
    cached(e, n, s) {
      const r = uc(e);
      return this.wNAF(r, this.getPrecomputes(r, e, s), n);
    }
    unsafe(e, n, s, r) {
      const i = uc(e);
      return i === 1 ? this._unsafeLadder(e, n, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, s), n, r);
    }
    createCache(e, n) {
      Zp(n, this.bits), Jp.set(e, n), dc.delete(e);
    }
    hasCache(e) {
      return uc(e) !== 1;
    }
  };
  function r1(t, e, n, s) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; n > ci || s > ci; ) n & ur && (i = i.add(r)), s & ur && (o = o.add(r)), r = r.double(), n >>= ur, s >>= ur;
    return {
      p1: i,
      p2: o
    };
  }
  function i1(t, e, n, s) {
    t1(n, t), n1(s, e);
    const r = n.length, i = s.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = Lp(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = ho(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = s[p], T = Number(m >> BigInt(f) & l);
        d[T] = d[T].add(n[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function Ou(t, e, n) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return Xb(e), e;
    } else return Ys(t, {
      isLE: n
    });
  }
  function o1(t, e, n = {}, s) {
    if (s === void 0 && (s = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > ci)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = Ou(e.p, n.Fp, s), i = Ou(e.n, n.Fn, s), o = [
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
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), Ap("HashToScalar-");
  const Ei = BigInt(0), Br = BigInt(1), Oo = BigInt(2);
  function a1(t) {
    return Ua(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function c1(t) {
    const e = a1(t), { P: n, type: s, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = s === "x25519";
    if (!a && s !== "x448") throw new Error("invalid type");
    const c = o || kr, l = a ? 255 : 448, d = a ? 32 : 56, u = BigInt(a ? 9 : 5), h = BigInt(a ? 121665 : 39081), f = a ? Oo ** BigInt(254) : Oo ** BigInt(447), g = a ? BigInt(8) * Oo ** BigInt(251) - Br : BigInt(4) * Oo ** BigInt(445) - Br, p = f + g + Br, m = (_) => Ht(_, n), T = O(u);
    function O(_) {
      return fd(m(_), d);
    }
    function A(_) {
      const y = mt("u coordinate", _, d);
      return a && (y[31] &= 127), m(da(y));
    }
    function N(_) {
      return da(r(mt("scalar", _, d)));
    }
    function P(_, y) {
      const E = L(A(y), N(_));
      if (E === Ei) throw new Error("invalid private or public key received");
      return O(E);
    }
    function U(_) {
      return P(_, T);
    }
    function D(_, y, E) {
      const w = m(_ * (y - E));
      return y = m(y - w), E = m(E + w), {
        x_2: y,
        x_3: E
      };
    }
    function L(_, y) {
      fl("u", _, Ei, n), fl("scalar", y, f, p);
      const E = y, w = _;
      let v = Br, I = Ei, k = _, C = Br, S = Ei;
      for (let $ = BigInt(l - 1); $ >= Ei; $--) {
        const Y = E >> $ & Br;
        S ^= Y, { x_2: v, x_3: k } = D(S, v, k), { x_2: I, x_3: C } = D(S, I, C), S = Y;
        const z = v + I, q = m(z * z), J = v - I, Z = m(J * J), de = q - Z, X = k + C, ue = k - C, Me = m(ue * z), qe = m(X * J), je = Me + qe, bt = Me - qe;
        k = m(je * je), C = m(w * m(bt * bt)), v = m(q * Z), I = m(de * (q + m(h * de)));
      }
      ({ x_2: v, x_3: k } = D(S, v, k)), { x_2: I, x_3: C } = D(S, I, C);
      const R = i(I);
      return m(v * R);
    }
    const x = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, B = (_ = c(d)) => (In(_, x.seed), _);
    function M(_) {
      const y = B(_);
      return {
        secretKey: y,
        publicKey: U(y)
      };
    }
    return {
      keygen: M,
      getSharedSecret: (_, y) => P(_, y),
      getPublicKey: (_) => U(_),
      scalarMult: P,
      scalarMultBase: U,
      utils: {
        randomSecretKey: B,
        randomPrivateKey: B
      },
      GuBytes: T.slice(),
      lengths: x
    };
  }
  const l1 = BigInt(1), xu = BigInt(2), d1 = BigInt(3), u1 = BigInt(5);
  BigInt(8);
  const Xp = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), h1 = {
    p: Xp,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function f1(t) {
    const e = BigInt(10), n = BigInt(20), s = BigInt(40), r = BigInt(80), i = Xp, o = t * t % i * t % i, a = pn(o, xu, i) * o % i, c = pn(a, l1, i) * t % i, l = pn(c, u1, i) * c % i, d = pn(l, e, i) * l % i, u = pn(d, n, i) * d % i, h = pn(u, s, i) * u % i, f = pn(h, r, i) * h % i, g = pn(f, r, i) * h % i, p = pn(g, e, i) * l % i;
    return {
      pow_p_5_8: pn(p, xu, i) * t % i,
      b2: o
    };
  }
  function p1(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const g1 = Ys(h1.p, {
    isLE: true
  }), pl = (() => {
    const t = g1.ORDER;
    return c1({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: n, b2: s } = f1(e);
        return Ht(pn(n, d1, t) * s, t);
      },
      adjustScalarBytes: p1
    });
  })(), ku = (t, e) => (t + (t >= 0 ? e : -e) / Qp) / e;
  function m1(t, e, n) {
    const [[s, r], [i, o]] = e, a = ku(o * t, n), c = ku(-r * t, n);
    let l = t - a * s - c * i, d = -a * r - c * o;
    const u = l < as, h = d < as;
    u && (l = -l), h && (d = -d);
    const f = ho(Math.ceil(Lp(n) / 2)) + ei;
    if (l < as || l >= f || d < as || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: u,
      k1: l,
      k2neg: h,
      k2: d
    };
  }
  function gl(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function hc(t, e) {
    const n = {};
    for (let s of Object.keys(e)) n[s] = t[s] === void 0 ? e[s] : t[s];
    return la(n.lowS, "lowS"), la(n.prehash, "prehash"), n.format !== void 0 && gl(n.format), n;
  }
  let w1 = class extends Error {
    constructor(e = "") {
      super(e);
    }
  };
  const ts = {
    Err: w1,
    _tlv: {
      encode: (t, e) => {
        const { Err: n } = ts;
        if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
        if (e.length & 1) throw new n("tlv.encode: unpadded data");
        const s = e.length / 2, r = To(s);
        if (r.length / 2 & 128) throw new n("tlv.encode: long form length too big");
        const i = s > 127 ? To(r.length / 2 | 128) : "";
        return To(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: n } = ts;
        let s = 0;
        if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
        if (e.length < 2 || e[s++] !== t) throw new n("tlv.decode: wrong tlv");
        const r = e[s++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new n("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new n("tlv.decode(long): byte length is too big");
          const l = e.subarray(s, s + c);
          if (l.length !== c) throw new n("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (s += c, o < 128) throw new n("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(s, s + o);
        if (a.length !== o) throw new n("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(s + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = ts;
        if (t < as) throw new e("integer: negative integers are not allowed");
        let n = To(t);
        if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return n;
      },
      decode(t) {
        const { Err: e } = ts;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return $a(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: n, _tlv: s } = ts, r = mt("signature", t), { v: i, l: o } = s.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = s.decode(2, i), { v: l, l: d } = s.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: n.decode(a),
        s: n.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: n } = ts, s = e.encode(2, n.encode(t.r)), r = e.encode(2, n.encode(t.s)), i = s + r;
      return e.encode(48, i);
    }
  }, as = BigInt(0), ei = BigInt(1), Qp = BigInt(2), xo = BigInt(3), y1 = BigInt(4);
  function zr(t, e) {
    const { BYTES: n } = t;
    let s;
    if (typeof e == "bigint") s = e;
    else {
      let r = mt("private key", e);
      try {
        s = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(s)) throw new Error("invalid private key: out of range [1..N-1]");
    return s;
  }
  function b1(t, e = {}) {
    const n = o1("weierstrass", t, e), { Fp: s, Fn: r } = n;
    let i = n.CURVE;
    const { h: o, n: a } = i;
    Ua(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo: c } = e;
    if (c && (!s.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const l = tg(s, r);
    function d() {
      if (!s.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function u(_, y, E) {
      const { x: w, y: v } = y.toAffine(), I = s.toBytes(w);
      if (la(E, "isCompressed"), E) {
        d();
        const k = !s.isOdd(v);
        return Ds(eg(k), I);
      } else return Ds(Uint8Array.of(4), I, s.toBytes(v));
    }
    function h(_) {
      lr(_, void 0, "Point");
      const { publicKey: y, publicKeyUncompressed: E } = l, w = _.length, v = _[0], I = _.subarray(1);
      if (w === y && (v === 2 || v === 3)) {
        const k = s.fromBytes(I);
        if (!s.isValid(k)) throw new Error("bad point: is not on curve, wrong x");
        const C = p(k);
        let S;
        try {
          S = s.sqrt(C);
        } catch ($) {
          const Y = $ instanceof Error ? ": " + $.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + Y);
        }
        d();
        const R = s.isOdd(S);
        return (v & 1) === 1 !== R && (S = s.neg(S)), {
          x: k,
          y: S
        };
      } else if (w === E && v === 4) {
        const k = s.BYTES, C = s.fromBytes(I.subarray(0, k)), S = s.fromBytes(I.subarray(k, k * 2));
        if (!m(C, S)) throw new Error("bad point: is not on curve");
        return {
          x: C,
          y: S
        };
      } else throw new Error(`bad point: got length ${w}, expected compressed=${y} or uncompressed=${E}`);
    }
    const f = e.toBytes || u, g = e.fromBytes || h;
    function p(_) {
      const y = s.sqr(_), E = s.mul(y, _);
      return s.add(s.add(E, s.mul(_, i.a)), i.b);
    }
    function m(_, y) {
      const E = s.sqr(y), w = p(_);
      return s.eql(E, w);
    }
    if (!m(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const T = s.mul(s.pow(i.a, xo), y1), O = s.mul(s.sqr(i.b), BigInt(27));
    if (s.is0(s.add(T, O))) throw new Error("bad curve params: a or b");
    function A(_, y, E = false) {
      if (!s.isValid(y) || E && s.is0(y)) throw new Error(`bad point coordinate ${_}`);
      return y;
    }
    function N(_) {
      if (!(_ instanceof x)) throw new Error("ProjectivePoint expected");
    }
    function P(_) {
      if (!c || !c.basises) throw new Error("no endo");
      return m1(_, c.basises, r.ORDER);
    }
    const U = Iu((_, y) => {
      const { X: E, Y: w, Z: v } = _;
      if (s.eql(v, s.ONE)) return {
        x: E,
        y: w
      };
      const I = _.is0();
      y == null && (y = I ? s.ONE : s.inv(v));
      const k = s.mul(E, y), C = s.mul(w, y), S = s.mul(v, y);
      if (I) return {
        x: s.ZERO,
        y: s.ZERO
      };
      if (!s.eql(S, s.ONE)) throw new Error("invZ was invalid");
      return {
        x: k,
        y: C
      };
    }), D = Iu((_) => {
      if (_.is0()) {
        if (e.allowInfinityPoint && !s.is0(_.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: E } = _.toAffine();
      if (!s.isValid(y) || !s.isValid(E)) throw new Error("bad point: x or y not field elements");
      if (!m(y, E)) throw new Error("bad point: equation left != right");
      if (!_.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function L(_, y, E, w, v) {
      return E = new x(s.mul(E.X, _), E.Y, E.Z), y = ua(w, y), E = ua(v, E), y.add(E);
    }
    class x {
      constructor(y, E, w) {
        this.X = A("x", y), this.Y = A("y", E, true), this.Z = A("z", w), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(y) {
        const { x: E, y: w } = y || {};
        if (!y || !s.isValid(E) || !s.isValid(w)) throw new Error("invalid affine point");
        if (y instanceof x) throw new Error("projective point not allowed");
        return s.is0(E) && s.is0(w) ? x.ZERO : new x(E, w, s.ONE);
      }
      static fromBytes(y) {
        const E = x.fromAffine(g(lr(y, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(y) {
        return x.fromBytes(mt("pointHex", y));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(y = 8, E = true) {
        return M.createCache(this, y), E || this.multiply(xo), this;
      }
      assertValidity() {
        D(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (!s.isOdd) throw new Error("Field doesn't support isOdd");
        return !s.isOdd(y);
      }
      equals(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y, S = s.eql(s.mul(E, C), s.mul(I, v)), R = s.eql(s.mul(w, C), s.mul(k, v));
        return S && R;
      }
      negate() {
        return new x(this.X, s.neg(this.Y), this.Z);
      }
      double() {
        const { a: y, b: E } = i, w = s.mul(E, xo), { X: v, Y: I, Z: k } = this;
        let C = s.ZERO, S = s.ZERO, R = s.ZERO, $ = s.mul(v, v), Y = s.mul(I, I), z = s.mul(k, k), q = s.mul(v, I);
        return q = s.add(q, q), R = s.mul(v, k), R = s.add(R, R), C = s.mul(y, R), S = s.mul(w, z), S = s.add(C, S), C = s.sub(Y, S), S = s.add(Y, S), S = s.mul(C, S), C = s.mul(q, C), R = s.mul(w, R), z = s.mul(y, z), q = s.sub($, z), q = s.mul(y, q), q = s.add(q, R), R = s.add($, $), $ = s.add(R, $), $ = s.add($, z), $ = s.mul($, q), S = s.add(S, $), z = s.mul(I, k), z = s.add(z, z), $ = s.mul(z, q), C = s.sub(C, $), R = s.mul(z, Y), R = s.add(R, R), R = s.add(R, R), new x(C, S, R);
      }
      add(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y;
        let S = s.ZERO, R = s.ZERO, $ = s.ZERO;
        const Y = i.a, z = s.mul(i.b, xo);
        let q = s.mul(E, I), J = s.mul(w, k), Z = s.mul(v, C), de = s.add(E, w), X = s.add(I, k);
        de = s.mul(de, X), X = s.add(q, J), de = s.sub(de, X), X = s.add(E, v);
        let ue = s.add(I, C);
        return X = s.mul(X, ue), ue = s.add(q, Z), X = s.sub(X, ue), ue = s.add(w, v), S = s.add(k, C), ue = s.mul(ue, S), S = s.add(J, Z), ue = s.sub(ue, S), $ = s.mul(Y, X), S = s.mul(z, Z), $ = s.add(S, $), S = s.sub(J, $), $ = s.add(J, $), R = s.mul(S, $), J = s.add(q, q), J = s.add(J, q), Z = s.mul(Y, Z), X = s.mul(z, X), J = s.add(J, Z), Z = s.sub(q, Z), Z = s.mul(Y, Z), X = s.add(X, Z), q = s.mul(J, X), R = s.add(R, q), q = s.mul(ue, X), S = s.mul(de, S), S = s.sub(S, q), q = s.mul(de, J), $ = s.mul(ue, $), $ = s.add($, q), new x(S, R, $);
      }
      subtract(y) {
        return this.add(y.negate());
      }
      is0() {
        return this.equals(x.ZERO);
      }
      multiply(y) {
        const { endo: E } = e;
        if (!r.isValidNot0(y)) throw new Error("invalid scalar: out of range");
        let w, v;
        const I = (k) => M.cached(this, k, (C) => cc(x, C));
        if (E) {
          const { k1neg: k, k1: C, k2neg: S, k2: R } = P(y), { p: $, f: Y } = I(C), { p: z, f: q } = I(R);
          v = Y.add(q), w = L(E.beta, $, z, k, S);
        } else {
          const { p: k, f: C } = I(y);
          w = k, v = C;
        }
        return cc(x, [
          w,
          v
        ])[0];
      }
      multiplyUnsafe(y) {
        const { endo: E } = e, w = this;
        if (!r.isValid(y)) throw new Error("invalid scalar: out of range");
        if (y === as || w.is0()) return x.ZERO;
        if (y === ei) return w;
        if (M.hasCache(this)) return this.multiply(y);
        if (E) {
          const { k1neg: v, k1: I, k2neg: k, k2: C } = P(y), { p1: S, p2: R } = r1(x, w, I, C);
          return L(E.beta, S, R, v, k);
        } else return M.unsafe(w, y);
      }
      multiplyAndAddUnsafe(y, E, w) {
        const v = this.multiplyUnsafe(E).add(y.multiplyUnsafe(w));
        return v.is0() ? void 0 : v;
      }
      toAffine(y) {
        return U(this, y);
      }
      isTorsionFree() {
        const { isTorsionFree: y } = e;
        return o === ei ? true : y ? y(x, this) : M.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: y } = e;
        return o === ei ? this : y ? y(x, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(y = true) {
        return la(y, "isCompressed"), this.assertValidity(), f(x, this, y);
      }
      toHex(y = true) {
        return Qr(this.toBytes(y));
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
      toRawBytes(y = true) {
        return this.toBytes(y);
      }
      _setWindowSize(y) {
        this.precompute(y);
      }
      static normalizeZ(y) {
        return cc(x, y);
      }
      static msm(y, E) {
        return i1(x, r, y, E);
      }
      static fromPrivateKey(y) {
        return x.BASE.multiply(zr(r, y));
      }
    }
    x.BASE = new x(i.Gx, i.Gy, s.ONE), x.ZERO = new x(s.ZERO, s.ONE, s.ZERO), x.Fp = s, x.Fn = r;
    const B = r.BITS, M = new s1(x, e.endo ? Math.ceil(B / 2) : B);
    return x.BASE.precompute(8), x;
  }
  function eg(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function tg(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function E1(t, e = {}) {
    const { Fn: n } = t, s = e.randomBytes || kr, r = Object.assign(tg(t.Fp, n), {
      seed: Yp(n.ORDER)
    });
    function i(h) {
      try {
        return !!zr(n, h);
      } catch {
        return false;
      }
    }
    function o(h, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const m = h.length;
        return f === true && m !== g || f === false && m !== p ? false : !!t.fromBytes(h);
      } catch {
        return false;
      }
    }
    function a(h = s(r.seed)) {
      return e1(lr(h, r.seed, "seed"), n.ORDER);
    }
    function c(h, f = true) {
      return t.BASE.multiply(zr(n, h)).toBytes(f);
    }
    function l(h) {
      const f = a(h);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(h) {
      if (typeof h == "bigint") return false;
      if (h instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (n.allowedLengths || f === g) return;
      const m = mt("key", h).length;
      return m === g || m === p;
    }
    function u(h, f, g = true) {
      if (d(h) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = zr(n, h);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: u,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (h) => zr(n, h),
        precompute(h = 8, f = t.BASE) {
          return f.precompute(h, false);
        }
      },
      lengths: r
    });
  }
  function v1(t, e, n = {}) {
    xa(e), Ua(n, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const s = n.randomBytes || kr, r = n.hmac || ((E, ...w) => Pa(e, E, Ds(...w))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: f } = E1(t, n), g = {
      prehash: false,
      lowS: typeof n.lowS == "boolean" ? n.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function m(E) {
      const w = a >> ei;
      return E > w;
    }
    function T(E, w) {
      if (!o.isValidNot0(w)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return w;
    }
    function O(E, w) {
      gl(w);
      const v = f.signature, I = w === "compact" ? v : w === "recovered" ? v + 1 : void 0;
      return lr(E, I, `${w} signature`);
    }
    class A {
      constructor(w, v, I) {
        this.r = T("r", w), this.s = T("s", v), I != null && (this.recovery = I), Object.freeze(this);
      }
      static fromBytes(w, v = p) {
        O(w, v);
        let I;
        if (v === "der") {
          const { r: R, s: $ } = ts.toSig(lr(w));
          return new A(R, $);
        }
        v === "recovered" && (I = w[0], v = "compact", w = w.subarray(1));
        const k = o.BYTES, C = w.subarray(0, k), S = w.subarray(k, k * 2);
        return new A(o.fromBytes(C), o.fromBytes(S), I);
      }
      static fromHex(w, v) {
        return this.fromBytes(ca(w), v);
      }
      addRecoveryBit(w) {
        return new A(this.r, this.s, w);
      }
      recoverPublicKey(w) {
        const v = i.ORDER, { r: I, s: k, recovery: C } = this;
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        if (a * Qp < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const S = C === 2 || C === 3 ? I + a : I;
        if (!i.isValid(S)) throw new Error("recovery id 2 or 3 invalid");
        const R = i.toBytes(S), $ = t.fromBytes(Ds(eg((C & 1) === 0), R)), Y = o.inv(S), z = P(mt("msgHash", w)), q = o.create(-z * Y), J = o.create(k * Y), Z = t.BASE.multiplyUnsafe(q).add($.multiplyUnsafe(J));
        if (Z.is0()) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return m(this.s);
      }
      toBytes(w = p) {
        if (gl(w), w === "der") return ca(ts.hexFromSig(this));
        const v = o.toBytes(this.r), I = o.toBytes(this.s);
        if (w === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return Ds(Uint8Array.of(this.recovery), v, I);
        }
        return Ds(v, I);
      }
      toHex(w) {
        return Qr(this.toBytes(w));
      }
      assertValidity() {
      }
      static fromCompact(w) {
        return A.fromBytes(mt("sig", w), "compact");
      }
      static fromDER(w) {
        return A.fromBytes(mt("sig", w), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new A(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return Qr(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return Qr(this.toBytes("compact"));
      }
    }
    const N = n.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const w = $a(E), v = E.length * 8 - c;
      return v > 0 ? w >> BigInt(v) : w;
    }, P = n.bits2int_modN || function(E) {
      return o.create(N(E));
    }, U = ho(c);
    function D(E) {
      return fl("num < 2^" + c, E, as, U), o.toBytes(E);
    }
    function L(E, w) {
      return lr(E, void 0, "message"), w ? lr(e(E), void 0, "prehashed message") : E;
    }
    function x(E, w, v) {
      if ([
        "recovered",
        "canonical"
      ].some((J) => J in v)) throw new Error("sign() legacy options not supported");
      const { lowS: I, prehash: k, extraEntropy: C } = hc(v, g);
      E = L(E, k);
      const S = P(E), R = zr(o, w), $ = [
        D(R),
        D(S)
      ];
      if (C != null && C !== false) {
        const J = C === true ? s(f.secretKey) : C;
        $.push(mt("extraEntropy", J));
      }
      const Y = Ds(...$), z = S;
      function q(J) {
        const Z = N(J);
        if (!o.isValidNot0(Z)) return;
        const de = o.inv(Z), X = t.BASE.multiply(Z).toAffine(), ue = o.create(X.x);
        if (ue === as) return;
        const Me = o.create(de * o.create(z + ue * R));
        if (Me === as) return;
        let qe = (X.x === ue ? 0 : 2) | Number(X.y & ei), je = Me;
        return I && m(Me) && (je = o.neg(Me), qe ^= 1), new A(ue, je, qe);
      }
      return {
        seed: Y,
        k2sig: q
      };
    }
    function B(E, w, v = {}) {
      E = mt("message", E);
      const { seed: I, k2sig: k } = x(E, w, v);
      return Vb(e.outputLen, o.BYTES, r)(I, k);
    }
    function M(E) {
      let w;
      const v = typeof E == "string" || Oa(E), I = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (I) w = new A(E.r, E.s);
      else if (v) {
        try {
          w = A.fromBytes(mt("sig", E), "der");
        } catch (k) {
          if (!(k instanceof ts.Err)) throw k;
        }
        if (!w) try {
          w = A.fromBytes(mt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return w || false;
    }
    function _(E, w, v, I = {}) {
      const { lowS: k, prehash: C, format: S } = hc(I, g);
      if (v = mt("publicKey", v), w = L(mt("message", w), C), "strict" in I) throw new Error("options.strict was renamed to lowS");
      const R = S === void 0 ? M(E) : A.fromBytes(mt("sig", E), S);
      if (R === false) return false;
      try {
        const $ = t.fromBytes(v);
        if (k && R.hasHighS()) return false;
        const { r: Y, s: z } = R, q = P(w), J = o.inv(z), Z = o.create(q * J), de = o.create(Y * J), X = t.BASE.multiplyUnsafe(Z).add($.multiplyUnsafe(de));
        return X.is0() ? false : o.create(X.x) === Y;
      } catch {
        return false;
      }
    }
    function y(E, w, v = {}) {
      const { prehash: I } = hc(v, g);
      return w = L(w, I), A.fromBytes(E, "recovered").recoverPublicKey(w).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: u,
      utils: h,
      lengths: f,
      Point: t,
      sign: B,
      verify: _,
      recoverPublicKey: y,
      Signature: A,
      hash: e
    });
  }
  function C1(t) {
    const e = {
      a: t.a,
      b: t.b,
      p: t.Fp.ORDER,
      n: t.n,
      h: t.h,
      Gx: t.Gx,
      Gy: t.Gy
    }, n = t.Fp;
    let s = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
    const r = Ys(e.n, {
      BITS: t.nBitLength,
      allowedLengths: s,
      modFromBytes: t.wrapPrivateKey
    }), i = {
      Fp: n,
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
  function A1(t) {
    const { CURVE: e, curveOpts: n } = C1(t), s = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN
    };
    return {
      CURVE: e,
      curveOpts: n,
      hash: t.hash,
      ecdsaOpts: s
    };
  }
  function I1(t, e) {
    const n = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: n,
      CURVE: Object.assign({}, t, zp(n.Fn.ORDER, n.Fn.BITS))
    });
  }
  function N1(t) {
    const { CURVE: e, curveOpts: n, hash: s, ecdsaOpts: r } = A1(t), i = b1(e, n), o = v1(i, s, r);
    return I1(t, o);
  }
  function ml(t, e) {
    const n = (s) => N1({
      ...t,
      hash: s
    });
    return {
      ...n(e),
      create: n
    };
  }
  const ng = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, sg = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, rg = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, S1 = Ys(ng.p), _1 = Ys(sg.p), T1 = Ys(rg.p), O1 = ml({
    ...ng,
    Fp: S1,
    lowS: false
  }, kp);
  ml({
    ...sg,
    Fp: _1,
    lowS: false
  }, hb), ml({
    ...rg,
    Fp: T1,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, ub);
  const x1 = O1, ig = "base10", Nt = "base16", br = "base64pad", gd = "base64url", fo = "utf8", og = 0, gi = 1, Da = 2, k1 = 0, Pu = 1, qi = 12, md = 32;
  function P1() {
    const t = pl.utils.randomPrivateKey(), e = pl.getPublicKey(t);
    return {
      privateKey: yt(t, Nt),
      publicKey: yt(e, Nt)
    };
  }
  function wl() {
    const t = kr(md);
    return yt(t, Nt);
  }
  function R1(t, e) {
    const n = pl.getSharedSecret($t(t, Nt), $t(e, Nt)), s = Wb(Ra, n, void 0, void 0, md);
    return yt(s, Nt);
  }
  function $1(t) {
    const e = Ra($t(t, Nt));
    return yt(e, Nt);
  }
  function Yo(t) {
    const e = Ra($t(t, fo));
    return yt(e, Nt);
  }
  function ag(t) {
    return $t(`${t}`, ig);
  }
  function Ar(t) {
    return Number(yt(t, ig));
  }
  function cg(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function lg(t) {
    const e = t.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - e.length % 4) % 4;
    return e + "=".repeat(n);
  }
  function U1(t) {
    const e = ag(typeof t.type < "u" ? t.type : og);
    if (Ar(e) === gi && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const n = typeof t.senderPublicKey < "u" ? $t(t.senderPublicKey, Nt) : void 0, s = typeof t.iv < "u" ? $t(t.iv, Nt) : kr(qi), r = $t(t.symKey, Nt), i = Up(r, s).encrypt($t(t.message, fo)), o = dg({
      type: e,
      sealed: i,
      iv: s,
      senderPublicKey: n
    });
    return t.encoding === gd ? cg(o) : o;
  }
  function D1(t) {
    const e = $t(t.symKey, Nt), { sealed: n, iv: s } = Xi({
      encoded: t.encoded,
      encoding: t.encoding
    }), r = Up(e, s).decrypt(n);
    if (r === null) throw new Error("Failed to decrypt");
    return yt(r, fo);
  }
  function B1(t, e) {
    const n = ag(Da), s = kr(qi), r = $t(t, fo), i = dg({
      type: n,
      sealed: r,
      iv: s
    });
    return e === gd ? cg(i) : i;
  }
  function L1(t, e) {
    const { sealed: n } = Xi({
      encoded: t,
      encoding: e
    });
    return yt(n, fo);
  }
  function dg(t) {
    if (Ar(t.type) === Da) return yt(Mi([
      t.type,
      t.sealed
    ]), br);
    if (Ar(t.type) === gi) {
      if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      return yt(Mi([
        t.type,
        t.senderPublicKey,
        t.iv,
        t.sealed
      ]), br);
    }
    return yt(Mi([
      t.type,
      t.iv,
      t.sealed
    ]), br);
  }
  function Xi(t) {
    const e = (t.encoding || br) === gd ? lg(t.encoded) : t.encoded, n = $t(e, br), s = n.slice(k1, Pu), r = Pu;
    if (Ar(s) === gi) {
      const c = r + md, l = c + qi, d = n.slice(r, c), u = n.slice(c, l), h = n.slice(l);
      return {
        type: s,
        sealed: h,
        iv: u,
        senderPublicKey: d
      };
    }
    if (Ar(s) === Da) {
      const c = n.slice(r), l = kr(qi);
      return {
        type: s,
        sealed: c,
        iv: l
      };
    }
    const i = r + qi, o = n.slice(r, i), a = n.slice(i);
    return {
      type: s,
      sealed: a,
      iv: o
    };
  }
  function M1(t, e) {
    const n = Xi({
      encoded: t,
      encoding: e == null ? void 0 : e.encoding
    });
    return ug({
      type: Ar(n.type),
      senderPublicKey: typeof n.senderPublicKey < "u" ? yt(n.senderPublicKey, Nt) : void 0,
      receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    });
  }
  function ug(t) {
    const e = (t == null ? void 0 : t.type) || og;
    if (e === gi) {
      if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
      if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
    }
    return {
      type: e,
      senderPublicKey: t == null ? void 0 : t.senderPublicKey,
      receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    };
  }
  function Ru(t) {
    return t.type === gi && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
  }
  function $u(t) {
    return t.type === Da;
  }
  function F1(t) {
    const e = Ae.from(t.x, "base64"), n = Ae.from(t.y, "base64");
    return Mi([
      new Uint8Array([
        4
      ]),
      e,
      n
    ]);
  }
  function j1(t, e) {
    const [n, s, r] = t.split("."), i = Ae.from(lg(r), "base64");
    if (i.length !== 64) throw new Error("Invalid signature length");
    const o = i.slice(0, 32), a = i.slice(32, 64), c = `${n}.${s}`, l = Ra(c), d = F1(e);
    if (!x1.verify(Mi([
      o,
      a
    ]), l, d)) throw new Error("Invalid signature");
    return Xc(t).payload;
  }
  const q1 = "irn";
  function ha(t) {
    return (t == null ? void 0 : t.relay) || {
      protocol: q1
    };
  }
  function Gr(t) {
    const e = kw[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e;
  }
  var W1 = Object.defineProperty, H1 = Object.defineProperties, V1 = Object.getOwnPropertyDescriptors, Uu = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, z1 = Object.prototype.propertyIsEnumerable, Du = (t, e, n) => e in t ? W1(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, fc = (t, e) => {
    for (var n in e || (e = {})) K1.call(e, n) && Du(t, n, e[n]);
    if (Uu) for (var n of Uu(e)) z1.call(e, n) && Du(t, n, e[n]);
    return t;
  }, G1 = (t, e) => H1(t, V1(e));
  function Y1(t, e = "-") {
    const n = {}, s = "relay" + e;
    return Object.keys(t).forEach((r) => {
      if (r.startsWith(s)) {
        const i = r.replace(s, ""), o = t[r];
        n[i] = o;
      }
    }), n;
  }
  function Bu(t) {
    if (!t.includes("wc:")) {
      const l = wp(t);
      l != null && l.includes("wc:") && (t = l);
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":"), n = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, s = t.substring(0, e), r = t.substring(e + 1, n).split("@"), i = typeof n < "u" ? t.substring(n) : "", o = new URLSearchParams(i), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
      protocol: s,
      topic: Z1(r[0]),
      version: parseInt(r[1], 10),
      symKey: a.symKey,
      relay: Y1(a),
      methods: c,
      expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    };
  }
  function Z1(t) {
    return t.startsWith("//") ? t.substring(2) : t;
  }
  function J1(t, e = "-") {
    const n = "relay", s = {};
    return Object.keys(t).forEach((r) => {
      const i = r, o = n + e + i;
      t[i] && (s[o] = t[i]);
    }), s;
  }
  function Lu(t) {
    const e = new URLSearchParams(), n = fc(fc(G1(fc({}, J1(t.relay)), {
      symKey: t.symKey
    }), t.expiryTimestamp && {
      expiryTimestamp: t.expiryTimestamp.toString()
    }), t.methods && {
      methods: t.methods.join(",")
    });
    return Object.entries(n).sort(([s], [r]) => s.localeCompare(r)).forEach(([s, r]) => {
      r !== void 0 && e.append(s, String(r));
    }), `${t.protocol}:${t.topic}@${t.version}?${e}`;
  }
  const X1 = {
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
  }, Q1 = {
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
  function Oe(t, e) {
    const { message: n, code: s } = Q1[t];
    return {
      message: e ? `${n} ${e}` : n,
      code: s
    };
  }
  function $i(t, e) {
    const { message: n, code: s } = X1[t];
    return {
      message: e ? `${n} ${e}` : n,
      code: s
    };
  }
  function Ui(t) {
    return typeof t > "u";
  }
  function hg(t, e) {
    return typeof t == "string" && !!t.trim().length;
  }
  function eE(t) {
    function e(n) {
      try {
        return typeof new URL(n) < "u";
      } catch {
        return false;
      }
    }
    try {
      if (hg(t, false)) {
        if (e(t)) return true;
        const n = wp(t);
        return e(n);
      }
    } catch {
    }
    return false;
  }
  function tE(t) {
    var e;
    return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
  }
  function nE(t) {
    return t == null ? void 0 : t.topic;
  }
  function pc(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function Mu() {
    const t = Ta();
    return new Promise((e) => {
      switch (t) {
        case Cn.browser:
          e(sE());
          break;
        case Cn.reactNative:
          e(rE());
          break;
        case Cn.node:
          e(iE());
          break;
        default:
          e(true);
      }
    });
  }
  function sE() {
    return lo() && (navigator == null ? void 0 : navigator.onLine);
  }
  async function rE() {
    var _a2;
    return xr() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo ? (_a2 = await (globalThis == null ? void 0 : globalThis.NetInfo.fetch())) == null ? void 0 : _a2.isConnected : true;
  }
  function iE() {
    return true;
  }
  function oE(t) {
    switch (Ta()) {
      case Cn.browser:
        aE(t);
        break;
      case Cn.reactNative:
        cE(t);
        break;
    }
  }
  function aE(t) {
    !xr() && lo() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
  }
  function cE(t) {
    xr() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo && (globalThis == null ? void 0 : globalThis.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
  }
  function lE() {
    var t;
    return lo() && zt.getDocument() ? ((t = zt.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : true;
  }
  function dE({ logger: t, name: e }) {
    const n = typeof t == "string" ? Sa({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return n.level = typeof t == "string" ? t : t.level, n;
  }
  var uE = {};
  const fg = "wc", pg = 2, yl = "core", jn = `${fg}@2:${yl}:`, hE = {
    logger: "error"
  }, fE = {
    database: ":memory:"
  }, pE = "crypto", Fu = "client_ed25519_seed", gE = K.ONE_DAY, mE = "keychain", wE = "0.3", yE = "messages", bE = "0.3", EE = K.SIX_HOURS, vE = "publisher", gg = "irn", CE = "error", mg = "wss://relay.walletconnect.org", AE = "relayer", He = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
  }, IE = "_subscription", Zt = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
  }, NE = 0.1, bl = "2.23.2", Ue = {
    link_mode: "link_mode",
    relay: "relay"
  }, Zo = {
    inbound: "inbound",
    outbound: "outbound"
  }, SE = "0.3", _E = "WALLETCONNECT_CLIENT_ID", ju = "WALLETCONNECT_LINK_MODE_APPS", qt = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
  }, TE = "subscription", OE = "0.3", xE = "pairing", kE = "0.3", vi = {
    wc_pairingDelete: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1e3
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1001
      }
    },
    wc_pairingPing: {
      req: {
        ttl: K.THIRTY_SECONDS,
        prompt: false,
        tag: 1002
      },
      res: {
        ttl: K.THIRTY_SECONDS,
        prompt: false,
        tag: 1003
      }
    },
    unregistered_method: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 0
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 0
      }
    }
  }, ir = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
  }, dn = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  }, PE = "history", RE = "0.3", $E = "expirer", nn = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
  }, UE = "0.3", DE = "verify-api", BE = "https://verify.walletconnect.com", wg = "https://verify.walletconnect.org", Wi = wg, LE = `${Wi}/v3`, ME = [
    BE,
    wg
  ], FE = "echo", jE = "https://echo.walletconnect.com", Pn = {
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
  }, Yn = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
  }, un = {
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
  }, Xs = {
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
  }, Qs = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
  }, Ci = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
  }, qE = 0.1, WE = "event-client", HE = 86400, VE = "https://pulse.walletconnect.org/batch";
  function KE(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), s = 0; s < n.length; s++) n[s] = 255;
    for (var r = 0; r < t.length; r++) {
      var i = t.charAt(r), o = i.charCodeAt(0);
      if (n[o] !== 255) throw new TypeError(i + " is ambiguous");
      n[o] = r;
    }
    var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function u(g) {
      if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (g.length === 0) return "";
      for (var p = 0, m = 0, T = 0, O = g.length; T !== O && g[T] === 0; ) T++, p++;
      for (var A = (O - T) * d + 1 >>> 0, N = new Uint8Array(A); T !== O; ) {
        for (var P = g[T], U = 0, D = A - 1; (P !== 0 || U < m) && D !== -1; D--, U++) P += 256 * N[D] >>> 0, N[D] = P % a >>> 0, P = P / a >>> 0;
        if (P !== 0) throw new Error("Non-zero carry");
        m = U, T++;
      }
      for (var L = A - m; L !== A && N[L] === 0; ) L++;
      for (var x = c.repeat(p); L < A; ++L) x += t.charAt(N[L]);
      return x;
    }
    function h(g) {
      if (typeof g != "string") throw new TypeError("Expected String");
      if (g.length === 0) return new Uint8Array();
      var p = 0;
      if (g[p] !== " ") {
        for (var m = 0, T = 0; g[p] === c; ) m++, p++;
        for (var O = (g.length - p) * l + 1 >>> 0, A = new Uint8Array(O); g[p]; ) {
          var N = n[g.charCodeAt(p)];
          if (N === 255) return;
          for (var P = 0, U = O - 1; (N !== 0 || P < T) && U !== -1; U--, P++) N += a * A[U] >>> 0, A[U] = N % 256 >>> 0, N = N / 256 >>> 0;
          if (N !== 0) throw new Error("Non-zero carry");
          T = P, p++;
        }
        if (g[p] !== " ") {
          for (var D = O - T; D !== O && A[D] === 0; ) D++;
          for (var L = new Uint8Array(m + (O - D)), x = m; D !== O; ) L[x++] = A[D++];
          return L;
        }
      }
    }
    function f(g) {
      var p = h(g);
      if (p) return p;
      throw new Error(`Non-${e} character`);
    }
    return {
      encode: u,
      decodeUnsafe: h,
      decode: f
    };
  }
  var zE = KE, GE = zE;
  const yg = (t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, YE = (t) => new TextEncoder().encode(t), ZE = (t) => new TextDecoder().decode(t);
  class JE {
    constructor(e, n, s) {
      this.name = e, this.prefix = n, this.baseEncode = s;
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  }
  class XE {
    constructor(e, n, s) {
      if (this.name = e, this.prefix = n, n.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
      this.prefixCodePoint = n.codePointAt(0), this.baseDecode = s;
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return bg(this, e);
    }
  }
  class QE {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return bg(this, e);
    }
    decode(e) {
      const n = e[0], s = this.decoders[n];
      if (s) return s.decode(e);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
  const bg = (t, e) => new QE({
    ...t.decoders || {
      [t.prefix]: t
    },
    ...e.decoders || {
      [e.prefix]: e
    }
  });
  let ev = class {
    constructor(e, n, s, r) {
      this.name = e, this.prefix = n, this.baseEncode = s, this.baseDecode = r, this.encoder = new JE(e, n, s), this.decoder = new XE(e, n, r);
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  };
  const Ba = ({ name: t, prefix: e, encode: n, decode: s }) => new ev(t, e, n, s), po = ({ prefix: t, name: e, alphabet: n }) => {
    const { encode: s, decode: r } = GE(n, e);
    return Ba({
      prefix: t,
      name: e,
      encode: s,
      decode: (i) => yg(r(i))
    });
  }, tv = (t, e, n, s) => {
    const r = {};
    for (let d = 0; d < e.length; ++d) r[e[d]] = d;
    let i = t.length;
    for (; t[i - 1] === "="; ) --i;
    const o = new Uint8Array(i * n / 8 | 0);
    let a = 0, c = 0, l = 0;
    for (let d = 0; d < i; ++d) {
      const u = r[t[d]];
      if (u === void 0) throw new SyntaxError(`Non-${s} character`);
      c = c << n | u, a += n, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
    }
    if (a >= n || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
    return o;
  }, nv = (t, e, n) => {
    const s = e[e.length - 1] === "=", r = (1 << n) - 1;
    let i = "", o = 0, a = 0;
    for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > n; ) o -= n, i += e[r & a >> o];
    if (o && (i += e[r & a << n - o]), s) for (; i.length * n & 7; ) i += "=";
    return i;
  }, ct = ({ name: t, prefix: e, bitsPerChar: n, alphabet: s }) => Ba({
    prefix: e,
    name: t,
    encode(r) {
      return nv(r, s, n);
    },
    decode(r) {
      return tv(r, s, n, t);
    }
  }), sv = Ba({
    prefix: "\0",
    name: "identity",
    encode: (t) => ZE(t),
    decode: (t) => YE(t)
  });
  var rv = Object.freeze({
    __proto__: null,
    identity: sv
  });
  const iv = ct({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });
  var ov = Object.freeze({
    __proto__: null,
    base2: iv
  });
  const av = ct({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });
  var cv = Object.freeze({
    __proto__: null,
    base8: av
  });
  const lv = po({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });
  var dv = Object.freeze({
    __proto__: null,
    base10: lv
  });
  const uv = ct({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  }), hv = ct({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });
  var fv = Object.freeze({
    __proto__: null,
    base16: uv,
    base16upper: hv
  });
  const pv = ct({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  }), gv = ct({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  }), mv = ct({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  }), wv = ct({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  }), yv = ct({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  }), bv = ct({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  }), Ev = ct({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  }), vv = ct({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  }), Cv = ct({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });
  var Av = Object.freeze({
    __proto__: null,
    base32: pv,
    base32upper: gv,
    base32pad: mv,
    base32padupper: wv,
    base32hex: yv,
    base32hexupper: bv,
    base32hexpad: Ev,
    base32hexpadupper: vv,
    base32z: Cv
  });
  const Iv = po({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  }), Nv = po({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
  var Sv = Object.freeze({
    __proto__: null,
    base36: Iv,
    base36upper: Nv
  });
  const _v = po({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  }), Tv = po({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });
  var Ov = Object.freeze({
    __proto__: null,
    base58btc: _v,
    base58flickr: Tv
  });
  const xv = ct({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  }), kv = ct({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  }), Pv = ct({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  }), Rv = ct({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });
  var $v = Object.freeze({
    __proto__: null,
    base64: xv,
    base64pad: kv,
    base64url: Pv,
    base64urlpad: Rv
  });
  const Eg = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Uv = Eg.reduce((t, e, n) => (t[n] = e, t), []), Dv = Eg.reduce((t, e, n) => (t[e.codePointAt(0)] = n, t), []);
  function Bv(t) {
    return t.reduce((e, n) => (e += Uv[n], e), "");
  }
  function Lv(t) {
    const e = [];
    for (const n of t) {
      const s = Dv[n.codePointAt(0)];
      if (s === void 0) throw new Error(`Non-base256emoji character: ${n}`);
      e.push(s);
    }
    return new Uint8Array(e);
  }
  const Mv = Ba({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Bv,
    decode: Lv
  });
  var Fv = Object.freeze({
    __proto__: null,
    base256emoji: Mv
  }), jv = vg, qu = 128, qv = -128, Wv = Math.pow(2, 31);
  function vg(t, e, n) {
    e = e || [], n = n || 0;
    for (var s = n; t >= Wv; ) e[n++] = t & 255 | qu, t /= 128;
    for (; t & qv; ) e[n++] = t & 255 | qu, t >>>= 7;
    return e[n] = t | 0, vg.bytes = n - s + 1, e;
  }
  var Hv = El, Vv = 128, Wu = 127;
  function El(t, s) {
    var n = 0, s = s || 0, r = 0, i = s, o, a = t.length;
    do {
      if (i >= a) throw El.bytes = 0, new RangeError("Could not decode varint");
      o = t[i++], n += r < 28 ? (o & Wu) << r : (o & Wu) * Math.pow(2, r), r += 7;
    } while (o >= Vv);
    return El.bytes = i - s, n;
  }
  var Kv = Math.pow(2, 7), zv = Math.pow(2, 14), Gv = Math.pow(2, 21), Yv = Math.pow(2, 28), Zv = Math.pow(2, 35), Jv = Math.pow(2, 42), Xv = Math.pow(2, 49), Qv = Math.pow(2, 56), eC = Math.pow(2, 63), tC = function(t) {
    return t < Kv ? 1 : t < zv ? 2 : t < Gv ? 3 : t < Yv ? 4 : t < Zv ? 5 : t < Jv ? 6 : t < Xv ? 7 : t < Qv ? 8 : t < eC ? 9 : 10;
  }, nC = {
    encode: jv,
    decode: Hv,
    encodingLength: tC
  }, Cg = nC;
  const Hu = (t, e, n = 0) => (Cg.encode(t, e, n), e), Vu = (t) => Cg.encodingLength(t), vl = (t, e) => {
    const n = e.byteLength, s = Vu(t), r = s + Vu(n), i = new Uint8Array(r + n);
    return Hu(t, i, 0), Hu(n, i, s), i.set(e, r), new sC(t, n, e, i);
  };
  let sC = class {
    constructor(e, n, s, r) {
      this.code = e, this.size = n, this.digest = s, this.bytes = r;
    }
  };
  const Ag = ({ name: t, code: e, encode: n }) => new rC(t, e, n);
  let rC = class {
    constructor(e, n, s) {
      this.name = e, this.code = n, this.encode = s;
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        const n = this.encode(e);
        return n instanceof Uint8Array ? vl(this.code, n) : n.then((s) => vl(this.code, s));
      } else throw Error("Unknown type, must be binary type");
    }
  };
  const Ig = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), iC = Ag({
    name: "sha2-256",
    code: 18,
    encode: Ig("SHA-256")
  }), oC = Ag({
    name: "sha2-512",
    code: 19,
    encode: Ig("SHA-512")
  });
  var aC = Object.freeze({
    __proto__: null,
    sha256: iC,
    sha512: oC
  });
  const Ng = 0, cC = "identity", Sg = yg, lC = (t) => vl(Ng, Sg(t)), dC = {
    code: Ng,
    name: cC,
    encode: Sg,
    digest: lC
  };
  var uC = Object.freeze({
    __proto__: null,
    identity: dC
  });
  new TextEncoder(), new TextDecoder();
  const Ku = {
    ...rv,
    ...ov,
    ...cv,
    ...dv,
    ...fv,
    ...Av,
    ...Sv,
    ...Ov,
    ...$v,
    ...Fv
  };
  ({
    ...aC,
    ...uC
  });
  function _g(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
  }
  function hC(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? _g(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
  }
  function Tg(t, e, n, s) {
    return {
      name: t,
      prefix: e,
      encoder: {
        name: t,
        prefix: e,
        encode: n
      },
      decoder: {
        decode: s
      }
    };
  }
  const zu = Tg("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), gc = Tg("ascii", "a", (t) => {
    let e = "a";
    for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
    return e;
  }, (t) => {
    t = t.substring(1);
    const e = hC(t.length);
    for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
    return e;
  }), fC = {
    utf8: zu,
    "utf-8": zu,
    hex: Ku.base16,
    latin1: gc,
    ascii: gc,
    binary: gc,
    ...Ku
  };
  function pC(t, e = "utf8") {
    const n = fC[e];
    if (!n) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? _g(globalThis.Buffer.from(t, "utf-8")) : n.decoder.decode(`${n.prefix}${t}`);
  }
  var gC = Object.defineProperty, mC = (t, e, n) => e in t ? gC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, On = (t, e, n) => mC(t, typeof e != "symbol" ? e + "" : e, n);
  let wC = class {
    constructor(e, n) {
      this.core = e, this.logger = n, On(this, "keychain", /* @__PURE__ */ new Map()), On(this, "name", mE), On(this, "version", wE), On(this, "initialized", false), On(this, "storagePrefix", jn), On(this, "init", async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), this.initialized = true;
        }
      }), On(this, "has", (s) => (this.isInitialized(), this.keychain.has(s))), On(this, "set", async (s, r) => {
        this.isInitialized(), this.keychain.set(s, r), await this.persist();
      }), On(this, "get", (s) => {
        this.isInitialized();
        const r = this.keychain.get(s);
        if (typeof r > "u") {
          const { message: i } = Oe("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(i);
        }
        return r;
      }), On(this, "del", async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }), this.core = e, this.logger = Gt(n, this.name);
    }
    get context() {
      return Yt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
      await this.core.storage.setItem(this.storageKey, ol(e));
    }
    async getKeyChain() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? al(e) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var yC = Object.defineProperty, bC = (t, e, n) => e in t ? yC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Ye = (t, e, n) => bC(t, typeof e != "symbol" ? e + "" : e, n);
  class EC {
    constructor(e, n, s) {
      this.core = e, this.logger = n, Ye(this, "name", pE), Ye(this, "keychain"), Ye(this, "randomSessionIdentifier", wl()), Ye(this, "initialized", false), Ye(this, "clientId"), Ye(this, "init", async () => {
        this.initialized || (await this.keychain.init(), this.initialized = true);
      }), Ye(this, "hasKeys", (r) => (this.isInitialized(), this.keychain.has(r))), Ye(this, "getClientId", async () => {
        if (this.isInitialized(), this.clientId) return this.clientId;
        const r = await this.getClientSeed(), i = Kd(r), o = Dw(i.publicKey);
        return this.clientId = o, o;
      }), Ye(this, "generateKeyPair", () => {
        this.isInitialized();
        const r = P1();
        return this.setPrivateKey(r.publicKey, r.privateKey);
      }), Ye(this, "signJWT", async (r) => {
        this.isInitialized();
        const i = await this.getClientSeed(), o = Kd(i), a = this.randomSessionIdentifier;
        return await Bw(a, r, gE, o);
      }), Ye(this, "generateSharedKey", (r, i, o) => {
        this.isInitialized();
        const a = this.getPrivateKey(r), c = R1(a, i);
        return this.setSymKey(c, o);
      }), Ye(this, "setSymKey", async (r, i) => {
        this.isInitialized();
        const o = i || $1(r);
        return await this.keychain.set(o, r), o;
      }), Ye(this, "deleteKeyPair", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), Ye(this, "deleteSymKey", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), Ye(this, "encode", async (r, i, o) => {
        this.isInitialized();
        const a = ug(o), c = Lw(i);
        if ($u(a)) return B1(c, o == null ? void 0 : o.encoding);
        if (Ru(a)) {
          const h = a.senderPublicKey, f = a.receiverPublicKey;
          r = await this.generateSharedKey(h, f);
        }
        const l = this.getSymKey(r), { type: d, senderPublicKey: u } = a;
        return U1({
          type: d,
          symKey: l,
          message: c,
          senderPublicKey: u,
          encoding: o == null ? void 0 : o.encoding
        });
      }), Ye(this, "decode", async (r, i, o) => {
        this.isInitialized();
        const a = M1(i, o);
        if ($u(a)) {
          const c = L1(i, o == null ? void 0 : o.encoding);
          return zd(c);
        }
        if (Ru(a)) {
          const c = a.receiverPublicKey, l = a.senderPublicKey;
          r = await this.generateSharedKey(c, l);
        }
        try {
          const c = this.getSymKey(r), l = D1({
            symKey: c,
            encoded: i,
            encoding: o == null ? void 0 : o.encoding
          });
          return zd(l);
        } catch (c) {
          this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
        }
      }), Ye(this, "getPayloadType", (r, i = br) => {
        const o = Xi({
          encoded: r,
          encoding: i
        });
        return Ar(o.type);
      }), Ye(this, "getPayloadSenderPublicKey", (r, i = br) => {
        const o = Xi({
          encoded: r,
          encoding: i
        });
        return o.senderPublicKey ? yt(o.senderPublicKey, Nt) : void 0;
      }), this.core = e, this.logger = Gt(n, this.name), this.keychain = s || new wC(this.core, this.logger);
    }
    get context() {
      return Yt(this.logger);
    }
    async setPrivateKey(e, n) {
      return await this.keychain.set(e, n), e;
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    async getClientSeed() {
      let e = "";
      try {
        e = this.keychain.get(Fu);
      } catch {
        e = wl(), await this.keychain.set(Fu, e);
      }
      return pC(e, "base16");
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var vC = Object.defineProperty, CC = Object.defineProperties, AC = Object.getOwnPropertyDescriptors, Gu = Object.getOwnPropertySymbols, IC = Object.prototype.hasOwnProperty, NC = Object.prototype.propertyIsEnumerable, Cl = (t, e, n) => e in t ? vC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, SC = (t, e) => {
    for (var n in e || (e = {})) IC.call(e, n) && Cl(t, n, e[n]);
    if (Gu) for (var n of Gu(e)) NC.call(e, n) && Cl(t, n, e[n]);
    return t;
  }, _C = (t, e) => CC(t, AC(e)), Mt = (t, e, n) => Cl(t, typeof e != "symbol" ? e + "" : e, n);
  class TC extends a0 {
    constructor(e, n) {
      super(e, n), this.logger = e, this.core = n, Mt(this, "messages", /* @__PURE__ */ new Map()), Mt(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), Mt(this, "name", yE), Mt(this, "version", bE), Mt(this, "initialized", false), Mt(this, "storagePrefix", jn), Mt(this, "init", async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s);
            const r = await this.getRelayerMessagesWithoutClientAck();
            typeof r < "u" && (this.messagesWithoutClientAck = r), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
              type: "method",
              method: "restore",
              size: this.messages.size
            });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
          } finally {
            this.initialized = true;
          }
        }
      }), Mt(this, "set", async (s, r, i) => {
        this.isInitialized();
        const o = Yo(r);
        let a = this.messages.get(s);
        if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
        if (a[o] = r, this.messages.set(s, a), i === Zo.inbound) {
          const c = this.messagesWithoutClientAck.get(s) || {};
          this.messagesWithoutClientAck.set(s, _C(SC({}, c), {
            [o]: r
          }));
        }
        return await this.persist(), o;
      }), Mt(this, "get", (s) => {
        this.isInitialized();
        let r = this.messages.get(s);
        return typeof r > "u" && (r = {}), r;
      }), Mt(this, "getWithoutAck", (s) => {
        this.isInitialized();
        const r = {};
        for (const i of s) {
          const o = this.messagesWithoutClientAck.get(i) || {};
          r[i] = Object.values(o);
        }
        return r;
      }), Mt(this, "has", (s, r) => {
        this.isInitialized();
        const i = this.get(s), o = Yo(r);
        return typeof i[o] < "u";
      }), Mt(this, "ack", async (s, r) => {
        this.isInitialized();
        const i = this.messagesWithoutClientAck.get(s);
        if (typeof i > "u") return;
        const o = Yo(r);
        delete i[o], Object.keys(i).length === 0 ? this.messagesWithoutClientAck.delete(s) : this.messagesWithoutClientAck.set(s, i), await this.persist();
      }), Mt(this, "del", async (s) => {
        this.isInitialized(), this.messages.delete(s), this.messagesWithoutClientAck.delete(s), await this.persist();
      }), this.logger = Gt(e, this.name), this.core = n;
    }
    get context() {
      return Yt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get storageKeyWithoutClientAck() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
    }
    async setRelayerMessages(e) {
      await this.core.storage.setItem(this.storageKey, ol(e));
    }
    async setRelayerMessagesWithoutClientAck(e) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, ol(e));
    }
    async getRelayerMessages() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? al(e) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e < "u" ? al(e) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var OC = Object.defineProperty, xC = Object.defineProperties, kC = Object.getOwnPropertyDescriptors, Yu = Object.getOwnPropertySymbols, PC = Object.prototype.hasOwnProperty, RC = Object.prototype.propertyIsEnumerable, Al = (t, e, n) => e in t ? OC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Lr = (t, e) => {
    for (var n in e || (e = {})) PC.call(e, n) && Al(t, n, e[n]);
    if (Yu) for (var n of Yu(e)) RC.call(e, n) && Al(t, n, e[n]);
    return t;
  }, Zu = (t, e) => xC(t, kC(e)), Jt = (t, e, n) => Al(t, typeof e != "symbol" ? e + "" : e, n);
  let $C = class extends c0 {
    constructor(e, n) {
      super(e, n), this.relayer = e, this.logger = n, Jt(this, "events", new Sr.EventEmitter()), Jt(this, "name", vE), Jt(this, "queue", /* @__PURE__ */ new Map()), Jt(this, "publishTimeout", K.toMiliseconds(K.ONE_MINUTE)), Jt(this, "initialPublishTimeout", K.toMiliseconds(K.ONE_SECOND * 15)), Jt(this, "needsTransportRestart", false), Jt(this, "publish", async (s, r, i) => {
        var o, a, c, l, d;
        this.logger.debug("Publishing Payload"), this.logger.trace({
          type: "method",
          method: "publish",
          params: {
            topic: s,
            message: r,
            opts: i
          }
        });
        const u = (i == null ? void 0 : i.ttl) || EE, h = (i == null ? void 0 : i.prompt) || false, f = (i == null ? void 0 : i.tag) || 0, g = (i == null ? void 0 : i.id) || cr().toString(), p = Gr(ha().protocol), m = {
          id: g,
          method: (i == null ? void 0 : i.publishMethod) || p.publish,
          params: Lr({
            topic: s,
            message: r,
            ttl: u,
            prompt: h,
            tag: f,
            attestation: i == null ? void 0 : i.attestation
          }, i == null ? void 0 : i.tvf)
        }, T = `Failed to publish payload, please try again. id:${g} tag:${f}`;
        try {
          Ui((o = m.params) == null ? void 0 : o.prompt) && ((a = m.params) == null || delete a.prompt), Ui((c = m.params) == null ? void 0 : c.tag) && ((l = m.params) == null || delete l.tag);
          const O = new Promise(async (A) => {
            const N = ({ id: U }) => {
              var D;
              ((D = m.id) == null ? void 0 : D.toString()) === U.toString() && (this.removeRequestFromQueue(U), this.relayer.events.removeListener(He.publish, N), A());
            };
            this.relayer.events.on(He.publish, N);
            const P = Dn(new Promise((U, D) => {
              this.rpcPublish(m, i).then(U).catch((L) => {
                this.logger.warn(L, L == null ? void 0 : L.message), D(L);
              });
            }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g} tag:${f}`);
            try {
              await P, this.events.removeListener(He.publish, N);
            } catch (U) {
              this.queue.set(g, {
                request: m,
                opts: i,
                attempt: 1
              }), this.logger.warn(U, U == null ? void 0 : U.message);
            }
          });
          this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              id: g,
              topic: s,
              message: r,
              opts: i
            }
          }), await Dn(O, this.publishTimeout, T);
        } catch (O) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(O), (d = i == null ? void 0 : i.internal) != null && d.throwOnFailedPublish) throw O;
        } finally {
          this.queue.delete(g);
        }
      }), Jt(this, "publishCustom", async (s) => {
        var r, i, o, a, c;
        this.logger.debug("Publishing custom payload"), this.logger.trace({
          type: "method",
          method: "publishCustom",
          params: s
        });
        const { payload: l, opts: d = {} } = s, { attestation: u, tvf: h, publishMethod: f, prompt: g, tag: p, ttl: m = K.FIVE_MINUTES } = d, T = d.id || cr().toString(), O = Gr(ha().protocol), A = f || O.publish, N = {
          id: T,
          method: A,
          params: Lr(Zu(Lr({}, l), {
            ttl: m,
            prompt: g,
            tag: p,
            attestation: u
          }), h)
        }, P = `Failed to publish custom payload, please try again. id:${T} tag:${p}`;
        try {
          Ui((r = N.params) == null ? void 0 : r.prompt) && ((i = N.params) == null || delete i.prompt), Ui((o = N.params) == null ? void 0 : o.tag) && ((a = N.params) == null || delete a.tag);
          const U = new Promise(async (D) => {
            const L = ({ id: B }) => {
              var M;
              ((M = N.id) == null ? void 0 : M.toString()) === B.toString() && (this.removeRequestFromQueue(B), this.relayer.events.removeListener(He.publish, L), D());
            };
            this.relayer.events.on(He.publish, L);
            const x = Dn(new Promise((B, M) => {
              this.rpcPublish(N, d).then(B).catch((_) => {
                this.logger.warn(_, _ == null ? void 0 : _.message), M(_);
              });
            }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${A} id:${T} tag:${p}`);
            try {
              await x, this.events.removeListener(He.publish, L);
            } catch (B) {
              this.queue.set(T, {
                request: N,
                opts: d,
                attempt: 1
              }), this.logger.warn(B, B == null ? void 0 : B.message);
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
          }), await Dn(U, this.publishTimeout, P);
        } catch (U) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(U), (c = d == null ? void 0 : d.internal) != null && c.throwOnFailedPublish) throw U;
        } finally {
          this.queue.delete(T);
        }
      }), Jt(this, "on", (s, r) => {
        this.events.on(s, r);
      }), Jt(this, "once", (s, r) => {
        this.events.once(s, r);
      }), Jt(this, "off", (s, r) => {
        this.events.off(s, r);
      }), Jt(this, "removeListener", (s, r) => {
        this.events.removeListener(s, r);
      }), this.relayer = e, this.logger = Gt(n, this.name), this.registerEventListeners();
    }
    get context() {
      return Yt(this.logger);
    }
    async rpcPublish(e, n) {
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "message",
        direction: "outgoing",
        request: e
      });
      const s = await this.relayer.request(e);
      return this.relayer.events.emit(He.publish, Lr(Lr({}, e), n)), this.logger.debug("Successfully Published Payload"), s;
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach(async (e, n) => {
        var s;
        const r = e.attempt + 1;
        this.queue.set(n, Zu(Lr({}, e), {
          attempt: r
        })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(s = e.request.params) == null ? void 0 : s.tag}, attempt: ${r}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(pi.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(He.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(He.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
    }
  };
  var UC = Object.defineProperty, DC = (t, e, n) => e in t ? UC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Mr = (t, e, n) => DC(t, typeof e != "symbol" ? e + "" : e, n);
  class BC {
    constructor() {
      Mr(this, "map", /* @__PURE__ */ new Map()), Mr(this, "set", (e, n) => {
        const s = this.get(e);
        this.exists(e, n) || this.map.set(e, [
          ...s,
          n
        ]);
      }), Mr(this, "get", (e) => this.map.get(e) || []), Mr(this, "exists", (e, n) => this.get(e).includes(n)), Mr(this, "delete", (e, n) => {
        if (typeof n > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const s = this.get(e);
        if (!this.exists(e, n)) return;
        const r = s.filter((i) => i !== n);
        if (!r.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, r);
      }), Mr(this, "clear", () => {
        this.map.clear();
      });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  }
  var LC = Object.defineProperty, MC = Object.defineProperties, FC = Object.getOwnPropertyDescriptors, Ju = Object.getOwnPropertySymbols, jC = Object.prototype.hasOwnProperty, qC = Object.prototype.propertyIsEnumerable, Il = (t, e, n) => e in t ? LC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Ai = (t, e) => {
    for (var n in e || (e = {})) jC.call(e, n) && Il(t, n, e[n]);
    if (Ju) for (var n of Ju(e)) qC.call(e, n) && Il(t, n, e[n]);
    return t;
  }, mc = (t, e) => MC(t, FC(e)), ke = (t, e, n) => Il(t, typeof e != "symbol" ? e + "" : e, n);
  class WC extends u0 {
    constructor(e, n) {
      super(e, n), this.relayer = e, this.logger = n, ke(this, "subscriptions", /* @__PURE__ */ new Map()), ke(this, "topicMap", new BC()), ke(this, "events", new Sr.EventEmitter()), ke(this, "name", TE), ke(this, "version", OE), ke(this, "pending", /* @__PURE__ */ new Map()), ke(this, "cached", []), ke(this, "initialized", false), ke(this, "storagePrefix", jn), ke(this, "subscribeTimeout", K.toMiliseconds(K.ONE_MINUTE)), ke(this, "initialSubscribeTimeout", K.toMiliseconds(K.ONE_SECOND * 15)), ke(this, "clientId"), ke(this, "batchSubscribeTopicsLimit", 500), ke(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
      }), ke(this, "subscribe", async (s, r) => {
        var i;
        this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
          type: "method",
          method: "subscribe",
          params: {
            topic: s,
            opts: r
          }
        });
        try {
          const o = ha(r), a = {
            topic: s,
            relay: o,
            transportType: r == null ? void 0 : r.transportType
          };
          (i = r == null ? void 0 : r.internal) != null && i.skipSubscribe || this.pending.set(s, a);
          const c = await this.rpcSubscribe(s, o, r);
          return typeof c == "string" && (this.onSubscribe(c, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
            type: "method",
            method: "subscribe",
            params: {
              topic: s,
              opts: r
            }
          })), c;
        } catch (o) {
          throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
        }
      }), ke(this, "unsubscribe", async (s, r) => {
        this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(s, r.id, r) : await this.unsubscribeByTopic(s, r);
      }), ke(this, "isSubscribed", (s) => new Promise((r) => {
        r(this.topicMap.topics.includes(s));
      })), ke(this, "isKnownTopic", (s) => new Promise((r) => {
        r(this.topicMap.topics.includes(s) || this.pending.has(s) || this.cached.some((i) => i.topic === s));
      })), ke(this, "on", (s, r) => {
        this.events.on(s, r);
      }), ke(this, "once", (s, r) => {
        this.events.once(s, r);
      }), ke(this, "off", (s, r) => {
        this.events.off(s, r);
      }), ke(this, "removeListener", (s, r) => {
        this.events.removeListener(s, r);
      }), ke(this, "start", async () => {
        await this.onConnect();
      }), ke(this, "stop", async () => {
        await this.onDisconnect();
      }), ke(this, "restart", async () => {
        await this.restore(), await this.onRestart();
      }), ke(this, "checkPending", async () => {
        if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
        const s = [];
        this.pending.forEach((r) => {
          s.push(r);
        }), await this.batchSubscribe(s);
      }), ke(this, "registerEventListeners", () => {
        this.relayer.core.heartbeat.on(pi.pulse, async () => {
          await this.checkPending();
        }), this.events.on(qt.created, async (s) => {
          const r = qt.created;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: s
          }), await this.persist();
        }), this.events.on(qt.deleted, async (s) => {
          const r = qt.deleted;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: s
          }), await this.persist();
        });
      }), this.relayer = e, this.logger = Gt(n, this.name), this.clientId = "";
    }
    get context() {
      return Yt(this.logger);
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
    hasSubscription(e, n) {
      let s = false;
      try {
        s = this.getSubscription(e).topic === n;
      } catch {
      }
      return s;
    }
    reset() {
      this.cached = [], this.initialized = true;
    }
    onDisable() {
      this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, n) {
      const s = this.topicMap.get(e);
      await Promise.all(s.map(async (r) => await this.unsubscribeById(e, r, n)));
    }
    async unsubscribeById(e, n, s) {
      this.logger.debug("Unsubscribing Topic"), this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: {
          topic: e,
          id: n,
          opts: s
        }
      });
      try {
        const r = ha(s);
        await this.restartToComplete({
          topic: e,
          id: n,
          relay: r
        }), await this.rpcUnsubscribe(e, n, r);
        const i = $i("USER_DISCONNECTED", `${this.name}, ${e}`);
        await this.onUnsubscribe(e, n, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: {
            topic: e,
            id: n,
            opts: s
          }
        });
      } catch (r) {
        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r;
      }
    }
    async rpcSubscribe(e, n, s) {
      var r, i;
      const o = await this.getSubscriptionId(e);
      if ((r = s == null ? void 0 : s.internal) != null && r.skipSubscribe) return o;
      (!s || (s == null ? void 0 : s.transportType) === Ue.relay) && await this.restartToComplete({
        topic: e,
        id: e,
        relay: n
      });
      const a = {
        method: Gr(n.protocol).subscribe,
        params: {
          topic: e
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: a
      });
      const c = (i = s == null ? void 0 : s.internal) == null ? void 0 : i.throwOnFailedPublish;
      try {
        if ((s == null ? void 0 : s.transportType) === Ue.link_mode) return setTimeout(() => {
          (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((u) => this.logger.warn(u));
        }, K.toMiliseconds(K.ONE_SECOND)), o;
        const l = new Promise(async (u) => {
          const h = (f) => {
            f.topic === e && (this.events.removeListener(qt.created, h), u(f.id));
          };
          this.events.on(qt.created, h);
          try {
            const f = await Dn(new Promise((g, p) => {
              this.relayer.request(a).catch((m) => {
                this.logger.warn(m, m == null ? void 0 : m.message), p(m);
              }).then(g);
            }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
            this.events.removeListener(qt.created, h), u(f);
          } catch {
          }
        }), d = await Dn(l, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
        if (!d && c) throw new Error(`Subscribing to ${e} failed, please try again`);
        return d ? o : null;
      } catch (l) {
        if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(He.connection_stalled), c) throw l;
      }
      return null;
    }
    async rpcBatchSubscribe(e) {
      if (!e.length) return;
      const n = e[0].relay, s = {
        method: Gr(n.protocol).batchSubscribe,
        params: {
          topics: e.map((r) => r.topic)
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: s
      });
      try {
        await await Dn(new Promise((r) => {
          this.relayer.request(s).catch((i) => this.logger.warn(i)).then(r);
        }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
      } catch {
        this.relayer.events.emit(He.connection_stalled);
      }
    }
    async rpcBatchFetchMessages(e) {
      if (!e.length) return;
      const n = e[0].relay, s = {
        method: Gr(n.protocol).batchFetchMessages,
        params: {
          topics: e.map((i) => i.topic)
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: s
      });
      let r;
      try {
        r = await await Dn(new Promise((i, o) => {
          this.relayer.request(s).catch((a) => {
            this.logger.warn(a), o(a);
          }).then(i);
        }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
      } catch {
        this.relayer.events.emit(He.connection_stalled);
      }
      return r;
    }
    rpcUnsubscribe(e, n, s) {
      const r = {
        method: Gr(s.protocol).unsubscribe,
        params: {
          topic: e,
          id: n
        }
      };
      return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: r
      }), this.relayer.request(r);
    }
    onSubscribe(e, n) {
      this.setSubscription(e, mc(Ai({}, n), {
        id: e
      })), this.pending.delete(n.topic);
    }
    onBatchSubscribe(e) {
      e.length && e.forEach((n) => {
        this.setSubscription(n.id, Ai({}, n)), this.pending.delete(n.topic);
      });
    }
    async onUnsubscribe(e, n, s) {
      this.events.removeAllListeners(n), this.hasSubscription(n, e) && this.deleteSubscription(n, s), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
      await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
      return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, n) {
      this.logger.debug("Setting subscription"), this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: n
      }), this.addSubscription(e, n);
    }
    addSubscription(e, n) {
      this.subscriptions.set(e, Ai({}, n)), this.topicMap.set(n.topic, e), this.events.emit(qt.created, n);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"), this.logger.trace({
        type: "method",
        method: "getSubscription",
        id: e
      });
      const n = this.subscriptions.get(e);
      if (!n) {
        const { message: s } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(s);
      }
      return n;
    }
    deleteSubscription(e, n) {
      this.logger.debug("Deleting subscription"), this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: n
      });
      const s = this.getSubscription(e);
      this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(qt.deleted, mc(Ai({}, s), {
        reason: n
      }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(qt.sync);
    }
    async onRestart() {
      if (this.cached.length) {
        const e = [
          ...this.cached
        ], n = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
        for (let s = 0; s < n; s++) {
          const r = e.splice(0, this.batchSubscribeTopicsLimit);
          await this.batchSubscribe(r);
        }
      }
      this.events.emit(qt.resubscribed);
    }
    async restore() {
      try {
        const e = await this.getRelayerSubscriptions();
        if (typeof e > "u" || !e.length) return;
        if (this.subscriptions.size && !e.every((n) => {
          var s;
          return n.topic === ((s = this.subscriptions.get(n.id)) == null ? void 0 : s.topic);
        })) {
          const { message: n } = Oe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(n), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(n);
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
      e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (n) => mc(Ai({}, n), {
        id: await this.getSubscriptionId(n.topic)
      })))));
    }
    async batchFetchMessages(e) {
      if (!e.length) return;
      this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
      const n = await this.rpcBatchFetchMessages(e);
      n && n.messages && (await P0(K.toMiliseconds(K.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(n.messages));
    }
    async onConnect() {
      await this.restart(), this.reset();
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
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
      return Yo(e + await this.getClientId());
    }
  }
  var HC = Object.defineProperty, Xu = Object.getOwnPropertySymbols, VC = Object.prototype.hasOwnProperty, KC = Object.prototype.propertyIsEnumerable, Nl = (t, e, n) => e in t ? HC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Qu = (t, e) => {
    for (var n in e || (e = {})) VC.call(e, n) && Nl(t, n, e[n]);
    if (Xu) for (var n of Xu(e)) KC.call(e, n) && Nl(t, n, e[n]);
    return t;
  }, Ne = (t, e, n) => Nl(t, typeof e != "symbol" ? e + "" : e, n);
  let zC = class extends l0 {
    constructor(e) {
      var n;
      super(e), Ne(this, "protocol", "wc"), Ne(this, "version", 2), Ne(this, "core"), Ne(this, "logger"), Ne(this, "events", new Sr.EventEmitter()), Ne(this, "provider"), Ne(this, "messages"), Ne(this, "subscriber"), Ne(this, "publisher"), Ne(this, "name", AE), Ne(this, "transportExplicitlyClosed", false), Ne(this, "initialized", false), Ne(this, "connectionAttemptInProgress", false), Ne(this, "relayUrl"), Ne(this, "projectId"), Ne(this, "packageName"), Ne(this, "bundleId"), Ne(this, "hasExperiencedNetworkDisruption", false), Ne(this, "pingTimeout"), Ne(this, "heartBeatTimeout", K.toMiliseconds(K.THIRTY_SECONDS + K.FIVE_SECONDS)), Ne(this, "reconnectTimeout"), Ne(this, "connectPromise"), Ne(this, "reconnectInProgress", false), Ne(this, "requestsInFlight", []), Ne(this, "connectTimeout", K.toMiliseconds(K.ONE_SECOND * 15)), Ne(this, "request", async (s) => {
        var r, i;
        this.logger.debug("Publishing Request Payload");
        const o = s.id || cr().toString();
        await this.toEstablishConnection();
        try {
          this.logger.trace({
            id: o,
            method: s.method,
            topic: (r = s.params) == null ? void 0 : r.topic
          }, "relayer.request - publishing...");
          const a = `${o}:${((i = s.params) == null ? void 0 : i.tag) || ""}`;
          this.requestsInFlight.push(a);
          const c = await this.provider.request(s);
          return this.requestsInFlight = this.requestsInFlight.filter((l) => l !== a), c;
        } catch (a) {
          throw this.logger.debug(`Failed to Publish Request: ${o}`), a;
        }
      }), Ne(this, "resetPingTimeout", () => {
        aa() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var s, r, i, o;
          try {
            this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o = (i = (r = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || o.call(i);
          } catch (a) {
            this.logger.warn(a, a == null ? void 0 : a.message);
          }
        }, this.heartBeatTimeout));
      }), Ne(this, "onPayloadHandler", (s) => {
        this.onProviderPayload(s), this.resetPingTimeout();
      }), Ne(this, "onConnectHandler", () => {
        this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(He.connect);
      }), Ne(this, "onDisconnectHandler", () => {
        this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
      }), Ne(this, "onProviderErrorHandler", (s) => {
        this.logger.fatal(`Fatal socket error: ${s.message}`), this.events.emit(He.error, s), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
      }), Ne(this, "registerProviderListeners", () => {
        this.provider.on(Zt.payload, this.onPayloadHandler), this.provider.on(Zt.connect, this.onConnectHandler), this.provider.on(Zt.disconnect, this.onDisconnectHandler), this.provider.on(Zt.error, this.onProviderErrorHandler);
      }), this.core = e.core, this.logger = dE({
        logger: (n = e.logger) != null ? n : CE,
        name: this.name
      }), this.messages = new TC(this.logger, e.core), this.subscriber = new WC(this, this.logger), this.publisher = new $C(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || mg, v0() ? this.packageName = cu() : C0() && (this.bundleId = cu()), this.provider = {};
    }
    async init() {
      this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
        this.messages.init(),
        this.subscriber.init()
      ]), this.initialized = true, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
    }
    get context() {
      return Yt(this.logger);
    }
    get connected() {
      var e, n, s;
      return ((s = (n = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : n.socket) == null ? void 0 : s.readyState) === 1 || false;
    }
    get connecting() {
      var e, n, s;
      return ((s = (n = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : n.socket) == null ? void 0 : s.readyState) === 0 || this.connectPromise !== void 0 || false;
    }
    async publish(e, n, s) {
      this.isInitialized(), await this.publisher.publish(e, n, s), await this.recordMessageEvent({
        topic: e,
        message: n,
        publishedAt: Date.now(),
        transportType: Ue.relay
      }, Zo.outbound);
    }
    async publishCustom(e) {
      this.isInitialized(), await this.publisher.publishCustom(e);
    }
    async subscribe(e, n) {
      var s, r, i;
      this.isInitialized(), (!(n != null && n.transportType) || (n == null ? void 0 : n.transportType) === "relay") && await this.toEstablishConnection();
      const o = typeof ((s = n == null ? void 0 : n.internal) == null ? void 0 : s.throwOnFailedPublish) > "u" ? true : (r = n == null ? void 0 : n.internal) == null ? void 0 : r.throwOnFailedPublish;
      let a = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", c;
      const l = (d) => {
        d.topic === e && (this.subscriber.off(qt.created, l), c());
      };
      return await Promise.all([
        new Promise((d) => {
          c = d, this.subscriber.on(qt.created, l);
        }),
        new Promise(async (d, u) => {
          a = await this.subscriber.subscribe(e, Qu({
            internal: {
              throwOnFailedPublish: o
            }
          }, n)).catch((h) => {
            o && u(h);
          }) || a, d();
        })
      ]), a;
    }
    async unsubscribe(e, n) {
      this.isInitialized(), await this.subscriber.unsubscribe(e, n);
    }
    on(e, n) {
      this.events.on(e, n);
    }
    once(e, n) {
      this.events.once(e, n);
    }
    off(e, n) {
      this.events.off(e, n);
    }
    removeListener(e, n) {
      this.events.removeListener(e, n);
    }
    async transportDisconnect() {
      this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Dn(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
      this.transportExplicitlyClosed = true, await this.transportDisconnect();
    }
    async transportOpen(e) {
      if (!this.subscriber.hasAnyTopics) {
        this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
        return;
      }
      if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (n, s) => {
        await this.connect(e).then(n).catch(s).finally(() => {
          this.connectPromise = void 0;
        });
      }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
    }
    async restartTransport(e) {
      this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
      if (!await Mu()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e) {
      if ((e == null ? void 0 : e.length) === 0) {
        this.logger.trace("Batch message events is empty. Ignoring...");
        return;
      }
      const n = e.sort((s, r) => s.publishedAt - r.publishedAt);
      this.logger.debug(`Batch of ${n.length} message events sorted`);
      for (const s of n) try {
        await this.onMessageEvent(s);
      } catch (r) {
        this.logger.warn(r, "Error while processing batch message event: " + (r == null ? void 0 : r.message));
      }
      this.logger.trace(`Batch of ${n.length} message events processed`);
    }
    async onLinkMessageEvent(e, n) {
      const { topic: s } = e;
      if (!n.sessionExists) {
        const r = ji(K.FIVE_MINUTES), i = {
          topic: s,
          expiry: r,
          relay: {
            protocol: "irn"
          },
          active: false
        };
        await this.core.pairing.pairings.set(s, i);
      }
      this.events.emit(He.message, e), await this.recordMessageEvent(e, Zo.inbound);
    }
    async connect(e) {
      await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
      let n = 1;
      for (; n < 6; ) {
        try {
          if (this.transportExplicitlyClosed) break;
          this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${n}...`), await this.createProvider(), await new Promise(async (s, r) => {
            const i = () => {
              r(new Error("Connection interrupted while trying to connect"));
            };
            this.provider.once(Zt.disconnect, i), await Dn(new Promise((o, a) => {
              this.provider.connect().then(o).catch(a);
            }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
              r(o);
            }).finally(() => {
              this.provider.off(Zt.disconnect, i), clearTimeout(this.reconnectTimeout);
            }), await new Promise(async (o, a) => {
              const c = () => {
                r(new Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.once(Zt.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
                this.provider.off(Zt.disconnect, c);
              });
            }), this.hasExperiencedNetworkDisruption = false, s();
          });
        } catch (s) {
          await this.subscriber.stop();
          const r = s;
          this.logger.warn({}, r.message), this.hasExperiencedNetworkDisruption = true;
        } finally {
          this.connectionAttemptInProgress = false;
        }
        if (this.connected) {
          this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${n}`);
          break;
        }
        await new Promise((s) => setTimeout(s, K.toMiliseconds(n * 1))), n++;
      }
    }
    startPingTimeout() {
      var e, n, s, r, i;
      if (aa()) try {
        (n = (e = this.provider) == null ? void 0 : e.connection) != null && n.socket && ((i = (r = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : r.socket) == null || i.on("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (o) {
        this.logger.warn(o, o == null ? void 0 : o.message);
      }
    }
    async createProvider() {
      this.provider.connection && this.unregisterProviderListeners();
      const e = await this.core.crypto.signJWT(this.relayUrl);
      this.provider = new td(new Uw(_0({
        sdkVersion: bl,
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
    async recordMessageEvent(e, n) {
      const { topic: s, message: r } = e;
      await this.messages.set(s, r, n);
    }
    async shouldIgnoreMessageEvent(e) {
      const { topic: n, message: s } = e;
      if (!s || s.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${s}`), true;
      if (!await this.subscriber.isKnownTopic(n)) return this.logger.warn(`Ignoring message for unknown topic ${n}`), true;
      const r = this.messages.has(n, s);
      return r && this.logger.warn(`Ignoring duplicate message: ${s}`), r;
    }
    async onProviderPayload(e) {
      if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "incoming",
        payload: e
      }), nd(e)) {
        if (!e.method.endsWith(IE)) return;
        const n = e.params, { topic: s, message: r, publishedAt: i, attestation: o } = n.data, a = {
          topic: s,
          message: r,
          publishedAt: i,
          transportType: Ue.relay,
          attestation: o
        };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Qu({
          type: "event",
          event: n.id
        }, a)), this.events.emit(n.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
      } else sd(e) && this.events.emit(He.message_ack, e);
    }
    async onMessageEvent(e) {
      await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Zo.inbound), this.events.emit(He.message, e));
    }
    async acknowledgePayload(e) {
      const n = zi(e.id, true);
      await this.provider.connection.send(n);
    }
    unregisterProviderListeners() {
      this.provider.off(Zt.payload, this.onPayloadHandler), this.provider.off(Zt.connect, this.onConnectHandler), this.provider.off(Zt.disconnect, this.onDisconnectHandler), this.provider.off(Zt.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e = await Mu();
      oE(async (n) => {
        e !== n && (e = n, n ? await this.transportOpen().catch((s) => this.logger.error(s, s == null ? void 0 : s.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
      }), this.core.heartbeat.on(pi.pulse, async () => {
        if (!this.transportExplicitlyClosed && !this.connected && lE()) try {
          await this.confirmOnlineStateOrThrow(), await this.transportOpen();
        } catch (n) {
          this.logger.warn(n, n == null ? void 0 : n.message);
        }
      });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout), this.events.emit(He.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
        await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
      }, K.toMiliseconds(NE)))));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
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
  };
  function GC(t, e) {
    return t === e || Number.isNaN(t) && Number.isNaN(e);
  }
  function eh(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function th(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const YC = "[object RegExp]", ZC = "[object String]", JC = "[object Number]", XC = "[object Boolean]", nh = "[object Arguments]", QC = "[object Symbol]", eA = "[object Date]", tA = "[object Map]", nA = "[object Set]", sA = "[object Array]", rA = "[object Function]", iA = "[object ArrayBuffer]", wc = "[object Object]", oA = "[object Error]", aA = "[object DataView]", cA = "[object Uint8Array]", lA = "[object Uint8ClampedArray]", dA = "[object Uint16Array]", uA = "[object Uint32Array]", hA = "[object BigUint64Array]", fA = "[object Int8Array]", pA = "[object Int16Array]", gA = "[object Int32Array]", mA = "[object BigInt64Array]", wA = "[object Float32Array]", yA = "[object Float64Array]";
  function bA() {
  }
  function sh(t) {
    if (!t || typeof t != "object") return false;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : false;
  }
  function EA(t, e, n) {
    return Di(t, e, void 0, void 0, void 0, void 0, n);
  }
  function Di(t, e, n, s, r, i, o) {
    const a = o(t, e, n, s, r, i);
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
        return Hi(t, e, i, o);
    }
    return Hi(t, e, i, o);
  }
  function Hi(t, e, n, s) {
    if (Object.is(t, e)) return true;
    let r = th(t), i = th(e);
    if (r === nh && (r = wc), i === nh && (i = wc), r !== i) return false;
    switch (r) {
      case ZC:
        return t.toString() === e.toString();
      case JC: {
        const c = t.valueOf(), l = e.valueOf();
        return GC(c, l);
      }
      case XC:
      case eA:
      case QC:
        return Object.is(t.valueOf(), e.valueOf());
      case YC:
        return t.source === e.source && t.flags === e.flags;
      case rA:
        return t === e;
    }
    n = n ?? /* @__PURE__ */ new Map();
    const o = n.get(t), a = n.get(e);
    if (o != null && a != null) return o === e;
    n.set(t, e), n.set(e, t);
    try {
      switch (r) {
        case tA: {
          if (t.size !== e.size) return false;
          for (const [c, l] of t.entries()) if (!e.has(c) || !Di(l, e.get(c), c, t, e, n, s)) return false;
          return true;
        }
        case nA: {
          if (t.size !== e.size) return false;
          const c = Array.from(t.values()), l = Array.from(e.values());
          for (let d = 0; d < c.length; d++) {
            const u = c[d], h = l.findIndex((f) => Di(u, f, void 0, t, e, n, s));
            if (h === -1) return false;
            l.splice(h, 1);
          }
          return true;
        }
        case sA:
        case cA:
        case lA:
        case dA:
        case uA:
        case hA:
        case fA:
        case pA:
        case gA:
        case mA:
        case wA:
        case yA: {
          if (typeof Ae < "u" && Ae.isBuffer(t) !== Ae.isBuffer(e) || t.length !== e.length) return false;
          for (let c = 0; c < t.length; c++) if (!Di(t[c], e[c], c, t, e, n, s)) return false;
          return true;
        }
        case iA:
          return t.byteLength !== e.byteLength ? false : Hi(new Uint8Array(t), new Uint8Array(e), n, s);
        case aA:
          return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? false : Hi(new Uint8Array(t), new Uint8Array(e), n, s);
        case oA:
          return t.name === e.name && t.message === e.message;
        case wc: {
          if (!(Hi(t.constructor, e.constructor, n, s) || sh(t) && sh(e))) return false;
          const c = [
            ...Object.keys(t),
            ...eh(t)
          ], l = [
            ...Object.keys(e),
            ...eh(e)
          ];
          if (c.length !== l.length) return false;
          for (let d = 0; d < c.length; d++) {
            const u = c[d], h = t[u];
            if (!Object.hasOwn(e, u)) return false;
            const f = e[u];
            if (!Di(h, f, u, t, e, n, s)) return false;
          }
          return true;
        }
        default:
          return false;
      }
    } finally {
      n.delete(t), n.delete(e);
    }
  }
  function vA(t, e) {
    return EA(t, e, bA);
  }
  var CA = Object.defineProperty, rh = Object.getOwnPropertySymbols, AA = Object.prototype.hasOwnProperty, IA = Object.prototype.propertyIsEnumerable, Sl = (t, e, n) => e in t ? CA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, ih = (t, e) => {
    for (var n in e || (e = {})) AA.call(e, n) && Sl(t, n, e[n]);
    if (rh) for (var n of rh(e)) IA.call(e, n) && Sl(t, n, e[n]);
    return t;
  }, xt = (t, e, n) => Sl(t, typeof e != "symbol" ? e + "" : e, n);
  let Pr = class extends d0 {
    constructor(e, n, s, r = jn, i = void 0) {
      super(e, n, s, r), this.core = e, this.logger = n, this.name = s, xt(this, "map", /* @__PURE__ */ new Map()), xt(this, "version", SE), xt(this, "cached", []), xt(this, "initialized", false), xt(this, "getKey"), xt(this, "storagePrefix", jn), xt(this, "recentlyDeleted", []), xt(this, "recentlyDeletedLimit", 200), xt(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
          this.getKey && o !== null && !Ui(o) ? this.map.set(this.getKey(o), o) : tE(o) ? this.map.set(o.id, o) : nE(o) && this.map.set(o.topic, o);
        }), this.cached = [], this.initialized = true);
      }), xt(this, "set", async (o, a) => {
        this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
          type: "method",
          method: "set",
          key: o,
          value: a
        }), this.map.set(o, a), await this.persist());
      }), xt(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
        type: "method",
        method: "get",
        key: o
      }), this.getData(o))), xt(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => vA(a[c], o[c]))) : this.values)), xt(this, "update", async (o, a) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
          type: "method",
          method: "update",
          key: o,
          update: a
        });
        const c = ih(ih({}, this.getData(o)), a);
        this.map.set(o, c), await this.persist();
      }), xt(this, "delete", async (o, a) => {
        this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
          type: "method",
          method: "delete",
          key: o,
          reason: a
        }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
      }), this.logger = Gt(n, this.name), this.storagePrefix = r, this.getKey = i;
    }
    get context() {
      return Yt(this.logger);
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
      const n = this.map.get(e);
      if (!n) {
        if (this.recentlyDeleted.includes(e)) {
          const { message: r } = Oe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
          throw this.logger.error(r), new Error(r);
        }
        const { message: s } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      return n;
    }
    async persist() {
      await this.setDataStore(this.values);
    }
    async restore() {
      try {
        const e = await this.getDataStore();
        if (typeof e > "u" || !e.length) return;
        if (this.map.size) {
          const { message: n } = Oe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(n), new Error(n);
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
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var NA = Object.defineProperty, SA = (t, e, n) => e in t ? NA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, ye = (t, e, n) => SA(t, typeof e != "symbol" ? e + "" : e, n);
  let _A = class {
    constructor(e, n) {
      this.core = e, this.logger = n, ye(this, "name", xE), ye(this, "version", kE), ye(this, "events", new rd()), ye(this, "pairings"), ye(this, "initialized", false), ye(this, "storagePrefix", jn), ye(this, "ignoredPayloadTypes", [
        gi
      ]), ye(this, "registeredMethods", []), ye(this, "init", async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }), ye(this, "register", ({ methods: s }) => {
        this.isInitialized(), this.registeredMethods = [
          .../* @__PURE__ */ new Set([
            ...this.registeredMethods,
            ...s
          ])
        ];
      }), ye(this, "create", async (s) => {
        this.isInitialized();
        const r = wl(), i = await this.core.crypto.setSymKey(r), o = ji(K.FIVE_MINUTES), a = {
          protocol: gg
        }, c = {
          topic: i,
          expiry: o,
          relay: a,
          active: false,
          methods: s == null ? void 0 : s.methods
        }, l = Lu({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: i,
          symKey: r,
          relay: a,
          expiryTimestamp: o,
          methods: s == null ? void 0 : s.methods
        });
        return this.events.emit(ir.create, c), this.core.expirer.set(i, o), await this.pairings.set(i, c), await this.core.relayer.subscribe(i, {
          transportType: s == null ? void 0 : s.transportType,
          internal: s == null ? void 0 : s.internal
        }), {
          topic: i,
          uri: l
        };
      }), ye(this, "pair", async (s) => {
        this.isInitialized();
        const r = this.core.eventClient.createEvent({
          properties: {
            topic: s == null ? void 0 : s.uri,
            trace: [
              Pn.pairing_started
            ]
          }
        });
        this.isValidPair(s, r);
        const { topic: i, symKey: o, relay: a, expiryTimestamp: c, methods: l } = Bu(s.uri);
        r.props.properties.topic = i, r.addTrace(Pn.pairing_uri_validation_success), r.addTrace(Pn.pairing_uri_not_expired);
        let d;
        if (this.pairings.keys.includes(i)) {
          if (d = this.pairings.get(i), r.addTrace(Pn.existing_pairing), d.active) throw r.setError(Yn.active_pairing_already_exists), new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
          r.addTrace(Pn.pairing_not_expired);
        }
        const u = c || ji(K.FIVE_MINUTES), h = {
          topic: i,
          relay: a,
          expiry: u,
          active: false,
          methods: l
        };
        this.core.expirer.set(i, u), await this.pairings.set(i, h), r.addTrace(Pn.store_new_pairing), s.activatePairing && await this.activate({
          topic: i
        }), this.events.emit(ir.create, h), r.addTrace(Pn.emit_inactive_pairing), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(o, i), r.addTrace(Pn.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          r.setError(Yn.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(i, {
            relay: a
          });
        } catch (f) {
          throw r.setError(Yn.subscribe_pairing_topic_failure), f;
        }
        return r.addTrace(Pn.subscribe_pairing_topic_success), h;
      }), ye(this, "activate", async ({ topic: s }) => {
        this.isInitialized();
        const r = ji(K.FIVE_MINUTES);
        this.core.expirer.set(s, r), await this.pairings.update(s, {
          active: true,
          expiry: r
        });
      }), ye(this, "ping", async (s) => {
        this.isInitialized(), await this.isValidPing(s), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
        const { topic: r } = s;
        if (this.pairings.keys.includes(r)) {
          const i = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = T0();
          this.events.once(sc("pairing_ping", i), ({ error: l }) => {
            l ? c(l) : a();
          }), await o();
        }
      }), ye(this, "updateExpiry", async ({ topic: s, expiry: r }) => {
        this.isInitialized(), await this.pairings.update(s, {
          expiry: r
        });
      }), ye(this, "updateMetadata", async ({ topic: s, metadata: r }) => {
        this.isInitialized(), await this.pairings.update(s, {
          peerMetadata: r
        });
      }), ye(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), ye(this, "disconnect", async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: r } = s;
        this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", $i("USER_DISCONNECTED")), await this.deletePairing(r));
      }), ye(this, "formatUriFromPairing", (s) => {
        this.isInitialized();
        const { topic: r, relay: i, expiry: o, methods: a } = s, c = this.core.crypto.keychain.get(r);
        return Lu({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: r,
          symKey: c,
          relay: i,
          expiryTimestamp: o,
          methods: a
        });
      }), ye(this, "sendRequest", async (s, r, i) => {
        const o = $n(r, i), a = await this.core.crypto.encode(s, o), c = vi[r].req;
        return this.core.history.set(s, o), this.core.relayer.publish(s, a, c), o.id;
      }), ye(this, "sendResult", async (s, r, i) => {
        const o = zi(s, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, s)).request.method, l = vi[c].res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), ye(this, "sendError", async (s, r, i) => {
        const o = Xf(s, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, s)).request.method, l = vi[c] ? vi[c].res : vi.unregistered_method.res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), ye(this, "deletePairing", async (s, r) => {
        await this.core.relayer.unsubscribe(s), await Promise.all([
          this.pairings.delete(s, $i("USER_DISCONNECTED")),
          this.core.crypto.deleteSymKey(s),
          r ? Promise.resolve() : this.core.expirer.del(s)
        ]);
      }), ye(this, "cleanup", async () => {
        const s = this.pairings.getAll().filter((r) => lu(r.expiry));
        await Promise.all(s.map((r) => this.deletePairing(r.topic)));
      }), ye(this, "onRelayEventRequest", async (s) => {
        const { topic: r, payload: i } = s;
        switch (i.method) {
          case "wc_pairingPing":
            return await this.onPairingPingRequest(r, i);
          case "wc_pairingDelete":
            return await this.onPairingDeleteRequest(r, i);
          default:
            return await this.onUnknownRpcMethodRequest(r, i);
        }
      }), ye(this, "onRelayEventResponse", async (s) => {
        const { topic: r, payload: i } = s, o = (await this.core.history.get(r, i.id)).request.method;
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(r, i);
          default:
            return this.onUnknownRpcMethodResponse(o);
        }
      }), ye(this, "onPairingPingRequest", async (s, r) => {
        const { id: i } = r;
        try {
          this.isValidPing({
            topic: s
          }), await this.sendResult(i, s, true), this.events.emit(ir.ping, {
            id: i,
            topic: s
          });
        } catch (o) {
          await this.sendError(i, s, o), this.logger.error(o);
        }
      }), ye(this, "onPairingPingResponse", (s, r) => {
        const { id: i } = r;
        setTimeout(() => {
          zn(r) ? this.events.emit(sc("pairing_ping", i), {}) : Rn(r) && this.events.emit(sc("pairing_ping", i), {
            error: r.error
          });
        }, 500);
      }), ye(this, "onPairingDeleteRequest", async (s, r) => {
        const { id: i } = r;
        try {
          this.isValidDisconnect({
            topic: s
          }), await this.deletePairing(s), this.events.emit(ir.delete, {
            id: i,
            topic: s
          });
        } catch (o) {
          await this.sendError(i, s, o), this.logger.error(o);
        }
      }), ye(this, "onUnknownRpcMethodRequest", async (s, r) => {
        const { id: i, method: o } = r;
        try {
          if (this.registeredMethods.includes(o)) return;
          const a = $i("WC_METHOD_UNSUPPORTED", o);
          await this.sendError(i, s, a), this.logger.error(a);
        } catch (a) {
          await this.sendError(i, s, a), this.logger.error(a);
        }
      }), ye(this, "onUnknownRpcMethodResponse", (s) => {
        this.registeredMethods.includes(s) || this.logger.error($i("WC_METHOD_UNSUPPORTED", s));
      }), ye(this, "isValidPair", (s, r) => {
        var i;
        if (!pc(s)) {
          const { message: a } = Oe("MISSING_OR_INVALID", `pair() params: ${s}`);
          throw r.setError(Yn.malformed_pairing_uri), new Error(a);
        }
        if (!eE(s.uri)) {
          const { message: a } = Oe("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
          throw r.setError(Yn.malformed_pairing_uri), new Error(a);
        }
        const o = Bu(s == null ? void 0 : s.uri);
        if (!((i = o == null ? void 0 : o.relay) != null && i.protocol)) {
          const { message: a } = Oe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw r.setError(Yn.malformed_pairing_uri), new Error(a);
        }
        if (!(o != null && o.symKey)) {
          const { message: a } = Oe("MISSING_OR_INVALID", "pair() uri#symKey");
          throw r.setError(Yn.malformed_pairing_uri), new Error(a);
        }
        if (o != null && o.expiryTimestamp && K.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
          r.setError(Yn.pairing_expired);
          const { message: a } = Oe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(a);
        }
      }), ye(this, "isValidPing", async (s) => {
        if (!pc(s)) {
          const { message: i } = Oe("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(i);
        }
        const { topic: r } = s;
        await this.isValidPairingTopic(r);
      }), ye(this, "isValidDisconnect", async (s) => {
        if (!pc(s)) {
          const { message: i } = Oe("MISSING_OR_INVALID", `disconnect() params: ${s}`);
          throw new Error(i);
        }
        const { topic: r } = s;
        await this.isValidPairingTopic(r);
      }), ye(this, "isValidPairingTopic", async (s) => {
        if (!hg(s)) {
          const { message: r } = Oe("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
          throw new Error(r);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: r } = Oe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
          throw new Error(r);
        }
        if (lu(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: r } = Oe("EXPIRED", `pairing topic: ${s}`);
          throw new Error(r);
        }
      }), this.core = e, this.logger = Gt(n, this.name), this.pairings = new Pr(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return Yt(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(He.message, async (e) => {
        const { topic: n, message: s, transportType: r } = e;
        if (this.pairings.keys.includes(n) && r !== Ue.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))) try {
          const i = await this.core.crypto.decode(n, s);
          nd(i) ? (this.core.history.set(n, i), await this.onRelayEventRequest({
            topic: n,
            payload: i
          })) : sd(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
            topic: n,
            payload: i
          }), this.core.history.delete(n, i.id)), await this.core.relayer.messages.ack(n, s);
        } catch (i) {
          this.logger.error(i);
        }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(nn.expired, async (e) => {
        const { topic: n } = k0(e.target);
        n && this.pairings.keys.includes(n) && (await this.deletePairing(n, true), this.events.emit(ir.expire, {
          topic: n
        }));
      });
    }
  };
  var TA = Object.defineProperty, OA = (t, e, n) => e in t ? TA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, tt = (t, e, n) => OA(t, typeof e != "symbol" ? e + "" : e, n);
  let xA = class extends o0 {
    constructor(e, n) {
      super(e, n), this.core = e, this.logger = n, tt(this, "records", /* @__PURE__ */ new Map()), tt(this, "events", new Sr.EventEmitter()), tt(this, "name", PE), tt(this, "version", RE), tt(this, "cached", []), tt(this, "initialized", false), tt(this, "storagePrefix", jn), tt(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), tt(this, "set", (s, r, i) => {
        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
          type: "method",
          method: "set",
          topic: s,
          request: r,
          chainId: i
        }), this.records.has(r.id)) return;
        const o = {
          id: r.id,
          topic: s,
          request: {
            method: r.method,
            params: r.params || null
          },
          chainId: i,
          expiry: ji(K.THIRTY_DAYS)
        };
        this.records.set(o.id, o), this.persist(), this.events.emit(dn.created, o);
      }), tt(this, "resolve", async (s) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
          type: "method",
          method: "update",
          response: s
        }), !this.records.has(s.id)) return;
        const r = await this.getRecord(s.id);
        typeof r.response > "u" && (r.response = Rn(s) ? {
          error: s.error
        } : {
          result: s.result
        }, this.records.set(r.id, r), this.persist(), this.events.emit(dn.updated, r));
      }), tt(this, "get", async (s, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
        type: "method",
        method: "get",
        topic: s,
        id: r
      }), await this.getRecord(r))), tt(this, "delete", (s, r) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
          type: "method",
          method: "delete",
          id: r
        }), this.values.forEach((i) => {
          if (i.topic === s) {
            if (typeof r < "u" && i.id !== r) return;
            this.records.delete(i.id), this.events.emit(dn.deleted, i);
          }
        }), this.persist();
      }), tt(this, "exists", async (s, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === s : false)), tt(this, "on", (s, r) => {
        this.events.on(s, r);
      }), tt(this, "once", (s, r) => {
        this.events.once(s, r);
      }), tt(this, "off", (s, r) => {
        this.events.off(s, r);
      }), tt(this, "removeListener", (s, r) => {
        this.events.removeListener(s, r);
      }), this.logger = Gt(n, this.name);
    }
    get context() {
      return Yt(this.logger);
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
      return this.values.forEach((n) => {
        if (typeof n.response < "u") return;
        const s = {
          topic: n.topic,
          request: $n(n.request.method, n.request.params, n.id),
          chainId: n.chainId
        };
        return e.push(s);
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
      const n = this.records.get(e);
      if (!n) {
        const { message: s } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(s);
      }
      return n;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(dn.sync);
    }
    async restore() {
      try {
        const e = await this.getJsonRpcRecords();
        if (typeof e > "u" || !e.length) return;
        if (this.records.size) {
          const { message: n } = Oe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(n), new Error(n);
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
      this.events.on(dn.created, (e) => {
        const n = dn.created;
        this.logger.info(`Emitting ${n}`), this.logger.debug({
          type: "event",
          event: n,
          record: e
        });
      }), this.events.on(dn.updated, (e) => {
        const n = dn.updated;
        this.logger.info(`Emitting ${n}`), this.logger.debug({
          type: "event",
          event: n,
          record: e
        });
      }), this.events.on(dn.deleted, (e) => {
        const n = dn.deleted;
        this.logger.info(`Emitting ${n}`), this.logger.debug({
          type: "event",
          event: n,
          record: e
        });
      }), this.core.heartbeat.on(pi.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = false;
        this.records.forEach((n) => {
          K.toMiliseconds(n.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${n.id}`), this.records.delete(n.id), this.events.emit(dn.deleted, n, false), e = true);
        }), e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var kA = Object.defineProperty, PA = (t, e, n) => e in t ? kA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, ht = (t, e, n) => PA(t, typeof e != "symbol" ? e + "" : e, n);
  let RA = class extends h0 {
    constructor(e, n) {
      super(e, n), this.core = e, this.logger = n, ht(this, "expirations", /* @__PURE__ */ new Map()), ht(this, "events", new Sr.EventEmitter()), ht(this, "name", $E), ht(this, "version", UE), ht(this, "cached", []), ht(this, "initialized", false), ht(this, "storagePrefix", jn), ht(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), ht(this, "has", (s) => {
        try {
          const r = this.formatTarget(s);
          return typeof this.getExpiration(r) < "u";
        } catch {
          return false;
        }
      }), ht(this, "set", (s, r) => {
        this.isInitialized();
        const i = this.formatTarget(s), o = {
          target: i,
          expiry: r
        };
        this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(nn.created, {
          target: i,
          expiration: o
        });
      }), ht(this, "get", (s) => {
        this.isInitialized();
        const r = this.formatTarget(s);
        return this.getExpiration(r);
      }), ht(this, "del", (s) => {
        if (this.isInitialized(), this.has(s)) {
          const r = this.formatTarget(s), i = this.getExpiration(r);
          this.expirations.delete(r), this.events.emit(nn.deleted, {
            target: r,
            expiration: i
          });
        }
      }), ht(this, "on", (s, r) => {
        this.events.on(s, r);
      }), ht(this, "once", (s, r) => {
        this.events.once(s, r);
      }), ht(this, "off", (s, r) => {
        this.events.off(s, r);
      }), ht(this, "removeListener", (s, r) => {
        this.events.removeListener(s, r);
      }), this.logger = Gt(n, this.name);
    }
    get context() {
      return Yt(this.logger);
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
      if (typeof e == "string") return O0(e);
      if (typeof e == "number") return x0(e);
      const { message: n } = Oe("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(n);
    }
    async setExpirations(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(nn.sync);
    }
    async restore() {
      try {
        const e = await this.getExpirations();
        if (typeof e > "u" || !e.length) return;
        if (this.expirations.size) {
          const { message: n } = Oe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(n), new Error(n);
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
      const n = this.expirations.get(e);
      if (!n) {
        const { message: s } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.warn(s), new Error(s);
      }
      return n;
    }
    checkExpiry(e, n) {
      const { expiry: s } = n;
      K.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, n);
    }
    expire(e, n) {
      this.expirations.delete(e), this.events.emit(nn.expired, {
        target: e,
        expiration: n
      });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e, n) => this.checkExpiry(n, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(pi.pulse, () => this.checkExpirations()), this.events.on(nn.created, (e) => {
        const n = nn.created;
        this.logger.info(`Emitting ${n}`), this.logger.debug({
          type: "event",
          event: n,
          data: e
        }), this.persist();
      }), this.events.on(nn.expired, (e) => {
        const n = nn.expired;
        this.logger.info(`Emitting ${n}`), this.logger.debug({
          type: "event",
          event: n,
          data: e
        }), this.persist();
      }), this.events.on(nn.deleted, (e) => {
        const n = nn.deleted;
        this.logger.info(`Emitting ${n}`), this.logger.debug({
          type: "event",
          event: n,
          data: e
        }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var $A = Object.defineProperty, UA = (t, e, n) => e in t ? $A(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, We = (t, e, n) => UA(t, typeof e != "symbol" ? e + "" : e, n);
  let DA = class extends f0 {
    constructor(e, n, s) {
      super(e, n, s), this.core = e, this.logger = n, this.store = s, We(this, "name", DE), We(this, "abortController"), We(this, "isDevEnv"), We(this, "verifyUrlV3", LE), We(this, "storagePrefix", jn), We(this, "version", pg), We(this, "publicKey"), We(this, "fetchPromise"), We(this, "init", async () => {
        var r;
        this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && K.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
      }), We(this, "register", async (r) => {
        if (!lo() || this.isDevEnv) return;
        const i = window.location.origin, { id: o, decryptedId: a } = r, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${i}&id=${o}&decryptedId=${a}`;
        try {
          const l = zt.getDocument(), d = this.startAbortTimer(K.ONE_SECOND * 5), u = await new Promise((h, f) => {
            const g = () => {
              window.removeEventListener("message", m), l.body.removeChild(p), f("attestation aborted");
            };
            this.abortController.signal.addEventListener("abort", g);
            const p = l.createElement("iframe");
            p.src = c, p.style.display = "none", p.addEventListener("error", g, {
              signal: this.abortController.signal
            });
            const m = (T) => {
              if (T.data && typeof T.data == "string") try {
                const O = JSON.parse(T.data);
                if (O.type === "verify_attestation") {
                  if (Xc(O.attestation).payload.id !== o) return;
                  clearInterval(d), l.body.removeChild(p), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", m), h(O.attestation === null ? "" : O.attestation);
                }
              } catch (O) {
                this.logger.warn(O);
              }
            };
            l.body.appendChild(p), window.addEventListener("message", m, {
              signal: this.abortController.signal
            });
          });
          return this.logger.debug(u, "jwt attestation"), u;
        } catch (l) {
          this.logger.warn(l);
        }
        return "";
      }), We(this, "resolve", async (r) => {
        if (this.isDevEnv) return "";
        const { attestationId: i, hash: o, encryptedId: a } = r;
        if (i === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (i) {
          if (Xc(i).payload.id !== a) return;
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
      }), We(this, "fetchAttestation", async (r, i) => {
        this.logger.debug(`resolving attestation: ${r} from url: ${i}`);
        const o = this.startAbortTimer(K.ONE_SECOND * 5), a = await fetch(`${i}/attestation/${r}?v2Supported=true`, {
          signal: this.abortController.signal
        });
        return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
      }), We(this, "getVerifyUrl", (r) => {
        let i = r || Wi;
        return ME.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Wi}`), i = Wi), i;
      }), We(this, "fetchPublicKey", async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const r = this.startAbortTimer(K.FIVE_SECONDS), i = await fetch(`${this.verifyUrlV3}/public-key`, {
            signal: this.abortController.signal
          });
          return clearTimeout(r), await i.json();
        } catch (r) {
          this.logger.warn(r);
        }
      }), We(this, "persistPublicKey", async (r) => {
        this.logger.debug(r, "persisting public key to local storage"), await this.store.setItem(this.storeKey, r), this.publicKey = r;
      }), We(this, "removePublicKey", async () => {
        this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
      }), We(this, "isValidJwtAttestation", async (r) => {
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
      }), We(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), We(this, "fetchAndPersistPublicKey", async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (i) => {
          const o = await this.fetchPublicKey();
          o && (await this.persistPublicKey(o), i(o));
        });
        const r = await this.fetchPromise;
        return this.fetchPromise = void 0, r;
      }), We(this, "validateAttestation", (r, i) => {
        const o = j1(r, i.publicKey), a = {
          hasExpired: K.toMiliseconds(o.exp) < Date.now(),
          payload: o
        };
        if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
        return {
          origin: a.payload.origin,
          isScam: a.payload.isScam,
          isVerified: a.payload.isVerified
        };
      }), this.logger = Gt(n, this.name), this.abortController = new AbortController(), this.isDevEnv = mp(), this.init();
    }
    get storeKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
      return Yt(this.logger);
    }
    startAbortTimer(e) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), K.toMiliseconds(e));
    }
  };
  var BA = Object.defineProperty, LA = (t, e, n) => e in t ? BA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, oh = (t, e, n) => LA(t, typeof e != "symbol" ? e + "" : e, n);
  let MA = class extends p0 {
    constructor(e, n) {
      super(e, n), this.projectId = e, this.logger = n, oh(this, "context", FE), oh(this, "registerDeviceToken", async (s) => {
        const { clientId: r, token: i, notificationType: o, enableEncrypted: a = false } = s, c = `${jE}/${this.projectId}/clients`;
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
      }), this.logger = Gt(n, this.context);
    }
  };
  var FA = Object.defineProperty, ah = Object.getOwnPropertySymbols, jA = Object.prototype.hasOwnProperty, qA = Object.prototype.propertyIsEnumerable, _l = (t, e, n) => e in t ? FA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Ii = (t, e) => {
    for (var n in e || (e = {})) jA.call(e, n) && _l(t, n, e[n]);
    if (ah) for (var n of ah(e)) qA.call(e, n) && _l(t, n, e[n]);
    return t;
  }, Ze = (t, e, n) => _l(t, typeof e != "symbol" ? e + "" : e, n);
  let WA = class extends g0 {
    constructor(e, n, s = true) {
      super(e, n, s), this.core = e, this.logger = n, Ze(this, "context", WE), Ze(this, "storagePrefix", jn), Ze(this, "storageVersion", qE), Ze(this, "events", /* @__PURE__ */ new Map()), Ze(this, "shouldPersist", false), Ze(this, "init", async () => {
        if (!mp()) try {
          const r = {
            eventId: du(),
            timestamp: Date.now(),
            domain: this.getAppDomain(),
            props: {
              event: "INIT",
              type: "",
              properties: {
                client_id: await this.core.crypto.getClientId(),
                user_agent: pp(this.core.relayer.protocol, this.core.relayer.version, bl)
              }
            }
          };
          await this.sendEvent([
            r
          ]);
        } catch (r) {
          this.logger.warn(r);
        }
      }), Ze(this, "createEvent", (r) => {
        const { event: i = "ERROR", type: o = "", properties: { topic: a, trace: c } } = r, l = du(), d = this.core.projectId || "", u = Date.now(), h = Ii({
          eventId: l,
          timestamp: u,
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
        return this.telemetryEnabled && (this.events.set(l, h), this.shouldPersist = true), h;
      }), Ze(this, "getEvent", (r) => {
        const { eventId: i, topic: o } = r;
        if (i) return this.events.get(i);
        const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
        if (a) return Ii(Ii({}, a), this.setMethods(a.eventId));
      }), Ze(this, "deleteEvent", (r) => {
        const { eventId: i } = r;
        this.events.delete(i), this.shouldPersist = true;
      }), Ze(this, "setEventListeners", () => {
        this.core.heartbeat.on(pi.pulse, async () => {
          this.shouldPersist && await this.persist(), this.events.forEach((r) => {
            K.fromMiliseconds(Date.now()) - K.fromMiliseconds(r.timestamp) > HE && (this.events.delete(r.eventId), this.shouldPersist = true);
          });
        });
      }), Ze(this, "setMethods", (r) => ({
        addTrace: (i) => this.addTrace(r, i),
        setError: (i) => this.setError(r, i)
      })), Ze(this, "addTrace", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.properties.trace.push(i), this.events.set(r, o), this.shouldPersist = true);
      }), Ze(this, "setError", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.type = i, o.timestamp = Date.now(), this.events.set(r, o), this.shouldPersist = true);
      }), Ze(this, "persist", async () => {
        await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
      }), Ze(this, "restore", async () => {
        try {
          const r = await this.core.storage.getItem(this.storageKey) || [];
          if (!r.length) return;
          r.forEach((i) => {
            this.events.set(i.eventId, Ii(Ii({}, i), this.setMethods(i.eventId)));
          });
        } catch (r) {
          this.logger.warn(r);
        }
      }), Ze(this, "submit", async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const r = [];
        for (const [i, o] of this.events) o.props.type && r.push(o);
        if (r.length !== 0) try {
          if ((await this.sendEvent(r)).ok) for (const i of r) this.events.delete(i.eventId), this.shouldPersist = true;
        } catch (i) {
          this.logger.warn(i);
        }
      }), Ze(this, "sendEvent", async (r) => {
        const i = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(`${VE}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${bl}${i}`, {
          method: "POST",
          body: JSON.stringify(r)
        });
      }), Ze(this, "getAppDomain", () => I0().url), this.logger = Gt(n, this.context), this.telemetryEnabled = s, s ? this.restore().then(async () => {
        await this.submit(), this.setEventListeners();
      }) : this.persist();
    }
    get storageKey() {
      return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
  };
  var HA = Object.defineProperty, ch = Object.getOwnPropertySymbols, VA = Object.prototype.hasOwnProperty, KA = Object.prototype.propertyIsEnumerable, Tl = (t, e, n) => e in t ? HA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, lh = (t, e) => {
    for (var n in e || (e = {})) VA.call(e, n) && Tl(t, n, e[n]);
    if (ch) for (var n of ch(e)) KA.call(e, n) && Tl(t, n, e[n]);
    return t;
  }, Pe = (t, e, n) => Tl(t, typeof e != "symbol" ? e + "" : e, n);
  let zA = class Og extends n0 {
    constructor(e) {
      var n;
      super(e), Pe(this, "protocol", fg), Pe(this, "version", pg), Pe(this, "name", yl), Pe(this, "relayUrl"), Pe(this, "projectId"), Pe(this, "customStoragePrefix"), Pe(this, "events", new Sr.EventEmitter()), Pe(this, "logger"), Pe(this, "heartbeat"), Pe(this, "relayer"), Pe(this, "crypto"), Pe(this, "storage"), Pe(this, "history"), Pe(this, "expirer"), Pe(this, "pairing"), Pe(this, "verify"), Pe(this, "echoClient"), Pe(this, "linkModeSupportedApps"), Pe(this, "eventClient"), Pe(this, "initialized", false), Pe(this, "logChunkController"), Pe(this, "on", (a, c) => this.events.on(a, c)), Pe(this, "once", (a, c) => this.events.once(a, c)), Pe(this, "off", (a, c) => this.events.off(a, c)), Pe(this, "removeListener", (a, c) => this.events.removeListener(a, c)), Pe(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
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
      const s = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
      if (s) try {
        return this.customStoragePrefix = s.customStoragePrefix, this.logger = s.logger, this.heartbeat = s.heartbeat, this.crypto = s.crypto, this.history = s.history, this.expirer = s.expirer, this.storage = s.storage, this.relayer = s.relayer, this.pairing = s.pairing, this.verify = s.verify, this.echoClient = s.echoClient, this.linkModeSupportedApps = s.linkModeSupportedApps, this.eventClient = s.eventClient, this.initialized = s.initialized, this.logChunkController = s.logChunkController, s;
      } catch (a) {
        console.warn("Failed to copy global core", a);
      }
      this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || mg, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
      const r = Jf({
        level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : hE.logger,
        name: yl
      }), { logger: i, chunkLoggerController: o } = Sa({
        opts: r,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger
      });
      this.logChunkController = o, (n = this.logChunkController) != null && n.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
        var a, c;
        (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
          clientId: await this.crypto.getClientId()
        }));
      }), this.logger = Gt(i, this.name), this.heartbeat = new Rw(), this.crypto = new EC(this, this.logger, e == null ? void 0 : e.keychain), this.history = new xA(this, this.logger), this.expirer = new RA(this, this.logger), this.storage = e != null && e.storage ? e.storage : new $w(lh(lh({}, fE), e == null ? void 0 : e.storageOptions)), this.relayer = new zC({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId
      }), this.pairing = new _A(this, this.logger), this.verify = new DA(this, this.logger, this.storage), this.echoClient = new MA(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new WA(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
    }
    static async init(e) {
      const n = new Og(e);
      await n.initialize();
      const s = await n.crypto.getClientId();
      return await n.storage.setItem(_E, s), n;
    }
    get context() {
      return Yt(this.logger);
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
      this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(ju, this.linkModeSupportedApps));
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(ju) || [], this.initialized = true, this.logger.info("Core Initialization Success");
      } catch (e) {
        throw this.logger.warn(e, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e.message), e;
      }
    }
    getGlobalCore(e = "") {
      try {
        if (this.isGlobalCoreDisabled()) return;
        const n = `_walletConnectCore_${e}`, s = `${n}_count`;
        return globalThis[s] = (globalThis[s] || 0) + 1, globalThis[s] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[s]} times.`), globalThis[n];
      } catch (n) {
        console.warn("Failed to get global WalletConnect core", n);
        return;
      }
    }
    setGlobalCore(e) {
      var n;
      try {
        if (this.isGlobalCoreDisabled()) return;
        const s = `_walletConnectCore_${((n = e.opts) == null ? void 0 : n.customStoragePrefix) || ""}`;
        globalThis[s] = e;
      } catch (s) {
        console.warn("Failed to set global WalletConnect core", s);
      }
    }
    isGlobalCoreDisabled() {
      try {
        return typeof an < "u" && uE.DISABLE_GLOBAL_CORE === "true";
      } catch {
        return true;
      }
    }
  };
  const GA = zA;
  var YA = Object.defineProperty, ZA = (t, e, n) => e in t ? YA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, dh = (t, e, n) => ZA(t, typeof e != "symbol" ? e + "" : e, n);
  let JA = class {
    constructor(e) {
      this.opts = e, dh(this, "protocol", "wc"), dh(this, "version", 2);
    }
  }, XA = class {
    constructor(e) {
      this.client = e;
    }
  };
  const QA = "0.1.1";
  function eI() {
    return QA;
  }
  class Le extends Error {
    constructor(e, n = {}) {
      const s = (() => {
        var _a2;
        if (n.cause instanceof Le) {
          if (n.cause.details) return n.cause.details;
          if (n.cause.shortMessage) return n.cause.shortMessage;
        }
        return n.cause && "details" in n.cause && typeof n.cause.details == "string" ? n.cause.details : ((_a2 = n.cause) == null ? void 0 : _a2.message) ? n.cause.message : n.details;
      })(), r = n.cause instanceof Le && n.cause.docsPath || n.docsPath, o = `https://oxlib.sh${r ?? ""}`, a = [
        e || "An error occurred.",
        ...n.metaMessages ? [
          "",
          ...n.metaMessages
        ] : [],
        ...s || r ? [
          "",
          s ? `Details: ${s}` : void 0,
          r ? `See: ${o}` : void 0
        ] : []
      ].filter((c) => typeof c == "string").join(`
`);
      super(a, n.cause ? {
        cause: n.cause
      } : void 0), Object.defineProperty(this, "details", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "docs", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "docsPath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "shortMessage", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "cause", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "BaseError"
      }), Object.defineProperty(this, "version", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: `ox@${eI()}`
      }), this.cause = n.cause, this.details = s, this.docs = o, this.docsPath = r, this.shortMessage = e;
    }
    walk(e) {
      return xg(this, e);
    }
  }
  function xg(t, e) {
    return (e == null ? void 0 : e(t)) ? t : t && typeof t == "object" && "cause" in t && t.cause ? xg(t.cause, e) : e ? null : t;
  }
  const wd = BigInt(0), Ol = BigInt(1);
  function go(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function yd(t) {
    if (!go(t)) throw new Error("Uint8Array expected");
  }
  function Qi(t, e) {
    if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
  }
  function ko(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function kg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? wd : BigInt("0x" + t);
  }
  const Pg = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", tI = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function eo(t) {
    if (yd(t), Pg) return t.toHex();
    let e = "";
    for (let n = 0; n < t.length; n++) e += tI[t[n]];
    return e;
  }
  const Hn = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function uh(t) {
    if (t >= Hn._0 && t <= Hn._9) return t - Hn._0;
    if (t >= Hn.A && t <= Hn.F) return t - (Hn.A - 10);
    if (t >= Hn.a && t <= Hn.f) return t - (Hn.a - 10);
  }
  function fa(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Pg) return Uint8Array.fromHex(t);
    const e = t.length, n = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const s = new Uint8Array(n);
    for (let r = 0, i = 0; r < n; r++, i += 2) {
      const o = uh(t.charCodeAt(i)), a = uh(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      s[r] = o * 16 + a;
    }
    return s;
  }
  function Er(t) {
    return kg(eo(t));
  }
  function Rg(t) {
    return yd(t), kg(eo(Uint8Array.from(t).reverse()));
  }
  function mo(t, e) {
    return fa(t.toString(16).padStart(e * 2, "0"));
  }
  function $g(t, e) {
    return mo(t, e).reverse();
  }
  function sn(t, e, n) {
    let s;
    if (typeof e == "string") try {
      s = fa(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (go(e)) s = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = s.length;
    if (typeof n == "number" && r !== n) throw new Error(t + " of length " + n + " expected, got " + r);
    return s;
  }
  function pa(...t) {
    let e = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      yd(r), e += r.length;
    }
    const n = new Uint8Array(e);
    for (let s = 0, r = 0; s < t.length; s++) {
      const i = t[s];
      n.set(i, r), r += i.length;
    }
    return n;
  }
  const yc = (t) => typeof t == "bigint" && wd <= t;
  function bd(t, e, n) {
    return yc(t) && yc(e) && yc(n) && e <= t && t < n;
  }
  function ti(t, e, n, s) {
    if (!bd(e, n, s)) throw new Error("expected valid " + t + ": " + n + " <= n < " + s + ", got " + e);
  }
  function nI(t) {
    let e;
    for (e = 0; t > wd; t >>= Ol, e += 1) ;
    return e;
  }
  const La = (t) => (Ol << BigInt(t)) - Ol, bc = (t) => new Uint8Array(t), hh = (t) => Uint8Array.from(t);
  function sI(t, e, n) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    let s = bc(t), r = bc(t), i = 0;
    const o = () => {
      s.fill(1), r.fill(0), i = 0;
    }, a = (...u) => n(r, s, ...u), c = (u = bc(0)) => {
      r = a(hh([
        0
      ]), u), s = a(), u.length !== 0 && (r = a(hh([
        1
      ]), u), s = a());
    }, l = () => {
      if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const h = [];
      for (; u < e; ) {
        s = a();
        const f = s.slice();
        h.push(f), u += s.length;
      }
      return pa(...h);
    };
    return (u, h) => {
      o(), c(u);
      let f;
      for (; !(f = h(l())); ) c();
      return o(), f;
    };
  }
  const rI = {
    bigint: (t) => typeof t == "bigint",
    function: (t) => typeof t == "function",
    boolean: (t) => typeof t == "boolean",
    string: (t) => typeof t == "string",
    stringOrUint8Array: (t) => typeof t == "string" || go(t),
    isSafeInteger: (t) => Number.isSafeInteger(t),
    array: (t) => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
  };
  function Ma(t, e, n = {}) {
    const s = (r, i, o) => {
      const a = rI[i];
      if (typeof a != "function") throw new Error("invalid validator function");
      const c = t[r];
      if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(r) + " is invalid. Expected " + i + ", got " + c);
    };
    for (const [r, i] of Object.entries(e)) s(r, i, false);
    for (const [r, i] of Object.entries(n)) s(r, i, true);
    return t;
  }
  function fh(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (n, ...s) => {
      const r = e.get(n);
      if (r !== void 0) return r;
      const i = t(n, ...s);
      return e.set(n, i), i;
    };
  }
  function iI(t, e) {
    if (wh(t) > e) throw new SI({
      givenSize: wh(t),
      maxSize: e
    });
  }
  const Vn = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function ph(t) {
    if (t >= Vn.zero && t <= Vn.nine) return t - Vn.zero;
    if (t >= Vn.A && t <= Vn.F) return t - (Vn.A - 10);
    if (t >= Vn.a && t <= Vn.f) return t - (Vn.a - 10);
  }
  function oI(t, e = {}) {
    const { dir: n, size: s = 32 } = e;
    if (s === 0) return t;
    if (t.length > s) throw new _I({
      size: t.length,
      targetSize: s,
      type: "Bytes"
    });
    const r = new Uint8Array(s);
    for (let i = 0; i < s; i++) {
      const o = n === "right";
      r[o ? i : s - i - 1] = t[o ? i : t.length - i - 1];
    }
    return r;
  }
  function Ug(t, e) {
    if (Ks(t) > e) throw new mI({
      givenSize: Ks(t),
      maxSize: e
    });
  }
  function aI(t, e) {
    if (typeof e == "number" && e > 0 && e > Ks(t) - 1) throw new Lg({
      offset: e,
      position: "start",
      size: Ks(t)
    });
  }
  function cI(t, e, n) {
    if (typeof e == "number" && typeof n == "number" && Ks(t) !== n - e) throw new Lg({
      offset: n,
      position: "end",
      size: Ks(t)
    });
  }
  function Dg(t, e = {}) {
    const { dir: n, size: s = 32 } = e;
    if (s === 0) return t;
    const r = t.replace("0x", "");
    if (r.length > s * 2) throw new wI({
      size: Math.ceil(r.length / 2),
      targetSize: s,
      type: "Hex"
    });
    return `0x${r[n === "right" ? "padEnd" : "padStart"](s * 2, "0")}`;
  }
  const lI = "#__bigint";
  function Ed(t, e, n) {
    return JSON.stringify(t, (s, r) => typeof r == "bigint" ? r.toString() + lI : r, n);
  }
  const dI = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function uI(t, e = {}) {
    const { strict: n = false } = e;
    if (!t) throw new gh(t);
    if (typeof t != "string") throw new gh(t);
    if (n && !/^0x[0-9a-fA-F]*$/.test(t)) throw new mh(t);
    if (!t.startsWith("0x")) throw new mh(t);
  }
  function hI(...t) {
    return `0x${t.reduce((e, n) => e + n.replace("0x", ""), "")}`;
  }
  function vd(t) {
    return t instanceof Uint8Array ? ga(t) : Array.isArray(t) ? ga(new Uint8Array(t)) : t;
  }
  function ga(t, e = {}) {
    let n = "";
    for (let r = 0; r < t.length; r++) n += dI[t[r]];
    const s = `0x${n}`;
    return typeof e.size == "number" ? (Ug(s, e.size), Bg(s, e.size)) : s;
  }
  function Ec(t, e = {}) {
    const { signed: n, size: s } = e, r = BigInt(t);
    let i;
    s ? n ? i = (1n << BigInt(s) * 8n - 1n) - 1n : i = 2n ** (BigInt(s) * 8n) - 1n : typeof t == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && n ? -i - 1n : 0;
    if (i && r > i || r < o) {
      const l = typeof t == "bigint" ? "n" : "";
      throw new gI({
        max: i ? `${i}${l}` : void 0,
        min: `${o}${l}`,
        signed: n,
        size: s,
        value: `${t}${l}`
      });
    }
    const c = `0x${(n && r < 0 ? (1n << BigInt(s * 8)) + BigInt(r) : r).toString(16)}`;
    return s ? fI(c, s) : c;
  }
  function fI(t, e) {
    return Dg(t, {
      dir: "left",
      size: e
    });
  }
  function Bg(t, e) {
    return Dg(t, {
      dir: "right",
      size: e
    });
  }
  function Qn(t, e, n, s = {}) {
    const { strict: r } = s;
    aI(t, e);
    const i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (n ?? t.length) * 2)}`;
    return r && cI(i, e, n), i;
  }
  function Ks(t) {
    return Math.ceil((t.length - 2) / 2);
  }
  function pI(t, e = {}) {
    const { strict: n = false } = e;
    try {
      return uI(t, {
        strict: n
      }), true;
    } catch {
      return false;
    }
  }
  class gI extends Le {
    constructor({ max: e, min: n, signed: s, size: r, value: i }) {
      super(`Number \`${i}\` is not in safe${r ? ` ${r * 8}-bit` : ""}${s ? " signed" : " unsigned"} integer range ${e ? `(\`${n}\` to \`${e}\`)` : `(above \`${n}\`)`}`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.IntegerOutOfRangeError"
      });
    }
  }
  class gh extends Le {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Ed(e) : e}\` of type \`${typeof e}\` is an invalid hex type.`, {
        metaMessages: [
          'Hex types must be represented as `"0x${string}"`.'
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.InvalidHexTypeError"
      });
    }
  }
  class mh extends Le {
    constructor(e) {
      super(`Value \`${e}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.InvalidHexValueError"
      });
    }
  }
  let mI = class extends Le {
    constructor({ givenSize: e, maxSize: n }) {
      super(`Size cannot exceed \`${n}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeOverflowError"
      });
    }
  };
  class Lg extends Le {
    constructor({ offset: e, position: n, size: s }) {
      super(`Slice ${n === "start" ? "starting" : "ending"} at offset \`${e}\` is out-of-bounds (size: \`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SliceOffsetOutOfBoundsError"
      });
    }
  }
  let wI = class extends Le {
    constructor({ size: e, targetSize: n, type: s }) {
      super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${n}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeExceedsPaddingSizeError"
      });
    }
  };
  const yI = new TextEncoder();
  function bI(t) {
    if (!(t instanceof Uint8Array)) {
      if (!t) throw new Po(t);
      if (typeof t != "object") throw new Po(t);
      if (!("BYTES_PER_ELEMENT" in t)) throw new Po(t);
      if (t.BYTES_PER_ELEMENT !== 1 || t.constructor.name !== "Uint8Array") throw new Po(t);
    }
  }
  function EI(t) {
    return t instanceof Uint8Array ? t : typeof t == "string" ? CI(t) : vI(t);
  }
  function vI(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  function CI(t, e = {}) {
    const { size: n } = e;
    let s = t;
    n && (Ug(t, n), s = Bg(t, n));
    let r = s.slice(2);
    r.length % 2 && (r = `0${r}`);
    const i = r.length / 2, o = new Uint8Array(i);
    for (let a = 0, c = 0; a < i; a++) {
      const l = ph(r.charCodeAt(c++)), d = ph(r.charCodeAt(c++));
      if (l === void 0 || d === void 0) throw new Le(`Invalid byte sequence ("${r[c - 2]}${r[c - 1]}" in "${r}").`);
      o[a] = l * 16 + d;
    }
    return o;
  }
  function AI(t, e = {}) {
    const { size: n } = e, s = yI.encode(t);
    return typeof n == "number" ? (iI(s, n), II(s, n)) : s;
  }
  function II(t, e) {
    return oI(t, {
      dir: "right",
      size: e
    });
  }
  function wh(t) {
    return t.length;
  }
  function NI(t) {
    try {
      return bI(t), true;
    } catch {
      return false;
    }
  }
  class Po extends Le {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Ed(e) : e}\` of type \`${typeof e}\` is an invalid Bytes value.`, {
        metaMessages: [
          "Bytes values must be of type `Bytes`."
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.InvalidBytesTypeError"
      });
    }
  }
  class SI extends Le {
    constructor({ givenSize: e, maxSize: n }) {
      super(`Size cannot exceed \`${n}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeOverflowError"
      });
    }
  }
  class _I extends Le {
    constructor({ size: e, targetSize: n, type: s }) {
      super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${n}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeExceedsPaddingSizeError"
      });
    }
  }
  function Mg(t, e = {}) {
    const { as: n = typeof t == "string" ? "Hex" : "Bytes" } = e, s = Mw(EI(t));
    return n === "Bytes" ? s : ga(s);
  }
  class TI extends Map {
    constructor(e) {
      super(), Object.defineProperty(this, "maxSize", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), this.maxSize = e;
    }
    get(e) {
      const n = super.get(e);
      return super.has(e) && n !== void 0 && (this.delete(e), super.set(e, n)), n;
    }
    set(e, n) {
      if (super.set(e, n), this.maxSize && this.size > this.maxSize) {
        const s = this.keys().next().value;
        s && this.delete(s);
      }
      return this;
    }
  }
  const OI = {
    checksum: new TI(8192)
  }, vc = OI.checksum;
  function Fg(t, e = {}) {
    const { compressed: n } = e, { prefix: s, x: r, y: i } = t;
    if (n === false || typeof r == "bigint" && typeof i == "bigint") {
      if (s !== 4) throw new yh({
        prefix: s,
        cause: new UI()
      });
      return;
    }
    if (n === true || typeof r == "bigint" && typeof i > "u") {
      if (s !== 3 && s !== 2) throw new yh({
        prefix: s,
        cause: new $I()
      });
      return;
    }
    throw new RI({
      publicKey: t
    });
  }
  function xI(t) {
    const e = (() => {
      if (pI(t)) return jg(t);
      if (NI(t)) return kI(t);
      const { prefix: n, x: s, y: r } = t;
      return typeof s == "bigint" && typeof r == "bigint" ? {
        prefix: n ?? 4,
        x: s,
        y: r
      } : {
        prefix: n,
        x: s
      };
    })();
    return Fg(e), e;
  }
  function kI(t) {
    return jg(ga(t));
  }
  function jg(t) {
    if (t.length !== 132 && t.length !== 130 && t.length !== 68) throw new DI({
      publicKey: t
    });
    if (t.length === 130) {
      const s = BigInt(Qn(t, 0, 32)), r = BigInt(Qn(t, 32, 64));
      return {
        prefix: 4,
        x: s,
        y: r
      };
    }
    if (t.length === 132) {
      const s = Number(Qn(t, 0, 1)), r = BigInt(Qn(t, 1, 33)), i = BigInt(Qn(t, 33, 65));
      return {
        prefix: s,
        x: r,
        y: i
      };
    }
    const e = Number(Qn(t, 0, 1)), n = BigInt(Qn(t, 1, 33));
    return {
      prefix: e,
      x: n
    };
  }
  function PI(t, e = {}) {
    Fg(t);
    const { prefix: n, x: s, y: r } = t, { includePrefix: i = true } = e;
    return hI(i ? Ec(n, {
      size: 1
    }) : "0x", Ec(s, {
      size: 32
    }), typeof r == "bigint" ? Ec(r, {
      size: 32
    }) : "0x");
  }
  class RI extends Le {
    constructor({ publicKey: e }) {
      super(`Value \`${Ed(e)}\` is not a valid public key.`, {
        metaMessages: [
          "Public key must contain:",
          "- an `x` and `prefix` value (compressed)",
          "- an `x`, `y`, and `prefix` value (uncompressed)"
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidError"
      });
    }
  }
  class yh extends Le {
    constructor({ prefix: e, cause: n }) {
      super(`Prefix "${e}" is invalid.`, {
        cause: n
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidPrefixError"
      });
    }
  }
  class $I extends Le {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidCompressedPrefixError"
      });
    }
  }
  class UI extends Le {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidUncompressedPrefixError"
      });
    }
  }
  let DI = class extends Le {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${Ks(vd(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidSerializedSizeError"
      });
    }
  };
  const BI = /^0x[a-fA-F0-9]{40}$/;
  function qg(t, e = {}) {
    const { strict: n = true } = e;
    if (!BI.test(t)) throw new bh({
      address: t,
      cause: new FI()
    });
    if (n) {
      if (t.toLowerCase() === t) return;
      if (Wg(t) !== t) throw new bh({
        address: t,
        cause: new jI()
      });
    }
  }
  function Wg(t) {
    if (vc.has(t)) return vc.get(t);
    qg(t, {
      strict: false
    });
    const e = t.substring(2).toLowerCase(), n = Mg(AI(e), {
      as: "Bytes"
    }), s = e.split("");
    for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()), (n[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
    const r = `0x${s.join("")}`;
    return vc.set(t, r), r;
  }
  function LI(t, e = {}) {
    const { checksum: n = false } = e;
    return qg(t), n ? Wg(t) : t;
  }
  function MI(t, e = {}) {
    const n = Mg(`0x${PI(t).slice(4)}`).substring(26);
    return LI(`0x${n}`, e);
  }
  class bh extends Le {
    constructor({ address: e, cause: n }) {
      super(`Address "${e}" is invalid.`, {
        cause: n
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidAddressError"
      });
    }
  }
  class FI extends Le {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidInputError"
      });
    }
  }
  class jI extends Le {
    constructor() {
      super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidChecksumError"
      });
    }
  }
  const Dt = BigInt(0), St = BigInt(1), hr = BigInt(2), qI = BigInt(3), Hg = BigInt(4), Vg = BigInt(5), Kg = BigInt(8);
  function Pt(t, e) {
    const n = t % e;
    return n >= Dt ? n : e + n;
  }
  function Xt(t, e, n) {
    let s = t;
    for (; e-- > Dt; ) s *= s, s %= n;
    return s;
  }
  function xl(t, e) {
    if (t === Dt) throw new Error("invert: expected non-zero number");
    if (e <= Dt) throw new Error("invert: expected positive modulus, got " + e);
    let n = Pt(t, e), s = e, r = Dt, i = St;
    for (; n !== Dt; ) {
      const a = s / n, c = s % n, l = r - i * a;
      s = n, n = c, r = i, i = l;
    }
    if (s !== St) throw new Error("invert: does not exist");
    return Pt(r, e);
  }
  function zg(t, e) {
    const n = (t.ORDER + St) / Hg, s = t.pow(e, n);
    if (!t.eql(t.sqr(s), e)) throw new Error("Cannot find square root");
    return s;
  }
  function WI(t, e) {
    const n = (t.ORDER - Vg) / Kg, s = t.mul(e, hr), r = t.pow(s, n), i = t.mul(e, r), o = t.mul(t.mul(i, hr), r), a = t.mul(i, t.sub(o, t.ONE));
    if (!t.eql(t.sqr(a), e)) throw new Error("Cannot find square root");
    return a;
  }
  function HI(t) {
    if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let e = t - St, n = 0;
    for (; e % hr === Dt; ) e /= hr, n++;
    let s = hr;
    const r = Cd(t);
    for (; Eh(r, s) === 1; ) if (s++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (n === 1) return zg;
    let i = r.pow(s, e);
    const o = (e + St) / hr;
    return function(c, l) {
      if (c.is0(l)) return l;
      if (Eh(c, l) !== 1) throw new Error("Cannot find square root");
      let d = n, u = c.mul(c.ONE, i), h = c.pow(l, e), f = c.pow(l, o);
      for (; !c.eql(h, c.ONE); ) {
        if (c.is0(h)) return c.ZERO;
        let g = 1, p = c.sqr(h);
        for (; !c.eql(p, c.ONE); ) if (g++, p = c.sqr(p), g === d) throw new Error("Cannot find square root");
        const m = St << BigInt(d - g - 1), T = c.pow(u, m);
        d = g, u = c.sqr(T), h = c.mul(h, u), f = c.mul(f, T);
      }
      return f;
    };
  }
  function VI(t) {
    return t % Hg === qI ? zg : t % Kg === Vg ? WI : HI(t);
  }
  const KI = [
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
  function zI(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    }, n = KI.reduce((s, r) => (s[r] = "function", s), e);
    return Ma(t, n);
  }
  function GI(t, e, n) {
    if (n < Dt) throw new Error("invalid exponent, negatives unsupported");
    if (n === Dt) return t.ONE;
    if (n === St) return e;
    let s = t.ONE, r = e;
    for (; n > Dt; ) n & St && (s = t.mul(s, r)), r = t.sqr(r), n >>= St;
    return s;
  }
  function Gg(t, e, n = false) {
    const s = new Array(e.length).fill(n ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (s[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (s[c] = t.mul(o, s[c]), t.mul(o, a)), i), s;
  }
  function Eh(t, e) {
    const n = (t.ORDER - St) / hr, s = t.pow(e, n), r = t.eql(s, t.ONE), i = t.eql(s, t.ZERO), o = t.eql(s, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function Yg(t, e) {
    e !== void 0 && Fw(e);
    const n = e !== void 0 ? e : t.toString(2).length, s = Math.ceil(n / 8);
    return {
      nBitLength: n,
      nByteLength: s
    };
  }
  function Cd(t, e, n = false, s = {}) {
    if (t <= Dt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: r, nByteLength: i } = Yg(t, e);
    if (i > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
      ORDER: t,
      isLE: n,
      BITS: r,
      BYTES: i,
      MASK: La(r),
      ZERO: Dt,
      ONE: St,
      create: (c) => Pt(c, t),
      isValid: (c) => {
        if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
        return Dt <= c && c < t;
      },
      is0: (c) => c === Dt,
      isOdd: (c) => (c & St) === St,
      neg: (c) => Pt(-c, t),
      eql: (c, l) => c === l,
      sqr: (c) => Pt(c * c, t),
      add: (c, l) => Pt(c + l, t),
      sub: (c, l) => Pt(c - l, t),
      mul: (c, l) => Pt(c * l, t),
      pow: (c, l) => GI(a, c, l),
      div: (c, l) => Pt(c * xl(l, t), t),
      sqrN: (c) => c * c,
      addN: (c, l) => c + l,
      subN: (c, l) => c - l,
      mulN: (c, l) => c * l,
      inv: (c) => xl(c, t),
      sqrt: s.sqrt || ((c) => (o || (o = VI(t)), o(a, c))),
      toBytes: (c) => n ? $g(c, i) : mo(c, i),
      fromBytes: (c) => {
        if (c.length !== i) throw new Error("Field.fromBytes: expected " + i + " bytes, got " + c.length);
        return n ? Rg(c) : Er(c);
      },
      invertBatch: (c) => Gg(a, c),
      cmov: (c, l, d) => d ? l : c
    });
    return Object.freeze(a);
  }
  function Zg(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function Jg(t) {
    const e = Zg(t);
    return e + Math.ceil(e / 2);
  }
  function YI(t, e, n = false) {
    const s = t.length, r = Zg(e), i = Jg(e);
    if (s < 16 || s < i || s > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + s);
    const o = n ? Rg(t) : Er(t), a = Pt(o, e - St) + St;
    return n ? $g(a, r) : mo(a, r);
  }
  const vh = BigInt(0), kl = BigInt(1);
  function Cc(t, e) {
    const n = e.negate();
    return t ? n : e;
  }
  function Xg(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function Ac(t, e) {
    Xg(t, e);
    const n = Math.ceil(e / t) + 1, s = 2 ** (t - 1), r = 2 ** t, i = La(t), o = BigInt(t);
    return {
      windows: n,
      windowSize: s,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Ch(t, e, n) {
    const { windowSize: s, mask: r, maxNumber: i, shiftBy: o } = n;
    let a = Number(t & r), c = t >> o;
    a > s && (a -= i, c += kl);
    const l = e * s, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: u,
      isNeg: h,
      isNegF: f,
      offsetF: l
    };
  }
  function ZI(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n, s) => {
      if (!(n instanceof e)) throw new Error("invalid point at index " + s);
    });
  }
  function JI(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n, s) => {
      if (!e.isValid(n)) throw new Error("invalid scalar at index " + s);
    });
  }
  const Ic = /* @__PURE__ */ new WeakMap(), Qg = /* @__PURE__ */ new WeakMap();
  function Nc(t) {
    return Qg.get(t) || 1;
  }
  function XI(t, e) {
    return {
      constTimeNegate: Cc,
      hasPrecomputes(n) {
        return Nc(n) !== 1;
      },
      unsafeLadder(n, s, r = t.ZERO) {
        let i = n;
        for (; s > vh; ) s & kl && (r = r.add(i)), i = i.double(), s >>= kl;
        return r;
      },
      precomputeWindow(n, s) {
        const { windows: r, windowSize: i } = Ac(s, e), o = [];
        let a = n, c = a;
        for (let l = 0; l < r; l++) {
          c = a, o.push(c);
          for (let d = 1; d < i; d++) c = c.add(a), o.push(c);
          a = c.double();
        }
        return o;
      },
      wNAF(n, s, r) {
        let i = t.ZERO, o = t.BASE;
        const a = Ac(n, e);
        for (let c = 0; c < a.windows; c++) {
          const { nextN: l, offset: d, isZero: u, isNeg: h, isNegF: f, offsetF: g } = Ch(r, c, a);
          r = l, u ? o = o.add(Cc(f, s[g])) : i = i.add(Cc(h, s[d]));
        }
        return {
          p: i,
          f: o
        };
      },
      wNAFUnsafe(n, s, r, i = t.ZERO) {
        const o = Ac(n, e);
        for (let a = 0; a < o.windows && r !== vh; a++) {
          const { nextN: c, offset: l, isZero: d, isNeg: u } = Ch(r, a, o);
          if (r = c, !d) {
            const h = s[l];
            i = i.add(u ? h.negate() : h);
          }
        }
        return i;
      },
      getPrecomputes(n, s, r) {
        let i = Ic.get(s);
        return i || (i = this.precomputeWindow(s, n), n !== 1 && Ic.set(s, r(i))), i;
      },
      wNAFCached(n, s, r) {
        const i = Nc(n);
        return this.wNAF(i, this.getPrecomputes(i, n, r), s);
      },
      wNAFCachedUnsafe(n, s, r, i) {
        const o = Nc(n);
        return o === 1 ? this.unsafeLadder(n, s, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, n, r), s, i);
      },
      setWindowSize(n, s) {
        Xg(s, e), Qg.set(n, s), Ic.delete(n);
      }
    };
  }
  function QI(t, e, n, s) {
    ZI(n, t), JI(s, e);
    const r = n.length, i = s.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = nI(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = La(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = s[p], T = Number(m >> BigInt(f) & l);
        d[T] = d[T].add(n[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function em(t) {
    return zI(t.Fp), Ma(t, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    }), Object.freeze({
      ...Yg(t.n, t.nBitLength),
      ...t,
      p: t.Fp.ORDER
    });
  }
  function Ah(t) {
    t.lowS !== void 0 && Qi("lowS", t.lowS), t.prehash !== void 0 && Qi("prehash", t.prehash);
  }
  function eN(t) {
    const e = em(t);
    Ma(e, {
      a: "field",
      b: "field"
    }, {
      allowInfinityPoint: "boolean",
      allowedPrivateKeyLengths: "array",
      clearCofactor: "function",
      fromBytes: "function",
      isTorsionFree: "function",
      toBytes: "function",
      wrapPrivateKey: "boolean"
    });
    const { endo: n, Fp: s, a: r } = e;
    if (n) {
      if (!s.eql(r, s.ZERO)) throw new Error("invalid endo: CURVE.a must be 0");
      if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function") throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    }
    return Object.freeze({
      ...e
    });
  }
  class tN extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const ns = {
    Err: tN,
    _tlv: {
      encode: (t, e) => {
        const { Err: n } = ns;
        if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
        if (e.length & 1) throw new n("tlv.encode: unpadded data");
        const s = e.length / 2, r = ko(s);
        if (r.length / 2 & 128) throw new n("tlv.encode: long form length too big");
        const i = s > 127 ? ko(r.length / 2 | 128) : "";
        return ko(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: n } = ns;
        let s = 0;
        if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
        if (e.length < 2 || e[s++] !== t) throw new n("tlv.decode: wrong tlv");
        const r = e[s++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new n("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new n("tlv.decode(long): byte length is too big");
          const l = e.subarray(s, s + c);
          if (l.length !== c) throw new n("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (s += c, o < 128) throw new n("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(s, s + o);
        if (a.length !== o) throw new n("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(s + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = ns;
        if (t < os) throw new e("integer: negative integers are not allowed");
        let n = ko(t);
        if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return n;
      },
      decode(t) {
        const { Err: e } = ns;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Er(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: n, _tlv: s } = ns, r = sn("signature", t), { v: i, l: o } = s.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = s.decode(2, i), { v: l, l: d } = s.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: n.decode(a),
        s: n.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: n } = ns, s = e.encode(2, n.encode(t.r)), r = e.encode(2, n.encode(t.s)), i = s + r;
      return e.encode(48, i);
    }
  };
  function Sc(t, e) {
    return eo(mo(t, e));
  }
  const os = BigInt(0), Je = BigInt(1);
  BigInt(2);
  const _c = BigInt(3), nN = BigInt(4);
  function sN(t) {
    const e = eN(t), { Fp: n } = e, s = Cd(e.n, e.nBitLength), r = e.toBytes || ((A, N, P) => {
      const U = N.toAffine();
      return pa(Uint8Array.from([
        4
      ]), n.toBytes(U.x), n.toBytes(U.y));
    }), i = e.fromBytes || ((A) => {
      const N = A.subarray(1), P = n.fromBytes(N.subarray(0, n.BYTES)), U = n.fromBytes(N.subarray(n.BYTES, 2 * n.BYTES));
      return {
        x: P,
        y: U
      };
    });
    function o(A) {
      const { a: N, b: P } = e, U = n.sqr(A), D = n.mul(U, A);
      return n.add(n.add(D, n.mul(A, N)), P);
    }
    function a(A, N) {
      const P = n.sqr(N), U = o(A);
      return n.eql(P, U);
    }
    if (!a(e.Gx, e.Gy)) throw new Error("bad curve params: generator point");
    const c = n.mul(n.pow(e.a, _c), nN), l = n.mul(n.sqr(e.b), BigInt(27));
    if (n.is0(n.add(c, l))) throw new Error("bad curve params: a or b");
    function d(A) {
      return bd(A, Je, e.n);
    }
    function u(A) {
      const { allowedPrivateKeyLengths: N, nByteLength: P, wrapPrivateKey: U, n: D } = e;
      if (N && typeof A != "bigint") {
        if (go(A) && (A = eo(A)), typeof A != "string" || !N.includes(A.length)) throw new Error("invalid private key");
        A = A.padStart(P * 2, "0");
      }
      let L;
      try {
        L = typeof A == "bigint" ? A : Er(sn("private key", A, P));
      } catch {
        throw new Error("invalid private key, expected hex or " + P + " bytes, got " + typeof A);
      }
      return U && (L = Pt(L, D)), ti("private key", L, Je, D), L;
    }
    function h(A) {
      if (!(A instanceof p)) throw new Error("ProjectivePoint expected");
    }
    const f = fh((A, N) => {
      const { px: P, py: U, pz: D } = A;
      if (n.eql(D, n.ONE)) return {
        x: P,
        y: U
      };
      const L = A.is0();
      N == null && (N = L ? n.ONE : n.inv(D));
      const x = n.mul(P, N), B = n.mul(U, N), M = n.mul(D, N);
      if (L) return {
        x: n.ZERO,
        y: n.ZERO
      };
      if (!n.eql(M, n.ONE)) throw new Error("invZ was invalid");
      return {
        x,
        y: B
      };
    }), g = fh((A) => {
      if (A.is0()) {
        if (e.allowInfinityPoint && !n.is0(A.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: N, y: P } = A.toAffine();
      if (!n.isValid(N) || !n.isValid(P)) throw new Error("bad point: x or y not FE");
      if (!a(N, P)) throw new Error("bad point: equation left != right");
      if (!A.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class p {
      constructor(N, P, U) {
        if (N == null || !n.isValid(N)) throw new Error("x required");
        if (P == null || !n.isValid(P) || n.is0(P)) throw new Error("y required");
        if (U == null || !n.isValid(U)) throw new Error("z required");
        this.px = N, this.py = P, this.pz = U, Object.freeze(this);
      }
      static fromAffine(N) {
        const { x: P, y: U } = N || {};
        if (!N || !n.isValid(P) || !n.isValid(U)) throw new Error("invalid affine point");
        if (N instanceof p) throw new Error("projective point not allowed");
        const D = (L) => n.eql(L, n.ZERO);
        return D(P) && D(U) ? p.ZERO : new p(P, U, n.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(N) {
        const P = Gg(n, N.map((U) => U.pz));
        return N.map((U, D) => U.toAffine(P[D])).map(p.fromAffine);
      }
      static fromHex(N) {
        const P = p.fromAffine(i(sn("pointHex", N)));
        return P.assertValidity(), P;
      }
      static fromPrivateKey(N) {
        return p.BASE.multiply(u(N));
      }
      static msm(N, P) {
        return QI(p, s, N, P);
      }
      _setWindowSize(N) {
        O.setWindowSize(this, N);
      }
      assertValidity() {
        g(this);
      }
      hasEvenY() {
        const { y: N } = this.toAffine();
        if (n.isOdd) return !n.isOdd(N);
        throw new Error("Field doesn't support isOdd");
      }
      equals(N) {
        h(N);
        const { px: P, py: U, pz: D } = this, { px: L, py: x, pz: B } = N, M = n.eql(n.mul(P, B), n.mul(L, D)), _ = n.eql(n.mul(U, B), n.mul(x, D));
        return M && _;
      }
      negate() {
        return new p(this.px, n.neg(this.py), this.pz);
      }
      double() {
        const { a: N, b: P } = e, U = n.mul(P, _c), { px: D, py: L, pz: x } = this;
        let B = n.ZERO, M = n.ZERO, _ = n.ZERO, y = n.mul(D, D), E = n.mul(L, L), w = n.mul(x, x), v = n.mul(D, L);
        return v = n.add(v, v), _ = n.mul(D, x), _ = n.add(_, _), B = n.mul(N, _), M = n.mul(U, w), M = n.add(B, M), B = n.sub(E, M), M = n.add(E, M), M = n.mul(B, M), B = n.mul(v, B), _ = n.mul(U, _), w = n.mul(N, w), v = n.sub(y, w), v = n.mul(N, v), v = n.add(v, _), _ = n.add(y, y), y = n.add(_, y), y = n.add(y, w), y = n.mul(y, v), M = n.add(M, y), w = n.mul(L, x), w = n.add(w, w), y = n.mul(w, v), B = n.sub(B, y), _ = n.mul(w, E), _ = n.add(_, _), _ = n.add(_, _), new p(B, M, _);
      }
      add(N) {
        h(N);
        const { px: P, py: U, pz: D } = this, { px: L, py: x, pz: B } = N;
        let M = n.ZERO, _ = n.ZERO, y = n.ZERO;
        const E = e.a, w = n.mul(e.b, _c);
        let v = n.mul(P, L), I = n.mul(U, x), k = n.mul(D, B), C = n.add(P, U), S = n.add(L, x);
        C = n.mul(C, S), S = n.add(v, I), C = n.sub(C, S), S = n.add(P, D);
        let R = n.add(L, B);
        return S = n.mul(S, R), R = n.add(v, k), S = n.sub(S, R), R = n.add(U, D), M = n.add(x, B), R = n.mul(R, M), M = n.add(I, k), R = n.sub(R, M), y = n.mul(E, S), M = n.mul(w, k), y = n.add(M, y), M = n.sub(I, y), y = n.add(I, y), _ = n.mul(M, y), I = n.add(v, v), I = n.add(I, v), k = n.mul(E, k), S = n.mul(w, S), I = n.add(I, k), k = n.sub(v, k), k = n.mul(E, k), S = n.add(S, k), v = n.mul(I, S), _ = n.add(_, v), v = n.mul(R, S), M = n.mul(C, M), M = n.sub(M, v), v = n.mul(C, I), y = n.mul(R, y), y = n.add(y, v), new p(M, _, y);
      }
      subtract(N) {
        return this.add(N.negate());
      }
      is0() {
        return this.equals(p.ZERO);
      }
      wNAF(N) {
        return O.wNAFCached(this, N, p.normalizeZ);
      }
      multiplyUnsafe(N) {
        const { endo: P, n: U } = e;
        ti("scalar", N, os, U);
        const D = p.ZERO;
        if (N === os) return D;
        if (this.is0() || N === Je) return this;
        if (!P || O.hasPrecomputes(this)) return O.wNAFCachedUnsafe(this, N, p.normalizeZ);
        let { k1neg: L, k1: x, k2neg: B, k2: M } = P.splitScalar(N), _ = D, y = D, E = this;
        for (; x > os || M > os; ) x & Je && (_ = _.add(E)), M & Je && (y = y.add(E)), E = E.double(), x >>= Je, M >>= Je;
        return L && (_ = _.negate()), B && (y = y.negate()), y = new p(n.mul(y.px, P.beta), y.py, y.pz), _.add(y);
      }
      multiply(N) {
        const { endo: P, n: U } = e;
        ti("scalar", N, Je, U);
        let D, L;
        if (P) {
          const { k1neg: x, k1: B, k2neg: M, k2: _ } = P.splitScalar(N);
          let { p: y, f: E } = this.wNAF(B), { p: w, f: v } = this.wNAF(_);
          y = O.constTimeNegate(x, y), w = O.constTimeNegate(M, w), w = new p(n.mul(w.px, P.beta), w.py, w.pz), D = y.add(w), L = E.add(v);
        } else {
          const { p: x, f: B } = this.wNAF(N);
          D = x, L = B;
        }
        return p.normalizeZ([
          D,
          L
        ])[0];
      }
      multiplyAndAddUnsafe(N, P, U) {
        const D = p.BASE, L = (B, M) => M === os || M === Je || !B.equals(D) ? B.multiplyUnsafe(M) : B.multiply(M), x = L(this, P).add(L(N, U));
        return x.is0() ? void 0 : x;
      }
      toAffine(N) {
        return f(this, N);
      }
      isTorsionFree() {
        const { h: N, isTorsionFree: P } = e;
        if (N === Je) return true;
        if (P) return P(p, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: N, clearCofactor: P } = e;
        return N === Je ? this : P ? P(p, this) : this.multiplyUnsafe(e.h);
      }
      toRawBytes(N = true) {
        return Qi("isCompressed", N), this.assertValidity(), r(p, this, N);
      }
      toHex(N = true) {
        return Qi("isCompressed", N), eo(this.toRawBytes(N));
      }
    }
    p.BASE = new p(e.Gx, e.Gy, n.ONE), p.ZERO = new p(n.ZERO, n.ONE, n.ZERO);
    const { endo: m, nBitLength: T } = e, O = XI(p, m ? Math.ceil(T / 2) : T);
    return {
      CURVE: e,
      ProjectivePoint: p,
      normPrivateKeyToScalar: u,
      weierstrassEquation: o,
      isWithinCurveOrder: d
    };
  }
  function rN(t) {
    const e = em(t);
    return Ma(e, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    }), Object.freeze({
      lowS: true,
      ...e
    });
  }
  function iN(t) {
    const e = rN(t), { Fp: n, n: s, nByteLength: r, nBitLength: i } = e, o = n.BYTES + 1, a = 2 * n.BYTES + 1;
    function c(w) {
      return Pt(w, s);
    }
    function l(w) {
      return xl(w, s);
    }
    const { ProjectivePoint: d, normPrivateKeyToScalar: u, weierstrassEquation: h, isWithinCurveOrder: f } = sN({
      ...e,
      toBytes(w, v, I) {
        const k = v.toAffine(), C = n.toBytes(k.x), S = pa;
        return Qi("isCompressed", I), I ? S(Uint8Array.from([
          v.hasEvenY() ? 2 : 3
        ]), C) : S(Uint8Array.from([
          4
        ]), C, n.toBytes(k.y));
      },
      fromBytes(w) {
        const v = w.length, I = w[0], k = w.subarray(1);
        if (v === o && (I === 2 || I === 3)) {
          const C = Er(k);
          if (!bd(C, Je, n.ORDER)) throw new Error("Point is not on curve");
          const S = h(C);
          let R;
          try {
            R = n.sqrt(S);
          } catch (z) {
            const q = z instanceof Error ? ": " + z.message : "";
            throw new Error("Point is not on curve" + q);
          }
          const $ = (R & Je) === Je;
          return (I & 1) === 1 !== $ && (R = n.neg(R)), {
            x: C,
            y: R
          };
        } else if (v === a && I === 4) {
          const C = n.fromBytes(k.subarray(0, n.BYTES)), S = n.fromBytes(k.subarray(n.BYTES, 2 * n.BYTES));
          return {
            x: C,
            y: S
          };
        } else {
          const C = o, S = a;
          throw new Error("invalid Point, expected length of " + C + ", or uncompressed " + S + ", got " + v);
        }
      }
    });
    function g(w) {
      const v = s >> Je;
      return w > v;
    }
    function p(w) {
      return g(w) ? c(-w) : w;
    }
    const m = (w, v, I) => Er(w.slice(v, I));
    class T {
      constructor(v, I, k) {
        ti("r", v, Je, s), ti("s", I, Je, s), this.r = v, this.s = I, k != null && (this.recovery = k), Object.freeze(this);
      }
      static fromCompact(v) {
        const I = r;
        return v = sn("compactSignature", v, I * 2), new T(m(v, 0, I), m(v, I, 2 * I));
      }
      static fromDER(v) {
        const { r: I, s: k } = ns.toSig(sn("DER", v));
        return new T(I, k);
      }
      assertValidity() {
      }
      addRecoveryBit(v) {
        return new T(this.r, this.s, v);
      }
      recoverPublicKey(v) {
        const { r: I, s: k, recovery: C } = this, S = D(sn("msgHash", v));
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        const R = C === 2 || C === 3 ? I + e.n : I;
        if (R >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const $ = (C & 1) === 0 ? "02" : "03", Y = d.fromHex($ + Sc(R, n.BYTES)), z = l(R), q = c(-S * z), J = c(k * z), Z = d.BASE.multiplyAndAddUnsafe(Y, q, J);
        if (!Z) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return g(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new T(this.r, c(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return fa(this.toDERHex());
      }
      toDERHex() {
        return ns.hexFromSig(this);
      }
      toCompactRawBytes() {
        return fa(this.toCompactHex());
      }
      toCompactHex() {
        const v = r;
        return Sc(this.r, v) + Sc(this.s, v);
      }
    }
    const O = {
      isValidPrivateKey(w) {
        try {
          return u(w), true;
        } catch {
          return false;
        }
      },
      normPrivateKeyToScalar: u,
      randomPrivateKey: () => {
        const w = Jg(e.n);
        return YI(e.randomBytes(w), e.n);
      },
      precompute(w = 8, v = d.BASE) {
        return v._setWindowSize(w), v.multiply(BigInt(3)), v;
      }
    };
    function A(w, v = true) {
      return d.fromPrivateKey(w).toRawBytes(v);
    }
    function N(w) {
      if (typeof w == "bigint") return false;
      if (w instanceof d) return true;
      const I = sn("key", w).length, k = n.BYTES, C = k + 1, S = 2 * k + 1;
      if (!(e.allowedPrivateKeyLengths || r === C)) return I === C || I === S;
    }
    function P(w, v, I = true) {
      if (N(w) === true) throw new Error("first arg must be private key");
      if (N(v) === false) throw new Error("second arg must be public key");
      return d.fromHex(v).multiply(u(w)).toRawBytes(I);
    }
    const U = e.bits2int || function(w) {
      if (w.length > 8192) throw new Error("input is too large");
      const v = Er(w), I = w.length * 8 - i;
      return I > 0 ? v >> BigInt(I) : v;
    }, D = e.bits2int_modN || function(w) {
      return c(U(w));
    }, L = La(i);
    function x(w) {
      return ti("num < 2^" + i, w, os, L), mo(w, r);
    }
    function B(w, v, I = M) {
      if ([
        "recovered",
        "canonical"
      ].some((X) => X in I)) throw new Error("sign() legacy options not supported");
      const { hash: k, randomBytes: C } = e;
      let { lowS: S, prehash: R, extraEntropy: $ } = I;
      S == null && (S = true), w = sn("msgHash", w), Ah(I), R && (w = sn("prehashed msgHash", k(w)));
      const Y = D(w), z = u(v), q = [
        x(z),
        x(Y)
      ];
      if ($ != null && $ !== false) {
        const X = $ === true ? C(n.BYTES) : $;
        q.push(sn("extraEntropy", X));
      }
      const J = pa(...q), Z = Y;
      function de(X) {
        const ue = U(X);
        if (!f(ue)) return;
        const Me = l(ue), qe = d.BASE.multiply(ue).toAffine(), je = c(qe.x);
        if (je === os) return;
        const bt = c(Me * c(Z + je * z));
        if (bt === os) return;
        let fs = (qe.x === je ? 0 : 2) | Number(qe.y & Je), Vd = bt;
        return S && g(bt) && (Vd = p(bt), fs ^= 1), new T(je, Vd, fs);
      }
      return {
        seed: J,
        k2sig: de
      };
    }
    const M = {
      lowS: e.lowS,
      prehash: false
    }, _ = {
      lowS: e.lowS,
      prehash: false
    };
    function y(w, v, I = M) {
      const { seed: k, k2sig: C } = B(w, v, I), S = e;
      return sI(S.hash.outputLen, S.nByteLength, S.hmac)(k, C);
    }
    d.BASE._setWindowSize(8);
    function E(w, v, I, k = _) {
      var _a2;
      const C = w;
      v = sn("msgHash", v), I = sn("publicKey", I);
      const { lowS: S, prehash: R, format: $ } = k;
      if (Ah(k), "strict" in k) throw new Error("options.strict was renamed to lowS");
      if ($ !== void 0 && $ !== "compact" && $ !== "der") throw new Error("format must be compact or der");
      const Y = typeof C == "string" || go(C), z = !Y && !$ && typeof C == "object" && C !== null && typeof C.r == "bigint" && typeof C.s == "bigint";
      if (!Y && !z) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      let q, J;
      try {
        if (z && (q = new T(C.r, C.s)), Y) {
          try {
            $ !== "compact" && (q = T.fromDER(C));
          } catch (fs) {
            if (!(fs instanceof ns.Err)) throw fs;
          }
          !q && $ !== "der" && (q = T.fromCompact(C));
        }
        J = d.fromHex(I);
      } catch {
        return false;
      }
      if (!q || S && q.hasHighS()) return false;
      R && (v = e.hash(v));
      const { r: Z, s: de } = q, X = D(v), ue = l(de), Me = c(X * ue), qe = c(Z * ue), je = (_a2 = d.BASE.multiplyAndAddUnsafe(J, Me, qe)) == null ? void 0 : _a2.toAffine();
      return je ? c(je.x) === Z : false;
    }
    return {
      CURVE: e,
      getPublicKey: A,
      getSharedSecret: P,
      sign: y,
      verify: E,
      ProjectivePoint: d,
      Signature: T,
      utils: O
    };
  }
  function oN(t) {
    return {
      hash: t,
      hmac: (e, ...n) => qw(t, e, Ww(...n)),
      randomBytes: jw
    };
  }
  function aN(t, e) {
    const n = (s) => iN({
      ...t,
      ...oN(s)
    });
    return {
      ...n(e),
      create: n
    };
  }
  const tm = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Ih = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), cN = BigInt(0), lN = BigInt(1), Pl = BigInt(2), Nh = (t, e) => (t + e / Pl) / e;
  function dN(t) {
    const e = tm, n = BigInt(3), s = BigInt(6), r = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), l = t * t * t % e, d = l * l * t % e, u = Xt(d, n, e) * d % e, h = Xt(u, n, e) * d % e, f = Xt(h, Pl, e) * l % e, g = Xt(f, r, e) * f % e, p = Xt(g, i, e) * g % e, m = Xt(p, a, e) * p % e, T = Xt(m, c, e) * m % e, O = Xt(T, a, e) * p % e, A = Xt(O, n, e) * d % e, N = Xt(A, o, e) * g % e, P = Xt(N, s, e) * l % e, U = Xt(P, Pl, e);
    if (!Rl.eql(Rl.sqr(U), t)) throw new Error("Cannot find square root");
    return U;
  }
  const Rl = Cd(tm, void 0, void 0, {
    sqrt: dN
  }), uN = aN({
    a: cN,
    b: BigInt(7),
    Fp: Rl,
    n: Ih,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (t) => {
        const e = Ih, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), s = -lN * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = n, o = BigInt("0x100000000000000000000000000000000"), a = Nh(i * t, e), c = Nh(-s * t, e);
        let l = Pt(t - a * n - c * r, e), d = Pt(-a * s - c * i, e);
        const u = l > o, h = d > o;
        if (u && (l = e - l), h && (d = e - d), l > o || d > o) throw new Error("splitScalar: Endomorphism failed, k=" + t);
        return {
          k1neg: u,
          k1: l,
          k2neg: h,
          k2: d
        };
      }
    }
  }, Hw);
  function hN(t) {
    if (t.length !== 130 && t.length !== 132) throw new pN({
      signature: t
    });
    const e = BigInt(Qn(t, 0, 32)), n = BigInt(Qn(t, 32, 64)), s = (() => {
      const r = +`0x${t.slice(130)}`;
      if (!Number.isNaN(r)) try {
        return fN(r);
      } catch {
        throw new gN({
          value: r
        });
      }
    })();
    return typeof s > "u" ? {
      r: e,
      s: n
    } : {
      r: e,
      s: n,
      yParity: s
    };
  }
  function fN(t) {
    if (t === 0 || t === 27) return 0;
    if (t === 1 || t === 28) return 1;
    if (t >= 35) return t % 2 === 0 ? 1 : 0;
    throw new mN({
      value: t
    });
  }
  class pN extends Le {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${Ks(vd(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidSerializedSizeError"
      });
    }
  }
  class gN extends Le {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidYParityError"
      });
    }
  }
  class mN extends Le {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidVError"
      });
    }
  }
  function wN(t) {
    return MI(yN(t));
  }
  function yN(t) {
    const { payload: e, signature: n } = t, { r: s, s: r, yParity: i } = n, a = new uN.Signature(BigInt(s), BigInt(r)).addRecoveryBit(i).recoverPublicKey(vd(e).substring(2));
    return xI(a);
  }
  function bN(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), u = d.charCodeAt(0);
      if (e[u] !== 255) throw new TypeError(d + " is ambiguous");
      e[u] = l;
    }
    const n = t.length, s = t.charAt(0), r = Math.log(n) / Math.log(256), i = Math.log(256) / Math.log(n);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, u = 0, h = 0;
      const f = l.length;
      for (; h !== f && l[h] === 0; ) h++, d++;
      const g = (f - h) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; h !== f; ) {
        let O = l[h], A = 0;
        for (let N = g - 1; (O !== 0 || A < u) && N !== -1; N--, A++) O += 256 * p[N] >>> 0, p[N] = O % n >>> 0, O = O / n >>> 0;
        if (O !== 0) throw new Error("Non-zero carry");
        u = A, h++;
      }
      let m = g - u;
      for (; m !== g && p[m] === 0; ) m++;
      let T = s.repeat(d);
      for (; m < g; ++m) T += t.charAt(p[m]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === s; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const O = l.charCodeAt(d);
        if (O > 255) return;
        let A = e[O];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < h) && P !== -1; P--, N++) A += n * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        h = N, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(u + (f - p));
      let T = u;
      for (; p !== f; ) m[T++] = g[p++];
      return m;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + n + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var EN = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const wo = bN(EN);
  var vN = {};
  const CN = ":";
  function ls(t) {
    const [e, n] = t.split(CN);
    return {
      namespace: e,
      reference: n
    };
  }
  function nm(t, e) {
    return t.includes(":") ? [
      t
    ] : e.chains || [];
  }
  var AN = Object.defineProperty, IN = Object.defineProperties, NN = Object.getOwnPropertyDescriptors, Sh = Object.getOwnPropertySymbols, SN = Object.prototype.hasOwnProperty, _N = Object.prototype.propertyIsEnumerable, $l = (t, e, n) => e in t ? AN(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, _h = (t, e) => {
    for (var n in e || (e = {})) SN.call(e, n) && $l(t, n, e[n]);
    if (Sh) for (var n of Sh(e)) _N.call(e, n) && $l(t, n, e[n]);
    return t;
  }, TN = (t, e) => IN(t, NN(e)), Th = (t, e, n) => $l(t, typeof e != "symbol" ? e + "" : e, n);
  const ON = "ReactNative", Yr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  };
  function sm() {
    return typeof an < "u" && typeof an.versions < "u" && typeof an.versions.node < "u";
  }
  function rm() {
    return !zt.getDocument() && !!zt.getNavigator() && navigator.product === ON;
  }
  function im() {
    return !sm() && !!zt.getNavigator() && !!zt.getDocument();
  }
  function xN() {
    return rm() ? Yr.reactNative : sm() ? Yr.node : im() ? Yr.browser : Yr.unknown;
  }
  function kN(t) {
    var e, n;
    const s = PN();
    try {
      return t != null && t.url && s.url && new URL(t.url).host !== new URL(s.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${s.url}. This is probably unintended and can lead to issues.`), t.url = s.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((r) => r !== "")), TN(_h(_h({}, s), t), {
        url: (t == null ? void 0 : t.url) || s.url,
        name: (t == null ? void 0 : t.name) || s.name,
        description: (t == null ? void 0 : t.description) || s.description,
        icons: (n = t == null ? void 0 : t.icons) != null && n.length && t.icons.length > 0 ? t.icons : s.icons
      });
    } catch (r) {
      return console.warn("Error populating app metadata", r), t || s;
    }
  }
  function PN() {
    return Zf.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function fr(t, e) {
    return t.filter((n) => e.includes(n)).length === t.length;
  }
  function Fr(t = K.FIVE_MINUTES, e) {
    const n = K.toMiliseconds(t || K.FIVE_MINUTES);
    let s, r, i, o;
    return {
      resolve: (a) => {
        i && s && (clearTimeout(i), s(a), o = Promise.resolve(a));
      },
      reject: (a) => {
        i && r && (clearTimeout(i), r(a));
      },
      done: () => new Promise((a, c) => {
        if (o) return a(o);
        i = setTimeout(() => {
          const l = new Error(e);
          o = Promise.reject(l), c(l);
        }, n), s = a, r = c;
      })
    };
  }
  function RN(t) {
    const [e, n] = t.split(":"), s = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof n == "string") s.topic = n;
    else if (e === "id" && Number.isInteger(Number(n))) s.id = Number(n);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);
    return s;
  }
  function Ct(t, e) {
    return K.fromMiliseconds(Date.now() + K.toMiliseconds(t));
  }
  function Ps(t) {
    return Date.now() >= K.toMiliseconds(t);
  }
  function Re(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Mn(t = [], e = []) {
    return [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ];
  }
  async function $N({ id: t, topic: e, wcDeepLink: n }) {
    var s;
    try {
      if (!n) return;
      const r = typeof n == "string" ? JSON.parse(n) : n, i = r == null ? void 0 : r.href;
      if (typeof i != "string") return;
      const o = UN(i, t, e), a = xN();
      if (a === Yr.browser) {
        if (!((s = zt.getDocument()) != null && s.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        DN(o);
      } else a === Yr.reactNative && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u" && await globalThis.Linking.openURL(o);
    } catch (r) {
      console.error(r);
    }
  }
  function UN(t, e, n) {
    const s = `requestId=${e}&sessionTopic=${n}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let r = `${t}`;
    if (t.startsWith("https://t.me")) {
      const i = t.includes("?") ? "&startapp=" : "?startapp=";
      r = `${r}${i}${jN(s, true)}`;
    } else r = `${r}/wc?${s}`;
    return r;
  }
  function DN(t) {
    let e = "_self";
    FN() ? e = "_top" : (MN() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
  }
  async function BN(t, e) {
    let n = "";
    try {
      if (im() && (n = localStorage.getItem(e), n)) return n;
      n = await t.getItem(e);
    } catch (s) {
      console.error(s);
    }
    return n;
  }
  function Oh(t, e) {
    if (!t.includes(e)) return null;
    const n = t.split(/([&,?,=])/), s = n.indexOf(e);
    return n[s + 2];
  }
  function LN() {
    return typeof an < "u" && vN.IS_VITEST === "true";
  }
  function MN() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
  }
  function FN() {
    try {
      return window.self !== window.top;
    } catch {
      return false;
    }
  }
  function jN(t, e = false) {
    const n = Ae.from(t).toString("base64");
    return e ? n.replace(/[=]/g, "") : n;
  }
  class qN {
    constructor({ limit: e }) {
      Th(this, "limit"), Th(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
    }
    add(e) {
      if (!this.set.has(e)) {
        if (this.set.size >= this.limit) {
          const n = this.set.values().next().value;
          n && this.set.delete(n);
        }
        this.set.add(e);
      }
    }
    has(e) {
      return this.set.has(e);
    }
  }
  const Ro = BigInt(2 ** 32 - 1), xh = BigInt(32);
  function om(t, e = false) {
    return e ? {
      h: Number(t & Ro),
      l: Number(t >> xh & Ro)
    } : {
      h: Number(t >> xh & Ro) | 0,
      l: Number(t & Ro) | 0
    };
  }
  function am(t, e = false) {
    const n = t.length;
    let s = new Uint32Array(n), r = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
      const { h: o, l: a } = om(t[i], e);
      [s[i], r[i]] = [
        o,
        a
      ];
    }
    return [
      s,
      r
    ];
  }
  const kh = (t, e, n) => t >>> n, Ph = (t, e, n) => t << 32 - n | e >>> n, Rs = (t, e, n) => t >>> n | e << 32 - n, $s = (t, e, n) => t << 32 - n | e >>> n, Bi = (t, e, n) => t << 64 - n | e >>> n - 32, Li = (t, e, n) => t >>> n - 32 | e << 64 - n, WN = (t, e) => e, HN = (t, e) => t, VN = (t, e, n) => t << n | e >>> 32 - n, KN = (t, e, n) => e << n | t >>> 32 - n, zN = (t, e, n) => e << n - 32 | t >>> 64 - n, GN = (t, e, n) => t << n - 32 | e >>> 64 - n;
  function wn(t, e, n, s) {
    const r = (e >>> 0) + (s >>> 0);
    return {
      h: t + n + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const Ad = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), Id = (t, e, n, s) => e + n + s + (t / 2 ** 32 | 0) | 0, YN = (t, e, n, s) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0), ZN = (t, e, n, s, r) => e + n + s + r + (t / 2 ** 32 | 0) | 0, JN = (t, e, n, s, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0) + (r >>> 0), XN = (t, e, n, s, r, i) => e + n + s + r + i + (t / 2 ** 32 | 0) | 0, jr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Fa(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function zs(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Nn(t, ...e) {
    if (!Fa(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function cm(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    zs(t.outputLen), zs(t.blockLen);
  }
  function Gs(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Nd(t, e) {
    Nn(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
  }
  function to(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function Sn(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function Tc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function xn(t, e) {
    return t << 32 - e | t >>> e;
  }
  const lm = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function dm(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Zn = lm ? (t) => t : (t) => dm(t);
  function QN(t) {
    for (let e = 0; e < t.length; e++) t[e] = dm(t[e]);
    return t;
  }
  const Us = lm ? (t) => t : QN, um = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", e2 = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ni(t) {
    if (Nn(t), um) return t.toHex();
    let e = "";
    for (let n = 0; n < t.length; n++) e += e2[t[n]];
    return e;
  }
  const Kn = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Rh(t) {
    if (t >= Kn._0 && t <= Kn._9) return t - Kn._0;
    if (t >= Kn.A && t <= Kn.F) return t - (Kn.A - 10);
    if (t >= Kn.a && t <= Kn.f) return t - (Kn.a - 10);
  }
  function ma(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (um) return Uint8Array.fromHex(t);
    const e = t.length, n = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const s = new Uint8Array(n);
    for (let r = 0, i = 0; r < n; r++, i += 2) {
      const o = Rh(t.charCodeAt(i)), a = Rh(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      s[r] = o * 16 + a;
    }
    return s;
  }
  function hm(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function ds(t) {
    return typeof t == "string" && (t = hm(t)), Nn(t), t;
  }
  function Bs(...t) {
    let e = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Nn(r), e += r.length;
    }
    const n = new Uint8Array(e);
    for (let s = 0, r = 0; s < t.length; s++) {
      const i = t[s];
      n.set(i, r), r += i.length;
    }
    return n;
  }
  let ja = class {
  };
  function yo(t) {
    const e = (s) => t().update(ds(s)).digest(), n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
  }
  function t2(t) {
    const e = (s, r) => t(r).update(ds(s)).digest(), n = t({});
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (s) => t(s), e;
  }
  function Sd(t = 32) {
    if (jr && typeof jr.getRandomValues == "function") return jr.getRandomValues(new Uint8Array(t));
    if (jr && typeof jr.randomBytes == "function") return Uint8Array.from(jr.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const n2 = BigInt(0), Ni = BigInt(1), s2 = BigInt(2), r2 = BigInt(7), i2 = BigInt(256), o2 = BigInt(113), fm = [], pm = [], gm = [];
  for (let t = 0, e = Ni, n = 1, s = 0; t < 24; t++) {
    [n, s] = [
      s,
      (2 * n + 3 * s) % 5
    ], fm.push(2 * (5 * s + n)), pm.push((t + 1) * (t + 2) / 2 % 64);
    let r = n2;
    for (let i = 0; i < 7; i++) e = (e << Ni ^ (e >> r2) * o2) % i2, e & s2 && (r ^= Ni << (Ni << BigInt(i)) - Ni);
    gm.push(r);
  }
  const mm = am(gm, true), a2 = mm[0], c2 = mm[1], $h = (t, e, n) => n > 32 ? zN(t, e, n) : VN(t, e, n), Uh = (t, e, n) => n > 32 ? GN(t, e, n) : KN(t, e, n);
  function l2(t, e = 24) {
    const n = new Uint32Array(10);
    for (let s = 24 - e; s < 24; s++) {
      for (let o = 0; o < 10; o++) n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = n[c], d = n[c + 1], u = $h(l, d, 1) ^ n[a], h = Uh(l, d, 1) ^ n[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= h;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = pm[o], c = $h(r, i, a), l = Uh(r, i, a), d = fm[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) n[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
      }
      t[0] ^= a2[s], t[1] ^= c2[s];
    }
    Sn(n);
  }
  class _d extends ja {
    constructor(e, n, s, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = n, this.outputLen = s, this.enableXOF = r, this.rounds = i, zs(s), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = to(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Us(this.state32), l2(this.state32, this.rounds), Us(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      Gs(this), e = ds(e), Nn(e);
      const { blockLen: n, state: s } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(n - this.pos, r - i);
        for (let a = 0; a < o; a++) s[this.pos++] ^= e[i++];
        this.pos === n && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: n, pos: s, blockLen: r } = this;
      e[s] ^= n, (n & 128) !== 0 && s === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      Gs(this, false), Nn(e), this.finish();
      const n = this.state, { blockLen: s } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= s && this.keccak();
        const o = Math.min(s - this.posOut, i - r);
        e.set(n.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return zs(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Nd(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, Sn(this.state);
    }
    _cloneInto(e) {
      const { blockLen: n, suffix: s, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new _d(n, s, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = s, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  }
  const d2 = (t, e, n) => yo(() => new _d(e, t, n)), u2 = d2(1, 136, 256 / 8);
  function h2(t, e, n, s) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, s);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(n >> r & i), a = Number(n & i), c = s ? 4 : 0, l = s ? 0 : 4;
    t.setUint32(e + c, o, s), t.setUint32(e + l, a, s);
  }
  function f2(t, e, n) {
    return t & e ^ ~t & n;
  }
  function p2(t, e, n) {
    return t & e ^ t & n ^ e & n;
  }
  class wm extends ja {
    constructor(e, n, s, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = n, this.padOffset = s, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Tc(this.buffer);
    }
    update(e) {
      Gs(this), e = ds(e), Nn(e);
      const { view: n, buffer: s, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = Tc(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        s.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(n, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      Gs(this), Nd(e, this), this.finished = true;
      const { buffer: n, view: s, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      n[o++] = 128, Sn(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(s, 0), o = 0);
      for (let u = o; u < r; u++) n[u] = 0;
      h2(s, r - 8, BigInt(this.length * 8), i), this.process(s, 0);
      const a = Tc(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let u = 0; u < l; u++) a.setUint32(4 * u, d[u], i);
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const s = e.slice(0, n);
      return this.destroy(), s;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: n, buffer: s, length: r, finished: i, destroyed: o, pos: a } = this;
      return e.destroyed = o, e.finished = i, e.length = r, e.pos = a, r % n && e.buffer.set(s), e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  const Cs = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), ft = Uint32Array.from([
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
  ]), pt = Uint32Array.from([
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
  ]), g2 = Uint32Array.from([
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
  ]), As = new Uint32Array(64);
  class m2 extends wm {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = Cs[0] | 0, this.B = Cs[1] | 0, this.C = Cs[2] | 0, this.D = Cs[3] | 0, this.E = Cs[4] | 0, this.F = Cs[5] | 0, this.G = Cs[6] | 0, this.H = Cs[7] | 0;
    }
    get() {
      const { A: e, B: n, C: s, D: r, E: i, F: o, G: a, H: c } = this;
      return [
        e,
        n,
        s,
        r,
        i,
        o,
        a,
        c
      ];
    }
    set(e, n, s, r, i, o, a, c) {
      this.A = e | 0, this.B = n | 0, this.C = s | 0, this.D = r | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(e, n) {
      for (let u = 0; u < 16; u++, n += 4) As[u] = e.getUint32(n, false);
      for (let u = 16; u < 64; u++) {
        const h = As[u - 15], f = As[u - 2], g = xn(h, 7) ^ xn(h, 18) ^ h >>> 3, p = xn(f, 17) ^ xn(f, 19) ^ f >>> 10;
        As[u] = p + As[u - 7] + g + As[u - 16] | 0;
      }
      let { A: s, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let u = 0; u < 64; u++) {
        const h = xn(a, 6) ^ xn(a, 11) ^ xn(a, 25), f = d + h + f2(a, c, l) + g2[u] + As[u] | 0, g = (xn(s, 2) ^ xn(s, 13) ^ xn(s, 22)) + p2(s, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = s, s = f + g | 0;
      }
      s = s + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(s, r, i, o, a, c, l, d);
    }
    roundClean() {
      Sn(As);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Sn(this.buffer);
    }
  }
  const ym = am([
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
  ].map((t) => BigInt(t))), w2 = ym[0], y2 = ym[1], Is = new Uint32Array(80), Ns = new Uint32Array(80);
  class Td extends wm {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = pt[0] | 0, this.Al = pt[1] | 0, this.Bh = pt[2] | 0, this.Bl = pt[3] | 0, this.Ch = pt[4] | 0, this.Cl = pt[5] | 0, this.Dh = pt[6] | 0, this.Dl = pt[7] | 0, this.Eh = pt[8] | 0, this.El = pt[9] | 0, this.Fh = pt[10] | 0, this.Fl = pt[11] | 0, this.Gh = pt[12] | 0, this.Gl = pt[13] | 0, this.Hh = pt[14] | 0, this.Hl = pt[15] | 0;
    }
    get() {
      const { Ah: e, Al: n, Bh: s, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: u, Fl: h, Gh: f, Gl: g, Hh: p, Hl: m } = this;
      return [
        e,
        n,
        s,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, n, s, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.Ah = e | 0, this.Al = n | 0, this.Bh = s | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = u | 0, this.Fl = h | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = m | 0;
    }
    process(e, n) {
      for (let A = 0; A < 16; A++, n += 4) Is[A] = e.getUint32(n), Ns[A] = e.getUint32(n += 4);
      for (let A = 16; A < 80; A++) {
        const N = Is[A - 15] | 0, P = Ns[A - 15] | 0, U = Rs(N, P, 1) ^ Rs(N, P, 8) ^ kh(N, P, 7), D = $s(N, P, 1) ^ $s(N, P, 8) ^ Ph(N, P, 7), L = Is[A - 2] | 0, x = Ns[A - 2] | 0, B = Rs(L, x, 19) ^ Bi(L, x, 61) ^ kh(L, x, 6), M = $s(L, x, 19) ^ Li(L, x, 61) ^ Ph(L, x, 6), _ = YN(D, M, Ns[A - 7], Ns[A - 16]), y = ZN(_, U, B, Is[A - 7], Is[A - 16]);
        Is[A] = y | 0, Ns[A] = _ | 0;
      }
      let { Ah: s, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: u, El: h, Fh: f, Fl: g, Gh: p, Gl: m, Hh: T, Hl: O } = this;
      for (let A = 0; A < 80; A++) {
        const N = Rs(u, h, 14) ^ Rs(u, h, 18) ^ Bi(u, h, 41), P = $s(u, h, 14) ^ $s(u, h, 18) ^ Li(u, h, 41), U = u & f ^ ~u & p, D = h & g ^ ~h & m, L = JN(O, P, D, y2[A], Ns[A]), x = XN(L, T, N, U, w2[A], Is[A]), B = L | 0, M = Rs(s, r, 28) ^ Bi(s, r, 34) ^ Bi(s, r, 39), _ = $s(s, r, 28) ^ Li(s, r, 34) ^ Li(s, r, 39), y = s & i ^ s & a ^ i & a, E = r & o ^ r & c ^ o & c;
        T = p | 0, O = m | 0, p = f | 0, m = g | 0, f = u | 0, g = h | 0, { h: u, l: h } = wn(l | 0, d | 0, x | 0, B | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = s | 0, o = r | 0;
        const w = Ad(B, _, E);
        s = Id(w, x, M, y), r = w | 0;
      }
      ({ h: s, l: r } = wn(this.Ah | 0, this.Al | 0, s | 0, r | 0)), { h: i, l: o } = wn(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = wn(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = wn(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h: u, l: h } = wn(this.Eh | 0, this.El | 0, u | 0, h | 0), { h: f, l: g } = wn(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: m } = wn(this.Gh | 0, this.Gl | 0, p | 0, m | 0), { h: T, l: O } = wn(this.Hh | 0, this.Hl | 0, T | 0, O | 0), this.set(s, r, i, o, a, c, l, d, u, h, f, g, p, m, T, O);
    }
    roundClean() {
      Sn(Is, Ns);
    }
    destroy() {
      Sn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  class b2 extends Td {
    constructor() {
      super(48), this.Ah = ft[0] | 0, this.Al = ft[1] | 0, this.Bh = ft[2] | 0, this.Bl = ft[3] | 0, this.Ch = ft[4] | 0, this.Cl = ft[5] | 0, this.Dh = ft[6] | 0, this.Dl = ft[7] | 0, this.Eh = ft[8] | 0, this.El = ft[9] | 0, this.Fh = ft[10] | 0, this.Fl = ft[11] | 0, this.Gh = ft[12] | 0, this.Gl = ft[13] | 0, this.Hh = ft[14] | 0, this.Hl = ft[15] | 0;
    }
  }
  const gt = Uint32Array.from([
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
  class E2 extends Td {
    constructor() {
      super(32), this.Ah = gt[0] | 0, this.Al = gt[1] | 0, this.Bh = gt[2] | 0, this.Bl = gt[3] | 0, this.Ch = gt[4] | 0, this.Cl = gt[5] | 0, this.Dh = gt[6] | 0, this.Dl = gt[7] | 0, this.Eh = gt[8] | 0, this.El = gt[9] | 0, this.Fh = gt[10] | 0, this.Fl = gt[11] | 0, this.Gh = gt[12] | 0, this.Gl = gt[13] | 0, this.Hh = gt[14] | 0, this.Hl = gt[15] | 0;
    }
  }
  const qa = yo(() => new m2()), v2 = yo(() => new Td()), C2 = yo(() => new b2()), A2 = yo(() => new E2()), I2 = Uint8Array.from([
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
  ]), ze = Uint32Array.from([
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
  ]), ne = new Uint32Array(32);
  function Ss(t, e, n, s, r, i) {
    const o = r[i], a = r[i + 1];
    let c = ne[2 * t], l = ne[2 * t + 1], d = ne[2 * e], u = ne[2 * e + 1], h = ne[2 * n], f = ne[2 * n + 1], g = ne[2 * s], p = ne[2 * s + 1], m = Ad(c, d, o);
    l = Id(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: WN(p, g),
      Dl: HN(p)
    }, { h: f, l: h } = wn(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Rs(u, d, 24),
      Bl: $s(u, d, 24)
    }, ne[2 * t] = c, ne[2 * t + 1] = l, ne[2 * e] = d, ne[2 * e + 1] = u, ne[2 * n] = h, ne[2 * n + 1] = f, ne[2 * s] = g, ne[2 * s + 1] = p;
  }
  function _s(t, e, n, s, r, i) {
    const o = r[i], a = r[i + 1];
    let c = ne[2 * t], l = ne[2 * t + 1], d = ne[2 * e], u = ne[2 * e + 1], h = ne[2 * n], f = ne[2 * n + 1], g = ne[2 * s], p = ne[2 * s + 1], m = Ad(c, d, o);
    l = Id(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: Rs(p, g, 16),
      Dl: $s(p, g, 16)
    }, { h: f, l: h } = wn(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Bi(u, d, 63),
      Bl: Li(u, d, 63)
    }, ne[2 * t] = c, ne[2 * t + 1] = l, ne[2 * e] = d, ne[2 * e + 1] = u, ne[2 * n] = h, ne[2 * n + 1] = f, ne[2 * s] = g, ne[2 * s + 1] = p;
  }
  function N2(t, e = {}, n, s, r) {
    if (zs(n), t < 0 || t > n) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > n)) throw new Error("key length must be undefined or 1.." + n);
    if (o !== void 0 && o.length !== s) throw new Error("salt must be undefined or " + s);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  class S2 extends ja {
    constructor(e, n) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, zs(e), zs(n), this.blockLen = e, this.outputLen = n, this.buffer = new Uint8Array(e), this.buffer32 = to(this.buffer);
    }
    update(e) {
      Gs(this), e = ds(e), Nn(e);
      const { blockLen: n, buffer: s, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === n && (Us(r), this.compress(r, 0, false), Us(r), this.pos = 0);
        const l = Math.min(n - this.pos, i - c), d = o + c;
        if (l === n && !(d % 4) && c + l < i) {
          const u = new Uint32Array(a, d, Math.floor((i - c) / 4));
          Us(u);
          for (let h = 0; c + n < i; h += r.length, c += n) this.length += n, this.compress(u, h, false);
          Us(u);
          continue;
        }
        s.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      Gs(this), Nd(e, this);
      const { pos: n, buffer32: s } = this;
      this.finished = true, Sn(this.buffer.subarray(n)), Us(s), this.compress(s, 0, true), Us(s);
      const r = to(e);
      this.get().forEach((i, o) => r[o] = Zn(i));
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const s = e.slice(0, n);
      return this.destroy(), s;
    }
    _cloneInto(e) {
      const { buffer: n, length: s, finished: r, destroyed: i, outputLen: o, pos: a } = this;
      return e || (e = new this.constructor({
        dkLen: o
      })), e.set(...this.get()), e.buffer.set(n), e.destroyed = i, e.finished = r, e.length = s, e.pos = a, e.outputLen = o, e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  class _2 extends S2 {
    constructor(e = {}) {
      const n = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, n), this.v0l = ze[0] | 0, this.v0h = ze[1] | 0, this.v1l = ze[2] | 0, this.v1h = ze[3] | 0, this.v2l = ze[4] | 0, this.v2h = ze[5] | 0, this.v3l = ze[6] | 0, this.v3h = ze[7] | 0, this.v4l = ze[8] | 0, this.v4h = ze[9] | 0, this.v5l = ze[10] | 0, this.v5h = ze[11] | 0, this.v6l = ze[12] | 0, this.v6h = ze[13] | 0, this.v7l = ze[14] | 0, this.v7h = ze[15] | 0, N2(n, e, 64, 16, 16);
      let { key: s, personalization: r, salt: i } = e, o = 0;
      if (s !== void 0 && (s = ds(s), o = s.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = ds(i);
        const a = to(i);
        this.v4l ^= Zn(a[0]), this.v4h ^= Zn(a[1]), this.v5l ^= Zn(a[2]), this.v5h ^= Zn(a[3]);
      }
      if (r !== void 0) {
        r = ds(r);
        const a = to(r);
        this.v6l ^= Zn(a[0]), this.v6h ^= Zn(a[1]), this.v7l ^= Zn(a[2]), this.v7h ^= Zn(a[3]);
      }
      if (s !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(s), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: n, v1l: s, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: u, v5h: h, v6l: f, v6h: g, v7l: p, v7h: m } = this;
      return [
        e,
        n,
        s,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, n, s, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.v0l = e | 0, this.v0h = n | 0, this.v1l = s | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = u | 0, this.v5h = h | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = m | 0;
    }
    compress(e, n, s) {
      this.get().forEach((c, l) => ne[l] = c), ne.set(ze, 16);
      let { h: r, l: i } = om(BigInt(this.length));
      ne[24] = ze[8] ^ i, ne[25] = ze[9] ^ r, s && (ne[28] = ~ne[28], ne[29] = ~ne[29]);
      let o = 0;
      const a = I2;
      for (let c = 0; c < 12; c++) Ss(0, 4, 8, 12, e, n + 2 * a[o++]), _s(0, 4, 8, 12, e, n + 2 * a[o++]), Ss(1, 5, 9, 13, e, n + 2 * a[o++]), _s(1, 5, 9, 13, e, n + 2 * a[o++]), Ss(2, 6, 10, 14, e, n + 2 * a[o++]), _s(2, 6, 10, 14, e, n + 2 * a[o++]), Ss(3, 7, 11, 15, e, n + 2 * a[o++]), _s(3, 7, 11, 15, e, n + 2 * a[o++]), Ss(0, 5, 10, 15, e, n + 2 * a[o++]), _s(0, 5, 10, 15, e, n + 2 * a[o++]), Ss(1, 6, 11, 12, e, n + 2 * a[o++]), _s(1, 6, 11, 12, e, n + 2 * a[o++]), Ss(2, 7, 8, 13, e, n + 2 * a[o++]), _s(2, 7, 8, 13, e, n + 2 * a[o++]), Ss(3, 4, 9, 14, e, n + 2 * a[o++]), _s(3, 4, 9, 14, e, n + 2 * a[o++]);
      this.v0l ^= ne[0] ^ ne[16], this.v0h ^= ne[1] ^ ne[17], this.v1l ^= ne[2] ^ ne[18], this.v1h ^= ne[3] ^ ne[19], this.v2l ^= ne[4] ^ ne[20], this.v2h ^= ne[5] ^ ne[21], this.v3l ^= ne[6] ^ ne[22], this.v3h ^= ne[7] ^ ne[23], this.v4l ^= ne[8] ^ ne[24], this.v4h ^= ne[9] ^ ne[25], this.v5l ^= ne[10] ^ ne[26], this.v5h ^= ne[11] ^ ne[27], this.v6l ^= ne[12] ^ ne[28], this.v6h ^= ne[13] ^ ne[29], this.v7l ^= ne[14] ^ ne[30], this.v7h ^= ne[15] ^ ne[31], Sn(ne);
    }
    destroy() {
      this.destroyed = true, Sn(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const T2 = t2((t) => new _2(t)), O2 = "https://rpc.walletconnect.org/v1";
  function bm(t) {
    const e = `Ethereum Signed Message:
${t.length}`, n = new TextEncoder().encode(e + t);
    return "0x" + Ae.from(u2(n)).toString("hex");
  }
  async function x2(t, e, n, s, r, i) {
    switch (n.t) {
      case "eip191":
        return await k2(t, e, n.s);
      case "eip1271":
        return await P2(t, e, n.s, s, r, i);
      default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`);
    }
  }
  function k2(t, e, n) {
    const s = hN(n);
    return wN({
      payload: bm(e),
      signature: s
    }).toLowerCase() === t.toLowerCase();
  }
  async function P2(t, e, n, s, r, i) {
    const o = ls(s);
    if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${s}`);
    try {
      const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = n.substring(2), d = (l.length / 2).toString(16).padStart(64, "0"), u = (e.startsWith("0x") ? e : bm(e)).substring(2), h = a + u + c + d + l, f = await fetch(`${i || O2}/?chainId=${s}&projectId=${r}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          id: R2(),
          jsonrpc: "2.0",
          method: "eth_call",
          params: [
            {
              to: t,
              data: h
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
  function R2() {
    return Date.now() + Math.floor(Math.random() * 1e3);
  }
  function $2(t) {
    const e = atob(t), n = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
    const s = n[0];
    if (s === 0) throw new Error("No signatures found");
    const r = 1 + s * 64;
    if (n.length < r) throw new Error("Transaction data too short for claimed signature count");
    if (n.length < 100) throw new Error("Transaction too short");
    const i = Ae.from(t, "base64").slice(1, 65);
    return wo.encode(i);
  }
  function U2(t) {
    const e = new Uint8Array(Ae.from(t, "base64")), n = Array.from("TransactionData::").map((i) => i.charCodeAt(0)), s = new Uint8Array(n.length + e.length);
    s.set(n), s.set(e, n.length);
    const r = T2(s, {
      dkLen: 32
    });
    return wo.encode(r);
  }
  function Dh(t) {
    const e = new Uint8Array(qa(D2(t)));
    return wo.encode(e);
  }
  function D2(t) {
    if (t instanceof Uint8Array) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
    if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
    throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
  }
  function Bh(t) {
    const e = Ae.from(t, "base64"), n = Vw(e).txn;
    if (!n) throw new Error("Invalid signed transaction: missing 'txn' field");
    const s = Kw(n), r = Ae.from("TX"), i = Ae.concat([
      r,
      Ae.from(s)
    ]), o = A2(i);
    return zw.encode(o).replace(/=+$/, "");
  }
  function Oc(t) {
    const e = [];
    let n = BigInt(t);
    for (; n >= BigInt(128); ) e.push(Number(n & BigInt(127) | BigInt(128))), n >>= BigInt(7);
    return e.push(Number(n)), Ae.from(e);
  }
  function B2(t) {
    const e = Ae.from(t.signed.bodyBytes, "base64"), n = Ae.from(t.signed.authInfoBytes, "base64"), s = Ae.from(t.signature.signature, "base64"), r = [];
    r.push(Ae.from([
      10
    ])), r.push(Oc(e.length)), r.push(e), r.push(Ae.from([
      18
    ])), r.push(Oc(n.length)), r.push(n), r.push(Ae.from([
      26
    ])), r.push(Oc(s.length)), r.push(s);
    const i = Ae.concat(r), o = qa(i);
    return Ae.from(o).toString("hex").toUpperCase();
  }
  function L2(t) {
    var e, n;
    const s = [];
    try {
      if (typeof t == "string") return s.push(t), s;
      if (typeof t != "object") return s;
      t != null && t.id && s.push(t.id);
      const r = (n = (e = t == null ? void 0 : t.capabilities) == null ? void 0 : e.caip345) == null ? void 0 : n.transactionHashes;
      r && s.push(...r);
    } catch (r) {
      console.warn("getWalletSendCallsHashes failed: ", r);
    }
    return s;
  }
  var M2 = Object.defineProperty, F2 = Object.defineProperties, j2 = Object.getOwnPropertyDescriptors, Lh = Object.getOwnPropertySymbols, q2 = Object.prototype.hasOwnProperty, W2 = Object.prototype.propertyIsEnumerable, Mh = (t, e, n) => e in t ? M2(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, H2 = (t, e) => {
    for (var n in e || (e = {})) q2.call(e, n) && Mh(t, n, e[n]);
    if (Lh) for (var n of Lh(e)) W2.call(e, n) && Mh(t, n, e[n]);
    return t;
  }, V2 = (t, e) => F2(t, j2(e));
  const Em = "did:pkh:", K2 = {
    eip155: "Ethereum",
    solana: "Solana",
    bip122: "Bitcoin"
  }, z2 = (t) => t ? K2[t] || t : "", Wa = (t) => t == null ? void 0 : t.split(":"), G2 = (t) => {
    const e = t && Wa(t);
    if (e) return t.includes(Em) ? e[3] : e[1];
  }, Y2 = (t) => {
    const e = t && Wa(t);
    if (e) return t.includes(Em) ? e[2] : e[0];
  }, Ul = (t) => {
    const e = t && Wa(t);
    if (e) return e[2] + ":" + e[3];
  }, wa = (t) => {
    const e = t && Wa(t);
    if (e) return e.pop();
  };
  async function Fh(t) {
    const { cacao: e, projectId: n } = t, { s, p: r } = e, i = vm(r, r.iss), o = wa(r.iss);
    return await x2(o, i, s, Ul(r.iss), n);
  }
  const vm = (t, e) => {
    const n = Y2(e);
    if (!n) throw new Error("Invalid issuer: " + e);
    const s = `${t.domain} wants you to sign in with your ${z2(n)} account:`, r = wa(e);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let i = t.statement || void 0;
    const o = `URI: ${t.aud || t.uri}`, a = `Version: ${t.version}`, c = `Chain ID: ${G2(e)}`, l = `Nonce: ${t.nonce}`, d = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, h = t.nbf ? `Not Before: ${t.nbf}` : void 0, f = t.requestId ? `Request ID: ${t.requestId}` : void 0, g = t.resources ? `Resources:${t.resources.map((m) => `
- ${m}`).join("")}` : void 0, p = Jo(t.resources);
    if (p) {
      const m = no(p);
      i = rS(i, m);
    }
    return [
      s,
      r,
      "",
      i,
      "",
      o,
      a,
      c,
      l,
      d,
      u,
      h,
      f,
      g
    ].filter((m) => m != null).join(`
`);
  };
  function Z2(t) {
    return Ae.from(JSON.stringify(t)).toString("base64");
  }
  function J2(t) {
    return JSON.parse(Ae.from(t, "base64").toString("utf-8"));
  }
  function Ir(t) {
    if (!t) throw new Error("No recap provided, value is undefined");
    if (!t.att) throw new Error("No `att` property found");
    const e = Object.keys(t.att);
    if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
    e.forEach((n) => {
      const s = t.att[n];
      if (Array.isArray(s)) throw new Error(`Resource must be an object: ${n}`);
      if (typeof s != "object") throw new Error(`Resource must be an object: ${n}`);
      if (!Object.keys(s).length) throw new Error(`Resource object is empty: ${n}`);
      Object.keys(s).forEach((r) => {
        const i = s[r];
        if (!Array.isArray(i)) throw new Error(`Ability limits ${r} must be an array of objects, found: ${i}`);
        if (!i.length) throw new Error(`Value of ${r} is empty array, must be an array with objects`);
        i.forEach((o) => {
          if (typeof o != "object") throw new Error(`Ability limits (${r}) must be an array of objects, found: ${o}`);
        });
      });
    });
  }
  function X2(t, e, n, s = {}) {
    return n == null ? void 0 : n.sort((r, i) => r.localeCompare(i)), {
      att: {
        [t]: Q2(e, n, s)
      }
    };
  }
  function Q2(t, e, n = {}) {
    e = e == null ? void 0 : e.sort((r, i) => r.localeCompare(i));
    const s = e.map((r) => ({
      [`${t}/${r}`]: [
        n
      ]
    }));
    return Object.assign({}, ...s);
  }
  function Cm(t) {
    return Ir(t), `urn:recap:${Z2(t).replace(/=/g, "")}`;
  }
  function no(t) {
    const e = J2(t.replace("urn:recap:", ""));
    return Ir(e), e;
  }
  function eS(t, e, n) {
    const s = X2(t, e, n);
    return Cm(s);
  }
  function tS(t) {
    return t && t.includes("urn:recap:");
  }
  function nS(t, e) {
    const n = no(t), s = no(e), r = sS(n, s);
    return Cm(r);
  }
  function sS(t, e) {
    Ir(t), Ir(e);
    const n = Object.keys(t.att).concat(Object.keys(e.att)).sort((r, i) => r.localeCompare(i)), s = {
      att: {}
    };
    return n.forEach((r) => {
      var i, o;
      Object.keys(((i = t.att) == null ? void 0 : i[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
        var c, l;
        s.att[r] = V2(H2({}, s.att[r]), {
          [a]: ((c = t.att[r]) == null ? void 0 : c[a]) || ((l = e.att[r]) == null ? void 0 : l[a])
        });
      });
    }), s;
  }
  function rS(t = "", e) {
    Ir(e);
    const n = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (t.includes(n)) return t;
    const s = [];
    let r = 0;
    Object.keys(e.att).forEach((a) => {
      const c = Object.keys(e.att[a]).map((u) => ({
        ability: u.split("/")[0],
        action: u.split("/")[1]
      }));
      c.sort((u, h) => u.action.localeCompare(h.action));
      const l = {};
      c.forEach((u) => {
        l[u.ability] || (l[u.ability] = []), l[u.ability].push(u.action);
      });
      const d = Object.keys(l).map((u) => (r++, `(${r}) '${u}': '${l[u].join("', '")}' for '${a}'.`));
      s.push(d.join(", ").replace(".,", "."));
    });
    const i = s.join(" "), o = `${n}${i}`;
    return `${t ? t + " " : ""}${o}`;
  }
  function jh(t) {
    var e;
    const n = no(t);
    Ir(n);
    const s = (e = n.att) == null ? void 0 : e.eip155;
    return s ? Object.keys(s).map((r) => r.split("/")[1]) : [];
  }
  function qh(t) {
    const e = no(t);
    Ir(e);
    const n = [];
    return Object.values(e.att).forEach((s) => {
      Object.values(s).forEach((r) => {
        var i;
        (i = r == null ? void 0 : r[0]) != null && i.chains && n.push(r[0].chains);
      });
    }), [
      ...new Set(n.flat())
    ];
  }
  function Jo(t) {
    if (!t) return;
    const e = t == null ? void 0 : t[t.length - 1];
    return tS(e) ? e : void 0;
  }
  function Am(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Dl(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function xc(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Rt(t, ...e) {
    if (!Am(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Wh(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function iS(t, e) {
    Rt(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
  }
  function qs(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function li(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function oS(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const aS = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function cS(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Bl(t) {
    if (typeof t == "string") t = cS(t);
    else if (Am(t)) t = Ll(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function lS(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function dS(t, e) {
    if (t.length !== e.length) return false;
    let n = 0;
    for (let s = 0; s < t.length; s++) n |= t[s] ^ e[s];
    return n === 0;
  }
  const uS = (t, e) => {
    function n(s, ...r) {
      if (Rt(s), !aS) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? Rt(l) : Rt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && Rt(r[1]);
      const o = e(s, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          Rt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, Rt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (Rt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(n, t), n;
  };
  function Hh(t, e, n = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (n && !fS(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function Vh(t, e, n, s) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, s);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(n >> r & i), a = Number(n & i);
    t.setUint32(e + 4, o, s), t.setUint32(e + 0, a, s);
  }
  function hS(t, e, n) {
    Dl(n);
    const s = new Uint8Array(16), r = oS(s);
    return Vh(r, 0, BigInt(e), n), Vh(r, 8, BigInt(t), n), s;
  }
  function fS(t) {
    return t.byteOffset % 4 === 0;
  }
  function Ll(t) {
    return Uint8Array.from(t);
  }
  const Im = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), pS = Im("expand 16-byte k"), gS = Im("expand 32-byte k"), mS = qs(pS), wS = qs(gS);
  function Se(t, e) {
    return t << e | t >>> 32 - e;
  }
  function Ml(t) {
    return t.byteOffset % 4 === 0;
  }
  const $o = 64, yS = 16, Nm = 2 ** 32 - 1, Kh = new Uint32Array();
  function bS(t, e, n, s, r, i, o, a) {
    const c = r.length, l = new Uint8Array($o), d = qs(l), u = Ml(r) && Ml(i), h = u ? qs(r) : Kh, f = u ? qs(i) : Kh;
    for (let g = 0; g < c; o++) {
      if (t(e, n, s, d, o, a), o >= Nm) throw new Error("arx: counter overflow");
      const p = Math.min($o, c - g);
      if (u && p === $o) {
        const m = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let T = 0, O; T < yS; T++) O = m + T, f[O] = h[O] ^ d[T];
        g += $o;
        continue;
      }
      for (let m = 0, T; m < p; m++) T = g + m, i[T] = r[T] ^ l[m];
      g += p;
    }
  }
  function ES(t, e) {
    const { allowShortKeys: n, extendNonceFn: s, counterLength: r, counterRight: i, rounds: o } = lS({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return xc(r), xc(o), Dl(i), Dl(n), (a, c, l, d, u = 0) => {
      Rt(a), Rt(c), Rt(l);
      const h = l.length;
      if (d === void 0 && (d = new Uint8Array(h)), Rt(d), xc(u), u < 0 || u >= Nm) throw new Error("arx: counter overflow");
      if (d.length < h) throw new Error(`arx: output (${d.length}) is shorter than data (${h})`);
      const f = [];
      let g = a.length, p, m;
      if (g === 32) f.push(p = Ll(a)), m = wS;
      else if (g === 16 && n) p = new Uint8Array(32), p.set(a), p.set(a, 16), m = mS, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      Ml(c) || f.push(c = Ll(c));
      const T = qs(p);
      if (s) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        s(m, T, qs(c.subarray(0, 16)), T), c = c.subarray(16);
      }
      const O = 16 - r;
      if (O !== c.length) throw new Error(`arx: nonce must be ${O} or 16 bytes`);
      if (O !== 12) {
        const N = new Uint8Array(12);
        N.set(c, i ? 0 : 12 - c.length), c = N, f.push(c);
      }
      const A = qs(c);
      return bS(t, m, T, A, l, d, u, o), li(...f), d;
    };
  }
  const nt = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  class vS {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = Bl(e), Rt(e, 32);
      const n = nt(e, 0), s = nt(e, 2), r = nt(e, 4), i = nt(e, 6), o = nt(e, 8), a = nt(e, 10), c = nt(e, 12), l = nt(e, 14);
      this.r[0] = n & 8191, this.r[1] = (n >>> 13 | s << 3) & 8191, this.r[2] = (s >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = nt(e, 16 + 2 * d);
    }
    process(e, n, s = false) {
      const r = s ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], u = o[4], h = o[5], f = o[6], g = o[7], p = o[8], m = o[9], T = nt(e, n + 0), O = nt(e, n + 2), A = nt(e, n + 4), N = nt(e, n + 6), P = nt(e, n + 8), U = nt(e, n + 10), D = nt(e, n + 12), L = nt(e, n + 14);
      let x = i[0] + (T & 8191), B = i[1] + ((T >>> 13 | O << 3) & 8191), M = i[2] + ((O >>> 10 | A << 6) & 8191), _ = i[3] + ((A >>> 7 | N << 9) & 8191), y = i[4] + ((N >>> 4 | P << 12) & 8191), E = i[5] + (P >>> 1 & 8191), w = i[6] + ((P >>> 14 | U << 2) & 8191), v = i[7] + ((U >>> 11 | D << 5) & 8191), I = i[8] + ((D >>> 8 | L << 8) & 8191), k = i[9] + (L >>> 5 | r), C = 0, S = C + x * a + B * (5 * m) + M * (5 * p) + _ * (5 * g) + y * (5 * f);
      C = S >>> 13, S &= 8191, S += E * (5 * h) + w * (5 * u) + v * (5 * d) + I * (5 * l) + k * (5 * c), C += S >>> 13, S &= 8191;
      let R = C + x * c + B * a + M * (5 * m) + _ * (5 * p) + y * (5 * g);
      C = R >>> 13, R &= 8191, R += E * (5 * f) + w * (5 * h) + v * (5 * u) + I * (5 * d) + k * (5 * l), C += R >>> 13, R &= 8191;
      let $ = C + x * l + B * c + M * a + _ * (5 * m) + y * (5 * p);
      C = $ >>> 13, $ &= 8191, $ += E * (5 * g) + w * (5 * f) + v * (5 * h) + I * (5 * u) + k * (5 * d), C += $ >>> 13, $ &= 8191;
      let Y = C + x * d + B * l + M * c + _ * a + y * (5 * m);
      C = Y >>> 13, Y &= 8191, Y += E * (5 * p) + w * (5 * g) + v * (5 * f) + I * (5 * h) + k * (5 * u), C += Y >>> 13, Y &= 8191;
      let z = C + x * u + B * d + M * l + _ * c + y * a;
      C = z >>> 13, z &= 8191, z += E * (5 * m) + w * (5 * p) + v * (5 * g) + I * (5 * f) + k * (5 * h), C += z >>> 13, z &= 8191;
      let q = C + x * h + B * u + M * d + _ * l + y * c;
      C = q >>> 13, q &= 8191, q += E * a + w * (5 * m) + v * (5 * p) + I * (5 * g) + k * (5 * f), C += q >>> 13, q &= 8191;
      let J = C + x * f + B * h + M * u + _ * d + y * l;
      C = J >>> 13, J &= 8191, J += E * c + w * a + v * (5 * m) + I * (5 * p) + k * (5 * g), C += J >>> 13, J &= 8191;
      let Z = C + x * g + B * f + M * h + _ * u + y * d;
      C = Z >>> 13, Z &= 8191, Z += E * l + w * c + v * a + I * (5 * m) + k * (5 * p), C += Z >>> 13, Z &= 8191;
      let de = C + x * p + B * g + M * f + _ * h + y * u;
      C = de >>> 13, de &= 8191, de += E * d + w * l + v * c + I * a + k * (5 * m), C += de >>> 13, de &= 8191;
      let X = C + x * m + B * p + M * g + _ * f + y * h;
      C = X >>> 13, X &= 8191, X += E * u + w * d + v * l + I * c + k * a, C += X >>> 13, X &= 8191, C = (C << 2) + C | 0, C = C + S | 0, S = C & 8191, C = C >>> 13, R += C, i[0] = S, i[1] = R, i[2] = $, i[3] = Y, i[4] = z, i[5] = q, i[6] = J, i[7] = Z, i[8] = de, i[9] = X;
    }
    finalize() {
      const { h: e, pad: n } = this, s = new Uint16Array(10);
      let r = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
      e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, s[0] = e[0] + 5, r = s[0] >>> 13, s[0] &= 8191;
      for (let a = 1; a < 10; a++) s[a] = e[a] + r, r = s[a] >>> 13, s[a] &= 8191;
      s[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let a = 0; a < 10; a++) s[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = e[a] & i | s[a];
      e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
      let o = e[0] + n[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++) o = (e[a] + n[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
      li(s);
    }
    update(e) {
      Wh(this), e = Bl(e), Rt(e);
      const { buffer: n, blockLen: s } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(s - this.pos, r - i);
        if (o === s) {
          for (; s <= r - i; i += s) this.process(e, i);
          continue;
        }
        n.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === s && (this.process(n, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      li(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      Wh(this), iS(e, this), this.finished = true;
      const { buffer: n, h: s } = this;
      let { pos: r } = this;
      if (r) {
        for (n[r++] = 1; r < 16; r++) n[r] = 0;
        this.process(n, 0, true);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) e[i++] = s[o] >>> 0, e[i++] = s[o] >>> 8;
      return e;
    }
    digest() {
      const { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      const s = e.slice(0, n);
      return this.destroy(), s;
    }
  }
  function CS(t) {
    const e = (s, r) => t(r).update(Bl(s)).digest(), n = t(new Uint8Array(32));
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (s) => t(s), e;
  }
  const AS = CS((t) => new vS(t));
  function IS(t, e, n, s, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], u = e[1], h = e[2], f = e[3], g = e[4], p = e[5], m = e[6], T = e[7], O = r, A = n[0], N = n[1], P = n[2], U = o, D = a, L = c, x = l, B = d, M = u, _ = h, y = f, E = g, w = p, v = m, I = T, k = O, C = A, S = N, R = P;
    for (let Y = 0; Y < i; Y += 2) U = U + B | 0, k = Se(k ^ U, 16), E = E + k | 0, B = Se(B ^ E, 12), U = U + B | 0, k = Se(k ^ U, 8), E = E + k | 0, B = Se(B ^ E, 7), D = D + M | 0, C = Se(C ^ D, 16), w = w + C | 0, M = Se(M ^ w, 12), D = D + M | 0, C = Se(C ^ D, 8), w = w + C | 0, M = Se(M ^ w, 7), L = L + _ | 0, S = Se(S ^ L, 16), v = v + S | 0, _ = Se(_ ^ v, 12), L = L + _ | 0, S = Se(S ^ L, 8), v = v + S | 0, _ = Se(_ ^ v, 7), x = x + y | 0, R = Se(R ^ x, 16), I = I + R | 0, y = Se(y ^ I, 12), x = x + y | 0, R = Se(R ^ x, 8), I = I + R | 0, y = Se(y ^ I, 7), U = U + M | 0, R = Se(R ^ U, 16), v = v + R | 0, M = Se(M ^ v, 12), U = U + M | 0, R = Se(R ^ U, 8), v = v + R | 0, M = Se(M ^ v, 7), D = D + _ | 0, k = Se(k ^ D, 16), I = I + k | 0, _ = Se(_ ^ I, 12), D = D + _ | 0, k = Se(k ^ D, 8), I = I + k | 0, _ = Se(_ ^ I, 7), L = L + y | 0, C = Se(C ^ L, 16), E = E + C | 0, y = Se(y ^ E, 12), L = L + y | 0, C = Se(C ^ L, 8), E = E + C | 0, y = Se(y ^ E, 7), x = x + B | 0, S = Se(S ^ x, 16), w = w + S | 0, B = Se(B ^ w, 12), x = x + B | 0, S = Se(S ^ x, 8), w = w + S | 0, B = Se(B ^ w, 7);
    let $ = 0;
    s[$++] = o + U | 0, s[$++] = a + D | 0, s[$++] = c + L | 0, s[$++] = l + x | 0, s[$++] = d + B | 0, s[$++] = u + M | 0, s[$++] = h + _ | 0, s[$++] = f + y | 0, s[$++] = g + E | 0, s[$++] = p + w | 0, s[$++] = m + v | 0, s[$++] = T + I | 0, s[$++] = O + k | 0, s[$++] = A + C | 0, s[$++] = N + S | 0, s[$++] = P + R | 0;
  }
  const NS = ES(IS, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), SS = new Uint8Array(16), zh = (t, e) => {
    t.update(e);
    const n = e.length % 16;
    n && t.update(SS.subarray(n));
  }, _S = new Uint8Array(32);
  function Gh(t, e, n, s, r) {
    const i = t(e, n, _S), o = AS.create(i);
    r && zh(o, r), zh(o, s);
    const a = hS(s.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return li(i, a), c;
  }
  const TS = (t) => (e, n, s) => ({
    encrypt(r, i) {
      const o = r.length;
      i = Hh(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, n, a, a, 1);
      const c = Gh(t, e, n, a, s);
      return i.set(c, o), li(c), i;
    },
    decrypt(r, i) {
      i = Hh(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = Gh(t, e, n, o, s);
      if (!dS(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, n, i, i, 1), li(c), i;
    }
  });
  uS({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, TS(NS));
  class Sm extends ja {
    constructor(e, n) {
      super(), this.finished = false, this.destroyed = false, cm(e);
      const s = ds(n);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(s.length > r ? e.create().update(s).digest() : s);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), Sn(i);
    }
    update(e) {
      return Gs(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Gs(this), Nn(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: n, iHash: s, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
      return e = e, e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = s._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const _m = (t, e, n) => new Sm(t, e).update(n).digest();
  _m.create = (t, e) => new Sm(t, e);
  Uint8Array.from([
    0
  ]);
  const Tm = qa, Od = BigInt(0), Fl = BigInt(1);
  function ya(t, e = "") {
    if (typeof t != "boolean") {
      const n = e && `"${e}"`;
      throw new Error(n + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function pr(t, e, n = "") {
    const s = Fa(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!s || i && r !== e) {
      const o = n && `"${n}" `, a = i ? ` of length ${e}` : "", c = s ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function Uo(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function Om(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Od : BigInt("0x" + t);
  }
  function Ha(t) {
    return Om(ni(t));
  }
  function ba(t) {
    return Nn(t), Om(ni(Uint8Array.from(t).reverse()));
  }
  function xd(t, e) {
    return ma(t.toString(16).padStart(e * 2, "0"));
  }
  function kd(t, e) {
    return xd(t, e).reverse();
  }
  function wt(t, e, n) {
    let s;
    if (typeof e == "string") try {
      s = ma(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Fa(e)) s = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = s.length;
    if (typeof n == "number" && r !== n) throw new Error(t + " of length " + n + " expected, got " + r);
    return s;
  }
  const kc = (t) => typeof t == "bigint" && Od <= t;
  function OS(t, e, n) {
    return kc(t) && kc(e) && kc(n) && e <= t && t < n;
  }
  function jl(t, e, n, s) {
    if (!OS(e, n, s)) throw new Error("expected valid " + t + ": " + n + " <= n < " + s + ", got " + e);
  }
  function xm(t) {
    let e;
    for (e = 0; t > Od; t >>= Fl, e += 1) ;
    return e;
  }
  const bo = (t) => (Fl << BigInt(t)) - Fl;
  function xS(t, e, n) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    const s = (h) => new Uint8Array(h), r = (h) => Uint8Array.of(h);
    let i = s(t), o = s(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...h) => n(o, i, ...h), d = (h = s(0)) => {
      o = l(r(0), h), i = l(), h.length !== 0 && (o = l(r(1), h), i = l());
    }, u = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0;
      const f = [];
      for (; h < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), h += i.length;
      }
      return Bs(...f);
    };
    return (h, f) => {
      c(), d(h);
      let g;
      for (; !(g = f(u())); ) d();
      return c(), g;
    };
  }
  function Va(t, e, n = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function s(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => s(r, i, false)), Object.entries(n).forEach(([r, i]) => s(r, i, true));
  }
  function Yh(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (n, ...s) => {
      const r = e.get(n);
      if (r !== void 0) return r;
      const i = t(n, ...s);
      return e.set(n, i), i;
    };
  }
  const Bt = BigInt(0), _t = BigInt(1), gr = BigInt(2), km = BigInt(3), Pm = BigInt(4), Rm = BigInt(5), kS = BigInt(7), $m = BigInt(8), PS = BigInt(9), Um = BigInt(16);
  function Vt(t, e) {
    const n = t % e;
    return n >= Bt ? n : e + n;
  }
  function gn(t, e, n) {
    let s = t;
    for (; e-- > Bt; ) s *= s, s %= n;
    return s;
  }
  function Zh(t, e) {
    if (t === Bt) throw new Error("invert: expected non-zero number");
    if (e <= Bt) throw new Error("invert: expected positive modulus, got " + e);
    let n = Vt(t, e), s = e, r = Bt, i = _t;
    for (; n !== Bt; ) {
      const o = s / n, a = s % n, c = r - i * o;
      s = n, n = a, r = i, i = c;
    }
    if (s !== _t) throw new Error("invert: does not exist");
    return Vt(r, e);
  }
  function Pd(t, e, n) {
    if (!t.eql(t.sqr(e), n)) throw new Error("Cannot find square root");
  }
  function Dm(t, e) {
    const n = (t.ORDER + _t) / Pm, s = t.pow(e, n);
    return Pd(t, s, e), s;
  }
  function RS(t, e) {
    const n = (t.ORDER - Rm) / $m, s = t.mul(e, gr), r = t.pow(s, n), i = t.mul(e, r), o = t.mul(t.mul(i, gr), r), a = t.mul(i, t.sub(o, t.ONE));
    return Pd(t, a, e), a;
  }
  function $S(t) {
    const e = Zs(t), n = Bm(t), s = n(e, e.neg(e.ONE)), r = n(e, s), i = n(e, e.neg(s)), o = (t + kS) / Um;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, s);
      const u = a.mul(l, r), h = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(u), c);
      l = a.cmov(l, d, f), d = a.cmov(h, u, g);
      const p = a.eql(a.sqr(d), c), m = a.cmov(l, d, p);
      return Pd(a, m, c), m;
    };
  }
  function Bm(t) {
    if (t < km) throw new Error("sqrt is not defined for small field");
    let e = t - _t, n = 0;
    for (; e % gr === Bt; ) e /= gr, n++;
    let s = gr;
    const r = Zs(t);
    for (; Jh(r, s) === 1; ) if (s++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (n === 1) return Dm;
    let i = r.pow(s, e);
    const o = (e + _t) / gr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (Jh(a, c) !== 1) throw new Error("Cannot find square root");
      let l = n, d = a.mul(a.ONE, i), u = a.pow(c, e), h = a.pow(c, o);
      for (; !a.eql(u, a.ONE); ) {
        if (a.is0(u)) return a.ZERO;
        let f = 1, g = a.sqr(u);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = _t << BigInt(l - f - 1), m = a.pow(d, p);
        l = f, d = a.sqr(m), u = a.mul(u, d), h = a.mul(h, m);
      }
      return h;
    };
  }
  function US(t) {
    return t % Pm === km ? Dm : t % $m === Rm ? RS : t % Um === PS ? $S(t) : Bm(t);
  }
  const DS = [
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
  function BS(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, n = DS.reduce((s, r) => (s[r] = "function", s), e);
    return Va(t, n), t;
  }
  function LS(t, e, n) {
    if (n < Bt) throw new Error("invalid exponent, negatives unsupported");
    if (n === Bt) return t.ONE;
    if (n === _t) return e;
    let s = t.ONE, r = e;
    for (; n > Bt; ) n & _t && (s = t.mul(s, r)), r = t.sqr(r), n >>= _t;
    return s;
  }
  function Lm(t, e, n = false) {
    const s = new Array(e.length).fill(n ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (s[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (s[c] = t.mul(o, s[c]), t.mul(o, a)), i), s;
  }
  function Jh(t, e) {
    const n = (t.ORDER - _t) / gr, s = t.pow(e, n), r = t.eql(s, t.ONE), i = t.eql(s, t.ZERO), o = t.eql(s, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function Mm(t, e) {
    e !== void 0 && zs(e);
    const n = e !== void 0 ? e : t.toString(2).length, s = Math.ceil(n / 8);
    return {
      nBitLength: n,
      nByteLength: s
    };
  }
  function Zs(t, e, n = false, s = {}) {
    if (t <= Bt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (s.sqrt || n) throw new Error("cannot specify opts in two arguments");
      const h = e;
      h.BITS && (r = h.BITS), h.sqrt && (i = h.sqrt), typeof h.isLE == "boolean" && (n = h.isLE), typeof h.modFromBytes == "boolean" && (o = h.modFromBytes), a = h.allowedLengths;
    } else typeof e == "number" && (r = e), s.sqrt && (i = s.sqrt);
    const { nBitLength: c, nByteLength: l } = Mm(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const u = Object.freeze({
      ORDER: t,
      isLE: n,
      BITS: c,
      BYTES: l,
      MASK: bo(c),
      ZERO: Bt,
      ONE: _t,
      allowedLengths: a,
      create: (h) => Vt(h, t),
      isValid: (h) => {
        if (typeof h != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof h);
        return Bt <= h && h < t;
      },
      is0: (h) => h === Bt,
      isValidNot0: (h) => !u.is0(h) && u.isValid(h),
      isOdd: (h) => (h & _t) === _t,
      neg: (h) => Vt(-h, t),
      eql: (h, f) => h === f,
      sqr: (h) => Vt(h * h, t),
      add: (h, f) => Vt(h + f, t),
      sub: (h, f) => Vt(h - f, t),
      mul: (h, f) => Vt(h * f, t),
      pow: (h, f) => LS(u, h, f),
      div: (h, f) => Vt(h * Zh(f, t), t),
      sqrN: (h) => h * h,
      addN: (h, f) => h + f,
      subN: (h, f) => h - f,
      mulN: (h, f) => h * f,
      inv: (h) => Zh(h, t),
      sqrt: i || ((h) => (d || (d = US(t)), d(u, h))),
      toBytes: (h) => n ? kd(h, l) : xd(h, l),
      fromBytes: (h, f = true) => {
        if (a) {
          if (!a.includes(h.length) || h.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
          const p = new Uint8Array(l);
          p.set(h, n ? 0 : p.length - h.length), h = p;
        }
        if (h.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + h.length);
        let g = n ? ba(h) : Ha(h);
        if (o && (g = Vt(g, t)), !f && !u.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (h) => Lm(u, h),
      cmov: (h, f, g) => g ? f : h
    });
    return Object.freeze(u);
  }
  function Fm(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function jm(t) {
    const e = Fm(t);
    return e + Math.ceil(e / 2);
  }
  function MS(t, e, n = false) {
    const s = t.length, r = Fm(e), i = jm(e);
    if (s < 16 || s < i || s > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + s);
    const o = n ? ba(t) : Ha(t), a = Vt(o, e - _t) + _t;
    return n ? kd(a, r) : xd(a, r);
  }
  const di = BigInt(0), mr = BigInt(1);
  function Ea(t, e) {
    const n = e.negate();
    return t ? n : e;
  }
  function Pc(t, e) {
    const n = Lm(t.Fp, e.map((s) => s.Z));
    return e.map((s, r) => t.fromAffine(s.toAffine(n[r])));
  }
  function qm(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function Rc(t, e) {
    qm(t, e);
    const n = Math.ceil(e / t) + 1, s = 2 ** (t - 1), r = 2 ** t, i = bo(t), o = BigInt(t);
    return {
      windows: n,
      windowSize: s,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Xh(t, e, n) {
    const { windowSize: s, mask: r, maxNumber: i, shiftBy: o } = n;
    let a = Number(t & r), c = t >> o;
    a > s && (a -= i, c += mr);
    const l = e * s, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: u,
      isNeg: h,
      isNegF: f,
      offsetF: l
    };
  }
  function FS(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n, s) => {
      if (!(n instanceof e)) throw new Error("invalid point at index " + s);
    });
  }
  function jS(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n, s) => {
      if (!e.isValid(n)) throw new Error("invalid scalar at index " + s);
    });
  }
  const $c = /* @__PURE__ */ new WeakMap(), Wm = /* @__PURE__ */ new WeakMap();
  function Uc(t) {
    return Wm.get(t) || 1;
  }
  function Qh(t) {
    if (t !== di) throw new Error("invalid wNAF");
  }
  class qS {
    constructor(e, n) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = n;
    }
    _unsafeLadder(e, n, s = this.ZERO) {
      let r = e;
      for (; n > di; ) n & mr && (s = s.add(r)), r = r.double(), n >>= mr;
      return s;
    }
    precomputeWindow(e, n) {
      const { windows: s, windowSize: r } = Rc(n, this.bits), i = [];
      let o = e, a = o;
      for (let c = 0; c < s; c++) {
        a = o, i.push(a);
        for (let l = 1; l < r; l++) a = a.add(o), i.push(a);
        o = a.double();
      }
      return i;
    }
    wNAF(e, n, s) {
      if (!this.Fn.isValid(s)) throw new Error("invalid scalar");
      let r = this.ZERO, i = this.BASE;
      const o = Rc(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: u, isNegF: h, offsetF: f } = Xh(s, a, o);
        s = c, d ? i = i.add(Ea(h, n[f])) : r = r.add(Ea(u, n[l]));
      }
      return Qh(s), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, n, s, r = this.ZERO) {
      const i = Rc(e, this.bits);
      for (let o = 0; o < i.windows && s !== di; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = Xh(s, o, i);
        if (s = a, !l) {
          const u = n[c];
          r = r.add(d ? u.negate() : u);
        }
      }
      return Qh(s), r;
    }
    getPrecomputes(e, n, s) {
      let r = $c.get(n);
      return r || (r = this.precomputeWindow(n, e), e !== 1 && (typeof s == "function" && (r = s(r)), $c.set(n, r))), r;
    }
    cached(e, n, s) {
      const r = Uc(e);
      return this.wNAF(r, this.getPrecomputes(r, e, s), n);
    }
    unsafe(e, n, s, r) {
      const i = Uc(e);
      return i === 1 ? this._unsafeLadder(e, n, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, s), n, r);
    }
    createCache(e, n) {
      qm(n, this.bits), Wm.set(e, n), $c.delete(e);
    }
    hasCache(e) {
      return Uc(e) !== 1;
    }
  }
  function WS(t, e, n, s) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; n > di || s > di; ) n & mr && (i = i.add(r)), s & mr && (o = o.add(r)), r = r.double(), n >>= mr, s >>= mr;
    return {
      p1: i,
      p2: o
    };
  }
  function HS(t, e, n, s) {
    FS(n, t), jS(s, e);
    const r = n.length, i = s.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = xm(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = bo(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = s[p], T = Number(m >> BigInt(f) & l);
        d[T] = d[T].add(n[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function ef(t, e, n) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return BS(e), e;
    } else return Zs(t, {
      isLE: n
    });
  }
  function VS(t, e, n = {}, s) {
    if (s === void 0 && (s = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > di)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = ef(e.p, n.Fp, s), i = ef(e.n, n.Fn, s), o = [
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
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), hm("HashToScalar-");
  const Si = BigInt(0), qr = BigInt(1), Do = BigInt(2);
  function KS(t) {
    return Va(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function zS(t) {
    const e = KS(t), { P: n, type: s, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = s === "x25519";
    if (!a && s !== "x448") throw new Error("invalid type");
    const c = o || Sd, l = a ? 255 : 448, d = a ? 32 : 56, u = BigInt(a ? 9 : 5), h = BigInt(a ? 121665 : 39081), f = a ? Do ** BigInt(254) : Do ** BigInt(447), g = a ? BigInt(8) * Do ** BigInt(251) - qr : BigInt(4) * Do ** BigInt(445) - qr, p = f + g + qr, m = (_) => Vt(_, n), T = O(u);
    function O(_) {
      return kd(m(_), d);
    }
    function A(_) {
      const y = wt("u coordinate", _, d);
      return a && (y[31] &= 127), m(ba(y));
    }
    function N(_) {
      return ba(r(wt("scalar", _, d)));
    }
    function P(_, y) {
      const E = L(A(y), N(_));
      if (E === Si) throw new Error("invalid private or public key received");
      return O(E);
    }
    function U(_) {
      return P(_, T);
    }
    function D(_, y, E) {
      const w = m(_ * (y - E));
      return y = m(y - w), E = m(E + w), {
        x_2: y,
        x_3: E
      };
    }
    function L(_, y) {
      jl("u", _, Si, n), jl("scalar", y, f, p);
      const E = y, w = _;
      let v = qr, I = Si, k = _, C = qr, S = Si;
      for (let $ = BigInt(l - 1); $ >= Si; $--) {
        const Y = E >> $ & qr;
        S ^= Y, { x_2: v, x_3: k } = D(S, v, k), { x_2: I, x_3: C } = D(S, I, C), S = Y;
        const z = v + I, q = m(z * z), J = v - I, Z = m(J * J), de = q - Z, X = k + C, ue = k - C, Me = m(ue * z), qe = m(X * J), je = Me + qe, bt = Me - qe;
        k = m(je * je), C = m(w * m(bt * bt)), v = m(q * Z), I = m(de * (q + m(h * de)));
      }
      ({ x_2: v, x_3: k } = D(S, v, k)), { x_2: I, x_3: C } = D(S, I, C);
      const R = i(I);
      return m(v * R);
    }
    const x = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, B = (_ = c(d)) => (Nn(_, x.seed), _);
    function M(_) {
      const y = B(_);
      return {
        secretKey: y,
        publicKey: U(y)
      };
    }
    return {
      keygen: M,
      getSharedSecret: (_, y) => P(_, y),
      getPublicKey: (_) => U(_),
      scalarMult: P,
      scalarMultBase: U,
      utils: {
        randomSecretKey: B,
        randomPrivateKey: B
      },
      GuBytes: T.slice(),
      lengths: x
    };
  }
  const GS = BigInt(1), tf = BigInt(2), YS = BigInt(3), ZS = BigInt(5);
  BigInt(8);
  const Hm = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), JS = {
    p: Hm,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function XS(t) {
    const e = BigInt(10), n = BigInt(20), s = BigInt(40), r = BigInt(80), i = Hm, o = t * t % i * t % i, a = gn(o, tf, i) * o % i, c = gn(a, GS, i) * t % i, l = gn(c, ZS, i) * c % i, d = gn(l, e, i) * l % i, u = gn(d, n, i) * d % i, h = gn(u, s, i) * u % i, f = gn(h, r, i) * h % i, g = gn(f, r, i) * h % i, p = gn(g, e, i) * l % i;
    return {
      pow_p_5_8: gn(p, tf, i) * t % i,
      b2: o
    };
  }
  function QS(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const e_ = Zs(JS.p, {
    isLE: true
  });
  (() => {
    const t = e_.ORDER;
    return zS({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: n, b2: s } = XS(e);
        return Vt(gn(n, YS, t) * s, t);
      },
      adjustScalarBytes: QS
    });
  })();
  const nf = (t, e) => (t + (t >= 0 ? e : -e) / Vm) / e;
  function t_(t, e, n) {
    const [[s, r], [i, o]] = e, a = nf(o * t, n), c = nf(-r * t, n);
    let l = t - a * s - c * i, d = -a * r - c * o;
    const u = l < cs, h = d < cs;
    u && (l = -l), h && (d = -d);
    const f = bo(Math.ceil(xm(n) / 2)) + si;
    if (l < cs || l >= f || d < cs || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: u,
      k1: l,
      k2neg: h,
      k2: d
    };
  }
  function ql(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function Dc(t, e) {
    const n = {};
    for (let s of Object.keys(e)) n[s] = t[s] === void 0 ? e[s] : t[s];
    return ya(n.lowS, "lowS"), ya(n.prehash, "prehash"), n.format !== void 0 && ql(n.format), n;
  }
  class n_ extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const ss = {
    Err: n_,
    _tlv: {
      encode: (t, e) => {
        const { Err: n } = ss;
        if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
        if (e.length & 1) throw new n("tlv.encode: unpadded data");
        const s = e.length / 2, r = Uo(s);
        if (r.length / 2 & 128) throw new n("tlv.encode: long form length too big");
        const i = s > 127 ? Uo(r.length / 2 | 128) : "";
        return Uo(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: n } = ss;
        let s = 0;
        if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
        if (e.length < 2 || e[s++] !== t) throw new n("tlv.decode: wrong tlv");
        const r = e[s++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new n("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new n("tlv.decode(long): byte length is too big");
          const l = e.subarray(s, s + c);
          if (l.length !== c) throw new n("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (s += c, o < 128) throw new n("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(s, s + o);
        if (a.length !== o) throw new n("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(s + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = ss;
        if (t < cs) throw new e("integer: negative integers are not allowed");
        let n = Uo(t);
        if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return n;
      },
      decode(t) {
        const { Err: e } = ss;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Ha(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: n, _tlv: s } = ss, r = wt("signature", t), { v: i, l: o } = s.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = s.decode(2, i), { v: l, l: d } = s.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: n.decode(a),
        s: n.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: n } = ss, s = e.encode(2, n.encode(t.r)), r = e.encode(2, n.encode(t.s)), i = s + r;
      return e.encode(48, i);
    }
  }, cs = BigInt(0), si = BigInt(1), Vm = BigInt(2), Bo = BigInt(3), s_ = BigInt(4);
  function Zr(t, e) {
    const { BYTES: n } = t;
    let s;
    if (typeof e == "bigint") s = e;
    else {
      let r = wt("private key", e);
      try {
        s = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(s)) throw new Error("invalid private key: out of range [1..N-1]");
    return s;
  }
  function r_(t, e = {}) {
    const n = VS("weierstrass", t, e), { Fp: s, Fn: r } = n;
    let i = n.CURVE;
    const { h: o, n: a } = i;
    Va(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo: c } = e;
    if (c && (!s.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const l = zm(s, r);
    function d() {
      if (!s.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function u(_, y, E) {
      const { x: w, y: v } = y.toAffine(), I = s.toBytes(w);
      if (ya(E, "isCompressed"), E) {
        d();
        const k = !s.isOdd(v);
        return Bs(Km(k), I);
      } else return Bs(Uint8Array.of(4), I, s.toBytes(v));
    }
    function h(_) {
      pr(_, void 0, "Point");
      const { publicKey: y, publicKeyUncompressed: E } = l, w = _.length, v = _[0], I = _.subarray(1);
      if (w === y && (v === 2 || v === 3)) {
        const k = s.fromBytes(I);
        if (!s.isValid(k)) throw new Error("bad point: is not on curve, wrong x");
        const C = p(k);
        let S;
        try {
          S = s.sqrt(C);
        } catch ($) {
          const Y = $ instanceof Error ? ": " + $.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + Y);
        }
        d();
        const R = s.isOdd(S);
        return (v & 1) === 1 !== R && (S = s.neg(S)), {
          x: k,
          y: S
        };
      } else if (w === E && v === 4) {
        const k = s.BYTES, C = s.fromBytes(I.subarray(0, k)), S = s.fromBytes(I.subarray(k, k * 2));
        if (!m(C, S)) throw new Error("bad point: is not on curve");
        return {
          x: C,
          y: S
        };
      } else throw new Error(`bad point: got length ${w}, expected compressed=${y} or uncompressed=${E}`);
    }
    const f = e.toBytes || u, g = e.fromBytes || h;
    function p(_) {
      const y = s.sqr(_), E = s.mul(y, _);
      return s.add(s.add(E, s.mul(_, i.a)), i.b);
    }
    function m(_, y) {
      const E = s.sqr(y), w = p(_);
      return s.eql(E, w);
    }
    if (!m(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const T = s.mul(s.pow(i.a, Bo), s_), O = s.mul(s.sqr(i.b), BigInt(27));
    if (s.is0(s.add(T, O))) throw new Error("bad curve params: a or b");
    function A(_, y, E = false) {
      if (!s.isValid(y) || E && s.is0(y)) throw new Error(`bad point coordinate ${_}`);
      return y;
    }
    function N(_) {
      if (!(_ instanceof x)) throw new Error("ProjectivePoint expected");
    }
    function P(_) {
      if (!c || !c.basises) throw new Error("no endo");
      return t_(_, c.basises, r.ORDER);
    }
    const U = Yh((_, y) => {
      const { X: E, Y: w, Z: v } = _;
      if (s.eql(v, s.ONE)) return {
        x: E,
        y: w
      };
      const I = _.is0();
      y == null && (y = I ? s.ONE : s.inv(v));
      const k = s.mul(E, y), C = s.mul(w, y), S = s.mul(v, y);
      if (I) return {
        x: s.ZERO,
        y: s.ZERO
      };
      if (!s.eql(S, s.ONE)) throw new Error("invZ was invalid");
      return {
        x: k,
        y: C
      };
    }), D = Yh((_) => {
      if (_.is0()) {
        if (e.allowInfinityPoint && !s.is0(_.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: E } = _.toAffine();
      if (!s.isValid(y) || !s.isValid(E)) throw new Error("bad point: x or y not field elements");
      if (!m(y, E)) throw new Error("bad point: equation left != right");
      if (!_.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function L(_, y, E, w, v) {
      return E = new x(s.mul(E.X, _), E.Y, E.Z), y = Ea(w, y), E = Ea(v, E), y.add(E);
    }
    class x {
      constructor(y, E, w) {
        this.X = A("x", y), this.Y = A("y", E, true), this.Z = A("z", w), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(y) {
        const { x: E, y: w } = y || {};
        if (!y || !s.isValid(E) || !s.isValid(w)) throw new Error("invalid affine point");
        if (y instanceof x) throw new Error("projective point not allowed");
        return s.is0(E) && s.is0(w) ? x.ZERO : new x(E, w, s.ONE);
      }
      static fromBytes(y) {
        const E = x.fromAffine(g(pr(y, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(y) {
        return x.fromBytes(wt("pointHex", y));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(y = 8, E = true) {
        return M.createCache(this, y), E || this.multiply(Bo), this;
      }
      assertValidity() {
        D(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (!s.isOdd) throw new Error("Field doesn't support isOdd");
        return !s.isOdd(y);
      }
      equals(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y, S = s.eql(s.mul(E, C), s.mul(I, v)), R = s.eql(s.mul(w, C), s.mul(k, v));
        return S && R;
      }
      negate() {
        return new x(this.X, s.neg(this.Y), this.Z);
      }
      double() {
        const { a: y, b: E } = i, w = s.mul(E, Bo), { X: v, Y: I, Z: k } = this;
        let C = s.ZERO, S = s.ZERO, R = s.ZERO, $ = s.mul(v, v), Y = s.mul(I, I), z = s.mul(k, k), q = s.mul(v, I);
        return q = s.add(q, q), R = s.mul(v, k), R = s.add(R, R), C = s.mul(y, R), S = s.mul(w, z), S = s.add(C, S), C = s.sub(Y, S), S = s.add(Y, S), S = s.mul(C, S), C = s.mul(q, C), R = s.mul(w, R), z = s.mul(y, z), q = s.sub($, z), q = s.mul(y, q), q = s.add(q, R), R = s.add($, $), $ = s.add(R, $), $ = s.add($, z), $ = s.mul($, q), S = s.add(S, $), z = s.mul(I, k), z = s.add(z, z), $ = s.mul(z, q), C = s.sub(C, $), R = s.mul(z, Y), R = s.add(R, R), R = s.add(R, R), new x(C, S, R);
      }
      add(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y;
        let S = s.ZERO, R = s.ZERO, $ = s.ZERO;
        const Y = i.a, z = s.mul(i.b, Bo);
        let q = s.mul(E, I), J = s.mul(w, k), Z = s.mul(v, C), de = s.add(E, w), X = s.add(I, k);
        de = s.mul(de, X), X = s.add(q, J), de = s.sub(de, X), X = s.add(E, v);
        let ue = s.add(I, C);
        return X = s.mul(X, ue), ue = s.add(q, Z), X = s.sub(X, ue), ue = s.add(w, v), S = s.add(k, C), ue = s.mul(ue, S), S = s.add(J, Z), ue = s.sub(ue, S), $ = s.mul(Y, X), S = s.mul(z, Z), $ = s.add(S, $), S = s.sub(J, $), $ = s.add(J, $), R = s.mul(S, $), J = s.add(q, q), J = s.add(J, q), Z = s.mul(Y, Z), X = s.mul(z, X), J = s.add(J, Z), Z = s.sub(q, Z), Z = s.mul(Y, Z), X = s.add(X, Z), q = s.mul(J, X), R = s.add(R, q), q = s.mul(ue, X), S = s.mul(de, S), S = s.sub(S, q), q = s.mul(de, J), $ = s.mul(ue, $), $ = s.add($, q), new x(S, R, $);
      }
      subtract(y) {
        return this.add(y.negate());
      }
      is0() {
        return this.equals(x.ZERO);
      }
      multiply(y) {
        const { endo: E } = e;
        if (!r.isValidNot0(y)) throw new Error("invalid scalar: out of range");
        let w, v;
        const I = (k) => M.cached(this, k, (C) => Pc(x, C));
        if (E) {
          const { k1neg: k, k1: C, k2neg: S, k2: R } = P(y), { p: $, f: Y } = I(C), { p: z, f: q } = I(R);
          v = Y.add(q), w = L(E.beta, $, z, k, S);
        } else {
          const { p: k, f: C } = I(y);
          w = k, v = C;
        }
        return Pc(x, [
          w,
          v
        ])[0];
      }
      multiplyUnsafe(y) {
        const { endo: E } = e, w = this;
        if (!r.isValid(y)) throw new Error("invalid scalar: out of range");
        if (y === cs || w.is0()) return x.ZERO;
        if (y === si) return w;
        if (M.hasCache(this)) return this.multiply(y);
        if (E) {
          const { k1neg: v, k1: I, k2neg: k, k2: C } = P(y), { p1: S, p2: R } = WS(x, w, I, C);
          return L(E.beta, S, R, v, k);
        } else return M.unsafe(w, y);
      }
      multiplyAndAddUnsafe(y, E, w) {
        const v = this.multiplyUnsafe(E).add(y.multiplyUnsafe(w));
        return v.is0() ? void 0 : v;
      }
      toAffine(y) {
        return U(this, y);
      }
      isTorsionFree() {
        const { isTorsionFree: y } = e;
        return o === si ? true : y ? y(x, this) : M.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: y } = e;
        return o === si ? this : y ? y(x, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(y = true) {
        return ya(y, "isCompressed"), this.assertValidity(), f(x, this, y);
      }
      toHex(y = true) {
        return ni(this.toBytes(y));
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
      toRawBytes(y = true) {
        return this.toBytes(y);
      }
      _setWindowSize(y) {
        this.precompute(y);
      }
      static normalizeZ(y) {
        return Pc(x, y);
      }
      static msm(y, E) {
        return HS(x, r, y, E);
      }
      static fromPrivateKey(y) {
        return x.BASE.multiply(Zr(r, y));
      }
    }
    x.BASE = new x(i.Gx, i.Gy, s.ONE), x.ZERO = new x(s.ZERO, s.ONE, s.ZERO), x.Fp = s, x.Fn = r;
    const B = r.BITS, M = new qS(x, e.endo ? Math.ceil(B / 2) : B);
    return x.BASE.precompute(8), x;
  }
  function Km(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function zm(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function i_(t, e = {}) {
    const { Fn: n } = t, s = e.randomBytes || Sd, r = Object.assign(zm(t.Fp, n), {
      seed: jm(n.ORDER)
    });
    function i(h) {
      try {
        return !!Zr(n, h);
      } catch {
        return false;
      }
    }
    function o(h, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const m = h.length;
        return f === true && m !== g || f === false && m !== p ? false : !!t.fromBytes(h);
      } catch {
        return false;
      }
    }
    function a(h = s(r.seed)) {
      return MS(pr(h, r.seed, "seed"), n.ORDER);
    }
    function c(h, f = true) {
      return t.BASE.multiply(Zr(n, h)).toBytes(f);
    }
    function l(h) {
      const f = a(h);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(h) {
      if (typeof h == "bigint") return false;
      if (h instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (n.allowedLengths || f === g) return;
      const m = wt("key", h).length;
      return m === g || m === p;
    }
    function u(h, f, g = true) {
      if (d(h) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = Zr(n, h);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: u,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (h) => Zr(n, h),
        precompute(h = 8, f = t.BASE) {
          return f.precompute(h, false);
        }
      },
      lengths: r
    });
  }
  function o_(t, e, n = {}) {
    cm(e), Va(n, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const s = n.randomBytes || Sd, r = n.hmac || ((E, ...w) => _m(e, E, Bs(...w))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: f } = i_(t, n), g = {
      prehash: false,
      lowS: typeof n.lowS == "boolean" ? n.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function m(E) {
      const w = a >> si;
      return E > w;
    }
    function T(E, w) {
      if (!o.isValidNot0(w)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return w;
    }
    function O(E, w) {
      ql(w);
      const v = f.signature, I = w === "compact" ? v : w === "recovered" ? v + 1 : void 0;
      return pr(E, I, `${w} signature`);
    }
    class A {
      constructor(w, v, I) {
        this.r = T("r", w), this.s = T("s", v), I != null && (this.recovery = I), Object.freeze(this);
      }
      static fromBytes(w, v = p) {
        O(w, v);
        let I;
        if (v === "der") {
          const { r: R, s: $ } = ss.toSig(pr(w));
          return new A(R, $);
        }
        v === "recovered" && (I = w[0], v = "compact", w = w.subarray(1));
        const k = o.BYTES, C = w.subarray(0, k), S = w.subarray(k, k * 2);
        return new A(o.fromBytes(C), o.fromBytes(S), I);
      }
      static fromHex(w, v) {
        return this.fromBytes(ma(w), v);
      }
      addRecoveryBit(w) {
        return new A(this.r, this.s, w);
      }
      recoverPublicKey(w) {
        const v = i.ORDER, { r: I, s: k, recovery: C } = this;
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        if (a * Vm < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const S = C === 2 || C === 3 ? I + a : I;
        if (!i.isValid(S)) throw new Error("recovery id 2 or 3 invalid");
        const R = i.toBytes(S), $ = t.fromBytes(Bs(Km((C & 1) === 0), R)), Y = o.inv(S), z = P(wt("msgHash", w)), q = o.create(-z * Y), J = o.create(k * Y), Z = t.BASE.multiplyUnsafe(q).add($.multiplyUnsafe(J));
        if (Z.is0()) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return m(this.s);
      }
      toBytes(w = p) {
        if (ql(w), w === "der") return ma(ss.hexFromSig(this));
        const v = o.toBytes(this.r), I = o.toBytes(this.s);
        if (w === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return Bs(Uint8Array.of(this.recovery), v, I);
        }
        return Bs(v, I);
      }
      toHex(w) {
        return ni(this.toBytes(w));
      }
      assertValidity() {
      }
      static fromCompact(w) {
        return A.fromBytes(wt("sig", w), "compact");
      }
      static fromDER(w) {
        return A.fromBytes(wt("sig", w), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new A(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return ni(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return ni(this.toBytes("compact"));
      }
    }
    const N = n.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const w = Ha(E), v = E.length * 8 - c;
      return v > 0 ? w >> BigInt(v) : w;
    }, P = n.bits2int_modN || function(E) {
      return o.create(N(E));
    }, U = bo(c);
    function D(E) {
      return jl("num < 2^" + c, E, cs, U), o.toBytes(E);
    }
    function L(E, w) {
      return pr(E, void 0, "message"), w ? pr(e(E), void 0, "prehashed message") : E;
    }
    function x(E, w, v) {
      if ([
        "recovered",
        "canonical"
      ].some((J) => J in v)) throw new Error("sign() legacy options not supported");
      const { lowS: I, prehash: k, extraEntropy: C } = Dc(v, g);
      E = L(E, k);
      const S = P(E), R = Zr(o, w), $ = [
        D(R),
        D(S)
      ];
      if (C != null && C !== false) {
        const J = C === true ? s(f.secretKey) : C;
        $.push(wt("extraEntropy", J));
      }
      const Y = Bs(...$), z = S;
      function q(J) {
        const Z = N(J);
        if (!o.isValidNot0(Z)) return;
        const de = o.inv(Z), X = t.BASE.multiply(Z).toAffine(), ue = o.create(X.x);
        if (ue === cs) return;
        const Me = o.create(de * o.create(z + ue * R));
        if (Me === cs) return;
        let qe = (X.x === ue ? 0 : 2) | Number(X.y & si), je = Me;
        return I && m(Me) && (je = o.neg(Me), qe ^= 1), new A(ue, je, qe);
      }
      return {
        seed: Y,
        k2sig: q
      };
    }
    function B(E, w, v = {}) {
      E = wt("message", E);
      const { seed: I, k2sig: k } = x(E, w, v);
      return xS(e.outputLen, o.BYTES, r)(I, k);
    }
    function M(E) {
      let w;
      const v = typeof E == "string" || Fa(E), I = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (I) w = new A(E.r, E.s);
      else if (v) {
        try {
          w = A.fromBytes(wt("sig", E), "der");
        } catch (k) {
          if (!(k instanceof ss.Err)) throw k;
        }
        if (!w) try {
          w = A.fromBytes(wt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return w || false;
    }
    function _(E, w, v, I = {}) {
      const { lowS: k, prehash: C, format: S } = Dc(I, g);
      if (v = wt("publicKey", v), w = L(wt("message", w), C), "strict" in I) throw new Error("options.strict was renamed to lowS");
      const R = S === void 0 ? M(E) : A.fromBytes(wt("sig", E), S);
      if (R === false) return false;
      try {
        const $ = t.fromBytes(v);
        if (k && R.hasHighS()) return false;
        const { r: Y, s: z } = R, q = P(w), J = o.inv(z), Z = o.create(q * J), de = o.create(Y * J), X = t.BASE.multiplyUnsafe(Z).add($.multiplyUnsafe(de));
        return X.is0() ? false : o.create(X.x) === Y;
      } catch {
        return false;
      }
    }
    function y(E, w, v = {}) {
      const { prehash: I } = Dc(v, g);
      return w = L(w, I), A.fromBytes(E, "recovered").recoverPublicKey(w).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: u,
      utils: h,
      lengths: f,
      Point: t,
      sign: B,
      verify: _,
      recoverPublicKey: y,
      Signature: A,
      hash: e
    });
  }
  function a_(t) {
    const e = {
      a: t.a,
      b: t.b,
      p: t.Fp.ORDER,
      n: t.n,
      h: t.h,
      Gx: t.Gx,
      Gy: t.Gy
    }, n = t.Fp;
    let s = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
    const r = Zs(e.n, {
      BITS: t.nBitLength,
      allowedLengths: s,
      modFromBytes: t.wrapPrivateKey
    }), i = {
      Fp: n,
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
  function c_(t) {
    const { CURVE: e, curveOpts: n } = a_(t), s = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN
    };
    return {
      CURVE: e,
      curveOpts: n,
      hash: t.hash,
      ecdsaOpts: s
    };
  }
  function l_(t, e) {
    const n = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: n,
      CURVE: Object.assign({}, t, Mm(n.Fn.ORDER, n.Fn.BITS))
    });
  }
  function d_(t) {
    const { CURVE: e, curveOpts: n, hash: s, ecdsaOpts: r } = c_(t), i = r_(e, n), o = o_(i, s, r);
    return l_(t, o);
  }
  function Wl(t, e) {
    const n = (s) => d_({
      ...t,
      hash: s
    });
    return {
      ...n(e),
      create: n
    };
  }
  const Gm = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, Ym = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, Zm = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, u_ = Zs(Gm.p), h_ = Zs(Ym.p), f_ = Zs(Zm.p);
  Wl({
    ...Gm,
    Fp: u_,
    lowS: false
  }, qa);
  Wl({
    ...Ym,
    Fp: h_,
    lowS: false
  }, C2), Wl({
    ...Zm,
    Fp: f_,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, v2);
  const Hl = "base16", er = "base64pad", _i = "base64url", p_ = "utf8", Bc = 1, g_ = 2;
  function Lc(t) {
    const e = Tm($t(t, Hl));
    return yt(e, Hl);
  }
  function Ts(t) {
    const e = Tm($t(t, p_));
    return yt(e, Hl);
  }
  function Lo(t, e, n) {
    return `${t}?wc_ev=${n}&topic=${e}`;
  }
  var m_ = Object.defineProperty, w_ = Object.defineProperties, y_ = Object.getOwnPropertyDescriptors, sf = Object.getOwnPropertySymbols, b_ = Object.prototype.hasOwnProperty, E_ = Object.prototype.propertyIsEnumerable, rf = (t, e, n) => e in t ? m_(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, v_ = (t, e) => {
    for (var n in e || (e = {})) b_.call(e, n) && rf(t, n, e[n]);
    if (sf) for (var n of sf(e)) E_.call(e, n) && rf(t, n, e[n]);
    return t;
  }, C_ = (t, e) => w_(t, y_(e));
  function mi(t) {
    const e = [];
    return t.forEach((n) => {
      const [s, r] = n.split(":");
      e.push(`${s}:${r}`);
    }), e;
  }
  function Jm(t) {
    const e = [];
    return Object.values(t).forEach((n) => {
      e.push(...mi(n.accounts));
    }), [
      ...new Set(e)
    ];
  }
  function A_(t) {
    const e = [];
    return Object.values(t).forEach((n) => {
      e.push(...n.methods);
    }), [
      ...new Set(e)
    ];
  }
  function I_(t) {
    const e = [];
    return Object.values(t).forEach((n) => {
      e.push(...n.events);
    }), [
      ...new Set(e)
    ];
  }
  function N_(t, e) {
    const n = [];
    return Object.values(t).forEach((s) => {
      mi(s.accounts).includes(e) && n.push(...s.methods);
    }), n;
  }
  function S_(t, e) {
    const n = [];
    return Object.values(t).forEach((s) => {
      mi(s.accounts).includes(e) && n.push(...s.events);
    }), n;
  }
  function Ka(t) {
    return t.includes(":");
  }
  function Jr(t) {
    return Ka(t) ? t.split(":")[0] : t;
  }
  function of(t) {
    var e, n, s;
    const r = {};
    if (!Fn(t)) return r;
    for (const [i, o] of Object.entries(t)) {
      const a = Ka(i) ? [
        i
      ] : o.chains, c = o.methods || [], l = o.events || [], d = Jr(i);
      r[d] = C_(v_({}, r[d]), {
        chains: Mn(a, (e = r[d]) == null ? void 0 : e.chains),
        methods: Mn(c, (n = r[d]) == null ? void 0 : n.methods),
        events: Mn(l, (s = r[d]) == null ? void 0 : s.events)
      });
    }
    return r;
  }
  function __(t) {
    const e = {};
    return t == null ? void 0 : t.forEach((n) => {
      var s;
      const [r, i] = n.split(":");
      e[r] || (e[r] = {
        accounts: [],
        chains: [],
        events: [],
        methods: []
      }), e[r].accounts.push(n), (s = e[r].chains) == null || s.push(`${r}:${i}`);
    }), e;
  }
  function af(t, e) {
    e = e.map((s) => s.replace("did:pkh:", ""));
    const n = __(e);
    for (const [s, r] of Object.entries(n)) r.methods ? r.methods = Mn(r.methods, t) : r.methods = t, r.events = [
      "chainChanged",
      "accountsChanged"
    ];
    return n;
  }
  function T_(t, e) {
    var n, s, r, i, o, a;
    const c = of(t), l = of(e), d = {}, u = Object.keys(c).concat(Object.keys(l));
    for (const h of u) d[h] = {
      chains: Mn((n = c[h]) == null ? void 0 : n.chains, (s = l[h]) == null ? void 0 : s.chains),
      methods: Mn((r = c[h]) == null ? void 0 : r.methods, (i = l[h]) == null ? void 0 : i.methods),
      events: Mn((o = c[h]) == null ? void 0 : o.events, (a = l[h]) == null ? void 0 : a.events)
    };
    return d;
  }
  const O_ = {
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
  }, x_ = {
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
    const { message: n, code: s } = x_[t];
    return {
      message: e ? `${n} ${e}` : n,
      code: s
    };
  }
  function Ge(t, e) {
    const { message: n, code: s } = O_[t];
    return {
      message: e ? `${n} ${e}` : n,
      code: s
    };
  }
  function us(t, e) {
    return !!Array.isArray(t);
  }
  function Fn(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
  }
  function Kt(t) {
    return typeof t > "u";
  }
  function Xe(t, e) {
    return e && Kt(t) ? true : typeof t == "string" && !!t.trim().length;
  }
  function Rd(t, e) {
    return typeof t == "number" && !isNaN(t);
  }
  function k_(t, e) {
    const { requiredNamespaces: n } = e, s = Object.keys(t.namespaces), r = Object.keys(n);
    let i = true;
    return fr(r, s) ? (s.forEach((o) => {
      const { accounts: a, methods: c, events: l } = t.namespaces[o], d = mi(a), u = n[o];
      (!fr(nm(o, u), d) || !fr(u.methods, c) || !fr(u.events, l)) && (i = false);
    }), i) : false;
  }
  function va(t) {
    return Xe(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
  }
  function P_(t) {
    if (Xe(t, false) && t.includes(":")) {
      const e = t.split(":");
      if (e.length === 3) {
        const n = e[0] + ":" + e[1];
        return !!e[2] && va(n);
      }
    }
    return false;
  }
  function R_(t, e) {
    let n = null;
    return Xe(t == null ? void 0 : t.publicKey, false) || (n = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)), n;
  }
  function cf(t) {
    let e = true;
    return us(t) ? t.length && (e = t.every((n) => Xe(n, false))) : e = false, e;
  }
  function $_(t, e, n) {
    let s = null;
    return us(e) && e.length ? e.forEach((r) => {
      s || va(r) || (s = Ge("UNSUPPORTED_CHAINS", `${n}, chain ${r} should be a string and conform to "namespace:chainId" format`));
    }) : va(t) || (s = Ge("UNSUPPORTED_CHAINS", `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
  }
  function U_(t, e, n) {
    let s = null;
    return Object.entries(t).forEach(([r, i]) => {
      if (s) return;
      const o = $_(r, nm(r, i), `${e} ${n}`);
      o && (s = o);
    }), s;
  }
  function D_(t, e) {
    let n = null;
    return us(t) ? t.forEach((s) => {
      n || P_(s) || (n = Ge("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
    }) : n = Ge("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n;
  }
  function B_(t, e) {
    let n = null;
    return Object.values(t).forEach((s) => {
      if (n) return;
      const r = D_(s == null ? void 0 : s.accounts, `${e} namespace`);
      r && (n = r);
    }), n;
  }
  function L_(t, e) {
    let n = null;
    return cf(t == null ? void 0 : t.methods) ? cf(t == null ? void 0 : t.events) || (n = Ge("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : n = Ge("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), n;
  }
  function Xm(t, e) {
    let n = null;
    return Object.values(t).forEach((s) => {
      if (n) return;
      const r = L_(s, `${e}, namespace`);
      r && (n = r);
    }), n;
  }
  function M_(t, e, n) {
    let s = null;
    if (t && Fn(t)) {
      const r = Xm(t, e);
      r && (s = r);
      const i = U_(t, e, n);
      i && (s = i);
    } else s = ce("MISSING_OR_INVALID", `${e}, ${n} should be an object with data`);
    return s;
  }
  function Mc(t, e) {
    let n = null;
    if (t && Fn(t)) {
      const s = Xm(t, e);
      s && (n = s);
      const r = B_(t, e);
      r && (n = r);
    } else n = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return n;
  }
  function Qm(t) {
    return Xe(t.protocol, true);
  }
  function F_(t, e) {
    let n = false;
    return t ? t && us(t) && t.length && t.forEach((s) => {
      n = Qm(s);
    }) : n = true, n;
  }
  function j_(t) {
    return typeof t == "number";
  }
  function hn(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function q_(t) {
    return !(!t || typeof t != "object" || !t.code || !Rd(t.code) || !t.message || !Xe(t.message, false));
  }
  function W_(t) {
    return !(Kt(t) || !Xe(t.method, false));
  }
  function H_(t) {
    return !(Kt(t) || Kt(t.result) && Kt(t.error) || !Rd(t.id) || !Xe(t.jsonrpc, false));
  }
  function V_(t) {
    return !(Kt(t) || !Xe(t.name, false));
  }
  function lf(t, e) {
    return !(!va(e) || !Jm(t).includes(e));
  }
  function K_(t, e, n) {
    return Xe(n, false) ? N_(t, e).includes(n) : false;
  }
  function z_(t, e, n) {
    return Xe(n, false) ? S_(t, e).includes(n) : false;
  }
  function df(t, e, n) {
    let s = null;
    const r = G_(t), i = Y_(e), o = Object.keys(r), a = Object.keys(i), c = uf(Object.keys(t)), l = uf(Object.keys(e)), d = c.filter((u) => !l.includes(u));
    return d.length && (s = ce("NON_CONFORMING_NAMESPACES", `${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), fr(o, a) || (s = ce("NON_CONFORMING_NAMESPACES", `${n} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((u) => {
      if (!u.includes(":") || s) return;
      const h = mi(e[u].accounts);
      h.includes(u) || (s = ce("NON_CONFORMING_NAMESPACES", `${n} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${h.toString()}`));
    }), o.forEach((u) => {
      s || (fr(r[u].methods, i[u].methods) ? fr(r[u].events, i[u].events) || (s = ce("NON_CONFORMING_NAMESPACES", `${n} namespaces events don't satisfy namespace events for ${u}`)) : s = ce("NON_CONFORMING_NAMESPACES", `${n} namespaces methods don't satisfy namespace methods for ${u}`));
    }), s;
  }
  function G_(t) {
    const e = {};
    return Object.keys(t).forEach((n) => {
      var s;
      n.includes(":") ? e[n] = t[n] : (s = t[n].chains) == null || s.forEach((r) => {
        e[r] = {
          methods: t[n].methods,
          events: t[n].events
        };
      });
    }), e;
  }
  function uf(t) {
    return [
      ...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))
    ];
  }
  function Y_(t) {
    const e = {};
    return Object.keys(t).forEach((n) => {
      var _a2;
      n.includes(":") ? e[n] = t[n] : (_a2 = mi(t[n].accounts)) == null ? void 0 : _a2.forEach((r) => {
        e[r] = {
          accounts: t[n].accounts.filter((i) => i.includes(`${r}:`)),
          methods: t[n].methods,
          events: t[n].events
        };
      });
    }), e;
  }
  function Z_(t, e) {
    return Rd(t) && t <= e.max && t >= e.min;
  }
  const Fc = {};
  class Ti {
    static get(e) {
      return Fc[e];
    }
    static set(e, n) {
      Fc[e] = n;
    }
    static delete(e) {
      delete Fc[e];
    }
  }
  function J_(t) {
    const e = wo.decode(t);
    if (e.length < 33) throw new Error("Too short to contain a public key");
    return e.slice(1, 33);
  }
  function X_({ publicKey: t, signature: e, payload: n }) {
    var s;
    const r = Vl(n.method), i = 128 | parseInt(((s = n.version) == null ? void 0 : s.toString()) || "4"), o = tT(n.address), a = n.era === "00" ? new Uint8Array([
      0
    ]) : Vl(n.era);
    if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
    const c = parseInt(n.nonce, 16), l = new Uint8Array([
      c & 255,
      c >> 8 & 255
    ]), d = BigInt(`0x${eT(n.tip)}`), u = sT(d), h = new Uint8Array([
      0,
      ...t,
      o,
      ...e,
      ...a,
      ...l,
      ...u,
      ...r
    ]), f = nT(h.length + 1);
    return new Uint8Array([
      ...f,
      i,
      ...h
    ]);
  }
  function Q_(t) {
    const e = Vl(t), n = Gw.blake2b(e, void 0, 32);
    return "0x" + Ae.from(n).toString("hex");
  }
  function Vl(t) {
    return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
  }
  function eT(t) {
    return t.startsWith("0x") ? t.slice(2) : t;
  }
  function tT(t) {
    const e = wo.decode(t)[0];
    return e === 42 ? 0 : e === 60 ? 2 : 1;
  }
  function nT(t) {
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
  function sT(t) {
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
  function rT(t) {
    const e = Uint8Array.from(Ae.from(t.signature, "hex")), n = J_(t.transaction.address), s = X_({
      publicKey: n,
      signature: e,
      payload: t.transaction
    }), r = Ae.from(s).toString("hex");
    return Q_(r);
  }
  function ew({ logger: t, name: e }) {
    const n = typeof t == "string" ? Sa({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return n.level = typeof t == "string" ? t : t.level, n;
  }
  const tw = "wc", nw = 2, sw = "client", $d = `${tw}@${nw}:${sw}:`, jc = {
    name: sw,
    logger: "error"
  }, hf = "WALLETCONNECT_DEEPLINK_CHOICE", iT = "proposal", ff = "Proposal expired", oT = "session", Wr = K.SEVEN_DAYS, aT = "engine", st = {
    wc_sessionPropose: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: true,
        tag: 1100
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1101
      },
      reject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1120
      },
      autoReject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1121
      }
    },
    wc_sessionSettle: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1102
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1103
      }
    },
    wc_sessionUpdate: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1104
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1105
      }
    },
    wc_sessionExtend: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1106
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1107
      }
    },
    wc_sessionRequest: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: true,
        tag: 1108
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1109
      }
    },
    wc_sessionEvent: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: true,
        tag: 1110
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1111
      }
    },
    wc_sessionDelete: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1112
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1113
      }
    },
    wc_sessionPing: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1114
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1115
      }
    },
    wc_sessionAuthenticate: {
      req: {
        ttl: K.ONE_HOUR,
        prompt: true,
        tag: 1116
      },
      res: {
        ttl: K.ONE_HOUR,
        prompt: false,
        tag: 1117
      },
      reject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1118
      },
      autoReject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1119
      }
    }
  }, qc = {
    min: K.FIVE_MINUTES,
    max: K.SEVEN_DAYS
  }, kn = {
    idle: "IDLE",
    active: "ACTIVE"
  }, cT = {
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
  }, lT = "request", dT = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate"
  ], uT = "wc", hT = "auth", fT = "authKeys", pT = "pairingTopics", gT = "requests", za = `${uT}@${1.5}:${hT}:`, Xo = `${za}:PUB_KEY`;
  var mT = Object.defineProperty, wT = Object.defineProperties, yT = Object.getOwnPropertyDescriptors, pf = Object.getOwnPropertySymbols, bT = Object.prototype.hasOwnProperty, ET = Object.prototype.propertyIsEnumerable, Kl = (t, e, n) => e in t ? mT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, _e = (t, e) => {
    for (var n in e || (e = {})) bT.call(e, n) && Kl(t, n, e[n]);
    if (pf) for (var n of pf(e)) ET.call(e, n) && Kl(t, n, e[n]);
    return t;
  }, rt = (t, e) => wT(t, yT(e)), W = (t, e, n) => Kl(t, typeof e != "symbol" ? e + "" : e, n);
  class vT extends XA {
    constructor(e) {
      super(e), W(this, "name", aT), W(this, "events", new rd()), W(this, "initialized", false), W(this, "requestQueue", {
        state: kn.idle,
        queue: []
      }), W(this, "sessionRequestQueue", {
        state: kn.idle,
        queue: []
      }), W(this, "emittedSessionRequests", new qN({
        limit: 500
      })), W(this, "requestQueueDelay", K.ONE_SECOND), W(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), W(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), W(this, "recentlyDeletedLimit", 200), W(this, "relayMessageCache", []), W(this, "pendingSessions", /* @__PURE__ */ new Map()), W(this, "init", async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
          methods: Object.keys(st)
        }), this.initialized = true, setTimeout(async () => {
          await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, K.toMiliseconds(this.requestQueueDelay)));
      }), W(this, "connect", async (n) => {
        var s;
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const r = rt(_e({}, n), {
          requiredNamespaces: n.requiredNamespaces || {},
          optionalNamespaces: n.optionalNamespaces || {}
        });
        await this.isValidConnect(r), r.optionalNamespaces = T_(r.requiredNamespaces, r.optionalNamespaces), r.requiredNamespaces = {};
        const { pairingTopic: i, requiredNamespaces: o, optionalNamespaces: a, sessionProperties: c, scopedProperties: l, relays: d, authentication: u, walletPay: h } = r, f = ((s = u == null ? void 0 : u[0]) == null ? void 0 : s.ttl) || st.wc_sessionPropose.req.ttl || K.FIVE_MINUTES;
        this.validateRequestExpiry(f);
        let g = i, p, m = false;
        try {
          if (g) {
            const x = this.client.core.pairing.pairings.get(g);
            this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), m = x.active;
          }
        } catch (x) {
          throw this.client.logger.error(`connect() -> pairing.get(${g}) failed`), x;
        }
        if (!g || !m) {
          const { topic: x, uri: B } = await this.client.core.pairing.create({
            internal: {
              skipSubscribe: true
            }
          });
          g = x, p = B;
        }
        if (!g) {
          const { message: x } = ce("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
          throw new Error(x);
        }
        const T = await this.client.core.crypto.generateKeyPair(), O = Ct(f), A = _e(rt(_e(_e({
          requiredNamespaces: o,
          optionalNamespaces: a,
          relays: d ?? [
            {
              protocol: gg
            }
          ],
          proposer: {
            publicKey: T,
            metadata: this.client.metadata
          },
          expiryTimestamp: O,
          pairingTopic: g
        }, c && {
          sessionProperties: c
        }), l && {
          scopedProperties: l
        }), {
          id: ps()
        }), (u || h) && {
          requests: {
            authentication: u == null ? void 0 : u.map((x) => {
              const { domain: B, chains: M, nonce: _, uri: y, exp: E, nbf: w, type: v, statement: I, requestId: k, resources: C, signatureTypes: S } = x;
              return {
                domain: B,
                chains: M,
                nonce: _,
                type: v ?? "caip122",
                aud: y,
                version: "1",
                iat: (/* @__PURE__ */ new Date()).toISOString(),
                exp: E,
                nbf: w,
                statement: I,
                requestId: k,
                resources: C,
                signatureTypes: S
              };
            }),
            walletPay: h
          }
        }), N = Re("session_connect", A.id), { reject: P, resolve: U, done: D } = Fr(f, ff), L = ({ id: x }) => {
          x === A.id && (this.client.events.off("proposal_expire", L), this.pendingSessions.delete(A.id), this.events.emit(N, {
            error: {
              message: ff,
              code: 0
            }
          }));
        };
        return this.client.events.on("proposal_expire", L), this.events.once(N, ({ error: x, session: B }) => {
          this.client.events.off("proposal_expire", L), x ? P(x) : B && U(B);
        }), await this.setProposal(A.id, A), await this.sendProposeSession({
          proposal: A,
          publishOpts: {
            internal: {
              throwOnFailedPublish: true
            },
            tvf: {
              correlationId: A.id
            }
          }
        }).catch((x) => {
          throw this.deleteProposal(A.id), x;
        }), {
          uri: p,
          approval: D
        };
      }), W(this, "pair", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          return await this.client.core.pairing.pair(n);
        } catch (s) {
          throw this.client.logger.error("pair() failed"), s;
        }
      }), W(this, "approve", async (n) => {
        var s, r, i;
        const o = this.client.core.eventClient.createEvent({
          properties: {
            topic: (s = n == null ? void 0 : n.id) == null ? void 0 : s.toString(),
            trace: [
              un.session_approve_started
            ]
          }
        });
        try {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
        } catch (B) {
          throw o.setError(Xs.no_internet_connection), B;
        }
        try {
          await this.isValidProposalId(n == null ? void 0 : n.id);
        } catch (B) {
          throw this.client.logger.error(`approve() -> proposal.get(${n == null ? void 0 : n.id}) failed`), o.setError(Xs.proposal_not_found), B;
        }
        try {
          await this.isValidApprove(n);
        } catch (B) {
          throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(Xs.session_approve_namespace_validation_failure), B;
        }
        const { id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: f } = n, g = this.client.proposal.get(a);
        this.client.core.eventClient.deleteEvent({
          eventId: o.eventId
        });
        const { pairingTopic: p, proposer: m, requiredNamespaces: T, optionalNamespaces: O } = g;
        let A = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
          topic: p
        });
        A || (A = (i = this.client.core.eventClient) == null ? void 0 : i.createEvent({
          type: un.session_approve_started,
          properties: {
            topic: p,
            trace: [
              un.session_approve_started,
              un.session_namespaces_validation_success
            ]
          }
        }));
        const N = await this.client.core.crypto.generateKeyPair(), P = m.publicKey, U = await this.client.core.crypto.generateSharedKey(N, P), D = rt(_e(_e(_e({
          relay: {
            protocol: c ?? "irn"
          },
          namespaces: l,
          controller: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiry: Ct(Wr)
        }, d && {
          sessionProperties: d
        }), u && {
          scopedProperties: u
        }), h && {
          sessionConfig: h
        }), {
          proposalRequestsResponses: f
        }), L = Ue.relay;
        A.addTrace(un.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(U, {
            transportType: L,
            internal: {
              skipSubscribe: true
            }
          });
        } catch (B) {
          throw A.setError(Xs.subscribe_session_topic_failure), B;
        }
        A.addTrace(un.subscribe_session_topic_success);
        const x = rt(_e({}, D), {
          topic: U,
          requiredNamespaces: T,
          optionalNamespaces: O,
          pairingTopic: p,
          acknowledged: false,
          self: D.controller,
          peer: {
            publicKey: m.publicKey,
            metadata: m.metadata
          },
          controller: N,
          transportType: Ue.relay,
          authentication: f == null ? void 0 : f.authentication,
          walletPayResult: f == null ? void 0 : f.walletPay
        });
        await this.client.session.set(U, x), A.addTrace(un.store_session);
        try {
          await this.sendApproveSession({
            sessionTopic: U,
            proposal: g,
            pairingProposalResponse: {
              relay: {
                protocol: c ?? "irn"
              },
              responderPublicKey: N
            },
            sessionSettleRequest: D,
            publishOpts: {
              internal: {
                throwOnFailedPublish: true
              },
              tvf: _e({
                correlationId: a
              }, this.getTVFApproveParams(x))
            }
          }), A.addTrace(un.session_approve_publish_success);
        } catch (B) {
          throw this.client.logger.error(B), this.client.session.delete(U, Ge("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(U), B;
        }
        return this.client.core.eventClient.deleteEvent({
          eventId: A.eventId
        }), await this.client.core.pairing.updateMetadata({
          topic: p,
          metadata: m.metadata
        }), await this.deleteProposal(a), await this.client.core.pairing.activate({
          topic: p
        }), await this.setExpiry(U, Ct(Wr)), {
          topic: U,
          acknowledged: () => Promise.resolve(this.client.session.get(U))
        };
      }), W(this, "reject", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidReject(n);
        } catch (o) {
          throw this.client.logger.error("reject() -> isValidReject() failed"), o;
        }
        const { id: s, reason: r } = n;
        let i;
        try {
          i = this.client.proposal.get(s).pairingTopic;
        } catch (o) {
          throw this.client.logger.error(`reject() -> proposal.get(${s}) failed`), o;
        }
        i && await this.sendError({
          id: s,
          topic: i,
          error: r,
          rpcOpts: st.wc_sessionPropose.reject
        }), await this.deleteProposal(s);
      }), W(this, "update", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(n);
        } catch (u) {
          throw this.client.logger.error("update() -> isValidUpdate() failed"), u;
        }
        const { topic: s, namespaces: r } = n, { done: i, resolve: o, reject: a } = Fr(K.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), c = ps(), l = cr().toString(), d = this.client.session.get(s).namespaces;
        return this.events.once(Re("session_update", c), ({ error: u }) => {
          u ? a(u) : o();
        }), await this.client.session.update(s, {
          namespaces: r
        }), await this.sendRequest({
          topic: s,
          method: "wc_sessionUpdate",
          params: {
            namespaces: r
          },
          throwOnFailedPublish: true,
          clientRpcId: c,
          relayRpcId: l
        }).catch((u) => {
          this.client.logger.error(u), this.client.session.update(s, {
            namespaces: d
          }), a(u);
        }), {
          acknowledged: i
        };
      }), W(this, "extend", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidExtend(n);
        } catch (c) {
          throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
        }
        const { topic: s } = n, r = ps(), { done: i, resolve: o, reject: a } = Fr(K.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
        return this.events.once(Re("session_extend", r), ({ error: c }) => {
          c ? a(c) : o();
        }), await this.setExpiry(s, Ct(Wr)), this.sendRequest({
          topic: s,
          method: "wc_sessionExtend",
          params: {},
          clientRpcId: r,
          throwOnFailedPublish: true
        }).catch((c) => {
          a(c);
        }), {
          acknowledged: i
        };
      }), W(this, "request", async (n) => {
        this.isInitialized();
        try {
          await this.isValidRequest(n);
        } catch (m) {
          throw this.client.logger.error("request() -> isValidRequest() failed"), m;
        }
        const { chainId: s, request: r, topic: i, expiry: o = st.wc_sessionRequest.req.ttl } = n, a = this.client.session.get(i);
        (a == null ? void 0 : a.transportType) === Ue.relay && await this.confirmOnlineStateOrThrow();
        const c = ps(), l = cr().toString(), { done: d, resolve: u, reject: h } = Fr(o, "Request expired. Please try again.");
        this.events.once(Re("session_request", c), ({ error: m, result: T }) => {
          m ? h(m) : u(T);
        });
        const f = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
        if (g) return await this.sendRequest({
          clientRpcId: c,
          relayRpcId: l,
          topic: i,
          method: f,
          params: {
            request: rt(_e({}, r), {
              expiryTimestamp: Ct(o)
            }),
            chainId: s
          },
          expiry: o,
          throwOnFailedPublish: true,
          appLink: g
        }).catch((m) => h(m)), this.client.events.emit("session_request_sent", {
          topic: i,
          request: r,
          chainId: s,
          id: c
        }), await d();
        const p = {
          request: rt(_e({}, r), {
            expiryTimestamp: Ct(o)
          }),
          chainId: s
        };
        return await Promise.all([
          new Promise(async (m) => {
            await this.sendRequest({
              clientRpcId: c,
              relayRpcId: l,
              topic: i,
              method: f,
              params: p,
              expiry: o,
              throwOnFailedPublish: true,
              tvf: this.getTVFParams(c, p)
            }).catch((T) => h(T)), this.client.events.emit("session_request_sent", {
              topic: i,
              request: r,
              chainId: s,
              id: c
            }), m();
          }),
          new Promise(async (m) => {
            var T;
            if (!((T = a.sessionConfig) != null && T.disableDeepLink)) {
              const O = await BN(this.client.core.storage, hf);
              await $N({
                id: c,
                topic: i,
                wcDeepLink: O
              });
            }
            m();
          }),
          d()
        ]).then((m) => m[2]);
      }), W(this, "respond", async (n) => {
        var s, r;
        this.isInitialized();
        const i = this.client.core.eventClient.createEvent({
          properties: {
            topic: (n == null ? void 0 : n.topic) || ((r = (s = n == null ? void 0 : n.response) == null ? void 0 : s.id) == null ? void 0 : r.toString()),
            trace: [
              un.session_request_response_started
            ]
          }
        });
        try {
          await this.isValidRespond(n);
        } catch (u) {
          throw i.addTrace(u == null ? void 0 : u.message), i.setError(Xs.session_request_response_validation_failure), u;
        }
        i.addTrace(un.session_request_response_validation_success);
        const { topic: o, response: a } = n, { id: c } = a, l = this.client.session.get(o);
        l.transportType === Ue.relay && await this.confirmOnlineStateOrThrow();
        const d = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
        try {
          i.addTrace(un.session_request_response_publish_started), zn(a) ? await this.sendResult({
            id: c,
            topic: o,
            result: a.result,
            throwOnFailedPublish: true,
            appLink: d
          }) : Rn(a) && await this.sendError({
            id: c,
            topic: o,
            error: a.error,
            appLink: d
          }), this.cleanupAfterResponse(n);
        } catch (u) {
          throw i.addTrace(u == null ? void 0 : u.message), i.setError(Xs.session_request_response_publish_failure), u;
        }
      }), W(this, "ping", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidPing(n);
        } catch (r) {
          throw this.client.logger.error("ping() -> isValidPing() failed"), r;
        }
        const { topic: s } = n;
        if (this.client.session.keys.includes(s)) {
          const r = ps(), i = cr().toString(), { done: o, resolve: a, reject: c } = Fr(K.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
          this.events.once(Re("session_ping", r), ({ error: l }) => {
            l ? c(l) : a();
          }), await Promise.all([
            this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
              throwOnFailedPublish: true,
              clientRpcId: r,
              relayRpcId: i
            }),
            o()
          ]);
        } else this.client.core.pairing.pairings.keys.includes(s) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({
          topic: s
        }));
      }), W(this, "emit", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(n);
        const { topic: s, event: r, chainId: i } = n, o = cr().toString(), a = ps();
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: {
            event: r,
            chainId: i
          },
          throwOnFailedPublish: true,
          relayRpcId: o,
          clientRpcId: a
        });
      }), W(this, "disconnect", async (n) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(n);
        const { topic: s } = n;
        if (this.client.session.keys.includes(s)) await this.sendRequest({
          topic: s,
          method: "wc_sessionDelete",
          params: Ge("USER_DISCONNECTED"),
          throwOnFailedPublish: true
        }), await this.deleteSession({
          topic: s,
          emitEvent: false
        });
        else if (this.client.core.pairing.pairings.keys.includes(s)) await this.client.core.pairing.disconnect({
          topic: s
        });
        else {
          const { message: r } = ce("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
          throw new Error(r);
        }
      }), W(this, "find", (n) => (this.isInitialized(), this.client.session.getAll().filter((s) => k_(s, n)))), W(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), W(this, "authenticate", async (n, s) => {
        var r;
        this.isInitialized(), this.isValidAuthenticate(n);
        const i = s && this.client.core.linkModeSupportedApps.includes(s) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode), o = i ? Ue.link_mode : Ue.relay;
        o === Ue.relay && await this.confirmOnlineStateOrThrow();
        const { chains: a, statement: c = "", uri: l, domain: d, nonce: u, type: h, exp: f, nbf: g, methods: p = [], expiry: m } = n, T = [
          ...n.resources || []
        ], { topic: O, uri: A } = await this.client.core.pairing.create({
          methods: [
            "wc_sessionAuthenticate"
          ],
          transportType: o
        });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: {
            topic: O,
            uri: A
          }
        });
        const N = await this.client.core.crypto.generateKeyPair(), P = Lc(N);
        if (await Promise.all([
          this.client.auth.authKeys.set(Xo, {
            responseTopic: P,
            publicKey: N
          }),
          this.client.auth.pairingTopics.set(P, {
            topic: P,
            pairingTopic: O
          })
        ]), await this.client.core.relayer.subscribe(P, {
          transportType: o
        }), this.client.logger.info(`sending request to new pairing topic: ${O}`), p.length > 0) {
          const { namespace: C } = ls(a[0]);
          let S = eS(C, "request", p);
          Jo(T) && (S = nS(S, T.pop())), T.push(S);
        }
        const U = m && m > st.wc_sessionAuthenticate.req.ttl ? m : st.wc_sessionAuthenticate.req.ttl, D = {
          authPayload: {
            type: h ?? "caip122",
            chains: a,
            statement: c,
            aud: l,
            domain: d,
            version: "1",
            nonce: u,
            iat: (/* @__PURE__ */ new Date()).toISOString(),
            exp: f,
            nbf: g,
            resources: T
          },
          requester: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiryTimestamp: Ct(U)
        }, L = {
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
        }, x = {
          requiredNamespaces: {},
          optionalNamespaces: L,
          relays: [
            {
              protocol: "irn"
            }
          ],
          pairingTopic: O,
          proposer: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiryTimestamp: Ct(st.wc_sessionPropose.req.ttl),
          id: ps()
        }, { done: B, resolve: M, reject: _ } = Fr(U, "Request expired"), y = ps(), E = Re("session_connect", x.id), w = Re("session_request", y), v = async ({ error: C, session: S }) => {
          this.events.off(w, I), C ? _(C) : S && M({
            session: S
          });
        }, I = async (C) => {
          var S, R, $;
          if (await this.deletePendingAuthRequest(y, {
            message: "fulfilled",
            code: 0
          }), C.error) {
            const X = Ge("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
            return C.error.code === X.code ? void 0 : (this.events.off(E, v), _(C.error.message));
          }
          await this.deleteProposal(x.id), this.events.off(E, v);
          const { cacaos: Y, responder: z } = C.result, q = [], J = [];
          for (const X of Y) {
            await Fh({
              cacao: X,
              projectId: this.client.core.projectId
            }) || (this.client.logger.error(X, "Signature verification failed"), _(Ge("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
            const { p: ue } = X, Me = Jo(ue.resources), qe = [
              Ul(ue.iss)
            ], je = wa(ue.iss);
            if (Me) {
              const bt = jh(Me), fs = qh(Me);
              q.push(...bt), qe.push(...fs);
            }
            for (const bt of qe) J.push(`${bt}:${je}`);
          }
          const Z = await this.client.core.crypto.generateSharedKey(N, z.publicKey);
          let de;
          q.length > 0 && (de = {
            topic: Z,
            acknowledged: true,
            self: {
              publicKey: N,
              metadata: this.client.metadata
            },
            peer: z,
            controller: z.publicKey,
            expiry: Ct(Wr),
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: O,
            namespaces: af([
              ...new Set(q)
            ], [
              ...new Set(J)
            ]),
            transportType: o
          }, await this.client.core.relayer.subscribe(Z, {
            transportType: o
          }), await this.client.session.set(Z, de), O && await this.client.core.pairing.updateMetadata({
            topic: O,
            metadata: z.metadata
          }), de = this.client.session.get(Z)), (S = this.client.metadata.redirect) != null && S.linkMode && (R = z.metadata.redirect) != null && R.linkMode && ($ = z.metadata.redirect) != null && $.universal && s && (this.client.core.addLinkModeSupportedApp(z.metadata.redirect.universal), this.client.session.update(Z, {
            transportType: Ue.link_mode
          })), M({
            auths: Y,
            session: de
          });
        };
        this.events.once(E, v), this.events.once(w, I);
        let k;
        try {
          if (i) {
            const C = $n("wc_sessionAuthenticate", D, y);
            this.client.core.history.set(O, C);
            const S = await this.client.core.crypto.encode("", C, {
              type: g_,
              encoding: _i
            });
            k = Lo(s, O, S);
          } else await Promise.all([
            this.sendRequest({
              topic: O,
              method: "wc_sessionAuthenticate",
              params: D,
              expiry: n.expiry,
              throwOnFailedPublish: true,
              clientRpcId: y
            }),
            this.sendRequest({
              topic: O,
              method: "wc_sessionPropose",
              params: x,
              expiry: st.wc_sessionPropose.req.ttl,
              throwOnFailedPublish: true,
              clientRpcId: x.id
            })
          ]);
        } catch (C) {
          throw this.events.off(E, v), this.events.off(w, I), C;
        }
        return await this.setProposal(x.id, x), await this.setAuthRequest(y, {
          request: rt(_e({}, D), {
            verifyContext: {}
          }),
          pairingTopic: O,
          transportType: o
        }), {
          uri: k ?? A,
          response: B
        };
      }), W(this, "approveSessionAuthenticate", async (n) => {
        const { id: s, auths: r } = n, i = this.client.core.eventClient.createEvent({
          properties: {
            topic: s.toString(),
            trace: [
              Qs.authenticated_session_approve_started
            ]
          }
        });
        try {
          this.isInitialized();
        } catch (m) {
          throw i.setError(Ci.no_internet_connection), m;
        }
        const o = this.getPendingAuthRequest(s);
        if (!o) throw i.setError(Ci.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${s}`);
        const a = o.transportType || Ue.relay;
        a === Ue.relay && await this.confirmOnlineStateOrThrow();
        const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), d = Lc(c), u = {
          type: Bc,
          receiverPublicKey: c,
          senderPublicKey: l
        }, h = [], f = [];
        for (const m of r) {
          if (!await Fh({
            cacao: m,
            projectId: this.client.core.projectId
          })) {
            i.setError(Ci.invalid_cacao);
            const P = Ge("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
            throw await this.sendError({
              id: s,
              topic: d,
              error: P,
              encodeOpts: u
            }), new Error(P.message);
          }
          i.addTrace(Qs.cacaos_verified);
          const { p: T } = m, O = Jo(T.resources), A = [
            Ul(T.iss)
          ], N = wa(T.iss);
          if (O) {
            const P = jh(O), U = qh(O);
            h.push(...P), A.push(...U);
          }
          for (const P of A) f.push(`${P}:${N}`);
        }
        const g = await this.client.core.crypto.generateSharedKey(l, c);
        i.addTrace(Qs.create_authenticated_session_topic);
        let p;
        if ((h == null ? void 0 : h.length) > 0) {
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
            expiry: Ct(Wr),
            authentication: r,
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: o.pairingTopic,
            namespaces: af([
              ...new Set(h)
            ], [
              ...new Set(f)
            ]),
            transportType: a
          }, i.addTrace(Qs.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(g, {
              transportType: a
            });
          } catch (m) {
            throw i.setError(Ci.subscribe_authenticated_session_topic_failure), m;
          }
          i.addTrace(Qs.subscribe_authenticated_session_topic_success), await this.client.session.set(g, p), i.addTrace(Qs.store_authenticated_session), await this.client.core.pairing.updateMetadata({
            topic: o.pairingTopic,
            metadata: o.requester.metadata
          });
        }
        i.addTrace(Qs.publishing_authenticated_session_approve);
        try {
          await this.sendResult({
            topic: d,
            id: s,
            result: {
              cacaos: r,
              responder: {
                publicKey: l,
                metadata: this.client.metadata
              }
            },
            encodeOpts: u,
            throwOnFailedPublish: true,
            appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
          });
        } catch (m) {
          throw i.setError(Ci.authenticated_session_approve_publish_failure), m;
        }
        return await this.client.auth.requests.delete(s, {
          message: "fulfilled",
          code: 0
        }), await this.client.core.pairing.activate({
          topic: o.pairingTopic
        }), this.client.core.eventClient.deleteEvent({
          eventId: i.eventId
        }), {
          session: p
        };
      }), W(this, "rejectSessionAuthenticate", async (n) => {
        this.isInitialized();
        const { id: s, reason: r } = n, i = this.getPendingAuthRequest(s);
        if (!i) throw new Error(`Could not find pending auth request with id ${s}`);
        i.transportType === Ue.relay && await this.confirmOnlineStateOrThrow();
        const o = i.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = Lc(o), l = {
          type: Bc,
          receiverPublicKey: o,
          senderPublicKey: a
        };
        await this.sendError({
          id: s,
          topic: c,
          error: r,
          encodeOpts: l,
          rpcOpts: st.wc_sessionAuthenticate.reject,
          appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
        }), await this.client.auth.requests.delete(s, {
          message: "rejected",
          code: 0
        }), await this.deleteProposal(s);
      }), W(this, "formatAuthMessage", (n) => {
        this.isInitialized();
        const { request: s, iss: r } = n;
        return vm(s, r);
      }), W(this, "processRelayMessageCache", () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
            const n = this.relayMessageCache.shift();
            n && await this.onRelayMessage(n);
          } catch (n) {
            this.client.logger.error(n);
          }
        }, 50);
      }), W(this, "cleanupDuplicatePairings", async (n) => {
        if (n.pairingTopic) try {
          const s = this.client.core.pairing.pairings.get(n.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((i) => {
            var o, a;
            return ((o = i.peerMetadata) == null ? void 0 : o.url) && ((a = i.peerMetadata) == null ? void 0 : a.url) === n.peer.metadata.url && i.topic && i.topic !== s.topic;
          });
          if (r.length === 0) return;
          this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((i) => this.client.core.pairing.disconnect({
            topic: i.topic
          }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
      }), W(this, "deleteSession", async (n) => {
        var s;
        const { topic: r, expirerHasDeleted: i = false, emitEvent: o = true, id: a = 0 } = n, { self: c } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, Ge("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(hf).catch((l) => this.client.logger.warn(l)), r === ((s = this.sessionRequestQueue.queue[0]) == null ? void 0 : s.topic) && (this.sessionRequestQueue.state = kn.idle), await Promise.all(this.getPendingSessionRequests().filter((l) => l.topic === r).map((l) => this.deletePendingSessionRequest(l.id, Ge("USER_DISCONNECTED")))), o && this.client.events.emit("session_delete", {
          id: a,
          topic: r
        });
      }), W(this, "deleteProposal", async (n, s) => {
        var _a2;
        if (s) try {
          const r = this.client.proposal.get(n);
          (_a2 = this.client.core.eventClient.getEvent({
            topic: r.pairingTopic
          })) == null ? void 0 : _a2.setError(Xs.proposal_expired);
        } catch {
        }
        await Promise.all([
          this.client.proposal.delete(n, Ge("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(n)
        ]), this.addToRecentlyDeleted(n, "proposal");
      }), W(this, "deletePendingSessionRequest", async (n, s, r = false) => {
        await Promise.all([
          this.client.pendingRequest.delete(n, s),
          r ? Promise.resolve() : this.client.core.expirer.del(n)
        ]), this.addToRecentlyDeleted(n, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== n), r && (this.sessionRequestQueue.state = kn.idle, this.client.events.emit("session_request_expire", {
          id: n
        }));
      }), W(this, "deletePendingAuthRequest", async (n, s, r = false) => {
        await Promise.all([
          this.client.auth.requests.delete(n, s),
          r ? Promise.resolve() : this.client.core.expirer.del(n)
        ]);
      }), W(this, "setExpiry", async (n, s) => {
        this.client.session.keys.includes(n) && (this.client.core.expirer.set(n, s), await this.client.session.update(n, {
          expiry: s
        }));
      }), W(this, "setProposal", async (n, s) => {
        this.client.core.expirer.set(n, Ct(st.wc_sessionPropose.req.ttl)), await this.client.proposal.set(n, s);
      }), W(this, "setAuthRequest", async (n, s) => {
        const { request: r, pairingTopic: i, transportType: o = Ue.relay } = s;
        this.client.core.expirer.set(n, r.expiryTimestamp), await this.client.auth.requests.set(n, {
          authPayload: r.authPayload,
          requester: r.requester,
          expiryTimestamp: r.expiryTimestamp,
          id: n,
          pairingTopic: i,
          verifyContext: r.verifyContext,
          transportType: o
        });
      }), W(this, "setPendingSessionRequest", async (n) => {
        const { id: s, topic: r, params: i, verifyContext: o } = n, a = i.request.expiryTimestamp || Ct(st.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(s, a), await this.client.pendingRequest.set(s, {
          id: s,
          topic: r,
          params: i,
          verifyContext: o
        });
      }), W(this, "sendRequest", async (n) => {
        const { topic: s, method: r, params: i, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: u, publishOpts: h = {} } = n, f = $n(r, i, c);
        let g;
        const p = !!d;
        try {
          const O = p ? _i : er;
          g = await this.client.core.crypto.encode(s, f, {
            encoding: O
          });
        } catch (O) {
          throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${s} failed`), O;
        }
        let m;
        if (dT.includes(r)) {
          const O = Ts(JSON.stringify(f)), A = Ts(g);
          m = await this.client.core.verify.register({
            id: A,
            decryptedId: O
          });
        }
        const T = _e(_e({}, st[r].req), h);
        if (T.attestation = m, o && (T.ttl = o), a && (T.id = a), this.client.core.history.set(s, f), p) {
          const O = Lo(d, s, g);
          await globalThis.Linking.openURL(O, this.client.name);
        } else T.tvf = rt(_e({}, u), {
          correlationId: f.id
        }), l ? (T.internal = rt(_e({}, T.internal), {
          throwOnFailedPublish: true
        }), await this.client.core.relayer.publish(s, g, T)) : this.client.core.relayer.publish(s, g, T).catch((O) => this.client.logger.error(O));
        return f.id;
      }), W(this, "sendProposeSession", async (n) => {
        const { proposal: s, publishOpts: r } = n, i = $n("wc_sessionPropose", s, s.id);
        this.client.core.history.set(s.pairingTopic, i);
        const o = await this.client.core.crypto.encode(s.pairingTopic, i, {
          encoding: er
        }), a = Ts(JSON.stringify(i)), c = Ts(o), l = await this.client.core.verify.register({
          id: c,
          decryptedId: a
        });
        await this.client.core.relayer.publishCustom({
          payload: {
            pairingTopic: s.pairingTopic,
            sessionProposal: o
          },
          opts: rt(_e({}, r), {
            publishMethod: "wc_proposeSession",
            attestation: l
          })
        });
      }), W(this, "sendApproveSession", async (n) => {
        const { sessionTopic: s, pairingProposalResponse: r, proposal: i, sessionSettleRequest: o, publishOpts: a } = n, c = zi(i.id, r), l = await this.client.core.crypto.encode(i.pairingTopic, c, {
          encoding: er
        }), d = $n("wc_sessionSettle", o, a == null ? void 0 : a.id), u = await this.client.core.crypto.encode(s, d, {
          encoding: er
        });
        this.client.core.history.set(s, d), await this.client.core.relayer.publishCustom({
          payload: {
            sessionTopic: s,
            pairingTopic: i.pairingTopic,
            sessionProposalResponse: l,
            sessionSettlementRequest: u
          },
          opts: rt(_e({}, a), {
            publishMethod: "wc_approveSession"
          })
        });
      }), W(this, "sendResult", async (n) => {
        const { id: s, topic: r, result: i, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = n, l = zi(s, i);
        let d;
        const u = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const g = u ? _i : er;
          d = await this.client.core.crypto.encode(r, l, rt(_e({}, a || {}), {
            encoding: g
          }));
        } catch (g) {
          throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`), g;
        }
        let h, f;
        try {
          h = await this.client.core.history.get(r, s);
          const g = h.request;
          try {
            f = this.getTVFParams(s, g.params, i);
          } catch (p) {
            this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${p == null ? void 0 : p.message}`);
          }
        } catch (g) {
          throw this.client.logger.error(`sendResult() -> history.get(${r}, ${s}) failed`), g;
        }
        if (u) {
          const g = Lo(c, r, d);
          await globalThis.Linking.openURL(g, this.client.name);
        } else {
          const g = h.request.method, p = st[g].res;
          p.tvf = rt(_e({}, f), {
            correlationId: s
          }), o ? (p.internal = rt(_e({}, p.internal), {
            throwOnFailedPublish: true
          }), await this.client.core.relayer.publish(r, d, p)) : this.client.core.relayer.publish(r, d, p).catch((m) => this.client.logger.error(m));
        }
        await this.client.core.history.resolve(l);
      }), W(this, "sendError", async (n) => {
        const { id: s, topic: r, error: i, encodeOpts: o, rpcOpts: a, appLink: c } = n, l = Xf(s, i);
        let d;
        const u = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const f = u ? _i : er;
          d = await this.client.core.crypto.encode(r, l, rt(_e({}, o || {}), {
            encoding: f
          }));
        } catch (f) {
          throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`), f;
        }
        let h;
        try {
          h = await this.client.core.history.get(r, s);
        } catch (f) {
          throw this.client.logger.error(`sendError() -> history.get(${r}, ${s}) failed`), f;
        }
        if (u) {
          const f = Lo(c, r, d);
          await globalThis.Linking.openURL(f, this.client.name);
        } else {
          const f = h.request.method, g = a || st[f].res;
          this.client.core.relayer.publish(r, d, g);
        }
        await this.client.core.history.resolve(l);
      }), W(this, "cleanup", async () => {
        const n = [], s = [];
        this.client.session.getAll().forEach((r) => {
          let i = false;
          Ps(r.expiry) && (i = true), this.client.core.crypto.keychain.has(r.topic) || (i = true), i && n.push(r.topic);
        }), this.client.proposal.getAll().forEach((r) => {
          Ps(r.expiryTimestamp) && s.push(r.id);
        }), await Promise.all([
          ...n.map((r) => this.deleteSession({
            topic: r
          })),
          ...s.map((r) => this.deleteProposal(r))
        ]);
      }), W(this, "onProviderMessageEvent", async (n) => {
        !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(n) : await this.onRelayMessage(n);
      }), W(this, "onRelayEventRequest", async (n) => {
        this.requestQueue.queue.push(n), await this.processRequestsQueue();
      }), W(this, "processRequestsQueue", async () => {
        if (this.requestQueue.state === kn.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = kn.active;
          const n = this.requestQueue.queue.shift();
          if (n) try {
            await this.processRequest(n);
          } catch (s) {
            this.client.logger.warn(s);
          }
        }
        this.requestQueue.state = kn.idle;
      }), W(this, "processRequest", async (n) => {
        const { topic: s, payload: r, attestation: i, transportType: o, encryptedId: a } = n, c = r.method;
        if (!this.shouldIgnorePairingRequest({
          topic: s,
          requestMethod: c
        })) switch (c) {
          case "wc_sessionPropose":
            return await this.onSessionProposeRequest({
              topic: s,
              payload: r,
              attestation: i,
              encryptedId: a
            });
          case "wc_sessionSettle":
            return await this.onSessionSettleRequest(s, r);
          case "wc_sessionUpdate":
            return await this.onSessionUpdateRequest(s, r);
          case "wc_sessionExtend":
            return await this.onSessionExtendRequest(s, r);
          case "wc_sessionPing":
            return await this.onSessionPingRequest(s, r);
          case "wc_sessionDelete":
            return await this.onSessionDeleteRequest(s, r);
          case "wc_sessionRequest":
            return await this.onSessionRequest({
              topic: s,
              payload: r,
              attestation: i,
              encryptedId: a,
              transportType: o
            });
          case "wc_sessionEvent":
            return await this.onSessionEventRequest(s, r);
          case "wc_sessionAuthenticate":
            return await this.onSessionAuthenticateRequest({
              topic: s,
              payload: r,
              attestation: i,
              encryptedId: a,
              transportType: o
            });
          default:
            return this.client.logger.info(`Unsupported request method ${c}`);
        }
      }), W(this, "onRelayEventResponse", async (n) => {
        const { topic: s, payload: r, transportType: i } = n, o = (await this.client.core.history.get(s, r.id)).request.method;
        switch (o) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, r, i);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, r);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, r);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, r);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, r);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, r);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateResponse(s, r);
          default:
            return this.client.logger.info(`Unsupported response method ${o}`);
        }
      }), W(this, "onRelayEventUnknownPayload", (n) => {
        const { topic: s } = n, { message: r } = ce("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
        throw new Error(r);
      }), W(this, "shouldIgnorePairingRequest", (n) => {
        const { topic: s, requestMethod: r } = n, i = this.expectedPairingMethodMap.get(s);
        return !i || i.includes(r) ? false : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
      }), W(this, "onSessionProposeRequest", async (n) => {
        const { topic: s, payload: r, attestation: i, encryptedId: o } = n, { params: a, id: c } = r;
        try {
          const l = this.client.core.eventClient.getEvent({
            topic: s
          });
          this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null ? void 0 : l.setError(Yn.proposal_listener_not_found)), this.isValidConnect(_e({}, r.params));
          const d = a.expiryTimestamp || Ct(st.wc_sessionPropose.req.ttl), u = _e({
            id: c,
            pairingTopic: s,
            expiryTimestamp: d,
            attestation: i,
            encryptedId: o
          }, a);
          await this.setProposal(c, u);
          const h = await this.getVerifyContext({
            attestationId: i,
            hash: Ts(JSON.stringify(r)),
            encryptedId: o,
            metadata: u.proposer.metadata
          });
          l == null ? void 0 : l.addTrace(Pn.emit_session_proposal), this.client.events.emit("session_proposal", {
            id: c,
            params: u,
            verifyContext: h
          });
        } catch (l) {
          await this.sendError({
            id: c,
            topic: s,
            error: l,
            rpcOpts: st.wc_sessionPropose.autoReject
          }), this.client.logger.error(l);
        }
      }), W(this, "onSessionProposeResponse", async (n, s, r) => {
        const { id: i } = s;
        if (zn(s)) {
          const { result: o } = s;
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
            pairingTopic: n,
            proposalId: i,
            publicKey: c
          });
          const u = await this.client.core.relayer.subscribe(d, {
            transportType: r
          });
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: u
          }), await this.client.core.pairing.activate({
            topic: n
          });
        } else if (Rn(s)) {
          await this.deleteProposal(i);
          const o = Re("session_connect", i);
          if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
          this.events.emit(o, {
            error: s.error
          });
        }
      }), W(this, "onSessionSettleRequest", async (n, s) => {
        const { id: r, params: i } = s;
        try {
          this.isValidSessionSettleRequest(i);
          const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: f } = s.params, g = [
            ...this.pendingSessions.values()
          ].find((T) => T.sessionTopic === n);
          if (!g) return this.client.logger.error(`Pending session not found for topic ${n}`);
          const p = this.client.proposal.get(g.proposalId), m = rt(_e(_e(_e({
            topic: n,
            relay: o,
            expiry: c,
            namespaces: l,
            acknowledged: true,
            pairingTopic: g.pairingTopic,
            requiredNamespaces: p.requiredNamespaces,
            optionalNamespaces: p.optionalNamespaces,
            controller: a.publicKey,
            self: {
              publicKey: g.publicKey,
              metadata: this.client.metadata
            },
            peer: {
              publicKey: a.publicKey,
              metadata: a.metadata
            }
          }, d && {
            sessionProperties: d
          }), u && {
            scopedProperties: u
          }), h && {
            sessionConfig: h
          }), {
            transportType: Ue.relay,
            authentication: f == null ? void 0 : f.authentication,
            walletPayResult: f == null ? void 0 : f.walletPay
          });
          await this.client.session.set(m.topic, m), await this.setExpiry(m.topic, m.expiry), await this.client.core.pairing.updateMetadata({
            topic: g.pairingTopic,
            metadata: m.peer.metadata
          }), this.pendingSessions.delete(g.proposalId), this.deleteProposal(g.proposalId, false), this.cleanupDuplicatePairings(m), await this.sendResult({
            id: s.id,
            topic: n,
            throwOnFailedPublish: true,
            result: true
          }), this.client.events.emit("session_connect", {
            session: m
          }), this.events.emit(Re("session_connect", g.proposalId), {
            session: m
          });
        } catch (o) {
          await this.sendError({
            id: r,
            topic: n,
            error: o
          }), this.client.logger.error(o);
        }
      }), W(this, "onSessionSettleResponse", async (n, s) => {
        const { id: r } = s;
        zn(s) ? (await this.client.session.update(n, {
          acknowledged: true
        }), this.events.emit(Re("session_approve", r), {})) : Rn(s) && (await this.client.session.delete(n, Ge("USER_DISCONNECTED")), this.events.emit(Re("session_approve", r), {
          error: s.error
        }));
      }), W(this, "onSessionUpdateRequest", async (n, s) => {
        const { params: r, id: i } = s;
        try {
          const o = `${n}_session_update`, a = Ti.get(o);
          if (a && this.isRequestOutOfSync(a, i)) {
            this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
              id: i,
              topic: n,
              error: Ge("INVALID_UPDATE_REQUEST")
            });
            return;
          }
          this.isValidUpdate(_e({
            topic: n
          }, r));
          try {
            Ti.set(o, i), await this.client.session.update(n, {
              namespaces: r.namespaces
            }), await this.sendResult({
              id: i,
              topic: n,
              result: true
            });
          } catch (c) {
            throw Ti.delete(o), c;
          }
          this.client.events.emit("session_update", {
            id: i,
            topic: n,
            params: r
          });
        } catch (o) {
          await this.sendError({
            id: i,
            topic: n,
            error: o
          }), this.client.logger.error(o);
        }
      }), W(this, "isRequestOutOfSync", (n, s) => s.toString().slice(0, -3) < n.toString().slice(0, -3)), W(this, "onSessionUpdateResponse", (n, s) => {
        const { id: r } = s, i = Re("session_update", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        zn(s) ? this.events.emit(Re("session_update", r), {}) : Rn(s) && this.events.emit(Re("session_update", r), {
          error: s.error
        });
      }), W(this, "onSessionExtendRequest", async (n, s) => {
        const { id: r } = s;
        try {
          this.isValidExtend({
            topic: n
          }), await this.setExpiry(n, Ct(Wr)), await this.sendResult({
            id: r,
            topic: n,
            result: true
          }), this.client.events.emit("session_extend", {
            id: r,
            topic: n
          });
        } catch (i) {
          await this.sendError({
            id: r,
            topic: n,
            error: i
          }), this.client.logger.error(i);
        }
      }), W(this, "onSessionExtendResponse", (n, s) => {
        const { id: r } = s, i = Re("session_extend", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        zn(s) ? this.events.emit(Re("session_extend", r), {}) : Rn(s) && this.events.emit(Re("session_extend", r), {
          error: s.error
        });
      }), W(this, "onSessionPingRequest", async (n, s) => {
        const { id: r } = s;
        try {
          this.isValidPing({
            topic: n
          }), await this.sendResult({
            id: r,
            topic: n,
            result: true,
            throwOnFailedPublish: true
          }), this.client.events.emit("session_ping", {
            id: r,
            topic: n
          });
        } catch (i) {
          await this.sendError({
            id: r,
            topic: n,
            error: i
          }), this.client.logger.error(i);
        }
      }), W(this, "onSessionPingResponse", (n, s) => {
        const { id: r } = s, i = Re("session_ping", r);
        setTimeout(() => {
          if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners 2176`);
          zn(s) ? this.events.emit(Re("session_ping", r), {}) : Rn(s) && this.events.emit(Re("session_ping", r), {
            error: s.error
          });
        }, 500);
      }), W(this, "onSessionDeleteRequest", async (n, s) => {
        const { id: r } = s;
        try {
          await this.isValidDisconnect({
            topic: n,
            reason: s.params
          }), this.cleanupPendingSentRequestsForTopic({
            topic: n,
            error: Ge("USER_DISCONNECTED")
          }), await this.deleteSession({
            topic: n,
            id: r
          });
        } catch (i) {
          this.client.logger.error(i);
        }
      }), W(this, "onSessionRequest", async (n) => {
        var s, r, i;
        const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: d } = n, { id: u, params: h } = a;
        try {
          await this.isValidRequest(_e({
            topic: o
          }, h));
          const f = this.client.session.get(o), g = await this.getVerifyContext({
            attestationId: c,
            hash: Ts(JSON.stringify($n("wc_sessionRequest", h, u))),
            encryptedId: l,
            metadata: f.peer.metadata,
            transportType: d
          }), p = {
            id: u,
            topic: o,
            params: h,
            verifyContext: g
          };
          await this.setPendingSessionRequest(p), d === Ue.link_mode && (s = f.peer.metadata.redirect) != null && s.universal && this.client.core.addLinkModeSupportedApp((r = f.peer.metadata.redirect) == null ? void 0 : r.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(p) : (this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue());
        } catch (f) {
          await this.sendError({
            id: u,
            topic: o,
            error: f
          }), this.client.logger.error(f);
        }
      }), W(this, "onSessionRequestResponse", (n, s) => {
        const { id: r } = s, i = Re("session_request", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        zn(s) ? this.events.emit(Re("session_request", r), {
          result: s.result
        }) : Rn(s) && this.events.emit(Re("session_request", r), {
          error: s.error
        });
      }), W(this, "onSessionEventRequest", async (n, s) => {
        const { id: r, params: i } = s;
        try {
          const o = `${n}_session_event_${i.event.name}`, a = Ti.get(o);
          if (a && this.isRequestOutOfSync(a, r)) {
            this.client.logger.info(`Discarding out of sync request - ${r}`);
            return;
          }
          this.isValidEmit(_e({
            topic: n
          }, i)), this.client.events.emit("session_event", {
            id: r,
            topic: n,
            params: i
          }), Ti.set(o, r);
        } catch (o) {
          await this.sendError({
            id: r,
            topic: n,
            error: o
          }), this.client.logger.error(o);
        }
      }), W(this, "onSessionAuthenticateResponse", (n, s) => {
        const { id: r } = s;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: n,
          payload: s
        }), zn(s) ? this.events.emit(Re("session_request", r), {
          result: s.result
        }) : Rn(s) && this.events.emit(Re("session_request", r), {
          error: s.error
        });
      }), W(this, "onSessionAuthenticateRequest", async (n) => {
        var s;
        const { topic: r, payload: i, attestation: o, encryptedId: a, transportType: c } = n;
        try {
          const { requester: l, authPayload: d, expiryTimestamp: u } = i.params, h = await this.getVerifyContext({
            attestationId: o,
            hash: Ts(JSON.stringify(i)),
            encryptedId: a,
            metadata: l.metadata,
            transportType: c
          }), f = {
            requester: l,
            pairingTopic: r,
            id: i.id,
            authPayload: d,
            verifyContext: h,
            expiryTimestamp: u
          };
          await this.setAuthRequest(i.id, {
            request: f,
            pairingTopic: r,
            transportType: c
          }), c === Ue.link_mode && (s = l.metadata.redirect) != null && s.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
            topic: r,
            params: i.params,
            id: i.id,
            verifyContext: h
          });
        } catch (l) {
          this.client.logger.error(l);
          const d = i.params.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), h = this.getAppLinkIfEnabled(i.params.requester.metadata, c), f = {
            type: Bc,
            receiverPublicKey: d,
            senderPublicKey: u
          };
          await this.sendError({
            id: i.id,
            topic: r,
            error: l,
            encodeOpts: f,
            rpcOpts: st.wc_sessionAuthenticate.autoReject,
            appLink: h
          });
        }
      }), W(this, "addSessionRequestToSessionRequestQueue", (n) => {
        this.sessionRequestQueue.queue.push(n);
      }), W(this, "cleanupAfterResponse", (n) => {
        this.deletePendingSessionRequest(n.response.id, {
          message: "fulfilled",
          code: 0
        }), setTimeout(() => {
          this.sessionRequestQueue.state = kn.idle, this.processSessionRequestQueue();
        }, K.toMiliseconds(this.requestQueueDelay));
      }), W(this, "cleanupPendingSentRequestsForTopic", ({ topic: n, error: s }) => {
        const r = this.client.core.history.pending;
        r.length > 0 && r.filter((i) => i.topic === n && i.request.method === "wc_sessionRequest").forEach((i) => {
          this.events.emit(Re("session_request", i.request.id), {
            error: s
          });
        });
      }), W(this, "processSessionRequestQueue", () => {
        if (this.sessionRequestQueue.state === kn.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const n = this.sessionRequestQueue.queue[0];
        if (!n) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          this.emitSessionRequest(n);
        } catch (s) {
          this.client.logger.error(s);
        }
      }), W(this, "emitSessionRequest", (n) => {
        if (this.emittedSessionRequests.has(n.id)) {
          this.client.logger.warn({
            id: n.id
          }, `Skipping emitting \`session_request\` event for duplicate request. id: ${n.id}`);
          return;
        }
        this.sessionRequestQueue.state = kn.active, this.emittedSessionRequests.add(n.id), this.client.events.emit("session_request", n);
      }), W(this, "onPairingCreated", (n) => {
        if (n.methods && this.expectedPairingMethodMap.set(n.topic, n.methods), n.active) return;
        const s = this.client.proposal.getAll().find((r) => r.pairingTopic === n.topic);
        s && this.onSessionProposeRequest({
          topic: n.topic,
          payload: $n("wc_sessionPropose", rt(_e({}, s), {
            requiredNamespaces: s.requiredNamespaces,
            optionalNamespaces: s.optionalNamespaces,
            relays: s.relays,
            proposer: s.proposer,
            sessionProperties: s.sessionProperties,
            scopedProperties: s.scopedProperties
          }), s.id),
          attestation: s.attestation,
          encryptedId: s.encryptedId
        });
      }), W(this, "isValidConnect", async (n) => {
        if (!hn(n)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(n)}`);
          throw new Error(l);
        }
        const { pairingTopic: s, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: o, scopedProperties: a, relays: c } = n;
        if (Kt(s) || await this.isValidPairingTopic(s), !F_(c)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() relays: ${c}`);
          throw new Error(l);
        }
        if (r && !Kt(r) && Fn(r) !== 0) {
          const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
          [
            "fatal",
            "error",
            "silent"
          ].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(r, "requiredNamespaces");
        }
        if (i && !Kt(i) && Fn(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), o && !Kt(o) && this.validateSessionProps(o, "sessionProperties"), a && !Kt(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const l = Object.keys(r || {}).concat(Object.keys(i || {}));
          if (!Object.keys(a).every((d) => l.includes(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
        }
      }), W(this, "validateNamespaces", (n, s) => {
        const r = M_(n, "connect()", s);
        if (r) throw new Error(r.message);
      }), W(this, "isValidApprove", async (n) => {
        if (!hn(n)) throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${n}`).message);
        const { id: s, namespaces: r, relayProtocol: i, sessionProperties: o, scopedProperties: a } = n;
        this.checkRecentlyDeleted(s), await this.isValidProposalId(s);
        const c = this.client.proposal.get(s), l = Mc(r, "approve()");
        if (l) throw new Error(l.message);
        const d = df(c.requiredNamespaces, r, "approve()");
        if (d) throw new Error(d.message);
        if (!Xe(i, true)) {
          const { message: u } = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
          throw new Error(u);
        }
        if (o && !Kt(o) && this.validateSessionProps(o, "sessionProperties"), a && !Kt(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const u = new Set(Object.keys(r));
          if (!Object.keys(a).every((h) => u.has(h.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`);
        }
      }), W(this, "isValidReject", async (n) => {
        if (!hn(n)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() params: ${n}`);
          throw new Error(i);
        }
        const { id: s, reason: r } = n;
        if (this.checkRecentlyDeleted(s), await this.isValidProposalId(s), !q_(r)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
          throw new Error(i);
        }
      }), W(this, "isValidSessionSettleRequest", (n) => {
        if (!hn(n)) {
          const { message: l } = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${n}`);
          throw new Error(l);
        }
        const { relay: s, controller: r, namespaces: i, expiry: o } = n;
        if (!Qm(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(l);
        }
        const a = R_(r, "onSessionSettleRequest()");
        if (a) throw new Error(a.message);
        const c = Mc(i, "onSessionSettleRequest()");
        if (c) throw new Error(c.message);
        if (Ps(o)) {
          const { message: l } = ce("EXPIRED", "onSessionSettleRequest()");
          throw new Error(l);
        }
      }), W(this, "isValidUpdate", async (n) => {
        if (!hn(n)) {
          const { message: c } = ce("MISSING_OR_INVALID", `update() params: ${n}`);
          throw new Error(c);
        }
        const { topic: s, namespaces: r } = n;
        this.checkRecentlyDeleted(s), await this.isValidSessionTopic(s);
        const i = this.client.session.get(s), o = Mc(r, "update()");
        if (o) throw new Error(o.message);
        const a = df(i.requiredNamespaces, r, "update()");
        if (a) throw new Error(a.message);
      }), W(this, "isValidExtend", async (n) => {
        if (!hn(n)) {
          const { message: r } = ce("MISSING_OR_INVALID", `extend() params: ${n}`);
          throw new Error(r);
        }
        const { topic: s } = n;
        this.checkRecentlyDeleted(s), await this.isValidSessionTopic(s);
      }), W(this, "isValidRequest", async (n) => {
        if (!hn(n)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() params: ${n}`);
          throw new Error(c);
        }
        const { topic: s, request: r, chainId: i, expiry: o } = n;
        this.checkRecentlyDeleted(s), await this.isValidSessionTopic(s);
        const { namespaces: a } = this.client.session.get(s);
        if (!lf(a, i)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() chainId: ${i}`);
          throw new Error(c);
        }
        if (!W_(r)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
          throw new Error(c);
        }
        if (!K_(a, i, r.method)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() method: ${r.method}`);
          throw new Error(c);
        }
        this.validateRequestExpiry(o);
      }), W(this, "isValidRespond", async (n) => {
        var s;
        if (!hn(n)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() params: ${n}`);
          throw new Error(a);
        }
        const { topic: r, response: i } = n;
        try {
          await this.isValidSessionTopic(r);
        } catch (a) {
          throw (s = n == null ? void 0 : n.response) != null && s.id && this.cleanupAfterResponse(n), a;
        }
        if (!H_(i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
          throw new Error(a);
        }
        const o = this.client.pendingRequest.get(i.id);
        if (o.topic !== r) {
          const { message: a } = ce("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i.id}, expected topic: ${o.topic}, received topic: ${r}`);
          throw new Error(a);
        }
      }), W(this, "isValidPing", async (n) => {
        if (!hn(n)) {
          const { message: r } = ce("MISSING_OR_INVALID", `ping() params: ${n}`);
          throw new Error(r);
        }
        const { topic: s } = n;
        await this.isValidSessionOrPairingTopic(s);
      }), W(this, "isValidEmit", async (n) => {
        if (!hn(n)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() params: ${n}`);
          throw new Error(a);
        }
        const { topic: s, event: r, chainId: i } = n;
        await this.isValidSessionTopic(s);
        const { namespaces: o } = this.client.session.get(s);
        if (!lf(o, i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() chainId: ${i}`);
          throw new Error(a);
        }
        if (!V_(r)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
        if (!z_(o, i, r.name)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
      }), W(this, "isValidDisconnect", async (n) => {
        if (!hn(n)) {
          const { message: r } = ce("MISSING_OR_INVALID", `disconnect() params: ${n}`);
          throw new Error(r);
        }
        const { topic: s } = n;
        await this.isValidSessionOrPairingTopic(s);
      }), W(this, "isValidAuthenticate", (n) => {
        const { chains: s, uri: r, domain: i, nonce: o } = n;
        if (!Array.isArray(s) || s.length === 0) throw new Error("chains is required and must be a non-empty array");
        if (!Xe(r, false)) throw new Error("uri is required parameter");
        if (!Xe(i, false)) throw new Error("domain is required parameter");
        if (!Xe(o, false)) throw new Error("nonce is required parameter");
        if ([
          ...new Set(s.map((c) => ls(c).namespace))
        ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
        const { namespace: a } = ls(s[0]);
        if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
      }), W(this, "getVerifyContext", async (n) => {
        const { attestationId: s, hash: r, encryptedId: i, metadata: o, transportType: a } = n, c = {
          verified: {
            verifyUrl: o.verifyUrl || Wi,
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
            attestationId: s,
            hash: r,
            encryptedId: i,
            verifyUrl: o.verifyUrl
          });
          l && (c.verified.origin = l.origin, c.verified.isScam = l.isScam, c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID");
        } catch (l) {
          this.client.logger.warn(l);
        }
        return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
      }), W(this, "validateSessionProps", (n, s) => {
        Object.values(n).forEach((r, i) => {
          if (r == null) {
            const { message: o } = ce("MISSING_OR_INVALID", `${s} must contain an existing value for each key. Received: ${r} for key ${Object.keys(n)[i]}`);
            throw new Error(o);
          }
        });
      }), W(this, "getPendingAuthRequest", (n) => {
        const s = this.client.auth.requests.get(n);
        return typeof s == "object" ? s : void 0;
      }), W(this, "addToRecentlyDeleted", (n, s) => {
        if (this.recentlyDeletedMap.set(n, s), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
          let r = 0;
          const i = this.recentlyDeletedLimit / 2;
          for (const o of this.recentlyDeletedMap.keys()) {
            if (r++ >= i) break;
            this.recentlyDeletedMap.delete(o);
          }
        }
      }), W(this, "checkRecentlyDeleted", (n) => {
        const s = this.recentlyDeletedMap.get(n);
        if (s) {
          const { message: r } = ce("MISSING_OR_INVALID", `Record was recently deleted - ${s}: ${n}`);
          throw new Error(r);
        }
      }), W(this, "isLinkModeEnabled", (n, s) => {
        var r, i, o, a, c, l, d, u, h;
        return !n || s !== Ue.link_mode ? false : ((i = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : i.linkMode) === true && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = n == null ? void 0 : n.redirect) == null ? void 0 : d.universal) !== void 0 && ((u = n == null ? void 0 : n.redirect) == null ? void 0 : u.universal) !== "" && ((h = n == null ? void 0 : n.redirect) == null ? void 0 : h.linkMode) === true && this.client.core.linkModeSupportedApps.includes(n.redirect.universal) && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      }), W(this, "getAppLinkIfEnabled", (n, s) => {
        var r;
        return this.isLinkModeEnabled(n, s) ? (r = n == null ? void 0 : n.redirect) == null ? void 0 : r.universal : void 0;
      }), W(this, "handleLinkModeMessage", ({ url: n }) => {
        if (!n || !n.includes("wc_ev") || !n.includes("topic")) return;
        const s = Oh(n, "topic") || "", r = decodeURIComponent(Oh(n, "wc_ev") || ""), i = this.client.session.keys.includes(s);
        i && this.client.session.update(s, {
          transportType: Ue.link_mode
        }), this.client.core.dispatchEnvelope({
          topic: s,
          message: r,
          sessionExists: i
        });
      }), W(this, "registerLinkModeListeners", async () => {
        var n;
        if (LN() || rm() && (n = this.client.metadata.redirect) != null && n.linkMode) {
          const s = globalThis == null ? void 0 : globalThis.Linking;
          if (typeof s < "u") {
            s.addEventListener("url", this.handleLinkModeMessage, this.client.name);
            const r = await s.getInitialURL();
            r && setTimeout(() => {
              this.handleLinkModeMessage({
                url: r
              });
            }, 50);
          }
        }
      }), W(this, "getTVFApproveParams", (n) => {
        try {
          const s = Jm(n.namespaces), r = A_(n.namespaces), i = I_(n.namespaces), o = n.sessionProperties, a = n.scopedProperties;
          return {
            approvedChains: s,
            approvedMethods: r,
            approvedEvents: i,
            sessionProperties: o,
            scopedProperties: a
          };
        } catch (s) {
          return this.client.logger.warn(s, "Error getting TVF approve params"), {};
        }
      }), W(this, "getTVFParams", (n, s, r) => {
        var i, o, a;
        if (!((i = s.request) != null && i.method)) return {};
        const c = {
          correlationId: n,
          rpcMethods: [
            s.request.method
          ],
          chainId: s.chainId
        };
        try {
          const l = this.extractTxHashesFromResult(s.request, r);
          c.txHashes = l, c.contractAddresses = this.isValidContractData(s.request.params) ? [
            (a = (o = s.request.params) == null ? void 0 : o[0]) == null ? void 0 : a.to
          ] : [];
        } catch (l) {
          this.client.logger.warn(l, "Error getting TVF params");
        }
        return c;
      }), W(this, "isValidContractData", (n) => {
        var s;
        if (!n) return false;
        try {
          const r = (n == null ? void 0 : n.data) || ((s = n == null ? void 0 : n[0]) == null ? void 0 : s.data);
          if (!r.startsWith("0x")) return false;
          const i = r.slice(2);
          return /^[0-9a-fA-F]*$/.test(i) ? i.length % 2 === 0 : false;
        } catch {
        }
        return false;
      }), W(this, "extractTxHashesFromResult", (n, s) => {
        var r;
        try {
          if (!s) return [];
          const i = n.method, o = cT[i];
          if (i === "sui_signTransaction") return [
            U2(s.transactionBytes)
          ];
          if (i === "near_signTransaction") return [
            Dh(s)
          ];
          if (i === "near_signTransactions") return s.map((c) => Dh(c));
          if (i === "xrpl_signTransactionFor" || i === "xrpl_signTransaction") return [
            (r = s.tx_json) == null ? void 0 : r.hash
          ];
          if (i === "polkadot_signTransaction") return [
            rT({
              transaction: n.params.transactionPayload,
              signature: s.signature
            })
          ];
          if (i === "algo_signTxn") return us(s) ? s.map((c) => Bh(c)) : [
            Bh(s)
          ];
          if (i === "cosmos_signDirect") return [
            B2(s)
          ];
          if (i === "wallet_sendCalls") return L2(s);
          if (typeof s == "string") return [
            s
          ];
          const a = s[o.key];
          if (us(a)) return i === "solana_signAllTransactions" ? a.map((c) => $2(c)) : a;
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
        const e = this.client.session.keys, n = this.client.core.relayer.messages.getWithoutAck(e);
        for (const [s, r] of Object.entries(n)) for (const i of r) try {
          await this.onProviderMessageEvent({
            topic: s,
            message: i,
            publishedAt: Date.now()
          });
        } catch {
          this.client.logger.warn(`Error processing pending message event for topic: ${s}, message: ${i}`);
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
      this.client.core.relayer.on(He.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    async onRelayMessage(e) {
      const { topic: n, message: s, attestation: r, transportType: i } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(Xo) ? this.client.auth.authKeys.get(Xo) : {
        publicKey: void 0
      };
      try {
        const a = await this.client.core.crypto.decode(n, s, {
          receiverPublicKey: o,
          encoding: i === Ue.link_mode ? _i : er
        });
        nd(a) ? (this.client.core.history.set(n, a), await this.onRelayEventRequest({
          topic: n,
          payload: a,
          attestation: r,
          transportType: i,
          encryptedId: Ts(s)
        })) : sd(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
          topic: n,
          payload: a,
          transportType: i
        }), this.client.core.history.delete(n, a.id)) : (this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(a)}`), await this.onRelayEventUnknownPayload({
          topic: n,
          payload: a,
          transportType: i
        })), await this.client.core.relayer.messages.ack(n, s);
      } catch (a) {
        this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${s}`), this.client.logger.error(a);
      }
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(nn.expired, async (e) => {
        const { topic: n, id: s } = RN(e.target);
        if (s && this.client.pendingRequest.keys.includes(s)) return await this.deletePendingSessionRequest(s, ce("EXPIRED"), true);
        if (s && this.client.auth.requests.keys.includes(s)) return await this.deletePendingAuthRequest(s, ce("EXPIRED"), true);
        n ? this.client.session.keys.includes(n) && (await this.deleteSession({
          topic: n,
          expirerHasDeleted: true
        }), this.client.events.emit("session_expire", {
          topic: n
        })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", {
          id: s
        }));
      });
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(ir.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(ir.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
    }
    isValidPairingTopic(e) {
      if (!Xe(e, false)) {
        const { message: n } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
        throw new Error(n);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        const { message: n } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
        throw new Error(n);
      }
      if (Ps(this.client.core.pairing.pairings.get(e).expiry)) {
        const { message: n } = ce("EXPIRED", `pairing topic: ${e}`);
        throw new Error(n);
      }
    }
    async isValidSessionTopic(e) {
      if (!Xe(e, false)) {
        const { message: n } = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
        throw new Error(n);
      }
      if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
        const { message: n } = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
        throw new Error(n);
      }
      if (Ps(this.client.session.get(e).expiry)) {
        await this.deleteSession({
          topic: e
        });
        const { message: n } = ce("EXPIRED", `session topic: ${e}`);
        throw new Error(n);
      }
      if (!this.client.core.crypto.keychain.has(e)) {
        const { message: n } = ce("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
        throw await this.deleteSession({
          topic: e
        }), new Error(n);
      }
    }
    async isValidSessionOrPairingTopic(e) {
      if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
      else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
      else if (Xe(e, false)) {
        const { message: n } = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
        throw new Error(n);
      } else {
        const { message: n } = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
        throw new Error(n);
      }
    }
    async isValidProposalId(e) {
      if (!j_(e)) {
        const { message: n } = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
        throw new Error(n);
      }
      if (!this.client.proposal.keys.includes(e)) {
        const { message: n } = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
        throw new Error(n);
      }
      if (Ps(this.client.proposal.get(e).expiryTimestamp)) {
        await this.deleteProposal(e);
        const { message: n } = ce("EXPIRED", `proposal id: ${e}`);
        throw new Error(n);
      }
    }
    validateRequestExpiry(e) {
      if (e && !Z_(e, qc)) {
        const { message: n } = ce("MISSING_OR_INVALID", `request() expiry: ${e}. Expiry must be a number (in seconds) between ${qc.min} and ${qc.max}`);
        throw new Error(n);
      }
    }
  }
  class CT extends Pr {
    constructor(e, n) {
      super(e, n, iT, $d), this.core = e, this.logger = n;
    }
  }
  let AT = class extends Pr {
    constructor(e, n) {
      super(e, n, oT, $d), this.core = e, this.logger = n;
    }
  };
  class IT extends Pr {
    constructor(e, n) {
      super(e, n, lT, $d, (s) => s.id), this.core = e, this.logger = n;
    }
  }
  class NT extends Pr {
    constructor(e, n) {
      super(e, n, fT, za, () => Xo), this.core = e, this.logger = n;
    }
  }
  class ST extends Pr {
    constructor(e, n) {
      super(e, n, pT, za), this.core = e, this.logger = n;
    }
  }
  class _T extends Pr {
    constructor(e, n) {
      super(e, n, gT, za, (s) => s.id), this.core = e, this.logger = n;
    }
  }
  var TT = Object.defineProperty, OT = (t, e, n) => e in t ? TT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Wc = (t, e, n) => OT(t, typeof e != "symbol" ? e + "" : e, n);
  class xT {
    constructor(e, n) {
      this.core = e, this.logger = n, Wc(this, "authKeys"), Wc(this, "pairingTopics"), Wc(this, "requests"), this.authKeys = new NT(this.core, this.logger), this.pairingTopics = new ST(this.core, this.logger), this.requests = new _T(this.core, this.logger);
    }
    async init() {
      await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
  }
  var kT = Object.defineProperty, PT = (t, e, n) => e in t ? kT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, be = (t, e, n) => PT(t, typeof e != "symbol" ? e + "" : e, n);
  class Ud extends JA {
    constructor(e) {
      super(e), be(this, "protocol", tw), be(this, "version", nw), be(this, "name", jc.name), be(this, "metadata"), be(this, "core"), be(this, "logger"), be(this, "events", new Sr.EventEmitter()), be(this, "engine"), be(this, "session"), be(this, "proposal"), be(this, "pendingRequest"), be(this, "auth"), be(this, "signConfig"), be(this, "on", (s, r) => this.events.on(s, r)), be(this, "once", (s, r) => this.events.once(s, r)), be(this, "off", (s, r) => this.events.off(s, r)), be(this, "removeListener", (s, r) => this.events.removeListener(s, r)), be(this, "removeAllListeners", (s) => this.events.removeAllListeners(s)), be(this, "connect", async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "pair", async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "approve", async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "reject", async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "update", async (s) => {
        try {
          return await this.engine.update(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "extend", async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "request", async (s) => {
        try {
          return await this.engine.request(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "respond", async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "ping", async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "emit", async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "disconnect", async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "find", (s) => {
        try {
          return this.engine.find(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "getPendingSessionRequests", () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw this.logger.error(s.message), s;
        }
      }), be(this, "authenticate", async (s, r) => {
        try {
          return await this.engine.authenticate(s, r);
        } catch (i) {
          throw this.logger.error(i.message), i;
        }
      }), be(this, "formatAuthMessage", (s) => {
        try {
          return this.engine.formatAuthMessage(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "approveSessionAuthenticate", async (s) => {
        try {
          return await this.engine.approveSessionAuthenticate(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "rejectSessionAuthenticate", async (s) => {
        try {
          return await this.engine.rejectSessionAuthenticate(s);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), this.name = (e == null ? void 0 : e.name) || jc.name, this.metadata = kN(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
      const n = ew({
        logger: (e == null ? void 0 : e.logger) || jc.logger,
        name: this.name
      });
      this.logger = n, this.core = (e == null ? void 0 : e.core) || new GA(e), this.session = new AT(this.core, this.logger), this.proposal = new CT(this.core, this.logger), this.pendingRequest = new IT(this.core, this.logger), this.engine = new vT(this), this.auth = new xT(this.core, this.logger);
    }
    static async init(e) {
      const n = new Ud(e);
      return await n.initialize(), n;
    }
    get context() {
      return Yt(this.logger);
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
  }
  const RT = Ud;
  function Dd(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  function rw(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function iw(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const $T = "[object RegExp]", ow = "[object String]", aw = "[object Number]", cw = "[object Boolean]", lw = "[object Arguments]", UT = "[object Symbol]", DT = "[object Date]", BT = "[object Map]", LT = "[object Set]", MT = "[object Array]", FT = "[object ArrayBuffer]", jT = "[object Object]", qT = "[object DataView]", WT = "[object Uint8Array]", HT = "[object Uint8ClampedArray]", VT = "[object Uint16Array]", KT = "[object Uint32Array]", zT = "[object Int8Array]", GT = "[object Int16Array]", YT = "[object Int32Array]", ZT = "[object Float32Array]", JT = "[object Float64Array]";
  function Bd(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  function XT(t, e) {
    return Xr(t, void 0, t, /* @__PURE__ */ new Map(), e);
  }
  function Xr(t, e, n, s = /* @__PURE__ */ new Map(), r = void 0) {
    const i = r == null ? void 0 : r(t, e, n, s);
    if (i != null) return i;
    if (Dd(t)) return t;
    if (s.has(t)) return s.get(t);
    if (Array.isArray(t)) {
      const o = new Array(t.length);
      s.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = Xr(t[a], a, n, s, r);
      return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
    }
    if (t instanceof Date) return new Date(t.getTime());
    if (t instanceof RegExp) {
      const o = new RegExp(t.source, t.flags);
      return o.lastIndex = t.lastIndex, o;
    }
    if (t instanceof Map) {
      const o = /* @__PURE__ */ new Map();
      s.set(t, o);
      for (const [a, c] of t) o.set(a, Xr(c, a, n, s, r));
      return o;
    }
    if (t instanceof Set) {
      const o = /* @__PURE__ */ new Set();
      s.set(t, o);
      for (const a of t) o.add(Xr(a, void 0, n, s, r));
      return o;
    }
    if (typeof Ae < "u" && Ae.isBuffer(t)) return t.subarray();
    if (Bd(t)) {
      const o = new (Object.getPrototypeOf(t)).constructor(t.length);
      s.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = Xr(t[a], a, n, s, r);
      return o;
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    if (t instanceof DataView) {
      const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
      return s.set(t, o), or(o, t, n, s, r), o;
    }
    if (typeof File < "u" && t instanceof File) {
      const o = new File([
        t
      ], t.name, {
        type: t.type
      });
      return s.set(t, o), or(o, t, n, s, r), o;
    }
    if (t instanceof Blob) {
      const o = new Blob([
        t
      ], {
        type: t.type
      });
      return s.set(t, o), or(o, t, n, s, r), o;
    }
    if (t instanceof Error) {
      const o = new t.constructor();
      return s.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, or(o, t, n, s, r), o;
    }
    if (typeof t == "object" && QT(t)) {
      const o = Object.create(Object.getPrototypeOf(t));
      return s.set(t, o), or(o, t, n, s, r), o;
    }
    return t;
  }
  function or(t, e, n = t, s, r) {
    const i = [
      ...Object.keys(e),
      ...rw(e)
    ];
    for (let o = 0; o < i.length; o++) {
      const a = i[o], c = Object.getOwnPropertyDescriptor(t, a);
      (c == null || c.writable) && (t[a] = Xr(e[a], a, n, s, r));
    }
  }
  function QT(t) {
    switch (iw(t)) {
      case lw:
      case MT:
      case FT:
      case qT:
      case cw:
      case DT:
      case ZT:
      case JT:
      case zT:
      case GT:
      case YT:
      case BT:
      case aw:
      case jT:
      case $T:
      case LT:
      case ow:
      case UT:
      case WT:
      case HT:
      case VT:
      case KT:
        return true;
      default:
        return false;
    }
  }
  function eO(t, e) {
    return XT(t, (n, s, r, i) => {
      if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
        case aw:
        case ow:
        case cw: {
          const o = new t.constructor(t == null ? void 0 : t.valueOf());
          return or(o, t), o;
        }
        case lw: {
          const o = {};
          return or(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
        }
        default:
          return;
      }
    });
  }
  function gf(t) {
    return eO(t);
  }
  function mf(t) {
    return t !== null && typeof t == "object" && iw(t) === "[object Arguments]";
  }
  function wf(t) {
    return typeof t == "object" && t !== null;
  }
  function tO() {
  }
  function nO(t) {
    return Bd(t);
  }
  function sO(t) {
    var _a2;
    if (typeof t != "object" || t == null) return false;
    if (Object.getPrototypeOf(t) === null) return true;
    if (Object.prototype.toString.call(t) !== "[object Object]") {
      const n = t[Symbol.toStringTag];
      return n == null || !((_a2 = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) == null ? void 0 : _a2.writable) ? false : t.toString() === `[object ${n}]`;
    }
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
  }
  function rO(t) {
    if (Dd(t)) return t;
    if (Array.isArray(t) || Bd(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    const e = Object.getPrototypeOf(t), n = e.constructor;
    if (t instanceof Date || t instanceof Map || t instanceof Set) return new n(t);
    if (t instanceof RegExp) {
      const s = new n(t);
      return s.lastIndex = t.lastIndex, s;
    }
    if (t instanceof DataView) return new n(t.buffer.slice(0));
    if (t instanceof Error) {
      const s = new n(t.message);
      return s.stack = t.stack, s.name = t.name, s.cause = t.cause, s;
    }
    if (typeof File < "u" && t instanceof File) return new n([
      t
    ], t.name, {
      type: t.type,
      lastModified: t.lastModified
    });
    if (typeof t == "object") {
      const s = Object.create(e);
      return Object.assign(s, t);
    }
    return t;
  }
  function iO(t, ...e) {
    const n = e.slice(0, -1), s = e[e.length - 1];
    let r = t;
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      r = zl(r, o, s, /* @__PURE__ */ new Map());
    }
    return r;
  }
  function zl(t, e, n, s) {
    if (Dd(t) && (t = Object(t)), e == null || typeof e != "object") return t;
    if (s.has(e)) return rO(s.get(e));
    if (s.set(e, t), Array.isArray(e)) {
      e = e.slice();
      for (let i = 0; i < e.length; i++) e[i] = e[i] ?? void 0;
    }
    const r = [
      ...Object.keys(e),
      ...rw(e)
    ];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = e[o], c = t[o];
      if (mf(a) && (a = {
        ...a
      }), mf(c) && (c = {
        ...c
      }), typeof Ae < "u" && Ae.isBuffer(a) && (a = gf(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
        const d = [], u = Reflect.ownKeys(c);
        for (let h = 0; h < u.length; h++) {
          const f = u[h];
          d[f] = c[f];
        }
        c = d;
      } else c = [];
      const l = n(c, a, o, t, e, s);
      l != null ? t[o] = l : Array.isArray(a) || wf(c) && wf(a) ? t[o] = zl(c, a, n, s) : c == null && sO(a) ? t[o] = zl({}, a, n, s) : c == null && nO(a) ? t[o] = gf(a) : (c === void 0 || a !== void 0) && (t[o] = a);
    }
    return t;
  }
  function oO(t, ...e) {
    return iO(t, ...e, tO);
  }
  const yf = "error", aO = "wss://relay.walletconnect.org", cO = "wc", dw = "universal_provider", Mo = `${cO}@2:${dw}:`, uw = "https://rpc.walletconnect.org/v1/", hw = "generic", lO = `${uw}bundler`, ri = "call_status", dO = 86400, Ld = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
  };
  var uO = Object.defineProperty, hO = Object.defineProperties, fO = Object.getOwnPropertyDescriptors, bf = Object.getOwnPropertySymbols, pO = Object.prototype.hasOwnProperty, gO = Object.prototype.propertyIsEnumerable, Ef = (t, e, n) => e in t ? uO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Fo = (t, e) => {
    for (var n in e || (e = {})) pO.call(e, n) && Ef(t, n, e[n]);
    if (bf) for (var n of bf(e)) gO.call(e, n) && Ef(t, n, e[n]);
    return t;
  }, mO = (t, e) => hO(t, fO(e));
  function fw(t, e, n) {
    var s;
    const r = ls(t);
    return ((s = e.rpcMap) == null ? void 0 : s[r.reference]) || `${uw}?chainId=${r.namespace}:${r.reference}&projectId=${n}`;
  }
  function wO(t) {
    return t.includes(":") ? t.split(":")[1] : t;
  }
  function pw(t) {
    return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
  }
  function yO(t, e) {
    const n = Object.keys(e.namespaces).filter((r) => r.includes(t));
    if (!n.length) return [];
    const s = [];
    return n.forEach((r) => {
      const i = e.namespaces[r].accounts;
      s.push(...i);
    }), s;
  }
  function vf(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, n]) => {
      var s, r;
      return ((s = n == null ? void 0 : n.chains) == null ? void 0 : s.length) && ((r = n == null ? void 0 : n.chains) == null ? void 0 : r.length) > 0;
    }));
  }
  function jo(t = {}, e = {}) {
    const n = vf(Cf(t)), s = vf(Cf(e));
    return oO(n, s);
  }
  function Cf(t) {
    var e, n, s, r, i;
    const o = {};
    if (!Fn(t)) return o;
    for (const [a, c] of Object.entries(t)) {
      const l = Ka(a) ? [
        a
      ] : c.chains, d = c.methods || [], u = c.events || [], h = c.rpcMap || {}, f = Jr(a);
      o[f] = mO(Fo(Fo({}, o[f]), c), {
        chains: Mn(l, (e = o[f]) == null ? void 0 : e.chains),
        methods: Mn(d, (n = o[f]) == null ? void 0 : n.methods),
        events: Mn(u, (s = o[f]) == null ? void 0 : s.events)
      }), (Fn(h) || Fn(((r = o[f]) == null ? void 0 : r.rpcMap) || {})) && (o[f].rpcMap = Fo(Fo({}, h), (i = o[f]) == null ? void 0 : i.rpcMap));
    }
    return o;
  }
  function Af(t) {
    return t.includes(":") ? t.split(":")[2] : t;
  }
  function If(t) {
    const e = {};
    for (const [n, s] of Object.entries(t)) {
      const r = s.methods || [], i = s.events || [], o = s.accounts || [], a = Ka(n) ? [
        n
      ] : s.chains ? s.chains : pw(s.accounts);
      e[n] = {
        chains: a,
        methods: r,
        events: i,
        accounts: o
      };
    }
    return e;
  }
  function Hc(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
  }
  function bO(t) {
    try {
      const e = JSON.parse(t);
      return typeof e == "object" && e !== null && !Array.isArray(e);
    } catch {
      return false;
    }
  }
  const gw = {}, ii = (t) => gw[t], Vc = (t, e) => {
    gw[t] = e;
  };
  var EO = Object.defineProperty, Nf = Object.getOwnPropertySymbols, vO = Object.prototype.hasOwnProperty, CO = Object.prototype.propertyIsEnumerable, Sf = (t, e, n) => e in t ? EO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, _f = (t, e) => {
    for (var n in e || (e = {})) vO.call(e, n) && Sf(t, n, e[n]);
    if (Nf) for (var n of Nf(e)) CO.call(e, n) && Sf(t, n, e[n]);
    return t;
  };
  const Tf = "eip155", AO = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds"
  ], IO = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, Kc = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, Of = (t) => Object.keys(t).filter((e) => AO.includes(e)).reduce((e, n) => (e[n] = NO(t[n]), e), {}), NO = (t) => typeof t == "string" && bO(t) ? JSON.parse(t) : t, SO = (t, e, n) => {
    const { sessionProperties: s = {}, scopedProperties: r = {} } = t, i = {};
    if (!Fn(r) && !Fn(s)) return;
    const o = Of(s);
    for (const a of n) {
      const c = IO(a);
      if (!c) continue;
      i[Kc(c)] = o;
      const l = r == null ? void 0 : r[`${Tf}:${c}`];
      if (l) {
        const d = l == null ? void 0 : l[`${Tf}:${c}:${e}`];
        i[Kc(c)] = _f(_f({}, i[Kc(c)]), Of(d || l));
      }
    }
    for (const [a, c] of Object.entries(i)) Object.keys(c).length === 0 && delete i[a];
    return Object.keys(i).length > 0 ? i : void 0;
  };
  var _O = Object.defineProperty, TO = (t, e, n) => e in t ? _O(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, OO = (t, e, n) => TO(t, e + "", n);
  let zc;
  class Md {
    constructor(e) {
      OO(this, "storage"), this.storage = e;
    }
    async getItem(e) {
      return await this.storage.getItem(e);
    }
    async setItem(e, n) {
      return await this.storage.setItem(e, n);
    }
    async removeItem(e) {
      return await this.storage.removeItem(e);
    }
    static getStorage(e) {
      return zc || (zc = new Md(e)), zc;
    }
  }
  var xO = Object.defineProperty, kO = Object.defineProperties, PO = Object.getOwnPropertyDescriptors, xf = Object.getOwnPropertySymbols, RO = Object.prototype.hasOwnProperty, $O = Object.prototype.propertyIsEnumerable, kf = (t, e, n) => e in t ? xO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, UO = (t, e) => {
    for (var n in e || (e = {})) RO.call(e, n) && kf(t, n, e[n]);
    if (xf) for (var n of xf(e)) $O.call(e, n) && kf(t, n, e[n]);
    return t;
  }, DO = (t, e) => kO(t, PO(e));
  async function BO(t, e) {
    const n = ls(t.result.capabilities.caip345.caip2), s = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(s.map((u) => LO(n.reference, u, e))), i = r.filter((u) => u.status === "fulfilled").map((u) => u.value).filter((u) => u);
    r.filter((u) => u.status === "rejected").forEach((u) => console.warn("Failed to fetch transaction receipt:", u.reason));
    const o = !i.length || i.some((u) => !u), a = i.every((u) => (u == null ? void 0 : u.status) === "0x1"), c = i.every((u) => (u == null ? void 0 : u.status) === "0x0"), l = i.some((u) => (u == null ? void 0 : u.status) === "0x0");
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
  async function LO(t, e, n) {
    return await n(parseInt(t)).request($n("eth_getTransactionReceipt", [
      e
    ]));
  }
  async function MO({ sendCalls: t, storage: e }) {
    const n = await e.getItem(ri);
    await e.setItem(ri, DO(UO({}, n), {
      [t.result.id]: {
        request: t.request,
        result: t.result,
        expiry: Ct(dO)
      }
    }));
  }
  async function FO({ resultId: t, storage: e }) {
    const n = await e.getItem(ri);
    if (n) {
      delete n[t], await e.setItem(ri, n);
      for (const s in n) Ps(n[s].expiry) && delete n[s];
      await e.setItem(ri, n);
    }
  }
  async function jO({ resultId: t, storage: e }) {
    const n = await e.getItem(ri), s = n == null ? void 0 : n[t];
    if (s && !Ps(s.expiry)) return s;
    await FO({
      resultId: t,
      storage: e
    });
  }
  var qO = Object.defineProperty, WO = Object.defineProperties, HO = Object.getOwnPropertyDescriptors, Pf = Object.getOwnPropertySymbols, VO = Object.prototype.hasOwnProperty, KO = Object.prototype.propertyIsEnumerable, Gl = (t, e, n) => e in t ? qO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Gc = (t, e) => {
    for (var n in e || (e = {})) VO.call(e, n) && Gl(t, n, e[n]);
    if (Pf) for (var n of Pf(e)) KO.call(e, n) && Gl(t, n, e[n]);
    return t;
  }, Yc = (t, e) => WO(t, HO(e)), tr = (t, e, n) => Gl(t, typeof e != "symbol" ? e + "" : e, n);
  class zO {
    constructor(e) {
      tr(this, "name", "eip155"), tr(this, "client"), tr(this, "chainId"), tr(this, "namespace"), tr(this, "httpProviders"), tr(this, "events"), tr(this, "storage"), this.namespace = e.namespace, this.events = ii("events"), this.client = ii("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = Md.getStorage(this.client.core.storage);
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
    setDefaultChain(e, n) {
      this.httpProviders[e] || this.setHttpProvider(parseInt(e), n);
      const s = this.chainId;
      this.chainId = parseInt(e), this.events.emit(Ld.DEFAULT_CHAIN_CHANGED, {
        currentCaipChainId: `${this.name}:${e}`,
        previousCaipChainId: `${this.name}:${s}`
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
    createHttpProvider(e, n) {
      const s = n || fw(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new td(new Qf(s, ii("disableProviderPing")));
    }
    setHttpProvider(e, n) {
      const s = this.createHttpProvider(e, n);
      s && (this.httpProviders[e] = s);
    }
    createHttpProviders() {
      const e = {};
      return this.namespace.chains.forEach((n) => {
        var s;
        const r = parseInt(wO(n));
        e[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[n]);
      }), e;
    }
    getAccounts() {
      const e = this.namespace.accounts;
      return e ? [
        ...new Set(e.filter((n) => n.split(":")[1] === this.chainId.toString()).map((n) => n.split(":")[2]))
      ] : [];
    }
    getHttpProvider(e) {
      const n = e || this.chainId;
      return this.httpProviders[n] || (this.httpProviders = Yc(Gc({}, this.httpProviders), {
        [n]: this.createHttpProvider(n)
      }), this.httpProviders[n]);
    }
    async handleSwitchChain(e) {
      var n, s;
      let r = e.request.params ? (n = e.request.params[0]) == null ? void 0 : n.chainId : "0x0";
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
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0]
      }), this.setDefaultChain(`${i}`);
      else throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
      return null;
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    async getCapabilities(e) {
      var n, s, r, i, o;
      const a = (s = (n = e.request) == null ? void 0 : n.params) == null ? void 0 : s[0], c = ((i = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : i[1]) || [];
      if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
      const l = this.client.session.get(e.topic), d = ((o = l == null ? void 0 : l.sessionProperties) == null ? void 0 : o.capabilities) || {}, u = c.length > 0 ? c.join(",") : `0x${this.chainId.toString(16)}`, h = `${a}${u}`, f = d == null ? void 0 : d[h];
      if (f) return f;
      let g;
      try {
        g = SO(l, a, c);
      } catch (m) {
        console.warn("Failed to extract capabilities from session", m);
      }
      if (g) return g;
      const p = await this.client.request(e);
      try {
        await this.client.session.update(e.topic, {
          sessionProperties: Yc(Gc({}, l.sessionProperties || {}), {
            capabilities: Yc(Gc({}, d || {}), {
              [h]: p
            })
          })
        });
      } catch (m) {
        console.warn("Failed to update session with capabilities", m);
      }
      return p;
    }
    async getCallStatus(e) {
      var n, s, r;
      const i = this.client.session.get(e.topic), o = (n = i.sessionProperties) == null ? void 0 : n.bundler_name;
      if (o) {
        const l = this.getBundlerUrl(e.chainId, o);
        try {
          return await this.getUserOperationReceipt(l, e);
        } catch (d) {
          console.warn("Failed to fetch call status from bundler", d, l);
        }
      }
      const a = (s = i.sessionProperties) == null ? void 0 : s.bundler_url;
      if (a) try {
        return await this.getUserOperationReceipt(a, e);
      } catch (l) {
        console.warn("Failed to fetch call status from custom bundler", l, a);
      }
      const c = await jO({
        resultId: (r = e.request.params) == null ? void 0 : r[0],
        storage: this.storage
      });
      if (c) try {
        return await BO(c, this.getHttpProvider.bind(this));
      } catch (l) {
        console.warn("Failed to fetch call status from stored send calls", l, c);
      }
      if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
      throw new Error("Fetching call status not approved by the wallet.");
    }
    async getUserOperationReceipt(e, n) {
      var s;
      const r = new URL(e), i = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify($n("eth_getUserOperationReceipt", [
          (s = n.request.params) == null ? void 0 : s[0]
        ]))
      });
      if (!i.ok) throw new Error(`Failed to fetch user operation receipt - ${i.status}`);
      return await i.json();
    }
    getBundlerUrl(e, n) {
      return `${lO}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${n}`;
    }
    async sendCalls(e) {
      var n, s, r;
      const i = await this.client.request(e), o = (n = e.request.params) == null ? void 0 : n[0], a = i == null ? void 0 : i.id, c = (i == null ? void 0 : i.capabilities) || {}, l = (s = c == null ? void 0 : c.caip345) == null ? void 0 : s.caip2, d = (r = c == null ? void 0 : c.caip345) == null ? void 0 : r.transactionHashes;
      return !a || !l || !(d != null && d.length) || await MO({
        sendCalls: {
          request: o,
          result: i
        },
        storage: this.storage
      }), i;
    }
  }
  var GO = Object.defineProperty, YO = (t, e, n) => e in t ? GO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Hr = (t, e, n) => YO(t, typeof e != "symbol" ? e + "" : e, n);
  class ZO {
    constructor(e) {
      Hr(this, "name", hw), Hr(this, "client"), Hr(this, "httpProviders"), Hr(this, "events"), Hr(this, "namespace"), Hr(this, "chainId"), this.namespace = e.namespace, this.events = ii("events"), this.client = ii("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
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
    setDefaultChain(e, n) {
      this.httpProviders[e] || this.setHttpProvider(e, n);
      const s = this.chainId;
      this.chainId = e, this.events.emit(Ld.DEFAULT_CHAIN_CHANGED, {
        currentCaipChainId: `${this.name}:${e}`,
        previousCaipChainId: `${this.name}:${s}`
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
      return ls(e).namespace;
    }
    getAccounts() {
      const e = this.namespace.accounts;
      return e ? [
        ...new Set(e.filter((n) => n.split(":")[1] === this.chainId.toString()).map((n) => n.split(":")[2]))
      ] : [];
    }
    createHttpProviders() {
      var e, n;
      const s = {};
      return (n = (e = this.namespace) == null ? void 0 : e.accounts) == null || n.forEach((r) => {
        var i, o;
        const a = ls(r), c = (o = (i = this.namespace) == null ? void 0 : i.rpcMap) == null ? void 0 : o[`${a.namespace}:${a.reference}`];
        s[a.reference] = this.createHttpProvider(r, c);
      }), s;
    }
    getHttpProvider(e) {
      const n = ls(e).reference, s = this.httpProviders[n];
      if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
      return s;
    }
    setHttpProvider(e, n) {
      const s = this.createHttpProvider(e, n);
      s && (this.httpProviders[e] = s);
    }
    createHttpProvider(e, n) {
      const s = n || fw(e, this.namespace, this.client.core.projectId);
      if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new td(new Qf(s, ii("disableProviderPing")));
    }
  }
  var JO = Object.defineProperty, XO = Object.defineProperties, QO = Object.getOwnPropertyDescriptors, Rf = Object.getOwnPropertySymbols, ex = Object.prototype.hasOwnProperty, tx = Object.prototype.propertyIsEnumerable, Yl = (t, e, n) => e in t ? JO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : t[e] = n, Oi = (t, e) => {
    for (var n in e || (e = {})) ex.call(e, n) && Yl(t, n, e[n]);
    if (Rf) for (var n of Rf(e)) tx.call(e, n) && Yl(t, n, e[n]);
    return t;
  }, qo = (t, e) => XO(t, QO(e)), Ft = (t, e, n) => Yl(t, typeof e != "symbol" ? e + "" : e, n);
  let nx = class mw {
    constructor(e) {
      Ft(this, "client"), Ft(this, "namespaces"), Ft(this, "optionalNamespaces"), Ft(this, "sessionProperties"), Ft(this, "scopedProperties"), Ft(this, "events", new rd()), Ft(this, "rpcProviders", {}), Ft(this, "session"), Ft(this, "providerOpts"), Ft(this, "logger"), Ft(this, "uri"), Ft(this, "disableProviderPing", false), Ft(this, "connectParams");
      var n, s;
      this.providerOpts = e, this.logger = ew({
        logger: (n = e.logger) != null ? n : yf,
        name: (s = this.providerOpts.name) != null ? s : dw
      }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || false;
    }
    static async init(e) {
      const n = new mw(e);
      return await n.initialize(), n;
    }
    async request(e, n, s) {
      const [r, i] = this.validateChain(n);
      if (!this.session) throw new Error("Please call connect() before request()");
      return await this.getProvider(r).request({
        request: Oi({}, e),
        chainId: `${r}:${i}`,
        topic: this.session.topic,
        expiry: s
      });
    }
    sendAsync(e, n, s, r) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      this.request(e, s, r).then((o) => n(null, zi(i, o))).catch((o) => n(o, void 0));
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
        reason: Ge("USER_DISCONNECTED")
      }), await this.cleanup();
    }
    async connect(e) {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (this.connectParams = e, this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
    }
    async authenticate(e, n) {
      if (!this.client) throw new Error("Sign Client not initialized");
      this.setNamespaces(e), await this.cleanupPendingPairings();
      const { uri: s, response: r } = await this.client.authenticate(e, n);
      s && (this.uri = s, this.events.emit("display_uri", s));
      const i = await r();
      if (this.session = i.session, this.session) {
        const o = If(this.session.namespaces);
        this.namespaces = jo(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
      }
      return i;
    }
    on(e, n) {
      this.events.on(e, n);
    }
    once(e, n) {
      this.events.once(e, n);
    }
    removeListener(e, n) {
      this.events.removeListener(e, n);
    }
    off(e, n) {
      this.events.off(e, n);
    }
    get isWalletConnect() {
      return true;
    }
    async pair(e) {
      var n, s;
      const { uri: r, approval: i } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
        scopedProperties: this.scopedProperties,
        authentication: (n = this.connectParams) == null ? void 0 : n.authentication,
        walletPay: (s = this.connectParams) == null ? void 0 : s.walletPay
      });
      r && (this.uri = r, this.events.emit("display_uri", r));
      const o = await i();
      this.session = o;
      const a = If(o.namespaces);
      return this.namespaces = jo(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
    }
    setDefaultChain(e, n) {
      try {
        if (!this.session) return;
        const [s, r] = this.validateChain(e);
        this.getProvider(s).setDefaultChain(r, n);
      } catch (s) {
        if (!/Please call connect/.test(s.message)) throw s;
      }
    }
    async cleanupPendingPairings(e = {}) {
      try {
        this.logger.info("Cleaning up inactive pairings...");
        const n = this.client.pairing.getAll();
        if (!us(n)) return;
        for (const s of n) e.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
        this.logger.info(`Inactive pairings cleared: ${n.length}`);
      } catch (n) {
        this.logger.warn(n, "Failed to cleanup pending pairings");
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
      var e, n;
      if (this.client = this.providerOpts.client || await RT.init({
        core: this.providerOpts.core,
        logger: this.providerOpts.logger || yf,
        relayUrl: this.providerOpts.relayUrl || aO,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
        customStoragePrefix: this.providerOpts.customStoragePrefix,
        telemetryEnabled: this.providerOpts.telemetryEnabled
      }), this.providerOpts.session) try {
        this.session = this.client.session.get(this.providerOpts.session.topic);
      } catch (s) {
        throw this.logger.error(s, "Failed to get session"), new Error(`The provided session: ${(n = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : n.topic} doesn't exist in the Sign client`);
      }
      else {
        const s = this.client.session.getAll();
        this.session = s[0];
      }
      this.logger.trace("SignClient Initialized");
    }
    createProviders() {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
      const e = [
        ...new Set(Object.keys(this.session.namespaces).map((n) => Jr(n)))
      ];
      Vc("client", this.client), Vc("events", this.events), Vc("disableProviderPing", this.disableProviderPing), e.forEach((n) => {
        if (!this.session) return;
        const s = yO(n, this.session);
        if ((s == null ? void 0 : s.length) === 0) return;
        const r = pw(s), i = jo(this.namespaces, this.optionalNamespaces), o = qo(Oi({}, i[n]), {
          accounts: s,
          chains: r
        });
        switch (n) {
          case "eip155":
            this.rpcProviders[n] = new zO({
              namespace: o
            });
            break;
          default:
            this.rpcProviders[n] = new ZO({
              namespace: o
            });
        }
      });
    }
    registerEventListeners() {
      if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
      this.client.on("session_ping", (e) => {
        var n;
        const { topic: s } = e;
        s === ((n = this.session) == null ? void 0 : n.topic) && this.events.emit("session_ping", e);
      }), this.client.on("session_event", (e) => {
        var n;
        const { params: s, topic: r } = e;
        if (r !== ((n = this.session) == null ? void 0 : n.topic)) return;
        const { event: i } = s;
        if (i.name === "accountsChanged") {
          const o = i.data;
          o && us(o) && this.events.emit("accountsChanged", o.map(Af));
        } else if (i.name === "chainChanged") {
          const o = s.chainId, a = s.event.data, c = Jr(o), l = Hc(o) !== Hc(a) ? `${c}:${Hc(a)}` : o;
          this.onChainChanged({
            currentCaipChainId: l
          });
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }), this.client.on("session_update", ({ topic: e, params: n }) => {
        var s, r;
        if (e !== ((s = this.session) == null ? void 0 : s.topic)) return;
        const { namespaces: i } = n, o = (r = this.client) == null ? void 0 : r.session.get(e);
        this.session = qo(Oi({}, o), {
          namespaces: i
        }), this.onSessionUpdate(), this.events.emit("session_update", {
          topic: e,
          params: n
        });
      }), this.client.on("session_delete", async (e) => {
        var n;
        e.topic === ((n = this.session) == null ? void 0 : n.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", qo(Oi({}, Ge("USER_DISCONNECTED")), {
          data: e.topic
        })));
      }), this.on(Ld.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(qo(Oi({}, e), {
          internal: true
        }));
      });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[hw];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var n;
        this.getProvider(e).updateNamespace((n = this.session) == null ? void 0 : n.namespaces[e]);
      });
    }
    setNamespaces(e) {
      const { namespaces: n = {}, optionalNamespaces: s = {}, sessionProperties: r, scopedProperties: i } = e;
      this.optionalNamespaces = jo(n, s), this.sessionProperties = r, this.scopedProperties = i;
    }
    validateChain(e) {
      const [n, s] = (e == null ? void 0 : e.split(":")) || [
        "",
        ""
      ];
      if (!this.namespaces || !Object.keys(this.namespaces).length) return [
        n,
        s
      ];
      if (n && !Object.keys(this.namespaces || {}).map((o) => Jr(o)).includes(n)) throw new Error(`Namespace '${n}' is not configured. Please call connect() first with namespace config.`);
      if (n && s) return [
        n,
        s
      ];
      const r = Jr(Object.keys(this.namespaces)[0]), i = this.rpcProviders[r].getDefaultChain();
      return [
        r,
        i
      ];
    }
    async requestAccounts() {
      const [e] = this.validateChain();
      return await this.getProvider(e).requestAccounts();
    }
    async onChainChanged({ currentCaipChainId: e, previousCaipChainId: n, internal: s = false }) {
      if (!this.namespaces) return;
      const [r, i] = this.validateChain(e);
      i && (this.updateNamespaceChain(r, i), s ? (this.events.emit("chainChanged", i), this.emitAccountsChangedOnChainChange({
        namespace: r,
        currentCaipChainId: e,
        previousCaipChainId: n
      })) : this.getProvider(r).setDefaultChain(i), await this.persist("namespaces", this.namespaces));
    }
    emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: n, previousCaipChainId: s }) {
      var r, i;
      try {
        if (s === n) return;
        const o = (i = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : i.accounts;
        if (!o) return;
        const a = o.filter((c) => c.includes(`${n}:`)).map(Af);
        if (!us(a)) return;
        this.events.emit("accountsChanged", a);
      } catch (o) {
        this.logger.warn(o, "Failed to emit accountsChanged on chain change");
      }
    }
    updateNamespaceChain(e, n) {
      if (!this.namespaces) return;
      const s = this.namespaces[e] ? e : `${e}:${n}`, r = {
        chains: [],
        methods: [],
        events: [],
        defaultChain: n
      };
      this.namespaces[s] ? this.namespaces[s] && (this.namespaces[s].defaultChain = n) : this.namespaces[s] = r;
    }
    onConnect() {
      this.createProviders(), this.events.emit("connect", {
        session: this.session
      });
    }
    async cleanup() {
      this.connectParams = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({
        deletePairings: true
      }), await this.cleanupStorage();
    }
    async persist(e, n) {
      var s;
      const r = ((s = this.session) == null ? void 0 : s.topic) || "";
      await this.client.core.storage.setItem(`${Mo}/${e}${r}`, n);
    }
    async getFromStore(e) {
      var n;
      const s = ((n = this.session) == null ? void 0 : n.topic) || "";
      return await this.client.core.storage.getItem(`${Mo}/${e}${s}`);
    }
    async deleteFromStore(e) {
      var n;
      const s = ((n = this.session) == null ? void 0 : n.topic) || "";
      await this.client.core.storage.removeItem(`${Mo}/${e}${s}`);
    }
    async cleanupStorage() {
      var e;
      try {
        if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
        const n = await this.client.core.storage.getKeys();
        for (const s of n) s.startsWith(Mo) && await this.client.core.storage.removeItem(s);
      } catch (n) {
        this.logger.warn(n, "Failed to cleanup storage");
      }
    }
  };
  const $f = 2147483648, sx = {
    convertEVMChainIdToCoinType(t) {
      if (t >= $f) throw new Error("Invalid chainId");
      return ($f | t) >>> 0;
    }
  }, Qt = De({
    suggestions: [],
    loading: false
  }), rx = {
    state: Qt,
    subscribe(t) {
      return ot(Qt, () => t(Qt));
    },
    subscribeKey(t, e) {
      return at(Qt, t, e);
    },
    async resolveName(t) {
      var _a2, _b2;
      try {
        return await le.lookupEnsName(t);
      } catch (e) {
        const n = e;
        throw new Error(((_b2 = (_a2 = n == null ? void 0 : n.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || "Error resolving name");
      }
    },
    async isNameRegistered(t) {
      try {
        return await le.lookupEnsName(t), true;
      } catch {
        return false;
      }
    },
    async getSuggestions(t) {
      try {
        Qt.loading = true, Qt.suggestions = [];
        const e = await le.getEnsNameSuggestions(t);
        return Qt.suggestions = e.suggestions || [], Qt.suggestions;
      } catch (e) {
        const n = Vi.parseEnsApiError(e, "Error fetching name suggestions");
        throw new Error(n);
      } finally {
        Qt.loading = false;
      }
    },
    async getNamesForAddress(t) {
      try {
        if (!b.state.activeCaipNetwork) return [];
        const n = H.getEnsFromCacheForAddress(t);
        if (n) return n;
        const s = await le.reverseLookupEnsName({
          address: t
        });
        return H.updateEnsCache({
          address: t,
          ens: s,
          timestamp: Date.now()
        }), s;
      } catch (e) {
        const n = Vi.parseEnsApiError(e, "Error fetching names for address");
        throw new Error(n);
      }
    },
    async registerName(t) {
      var _a2;
      const e = b.state.activeCaipNetwork, n = (_a2 = b.getAccountData(e == null ? void 0 : e.chainNamespace)) == null ? void 0 : _a2.address, s = V.getAuthConnector();
      if (!e) throw new Error("Network not found");
      if (!n || !s) throw new Error("Address or auth connector not found");
      Qt.loading = true;
      try {
        const r = JSON.stringify({
          name: t,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3)
        });
        ae.pushTransactionStack({
          onCancel() {
            ae.replace("RegisterAccountName");
          }
        });
        const i = await G.signMessage(r);
        Qt.loading = false;
        const o = e.id;
        if (!o) throw new Error("Network not found");
        const a = sx.convertEVMChainIdToCoinType(Number(o));
        await le.registerEnsName({
          coinType: a,
          address: n,
          signature: i,
          message: r
        }), b.setAccountProp("profileName", t, e.chainNamespace), H.updateEnsCache({
          address: n,
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
        }), ae.replace("RegisterAccountNameSuccess");
      } catch (r) {
        const i = Vi.parseEnsApiError(r, `Error registering name ${t}`);
        throw ae.replace("RegisterAccountName"), new Error(i);
      } finally {
        Qt.loading = false;
      }
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      var _a2, _b2;
      return ((_b2 = (_a2 = t == null ? void 0 : t.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || e;
    }
  }, Vi = ln(rx);
  function Zl(t) {
    try {
      return new URL(t);
    } catch {
      return null;
    }
  }
  function ix(t) {
    const e = t.split("/"), n = e.length > 0 && e[0] !== void 0 ? e[0] : "", s = n.lastIndexOf(":");
    return s === -1 ? {
      host: n
    } : {
      host: n.slice(0, s),
      port: n.slice(s + 1)
    };
  }
  function ox(t) {
    const e = t.indexOf("://");
    if (e === -1) return null;
    const n = t.slice(0, e), s = e + 3;
    let r = t.indexOf("/", s);
    r === -1 && (r = t.length);
    const i = t.slice(s, r), o = i.lastIndexOf(":");
    return o === -1 ? {
      scheme: n,
      host: i
    } : {
      scheme: n,
      host: i.slice(0, o),
      port: i.slice(o + 1)
    };
  }
  function ax(t, e) {
    if (e.includes("://")) {
      const o = Zl(e);
      return o ? o.origin === t : false;
    }
    const { host: n, port: s } = ix(e), r = t.indexOf("://");
    if (r !== -1) {
      const o = r + 3;
      let a = t.indexOf("/", o);
      a === -1 && (a = t.length);
      const c = t.slice(o, a);
      if (s !== void 0) return `${n}:${s}` === c;
      const l = c.split(":")[0];
      return n === l;
    }
    const i = Zl(t);
    return i ? s !== void 0 ? n === i.hostname && s === (i.port || void 0) : n === i.hostname : false;
  }
  function cx(t, e, n) {
    let s = n, r;
    const i = s.indexOf("://");
    i !== -1 && (r = s.slice(0, i), s = s.slice(i + 3));
    const o = s.indexOf("/");
    o !== -1 && (s = s.slice(0, o));
    let a = s, c;
    const l = a.lastIndexOf(":");
    l !== -1 && (c = a.slice(l + 1), a = a.slice(0, l));
    const d = a.split(".");
    for (const p of d) if (p.includes("*") && p !== "*") return false;
    const u = t.protocol.replace(/:$/u, "");
    if (r && r !== u || c !== void 0 && c !== "*" && c !== t.port) return false;
    const h = ox(e), g = (h ? h.host : t.hostname).split(".");
    if (d.length !== g.length) return false;
    for (let p = d.length - 1; p >= 0; p -= 1) {
      const m = d[p], T = g[p];
      if (m !== "*" && m !== T) return false;
    }
    return true;
  }
  const lx = {
    ton: [
      "ton_sendMessage",
      "ton_signData"
    ],
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
  }, Ws = {
    RPC_ERROR_CODE: {
      USER_REJECTED: 5e3,
      USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(t) {
      return lx[t] || [];
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
      const n = {
        ...t
      }, s = /* @__PURE__ */ new Set();
      if (e.methods && Object.keys(e.methods).forEach((r) => s.add(r)), e.chains && Object.keys(e.chains).forEach((r) => s.add(r)), e.events && Object.keys(e.events).forEach((r) => s.add(r)), e.rpcMap && Object.keys(e.rpcMap).forEach((r) => {
        const [i] = r.split(":");
        i && s.add(i);
      }), s.forEach((r) => {
        n[r] || (n[r] = this.createDefaultNamespace(r));
      }), e.methods && Object.entries(e.methods).forEach(([r, i]) => {
        n[r] && (n[r].methods = i);
      }), e.chains && Object.entries(e.chains).forEach(([r, i]) => {
        n[r] && (n[r].chains = i);
      }), e.events && Object.entries(e.events).forEach(([r, i]) => {
        n[r] && (n[r].events = i);
      }), e.rpcMap) {
        const r = /* @__PURE__ */ new Set();
        Object.entries(e.rpcMap).forEach(([i, o]) => {
          const [a, c] = i.split(":");
          !a || !c || !n[a] || (n[a].rpcMap || (n[a].rpcMap = {}), r.has(a) || (n[a].rpcMap = {}, r.add(a)), n[a].rpcMap[c] = o);
        });
      }
      return n;
    },
    createNamespaces(t, e) {
      const n = t.reduce((s, r) => {
        const { id: i, chainNamespace: o, rpcUrls: a } = r, c = a.default.http[0];
        s[o] || (s[o] = this.createDefaultNamespace(o));
        const l = `${o}:${i}`, d = s[o];
        switch (d.chains.push(l), l) {
          case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            d.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
            break;
          case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
            d.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
            break;
        }
        return (d == null ? void 0 : d.rpcMap) && c && (d.rpcMap[i] = c), s;
      }, {});
      return this.applyNamespaceOverrides(n, e);
    },
    resolveReownName: async (t) => {
      var _a2;
      const e = await Vi.resolveName(t);
      return ((_a2 = ((e == null ? void 0 : e.addresses) ? Object.values(e.addresses) : [])[0]) == null ? void 0 : _a2.address) || false;
    },
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((e) => {
        const n = e.chains || [], s = e.accounts.map((r) => {
          const [i, o] = r.split(":");
          return `${i}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...n,
          ...s
        ]));
      });
    },
    isSessionEventData(t) {
      return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null;
    },
    isUserRejectedRequestError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          const e = t, n = typeof e.code == "number", s = n && e.code === Ws.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = n && e.code === Ws.RPC_ERROR_CODE.USER_REJECTED;
          return s || r;
        }
        return false;
      } catch {
        return false;
      }
    },
    isOriginAllowed(t, e, n) {
      const s = [
        ...e,
        ...n
      ];
      if (e.length === 0) return true;
      const r = Zl(t);
      if (!r) return s.some((i) => !i.includes("*") && i === t);
      if (r.hostname === "localhost" || r.hostname === "127.0.0.1") return true;
      for (const i of s) if (i.includes("*")) {
        if (cx(r, t, i)) return true;
      } else if (ax(t, i)) return true;
      return false;
    },
    listenWcProvider({ universalProvider: t, namespace: e, onConnect: n, onDisconnect: s, onAccountsChanged: r, onChainChanged: i, onDisplayUri: o }) {
      n && t.on("connect", () => {
        const a = Ws.getWalletConnectAccounts(t, e);
        n(a);
      }), s && t.on("disconnect", () => {
        s();
      }), r && t.on("accountsChanged", (a) => {
        var _a2, _b2, _c2, _d3, _e2;
        try {
          const c = ((_c2 = (_b2 = (_a2 = t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) || [], l = (_e2 = (_d3 = t.rpcProviders) == null ? void 0 : _d3[e]) == null ? void 0 : _e2.getDefaultChain(), d = a.map((u) => {
            const h = c.find((p) => p.includes(`${e}:${l}:${u}`));
            if (!h) return;
            const { chainId: f, chainNamespace: g } = it.parseCaipAddress(h);
            return {
              address: u,
              chainId: f,
              chainNamespace: g
            };
          }).filter((u) => u !== void 0);
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
      var _a2, _b2, _c2, _d3;
      const n = /* @__PURE__ */ new Set(), s = (_d3 = (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d3.map((r) => it.parseCaipAddress(r)).filter(({ address: r }) => n.has(r.toLowerCase()) ? false : (n.add(r.toLowerCase()), true));
      return s && s.length > 0 ? s : [];
    }
  }, dx = [
    F.CONNECTOR_ID.AUTH,
    F.CONNECTOR_ID.WALLET_CONNECT
  ];
  class ux {
    constructor(e) {
      this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (n) => b.getCaipNetworks(n), this.getConnectorId = (n) => V.getConnectorId(n), e && this.construct(e);
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
    onAuthConnected({ accounts: e, chainId: n }) {
      const s = this.getCaipNetworks().filter((r) => r.chainNamespace === this.namespace).find((r) => r.id.toString() === (n == null ? void 0 : n.toString()));
      e && s && this.addConnection({
        connectorId: F.CONNECTOR_ID.AUTH,
        accounts: e,
        caipNetwork: s
      });
    }
    setAuthProvider(e) {
      e.onConnect(this.onAuthConnected.bind(this)), e.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
        id: F.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: F.CONNECTOR_NAMES.AUTH,
        provider: e,
        imageId: void 0,
        chain: this.namespace,
        chains: []
      });
    }
    addConnector(...e) {
      const n = /* @__PURE__ */ new Set();
      this.availableConnectors = [
        ...e,
        ...this.availableConnectors
      ].filter((s) => n.has(s.id) ? false : (n.add(s.id), true)), this.emit("connectors", this.availableConnectors);
    }
    addConnection(...e) {
      const n = /* @__PURE__ */ new Set();
      this.availableConnections = [
        ...e,
        ...this.availableConnections
      ].filter((s) => n.has(s.connectorId.toLowerCase()) ? false : (n.add(s.connectorId.toLowerCase()), true)), this.emit("connections", this.availableConnections);
    }
    deleteConnection(e) {
      this.availableConnections = this.availableConnections.filter((n) => n.connectorId.toLowerCase() !== e.toLowerCase()), this.emit("connections", this.availableConnections);
    }
    clearConnections(e = false) {
      this.availableConnections = [], e && this.emit("connections", this.availableConnections);
    }
    setStatus(e, n) {
      b.setAccountProp("status", e, n);
    }
    on(e, n) {
      var _a2;
      this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), (_a2 = this.eventListeners.get(e)) == null ? void 0 : _a2.add(n);
    }
    off(e, n) {
      const s = this.eventListeners.get(e);
      s && s.delete(n);
    }
    removeAllEventListeners() {
      this.eventListeners.forEach((e) => {
        e.clear();
      });
    }
    emit(e, n) {
      const s = this.eventListeners.get(e);
      s && s.forEach((r) => r(n));
    }
    async connectWalletConnect(e) {
      try {
        return {
          clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
        };
      } catch (n) {
        throw Ws.isUserRejectedRequestError(n) ? new op(n) : n;
      }
    }
    async switchNetwork(e) {
      var _a2;
      const { caipNetwork: n } = e, s = $e.getProviderId(n.chainNamespace), r = $e.getProvider(n.chainNamespace);
      if (!r) throw new Error("Provider not found");
      if (s === "WALLET_CONNECT") {
        r.setDefaultChain(n.caipNetworkId);
        return;
      }
      if (s === "AUTH") {
        const i = (_a2 = V.getAuthConnector()) == null ? void 0 : _a2.provider;
        if (!i) throw new Error("Auth provider not found");
        const o = on(n.chainNamespace);
        await i.switchNetwork({
          chainId: n.caipNetworkId
        });
        const a = await i.getUser({
          chainId: n.caipNetworkId,
          preferredAccountType: o
        });
        this.emit("switchNetwork", a);
      }
    }
    getWalletConnectConnector() {
      const e = this.connectors.find((n) => n.id === "walletConnect");
      if (!e) throw new Error("WalletConnectConnector not found");
      return e;
    }
    onConnect(e, n) {
      if (e.length > 0) {
        const { address: s, chainId: r } = ee.getAccount(e[0]), i = this.getCaipNetworks().filter((a) => a.chainNamespace === this.namespace).find((a) => a.id.toString() === (r == null ? void 0 : r.toString())), o = this.connectors.find((a) => a.id === n);
        s && (this.emit("accountChanged", {
          address: s,
          chainId: r,
          connector: o
        }), this.addConnection({
          connectorId: n,
          accounts: e.map((a) => {
            const { address: c } = ee.getAccount(a);
            return {
              address: c
            };
          }),
          caipNetwork: i
        }));
      }
    }
    onAccountsChanged(e, n, s = true) {
      var _a2, _b2;
      if (e.length > 0) {
        const { address: r } = ee.getAccount(e[0]), i = this.getConnection({
          connectorId: n,
          connections: this.connections,
          connectors: this.connectors
        });
        r && ((_a2 = this.getConnectorId(F.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === n.toLowerCase() && this.emit("accountChanged", {
          address: r,
          chainId: (_b2 = i == null ? void 0 : i.caipNetwork) == null ? void 0 : _b2.id,
          connector: i == null ? void 0 : i.connector
        }), this.addConnection({
          connectorId: n,
          accounts: e.map((o) => {
            const { address: a } = ee.getAccount(o);
            return {
              address: a
            };
          }),
          caipNetwork: i == null ? void 0 : i.caipNetwork
        });
      } else s && this.onDisconnect(n);
    }
    onDisconnect(e) {
      var _a2;
      this.removeProviderListeners(e), this.deleteConnection(e), ((_a2 = this.getConnectorId(F.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === e.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
    }
    onChainChanged(e, n) {
      var _a2;
      const s = typeof e == "string" && e.startsWith("0x") ? parseInt(e, 16).toString() : e.toString(), r = this.getConnection({
        connectorId: n,
        connections: this.connections,
        connectors: this.connectors
      }), i = this.getCaipNetworks().filter((o) => o.chainNamespace === this.namespace).find((o) => o.id.toString() === s);
      r && this.addConnection({
        connectorId: n,
        accounts: r.accounts,
        caipNetwork: i
      }), ((_a2 = this.getConnectorId(F.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === n.toLowerCase() && this.emit("switchNetwork", {
        chainId: s
      });
    }
    listenProviderEvents(e, n) {
      if (dx.includes(e)) return;
      const s = (o) => this.onAccountsChanged(o, e), r = (o) => this.onChainChanged(o, e), i = () => this.onDisconnect(e);
      this.providerHandlers[e] || (n.on("disconnect", i), n.on("accountsChanged", s), n.on("chainChanged", r), this.providerHandlers[e] = {
        provider: n,
        disconnect: i,
        accountsChanged: s,
        chainChanged: r
      });
    }
    removeProviderListeners(e) {
      if (this.providerHandlers[e]) {
        const { provider: n, disconnect: s, accountsChanged: r, chainChanged: i } = this.providerHandlers[e];
        n.removeListener("disconnect", s), n.removeListener("accountsChanged", r), n.removeListener("chainChanged", i), this.providerHandlers[e] = null;
      }
    }
    emitFirstAvailableConnection() {
      var _a2;
      const e = this.getConnection({
        connections: this.connections,
        connectors: this.connectors
      });
      if (e) {
        const [n] = e.accounts;
        this.emit("accountChanged", {
          address: n == null ? void 0 : n.address,
          chainId: (_a2 = e.caipNetwork) == null ? void 0 : _a2.id,
          connector: e.connector
        });
      }
    }
    getConnection({ address: e, connectorId: n, connections: s, connectors: r }) {
      if (n) {
        const o = s.find((l) => l.connectorId.toLowerCase() === n.toLowerCase());
        if (!o) return null;
        const a = r.find((l) => l.id.toLowerCase() === o.connectorId.toLowerCase()), c = e ? o.accounts.find((l) => l.address.toLowerCase() === e.toLowerCase()) : o.accounts[0];
        return {
          ...o,
          account: c,
          connector: a
        };
      }
      const i = s.find((o) => o.accounts.length > 0 && r.some((a) => a.id.toLowerCase() === o.connectorId.toLowerCase()));
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
  let nr = null;
  bn = {
    getSIWX() {
      return j.state.siwx;
    },
    async initializeIfEnabled(t = b.getActiveCaipAddress()) {
      var _a2, _b2, _c2;
      const e = j.state.siwx;
      if (!(e && t)) return;
      const [n, s, r] = t.split(":");
      if (b.checkIfSupportedNetwork(n, `${n}:${s}`)) try {
        if ((_a2 = j.state.remoteFeatures) == null ? void 0 : _a2.emailCapture) {
          const o = (_b2 = b.getAccountData(n)) == null ? void 0 : _b2.user;
          await me.open({
            view: "DataCapture",
            data: {
              email: (o == null ? void 0 : o.email) ?? void 0
            }
          });
          return;
        }
        if (nr && await nr, (await e.getSessions(`${n}:${s}`, r)).length) return;
        await me.open({
          view: "SIWXSignMessage"
        });
      } catch (i) {
        console.error("SIWXUtil:initializeIfEnabled", i), fe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(i)
        }), await ((_c2 = G._getClient()) == null ? void 0 : _c2.disconnect().catch(console.error)), ae.reset("Connect"), Un.showError("A problem occurred while trying initialize authentication");
      }
    },
    async isAuthenticated(t = b.getActiveCaipAddress()) {
      if (!j.state.siwx || !t) return true;
      const { chainNamespace: n, chainId: s, address: r } = it.parseCaipAddress(t), i = `${n}:${s}`;
      return (await bn.getSessions({
        address: r,
        caipNetworkId: i
      })).length > 0;
    },
    async requestSignMessage() {
      const t = j.state.siwx, e = ee.getPlainAddress(b.getActiveCaipAddress()), n = Io();
      if (!t) throw new Error("SIWX is not enabled");
      if (!e) throw new Error("No ActiveCaipAddress found");
      if (!n) throw new Error("No ActiveCaipNetwork or client found");
      try {
        const s = await t.createMessage({
          chainId: n.caipNetworkId,
          accountAddress: e
        }), r = s.toString();
        let i = "";
        t.signMessage ? i = await t.signMessage({
          message: r,
          chainId: n.caipNetworkId,
          accountAddress: e
        }) : (V.getConnectorId(n.chainNamespace) === F.CONNECTOR_ID.AUTH && ae.pushTransactionStack({}), i = await G.signMessage(r) || ""), await t.addSession({
          data: s,
          message: r,
          signature: i
        }), b.setLastConnectedSIWECaipNetwork(n), me.close(), fe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (s) {
        (!me.state.open || ae.state.view === "ApproveTransaction") && await me.open({
          view: "SIWXSignMessage"
        }), Un.showError("Error signing message"), fe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(s)
        }), console.error("SWIXUtil:requestSignMessage", s);
      }
    },
    async cancelSignMessage() {
      var _a2;
      try {
        const t = this.getSIWX();
        if ((_a2 = t == null ? void 0 : t.getRequired) == null ? void 0 : _a2.call(t)) {
          const n = b.getLastConnectedSIWECaipNetwork();
          if (n) {
            const s = await (t == null ? void 0 : t.getSessions(n == null ? void 0 : n.caipNetworkId, ee.getPlainAddress(b.getActiveCaipAddress()) || ""));
            s && s.length > 0 ? await b.switchActiveNetwork(n) : await G.disconnect();
          } else await G.disconnect();
        } else me.close();
        me.close(), fe.sendEvent({
          event: "CLICK_CANCEL_SIWX",
          type: "track",
          properties: this.getSIWXEventProperties()
        });
      } catch (t) {
        console.error("SIWXUtil:cancelSignMessage", t);
      }
    },
    async getAllSessions() {
      const t = this.getSIWX(), e = b.getAllRequestedCaipNetworks(), n = [];
      return await Promise.all(e.map(async (s) => {
        const r = await (t == null ? void 0 : t.getSessions(s.caipNetworkId, ee.getPlainAddress(b.getActiveCaipAddress()) || ""));
        r && n.push(...r);
      })), n;
    },
    async getSessions(t) {
      var _a2;
      const e = j.state.siwx;
      let n = t == null ? void 0 : t.address;
      if (!n) {
        const r = b.getActiveCaipAddress();
        n = ee.getPlainAddress(r);
      }
      let s = t == null ? void 0 : t.caipNetworkId;
      return s || (s = (_a2 = b.getActiveCaipNetwork()) == null ? void 0 : _a2.caipNetworkId), e && n && s ? e.getSessions(s, n) : [];
    },
    async isSIWXCloseDisabled() {
      var _a2;
      const t = this.getSIWX();
      if (t) {
        const e = ae.state.view === "ApproveTransaction", n = ae.state.view === "SIWXSignMessage";
        if (e || n) return ((_a2 = t.getRequired) == null ? void 0 : _a2.call(t)) && (await this.getSessions()).length === 0;
      }
      return false;
    },
    async authConnectorAuthenticate({ authConnector: t, chainId: e, socialUri: n, preferredAccountType: s, chainNamespace: r }) {
      var _a2;
      const i = bn.getSIWX(), o = Io();
      if (!i || !r.includes(F.CHAIN.EVM) || ((_a2 = j.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
        const u = await t.connect({
          chainId: e,
          socialUri: n,
          preferredAccountType: s
        });
        return {
          address: u.address,
          chainId: u.chainId,
          accounts: u.accounts
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
        socialUri: n,
        siwxMessage: l,
        preferredAccountType: s
      });
      return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await bn.addEmbeddedWalletSession(l, d.message, d.signature), b.setLastConnectedSIWECaipNetwork(o), {
        address: d.address,
        chainId: d.chainId,
        accounts: d.accounts
      };
    },
    async addEmbeddedWalletSession(t, e, n) {
      if (nr) return nr;
      const s = bn.getSIWX();
      return s ? (nr = s.addSession({
        data: t,
        message: e,
        signature: n
      }).finally(() => {
        nr = null;
      }), nr) : Promise.resolve();
    },
    async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: n }) {
      var _a2, _b2, _c2;
      const s = bn.getSIWX(), r = Io(), i = new Set(e.map((l) => l.split(":")[0]));
      if (!s || i.size !== 1 || !i.has("eip155")) return false;
      const o = await s.createMessage({
        chainId: ((_a2 = Io()) == null ? void 0 : _a2.caipNetworkId) || "",
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
        methods: n,
        chains: [
          o.chainId,
          ...e.filter((l) => l !== o.chainId)
        ]
      });
      Un.showLoading("Authenticating...", {
        autoClose: false
      });
      const c = {
        ...a.session.peer.metadata,
        name: a.session.peer.metadata.name,
        icon: (_b2 = a.session.peer.metadata.icons) == null ? void 0 : _b2[0],
        type: "WALLET_CONNECT"
      };
      if (b.setAccountProp("connectedWalletInfo", c, Array.from(i)[0]), (_c2 = a == null ? void 0 : a.auths) == null ? void 0 : _c2.length) {
        const l = a.auths.map((d) => {
          const u = t.client.formatAuthMessage({
            request: d.p,
            iss: d.p.iss
          });
          return {
            data: {
              ...d.p,
              accountAddress: d.p.iss.split(":").slice(-1).join(""),
              chainId: d.p.iss.split(":").slice(2, 4).join(":"),
              uri: d.p.aud ?? "",
              version: d.p.version || o.version,
              expirationTime: d.p.exp,
              issuedAt: d.p.iat,
              notBefore: d.p.nbf
            },
            message: u,
            signature: d.s.s,
            cacao: d
          };
        });
        try {
          await s.setSessions(l), r && b.setLastConnectedSIWECaipNetwork(r), fe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: bn.getSIWXEventProperties()
          });
        } catch (d) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), fe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: bn.getSIWXEventProperties(d)
          }), await t.disconnect().catch(console.error), d;
        } finally {
          Un.hide();
        }
      }
      return true;
    },
    getSIWXEventProperties(t) {
      var _a2;
      const e = b.state.activeChain;
      if (!e) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
      return {
        network: ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || "",
        isSmartAccount: on(e) === is.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: t ? ee.parseError(t) : void 0
      };
    },
    async clearSessions() {
      const t = this.getSIWX();
      t && await t.setSessions([]);
    }
  };
  class hx {
    constructor({ provider: e, namespace: n }) {
      this.id = F.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = b.getCaipNetworks.bind(b), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = n;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const n = this.getCaipNetworks(), s = j.state.universalProviderConfigOverride, r = Ws.createNamespaces(n, s);
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
      const e = this.chains.map((n) => n.caipNetworkId);
      return bn.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: e,
        methods: fx
      });
    }
  }
  let fx, fn, px, gx, mx;
  fx = [
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
  fn = De({
    message: "",
    variant: "info",
    open: false
  });
  px = {
    state: fn,
    subscribeKey(t, e) {
      return at(fn, t, e);
    },
    open(t, e) {
      const { debug: n } = j.state, { code: s, displayMessage: r, debugMessage: i } = t;
      r && n && (fn.message = r, fn.variant = e, fn.open = true);
    },
    warn(t, e, n) {
      fn.open = true, fn.message = t, fn.variant = "warning", e && console.warn(e, n);
    },
    close() {
      fn.open = false, fn.message = "", fn.variant = "info";
    }
  };
  jt = ln(px);
  gx = {
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  };
  mx = {
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  };
  const Qo = globalThis, Fd = Qo.ShadowRoot && (Qo.ShadyCSS === void 0 || Qo.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, jd = Symbol(), Uf = /* @__PURE__ */ new WeakMap();
  let ww = class {
    constructor(e, n, s) {
      if (this._$cssResult$ = true, s !== jd) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = e, this.t = n;
    }
    get styleSheet() {
      let e = this.o;
      const n = this.t;
      if (Fd && e === void 0) {
        const s = n !== void 0 && n.length === 1;
        s && (e = Uf.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Uf.set(n, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  };
  let yn, wx, Df;
  yn = (t) => new ww(typeof t == "string" ? t : t + "", void 0, jd);
  Ls = (t, ...e) => {
    const n = t.length === 1 ? t[0] : e.reduce((s, r, i) => s + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(r) + t[i + 1], t[0]);
    return new ww(n, t, jd);
  };
  wx = (t, e) => {
    if (Fd) t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
    else for (const n of e) {
      const s = document.createElement("style"), r = Qo.litNonce;
      r !== void 0 && s.setAttribute("nonce", r), s.textContent = n.cssText, t.appendChild(s);
    }
  };
  Df = Fd ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
    let n = "";
    for (const s of e.cssRules) n += s.cssText;
    return yn(n);
  })(t) : t;
  let yx, bx, Ex, vx, Cx, Ax, Ga, Bf, Ix, Nx, Ki, Lf;
  ({ is: yx, defineProperty: bx, getOwnPropertyDescriptor: Ex, getOwnPropertyNames: vx, getOwnPropertySymbols: Cx, getPrototypeOf: Ax } = Object);
  Ga = globalThis;
  Bf = Ga.trustedTypes;
  Ix = Bf ? Bf.emptyScript : "";
  Nx = Ga.reactiveElementPolyfillSupport;
  Ki = (t, e) => t;
  Jl = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? Ix : null;
          break;
        case Object:
        case Array:
          t = t == null ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let n = t;
      switch (e) {
        case Boolean:
          n = t !== null;
          break;
        case Number:
          n = t === null ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(t);
          } catch {
            n = null;
          }
      }
      return n;
    }
  };
  yw = (t, e) => !yx(t, e);
  Lf = {
    attribute: true,
    type: String,
    converter: Jl,
    reflect: false,
    useDefault: false,
    hasChanged: yw
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ga.litPropertyMetadata ?? (Ga.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let Vr = class extends HTMLElement {
    static addInitializer(e) {
      this._$Ei(), (this.l ?? (this.l = [])).push(e);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(e, n = Lf) {
      if (n.state && (n.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((n = Object.create(n)).wrapped = true), this.elementProperties.set(e, n), !n.noAccessor) {
        const s = Symbol(), r = this.getPropertyDescriptor(e, s, n);
        r !== void 0 && bx(this.prototype, e, r);
      }
    }
    static getPropertyDescriptor(e, n, s) {
      const { get: r, set: i } = Ex(this.prototype, e) ?? {
        get() {
          return this[n];
        },
        set(o) {
          this[n] = o;
        }
      };
      return {
        get: r,
        set(o) {
          const a = r == null ? void 0 : r.call(this);
          i == null ? void 0 : i.call(this, o), this.requestUpdate(e, a, s);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(e) {
      return this.elementProperties.get(e) ?? Lf;
    }
    static _$Ei() {
      if (this.hasOwnProperty(Ki("elementProperties"))) return;
      const e = Ax(this);
      e.finalize(), e.l !== void 0 && (this.l = [
        ...e.l
      ]), this.elementProperties = new Map(e.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(Ki("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ki("properties"))) {
        const n = this.properties, s = [
          ...vx(n),
          ...Cx(n)
        ];
        for (const r of s) this.createProperty(r, n[r]);
      }
      const e = this[Symbol.metadata];
      if (e !== null) {
        const n = litPropertyMetadata.get(e);
        if (n !== void 0) for (const [s, r] of n) this.elementProperties.set(s, r);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [n, s] of this.elementProperties) {
        const r = this._$Eu(n, s);
        r !== void 0 && this._$Eh.set(r, n);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(e) {
      const n = [];
      if (Array.isArray(e)) {
        const s = new Set(e.flat(1 / 0).reverse());
        for (const r of s) n.unshift(Df(r));
      } else e !== void 0 && n.push(Df(e));
      return n;
    }
    static _$Eu(e, n) {
      const s = n.attribute;
      return s === false ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
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
      const e = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
      for (const s of n.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
      e.size > 0 && (this._$Ep = e);
    }
    createRenderRoot() {
      const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return wx(e, this.constructor.elementStyles), e;
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
    attributeChangedCallback(e, n, s) {
      this._$AK(e, s);
    }
    _$ET(e, n) {
      var _a2;
      const s = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, s);
      if (r !== void 0 && s.reflect === true) {
        const i = (((_a2 = s.converter) == null ? void 0 : _a2.toAttribute) !== void 0 ? s.converter : Jl).toAttribute(n, s.type);
        this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
      }
    }
    _$AK(e, n) {
      var _a2, _b2;
      const s = this.constructor, r = s._$Eh.get(e);
      if (r !== void 0 && this._$Em !== r) {
        const i = s.getPropertyOptions(r), o = typeof i.converter == "function" ? {
          fromAttribute: i.converter
        } : ((_a2 = i.converter) == null ? void 0 : _a2.fromAttribute) !== void 0 ? i.converter : Jl;
        this._$Em = r;
        const a = o.fromAttribute(n, i.type);
        this[r] = a ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(r)) ?? a, this._$Em = null;
      }
    }
    requestUpdate(e, n, s, r = false, i) {
      var _a2;
      if (e !== void 0) {
        const o = this.constructor;
        if (r === false && (i = this[e]), s ?? (s = o.getPropertyOptions(e)), !((s.hasChanged ?? yw)(i, n) || s.useDefault && s.reflect && i === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(e)) && !this.hasAttribute(o._$Eu(e, s)))) return;
        this.C(e, n, s);
      }
      this.isUpdatePending === false && (this._$ES = this._$EP());
    }
    C(e, n, { useDefault: s, reflect: r, wrapped: i }, o) {
      s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? n ?? this[e]), i !== true || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (n = void 0), this._$AL.set(e, n)), r === true && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (n) {
        Promise.reject(n);
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
        const s = this.constructor.elementProperties;
        if (s.size > 0) for (const [r, i] of s) {
          const { wrapped: o } = i, a = this[r];
          o !== true || this._$AL.has(r) || a === void 0 || this.C(r, void 0, i, a);
        }
      }
      let e = false;
      const n = this._$AL;
      try {
        e = this.shouldUpdate(n), e ? (this.willUpdate(n), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((s) => {
          var _a3;
          return (_a3 = s.hostUpdate) == null ? void 0 : _a3.call(s);
        }), this.update(n)) : this._$EM();
      } catch (s) {
        throw e = false, this._$EM(), s;
      }
      e && this._$AE(n);
    }
    willUpdate(e) {
    }
    _$AE(e) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((n) => {
        var _a3;
        return (_a3 = n.hostUpdated) == null ? void 0 : _a3.call(n);
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
      this._$Eq && (this._$Eq = this._$Eq.forEach((n) => this._$ET(n, this[n]))), this._$EM();
    }
    updated(e) {
    }
    firstUpdated(e) {
    }
  };
  Vr.elementStyles = [], Vr.shadowRootOptions = {
    mode: "open"
  }, Vr[Ki("elementProperties")] = /* @__PURE__ */ new Map(), Vr[Ki("finalized")] = /* @__PURE__ */ new Map(), Nx == null ? void 0 : Nx({
    ReactiveElement: Vr
  }), (Ga.reactiveElementVersions ?? (Ga.reactiveElementVersions = [])).push("2.1.2");
  let qd, Mf, Ca, Ff, bw, Ms, Ew, Sx, Nr, so, ro, Wd, _x, Zc, xi, jf, qf, sr, Wf, Hf, vw, Cw, Vf, wr;
  qd = globalThis;
  Mf = (t) => t;
  Ca = qd.trustedTypes;
  Ff = Ca ? Ca.createPolicy("lit-html", {
    createHTML: (t) => t
  }) : void 0;
  bw = "$lit$";
  Ms = `lit$${Math.random().toFixed(9).slice(2)}$`;
  Ew = "?" + Ms;
  Sx = `<${Ew}>`;
  Nr = document;
  so = () => Nr.createComment("");
  ro = (t) => t === null || typeof t != "object" && typeof t != "function";
  Wd = Array.isArray;
  _x = (t) => Wd(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function";
  Zc = `[ 	
\f\r]`;
  xi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  jf = /-->/g;
  qf = />/g;
  sr = RegExp(`>|${Zc}(?:([^\\s"'>=/]+)(${Zc}*=${Zc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  Wf = /'/g;
  Hf = /"/g;
  vw = /^(?:script|style|textarea|title)$/i;
  Cw = (t) => (e, ...n) => ({
    _$litType$: t,
    strings: e,
    values: n
  });
  Qk = Cw(1);
  e3 = Cw(2);
  ui = Symbol.for("lit-noChange");
  Qe = Symbol.for("lit-nothing");
  Vf = /* @__PURE__ */ new WeakMap();
  wr = Nr.createTreeWalker(Nr, 129);
  function Aw(t, e) {
    if (!Wd(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Ff !== void 0 ? Ff.createHTML(e) : e;
  }
  const Tx = (t, e) => {
    const n = t.length - 1, s = [];
    let r, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = xi;
    for (let a = 0; a < n; a++) {
      const c = t[a];
      let l, d, u = -1, h = 0;
      for (; h < c.length && (o.lastIndex = h, d = o.exec(c), d !== null); ) h = o.lastIndex, o === xi ? d[1] === "!--" ? o = jf : d[1] !== void 0 ? o = qf : d[2] !== void 0 ? (vw.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = sr) : d[3] !== void 0 && (o = sr) : o === sr ? d[0] === ">" ? (o = r ?? xi, u = -1) : d[1] === void 0 ? u = -2 : (u = o.lastIndex - d[2].length, l = d[1], o = d[3] === void 0 ? sr : d[3] === '"' ? Hf : Wf) : o === Hf || o === Wf ? o = sr : o === jf || o === qf ? o = xi : (o = sr, r = void 0);
      const f = o === sr && t[a + 1].startsWith("/>") ? " " : "";
      i += o === xi ? c + Sx : u >= 0 ? (s.push(l), c.slice(0, u) + bw + c.slice(u) + Ms + f) : c + Ms + (u === -2 ? a : f);
    }
    return [
      Aw(t, i + (t[n] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")),
      s
    ];
  };
  class io {
    constructor({ strings: e, _$litType$: n }, s) {
      let r;
      this.parts = [];
      let i = 0, o = 0;
      const a = e.length - 1, c = this.parts, [l, d] = Tx(e, n);
      if (this.el = io.createElement(l, s), wr.currentNode = this.el.content, n === 2 || n === 3) {
        const u = this.el.content.firstChild;
        u.replaceWith(...u.childNodes);
      }
      for (; (r = wr.nextNode()) !== null && c.length < a; ) {
        if (r.nodeType === 1) {
          if (r.hasAttributes()) for (const u of r.getAttributeNames()) if (u.endsWith(bw)) {
            const h = d[o++], f = r.getAttribute(u).split(Ms), g = /([.?@])?(.*)/.exec(h);
            c.push({
              type: 1,
              index: i,
              name: g[2],
              strings: f,
              ctor: g[1] === "." ? xx : g[1] === "?" ? kx : g[1] === "@" ? Px : Ya
            }), r.removeAttribute(u);
          } else u.startsWith(Ms) && (c.push({
            type: 6,
            index: i
          }), r.removeAttribute(u));
          if (vw.test(r.tagName)) {
            const u = r.textContent.split(Ms), h = u.length - 1;
            if (h > 0) {
              r.textContent = Ca ? Ca.emptyScript : "";
              for (let f = 0; f < h; f++) r.append(u[f], so()), wr.nextNode(), c.push({
                type: 2,
                index: ++i
              });
              r.append(u[h], so());
            }
          }
        } else if (r.nodeType === 8) if (r.data === Ew) c.push({
          type: 2,
          index: i
        });
        else {
          let u = -1;
          for (; (u = r.data.indexOf(Ms, u + 1)) !== -1; ) c.push({
            type: 7,
            index: i
          }), u += Ms.length - 1;
        }
        i++;
      }
    }
    static createElement(e, n) {
      const s = Nr.createElement("template");
      return s.innerHTML = e, s;
    }
  }
  function hi(t, e, n = t, s) {
    var _a2, _b2;
    if (e === ui) return e;
    let r = s !== void 0 ? (_a2 = n._$Co) == null ? void 0 : _a2[s] : n._$Cl;
    const i = ro(e) ? void 0 : e._$litDirective$;
    return (r == null ? void 0 : r.constructor) !== i && ((_b2 = r == null ? void 0 : r._$AO) == null ? void 0 : _b2.call(r, false), i === void 0 ? r = void 0 : (r = new i(t), r._$AT(t, n, s)), s !== void 0 ? (n._$Co ?? (n._$Co = []))[s] = r : n._$Cl = r), r !== void 0 && (e = hi(t, r._$AS(t, e.values), r, s)), e;
  }
  class Ox {
    constructor(e, n) {
      this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(e) {
      const { el: { content: n }, parts: s } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? Nr).importNode(n, true);
      wr.currentNode = r;
      let i = wr.nextNode(), o = 0, a = 0, c = s[0];
      for (; c !== void 0; ) {
        if (o === c.index) {
          let l;
          c.type === 2 ? l = new Eo(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new Rx(i, this, e)), this._$AV.push(l), c = s[++a];
        }
        o !== (c == null ? void 0 : c.index) && (i = wr.nextNode(), o++);
      }
      return wr.currentNode = Nr, r;
    }
    p(e) {
      let n = 0;
      for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, n), n += s.strings.length - 2) : s._$AI(e[n])), n++;
    }
  }
  class Eo {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(e, n, s, r) {
      this.type = 2, this._$AH = Qe, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = s, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? true;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const n = this._$AM;
      return n !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = n.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, n = this) {
      e = hi(this, e, n), ro(e) ? e === Qe || e == null || e === "" ? (this._$AH !== Qe && this._$AR(), this._$AH = Qe) : e !== this._$AH && e !== ui && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : _x(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== Qe && ro(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Nr.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      var _a2;
      const { values: n, _$litType$: s } = e, r = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = io.createElement(Aw(s.h, s.h[0]), this.options)), s);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === r) this._$AH.p(n);
      else {
        const i = new Ox(r, this), o = i.u(this.options);
        i.p(n), this.T(o), this._$AH = i;
      }
    }
    _$AC(e) {
      let n = Vf.get(e.strings);
      return n === void 0 && Vf.set(e.strings, n = new io(e)), n;
    }
    k(e) {
      Wd(this._$AH) || (this._$AH = [], this._$AR());
      const n = this._$AH;
      let s, r = 0;
      for (const i of e) r === n.length ? n.push(s = new Eo(this.O(so()), this.O(so()), this, this.options)) : s = n[r], s._$AI(i), r++;
      r < n.length && (this._$AR(s && s._$AB.nextSibling, r), n.length = r);
    }
    _$AR(e = this._$AA.nextSibling, n) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, n); e !== this._$AB; ) {
        const s = Mf(e).nextSibling;
        Mf(e).remove(), e = s;
      }
    }
    setConnected(e) {
      var _a2;
      this._$AM === void 0 && (this._$Cv = e, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, e));
    }
  }
  class Ya {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, n, s, r, i) {
      this.type = 1, this._$AH = Qe, this._$AN = void 0, this.element = e, this.name = n, this._$AM = r, this.options = i, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = Qe;
    }
    _$AI(e, n = this, s, r) {
      const i = this.strings;
      let o = false;
      if (i === void 0) e = hi(this, e, n, 0), o = !ro(e) || e !== this._$AH && e !== ui, o && (this._$AH = e);
      else {
        const a = e;
        let c, l;
        for (e = i[0], c = 0; c < i.length - 1; c++) l = hi(this, a[s + c], n, c), l === ui && (l = this._$AH[c]), o || (o = !ro(l) || l !== this._$AH[c]), l === Qe ? e = Qe : e !== Qe && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
      }
      o && !r && this.j(e);
    }
    j(e) {
      e === Qe ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class xx extends Ya {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === Qe ? void 0 : e;
    }
  }
  class kx extends Ya {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== Qe);
    }
  }
  class Px extends Ya {
    constructor(e, n, s, r, i) {
      super(e, n, s, r, i), this.type = 5;
    }
    _$AI(e, n = this) {
      if ((e = hi(this, e, n, 0) ?? Qe) === ui) return;
      const s = this._$AH, r = e === Qe && s !== Qe || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, i = e !== Qe && (s === Qe || r);
      r && this.element.removeEventListener(this.name, this, s), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var _a2;
      typeof this._$AH == "function" ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class Rx {
    constructor(e, n, s) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = s;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      hi(this, e);
    }
  }
  const $x = qd.litHtmlPolyfillSupport;
  $x == null ? void 0 : $x(io, Eo), (qd.litHtmlVersions ?? (qd.litHtmlVersions = [])).push("3.3.2");
  const Ux = (t, e, n) => {
    const s = (n == null ? void 0 : n.renderBefore) ?? e;
    let r = s._$litPart$;
    if (r === void 0) {
      const i = (n == null ? void 0 : n.renderBefore) ?? null;
      s._$litPart$ = r = new Eo(e.insertBefore(so(), i), i, void 0, n ?? {});
    }
    return r._$AI(t), r;
  };
  const Hd = globalThis;
  ea = class extends Vr {
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
      const n = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ux(n, this.renderRoot, this.renderOptions);
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
      return ui;
    }
  };
  ea._$litElement$ = true, ea.finalized = true, (_d2 = Hd.litElementHydrateSupport) == null ? void 0 : _d2.call(Hd, {
    LitElement: ea
  });
  const Dx = Hd.litElementPolyfillSupport;
  Dx == null ? void 0 : Dx({
    LitElement: ea
  });
  (Hd.litElementVersions ?? (Hd.litElementVersions = [])).push("4.2.2");
  const Bx = {
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
  }, Aa = {
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
  }, Lx = {
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
  }, Mx = {
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
  }, Fx = {
    regular: "KHTeka",
    mono: "KHTekaMono"
  }, jx = {
    regular: "400",
    medium: "500"
  }, qx = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px"
  }, Wx = {
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
  }, Hx = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
  }, Vx = {
    xl: "400ms",
    lg: "200ms",
    md: "125ms",
    sm: "75ms"
  }, Xl = {
    colors: Bx,
    fontFamily: Fx,
    fontWeight: jx,
    textSize: qx,
    typography: Wx,
    tokens: {
      core: Aa.core,
      theme: Aa.dark
    },
    borderRadius: Lx,
    spacing: Mx,
    durations: Vx,
    easings: Hx
  }, Kf = "--apkt";
  function Wo(t) {
    if (!t) return {};
    const e = {};
    return e["font-family"] = t["--apkt-font-family"] ?? t["--w3m-font-family"] ?? "KHTeka", e.accent = t["--apkt-accent"] ?? t["--w3m-accent"] ?? "#0988F0", e["color-mix"] = t["--apkt-color-mix"] ?? t["--w3m-color-mix"] ?? "#000", e["color-mix-strength"] = t["--apkt-color-mix-strength"] ?? t["--w3m-color-mix-strength"] ?? 0, e["font-size-master"] = t["--apkt-font-size-master"] ?? t["--w3m-font-size-master"] ?? "10px", e["border-radius-master"] = t["--apkt-border-radius-master"] ?? t["--w3m-border-radius-master"] ?? "4px", t["--apkt-z-index"] !== void 0 ? e["z-index"] = t["--apkt-z-index"] : t["--w3m-z-index"] !== void 0 && (e["z-index"] = t["--w3m-z-index"]), e;
  }
  let es;
  es = {
    createCSSVariables(t) {
      const e = {}, n = {};
      function s(i, o, a = "") {
        for (const [c, l] of Object.entries(i)) {
          const d = a ? `${a}-${c}` : c;
          l && typeof l == "object" && Object.keys(l).length ? (o[c] = {}, s(l, o[c], d)) : typeof l == "string" && (o[c] = `${Kf}-${d}`);
        }
      }
      function r(i, o) {
        for (const [a, c] of Object.entries(i)) c && typeof c == "object" ? (o[a] = {}, r(c, o[a])) : typeof c == "string" && (o[a] = `var(${c})`);
      }
      return s(t, e), r(e, n), {
        cssVariables: e,
        cssVariablesVarPrefix: n
      };
    },
    assignCSSVariables(t, e) {
      const n = {};
      function s(r, i, o) {
        for (const [a, c] of Object.entries(r)) {
          const l = o ? `${o}-${a}` : a, d = i[a];
          c && typeof c == "object" ? s(c, d, l) : typeof d == "string" && (n[`${Kf}-${l}`] = d);
        }
      }
      return s(t, e), n;
    },
    createRootStyles(t, e) {
      const n = {
        ...Xl,
        tokens: {
          ...Xl.tokens,
          theme: t === "light" ? Aa.light : Aa.dark
        }
      }, { cssVariables: s } = es.createCSSVariables(n), r = es.assignCSSVariables(s, n), i = es.generateW3MVariables(e), o = es.generateW3MOverrides(e), a = es.generateScaledVariables(e), c = es.generateBaseVariables(r), l = {
        ...r,
        ...c,
        ...i,
        ...o,
        ...a
      }, d = es.applyColorMixToVariables(e, l), u = {
        ...l,
        ...d
      };
      return `:root {${Object.entries(u).map(([f, g]) => `${f}:${g.replace("/[:;{}</>]/g", "")};`).join("")}}`;
    },
    generateW3MVariables(t) {
      if (!t) return {};
      const e = Wo(t), n = {};
      return n["--w3m-font-family"] = e["font-family"], n["--w3m-accent"] = e.accent, n["--w3m-color-mix"] = e["color-mix"], n["--w3m-color-mix-strength"] = `${e["color-mix-strength"]}%`, n["--w3m-font-size-master"] = e["font-size-master"], n["--w3m-border-radius-master"] = e["border-radius-master"], n;
    },
    generateW3MOverrides(t) {
      if (!t) return {};
      const e = Wo(t), n = {};
      if (t["--apkt-accent"] || t["--w3m-accent"]) {
        const s = e.accent;
        n["--apkt-tokens-core-iconAccentPrimary"] = s, n["--apkt-tokens-core-borderAccentPrimary"] = s, n["--apkt-tokens-core-textAccentPrimary"] = s, n["--apkt-tokens-core-backgroundAccentPrimary"] = s;
      }
      return (t["--apkt-font-family"] || t["--w3m-font-family"]) && (n["--apkt-fontFamily-regular"] = e["font-family"]), e["z-index"] !== void 0 && (n["--apkt-tokens-core-zIndex"] = `${e["z-index"]}`), n;
    },
    generateScaledVariables(t) {
      if (!t) return {};
      const e = Wo(t), n = {};
      if (t["--apkt-font-size-master"] || t["--w3m-font-size-master"]) {
        const s = parseFloat(e["font-size-master"].replace("px", ""));
        n["--apkt-textSize-h1"] = `${Number(s) * 5}px`, n["--apkt-textSize-h2"] = `${Number(s) * 4.4}px`, n["--apkt-textSize-h3"] = `${Number(s) * 3.8}px`, n["--apkt-textSize-h4"] = `${Number(s) * 3.2}px`, n["--apkt-textSize-h5"] = `${Number(s) * 2.6}px`, n["--apkt-textSize-h6"] = `${Number(s) * 2}px`, n["--apkt-textSize-large"] = `${Number(s) * 1.6}px`, n["--apkt-textSize-medium"] = `${Number(s) * 1.4}px`, n["--apkt-textSize-small"] = `${Number(s) * 1.2}px`;
      }
      if (t["--apkt-border-radius-master"] || t["--w3m-border-radius-master"]) {
        const s = parseFloat(e["border-radius-master"].replace("px", ""));
        n["--apkt-borderRadius-1"] = `${Number(s)}px`, n["--apkt-borderRadius-2"] = `${Number(s) * 2}px`, n["--apkt-borderRadius-3"] = `${Number(s) * 3}px`, n["--apkt-borderRadius-4"] = `${Number(s) * 4}px`, n["--apkt-borderRadius-5"] = `${Number(s) * 5}px`, n["--apkt-borderRadius-6"] = `${Number(s) * 6}px`, n["--apkt-borderRadius-8"] = `${Number(s) * 8}px`, n["--apkt-borderRadius-16"] = `${Number(s) * 16}px`, n["--apkt-borderRadius-20"] = `${Number(s) * 20}px`, n["--apkt-borderRadius-32"] = `${Number(s) * 32}px`, n["--apkt-borderRadius-64"] = `${Number(s) * 64}px`, n["--apkt-borderRadius-128"] = `${Number(s) * 128}px`;
      }
      return n;
    },
    generateColorMixCSS(t, e) {
      if (!(t == null ? void 0 : t["--w3m-color-mix"]) || !t["--w3m-color-mix-strength"]) return "";
      const n = t["--w3m-color-mix"], s = t["--w3m-color-mix-strength"];
      if (!s || s === 0) return "";
      const r = Object.keys(e || {}).filter((o) => {
        const a = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon"), c = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
        return a && !c;
      });
      return r.length === 0 ? "" : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${r.map((o) => {
        const a = (e == null ? void 0 : e[o]) || "";
        return a.includes("color-mix") || a.startsWith("#") || a.startsWith("rgb") ? `${o}: color-mix(in srgb, ${n} ${s}%, ${a});` : `${o}: color-mix(in srgb, ${n} ${s}%, var(${o}-base, ${a}));`;
      }).join("")}
      }
    }`;
    },
    generateBaseVariables(t) {
      const e = {}, n = t["--apkt-tokens-theme-backgroundPrimary"];
      n && (e["--apkt-tokens-theme-backgroundPrimary-base"] = n);
      const s = t["--apkt-tokens-core-backgroundAccentPrimary"];
      return s && (e["--apkt-tokens-core-backgroundAccentPrimary-base"] = s), e;
    },
    applyColorMixToVariables(t, e) {
      const n = {};
      (e == null ? void 0 : e["--apkt-tokens-theme-backgroundPrimary"]) && (n["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)"), (e == null ? void 0 : e["--apkt-tokens-core-backgroundAccentPrimary"]) && (n["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)");
      const s = Wo(t), r = s["color-mix"], i = s["color-mix-strength"];
      if (!i || i === 0) return n;
      const o = Object.keys(e || {}).filter((a) => {
        const c = a.includes("-tokens-core-background") || a.includes("-tokens-core-text") || a.includes("-tokens-core-border") || a.includes("-tokens-core-foreground") || a.includes("-tokens-core-icon") || a.includes("-tokens-theme-background") || a.includes("-tokens-theme-text") || a.includes("-tokens-theme-border") || a.includes("-tokens-theme-foreground") || a.includes("-tokens-theme-icon") || a.includes("-tokens-theme-overlay"), l = a.includes("-borderRadius-") || a.includes("-spacing-") || a.includes("-textSize-") || a.includes("-fontFamily-") || a.includes("-fontWeight-") || a.includes("-typography-") || a.includes("-duration-") || a.includes("-ease-") || a.includes("-path-") || a.includes("-width-") || a.includes("-height-") || a.includes("-visual-size-") || a.includes("-modal-width") || a.includes("-cover");
        return c && !l;
      });
      return o.length === 0 || o.forEach((a) => {
        const c = (e == null ? void 0 : e[a]) || "";
        a.endsWith("-base") || (a === "--apkt-tokens-theme-backgroundPrimary" || a === "--apkt-tokens-core-backgroundAccentPrimary" ? n[a] = `color-mix(in srgb, ${r} ${i}%, var(${a}-base))` : c.includes("color-mix") || c.startsWith("#") || c.startsWith("rgb") ? n[a] = `color-mix(in srgb, ${r} ${i}%, ${c})` : n[a] = `color-mix(in srgb, ${r} ${i}%, var(${a}-base, ${c}))`);
      }), n;
    }
  };
  ({ cssVariablesVarPrefix: Kx } = es.createCSSVariables(Xl));
  t3 = function(t, ...e) {
    return Ls(t, ...e.map((n) => yn(typeof n == "function" ? n(Kx) : n)));
  };
  let ar, yr, Bn, En, Ia;
  const Jn = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
  };
  function Na(t, e = "dark") {
    ar && document.head.removeChild(ar), ar = document.createElement("style"), ar.textContent = es.createRootStyles(e, t), document.head.appendChild(ar);
  }
  n3 = function(t, e = "dark") {
    if (Ia = t, yr = document.createElement("style"), Bn = document.createElement("style"), En = document.createElement("style"), yr.textContent = oi(t).core.cssText, Bn.textContent = oi(t).dark.cssText, En.textContent = oi(t).light.cssText, document.head.appendChild(yr), document.head.appendChild(Bn), document.head.appendChild(En), Na(t, e), Ql(e), !((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]))) for (const [s, r] of Object.entries(Jn)) {
      const i = document.createElement("link");
      i.rel = "preload", i.href = r, i.as = "font", i.type = s.includes("woff2") ? "font/woff2" : "font/woff", i.crossOrigin = "anonymous", document.head.appendChild(i);
    }
    Ql(e);
  };
  function Ql(t = "dark") {
    Bn && En && ar && (t === "light" ? (Na(Ia, t), Bn.removeAttribute("media"), En.media = "enabled") : (Na(Ia, t), En.removeAttribute("media"), Bn.media = "enabled"));
  }
  function zx(t) {
    var _a2, _b2, _c2;
    if (Ia = t, yr && Bn && En) {
      yr.textContent = oi(t).core.cssText, Bn.textContent = oi(t).dark.cssText, En.textContent = oi(t).light.cssText;
      const e = (t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]);
      e && (yr.textContent = (_a2 = yr.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${e}`), Bn.textContent = (_b2 = Bn.textContent) == null ? void 0 : _b2.replace("font-family: KHTeka", `font-family: ${e}`), En.textContent = (_c2 = En.textContent) == null ? void 0 : _c2.replace("font-family: KHTeka", `font-family: ${e}`));
    }
    if (ar) {
      const e = (En == null ? void 0 : En.media) === "enabled" ? "light" : "dark";
      Na(t, e);
    }
  }
  function oi(t) {
    const e = !!((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]));
    return {
      core: Ls`
      ${e ? Ls`` : Ls`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${yn(Jn["KHTeka-400-woff2"])}) format('woff2'),
                url(${yn(Jn["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${yn(Jn["KHTeka-300-woff2"])}) format('woff2'),
                url(${yn(Jn["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${yn(Jn["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${yn(Jn["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${yn(Jn["KHTeka-400-woff2"])}) format('woff2'),
                url(${yn(Jn["KHTeka-400-woff"])}) format('woff');
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
      dark: Ls`
      :root {
      }
    `,
      light: Ls`
      :root {
      }
    `
    };
  }
  let Xn, Gx, Yx, en, Iw, Zx, Jx;
  s3 = Ls`
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
  r3 = Ls`
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
  Xn = {
    EIP155: F.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH"
  };
  Gx = {
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
      "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700",
      "-239": "20f673c0-095e-49b2-07cf-eb5049dcf600",
      "-3": "20f673c0-095e-49b2-07cf-eb5049dcf600"
    }
  };
  ed = {
    getCaipTokens(t) {
      if (!t) return;
      const e = {};
      return Object.entries(t).forEach(([n, s]) => {
        e[`${Xn.EIP155}:${n}`] = s;
      }), e;
    },
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    },
    getActiveNamespaceConnectedToAuth() {
      const t = b.state.activeChain;
      return F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e) => V.getConnectorId(e) === F.CONNECTOR_ID.AUTH && e === t);
    },
    withRetry({ conditionFn: t, intervalMs: e, maxRetries: n }) {
      let s = 0;
      return new Promise((r) => {
        async function i() {
          return s += 1, await t() ? r(true) : s >= n ? r(false) : (setTimeout(i, e), null);
        }
        i();
      });
    },
    userChainIdToChainNamespace(t) {
      if (typeof t == "number") return F.CHAIN.EVM;
      const [e] = t.split(":");
      return e;
    },
    getOtherAuthNamespaces(t) {
      return t ? F.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((s) => s !== t) : [];
    },
    getConnectorStorageInfo(t, e) {
      const s = H.getConnections()[e] ?? [];
      return {
        hasDisconnected: H.isConnectorDisconnected(t, e),
        hasConnected: s.some((r) => ed.isLowerCaseMatch(r.connectorId, t))
      };
    }
  };
  Yx = new AbortController();
  en = {
    EmbeddedWalletAbortController: Yx,
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
        debugMessage: () => `The origin ${ki() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${j.state.projectId}]`
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
  Iw = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
      USDC: {
        8453: gx.asset,
        84532: mx.asset
      }
    },
    getTokenSymbolByAddress(t) {
      if (!t) return;
      const [e] = Object.entries(Iw.TOKEN_ADDRESSES_BY_SYMBOL).find(([n, s]) => Object.values(s).includes(t)) ?? [];
      return e;
    }
  };
  Zx = {
    createLogger(t, e = "error") {
      const n = Jf({
        level: e
      }), { logger: s } = Sa({
        opts: n
      });
      return s.error = (...r) => {
        for (const i of r) if (i instanceof Error) {
          t(i, ...r);
          return;
        }
        t(void 0, ...r);
      }, s;
    }
  };
  Jx = "rpc.walletconnect.org";
  function zf(t, e) {
    const n = new URL("https://rpc.walletconnect.org/v1/");
    return n.searchParams.set("chainId", t), n.searchParams.set("projectId", e), n.toString();
  }
  let Jc;
  Jc = [
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
  Kr = {
    extendRpcUrlWithProjectId(t, e) {
      let n = false;
      try {
        n = new URL(t).host === Jx;
      } catch {
        n = false;
      }
      if (n) {
        const s = new URL(t);
        return s.searchParams.has("projectId") || s.searchParams.set("projectId", e), s.toString();
      }
      return t;
    },
    isCaipNetwork(t) {
      return "chainNamespace" in t && "caipNetworkId" in t;
    },
    getChainNamespace(t) {
      return this.isCaipNetwork(t) ? t.chainNamespace : F.CHAIN.EVM;
    },
    getCaipNetworkId(t) {
      return this.isCaipNetwork(t) ? t.caipNetworkId : `${F.CHAIN.EVM}:${t.id}`;
    },
    getDefaultRpcUrl(t, e, n) {
      var _a2, _b2, _c2;
      const s = (_c2 = (_b2 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0];
      return Jc.includes(e) ? zf(e, n) : s || "";
    },
    extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: n, customRpcUrls: s }) {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2;
      const r = this.getChainNamespace(t), i = this.getCaipNetworkId(t), o = (_c2 = (_b2 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0], a = this.getDefaultRpcUrl(t, i, n), c = ((_f2 = (_e2 = (_d3 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _d3.chainDefault) == null ? void 0 : _e2.http) == null ? void 0 : _f2[0]) || o, l = ((_g2 = s == null ? void 0 : s[i]) == null ? void 0 : _g2.map((h) => h.url)) || [], d = [
        ...l,
        ...a ? [
          a
        ] : []
      ], u = [
        ...l
      ];
      return c && !u.includes(c) && u.push(c), {
        ...t,
        chainNamespace: r,
        caipNetworkId: i,
        assets: {
          imageId: Gx.NetworkImageIds[t.id],
          imageUrl: e == null ? void 0 : e[t.id]
        },
        rpcUrls: {
          ...t.rpcUrls,
          default: {
            http: d
          },
          chainDefault: {
            http: u
          }
        }
      };
    },
    extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: n, customRpcUrls: s }) {
      return t.map((r) => Kr.extendCaipNetwork(r, {
        customNetworkImageUrls: e,
        customRpcUrls: s,
        projectId: n
      }));
    },
    getViemTransport(t, e, n) {
      var _a2, _b2, _c2;
      const s = [];
      return n == null ? void 0 : n.forEach((r) => {
        s.push(Co(r.url, r.config));
      }), Jc.includes(t.caipNetworkId) && s.push(Co(zf(t.caipNetworkId, e), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2.forEach((r) => {
        s.push(Co(r));
      }), Yd(s);
    },
    extendWagmiTransports(t, e, n) {
      if (Jc.includes(t.caipNetworkId)) {
        const s = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
        return Yd([
          n,
          Co(s)
        ]);
      }
      return n;
    },
    getUnsupportedNetwork(t) {
      return {
        id: t.split(":")[1],
        caipNetworkId: t,
        name: F.UNSUPPORTED_NETWORK_NAME,
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
      const e = H.getActiveCaipNetworkId(), n = b.getAllRequestedCaipNetworks(), s = Array.from(((_a2 = b.state.chains) == null ? void 0 : _a2.keys()) || []), r = e == null ? void 0 : e.split(":")[0], i = r ? s.includes(r) : false, o = n == null ? void 0 : n.find((c) => c.caipNetworkId === e);
      return i && !o && e ? this.getUnsupportedNetwork(e) : o || t || (n == null ? void 0 : n[0]);
    }
  };
  function Xx(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), u = d.charCodeAt(0);
      if (e[u] !== 255) throw new TypeError(d + " is ambiguous");
      e[u] = l;
    }
    const n = t.length, s = t.charAt(0), r = Math.log(n) / Math.log(256), i = Math.log(256) / Math.log(n);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, u = 0, h = 0;
      const f = l.length;
      for (; h !== f && l[h] === 0; ) h++, d++;
      const g = (f - h) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; h !== f; ) {
        let O = l[h], A = 0;
        for (let N = g - 1; (O !== 0 || A < u) && N !== -1; N--, A++) O += 256 * p[N] >>> 0, p[N] = O % n >>> 0, O = O / n >>> 0;
        if (O !== 0) throw new Error("Non-zero carry");
        u = A, h++;
      }
      let m = g - u;
      for (; m !== g && p[m] === 0; ) m++;
      let T = s.repeat(d);
      for (; m < g; ++m) T += t.charAt(p[m]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === s; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const O = l.charCodeAt(d);
        if (O > 255) return;
        let A = e[O];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < h) && P !== -1; P--, N++) A += n * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        h = N, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(u + (f - p));
      let T = u;
      for (; p !== f; ) m[T++] = g[p++];
      return m;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + n + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var Qx = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const ek = Xx(Qx), Ho = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603
  };
  class tk extends ux {
    async setUniversalProvider(e) {
      if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
      return this.addConnector(new hx({
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
    async writeSolanaTransaction() {
      return Promise.resolve({
        hash: ""
      });
    }
    async getAccounts({ namespace: e }) {
      var _a2, _b2, _c2, _d3, _e2;
      const s = ((_e2 = (_d3 = (_c2 = (_b2 = (_a2 = this.provider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c2[e]) == null ? void 0 : _d3.accounts) == null ? void 0 : _e2.map((r) => {
        const [, , i] = r.split(":");
        return i;
      }).filter((r, i, o) => o.indexOf(r) === i)) || [];
      return Promise.resolve({
        accounts: s.map((r) => ee.createAccount(e, r, e === "bip122" ? "payment" : "eoa"))
      });
    }
    async syncConnectors() {
      return Promise.resolve();
    }
    async getBalance(e) {
      var _a2, _b2, _c2, _d3, _e2;
      if (!(e.caipNetwork && ge.BALANCE_SUPPORTED_CHAINS.includes((_a2 = e.caipNetwork) == null ? void 0 : _a2.chainNamespace)) || ((_b2 = e.caipNetwork) == null ? void 0 : _b2.testnet)) return {
        balance: "0.00",
        symbol: ((_c2 = e.caipNetwork) == null ? void 0 : _c2.nativeCurrency.symbol) || ""
      };
      const s = b.getAccountData();
      if ((s == null ? void 0 : s.balanceLoading) && e.chainId === ((_d3 = b.state.activeCaipNetwork) == null ? void 0 : _d3.id)) return {
        balance: (s == null ? void 0 : s.balance) || "0.00",
        symbol: (s == null ? void 0 : s.balanceSymbol) || ""
      };
      const i = (await b.fetchTokenBalance()).find((o) => {
        var _a3, _b3;
        return o.chainId === `${(_a3 = e.caipNetwork) == null ? void 0 : _a3.chainNamespace}:${e.chainId}` && o.symbol === ((_b3 = e.caipNetwork) == null ? void 0 : _b3.nativeCurrency.symbol);
      });
      return {
        balance: (i == null ? void 0 : i.quantity.numeric) || "0.00",
        symbol: (i == null ? void 0 : i.symbol) || ((_e2 = e.caipNetwork) == null ? void 0 : _e2.nativeCurrency.symbol) || ""
      };
    }
    async signMessage(e) {
      var _a2, _b2, _c2;
      const { provider: n, message: s, address: r } = e;
      if (!n) throw new Error("UniversalAdapter:signMessage - provider is undefined");
      let i = "";
      return ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) === F.CHAIN.SOLANA ? i = (await n.request({
        method: "solana_signMessage",
        params: {
          message: ek.encode(new TextEncoder().encode(s)),
          pubkey: r
        }
      }, (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId)).signature : i = await n.request({
        method: "personal_sign",
        params: [
          s,
          r
        ]
      }, (_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId), {
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
      var _a2, _b2, _c2, _d3, _e2, _f2;
      const { caipNetwork: n } = e, s = this.getWalletConnectConnector();
      if (n.chainNamespace === F.CHAIN.EVM) try {
        await ((_a2 = s.provider) == null ? void 0 : _a2.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: Gd(n.id)
            }
          ]
        }));
      } catch (r) {
        if (r.code === Ho.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === Ho.ERROR_INVALID_CHAIN_ID || r.code === Ho.ERROR_CODE_DEFAULT || ((_c2 = (_b2 = r == null ? void 0 : r.data) == null ? void 0 : _b2.originalError) == null ? void 0 : _c2.code) === Ho.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f2 = s.provider) == null ? void 0 : _f2.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: Gd(n.id),
                rpcUrls: [
                  (_d3 = n == null ? void 0 : n.rpcUrls.chainDefault) == null ? void 0 : _d3.http
                ],
                chainName: n.name,
                nativeCurrency: n.nativeCurrency,
                blockExplorerUrls: [
                  (_e2 = n.blockExplorers) == null ? void 0 : _e2.default.url
                ]
              }
            ]
          }));
        } catch {
          throw new Error("Chain is not supported");
        }
      }
      s.provider.setDefaultChain(n.caipNetworkId);
    }
    getWalletConnectProvider() {
      var _a2;
      return (_a2 = this.connectors.find((s) => s.type === "WALLET_CONNECT")) == null ? void 0 : _a2.provider;
    }
  }
  const nk = [
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
    "reownAuthentication",
    "headless"
  ], Vo = {
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
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.email : !!t
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
        return t.isEnabled && e.length > 0 ? e.filter((n) => n !== "email") : false;
      },
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? ge.DEFAULT_REMOTE_FEATURES.socials : false : t
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
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? ge.DEFAULT_REMOTE_FEATURES.swaps : false : t
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
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? ge.DEFAULT_REMOTE_FEATURES.onramp : false : t
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: false,
      isLegacy: true,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.activity : !!t
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
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
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => typeof t > "u" ? ge.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!t
    },
    headless: {
      apiFeatureName: "headless",
      localFeatureName: "headless",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.headless
    }
  }, sk = {
    localSettingsOverridden: /* @__PURE__ */ new Set(),
    getApiConfig(t, e) {
      return e == null ? void 0 : e.find((n) => n.id === t);
    },
    addWarning(t, e) {
      if (t !== void 0) {
        const n = Vo[e], s = n.isLegacy ? `"features.${n.localFeatureName}" (now "${e}")` : `"features.${e}"`;
        this.localSettingsOverridden.add(s);
      }
    },
    processFeature(t, e, n, s, r) {
      const i = Vo[t], o = e[i.localFeatureName];
      if (r && !i.isAvailableOnBasic) return false;
      if (s) {
        const a = this.getApiConfig(i.apiFeatureName, n);
        return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : (a == null ? void 0 : a.config) ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : false;
      }
      return this.processFallbackFeature(t, o);
    },
    processApiFeature(t, e) {
      return Vo[t].processApi(e);
    },
    processFallbackFeature(t, e) {
      return Vo[t].processFallback(e);
    },
    async fetchRemoteFeatures(t) {
      const e = t.basic ?? false, n = t.features || {};
      this.localSettingsOverridden.clear();
      let s = null, r = false;
      try {
        s = await se.fetchProjectConfig(), r = s != null;
      } catch (o) {
        console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
      }
      const i = r && !e ? ge.DEFAULT_REMOTE_FEATURES : ge.DEFAULT_REMOTE_FEATURES_DISABLED;
      try {
        for (const o of nk) {
          const a = this.processFeature(o, n, s, r, e);
          Object.assign(i, {
            [o]: a
          });
        }
      } catch (o) {
        return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), ge.DEFAULT_REMOTE_FEATURES;
      }
      if (r && this.localSettingsOverridden.size > 0) {
        const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
        jt.open({
          debugMessage: en.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
        }, "warning");
      }
      return i;
    }
  };
  class rk {
    constructor(e) {
      this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (n, s) => {
        var _a2, _b2, _c2;
        if (n) {
          const r = (_a2 = b.getCaipNetworks(n)) == null ? void 0 : _a2.find((a) => a.id === s);
          if (r) return r;
          const i = (_b2 = b.getNetworkData(n)) == null ? void 0 : _b2.caipNetwork;
          return i || ((_c2 = b.getRequestedCaipNetworks(n).filter((a) => a.chainNamespace === n)) == null ? void 0 : _c2[0]);
        }
        return b.state.activeCaipNetwork || this.defaultCaipNetwork;
      }, this.getCaipNetworkId = () => {
        const n = this.getCaipNetwork();
        if (n) return n.id;
      }, this.getCaipNetworks = (n) => b.getCaipNetworks(n), this.getActiveChainNamespace = () => b.state.activeChain, this.setRequestedCaipNetworks = (n, s) => {
        b.setRequestedCaipNetworks(n, s);
      }, this.getApprovedCaipNetworkIds = () => b.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (n) => {
        var _a2, _b2;
        return b.state.activeChain === n || !n ? b.state.activeCaipAddress : (_b2 = (_a2 = b.state.chains.get(n)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress;
      }, this.setClientId = (n) => {
        le.setClientId(n);
      }, this.getProvider = (n) => $e.getProvider(n), this.getProviderType = (n) => $e.getProviderId(n), this.getPreferredAccountType = (n) => on(n), this.setCaipAddress = (n, s, r = false) => {
        b.setAccountProp("caipAddress", n, s, r), b.setAccountProp("address", ee.getPlainAddress(n), s, r);
      }, this.setBalance = (n, s, r) => {
        b.setAccountProp("balance", n, r), b.setAccountProp("balanceSymbol", s, r);
      }, this.setProfileName = (n, s) => {
        b.setAccountProp("profileName", n, s);
      }, this.setProfileImage = (n, s) => {
        b.setAccountProp("profileImage", n, s);
      }, this.setUser = (n, s) => {
        b.setAccountProp("user", n, s);
      }, this.resetAccount = (n) => {
        b.resetAccount(n);
      }, this.setCaipNetwork = (n) => {
        b.setActiveCaipNetwork(n);
      }, this.setCaipNetworkOfNamespace = (n, s) => {
        b.setChainNetworkData(s, {
          caipNetwork: n
        });
      }, this.setStatus = (n, s) => {
        b.setAccountProp("status", n, s), V.isConnected() ? H.setConnectionStatus("connected") : H.setConnectionStatus("disconnected");
      }, this.getAddressByChainNamespace = (n) => {
        var _a2;
        return (_a2 = b.getAccountData(n)) == null ? void 0 : _a2.address;
      }, this.setConnectors = (n) => {
        const s = [
          ...V.state.allConnectors,
          ...n
        ];
        V.setConnectors(s);
      }, this.setConnections = (n, s) => {
        H.setConnections(n, s), G.setConnections(n, s);
      }, this.fetchIdentity = (n) => le.fetchIdentity(n), this.getReownName = (n) => Vi.getNamesForAddress(n), this.getConnectors = () => V.getConnectors(), this.getConnectorImage = (n) => ra.getConnectorImage(n), this.getConnections = (n) => this.remoteFeatures.multiWallet ? ia.getConnectionsData(n).connections : (jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (n) => this.remoteFeatures.multiWallet ? ia.getConnectionsData(n).recentConnections : (jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (n) => {
        if (!this.remoteFeatures.multiWallet) {
          jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        await G.switchConnection(n);
      }, this.deleteConnection = (n) => {
        if (!this.remoteFeatures.multiWallet) {
          jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        H.deleteAddressFromConnection(n), G.syncStorageConnections();
      }, this.setConnectedWalletInfo = (n, s) => {
        const r = $e.getProviderId(s), i = n ? {
          ...n,
          type: r
        } : void 0;
        b.setAccountProp("connectedWalletInfo", i, s);
      }, this.getIsConnectedState = () => !!b.state.activeCaipAddress, this.addAddressLabel = (n, s, r) => {
        var _a2;
        const i = ((_a2 = b.getAccountData(r)) == null ? void 0 : _a2.addressLabels) || {};
        b.setAccountProp("addressLabels", {
          ...i,
          [n]: s
        }, r);
      }, this.removeAddressLabel = (n, s) => {
        var _a2;
        const r = ((_a2 = b.getAccountData(s)) == null ? void 0 : _a2.addressLabels) || {};
        b.setAccountProp("addressLabels", {
          ...r,
          [n]: void 0
        }, s);
      }, this.getAddress = (n) => {
        var _a2;
        const s = n || b.state.activeChain;
        return (_a2 = b.getAccountData(s)) == null ? void 0 : _a2.address;
      }, this.resetNetwork = (n) => {
        b.resetNetwork(n);
      }, this.addConnector = (n) => {
        V.addConnector(n);
      }, this.resetWcConnection = () => {
        G.resetWcConnection();
      }, this.setAddressExplorerUrl = (n, s) => {
        b.setAccountProp("addressExplorerUrl", n, s);
      }, this.setSmartAccountDeployed = (n, s) => {
        b.setAccountProp("smartAccountDeployed", n, s);
      }, this.setPreferredAccountType = (n, s) => {
        b.setAccountProp("preferredAccountType", n, s);
      }, this.setEIP6963Enabled = (n) => {
        j.setEIP6963Enabled(n);
      }, this.handleUnsafeRPCRequest = () => {
        if (this.isOpen()) {
          if (this.isTransactionStackEmpty()) return;
          this.redirect("ApproveTransaction");
        } else this.open({
          view: "ApproveTransaction"
        });
      }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.readyPromise = this.initialize(e);
    }
    getChainNamespacesSet(e, n) {
      const s = e == null ? void 0 : e.map((i) => i.namespace).filter((i) => !!i);
      if (s == null ? void 0 : s.length) return [
        ...new Set(s)
      ];
      const r = n == null ? void 0 : n.map((i) => i.chainNamespace);
      return [
        ...new Set(r)
      ];
    }
    async initialize(e) {
      var _a2, _b2, _c2, _d3, _e2, _f2;
      if (this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), ((_a2 = e.features) == null ? void 0 : _a2.headless) && !At.hasInjectedConnectors() && se.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false,
        fetchRecommendedWallets: true
      }), j.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !e.basic && !e.manualWCControl && (this.remoteFeatures = await sk.fetchRemoteFeatures(e)), await se.fetchUsage(), j.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && il.setOnrampProviders(this.remoteFeatures.onramp), (((_b2 = j.state.remoteFeatures) == null ? void 0 : _b2.email) || Array.isArray((_c2 = j.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = j.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0) && await this.checkAllowedOrigins(), ((_e2 = j.state.features) == null ? void 0 : _e2.reownAuthentication) || ((_f2 = j.state.remoteFeatures) == null ? void 0 : _f2.reownAuthentication)) {
        const { ReownAuthentication: n } = await ta(async () => {
          const { ReownAuthentication: r } = await import("./features-BLA0BWbh.js");
          return {
            ReownAuthentication: r
          };
        }, __vite__mapDeps([4,1,2])), s = j.state.siwx;
        s instanceof n || (s && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), j.setSIWX(new n()));
      }
    }
    async openSend(e) {
      var _a2;
      const n = e.namespace || b.state.activeChain, s = this.getCaipAddress(n), r = (_a2 = this.getCaipNetwork(n)) == null ? void 0 : _a2.id;
      if (!s) throw new Error("openSend: caipAddress not found");
      if ((r == null ? void 0 : r.toString()) !== e.chainId.toString()) {
        const i = b.getCaipNetworkById(e.chainId, n);
        if (!i) throw new Error(`openSend: caipNetwork with chainId ${e.chainId} not found`);
        await this.switchNetwork(i, {
          throwOnFailure: true
        });
      }
      try {
        const i = Iw.getTokenSymbolByAddress(e.assetAddress);
        i && await se.fetchTokenImages([
          i
        ]);
      } catch {
      }
      return await me.open({
        view: "WalletSend",
        data: {
          send: e
        }
      }), new Promise((i, o) => {
        const a = pe.subscribeKey("hash", (d) => {
          d && (l(), i({
            hash: d
          }));
        }), c = me.subscribe((d) => {
          d.open || (l(), o(new Error("Modal closed")));
        }), l = this.createCleanupHandler([
          a,
          c
        ]);
      });
    }
    toModalOptions() {
      function e(s) {
        return (s == null ? void 0 : s.view) === "Swap";
      }
      function n(s) {
        return (s == null ? void 0 : s.view) === "WalletSend";
      }
      return {
        isSwap: e,
        isSend: n
      };
    }
    async checkAllowedOrigins() {
      try {
        const e = await se.fetchAllowedOrigins();
        if (!ee.isClient()) return;
        const n = window.location.origin;
        Ws.isOriginAllowed(n, e, F.DEFAULT_ALLOWED_ANCESTORS) || jt.open(en.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (e) {
        if (!(e instanceof Error)) return;
        switch (e.message) {
          case "RATE_LIMITED":
            jt.open(en.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            const n = e.cause instanceof Error ? e.cause : e;
            jt.open({
              displayMessage: en.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
              debugMessage: en.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(n.message)
            }, "error");
            break;
          }
        }
      }
    }
    createCleanupHandler(e) {
      return () => {
        e.forEach((n) => {
          try {
            n();
          } catch {
          }
        });
      };
    }
    sendInitializeEvent(e) {
      var _a2;
      const { ...n } = e;
      delete n.adapters, delete n.universalProvider, fe.sendEvent({
        type: "track",
        event: "INITIALIZE",
        properties: {
          ...n,
          networks: e.networks.map((s) => s.id),
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
      hp.initialize(this.chainAdapters);
    }
    initializeThemeController(e) {
      e.themeMode && Wt.setThemeMode(e.themeMode), e.themeVariables && Wt.setThemeVariables(e.themeVariables);
    }
    initializeChainController(e) {
      if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
      b.initialize(e.adapters ?? [], this.caipNetworks, {
        connectionControllerClient: this.connectionControllerClient
      });
      const n = this.getDefaultNetwork();
      n && b.setActiveCaipNetwork(n);
    }
    initializeConnectionController(e) {
      G.initialize(e.adapters ?? []), G.setWcBasic(e.basic ?? false);
    }
    initializeConnectorController() {
      V.initialize(this.chainNamespaces);
    }
    initializeProjectSettings(e) {
      j.setProjectId(e.projectId), j.setSdkVersion(e.sdkVersion);
    }
    initializeOptionsController(e) {
      var _a2;
      j.setDebug(e.debug !== false), j.setEnableWalletGuide(e.enableWalletGuide !== false), j.setEnableWallets(e.enableWallets !== false), j.setEIP6963Enabled(e.enableEIP6963 !== false), j.setEnableNetworkSwitch(e.enableNetworkSwitch !== false), j.setEnableReconnect(e.enableReconnect !== false), j.setEnableMobileFullScreen(e.enableMobileFullScreen === true), j.setCoinbasePreference(e.coinbasePreference), j.setEnableAuthLogger(e.enableAuthLogger !== false), j.setCustomRpcUrls(e.customRpcUrls), j.setEnableEmbedded(e.enableEmbedded), j.setAllWallets(e.allWallets), j.setIncludeWalletIds(e.includeWalletIds), j.setExcludeWalletIds(e.excludeWalletIds), j.setFeaturedWalletIds(e.featuredWalletIds), j.setTokens(e.tokens), j.setTermsConditionsUrl(e.termsConditionsUrl), j.setPrivacyPolicyUrl(e.privacyPolicyUrl), j.setCustomWallets(e.customWallets), j.setFeatures(e.features), j.setAllowUnsupportedChain(e.allowUnsupportedChain), j.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), j.setPreferUniversalLinks(e.experimental_preferUniversalLinks), j.setDefaultAccountTypes(e.defaultAccountTypes);
      const n = this.getDefaultMetaData();
      if (!e.metadata && n && (e.metadata = n), j.setMetadata(e.metadata), j.setDisableAppend(e.disableAppend), j.setEnableEmbedded(e.enableEmbedded), j.setSIWX(e.siwx), this.features = j.state.features ?? {}, !e.projectId) {
        jt.open(en.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        return;
      }
      if (((_a2 = e.adapters) == null ? void 0 : _a2.find((r) => r.namespace === F.CHAIN.EVM)) && e.siweConfig) {
        if (e.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
        j.setSIWX(e.siweConfig.mapToSIWX());
      }
    }
    getDefaultMetaData() {
      var _a2, _b2, _c2, _d3;
      return ee.isClient() ? {
        name: ((_b2 = (_a2 = document.getElementsByTagName("title")) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.textContent) || "",
        description: ((_c2 = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c2.content) || "",
        url: window.location.origin,
        icons: [
          ((_d3 = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d3.href) || ""
        ]
      } : null;
    }
    setUnsupportedNetwork(e) {
      const n = this.getActiveChainNamespace();
      if (n) {
        const s = Kr.getUnsupportedNetwork(`${n}:${e}`);
        b.setActiveCaipNetwork(s);
      }
    }
    getDefaultNetwork() {
      return Kr.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(e, n) {
      return Kr.extendCaipNetwork(e, {
        customNetworkImageUrls: n.chainImages,
        projectId: n.projectId
      });
    }
    extendCaipNetworks(e) {
      return Kr.extendCaipNetworks(e.networks, {
        customNetworkImageUrls: e.chainImages,
        customRpcUrls: e.customRpcUrls,
        projectId: e.projectId
      });
    }
    extendDefaultCaipNetwork(e) {
      const n = e.networks.find((r) => {
        var _a2;
        return r.id === ((_a2 = e.defaultNetwork) == null ? void 0 : _a2.id);
      });
      return n ? Kr.extendCaipNetwork(n, {
        customNetworkImageUrls: e.chainImages,
        customRpcUrls: e.customRpcUrls,
        projectId: e.projectId
      }) : void 0;
    }
    async disconnectConnector(e, n) {
      var _a2, _b2;
      try {
        this.setLoading(true, e);
        let s = {
          connections: []
        };
        const r = this.getAdapter(e);
        return (((_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress) || !j.state.enableReconnect) && (r == null ? void 0 : r.disconnect) && (s = await r.disconnect({
          id: n
        })), this.setLoading(false, e), s;
      } catch (s) {
        throw this.setLoading(false, e), new Error(`Failed to disconnect chains: ${s.message}`);
      }
    }
    createClients() {
      this.connectionControllerClient = {
        connectWalletConnect: async () => {
          var _a2;
          const e = b.state.activeChain, n = this.getAdapter(e), s = (_a2 = this.getCaipNetwork(e)) == null ? void 0 : _a2.id, r = G.getConnections(e), i = this.remoteFeatures.multiWallet, o = r.length > 0;
          if (!n) throw new Error("Adapter not found");
          const a = await n.connectWalletConnect(s);
          (!o || !i) && this.close(), this.setClientId((a == null ? void 0 : a.clientId) || null), H.setConnectedNamespaces([
            ...b.state.chains.keys()
          ]), await this.syncWalletConnectAccount(), await bn.initializeIfEnabled();
        },
        connectExternal: async (e) => {
          const n = await this.onConnectExternal(e);
          return await this.connectInactiveNamespaces(e, n), n ? {
            address: n.address
          } : void 0;
        },
        reconnectExternal: async ({ id: e, info: n, type: s, provider: r }) => {
          var _a2;
          const i = b.state.activeChain, o = this.getAdapter(i);
          if (!i) throw new Error("reconnectExternal: namespace not found");
          if (!o) throw new Error("reconnectExternal: adapter not found");
          (o == null ? void 0 : o.reconnect) && (await (o == null ? void 0 : o.reconnect({
            id: e,
            info: n,
            type: s,
            provider: r,
            chainId: (_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id
          })), H.addConnectedNamespace(i), this.syncConnectedWalletInfo(i));
        },
        disconnectConnector: async (e) => {
          await this.disconnectConnector(e.namespace, e.id);
        },
        disconnect: async (e) => {
          var _a2;
          const { id: n, chainNamespace: s, initialDisconnect: r } = e || {}, i = s || b.state.activeChain, o = V.getConnectorId(i), a = n === F.CONNECTOR_ID.AUTH || o === F.CONNECTOR_ID.AUTH, c = n === F.CONNECTOR_ID.WALLET_CONNECT || o === F.CONNECTOR_ID.WALLET_CONNECT;
          try {
            const l = Array.from(b.state.chains.keys());
            let d = s ? [
              s
            ] : l;
            (c || a) && (d = l);
            const u = d.map(async (g) => {
              const p = V.getConnectorId(g), m = n || p, T = await this.disconnectConnector(g, m);
              T && (a && H.deleteConnectedSocialProvider(), T.connections.forEach((O) => {
                H.addDisconnectedConnectorId(O.connectorId, g);
              })), r && this.onDisconnectNamespace({
                chainNamespace: g,
                closeModal: false
              });
            }), h = await Promise.allSettled(u);
            pe.resetSend(), G.resetWcConnection(), ((_a2 = bn.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) && await bn.clearSessions(), V.setFilterByNamespace(void 0), G.syncStorageConnections();
            const f = h.filter((g) => g.status === "rejected");
            if (f.length > 0) throw new Error(f.map((g) => g.reason.message).join(", "));
            fe.sendEvent({
              type: "track",
              event: "DISCONNECT_SUCCESS",
              properties: {
                namespace: s || "all"
              }
            });
          } catch (l) {
            throw new Error(`Failed to disconnect chains: ${l.message}`);
          }
        },
        checkInstalled: (e) => e ? e.some((n) => {
          var _a2;
          return !!((_a2 = window.ethereum) == null ? void 0 : _a2[String(n)]);
        }) : !!window.ethereum,
        signMessage: async (e) => {
          var _a2;
          const n = b.state.activeChain, s = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("signMessage: namespace not found");
          if (!s) throw new Error("signMessage: adapter not found");
          const r = this.getAddress(n);
          if (!r) throw new Error("signMessage: address not found");
          return ((_a2 = await (s == null ? void 0 : s.signMessage({
            message: e,
            address: r,
            provider: $e.getProvider(n)
          }))) == null ? void 0 : _a2.signature) || "";
        },
        sendTransaction: async (e) => {
          var _a2;
          const n = e.chainNamespace;
          if (!n) throw new Error("sendTransaction: namespace not found");
          if (ge.SEND_SUPPORTED_NAMESPACES.includes(n)) {
            const s = this.getAdapter(n);
            if (!s) throw new Error("sendTransaction: adapter not found");
            const r = $e.getProvider(n);
            return ((_a2 = await (s == null ? void 0 : s.sendTransaction({
              ...e,
              caipNetwork: this.getCaipNetwork(),
              provider: r
            }))) == null ? void 0 : _a2.hash) || "";
          }
          return "";
        },
        estimateGas: async (e) => {
          var _a2;
          const n = e.chainNamespace;
          if (n === F.CHAIN.EVM) {
            const s = this.getAdapter(n);
            if (!s) throw new Error("estimateGas: adapter is required but got undefined");
            const r = $e.getProvider(n), i = this.getCaipNetwork();
            if (!i) throw new Error("estimateGas: caipNetwork is required but got undefined");
            return ((_a2 = await (s == null ? void 0 : s.estimateGas({
              ...e,
              provider: r,
              caipNetwork: i
            }))) == null ? void 0 : _a2.gas) || 0n;
          }
          return 0n;
        },
        getEnsAvatar: async () => {
          var _a2, _b2;
          const e = b.state.activeChain;
          if (!e) throw new Error("getEnsAvatar: namespace is required but got undefined");
          const n = this.getAddress(e);
          if (!n) throw new Error("getEnsAvatar: address not found");
          return await this.syncIdentity({
            address: n,
            chainId: Number((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id),
            chainNamespace: e
          }), ((_b2 = b.getAccountData()) == null ? void 0 : _b2.profileImage) || false;
        },
        getEnsAddress: async (e) => await Ws.resolveReownName(e),
        writeContract: async (e) => {
          var _a2;
          const n = b.state.activeChain, s = this.getAdapter(n);
          if (!n) throw new Error("writeContract: namespace is required but got undefined");
          if (!s) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = $e.getProvider(n);
          if (!r || !i) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (s == null ? void 0 : s.writeContract({
            ...e,
            caipNetwork: r,
            provider: o,
            caipAddress: i
          }))) == null ? void 0 : _a2.hash;
        },
        writeSolanaTransaction: async (e) => {
          var _a2;
          const n = b.state.activeChain, s = this.getAdapter(n);
          if (!n) throw new Error("writeContract: namespace is required but got undefined");
          if (!s) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = $e.getProvider(n);
          if (!r || !i) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (s == null ? void 0 : s.writeSolanaTransaction({
            ...e,
            caipNetwork: r,
            provider: o,
            caipAddress: i
          }))) == null ? void 0 : _a2.hash;
        },
        parseUnits: (e, n) => {
          const s = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("parseUnits: adapter is required but got undefined");
          return (s == null ? void 0 : s.parseUnits({
            value: e,
            decimals: n
          })) ?? 0n;
        },
        formatUnits: (e, n) => {
          const s = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("formatUnits: adapter is required but got undefined");
          return (s == null ? void 0 : s.formatUnits({
            value: e,
            decimals: n
          })) ?? "0";
        },
        getCapabilities: async (e) => {
          const n = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("getCapabilities: adapter is required but got undefined");
          return await (n == null ? void 0 : n.getCapabilities(e));
        },
        grantPermissions: async (e) => {
          const n = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("grantPermissions: adapter is required but got undefined");
          return await (n == null ? void 0 : n.grantPermissions(e));
        },
        revokePermissions: async (e) => {
          const n = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("revokePermissions: adapter is required but got undefined");
          return (n == null ? void 0 : n.revokePermissions) ? await n.revokePermissions(e) : "0x";
        },
        walletGetAssets: async (e) => {
          const n = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("walletGetAssets: adapter is required but got undefined");
          return await (n == null ? void 0 : n.walletGetAssets(e)) ?? {};
        },
        updateBalance: (e) => {
          const n = this.getAddress(e), s = this.getCaipNetwork(e);
          !s || !n || this.updateNativeBalance(n, s == null ? void 0 : s.id, e);
        }
      }, G.setClient(this.connectionControllerClient);
    }
    async onConnectExternal(e) {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h2;
      const n = b.state.activeChain, s = e.chain || n, r = this.getAdapter(s);
      let i = true;
      if (e.type === Xn.CONNECTOR_TYPE_AUTH && F.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((u) => V.getConnectorId(u) === F.CONNECTOR_ID.AUTH) && e.chain !== n && (i = false), e.chain && e.chain !== n && !e.caipNetwork) {
        const l = this.getCaipNetworks().find((d) => d.chainNamespace === e.chain);
        l && i && this.setCaipNetwork(l);
      }
      if (!s) throw new Error("connectExternal: namespace not found");
      if (!r) throw new Error("connectExternal: adapter not found");
      const o = this.getCaipNetwork(s), a = e.caipNetwork || o, c = await r.connect({
        id: e.id,
        address: e.address,
        info: e.info,
        type: e.type,
        provider: e.provider,
        socialUri: e.socialUri,
        chainId: ((_a2 = e.caipNetwork) == null ? void 0 : _a2.id) || (o == null ? void 0 : o.id),
        rpcUrl: ((_e2 = (_d3 = (_c2 = (_b2 = e.caipNetwork) == null ? void 0 : _b2.rpcUrls) == null ? void 0 : _c2.default) == null ? void 0 : _d3.http) == null ? void 0 : _e2[0]) || ((_h2 = (_g2 = (_f2 = o == null ? void 0 : o.rpcUrls) == null ? void 0 : _f2.default) == null ? void 0 : _g2.http) == null ? void 0 : _h2[0])
      });
      if (c) return H.addConnectedNamespace(s), this.syncProvider({
        ...c,
        chainNamespace: s
      }), this.setStatus("connected", s), this.syncConnectedWalletInfo(s), H.removeDisconnectedConnectorId(e.id, s), {
        address: c.address,
        connectedCaipNetwork: a
      };
    }
    async connectInactiveNamespaces(e, n) {
      var _a2;
      const s = e.type === Xn.CONNECTOR_TYPE_AUTH, r = ed.getOtherAuthNamespaces((_a2 = n == null ? void 0 : n.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace), i = b.state.activeCaipNetwork, o = this.getAdapter(i == null ? void 0 : i.chainNamespace);
      s && (await Promise.all(r.map(async (a) => {
        var _a3, _b2, _c2, _d3;
        try {
          const c = $e.getProvider(a), l = this.getCaipNetwork(a);
          await ((_d3 = this.getAdapter(a)) == null ? void 0 : _d3.connect({
            ...e,
            provider: c,
            socialUri: void 0,
            chainId: l == null ? void 0 : l.id,
            rpcUrl: (_c2 = (_b2 = (_a3 = l == null ? void 0 : l.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
          })) && (H.addConnectedNamespace(a), H.removeDisconnectedConnectorId(e.id, a), this.setStatus("connected", a), this.syncConnectedWalletInfo(a));
        } catch (c) {
          jt.warn(en.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, en.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(a, c instanceof Error ? c.message : void 0), en.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      })), i && await (o == null ? void 0 : o.switchNetwork({
        caipNetwork: i
      })));
    }
    getApprovedCaipNetworksData() {
      var _a2, _b2, _c2, _d3, _e2;
      if ($e.getProviderId(b.state.activeChain) === Xn.CONNECTOR_TYPE_WALLET_CONNECT) {
        const n = (_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces;
        return {
          supportsAllNetworks: ((_e2 = (_d3 = (_c2 = this.universalProvider) == null ? void 0 : _c2.session) == null ? void 0 : _d3.peer) == null ? void 0 : _e2.metadata.name) === "MetaMask Wallet",
          approvedCaipNetworkIds: this.getChainsFromNamespaces(n)
        };
      }
      return {
        supportsAllNetworks: true,
        approvedCaipNetworkIds: []
      };
    }
    async switchCaipNetwork(e) {
      var _a2;
      const n = e.chainNamespace;
      if (this.getAddressByChainNamespace(e.chainNamespace)) {
        const r = $e.getProviderId(n);
        if (e.chainNamespace === b.state.activeChain) await ((_a2 = this.getAdapter(n)) == null ? void 0 : _a2.switchNetwork({
          caipNetwork: e
        }));
        else if (this.setCaipNetwork(e), r === Xn.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
        else {
          const i = this.getAddressByChainNamespace(n);
          i && this.syncAccount({
            address: i,
            chainId: e.id,
            chainNamespace: n
          });
        }
      } else this.setCaipNetwork(e);
    }
    getChainsFromNamespaces(e = {}) {
      return Object.values(e).flatMap((n) => {
        const s = n.chains || [], r = n.accounts.map((i) => {
          const { chainId: o, chainNamespace: a } = it.parseCaipAddress(i);
          return `${a}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...s,
          ...r
        ]));
      });
    }
    createAdapters(e) {
      return this.createClients(), this.chainNamespaces.reduce((n, s) => {
        var _a2, _b2;
        const r = e == null ? void 0 : e.find((i) => i.namespace === s);
        return r ? (r.construct({
          namespace: s,
          projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
          networks: (_b2 = this.caipNetworks) == null ? void 0 : _b2.filter(({ chainNamespace: i }) => i === s)
        }), n[s] = r) : n[s] = new tk({
          namespace: s,
          networks: this.getCaipNetworks()
        }), n;
      }, {});
    }
    async initChainAdapter(e) {
      this.onConnectors(e), this.listenAdapter(e);
      const n = this.getAdapter(e);
      if (!n) throw new Error("adapter not found");
      await n.syncConnectors(), await this.createUniversalProviderForAdapter(e);
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
      const n = this.getAdapter(e);
      if (!n) return;
      const s = H.getConnectionStatus();
      j.state.enableReconnect === false ? this.setStatus("disconnected", e) : s === "connected" ? this.setStatus("connecting", e) : s === "disconnected" ? (H.clearAddressCache(), this.setStatus(s, e)) : this.setStatus(s, e), n.on("switchNetwork", ({ address: r, chainId: i }) => {
        var _a2, _b2;
        const o = this.getCaipNetworks().find((l) => l.id.toString() === i.toString() || l.caipNetworkId.toString() === i.toString()), a = b.state.activeChain === e, c = (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address;
        if (o) {
          const l = a && r ? r : c;
          l && this.syncAccount({
            address: l,
            chainId: o.id,
            chainNamespace: e
          });
        } else this.setUnsupportedNetwork(i);
      }), n.on("disconnect", () => {
        const r = this.remoteFeatures.multiWallet, i = Array.from(G.state.connections.values()).flat();
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: !r || i.length === 0
        });
      }), n.on("connections", (r) => {
        this.setConnections(r, e);
      }), n.on("pendingTransactions", () => {
        const r = this.getAddress(e), i = b.state.activeCaipNetwork;
        !r || !(i == null ? void 0 : i.id) || this.updateNativeBalance(r, i.id, i.chainNamespace);
      }), n.on("accountChanged", ({ address: r, chainId: i, connector: o }) => {
        var _a2, _b2;
        this.handlePreviousConnectorConnection(o);
        const a = b.state.activeChain === e;
        (o == null ? void 0 : o.provider) && (this.syncProvider({
          id: o.id,
          type: o.type,
          provider: o == null ? void 0 : o.provider,
          chainNamespace: e
        }), this.syncConnectedWalletInfo(e));
        const c = (_b2 = (_a2 = b.getNetworkData(e)) == null ? void 0 : _a2.caipNetwork) == null ? void 0 : _b2.id, l = i || c;
        a && l ? this.syncAccount({
          address: r,
          chainId: l,
          chainNamespace: e
        }) : !a && l ? (this.syncAccountInfo(r, l, e), this.syncBalance({
          address: r,
          chainId: l,
          chainNamespace: e
        })) : this.syncAccountInfo(r, i, e), H.addConnectedNamespace(e);
      });
    }
    async handlePreviousConnectorConnection(e) {
      var _a2;
      const n = e == null ? void 0 : e.chain, s = e == null ? void 0 : e.id, r = V.getConnectorId(n), i = (_a2 = j.state.remoteFeatures) == null ? void 0 : _a2.multiWallet, a = n && s && r && r !== s && !i;
      try {
        a && await G.disconnect({
          id: r,
          namespace: n
        });
      } catch (c) {
        console.warn("Error disconnecting previous connector", c);
      }
    }
    async createUniversalProviderForAdapter(e) {
      var _a2, _b2, _c2;
      await this.getUniversalProvider(), this.universalProvider && await ((_c2 = (_b2 = (_a2 = this.chainAdapters) == null ? void 0 : _a2[e]) == null ? void 0 : _b2.setUniversalProvider) == null ? void 0 : _c2.call(_b2, this.universalProvider));
    }
    async syncExistingConnection() {
      await Promise.allSettled(this.chainNamespaces.map((e) => this.syncNamespaceConnection(e)));
    }
    async unSyncExistingConnection() {
      try {
        await Promise.allSettled(this.chainNamespaces.map((e) => G.disconnect({
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
      this.getCaipAddress() || H.deleteRecentWallet();
      const n = H.getRecentWallet();
      fe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: e,
        properties: {
          method: ee.isMobile() ? "mobile" : "qrcode",
          name: (n == null ? void 0 : n.name) || "Unknown",
          reconnect: true,
          view: ae.state.view,
          walletRank: n == null ? void 0 : n.order
        }
      });
    }
    async syncNamespaceConnection(e) {
      try {
        e === F.CHAIN.EVM && ee.isSafeApp() && V.setConnectorId(F.CONNECTOR_ID.SAFE, e);
        const n = V.getConnectorId(e);
        switch (this.setStatus("connecting", e), n) {
          case F.CONNECTOR_ID.WALLET_CONNECT:
            await this.reconnectWalletConnect();
            break;
          case F.CONNECTOR_ID.AUTH:
            break;
          default:
            await this.syncAdapterConnection(e);
        }
      } catch (n) {
        console.warn("AppKit couldn't sync existing connection", n), this.setStatus("disconnected", e);
      }
    }
    onDisconnectNamespace(e) {
      const { chainNamespace: n, closeModal: s } = e || {};
      b.resetAccount(n), b.resetNetwork(n), H.removeConnectedNamespace(n);
      const r = Array.from(b.state.chains.keys());
      (n ? [
        n
      ] : r).forEach((o) => H.addDisconnectedConnectorId(V.getConnectorId(o) || "", o)), V.removeConnectorId(n), $e.resetChain(n), this.setUser(null, n), this.setStatus("disconnected", n), this.setConnectedWalletInfo(null, n), s !== false && me.close();
    }
    async syncAdapterConnections() {
      await Promise.allSettled(this.chainNamespaces.map((e) => {
        const n = this.getAdapter(e), s = this.getCaipAddress(e), r = this.getCaipNetwork(e);
        return n == null ? void 0 : n.syncConnections({
          connectToFirstConnector: !s,
          caipNetwork: r
        });
      }));
    }
    async syncAdapterConnection(e) {
      var _a2, _b2, _c2, _d3, _e2;
      const n = this.getAdapter(e), s = this.getCaipNetwork(e), r = V.getConnectorId(e), o = V.getConnectors(e).find((a) => a.id === r);
      try {
        if (!n || !o) throw new Error(`Adapter or connector not found for namespace ${e}`);
        if (!(s == null ? void 0 : s.id)) throw new Error("CaipNetwork not found");
        const a = await (n == null ? void 0 : n.syncConnection({
          namespace: e,
          id: o.id,
          chainId: s.id,
          rpcUrl: (_c2 = (_b2 = (_a2 = s == null ? void 0 : s.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
        }));
        a ? (this.syncProvider({
          ...a,
          chainNamespace: e
        }), await this.syncAccount({
          ...a,
          chainNamespace: e
        }), this.setStatus("connected", e), fe.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: a.address,
          properties: {
            method: "browser",
            name: ((_d3 = o.info) == null ? void 0 : _d3.name) || o.name || "Unknown",
            reconnect: true,
            view: ae.state.view,
            walletRank: (_e2 = o == null ? void 0 : o.explorerWallet) == null ? void 0 : _e2.order
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
      var _a2, _b2;
      const e = Object.keys(((_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces) || {}), n = this.chainNamespaces.map(async (s) => {
        var _a3, _b3, _c2, _d3, _e2;
        const r = this.getAdapter(s);
        if (!r) return;
        const i = ((_d3 = (_c2 = (_b3 = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b3.namespaces) == null ? void 0 : _c2[s]) == null ? void 0 : _d3.accounts) || [], o = (_e2 = b.state.activeCaipNetwork) == null ? void 0 : _e2.id, a = i.find((l) => {
          const { chainId: d } = it.parseCaipAddress(l);
          return d === (o == null ? void 0 : o.toString());
        }) || i[0];
        if (a) {
          const l = it.validateCaipAddress(a), { chainId: d, address: u } = it.parseCaipAddress(l);
          if ($e.setProviderId(s, Xn.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && b.state.activeCaipNetwork && r.namespace !== F.CHAIN.EVM) {
            const h = r.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: b.state.activeCaipNetwork
            });
            $e.setProvider(s, h);
          } else $e.setProvider(s, this.universalProvider);
          V.setConnectorId(F.CONNECTOR_ID.WALLET_CONNECT, s), H.addConnectedNamespace(s), await this.syncAccount({
            address: u,
            chainId: d,
            chainNamespace: s
          });
        } else e.includes(s) && this.setStatus("disconnected", s);
        const c = this.getApprovedCaipNetworksData();
        this.syncConnectedWalletInfo(s), b.setApprovedCaipNetworksData(s, {
          approvedCaipNetworkIds: c.approvedCaipNetworkIds,
          supportsAllNetworks: c.supportsAllNetworks
        });
      });
      await Promise.all(n);
    }
    syncProvider({ type: e, provider: n, id: s, chainNamespace: r }) {
      $e.setProviderId(r, e), $e.setProvider(r, n), V.setConnectorId(s, r);
    }
    async syncAccount(e) {
      var _a2, _b2;
      const n = e.chainNamespace === b.state.activeChain, s = b.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: r, chainId: i, chainNamespace: o } = e, { chainId: a } = H.getActiveNetworkProps(), c = (s == null ? void 0 : s.id) || a, l = ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.name) === F.UNSUPPORTED_NETWORK_NAME, d = b.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !d) && c) {
        let u = this.getCaipNetworks().find((p) => p.id.toString() === c.toString()), h = this.getCaipNetworks().find((p) => p.chainNamespace === o);
        if (!d && !u && !h) {
          const p = this.getApprovedCaipNetworkIds() || [], m = p.find((O) => {
            var _a3;
            return ((_a3 = it.parseCaipNetworkId(O)) == null ? void 0 : _a3.chainId) === c.toString();
          }), T = p.find((O) => {
            var _a3;
            return ((_a3 = it.parseCaipNetworkId(O)) == null ? void 0 : _a3.chainNamespace) === o;
          });
          u = this.getCaipNetworks().find((O) => O.caipNetworkId === m), h = this.getCaipNetworks().find((O) => O.caipNetworkId === T || "deprecatedCaipNetworkId" in O && O.deprecatedCaipNetworkId === T);
        }
        const f = u || h;
        (f == null ? void 0 : f.chainNamespace) === b.state.activeChain ? j.state.enableNetworkSwitch && !j.state.allowUnsupportedChain && ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.name) === F.UNSUPPORTED_NETWORK_NAME ? b.showUnsupportedChainUI() : this.setCaipNetwork(f) : n || s && this.setCaipNetworkOfNamespace(s, o), this.syncConnectedWalletInfo(o);
        const g = this.getAddress(o);
        ed.isLowerCaseMatch(r, g) || this.syncAccountInfo(r, f == null ? void 0 : f.id, o), n ? await this.syncBalance({
          address: r,
          chainId: f == null ? void 0 : f.id,
          chainNamespace: o
        }) : await this.syncBalance({
          address: r,
          chainId: s == null ? void 0 : s.id,
          chainNamespace: o
        }), this.syncIdentity({
          address: r,
          chainId: i,
          chainNamespace: o
        });
      }
    }
    async syncAccountInfo(e, n, s) {
      const r = this.getCaipAddress(s), i = n || (r == null ? void 0 : r.split(":")[1]);
      if (!i) return;
      const o = `${s}:${i}:${e}`;
      this.setCaipAddress(o, s, true), await this.syncIdentity({
        address: e,
        chainId: i,
        chainNamespace: s
      });
    }
    async syncReownName(e, n) {
      try {
        const s = await this.getReownName(e);
        if (s[0]) {
          const r = s[0];
          this.setProfileName(r.name, n);
        } else this.setProfileName(null, n);
      } catch {
        this.setProfileName(null, n);
      }
    }
    syncConnectedWalletInfo(e) {
      var _a2;
      const n = V.getConnectorId(e), s = $e.getProviderId(e);
      if (s === Xn.CONNECTOR_TYPE_ANNOUNCED || s === Xn.CONNECTOR_TYPE_INJECTED) {
        if (n) {
          const i = this.getConnectors().find((o) => {
            var _a3, _b2;
            const a = o.id === n, c = ((_a3 = o.info) == null ? void 0 : _a3.rdns) === n, l = (_b2 = o.connectors) == null ? void 0 : _b2.some((d) => {
              var _a4;
              return d.id === n || ((_a4 = d.info) == null ? void 0 : _a4.rdns) === n;
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
      } else if (s === Xn.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = $e.getProvider(e);
        (r == null ? void 0 : r.session) && this.setConnectedWalletInfo({
          ...r.session.peer.metadata,
          name: r.session.peer.metadata.name,
          icon: (_a2 = r.session.peer.metadata.icons) == null ? void 0 : _a2[0]
        }, e);
      } else if (n && (n === F.CONNECTOR_ID.COINBASE_SDK || n === F.CONNECTOR_ID.COINBASE)) {
        const r = this.getConnectors().find((c) => c.id === n), i = (r == null ? void 0 : r.name) || "Coinbase Wallet", o = (r == null ? void 0 : r.imageUrl) || this.getConnectorImage(r), a = r == null ? void 0 : r.info;
        this.setConnectedWalletInfo({
          ...a,
          name: i,
          icon: o
        }, e);
      }
    }
    async syncBalance(e) {
      !tp.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((s) => {
        var _a2;
        return s.id.toString() === ((_a2 = e.chainId) == null ? void 0 : _a2.toString());
      }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
    }
    async ready() {
      await this.readyPromise;
    }
    async updateNativeBalance(e, n, s) {
      const r = this.getAdapter(s), i = b.getCaipNetworkByNamespace(s, n);
      if (r) {
        const o = await r.getBalance({
          address: e,
          chainId: n,
          caipNetwork: i,
          tokens: this.options.tokens
        });
        return this.setBalance(o.balance, o.symbol, s), o;
      }
    }
    async initializeUniversalAdapter() {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h2, _i2, _j;
      const e = Zx.createLogger((r, ...i) => {
        r && this.handleAlertError(r), console.error(...i);
      }), n = {
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        metadata: {
          name: ((_b2 = this.options) == null ? void 0 : _b2.metadata) ? (_c2 = this.options) == null ? void 0 : _c2.metadata.name : "",
          description: ((_d3 = this.options) == null ? void 0 : _d3.metadata) ? (_e2 = this.options) == null ? void 0 : _e2.metadata.description : "",
          url: ((_f2 = this.options) == null ? void 0 : _f2.metadata) ? (_g2 = this.options) == null ? void 0 : _g2.metadata.url : "",
          icons: ((_h2 = this.options) == null ? void 0 : _h2.metadata) ? (_i2 = this.options) == null ? void 0 : _i2.metadata.icons : [
            ""
          ]
        },
        logger: e
      };
      j.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await nx.init(n);
      const s = this.universalProvider.disconnect.bind(this.universalProvider);
      this.universalProvider.disconnect = async () => {
        try {
          return await s();
        } catch (r) {
          if (r instanceof Error && r.message.includes("Missing or invalid. Record was recently deleted")) return;
          throw r;
        }
      }, j.state.enableReconnect === false && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
    }
    listenWalletConnect() {
      this.universalProvider && this.chainNamespaces.forEach((e) => {
        Ws.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace: e,
          onDisplayUri: (n) => {
            G.setUri(n);
          },
          onConnect: (n) => {
            const { address: s } = ee.getAccount(n[0]);
            for (const r of this.chainNamespaces) H.removeDisconnectedConnectorId(F.CONNECTOR_ID.WALLET_CONNECT, r);
            G.finalizeWcConnection(s);
          },
          onDisconnect: () => {
            b.state.noAdapters && this.resetAccount(e), G.resetWcConnection();
          },
          onChainChanged: (n) => {
            const s = b.state.activeChain, r = s && V.state.activeConnectorIds[s] === F.CONNECTOR_ID.WALLET_CONNECT;
            if (s === e && (b.state.noAdapters || r)) {
              const i = this.getCaipNetworks().find((a) => a.id.toString() === n.toString() || a.caipNetworkId.toString() === n.toString()), o = this.getCaipNetwork();
              if (!i) {
                this.setUnsupportedNetwork(n);
                return;
              }
              (o == null ? void 0 : o.id.toString()) !== (i == null ? void 0 : i.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (i == null ? void 0 : i.chainNamespace) && this.setCaipNetwork(i);
            }
          },
          onAccountsChanged: (n) => {
            const s = b.state.activeChain, r = s && V.state.activeConnectorIds[s] === F.CONNECTOR_ID.WALLET_CONNECT;
            if (s === e && (b.state.noAdapters || r)) {
              const i = n == null ? void 0 : n[0];
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
      return !this.universalProviderInitPromise && ee.isClient() && ((_a2 = this.options) == null ? void 0 : _a2.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
      if (!this.universalProvider) try {
        await this.createUniversalProvider();
      } catch (e) {
        fe.sendEvent({
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
      const e = b.getAllApprovedCaipNetworkIds(), n = b.getAllRequestedCaipNetworks();
      return ee.sortRequestedNetworks(e, n).filter((r) => b.isCaipNetworkDisabled(r));
    }
    handleAlertError(e) {
      const n = Object.entries(en.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [s, r] = n ?? [], { message: i, alertErrorKey: o } = r ?? {};
      if (s && i && !this.reportedAlertErrors[s]) {
        const a = en.ALERT_ERRORS[o];
        a && (jt.open(a, "error"), this.reportedAlertErrors[s] = true);
      }
    }
    getAdapter(e) {
      var _a2;
      if (e) return (_a2 = this.chainAdapters) == null ? void 0 : _a2[e];
    }
    createAdapter(e) {
      var _a2, _b2;
      if (!e) return;
      const n = e.namespace;
      if (!n) return;
      this.createClients();
      const s = e;
      s.namespace = n, s.construct({
        namespace: n,
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        networks: (_b2 = this.caipNetworks) == null ? void 0 : _b2.filter(({ chainNamespace: r }) => r === n)
      }), this.chainNamespaces.includes(n) || this.chainNamespaces.push(n), this.chainAdapters && (this.chainAdapters[n] = s);
    }
    async open(e) {
      await this.injectModalUi(), (e == null ? void 0 : e.uri) && G.setUri(e.uri);
      const { isSwap: n, isSend: s } = this.toModalOptions();
      return n(e) ? me.open({
        ...e,
        data: {
          swap: e.arguments
        }
      }) : s(e) && e.arguments ? this.openSend(e.arguments) : me.open(e);
    }
    async close() {
      await this.injectModalUi(), me.close();
    }
    setLoading(e, n) {
      me.setLoading(e, n);
    }
    async disconnect(e) {
      await G.disconnect({
        namespace: e
      });
    }
    getSIWX() {
      return j.state.siwx;
    }
    getError() {
      return "";
    }
    getChainId() {
      var _a2;
      return (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.id;
    }
    async switchNetwork(e, { throwOnFailure: n = false } = {}) {
      const s = this.getCaipNetworks().find((r) => r.id === e.id);
      if (!s) {
        jt.open(en.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await b.switchActiveNetwork(s, {
        throwOnFailure: n
      });
    }
    getWalletProvider() {
      return b.state.activeChain ? $e.state.providers[b.state.activeChain] : null;
    }
    getWalletProviderType() {
      return $e.getProviderId(b.state.activeChain);
    }
    subscribeProviders(e) {
      return $e.subscribeProviders(e);
    }
    getThemeMode() {
      return Wt.state.themeMode;
    }
    getThemeVariables() {
      return Wt.state.themeVariables;
    }
    setThemeMode(e) {
      Wt.setThemeMode(e), Ql(Wt.state.themeMode);
    }
    setTermsConditionsUrl(e) {
      j.setTermsConditionsUrl(e);
    }
    setPrivacyPolicyUrl(e) {
      j.setPrivacyPolicyUrl(e);
    }
    setThemeVariables(e) {
      Wt.setThemeVariables(e), zx(Wt.state.themeVariables);
    }
    subscribeTheme(e) {
      return Wt.subscribe(e);
    }
    subscribeConnections(e) {
      return this.remoteFeatures.multiWallet ? G.subscribe(e) : (jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
      });
    }
    getWalletInfo(e) {
      var _a2, _b2, _c2;
      return e ? (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.connectedWalletInfo : (_c2 = b.getAccountData()) == null ? void 0 : _c2.connectedWalletInfo;
    }
    getAccount(e) {
      const n = e || b.state.activeChain, s = V.getAuthConnector(n), r = b.getAccountData(n), i = H.getConnectedConnectorId(b.state.activeChain), o = G.getConnections(n);
      if (!n) throw new Error("AppKit:getAccount - namespace is required");
      const a = o.flatMap((c) => c.accounts.map(({ address: l, type: d, publicKey: u }) => ee.createAccount(n, l, d || "eoa", u)));
      if (r) return {
        allAccounts: a,
        caipAddress: r.caipAddress,
        address: ee.getPlainAddress(r.caipAddress),
        isConnected: !!r.caipAddress,
        status: r.status,
        embeddedWalletInfo: s && i === F.CONNECTOR_ID.AUTH ? {
          user: r.user ? {
            ...r.user,
            username: H.getConnectedSocialUsername()
          } : void 0,
          authProvider: r.socialProvider || "email",
          accountType: on(n),
          isSmartAccountDeployed: !!r.smartAccountDeployed
        } : void 0
      };
    }
    subscribeAccount(e, n) {
      const s = [], r = () => {
        const o = this.getAccount(n);
        o && e(o);
      };
      if (n) {
        const o = b.subscribeChainProp("accountState", r, n);
        s.push(o);
      } else {
        const o = b.subscribe(r);
        s.push(o);
      }
      const i = V.subscribe(r);
      return s.push(i), () => {
        s.forEach((o) => o());
      };
    }
    subscribeNetwork(e) {
      return b.subscribe(({ activeCaipNetwork: n }) => {
        e({
          caipNetwork: n,
          chainId: n == null ? void 0 : n.id,
          caipNetworkId: n == null ? void 0 : n.caipNetworkId
        });
      });
    }
    subscribeWalletInfo(e, n) {
      return n ? b.subscribeChainProp("accountState", (s) => e(s == null ? void 0 : s.connectedWalletInfo), n) : b.subscribeChainProp("accountState", (s) => e(s == null ? void 0 : s.connectedWalletInfo));
    }
    subscribeShouldUpdateToAddress(e) {
      return b.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.shouldUpdateToAddress));
    }
    subscribeCaipNetworkChange(e) {
      return b.subscribeKey("activeCaipNetwork", e);
    }
    getState() {
      return vn.state;
    }
    getRemoteFeatures() {
      return j.state.remoteFeatures;
    }
    subscribeState(e) {
      return vn.subscribe(e);
    }
    subscribeRemoteFeatures(e) {
      return j.subscribeKey("remoteFeatures", e);
    }
    showErrorMessage(e) {
      Un.showError(e);
    }
    showSuccessMessage(e) {
      Un.showSuccess(e);
    }
    getEvent() {
      return {
        ...fe.state
      };
    }
    subscribeEvents(e) {
      return fe.subscribe(e);
    }
    replace(e) {
      ae.replace(e);
    }
    redirect(e) {
      ae.push(e);
    }
    popTransactionStack(e) {
      ae.popTransactionStack(e);
    }
    isOpen() {
      return me.state.open;
    }
    isTransactionStackEmpty() {
      return ae.state.transactionStack.length === 0;
    }
    static getInstance() {
      return this.instance;
    }
    updateFeatures(e) {
      j.setFeatures(e);
    }
    updateRemoteFeatures(e) {
      j.setRemoteFeatures(e);
    }
    updateOptions(e) {
      const s = {
        ...j.state || {},
        ...e
      };
      j.setOptions(s);
    }
    setConnectMethodsOrder(e) {
      j.setConnectMethodsOrder(e);
    }
    setWalletFeaturesOrder(e) {
      j.setWalletFeaturesOrder(e);
    }
    setCollapseWallets(e) {
      j.setCollapseWallets(e);
    }
    setSocialsOrder(e) {
      j.setSocialsOrder(e);
    }
    getConnectMethodsOrder() {
      return Fs.getConnectOrderMethod(j.state.features, V.getConnectors());
    }
    addNetwork(e, n) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      const s = this.extendCaipNetwork(n, this.options);
      this.getCaipNetworks().find((r) => r.id === s.id) || b.addNetwork(s);
    }
    removeNetwork(e, n) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      this.getCaipNetworks().find((r) => r.id === n) && b.removeNetwork(e, n);
    }
  }
  let Gf = false;
  class Nw extends rk {
    async open(e) {
      V.isConnected() || await super.open(e);
    }
    async close() {
      var _a2;
      if (await super.close(), this.options.manualWCControl) {
        const e = (_a2 = b.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a2.address;
        G.finalizeWcConnection(e);
      }
    }
    async syncIdentity(e) {
      return Promise.resolve();
    }
    async syncBalance(e) {
      return Promise.resolve();
    }
    async injectModalUi() {
      if (!Gf && ee.isClient()) {
        if (await ta(() => import("./basic-qaDUsNSc.js"), __vite__mapDeps([5,6,1,2])), await ta(() => import("./w3m-modal-Br_NU90L.js"), __vite__mapDeps([7,6,1,2])), !document.querySelector("w3m-modal")) {
          const n = document.createElement("w3m-modal");
          !j.state.disableAppend && !j.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", n);
        }
        Gf = true;
      }
    }
  }
  const ik = "1.8.17-wc-circular-dependencies-fix.0";
  function ok(t) {
    return new Nw({
      ...t,
      basic: true,
      sdkVersion: `html-core-${ik}`
    });
  }
  i3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: Nw,
    createAppKit: ok
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  hp as $,
  se as A,
  le as B,
  b as C,
  od as D,
  ui as E,
  ge as F,
  up as G,
  V as H,
  at as I,
  ot as J,
  bn as K,
  cy as L,
  me as M,
  tp as N,
  it as O,
  $e as P,
  co as Q,
  ae as R,
  ie as S,
  ed as T,
  j as U,
  ck as V,
  is as W,
  ra as X,
  rn as Y,
  Wt as Z,
  n3 as _,
  __tla,
  F as a,
  At as a0,
  Cr as a1,
  rs as a2,
  ia as a3,
  Kr as a4,
  H as a5,
  Fs as a6,
  i3 as a7,
  re as b,
  yw as c,
  ea as d,
  Qk as e,
  Yd as f,
  Io as g,
  Qe as h,
  Ls as i,
  t3 as j,
  r3 as k,
  ip as l,
  ln as m,
  Un as n,
  G as o,
  De as p,
  fe as q,
  s3 as r,
  Yw as s,
  on as t,
  Jl as u,
  Kx as v,
  e3 as w,
  ee as x,
  Gy as y,
  jt as z
};
