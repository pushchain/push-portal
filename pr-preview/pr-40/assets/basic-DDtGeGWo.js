import { x as M, o as H, A as N, O as q, i as L, e as B, a as Ke, y as u, E as F, R as P, u as U, G as Ht, V as ye, F as ge, X as Yn, v as J, z as me, T as Lt, d as Me, M as kn, Y as An, Z as Pn, m as Bn, Q as Oe, C as fe, _ as Xn, $ as Zn, P as Gt, I as Ln, a0 as Nt } from "./core-C3V21PiM.js";
import { n as d, r as T, c as O, o as j, U as ce, i as ei, t as ti, e as ni } from "./index-Dp6WSd9M.js";
import { cT as ii } from "./main-URSK6qZW.js";
var Pe = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let ve = class extends M {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = H.state.connectors, this.count = N.state.count, this.filteredCount = N.state.filteredWallets.length, this.isFetchingRecommendedWallets = N.state.isFetchingRecommendedWallets, this.unsubscribe.push(H.subscribeKey("connectors", (t) => this.connectors = t), N.subscribeKey("count", (t) => this.count = t), N.subscribeKey("filteredWallets", (t) => this.filteredCount = t.length), N.subscribeKey("isFetchingRecommendedWallets", (t) => this.isFetchingRecommendedWallets = t));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((t) => t());
  }
  render() {
    const t = this.connectors.find((c) => c.id === "walletConnect"), { allWallets: i } = q.state;
    if (!t || i === "HIDE" || i === "ONLY_MOBILE" && !L.isMobile()) return null;
    const r = N.state.featured.length, o = this.count + r, n = o < 10 ? o : Math.floor(o / 10) * 10, s = this.filteredCount > 0 ? this.filteredCount : n;
    let a = `${s}`;
    this.filteredCount > 0 ? a = `${this.filteredCount}` : s < o && (a = `${s}+`);
    const l = B.hasAnyConnection(Ke.CONNECTOR_ID.WALLET_CONNECT);
    return u`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${j(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    var _a;
    F.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }), P.push("AllWallets", { redirectView: (_a = P.state.data) == null ? void 0 : _a.redirectView });
  }
};
Pe([d()], ve.prototype, "tabIdx", void 0);
Pe([T()], ve.prototype, "connectors", void 0);
Pe([T()], ve.prototype, "count", void 0);
Pe([T()], ve.prototype, "filteredCount", void 0);
Pe([T()], ve.prototype, "isFetchingRecommendedWallets", void 0);
ve = Pe([O("w3m-all-wallets-widget")], ve);
const ri = U`
  :host {
    margin-top: ${({ spacing: e }) => e[1]};
  }
  wui-separator {
    margin: ${({ spacing: e }) => e[3]} calc(${({ spacing: e }) => e[3]} * -1)
      ${({ spacing: e }) => e[2]} calc(${({ spacing: e }) => e[3]} * -1);
    width: calc(100% + ${({ spacing: e }) => e[3]} * 2);
  }
`;
var de = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Z = class extends M {
  constructor() {
    super(), this.unsubscribe = [], this.connectors = H.state.connectors, this.recommended = N.state.recommended, this.featured = N.state.featured, this.explorerWallets = N.state.explorerWallets, this.connections = B.state.connections, this.connectorImages = Ht.state.connectorImages, this.loadingTelegram = false, this.unsubscribe.push(H.subscribeKey("connectors", (t) => this.connectors = t), B.subscribeKey("connections", (t) => this.connections = t), Ht.subscribeKey("connectorImages", (t) => this.connectorImages = t), N.subscribeKey("recommended", (t) => this.recommended = t), N.subscribeKey("featured", (t) => this.featured = t), N.subscribeKey("explorerFilteredWallets", (t) => {
      this.explorerWallets = (t == null ? void 0 : t.length) ? t : N.state.explorerWallets;
    }), N.subscribeKey("explorerWallets", (t) => {
      var _a;
      ((_a = this.explorerWallets) == null ? void 0 : _a.length) || (this.explorerWallets = t);
    })), L.isTelegram() && L.isIos() && (this.loadingTelegram = !B.state.wcUri, this.unsubscribe.push(B.subscribeKey("wcUri", (t) => this.loadingTelegram = !t)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((t) => t());
  }
  render() {
    return u`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  mapConnectorsToExplorerWallets(t, i) {
    return t.map((r) => {
      if (r.type === "MULTI_CHAIN" && r.connectors) {
        const n = r.connectors.map((c) => c.id), s = r.connectors.map((c) => c.name), a = r.connectors.map((c) => {
          var _a;
          return (_a = c.info) == null ? void 0 : _a.rdns;
        }), l = i == null ? void 0 : i.find((c) => n.includes(c.id) || s.includes(c.name) || c.rdns && (a.includes(c.rdns) || n.includes(c.rdns)));
        return r.explorerWallet = l ?? r.explorerWallet, r;
      }
      const o = i == null ? void 0 : i.find((n) => {
        var _a;
        return n.id === r.id || n.rdns === ((_a = r.info) == null ? void 0 : _a.rdns) || n.name === r.name;
      });
      return r.explorerWallet = o ?? r.explorerWallet, r;
    });
  }
  processConnectorsByType(t, i = true) {
    const r = ye.sortConnectorsByExplorerWallet([...t]);
    return i ? r.filter(ye.showConnector) : r;
  }
  connectorListTemplate() {
    const t = this.mapConnectorsToExplorerWallets(this.connectors, this.explorerWallets ?? []), i = ye.getConnectorsByType(t, this.recommended, this.featured), r = this.processConnectorsByType(i.announced.filter((h) => h.id !== "walletConnect")), o = this.processConnectorsByType(i.injected), n = this.processConnectorsByType(i.multiChain.filter((h) => h.name !== "WalletConnect"), false), s = i.custom, a = i.recent, l = this.processConnectorsByType(i.external.filter((h) => h.id !== Ke.CONNECTOR_ID.COINBASE_SDK)), c = i.recommended, f = i.featured, E = ye.getConnectorTypeOrder({ custom: s, recent: a, announced: r, injected: o, multiChain: n, recommended: c, featured: f, external: l }), y = this.connectors.find((h) => h.id === "walletConnect"), p = L.isMobile(), v = [];
    for (const h of E) switch (h) {
      case "walletConnect": {
        !p && y && v.push({ kind: "connector", subtype: "walletConnect", connector: y });
        break;
      }
      case "recent": {
        ye.getFilteredRecentWallets().forEach((g) => v.push({ kind: "wallet", subtype: "recent", wallet: g }));
        break;
      }
      case "injected": {
        n.forEach((w) => v.push({ kind: "connector", subtype: "multiChain", connector: w })), r.forEach((w) => v.push({ kind: "connector", subtype: "announced", connector: w })), o.forEach((w) => v.push({ kind: "connector", subtype: "injected", connector: w }));
        break;
      }
      case "featured": {
        f.forEach((w) => v.push({ kind: "wallet", subtype: "featured", wallet: w }));
        break;
      }
      case "custom": {
        ye.getFilteredCustomWallets(s ?? []).forEach((g) => v.push({ kind: "wallet", subtype: "custom", wallet: g }));
        break;
      }
      case "external": {
        l.forEach((w) => v.push({ kind: "connector", subtype: "external", connector: w }));
        break;
      }
      case "recommended": {
        ye.getCappedRecommendedWallets(c).forEach((g) => v.push({ kind: "wallet", subtype: "recommended", wallet: g }));
        break;
      }
      default:
        console.warn(`Unknown connector type: ${h}`);
    }
    return v.map((h, w) => h.kind === "connector" ? this.renderConnector(h, w) : this.renderWallet(h, w));
  }
  renderConnector(t, i) {
    var _a, _b;
    const r = t.connector, o = ge.getConnectorImage(r) || this.connectorImages[(r == null ? void 0 : r.imageId) ?? ""], s = (this.connections.get(r.chain) ?? []).some((E) => Yn.isLowerCaseMatch(E.connectorId, r.id));
    let a, l;
    t.subtype === "multiChain" ? (a = "multichain", l = "info") : t.subtype === "walletConnect" ? (a = "qr code", l = "accent") : t.subtype === "injected" || t.subtype === "announced" ? (a = s ? "connected" : "installed", l = s ? "info" : "success") : (a = void 0, l = void 0);
    const c = B.hasAnyConnection(Ke.CONNECTOR_ID.WALLET_CONNECT), f = t.subtype === "walletConnect" || t.subtype === "external" ? c : false;
    return u`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${j(o)}
        .installed=${true}
        name=${r.name ?? "Unknown"}
        .tagVariant=${l}
        tagLabel=${j(a)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(t)}
        tabIdx=${j(this.tabIdx)}
        ?disabled=${f}
        rdnsId=${j(((_a = r.explorerWallet) == null ? void 0 : _a.rdns) || void 0)}
        walletRank=${j((_b = r.explorerWallet) == null ? void 0 : _b.order)}
      >
      </w3m-list-wallet>
    `;
  }
  onClickConnector(t) {
    var _a;
    const i = (_a = P.state.data) == null ? void 0 : _a.redirectView;
    if (t.subtype === "walletConnect") {
      H.setActiveConnector(t.connector), L.isMobile() ? P.push("AllWallets") : P.push("ConnectingWalletConnect", { redirectView: i });
      return;
    }
    if (t.subtype === "multiChain") {
      H.setActiveConnector(t.connector), P.push("ConnectingMultiChain", { redirectView: i });
      return;
    }
    if (t.subtype === "injected") {
      H.setActiveConnector(t.connector), P.push("ConnectingExternal", { connector: t.connector, redirectView: i, wallet: t.connector.explorerWallet });
      return;
    }
    if (t.subtype === "announced") {
      if (t.connector.id === "walletConnect") {
        L.isMobile() ? P.push("AllWallets") : P.push("ConnectingWalletConnect", { redirectView: i });
        return;
      }
      P.push("ConnectingExternal", { connector: t.connector, redirectView: i, wallet: t.connector.explorerWallet });
      return;
    }
    P.push("ConnectingExternal", { connector: t.connector, redirectView: i });
  }
  renderWallet(t, i) {
    const r = t.wallet, o = ge.getWalletImage(r), s = B.hasAnyConnection(Ke.CONNECTOR_ID.WALLET_CONNECT), a = this.loadingTelegram, l = t.subtype === "recent" ? "recent" : void 0, c = t.subtype === "recent" ? "info" : void 0;
    return u`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${j(o)}
        name=${r.name ?? "Unknown"}
        @click=${() => this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${j(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${j(r.rdns || void 0)}
        walletRank=${j(r.order)}
        tagLabel=${j(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `;
  }
  onClickWallet(t) {
    var _a;
    const i = (_a = P.state.data) == null ? void 0 : _a.redirectView;
    if (t.subtype === "featured") {
      H.selectWalletConnector(t.wallet);
      return;
    }
    if (t.subtype === "recent") {
      if (this.loadingTelegram) return;
      H.selectWalletConnector(t.wallet);
      return;
    }
    if (t.subtype === "custom") {
      if (this.loadingTelegram) return;
      P.push("ConnectingWalletConnect", { wallet: t.wallet, redirectView: i });
      return;
    }
    if (this.loadingTelegram) return;
    const r = H.getConnector({ id: t.wallet.id, rdns: t.wallet.rdns });
    r ? P.push("ConnectingExternal", { connector: r, redirectView: i }) : P.push("ConnectingWalletConnect", { wallet: t.wallet, redirectView: i });
  }
};
Z.styles = ri;
de([d({ type: Number })], Z.prototype, "tabIdx", void 0);
de([T()], Z.prototype, "connectors", void 0);
de([T()], Z.prototype, "recommended", void 0);
de([T()], Z.prototype, "featured", void 0);
de([T()], Z.prototype, "explorerWallets", void 0);
de([T()], Z.prototype, "connections", void 0);
de([T()], Z.prototype, "connectorImages", void 0);
de([T()], Z.prototype, "loadingTelegram", void 0);
Z = de([O("w3m-connector-list")], Z);
const oi = U`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing: e }) => e[1]} ${({ spacing: e }) => e[2]};
    column-gap: ${({ spacing: e }) => e[1]};
    color: ${({ tokens: e }) => e.theme.textSecondary};
    border-radius: ${({ borderRadius: e }) => e[20]};
    background-color: transparent;
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens: e }) => e.theme.textPrimary};
    background-color: ${({ tokens: e }) => e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens: e }) => e.theme.textPrimary};
    }
  }
`;
var je = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
const si = { lg: "lg-regular", md: "md-regular", sm: "sm-regular" }, ai = { lg: "md", md: "sm", sm: "sm" };
let Ce = class extends M {
  constructor() {
    super(...arguments), this.icon = "mobile", this.size = "md", this.label = "", this.active = false;
  }
  render() {
    return u`
      <button data-active=${this.active}>
        ${this.icon ? u`<wui-icon size=${ai[this.size]} name=${this.icon}></wui-icon>` : ""}
        <wui-text variant=${si[this.size]}> ${this.label} </wui-text>
      </button>
    `;
  }
};
Ce.styles = [J, me, oi];
je([d()], Ce.prototype, "icon", void 0);
je([d()], Ce.prototype, "size", void 0);
je([d()], Ce.prototype, "label", void 0);
je([d({ type: Boolean })], Ce.prototype, "active", void 0);
Ce = je([O("wui-tab-item")], Ce);
const li = U`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    border-radius: ${({ borderRadius: e }) => e[32]};
    padding: ${({ spacing: e }) => e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;
var Ue = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let $e = class extends M {
  constructor() {
    super(...arguments), this.tabs = [], this.onTabChange = () => null, this.size = "md", this.activeTab = 0;
  }
  render() {
    return this.dataset.size = this.size, this.tabs.map((t, i) => {
      var _a;
      const r = i === this.activeTab;
      return u`
        <wui-tab-item
          @click=${() => this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${(_a = t.label) == null ? void 0 : _a.toLowerCase()}"
        ></wui-tab-item>
      `;
    });
  }
  onTabClick(t) {
    this.activeTab = t, this.onTabChange(t);
  }
};
$e.styles = [J, me, li];
Ue([d({ type: Array })], $e.prototype, "tabs", void 0);
Ue([d()], $e.prototype, "onTabChange", void 0);
Ue([d()], $e.prototype, "size", void 0);
Ue([T()], $e.prototype, "activeTab", void 0);
$e = Ue([O("wui-tabs")], $e);
var Dt = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let He = class extends M {
  constructor() {
    super(...arguments), this.platformTabs = [], this.unsubscribe = [], this.platforms = [], this.onSelectPlatfrom = void 0;
  }
  disconnectCallback() {
    this.unsubscribe.forEach((t) => t());
  }
  render() {
    const t = this.generateTabs();
    return u`
      <wui-flex justifyContent="center" .padding=${["0", "0", "4", "0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const t = this.platforms.map((i) => i === "browser" ? { label: "Browser", icon: "extension", platform: "browser" } : i === "mobile" ? { label: "Mobile", icon: "mobile", platform: "mobile" } : i === "qrcode" ? { label: "Mobile", icon: "mobile", platform: "qrcode" } : i === "web" ? { label: "Webapp", icon: "browser", platform: "web" } : i === "desktop" ? { label: "Desktop", icon: "desktop", platform: "desktop" } : { label: "Browser", icon: "extension", platform: "unsupported" });
    return this.platformTabs = t.map(({ platform: i }) => i), t;
  }
  onTabChange(t) {
    var _a;
    const i = this.platformTabs[t];
    i && ((_a = this.onSelectPlatfrom) == null ? void 0 : _a.call(this, i));
  }
};
Dt([d({ type: Array })], He.prototype, "platforms", void 0);
Dt([d()], He.prototype, "onSelectPlatfrom", void 0);
He = Dt([O("w3m-connecting-header")], He);
const ci = U`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${(e) => e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var Nn = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Ge = class extends M {
  constructor() {
    super(...arguments), this.radius = 36;
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const t = this.radius > 50 ? 50 : this.radius, r = 36 - t, o = 116 + r, n = 245 + r, s = 360 + r * 1.75;
    return u`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `;
  }
};
Ge.styles = [J, ci];
Nn([d({ type: Number })], Ge.prototype, "radius", void 0);
Ge = Nn([O("wui-loading-thumbnail")], Ge);
const ui = U`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[5]};
    padding-left: ${({ spacing: e }) => e[3]};
    padding-right: ${({ spacing: e }) => e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: e }) => e[6]};
  }

  wui-text {
    color: ${({ tokens: e }) => e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;
var it = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let ke = class extends M {
  constructor() {
    super(...arguments), this.disabled = false, this.label = "", this.buttonLabel = "";
  }
  render() {
    return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
ke.styles = [J, me, ui];
it([d({ type: Boolean })], ke.prototype, "disabled", void 0);
it([d()], ke.prototype, "label", void 0);
it([d()], ke.prototype, "buttonLabel", void 0);
ke = it([O("wui-cta-button")], ke);
const di = U`
  :host {
    display: block;
    padding: 0 ${({ spacing: e }) => e[5]} ${({ spacing: e }) => e[5]};
  }
`;
var On = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Qe = class extends M {
  constructor() {
    super(...arguments), this.wallet = void 0;
  }
  render() {
    if (!this.wallet) return this.style.display = "none", null;
    const { name: t, app_store: i, play_store: r, chrome_store: o, homepage: n } = this.wallet, s = L.isMobile(), a = L.isIos(), l = L.isAndroid(), c = [i, r, n, o].filter(Boolean).length > 1, f = ce.getTruncateString({ string: t, charsStart: 12, charsEnd: 0, truncate: "end" });
    return c && !s ? u`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${() => P.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      ` : !c && n ? u`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      ` : i && a ? u`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      ` : r && l ? u`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      ` : (this.style.display = "none", null);
  }
  onAppStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.app_store) && L.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.play_store) && L.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.homepage) && L.openHref(this.wallet.homepage, "_blank");
  }
};
Qe.styles = [di];
On([d({ type: Object })], Qe.prototype, "wallet", void 0);
Qe = On([O("w3m-mobile-download-links")], Qe);
const hi = U`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: e }) => e[1]} * -1);
    bottom: calc(${({ spacing: e }) => e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations: e }) => e.lg};
    transition-timing-function: ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: e }) => e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: e }) => e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;
var ee = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
class z extends M {
  constructor() {
    var _a, _b, _c, _d, _e2;
    super(), this.wallet = (_a = P.state.data) == null ? void 0 : _a.wallet, this.connector = (_b = P.state.data) == null ? void 0 : _b.connector, this.timeout = void 0, this.secondaryBtnIcon = "refresh", this.onConnect = void 0, this.onRender = void 0, this.onAutoConnect = void 0, this.isWalletConnect = true, this.unsubscribe = [], this.imageSrc = ge.getConnectorImage(this.connector) ?? ge.getWalletImage(this.wallet), this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet", this.isRetrying = false, this.uri = B.state.wcUri, this.error = B.state.wcError, this.ready = false, this.showRetry = false, this.label = void 0, this.secondaryBtnLabel = "Try again", this.secondaryLabel = "Accept connection request in the wallet", this.isLoading = false, this.isMobile = false, this.onRetry = void 0, this.unsubscribe.push(B.subscribeKey("wcUri", (t) => {
      var _a2;
      this.uri = t, this.isRetrying && this.onRetry && (this.isRetrying = false, (_a2 = this.onConnect) == null ? void 0 : _a2.call(this));
    }), B.subscribeKey("wcError", (t) => this.error = t)), (L.isTelegram() || L.isSafari()) && L.isIos() && B.state.wcUri && ((_e2 = this.onConnect) == null ? void 0 : _e2.call(this));
  }
  firstUpdated() {
    var _a;
    (_a = this.onAutoConnect) == null ? void 0 : _a.call(this), this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((t) => t()), B.setWcError(false), clearTimeout(this.timeout);
  }
  render() {
    var _a;
    (_a = this.onRender) == null ? void 0 : _a.call(this), this.onShowRetry();
    const t = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let i = "";
    return this.label ? i = this.label : (i = `Continue in ${this.name}`, this.error && (i = "Connection declined")), u`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${j(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2", "0", "0", "0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error ? "error" : "primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? u`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              ` : null}
      </wui-flex>

      ${this.isWalletConnect ? u`
              <wui-flex .padding=${["0", "5", "5", "5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `;
  }
  onShowRetry() {
    var _a, _b;
    this.error && !this.showRetry && (this.showRetry = true, (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-button")) == null ? void 0 : _b.animate([{ opacity: 0 }, { opacity: 1 }], { fill: "forwards", easing: "ease" }));
  }
  onTryAgain() {
    var _a, _b;
    B.setWcError(false), this.onRetry ? (this.isRetrying = true, (_a = this.onRetry) == null ? void 0 : _a.call(this)) : (_b = this.onConnect) == null ? void 0 : _b.call(this);
  }
  loaderTemplate() {
    const t = Lt.state.themeVariables["--w3m-border-radius-master"], i = t ? parseInt(t.replace("px", ""), 10) : 4;
    return u`<wui-loading-thumbnail radius=${i * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      this.uri && (L.copyToClopboard(this.uri), Me.showSuccess("Link copied"));
    } catch {
      Me.showError("Failed to copy");
    }
  }
}
z.styles = hi;
ee([T()], z.prototype, "isRetrying", void 0);
ee([T()], z.prototype, "uri", void 0);
ee([T()], z.prototype, "error", void 0);
ee([T()], z.prototype, "ready", void 0);
ee([T()], z.prototype, "showRetry", void 0);
ee([T()], z.prototype, "label", void 0);
ee([T()], z.prototype, "secondaryBtnLabel", void 0);
ee([T()], z.prototype, "secondaryLabel", void 0);
ee([T()], z.prototype, "isLoading", void 0);
ee([d({ type: Boolean })], z.prototype, "isMobile", void 0);
ee([d()], z.prototype, "onRetry", void 0);
var fi = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Qt = class extends z {
  constructor() {
    var _a;
    if (super(), !this.wallet) throw new Error("w3m-connecting-wc-browser: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), F.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "browser", displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index, walletRank: this.wallet.order, view: P.state.view } });
  }
  async onConnectProxy() {
    var _a, _b;
    try {
      this.error = false;
      const { connectors: t } = H.state, i = t.find((r) => {
        var _a2, _b2, _c;
        return r.type === "ANNOUNCED" && ((_a2 = r.info) == null ? void 0 : _a2.rdns) === ((_b2 = this.wallet) == null ? void 0 : _b2.rdns) || r.type === "INJECTED" || r.name === ((_c = this.wallet) == null ? void 0 : _c.name);
      });
      if (i) await B.connectExternal(i, i.chain);
      else throw new Error("w3m-connecting-wc-browser: No connector found");
      kn.close(), F.sendEvent({ type: "track", event: "CONNECT_SUCCESS", properties: { method: "browser", name: ((_a = this.wallet) == null ? void 0 : _a.name) || "Unknown", view: P.state.view, walletRank: (_b = this.wallet) == null ? void 0 : _b.order } });
    } catch (t) {
      t instanceof An && t.originalName === Pn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST ? F.sendEvent({ type: "track", event: "USER_REJECTED", properties: { message: t.message } }) : F.sendEvent({ type: "track", event: "CONNECT_ERROR", properties: { message: (t == null ? void 0 : t.message) ?? "Unknown" } }), this.error = true;
    }
  }
};
Qt = fi([O("w3m-connecting-wc-browser")], Qt);
var pi = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Jt = class extends z {
  constructor() {
    var _a;
    if (super(), !this.wallet) throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), F.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "desktop", displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index, walletRank: this.wallet.order, view: P.state.view } });
  }
  onRenderProxy() {
    var _a;
    !this.ready && this.uri && (this.ready = true, (_a = this.onConnect) == null ? void 0 : _a.call(this));
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.desktop_link) && this.uri) try {
      this.error = false;
      const { desktop_link: t, name: i } = this.wallet, { redirect: r, href: o } = L.formatNativeUrl(t, this.uri);
      B.setWcLinking({ name: i, href: o }), B.setRecentWallet(this.wallet), L.openHref(r, "_blank");
    } catch {
      this.error = true;
    }
  }
};
Jt = pi([O("w3m-connecting-wc-desktop")], Jt);
var Be = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let xe = class extends z {
  constructor() {
    var _a;
    if (super(), this.btnLabelTimeout = void 0, this.redirectDeeplink = void 0, this.redirectUniversalLink = void 0, this.target = void 0, this.preferUniversalLinks = q.state.experimental_preferUniversalLinks, this.isLoading = true, this.onConnect = () => {
      var _a2;
      if (((_a2 = this.wallet) == null ? void 0 : _a2.mobile_link) && this.uri) try {
        this.error = false;
        const { mobile_link: t, link_mode: i, name: r } = this.wallet, { redirect: o, redirectUniversalLink: n, href: s } = L.formatNativeUrl(t, this.uri, i);
        this.redirectDeeplink = o, this.redirectUniversalLink = n, this.target = L.isIframe() ? "_top" : "_self", B.setWcLinking({ name: r, href: s }), B.setRecentWallet(this.wallet), this.preferUniversalLinks && this.redirectUniversalLink ? L.openHref(this.redirectUniversalLink, this.target) : L.openHref(this.redirectDeeplink, this.target);
      } catch (t) {
        F.sendEvent({ type: "track", event: "CONNECT_PROXY_ERROR", properties: { message: t instanceof Error ? t.message : "Error parsing the deeplink", uri: this.uri, mobile_link: this.wallet.mobile_link, name: this.wallet.name } }), this.error = true;
      }
    }, !this.wallet) throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    this.secondaryBtnLabel = "Open", this.secondaryLabel = Bn.CONNECT_LABELS.MOBILE, this.secondaryBtnIcon = "externalLink", this.onHandleURI(), this.unsubscribe.push(B.subscribeKey("wcUri", () => {
      this.onHandleURI();
    })), F.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "mobile", displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index, walletRank: this.wallet.order, view: P.state.view } });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
  }
  onHandleURI() {
    var _a;
    this.isLoading = !this.uri, !this.ready && this.uri && (this.ready = true, (_a = this.onConnect) == null ? void 0 : _a.call(this));
  }
  onTryAgain() {
    var _a;
    B.setWcError(false), (_a = this.onConnect) == null ? void 0 : _a.call(this);
  }
};
Be([T()], xe.prototype, "redirectDeeplink", void 0);
Be([T()], xe.prototype, "redirectUniversalLink", void 0);
Be([T()], xe.prototype, "target", void 0);
Be([T()], xe.prototype, "preferUniversalLinks", void 0);
Be([T()], xe.prototype, "isLoading", void 0);
xe = Be([O("w3m-connecting-wc-mobile")], xe);
var We = {}, ct, Yt;
function gi() {
  return Yt || (Yt = 1, ct = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), ct;
}
var ut = {}, pe = {}, Xt;
function _e() {
  if (Xt) return pe;
  Xt = 1;
  let e;
  const t = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
  return pe.getSymbolSize = function(r) {
    if (!r) throw new Error('"version" cannot be null or undefined');
    if (r < 1 || r > 40) throw new Error('"version" should be in range from 1 to 40');
    return r * 4 + 17;
  }, pe.getSymbolTotalCodewords = function(r) {
    return t[r];
  }, pe.getBCHDigit = function(i) {
    let r = 0;
    for (; i !== 0; ) r++, i >>>= 1;
    return r;
  }, pe.setToSJISFunction = function(r) {
    if (typeof r != "function") throw new Error('"toSJISFunc" is not a valid function.');
    e = r;
  }, pe.isKanjiModeEnabled = function() {
    return typeof e < "u";
  }, pe.toSJIS = function(r) {
    return e(r);
  }, pe;
}
var dt = {}, Zt;
function Mt() {
  return Zt || (Zt = 1, (function(e) {
    e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
    function t(i) {
      if (typeof i != "string") throw new Error("Param is not a string");
      switch (i.toLowerCase()) {
        case "l":
        case "low":
          return e.L;
        case "m":
        case "medium":
          return e.M;
        case "q":
        case "quartile":
          return e.Q;
        case "h":
        case "high":
          return e.H;
        default:
          throw new Error("Unknown EC Level: " + i);
      }
    }
    e.isValid = function(r) {
      return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
    }, e.from = function(r, o) {
      if (e.isValid(r)) return r;
      try {
        return t(r);
      } catch {
        return o;
      }
    };
  })(dt)), dt;
}
var ht, en;
function mi() {
  if (en) return ht;
  en = 1;
  function e() {
    this.buffer = [], this.length = 0;
  }
  return e.prototype = { get: function(t) {
    const i = Math.floor(t / 8);
    return (this.buffer[i] >>> 7 - t % 8 & 1) === 1;
  }, put: function(t, i) {
    for (let r = 0; r < i; r++) this.putBit((t >>> i - r - 1 & 1) === 1);
  }, getLengthInBits: function() {
    return this.length;
  }, putBit: function(t) {
    const i = Math.floor(this.length / 8);
    this.buffer.length <= i && this.buffer.push(0), t && (this.buffer[i] |= 128 >>> this.length % 8), this.length++;
  } }, ht = e, ht;
}
var ft, tn;
function wi() {
  if (tn) return ft;
  tn = 1;
  function e(t) {
    if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
  }
  return e.prototype.set = function(t, i, r, o) {
    const n = t * this.size + i;
    this.data[n] = r, o && (this.reservedBit[n] = true);
  }, e.prototype.get = function(t, i) {
    return this.data[t * this.size + i];
  }, e.prototype.xor = function(t, i, r) {
    this.data[t * this.size + i] ^= r;
  }, e.prototype.isReserved = function(t, i) {
    return this.reservedBit[t * this.size + i];
  }, ft = e, ft;
}
var pt = {}, nn;
function bi() {
  return nn || (nn = 1, (function(e) {
    const t = _e().getSymbolSize;
    e.getRowColCoords = function(r) {
      if (r === 1) return [];
      const o = Math.floor(r / 7) + 2, n = t(r), s = n === 145 ? 26 : Math.ceil((n - 13) / (2 * o - 2)) * 2, a = [n - 7];
      for (let l = 1; l < o - 1; l++) a[l] = a[l - 1] - s;
      return a.push(6), a.reverse();
    }, e.getPositions = function(r) {
      const o = [], n = e.getRowColCoords(r), s = n.length;
      for (let a = 0; a < s; a++) for (let l = 0; l < s; l++) a === 0 && l === 0 || a === 0 && l === s - 1 || a === s - 1 && l === 0 || o.push([n[a], n[l]]);
      return o;
    };
  })(pt)), pt;
}
var gt = {}, rn;
function yi() {
  if (rn) return gt;
  rn = 1;
  const e = _e().getSymbolSize, t = 7;
  return gt.getPositions = function(r) {
    const o = e(r);
    return [[0, 0], [o - t, 0], [0, o - t]];
  }, gt;
}
var mt = {}, on;
function vi() {
  return on || (on = 1, (function(e) {
    e.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
    const t = { N1: 3, N2: 3, N3: 40, N4: 10 };
    e.isValid = function(o) {
      return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
    }, e.from = function(o) {
      return e.isValid(o) ? parseInt(o, 10) : void 0;
    }, e.getPenaltyN1 = function(o) {
      const n = o.size;
      let s = 0, a = 0, l = 0, c = null, f = null;
      for (let E = 0; E < n; E++) {
        a = l = 0, c = f = null;
        for (let y = 0; y < n; y++) {
          let p = o.get(E, y);
          p === c ? a++ : (a >= 5 && (s += t.N1 + (a - 5)), c = p, a = 1), p = o.get(y, E), p === f ? l++ : (l >= 5 && (s += t.N1 + (l - 5)), f = p, l = 1);
        }
        a >= 5 && (s += t.N1 + (a - 5)), l >= 5 && (s += t.N1 + (l - 5));
      }
      return s;
    }, e.getPenaltyN2 = function(o) {
      const n = o.size;
      let s = 0;
      for (let a = 0; a < n - 1; a++) for (let l = 0; l < n - 1; l++) {
        const c = o.get(a, l) + o.get(a, l + 1) + o.get(a + 1, l) + o.get(a + 1, l + 1);
        (c === 4 || c === 0) && s++;
      }
      return s * t.N2;
    }, e.getPenaltyN3 = function(o) {
      const n = o.size;
      let s = 0, a = 0, l = 0;
      for (let c = 0; c < n; c++) {
        a = l = 0;
        for (let f = 0; f < n; f++) a = a << 1 & 2047 | o.get(c, f), f >= 10 && (a === 1488 || a === 93) && s++, l = l << 1 & 2047 | o.get(f, c), f >= 10 && (l === 1488 || l === 93) && s++;
      }
      return s * t.N3;
    }, e.getPenaltyN4 = function(o) {
      let n = 0;
      const s = o.data.length;
      for (let l = 0; l < s; l++) n += o.data[l];
      return Math.abs(Math.ceil(n * 100 / s / 5) - 10) * t.N4;
    };
    function i(r, o, n) {
      switch (r) {
        case e.Patterns.PATTERN000:
          return (o + n) % 2 === 0;
        case e.Patterns.PATTERN001:
          return o % 2 === 0;
        case e.Patterns.PATTERN010:
          return n % 3 === 0;
        case e.Patterns.PATTERN011:
          return (o + n) % 3 === 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(o / 2) + Math.floor(n / 3)) % 2 === 0;
        case e.Patterns.PATTERN101:
          return o * n % 2 + o * n % 3 === 0;
        case e.Patterns.PATTERN110:
          return (o * n % 2 + o * n % 3) % 2 === 0;
        case e.Patterns.PATTERN111:
          return (o * n % 3 + (o + n) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + r);
      }
    }
    e.applyMask = function(o, n) {
      const s = n.size;
      for (let a = 0; a < s; a++) for (let l = 0; l < s; l++) n.isReserved(l, a) || n.xor(l, a, i(o, l, a));
    }, e.getBestMask = function(o, n) {
      const s = Object.keys(e.Patterns).length;
      let a = 0, l = 1 / 0;
      for (let c = 0; c < s; c++) {
        n(c), e.applyMask(c, o);
        const f = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
        e.applyMask(c, o), f < l && (l = f, a = c);
      }
      return a;
    };
  })(mt)), mt;
}
var Ve = {}, sn;
function Dn() {
  if (sn) return Ve;
  sn = 1;
  const e = Mt(), t = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
  return Ve.getBlocksCount = function(o, n) {
    switch (n) {
      case e.L:
        return t[(o - 1) * 4 + 0];
      case e.M:
        return t[(o - 1) * 4 + 1];
      case e.Q:
        return t[(o - 1) * 4 + 2];
      case e.H:
        return t[(o - 1) * 4 + 3];
      default:
        return;
    }
  }, Ve.getTotalCodewordsCount = function(o, n) {
    switch (n) {
      case e.L:
        return i[(o - 1) * 4 + 0];
      case e.M:
        return i[(o - 1) * 4 + 1];
      case e.Q:
        return i[(o - 1) * 4 + 2];
      case e.H:
        return i[(o - 1) * 4 + 3];
      default:
        return;
    }
  }, Ve;
}
var wt = {}, Ne = {}, an;
function Ci() {
  if (an) return Ne;
  an = 1;
  const e = new Uint8Array(512), t = new Uint8Array(256);
  return (function() {
    let r = 1;
    for (let o = 0; o < 255; o++) e[o] = r, t[r] = o, r <<= 1, r & 256 && (r ^= 285);
    for (let o = 255; o < 512; o++) e[o] = e[o - 255];
  })(), Ne.log = function(r) {
    if (r < 1) throw new Error("log(" + r + ")");
    return t[r];
  }, Ne.exp = function(r) {
    return e[r];
  }, Ne.mul = function(r, o) {
    return r === 0 || o === 0 ? 0 : e[t[r] + t[o]];
  }, Ne;
}
var ln;
function $i() {
  return ln || (ln = 1, (function(e) {
    const t = Ci();
    e.mul = function(r, o) {
      const n = new Uint8Array(r.length + o.length - 1);
      for (let s = 0; s < r.length; s++) for (let a = 0; a < o.length; a++) n[s + a] ^= t.mul(r[s], o[a]);
      return n;
    }, e.mod = function(r, o) {
      let n = new Uint8Array(r);
      for (; n.length - o.length >= 0; ) {
        const s = n[0];
        for (let l = 0; l < o.length; l++) n[l] ^= t.mul(o[l], s);
        let a = 0;
        for (; a < n.length && n[a] === 0; ) a++;
        n = n.slice(a);
      }
      return n;
    }, e.generateECPolynomial = function(r) {
      let o = new Uint8Array([1]);
      for (let n = 0; n < r; n++) o = e.mul(o, new Uint8Array([1, t.exp(n)]));
      return o;
    };
  })(wt)), wt;
}
var bt, cn;
function xi() {
  if (cn) return bt;
  cn = 1;
  const e = $i();
  function t(i) {
    this.genPoly = void 0, this.degree = i, this.degree && this.initialize(this.degree);
  }
  return t.prototype.initialize = function(r) {
    this.degree = r, this.genPoly = e.generateECPolynomial(this.degree);
  }, t.prototype.encode = function(r) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const o = new Uint8Array(r.length + this.degree);
    o.set(r);
    const n = e.mod(o, this.genPoly), s = this.degree - n.length;
    if (s > 0) {
      const a = new Uint8Array(this.degree);
      return a.set(n, s), a;
    }
    return n;
  }, bt = t, bt;
}
var yt = {}, vt = {}, Ct = {}, un;
function Mn() {
  return un || (un = 1, Ct.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40;
  }), Ct;
}
var te = {}, dn;
function jn() {
  if (dn) return te;
  dn = 1;
  const e = "[0-9]+", t = "[A-Z $%*+\\-./:]+";
  let i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  i = i.replace(/u/g, "\\u");
  const r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + `)(?:.|[\r
]))+`;
  te.KANJI = new RegExp(i, "g"), te.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), te.BYTE = new RegExp(r, "g"), te.NUMERIC = new RegExp(e, "g"), te.ALPHANUMERIC = new RegExp(t, "g");
  const o = new RegExp("^" + i + "$"), n = new RegExp("^" + e + "$"), s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return te.testKanji = function(l) {
    return o.test(l);
  }, te.testNumeric = function(l) {
    return n.test(l);
  }, te.testAlphanumeric = function(l) {
    return s.test(l);
  }, te;
}
var hn;
function Se() {
  return hn || (hn = 1, (function(e) {
    const t = Mn(), i = jn();
    e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, e.MIXED = { bit: -1 }, e.getCharCountIndicator = function(n, s) {
      if (!n.ccBits) throw new Error("Invalid mode: " + n);
      if (!t.isValid(s)) throw new Error("Invalid version: " + s);
      return s >= 1 && s < 10 ? n.ccBits[0] : s < 27 ? n.ccBits[1] : n.ccBits[2];
    }, e.getBestModeForData = function(n) {
      return i.testNumeric(n) ? e.NUMERIC : i.testAlphanumeric(n) ? e.ALPHANUMERIC : i.testKanji(n) ? e.KANJI : e.BYTE;
    }, e.toString = function(n) {
      if (n && n.id) return n.id;
      throw new Error("Invalid mode");
    }, e.isValid = function(n) {
      return n && n.bit && n.ccBits;
    };
    function r(o) {
      if (typeof o != "string") throw new Error("Param is not a string");
      switch (o.toLowerCase()) {
        case "numeric":
          return e.NUMERIC;
        case "alphanumeric":
          return e.ALPHANUMERIC;
        case "kanji":
          return e.KANJI;
        case "byte":
          return e.BYTE;
        default:
          throw new Error("Unknown mode: " + o);
      }
    }
    e.from = function(n, s) {
      if (e.isValid(n)) return n;
      try {
        return r(n);
      } catch {
        return s;
      }
    };
  })(vt)), vt;
}
var fn;
function Ei() {
  return fn || (fn = 1, (function(e) {
    const t = _e(), i = Dn(), r = Mt(), o = Se(), n = Mn(), s = 7973, a = t.getBCHDigit(s);
    function l(y, p, v) {
      for (let h = 1; h <= 40; h++) if (p <= e.getCapacity(h, v, y)) return h;
    }
    function c(y, p) {
      return o.getCharCountIndicator(y, p) + 4;
    }
    function f(y, p) {
      let v = 0;
      return y.forEach(function(h) {
        const w = c(h.mode, p);
        v += w + h.getBitsLength();
      }), v;
    }
    function E(y, p) {
      for (let v = 1; v <= 40; v++) if (f(y, v) <= e.getCapacity(v, p, o.MIXED)) return v;
    }
    e.from = function(p, v) {
      return n.isValid(p) ? parseInt(p, 10) : v;
    }, e.getCapacity = function(p, v, h) {
      if (!n.isValid(p)) throw new Error("Invalid QR Code version");
      typeof h > "u" && (h = o.BYTE);
      const w = t.getSymbolTotalCodewords(p), g = i.getTotalCodewordsCount(p, v), b = (w - g) * 8;
      if (h === o.MIXED) return b;
      const C = b - c(h, p);
      switch (h) {
        case o.NUMERIC:
          return Math.floor(C / 10 * 3);
        case o.ALPHANUMERIC:
          return Math.floor(C / 11 * 2);
        case o.KANJI:
          return Math.floor(C / 13);
        case o.BYTE:
        default:
          return Math.floor(C / 8);
      }
    }, e.getBestVersionForData = function(p, v) {
      let h;
      const w = r.from(v, r.M);
      if (Array.isArray(p)) {
        if (p.length > 1) return E(p, w);
        if (p.length === 0) return 1;
        h = p[0];
      } else h = p;
      return l(h.mode, h.getLength(), w);
    }, e.getEncodedBits = function(p) {
      if (!n.isValid(p) || p < 7) throw new Error("Invalid QR Code version");
      let v = p << 12;
      for (; t.getBCHDigit(v) - a >= 0; ) v ^= s << t.getBCHDigit(v) - a;
      return p << 12 | v;
    };
  })(yt)), yt;
}
var $t = {}, pn;
function Ri() {
  if (pn) return $t;
  pn = 1;
  const e = _e(), t = 1335, i = 21522, r = e.getBCHDigit(t);
  return $t.getEncodedBits = function(n, s) {
    const a = n.bit << 3 | s;
    let l = a << 10;
    for (; e.getBCHDigit(l) - r >= 0; ) l ^= t << e.getBCHDigit(l) - r;
    return (a << 10 | l) ^ i;
  }, $t;
}
var xt = {}, Et, gn;
function _i() {
  if (gn) return Et;
  gn = 1;
  const e = Se();
  function t(i) {
    this.mode = e.NUMERIC, this.data = i.toString();
  }
  return t.getBitsLength = function(r) {
    return 10 * Math.floor(r / 3) + (r % 3 ? r % 3 * 3 + 1 : 0);
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(r) {
    let o, n, s;
    for (o = 0; o + 3 <= this.data.length; o += 3) n = this.data.substr(o, 3), s = parseInt(n, 10), r.put(s, 10);
    const a = this.data.length - o;
    a > 0 && (n = this.data.substr(o), s = parseInt(n, 10), r.put(s, a * 3 + 1));
  }, Et = t, Et;
}
var Rt, mn;
function Si() {
  if (mn) return Rt;
  mn = 1;
  const e = Se(), t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function i(r) {
    this.mode = e.ALPHANUMERIC, this.data = r;
  }
  return i.getBitsLength = function(o) {
    return 11 * Math.floor(o / 2) + 6 * (o % 2);
  }, i.prototype.getLength = function() {
    return this.data.length;
  }, i.prototype.getBitsLength = function() {
    return i.getBitsLength(this.data.length);
  }, i.prototype.write = function(o) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
      let s = t.indexOf(this.data[n]) * 45;
      s += t.indexOf(this.data[n + 1]), o.put(s, 11);
    }
    this.data.length % 2 && o.put(t.indexOf(this.data[n]), 6);
  }, Rt = i, Rt;
}
var _t, wn;
function Ti() {
  return wn || (wn = 1, _t = function(t) {
    for (var i = [], r = t.length, o = 0; o < r; o++) {
      var n = t.charCodeAt(o);
      if (n >= 55296 && n <= 56319 && r > o + 1) {
        var s = t.charCodeAt(o + 1);
        s >= 56320 && s <= 57343 && (n = (n - 55296) * 1024 + s - 56320 + 65536, o += 1);
      }
      if (n < 128) {
        i.push(n);
        continue;
      }
      if (n < 2048) {
        i.push(n >> 6 | 192), i.push(n & 63 | 128);
        continue;
      }
      if (n < 55296 || n >= 57344 && n < 65536) {
        i.push(n >> 12 | 224), i.push(n >> 6 & 63 | 128), i.push(n & 63 | 128);
        continue;
      }
      if (n >= 65536 && n <= 1114111) {
        i.push(n >> 18 | 240), i.push(n >> 12 & 63 | 128), i.push(n >> 6 & 63 | 128), i.push(n & 63 | 128);
        continue;
      }
      i.push(239, 191, 189);
    }
    return new Uint8Array(i).buffer;
  }), _t;
}
var St, bn;
function Ii() {
  if (bn) return St;
  bn = 1;
  const e = Ti(), t = Se();
  function i(r) {
    this.mode = t.BYTE, typeof r == "string" && (r = e(r)), this.data = new Uint8Array(r);
  }
  return i.getBitsLength = function(o) {
    return o * 8;
  }, i.prototype.getLength = function() {
    return this.data.length;
  }, i.prototype.getBitsLength = function() {
    return i.getBitsLength(this.data.length);
  }, i.prototype.write = function(r) {
    for (let o = 0, n = this.data.length; o < n; o++) r.put(this.data[o], 8);
  }, St = i, St;
}
var Tt, yn;
function Wi() {
  if (yn) return Tt;
  yn = 1;
  const e = Se(), t = _e();
  function i(r) {
    this.mode = e.KANJI, this.data = r;
  }
  return i.getBitsLength = function(o) {
    return o * 13;
  }, i.prototype.getLength = function() {
    return this.data.length;
  }, i.prototype.getBitsLength = function() {
    return i.getBitsLength(this.data.length);
  }, i.prototype.write = function(r) {
    let o;
    for (o = 0; o < this.data.length; o++) {
      let n = t.toSJIS(this.data[o]);
      if (n >= 33088 && n <= 40956) n -= 33088;
      else if (n >= 57408 && n <= 60351) n -= 49472;
      else throw new Error("Invalid SJIS character: " + this.data[o] + `
Make sure your charset is UTF-8`);
      n = (n >>> 8 & 255) * 192 + (n & 255), r.put(n, 13);
    }
  }, Tt = i, Tt;
}
var It = { exports: {} }, vn;
function ki() {
  return vn || (vn = 1, (function(e) {
    var t = { single_source_shortest_paths: function(i, r, o) {
      var n = {}, s = {};
      s[r] = 0;
      var a = t.PriorityQueue.make();
      a.push(r, 0);
      for (var l, c, f, E, y, p, v, h, w; !a.empty(); ) {
        l = a.pop(), c = l.value, E = l.cost, y = i[c] || {};
        for (f in y) y.hasOwnProperty(f) && (p = y[f], v = E + p, h = s[f], w = typeof s[f] > "u", (w || h > v) && (s[f] = v, a.push(f, v), n[f] = c));
      }
      if (typeof o < "u" && typeof s[o] > "u") {
        var g = ["Could not find a path from ", r, " to ", o, "."].join("");
        throw new Error(g);
      }
      return n;
    }, extract_shortest_path_from_predecessor_list: function(i, r) {
      for (var o = [], n = r; n; ) o.push(n), i[n], n = i[n];
      return o.reverse(), o;
    }, find_path: function(i, r, o) {
      var n = t.single_source_shortest_paths(i, r, o);
      return t.extract_shortest_path_from_predecessor_list(n, o);
    }, PriorityQueue: { make: function(i) {
      var r = t.PriorityQueue, o = {}, n;
      i = i || {};
      for (n in r) r.hasOwnProperty(n) && (o[n] = r[n]);
      return o.queue = [], o.sorter = i.sorter || r.default_sorter, o;
    }, default_sorter: function(i, r) {
      return i.cost - r.cost;
    }, push: function(i, r) {
      var o = { value: i, cost: r };
      this.queue.push(o), this.queue.sort(this.sorter);
    }, pop: function() {
      return this.queue.shift();
    }, empty: function() {
      return this.queue.length === 0;
    } } };
    e.exports = t;
  })(It)), It.exports;
}
var Cn;
function Ai() {
  return Cn || (Cn = 1, (function(e) {
    const t = Se(), i = _i(), r = Si(), o = Ii(), n = Wi(), s = jn(), a = _e(), l = ki();
    function c(g) {
      return unescape(encodeURIComponent(g)).length;
    }
    function f(g, b, C) {
      const m = [];
      let D;
      for (; (D = g.exec(C)) !== null; ) m.push({ data: D[0], index: D.index, mode: b, length: D[0].length });
      return m;
    }
    function E(g) {
      const b = f(s.NUMERIC, t.NUMERIC, g), C = f(s.ALPHANUMERIC, t.ALPHANUMERIC, g);
      let m, D;
      return a.isKanjiModeEnabled() ? (m = f(s.BYTE, t.BYTE, g), D = f(s.KANJI, t.KANJI, g)) : (m = f(s.BYTE_KANJI, t.BYTE, g), D = []), b.concat(C, m, D).sort(function(I, S) {
        return I.index - S.index;
      }).map(function(I) {
        return { data: I.data, mode: I.mode, length: I.length };
      });
    }
    function y(g, b) {
      switch (b) {
        case t.NUMERIC:
          return i.getBitsLength(g);
        case t.ALPHANUMERIC:
          return r.getBitsLength(g);
        case t.KANJI:
          return n.getBitsLength(g);
        case t.BYTE:
          return o.getBitsLength(g);
      }
    }
    function p(g) {
      return g.reduce(function(b, C) {
        const m = b.length - 1 >= 0 ? b[b.length - 1] : null;
        return m && m.mode === C.mode ? (b[b.length - 1].data += C.data, b) : (b.push(C), b);
      }, []);
    }
    function v(g) {
      const b = [];
      for (let C = 0; C < g.length; C++) {
        const m = g[C];
        switch (m.mode) {
          case t.NUMERIC:
            b.push([m, { data: m.data, mode: t.ALPHANUMERIC, length: m.length }, { data: m.data, mode: t.BYTE, length: m.length }]);
            break;
          case t.ALPHANUMERIC:
            b.push([m, { data: m.data, mode: t.BYTE, length: m.length }]);
            break;
          case t.KANJI:
            b.push([m, { data: m.data, mode: t.BYTE, length: c(m.data) }]);
            break;
          case t.BYTE:
            b.push([{ data: m.data, mode: t.BYTE, length: c(m.data) }]);
        }
      }
      return b;
    }
    function h(g, b) {
      const C = {}, m = { start: {} };
      let D = ["start"];
      for (let x = 0; x < g.length; x++) {
        const I = g[x], S = [];
        for (let $ = 0; $ < I.length; $++) {
          const k = I[$], R = "" + x + $;
          S.push(R), C[R] = { node: k, lastCount: 0 }, m[R] = {};
          for (let W = 0; W < D.length; W++) {
            const _ = D[W];
            C[_] && C[_].node.mode === k.mode ? (m[_][R] = y(C[_].lastCount + k.length, k.mode) - y(C[_].lastCount, k.mode), C[_].lastCount += k.length) : (C[_] && (C[_].lastCount = k.length), m[_][R] = y(k.length, k.mode) + 4 + t.getCharCountIndicator(k.mode, b));
          }
        }
        D = S;
      }
      for (let x = 0; x < D.length; x++) m[D[x]].end = 0;
      return { map: m, table: C };
    }
    function w(g, b) {
      let C;
      const m = t.getBestModeForData(g);
      if (C = t.from(b, m), C !== t.BYTE && C.bit < m.bit) throw new Error('"' + g + '" cannot be encoded with mode ' + t.toString(C) + `.
 Suggested mode is: ` + t.toString(m));
      switch (C === t.KANJI && !a.isKanjiModeEnabled() && (C = t.BYTE), C) {
        case t.NUMERIC:
          return new i(g);
        case t.ALPHANUMERIC:
          return new r(g);
        case t.KANJI:
          return new n(g);
        case t.BYTE:
          return new o(g);
      }
    }
    e.fromArray = function(b) {
      return b.reduce(function(C, m) {
        return typeof m == "string" ? C.push(w(m, null)) : m.data && C.push(w(m.data, m.mode)), C;
      }, []);
    }, e.fromString = function(b, C) {
      const m = E(b, a.isKanjiModeEnabled()), D = v(m), x = h(D, C), I = l.find_path(x.map, "start", "end"), S = [];
      for (let $ = 1; $ < I.length - 1; $++) S.push(x.table[I[$]].node);
      return e.fromArray(p(S));
    }, e.rawSplit = function(b) {
      return e.fromArray(E(b, a.isKanjiModeEnabled()));
    };
  })(xt)), xt;
}
var $n;
function Pi() {
  if ($n) return ut;
  $n = 1;
  const e = _e(), t = Mt(), i = mi(), r = wi(), o = bi(), n = yi(), s = vi(), a = Dn(), l = xi(), c = Ei(), f = Ri(), E = Se(), y = Ai();
  function p(x, I) {
    const S = x.size, $ = n.getPositions(I);
    for (let k = 0; k < $.length; k++) {
      const R = $[k][0], W = $[k][1];
      for (let _ = -1; _ <= 7; _++) if (!(R + _ <= -1 || S <= R + _)) for (let A = -1; A <= 7; A++) W + A <= -1 || S <= W + A || (_ >= 0 && _ <= 6 && (A === 0 || A === 6) || A >= 0 && A <= 6 && (_ === 0 || _ === 6) || _ >= 2 && _ <= 4 && A >= 2 && A <= 4 ? x.set(R + _, W + A, true, true) : x.set(R + _, W + A, false, true));
    }
  }
  function v(x) {
    const I = x.size;
    for (let S = 8; S < I - 8; S++) {
      const $ = S % 2 === 0;
      x.set(S, 6, $, true), x.set(6, S, $, true);
    }
  }
  function h(x, I) {
    const S = o.getPositions(I);
    for (let $ = 0; $ < S.length; $++) {
      const k = S[$][0], R = S[$][1];
      for (let W = -2; W <= 2; W++) for (let _ = -2; _ <= 2; _++) W === -2 || W === 2 || _ === -2 || _ === 2 || W === 0 && _ === 0 ? x.set(k + W, R + _, true, true) : x.set(k + W, R + _, false, true);
    }
  }
  function w(x, I) {
    const S = x.size, $ = c.getEncodedBits(I);
    let k, R, W;
    for (let _ = 0; _ < 18; _++) k = Math.floor(_ / 3), R = _ % 3 + S - 8 - 3, W = ($ >> _ & 1) === 1, x.set(k, R, W, true), x.set(R, k, W, true);
  }
  function g(x, I, S) {
    const $ = x.size, k = f.getEncodedBits(I, S);
    let R, W;
    for (R = 0; R < 15; R++) W = (k >> R & 1) === 1, R < 6 ? x.set(R, 8, W, true) : R < 8 ? x.set(R + 1, 8, W, true) : x.set($ - 15 + R, 8, W, true), R < 8 ? x.set(8, $ - R - 1, W, true) : R < 9 ? x.set(8, 15 - R - 1 + 1, W, true) : x.set(8, 15 - R - 1, W, true);
    x.set($ - 8, 8, 1, true);
  }
  function b(x, I) {
    const S = x.size;
    let $ = -1, k = S - 1, R = 7, W = 0;
    for (let _ = S - 1; _ > 0; _ -= 2) for (_ === 6 && _--; ; ) {
      for (let A = 0; A < 2; A++) if (!x.isReserved(k, _ - A)) {
        let he = false;
        W < I.length && (he = (I[W] >>> R & 1) === 1), x.set(k, _ - A, he), R--, R === -1 && (W++, R = 7);
      }
      if (k += $, k < 0 || S <= k) {
        k -= $, $ = -$;
        break;
      }
    }
  }
  function C(x, I, S) {
    const $ = new i();
    S.forEach(function(A) {
      $.put(A.mode.bit, 4), $.put(A.getLength(), E.getCharCountIndicator(A.mode, x)), A.write($);
    });
    const k = e.getSymbolTotalCodewords(x), R = a.getTotalCodewordsCount(x, I), W = (k - R) * 8;
    for ($.getLengthInBits() + 4 <= W && $.put(0, 4); $.getLengthInBits() % 8 !== 0; ) $.putBit(0);
    const _ = (W - $.getLengthInBits()) / 8;
    for (let A = 0; A < _; A++) $.put(A % 2 ? 17 : 236, 8);
    return m($, x, I);
  }
  function m(x, I, S) {
    const $ = e.getSymbolTotalCodewords(I), k = a.getTotalCodewordsCount(I, S), R = $ - k, W = a.getBlocksCount(I, S), _ = $ % W, A = W - _, he = Math.floor($ / W), Le = Math.floor(R / W), Gn = Le + 1, Ft = he - Le, Qn = new l(Ft);
    let ot = 0;
    const Fe = new Array(W), Vt = new Array(W);
    let st = 0;
    const Jn = new Uint8Array(x.buffer);
    for (let Ie = 0; Ie < W; Ie++) {
      const lt = Ie < A ? Le : Gn;
      Fe[Ie] = Jn.slice(ot, ot + lt), Vt[Ie] = Qn.encode(Fe[Ie]), ot += lt, st = Math.max(st, lt);
    }
    const at = new Uint8Array($);
    let Kt = 0, se, ae;
    for (se = 0; se < st; se++) for (ae = 0; ae < W; ae++) se < Fe[ae].length && (at[Kt++] = Fe[ae][se]);
    for (se = 0; se < Ft; se++) for (ae = 0; ae < W; ae++) at[Kt++] = Vt[ae][se];
    return at;
  }
  function D(x, I, S, $) {
    let k;
    if (Array.isArray(x)) k = y.fromArray(x);
    else if (typeof x == "string") {
      let he = I;
      if (!he) {
        const Le = y.rawSplit(x);
        he = c.getBestVersionForData(Le, S);
      }
      k = y.fromString(x, he || 40);
    } else throw new Error("Invalid data");
    const R = c.getBestVersionForData(k, S);
    if (!R) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!I) I = R;
    else if (I < R) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + R + `.
`);
    const W = C(I, S, k), _ = e.getSymbolSize(I), A = new r(_);
    return p(A, I), v(A), h(A, I), g(A, S, 0), I >= 7 && w(A, I), b(A, W), isNaN($) && ($ = s.getBestMask(A, g.bind(null, A, S))), s.applyMask($, A), g(A, S, $), { modules: A, version: I, errorCorrectionLevel: S, maskPattern: $, segments: k };
  }
  return ut.create = function(I, S) {
    if (typeof I > "u" || I === "") throw new Error("No input text");
    let $ = t.M, k, R;
    return typeof S < "u" && ($ = t.from(S.errorCorrectionLevel, t.M), k = c.from(S.version), R = s.from(S.maskPattern), S.toSJISFunc && e.setToSJISFunction(S.toSJISFunc)), D(I, k, $, R);
  }, ut;
}
var Wt = {}, kt = {}, xn;
function Un() {
  return xn || (xn = 1, (function(e) {
    function t(i) {
      if (typeof i == "number" && (i = i.toString()), typeof i != "string") throw new Error("Color should be defined as hex string");
      let r = i.slice().replace("#", "").split("");
      if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error("Invalid hex color: " + i);
      (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(n) {
        return [n, n];
      }))), r.length === 6 && r.push("F", "F");
      const o = parseInt(r.join(""), 16);
      return { r: o >> 24 & 255, g: o >> 16 & 255, b: o >> 8 & 255, a: o & 255, hex: "#" + r.slice(0, 6).join("") };
    }
    e.getOptions = function(r) {
      r || (r = {}), r.color || (r.color = {});
      const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, n = r.width && r.width >= 21 ? r.width : void 0, s = r.scale || 4;
      return { width: n, scale: n ? 4 : s, margin: o, color: { dark: t(r.color.dark || "#000000ff"), light: t(r.color.light || "#ffffffff") }, type: r.type, rendererOpts: r.rendererOpts || {} };
    }, e.getScale = function(r, o) {
      return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o.margin * 2) : o.scale;
    }, e.getImageWidth = function(r, o) {
      const n = e.getScale(r, o);
      return Math.floor((r + o.margin * 2) * n);
    }, e.qrToImageData = function(r, o, n) {
      const s = o.modules.size, a = o.modules.data, l = e.getScale(s, n), c = Math.floor((s + n.margin * 2) * l), f = n.margin * l, E = [n.color.light, n.color.dark];
      for (let y = 0; y < c; y++) for (let p = 0; p < c; p++) {
        let v = (y * c + p) * 4, h = n.color.light;
        if (y >= f && p >= f && y < c - f && p < c - f) {
          const w = Math.floor((y - f) / l), g = Math.floor((p - f) / l);
          h = E[a[w * s + g] ? 1 : 0];
        }
        r[v++] = h.r, r[v++] = h.g, r[v++] = h.b, r[v] = h.a;
      }
    };
  })(kt)), kt;
}
var En;
function Bi() {
  return En || (En = 1, (function(e) {
    const t = Un();
    function i(o, n, s) {
      o.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = s, n.width = s, n.style.height = s + "px", n.style.width = s + "px";
    }
    function r() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    e.render = function(n, s, a) {
      let l = a, c = s;
      typeof l > "u" && (!s || !s.getContext) && (l = s, s = void 0), s || (c = r()), l = t.getOptions(l);
      const f = t.getImageWidth(n.modules.size, l), E = c.getContext("2d"), y = E.createImageData(f, f);
      return t.qrToImageData(y.data, n, l), i(E, c, f), E.putImageData(y, 0, 0), c;
    }, e.renderToDataURL = function(n, s, a) {
      let l = a;
      typeof l > "u" && (!s || !s.getContext) && (l = s, s = void 0), l || (l = {});
      const c = e.render(n, s, l), f = l.type || "image/png", E = l.rendererOpts || {};
      return c.toDataURL(f, E.quality);
    };
  })(Wt)), Wt;
}
var At = {}, Rn;
function Li() {
  if (Rn) return At;
  Rn = 1;
  const e = Un();
  function t(o, n) {
    const s = o.a / 255, a = n + '="' + o.hex + '"';
    return s < 1 ? a + " " + n + '-opacity="' + s.toFixed(2).slice(1) + '"' : a;
  }
  function i(o, n, s) {
    let a = o + n;
    return typeof s < "u" && (a += " " + s), a;
  }
  function r(o, n, s) {
    let a = "", l = 0, c = false, f = 0;
    for (let E = 0; E < o.length; E++) {
      const y = Math.floor(E % n), p = Math.floor(E / n);
      !y && !c && (c = true), o[E] ? (f++, E > 0 && y > 0 && o[E - 1] || (a += c ? i("M", y + s, 0.5 + p + s) : i("m", l, 0), l = 0, c = false), y + 1 < n && o[E + 1] || (a += i("h", f), f = 0)) : l++;
    }
    return a;
  }
  return At.render = function(n, s, a) {
    const l = e.getOptions(s), c = n.modules.size, f = n.modules.data, E = c + l.margin * 2, y = l.color.light.a ? "<path " + t(l.color.light, "fill") + ' d="M0 0h' + E + "v" + E + 'H0z"/>' : "", p = "<path " + t(l.color.dark, "stroke") + ' d="' + r(f, c, l.margin) + '"/>', v = 'viewBox="0 0 ' + E + " " + E + '"', w = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + v + ' shape-rendering="crispEdges">' + y + p + `</svg>
`;
    return typeof a == "function" && a(null, w), w;
  }, At;
}
var _n;
function Ni() {
  if (_n) return We;
  _n = 1;
  const e = gi(), t = Pi(), i = Bi(), r = Li();
  function o(n, s, a, l, c) {
    const f = [].slice.call(arguments, 1), E = f.length, y = typeof f[E - 1] == "function";
    if (!y && !e()) throw new Error("Callback required as last argument");
    if (y) {
      if (E < 2) throw new Error("Too few arguments provided");
      E === 2 ? (c = a, a = s, s = l = void 0) : E === 3 && (s.getContext && typeof c > "u" ? (c = l, l = void 0) : (c = l, l = a, a = s, s = void 0));
    } else {
      if (E < 1) throw new Error("Too few arguments provided");
      return E === 1 ? (a = s, s = l = void 0) : E === 2 && !s.getContext && (l = a, a = s, s = void 0), new Promise(function(p, v) {
        try {
          const h = t.create(a, l);
          p(n(h, s, l));
        } catch (h) {
          v(h);
        }
      });
    }
    try {
      const p = t.create(a, l);
      c(null, n(p, s, l));
    } catch (p) {
      c(p);
    }
  }
  return We.create = t.create, We.toCanvas = o.bind(null, i.render), We.toDataURL = o.bind(null, i.renderToDataURL), We.toString = o.bind(null, function(n, s, a) {
    return r.render(n, a);
  }), We;
}
var Oi = Ni();
const Di = ii(Oi), Mi = 0.1, Sn = 2.5, le = 7;
function Pt(e, t, i) {
  return e === t ? false : (e - t < 0 ? t - e : e - t) <= i + Mi;
}
function ji(e, t) {
  const i = Array.prototype.slice.call(Di.create(e, { errorCorrectionLevel: t }).modules.data, 0), r = Math.sqrt(i.length);
  return i.reduce((o, n, s) => (s % r === 0 ? o.push([n]) : o[o.length - 1].push(n)) && o, []);
}
const Ui = { generate({ uri: e, size: t, logoSize: i, padding: r = 8, dotColor: o = "var(--apkt-colors-black)" }) {
  const s = [], a = ji(e, "Q"), l = (t - 2 * r) / a.length, c = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  c.forEach(({ x: h, y: w }) => {
    const g = (a.length - le) * l * h + r, b = (a.length - le) * l * w + r, C = 0.45;
    for (let m = 0; m < c.length; m += 1) {
      const D = l * (le - m * 2);
      s.push(Oe`
            <rect
              fill=${m === 2 ? "var(--apkt-colors-black)" : "var(--apkt-colors-white)"}
              width=${m === 0 ? D - 10 : D}
              rx= ${m === 0 ? (D - 10) * C : D * C}
              ry= ${m === 0 ? (D - 10) * C : D * C}
              stroke=${o}
              stroke-width=${m === 0 ? 10 : 0}
              height=${m === 0 ? D - 10 : D}
              x= ${m === 0 ? b + l * m + 10 / 2 : b + l * m}
              y= ${m === 0 ? g + l * m + 10 / 2 : g + l * m}
            />
          `);
    }
  });
  const f = Math.floor((i + 25) / l), E = a.length / 2 - f / 2, y = a.length / 2 + f / 2 - 1, p = [];
  a.forEach((h, w) => {
    h.forEach((g, b) => {
      if (a[w][b] && !(w < le && b < le || w > a.length - (le + 1) && b < le || w < le && b > a.length - (le + 1)) && !(w > E && w < y && b > E && b < y)) {
        const C = w * l + l / 2 + r, m = b * l + l / 2 + r;
        p.push([C, m]);
      }
    });
  });
  const v = {};
  return p.forEach(([h, w]) => {
    var _a;
    v[h] ? (_a = v[h]) == null ? void 0 : _a.push(w) : v[h] = [w];
  }), Object.entries(v).map(([h, w]) => {
    const g = w.filter((b) => w.every((C) => !Pt(b, C, l)));
    return [Number(h), g];
  }).forEach(([h, w]) => {
    w.forEach((g) => {
      s.push(Oe`<circle cx=${h} cy=${g} fill=${o} r=${l / Sn} />`);
    });
  }), Object.entries(v).filter(([h, w]) => w.length > 1).map(([h, w]) => {
    const g = w.filter((b) => w.some((C) => Pt(b, C, l)));
    return [Number(h), g];
  }).map(([h, w]) => {
    w.sort((b, C) => b < C ? -1 : 1);
    const g = [];
    for (const b of w) {
      const C = g.find((m) => m.some((D) => Pt(b, D, l)));
      C ? C.push(b) : g.push([b]);
    }
    return [h, g.map((b) => [b[0], b[b.length - 1]])];
  }).forEach(([h, w]) => {
    w.forEach(([g, b]) => {
      s.push(Oe`
              <line
                x1=${h}
                x2=${h}
                y1=${g}
                y2=${b}
                stroke=${o}
                stroke-width=${l / (Sn / 2)}
                stroke-linecap="round"
              />
            `);
    });
  }), s;
} }, zi = U`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors: e }) => e.white};
    border: 1px solid ${({ tokens: e }) => e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius: e }) => e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;
