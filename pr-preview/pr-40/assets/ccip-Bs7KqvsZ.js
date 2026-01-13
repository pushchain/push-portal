import { a4 as p, cM as m, cE as w, bl as g, bB as k, cN as O, cO as L, cP as E, bL as R, bp as x, aG as y, bO as M } from "./main-VPha_WWQ.js";
class S extends p {
  constructor({ callbackSelector: s, cause: e, data: o, extraData: n, sender: c, urls: t }) {
    var _a;
    super(e.shortMessage || "An error occurred while fetching for an offchain result.", { cause: e, metaMessages: [...e.metaMessages || [], ((_a = e.metaMessages) == null ? void 0 : _a.length) ? "" : [], "Offchain Gateway Call:", t && ["  Gateway URL(s):", ...t.map((i) => `    ${m(i)}`)], `  Sender: ${c}`, `  Data: ${o}`, `  Callback selector: ${s}`, `  Extra data: ${n}`].flat(), name: "OffchainLookupError" });
  }
}
class $ extends p {
  constructor({ result: s, url: e }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", { metaMessages: [`Gateway URL: ${m(e)}`, `Response: ${w(s)}`], name: "OffchainLookupResponseMalformedError" });
  }
}
class q extends p {
  constructor({ sender: s, to: e }) {
    super("Reverted sender address does not match target contract address (`to`).", { metaMessages: [`Contract address: ${e}`, `OffchainLookup sender address: ${s}`], name: "OffchainLookupSenderMismatchError" });
  }
}
const A = "0x556f1830", G = { name: "OffchainLookup", type: "error", inputs: [{ name: "sender", type: "address" }, { name: "urls", type: "string[]" }, { name: "callData", type: "bytes" }, { name: "callbackFunction", type: "bytes4" }, { name: "extraData", type: "bytes" }] };
async function D(d, { blockNumber: s, blockTag: e, data: o, to: n }) {
  const { args: c } = g({ data: o, abi: [G] }), [t, i, l, a, r] = c, { ccipRead: f } = d, h = f && typeof (f == null ? void 0 : f.request) == "function" ? f.request : T;
  try {
    if (!k(n, t)) throw new q({ sender: t, to: n });
    const u = i.includes(O) ? await L({ data: l, ccipRequest: h }) : await h({ data: l, sender: t, urls: i }), { data: b } = await E(d, { blockNumber: s, blockTag: e, data: R([a, x([{ type: "bytes" }, { type: "bytes" }], [u, r])]), to: n });
    return b;
  } catch (u) {
    throw new S({ callbackSelector: a, cause: u, data: o, extraData: r, sender: t, urls: i });
  }
}
async function T({ data: d, sender: s, urls: e }) {
  var _a;
  let o = new Error("An unknown error occurred.");
  for (let n = 0; n < e.length; n++) {
    const c = e[n], t = c.includes("{data}") ? "GET" : "POST", i = t === "POST" ? { data: d, sender: s } : void 0, l = t === "POST" ? { "Content-Type": "application/json" } : {};
    try {
      const a = await fetch(c.replace("{sender}", s.toLowerCase()).replace("{data}", d), { body: JSON.stringify(i), headers: l, method: t });
      let r;
      if (((_a = a.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json")) ? r = (await a.json()).data : r = await a.text(), !a.ok) {
        o = new y({ body: i, details: (r == null ? void 0 : r.error) ? w(r.error) : a.statusText, headers: a.headers, status: a.status, url: c });
        continue;
      }
      if (!M(r)) {
        o = new $({ result: r, url: c });
        continue;
      }
      return r;
    } catch (a) {
      o = new y({ body: i, details: a.message, url: c });
    }
  }
  throw o;
}
export {
  T as ccipRequest,
  D as offchainLookup,
  G as offchainLookupAbiItem,
  A as offchainLookupSignature
};
