var st = Object.defineProperty,
  it = Object.defineProperties;
var at = Object.getOwnPropertyDescriptors;
var de = Object.getOwnPropertySymbols;
var ze = Object.prototype.hasOwnProperty,
  qe = Object.prototype.propertyIsEnumerable;
var je = (n, e, t) =>
    e in n
      ? st(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  I = (n, e) => {
    for (var t in e || (e = {})) ze.call(e, t) && je(n, t, e[t]);
    if (de) for (var t of de(e)) qe.call(e, t) && je(n, t, e[t]);
    return n;
  },
  se = (n, e) => it(n, at(e));
var Je = (n, e) => {
  var t = {};
  for (var s in n) ze.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && de)
    for (var s of de(n)) e.indexOf(s) < 0 && qe.call(n, s) && (t[s] = n[s]);
  return t;
};
import {
  s as tt,
  n as ve,
  S as ot,
  i as ct,
  e as lt,
  c as ft,
  a as ut,
  d as z,
  b as Ee,
  f as W,
  g as q,
  t as dt,
  h as pt,
  j as _t,
  k as ht,
  l as D,
  m as mt,
  o as M,
  p as N,
  q as F,
  r as V,
  u as gt,
  v as wt,
  w as Re,
  x as J,
  y as ae,
  z as K,
  A as oe,
  B as ce,
  C as B,
  D as le,
  E as Ke,
} from "./chunks/index-f46c38f0.js";
const Z = [];
function pe(n, e = ve) {
  let t;
  const s = new Set();
  function l(r) {
    if (tt(n, r) && ((n = r), t)) {
      const i = !Z.length;
      for (const a of s) a[1](), Z.push(a, n);
      if (i) {
        for (let a = 0; a < Z.length; a += 2) Z[a][0](Z[a + 1]);
        Z.length = 0;
      }
    }
  }
  function c(r) {
    l(r(n));
  }
  function f(r, i = ve) {
    const a = [r, i];
    return (
      s.add(a),
      s.size === 1 && (t = e(l) || ve),
      r(n),
      () => {
        s.delete(a), s.size === 0 && (t(), (t = null));
      }
    );
  }
  return { set: l, update: c, subscribe: f };
}
let Be = "",
  nt = "";