var we = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let ne = class extends M {
  constructor() {
    super(...arguments), this.uri = "", this.size = 500, this.theme = "dark", this.imageSrc = void 0, this.alt = void 0, this.arenaClear = void 0, this.farcaster = void 0;
  }
  render() {
    return this.dataset.theme = this.theme, this.dataset.clear = String(this.arenaClear), u`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`;
  }
  templateSvg() {
    return Oe`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Ui.generate({ uri: this.uri, size: this.size, logoSize: this.arenaClear ? 0 : this.size / 4 })}
      </svg>
    `;
  }
  templateVisual() {
    return this.imageSrc ? u`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>` : this.farcaster ? u`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>` : u`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
ne.styles = [J, zi];
we([d()], ne.prototype, "uri", void 0);
we([d({ type: Number })], ne.prototype, "size", void 0);
we([d()], ne.prototype, "theme", void 0);
we([d()], ne.prototype, "imageSrc", void 0);
we([d()], ne.prototype, "alt", void 0);
we([d({ type: Boolean })], ne.prototype, "arenaClear", void 0);
we([d({ type: Boolean })], ne.prototype, "farcaster", void 0);
ne = we([O("wui-qr-code")], ne);
const qi = U`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({ tokens: e }) => e.theme.foregroundSecondary} 0%,
      ${({ tokens: e }) => e.theme.foregroundTertiary} 50%,
      ${({ tokens: e }) => e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius: e }) => e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
