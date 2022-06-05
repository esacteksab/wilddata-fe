import {
  S as q,
  i as x,
  s as I,
  e as m,
  t as c,
  k as S,
  c as g,
  a as y,
  h,
  d,
  m as V,
  b as p,
  g as R,
  H as t,
  j as C,
  n as $,
} from "../../../chunks/index-f46c38f0.js";
function U(i) {
  let e,
    r,
    s = i[0].DisplayName + "",
    l,
    k,
    w,
    u,
    _ = i[0].EMail + "",
    v,
    D,
    M,
    A,
    n,
    O,
    f = i[0].DisplayName + "",
    E,
    B,
    N;
  return {
    c() {
      (e = m("main")),
        (r = m("h1")),
        (l = c(s)),
        (k = c(" Org")),
        (w = c(`

  EMail:`)),
        (u = m("b")),
        (v = c(_)),
        (D = S()),
        (M = m("br")),
        (A = S()),
        (n = m("a")),
        (O = c("View ")),
        (E = c(f)),
        (B = c(" Org Assets")),
        this.h();
    },
    l(o) {
      e = g(o, "MAIN", { class: !0 });
      var a = y(e);
      r = g(a, "H1", { class: !0 });
      var j = y(r);
      (l = h(j, s)),
        (k = h(j, " Org")),
        j.forEach(d),
        (w = h(
          a,
          `

  EMail:`
        )),
        (u = g(a, "B", {}));
      var H = y(u);
      (v = h(H, _)),
        H.forEach(d),
        (D = V(a)),
        (M = g(a, "BR", {})),
        (A = V(a)),
        (n = g(a, "A", { href: !0, class: !0 }));
      var b = y(n);
      (O = h(b, "View ")),
        (E = h(b, f)),
        (B = h(b, " Org Assets")),
        b.forEach(d),
        a.forEach(d),
        this.h();
    },
    h() {
      p(r, "class", "text-8xl svelte-1ggd7k"),
        p(n, "href", (N = i[0].Name + "/assets/")),
        p(n, "class", "svelte-1ggd7k"),
        p(e, "class", "svelte-1ggd7k");
    },
    m(o, a) {
      R(o, e, a),
        t(e, r),
        t(r, l),
        t(r, k),
        t(e, w),
        t(e, u),
        t(u, v),
        t(e, D),
        t(e, M),
        t(e, A),
        t(e, n),
        t(n, O),
        t(n, E),
        t(n, B);
    },
    p(o, [a]) {
      a & 1 && s !== (s = o[0].DisplayName + "") && C(l, s),
        a & 1 && _ !== (_ = o[0].EMail + "") && C(v, _),
        a & 1 && f !== (f = o[0].DisplayName + "") && C(E, f),
        a & 1 && N !== (N = o[0].Name + "/assets/") && p(n, "href", N);
    },
    i: $,
    o: $,
    d(o) {
      o && d(e);
    },
  };
}
async function G({ params: i, fetch: e, session: r }) {
  const s = `http://localhost:5000/v1/o/${i.name}`,
    l = await e(s);
  return l.ok
    ? { props: { org: await l.json() } }
    : { status: l.status, error: new Error(`Could not load ${s}`) };
}
function z(i, e, r) {
  let { org: s } = e;
  return (
    (i.$$set = (l) => {
      "org" in l && r(0, (s = l.org));
    }),
    [s]
  );
}
class J extends q {
  constructor(e) {
    super(), x(this, e, z, U, I, { org: 0 });
  }
}
export { J as default, G as load };