function bt(n) {
  (Be = n.base), (nt = n.assets || Be);
}
function yt(n) {
  let e, t, s;
  const l = [n[1] || {}];
  var c = n[0][0];
  function f(r) {
    let i = {};
    for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
    return { props: i };
  }
  return (
    c && (e = new c(f())),
    {
      c() {
        e && J(e.$$.fragment), (t = D());
      },
      l(r) {
        e && ae(e.$$.fragment, r), (t = D());
      },
      m(r, i) {
        e && K(e, r, i), q(r, t, i), (s = !0);
      },
      p(r, i) {
        const a = i & 2 ? oe(l, [ce(r[1] || {})]) : {};
        if (c !== (c = r[0][0])) {
          if (e) {
            M();
            const d = e;
            N(d.$$.fragment, 1, 0, () => {
              B(d, 1);
            }),
              F();
          }
          c
            ? ((e = new c(f())),
              J(e.$$.fragment),
              V(e.$$.fragment, 1),
              K(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(a);
      },
      i(r) {
        s || (e && V(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && N(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && z(t), e && B(e, r);
      },
    }
  );
}
function vt(n) {
  let e, t, s;
  const l = [n[1] || {}];
  var c = n[0][0];
  function f(r) {
    let i = { $$slots: { default: [Rt] }, $$scope: { ctx: r } };
    for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
    return { props: i };
  }
  return (
    c && (e = new c(f(n))),
    {
      c() {
        e && J(e.$$.fragment), (t = D());
      },
      l(r) {
        e && ae(e.$$.fragment, r), (t = D());
      },
      m(r, i) {
        e && K(e, r, i), q(r, t, i), (s = !0);
      },
      p(r, i) {
        const a = i & 2 ? oe(l, [ce(r[1] || {})]) : {};
        if (
          (i & 525 && (a.$$scope = { dirty: i, ctx: r }), c !== (c = r[0][0]))
        ) {
          if (e) {
            M();
            const d = e;
            N(d.$$.fragment, 1, 0, () => {
              B(d, 1);
            }),
              F();
          }
          c
            ? ((e = new c(f(r))),
              J(e.$$.fragment),
              V(e.$$.fragment, 1),
              K(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(a);
      },
      i(r) {
        s || (e && V(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && N(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && z(t), e && B(e, r);
      },
    }
  );
}
function Et(n) {
  let e, t, s;
  const l = [n[2] || {}];
  var c = n[0][1];
  function f(r) {
    let i = {};
    for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
    return { props: i };
  }
  return (
    c && (e = new c(f())),
    {
      c() {
        e && J(e.$$.fragment), (t = D());
      },
      l(r) {
        e && ae(e.$$.fragment, r), (t = D());
      },
      m(r, i) {
        e && K(e, r, i), q(r, t, i), (s = !0);
      },
      p(r, i) {
        const a = i & 4 ? oe(l, [ce(r[2] || {})]) : {};
        if (c !== (c = r[0][1])) {
          if (e) {
            M();
            const d = e;
            N(d.$$.fragment, 1, 0, () => {
              B(d, 1);
            }),
              F();
          }
          c
            ? ((e = new c(f())),
              J(e.$$.fragment),
              V(e.$$.fragment, 1),
              K(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(a);
      },
      i(r) {
        s || (e && V(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && N(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && z(t), e && B(e, r);
      },
    }
  );
}
function $t(n) {
  let e, t, s;
  const l = [n[2] || {}];
  var c = n[0][1];
  function f(r) {
    let i = { $$slots: { default: [kt] }, $$scope: { ctx: r } };
    for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
    return { props: i };
  }
  return (
    c && (e = new c(f(n))),
    {
      c() {
        e && J(e.$$.fragment), (t = D());
      },
      l(r) {
        e && ae(e.$$.fragment, r), (t = D());
      },
      m(r, i) {
        e && K(e, r, i), q(r, t, i), (s = !0);
      },
      p(r, i) {
        const a = i & 4 ? oe(l, [ce(r[2] || {})]) : {};
        if (
          (i & 521 && (a.$$scope = { dirty: i, ctx: r }), c !== (c = r[0][1]))
        ) {
          if (e) {
            M();
            const d = e;
            N(d.$$.fragment, 1, 0, () => {
              B(d, 1);
            }),
              F();
          }
          c
            ? ((e = new c(f(r))),
              J(e.$$.fragment),
              V(e.$$.fragment, 1),
              K(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(a);
      },
      i(r) {
        s || (e && V(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && N(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && z(t), e && B(e, r);
      },
    }
  );
}
function kt(n) {
  let e, t, s;
  const l = [n[3] || {}];
  var c = n[0][2];
  function f(r) {
    let i = {};
    for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
    return { props: i };
  }
  return (
    c && (e = new c(f())),
    {
      c() {
        e && J(e.$$.fragment), (t = D());
      },
      l(r) {
        e && ae(e.$$.fragment, r), (t = D());
      },
      m(r, i) {
        e && K(e, r, i), q(r, t, i), (s = !0);
      },
      p(r, i) {
        const a = i & 8 ? oe(l, [ce(r[3] || {})]) : {};
        if (c !== (c = r[0][2])) {
          if (e) {
            M();
            const d = e;
            N(d.$$.fragment, 1, 0, () => {
              B(d, 1);
            }),
              F();
          }
          c
            ? ((e = new c(f())),
              J(e.$$.fragment),
              V(e.$$.fragment, 1),
              K(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(a);
      },
      i(r) {
        s || (e && V(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && N(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && z(t), e && B(e, r);
      },
    }
  );
}
function Rt(n) {
  let e, t, s, l;
  const c = [$t, Et],
    f = [];
  function r(i, a) {
    return i[0][2] ? 0 : 1;
  }
  return (
    (e = r(n)),
    (t = f[e] = c[e](n)),
    {
      c() {
        t.c(), (s = D());
      },
      l(i) {
        t.l(i), (s = D());
      },
      m(i, a) {
        f[e].m(i, a), q(i, s, a), (l = !0);
      },
      p(i, a) {
        let d = e;
        (e = r(i)),
          e === d
            ? f[e].p(i, a)
            : (M(),
              N(f[d], 1, 1, () => {
                f[d] = null;
              }),
              F(),
              (t = f[e]),
              t ? t.p(i, a) : ((t = f[e] = c[e](i)), t.c()),
              V(t, 1),
              t.m(s.parentNode, s));
      },
      i(i) {
        l || (V(t), (l = !0));
      },
      o(i) {
        N(t), (l = !1);
      },
      d(i) {
        f[e].d(i), i && z(s);
      },
    }
  );
}
function We(n) {
  let e,
    t = n[5] && Ye(n);
  return {
    c() {
      (e = lt("div")), t && t.c(), this.h();
    },
    l(s) {
      e = ft(s, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0,
      });
      var l = ut(e);
      t && t.l(l), l.forEach(z), this.h();
    },
    h() {
      Ee(e, "id", "svelte-announcer"),
        Ee(e, "aria-live", "assertive"),
        Ee(e, "aria-atomic", "true"),
        W(e, "position", "absolute"),
        W(e, "left", "0"),
        W(e, "top", "0"),
        W(e, "clip", "rect(0 0 0 0)"),
        W(e, "clip-path", "inset(50%)"),
        W(e, "overflow", "hidden"),
        W(e, "white-space", "nowrap"),
        W(e, "width", "1px"),
        W(e, "height", "1px");
    },
    m(s, l) {
      q(s, e, l), t && t.m(e, null);
    },
    p(s, l) {
      s[5]
        ? t
          ? t.p(s, l)
          : ((t = Ye(s)), t.c(), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    d(s) {
      s && z(e), t && t.d();
    },
  };
}
function Ye(n) {
  let e;
  return {
    c() {
      e = dt(n[6]);
    },
    l(t) {
      e = pt(t, n[6]);
    },
    m(t, s) {
      q(t, e, s);
    },
    p(t, s) {
      s & 64 && _t(e, t[6]);
    },
    d(t) {
      t && z(e);
    },
  };
}
function Lt(n) {
  let e, t, s, l, c;
  const f = [vt, yt],
    r = [];
  function i(d, S) {
    return d[0][1] ? 0 : 1;
  }
  (e = i(n)), (t = r[e] = f[e](n));
  let a = n[4] && We(n);
  return {
    c() {
      t.c(), (s = ht()), a && a.c(), (l = D());
    },
    l(d) {
      t.l(d), (s = mt(d)), a && a.l(d), (l = D());
    },
    m(d, S) {
      r[e].m(d, S), q(d, s, S), a && a.m(d, S), q(d, l, S), (c = !0);
    },
    p(d, [S]) {
      let k = e;
      (e = i(d)),
        e === k
          ? r[e].p(d, S)
          : (M(),
            N(r[k], 1, 1, () => {
              r[k] = null;
            }),
            F(),
            (t = r[e]),
            t ? t.p(d, S) : ((t = r[e] = f[e](d)), t.c()),
            V(t, 1),
            t.m(s.parentNode, s)),
        d[4]
          ? a
            ? a.p(d, S)
            : ((a = We(d)), a.c(), a.m(l.parentNode, l))
          : a && (a.d(1), (a = null));
    },
    i(d) {
      c || (V(t), (c = !0));
    },
    o(d) {
      N(t), (c = !1);
    },
    d(d) {
      r[e].d(d), d && z(s), a && a.d(d), d && z(l);
    },
  };
}
function St(n, e, t) {
  let { stores: s } = e,
    { page: l } = e,
    { components: c } = e,
    { props_0: f = null } = e,
    { props_1: r = null } = e,
    { props_2: i = null } = e;
  gt("__svelte__", s), wt(s.page.notify);
  let a = !1,
    d = !1,
    S = null;
  return (
    Re(() => {
      const k = s.page.subscribe(() => {
        a && (t(5, (d = !0)), t(6, (S = document.title || "untitled page")));
      });
      return t(4, (a = !0)), k;
    }),
    (n.$$set = (k) => {
      "stores" in k && t(7, (s = k.stores)),
        "page" in k && t(8, (l = k.page)),
        "components" in k && t(0, (c = k.components)),
        "props_0" in k && t(1, (f = k.props_0)),
        "props_1" in k && t(2, (r = k.props_1)),
        "props_2" in k && t(3, (i = k.props_2));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 384 && s.page.set(l);
    }),
    [c, f, r, i, a, d, S, s, l]
  );
}
class At extends ot {
  constructor(e) {
    super(),
      ct(this, e, St, Lt, tt, {
        stores: 7,
        page: 8,
        components: 0,
        props_0: 1,
        props_1: 2,
        props_2: 3,
      });
  }
}
const Ot = "modulepreload",
  Ge = {},
  Pt = "/_app/immutable/",
  j = function (e, t) {
    return !t || t.length === 0
      ? e()
      : Promise.all(
          t.map((s) => {
            if (((s = `${Pt}${s}`), s in Ge)) return;
            Ge[s] = !0;
            const l = s.endsWith(".css"),
              c = l ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${s}"]${c}`)) return;
            const f = document.createElement("link");
            if (
              ((f.rel = l ? "stylesheet" : Ot),
              l || ((f.as = "script"), (f.crossOrigin = "")),
              (f.href = s),
              document.head.appendChild(f),
              l)
            )
              return new Promise((r, i) => {
                f.addEventListener("load", r),
                  f.addEventListener("error", () =>
                    i(new Error(`Unable to preload CSS for ${s}`))
                  );
              });
          })
        ).then(() => e());
  },
  Ut = {},
  _e = [
    () =>
      j(
        () => import("./pages/__layout.svelte-a37960dc.js"),
        [
          "pages/__layout.svelte-a37960dc.js",
          "assets/pages/__layout.svelte-351cb787.css",
          "chunks/index-f46c38f0.js",
        ]
      ),
    () =>
      j(
        () => import("./error.svelte-5f11d1b0.js"),
        ["error.svelte-5f11d1b0.js", "chunks/index-f46c38f0.js"]
      ),
    () =>
      j(
        () => import("./pages/a/_name_/index.svelte-ad323a2c.js"),
        [
          "pages/a/_name_/index.svelte-ad323a2c.js",
          "assets/pages/a/_name_/index.svelte-b085afa2.css",
          "chunks/index-f46c38f0.js",
        ]
      ),
    () =>
      j(
        () => import("./pages/assets/index.svelte-19581f64.js"),
        [
          "pages/assets/index.svelte-19581f64.js",
          "assets/pages/assets/index.svelte-01a5f470.css",
          "chunks/index-f46c38f0.js",
        ]
      ),
    () =>
      j(
        () => import("./pages/index.svelte-1f70d1fe.js"),
        ["pages/index.svelte-1f70d1fe.js", "chunks/index-f46c38f0.js"]
      ),
    () =>
      j(
        () => import("./pages/login/index.svelte-d3d9fb60.js"),
        ["pages/login/index.svelte-d3d9fb60.js", "chunks/index-f46c38f0.js"]
      ),
    () =>
      j(
        () => import("./pages/o/_name_/assets/index.svelte-ecca3d13.js"),
        [
          "pages/o/_name_/assets/index.svelte-ecca3d13.js",
          "assets/pages/o/_name_/assets/index.svelte-0dc2f0a5.css",
          "chunks/index-f46c38f0.js",
        ]
      ),
    () =>
      j(
        () => import("./pages/o/_name_/index.svelte-140120f3.js"),
        [
          "pages/o/_name_/index.svelte-140120f3.js",
          "assets/pages/o/_name_/index.svelte-b11d680d.css",
          "chunks/index-f46c38f0.js",
        ]
      ),
    () =>
      j(
        () => import("./pages/orgs/index.svelte-4a26829d.js"),
        [
          "pages/orgs/index.svelte-4a26829d.js",
          "assets/pages/a/_name_/index.svelte-b085afa2.css",
          "chunks/index-f46c38f0.js",
        ]
      ),
    () =>
      j(
        () => import("./pages/signup/index.svelte-5d7451a5.js"),
        ["pages/signup/index.svelte-5d7451a5.js", "chunks/index-f46c38f0.js"]
      ),
    () =>
      j(
        () => import("./pages/tos.svelte-6fc3b2de.js"),
        ["pages/tos.svelte-6fc3b2de.js", "chunks/index-f46c38f0.js"]
      ),
  ],
  Tt = {
    "": [[0, 4], [1]],
    assets: [[0, 3], [1]],
    login: [[0, 5], [1]],
    orgs: [[0, 8], [1]],
    signup: [[0, 9], [1]],
    tos: [[0, 10], [1]],
    "a/[name]": [[0, 2], [1]],
    "o/[name]": [[0, 7], [1]],
    "o/[name]/assets": [[0, 6], [1]],
  };
function Me(n) {
  return n instanceof Error || (n && n.name && n.message)
    ? n
    : new Error(JSON.stringify(n));
}
function Fe(n) {
  if (n.fallthrough)
    throw new Error(
      "fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching"
    );
  if ("maxage" in n)
    throw new Error("maxage should be replaced with cache: { maxage }");
  const e = n.status && n.status >= 400 && n.status <= 599 && !n.redirect;
  if (n.error || e) {
    const t = n.status;
    if (!n.error && e) return { status: t || 500, error: new Error() };
    const s = typeof n.error == "string" ? new Error(n.error) : n.error;
    return s instanceof Error
      ? !t || t < 400 || t > 599
        ? (console.warn(
            '"error" returned from load() without a valid status code \u2014 defaulting to 500'
          ),
          { status: 500, error: s })
        : { status: t, error: s }
      : {
          status: 500,
          error: new Error(
            `"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`
          ),
        };
  }
  if (n.redirect) {
    if (!n.status || Math.floor(n.status / 100) !== 3)
      throw new Error(
        '"redirect" property returned from load() must be accompanied by a 3xx status code'
      );
    if (typeof n.redirect != "string")
      throw new Error(
        '"redirect" property returned from load() must be a string'
      );
  }
  if (
    n.dependencies &&
    (!Array.isArray(n.dependencies) ||
      n.dependencies.some((t) => typeof t != "string"))
  )
    throw new Error(
      '"dependencies" property returned from load() must be of type string[]'
    );
  if (n.context)
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
    );
  return n;
}
function It(n, e) {
  return n === "/" || e === "ignore"
    ? n
    : e === "never"
    ? n.endsWith("/")
      ? n.slice(0, -1)
      : n
    : e === "always" && !n.endsWith("/")
    ? n + "/"
    : n;
}
function Xe(n) {
  let e = n.baseURI;
  if (!e) {
    const t = n.getElementsByTagName("base");
    e = t.length ? t[0].href : n.URL;
  }
  return e;
}
function Le() {
  return { x: pageXOffset, y: pageYOffset };
}
function He(n) {
  return n
    .composedPath()
    .find((t) => t instanceof Node && t.nodeName.toUpperCase() === "A");
}
function Ze(n) {
  return n instanceof SVGAElement
    ? new URL(n.href.baseVal, document.baseURI)
    : new URL(n.href);
}
function Qe(n) {
  const e = pe(n);
  let t = !0;
  function s() {
    (t = !0), e.update((f) => f);
  }
  function l(f) {
    (t = !1), e.set(f);
  }
  function c(f) {
    let r;
    return e.subscribe((i) => {
      (r === void 0 || (t && i !== r)) && f((r = i));
    });
  }
  return { notify: s, set: l, subscribe: c };
}
function Dt() {
  const { set: n, subscribe: e } = pe(!1),
    t = "1654379995167";
  let s;
  async function l() {
    clearTimeout(s);
    const f = await fetch(`${nt}/_app/version.json`, {
      headers: { pragma: "no-cache", "cache-control": "no-cache" },
    });
    if (f.ok) {
      const { version: r } = await f.json(),
        i = r !== t;
      return i && (n(!0), clearTimeout(s)), i;
    } else throw new Error(`Version check failed: ${f.status}`);
  }
  return { subscribe: e, check: l };
}
function Nt(n) {
  let e = 5381,
    t = n.length;
  if (typeof n == "string") for (; t; ) e = (e * 33) ^ n.charCodeAt(--t);
  else for (; t; ) e = (e * 33) ^ n[--t];
  return (e >>> 0).toString(36);
}
const Se = window.fetch;
function Vt(n, e) {
  let s = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
    typeof n == "string" ? n : n.url
  )}]`;
  e &&
    typeof e.body == "string" &&
    (s += `[sveltekit\\:data-body="${Nt(e.body)}"]`);
  const l = document.querySelector(s);
  if (l && l.textContent) {
    const c = JSON.parse(l.textContent),
      { body: f } = c,
      r = Je(c, ["body"]);
    return Promise.resolve(new Response(f, r));
  }
  return Se(n, e);
}
const xt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function Ct(n) {
  const e = [],
    t = [];
  let s = !0;
  return {
    pattern:
      n === ""
        ? /^\/$/
        : new RegExp(
            `^${decodeURIComponent(n)
              .split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
              .map((c, f, r) => {
                const i = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
                if (i) return e.push(i[1]), t.push(i[2]), "(?:/(.*))?";
                const a = f === r.length - 1;
                return (
                  c &&
                  "/" +
                    c
                      .split(/\[(.+?)\]/)
                      .map((d, S) => {
                        if (S % 2) {
                          const [, k, Q, X] = xt.exec(d);
                          return e.push(Q), t.push(X), k ? "(.*?)" : "([^/]+?)";
                        }
                        return (
                          a && d.includes(".") && (s = !1),
                          d
                            .normalize()
                            .replace(/%5[Bb]/g, "[")
                            .replace(/%5[Dd]/g, "]")
                            .replace(/#/g, "%23")
                            .replace(/\?/g, "%3F")
                            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                        );
                      })
                      .join("")
                );
              })
              .join("")}${s ? "/?" : ""}$`
          ),
    names: e,
    types: t,
  };
}
function jt(n, e, t, s) {
  const l = {};
  for (let c = 0; c < e.length; c += 1) {
    const f = e[c],
      r = t[c],
      i = n[c + 1] || "";
    if (r) {
      const a = s[r];
      if (!a) throw new Error(`Missing "${r}" param matcher`);
      if (!a(i)) return;
    }
    l[f] = i;
  }
  return l;
}
function zt(n, e, t) {
  return Object.entries(e).map(([l, [c, f, r]]) => {
    const { pattern: i, names: a, types: d } = Ct(l);
    return {
      id: l,
      exec: (S) => {
        const k = i.exec(S);
        if (k) return jt(k, a, d, t);
      },
      a: c.map((S) => n[S]),
      b: f.map((S) => n[S]),
      has_shadow: !!r,
    };
  });
}
const rt = "sveltekit:scroll",
  Y = "sveltekit:index",
  $e = zt(_e, Tt, Ut),
  qt = _e[0](),
  Jt = _e[1](),
  et = {};
let ie = {};
try {
  ie = JSON.parse(sessionStorage[rt]);
} catch {}
function ke(n) {
  ie[n] = Le();
}
function Kt({ target: n, session: e, base: t, trailing_slash: s }) {
  var xe;
  const l = new Map(),
    c = [],
    f = {
      url: Qe({}),
      page: Qe({}),
      navigating: pe(null),
      session: pe(e),
      updated: Dt(),
    },
    r = { id: null, promise: null },
    i = { before_navigate: [], after_navigate: [] };
  let a = { branch: [], error: null, session_id: 0, stuff: et, url: null },
    d = !1,
    S = !0,
    k = !1,
    Q = 1,
    X = null,
    Ae,
    Oe,
    Pe = !1;
  f.session.subscribe(async (o) => {
    (Oe = o), Pe && ((Q += 1), we(new URL(location.href), [], !0));
  }),
    (Pe = !0);
  let H = !0,
    x = (xe = history.state) == null ? void 0 : xe[Y];
  x ||
    ((x = Date.now()),
    history.replaceState(
      se(I({}, history.state), { [Y]: x }),
      "",
      location.href
    ));
  const he = ie[x];
  he && ((history.scrollRestoration = "manual"), scrollTo(he.x, he.y));
  let me = !1,
    ge,
    Ue;
  async function Te(
    o,
    {
      noscroll: p = !1,
      replaceState: g = !1,
      keepfocus: u = !1,
      state: _ = {},
    },
    w
  ) {
    const E = new URL(o, Xe(document));
    if (H)
      return ye({
        url: E,
        scroll: p ? Le() : null,
        keepfocus: u,
        redirect_chain: w,
        details: { state: _, replaceState: g },
        accepted: () => {},
        blocked: () => {},
      });
    await ne(E);
  }
  async function Ie(o) {
    const p = Ve(o);
    if (!p)
      throw new Error(
        "Attempted to prefetch a URL that does not belong to this app"
      );
    return (r.promise = Ne(p, !1)), (r.id = p.id), r.promise;
  }
  async function we(o, p, g, u, _) {
    var R, A, O;
    const w = Ve(o),
      E = (Ue = {});
    let h = w && (await Ne(w, g));
    if (
      (!h &&
        o.origin === location.origin &&
        o.pathname === location.pathname &&
        (h = await te({
          status: 404,
          error: new Error(`Not found: ${o.pathname}`),
          url: o,
          routeId: null,
        })),
      !h)
    )
      return await ne(o), !1;
    if (Ue !== E) return !1;
    if (((c.length = 0), h.redirect))
      if (p.length > 10 || p.includes(o.pathname))
        h = await te({
          status: 500,
          error: new Error("Redirect loop"),
          url: o,
          routeId: null,
        });
      else
        return (
          H
            ? Te(new URL(h.redirect, o).href, {}, [...p, o.pathname])
            : await ne(new URL(h.redirect, location.href)),
          !1
        );
    else
      ((A = (R = h.props) == null ? void 0 : R.page) == null
        ? void 0
        : A.status) >= 400 &&
        (await f.updated.check()) &&
        (await ne(o));
    if (((k = !0), u && u.details)) {
      const { details: y } = u,
        v = y.replaceState ? 0 : 1;
      (y.state[Y] = x += v),
        history[y.replaceState ? "replaceState" : "pushState"](y.state, "", o);
    }
    if (
      (d
        ? ((a = h.state),
          h.props.page && (h.props.page.url = o),
          Ae.$set(h.props))
        : De(h),
      u)
    ) {
      const { scroll: y, keepfocus: v } = u;
      if (!v) {
        const b = document.body,
          $ = b.getAttribute("tabindex");
        (O = getSelection()) == null || O.removeAllRanges(),
          (b.tabIndex = -1),
          b.focus({ preventScroll: !0 }),
          $ !== null
            ? b.setAttribute("tabindex", $)
            : b.removeAttribute("tabindex");
      }
      if ((await Ke(), S)) {
        const b = o.hash && document.getElementById(o.hash.slice(1));
        y ? scrollTo(y.x, y.y) : b ? b.scrollIntoView() : scrollTo(0, 0);
      }
    } else await Ke();
    (r.promise = null),
      (r.id = null),
      (S = !0),
      h.props.page && (ge = h.props.page);
    const m = h.state.branch[h.state.branch.length - 1];
    (H = (m == null ? void 0 : m.module.router) !== !1), _ && _(), (k = !1);
  }
  function De(o) {
    a = o.state;
    const p = document.querySelector("style[data-sveltekit]");
    if (
      (p && p.remove(),
      (ge = o.props.page),
      (Ae = new At({
        target: n,
        props: se(I({}, o.props), { stores: f }),
        hydrate: !0,
      })),
      H)
    ) {
      const g = { from: null, to: new URL(location.href) };
      i.after_navigate.forEach((u) => u(g));
    }
    d = !0;
  }
  async function be({
    url: o,
    params: p,
    stuff: g,
    branch: u,
    status: _,
    error: w,
    routeId: E,
  }) {
    var v, b;
    const h = u.filter(Boolean),
      m = h.find(($) => {
        var P;
        return (P = $.loaded) == null ? void 0 : P.redirect;
      }),
      R = {
        redirect:
          (v = m == null ? void 0 : m.loaded) == null ? void 0 : v.redirect,
        state: {
          url: o,
          params: p,
          branch: u,
          error: w,
          stuff: g,
          session_id: Q,
        },
        props: { components: h.map(($) => $.module.default) },
      };
    for (let $ = 0; $ < h.length; $ += 1) {
      const P = h[$].loaded;
      R.props[`props_${$}`] = P ? await P.props : null;
    }
    if (!a.url || o.href !== a.url.href || a.error !== w || a.stuff !== g) {
      R.props.page = {
        error: w,
        params: p,
        routeId: E,
        status: _,
        stuff: g,
        url: o,
      };
      const $ = (P, L) => {
        Object.defineProperty(R.props.page, P, {
          get: () => {
            throw new Error(`$page.${P} has been replaced by $page.url.${L}`);
          },
        });
      };
      $("origin", "origin"), $("path", "pathname"), $("query", "searchParams");
    }
    const O = h[h.length - 1],
      y = (b = O == null ? void 0 : O.loaded) == null ? void 0 : b.cache;
    if (y) {
      const $ = o.pathname + o.search;
      let P = !1;
      const L = () => {
          l.get($) === R && l.delete($), T(), clearTimeout(U);
        },
        U = setTimeout(L, y.maxage * 1e3),
        T = f.session.subscribe(() => {
          P && L();
        });
      (P = !0), l.set($, R);
    }
    return R;
  }
  async function ee({
    status: o,
    error: p,
    module: g,
    url: u,
    params: _,
    stuff: w,
    props: E,
    routeId: h,
  }) {
    const m = {
      module: g,
      uses: {
        params: new Set(),
        url: !1,
        session: !1,
        stuff: !1,
        dependencies: new Set(),
      },
      loaded: null,
      stuff: w,
    };
    function R(y) {
      const { href: v } = new URL(y, u);
      m.uses.dependencies.add(v);
    }
    E && m.uses.dependencies.add(u.href);
    const A = {};
    for (const y in _)
      Object.defineProperty(A, y, {
        get() {
          return m.uses.params.add(y), _[y];
        },
        enumerable: !0,
      });
    const O = Oe;
    if (g.load) {
      const y = {
        routeId: h,
        params: A,
        props: E || {},
        get url() {
          return (
            (m.uses.url = !0),
            new Proxy(u, {
              get: (b, $) => {
                if ($ === "hash")
                  throw new Error(
                    "url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component."
                  );
                return Reflect.get(b, $, b);
              },
            })
          );
        },
        get session() {
          return (m.uses.session = !0), O;
        },
        get stuff() {
          return (m.uses.stuff = !0), I({}, w);
        },
        async fetch(b, $) {
          let P;
          typeof b == "string"
            ? (P = b)
            : ((P = b.url),
              ($ = I(
                {
                  body:
                    b.method === "GET" || b.method === "HEAD"
                      ? void 0
                      : await b.blob(),
                  cache: b.cache,
                  credentials: b.credentials,
                  headers: b.headers,
                  integrity: b.integrity,
                  keepalive: b.keepalive,
                  method: b.method,
                  mode: b.mode,
                  redirect: b.redirect,
                  referrer: b.referrer,
                  referrerPolicy: b.referrerPolicy,
                  signal: b.signal,
                },
                $
              )));
          const L = new URL(P, u).href;
          return R(L), d ? Se(L, $) : Vt(P, $);
        },
        status: o != null ? o : null,
        error: p != null ? p : null,
      };
      let v;
      if (((v = await g.load.call(null, y)), !v))
        throw new Error("load function must return a value");
      (m.loaded = Fe(v)),
        m.loaded.stuff && (m.stuff = m.loaded.stuff),
        m.loaded.dependencies && m.loaded.dependencies.forEach(R);
    } else E && (m.loaded = Fe({ props: E }));
    return m;
  }
  async function Ne({ id: o, url: p, params: g, route: u }, _) {
    var b, $, P;
    if (r.id === o && r.promise) return r.promise;
    if (!_) {
      const L = l.get(o);
      if (L) return L;
    }
    const { a: w, b: E, has_shadow: h } = u,
      m = a.url && {
        url: o !== a.url.pathname + a.url.search,
        params: Object.keys(g).filter((L) => a.params[L] !== g[L]),
        session: Q !== a.session_id,
      };
    let R = [],
      A = et,
      O = !1,
      y = 200,
      v = null;
    w.forEach((L) => L().catch(() => {}));
    e: for (let L = 0; L < w.length; L += 1) {
      let U;
      try {
        if (!w[L]) continue;
        const T = await w[L](),
          C = a.branch[L];
        if (
          !C ||
          T !== C.module ||
          (m.url && C.uses.url) ||
          m.params.some((G) => C.uses.params.has(G)) ||
          (m.session && C.uses.session) ||
          Array.from(C.uses.dependencies).some((G) => c.some((ue) => ue(G))) ||
          (O && C.uses.stuff)
        ) {
          let G = {};
          const ue = h && L === w.length - 1;
          if (ue) {
            const re = await Se(
              `${p.pathname}${p.pathname.endsWith("/") ? "" : "/"}__data.json${
                p.search
              }`,
              { headers: { "x-sveltekit-load": "true" } }
            );
            if (re.ok) {
              const Ce = re.headers.get("x-sveltekit-location");
              if (Ce) return { redirect: Ce, props: {}, state: a };
              G = re.status === 204 ? {} : await re.json();
            } else (y = re.status), (v = new Error("Failed to load data"));
          }
          if (
            (v ||
              (U = await ee({
                module: T,
                url: p,
                params: g,
                props: G,
                stuff: A,
                routeId: u.id,
              })),
            U && (ue && (U.uses.url = !0), U.loaded))
          ) {
            if (
              (U.loaded.error && ((y = U.loaded.status), (v = U.loaded.error)),
              U.loaded.redirect)
            )
              return { redirect: U.loaded.redirect, props: {}, state: a };
            U.loaded.stuff && (O = !0);
          }
        } else U = C;
      } catch (T) {
        (y = 500), (v = Me(T));
      }
      if (v) {
        for (; L--; )
          if (E[L]) {
            let T,
              C,
              fe = L;
            for (; !(C = R[fe]); ) fe -= 1;
            try {
              if (
                ((T = await ee({
                  status: y,
                  error: v,
                  module: await E[L](),
                  url: p,
                  params: g,
                  stuff: C.stuff,
                  routeId: u.id,
                })),
                (b = T == null ? void 0 : T.loaded) != null && b.error)
              )
                continue;
              ($ = T == null ? void 0 : T.loaded) != null &&
                $.stuff &&
                (A = I(I({}, A), T.loaded.stuff)),
                (R = R.slice(0, fe + 1).concat(T));
              break e;
            } catch {
              continue;
            }
          }
        return await te({ status: y, error: v, url: p, routeId: u.id });
      } else
        (P = U == null ? void 0 : U.loaded) != null &&
          P.stuff &&
          (A = I(I({}, A), U.loaded.stuff)),
          R.push(U);
    }
    return await be({
      url: p,
      params: g,
      stuff: A,
      branch: R,
      status: y,
      error: v,
      routeId: u.id,
    });
  }
  async function te({ status: o, error: p, url: g, routeId: u }) {
    var h, m;
    const _ = {},
      w = await ee({
        module: await qt,
        url: g,
        params: _,
        stuff: {},
        routeId: u,
      }),
      E = await ee({
        status: o,
        error: p,
        module: await Jt,
        url: g,
        params: _,
        stuff: (w && w.loaded && w.loaded.stuff) || {},
        routeId: u,
      });
    return await be({
      url: g,
      params: _,
      stuff: I(
        I({}, (h = w == null ? void 0 : w.loaded) == null ? void 0 : h.stuff),
        (m = E == null ? void 0 : E.loaded) == null ? void 0 : m.stuff
      ),
      branch: [w, E],
      status: o,
      error: p,
      routeId: u,
    });
  }
  function Ve(o) {
    if (o.origin !== location.origin || !o.pathname.startsWith(t)) return;
    const p = decodeURI(o.pathname.slice(t.length) || "/");
    for (const g of $e) {
      const u = g.exec(p);
      if (u) return { id: o.pathname + o.search, route: g, params: u, url: o };
    }
  }
  async function ye({
    url: o,
    scroll: p,
    keepfocus: g,
    redirect_chain: u,
    details: _,
    accepted: w,
    blocked: E,
  }) {
    const h = a.url;
    let m = !1;
    const R = { from: h, to: o, cancel: () => (m = !0) };
    if ((i.before_navigate.forEach((y) => y(R)), m)) {
      E();
      return;
    }
    const A = It(o.pathname, s),
      O = new URL(o.origin + A + o.search + o.hash);
    ke(x),
      w(),
      d && f.navigating.set({ from: a.url, to: O }),
      await we(O, u, !1, { scroll: p, keepfocus: g, details: _ }, () => {
        const y = { from: h, to: O };
        i.after_navigate.forEach((v) => v(y)), f.navigating.set(null);
      });
  }
  function ne(o) {
    return (location.href = o.href), new Promise(() => {});
  }
  return {
    after_navigate: (o) => {
      Re(
        () => (
          i.after_navigate.push(o),
          () => {
            const p = i.after_navigate.indexOf(o);
            i.after_navigate.splice(p, 1);
          }
        )
      );
    },
    before_navigate: (o) => {
      Re(
        () => (
          i.before_navigate.push(o),
          () => {
            const p = i.before_navigate.indexOf(o);
            i.before_navigate.splice(p, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (k || !d) && (S = !1);
    },
    goto: (o, p = {}) => Te(o, p, []),
    invalidate: (o) => {
      if (typeof o == "function") c.push(o);
      else {
        const { href: p } = new URL(o, location.href);
        c.push((g) => g === p);
      }
      return (
        X ||
          (X = Promise.resolve().then(async () => {
            await we(new URL(location.href), [], !0), (X = null);
          })),
        X
      );
    },
    prefetch: async (o) => {
      const p = new URL(o, Xe(document));
      await Ie(p);
    },
    prefetch_routes: async (o) => {
      const g = (o ? $e.filter((u) => o.some((_) => u.exec(_))) : $e).map((u) =>
        Promise.all(u.a.map((_) => _()))
      );
      await Promise.all(g);
    },
    _start_router: () => {
      (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (u) => {
          let _ = !1;
          const w = { from: a.url, to: null, cancel: () => (_ = !0) };
          i.before_navigate.forEach((E) => E(w)),
            _
              ? (u.preventDefault(), (u.returnValue = ""))
              : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
          if (document.visibilityState === "hidden") {
            ke(x);
            try {
              sessionStorage[rt] = JSON.stringify(ie);
            } catch {}
          }
        });
      const o = (u) => {
        const _ = He(u);
        _ && _.href && _.hasAttribute("sveltekit:prefetch") && Ie(Ze(_));
      };
      let p;
      const g = (u) => {
        clearTimeout(p),
          (p = setTimeout(() => {
            var _;
            (_ = u.target) == null ||
              _.dispatchEvent(
                new CustomEvent("sveltekit:trigger_prefetch", { bubbles: !0 })
              );
          }, 20));
      };
      addEventListener("touchstart", o),
        addEventListener("mousemove", g),
        addEventListener("sveltekit:trigger_prefetch", o),
        addEventListener("click", (u) => {
          if (
            !H ||
            u.button ||
            u.which !== 1 ||
            u.metaKey ||
            u.ctrlKey ||
            u.shiftKey ||
            u.altKey ||
            u.defaultPrevented
          )
            return;
          const _ = He(u);
          if (!_ || !_.href) return;
          const w = _ instanceof SVGAElement,
            E = Ze(_);
          if (!w && E.origin === "null") return;
          const h = (_.getAttribute("rel") || "").split(/\s+/);
          if (
            _.hasAttribute("download") ||
            h.includes("external") ||
            _.hasAttribute("sveltekit:reload") ||
            (w ? _.target.baseVal : _.target)
          )
            return;
          const [m, R] = E.href.split("#");
          if (R !== void 0 && m === location.href.split("#")[0]) {
            (me = !0),
              ke(x),
              f.page.set(se(I({}, ge), { url: E })),
              f.page.notify();
            return;
          }
          ye({
            url: E,
            scroll: _.hasAttribute("sveltekit:noscroll") ? Le() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: E.href === location.href },
            accepted: () => u.preventDefault(),
            blocked: () => u.preventDefault(),
          });
        }),
        addEventListener("popstate", (u) => {
          if (u.state && H) {
            if (u.state[Y] === x) return;
            ye({
              url: new URL(location.href),
              scroll: ie[u.state[Y]],
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                x = u.state[Y];
              },
              blocked: () => {
                const _ = x - u.state[Y];
                history.go(_);
              },
            });
          }
        }),
        addEventListener("hashchange", () => {
          me &&
            ((me = !1),
            history.replaceState(
              se(I({}, history.state), { [Y]: ++x }),
              "",
              location.href
            ));
        });
    },
    _hydrate: async ({
      status: o,
      error: p,
      nodes: g,
      params: u,
      routeId: _,
    }) => {
      const w = new URL(location.href),
        E = [];
      let h = {},
        m,
        R;
      try {
        for (let A = 0; A < g.length; A += 1) {
          const O = A === g.length - 1;
          let y;
          if (O) {
            const b = document.querySelector(
              'script[sveltekit\\:data-type="props"]'
            );
            b && (y = JSON.parse(b.textContent));
          }
          const v = await ee({
            module: await _e[g[A]](),
            url: w,
            params: u,
            stuff: h,
            status: O ? o : void 0,
            error: O ? p : void 0,
            props: y,
            routeId: _,
          });
          if (
            (y && (v.uses.dependencies.add(w.href), (v.uses.url = !0)),
            E.push(v),
            v && v.loaded)
          )
            if (v.loaded.error) {
              if (p) throw v.loaded.error;
              R = {
                status: v.loaded.status,
                error: v.loaded.error,
                url: w,
                routeId: _,
              };
            } else v.loaded.stuff && (h = I(I({}, h), v.loaded.stuff));
        }
        m = R
          ? await te(R)
          : await be({
              url: w,
              params: u,
              stuff: h,
              branch: E,
              status: o,
              error: p,
              routeId: _,
            });
      } catch (A) {
        if (p) throw A;
        m = await te({ status: 500, error: Me(A), url: w, routeId: _ });
      }
      m.redirect && (await ne(new URL(m.redirect, location.href))), De(m);
    },
  };
}
async function Yt({
  paths: n,
  target: e,
  session: t,
  route: s,
  spa: l,
  trailing_slash: c,
  hydrate: f,
}) {
  const r = Kt({ target: e, session: t, base: n.base, trailing_slash: c });
  bt(n),
    f && (await r._hydrate(f)),
    s && (l && r.goto(location.href, { replaceState: !0 }), r._start_router()),
    dispatchEvent(new CustomEvent("sveltekit:start"));
}
export { Yt as start };