var ze = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Ee = class extends M {
  constructor() {
    super(...arguments), this.width = "", this.height = "", this.variant = "default", this.rounded = false;
  }
  render() {
    return this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
    `, this.dataset.rounded = this.rounded ? "true" : "false", u`<slot></slot>`;
  }
};
Ee.styles = [qi];
ze([d()], Ee.prototype, "width", void 0);
ze([d()], Ee.prototype, "height", void 0);
ze([d()], Ee.prototype, "variant", void 0);
ze([d({ type: Boolean })], Ee.prototype, "rounded", void 0);
Ee = ze([O("wui-shimmer")], Ee);
const Fi = U`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations: e }) => e.xl};
    animation-timing-function: ${({ easings: e }) => e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var zn = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Je = class extends z {
  constructor() {
    super(), this.basic = false;
  }
  firstUpdated() {
    var _a, _b, _c;
    this.basic || F.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: ((_a = this.wallet) == null ? void 0 : _a.name) ?? "WalletConnect", platform: "qrcode", displayIndex: (_b = this.wallet) == null ? void 0 : _b.display_index, walletRank: (_c = this.wallet) == null ? void 0 : _c.order, view: P.state.view } });
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.unsubscribe) == null ? void 0 : _a.forEach((t) => t());
  }
  render() {
    return this.onRenderProxy(), u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "5", "5", "5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    !this.ready && this.uri && (this.ready = true);
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) return null;
    const t = this.wallet ? this.wallet.name : void 0;
    return B.setWcLinking(void 0), B.setRecentWallet(this.wallet), u` <wui-qr-code
      theme=${Lt.state.themeMode}
      uri=${this.uri}
      imageSrc=${j(ge.getWalletImage(this.wallet))}
      color=${j(Lt.state.themeVariables["--w3m-qr-color"])}
      alt=${j(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const t = !this.uri || !this.ready;
    return u`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
  }
};
Je.styles = Fi;
zn([d({ type: Boolean })], Je.prototype, "basic", void 0);
Je = zn([O("w3m-connecting-wc-qrcode")], Je);
var Vi = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Tn = class extends M {
  constructor() {
    var _a, _b, _c;
    if (super(), this.wallet = (_a = P.state.data) == null ? void 0 : _a.wallet, !this.wallet) throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    F.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "browser", displayIndex: (_b = this.wallet) == null ? void 0 : _b.display_index, walletRank: (_c = this.wallet) == null ? void 0 : _c.order, view: P.state.view } });
  }
  render() {
    return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${j(ge.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
Tn = Vi([O("w3m-connecting-wc-unsupported")], Tn);
var qn = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Ot = class extends z {
  constructor() {
    var _a, _b;
    if (super(), this.isLoading = true, !this.wallet) throw new Error("w3m-connecting-wc-web: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.secondaryBtnLabel = "Open", this.secondaryLabel = Bn.CONNECT_LABELS.MOBILE, this.secondaryBtnIcon = "externalLink", this.updateLoadingState(), this.unsubscribe.push(B.subscribeKey("wcUri", () => {
      this.updateLoadingState();
    })), F.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "web", displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index, walletRank: (_b = this.wallet) == null ? void 0 : _b.order, view: P.state.view } });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.webapp_link) && this.uri) try {
      this.error = false;
      const { webapp_link: t, name: i } = this.wallet, { redirect: r, href: o } = L.formatUniversalUrl(t, this.uri);
      B.setWcLinking({ name: i, href: o }), B.setRecentWallet(this.wallet), L.openHref(r, "_blank");
    } catch {
      this.error = true;
    }
  }
};
qn([T()], Ot.prototype, "isLoading", void 0);
Ot = qn([O("w3m-connecting-wc-web")], Ot);
const Ki = U`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;
var Te = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let ue = class extends M {
  constructor() {
    var _a;
    super(), this.wallet = (_a = P.state.data) == null ? void 0 : _a.wallet, this.unsubscribe = [], this.platform = void 0, this.platforms = [], this.isSiwxEnabled = !!q.state.siwx, this.remoteFeatures = q.state.remoteFeatures, this.displayBranding = true, this.basic = false, this.determinePlatforms(), this.initializeConnection(), this.unsubscribe.push(q.subscribeKey("remoteFeatures", (t) => this.remoteFeatures = t));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((t) => t());
  }
  render() {
    return q.state.enableMobileFullScreen && this.setAttribute("data-mobile-fullscreen", "true"), u`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
  }
  reownBrandingTemplate() {
    var _a;
    return !((_a = this.remoteFeatures) == null ? void 0 : _a.reownBranding) || !this.displayBranding ? null : u`<wui-ux-by-reown></wui-ux-by-reown>`;
  }
  async initializeConnection(t = false) {
    var _a, _b;
    if (!(this.platform === "browser" || q.state.manualWCControl && !t)) try {
      const { wcPairingExpiry: i, status: r } = B.state, { redirectView: o } = P.state.data ?? {};
      if (t || q.state.enableEmbedded || L.isPairingExpired(i) || r === "connecting") {
        const n = B.getConnections(fe.state.activeChain), s = (_a = this.remoteFeatures) == null ? void 0 : _a.multiWallet, a = n.length > 0;
        await B.connectWalletConnect({ cache: "never" }), this.isSiwxEnabled || (a && s ? (P.replace("ProfileWallets"), Me.showSuccess("New Wallet Added")) : o ? P.replace(o) : kn.close());
      }
    } catch (i) {
      if (i instanceof Error && i.message.includes("An error occurred when attempting to switch chain") && !q.state.enableNetworkSwitch && fe.state.activeChain) {
        fe.setActiveCaipNetwork(Xn.getUnsupportedNetwork(`${fe.state.activeChain}:${(_b = fe.state.activeCaipNetwork) == null ? void 0 : _b.id}`)), fe.showUnsupportedChainUI();
        return;
      }
      i instanceof An && i.originalName === Pn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST ? F.sendEvent({ type: "track", event: "USER_REJECTED", properties: { message: i.message } }) : F.sendEvent({ type: "track", event: "CONNECT_ERROR", properties: { message: (i == null ? void 0 : i.message) ?? "Unknown" } }), B.setWcError(true), Me.showError(i.message ?? "Connection error"), B.resetWcConnection(), P.goBack();
    }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push("qrcode"), this.platform = "qrcode";
      return;
    }
    if (this.platform) return;
    const { mobile_link: t, desktop_link: i, webapp_link: r, injected: o, rdns: n } = this.wallet, s = o == null ? void 0 : o.map(({ injected_id: v }) => v).filter(Boolean), a = [...n ? [n] : s ?? []], l = q.state.isUniversalProvider ? false : a.length, c = t, f = r, E = B.checkInstalled(a), y = l && E, p = i && !L.isMobile();
    y && !fe.state.noAdapters && this.platforms.push("browser"), c && this.platforms.push(L.isMobile() ? "mobile" : "qrcode"), f && this.platforms.push("web"), p && this.platforms.push("desktop"), !y && l && !fe.state.noAdapters && this.platforms.push("unsupported"), this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "web":
        return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case "desktop":
        return u`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "mobile":
        return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return u`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
      default:
        return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    return this.platforms.length > 1 ? u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    ` : null;
  }
  async onSelectPlatform(t) {
    var _a;
    const i = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div");
    i && (await i.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.platform = t, i.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
};
ue.styles = Ki;
Te([T()], ue.prototype, "platform", void 0);
Te([T()], ue.prototype, "platforms", void 0);
Te([T()], ue.prototype, "isSiwxEnabled", void 0);
Te([T()], ue.prototype, "remoteFeatures", void 0);
Te([d({ type: Boolean })], ue.prototype, "displayBranding", void 0);
Te([d({ type: Boolean })], ue.prototype, "basic", void 0);
ue = Te([O("w3m-connecting-wc-view")], ue);
var jt = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Ye = class extends M {
  constructor() {
    super(), this.unsubscribe = [], this.isMobile = L.isMobile(), this.remoteFeatures = q.state.remoteFeatures, this.unsubscribe.push(q.subscribeKey("remoteFeatures", (t) => this.remoteFeatures = t));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((t) => t());
  }
  render() {
    if (this.isMobile) {
      const { featured: t, recommended: i } = N.state, { customWallets: r } = q.state, o = Zn.getRecentWallets(), n = t.length || i.length || (r == null ? void 0 : r.length) || o.length;
      return u`<wui-flex flexDirection="column" gap="2" .margin=${["1", "3", "3", "3"]}>
        ${n ? u`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return u`<wui-flex flexDirection="column" .padding=${["0", "0", "4", "0"]}>
        <w3m-connecting-wc-view ?basic=${true} .displayBranding=${false}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0", "3", "0", "3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
  }
  reownBrandingTemplate() {
    var _a;
    return ((_a = this.remoteFeatures) == null ? void 0 : _a.reownBranding) ? u` <wui-flex flexDirection="column" .padding=${["1", "0", "1", "0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>` : null;
  }
};
jt([T()], Ye.prototype, "isMobile", void 0);
jt([T()], Ye.prototype, "remoteFeatures", void 0);
Ye = jt([O("w3m-connecting-wc-basic-view")], Ye);
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Hi = (e) => e.strings === void 0;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const De = (e, t) => {
  var _a;
  const i = e._$AN;
  if (i === void 0) return false;
  for (const r of i) (_a = r._$AO) == null ? void 0 : _a.call(r, t, false), De(r, t);
  return true;
}, Xe = (e) => {
  let t, i;
  do {
    if ((t = e._$AM) === void 0) break;
    i = t._$AN, i.delete(e), e = t;
  } while ((i == null ? void 0 : i.size) === 0);
}, Fn = (e) => {
  for (let t; t = e._$AM; e = t) {
    let i = t._$AN;
    if (i === void 0) t._$AN = i = /* @__PURE__ */ new Set();
    else if (i.has(e)) break;
    i.add(e), Ji(t);
  }
};
function Gi(e) {
  this._$AN !== void 0 ? (Xe(this), this._$AM = e, Fn(this)) : this._$AM = e;
}
function Qi(e, t = false, i = 0) {
  const r = this._$AH, o = this._$AN;
  if (o !== void 0 && o.size !== 0) if (t) if (Array.isArray(r)) for (let n = i; n < r.length; n++) De(r[n], false), Xe(r[n]);
  else r != null && (De(r, false), Xe(r));
  else De(this, e);
}
const Ji = (e) => {
  e.type == ti.CHILD && (e._$AP ?? (e._$AP = Qi), e._$AQ ?? (e._$AQ = Gi));
};
class Yi extends ei {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, i, r) {
    super._$AT(t, i, r), Fn(this), this.isConnected = t._$AU;
  }
  _$AO(t, i = true) {
    var _a, _b;
    t !== this.isConnected && (this.isConnected = t, t ? (_a = this.reconnected) == null ? void 0 : _a.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), i && (De(this, t), Xe(this));
  }
  setValue(t) {
    if (Hi(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ut = () => new Xi();
class Xi {
}
const Bt = /* @__PURE__ */ new WeakMap(), zt = ni(class extends Yi {
  render(e) {
    return Gt;
  }
  update(e, [t]) {
    var _a;
    const i = t !== this.G;
    return i && this.G !== void 0 && this.rt(void 0), (i || this.lt !== this.ct) && (this.G = t, this.ht = (_a = e.options) == null ? void 0 : _a.host, this.rt(this.ct = e.element)), Gt;
  }
  rt(e) {
    if (this.isConnected || (e = void 0), typeof this.G == "function") {
      const t = this.ht ?? globalThis;
      let i = Bt.get(t);
      i === void 0 && (i = /* @__PURE__ */ new WeakMap(), Bt.set(t, i)), i.get(this.G) !== void 0 && this.G.call(this.ht, void 0), i.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
    } else this.G.value = e;
  }
  get lt() {
    var _a, _b;
    return typeof this.G == "function" ? (_a = Bt.get(this.ht ?? globalThis)) == null ? void 0 : _a.get(this.G) : (_b = this.G) == null ? void 0 : _b.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), Zi = U`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      color ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      border ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      box-shadow ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      width ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      height ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      transform ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      opacity ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors: e }) => e.neutrals300};
    border-radius: ${({ borderRadius: e }) => e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      color ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      border ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      box-shadow ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      width ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      height ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]},
      transform ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      opacity ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors: e }) => e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens: e }) => e.core.iconAccentPrimary};
    background-color: ${({ tokens: e }) => e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens: e }) => e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens: e }) => e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors: e }) => e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors: e }) => e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors: e }) => e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors: e }) => e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors: e }) => e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens: e }) => e.theme.textTertiary};
  }
`;
var rt = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Ae = class extends M {
  constructor() {
    super(...arguments), this.inputElementRef = Ut(), this.checked = false, this.disabled = false, this.size = "md";
  }
  render() {
    return u`
      <label data-size=${this.size}>
        <input
          ${zt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("switchChange", { detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.checked, bubbles: true, composed: true }));
  }
};
Ae.styles = [J, me, Zi];
rt([d({ type: Boolean })], Ae.prototype, "checked", void 0);
rt([d({ type: Boolean })], Ae.prototype, "disabled", void 0);
rt([d()], Ae.prototype, "size", void 0);
Ae = rt([O("wui-toggle")], Ae);
const er = U`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing: e }) => e[2]};
    padding: ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[3]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
    box-shadow: inset 0 0 0 1px ${({ tokens: e }) => e.theme.foregroundPrimary};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var Vn = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Ze = class extends M {
  constructor() {
    super(...arguments), this.checked = false;
  }
  render() {
    return u`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
  }
  handleToggleChange(t) {
    t.stopPropagation(), this.checked = t.detail, this.dispatchSwitchEvent();
  }
  dispatchSwitchEvent() {
    this.dispatchEvent(new CustomEvent("certifiedSwitchChange", { detail: this.checked, bubbles: true, composed: true }));
  }
};
Ze.styles = [J, me, er];
Vn([d({ type: Boolean })], Ze.prototype, "checked", void 0);
Ze = Vn([O("wui-certified-switch")], Ze);
const tr = U`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({ spacing: e }) => e[3]};
    color: ${({ tokens: e }) => e.theme.textPrimary};
    caret-color: ${({ tokens: e }) => e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({ borderRadius: e }) => e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({ tokens: e }) => e.theme.borderPrimary};
    caret-color: ${({ tokens: e }) => e.core.textAccentPrimary};
    padding: ${({ spacing: e }) => e[3]} ${({ spacing: e }) => e[3]}
      ${({ spacing: e }) => e[3]} ${({ spacing: e }) => e[10]};
    font-size: ${({ textSize: e }) => e.large};
    line-height: ${({ typography: e }) => e["lg-regular"].lineHeight};
    letter-spacing: ${({ typography: e }) => e["lg-regular"].letterSpacing};
    font-weight: ${({ fontWeight: e }) => e.regular};
    font-family: ${({ fontFamily: e }) => e.regular};
  }

  input[data-size='lg'] {
    padding: ${({ spacing: e }) => e[4]} ${({ spacing: e }) => e[3]}
      ${({ spacing: e }) => e[4]} ${({ spacing: e }) => e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({ tokens: e }) => e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({ tokens: e }) => e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({ tokens: e }) => e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({ tokens: e }) => e.theme.borderSecondary};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens: e }) => e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens: e }) => e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({ tokens: e }) => e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({ spacing: e }) => e[4]};
    color: ${({ tokens: e }) => e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing: e }) => e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({ borderRadius: e }) => e[2]};
    color: ${({ tokens: e }) => e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({ tokens: e }) => e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({ spacing: e }) => e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
var Y = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let V = class extends M {
  constructor() {
    super(...arguments), this.inputElementRef = Ut(), this.disabled = false, this.loading = false, this.placeholder = "", this.type = "text", this.value = "", this.size = "md";
  }
  render() {
    return u` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${zt(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${j(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value || ""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`;
  }
  templateLeftIcon() {
    return this.icon ? u`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>` : null;
  }
  templateSubmitButton() {
    var _a;
    return this.onSubmit ? u`<button
        class="wui-input-text-submit-button ${this.loading ? "loading" : ""}"
        @click=${(_a = this.onSubmit) == null ? void 0 : _a.bind(this)}
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading ? u`<wui-icon name="spinner" size="md"></wui-icon>` : u`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>` : null;
  }
  templateError() {
    return this.errorText ? u`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>` : null;
  }
  templateWarning() {
    return this.warningText ? u`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>` : null;
  }
  dispatchInputChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("inputChange", { detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.value, bubbles: true, composed: true }));
  }
};
V.styles = [J, me, tr];
Y([d()], V.prototype, "icon", void 0);
Y([d({ type: Boolean })], V.prototype, "disabled", void 0);
Y([d({ type: Boolean })], V.prototype, "loading", void 0);
Y([d()], V.prototype, "placeholder", void 0);
Y([d()], V.prototype, "type", void 0);
Y([d()], V.prototype, "value", void 0);
Y([d()], V.prototype, "errorText", void 0);
Y([d()], V.prototype, "warningText", void 0);
Y([d()], V.prototype, "onSubmit", void 0);
Y([d()], V.prototype, "size", void 0);
Y([d({ attribute: false })], V.prototype, "onKeyDown", void 0);
V = Y([O("wui-input-text")], V);
const nr = U`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing: e }) => e[3]};
    color: ${({ tokens: e }) => e.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing: e }) => e[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius: e }) => e[4]};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }
