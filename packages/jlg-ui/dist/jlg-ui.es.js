import { getCurrentScope as Pr, onScopeDispose as Ir, unref as l, watch as j, defineComponent as O, openBlock as I, createElementBlock as R, createElementVNode as Z, warn as $r, getCurrentInstance as Ge, inject as H, ref as S, computed as b, onMounted as _e, shallowRef as Sr, onBeforeUnmount as me, onBeforeMount as xr, provide as V, mergeProps as ge, renderSlot as F, normalizeClass as W, normalizeStyle as At, withDirectives as Nt, cloneVNode as Ar, Fragment as mt, Text as Nr, Comment as Fr, createVNode as te, createBlock as X, withCtx as K, createCommentVNode as fe, nextTick as jn, toRef as ze, Teleport as Rr, Transition as Io, vShow as Qt, readonly as Br, onDeactivated as jr, toDisplayString as ye, toHandlers as kr, withKeys as Lr, withModifiers as $o, createTextVNode as Ft, useSlots as Xt, resolveComponent as Dr, renderList as Ve, useAttrs as So, createSlots as xo } from "vue";
const pe = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const s = e == null ? void 0 : e(o);
  if (n === !1 || !s)
    return t == null ? void 0 : t(o);
};
var kn;
const se = typeof window < "u", Mr = (e) => typeof e == "string", Ao = () => {
}, Hr = se && ((kn = window == null ? void 0 : window.navigator) == null ? void 0 : kn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function No(e) {
  return typeof e == "function" ? e() : l(e);
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
  }, i = (f, m, h, y) => (f.addEventListener(m, h, y), () => f.removeEventListener(m, h, y)), c = j(() => [Te(t), No(o)], ([f, m]) => {
    a(), f && s.push(...n.flatMap((h) => r.map((y) => i(f, h, y, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), a();
  };
  return Fo(u), u;
}
let Ln = !1;
function Ur(e, t, n = {}) {
  const { window: r = Ro, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!r)
    return;
  Hr && !Ln && (Ln = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Ao)));
  let i = !0;
  const c = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((v) => v === h.target || h.composedPath().includes(v));
    {
      const v = Te(y);
      return v && (h.target === v || h.composedPath().includes(v));
    }
  }), f = [
    Kt(r, "click", (h) => {
      const y = Te(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !c(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: s }),
    Kt(r, "pointerdown", (h) => {
      const y = Te(e);
      y && (i = !h.composedPath().includes(y) && !c(h));
    }, { passive: !0 }),
    a && Kt(r, "blur", (h) => {
      var y;
      const v = Te(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(v != null && v.contains(r.document.activeElement)) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
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
const Tt = () => {
}, Gr = Object.prototype.hasOwnProperty, zn = (e, t) => Gr.call(e, t), Bo = Array.isArray, ut = (e) => typeof e == "function", tt = (e) => typeof e == "string", en = (e) => e !== null && typeof e == "object";
var Zr = typeof global == "object" && global && global.Object === Object && global;
const Yr = Zr;
var Qr = typeof self == "object" && self && self.Object === Object && self, Xr = Yr || Qr || Function("return this")();
const tn = Xr;
var es = tn.Symbol;
const be = es;
var jo = Object.prototype, ts = jo.hasOwnProperty, ns = jo.toString, Ke = be ? be.toStringTag : void 0;
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
const Le = ds;
var ps = 1 / 0, Wn = be ? be.prototype : void 0, Jn = Wn ? Wn.toString : void 0;
function ko(e) {
  if (typeof e == "string")
    return e;
  if (Le(e))
    return us(e, ko) + "";
  if (rn(e))
    return Jn ? Jn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ps ? "-0" : t;
}
function Pt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function fs(e) {
  return e;
}
var vs = "[object AsyncFunction]", ms = "[object Function]", gs = "[object GeneratorFunction]", hs = "[object Proxy]";
function ys(e) {
  if (!Pt(e))
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
  if (!Pt(e) || _s(e))
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
var Rs = 800, Bs = 16, js = Date.now;
function ks(e) {
  var t = 0, n = 0;
  return function() {
    var r = js(), o = Bs - (r - n);
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
const It = Ds;
var Ms = It ? function(e, t) {
  return It(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ls(t),
    writable: !0
  });
} : fs;
const Hs = Ms;
var Ks = ks(Hs);
const Us = Ks;
var zs = 9007199254740991, Vs = /^(?:0|[1-9]\d*)$/;
function Lo(e, t) {
  var n = typeof e;
  return t = t ?? zs, !!t && (n == "number" || n != "symbol" && Vs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ws(e, t, n) {
  t == "__proto__" && It ? It(e, t, {
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
function Rt(e, t) {
  for (var n = e.length; n--; )
    if (Do(e[n][0], t))
      return n;
  return -1;
}
var ba = Array.prototype, _a = ba.splice;
function wa(e) {
  var t = this.__data__, n = Rt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : _a.call(t, n, 1), --this.size, !0;
}
function Ea(e) {
  var t = this.__data__, n = Rt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ca(e) {
  return Rt(this.__data__, e) > -1;
}
function Oa(e, t) {
  var n = this.__data__, r = Rt(n, e);
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
function Bt(e, t) {
  var n = e.__data__;
  return $a(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Sa(e) {
  var t = Bt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xa(e) {
  return Bt(this, e).get(e);
}
function Aa(e) {
  return Bt(this, e).has(e);
}
function Na(e, t) {
  var n = Bt(this, e), r = n.size;
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
var ja = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ka = /\\(\\)?/g, La = Ba(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ja, function(n, r, o, s) {
    t.push(o ? s.replace(ka, "$1") : r || n);
  }), t;
});
const Da = La;
function Ma(e) {
  return e == null ? "" : ko(e);
}
function jt(e, t) {
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
  t = jt(t, e);
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
  t = jt(t, e);
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
  if (!Pt(e))
    return e;
  t = jt(t, e);
  for (var o = -1, s = t.length, a = s - 1, i = e; i != null && ++o < s; ) {
    var c = ln(t[o]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != a) {
      var f = i[c];
      u = r ? r(f, c, i) : void 0, u === void 0 && (u = Pt(f) ? f : Lo(t[o + 1]) ? [] : {});
    }
    Gs(i, c, u), i = i[c];
  }
  return e;
}
function Qa(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var a = t[r], i = Ka(e, a);
    n(i, a) && Ya(s, jt(a, e), i);
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
const ti = ei, ni = (e) => e === void 0, un = (e) => typeof e == "boolean", Ne = (e) => typeof e == "number", $t = (e) => typeof Element > "u" ? !1 : e instanceof Element, oi = (e) => tt(e) ? !Number.isNaN(Number(e)) : !1;
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
      Z("path", {
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
      Z("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), ci = li;
const zo = "__epPropKey", A = (e) => e, ui = (e) => en(e) && !!e[zo], dn = (e, t) => {
  if (!en(e) || ui(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: a } = e, c = {
    type: s,
    required: !!r,
    validator: n || a ? (u) => {
      let f = !1, m = [];
      if (n && (m = Array.from(n), zn(e, "default") && m.push(o), f || (f = m.includes(u))), a && (f || (f = a(u))), !f && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        $r(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [zo]: !0
  };
  return zn(e, "default") && (c.default = o), c;
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
}, e), fi = (e) => (e.install = Tt, e), St = {
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
  return b(() => l(t) || zt);
}, ae = (e, t) => {
  const n = pn(t);
  return {
    namespace: n,
    b: (d = "") => Oe(n.value, e, d, "", ""),
    e: (d) => d ? Oe(n.value, e, "", d, "") : "",
    m: (d) => d ? Oe(n.value, e, "", "", d) : "",
    be: (d, g) => d && g ? Oe(n.value, e, d, g, "") : "",
    em: (d, g) => d && g ? Oe(n.value, e, "", d, g) : "",
    bm: (d, g) => d && g ? Oe(n.value, e, d, "", g) : "",
    bem: (d, g, p) => d && g && p ? Oe(n.value, e, d, g, p) : "",
    is: (d, ...g) => {
      const p = g.length >= 1 ? g[0] : !0;
      return d && p ? `${mi}${d}` : "";
    },
    cssVar: (d) => {
      const g = {};
      for (const p in d)
        d[p] && (g[`--${n.value}-${p}`] = d[p]);
      return g;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const g = {};
      for (const p in d)
        d[p] && (g[`--${n.value}-${e}-${p}`] = d[p]);
      return g;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
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
      shouldHideWhenRouteChanges: c,
      shouldProceed: u,
      onShow: f,
      onHide: m
    }) => {
      const h = Ge(), { emit: y } = h, v = h.props, d = b(() => ut(v[n])), g = b(() => v[e] === null), p = (C) => {
        a.value !== !0 && (a.value = !0, i && (i.value = C), ut(f) && f(C));
      }, _ = (C) => {
        a.value !== !1 && (a.value = !1, i && (i.value = C), ut(m) && m(C));
      }, T = (C) => {
        if (v.disabled === !0 || ut(u) && !u())
          return;
        const $ = d.value && se;
        $ && y(t, !0), (g.value || !$) && p(C);
      }, w = (C) => {
        if (v.disabled === !0 || !se)
          return;
        const $ = d.value && se;
        $ && y(t, !1), (g.value || !$) && _(C);
      }, P = (C) => {
        un(C) && (v.disabled && C ? d.value && y(t, !1) : a.value !== C && (C ? p() : _()));
      }, x = () => {
        a.value ? w() : T();
      };
      return j(() => v[e], P), c && h.appContext.config.globalProperties.$route !== void 0 && j(() => ({
        ...h.proxy.$route
      }), () => {
        c.value && a.value && w();
      }), _e(() => {
        P(v[e]);
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
var Y = "top", oe = "bottom", re = "right", Q = "left", fn = "auto", ot = [Y, oe, re, Q], Fe = "start", Qe = "end", bi = "clippingParents", qo = "viewport", Ue = "popper", _i = "reference", Xn = ot.reduce(function(e, t) {
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
      var o = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !ne(o) || !ue(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
var Go = { name: "applyStyles", enabled: !0, phase: "write", fn: Ai, effect: Ni, requires: ["computeStyles"] };
function ce(e) {
  return e.split("-")[0];
}
var Pe = Math.max, xt = Math.min, Be = Math.round;
function je(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (ne(e) && t) {
    var s = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (r = Be(n.width) / a || 1), s > 0 && (o = Be(n.height) / s || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function gn(e) {
  var t = je(e), n = e.offsetWidth, r = e.offsetHeight;
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
  return Pe(e, xt(t, n));
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
var ji = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qo(typeof e != "number" ? e : Xo(e, ot));
};
function ki(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = ce(n.placement), c = hn(i), u = [Q, re].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = ji(o.padding, n), h = gn(s), y = c === "y" ? Y : Q, v = c === "y" ? oe : re, d = n.rects.reference[f] + n.rects.reference[c] - a[c] - n.rects.popper[f], g = a[c] - n.rects.reference[c], p = rt(s), _ = p ? c === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, T = d / 2 - g / 2, w = m[y], P = _ - h[f] - m[v], x = _ / 2 - h[f] / 2 + T, C = We(w, x, P), $ = c;
    n.modifiersData[r] = (t = {}, t[$] = C, t.centerOffset = C - x, t);
  }
}
function Li(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Zo(t.elements.popper, o) || (t.elements.arrow = o));
}
var Di = { name: "arrow", enabled: !0, phase: "main", fn: ki, effect: Li, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ke(e) {
  return e.split("-")[1];
}
var Mi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hi(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Be(t * o) / o || 0, y: Be(n * o) / o || 0 };
}
function to(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, i = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, h = a.x, y = h === void 0 ? 0 : h, v = a.y, d = v === void 0 ? 0 : v, g = typeof f == "function" ? f({ x: y, y: d }) : { x: y, y: d };
  y = g.x, d = g.y;
  var p = a.hasOwnProperty("x"), _ = a.hasOwnProperty("y"), T = Q, w = Y, P = window;
  if (u) {
    var x = rt(n), C = "clientHeight", $ = "clientWidth";
    if (x === ie(n) && (x = we(n), ve(x).position !== "static" && i === "absolute" && (C = "scrollHeight", $ = "scrollWidth")), x = x, o === Y || (o === Q || o === re) && s === Qe) {
      w = oe;
      var k = m && x === P && P.visualViewport ? P.visualViewport.height : x[C];
      d -= k - r.height, d *= c ? 1 : -1;
    }
    if (o === Q || (o === Y || o === oe) && s === Qe) {
      T = re;
      var N = m && x === P && P.visualViewport ? P.visualViewport.width : x[$];
      y -= N - r.width, y *= c ? 1 : -1;
    }
  }
  var L = Object.assign({ position: i }, u && Mi), B = f === !0 ? Hi({ x: y, y: d }) : { x: y, y: d };
  if (y = B.x, d = B.y, c) {
    var D;
    return Object.assign({}, L, (D = {}, D[w] = _ ? "0" : "", D[T] = p ? "0" : "", D.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + d + "px)" : "translate3d(" + y + "px, " + d + "px, 0)", D));
  }
  return Object.assign({}, L, (t = {}, t[w] = _ ? d + "px" : "", t[T] = p ? y + "px" : "", t.transform = "", t));
}
function Ki(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, c = i === void 0 ? !0 : i, u = { placement: ce(t.placement), variation: ke(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, to(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, to(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var er = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ki, data: {} }, dt = { passive: !0 };
function Ui(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, a = r.resize, i = a === void 0 ? !0 : a, c = ie(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, dt);
  }), i && c.addEventListener("resize", n.update, dt), function() {
    s && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, dt);
    }), i && c.removeEventListener("resize", n.update, dt);
  };
}
var tr = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ui, data: {} }, zi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gt(e) {
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
  return je(we(e)).left + yn(e).scrollLeft;
}
function Wi(e) {
  var t = ie(e), n = we(e), r = t.visualViewport, o = n.clientWidth, s = n.clientHeight, a = 0, i = 0;
  return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, i = r.offsetTop)), { width: o, height: s, x: a + bn(e), y: i };
}
function Ji(e) {
  var t, n = we(e), r = yn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Pe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Pe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + bn(e), c = -r.scrollTop;
  return ve(o || n).direction === "rtl" && (i += Pe(n.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: a, x: i, y: c };
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
  var t = je(e);
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
  var r = t === "clippingParents" ? Gi(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], a = o.reduce(function(i, c) {
    var u = oo(e, c);
    return i.top = Pe(u.top, i.top), i.right = xt(u.right, i.right), i.bottom = xt(u.bottom, i.bottom), i.left = Pe(u.left, i.left), i;
  }, oo(e, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function or(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ce(r) : null, s = r ? ke(r) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Y:
      c = { x: a, y: t.y - n.height };
      break;
    case oe:
      c = { x: a, y: t.y + t.height };
      break;
    case re:
      c = { x: t.x + t.width, y: i };
      break;
    case Q:
      c = { x: t.x - n.width, y: i };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = o ? hn(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (s) {
      case Fe:
        c[u] = c[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Qe:
        c[u] = c[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function Xe(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, a = s === void 0 ? bi : s, i = n.rootBoundary, c = i === void 0 ? qo : i, u = n.elementContext, f = u === void 0 ? Ue : u, m = n.altBoundary, h = m === void 0 ? !1 : m, y = n.padding, v = y === void 0 ? 0 : y, d = Qo(typeof v != "number" ? v : Xo(v, ot)), g = f === Ue ? _i : Ue, p = e.rects.popper, _ = e.elements[h ? g : f], T = Zi(Re(_) ? _ : _.contextElement || we(e.elements.popper), a, c), w = je(e.elements.reference), P = or({ reference: w, element: p, strategy: "absolute", placement: o }), x = Zt(Object.assign({}, p, P)), C = f === Ue ? x : w, $ = { top: T.top - C.top + d.top, bottom: C.bottom - T.bottom + d.bottom, left: T.left - C.left + d.left, right: C.right - T.right + d.right }, k = e.modifiersData.offset;
  if (f === Ue && k) {
    var N = k[o];
    Object.keys($).forEach(function(L) {
      var B = [re, oe].indexOf(L) >= 0 ? 1 : -1, D = [Y, oe].indexOf(L) >= 0 ? "y" : "x";
      $[L] += N[D] * B;
    });
  }
  return $;
}
function Yi(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? vn : c, f = ke(r), m = f ? i ? Xn : Xn.filter(function(v) {
    return ke(v) === f;
  }) : ot, h = m.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(v, d) {
    return v[d] = Xe(e, { placement: d, boundary: o, rootBoundary: s, padding: a })[ce(d)], v;
  }, {});
  return Object.keys(y).sort(function(v, d) {
    return y[v] - y[d];
  });
}
function Qi(e) {
  if (ce(e) === fn)
    return [];
  var t = gt(e);
  return [no(e), t, no(t)];
}
function Xi(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, v = y === void 0 ? !0 : y, d = n.allowedAutoPlacements, g = t.options.placement, p = ce(g), _ = p === g, T = c || (_ || !v ? [gt(g)] : Qi(g)), w = [g].concat(T).reduce(function(Ee, de) {
      return Ee.concat(ce(de) === fn ? Yi(t, { placement: de, boundary: f, rootBoundary: m, padding: u, flipVariations: v, allowedAutoPlacements: d }) : de);
    }, []), P = t.rects.reference, x = t.rects.popper, C = /* @__PURE__ */ new Map(), $ = !0, k = w[0], N = 0; N < w.length; N++) {
      var L = w[N], B = ce(L), D = ke(L) === Fe, q = [Y, oe].indexOf(B) >= 0, z = q ? "width" : "height", M = Xe(t, { placement: L, boundary: f, rootBoundary: m, altBoundary: h, padding: u }), E = q ? D ? re : Q : D ? oe : Y;
      P[z] > x[z] && (E = gt(E));
      var G = gt(E), le = [];
      if (s && le.push(M[B] <= 0), i && le.push(M[E] <= 0, M[G] <= 0), le.every(function(Ee) {
        return Ee;
      })) {
        k = L, $ = !1;
        break;
      }
      C.set(L, le);
    }
    if ($)
      for (var at = v ? 3 : 1, Dt = function(Ee) {
        var de = w.find(function(lt) {
          var He = C.get(lt);
          if (He)
            return He.slice(0, Ee).every(function(Se) {
              return Se;
            });
        });
        if (de)
          return k = de, "break";
      }, Me = at; Me > 0; Me--) {
        var it = Dt(Me);
        if (it === "break")
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
  return [Y, re, oe, Q].some(function(t) {
    return e[t] >= 0;
  });
}
function tl(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = Xe(t, { elementContext: "reference" }), i = Xe(t, { altBoundary: !0 }), c = ro(a, r), u = ro(i, o, s), f = so(c), m = so(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var nl = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: tl };
function ol(e, t, n) {
  var r = ce(e), o = [Q, Y].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * o, [Q, re].indexOf(r) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function rl(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, a = vn.reduce(function(f, m) {
    return f[m] = ol(m, t.rects, s), f;
  }, {}), i = a[t.placement], c = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, v = n.tetherOffset, d = v === void 0 ? 0 : v, g = Xe(t, { boundary: c, rootBoundary: u, padding: m, altBoundary: f }), p = ce(t.placement), _ = ke(t.placement), T = !_, w = hn(p), P = il(w), x = t.modifiersData.popperOffsets, C = t.rects.reference, $ = t.rects.popper, k = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, N = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (x) {
    if (s) {
      var D, q = w === "y" ? Y : Q, z = w === "y" ? oe : re, M = w === "y" ? "height" : "width", E = x[w], G = E + g[q], le = E - g[z], at = y ? -$[M] / 2 : 0, Dt = _ === Fe ? C[M] : $[M], Me = _ === Fe ? -$[M] : -C[M], it = t.elements.arrow, Ee = y && it ? gn(it) : { width: 0, height: 0 }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Yo(), lt = de[q], He = de[z], Se = We(0, C[M], Ee[M]), br = T ? C[M] / 2 - at - Se - lt - N.mainAxis : Dt - Se - lt - N.mainAxis, _r = T ? -C[M] / 2 + at + Se + He + N.mainAxis : Me + Se + He + N.mainAxis, Mt = t.elements.arrow && rt(t.elements.arrow), wr = Mt ? w === "y" ? Mt.clientTop || 0 : Mt.clientLeft || 0 : 0, In = (D = L == null ? void 0 : L[w]) != null ? D : 0, Er = E + br - In - wr, Cr = E + _r - In, $n = We(y ? xt(G, Er) : G, E, y ? Pe(le, Cr) : le);
      x[w] = $n, B[w] = $n - E;
    }
    if (i) {
      var Sn, Or = w === "x" ? Y : Q, Tr = w === "x" ? oe : re, Ce = x[P], ct = P === "y" ? "height" : "width", xn = Ce + g[Or], An = Ce - g[Tr], Ht = [Y, Q].indexOf(p) !== -1, Nn = (Sn = L == null ? void 0 : L[P]) != null ? Sn : 0, Fn = Ht ? xn : Ce - C[ct] - $[ct] - Nn + N.altAxis, Rn = Ht ? Ce + C[ct] + $[ct] - Nn - N.altAxis : An, Bn = y && Ht ? Bi(Fn, Ce, Rn) : We(y ? Fn : xn, Ce, y ? Rn : An);
      x[P] = Bn, B[P] = Bn - Ce;
    }
    t.modifiersData[r] = B;
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
  var t = e.getBoundingClientRect(), n = Be(t.width) / e.offsetWidth || 1, r = Be(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fl(e, t, n) {
  n === void 0 && (n = !1);
  var r = ne(t), o = ne(t) && pl(t), s = we(t), a = je(e, o), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (r || !r && !n) && ((ue(t) !== "body" || _n(s)) && (i = dl(t)), ne(t) ? (c = je(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = bn(s))), { x: a.left + i.scrollLeft - c.x, y: a.top + i.scrollTop - c.y, width: a.width, height: a.height };
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
        var c = t.get(i);
        c && o(c);
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
  return function(a, i, c) {
    c === void 0 && (c = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ao, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, f = [], m = !1, h = { state: u, setOptions: function(d) {
      var g = typeof d == "function" ? d(u.options) : d;
      v(), u.options = Object.assign({}, s, u.options, g), u.scrollParents = { reference: Re(a) ? Je(a) : a.contextElement ? Je(a.contextElement) : [], popper: Je(i) };
      var p = ml(hl([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(_) {
        return _.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var d = u.elements, g = d.reference, p = d.popper;
        if (io(g, p)) {
          u.rects = { reference: fl(g, rt(p), u.options.strategy === "fixed"), popper: gn(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var _ = 0; _ < u.orderedModifiers.length; _++) {
            if (u.reset === !0) {
              u.reset = !1, _ = -1;
              continue;
            }
            var T = u.orderedModifiers[_], w = T.fn, P = T.options, x = P === void 0 ? {} : P, C = T.name;
            typeof w == "function" && (u = w({ state: u, options: x, name: C, instance: h }) || u);
          }
        }
      }
    }, update: gl(function() {
      return new Promise(function(d) {
        h.forceUpdate(), d(u);
      });
    }), destroy: function() {
      v(), m = !0;
    } };
    if (!io(a, i))
      return h;
    h.setOptions(c).then(function(d) {
      !m && c.onFirstUpdate && c.onFirstUpdate(d);
    });
    function y() {
      u.orderedModifiers.forEach(function(d) {
        var g = d.name, p = d.options, _ = p === void 0 ? {} : p, T = d.effect;
        if (typeof T == "function") {
          var w = T({ state: u, name: g, instance: h, options: _ }), P = function() {
          };
          f.push(w || P);
        }
      });
    }
    function v() {
      f.forEach(function(d) {
        return d();
      }), f = [];
    }
    return h;
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
    fn: ({ state: c }) => {
      const u = El(c);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, o = b(() => {
    const { onFirstUpdate: c, placement: u, strategy: f, modifiers: m } = l(n);
    return {
      onFirstUpdate: c,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Sr(), a = S({
    styles: {
      popper: {
        position: l(o).strategy,
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
  return j(o, (c) => {
    const u = l(s);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), j([e, t], ([c, u]) => {
    i(), !(!c || !u) && (s.value = _l(c, u, l(o)));
  }), me(() => {
    i();
  }), {
    state: b(() => {
      var c;
      return { ...((c = l(s)) == null ? void 0 : c.state) || {} };
    }),
    styles: b(() => l(a).styles),
    attributes: b(() => l(a).attributes),
    update: () => {
      var c;
      return (c = l(s)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = l(s)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: b(() => l(s))
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
  const n = pn();
  return b(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Ae = [];
const co = (e) => {
  const t = e;
  t.key === St.esc && Ae.forEach((n) => n(t));
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
    onOpen: (f) => {
      s(() => {
        r(f);
        const m = l(n);
        Ne(m) && m > 0 && a(() => {
          o(f);
        }, m);
      }, l(e));
    },
    onClose: (f) => {
      i(), s(() => {
        o(f);
      }, l(t));
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
    const a = l(n);
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
var J = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const jl = U({
  size: {
    type: A([Number, String])
  },
  color: {
    type: String
  }
}), kl = O({
  name: "ElIcon",
  inheritAttrs: !1
}), Ll = /* @__PURE__ */ O({
  ...kl,
  props: jl,
  setup(e) {
    const t = e, n = ae("icon"), r = b(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: ni(o) ? void 0 : Uo(o),
        "--color": s
      };
    });
    return (o, s) => (I(), R("i", ge({
      class: l(n).b(),
      style: l(r)
    }, o.$attrs), [
      F(o.$slots, "default")
    ], 16));
  }
});
var Dl = /* @__PURE__ */ J(Ll, [["__file", "icon.vue"]]);
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
    const n = e, r = S(), o = S(), s = S(), a = S(), i = b(() => n.role), c = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(c), V(Cn, c), (u, f) => F(u.$slots, "default");
  }
});
var Ul = /* @__PURE__ */ J(Kl, [["__file", "popper.vue"]]);
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
    return j(() => n.arrowOffset, (i) => {
      o.value = i;
    }), me(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, c) => (I(), R("span", {
      ref_key: "arrowRef",
      ref: s,
      class: W(l(r).e("arrow")),
      style: At(l(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Wl = /* @__PURE__ */ J(Vl, [["__file", "arrow.vue"]]);
const Vt = "ElOnlyChild", Jl = O({
  name: Vt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = H(ar), s = Al((r = o == null ? void 0 : o.setForwardRef) != null ? r : Tt);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ye(Vt, "requires exact only one valid child."), null;
      const c = pr(i);
      return c ? Nt(Ar(c, n), [[s]]) : (Ye(Vt, "no valid child node found"), null);
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
        case Fr:
          continue;
        case Nr:
        case "svg":
          return go(n);
        case mt:
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
    }), c = b(() => i.value ? `${n.open}` : void 0);
    let u;
    return _e(() => {
      j(() => n.virtualRef, (f) => {
        f && (o.value = Te(f));
      }, {
        immediate: !0
      }), j(o, (f, m) => {
        u == null || u(), u = void 0, $t(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((h) => {
          var y;
          const v = n[h];
          v && (f.addEventListener(h.slice(2).toLowerCase(), v), (y = m == null ? void 0 : m.removeEventListener) == null || y.call(m, h.slice(2).toLowerCase(), v));
        }), u = j([s, a, i, c], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((y, v) => {
            cn(h[v]) ? f.removeAttribute(y) : f.setAttribute(y, h[v]);
          });
        }, { immediate: !0 })), $t(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), me(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: o
    }), (f, m) => f.virtualTriggering ? fe("v-if", !0) : (I(), X(l(Jl), ge({ key: 0 }, f.$attrs, {
      "aria-controls": l(s),
      "aria-describedby": l(a),
      "aria-expanded": l(c),
      "aria-haspopup": l(i)
    }), {
      default: K(() => [
        F(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Zl = /* @__PURE__ */ J(Gl, [["__file", "trigger.vue"]]);
const Wt = "focus-trap.focus-after-trapped", Jt = "focus-trap.focus-after-released", Yl = "focus-trap.focusout-prevented", ho = {
  cancelable: !0,
  bubbles: !1
}, Ql = {
  cancelable: !0,
  bubbles: !1
}, yo = "focusAfterTrapped", bo = "focusAfterReleased", Xl = Symbol("elFocusTrap"), On = S(), Lt = S(0), Tn = S(0);
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
}, Eo = oc(), sc = () => Lt.value > Tn.value, ft = () => {
  On.value = "pointer", Lt.value = window.performance.now();
}, Co = () => {
  On.value = "keyboard", Lt.value = window.performance.now();
}, ac = () => (_e(() => {
  pt === 0 && (document.addEventListener("mousedown", ft), document.addEventListener("touchstart", ft), document.addEventListener("keydown", Co)), pt++;
}), me(() => {
  pt--, pt <= 0 && (document.removeEventListener("mousedown", ft), document.removeEventListener("touchstart", ft), document.removeEventListener("keydown", Co));
}), {
  focusReason: On,
  lastUserFocusTimestamp: Lt,
  lastAutomatedFocusTimestamp: Tn
}), vt = (e) => new CustomEvent(Yl, {
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
    Tl((v) => {
      e.trapped && !a.paused && t("release-requested", v);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (v) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: d, altKey: g, ctrlKey: p, metaKey: _, currentTarget: T, shiftKey: w } = v, { loop: P } = e, x = d === St.tab && !g && !p && !_, C = document.activeElement;
      if (x && C) {
        const $ = T, [k, N] = tc($);
        if (k && N) {
          if (!w && C === N) {
            const B = vt({
              focusReason: s.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (v.preventDefault(), P && he(k, !0));
          } else if (w && [k, $].includes(C)) {
            const B = vt({
              focusReason: s.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (v.preventDefault(), P && he(N, !0));
          }
        } else if (C === $) {
          const B = vt({
            focusReason: s.value
          });
          t("focusout-prevented", B), B.defaultPrevented || v.preventDefault();
        }
      }
    };
    V(Xl, {
      focusTrapRef: n,
      onKeydown: i
    }), j(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), j([n], ([v], [d]) => {
      v && (v.addEventListener("keydown", i), v.addEventListener("focusin", f), v.addEventListener("focusout", m)), d && (d.removeEventListener("keydown", i), d.removeEventListener("focusin", f), d.removeEventListener("focusout", m));
    });
    const c = (v) => {
      t(yo, v);
    }, u = (v) => t(bo, v), f = (v) => {
      const d = l(n);
      if (!d)
        return;
      const g = v.target, p = v.relatedTarget, _ = g && d.contains(g);
      e.trapped || p && d.contains(p) || (r = p), _ && t("focusin", v), !a.paused && e.trapped && (_ ? o = g : he(o, !0));
    }, m = (v) => {
      const d = l(n);
      if (!(a.paused || !d))
        if (e.trapped) {
          const g = v.relatedTarget;
          !cn(g) && !d.contains(g) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const p = vt({
                focusReason: s.value
              });
              t("focusout-prevented", p), p.defaultPrevented || he(o, !0);
            }
          }, 0);
        } else {
          const g = v.target;
          g && d.contains(g) || t("focusout", v);
        }
    };
    async function h() {
      await jn();
      const v = l(n);
      if (v) {
        Eo.push(a);
        const d = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = d, !v.contains(d)) {
          const p = new Event(Wt, ho);
          v.addEventListener(Wt, c), v.dispatchEvent(p), p.defaultPrevented || jn(() => {
            let _ = e.focusStartEl;
            tt(_) || (he(_), document.activeElement !== _ && (_ = "first")), _ === "first" && rc(vr(v), !0), (document.activeElement === d || _ === "container") && he(v);
          });
        }
      }
    }
    function y() {
      const v = l(n);
      if (v) {
        v.removeEventListener(Wt, c);
        const d = new CustomEvent(Jt, {
          ...ho,
          detail: {
            focusReason: s.value
          }
        });
        v.addEventListener(Jt, u), v.dispatchEvent(d), !d.defaultPrevented && (s.value == "keyboard" || !sc() || v.contains(document.activeElement)) && he(r ?? document.body), v.removeEventListener(Jt, u), Eo.remove(a);
      }
    }
    return _e(() => {
      e.trapped && h(), j(() => e.trapped, (v) => {
        v ? h() : y();
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
var cc = /* @__PURE__ */ J(ic, [["render", lc], ["__file", "focus-trap.vue"]]);
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
  })), c = b(() => {
    var p;
    const _ = l(s), T = (p = l(a)) != null ? p : hc;
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
      v();
    },
    ...fc(e, [
      l(c),
      l(i)
    ])
  })), f = b(() => vc(e.referenceEl) || l(r)), { attributes: m, state: h, styles: y, update: v, forceUpdate: d, instanceRef: g } = wl(f, n, u);
  return j(g, (p) => t.value = p), _e(() => {
    j(() => {
      var p;
      return (p = l(f)) == null ? void 0 : p.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: m,
    arrowRef: s,
    contentRef: n,
    instanceRef: g,
    state: h,
    styles: y,
    role: o,
    forceUpdate: d,
    update: v
  };
}, bc = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Rl(), s = ae("popper"), a = b(() => l(t).popper), i = S(Ne(e.zIndex) ? e.zIndex : o()), c = b(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = b(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), f = b(() => r.value === "dialog" ? "false" : void 0), m = b(() => l(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: m,
    contentAttrs: a,
    contentClass: c,
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
  emits: pc,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = _c(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: v, instanceRef: d, role: g, update: p } = yc(r), {
      ariaModal: _,
      arrowStyle: T,
      contentAttrs: w,
      contentClass: P,
      contentStyle: x,
      updateZIndex: C
    } = bc(r, {
      styles: v,
      attributes: m,
      role: g
    }), $ = H(mo, void 0), k = S();
    V(cr, {
      arrowStyle: T,
      arrowRef: h,
      arrowOffset: k
    }), $ && ($.addInputId || $.removeInputId) && V(mo, {
      ...$,
      addInputId: Tt,
      removeInputId: Tt
    });
    let N;
    const L = (D = !0) => {
      p(), D && C();
    }, B = () => {
      L(!1), r.visible && r.focusOnShow ? s.value = !0 : r.visible === !1 && (s.value = !1);
    };
    return _e(() => {
      j(() => r.triggerTargetEl, (D, q) => {
        N == null || N(), N = void 0;
        const z = l(D || y.value), M = l(q || y.value);
        $t(z) && (N = j([g, () => r.ariaLabel, _, () => r.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((G, le) => {
            cn(E[le]) ? z.removeAttribute(G) : z.setAttribute(G, E[le]);
          });
        }, { immediate: !0 })), M !== z && $t(M) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          M.removeAttribute(E);
        });
      }, { immediate: !0 }), j(() => r.visible, B, { immediate: !0 });
    }), me(() => {
      N == null || N(), N = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: d,
      updatePopper: L,
      contentStyle: x
    }), (D, q) => (I(), R("div", ge({
      ref_key: "contentRef",
      ref: y
    }, l(w), {
      style: l(x),
      class: l(P),
      tabindex: "-1",
      onMouseenter: q[0] || (q[0] = (z) => D.$emit("mouseenter", z)),
      onMouseleave: q[1] || (q[1] = (z) => D.$emit("mouseleave", z))
    }), [
      te(l(cc), {
        trapped: l(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(y),
        "focus-start-el": l(o),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(a),
        onFocusin: l(c),
        onFocusoutPrevented: l(u),
        onReleaseRequested: l(f)
      }, {
        default: K(() => [
          F(D.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Cc = /* @__PURE__ */ J(Ec, [["__file", "content.vue"]]);
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
    default: () => [St.enter, St.space]
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
], xc = (e, t) => Bo(e) ? e.includes(t) : e === t, xe = (e, t, n) => (r) => {
  xc(l(e), t) && n(r);
}, Ac = O({
  name: "ElTooltipTrigger"
}), Nc = /* @__PURE__ */ O({
  ...Ac,
  props: et,
  setup(e, { expose: t }) {
    const n = e, r = ae("tooltip"), { controlled: o, id: s, open: a, onOpen: i, onClose: c, onToggle: u } = H(Pn, void 0), f = S(null), m = () => {
      if (l(o) || n.disabled)
        return !0;
    }, h = ze(n, "trigger"), y = pe(m, xe(h, "hover", i)), v = pe(m, xe(h, "hover", c)), d = pe(m, xe(h, "click", (w) => {
      w.button === 0 && u(w);
    })), g = pe(m, xe(h, "focus", i)), p = pe(m, xe(h, "focus", c)), _ = pe(m, xe(h, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), T = pe(m, (w) => {
      const { code: P } = w;
      n.triggerKeys.includes(P) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: f
    }), (w, P) => (I(), X(l(Zl), {
      id: l(s),
      "virtual-ref": w.virtualRef,
      open: l(a),
      "virtual-triggering": w.virtualTriggering,
      class: W(l(r).e("trigger")),
      onBlur: l(p),
      onClick: l(d),
      onContextmenu: l(_),
      onFocus: l(g),
      onMouseenter: l(y),
      onMouseleave: l(v),
      onKeydown: l(T)
    }, {
      default: K(() => [
        F(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Fc = /* @__PURE__ */ J(Nc, [["__file", "trigger.vue"]]);
const Rc = O({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Bc = /* @__PURE__ */ O({
  ...Rc,
  props: ee,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = sr(), o = ae("tooltip"), s = S(null), a = S(!1), {
      controlled: i,
      id: c,
      open: u,
      trigger: f,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: v,
      onBeforeShow: d,
      onBeforeHide: g
    } = H(Pn, void 0), p = b(() => n.transition || `${o.namespace.value}-fade-in-linear`), _ = b(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    me(() => {
      a.value = !0;
    });
    const T = b(() => l(_) ? !0 : l(u)), w = b(() => n.disabled ? !1 : l(u)), P = b(() => n.appendTo || r.value), x = b(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), C = b(() => !l(u)), $ = () => {
      v();
    }, k = () => {
      if (l(i))
        return !0;
    }, N = pe(k, () => {
      n.enterable && l(f) === "hover" && h();
    }), L = pe(k, () => {
      l(f) === "hover" && m();
    }), B = () => {
      var E, G;
      (G = (E = s.value) == null ? void 0 : E.updatePopper) == null || G.call(E), d == null || d();
    }, D = () => {
      g == null || g();
    }, q = () => {
      y(), M = Ur(b(() => {
        var E;
        return (E = s.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(f) !== "hover" && m();
      });
    }, z = () => {
      n.virtualTriggering || m();
    };
    let M;
    return j(() => l(u), (E) => {
      E || M == null || M();
    }, {
      flush: "post"
    }), j(() => n.content, () => {
      var E, G;
      (G = (E = s.value) == null ? void 0 : E.updatePopper) == null || G.call(E);
    }), t({
      contentRef: s
    }), (E, G) => (I(), X(Rr, {
      disabled: !E.teleported,
      to: l(P)
    }, [
      te(Io, {
        name: l(p),
        onAfterLeave: $,
        onBeforeEnter: B,
        onAfterEnter: q,
        onBeforeLeave: D
      }, {
        default: K(() => [
          l(T) ? Nt((I(), X(l(Cc), ge({
            key: 0,
            id: l(c),
            ref_key: "contentRef",
            ref: s
          }, E.$attrs, {
            "aria-label": E.ariaLabel,
            "aria-hidden": l(C),
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
            "popper-style": [E.popperStyle, l(x)],
            "reference-el": E.referenceEl,
            "trigger-target-el": E.triggerTargetEl,
            visible: l(w),
            "z-index": E.zIndex,
            onMouseenter: l(N),
            onMouseleave: l(L),
            onBlur: z,
            onClose: l(m)
          }), {
            default: K(() => [
              a.value ? fe("v-if", !0) : F(E.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Qt, l(w)]
          ]) : fe("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var jc = /* @__PURE__ */ J(Bc, [["__file", "content.vue"]]);
const kc = ["innerHTML"], Lc = { key: 1 }, Dc = O({
  name: "ElTooltip"
}), Mc = /* @__PURE__ */ O({
  ...Dc,
  props: $c,
  emits: Sc,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Il();
    const o = Ol(), s = S(), a = S(), i = () => {
      var p;
      const _ = l(s);
      _ && ((p = _.popperInstanceRef) == null || p.update());
    }, c = S(!1), u = S(), { show: f, hide: m, hasUpdateHandler: h } = Ic({
      indicator: c,
      toggleReason: u
    }), { onOpen: y, onClose: v } = Sl({
      showAfter: ze(r, "showAfter"),
      hideAfter: ze(r, "hideAfter"),
      autoClose: ze(r, "autoClose"),
      open: f,
      close: m
    }), d = b(() => un(r.visible) && !h.value);
    V(Pn, {
      controlled: d,
      id: o,
      open: Br(c),
      trigger: ze(r, "trigger"),
      onOpen: (p) => {
        y(p);
      },
      onClose: (p) => {
        v(p);
      },
      onToggle: (p) => {
        l(c) ? v(p) : y(p);
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
    }), j(() => r.disabled, (p) => {
      p && c.value && (c.value = !1);
    });
    const g = (p) => {
      var _, T;
      const w = (T = (_ = a.value) == null ? void 0 : _.contentRef) == null ? void 0 : T.popperContentRef, P = (p == null ? void 0 : p.relatedTarget) || document.activeElement;
      return w && w.contains(P);
    };
    return jr(() => c.value && m()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: g,
      updatePopper: i,
      onOpen: y,
      onClose: v,
      hide: m
    }), (p, _) => (I(), X(l(Oc), {
      ref_key: "popperRef",
      ref: s,
      role: p.role
    }, {
      default: K(() => [
        te(Fc, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: K(() => [
            p.$slots.default ? F(p.$slots, "default", { key: 0 }) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        te(jc, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": p.ariaLabel,
          "boundaries-padding": p.boundariesPadding,
          content: p.content,
          disabled: p.disabled,
          effect: p.effect,
          enterable: p.enterable,
          "fallback-placements": p.fallbackPlacements,
          "hide-after": p.hideAfter,
          "gpu-acceleration": p.gpuAcceleration,
          offset: p.offset,
          persistent: p.persistent,
          "popper-class": p.popperClass,
          "popper-style": p.popperStyle,
          placement: p.placement,
          "popper-options": p.popperOptions,
          pure: p.pure,
          "raw-content": p.rawContent,
          "reference-el": p.referenceEl,
          "trigger-target-el": p.triggerTargetEl,
          "show-after": p.showAfter,
          strategy: p.strategy,
          teleported: p.teleported,
          transition: p.transition,
          "virtual-triggering": p.virtualTriggering,
          "z-index": p.zIndex,
          "append-to": p.appendTo
        }, {
          default: K(() => [
            F(p.$slots, "content", {}, () => [
              p.rawContent ? (I(), R("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, kc)) : (I(), R("span", Lc, ye(p.content), 1))
            ]),
            p.showArrow ? (I(), X(l(Wl), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Hc = /* @__PURE__ */ J(Mc, [["__file", "tooltip.vue"]]);
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
  return j(() => e.modelValue, () => n.value = Qn(e.modelValue), { deep: !0 }), V(gr, {
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
    }), (i, c) => (I(), R("div", {
      class: W(l(a))
    }, [
      F(i.$slots, "default")
    ], 2));
  }
});
var Gc = /* @__PURE__ */ J(qc, [["__file", "collapse.vue"]]);
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
      name: l(t).b()
    }, kr(r)), {
      default: K(() => [
        F(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var ht = /* @__PURE__ */ J(Yc, [["__file", "collapse-transition.vue"]]);
ht.install = (e) => {
  e.component(ht.name, ht);
};
const Qc = ht, Xc = U({
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
    return (h = e.name) != null ? h : `${n.value}-id-${s.prefix}-${l(a)}`;
  }), c = b(() => t == null ? void 0 : t.activeNames.value.includes(l(i)));
  return {
    focusing: r,
    id: a,
    isActive: c,
    handleFocus: () => {
      setTimeout(() => {
        o.value ? o.value = !1 : r.value = !0;
      }, 50);
    },
    handleHeaderClick: () => {
      e.disabled || (t == null || t.handleItemClick(l(i)), r.value = !1, o.value = !0);
    },
    handleEnterClick: () => {
      t == null || t.handleItemClick(l(i));
    }
  };
}, tu = (e, { focusing: t, isActive: n, id: r }) => {
  const o = ae("collapse"), s = b(() => [
    o.b("item"),
    o.is("active", l(n)),
    o.is("disabled", e.disabled)
  ]), a = b(() => [
    o.be("item", "header"),
    o.is("active", l(n)),
    { focusing: l(t) && !e.disabled }
  ]), i = b(() => [
    o.be("item", "arrow"),
    o.is("active", l(n))
  ]), c = b(() => o.be("item", "wrap")), u = b(() => o.be("item", "content")), f = b(() => o.b(`content-${l(r)}`)), m = b(() => o.b(`head-${l(r)}`));
  return {
    arrowKls: i,
    headKls: a,
    rootKls: s,
    itemWrapperKls: c,
    itemContentKls: u,
    scopedContentId: f,
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
      handleEnterClick: c
    } = eu(n), {
      arrowKls: u,
      headKls: f,
      rootKls: m,
      itemWrapperKls: h,
      itemContentKls: y,
      scopedContentId: v,
      scopedHeadId: d
    } = tu(n, { focusing: r, isActive: s, id: o });
    return t({
      isActive: s
    }), (g, p) => (I(), R("div", {
      class: W(l(m))
    }, [
      Z("button", {
        id: l(d),
        class: W(l(f)),
        "aria-expanded": l(s),
        "aria-controls": l(v),
        "aria-describedby": l(v),
        tabindex: g.disabled ? -1 : 0,
        type: "button",
        onClick: p[0] || (p[0] = (..._) => l(i) && l(i)(..._)),
        onKeydown: p[1] || (p[1] = Lr($o((..._) => l(c) && l(c)(..._), ["stop", "prevent"]), ["space", "enter"])),
        onFocus: p[2] || (p[2] = (..._) => l(a) && l(a)(..._)),
        onBlur: p[3] || (p[3] = (_) => r.value = !1)
      }, [
        F(g.$slots, "title", {}, () => [
          Ft(ye(g.title), 1)
        ]),
        te(l(lr), {
          class: W(l(u))
        }, {
          default: K(() => [
            te(l(ii))
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, nu),
      te(l(Qc), null, {
        default: K(() => [
          Nt(Z("div", {
            id: l(v),
            role: "region",
            class: W(l(h)),
            "aria-hidden": !l(s),
            "aria-labelledby": l(d)
          }, [
            Z("div", {
              class: W(l(y))
            }, [
              F(g.$slots, "default")
            ], 2)
          ], 10, ou), [
            [Qt, l(s)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
var hr = /* @__PURE__ */ J(su, [["__file", "collapse-item.vue"]]);
const au = nt(Gc, {
  CollapseItem: hr
}), iu = fi(hr), lu = /* @__PURE__ */ O({
  inheritAttrs: !1
});
function cu(e, t, n, r, o, s) {
  return F(e.$slots, "default");
}
var uu = /* @__PURE__ */ J(lu, [["render", cu], ["__file", "collection.vue"]]);
const du = /* @__PURE__ */ O({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function pu(e, t, n, r, o, s) {
  return F(e.$slots, "default");
}
var fu = /* @__PURE__ */ J(du, [["render", pu], ["__file", "collection-item.vue"]]);
const vu = "data-el-collection-item", mu = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), o = Symbol(n), s = {
    ...uu,
    name: t,
    setup() {
      const i = S(null), c = /* @__PURE__ */ new Map();
      V(r, {
        itemMap: c,
        getItems: () => {
          const f = l(i);
          if (!f)
            return [];
          const m = Array.from(f.querySelectorAll(`[${vu}]`));
          return [...c.values()].sort((y, v) => m.indexOf(y.ref) - m.indexOf(v.ref));
        },
        collectionRef: i
      });
    }
  }, a = {
    ...fu,
    name: n,
    setup(i, { attrs: c }) {
      const u = S(null), f = H(r, void 0);
      V(o, {
        collectionItemRef: u
      }), _e(() => {
        const m = l(u);
        m && f.itemMap.set(m, {
          ref: m,
          ...c
        });
      }), me(() => {
        const m = l(u);
        f.itemMap.delete(m);
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
      return (g = l(a)) == null ? void 0 : g.popperRef;
    }), c = b(() => [
      {
        width: Uo(r.width)
      },
      r.popperStyle
    ]), u = b(() => [s.b(), r.popperClass, { [s.m("plain")]: !!r.content }]), f = b(() => r.transition === `${s.namespace.value}-fade-in-linear`), m = () => {
      var g;
      (g = a.value) == null || g.hide();
    }, h = () => {
      n("before-enter");
    }, y = () => {
      n("before-leave");
    }, v = () => {
      n("after-enter");
    }, d = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: i,
      hide: m
    }), (g, p) => (I(), X(l(Kc), ge({
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
      "popper-class": l(u),
      "popper-style": l(c),
      teleported: g.teleported,
      persistent: g.persistent,
      "gpu-acceleration": l(f),
      "onUpdate:visible": l(o),
      onBeforeShow: h,
      onBeforeHide: y,
      onShow: v,
      onHide: d
    }), {
      content: K(() => [
        g.title ? (I(), R("div", {
          key: 0,
          class: W(l(s).e("title")),
          role: "title"
        }, ye(g.title), 3)) : fe("v-if", !0),
        F(g.$slots, "default", {}, () => [
          Ft(ye(g.content), 1)
        ])
      ]),
      default: K(() => [
        g.$slots.reference ? F(g.$slots, "reference", { key: 0 }) : fe("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var wu = /* @__PURE__ */ J(_u, [["__file", "popover.vue"]]);
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
}, Iu = /* @__PURE__ */ Z("path", {
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
}, Nu = /* @__PURE__ */ Z("path", {
  fill: "#FFEABB",
  d: "M851.349 383.512c43.677 6.347 61.117 60.021 29.512 90.828l-126.42 123.229a53.25 53.25 0 0 0-15.315 47.133l29.844 174.002c7.461 43.5-38.197 76.673-77.263 56.135l-156.263-82.152a53.25 53.25 0 0 0-49.559 0l-156.263 82.152c-39.066 20.538-84.724-12.635-77.263-56.135l29.844-174.002z"
}, null, -1), Fu = /* @__PURE__ */ Z("path", {
  fill: "#F9C73D",
  d: "M716.565 911.044c-13.231.001-26.527-3.19-38.817-9.652L521.484 819.24a23.24 23.24 0 0 0-21.638 0l-156.264 82.152c-28.255 14.854-61.848 12.426-87.673-6.336-25.824-18.763-38.515-49.963-33.119-81.424l29.843-174.002a23.25 23.25 0 0 0-6.686-20.579l-126.42-123.229c-22.858-22.281-30.93-54.98-21.066-85.339s35.615-52.069 67.204-56.659l174.708-25.387a23.25 23.25 0 0 0 17.506-12.719l78.131-158.312C450.138 128.783 478.747 111 510.665 111c.002 0-.001 0 0 0 31.92 0 60.526 17.782 74.653 46.406l78.132 158.312a23.25 23.25 0 0 0 17.505 12.719l174.709 25.387c31.589 4.59 57.339 26.301 67.203 56.659s1.792 63.059-21.065 85.339l-126.42 123.229a23.25 23.25 0 0 0-6.687 20.578l29.844 174.003c5.396 31.461-7.294 62.661-33.119 81.424-14.591 10.6-31.667 15.987-48.855 15.988M510.666 171c-4.346 0-15.076 1.263-20.85 12.96l-78.132 158.312a83.23 83.23 0 0 1-62.682 45.542L174.295 413.2c-12.909 1.876-17.426 11.691-18.769 15.824s-3.458 14.728 5.883 23.833l126.419 123.229a83.23 83.23 0 0 1 23.942 73.688l-29.843 174.001c-2.205 12.856 5.734 20.186 9.249 22.74 3.516 2.555 12.939 7.838 24.485 1.77l156.264-82.152a83.23 83.23 0 0 1 77.479 0l156.263 82.152c11.548 6.071 20.97.785 24.485-1.77s11.454-9.884 9.249-22.74l-29.844-174.002a83.24 83.24 0 0 1 23.942-73.687l126.42-123.229c9.341-9.105 7.226-19.7 5.883-23.833s-5.859-13.948-18.769-15.824l-174.708-25.387a83.24 83.24 0 0 1-62.682-45.541L531.514 183.96c-5.773-11.697-16.503-12.96-20.848-12.96"
}, null, -1), Ru = [
  Nu,
  Fu
];
function Bu(e, t) {
  return I(), R("svg", Au, [...Ru]);
}
const ju = { render: Bu }, ku = O({
  name: "ShowCollect"
}), Lu = /* @__PURE__ */ O({
  ...ku,
  props: {
    isCollect: { type: Boolean },
    isShow: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => Nt((I(), R("div", null, [
      t.isCollect ? (I(), X(l(ju), { key: 0 })) : (I(), X(l(xu), { key: 1 }))
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
    function i(c) {
      return c.map((u) => ({
        ...u,
        _isShowCollect: !1,
        children: i(u[a.value.children] ?? [])
      }));
    }
    return j(
      () => n.menuData,
      (c) => {
        s.value = i(c);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (c, u) => {
      const f = Dr("dir"), m = Tu;
      return I(), R("div", Du, [
        l(o).logo ? (I(), R("div", Mu, [
          F(c.$slots, "logo", {}, void 0, !0)
        ])) : fe("", !0),
        Z("div", null, [
          (I(!0), R(mt, null, Ve(l(s), (h) => (I(), X(m, ge({
            key: h[l(a).key],
            placement: "right",
            width: 400,
            trigger: "click",
            teleported: !1,
            ref_for: !0
          }, n.elPopoverProps), {
            reference: K(() => {
              var y;
              return [
                Z("div", {
                  class: W([
                    "jlg-menu-first-level-menu",
                    ((y = n.defaultActive) == null ? void 0 : y[0]) === h[l(a).key] ? "jlg-menu-first-level-menu-selected" : "jlg-menu-first-level-menu-no-selected"
                  ])
                }, [
                  Z("div", Hu, [
                    F(c.$slots, "first-menu-icon" + h[l(a).key], {}, () => [
                      h[l(a).iconClass] ? (I(), R("i", {
                        key: 0,
                        class: W(h[l(a).iconClass])
                      }, null, 2)) : fe("", !0)
                    ], !0)
                  ]),
                  Z("p", Ku, ye(h[l(a).title]), 1)
                ], 2)
              ];
            }),
            default: K(() => [
              te(f, { class: "jlg-menu-popover" }, {
                default: K(() => [
                  (I(!0), R(mt, null, Ve(h[l(a).children], (y) => {
                    var v;
                    return I(), R("div", {
                      key: y[l(a).key],
                      class: W([
                        "second-level-menu",
                        ((v = n.defaultActive) == null ? void 0 : v[1]) === y[l(a).key] ? "jlg-menu-second-level-menu-selected" : "jlg-menu-second-level-menu-no-selected"
                      ])
                    }, [
                      Z("div", Uu, ye(y[l(a).title]), 1),
                      (I(!0), R(mt, null, Ve(y[l(a).children], (d) => {
                        var g;
                        return I(), R("div", {
                          key: d[l(a).key],
                          class: W([
                            "three-level-menu-title",
                            ((g = n.defaultActive) == null ? void 0 : g[2]) === d[l(a).key] ? "jlg-menu-three-level-menu-selected" : "jlg-menu-three-level-menu-no-selected"
                          ]),
                          onMouseenter: (p) => d._isShowCollect = !0,
                          onMouseleave: (p) => d._isShowCollect = !1,
                          onClick: (p) => r("threeLevelMenuClick", d, [h, y, d])
                        }, [
                          Ft(ye(d[l(a).title]) + " ", 1),
                          Z("div", Vu, [
                            te(Lu, {
                              "is-collect": n.collectMenuKeys.some((p) => p === d[l(a).key]),
                              "is-show": d._isShowCollect,
                              onClick: $o((p) => r("collectClick", d, [h, y, d]), ["stop"])
                            }, null, 8, ["is-collect", "is-show", "onClick"])
                          ])
                        ], 42, zu);
                      }), 128))
                    ], 2);
                  }), 128))
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
const st = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, yt = /* @__PURE__ */ st(Ju, [["__scopeId", "data-v-60256795"]]);
yt.install = (e) => {
  e.component(yt.name, yt);
};
const qu = O({
  name: "JlgGridLayout"
}), bt = /* @__PURE__ */ O({
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
      style: At(l(s))
    }, [
      F(a.$slots, "default")
    ], 4));
  }
});
bt.install = (e) => {
  e.component(bt.name, bt);
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
      class: W(["grid-cell", t.center ? "grid-cell-center" : ""]),
      style: At(l(r))
    }, [
      F(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const _t = /* @__PURE__ */ st(Zu, [["__scopeId", "data-v-14088da3"]]);
_t.install = (e) => {
  e.component(_t.name, _t);
};
const Yu = O({
  name: "JlgCollapse"
}), Qu = /* @__PURE__ */ O({
  ...Yu,
  props: {
    accordion: { type: Boolean, default: !1 },
    modelValue: {},
    border: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, r = So(), o = Xt(), s = b(() => ({
      ...n,
      ...r
    })), a = S(null), i = "_" + Date.now();
    V("collapseKey", i);
    const c = (m) => {
      var h;
      (h = document.querySelector("#" + i + m)) == null || h.scrollIntoView({
        behavior: "smooth"
      });
    }, u = /* @__PURE__ */ new Set();
    return V("addCollapseItem", (m) => {
      u.add(m);
    }), V("collapseBorder", s.value.border), t({
      _ref: a,
      jumpAnchor: c,
      collapseItems: b(() => Array.from(u))
    }), (m, h) => {
      const y = au;
      return I(), X(y, ge({
        ref_key: "_ref",
        ref: a
      }, l(s), {
        class: l(s).border ? "" : "is-disable-border"
      }), xo({ _: 2 }, [
        Ve(l(o), (v, d) => ({
          name: d,
          fn: K(() => [
            F(m.$slots, d, {}, void 0, !0)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
});
const wt = /* @__PURE__ */ st(Qu, [["__scopeId", "data-v-3c3e6cbc"]]);
wt.install = (e) => {
  e.component(wt.name, wt);
};
const Xu = O({
  name: "JlgCollapseItem"
}), ed = /* @__PURE__ */ O({
  ...Xu,
  props: {
    title: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, r = So(), o = Xt(), s = b(() => Object.keys(o).filter((m) => m !== "title")), a = S(null), i = b(() => ({
      ...n,
      ...r
    })), c = H("collapseKey"), u = H("addCollapseItem"), f = H("collapseBorder");
    return j(
      () => i.value,
      (m) => {
        m && u(m);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), t({
      _ref: a
    }), (m, h) => {
      const y = lr, v = iu;
      return I(), X(v, ge({
        id: l(c) + l(i).name,
        ref_key: "_ref",
        ref: a
      }, l(i), {
        class: l(f) ? "" : "is-disable-item-border"
      }), xo({
        title: K(() => {
          var d;
          return [
            F(m.$slots, "title", { _ref: l(a) }, () => [
              Ft(ye(l(i).title), 1)
            ], !0),
            te(y, {
              class: W(["el-collapse-item__arrow", (d = l(a)) != null && d.isActive ? "is-active" : "", "customize"])
            }, {
              default: K(() => [
                te(l(ci))
              ]),
              _: 1
            }, 8, ["class"])
          ];
        }),
        _: 2
      }, [
        Ve(l(s), (d) => ({
          name: d,
          fn: K(() => [
            F(m.$slots, d, {}, void 0, !0)
          ])
        }))
      ]), 1040, ["id", "class"]);
    };
  }
});
const Et = /* @__PURE__ */ st(ed, [["__scopeId", "data-v-e2999e52"]]);
Et.install = (e) => {
  e.component(Et.name, Et);
};
const td = { class: "jlg-flex-layout" }, nd = O({
  name: "JlgFlexLayout"
}), od = /* @__PURE__ */ O({
  ...nd,
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
    }), (o, s) => (I(), R("div", td, [
      F(o.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Ct = /* @__PURE__ */ st(od, [["__scopeId", "data-v-dd4f84ce"]]);
Ct.install = (e) => {
  e.component(Ct.name, Ct);
};
var qe = /* @__PURE__ */ ((e) => (e.头部 = "first", e.尾部 = "last", e.中间 = "not", e))(qe || {});
const Po = (e, t) => {
  const n = [];
  let r = {}, o = 0;
  return Object.entries(e).forEach(([s, a]) => {
    o + a.col <= t ? (r[s] = a, o += a.col) : (n.push(Object.assign({}, r)), r = { [s]: a }, o = a.col);
  }), Object.keys(r).length > 0 && n.push(r), n.map((s) => Object.values(s));
}, rd = (e, t) => {
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
}, sd = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (let o = 0; o < r.length; o++)
      if (r[o].uid === t)
        return r.length;
  }
  return 0;
}, ad = O({
  name: "JlgFlexCell"
}), Ot = /* @__PURE__ */ O({
  ...ad,
  props: {
    col: {}
  },
  setup(e) {
    const t = e, n = H("flexLayoutProps"), r = H("flexLayoutCollectFlexCellPropsFn"), o = H("flexCellProps"), s = String((/* @__PURE__ */ new Date()).getTime()), a = b(() => {
      const u = t.col / n.col * 100 + "%", f = parseFloat(n.gap) * (c.value - 1) / c.value, m = `calc(${u} - ${f}${n.gap.replace(/\d+/g, "")})`, { type: h, length: y } = i.value, v = h === qe.尾部 || y === 1 ? "0px" : `calc(${n.gap})`;
      return { width: m, marginRight: v };
    }), i = b(() => rd(Po(o.value, n.col), s)), c = b(() => sd(Po(o.value, n.col), s));
    return j(
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
      style: At(l(a))
    }, [
      F(u.$slots, "default")
    ], 4));
  }
});
Ot.install = (e) => {
  e.component(Ot.name, Ot);
};
const id = [yt, bt, _t, wt, Et, Ct, Ot], yr = function(e) {
  id.forEach((t) => {
    t.name && e.component(t.name, t);
  });
};
typeof window < "u" && window.Vue && (window.JlgUi = { install: yr });
const cd = { install: yr };
export {
  wt as JlgCollapse,
  Et as JlgCollapseItem,
  Ot as JlgFlexCell,
  Ct as JlgFlexLayout,
  _t as JlgGridCell,
  bt as JlgGridLayout,
  yt as JlgMenu,
  cd as default
};
