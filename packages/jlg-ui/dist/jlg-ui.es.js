import { getCurrentScope as Pr, onScopeDispose as Ir, unref as u, watch as B, defineComponent as O, openBlock as I, createElementBlock as F, createElementVNode as G, warn as $r, getCurrentInstance as Ge, inject as H, ref as S, computed as b, onMounted as _e, shallowRef as Sr, onBeforeUnmount as me, onBeforeMount as xr, provide as V, mergeProps as ge, renderSlot as N, normalizeClass as Q, normalizeStyle as xt, withDirectives as At, cloneVNode as Ar, Fragment as vt, Text as Rr, Comment as Nr, createVNode as te, createBlock as X, withCtx as K, createCommentVNode as fe, nextTick as Bn, toRef as ze, Teleport as Fr, Transition as Io, vShow as Qt, readonly as Dr, onDeactivated as Br, toDisplayString as ye, toHandlers as kr, withKeys as jr, withModifiers as $o, createTextVNode as Rt, useSlots as Xt, resolveComponent as Lr, renderList as Ve, useAttrs as So, createSlots as xo } from "vue";
const pe = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const s = e == null ? void 0 : e(o);
  if (n === !1 || !s)
    return t == null ? void 0 : t(o);
};
var kn;
const se = typeof window < "u", Mr = (e) => typeof e == "string", Ao = () => {
}, Hr = se && ((kn = window == null ? void 0 : window.navigator) == null ? void 0 : kn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ro(e) {
  return typeof e == "function" ? e() : u(e);
}
function Kr(e) {
  return e;
}
function No(e) {
  return Pr() ? (Ir(e), !0) : !1;
}
function Te(e) {
  var t;
  const n = Ro(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Fo = se ? window : void 0;
function Kt(...e) {
  let t, n, r, o;
  if (Mr(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Fo) : [t, n, r, o] = e, !t)
    return Ao;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], a = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, m, h, y) => (d.addEventListener(m, h, y), () => d.removeEventListener(m, h, y)), l = B(() => [Te(t), Ro(o)], ([d, m]) => {
    a(), d && s.push(...n.flatMap((h) => r.map((y) => i(d, h, y, m))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return No(c), c;
}
let jn = !1;
function Ur(e, t, n = {}) {
  const { window: r = Fo, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!r)
    return;
  Hr && !jn && (jn = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Ao)));
  let i = !0;
  const l = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((p) => p === h.target || h.composedPath().includes(p));
    {
      const p = Te(y);
      return p && (h.target === p || h.composedPath().includes(p));
    }
  }), d = [
    Kt(r, "click", (h) => {
      const y = Te(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: s }),
    Kt(r, "pointerdown", (h) => {
      const y = Te(e);
      y && (i = !h.composedPath().includes(y) && !l(h));
    }, { passive: !0 }),
    a && Kt(r, "blur", (h) => {
      var y;
      const p = Te(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(p != null && p.contains(r.document.activeElement)) && t(h);
    })
  ].filter(Boolean);
  return () => d.forEach((h) => h());
}
const Ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mn = "__vueuse_ssr_handlers__";
Ln[Mn] = Ln[Mn] || {};
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
}, Gr = Object.prototype.hasOwnProperty, zn = (e, t) => Gr.call(e, t), Do = Array.isArray, ct = (e) => typeof e == "function", tt = (e) => typeof e == "string", en = (e) => e !== null && typeof e == "object";
var Zr = typeof global == "object" && global && global.Object === Object && global;
const Yr = Zr;
var Qr = typeof self == "object" && self && self.Object === Object && self, Xr = Yr || Qr || Function("return this")();
const tn = Xr;
var es = tn.Symbol;
const be = es;
var Bo = Object.prototype, ts = Bo.hasOwnProperty, ns = Bo.toString, Ke = be ? be.toStringTag : void 0;
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
var ds = Array.isArray;
const je = ds;
var ps = 1 / 0, Wn = be ? be.prototype : void 0, Jn = Wn ? Wn.toString : void 0;
function ko(e) {
  if (typeof e == "string")
    return e;
  if (je(e))
    return us(e, ko) + "";
  if (rn(e))
    return Jn ? Jn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ps ? "-0" : t;
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
function Rs(e, t) {
  return e == null ? void 0 : e[t];
}
function sn(e, t) {
  var n = Rs(e, t);
  return As(n) ? n : void 0;
}
function Ns(e, t, n) {
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
var Fs = 800, Ds = 16, Bs = Date.now;
function ks(e) {
  var t = 0, n = 0;
  return function() {
    var r = Bs(), o = Ds - (r - n);
    if (n = r, o > 0) {
      if (++t >= Fs)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function js(e) {
  return function() {
    return e;
  };
}
var Ls = function() {
  try {
    var e = sn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Pt = Ls;
var Ms = Pt ? function(e, t) {
  return Pt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: js(t),
    writable: !0
  });
} : fs;
const Hs = Ms;
var Ks = ks(Hs);
const Us = Ks;
var zs = 9007199254740991, Vs = /^(?:0|[1-9]\d*)$/;
function jo(e, t) {
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
function Lo(e, t) {
  return e === t || e !== e && t !== t;
}
var Js = Object.prototype, qs = Js.hasOwnProperty;
function Gs(e, t, n) {
  var r = e[t];
  (!(qs.call(e, t) && Lo(r, n)) || n === void 0 && !(t in e)) && Ws(e, t, n);
}
var Gn = Math.max;
function Zs(e, t, n) {
  return t = Gn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = Gn(r.length - t, 0), a = Array(s); ++o < s; )
      a[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(a), Ns(e, this, i);
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
  if (je(e))
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
var ca = "__lodash_hash_undefined__", ua = Object.prototype, da = ua.hasOwnProperty;
function pa(e) {
  var t = this.__data__;
  if (Ze) {
    var n = t[e];
    return n === ca ? void 0 : n;
  }
  return da.call(t, e) ? t[e] : void 0;
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
Ie.prototype.get = pa;
Ie.prototype.has = ma;
Ie.prototype.set = ha;
function ya() {
  this.__data__ = [], this.size = 0;
}
function Nt(e, t) {
  for (var n = e.length; n--; )
    if (Lo(e[n][0], t))
      return n;
  return -1;
}
var ba = Array.prototype, _a = ba.splice;
function wa(e) {
  var t = this.__data__, n = Nt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : _a.call(t, n, 1), --this.size, !0;
}
function Ea(e) {
  var t = this.__data__, n = Nt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ca(e) {
  return Nt(this.__data__, e) > -1;
}
function Oa(e, t) {
  var n = this.__data__, r = Nt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Le.prototype.clear = ya;
Le.prototype.delete = wa;
Le.prototype.get = Ea;
Le.prototype.has = Ca;
Le.prototype.set = Oa;
var Ta = sn(tn, "Map");
const Pa = Ta;
function Ia() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (Pa || Le)(),
    string: new Ie()
  };
}
function $a(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ft(e, t) {
  var n = e.__data__;
  return $a(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Sa(e) {
  var t = Ft(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xa(e) {
  return Ft(this, e).get(e);
}
function Aa(e) {
  return Ft(this, e).has(e);
}
function Ra(e, t) {
  var n = Ft(this, e), r = n.size;
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
$e.prototype.set = Ra;
var Na = "Expected a function";
function an(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Na);
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
var Fa = 500;
function Da(e) {
  var t = an(e, function(r) {
    return n.size === Fa && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ba = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ka = /\\(\\)?/g, ja = Da(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ba, function(n, r, o, s) {
    t.push(o ? s.replace(ka, "$1") : r || n);
  }), t;
});
const La = ja;
function Ma(e) {
  return e == null ? "" : ko(e);
}
function Dt(e, t) {
  return je(e) ? e : sa(e, t) ? [e] : La(Ma(e));
}
var Ha = 1 / 0;
function ln(e) {
  if (typeof e == "string" || rn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ha ? "-0" : t;
}
function Ka(e, t) {
  t = Dt(t, e);
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
  return je(e) || Ho(e) || !!(Yn && e && e[Yn]);
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
  return je(e) ? e : [e];
}
function Ja(e, t) {
  return e != null && t in Object(e);
}
function qa(e, t, n) {
  t = Dt(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var a = ln(t[r]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && Qs(o) && jo(a, o) && (je(e) || Ho(e)));
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
  t = Dt(t, e);
  for (var o = -1, s = t.length, a = s - 1, i = e; i != null && ++o < s; ) {
    var l = ln(t[o]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != a) {
      var d = i[l];
      c = r ? r(d, l, i) : void 0, c === void 0 && (c = Tt(d) ? d : jo(t[o + 1]) ? [] : {});
    }
    Gs(i, l, c), i = i[l];
  }
  return e;
}
function Qa(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var a = t[r], i = Ka(e, a);
    n(i, a) && Ya(s, Dt(a, e), i);
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
const ti = ei, ni = (e) => e === void 0, un = (e) => typeof e == "boolean", Re = (e) => typeof e == "number", It = (e) => typeof Element > "u" ? !1 : e instanceof Element, oi = (e) => tt(e) ? !Number.isNaN(Number(e)) : !1;
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
  if (Re(e) || oi(e))
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
    return (t, n) => (I(), F("svg", {
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
    return (t, n) => (I(), F("svg", {
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
const zo = "__epPropKey", A = (e) => e, ui = (e) => en(e) && !!e[zo], dn = (e, t) => {
  if (!en(e) || ui(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: a } = e, l = {
    type: s,
    required: !!r,
    validator: n || a ? (c) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), zn(e, "default") && m.push(o), d || (d = m.includes(c))), a && (d || (d = a(c))), !d && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        $r(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [zo]: !0
  };
  return zn(e, "default") && (l.default = o), l;
}, U = (e) => Gt(Object.entries(e).map(([t, n]) => [
  t,
  dn(n, t)
])), di = A([
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
}, pi = (e, t) => (e.install = (n) => {
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
}, gi = Symbol("namespaceContextKey"), pn = (e) => {
  const t = e || (Ge() ? H(gi, S(zt)) : S(zt));
  return b(() => u(t) || zt);
}, ae = (e, t) => {
  const n = pn(t);
  return {
    namespace: n,
    b: (v = "") => Oe(n.value, e, v, "", ""),
    e: (v) => v ? Oe(n.value, e, "", v, "") : "",
    m: (v) => v ? Oe(n.value, e, "", "", v) : "",
    be: (v, g) => v && g ? Oe(n.value, e, v, g, "") : "",
    em: (v, g) => v && g ? Oe(n.value, e, "", v, g) : "",
    bm: (v, g) => v && g ? Oe(n.value, e, v, "", g) : "",
    bem: (v, g, f) => v && g && f ? Oe(n.value, e, v, g, f) : "",
    is: (v, ...g) => {
      const f = g.length >= 1 ? g[0] : !0;
      return v && f ? `${mi}${v}` : "";
    },
    cssVar: (v) => {
      const g = {};
      for (const f in v)
        v[f] && (g[`--${n.value}-${f}`] = v[f]);
      return g;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const g = {};
      for (const f in v)
        v[f] && (g[`--${n.value}-${e}-${f}`] = v[f]);
      return g;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
}, hi = dn({
  type: A(Boolean),
  default: null
}), yi = dn({
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
      shouldProceed: c,
      onShow: d,
      onHide: m
    }) => {
      const h = Ge(), { emit: y } = h, p = h.props, v = b(() => ct(p[n])), g = b(() => p[e] === null), f = (C) => {
        a.value !== !0 && (a.value = !0, i && (i.value = C), ct(d) && d(C));
      }, _ = (C) => {
        a.value !== !1 && (a.value = !1, i && (i.value = C), ct(m) && m(C));
      }, T = (C) => {
        if (p.disabled === !0 || ct(c) && !c())
          return;
        const $ = v.value && se;
        $ && y(t, !0), (g.value || !$) && f(C);
      }, w = (C) => {
        if (p.disabled === !0 || !se)
          return;
        const $ = v.value && se;
        $ && y(t, !1), (g.value || !$) && _(C);
      }, P = (C) => {
        un(C) && (p.disabled && C ? v.value && y(t, !1) : a.value !== C && (C ? f() : _()));
      }, x = () => {
        a.value ? w() : T();
      };
      return B(() => p[e], P), l && h.appContext.config.globalProperties.$route !== void 0 && B(() => ({
        ...h.proxy.$route
      }), () => {
        l.value && a.value && w();
      }), _e(() => {
        P(p[e]);
      }), {
        hide: w,
        show: T,
        toggle: x,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
Jo("modelValue");
var Z = "top", oe = "bottom", re = "right", Y = "left", fn = "auto", ot = [Z, oe, re, Y], Ne = "start", Qe = "end", bi = "clippingParents", qo = "viewport", Ue = "popper", _i = "reference", Xn = ot.reduce(function(e, t) {
  return e.concat([t + "-" + Ne, t + "-" + Qe]);
}, []), vn = [].concat(ot, [fn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ne, t + "-" + Qe]);
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
function Fe(e) {
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
function Ri(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = a.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !ne(o) || !ue(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Go = { name: "applyStyles", enabled: !0, phase: "write", fn: Ai, effect: Ri, requires: ["computeStyles"] };
function ce(e) {
  return e.split("-")[0];
}
var Pe = Math.max, St = Math.min, De = Math.round;
function Be(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (ne(e) && t) {
    var s = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (r = De(n.width) / a || 1), s > 0 && (o = De(n.height) / s || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function gn(e) {
  var t = Be(e), n = e.offsetWidth, r = e.offsetHeight;
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
function Ni(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function we(e) {
  return ((Fe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bt(e) {
  return ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (mn(e) ? e.host : null) || we(e);
}
function eo(e) {
  return !ne(e) || ve(e).position === "fixed" ? null : e.offsetParent;
}
function Fi(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ne(e)) {
    var r = ve(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Bt(e);
  for (mn(o) && (o = o.host); ne(o) && ["html", "body"].indexOf(ue(o)) < 0; ) {
    var s = ve(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function rt(e) {
  for (var t = ie(e), n = eo(e); n && Ni(n) && ve(n).position === "static"; )
    n = eo(n);
  return n && (ue(n) === "html" || ue(n) === "body" && ve(n).position === "static") ? t : n || Fi(e) || t;
}
function hn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function We(e, t, n) {
  return Pe(e, St(t, n));
}
function Di(e, t, n) {
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
var Bi = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qo(typeof e != "number" ? e : Xo(e, ot));
};
function ki(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = ce(n.placement), l = hn(i), c = [Y, re].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!s || !a)) {
    var m = Bi(o.padding, n), h = gn(s), y = l === "y" ? Z : Y, p = l === "y" ? oe : re, v = n.rects.reference[d] + n.rects.reference[l] - a[l] - n.rects.popper[d], g = a[l] - n.rects.reference[l], f = rt(s), _ = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, T = v / 2 - g / 2, w = m[y], P = _ - h[d] - m[p], x = _ / 2 - h[d] / 2 + T, C = We(w, x, P), $ = l;
    n.modifiersData[r] = (t = {}, t[$] = C, t.centerOffset = C - x, t);
  }
}
function ji(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Zo(t.elements.popper, o) || (t.elements.arrow = o));
}
var Li = { name: "arrow", enabled: !0, phase: "main", fn: ki, effect: ji, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ke(e) {
  return e.split("-")[1];
}
var Mi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hi(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: De(t * o) / o || 0, y: De(n * o) / o || 0 };
}
function to(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, m = e.isFixed, h = a.x, y = h === void 0 ? 0 : h, p = a.y, v = p === void 0 ? 0 : p, g = typeof d == "function" ? d({ x: y, y: v }) : { x: y, y: v };
  y = g.x, v = g.y;
  var f = a.hasOwnProperty("x"), _ = a.hasOwnProperty("y"), T = Y, w = Z, P = window;
  if (c) {
    var x = rt(n), C = "clientHeight", $ = "clientWidth";
    if (x === ie(n) && (x = we(n), ve(x).position !== "static" && i === "absolute" && (C = "scrollHeight", $ = "scrollWidth")), x = x, o === Z || (o === Y || o === re) && s === Qe) {
      w = oe;
      var k = m && x === P && P.visualViewport ? P.visualViewport.height : x[C];
      v -= k - r.height, v *= l ? 1 : -1;
    }
    if (o === Y || (o === Z || o === oe) && s === Qe) {
      T = re;
      var R = m && x === P && P.visualViewport ? P.visualViewport.width : x[$];
      y -= R - r.width, y *= l ? 1 : -1;
    }
  }
  var j = Object.assign({ position: i }, c && Mi), D = d === !0 ? Hi({ x: y, y: v }) : { x: y, y: v };
  if (y = D.x, v = D.y, l) {
    var L;
    return Object.assign({}, j, (L = {}, L[w] = _ ? "0" : "", L[T] = f ? "0" : "", L.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", L));
  }
  return Object.assign({}, j, (t = {}, t[w] = _ ? v + "px" : "", t[T] = f ? y + "px" : "", t.transform = "", t));
}
function Ki(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = { placement: ce(t.placement), variation: ke(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, to(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, to(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var er = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ki, data: {} }, ut = { passive: !0 };
function Ui(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, a = r.resize, i = a === void 0 ? !0 : a, l = ie(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, ut);
  }), i && l.addEventListener("resize", n.update, ut), function() {
    s && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ut);
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
  return Be(we(e)).left + yn(e).scrollLeft;
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
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : ne(e) && _n(e) ? e : nr(Bt(e));
}
function Je(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = nr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ie(r), a = o ? [s].concat(s.visualViewport || [], _n(r) ? r : []) : r, i = t.concat(a);
  return o ? i : i.concat(Je(Bt(a)));
}
function Zt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function qi(e) {
  var t = Be(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function oo(e, t) {
  return t === qo ? Zt(Wi(e)) : Fe(t) ? qi(t) : Zt(Ji(we(e)));
}
function Gi(e) {
  var t = Je(Bt(e)), n = ["absolute", "fixed"].indexOf(ve(e).position) >= 0, r = n && ne(e) ? rt(e) : e;
  return Fe(r) ? t.filter(function(o) {
    return Fe(o) && Zo(o, r) && ue(o) !== "body";
  }) : [];
}
function Zi(e, t, n) {
  var r = t === "clippingParents" ? Gi(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], a = o.reduce(function(i, l) {
    var c = oo(e, l);
    return i.top = Pe(c.top, i.top), i.right = St(c.right, i.right), i.bottom = St(c.bottom, i.bottom), i.left = Pe(c.left, i.left), i;
  }, oo(e, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function or(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ce(r) : null, s = r ? ke(r) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
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
  var c = o ? hn(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case Ne:
        l[c] = l[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Qe:
        l[c] = l[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Xe(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, a = s === void 0 ? bi : s, i = n.rootBoundary, l = i === void 0 ? qo : i, c = n.elementContext, d = c === void 0 ? Ue : c, m = n.altBoundary, h = m === void 0 ? !1 : m, y = n.padding, p = y === void 0 ? 0 : y, v = Qo(typeof p != "number" ? p : Xo(p, ot)), g = d === Ue ? _i : Ue, f = e.rects.popper, _ = e.elements[h ? g : d], T = Zi(Fe(_) ? _ : _.contextElement || we(e.elements.popper), a, l), w = Be(e.elements.reference), P = or({ reference: w, element: f, strategy: "absolute", placement: o }), x = Zt(Object.assign({}, f, P)), C = d === Ue ? x : w, $ = { top: T.top - C.top + v.top, bottom: C.bottom - T.bottom + v.bottom, left: T.left - C.left + v.left, right: C.right - T.right + v.right }, k = e.modifiersData.offset;
  if (d === Ue && k) {
    var R = k[o];
    Object.keys($).forEach(function(j) {
      var D = [re, oe].indexOf(j) >= 0 ? 1 : -1, L = [Z, oe].indexOf(j) >= 0 ? "y" : "x";
      $[j] += R[L] * D;
    });
  }
  return $;
}
function Yi(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? vn : l, d = ke(r), m = d ? i ? Xn : Xn.filter(function(p) {
    return ke(p) === d;
  }) : ot, h = m.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(p, v) {
    return p[v] = Xe(e, { placement: v, boundary: o, rootBoundary: s, padding: a })[ce(v)], p;
  }, {});
  return Object.keys(y).sort(function(p, v) {
    return y[p] - y[v];
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
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, c = n.padding, d = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, p = y === void 0 ? !0 : y, v = n.allowedAutoPlacements, g = t.options.placement, f = ce(g), _ = f === g, T = l || (_ || !p ? [mt(g)] : Qi(g)), w = [g].concat(T).reduce(function(Ee, de) {
      return Ee.concat(ce(de) === fn ? Yi(t, { placement: de, boundary: d, rootBoundary: m, padding: c, flipVariations: p, allowedAutoPlacements: v }) : de);
    }, []), P = t.rects.reference, x = t.rects.popper, C = /* @__PURE__ */ new Map(), $ = !0, k = w[0], R = 0; R < w.length; R++) {
      var j = w[R], D = ce(j), L = ke(j) === Ne, J = [Z, oe].indexOf(D) >= 0, z = J ? "width" : "height", M = Xe(t, { placement: j, boundary: d, rootBoundary: m, altBoundary: h, padding: c }), E = J ? L ? re : Y : L ? oe : Z;
      P[z] > x[z] && (E = mt(E));
      var q = mt(E), le = [];
      if (s && le.push(M[D] <= 0), i && le.push(M[E] <= 0, M[q] <= 0), le.every(function(Ee) {
        return Ee;
      })) {
        k = j, $ = !1;
        break;
      }
      C.set(j, le);
    }
    if ($)
      for (var st = p ? 3 : 1, Lt = function(Ee) {
        var de = w.find(function(it) {
          var He = C.get(it);
          if (He)
            return He.slice(0, Ee).every(function(Se) {
              return Se;
            });
        });
        if (de)
          return k = de, "break";
      }, Me = st; Me > 0; Me--) {
        var at = Lt(Me);
        if (at === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
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
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = Xe(t, { elementContext: "reference" }), i = Xe(t, { altBoundary: !0 }), l = ro(a, r), c = ro(i, o, s), d = so(l), m = so(c);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var nl = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: tl };
function ol(e, t, n) {
  var r = ce(e), o = [Y, Z].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * o, [Y, re].indexOf(r) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function rl(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, a = vn.reduce(function(d, m) {
    return d[m] = ol(m, t.rects, s), d;
  }, {}), i = a[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, c = n.rootBoundary, d = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, p = n.tetherOffset, v = p === void 0 ? 0 : p, g = Xe(t, { boundary: l, rootBoundary: c, padding: m, altBoundary: d }), f = ce(t.placement), _ = ke(t.placement), T = !_, w = hn(f), P = il(w), x = t.modifiersData.popperOffsets, C = t.rects.reference, $ = t.rects.popper, k = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, R = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (x) {
    if (s) {
      var L, J = w === "y" ? Z : Y, z = w === "y" ? oe : re, M = w === "y" ? "height" : "width", E = x[w], q = E + g[J], le = E - g[z], st = y ? -$[M] / 2 : 0, Lt = _ === Ne ? C[M] : $[M], Me = _ === Ne ? -$[M] : -C[M], at = t.elements.arrow, Ee = y && at ? gn(at) : { width: 0, height: 0 }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Yo(), it = de[J], He = de[z], Se = We(0, C[M], Ee[M]), br = T ? C[M] / 2 - st - Se - it - R.mainAxis : Lt - Se - it - R.mainAxis, _r = T ? -C[M] / 2 + st + Se + He + R.mainAxis : Me + Se + He + R.mainAxis, Mt = t.elements.arrow && rt(t.elements.arrow), wr = Mt ? w === "y" ? Mt.clientTop || 0 : Mt.clientLeft || 0 : 0, In = (L = j == null ? void 0 : j[w]) != null ? L : 0, Er = E + br - In - wr, Cr = E + _r - In, $n = We(y ? St(q, Er) : q, E, y ? Pe(le, Cr) : le);
      x[w] = $n, D[w] = $n - E;
    }
    if (i) {
      var Sn, Or = w === "x" ? Z : Y, Tr = w === "x" ? oe : re, Ce = x[P], lt = P === "y" ? "height" : "width", xn = Ce + g[Or], An = Ce - g[Tr], Ht = [Z, Y].indexOf(f) !== -1, Rn = (Sn = j == null ? void 0 : j[P]) != null ? Sn : 0, Nn = Ht ? xn : Ce - C[lt] - $[lt] - Rn + R.altAxis, Fn = Ht ? Ce + C[lt] + $[lt] - Rn - R.altAxis : An, Dn = y && Ht ? Di(Nn, Ce, Fn) : We(y ? Nn : xn, Ce, y ? Fn : An);
      x[P] = Dn, D[P] = Dn - Ce;
    }
    t.modifiersData[r] = D;
  }
}
var cl = { name: "preventOverflow", enabled: !0, phase: "main", fn: ll, requiresIfExists: ["offset"] };
function ul(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function dl(e) {
  return e === ie(e) || !ne(e) ? yn(e) : ul(e);
}
function pl(e) {
  var t = e.getBoundingClientRect(), n = De(t.width) / e.offsetWidth || 1, r = De(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fl(e, t, n) {
  n === void 0 && (n = !1);
  var r = ne(t), o = ne(t) && pl(t), s = we(t), a = Be(e, o), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((ue(t) !== "body" || _n(s)) && (i = dl(t)), ne(t) ? (l = Be(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = bn(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
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
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ao, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, h = { state: c, setOptions: function(v) {
      var g = typeof v == "function" ? v(c.options) : v;
      p(), c.options = Object.assign({}, s, c.options, g), c.scrollParents = { reference: Fe(a) ? Je(a) : a.contextElement ? Je(a.contextElement) : [], popper: Je(i) };
      var f = ml(hl([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = f.filter(function(_) {
        return _.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var v = c.elements, g = v.reference, f = v.popper;
        if (io(g, f)) {
          c.rects = { reference: fl(g, rt(f), c.options.strategy === "fixed"), popper: gn(f) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var _ = 0; _ < c.orderedModifiers.length; _++) {
            if (c.reset === !0) {
              c.reset = !1, _ = -1;
              continue;
            }
            var T = c.orderedModifiers[_], w = T.fn, P = T.options, x = P === void 0 ? {} : P, C = T.name;
            typeof w == "function" && (c = w({ state: c, options: x, name: C, instance: h }) || c);
          }
        }
      }
    }, update: gl(function() {
      return new Promise(function(v) {
        h.forceUpdate(), v(c);
      });
    }), destroy: function() {
      p(), m = !0;
    } };
    if (!io(a, i))
      return h;
    h.setOptions(l).then(function(v) {
      !m && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function y() {
      c.orderedModifiers.forEach(function(v) {
        var g = v.name, f = v.options, _ = f === void 0 ? {} : f, T = v.effect;
        if (typeof T == "function") {
          var w = T({ state: c, name: g, instance: h, options: _ }), P = function() {
          };
          d.push(w || P);
        }
      });
    }
    function p() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return h;
  };
}
wn();
var yl = [tr, rr, er, Go];
wn({ defaultModifiers: yl });
var bl = [tr, rr, er, Go, sl, el, cl, Li, nl], _l = wn({ defaultModifiers: bl });
const wl = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const c = El(l);
      Object.assign(a.value, c);
    },
    requires: ["computeStyles"]
  }, o = b(() => {
    const { onFirstUpdate: l, placement: c, strategy: d, modifiers: m } = u(n);
    return {
      onFirstUpdate: l,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Sr(), a = S({
    styles: {
      popper: {
        position: u(o).strategy,
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
  return B(o, (l) => {
    const c = u(s);
    c && c.setOptions(l);
  }, {
    deep: !0
  }), B([e, t], ([l, c]) => {
    i(), !(!l || !c) && (s.value = _l(l, c, u(o)));
  }), me(() => {
    i();
  }), {
    state: b(() => {
      var l;
      return { ...((l = u(s)) == null ? void 0 : l.state) || {} };
    }),
    styles: b(() => u(a).styles),
    attributes: b(() => u(a).attributes),
    update: () => {
      var l;
      return (l = u(s)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = u(s)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: b(() => u(s))
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
  return No(() => n()), {
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
  const n = pn();
  return b(() => u(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
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
  const e = pn(), t = En(), n = b(() => `${e.value}-popper-container-${t.prefix}`), r = b(() => `#${n.value}`);
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
    onOpen: (d) => {
      s(() => {
        r(d);
        const m = u(n);
        Re(m) && m > 0 && a(() => {
          o(d);
        }, m);
      }, u(e));
    },
    onClose: (d) => {
      i(), s(() => {
        o(d);
      }, u(t));
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
}, fo = S(0), Rl = 2e3, vo = Symbol("elZIndexContextKey"), Nl = Symbol("zIndexContextKey"), Fl = (e) => {
  const t = Ge() ? H(vo, po) : po, n = e || (Ge() ? H(Nl, void 0) : void 0), r = b(() => {
    const a = u(n);
    return Re(a) ? a : Rl;
  }), o = b(() => r.value + fo.value), s = () => (t.current++, fo.value = t.current, o.value);
  return !se && !H(vo) && Ye("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: s
  };
}, Dl = U({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), ir = (e) => ti(Dl, e);
var W = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Bl = U({
  size: {
    type: A([Number, String])
  },
  color: {
    type: String
  }
}), kl = O({
  name: "ElIcon",
  inheritAttrs: !1
}), jl = /* @__PURE__ */ O({
  ...kl,
  props: Bl,
  setup(e) {
    const t = e, n = ae("icon"), r = b(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: ni(o) ? void 0 : Uo(o),
        "--color": s
      };
    });
    return (o, s) => (I(), F("i", ge({
      class: u(n).b(),
      style: u(r)
    }, o.$attrs), [
      N(o.$slots, "default")
    ], 16));
  }
});
var Ll = /* @__PURE__ */ W(jl, [["__file", "icon.vue"]]);
const lr = nt(Ll), mo = Symbol("formItemContextKey"), Cn = Symbol("popper"), cr = Symbol("popperContent"), Ml = [
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
    return t(l), V(Cn, l), (c, d) => N(c.$slots, "default");
  }
});
var Ul = /* @__PURE__ */ W(Kl, [["__file", "popper.vue"]]);
const dr = U({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), zl = O({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Vl = /* @__PURE__ */ O({
  ...zl,
  props: dr,
  setup(e, { expose: t }) {
    const n = e, r = ae("popper"), { arrowOffset: o, arrowRef: s, arrowStyle: a } = H(cr, void 0);
    return B(() => n.arrowOffset, (i) => {
      o.value = i;
    }), me(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, l) => (I(), F("span", {
      ref_key: "arrowRef",
      ref: s,
      class: Q(u(r).e("arrow")),
      style: xt(u(a)),
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
      const l = pr(i);
      return l ? At(Ar(l, n), [[s]]) : (Ye(Vt, "no valid child node found"), null);
    };
  }
});
function pr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (en(n))
      switch (n.type) {
        case Nr:
          continue;
        case Rr:
        case "svg":
          return go(n);
        case vt:
          return pr(n.children);
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
    let c;
    return _e(() => {
      B(() => n.virtualRef, (d) => {
        d && (o.value = Te(d));
      }, {
        immediate: !0
      }), B(o, (d, m) => {
        c == null || c(), c = void 0, It(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((h) => {
          var y;
          const p = n[h];
          p && (d.addEventListener(h.slice(2).toLowerCase(), p), (y = m == null ? void 0 : m.removeEventListener) == null || y.call(m, h.slice(2).toLowerCase(), p));
        }), c = B([s, a, i, l], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((y, p) => {
            cn(h[p]) ? d.removeAttribute(y) : d.setAttribute(y, h[p]);
          });
        }, { immediate: !0 })), It(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), me(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: o
    }), (d, m) => d.virtualTriggering ? fe("v-if", !0) : (I(), X(u(Jl), ge({ key: 0 }, d.$attrs, {
      "aria-controls": u(s),
      "aria-describedby": u(a),
      "aria-expanded": u(l),
      "aria-haspopup": u(i)
    }), {
      default: K(() => [
        N(d.$slots, "default")
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
}, yo = "focusAfterTrapped", bo = "focusAfterReleased", Xl = Symbol("elFocusTrap"), On = S(), kt = S(0), Tn = S(0);
let dt = 0;
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
}, Eo = oc(), sc = () => kt.value > Tn.value, pt = () => {
  On.value = "pointer", kt.value = window.performance.now();
}, Co = () => {
  On.value = "keyboard", kt.value = window.performance.now();
}, ac = () => (_e(() => {
  dt === 0 && (document.addEventListener("mousedown", pt), document.addEventListener("touchstart", pt), document.addEventListener("keydown", Co)), dt++;
}), me(() => {
  dt--, dt <= 0 && (document.removeEventListener("mousedown", pt), document.removeEventListener("touchstart", pt), document.removeEventListener("keydown", Co));
}), {
  focusReason: On,
  lastUserFocusTimestamp: kt,
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
      const { key: v, altKey: g, ctrlKey: f, metaKey: _, currentTarget: T, shiftKey: w } = p, { loop: P } = e, x = v === $t.tab && !g && !f && !_, C = document.activeElement;
      if (x && C) {
        const $ = T, [k, R] = tc($);
        if (k && R) {
          if (!w && C === R) {
            const D = ft({
              focusReason: s.value
            });
            t("focusout-prevented", D), D.defaultPrevented || (p.preventDefault(), P && he(k, !0));
          } else if (w && [k, $].includes(C)) {
            const D = ft({
              focusReason: s.value
            });
            t("focusout-prevented", D), D.defaultPrevented || (p.preventDefault(), P && he(R, !0));
          }
        } else if (C === $) {
          const D = ft({
            focusReason: s.value
          });
          t("focusout-prevented", D), D.defaultPrevented || p.preventDefault();
        }
      }
    };
    V(Xl, {
      focusTrapRef: n,
      onKeydown: i
    }), B(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), B([n], ([p], [v]) => {
      p && (p.addEventListener("keydown", i), p.addEventListener("focusin", d), p.addEventListener("focusout", m)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", m));
    });
    const l = (p) => {
      t(yo, p);
    }, c = (p) => t(bo, p), d = (p) => {
      const v = u(n);
      if (!v)
        return;
      const g = p.target, f = p.relatedTarget, _ = g && v.contains(g);
      e.trapped || f && v.contains(f) || (r = f), _ && t("focusin", p), !a.paused && e.trapped && (_ ? o = g : he(o, !0));
    }, m = (p) => {
      const v = u(n);
      if (!(a.paused || !v))
        if (e.trapped) {
          const g = p.relatedTarget;
          !cn(g) && !v.contains(g) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const f = ft({
                focusReason: s.value
              });
              t("focusout-prevented", f), f.defaultPrevented || he(o, !0);
            }
          }, 0);
        } else {
          const g = p.target;
          g && v.contains(g) || t("focusout", p);
        }
    };
    async function h() {
      await Bn();
      const p = u(n);
      if (p) {
        Eo.push(a);
        const v = p.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !p.contains(v)) {
          const f = new Event(Wt, ho);
          p.addEventListener(Wt, l), p.dispatchEvent(f), f.defaultPrevented || Bn(() => {
            let _ = e.focusStartEl;
            tt(_) || (he(_), document.activeElement !== _ && (_ = "first")), _ === "first" && rc(vr(p), !0), (document.activeElement === v || _ === "container") && he(p);
          });
        }
      }
    }
    function y() {
      const p = u(n);
      if (p) {
        p.removeEventListener(Wt, l);
        const v = new CustomEvent(Jt, {
          ...ho,
          detail: {
            focusReason: s.value
          }
        });
        p.addEventListener(Jt, c), p.dispatchEvent(v), !v.defaultPrevented && (s.value == "keyboard" || !sc() || p.contains(document.activeElement)) && he(r ?? document.body), p.removeEventListener(Jt, c), Eo.remove(a);
      }
    }
    return _e(() => {
      e.trapped && h(), B(() => e.trapped, (p) => {
        p ? h() : y();
      });
    }), me(() => {
      e.trapped && y();
    }), {
      onKeydown: i
    };
  }
});
function lc(e, t, n, r, o, s) {
  return N(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var cc = /* @__PURE__ */ W(ic, [["render", lc], ["__file", "focus-trap.vue"]]);
const uc = ["fixed", "absolute"], dc = U({
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
  ...dc,
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
}), pc = {
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
    var f;
    const _ = u(s), T = (f = u(a)) != null ? f : hc;
    return {
      name: "arrow",
      enabled: !Za(_),
      options: {
        element: _,
        padding: T
      }
    };
  }), c = b(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...fc(e, [
      u(l),
      u(i)
    ])
  })), d = b(() => vc(e.referenceEl) || u(r)), { attributes: m, state: h, styles: y, update: p, forceUpdate: v, instanceRef: g } = wl(d, n, c);
  return B(g, (f) => t.value = f), _e(() => {
    B(() => {
      var f;
      return (f = u(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: m,
    arrowRef: s,
    contentRef: n,
    instanceRef: g,
    state: h,
    styles: y,
    role: o,
    forceUpdate: v,
    update: p
  };
}, bc = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Fl(), s = ae("popper"), a = b(() => u(t).popper), i = S(Re(e.zIndex) ? e.zIndex : o()), l = b(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), c = b(() => [
    { zIndex: u(i) },
    u(n).popper,
    e.popperStyle || {}
  ]), d = b(() => r.value === "dialog" ? "false" : void 0), m = b(() => u(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: a,
    contentClass: l,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Re(e.zIndex) ? e.zIndex : o();
    }
  };
}, _c = (e, t) => {
  const n = S(!1), r = S();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var d;
      ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
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
  emits: pc,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = _c(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: p, instanceRef: v, role: g, update: f } = yc(r), {
      ariaModal: _,
      arrowStyle: T,
      contentAttrs: w,
      contentClass: P,
      contentStyle: x,
      updateZIndex: C
    } = bc(r, {
      styles: p,
      attributes: m,
      role: g
    }), $ = H(mo, void 0), k = S();
    V(cr, {
      arrowStyle: T,
      arrowRef: h,
      arrowOffset: k
    }), $ && ($.addInputId || $.removeInputId) && V(mo, {
      ...$,
      addInputId: Ot,
      removeInputId: Ot
    });
    let R;
    const j = (L = !0) => {
      f(), L && C();
    }, D = () => {
      j(!1), r.visible && r.focusOnShow ? s.value = !0 : r.visible === !1 && (s.value = !1);
    };
    return _e(() => {
      B(() => r.triggerTargetEl, (L, J) => {
        R == null || R(), R = void 0;
        const z = u(L || y.value), M = u(J || y.value);
        It(z) && (R = B([g, () => r.ariaLabel, _, () => r.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((q, le) => {
            cn(E[le]) ? z.removeAttribute(q) : z.setAttribute(q, E[le]);
          });
        }, { immediate: !0 })), M !== z && It(M) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          M.removeAttribute(E);
        });
      }, { immediate: !0 }), B(() => r.visible, D, { immediate: !0 });
    }), me(() => {
      R == null || R(), R = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: v,
      updatePopper: j,
      contentStyle: x
    }), (L, J) => (I(), F("div", ge({
      ref_key: "contentRef",
      ref: y
    }, u(w), {
      style: u(x),
      class: u(P),
      tabindex: "-1",
      onMouseenter: J[0] || (J[0] = (z) => L.$emit("mouseenter", z)),
      onMouseleave: J[1] || (J[1] = (z) => L.$emit("mouseleave", z))
    }), [
      te(u(cc), {
        trapped: u(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": u(y),
        "focus-start-el": u(o),
        onFocusAfterTrapped: u(i),
        onFocusAfterReleased: u(a),
        onFocusin: u(l),
        onFocusoutPrevented: u(c),
        onReleaseRequested: u(d)
      }, {
        default: K(() => [
          N(L.$slots, "default")
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
  ...dr,
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
], xc = (e, t) => Do(e) ? e.includes(t) : e === t, xe = (e, t, n) => (r) => {
  xc(u(e), t) && n(r);
}, Ac = O({
  name: "ElTooltipTrigger"
}), Rc = /* @__PURE__ */ O({
  ...Ac,
  props: et,
  setup(e, { expose: t }) {
    const n = e, r = ae("tooltip"), { controlled: o, id: s, open: a, onOpen: i, onClose: l, onToggle: c } = H(Pn, void 0), d = S(null), m = () => {
      if (u(o) || n.disabled)
        return !0;
    }, h = ze(n, "trigger"), y = pe(m, xe(h, "hover", i)), p = pe(m, xe(h, "hover", l)), v = pe(m, xe(h, "click", (w) => {
      w.button === 0 && c(w);
    })), g = pe(m, xe(h, "focus", i)), f = pe(m, xe(h, "focus", l)), _ = pe(m, xe(h, "contextmenu", (w) => {
      w.preventDefault(), c(w);
    })), T = pe(m, (w) => {
      const { code: P } = w;
      n.triggerKeys.includes(P) && (w.preventDefault(), c(w));
    });
    return t({
      triggerRef: d
    }), (w, P) => (I(), X(u(Zl), {
      id: u(s),
      "virtual-ref": w.virtualRef,
      open: u(a),
      "virtual-triggering": w.virtualTriggering,
      class: Q(u(r).e("trigger")),
      onBlur: u(f),
      onClick: u(v),
      onContextmenu: u(_),
      onFocus: u(g),
      onMouseenter: u(y),
      onMouseleave: u(p),
      onKeydown: u(T)
    }, {
      default: K(() => [
        N(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Nc = /* @__PURE__ */ W(Rc, [["__file", "trigger.vue"]]);
const Fc = O({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Dc = /* @__PURE__ */ O({
  ...Fc,
  props: ee,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = sr(), o = ae("tooltip"), s = S(null), a = S(!1), {
      controlled: i,
      id: l,
      open: c,
      trigger: d,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: p,
      onBeforeShow: v,
      onBeforeHide: g
    } = H(Pn, void 0), f = b(() => n.transition || `${o.namespace.value}-fade-in-linear`), _ = b(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    me(() => {
      a.value = !0;
    });
    const T = b(() => u(_) ? !0 : u(c)), w = b(() => n.disabled ? !1 : u(c)), P = b(() => n.appendTo || r.value), x = b(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), C = b(() => !u(c)), $ = () => {
      p();
    }, k = () => {
      if (u(i))
        return !0;
    }, R = pe(k, () => {
      n.enterable && u(d) === "hover" && h();
    }), j = pe(k, () => {
      u(d) === "hover" && m();
    }), D = () => {
      var E, q;
      (q = (E = s.value) == null ? void 0 : E.updatePopper) == null || q.call(E), v == null || v();
    }, L = () => {
      g == null || g();
    }, J = () => {
      y(), M = Ur(b(() => {
        var E;
        return (E = s.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (u(i))
          return;
        u(d) !== "hover" && m();
      });
    }, z = () => {
      n.virtualTriggering || m();
    };
    let M;
    return B(() => u(c), (E) => {
      E || M == null || M();
    }, {
      flush: "post"
    }), B(() => n.content, () => {
      var E, q;
      (q = (E = s.value) == null ? void 0 : E.updatePopper) == null || q.call(E);
    }), t({
      contentRef: s
    }), (E, q) => (I(), X(Fr, {
      disabled: !E.teleported,
      to: u(P)
    }, [
      te(Io, {
        name: u(f),
        onAfterLeave: $,
        onBeforeEnter: D,
        onAfterEnter: J,
        onBeforeLeave: L
      }, {
        default: K(() => [
          u(T) ? At((I(), X(u(Cc), ge({
            key: 0,
            id: u(l),
            ref_key: "contentRef",
            ref: s
          }, E.$attrs, {
            "aria-label": E.ariaLabel,
            "aria-hidden": u(C),
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
            "popper-style": [E.popperStyle, u(x)],
            "reference-el": E.referenceEl,
            "trigger-target-el": E.triggerTargetEl,
            visible: u(w),
            "z-index": E.zIndex,
            onMouseenter: u(R),
            onMouseleave: u(j),
            onBlur: z,
            onClose: u(m)
          }), {
            default: K(() => [
              a.value ? fe("v-if", !0) : N(E.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Qt, u(w)]
          ]) : fe("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Bc = /* @__PURE__ */ W(Dc, [["__file", "content.vue"]]);
const kc = ["innerHTML"], jc = { key: 1 }, Lc = O({
  name: "ElTooltip"
}), Mc = /* @__PURE__ */ O({
  ...Lc,
  props: $c,
  emits: Sc,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Il();
    const o = Ol(), s = S(), a = S(), i = () => {
      var f;
      const _ = u(s);
      _ && ((f = _.popperInstanceRef) == null || f.update());
    }, l = S(!1), c = S(), { show: d, hide: m, hasUpdateHandler: h } = Ic({
      indicator: l,
      toggleReason: c
    }), { onOpen: y, onClose: p } = Sl({
      showAfter: ze(r, "showAfter"),
      hideAfter: ze(r, "hideAfter"),
      autoClose: ze(r, "autoClose"),
      open: d,
      close: m
    }), v = b(() => un(r.visible) && !h.value);
    V(Pn, {
      controlled: v,
      id: o,
      open: Dr(l),
      trigger: ze(r, "trigger"),
      onOpen: (f) => {
        y(f);
      },
      onClose: (f) => {
        p(f);
      },
      onToggle: (f) => {
        u(l) ? p(f) : y(f);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: i
    }), B(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const g = (f) => {
      var _, T;
      const w = (T = (_ = a.value) == null ? void 0 : _.contentRef) == null ? void 0 : T.popperContentRef, P = (f == null ? void 0 : f.relatedTarget) || document.activeElement;
      return w && w.contains(P);
    };
    return Br(() => l.value && m()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: g,
      updatePopper: i,
      onOpen: y,
      onClose: p,
      hide: m
    }), (f, _) => (I(), X(u(Oc), {
      ref_key: "popperRef",
      ref: s,
      role: f.role
    }, {
      default: K(() => [
        te(Nc, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: K(() => [
            f.$slots.default ? N(f.$slots, "default", { key: 0 }) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        te(Bc, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": f.ariaLabel,
          "boundaries-padding": f.boundariesPadding,
          content: f.content,
          disabled: f.disabled,
          effect: f.effect,
          enterable: f.enterable,
          "fallback-placements": f.fallbackPlacements,
          "hide-after": f.hideAfter,
          "gpu-acceleration": f.gpuAcceleration,
          offset: f.offset,
          persistent: f.persistent,
          "popper-class": f.popperClass,
          "popper-style": f.popperStyle,
          placement: f.placement,
          "popper-options": f.popperOptions,
          pure: f.pure,
          "raw-content": f.rawContent,
          "reference-el": f.referenceEl,
          "trigger-target-el": f.triggerTargetEl,
          "show-after": f.showAfter,
          strategy: f.strategy,
          teleported: f.teleported,
          transition: f.transition,
          "virtual-triggering": f.virtualTriggering,
          "z-index": f.zIndex,
          "append-to": f.appendTo
        }, {
          default: K(() => [
            N(f.$slots, "content", {}, () => [
              f.rawContent ? (I(), F("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, kc)) : (I(), F("span", jc, ye(f.content), 1))
            ]),
            f.showArrow ? (I(), X(u(Wl), {
              key: 0,
              "arrow-offset": f.arrowOffset
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
const Kc = nt(Hc), Oo = (e) => Re(e) || tt(e) || Do(e), Uc = U({
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
  return B(() => e.modelValue, () => n.value = Qn(e.modelValue), { deep: !0 }), V(gr, {
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
    }), (i, l) => (I(), F("div", {
      class: Q(u(a))
    }, [
      N(i.$slots, "default")
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
      name: u(t).b()
    }, kr(r)), {
      default: K(() => [
        N(o.$slots, "default")
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
    var h;
    return (h = e.name) != null ? h : `${n.value}-id-${s.prefix}-${u(a)}`;
  }), l = b(() => t == null ? void 0 : t.activeNames.value.includes(u(i)));
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
      e.disabled || (t == null || t.handleItemClick(u(i)), r.value = !1, o.value = !0);
    },
    handleEnterClick: () => {
      t == null || t.handleItemClick(u(i));
    }
  };
}, tu = (e, { focusing: t, isActive: n, id: r }) => {
  const o = ae("collapse"), s = b(() => [
    o.b("item"),
    o.is("active", u(n)),
    o.is("disabled", e.disabled)
  ]), a = b(() => [
    o.be("item", "header"),
    o.is("active", u(n)),
    { focusing: u(t) && !e.disabled }
  ]), i = b(() => [
    o.be("item", "arrow"),
    o.is("active", u(n))
  ]), l = b(() => o.be("item", "wrap")), c = b(() => o.be("item", "content")), d = b(() => o.b(`content-${u(r)}`)), m = b(() => o.b(`head-${u(r)}`));
  return {
    arrowKls: i,
    headKls: a,
    rootKls: s,
    itemWrapperKls: l,
    itemContentKls: c,
    scopedContentId: d,
    scopedHeadId: m
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
      arrowKls: c,
      headKls: d,
      rootKls: m,
      itemWrapperKls: h,
      itemContentKls: y,
      scopedContentId: p,
      scopedHeadId: v
    } = tu(n, { focusing: r, isActive: s, id: o });
    return t({
      isActive: s
    }), (g, f) => (I(), F("div", {
      class: Q(u(m))
    }, [
      G("button", {
        id: u(v),
        class: Q(u(d)),
        "aria-expanded": u(s),
        "aria-controls": u(p),
        "aria-describedby": u(p),
        tabindex: g.disabled ? -1 : 0,
        type: "button",
        onClick: f[0] || (f[0] = (..._) => u(i) && u(i)(..._)),
        onKeydown: f[1] || (f[1] = jr($o((..._) => u(l) && u(l)(..._), ["stop", "prevent"]), ["space", "enter"])),
        onFocus: f[2] || (f[2] = (..._) => u(a) && u(a)(..._)),
        onBlur: f[3] || (f[3] = (_) => r.value = !1)
      }, [
        N(g.$slots, "title", {}, () => [
          Rt(ye(g.title), 1)
        ]),
        te(u(lr), {
          class: Q(u(c))
        }, {
          default: K(() => [
            te(u(ii))
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, nu),
      te(u(Qc), null, {
        default: K(() => [
          At(G("div", {
            id: u(p),
            role: "region",
            class: Q(u(h)),
            "aria-hidden": !u(s),
            "aria-labelledby": u(v)
          }, [
            G("div", {
              class: Q(u(y))
            }, [
              N(g.$slots, "default")
            ], 2)
          ], 10, ou), [
            [Qt, u(s)]
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
  return N(e.$slots, "default");
}
var uu = /* @__PURE__ */ W(lu, [["render", cu], ["__file", "collection.vue"]]);
const du = /* @__PURE__ */ O({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function pu(e, t, n, r, o, s) {
  return N(e.$slots, "default");
}
var fu = /* @__PURE__ */ W(du, [["render", pu], ["__file", "collection-item.vue"]]);
const vu = "data-el-collection-item", mu = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), o = Symbol(n), s = {
    ...uu,
    name: t,
    setup() {
      const i = S(null), l = /* @__PURE__ */ new Map();
      V(r, {
        itemMap: l,
        getItems: () => {
          const d = u(i);
          if (!d)
            return [];
          const m = Array.from(d.querySelectorAll(`[${vu}]`));
          return [...l.values()].sort((y, p) => m.indexOf(y.ref) - m.indexOf(p.ref));
        },
        collectionRef: i
      });
    }
  }, a = {
    ...fu,
    name: n,
    setup(i, { attrs: l }) {
      const c = S(null), d = H(r, void 0);
      V(o, {
        collectionItemRef: c
      }), _e(() => {
        const m = u(c);
        m && d.itemMap.set(m, {
          ref: m,
          ...l
        });
      }), me(() => {
        const m = u(c);
        d.itemMap.delete(m);
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
    type: di
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
      return (g = u(a)) == null ? void 0 : g.popperRef;
    }), l = b(() => [
      {
        width: Uo(r.width)
      },
      r.popperStyle
    ]), c = b(() => [s.b(), r.popperClass, { [s.m("plain")]: !!r.content }]), d = b(() => r.transition === `${s.namespace.value}-fade-in-linear`), m = () => {
      var g;
      (g = a.value) == null || g.hide();
    }, h = () => {
      n("before-enter");
    }, y = () => {
      n("before-leave");
    }, p = () => {
      n("after-enter");
    }, v = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: i,
      hide: m
    }), (g, f) => (I(), X(u(Kc), ge({
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
      "popper-class": u(c),
      "popper-style": u(l),
      teleported: g.teleported,
      persistent: g.persistent,
      "gpu-acceleration": u(d),
      "onUpdate:visible": u(o),
      onBeforeShow: h,
      onBeforeHide: y,
      onShow: p,
      onHide: v
    }), {
      content: K(() => [
        g.title ? (I(), F("div", {
          key: 0,
          class: Q(u(s).e("title")),
          role: "title"
        }, ye(g.title), 3)) : fe("v-if", !0),
        N(g.$slots, "default", {}, () => [
          Rt(ye(g.content), 1)
        ])
      ]),
      default: K(() => [
        g.$slots.reference ? N(g.$slots, "reference", { key: 0 }) : fe("v-if", !0)
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
const Cu = "popover", Ou = pi(Eu, Cu), Tu = nt(wu, {
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
  return I(), F("svg", Pu, [...$u]);
}
const xu = { render: Su }, Au = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Ru = /* @__PURE__ */ G("path", {
  fill: "#FFEABB",
  d: "M851.349 383.512c43.677 6.347 61.117 60.021 29.512 90.828l-126.42 123.229a53.25 53.25 0 0 0-15.315 47.133l29.844 174.002c7.461 43.5-38.197 76.673-77.263 56.135l-156.263-82.152a53.25 53.25 0 0 0-49.559 0l-156.263 82.152c-39.066 20.538-84.724-12.635-77.263-56.135l29.844-174.002z"
}, null, -1), Nu = /* @__PURE__ */ G("path", {
  fill: "#F9C73D",
  d: "M716.565 911.044c-13.231.001-26.527-3.19-38.817-9.652L521.484 819.24a23.24 23.24 0 0 0-21.638 0l-156.264 82.152c-28.255 14.854-61.848 12.426-87.673-6.336-25.824-18.763-38.515-49.963-33.119-81.424l29.843-174.002a23.25 23.25 0 0 0-6.686-20.579l-126.42-123.229c-22.858-22.281-30.93-54.98-21.066-85.339s35.615-52.069 67.204-56.659l174.708-25.387a23.25 23.25 0 0 0 17.506-12.719l78.131-158.312C450.138 128.783 478.747 111 510.665 111c.002 0-.001 0 0 0 31.92 0 60.526 17.782 74.653 46.406l78.132 158.312a23.25 23.25 0 0 0 17.505 12.719l174.709 25.387c31.589 4.59 57.339 26.301 67.203 56.659s1.792 63.059-21.065 85.339l-126.42 123.229a23.25 23.25 0 0 0-6.687 20.578l29.844 174.003c5.396 31.461-7.294 62.661-33.119 81.424-14.591 10.6-31.667 15.987-48.855 15.988M510.666 171c-4.346 0-15.076 1.263-20.85 12.96l-78.132 158.312a83.23 83.23 0 0 1-62.682 45.542L174.295 413.2c-12.909 1.876-17.426 11.691-18.769 15.824s-3.458 14.728 5.883 23.833l126.419 123.229a83.23 83.23 0 0 1 23.942 73.688l-29.843 174.001c-2.205 12.856 5.734 20.186 9.249 22.74 3.516 2.555 12.939 7.838 24.485 1.77l156.264-82.152a83.23 83.23 0 0 1 77.479 0l156.263 82.152c11.548 6.071 20.97.785 24.485-1.77s11.454-9.884 9.249-22.74l-29.844-174.002a83.24 83.24 0 0 1 23.942-73.687l126.42-123.229c9.341-9.105 7.226-19.7 5.883-23.833s-5.859-13.948-18.769-15.824l-174.708-25.387a83.24 83.24 0 0 1-62.682-45.541L531.514 183.96c-5.773-11.697-16.503-12.96-20.848-12.96"
}, null, -1), Fu = [
  Ru,
  Nu
];
function Du(e, t) {
  return I(), F("svg", Au, [...Fu]);
}
const Bu = { render: Du }, ku = O({
  name: "ShowCollect"
}), ju = /* @__PURE__ */ O({
  ...ku,
  props: {
    isCollect: { type: Boolean },
    isShow: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => At((I(), F("div", null, [
      t.isCollect ? (I(), X(u(Bu), { key: 0 })) : (I(), X(u(xu), { key: 1 }))
    ], 512)), [
      [Qt, t.isCollect || t.isShow]
    ]);
  }
}), Lu = { class: "jlg-menu" }, Mu = {
  key: 0,
  class: "jlg-menu-logo"
}, Hu = { class: "jlg-menu-first-level-menu-icon" }, Ku = { class: "jlg-menu-first-level-menu-text" }, Uu = { class: "second-level-menu-title" }, zu = ["onMouseenter", "onMouseleave", "onClick"], Vu = { class: "show-collect" }, Wu = O({
  name: "JlgMenu"
}), Ju = /* @__PURE__ */ O({
  ...Wu,
  props: {
    menuData: {},
    collectMenuKeys: {},
    menuDataRecord: { default: () => ({
      title: "title",
      iconClass: "iconClass",
      key: "key",
      children: "children"
    }) },
    defaultActive: {},
    elPopoverProps: {}
  },
  emits: ["collectClick", "threeLevelMenuClick"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Xt(), s = S();
    function a(i) {
      return i.map((l) => ({
        ...l,
        _isShowCollect: !1,
        children: a(l[n.menuDataRecord.children] ?? [])
      }));
    }
    return B(
      () => n.menuData,
      (i) => {
        s.value = a(i);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (i, l) => {
      const c = Lr("dir"), d = Tu;
      return I(), F("div", Lu, [
        u(o).logo ? (I(), F("div", Mu, [
          N(i.$slots, "logo", {}, void 0, !0)
        ])) : fe("", !0),
        G("div", null, [
          (I(!0), F(vt, null, Ve(u(s), (m) => (I(), X(d, ge({
            key: m[n.menuDataRecord.key],
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
                  n.defaultActive === m[n.menuDataRecord.key] ? "jlg-menu-first-level-menu-selected" : "jlg-menu-first-level-menu-no-selected"
                ])
              }, [
                G("div", Hu, [
                  N(i.$slots, "first-menu-icon" + m[n.menuDataRecord.key], {}, () => [
                    m[n.menuDataRecord.iconClass] ? (I(), F("i", {
                      key: 0,
                      class: Q(m[n.menuDataRecord.iconClass])
                    }, null, 2)) : fe("", !0)
                  ], !0)
                ]),
                G("p", Ku, ye(m[n.menuDataRecord.title]), 1)
              ], 2)
            ]),
            default: K(() => [
              te(c, { class: "jlg-menu-popover" }, {
                default: K(() => [
                  (I(!0), F(vt, null, Ve(m[n.menuDataRecord.children], (h) => (I(), F("div", {
                    key: h[n.menuDataRecord.key],
                    class: "second-level-menu"
                  }, [
                    G("div", Uu, ye(h[n.menuDataRecord.title]), 1),
                    (I(!0), F(vt, null, Ve(h[n.menuDataRecord.children], (y) => (I(), F("div", {
                      key: y[n.menuDataRecord.key],
                      class: "three-level-menu-title",
                      onMouseenter: (p) => y._isShowCollect = !0,
                      onMouseleave: (p) => y._isShowCollect = !1,
                      onClick: (p) => r("threeLevelMenuClick", y, [m, h, y])
                    }, [
                      Rt(ye(y[n.menuDataRecord.title]) + " ", 1),
                      G("div", Vu, [
                        te(ju, {
                          "is-collect": n.collectMenuKeys.some((p) => p === y[n.menuDataRecord.key]),
                          "is-show": y._isShowCollect,
                          onClick: $o((p) => r("collectClick", y, [m, h, y]), ["stop"])
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
const jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ht = /* @__PURE__ */ jt(Ju, [["__scopeId", "data-v-cbd3b46f"]]);
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
    return (a, i) => (I(), F("div", {
      class: "grid-layout",
      style: xt(u(s))
    }, [
      N(a.$slots, "default")
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
    return (o, s) => (I(), F("div", {
      class: Q(["grid-cell", t.center ? "grid-cell-center" : ""]),
      style: xt(u(r))
    }, [
      N(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const bt = /* @__PURE__ */ jt(Zu, [["__scopeId", "data-v-14088da3"]]);
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
    const l = (m) => {
      var h;
      (h = document.querySelector("#" + i + m)) == null || h.scrollIntoView({
        behavior: "smooth"
      });
    }, c = /* @__PURE__ */ new Set();
    return V("addCollapseItem", (m) => {
      c.add(m);
    }), t({
      _ref: a,
      jumpAnchor: l,
      collapseItems: b(() => Array.from(c))
    }), (m, h) => {
      const y = au;
      return I(), X(y, ge({
        ref_key: "_ref",
        ref: a
      }, u(s)), xo({ _: 2 }, [
        Ve(u(o), (p, v) => ({
          name: v,
          fn: K(() => [
            N(m.$slots, v)
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
    disabled: { type: Boolean }
  },
  setup(e, { expose: t }) {
    const n = e, r = So(), o = Xt(), s = b(() => Object.keys(o).filter((d) => d !== "title")), a = S(null), i = b(() => ({
      ...n,
      ...r
    })), l = H("collapseKey"), c = H("addCollapseItem");
    return B(
      () => i.value,
      (d) => {
        d && c(d);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), t({
      _ref: a
    }), (d, m) => {
      const h = lr, y = iu;
      return I(), X(y, ge({
        id: u(l) + u(i).name,
        ref_key: "_ref",
        ref: a
      }, u(i)), xo({
        title: K(() => {
          var p;
          return [
            N(d.$slots, "title", { _ref: u(a) }, () => [
              Rt(ye(u(i).title), 1)
            ], !0),
            te(h, {
              class: Q(["el-collapse-item__arrow", (p = u(a)) != null && p.isActive ? "is-active" : "", "customize"])
            }, {
              default: K(() => [
                te(u(ci))
              ]),
              _: 1
            }, 8, ["class"])
          ];
        }),
        _: 2
      }, [
        Ve(u(s), (p) => ({
          name: p,
          fn: K(() => [
            N(d.$slots, p, {}, void 0, !0)
          ])
        }))
      ]), 1040, ["id"]);
    };
  }
});
const wt = /* @__PURE__ */ jt(Xu, [["__scopeId", "data-v-0a7d658a"]]);
wt.install = (e) => {
  e.component(wt.name, wt);
};
const ed = { class: "jlg-flex-layout" }, td = O({
  name: "JlgFlexLayout"
}), nd = /* @__PURE__ */ O({
  ...td,
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
    }), (o, s) => (I(), F("div", ed, [
      N(o.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Et = /* @__PURE__ */ jt(nd, [["__scopeId", "data-v-dd4f84ce"]]);
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
}, od = (e, t) => {
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
}, rd = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (let o = 0; o < r.length; o++)
      if (r[o].uid === t)
        return r.length;
  }
  return 0;
}, sd = O({
  name: "JlgFlexCell"
}), Ct = /* @__PURE__ */ O({
  ...sd,
  props: {
    col: {}
  },
  setup(e) {
    const t = e, n = H("flexLayoutProps"), r = H("flexLayoutCollectFlexCellPropsFn"), o = H("flexCellProps"), s = String((/* @__PURE__ */ new Date()).getTime()), a = b(() => {
      const c = t.col / n.col * 100 + "%", d = parseFloat(n.gap) * (l.value - 1) / l.value, m = `calc(${c} - ${d}${n.gap.replace(/\d+/g, "")})`, h = i.value.type === qe.尾部 ? "0px" : `calc(${n.gap})`;
      return { width: m, marginRight: h };
    }), i = b(() => od(Po(o.value, n.col), s)), l = b(() => rd(Po(o.value, n.col), s));
    return B(
      t,
      (c) => {
        c && r({
          uid: s,
          props: {
            ...c,
            uid: s
          }
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), (c, d) => (I(), F("div", {
      class: "jlg-flex-cell",
      style: xt(u(a))
    }, [
      N(c.$slots, "default")
    ], 4));
  }
});
Ct.install = (e) => {
  e.component(Ct.name, Ct);
};
const ad = [ht, yt, bt, _t, wt, Et, Ct], yr = function(e) {
  ad.forEach((t) => {
    t.name && e.component(t.name, t);
  });
};
typeof window < "u" && window.Vue && (window.JlgUi = { install: yr });
const ld = { install: yr };
export {
  _t as JlgCollapse,
  wt as JlgCollapseItem,
  Ct as JlgFlexCell,
  Et as JlgFlexLayout,
  bt as JlgGridCell,
  yt as JlgGridLayout,
  ht as JlgMenu,
  ld as default
};
