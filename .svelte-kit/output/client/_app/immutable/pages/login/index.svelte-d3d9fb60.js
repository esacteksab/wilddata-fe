import {
  S as W,
  i as X,
  s as Y,
  e as o,
  t as j,
  k as N,
  c as i,
  a as c,
  h as k,
  d as u,
  m as x,
  b as a,
  g as Z,
  H as e,
  N as A,
  O as H,
  n as J,
  P as ee,
  x as te,
  y as se,
  z as ae,
  r as ne,
  p as re,
  C as le,
} from "../../chunks/index-f46c38f0.js";
function oe(v) {
  let s, l, t, n, r, h, m, d, g, b, O, T, f, U, y, $, D, V, p, B, w, M, C, q;
  return {
    c() {
      (s = o("main")),
        (l = o("form")),
        (t = o("div")),
        (n = o("h2")),
        (r = j("Log In!")),
        (h = N()),
        (m = o("div")),
        (d = o("div")),
        (g = o("label")),
        (b = o("span")),
        (O = j("User name")),
        (T = N()),
        (f = o("input")),
        (U = N()),
        (y = o("label")),
        ($ = o("span")),
        (D = j("Password")),
        (V = N()),
        (p = o("input")),
        (B = N()),
        (w = o("button")),
        (M = j("Submit")),
        this.h();
    },
    l(_) {
      s = i(_, "MAIN", {});
      var E = c(s);
      l = i(E, "FORM", {});
      var z = c(l);
      t = i(z, "DIV", { class: !0 });
      var L = c(t);
      n = i(L, "H2", { class: !0 });
      var F = c(n);
      (r = k(F, "Log In!")),
        F.forEach(u),
        (h = x(L)),
        (m = i(L, "DIV", { class: !0 }));
      var R = c(m);
      d = i(R, "DIV", { class: !0 });
      var I = c(d);
      g = i(I, "LABEL", { class: !0 });
      var P = c(g);
      b = i(P, "SPAN", { class: !0 });
      var G = c(b);
      (O = k(G, "User name")),
        G.forEach(u),
        (T = x(P)),
        (f = i(P, "INPUT", { type: !0, id: !0, name: !0, class: !0 })),
        P.forEach(u),
        (U = x(I)),
        (y = i(I, "LABEL", { class: !0 }));
      var S = c(y);
      $ = i(S, "SPAN", { class: !0 });
      var K = c($);
      (D = k(K, "Password")),
        K.forEach(u),
        (V = x(S)),
        (p = i(S, "INPUT", { type: !0, id: !0, name: !0, class: !0 })),
        S.forEach(u),
        (B = x(I)),
        (w = i(I, "BUTTON", { type: !0 }));
      var Q = c(w);
      (M = k(Q, "Submit")),
        Q.forEach(u),
        I.forEach(u),
        R.forEach(u),
        L.forEach(u),
        z.forEach(u),
        E.forEach(u),
        this.h();
    },
    h() {
      a(n, "class", "text-2xl font-bold justify-self-center text-orange-500"),
        a(b, "class", "text-orange-500"),
        a(f, "type", "text"),
        a(f, "id", "username"),
        a(f, "name", "username"),
        a(
          f,
          "class",
          "mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-300"
        ),
        a(g, "class", "block"),
        a($, "class", "text-orange-500"),
        a(p, "type", "password"),
        a(p, "id", "password"),
        a(p, "name", "password"),
        a(
          p,
          "class",
          "mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-300"
        ),
        a(y, "class", "block"),
        a(w, "type", "button"),
        a(d, "class", "grid justify-self-center gap-6"),
        a(m, "class", "mt-8 max-w-md justify-self-center"),
        a(t, "class", "grid justify-items-stretch text-orange-500");
    },
    m(_, E) {
      Z(_, s, E),
        e(s, l),
        e(l, t),
        e(t, n),
        e(n, r),
        e(t, h),
        e(t, m),
        e(m, d),
        e(d, g),
        e(g, b),
        e(b, O),
        e(g, T),
        e(g, f),
        A(f, v[0]),
        e(d, U),
        e(d, y),
        e(y, $),
        e($, D),
        e(y, V),
        e(y, p),
        A(p, v[1]),
        e(d, B),
        e(d, w),
        e(w, M),
        C ||
          ((q = [
            H(f, "input", v[3]),
            H(p, "input", v[4]),
            H(w, "click", v[2]),
          ]),
          (C = !0));
    },
    p(_, [E]) {
      E & 1 && f.value !== _[0] && A(f, _[0]),
        E & 2 && p.value !== _[1] && A(p, _[1]);
    },
    i: J,
    o: J,
    d(_) {
      _ && u(s), (C = !1), ee(q);
    },
  };
}
let ie = "",
  ue = "",
  ce = "";
function de(v, s, l) {
  let t = "",
    n = "",
    r = null;
  async function h() {
    const b = await (
      await fetch("http://localhost:5000/v1/users", {
        method: "POST",
        body: JSON.stringify({
          username: t,
          email: ie,
          cemail: ue,
          password: n,
          cpassword: ce,
        }),
      })
    ).json();
    (r = JSON.stringify(b)), console.log(r);
  }
  function m() {
    (t = this.value), l(0, t);
  }
  function d() {
    (n = this.value), l(1, n);
  }
  return [t, n, h, m, d];
}
class me extends W {
  constructor(s) {
    super(), X(this, s, de, oe, Y, {});
  }
}
function fe(v) {
  let s, l, t, n;
  return (
    (t = new me({ props: { name: "Login" } })),
    {
      c() {
        (s = o("main")), (l = o("div")), te(t.$$.fragment), this.h();
      },
      l(r) {
        s = i(r, "MAIN", {});
        var h = c(s);
        l = i(h, "DIV", { class: !0 });
        var m = c(l);
        se(t.$$.fragment, m), m.forEach(u), h.forEach(u), this.h();
      },
      h() {
        a(l, "class", "container mx-auto");
      },
      m(r, h) {
        Z(r, s, h), e(s, l), ae(t, l, null), (n = !0);
      },
      p: J,
      i(r) {
        n || (ne(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        re(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        r && u(s), le(t);
      },
    }
  );
}
class he extends W {
  constructor(s) {
    super(), X(this, s, null, fe, Y, {});
  }
}
export { he as default };