`;
var Kn = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let et = class extends M {
  constructor() {
    super(...arguments), this.inputComponentRef = Ut(), this.inputValue = "";
  }
  render() {
    return u`
      <wui-input-text
        ${zt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue ? u`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>` : null}
      </wui-input-text>
    `;
  }
  onInputChange(t) {
    this.inputValue = t.detail || "";
  }
  clearValue() {
    var _a;
    const i = (_a = this.inputComponentRef.value) == null ? void 0 : _a.inputElementRef.value;
    i && (i.value = "", this.inputValue = "", i.focus(), i.dispatchEvent(new Event("input")));
  }
};
et.styles = [J, nr];
Kn([d()], et.prototype, "inputValue", void 0);
et = Kn([O("wui-search-bar")], et);
const ir = Oe`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`, rr = U`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing: e }) => e[2]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens: e }) => e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var Hn = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let tt = class extends M {
  constructor() {
    super(...arguments), this.type = "wallet";
  }
  render() {
    return u`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    return this.type === "network" ? u` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${ir}` : u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
  }
};
tt.styles = [J, me, rr];
Hn([d()], tt.prototype, "type", void 0);
tt = Hn([O("wui-card-select-loader")], tt);
const or = Ln`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var X = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let K = class extends M {
  render() {
    return this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && ce.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && ce.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && ce.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && ce.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && ce.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && ce.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && ce.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && ce.getSpacingStyles(this.margin, 3)};
    `, u`<slot></slot>`;
  }
};
K.styles = [J, or];
X([d()], K.prototype, "gridTemplateRows", void 0);
X([d()], K.prototype, "gridTemplateColumns", void 0);
X([d()], K.prototype, "justifyItems", void 0);
X([d()], K.prototype, "alignItems", void 0);
X([d()], K.prototype, "justifyContent", void 0);
X([d()], K.prototype, "alignContent", void 0);
X([d()], K.prototype, "columnGap", void 0);
X([d()], K.prototype, "rowGap", void 0);
X([d()], K.prototype, "gap", void 0);
X([d()], K.prototype, "padding", void 0);
X([d()], K.prototype, "margin", void 0);
K = X([O("wui-grid")], K);
const sr = U`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing: e }) => e[2]};
    padding: ${({ spacing: e }) => e[3]} ${({ spacing: e }) => e[0]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius: e }) => e[4]}, 20px);
    transition:
      color ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-1"]},
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-1"]},
      border-radius ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens: e }) => e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens: e }) => e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors: e }) => e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors: e }) => e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors: e }) => e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var re = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let G = class extends M {
  constructor() {
    super(), this.observer = new IntersectionObserver(() => {
    }), this.visible = false, this.imageSrc = void 0, this.imageLoading = false, this.isImpressed = false, this.explorerId = "", this.walletQuery = "", this.certified = false, this.displayIndex = 0, this.wallet = void 0, this.observer = new IntersectionObserver((t) => {
      t.forEach((i) => {
        i.isIntersecting ? (this.visible = true, this.fetchImageSrc(), this.sendImpressionEvent()) : this.visible = false;
      });
    }, { threshold: 0.01 });
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    var _a, _b;
    const t = ((_a = this.wallet) == null ? void 0 : _a.badge_type) === "certified";
    return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${j(t ? "certified" : void 0)}
            >${(_b = this.wallet) == null ? void 0 : _b.name}</wui-text
          >
          ${t ? u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    var _a, _b;
    return !this.visible && !this.imageSrc || this.imageLoading ? this.shimmerTemplate() : u`
      <wui-wallet-image
        size="lg"
        imageSrc=${j(this.imageSrc)}
        name=${j((_a = this.wallet) == null ? void 0 : _a.name)}
        .installed=${((_b = this.wallet) == null ? void 0 : _b.installed) ?? false}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    this.wallet && (this.imageSrc = ge.getWalletImage(this.wallet), !this.imageSrc && (this.imageLoading = true, this.imageSrc = await ge.fetchWalletImage(this.wallet.image_id), this.imageLoading = false));
  }
  sendImpressionEvent() {
    !this.wallet || this.isImpressed || (this.isImpressed = true, F.sendWalletImpressionEvent({ name: this.wallet.name, walletRank: this.wallet.order, explorerId: this.explorerId, view: P.state.view, query: this.walletQuery, certified: this.certified, displayIndex: this.displayIndex }));
  }
};
G.styles = sr;
re([T()], G.prototype, "visible", void 0);
re([T()], G.prototype, "imageSrc", void 0);
re([T()], G.prototype, "imageLoading", void 0);
re([T()], G.prototype, "isImpressed", void 0);
re([d()], G.prototype, "explorerId", void 0);
re([d()], G.prototype, "walletQuery", void 0);
re([d()], G.prototype, "certified", void 0);
re([d()], G.prototype, "displayIndex", void 0);
re([d({ type: Object })], G.prototype, "wallet", void 0);
G = re([O("w3m-all-wallets-list-item")], G);
const ar = U`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations: e }) => e.xl};
    animation-timing-function: ${({ easings: e }) => e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing: e }) => e[4]};
    padding-bottom: ${({ spacing: e }) => e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var be = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
const In = "local-paginator";
let ie = class extends M {
  constructor() {
    super(), this.unsubscribe = [], this.paginationObserver = void 0, this.loading = !N.state.wallets.length, this.wallets = N.state.wallets, this.recommended = N.state.recommended, this.featured = N.state.featured, this.filteredWallets = N.state.filteredWallets, this.mobileFullScreen = q.state.enableMobileFullScreen, this.unsubscribe.push(N.subscribeKey("wallets", (t) => this.wallets = t), N.subscribeKey("recommended", (t) => this.recommended = t), N.subscribeKey("featured", (t) => this.featured = t), N.subscribeKey("filteredWallets", (t) => this.filteredWallets = t));
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a;
    this.unsubscribe.forEach((t) => t()), (_a = this.paginationObserver) == null ? void 0 : _a.disconnect();
  }
  render() {
    return this.mobileFullScreen && this.setAttribute("data-mobile-fullscreen", "true"), u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "3", "3", "3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a;
    this.loading = true;
    const t = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-grid");
    t && (await N.fetchWalletsByPage({ page: 1 }), await t.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.loading = false, t.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
  shimmerTemplate(t, i) {
    return [...Array(t)].map(() => u`
        <wui-card-select-loader type="wallet" id=${j(i)}></wui-card-select-loader>
      `);
  }
  getWallets() {
    var _a;
    const t = [...this.featured, ...this.recommended];
    ((_a = this.filteredWallets) == null ? void 0 : _a.length) > 0 ? t.push(...this.filteredWallets) : t.push(...this.wallets);
    const i = L.uniqueBy(t, "id"), r = Nt.markWalletsAsInstalled(i);
    return Nt.markWalletsWithDisplayIndex(r);
  }
  walletsTemplate() {
    return this.getWallets().map((i, r) => u`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${() => this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge === "certified"}
          displayIndex=${r}
        ></w3m-all-wallets-list-item>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets: t, recommended: i, featured: r, count: o, mobileFilteredOutWalletsLength: n } = N.state, s = window.innerWidth < 352 ? 3 : 4, a = t.length + i.length;
    let c = Math.ceil(a / s) * s - a + s;
    return c -= t.length ? r.length % s : 0, o === 0 && r.length > 0 ? null : o === 0 || [...r, ...t, ...i].length < o - (n ?? 0) ? this.shimmerTemplate(c, In) : null;
  }
  createPaginationObserver() {
    var _a;
    const t = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`#${In}`);
    t && (this.paginationObserver = new IntersectionObserver(([i]) => {
      if ((i == null ? void 0 : i.isIntersecting) && !this.loading) {
        const { page: r, count: o, wallets: n } = N.state;
        n.length < o && N.fetchWalletsByPage({ page: r + 1 });
      }
    }), this.paginationObserver.observe(t));
  }
  onConnectWallet(t) {
    H.selectWalletConnector(t);
  }
};
ie.styles = ar;
be([T()], ie.prototype, "loading", void 0);
be([T()], ie.prototype, "wallets", void 0);
be([T()], ie.prototype, "recommended", void 0);
be([T()], ie.prototype, "featured", void 0);
be([T()], ie.prototype, "filteredWallets", void 0);
be([T()], ie.prototype, "badge", void 0);
be([T()], ie.prototype, "mobileFullScreen", void 0);
ie = be([O("w3m-all-wallets-list")], ie);
const lr = Ln`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var qe = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Re = class extends M {
  constructor() {
    super(...arguments), this.prevQuery = "", this.prevBadge = void 0, this.loading = true, this.mobileFullScreen = q.state.enableMobileFullScreen, this.query = "";
  }
  render() {
    return this.mobileFullScreen && this.setAttribute("data-mobile-fullscreen", "true"), this.onSearch(), this.loading ? u`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) && (this.prevQuery = this.query, this.prevBadge = this.badge, this.loading = true, await N.searchWallet({ search: this.query, badge: this.badge }), this.loading = false);
  }
  walletsTemplate() {
    const { search: t } = N.state, i = Nt.markWalletsAsInstalled(t);
    return t.length ? u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "3", "3", "3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((r, o) => u`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
              explorerId=${r.id}
              certified=${this.badge === "certified"}
              walletQuery=${this.query}
              displayIndex=${o}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    ` : u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
  }
  onConnectWallet(t) {
    H.selectWalletConnector(t);
  }
};
Re.styles = lr;
qe([T()], Re.prototype, "loading", void 0);
qe([T()], Re.prototype, "mobileFullScreen", void 0);
qe([d()], Re.prototype, "query", void 0);
qe([d()], Re.prototype, "badge", void 0);
Re = qe([O("w3m-all-wallets-search")], Re);
var qt = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let nt = class extends M {
  constructor() {
    super(...arguments), this.search = "", this.badge = void 0, this.onDebouncedSearch = L.debounce((t) => {
      this.search = t;
    });
  }
  render() {
    const t = this.search.length >= 2;
    return u`
      <wui-flex .padding=${["1", "3", "3", "3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === "certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t || this.badge ? u`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>` : u`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(t) {
    this.onDebouncedSearch(t.detail);
  }
  onCertifiedSwitchChange(t) {
    t.detail ? (this.badge = "certified", Me.showSvg("Only WalletConnect certified", { icon: "walletConnectBrown", iconColor: "accent-100" })) : this.badge = void 0;
  }
  qrButtonTemplate() {
    return L.isMobile() ? u`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      ` : null;
  }
  onWalletConnectQr() {
    P.push("ConnectingWalletConnect");
  }
};
qt([T()], nt.prototype, "search", void 0);
qt([T()], nt.prototype, "badge", void 0);
nt = qt([O("w3m-all-wallets-view")], nt);
const cr = U`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: e }) => e[3]};
    width: 100%;
    background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
    transition:
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      scale ${({ durations: e }) => e.lg} ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({ tokens: e }) => e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var oe = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Q = class extends M {
  constructor() {
    super(...arguments), this.imageSrc = "google", this.loading = false, this.disabled = false, this.rightIcon = true, this.rounded = false, this.fullSize = false;
  }
  render() {
    return this.dataset.rounded = this.rounded ? "true" : "false", u`
      <button
        ?disabled=${this.loading ? true : !!this.disabled}
        data-loading=${this.loading}
        tabindex=${j(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `;
  }
  templateLeftIcon() {
    return this.icon ? u`<wui-image
        icon=${this.icon}
        iconColor=${j(this.iconColor)}
        ?boxed=${true}
        ?rounded=${this.rounded}
      ></wui-image>` : u`<wui-image
      ?boxed=${true}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`;
  }
  templateRightIcon() {
    return this.rightIcon ? this.loading ? u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>` : u`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>` : null;
  }
};
Q.styles = [J, me, cr];
oe([d()], Q.prototype, "imageSrc", void 0);
oe([d()], Q.prototype, "icon", void 0);
oe([d()], Q.prototype, "iconColor", void 0);
oe([d({ type: Boolean })], Q.prototype, "loading", void 0);
oe([d()], Q.prototype, "tabIdx", void 0);
oe([d({ type: Boolean })], Q.prototype, "disabled", void 0);
oe([d({ type: Boolean })], Q.prototype, "rightIcon", void 0);
oe([d({ type: Boolean })], Q.prototype, "rounded", void 0);
oe([d({ type: Boolean })], Q.prototype, "fullSize", void 0);
Q = oe([O("wui-list-item")], Q);
var ur = function(e, t, i, r) {
  var o = arguments.length, n = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, r);
  else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, i, n) : s(t, i)) || n);
  return o > 3 && n && Object.defineProperty(t, i, n), n;
};
let Wn = class extends M {
  constructor() {
    var _a;
    super(...arguments), this.wallet = (_a = P.state.data) == null ? void 0 : _a.wallet;
  }
  render() {
    if (!this.wallet) throw new Error("w3m-downloads-view");
    return u`
      <wui-flex gap="2" flexDirection="column" .padding=${["3", "3", "4", "3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.chrome_store) ? u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>` : null;
  }
  iosTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.app_store) ? u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>` : null;
  }
  androidTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.play_store) ? u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>` : null;
  }
  homepageTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.homepage) ? u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    ` : null;
  }
  openStore(t) {
    t.href && this.wallet && (F.sendEvent({ type: "track", event: "GET_WALLET", properties: { name: this.wallet.name, walletRank: this.wallet.order, explorerId: this.wallet.id, type: t.type } }), L.openHref(t.href, "_blank"));
  }
  onChromeStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.chrome_store) && this.openStore({ href: this.wallet.chrome_store, type: "chrome_store" });
  }
  onAppStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.app_store) && this.openStore({ href: this.wallet.app_store, type: "app_store" });
  }
  onPlayStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.play_store) && this.openStore({ href: this.wallet.play_store, type: "play_store" });
  }
  onHomePage() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.homepage) && this.openStore({ href: this.wallet.homepage, type: "homepage" });
  }
};
Wn = ur([O("w3m-downloads-view")], Wn);
export {
  nt as W3mAllWalletsView,
  Ye as W3mConnectingWcBasicView,
  Wn as W3mDownloadsView
};
