import { getCurrentScope as Pr, onScopeDispose as Ir, unref as c, watch as k, defineComponent as O, openBlock as I, createElementBlock as R, createElementVNode as G, warn as $r, getCurrentInstance as Ge, inject as H, ref as S, computed as b, onMounted as _e, shallowRef as Sr, onBeforeUnmount as me, onBeforeMount as xr, provide as V, mergeProps as ge, renderSlot as F, normalizeClass as Q, normalizeStyle as xt, withDirectives as At, cloneVNode as Ar, Fragment as vt, Text as Nr, Comment as Fr, createVNode as te, createBlock as X, withCtx as K, createCommentVNode as fe, nextTick as kn, toRef as ze, Teleport as Rr, Transition as Io, vShow as Qt, readonly as Br, onDeactivated as kr, toDisplayString as ye, toHandlers as jr, withKeys as Lr, withModifiers as $o, createTextVNode as Nt, useSlots as Xt, resolveComponent as Dr, renderList as Ve, useAttrs as So, createSlots as xo } from "vue";
const de = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const s = e == null ? void 0 : e(o);
  if (n === !1 || !s)
    return t == null ? void 0 : t(o);
};
var jn;
const se = typeof window < "u", Mr = (e) => typeof e == "string", Ao = () => {
}, Hr = se && ((jn = window == null ? void 0 : window.navigator) == null ? void 0 : jn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function No(e) {
  return typeof e == "function" ? e() : c(e);
}
function Kr(e) {
  return e;
}
function Fo(e) {
  return Pr() ? (Ir(e), !0) : !1;
}
function Te(e) {
  var t;
  const n = No(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ro = se ? window : void 0;
function Kt(...e) {
  let t, n, r, o;
  if (Mr(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ro) : [t, n, r, o] = e, !t)
    return Ao;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], a = () => {
    s.forEach((f) => f()), s.length = 0;
  }, i = (f, h, m, y) => (f.addEventListener(h, m, y), () => f.removeEventListener(h, m, y)), l = k(() => [Te(t), No(o)], ([f, h]) => {
    a(), f && s.push(...n.flatMap((m) => r.map((y) => i(f, m, y, h))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return Fo(u), u;
}
let Ln = !1;
function Ur(e, t, n = {}) {
  const { window: r = Ro, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!r)
    return;
  Hr && !Ln && (Ln = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Ao)));
  let i = !0;
  const l = (m) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((p) => p === m.target || m.composedPath().includes(p));
    {
      const p = Te(y);
      return p && (m.target === p || m.composedPath().includes(p));
    }
  }), f = [
    Kt(r, "click", (m) => {
      const y = Te(e);
      if (!(!y || y === m.target || m.composedPath().includes(y))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: s }),
    Kt(r, "pointerdown", (m) => {
      const y = Te(e);
      y && (i = !m.composedPath().includes(y) && !l(m));
    }, { passive: !0 }),
    a && Kt(r, "blur", (m) => {
      var y;
      const p = Te(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(p != null && p.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
const Dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mn = "__vueuse_ssr_handlers__";
Dn[Mn] = Dn[Mn] || {};
var Hn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Hn || (Hn = {}));
var zr = Object.defineProperty, Kn = Object.getOwnPropertySymbols, Vr = Object.prototype.hasOwnProperty, Wr = Object.prototype.propertyIsEnumerable, Un = (e, t, n) => t in e ? zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jr = (e, t) => {
  for (var n in t || (t = {}))
    Vr.call(t, n) && Un(e, n, t[n]);
  if (Kn)
    for (var n of Kn(t))
      Wr.call(t, n) && Un(e, n, t[n]);
  return e;
};
const qr = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Jr({
  linear: Kr
}, qr);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ot = () => {
}, Gr = Object.prototype.hasOwnProperty, zn = (e, t) => Gr.call(e, t), Bo = Array.isArray, ct = (e) => typeof e == "function", tt = (e) => typeof e == "string", en = (e) => e !== null && typeof e == "object";
var Zr = typeof global == "object" && global && global.Object === Object && global;
const Yr = Zr;
var Qr = typeof self == "object" && self && self.Object === Object && self, Xr = Yr || Qr || Function("return this")();
const tn = Xr;
var es = tn.Symbol;
const be = es;
var ko = Object.prototype, ts = ko.hasOwnProperty, ns = ko.toString, Ke = be ? be.toStringTag : void 0;
function os(e) {
  var t = ts.call(e, Ke), n = e[Ke];
  try {
    e[Ke] = void 0;
    var r = !0;
  } catch {
  }
  var o = ns.call(e);
  return r && (t ? e[Ke] = n : delete e[Ke]), o;
}
var rs = Object.prototype, ss = rs.toString;
function as(e) {
  return ss.call(e);
}
var is = "[object Null]", ls = "[object Undefined]", Vn = be ? be.toStringTag : void 0;
function nn(e) {
  return e == null ? e === void 0 ? ls : is : Vn && Vn in Object(e) ? os(e) : as(e);
}
function on(e) {
  return e != null && typeof e == "object";
}
var cs = "[object Symbol]";
function rn(e) {
  return typeof e == "symbol" || on(e) && nn(e) == cs;
}
function us(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ps = Array.isArray;
const Le = ps;
var ds = 1 / 0, Wn = be ? be.prototype : void 0, Jn = Wn ? Wn.toString : void 0;
function jo(e) {
  if (typeof e == "string")
    return e;
  if (Le(e))
    return us(e, jo) + "";
  if (rn(e))
    return Jn ? Jn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ds ? "-0" : t;
}
function Tt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function fs(e) {
  return e;
}
var vs = "[object AsyncFunction]", ms = "[object Function]", gs = "[object GeneratorFunction]", hs = "[object Proxy]";
function ys(e) {
  if (!Tt(e))
    return !1;
  var t = nn(e);
  return t == ms || t == gs || t == vs || t == hs;
}
var bs = tn["__core-js_shared__"];
const Ut = bs;
var qn = function() {
  var e = /[^.]+$/.exec(Ut && Ut.keys && Ut.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _s(e) {
  return !!qn && qn in e;
}
var ws = Function.prototype, Es = ws.toString;
function Cs(e) {
  if (e != null) {
    try {
      return Es.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Os = /[\\^$.*+?()[\]{}|]/g, Ts = /^\[object .+?Constructor\]$/, Ps = Function.prototype, Is = Object.prototype, $s = Ps.toString, Ss = Is.hasOwnProperty, xs = RegExp(
  "^" + $s.call(Ss).replace(Os, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function As(e) {
  if (!Tt(e) || _s(e))
    return !1;
  var t = ys(e) ? xs : Ts;
  return t.test(Cs(e));
}
function Ns(e, t) {
  return e == null ? void 0 : e[t];
}
function sn(e, t) {
  var n = Ns(e, t);
  return As(n) ? n : void 0;
}
function Fs(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Rs = 800, Bs = 16, ks = Date.now;
function js(e) {
  var t = 0, n = 0;
  return function() {
    var r = ks(), o = Bs - (r - n);
    if (n = r, o > 0) {
      if (++t >= Rs)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ls(e) {
  return function() {
    return e;
  };
}
var Ds = function() {
  try {
    var e = sn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Pt = Ds;
var Ms = Pt ? function(e, t) {
  return Pt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ls(t),
    writable: !0
  });
} : fs;
const Hs = Ms;
var Ks = js(Hs);
const Us = Ks;
var zs = 9007199254740991, Vs = /^(?:0|[1-9]\d*)$/;
function Lo(e, t) {
  var n = typeof e;
  return t = t ?? zs, !!t && (n == "number" || n != "symbol" && Vs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ws(e, t, n) {
  t == "__proto__" && Pt ? Pt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Do(e, t) {
  return e === t || e !== e && t !== t;
}
var Js = Object.prototype, qs = Js.hasOwnProperty;
function Gs(e, t, n) {
  var r = e[t];
  (!(qs.call(e, t) && Do(r, n)) || n === void 0 && !(t in e)) && Ws(e, t, n);
}
var Gn = Math.max;
function Zs(e, t, n) {
  return t = Gn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = Gn(r.length - t, 0), a = Array(s); ++o < s; )
      a[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(a), Fs(e, this, i);
  };
}
var Ys = 9007199254740991;
function Qs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ys;
}
var Xs = "[object Arguments]";
function Zn(e) {
  return on(e) && nn(e) == Xs;
}
var Mo = Object.prototype, ea = Mo.hasOwnProperty, ta = Mo.propertyIsEnumerable, na = Zn(function() {
  return arguments;
}()) ? Zn : function(e) {
  return on(e) && ea.call(e, "callee") && !ta.call(e, "callee");
};
const Ho = na;
var oa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ra = /^\w*$/;
function sa(e, t) {
  if (Le(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || rn(e) ? !0 : ra.test(e) || !oa.test(e) || t != null && e in Object(t);
}
var aa = sn(Object, "create");
const Ze = aa;
function ia() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function la(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ca = "__lodash_hash_undefined__", ua = Object.prototype, pa = ua.hasOwnProperty;
function da(e) {
  var t = this.__data__;
  if (Ze) {
    var n = t[e];
    return n === ca ? void 0 : n;
  }
  return pa.call(t, e) ? t[e] : void 0;
}
var fa = Object.prototype, va = fa.hasOwnProperty;
function ma(e) {
  var t = this.__data__;
  return Ze ? t[e] !== void 0 : va.call(t, e);
}
var ga = "__lodash_hash_undefined__";
function ha(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ze && t === void 0 ? ga : t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ie.prototype.clear = ia;
Ie.prototype.delete = la;
Ie.prototype.get = da;
Ie.prototype.has = ma;
Ie.prototype.set = ha;
function ya() {
  this.__data__ = [], this.size = 0;
}
function Ft(e, t) {
  for (var n = e.length; n--; )
    if (Do(e[n][0], t))
      return n;
  return -1;
}
var ba = Array.prototype, _a = ba.splice;
function wa(e) {
  var t = this.__data__, n = Ft(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : _a.call(t, n, 1), --this.size, !0;
}
function Ea(e) {
  var t = this.__data__, n = Ft(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ca(e) {
  return Ft(this.__data__, e) > -1;
}
function Oa(e, t) {
  var n = this.__data__, r = Ft(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function De(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
De.prototype.clear = ya;
De.prototype.delete = wa;
De.prototype.get = Ea;
De.prototype.has = Ca;
De.prototype.set = Oa;
var Ta = sn(tn, "Map");
const Pa = Ta;
function Ia() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (Pa || De)(),
    string: new Ie()
  };
}
function $a(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Rt(e, t) {
  var n = e.__data__;
  return $a(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Sa(e) {
  var t = Rt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xa(e) {
  return Rt(this, e).get(e);
}
function Aa(e) {
  return Rt(this, e).has(e);
}
function Na(e, t) {
  var n = Rt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function $e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
$e.prototype.clear = Ia;
$e.prototype.delete = Sa;
$e.prototype.get = xa;
$e.prototype.has = Aa;
$e.prototype.set = Na;
var Fa = "Expected a function";
function an(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fa);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, r);
    return n.cache = s.set(o, a) || s, a;
  };
  return n.cache = new (an.Cache || $e)(), n;
}
an.Cache = $e;
var Ra = 500;
function Ba(e) {
  var t = an(e, function(r) {
    return n.size === Ra && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ka = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ja = /\\(\\)?/g, La = Ba(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ka, function(n, r, o, s) {
    t.push(o ? s.replace(ja, "$1") : r || n);
  }), t;
});
const Da = La;
function Ma(e) {
  return e == null ? "" : jo(e);
}
function Bt(e, t) {
  return Le(e) ? e : sa(e, t) ? [e] : Da(Ma(e));
}
var Ha = 1 / 0;
function ln(e) {
  if (typeof e == "string" || rn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ha ? "-0" : t;
}
function Ka(e, t) {
  t = Bt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ln(t[n++])];
  return n && n == r ? e : void 0;
}
function Ua(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Yn = be ? be.isConcatSpreadable : void 0;
function za(e) {
  return Le(e) || Ho(e) || !!(Yn && e && e[Yn]);
}
function Ko(e, t, n, r, o) {
  var s = -1, a = e.length;
  for (n || (n = za), o || (o = []); ++s < a; ) {
    var i = e[s];
    t > 0 && n(i) ? t > 1 ? Ko(i, t - 1, n, r, o) : Ua(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function Va(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ko(e, 1) : [];
}
function Wa(e) {
  return Us(Zs(e, void 0, Va), e + "");
}
function Qn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Le(e) ? e : [e];
}
function Ja(e, t) {
  return e != null && t in Object(e);
}
function qa(e, t, n) {
  t = Bt(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var a = ln(t[r]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && Qs(o) && Lo(a, o) && (Le(e) || Ho(e)));
}
function Ga(e, t) {
  return e != null && qa(e, t, Ja);
}
function Gt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function cn(e) {
  return e == null;
}
function Za(e) {
  return e === void 0;
}
function Ya(e, t, n, r) {
  if (!Tt(e))
    return e;
  t = Bt(t, e);
  for (var o = -1, s = t.length, a = s - 1, i = e; i != null && ++o < s; ) {
    var l = ln(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != a) {
      var f = i[l];
      u = r ? r(f, l, i) : void 0, u === void 0 && (u = Tt(f) ? f : Lo(t[o + 1]) ? [] : {});
    }
    Gs(i, l, u), i = i[l];
  }
  return e;
}
function Qa(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var a = t[r], i = Ka(e, a);
    n(i, a) && Ya(s, Bt(a, e), i);
  }
  return s;
}
function Xa(e, t) {
  return Qa(e, t, function(n, r) {
    return Ga(e, r);
  });
}
var ei = Wa(function(e, t) {
  return e == null ? {} : Xa(e, t);
});
const ti = ei, ni = (e) => e === void 0, un = (e) => typeof e == "boolean", Ne = (e) => typeof e == "number", It = (e) => typeof Element > "u" ? !1 : e instanceof Element, oi = (e) => tt(e) ? !Number.isNaN(Number(e)) : !1;
class ri extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ye(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = tt(e) ? new ri(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const si = "utils/dom/style";
function Uo(e, t = "px") {
  if (!e)
    return "";
  if (Ne(e) || oi(e))
    return `${e}${t}`;
  if (tt(e))
    return e;
  Ye(si, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var ai = /* @__PURE__ */ O({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (I(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      G("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), ii = ai, li = /* @__PURE__ */ O({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, n) => (I(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      G("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), ci = li;
const zo = "__epPropKey", A = (e) => e, ui = (e) => en(e) && !!e[zo], pn = (e, t) => {
  if (!en(e) || ui(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: a } = e, l = {
    type: s,
    required: !!r,
    validator: n || a ? (u) => {
      let f = !1, h = [];
      if (n && (h = Array.from(n), zn(e, "default") && h.push(o), f || (f = h.includes(u))), a && (f || (f = a(u))), !f && h.length > 0) {
        const m = [...new Set(h)].map((y) => JSON.stringify(y)).join(", ");
        $r(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [zo]: !0
  };
  return zn(e, "default") && (l.default = o), l;
}, U = (e) => Gt(Object.entries(e).map(([t, n]) => [
  t,
  pn(n, t)
])), pi = A([
  String,
  Object,
  Function
]), nt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, di = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), fi = (e) => (e.install = Ot, e), $t = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Vo = "update:modelValue", Wo = "change", vi = (e) => e, zt = "el", mi = "is-", Oe = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, gi = Symbol("namespaceContextKey"), dn = (e) => {
  const t = e || (Ge() ? H(gi, S(zt)) : S(zt));
  return b(() => c(t) || zt);
}, ae = (e, t) => {
  const n = dn(t);
  return {
    namespace: n,
    b: (d = "") => Oe(n.value, e, d, "", ""),
    e: (d) => d ? Oe(n.value, e, "", d, "") : "",
    m: (d) => d ? Oe(n.value, e, "", "", d) : "",
    be: (d, g) => d && g ? Oe(n.value, e, d, g, "") : "",
    em: (d, g) => d && g ? Oe(n.value, e, "", d, g) : "",
    bm: (d, g) => d && g ? Oe(n.value, e, d, "", g) : "",
    bem: (d, g, v) => d && g && v ? Oe(n.value, e, d, g, v) : "",
    is: (d, ...g) => {
      const v = g.length >= 1 ? g[0] : !0;
      return d && v ? `${mi}${d}` : "";
    },
    cssVar: (d) => {
      const g = {};
      for (const v in d)
        d[v] && (g[`--${n.value}-${v}`] = d[v]);
      return g;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const g = {};
      for (const v in d)
        d[v] && (g[`--${n.value}-${e}-${v}`] = d[v]);
      return g;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
}, hi = pn({
  type: A(Boolean),
  default: null
}), yi = pn({
  type: A(Function)
}), Jo = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: hi,
    [n]: yi
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: h
    }) => {
      const m = Ge(), { emit: y } = m, p = m.props, d = b(() => ct(p[n])), g = b(() => p[e] === null), v = (C) => {
        a.value !== !0 && (a.value = !0, i && (i.value = C), ct(f) && f(C));
      }, _ = (C) => {
        a.value !== !1 && (a.value = !1, i && (i.value = C), ct(h) && h(C));
      }, T = (C) => {
        if (p.disabled === !0 || ct(u) && !u())
          return;
        const $ = d.value && se;
        $ && y(t, !0), (g.value || !$) && v(C);
      }, w = (C) => {
        if (p.disabled === !0 || !se)
          return;
        const $ = d.value && se;
        $ && y(t, !1), (g.value || !$) && _(C);
      }, P = (C) => {
        un(C) && (p.disabled && C ? d.value && y(t, !1) : a.value !== C && (C ? v() : _()));
      }, x = () => {
        a.value ? w() : T();
      };
      return k(() => p[e], P), l && m.appContext.config.globalProperties.$route !== void 0 && k(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && a.value && w();
      }), _e(() => {
        P(p[e]);
      }), {
        hide: w,
        show: T,
        toggle: x,
        hasUpdateHandler: d
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
Jo("modelValue");
var Z = "top", oe = "bottom", re = "right", Y = "left", fn = "auto", ot = [Z, oe, re, Y], Fe = "start", Qe = "end", bi = "clippingParents", qo = "viewport", Ue = "popper", _i = "reference", Xn = ot.reduce(function(e, t) {
  return e.concat([t + "-" + Fe, t + "-" + Qe]);
}, []), vn = [].concat(ot, [fn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Fe, t + "-" + Qe]);
}, []), wi = "beforeRead", Ei = "read", Ci = "afterRead", Oi = "beforeMain", Ti = "main", Pi = "afterMain", Ii = "beforeWrite", $i = "write", Si = "afterWrite", xi = [wi, Ei, Ci, Oi, Ti, Pi, Ii, $i, Si];
function ue(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ie(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Re(e) {
  var t = ie(e).Element;
  return e instanceof t || e instanceof Element;
}
function ne(e) {
  var t = ie(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function mn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ai(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !ne(s) || !ue(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(a) {
      var i = o[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Ni(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ne(o) || !ue(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Go = { name: "applyStyles", enabled: !0, phase: "write", fn: Ai, effect: Ni, requires: ["computeStyles"] };
function ce(e) {
  return e.split("-")[0];
}
var Pe = Math.max, St = Math.min, Be = Math.round;
function ke(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (ne(e) && t) {
    var s = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (r = Be(n.width) / a || 1), s > 0 && (o = Be(n.height) / s || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function gn(e) {
  var t = ke(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Zo(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && mn(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ve(e) {
  return ie(e).getComputedStyle(e);
}
function Fi(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function we(e) {
  return ((Re(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function kt(e) {
  return ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (mn(e) ? e.host : null) || we(e);
}
function eo(e) {
  return !ne(e) || ve(e).position === "fixed" ? null : e.offsetParent;
}
function Ri(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ne(e)) {
    var r = ve(e);
    if (r.position === "fixed")
      return null;
  }
  var o = kt(e);
  for (mn(o) && (o = o.host); ne(o) && ["html", "body"].indexOf(ue(o)) < 0; ) {
    var s = ve(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function rt(e) {
  for (var t = ie(e), n = eo(e); n && Fi(n) && ve(n).position === "static"; )
    n = eo(n);
  return n && (ue(n) === "html" || ue(n) === "body" && ve(n).position === "static") ? t : n || Ri(e) || t;
}
function hn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function We(e, t, n) {
  return Pe(e, St(t, n));
}
function Bi(e, t, n) {
  var r = We(e, t, n);
  return r > n ? n : r;
}
function Yo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Qo(e) {
  return Object.assign({}, Yo(), e);
}
function Xo(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ki = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qo(typeof e != "number" ? e : Xo(e, ot));
};
function ji(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = ce(n.placement), l = hn(i), u = [Y, re].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!s || !a)) {
    var h = ki(o.padding, n), m = gn(s), y = l === "y" ? Z : Y, p = l === "y" ? oe : re, d = n.rects.reference[f] + n.rects.reference[l] - a[l] - n.rects.popper[f], g = a[l] - n.rects.reference[l], v = rt(s), _ = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, T = d / 2 - g / 2, w = h[y], P = _ - m[f] - h[p], x = _ / 2 - m[f] / 2 + T, C = We(w, x, P), $ = l;
    n.modifiersData[r] = (t = {}, t[$] = C, t.centerOffset = C - x, t);
  }
}
function Li(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Zo(t.elements.popper, o) || (t.elements.arrow = o));
}
var Di = { name: "arrow", enabled: !0, phase: "main", fn: ji, effect: Li, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function je(e) {
  return e.split("-")[1];
}
var Mi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hi(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Be(t * o) / o || 0, y: Be(n * o) / o || 0 };
}
function to(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, h = e.isFixed, m = a.x, y = m === void 0 ? 0 : m, p = a.y, d = p === void 0 ? 0 : p, g = typeof f == "function" ? f({ x: y, y: d }) : { x: y, y: d };
  y = g.x, d = g.y;
  var v = a.hasOwnProperty("x"), _ = a.hasOwnProperty("y"), T = Y, w = Z, P = window;
  if (u) {
    var x = rt(n), C = "clientHeight", $ = "clientWidth";
    if (x === ie(n) && (x = we(n), ve(x).position !== "static" && i === "absolute" && (C = "scrollHeight", $ = "scrollWidth")), x = x, o === Z || (o === Y || o === re) && s === Qe) {
      w = oe;
      var j = h && x === P && P.visualViewport ? P.visualViewport.height : x[C];
      d -= j - r.height, d *= l ? 1 : -1;
    }
    if (o === Y || (o === Z || o === oe) && s === Qe) {
      T = re;
      var N = h && x === P && P.visualViewport ? P.visualViewport.width : x[$];
      y -= N - r.width, y *= l ? 1 : -1;
    }
  }
  var L = Object.assign({ position: i }, u && Mi), B = f === !0 ? Hi({ x: y, y: d }) : { x: y, y: d };
  if (y = B.x, d = B.y, l) {
    var D;
    return Object.assign({}, L, (D = {}, D[w] = _ ? "0" : "", D[T] = v ? "0" : "", D.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + d + "px)" : "translate3d(" + y + "px, " + d + "px, 0)", D));
  }
  return Object.assign({}, L, (t = {}, t[w] = _ ? d + "px" : "", t[T] = v ? y + "px" : "", t.transform = "", t));
}
function Ki(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: ce(t.placement), variation: je(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, to(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, to(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var er = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ki, data: {} }, ut = { passive: !0 };
function Ui(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, a = r.resize, i = a === void 0 ? !0 : a, l = ie(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, ut);
  }), i && l.addEventListener("resize", n.update, ut), function() {
    s && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, ut);
    }), i && l.removeEventListener("resize", n.update, ut);
  };
}
var tr = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ui, data: {} }, zi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zi[t];
  });
}
var Vi = { start: "end", end: "start" };
function no(e) {
  return e.replace(/start|end/g, function(t) {
    return Vi[t];
  });
}
function yn(e) {
  var t = ie(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function bn(e) {
  return ke(we(e)).left + yn(e).scrollLeft;
}
function Wi(e) {
  var t = ie(e), n = we(e), r = t.visualViewport, o = n.clientWidth, s = n.clientHeight, a = 0, i = 0;
  return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, i = r.offsetTop)), { width: o, height: s, x: a + bn(e), y: i };
}
function Ji(e) {
  var t, n = we(e), r = yn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Pe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Pe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + bn(e), l = -r.scrollTop;
  return ve(o || n).direction === "rtl" && (i += Pe(n.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: a, x: i, y: l };
}
function _n(e) {
  var t = ve(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function nr(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : ne(e) && _n(e) ? e : nr(kt(e));
}
function Je(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = nr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ie(r), a = o ? [s].concat(s.visualViewport || [], _n(r) ? r : []) : r, i = t.concat(a);
  return o ? i : i.concat(Je(kt(a)));
}
function Zt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function qi(e) {
  var t = ke(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function oo(e, t) {
  return t === qo ? Zt(Wi(e)) : Re(t) ? qi(t) : Zt(Ji(we(e)));
}
function Gi(e) {
  var t = Je(kt(e)), n = ["absolute", "fixed"].indexOf(ve(e).position) >= 0, r = n && ne(e) ? rt(e) : e;
  return Re(r) ? t.filter(function(o) {
    return Re(o) && Zo(o, r) && ue(o) !== "body";
  }) : [];
}
function Zi(e, t, n) {
  var r = t === "clippingParents" ? Gi(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], a = o.reduce(function(i, l) {
    var u = oo(e, l);
    return i.top = Pe(u.top, i.top), i.right = St(u.right, i.right), i.bottom = St(u.bottom, i.bottom), i.left = Pe(u.left, i.left), i;
  }, oo(e, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function or(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ce(r) : null, s = r ? je(r) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Z:
      l = { x: a, y: t.y - n.height };
      break;
    case oe:
      l = { x: a, y: t.y + t.height };
      break;
    case re:
      l = { x: t.x + t.width, y: i };
      break;
    case Y:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? hn(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (s) {
      case Fe:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Qe:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function Xe(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, a = s === void 0 ? bi : s, i = n.rootBoundary, l = i === void 0 ? qo : i, u = n.elementContext, f = u === void 0 ? Ue : u, h = n.altBoundary, m = h === void 0 ? !1 : h, y = n.padding, p = y === void 0 ? 0 : y, d = Qo(typeof p != "number" ? p : Xo(p, ot)), g = f === Ue ? _i : Ue, v = e.rects.popper, _ = e.elements[m ? g : f], T = Zi(Re(_) ? _ : _.contextElement || we(e.elements.popper), a, l), w = ke(e.elements.reference), P = or({ reference: w, element: v, strategy: "absolute", placement: o }), x = Zt(Object.assign({}, v, P)), C = f === Ue ? x : w, $ = { top: T.top - C.top + d.top, bottom: C.bottom - T.bottom + d.bottom, left: T.left - C.left + d.left, right: C.right - T.right + d.right }, j = e.modifiersData.offset;
  if (f === Ue && j) {
    var N = j[o];
    Object.keys($).forEach(function(L) {
      var B = [re, oe].indexOf(L) >= 0 ? 1 : -1, D = [Z, oe].indexOf(L) >= 0 ? "y" : "x";
      $[L] += N[D] * B;
    });
  }
  return $;
}
function Yi(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? vn : l, f = je(r), h = f ? i ? Xn : Xn.filter(function(p) {
    return je(p) === f;
  }) : ot, m = h.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  m.length === 0 && (m = h);
  var y = m.reduce(function(p, d) {
    return p[d] = Xe(e, { placement: d, boundary: o, rootBoundary: s, padding: a })[ce(d)], p;
  }, {});
  return Object.keys(y).sort(function(p, d) {
    return y[p] - y[d];
  });
}
function Qi(e) {
  if (ce(e) === fn)
    return [];
  var t = mt(e);
  return [no(e), t, no(t)];
}
function Xi(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, f = n.boundary, h = n.rootBoundary, m = n.altBoundary, y = n.flipVariations, p = y === void 0 ? !0 : y, d = n.allowedAutoPlacements, g = t.options.placement, v = ce(g), _ = v === g, T = l || (_ || !p ? [mt(g)] : Qi(g)), w = [g].concat(T).reduce(function(Ee, pe) {
      return Ee.concat(ce(pe) === fn ? Yi(t, { placement: pe, boundary: f, rootBoundary: h, padding: u, flipVariations: p, allowedAutoPlacements: d }) : pe);
    }, []), P = t.rects.reference, x = t.rects.popper, C = /* @__PURE__ */ new Map(), $ = !0, j = w[0], N = 0; N < w.length; N++) {
      var L = w[N], B = ce(L), D = je(L) === Fe, J = [Z, oe].indexOf(B) >= 0, z = J ? "width" : "height", M = Xe(t, { placement: L, boundary: f, rootBoundary: h, altBoundary: m, padding: u }), E = J ? D ? re : Y : D ? oe : Z;
      P[z] > x[z] && (E = mt(E));
      var q = mt(E), le = [];
      if (s && le.push(M[B] <= 0), i && le.push(M[E] <= 0, M[q] <= 0), le.every(function(Ee) {
        return Ee;
      })) {
        j = L, $ = !1;
        break;
      }
      C.set(L, le);
    }
    if ($)
      for (var st = p ? 3 : 1, Dt = function(Ee) {
        var pe = w.find(function(it) {
          var He = C.get(it);
          if (He)
            return He.slice(0, Ee).every(function(Se) {
              return Se;
            });
        });
        if (pe)
          return j = pe, "break";
      }, Me = st; Me > 0; Me--) {
        var at = Dt(Me);
        if (at === "break")
          break;
      }
    t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0);
  }
}
var el = { name: "flip", enabled: !0, phase: "main", fn: Xi, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ro(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function so(e) {
  return [Z, re, oe, Y].some(function(t) {
    return e[t] >= 0;
  });
}
function tl(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = Xe(t, { elementContext: "reference" }), i = Xe(t, { altBoundary: !0 }), l = ro(a, r), u = ro(i, o, s), f = so(l), h = so(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: h }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": h });
}
var nl = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: tl };
function ol(e, t, n) {
  var r = ce(e), o = [Y, Z].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * o, [Y, re].indexOf(r) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function rl(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, a = vn.reduce(function(f, h) {
    return f[h] = ol(h, t.rects, s), f;
  }, {}), i = a[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
var sl = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: rl };
function al(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = or({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var rr = { name: "popperOffsets", enabled: !0, phase: "read", fn: al, data: {} };
function il(e) {
  return e === "x" ? "y" : "x";
}
function ll(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, h = n.padding, m = n.tether, y = m === void 0 ? !0 : m, p = n.tetherOffset, d = p === void 0 ? 0 : p, g = Xe(t, { boundary: l, rootBoundary: u, padding: h, altBoundary: f }), v = ce(t.placement), _ = je(t.placement), T = !_, w = hn(v), P = il(w), x = t.modifiersData.popperOffsets, C = t.rects.reference, $ = t.rects.popper, j = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, N = typeof j == "number" ? { mainAxis: j, altAxis: j } : Object.assign({ mainAxis: 0, altAxis: 0 }, j), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (x) {
    if (s) {
      var D, J = w === "y" ? Z : Y, z = w === "y" ? oe : re, M = w === "y" ? "height" : "width", E = x[w], q = E + g[J], le = E - g[z], st = y ? -$[M] / 2 : 0, Dt = _ === Fe ? C[M] : $[M], Me = _ === Fe ? -$[M] : -C[M], at = t.elements.arrow, Ee = y && at ? gn(at) : { width: 0, height: 0 }, pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Yo(), it = pe[J], He = pe[z], Se = We(0, C[M], Ee[M]), br = T ? C[M] / 2 - st - Se - it - N.mainAxis : Dt - Se - it - N.mainAxis, _r = T ? -C[M] / 2 + st + Se + He + N.mainAxis : Me + Se + He + N.mainAxis, Mt = t.elements.arrow && rt(t.elements.arrow), wr = Mt ? w === "y" ? Mt.clientTop || 0 : Mt.clientLeft || 0 : 0, In = (D = L == null ? void 0 : L[w]) != null ? D : 0, Er = E + br - In - wr, Cr = E + _r - In, $n = We(y ? St(q, Er) : q, E, y ? Pe(le, Cr) : le);
      x[w] = $n, B[w] = $n - E;
    }
    if (i) {
      var Sn, Or = w === "x" ? Z : Y, Tr = w === "x" ? oe : re, Ce = x[P], lt = P === "y" ? "height" : "width", xn = Ce + g[Or], An = Ce - g[Tr], Ht = [Z, Y].indexOf(v) !== -1, Nn = (Sn = L == null ? void 0 : L[P]) != null ? Sn : 0, Fn = Ht ? xn : Ce - C[lt] - $[lt] - Nn + N.altAxis, Rn = Ht ? Ce + C[lt] + $[lt] - Nn - N.altAxis : An, Bn = y && Ht ? Bi(Fn, Ce, Rn) : We(y ? Fn : xn, Ce, y ? Rn : An);
      x[P] = Bn, B[P] = Bn - Ce;
    }
    t.modifiersData[r] = B;
  }
}
var cl = { name: "preventOverflow", enabled: !0, phase: "main", fn: ll, requiresIfExists: ["offset"] };
function ul(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function pl(e) {
  return e === ie(e) || !ne(e) ? yn(e) : ul(e);
}
function dl(e) {
  var t = e.getBoundingClientRect(), n = Be(t.width) / e.offsetWidth || 1, r = Be(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fl(e, t, n) {
  n === void 0 && (n = !1);
  var r = ne(t), o = ne(t) && dl(t), s = we(t), a = ke(e, o), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((ue(t) !== "body" || _n(s)) && (i = pl(t)), ne(t) ? (l = ke(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = bn(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
}
function vl(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || o(s);
  }), r;
}
function ml(e) {
  var t = vl(e);
  return xi.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function gl(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function hl(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ao = { placement: "bottom", modifiers: [], strategy: "absolute" };
function io() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function wn(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? ao : o;
  return function(a, i, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ao, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, f = [], h = !1, m = { state: u, setOptions: function(d) {
      var g = typeof d == "function" ? d(u.options) : d;
      p(), u.options = Object.assign({}, s, u.options, g), u.scrollParents = { reference: Re(a) ? Je(a) : a.contextElement ? Je(a.contextElement) : [], popper: Je(i) };
      var v = ml(hl([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = v.filter(function(_) {
        return _.enabled;
      }), y(), m.update();
    }, forceUpdate: function() {
      if (!h) {
        var d = u.elements, g = d.reference, v = d.popper;
        if (io(g, v)) {
          u.rects = { reference: fl(g, rt(v), u.options.strategy === "fixed"), popper: gn(v) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var _ = 0; _ < u.orderedModifiers.length; _++) {
            if (u.reset === !0) {
              u.reset = !1, _ = -1;
              continue;
            }
            var T = u.orderedModifiers[_], w = T.fn, P = T.options, x = P === void 0 ? {} : P, C = T.name;
            typeof w == "function" && (u = w({ state: u, options: x, name: C, instance: m }) || u);
          }
        }
      }
    }, update: gl(function() {
      return new Promise(function(d) {
        m.forceUpdate(), d(u);
      });
    }), destroy: function() {
      p(), h = !0;
    } };
    if (!io(a, i))
      return m;
    m.setOptions(l).then(function(d) {
      !h && l.onFirstUpdate && l.onFirstUpdate(d);
    });
    function y() {
      u.orderedModifiers.forEach(function(d) {
        var g = d.name, v = d.options, _ = v === void 0 ? {} : v, T = d.effect;
        if (typeof T == "function") {
          var w = T({ state: u, name: g, instance: m, options: _ }), P = function() {
          };
          f.push(w || P);
        }
      });
    }
    function p() {
      f.forEach(function(d) {
        return d();
      }), f = [];
    }
    return m;
  };
}
wn();
var yl = [tr, rr, er, Go];
wn({ defaultModifiers: yl });
var bl = [tr, rr, er, Go, sl, el, cl, Di, nl], _l = wn({ defaultModifiers: bl });
const wl = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = El(l);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, o = b(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: h } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...h || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Sr(), a = S({
    styles: {
      popper: {
        position: c(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return k(o, (l) => {
    const u = c(s);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), k([e, t], ([l, u]) => {
    i(), !(!l || !u) && (s.value = _l(l, u, c(o)));
  }), me(() => {
    i();
  }), {
    state: b(() => {
      var l;
      return { ...((l = c(s)) == null ? void 0 : l.state) || {} };
    }),
    styles: b(() => c(a).styles),
    attributes: b(() => c(a).attributes),
    update: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: b(() => c(s))
  };
};
function El(e) {
  const t = Object.keys(e.elements), n = Gt(t.map((o) => [o, e.styles[o] || {}])), r = Gt(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function lo() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Fo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Yt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Cl = Symbol("elIdInjection"), En = () => Ge() ? H(Cl, Yt) : Yt, Ol = (e) => {
  const t = En();
  !se && t === Yt && Ye("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = dn();
  return b(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Ae = [];
const co = (e) => {
  const t = e;
  t.key === $t.esc && Ae.forEach((n) => n(t));
}, Tl = (e) => {
  _e(() => {
    Ae.length === 0 && document.addEventListener("keydown", co), se && Ae.push(e);
  }), me(() => {
    Ae = Ae.filter((t) => t !== e), Ae.length === 0 && se && document.removeEventListener("keydown", co);
  });
};
let uo;
const sr = () => {
  const e = dn(), t = En(), n = b(() => `${e.value}-popper-container-${t.prefix}`), r = b(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Pl = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Il = () => {
  const { id: e, selector: t } = sr();
  return xr(() => {
    se && (process.env.NODE_ENV === "test" || !uo && !document.body.querySelector(t.value)) && (uo = Pl(e.value));
  }), {
    id: e,
    selector: t
  };
}, $l = U({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), Sl = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: s } = lo(), {
    registerTimeout: a,
    cancelTimeout: i
  } = lo();
  return {
    onOpen: (f) => {
      s(() => {
        r(f);
        const h = c(n);
        Ne(h) && h > 0 && a(() => {
          o(f);
        }, h);
      }, c(e));
    },
    onClose: (f) => {
      i(), s(() => {
        o(f);
      }, c(t));
    }
  };
}, ar = Symbol("elForwardRef"), xl = (e) => {
  V(ar, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Al = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), po = {
  current: 0
}, fo = S(0), Nl = 2e3, vo = Symbol("elZIndexContextKey"), Fl = Symbol("zIndexContextKey"), Rl = (e) => {
  const t = Ge() ? H(vo, po) : po, n = e || (Ge() ? H(Fl, void 0) : void 0), r = b(() => {
    const a = c(n);
    return Ne(a) ? a : Nl;
  }), o = b(() => r.value + fo.value), s = () => (t.current++, fo.value = t.current, o.value);
  return !se && !H(vo) && Ye("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: s
  };
}, Bl = U({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), ir = (e) => ti(Bl, e);
var W = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const kl = U({
  size: {
    type: A([Number, String])
  },
  color: {
    type: String
  }
}), jl = O({
  name: "ElIcon",
  inheritAttrs: !1
}), Ll = /* @__PURE__ */ O({
  ...jl,
  props: kl,
  setup(e) {
    const t = e, n = ae("icon"), r = b(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: ni(o) ? void 0 : Uo(o),
        "--color": s
      };
    });
    return (o, s) => (I(), R("i", ge({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      F(o.$slots, "default")
    ], 16));
  }
});
var Dl = /* @__PURE__ */ W(Ll, [["__file", "icon.vue"]]);
const lr = nt(Dl), mo = Symbol("formItemContextKey"), Cn = Symbol("popper"), cr = Symbol("popperContent"), Ml = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ur = U({
  role: {
    type: String,
    values: Ml,
    default: "tooltip"
  }
}), Hl = O({
  name: "ElPopper",
  inheritAttrs: !1
}), Kl = /* @__PURE__ */ O({
  ...Hl,
  props: ur,
  setup(e, { expose: t }) {
    const n = e, r = S(), o = S(), s = S(), a = S(), i = b(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(l), V(Cn, l), (u, f) => F(u.$slots, "default");
  }
});
var Ul = /* @__PURE__ */ W(Kl, [["__file", "popper.vue"]]);
const pr = U({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), zl = O({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Vl = /* @__PURE__ */ O({
  ...zl,
  props: pr,
  setup(e, { expose: t }) {
    const n = e, r = ae("popper"), { arrowOffset: o, arrowRef: s, arrowStyle: a } = H(cr, void 0);
    return k(() => n.arrowOffset, (i) => {
      o.value = i;
    }), me(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, l) => (I(), R("span", {
      ref_key: "arrowRef",
      ref: s,
      class: Q(c(r).e("arrow")),
      style: xt(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Wl = /* @__PURE__ */ W(Vl, [["__file", "arrow.vue"]]);
const Vt = "ElOnlyChild", Jl = O({
  name: Vt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = H(ar), s = Al((r = o == null ? void 0 : o.setForwardRef) != null ? r : Ot);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ye(Vt, "requires exact only one valid child."), null;
      const l = dr(i);
      return l ? At(Ar(l, n), [[s]]) : (Ye(Vt, "no valid child node found"), null);
    };
  }
});
function dr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (en(n))
      switch (n.type) {
        case Fr:
          continue;
        case Nr:
        case "svg":
          return go(n);
        case vt:
          return dr(n.children);
        default:
          return n;
      }
    return go(n);
  }
  return null;
}
function go(e) {
  const t = ae("only-child");
  return te("span", {
    class: t.e("content")
  }, [e]);
}
const fr = U({
  virtualRef: {
    type: A(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: A(Function)
  },
  onMouseleave: {
    type: A(Function)
  },
  onClick: {
    type: A(Function)
  },
  onKeydown: {
    type: A(Function)
  },
  onFocus: {
    type: A(Function)
  },
  onBlur: {
    type: A(Function)
  },
  onContextmenu: {
    type: A(Function)
  },
  id: String,
  open: Boolean
}), ql = O({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Gl = /* @__PURE__ */ O({
  ...ql,
  props: fr,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = H(Cn, void 0);
    xl(o);
    const s = b(() => i.value ? n.id : void 0), a = b(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = b(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = b(() => i.value ? `${n.open}` : void 0);
    let u;
    return _e(() => {
      k(() => n.virtualRef, (f) => {
        f && (o.value = Te(f));
      }, {
        immediate: !0
      }), k(o, (f, h) => {
        u == null || u(), u = void 0, It(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var y;
          const p = n[m];
          p && (f.addEventListener(m.slice(2).toLowerCase(), p), (y = h == null ? void 0 : h.removeEventListener) == null || y.call(h, m.slice(2).toLowerCase(), p));
        }), u = k([s, a, i, l], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((y, p) => {
            cn(m[p]) ? f.removeAttribute(y) : f.setAttribute(y, m[p]);
          });
        }, { immediate: !0 })), It(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => h.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), me(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: o
    }), (f, h) => f.virtualTriggering ? fe("v-if", !0) : (I(), X(c(Jl), ge({ key: 0 }, f.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: K(() => [
        F(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Zl = /* @__PURE__ */ W(Gl, [["__file", "trigger.vue"]]);
const Wt = "focus-trap.focus-after-trapped", Jt = "focus-trap.focus-after-released", Yl = "focus-trap.focusout-prevented", ho = {
  cancelable: !0,
  bubbles: !1
}, Ql = {
  cancelable: !0,
  bubbles: !1
}, yo = "focusAfterTrapped", bo = "focusAfterReleased", Xl = Symbol("elFocusTrap"), On = S(), jt = S(0), Tn = S(0);
let pt = 0;
const vr = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, _o = (e, t) => {
  for (const n of e)
    if (!ec(n, t))
      return n;
}, ec = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, tc = (e) => {
  const t = vr(e), n = _o(t, e), r = _o(t.reverse(), e);
  return [n, r];
}, nc = (e) => e instanceof HTMLInputElement && "select" in e, he = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Tn.value = window.performance.now(), e !== n && nc(e) && t && e.select();
  }
};
function wo(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const oc = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = wo(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, s;
      e = wo(e, r), (s = (o = e[0]) == null ? void 0 : o.resume) == null || s.call(o);
    }
  };
}, rc = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (he(r, t), document.activeElement !== n)
      return;
}, Eo = oc(), sc = () => jt.value > Tn.value, dt = () => {
  On.value = "pointer", jt.value = window.performance.now();
}, Co = () => {
  On.value = "keyboard", jt.value = window.performance.now();
}, ac = () => (_e(() => {
  pt === 0 && (document.addEventListener("mousedown", dt), document.addEventListener("touchstart", dt), document.addEventListener("keydown", Co)), pt++;
}), me(() => {
  pt--, pt <= 0 && (document.removeEventListener("mousedown", dt), document.removeEventListener("touchstart", dt), document.removeEventListener("keydown", Co));
}), {
  focusReason: On,
  lastUserFocusTimestamp: jt,
  lastAutomatedFocusTimestamp: Tn
}), ft = (e) => new CustomEvent(Yl, {
  ...Ql,
  detail: e
}), ic = O({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    yo,
    bo,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = S();
    let r, o;
    const { focusReason: s } = ac();
    Tl((p) => {
      e.trapped && !a.paused && t("release-requested", p);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (p) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: d, altKey: g, ctrlKey: v, metaKey: _, currentTarget: T, shiftKey: w } = p, { loop: P } = e, x = d === $t.tab && !g && !v && !_, C = document.activeElement;
      if (x && C) {
        const $ = T, [j, N] = tc($);
        if (j && N) {
          if (!w && C === N) {
            const B = ft({
              focusReason: s.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (p.preventDefault(), P && he(j, !0));
          } else if (w && [j, $].includes(C)) {
            const B = ft({
              focusReason: s.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (p.preventDefault(), P && he(N, !0));
          }
        } else if (C === $) {
          const B = ft({
            focusReason: s.value
          });
          t("focusout-prevented", B), B.defaultPrevented || p.preventDefault();
        }
      }
    };
    V(Xl, {
      focusTrapRef: n,
      onKeydown: i
    }), k(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), k([n], ([p], [d]) => {
      p && (p.addEventListener("keydown", i), p.addEventListener("focusin", f), p.addEventListener("focusout", h)), d && (d.removeEventListener("keydown", i), d.removeEventListener("focusin", f), d.removeEventListener("focusout", h));
    });
    const l = (p) => {
      t(yo, p);
    }, u = (p) => t(bo, p), f = (p) => {
      const d = c(n);
      if (!d)
        return;
      const g = p.target, v = p.relatedTarget, _ = g && d.contains(g);
      e.trapped || v && d.contains(v) || (r = v), _ && t("focusin", p), !a.paused && e.trapped && (_ ? o = g : he(o, !0));
    }, h = (p) => {
      const d = c(n);
      if (!(a.paused || !d))
        if (e.trapped) {
          const g = p.relatedTarget;
          !cn(g) && !d.contains(g) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const v = ft({
                focusReason: s.value
              });
              t("focusout-prevented", v), v.defaultPrevented || he(o, !0);
            }
          }, 0);
        } else {
          const g = p.target;
          g && d.contains(g) || t("focusout", p);
        }
    };
    async function m() {
      await kn();
      const p = c(n);
      if (p) {
        Eo.push(a);
        const d = p.contains(document.activeElement) ? r : document.activeElement;
        if (r = d, !p.contains(d)) {
          const v = new Event(Wt, ho);
          p.addEventListener(Wt, l), p.dispatchEvent(v), v.defaultPrevented || kn(() => {
            let _ = e.focusStartEl;
            tt(_) || (he(_), document.activeElement !== _ && (_ = "first")), _ === "first" && rc(vr(p), !0), (document.activeElement === d || _ === "container") && he(p);
          });
        }
      }
    }
    function y() {
      const p = c(n);
      if (p) {
        p.removeEventListener(Wt, l);
        const d = new CustomEvent(Jt, {
          ...ho,
          detail: {
            focusReason: s.value
          }
        });
        p.addEventListener(Jt, u), p.dispatchEvent(d), !d.defaultPrevented && (s.value == "keyboard" || !sc() || p.contains(document.activeElement)) && he(r ?? document.body), p.removeEventListener(Jt, u), Eo.remove(a);
      }
    }
    return _e(() => {
      e.trapped && m(), k(() => e.trapped, (p) => {
        p ? m() : y();
      });
    }), me(() => {
      e.trapped && y();
    }), {
      onKeydown: i
    };
  }
});
function lc(e, t, n, r, o, s) {
  return F(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var cc = /* @__PURE__ */ W(ic, [["render", lc], ["__file", "focus-trap.vue"]]);
const uc = ["fixed", "absolute"], pc = U({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: A(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: vn,
    default: "bottom"
  },
  popperOptions: {
    type: A(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: uc,
    default: "absolute"
  }
}), mr = U({
  ...pc,
  id: String,
  style: {
    type: A([String, Array, Object])
  },
  className: {
    type: A([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: A([String, Array, Object])
  },
  popperStyle: {
    type: A([String, Array, Object])
  },
  referenceEl: {
    type: A(Object)
  },
  triggerTargetEl: {
    type: A(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...ir(["ariaLabel"])
}), dc = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, fc = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, s = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...mc(e), ...t]
  };
  return gc(s, o == null ? void 0 : o.modifiers), s;
}, vc = (e) => {
  if (se)
    return Te(e);
};
function mc(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function gc(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const hc = 0, yc = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = H(Cn, void 0), s = S(), a = S(), i = b(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = b(() => {
    var v;
    const _ = c(s), T = (v = c(a)) != null ? v : hc;
    return {
      name: "arrow",
      enabled: !Za(_),
      options: {
        element: _,
        padding: T
      }
    };
  }), u = b(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...fc(e, [
      c(l),
      c(i)
    ])
  })), f = b(() => vc(e.referenceEl) || c(r)), { attributes: h, state: m, styles: y, update: p, forceUpdate: d, instanceRef: g } = wl(f, n, u);
  return k(g, (v) => t.value = v), _e(() => {
    k(() => {
      var v;
      return (v = c(f)) == null ? void 0 : v.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: h,
    arrowRef: s,
    contentRef: n,
    instanceRef: g,
    state: m,
    styles: y,
    role: o,
    forceUpdate: d,
    update: p
  };
}, bc = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Rl(), s = ae("popper"), a = b(() => c(t).popper), i = S(Ne(e.zIndex) ? e.zIndex : o()), l = b(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = b(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = b(() => r.value === "dialog" ? "false" : void 0), h = b(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: h,
    contentAttrs: a,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Ne(e.zIndex) ? e.zIndex : o();
    }
  };
}, _c = (e, t) => {
  const n = S(!1), r = S();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, wc = O({
  name: "ElPopperContent"
}), Ec = /* @__PURE__ */ O({
  ...wc,
  props: mr,
  emits: dc,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = _c(r, n), { attributes: h, arrowRef: m, contentRef: y, styles: p, instanceRef: d, role: g, update: v } = yc(r), {
      ariaModal: _,
      arrowStyle: T,
      contentAttrs: w,
      contentClass: P,
      contentStyle: x,
      updateZIndex: C
    } = bc(r, {
      styles: p,
      attributes: h,
      role: g
    }), $ = H(mo, void 0), j = S();
    V(cr, {
      arrowStyle: T,
      arrowRef: m,
      arrowOffset: j
    }), $ && ($.addInputId || $.removeInputId) && V(mo, {
      ...$,
      addInputId: Ot,
      removeInputId: Ot
    });
    let N;
    const L = (D = !0) => {
      v(), D && C();
    }, B = () => {
      L(!1), r.visible && r.focusOnShow ? s.value = !0 : r.visible === !1 && (s.value = !1);
    };
    return _e(() => {
      k(() => r.triggerTargetEl, (D, J) => {
        N == null || N(), N = void 0;
        const z = c(D || y.value), M = c(J || y.value);
        It(z) && (N = k([g, () => r.ariaLabel, _, () => r.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((q, le) => {
            cn(E[le]) ? z.removeAttribute(q) : z.setAttribute(q, E[le]);
          });
        }, { immediate: !0 })), M !== z && It(M) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          M.removeAttribute(E);
        });
      }, { immediate: !0 }), k(() => r.visible, B, { immediate: !0 });
    }), me(() => {
      N == null || N(), N = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: d,
      updatePopper: L,
      contentStyle: x
    }), (D, J) => (I(), R("div", ge({
      ref_key: "contentRef",
      ref: y
    }, c(w), {
      style: c(x),
      class: c(P),
      tabindex: "-1",
      onMouseenter: J[0] || (J[0] = (z) => D.$emit("mouseenter", z)),
      onMouseleave: J[1] || (J[1] = (z) => D.$emit("mouseleave", z))
    }), [
      te(c(cc), {
        trapped: c(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(y),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(a),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: K(() => [
          F(D.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Cc = /* @__PURE__ */ W(Ec, [["__file", "content.vue"]]);
const Oc = nt(Ul), Pn = Symbol("elTooltip"), ee = U({
  ...$l,
  ...mr,
  appendTo: {
    type: A([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  visible: {
    type: A(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...ir(["ariaLabel"])
}), et = U({
  ...fr,
  disabled: Boolean,
  trigger: {
    type: A([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: A(Array),
    default: () => [$t.enter, $t.space]
  }
}), {
  useModelToggleProps: Tc,
  useModelToggleEmits: Pc,
  useModelToggle: Ic
} = Jo("visible"), $c = U({
  ...ur,
  ...Tc,
  ...ee,
  ...et,
  ...pr,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Sc = [
  ...Pc,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], xc = (e, t) => Bo(e) ? e.includes(t) : e === t, xe = (e, t, n) => (r) => {
  xc(c(e), t) && n(r);
}, Ac = O({
  name: "ElTooltipTrigger"
}), Nc = /* @__PURE__ */ O({
  ...Ac,
  props: et,
  setup(e, { expose: t }) {
    const n = e, r = ae("tooltip"), { controlled: o, id: s, open: a, onOpen: i, onClose: l, onToggle: u } = H(Pn, void 0), f = S(null), h = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = ze(n, "trigger"), y = de(h, xe(m, "hover", i)), p = de(h, xe(m, "hover", l)), d = de(h, xe(m, "click", (w) => {
      w.button === 0 && u(w);
    })), g = de(h, xe(m, "focus", i)), v = de(h, xe(m, "focus", l)), _ = de(h, xe(m, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), T = de(h, (w) => {
      const { code: P } = w;
      n.triggerKeys.includes(P) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: f
    }), (w, P) => (I(), X(c(Zl), {
      id: c(s),
      "virtual-ref": w.virtualRef,
      open: c(a),
      "virtual-triggering": w.virtualTriggering,
      class: Q(c(r).e("trigger")),
      onBlur: c(v),
      onClick: c(d),
      onContextmenu: c(_),
      onFocus: c(g),
      onMouseenter: c(y),
      onMouseleave: c(p),
      onKeydown: c(T)
    }, {
      default: K(() => [
        F(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Fc = /* @__PURE__ */ W(Nc, [["__file", "trigger.vue"]]);
const Rc = O({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Bc = /* @__PURE__ */ O({
  ...Rc,
  props: ee,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = sr(), o = ae("tooltip"), s = S(null), a = S(!1), {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: h,
      onOpen: m,
      onShow: y,
      onHide: p,
      onBeforeShow: d,
      onBeforeHide: g
    } = H(Pn, void 0), v = b(() => n.transition || `${o.namespace.value}-fade-in-linear`), _ = b(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    me(() => {
      a.value = !0;
    });
    const T = b(() => c(_) ? !0 : c(u)), w = b(() => n.disabled ? !1 : c(u)), P = b(() => n.appendTo || r.value), x = b(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), C = b(() => !c(u)), $ = () => {
      p();
    }, j = () => {
      if (c(i))
        return !0;
    }, N = de(j, () => {
      n.enterable && c(f) === "hover" && m();
    }), L = de(j, () => {
      c(f) === "hover" && h();
    }), B = () => {
      var E, q;
      (q = (E = s.value) == null ? void 0 : E.updatePopper) == null || q.call(E), d == null || d();
    }, D = () => {
      g == null || g();
    }, J = () => {
      y(), M = Ur(b(() => {
        var E;
        return (E = s.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && h();
      });
    }, z = () => {
      n.virtualTriggering || h();
    };
    let M;
    return k(() => c(u), (E) => {
      E || M == null || M();
    }, {
      flush: "post"
    }), k(() => n.content, () => {
      var E, q;
      (q = (E = s.value) == null ? void 0 : E.updatePopper) == null || q.call(E);
    }), t({
      contentRef: s
    }), (E, q) => (I(), X(Rr, {
      disabled: !E.teleported,
      to: c(P)
    }, [
      te(Io, {
        name: c(v),
        onAfterLeave: $,
        onBeforeEnter: B,
        onAfterEnter: J,
        onBeforeLeave: D
      }, {
        default: K(() => [
          c(T) ? At((I(), X(c(Cc), ge({
            key: 0,
            id: c(l),
            ref_key: "contentRef",
            ref: s
          }, E.$attrs, {
            "aria-label": E.ariaLabel,
            "aria-hidden": c(C),
            "boundaries-padding": E.boundariesPadding,
            "fallback-placements": E.fallbackPlacements,
            "gpu-acceleration": E.gpuAcceleration,
            offset: E.offset,
            placement: E.placement,
            "popper-options": E.popperOptions,
            strategy: E.strategy,
            effect: E.effect,
            enterable: E.enterable,
            pure: E.pure,
            "popper-class": E.popperClass,
            "popper-style": [E.popperStyle, c(x)],
            "reference-el": E.referenceEl,
            "trigger-target-el": E.triggerTargetEl,
            visible: c(w),
            "z-index": E.zIndex,
            onMouseenter: c(N),
            onMouseleave: c(L),
            onBlur: z,
            onClose: c(h)
          }), {
            default: K(() => [
              a.value ? fe("v-if", !0) : F(E.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Qt, c(w)]
          ]) : fe("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var kc = /* @__PURE__ */ W(Bc, [["__file", "content.vue"]]);
const jc = ["innerHTML"], Lc = { key: 1 }, Dc = O({
  name: "ElTooltip"
}), Mc = /* @__PURE__ */ O({
  ...Dc,
  props: $c,
  emits: Sc,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Il();
    const o = Ol(), s = S(), a = S(), i = () => {
      var v;
      const _ = c(s);
      _ && ((v = _.popperInstanceRef) == null || v.update());
    }, l = S(!1), u = S(), { show: f, hide: h, hasUpdateHandler: m } = Ic({
      indicator: l,
      toggleReason: u
    }), { onOpen: y, onClose: p } = Sl({
      showAfter: ze(r, "showAfter"),
      hideAfter: ze(r, "hideAfter"),
      autoClose: ze(r, "autoClose"),
      open: f,
      close: h
    }), d = b(() => un(r.visible) && !m.value);
    V(Pn, {
      controlled: d,
      id: o,
      open: Br(l),
      trigger: ze(r, "trigger"),
      onOpen: (v) => {
        y(v);
      },
      onClose: (v) => {
        p(v);
      },
      onToggle: (v) => {
        c(l) ? p(v) : y(v);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: i
    }), k(() => r.disabled, (v) => {
      v && l.value && (l.value = !1);
    });
    const g = (v) => {
      var _, T;
      const w = (T = (_ = a.value) == null ? void 0 : _.contentRef) == null ? void 0 : T.popperContentRef, P = (v == null ? void 0 : v.relatedTarget) || document.activeElement;
      return w && w.contains(P);
    };
    return kr(() => l.value && h()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: g,
      updatePopper: i,
      onOpen: y,
      onClose: p,
      hide: h
    }), (v, _) => (I(), X(c(Oc), {
      ref_key: "popperRef",
      ref: s,
      role: v.role
    }, {
      default: K(() => [
        te(Fc, {
          disabled: v.disabled,
          trigger: v.trigger,
          "trigger-keys": v.triggerKeys,
          "virtual-ref": v.virtualRef,
          "virtual-triggering": v.virtualTriggering
        }, {
          default: K(() => [
            v.$slots.default ? F(v.$slots, "default", { key: 0 }) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        te(kc, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": v.ariaLabel,
          "boundaries-padding": v.boundariesPadding,
          content: v.content,
          disabled: v.disabled,
          effect: v.effect,
          enterable: v.enterable,
          "fallback-placements": v.fallbackPlacements,
          "hide-after": v.hideAfter,
          "gpu-acceleration": v.gpuAcceleration,
          offset: v.offset,
          persistent: v.persistent,
          "popper-class": v.popperClass,
          "popper-style": v.popperStyle,
          placement: v.placement,
          "popper-options": v.popperOptions,
          pure: v.pure,
          "raw-content": v.rawContent,
          "reference-el": v.referenceEl,
          "trigger-target-el": v.triggerTargetEl,
          "show-after": v.showAfter,
          strategy: v.strategy,
          teleported: v.teleported,
          transition: v.transition,
          "virtual-triggering": v.virtualTriggering,
          "z-index": v.zIndex,
          "append-to": v.appendTo
        }, {
          default: K(() => [
            F(v.$slots, "content", {}, () => [
              v.rawContent ? (I(), R("span", {
                key: 0,
                innerHTML: v.content
              }, null, 8, jc)) : (I(), R("span", Lc, ye(v.content), 1))
            ]),
            v.showArrow ? (I(), X(c(Wl), {
              key: 0,
              "arrow-offset": v.arrowOffset
            }, null, 8, ["arrow-offset"])) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Hc = /* @__PURE__ */ W(Mc, [["__file", "tooltip.vue"]]);
const Kc = nt(Hc), Oo = (e) => Ne(e) || tt(e) || Bo(e), Uc = U({
  accordion: Boolean,
  modelValue: {
    type: A([Array, String, Number]),
    default: () => vi([])
  }
}), zc = {
  [Vo]: Oo,
  [Wo]: Oo
}, gr = Symbol("collapseContextKey"), Vc = (e, t) => {
  const n = S(Qn(e.modelValue)), r = (s) => {
    n.value = s;
    const a = e.accordion ? n.value[0] : n.value;
    t(Vo, a), t(Wo, a);
  }, o = (s) => {
    if (e.accordion)
      r([n.value[0] === s ? "" : s]);
    else {
      const a = [...n.value], i = a.indexOf(s);
      i > -1 ? a.splice(i, 1) : a.push(s), r(a);
    }
  };
  return k(() => e.modelValue, () => n.value = Qn(e.modelValue), { deep: !0 }), V(gr, {
    activeNames: n,
    handleItemClick: o
  }), {
    activeNames: n,
    setActiveNames: r
  };
}, Wc = () => {
  const e = ae("collapse");
  return {
    rootKls: b(() => e.b())
  };
}, Jc = O({
  name: "ElCollapse"
}), qc = /* @__PURE__ */ O({
  ...Jc,
  props: Uc,
  emits: zc,
  setup(e, { expose: t, emit: n }) {
    const r = e, { activeNames: o, setActiveNames: s } = Vc(r, n), { rootKls: a } = Wc();
    return t({
      activeNames: o,
      setActiveNames: s
    }), (i, l) => (I(), R("div", {
      class: Q(c(a))
    }, [
      F(i.$slots, "default")
    ], 2));
  }
});
var Gc = /* @__PURE__ */ W(qc, [["__file", "collapse.vue"]]);
const Zc = O({
  name: "ElCollapseTransition"
}), Yc = /* @__PURE__ */ O({
  ...Zc,
  setup(e) {
    const t = ae("collapse-transition"), n = (o) => {
      o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
    }, r = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.height && (o.dataset.elExistsHeight = o.style.height), o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        requestAnimationFrame(() => {
          o.dataset.oldOverflow = o.style.overflow, o.dataset.elExistsHeight ? o.style.maxHeight = o.dataset.elExistsHeight : o.scrollHeight !== 0 ? o.style.maxHeight = `${o.scrollHeight}px` : o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom, o.style.overflow = "hidden";
        });
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      enterCancelled(o) {
        n(o);
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        n(o);
      },
      leaveCancelled(o) {
        n(o);
      }
    };
    return (o, s) => (I(), X(Io, ge({
      name: c(t).b()
    }, jr(r)), {
      default: K(() => [
        F(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var gt = /* @__PURE__ */ W(Yc, [["__file", "collapse-transition.vue"]]);
gt.install = (e) => {
  e.component(gt.name, gt);
};
const Qc = gt, Xc = U({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: A([String, Number]),
    default: void 0
  },
  disabled: Boolean
}), eu = (e) => {
  const t = H(gr), { namespace: n } = ae("collapse"), r = S(!1), o = S(!1), s = En(), a = b(() => s.current++), i = b(() => {
    var m;
    return (m = e.name) != null ? m : `${n.value}-id-${s.prefix}-${c(a)}`;
  }), l = b(() => t == null ? void 0 : t.activeNames.value.includes(c(i)));
  return {
    focusing: r,
    id: a,
    isActive: l,
    handleFocus: () => {
      setTimeout(() => {
        o.value ? o.value = !1 : r.value = !0;
      }, 50);
    },
    handleHeaderClick: () => {
      e.disabled || (t == null || t.handleItemClick(c(i)), r.value = !1, o.value = !0);
    },
    handleEnterClick: () => {
      t == null || t.handleItemClick(c(i));
    }
  };
}, tu = (e, { focusing: t, isActive: n, id: r }) => {
  const o = ae("collapse"), s = b(() => [
    o.b("item"),
    o.is("active", c(n)),
    o.is("disabled", e.disabled)
  ]), a = b(() => [
    o.be("item", "header"),
    o.is("active", c(n)),
    { focusing: c(t) && !e.disabled }
  ]), i = b(() => [
    o.be("item", "arrow"),
    o.is("active", c(n))
  ]), l = b(() => o.be("item", "wrap")), u = b(() => o.be("item", "content")), f = b(() => o.b(`content-${c(r)}`)), h = b(() => o.b(`head-${c(r)}`));
  return {
    arrowKls: i,
    headKls: a,
    rootKls: s,
    itemWrapperKls: l,
    itemContentKls: u,
    scopedContentId: f,
    scopedHeadId: h
  };
}, nu = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"], ou = ["id", "aria-hidden", "aria-labelledby"], ru = O({
  name: "ElCollapseItem"
}), su = /* @__PURE__ */ O({
  ...ru,
  props: Xc,
  setup(e, { expose: t }) {
    const n = e, {
      focusing: r,
      id: o,
      isActive: s,
      handleFocus: a,
      handleHeaderClick: i,
      handleEnterClick: l
    } = eu(n), {
      arrowKls: u,
      headKls: f,
      rootKls: h,
      itemWrapperKls: m,
      itemContentKls: y,
      scopedContentId: p,
      scopedHeadId: d
    } = tu(n, { focusing: r, isActive: s, id: o });
    return t({
      isActive: s
    }), (g, v) => (I(), R("div", {
      class: Q(c(h))
    }, [
      G("button", {
        id: c(d),
        class: Q(c(f)),
        "aria-expanded": c(s),
        "aria-controls": c(p),
        "aria-describedby": c(p),
        tabindex: g.disabled ? -1 : 0,
        type: "button",
        onClick: v[0] || (v[0] = (..._) => c(i) && c(i)(..._)),
        onKeydown: v[1] || (v[1] = Lr($o((..._) => c(l) && c(l)(..._), ["stop", "prevent"]), ["space", "enter"])),
        onFocus: v[2] || (v[2] = (..._) => c(a) && c(a)(..._)),
        onBlur: v[3] || (v[3] = (_) => r.value = !1)
      }, [
        F(g.$slots, "title", {}, () => [
          Nt(ye(g.title), 1)
        ]),
        te(c(lr), {
          class: Q(c(u))
        }, {
          default: K(() => [
            te(c(ii))
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, nu),
      te(c(Qc), null, {
        default: K(() => [
          At(G("div", {
            id: c(p),
            role: "region",
            class: Q(c(m)),
            "aria-hidden": !c(s),
            "aria-labelledby": c(d)
          }, [
            G("div", {
              class: Q(c(y))
            }, [
              F(g.$slots, "default")
            ], 2)
          ], 10, ou), [
            [Qt, c(s)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
var hr = /* @__PURE__ */ W(su, [["__file", "collapse-item.vue"]]);
const au = nt(Gc, {
  CollapseItem: hr
}), iu = fi(hr), lu = /* @__PURE__ */ O({
  inheritAttrs: !1
});
function cu(e, t, n, r, o, s) {
  return F(e.$slots, "default");
}
var uu = /* @__PURE__ */ W(lu, [["render", cu], ["__file", "collection.vue"]]);
const pu = /* @__PURE__ */ O({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function du(e, t, n, r, o, s) {
  return F(e.$slots, "default");
}
var fu = /* @__PURE__ */ W(pu, [["render", du], ["__file", "collection-item.vue"]]);
const vu = "data-el-collection-item", mu = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), o = Symbol(n), s = {
    ...uu,
    name: t,
    setup() {
      const i = S(null), l = /* @__PURE__ */ new Map();
      V(r, {
        itemMap: l,
        getItems: () => {
          const f = c(i);
          if (!f)
            return [];
          const h = Array.from(f.querySelectorAll(`[${vu}]`));
          return [...l.values()].sort((y, p) => h.indexOf(y.ref) - h.indexOf(p.ref));
        },
        collectionRef: i
      });
    }
  }, a = {
    ...fu,
    name: n,
    setup(i, { attrs: l }) {
      const u = S(null), f = H(r, void 0);
      V(o, {
        collectionItemRef: u
      }), _e(() => {
        const h = c(u);
        h && f.itemMap.set(h, {
          ref: h,
          ...l
        });
      }), me(() => {
        const h = c(u);
        f.itemMap.delete(h);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: o,
    ElCollection: s,
    ElCollectionItem: a
  };
}, qt = U({
  trigger: et.trigger,
  effect: {
    ...ee.effect,
    default: "light"
  },
  type: {
    type: A(String)
  },
  placement: {
    type: A(String),
    default: "bottom"
  },
  popperOptions: {
    type: A(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: A([Number, String]),
    default: 0
  },
  maxHeight: {
    type: A([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: A(Object)
  },
  teleported: ee.teleported
});
U({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: pi
  }
});
U({
  onKeydown: { type: A(Function) }
});
mu("Dropdown");
const gu = U({
  trigger: et.trigger,
  placement: qt.placement,
  disabled: et.disabled,
  visible: ee.visible,
  transition: ee.transition,
  popperOptions: qt.popperOptions,
  tabindex: qt.tabindex,
  content: ee.content,
  popperStyle: ee.popperStyle,
  popperClass: ee.popperClass,
  enterable: {
    ...ee.enterable,
    default: !0
  },
  effect: {
    ...ee.effect,
    default: "light"
  },
  teleported: ee.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), hu = {
  "update:visible": (e) => un(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, yu = "onUpdate:visible", bu = O({
  name: "ElPopover"
}), _u = /* @__PURE__ */ O({
  ...bu,
  props: gu,
  emits: hu,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = b(() => r[yu]), s = ae("popover"), a = S(), i = b(() => {
      var g;
      return (g = c(a)) == null ? void 0 : g.popperRef;
    }), l = b(() => [
      {
        width: Uo(r.width)
      },
      r.popperStyle
    ]), u = b(() => [s.b(), r.popperClass, { [s.m("plain")]: !!r.content }]), f = b(() => r.transition === `${s.namespace.value}-fade-in-linear`), h = () => {
      var g;
      (g = a.value) == null || g.hide();
    }, m = () => {
      n("before-enter");
    }, y = () => {
      n("before-leave");
    }, p = () => {
      n("after-enter");
    }, d = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: i,
      hide: h
    }), (g, v) => (I(), X(c(Kc), ge({
      ref_key: "tooltipRef",
      ref: a
    }, g.$attrs, {
      trigger: g.trigger,
      placement: g.placement,
      disabled: g.disabled,
      visible: g.visible,
      transition: g.transition,
      "popper-options": g.popperOptions,
      tabindex: g.tabindex,
      content: g.content,
      offset: g.offset,
      "show-after": g.showAfter,
      "hide-after": g.hideAfter,
      "auto-close": g.autoClose,
      "show-arrow": g.showArrow,
      "aria-label": g.title,
      effect: g.effect,
      enterable: g.enterable,
      "popper-class": c(u),
      "popper-style": c(l),
      teleported: g.teleported,
      persistent: g.persistent,
      "gpu-acceleration": c(f),
      "onUpdate:visible": c(o),
      onBeforeShow: m,
      onBeforeHide: y,
      onShow: p,
      onHide: d
    }), {
      content: K(() => [
        g.title ? (I(), R("div", {
          key: 0,
          class: Q(c(s).e("title")),
          role: "title"
        }, ye(g.title), 3)) : fe("v-if", !0),
        F(g.$slots, "default", {}, () => [
          Nt(ye(g.content), 1)
        ])
      ]),
      default: K(() => [
        g.$slots.reference ? F(g.$slots, "reference", { key: 0 }) : fe("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var wu = /* @__PURE__ */ W(_u, [["__file", "popover.vue"]]);
const To = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var Eu = {
  mounted(e, t) {
    To(e, t);
  },
  updated(e, t) {
    To(e, t);
  }
};
const Cu = "popover", Ou = di(Eu, Cu), Tu = nt(wu, {
  directive: Ou
});
const Pu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Iu = /* @__PURE__ */ G("path", {
  fill: "#D7D7D7",
  d: "M459.015 850.31a110.07 110.07 0 0 1 105.978 0L786.78 971.75a7.68 7.68 0 0 0 5.12.87c5.273-.921 9.727-7.474 8.498-15.103l-41.982-257.983a116.94 116.94 0 0 1 31.487-100.449L968.99 416.157a13.82 13.82 0 0 0 3.583-7.782c1.127-7.628-3.43-13.976-8.703-14.796l-247.744-37.988a112.63 112.63 0 0 1-84.424-63.587L520.605 57.521a11.47 11.47 0 0 0-4.966-5.376c-4.25-2.202-9.472-.358-12.185 5.376l-111.15 234.483a112.63 112.63 0 0 1-84.475 63.587L60.086 393.58a9.16 9.16 0 0 0-5.223 2.919 14.847 14.847 0 0 0 .154 19.66l179.088 182.876c25.804 26.367 37.425 63.792 31.486 100.45L223.61 957.516c-.512 3.175 0 6.451 1.382 9.216 2.816 5.58 7.987 7.27 12.236 4.966l221.787-121.44zm-197.212 166.391c-29.95 16.383-66.915 4.25-82.581-27.032a66.45 66.45 0 0 1-6.144-40.343l41.982-258.034a65.74 65.74 0 0 0-17.56-56.42L18.461 451.944a65.993 65.993 0 0 1-1.024-90.414c9.37-9.983 21.657-16.537 34.866-18.533l247.794-38.04a61.44 61.44 0 0 0 45.924-34.865l111.15-234.484c15-31.64 51.76-44.593 81.966-28.926 12.032 6.195 21.76 16.383 27.647 28.926l111.2 234.484a61.44 61.44 0 0 0 45.924 34.865l247.795 38.04c33.38 5.12 56.522 37.578 51.607 72.546-1.946 13.823-8.192 26.623-17.766 36.401L826.51 634.872c-14.336 14.694-20.94 35.787-17.561 56.47l41.982 257.984c5.631 34.814-16.742 67.785-50.071 73.724a58.88 58.88 0 0 1-38.654-6.4L540.367 895.21a58.88 58.88 0 0 0-56.778 0l-221.786 121.44z"
}, null, -1), $u = [
  Iu
];
function Su(e, t) {
  return I(), R("svg", Pu, [...$u]);
}
const xu = { render: Su }, Au = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Nu = /* @__PURE__ */ G("path", {
  fill: "#FFEABB",
  d: "M851.349 383.512c43.677 6.347 61.117 60.021 29.512 90.828l-126.42 123.229a53.25 53.25 0 0 0-15.315 47.133l29.844 174.002c7.461 43.5-38.197 76.673-77.263 56.135l-156.263-82.152a53.25 53.25 0 0 0-49.559 0l-156.263 82.152c-39.066 20.538-84.724-12.635-77.263-56.135l29.844-174.002z"
}, null, -1), Fu = /* @__PURE__ */ G("path", {
  fill: "#F9C73D",
  d: "M716.565 911.044c-13.231.001-26.527-3.19-38.817-9.652L521.484 819.24a23.24 23.24 0 0 0-21.638 0l-156.264 82.152c-28.255 14.854-61.848 12.426-87.673-6.336-25.824-18.763-38.515-49.963-33.119-81.424l29.843-174.002a23.25 23.25 0 0 0-6.686-20.579l-126.42-123.229c-22.858-22.281-30.93-54.98-21.066-85.339s35.615-52.069 67.204-56.659l174.708-25.387a23.25 23.25 0 0 0 17.506-12.719l78.131-158.312C450.138 128.783 478.747 111 510.665 111c.002 0-.001 0 0 0 31.92 0 60.526 17.782 74.653 46.406l78.132 158.312a23.25 23.25 0 0 0 17.505 12.719l174.709 25.387c31.589 4.59 57.339 26.301 67.203 56.659s1.792 63.059-21.065 85.339l-126.42 123.229a23.25 23.25 0 0 0-6.687 20.578l29.844 174.003c5.396 31.461-7.294 62.661-33.119 81.424-14.591 10.6-31.667 15.987-48.855 15.988M510.666 171c-4.346 0-15.076 1.263-20.85 12.96l-78.132 158.312a83.23 83.23 0 0 1-62.682 45.542L174.295 413.2c-12.909 1.876-17.426 11.691-18.769 15.824s-3.458 14.728 5.883 23.833l126.419 123.229a83.23 83.23 0 0 1 23.942 73.688l-29.843 174.001c-2.205 12.856 5.734 20.186 9.249 22.74 3.516 2.555 12.939 7.838 24.485 1.77l156.264-82.152a83.23 83.23 0 0 1 77.479 0l156.263 82.152c11.548 6.071 20.97.785 24.485-1.77s11.454-9.884 9.249-22.74l-29.844-174.002a83.24 83.24 0 0 1 23.942-73.687l126.42-123.229c9.341-9.105 7.226-19.7 5.883-23.833s-5.859-13.948-18.769-15.824l-174.708-25.387a83.24 83.24 0 0 1-62.682-45.541L531.514 183.96c-5.773-11.697-16.503-12.96-20.848-12.96"
}, null, -1), Ru = [
  Nu,
  Fu
];
function Bu(e, t) {
  return I(), R("svg", Au, [...Ru]);
}
const ku = { render: Bu }, ju = O({
  name: "ShowCollect"
}), Lu = /* @__PURE__ */ O({
  ...ju,
  props: {
    isCollect: { type: Boolean },
    isShow: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => At((I(), R("div", null, [
      t.isCollect ? (I(), X(c(ku), { key: 0 })) : (I(), X(c(xu), { key: 1 }))
    ], 512)), [
      [Qt, t.isCollect || t.isShow]
    ]);
  }
}), Du = { class: "jlg-menu" }, Mu = {
  key: 0,
  class: "jlg-menu-logo"
}, Hu = { class: "jlg-menu-first-level-menu-icon" }, Ku = { class: "jlg-menu-first-level-menu-text" }, Uu = { class: "second-level-menu-title" }, zu = ["onMouseenter", "onMouseleave", "onClick"], Vu = { class: "show-collect" }, Wu = O({
  name: "JlgMenu"
}), Ju = /* @__PURE__ */ O({
  ...Wu,
  props: {
    menuData: {},
    collectMenuKeys: {},
    menuDataRecord: {},
    defaultActive: {},
    elPopoverProps: {}
  },
  emits: ["collectClick", "threeLevelMenuClick"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Xt(), s = S(), a = b(() => ({
      title: "title",
      iconClass: "iconClass",
      key: "key",
      children: "children",
      ...n.menuDataRecord ?? {}
    }));
    function i(l) {
      return l.map((u) => ({
        ...u,
        _isShowCollect: !1,
        children: i(u[a.value.children] ?? [])
      }));
    }
    return k(
      () => n.menuData,
      (l) => {
        s.value = i(l);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (l, u) => {
      const f = Dr("dir"), h = Tu;
      return I(), R("div", Du, [
        c(o).logo ? (I(), R("div", Mu, [
          F(l.$slots, "logo", {}, void 0, !0)
        ])) : fe("", !0),
        G("div", null, [
          (I(!0), R(vt, null, Ve(c(s), (m) => (I(), X(h, ge({
            key: m[c(a).key],
            placement: "right",
            width: 400,
            trigger: "click",
            teleported: !1,
            ref_for: !0
          }, n.elPopoverProps), {
            reference: K(() => [
              G("div", {
                class: Q([
                  "jlg-menu-first-level-menu",
                  n.defaultActive === m[c(a).key] ? "jlg-menu-first-level-menu-selected" : "jlg-menu-first-level-menu-no-selected"
                ])
              }, [
                G("div", Hu, [
                  F(l.$slots, "first-menu-icon" + m[c(a).key], {}, () => [
                    m[c(a).iconClass] ? (I(), R("i", {
                      key: 0,
                      class: Q(m[c(a).iconClass])
                    }, null, 2)) : fe("", !0)
                  ], !0)
                ]),
                G("p", Ku, ye(m[c(a).title]), 1)
              ], 2)
            ]),
            default: K(() => [
              te(f, { class: "jlg-menu-popover" }, {
                default: K(() => [
                  (I(!0), R(vt, null, Ve(m[c(a).children], (y) => (I(), R("div", {
                    key: y[c(a).key],
                    class: "second-level-menu"
                  }, [
                    G("div", Uu, ye(y[c(a).title]), 1),
                    (I(!0), R(vt, null, Ve(y[c(a).children], (p) => (I(), R("div", {
                      key: p[c(a).key],
                      class: "three-level-menu-title",
                      onMouseenter: (d) => p._isShowCollect = !0,
                      onMouseleave: (d) => p._isShowCollect = !1,
                      onClick: (d) => r("threeLevelMenuClick", p, [m, y, p])
                    }, [
                      Nt(ye(p[c(a).title]) + " ", 1),
                      G("div", Vu, [
                        te(Lu, {
                          "is-collect": n.collectMenuKeys.some((d) => d === p[c(a).key]),
                          "is-show": p._isShowCollect,
                          onClick: $o((d) => r("collectClick", p, [m, y, p]), ["stop"])
                        }, null, 8, ["is-collect", "is-show", "onClick"])
                      ])
                    ], 40, zu))), 128))
                  ]))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1040))), 128))
        ])
      ]);
    };
  }
});
const Lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ht = /* @__PURE__ */ Lt(Ju, [["__scopeId", "data-v-1e6a97f9"]]);
ht.install = (e) => {
  e.component(ht.name, ht);
};
const qu = O({
  name: "JlgGridLayout"
}), yt = /* @__PURE__ */ O({
  ...qu,
  props: {
    padding: { default: "0px" },
    flow: {},
    rows: {},
    columns: {},
    gap: { default: "0px" },
    width: { default: "100%" },
    height: { default: "auto" },
    inline: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e;
    V("grid-layout-props", t);
    const n = (a, i) => Array.from({ length: i }, () => a).join(" "), r = b(() => n("1fr", t.columns)), o = b(() => n("1fr", t.rows)), s = b(() => ({
      width: t.width,
      height: t.height,
      padding: t.padding,
      display: t.inline ? "inline-grid" : "grid",
      "grid-template-columns": r.value,
      "grid-template-rows": o.value,
      "grid-auto-flow": t.flow,
      gap: t.gap
    }));
    return (a, i) => (I(), R("div", {
      class: "grid-layout",
      style: xt(c(s))
    }, [
      F(a.$slots, "default")
    ], 4));
  }
});
yt.install = (e) => {
  e.component(yt.name, yt);
};
const Gu = O({
  name: "JlgGridCell"
}), Zu = /* @__PURE__ */ O({
  ...Gu,
  props: {
    top: { default: 0 },
    height: { default: 0 },
    width: { default: 0 },
    left: { default: 0 },
    center: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = H("grid-layout-props"), r = b(() => ({
      "grid-column": t.left && t.width ? t.left + "/ span " + t.width : "span " + t.width,
      "grid-row": t.top && t.height ? t.top + "/ span " + t.height : "span " + t.height,
      border: n.border ? "1px solid #ccc" : ""
    }));
    return (o, s) => (I(), R("div", {
      class: Q(["grid-cell", t.center ? "grid-cell-center" : ""]),
      style: xt(c(r))
    }, [
      F(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const bt = /* @__PURE__ */ Lt(Zu, [["__scopeId", "data-v-14088da3"]]);
bt.install = (e) => {
  e.component(bt.name, bt);
};
const Yu = O({
  name: "JlgCollapse"
}), _t = /* @__PURE__ */ O({
  ...Yu,
  props: {
    accordion: { type: Boolean },
    modelValue: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = So(), o = Xt(), s = b(() => ({
      ...n,
      ...r
    })), a = S(null), i = "_" + Date.now();
    V("collapseKey", i);
    const l = (h) => {
      var m;
      (m = document.querySelector("#" + i + h)) == null || m.scrollIntoView({
        behavior: "smooth"
      });
    }, u = /* @__PURE__ */ new Set();
    return V("addCollapseItem", (h) => {
      u.add(h);
    }), t({
      _ref: a,
      jumpAnchor: l,
      collapseItems: b(() => Array.from(u))
    }), (h, m) => {
      const y = au;
      return I(), X(y, ge({
        ref_key: "_ref",
        ref: a
      }, c(s)), xo({ _: 2 }, [
        Ve(c(o), (p, d) => ({
          name: d,
          fn: K(() => [
            F(h.$slots, d)
          ])
        }))
      ]), 1040);
    };
  }
});
_t.install = (e) => {
  e.component(_t.name, _t);
};
const Qu = O({
  name: "JlgCollapseItem"
}), Xu = /* @__PURE__ */ O({
  ...Qu,
  props: {
    title: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, r = So(), o = Xt(), s = b(() => Object.keys(o).filter((f) => f !== "title")), a = S(null), i = b(() => ({
      ...n,
      ...r
    })), l = H("collapseKey"), u = H("addCollapseItem");
    return k(
      () => i.value,
      (f) => {
        f && u(f);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), t({
      _ref: a
    }), (f, h) => {
      const m = lr, y = iu;
      return I(), X(y, ge({
        id: c(l) + c(i).name,
        ref_key: "_ref",
        ref: a
      }, c(i)), xo({
        title: K(() => {
          var p;
          return [
            F(f.$slots, "title", { _ref: c(a) }, () => [
              Nt(ye(c(i).title), 1)
            ], !0),
            te(m, {
              class: Q(["el-collapse-item__arrow", (p = c(a)) != null && p.isActive ? "is-active" : "", "customize"])
            }, {
              default: K(() => [
                te(c(ci))
              ]),
              _: 1
            }, 8, ["class"])
          ];
        }),
        _: 2
      }, [
        Ve(c(s), (p) => ({
          name: p,
          fn: K(() => [
            F(f.$slots, p, {}, void 0, !0)
          ])
        }))
      ]), 1040, ["id"]);
    };
  }
});
const wt = /* @__PURE__ */ Lt(Xu, [["__scopeId", "data-v-e7e3021b"]]);
wt.install = (e) => {
  e.component(wt.name, wt);
};
const ep = { class: "jlg-flex-layout" }, tp = O({
  name: "JlgFlexLayout"
}), np = /* @__PURE__ */ O({
  ...tp,
  props: {
    col: {},
    gap: { default: "0px" }
  },
  setup(e) {
    V("flexLayoutProps", e);
    const n = S({});
    return V("flexCellProps", n), V("flexLayoutCollectFlexCellPropsFn", (o) => {
      n.value[o.uid] = {
        uid: o.uid,
        ...o.props
      };
    }), (o, s) => (I(), R("div", ep, [
      F(o.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Et = /* @__PURE__ */ Lt(np, [["__scopeId", "data-v-dd4f84ce"]]);
Et.install = (e) => {
  e.component(Et.name, Et);
};
var qe = /* @__PURE__ */ ((e) => (e.头部 = "first", e.尾部 = "last", e.中间 = "not", e))(qe || {});
const Po = (e, t) => {
  const n = [];
  let r = {}, o = 0;
  return Object.entries(e).forEach(([s, a]) => {
    o + a.col <= t ? (r[s] = a, o += a.col) : (n.push(Object.assign({}, r)), r = { [s]: a }, o = a.col);
  }), Object.keys(r).length > 0 && n.push(r), n.map((s) => Object.values(s));
}, op = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r.length > 0) {
      if (r[0].uid === t)
        return { type: qe.头部, length: r.length };
      if (r[r.length - 1].uid === t)
        return { type: qe.尾部, length: r.length };
    }
  }
  return { type: qe.中间, length: 0 };
}, rp = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (let o = 0; o < r.length; o++)
      if (r[o].uid === t)
        return r.length;
  }
  return 0;
}, sp = O({
  name: "JlgFlexCell"
}), Ct = /* @__PURE__ */ O({
  ...sp,
  props: {
    col: {}
  },
  setup(e) {
    const t = e, n = H("flexLayoutProps"), r = H("flexLayoutCollectFlexCellPropsFn"), o = H("flexCellProps"), s = String((/* @__PURE__ */ new Date()).getTime()), a = b(() => {
      const u = t.col / n.col * 100 + "%", f = parseFloat(n.gap) * (l.value - 1) / l.value, h = `calc(${u} - ${f}${n.gap.replace(/\d+/g, "")})`, m = i.value.type === qe.尾部 ? "0px" : `calc(${n.gap})`;
      return { width: h, marginRight: m };
    }), i = b(() => op(Po(o.value, n.col), s)), l = b(() => rp(Po(o.value, n.col), s));
    return k(
      t,
      (u) => {
        u && r({
          uid: s,
          props: {
            ...u,
            uid: s
          }
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), (u, f) => (I(), R("div", {
      class: "jlg-flex-cell",
      style: xt(c(a))
    }, [
      F(u.$slots, "default")
    ], 4));
  }
});
Ct.install = (e) => {
  e.component(Ct.name, Ct);
};
const ap = [ht, yt, bt, _t, wt, Et, Ct], yr = function(e) {
  ap.forEach((t) => {
    t.name && e.component(t.name, t);
  });
};
typeof window < "u" && window.Vue && (window.JlgUi = { install: yr });
const lp = { install: yr };
export {
  _t as JlgCollapse,
  wt as JlgCollapseItem,
  Ct as JlgFlexCell,
  Et as JlgFlexLayout,
  bt as JlgGridCell,
  yt as JlgGridLayout,
  ht as JlgMenu,
  lp as default
};
