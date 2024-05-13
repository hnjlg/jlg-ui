import { getCurrentScope as Ko, onScopeDispose as Ho, unref as u, watch as D, defineComponent as O, openBlock as S, createElementBlock as j, createElementVNode as G, warn as Vo, getCurrentInstance as He, inject as H, ref as A, computed as _, onMounted as be, shallowRef as Uo, onBeforeUnmount as me, onBeforeMount as Wo, provide as ne, mergeProps as ge, renderSlot as F, normalizeClass as Q, normalizeStyle as Ft, withDirectives as ht, cloneVNode as zo, Fragment as at, Text as qo, Comment as Jo, createVNode as ee, createBlock as Y, withCtx as K, createCommentVNode as fe, nextTick as fn, toRef as je, Teleport as Zo, Transition as Zn, vShow as kt, readonly as Go, onDeactivated as Qo, toDisplayString as he, toHandlers as Yo, withKeys as Xo, withModifiers as Gn, createTextVNode as bt, useSlots as Bt, resolveComponent as er, renderList as De, useAttrs as Qn, createSlots as Yn } from "vue";
const pe = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const s = e == null ? void 0 : e(o);
  if (n === !1 || !s)
    return t == null ? void 0 : t(o);
};
var vn;
const se = typeof window < "u", tr = (e) => typeof e == "string", Xn = () => {
}, nr = se && ((vn = window == null ? void 0 : window.navigator) == null ? void 0 : vn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function eo(e) {
  return typeof e == "function" ? e() : u(e);
}
function or(e) {
  return e;
}
function to(e) {
  return Ko() ? (Ho(e), !0) : !1;
}
function Oe(e) {
  var t;
  const n = eo(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const no = se ? window : void 0;
function Tt(...e) {
  let t, n, r, o;
  if (tr(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = no) : [t, n, r, o] = e, !t)
    return Xn;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], a = () => {
    s.forEach((v) => v()), s.length = 0;
  }, i = (v, m, h, y) => (v.addEventListener(m, h, y), () => v.removeEventListener(m, h, y)), c = D(() => [Oe(t), eo(o)], ([v, m]) => {
    a(), v && s.push(...n.flatMap((h) => r.map((y) => i(v, h, y, m))));
  }, { immediate: !0, flush: "post" }), l = () => {
    c(), a();
  };
  return to(l), l;
}
let mn = !1;
function rr(e, t, n = {}) {
  const { window: r = no, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!r)
    return;
  nr && !mn && (mn = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", Xn)));
  let i = !0;
  const c = (h) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(r.document.querySelectorAll(y)).some((f) => f === h.target || h.composedPath().includes(f));
    {
      const f = Oe(y);
      return f && (h.target === f || h.composedPath().includes(f));
    }
  }), v = [
    Tt(r, "click", (h) => {
      const y = Oe(e);
      if (!(!y || y === h.target || h.composedPath().includes(y))) {
        if (h.detail === 0 && (i = !c(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: s }),
    Tt(r, "pointerdown", (h) => {
      const y = Oe(e);
      y && (i = !h.composedPath().includes(y) && !c(h));
    }, { passive: !0 }),
    a && Tt(r, "blur", (h) => {
      var y;
      const f = Oe(e);
      ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(f != null && f.contains(r.document.activeElement)) && t(h);
    })
  ].filter(Boolean);
  return () => v.forEach((h) => h());
}
const gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = "__vueuse_ssr_handlers__";
gn[yn] = gn[yn] || {};
var hn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hn || (hn = {}));
var sr = Object.defineProperty, bn = Object.getOwnPropertySymbols, ar = Object.prototype.hasOwnProperty, ir = Object.prototype.propertyIsEnumerable, _n = (e, t, n) => t in e ? sr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lr = (e, t) => {
  for (var n in t || (t = {}))
    ar.call(t, n) && _n(e, n, t[n]);
  if (bn)
    for (var n of bn(t))
      ir.call(t, n) && _n(e, n, t[n]);
  return e;
};
const cr = {
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
lr({
  linear: or
}, cr);
/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const vt = () => {
}, ur = Object.prototype.hasOwnProperty, wn = (e, t) => ur.call(e, t), oo = Array.isArray, tt = (e) => typeof e == "function", qe = (e) => typeof e == "string", Lt = (e) => e !== null && typeof e == "object";
var dr = Array.isArray;
const pr = dr;
function En() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return pr(e) ? e : [e];
}
function xt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function jt(e) {
  return e == null;
}
function fr(e) {
  return e === void 0;
}
const vr = (e) => e === void 0, Dt = (e) => typeof e == "boolean", Ae = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, mr = (e) => qe(e) ? !Number.isNaN(Number(e)) : !1;
class gr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ve(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = qe(e) ? new gr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const yr = "utils/dom/style";
function ro(e, t = "px") {
  if (!e)
    return "";
  if (Ae(e) || mr(e))
    return `${e}${t}`;
  if (qe(e))
    return e;
  Ve(yr, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var hr = /* @__PURE__ */ O({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (S(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      G("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), br = hr, _r = /* @__PURE__ */ O({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, n) => (S(), j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      G("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), wr = _r;
const so = "__epPropKey", x = (e) => e, Er = (e) => Lt(e) && !!e[so], Mt = (e, t) => {
  if (!Lt(e) || Er(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: a } = e, c = {
    type: s,
    required: !!r,
    validator: n || a ? (l) => {
      let v = !1, m = [];
      if (n && (m = Array.from(n), wn(e, "default") && m.push(o), v || (v = m.includes(l))), a && (v || (v = a(l))), !v && m.length > 0) {
        const h = [...new Set(m)].map((y) => JSON.stringify(y)).join(", ");
        Vo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(l)}.`);
      }
      return v;
    } : void 0,
    [so]: !0
  };
  return wn(e, "default") && (c.default = o), c;
}, U = (e) => xt(Object.entries(e).map(([t, n]) => [
  t,
  Mt(n, t)
])), Cr = x([
  String,
  Object,
  Function
]), Je = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Or = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Tr = (e) => (e.install = vt, e), gt = {
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
}, ao = "update:modelValue", io = "change", Ir = (e) => e, It = "el", Pr = "is-", Ce = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, Sr = Symbol("namespaceContextKey"), Kt = (e) => {
  const t = e || (He() ? H(Sr, A(It)) : A(It));
  return _(() => u(t) || It);
}, ae = (e, t) => {
  const n = Kt(t);
  return {
    namespace: n,
    b: (p = "") => Ce(n.value, e, p, "", ""),
    e: (p) => p ? Ce(n.value, e, "", p, "") : "",
    m: (p) => p ? Ce(n.value, e, "", "", p) : "",
    be: (p, g) => p && g ? Ce(n.value, e, p, g, "") : "",
    em: (p, g) => p && g ? Ce(n.value, e, "", p, g) : "",
    bm: (p, g) => p && g ? Ce(n.value, e, p, "", g) : "",
    bem: (p, g, d) => p && g && d ? Ce(n.value, e, p, g, d) : "",
    is: (p, ...g) => {
      const d = g.length >= 1 ? g[0] : !0;
      return p && d ? `${Pr}${p}` : "";
    },
    cssVar: (p) => {
      const g = {};
      for (const d in p)
        p[d] && (g[`--${n.value}-${d}`] = p[d]);
      return g;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const g = {};
      for (const d in p)
        p[d] && (g[`--${n.value}-${e}-${d}`] = p[d]);
      return g;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
}, Ar = Mt({
  type: x(Boolean),
  default: null
}), $r = Mt({
  type: x(Function)
}), lo = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Ar,
    [n]: $r
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: c,
      shouldProceed: l,
      onShow: v,
      onHide: m
    }) => {
      const h = He(), { emit: y } = h, f = h.props, p = _(() => tt(f[n])), g = _(() => f[e] === null), d = (C) => {
        a.value !== !0 && (a.value = !0, i && (i.value = C), tt(v) && v(C));
      }, b = (C) => {
        a.value !== !1 && (a.value = !1, i && (i.value = C), tt(m) && m(C));
      }, T = (C) => {
        if (f.disabled === !0 || tt(l) && !l())
          return;
        const P = p.value && se;
        P && y(t, !0), (g.value || !P) && d(C);
      }, w = (C) => {
        if (f.disabled === !0 || !se)
          return;
        const P = p.value && se;
        P && y(t, !1), (g.value || !P) && b(C);
      }, I = (C) => {
        Dt(C) && (f.disabled && C ? p.value && y(t, !1) : a.value !== C && (C ? d() : b()));
      }, $ = () => {
        a.value ? w() : T();
      };
      return D(() => f[e], I), c && h.appContext.config.globalProperties.$route !== void 0 && D(() => ({
        ...h.proxy.$route
      }), () => {
        c.value && a.value && w();
      }), be(() => {
        I(f[e]);
      }), {
        hide: w,
        show: T,
        toggle: $,
        hasUpdateHandler: p
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
lo("modelValue");
var J = "top", oe = "bottom", re = "right", Z = "left", Ht = "auto", Ze = [J, oe, re, Z], $e = "start", Ue = "end", xr = "clippingParents", co = "viewport", Le = "popper", Nr = "reference", Cn = Ze.reduce(function(e, t) {
  return e.concat([t + "-" + $e, t + "-" + Ue]);
}, []), Vt = [].concat(Ze, [Ht]).reduce(function(e, t) {
  return e.concat([t, t + "-" + $e, t + "-" + Ue]);
}, []), Rr = "beforeRead", Fr = "read", kr = "afterRead", Br = "beforeMain", Lr = "main", jr = "afterMain", Dr = "beforeWrite", Mr = "write", Kr = "afterWrite", Hr = [Rr, Fr, kr, Br, Lr, jr, Dr, Mr, Kr];
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
function xe(e) {
  var t = ie(e).Element;
  return e instanceof t || e instanceof Element;
}
function te(e) {
  var t = ie(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ut(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !te(s) || !ue(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(a) {
      var i = o[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Ur(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = a.reduce(function(c, l) {
        return c[l] = "", c;
      }, {});
      !te(o) || !ue(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
var uo = { name: "applyStyles", enabled: !0, phase: "write", fn: Vr, effect: Ur, requires: ["computeStyles"] };
function ce(e) {
  return e.split("-")[0];
}
var Te = Math.max, yt = Math.min, Ne = Math.round;
function Re(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (te(e) && t) {
    var s = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (r = Ne(n.width) / a || 1), s > 0 && (o = Ne(n.height) / s || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function Wt(e) {
  var t = Re(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function po(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ut(n)) {
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
function Wr(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function _e(e) {
  return ((xe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _t(e) {
  return ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ut(e) ? e.host : null) || _e(e);
}
function On(e) {
  return !te(e) || ve(e).position === "fixed" ? null : e.offsetParent;
}
function zr(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && te(e)) {
    var r = ve(e);
    if (r.position === "fixed")
      return null;
  }
  var o = _t(e);
  for (Ut(o) && (o = o.host); te(o) && ["html", "body"].indexOf(ue(o)) < 0; ) {
    var s = ve(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ge(e) {
  for (var t = ie(e), n = On(e); n && Wr(n) && ve(n).position === "static"; )
    n = On(n);
  return n && (ue(n) === "html" || ue(n) === "body" && ve(n).position === "static") ? t : n || zr(e) || t;
}
function zt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Me(e, t, n) {
  return Te(e, yt(t, n));
}
function qr(e, t, n) {
  var r = Me(e, t, n);
  return r > n ? n : r;
}
function fo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function vo(e) {
  return Object.assign({}, fo(), e);
}
function mo(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Jr = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, vo(typeof e != "number" ? e : mo(e, Ze));
};
function Zr(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = ce(n.placement), c = zt(i), l = [Z, re].indexOf(i) >= 0, v = l ? "height" : "width";
  if (!(!s || !a)) {
    var m = Jr(o.padding, n), h = Wt(s), y = c === "y" ? J : Z, f = c === "y" ? oe : re, p = n.rects.reference[v] + n.rects.reference[c] - a[c] - n.rects.popper[v], g = a[c] - n.rects.reference[c], d = Ge(s), b = d ? c === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, T = p / 2 - g / 2, w = m[y], I = b - h[v] - m[f], $ = b / 2 - h[v] / 2 + T, C = Me(w, $, I), P = c;
    n.modifiersData[r] = (t = {}, t[P] = C, t.centerOffset = C - $, t);
  }
}
function Gr(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !po(t.elements.popper, o) || (t.elements.arrow = o));
}
var Qr = { name: "arrow", enabled: !0, phase: "main", fn: Zr, effect: Gr, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Fe(e) {
  return e.split("-")[1];
}
var Yr = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xr(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Ne(t * o) / o || 0, y: Ne(n * o) / o || 0 };
}
function Tn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, i = e.position, c = e.gpuAcceleration, l = e.adaptive, v = e.roundOffsets, m = e.isFixed, h = a.x, y = h === void 0 ? 0 : h, f = a.y, p = f === void 0 ? 0 : f, g = typeof v == "function" ? v({ x: y, y: p }) : { x: y, y: p };
  y = g.x, p = g.y;
  var d = a.hasOwnProperty("x"), b = a.hasOwnProperty("y"), T = Z, w = J, I = window;
  if (l) {
    var $ = Ge(n), C = "clientHeight", P = "clientWidth";
    if ($ === ie(n) && ($ = _e(n), ve($).position !== "static" && i === "absolute" && (C = "scrollHeight", P = "scrollWidth")), $ = $, o === J || (o === Z || o === re) && s === Ue) {
      w = oe;
      var k = m && $ === I && I.visualViewport ? I.visualViewport.height : $[C];
      p -= k - r.height, p *= c ? 1 : -1;
    }
    if (o === Z || (o === J || o === oe) && s === Ue) {
      T = re;
      var N = m && $ === I && I.visualViewport ? I.visualViewport.width : $[P];
      y -= N - r.width, y *= c ? 1 : -1;
    }
  }
  var B = Object.assign({ position: i }, l && Yr), R = v === !0 ? Xr({ x: y, y: p }) : { x: y, y: p };
  if (y = R.x, p = R.y, c) {
    var L;
    return Object.assign({}, B, (L = {}, L[w] = b ? "0" : "", L[T] = d ? "0" : "", L.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + p + "px)" : "translate3d(" + y + "px, " + p + "px, 0)", L));
  }
  return Object.assign({}, B, (t = {}, t[w] = b ? p + "px" : "", t[T] = d ? y + "px" : "", t.transform = "", t));
}
function es(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, c = i === void 0 ? !0 : i, l = { placement: ce(t.placement), variation: Fe(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tn(Object.assign({}, l, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tn(Object.assign({}, l, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var go = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: es, data: {} }, nt = { passive: !0 };
function ts(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, a = r.resize, i = a === void 0 ? !0 : a, c = ie(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && l.forEach(function(v) {
    v.addEventListener("scroll", n.update, nt);
  }), i && c.addEventListener("resize", n.update, nt), function() {
    s && l.forEach(function(v) {
      v.removeEventListener("scroll", n.update, nt);
    }), i && c.removeEventListener("resize", n.update, nt);
  };
}
var yo = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ts, data: {} }, ns = { left: "right", right: "left", bottom: "top", top: "bottom" };
function it(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ns[t];
  });
}
var os = { start: "end", end: "start" };
function In(e) {
  return e.replace(/start|end/g, function(t) {
    return os[t];
  });
}
function qt(e) {
  var t = ie(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Jt(e) {
  return Re(_e(e)).left + qt(e).scrollLeft;
}
function rs(e) {
  var t = ie(e), n = _e(e), r = t.visualViewport, o = n.clientWidth, s = n.clientHeight, a = 0, i = 0;
  return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, i = r.offsetTop)), { width: o, height: s, x: a + Jt(e), y: i };
}
function ss(e) {
  var t, n = _e(e), r = qt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Te(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Te(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Jt(e), c = -r.scrollTop;
  return ve(o || n).direction === "rtl" && (i += Te(n.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: a, x: i, y: c };
}
function Zt(e) {
  var t = ve(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ho(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : te(e) && Zt(e) ? e : ho(_t(e));
}
function Ke(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ho(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ie(r), a = o ? [s].concat(s.visualViewport || [], Zt(r) ? r : []) : r, i = t.concat(a);
  return o ? i : i.concat(Ke(_t(a)));
}
function Nt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function as(e) {
  var t = Re(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Pn(e, t) {
  return t === co ? Nt(rs(e)) : xe(t) ? as(t) : Nt(ss(_e(e)));
}
function is(e) {
  var t = Ke(_t(e)), n = ["absolute", "fixed"].indexOf(ve(e).position) >= 0, r = n && te(e) ? Ge(e) : e;
  return xe(r) ? t.filter(function(o) {
    return xe(o) && po(o, r) && ue(o) !== "body";
  }) : [];
}
function ls(e, t, n) {
  var r = t === "clippingParents" ? is(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], a = o.reduce(function(i, c) {
    var l = Pn(e, c);
    return i.top = Te(l.top, i.top), i.right = yt(l.right, i.right), i.bottom = yt(l.bottom, i.bottom), i.left = Te(l.left, i.left), i;
  }, Pn(e, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function bo(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ce(r) : null, s = r ? Fe(r) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case J:
      c = { x: a, y: t.y - n.height };
      break;
    case oe:
      c = { x: a, y: t.y + t.height };
      break;
    case re:
      c = { x: t.x + t.width, y: i };
      break;
    case Z:
      c = { x: t.x - n.width, y: i };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = o ? zt(o) : null;
  if (l != null) {
    var v = l === "y" ? "height" : "width";
    switch (s) {
      case $e:
        c[l] = c[l] - (t[v] / 2 - n[v] / 2);
        break;
      case Ue:
        c[l] = c[l] + (t[v] / 2 - n[v] / 2);
        break;
    }
  }
  return c;
}
function We(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.boundary, a = s === void 0 ? xr : s, i = n.rootBoundary, c = i === void 0 ? co : i, l = n.elementContext, v = l === void 0 ? Le : l, m = n.altBoundary, h = m === void 0 ? !1 : m, y = n.padding, f = y === void 0 ? 0 : y, p = vo(typeof f != "number" ? f : mo(f, Ze)), g = v === Le ? Nr : Le, d = e.rects.popper, b = e.elements[h ? g : v], T = ls(xe(b) ? b : b.contextElement || _e(e.elements.popper), a, c), w = Re(e.elements.reference), I = bo({ reference: w, element: d, strategy: "absolute", placement: o }), $ = Nt(Object.assign({}, d, I)), C = v === Le ? $ : w, P = { top: T.top - C.top + p.top, bottom: C.bottom - T.bottom + p.bottom, left: T.left - C.left + p.left, right: C.right - T.right + p.right }, k = e.modifiersData.offset;
  if (v === Le && k) {
    var N = k[o];
    Object.keys(P).forEach(function(B) {
      var R = [re, oe].indexOf(B) >= 0 ? 1 : -1, L = [J, oe].indexOf(B) >= 0 ? "y" : "x";
      P[B] += N[L] * R;
    });
  }
  return P;
}
function cs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Vt : c, v = Fe(r), m = v ? i ? Cn : Cn.filter(function(f) {
    return Fe(f) === v;
  }) : Ze, h = m.filter(function(f) {
    return l.indexOf(f) >= 0;
  });
  h.length === 0 && (h = m);
  var y = h.reduce(function(f, p) {
    return f[p] = We(e, { placement: p, boundary: o, rootBoundary: s, padding: a })[ce(p)], f;
  }, {});
  return Object.keys(y).sort(function(f, p) {
    return y[f] - y[p];
  });
}
function us(e) {
  if (ce(e) === Ht)
    return [];
  var t = it(e);
  return [In(e), t, In(t)];
}
function ds(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !0 : a, c = n.fallbackPlacements, l = n.padding, v = n.boundary, m = n.rootBoundary, h = n.altBoundary, y = n.flipVariations, f = y === void 0 ? !0 : y, p = n.allowedAutoPlacements, g = t.options.placement, d = ce(g), b = d === g, T = c || (b || !f ? [it(g)] : us(g)), w = [g].concat(T).reduce(function(we, de) {
      return we.concat(ce(de) === Ht ? cs(t, { placement: de, boundary: v, rootBoundary: m, padding: l, flipVariations: f, allowedAutoPlacements: p }) : de);
    }, []), I = t.rects.reference, $ = t.rects.popper, C = /* @__PURE__ */ new Map(), P = !0, k = w[0], N = 0; N < w.length; N++) {
      var B = w[N], R = ce(B), L = Fe(B) === $e, z = [J, oe].indexOf(R) >= 0, V = z ? "width" : "height", M = We(t, { placement: B, boundary: v, rootBoundary: m, altBoundary: h, padding: l }), E = z ? L ? re : Z : L ? oe : J;
      I[V] > $[V] && (E = it(E));
      var q = it(E), le = [];
      if (s && le.push(M[R] <= 0), i && le.push(M[E] <= 0, M[q] <= 0), le.every(function(we) {
        return we;
      })) {
        k = B, P = !1;
        break;
      }
      C.set(B, le);
    }
    if (P)
      for (var Qe = f ? 3 : 1, Et = function(we) {
        var de = w.find(function(Xe) {
          var Be = C.get(Xe);
          if (Be)
            return Be.slice(0, we).every(function(Ie) {
              return Ie;
            });
        });
        if (de)
          return k = de, "break";
      }, ke = Qe; ke > 0; ke--) {
        var Ye = Et(ke);
        if (Ye === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
var ps = { name: "flip", enabled: !0, phase: "main", fn: ds, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Sn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function An(e) {
  return [J, re, oe, Z].some(function(t) {
    return e[t] >= 0;
  });
}
function fs(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = We(t, { elementContext: "reference" }), i = We(t, { altBoundary: !0 }), c = Sn(a, r), l = Sn(i, o, s), v = An(c), m = An(l);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: l, isReferenceHidden: v, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": v, "data-popper-escaped": m });
}
var vs = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: fs };
function ms(e, t, n) {
  var r = ce(e), o = [Z, J].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * o, [Z, re].indexOf(r) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function gs(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, a = Vt.reduce(function(v, m) {
    return v[m] = ms(m, t.rects, s), v;
  }, {}), i = a[t.placement], c = i.x, l = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a;
}
var ys = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: gs };
function hs(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = bo({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var _o = { name: "popperOffsets", enabled: !0, phase: "read", fn: hs, data: {} };
function bs(e) {
  return e === "x" ? "y" : "x";
}
function _s(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, a = n.altAxis, i = a === void 0 ? !1 : a, c = n.boundary, l = n.rootBoundary, v = n.altBoundary, m = n.padding, h = n.tether, y = h === void 0 ? !0 : h, f = n.tetherOffset, p = f === void 0 ? 0 : f, g = We(t, { boundary: c, rootBoundary: l, padding: m, altBoundary: v }), d = ce(t.placement), b = Fe(t.placement), T = !b, w = zt(d), I = bs(w), $ = t.modifiersData.popperOffsets, C = t.rects.reference, P = t.rects.popper, k = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, N = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = { x: 0, y: 0 };
  if ($) {
    if (s) {
      var L, z = w === "y" ? J : Z, V = w === "y" ? oe : re, M = w === "y" ? "height" : "width", E = $[w], q = E + g[z], le = E - g[V], Qe = y ? -P[M] / 2 : 0, Et = b === $e ? C[M] : P[M], ke = b === $e ? -P[M] : -C[M], Ye = t.elements.arrow, we = y && Ye ? Wt(Ye) : { width: 0, height: 0 }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fo(), Xe = de[z], Be = de[V], Ie = Me(0, C[M], we[M]), Fo = T ? C[M] / 2 - Qe - Ie - Xe - N.mainAxis : Et - Ie - Xe - N.mainAxis, ko = T ? -C[M] / 2 + Qe + Ie + Be + N.mainAxis : ke + Ie + Be + N.mainAxis, Ct = t.elements.arrow && Ge(t.elements.arrow), Bo = Ct ? w === "y" ? Ct.clientTop || 0 : Ct.clientLeft || 0 : 0, on = (L = B == null ? void 0 : B[w]) != null ? L : 0, Lo = E + Fo - on - Bo, jo = E + ko - on, rn = Me(y ? yt(q, Lo) : q, E, y ? Te(le, jo) : le);
      $[w] = rn, R[w] = rn - E;
    }
    if (i) {
      var sn, Do = w === "x" ? J : Z, Mo = w === "x" ? oe : re, Ee = $[I], et = I === "y" ? "height" : "width", an = Ee + g[Do], ln = Ee - g[Mo], Ot = [J, Z].indexOf(d) !== -1, cn = (sn = B == null ? void 0 : B[I]) != null ? sn : 0, un = Ot ? an : Ee - C[et] - P[et] - cn + N.altAxis, dn = Ot ? Ee + C[et] + P[et] - cn - N.altAxis : ln, pn = y && Ot ? qr(un, Ee, dn) : Me(y ? un : an, Ee, y ? dn : ln);
      $[I] = pn, R[I] = pn - Ee;
    }
    t.modifiersData[r] = R;
  }
}
var ws = { name: "preventOverflow", enabled: !0, phase: "main", fn: _s, requiresIfExists: ["offset"] };
function Es(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Cs(e) {
  return e === ie(e) || !te(e) ? qt(e) : Es(e);
}
function Os(e) {
  var t = e.getBoundingClientRect(), n = Ne(t.width) / e.offsetWidth || 1, r = Ne(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ts(e, t, n) {
  n === void 0 && (n = !1);
  var r = te(t), o = te(t) && Os(t), s = _e(t), a = Re(e, o), i = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (r || !r && !n) && ((ue(t) !== "body" || Zt(s)) && (i = Cs(t)), te(t) ? (c = Re(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Jt(s))), { x: a.left + i.scrollLeft - c.x, y: a.top + i.scrollTop - c.y, width: a.width, height: a.height };
}
function Is(e) {
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
function Ps(e) {
  var t = Is(e);
  return Hr.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Ss(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function As(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var $n = { placement: "bottom", modifiers: [], strategy: "absolute" };
function xn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Gt(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? $n : o;
  return function(a, i, c) {
    c === void 0 && (c = s);
    var l = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, $n, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, v = [], m = !1, h = { state: l, setOptions: function(p) {
      var g = typeof p == "function" ? p(l.options) : p;
      f(), l.options = Object.assign({}, s, l.options, g), l.scrollParents = { reference: xe(a) ? Ke(a) : a.contextElement ? Ke(a.contextElement) : [], popper: Ke(i) };
      var d = Ps(As([].concat(r, l.options.modifiers)));
      return l.orderedModifiers = d.filter(function(b) {
        return b.enabled;
      }), y(), h.update();
    }, forceUpdate: function() {
      if (!m) {
        var p = l.elements, g = p.reference, d = p.popper;
        if (xn(g, d)) {
          l.rects = { reference: Ts(g, Ge(d), l.options.strategy === "fixed"), popper: Wt(d) }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(P) {
            return l.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var b = 0; b < l.orderedModifiers.length; b++) {
            if (l.reset === !0) {
              l.reset = !1, b = -1;
              continue;
            }
            var T = l.orderedModifiers[b], w = T.fn, I = T.options, $ = I === void 0 ? {} : I, C = T.name;
            typeof w == "function" && (l = w({ state: l, options: $, name: C, instance: h }) || l);
          }
        }
      }
    }, update: Ss(function() {
      return new Promise(function(p) {
        h.forceUpdate(), p(l);
      });
    }), destroy: function() {
      f(), m = !0;
    } };
    if (!xn(a, i))
      return h;
    h.setOptions(c).then(function(p) {
      !m && c.onFirstUpdate && c.onFirstUpdate(p);
    });
    function y() {
      l.orderedModifiers.forEach(function(p) {
        var g = p.name, d = p.options, b = d === void 0 ? {} : d, T = p.effect;
        if (typeof T == "function") {
          var w = T({ state: l, name: g, instance: h, options: b }), I = function() {
          };
          v.push(w || I);
        }
      });
    }
    function f() {
      v.forEach(function(p) {
        return p();
      }), v = [];
    }
    return h;
  };
}
Gt();
var $s = [yo, _o, go, uo];
Gt({ defaultModifiers: $s });
var xs = [yo, _o, go, uo, ys, ps, ws, Qr, vs], Ns = Gt({ defaultModifiers: xs });
const Rs = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const l = Fs(c);
      Object.assign(a.value, l);
    },
    requires: ["computeStyles"]
  }, o = _(() => {
    const { onFirstUpdate: c, placement: l, strategy: v, modifiers: m } = u(n);
    return {
      onFirstUpdate: c,
      placement: l || "bottom",
      strategy: v || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Uo(), a = A({
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
  return D(o, (c) => {
    const l = u(s);
    l && l.setOptions(c);
  }, {
    deep: !0
  }), D([e, t], ([c, l]) => {
    i(), !(!c || !l) && (s.value = Ns(c, l, u(o)));
  }), me(() => {
    i();
  }), {
    state: _(() => {
      var c;
      return { ...((c = u(s)) == null ? void 0 : c.state) || {} };
    }),
    styles: _(() => u(a).styles),
    attributes: _(() => u(a).attributes),
    update: () => {
      var c;
      return (c = u(s)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = u(s)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: _(() => u(s))
  };
};
function Fs(e) {
  const t = Object.keys(e.elements), n = xt(t.map((o) => [o, e.styles[o] || {}])), r = xt(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function Nn() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return to(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Rt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ks = Symbol("elIdInjection"), Qt = () => He() ? H(ks, Rt) : Rt, Bs = (e) => {
  const t = Qt();
  !se && t === Rt && Ve("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Kt();
  return _(() => u(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Se = [];
const Rn = (e) => {
  const t = e;
  t.key === gt.esc && Se.forEach((n) => n(t));
}, Ls = (e) => {
  be(() => {
    Se.length === 0 && document.addEventListener("keydown", Rn), se && Se.push(e);
  }), me(() => {
    Se = Se.filter((t) => t !== e), Se.length === 0 && se && document.removeEventListener("keydown", Rn);
  });
};
let Fn;
const wo = () => {
  const e = Kt(), t = Qt(), n = _(() => `${e.value}-popper-container-${t.prefix}`), r = _(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, js = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Ds = () => {
  const { id: e, selector: t } = wo();
  return Wo(() => {
    se && (process.env.NODE_ENV === "test" || !Fn && !document.body.querySelector(t.value)) && (Fn = js(e.value));
  }), {
    id: e,
    selector: t
  };
}, Ms = U({
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
}), Ks = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: s } = Nn(), {
    registerTimeout: a,
    cancelTimeout: i
  } = Nn();
  return {
    onOpen: (v) => {
      s(() => {
        r(v);
        const m = u(n);
        Ae(m) && m > 0 && a(() => {
          o(v);
        }, m);
      }, u(e));
    },
    onClose: (v) => {
      i(), s(() => {
        o(v);
      }, u(t));
    }
  };
}, Eo = Symbol("elForwardRef"), Hs = (e) => {
  ne(Eo, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Vs = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), kn = {
  current: 0
}, Bn = A(0), Us = 2e3, Ln = Symbol("elZIndexContextKey"), Ws = Symbol("zIndexContextKey"), zs = (e) => {
  const t = He() ? H(Ln, kn) : kn, n = e || (He() ? H(Ws, void 0) : void 0), r = _(() => {
    const a = u(n);
    return Ae(a) ? a : Us;
  }), o = _(() => r.value + Bn.value), s = () => (t.current++, Bn.value = t.current, o.value);
  return !se && !H(Ln) && Ve("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: s
  };
};
var W = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const qs = U({
  size: {
    type: x([Number, String])
  },
  color: {
    type: String
  }
}), Js = O({
  name: "ElIcon",
  inheritAttrs: !1
}), Zs = /* @__PURE__ */ O({
  ...Js,
  props: qs,
  setup(e) {
    const t = e, n = ae("icon"), r = _(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: vr(o) ? void 0 : ro(o),
        "--color": s
      };
    });
    return (o, s) => (S(), j("i", ge({
      class: u(n).b(),
      style: u(r)
    }, o.$attrs), [
      F(o.$slots, "default")
    ], 16));
  }
});
var Gs = /* @__PURE__ */ W(Zs, [["__file", "icon.vue"]]);
const Co = Je(Gs), jn = Symbol("formItemContextKey"), Yt = Symbol("popper"), Oo = Symbol("popperContent"), Qs = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], To = U({
  role: {
    type: String,
    values: Qs,
    default: "tooltip"
  }
}), Ys = O({
  name: "ElPopper",
  inheritAttrs: !1
}), Xs = /* @__PURE__ */ O({
  ...Ys,
  props: To,
  setup(e, { expose: t }) {
    const n = e, r = A(), o = A(), s = A(), a = A(), i = _(() => n.role), c = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(c), ne(Yt, c), (l, v) => F(l.$slots, "default");
  }
});
var ea = /* @__PURE__ */ W(Xs, [["__file", "popper.vue"]]);
const Io = U({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), ta = O({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), na = /* @__PURE__ */ O({
  ...ta,
  props: Io,
  setup(e, { expose: t }) {
    const n = e, r = ae("popper"), { arrowOffset: o, arrowRef: s, arrowStyle: a } = H(Oo, void 0);
    return D(() => n.arrowOffset, (i) => {
      o.value = i;
    }), me(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, c) => (S(), j("span", {
      ref_key: "arrowRef",
      ref: s,
      class: Q(u(r).e("arrow")),
      style: Ft(u(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var oa = /* @__PURE__ */ W(na, [["__file", "arrow.vue"]]);
const Pt = "ElOnlyChild", ra = O({
  name: Pt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = H(Eo), s = Vs((r = o == null ? void 0 : o.setForwardRef) != null ? r : vt);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ve(Pt, "requires exact only one valid child."), null;
      const c = Po(i);
      return c ? ht(zo(c, n), [[s]]) : (Ve(Pt, "no valid child node found"), null);
    };
  }
});
function Po(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Lt(n))
      switch (n.type) {
        case Jo:
          continue;
        case qo:
        case "svg":
          return Dn(n);
        case at:
          return Po(n.children);
        default:
          return n;
      }
    return Dn(n);
  }
  return null;
}
function Dn(e) {
  const t = ae("only-child");
  return ee("span", {
    class: t.e("content")
  }, [e]);
}
const So = U({
  virtualRef: {
    type: x(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: x(Function)
  },
  onMouseleave: {
    type: x(Function)
  },
  onClick: {
    type: x(Function)
  },
  onKeydown: {
    type: x(Function)
  },
  onFocus: {
    type: x(Function)
  },
  onBlur: {
    type: x(Function)
  },
  onContextmenu: {
    type: x(Function)
  },
  id: String,
  open: Boolean
}), sa = O({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), aa = /* @__PURE__ */ O({
  ...sa,
  props: So,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = H(Yt, void 0);
    Hs(o);
    const s = _(() => i.value ? n.id : void 0), a = _(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = _(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), c = _(() => i.value ? `${n.open}` : void 0);
    let l;
    return be(() => {
      D(() => n.virtualRef, (v) => {
        v && (o.value = Oe(v));
      }, {
        immediate: !0
      }), D(o, (v, m) => {
        l == null || l(), l = void 0, mt(v) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((h) => {
          var y;
          const f = n[h];
          f && (v.addEventListener(h.slice(2).toLowerCase(), f), (y = m == null ? void 0 : m.removeEventListener) == null || y.call(m, h.slice(2).toLowerCase(), f));
        }), l = D([s, a, i, c], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((y, f) => {
            jt(h[f]) ? v.removeAttribute(y) : v.setAttribute(y, h[f]);
          });
        }, { immediate: !0 })), mt(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), me(() => {
      l == null || l(), l = void 0;
    }), t({
      triggerRef: o
    }), (v, m) => v.virtualTriggering ? fe("v-if", !0) : (S(), Y(u(ra), ge({ key: 0 }, v.$attrs, {
      "aria-controls": u(s),
      "aria-describedby": u(a),
      "aria-expanded": u(c),
      "aria-haspopup": u(i)
    }), {
      default: K(() => [
        F(v.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ia = /* @__PURE__ */ W(aa, [["__file", "trigger.vue"]]);
const St = "focus-trap.focus-after-trapped", At = "focus-trap.focus-after-released", la = "focus-trap.focusout-prevented", Mn = {
  cancelable: !0,
  bubbles: !1
}, ca = {
  cancelable: !0,
  bubbles: !1
}, Kn = "focusAfterTrapped", Hn = "focusAfterReleased", ua = Symbol("elFocusTrap"), Xt = A(), wt = A(0), en = A(0);
let ot = 0;
const Ao = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Vn = (e, t) => {
  for (const n of e)
    if (!da(n, t))
      return n;
}, da = (e, t) => {
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
}, pa = (e) => {
  const t = Ao(e), n = Vn(t, e), r = Vn(t.reverse(), e);
  return [n, r];
}, fa = (e) => e instanceof HTMLInputElement && "select" in e, ye = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), en.value = window.performance.now(), e !== n && fa(e) && t && e.select();
  }
};
function Un(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const va = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Un(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, s;
      e = Un(e, r), (s = (o = e[0]) == null ? void 0 : o.resume) == null || s.call(o);
    }
  };
}, ma = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (ye(r, t), document.activeElement !== n)
      return;
}, Wn = va(), ga = () => wt.value > en.value, rt = () => {
  Xt.value = "pointer", wt.value = window.performance.now();
}, zn = () => {
  Xt.value = "keyboard", wt.value = window.performance.now();
}, ya = () => (be(() => {
  ot === 0 && (document.addEventListener("mousedown", rt), document.addEventListener("touchstart", rt), document.addEventListener("keydown", zn)), ot++;
}), me(() => {
  ot--, ot <= 0 && (document.removeEventListener("mousedown", rt), document.removeEventListener("touchstart", rt), document.removeEventListener("keydown", zn));
}), {
  focusReason: Xt,
  lastUserFocusTimestamp: wt,
  lastAutomatedFocusTimestamp: en
}), st = (e) => new CustomEvent(la, {
  ...ca,
  detail: e
}), ha = O({
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
    Kn,
    Hn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let r, o;
    const { focusReason: s } = ya();
    Ls((f) => {
      e.trapped && !a.paused && t("release-requested", f);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (f) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: p, altKey: g, ctrlKey: d, metaKey: b, currentTarget: T, shiftKey: w } = f, { loop: I } = e, $ = p === gt.tab && !g && !d && !b, C = document.activeElement;
      if ($ && C) {
        const P = T, [k, N] = pa(P);
        if (k && N) {
          if (!w && C === N) {
            const R = st({
              focusReason: s.value
            });
            t("focusout-prevented", R), R.defaultPrevented || (f.preventDefault(), I && ye(k, !0));
          } else if (w && [k, P].includes(C)) {
            const R = st({
              focusReason: s.value
            });
            t("focusout-prevented", R), R.defaultPrevented || (f.preventDefault(), I && ye(N, !0));
          }
        } else if (C === P) {
          const R = st({
            focusReason: s.value
          });
          t("focusout-prevented", R), R.defaultPrevented || f.preventDefault();
        }
      }
    };
    ne(ua, {
      focusTrapRef: n,
      onKeydown: i
    }), D(() => e.focusTrapEl, (f) => {
      f && (n.value = f);
    }, { immediate: !0 }), D([n], ([f], [p]) => {
      f && (f.addEventListener("keydown", i), f.addEventListener("focusin", v), f.addEventListener("focusout", m)), p && (p.removeEventListener("keydown", i), p.removeEventListener("focusin", v), p.removeEventListener("focusout", m));
    });
    const c = (f) => {
      t(Kn, f);
    }, l = (f) => t(Hn, f), v = (f) => {
      const p = u(n);
      if (!p)
        return;
      const g = f.target, d = f.relatedTarget, b = g && p.contains(g);
      e.trapped || d && p.contains(d) || (r = d), b && t("focusin", f), !a.paused && e.trapped && (b ? o = g : ye(o, !0));
    }, m = (f) => {
      const p = u(n);
      if (!(a.paused || !p))
        if (e.trapped) {
          const g = f.relatedTarget;
          !jt(g) && !p.contains(g) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const d = st({
                focusReason: s.value
              });
              t("focusout-prevented", d), d.defaultPrevented || ye(o, !0);
            }
          }, 0);
        } else {
          const g = f.target;
          g && p.contains(g) || t("focusout", f);
        }
    };
    async function h() {
      await fn();
      const f = u(n);
      if (f) {
        Wn.push(a);
        const p = f.contains(document.activeElement) ? r : document.activeElement;
        if (r = p, !f.contains(p)) {
          const d = new Event(St, Mn);
          f.addEventListener(St, c), f.dispatchEvent(d), d.defaultPrevented || fn(() => {
            let b = e.focusStartEl;
            qe(b) || (ye(b), document.activeElement !== b && (b = "first")), b === "first" && ma(Ao(f), !0), (document.activeElement === p || b === "container") && ye(f);
          });
        }
      }
    }
    function y() {
      const f = u(n);
      if (f) {
        f.removeEventListener(St, c);
        const p = new CustomEvent(At, {
          ...Mn,
          detail: {
            focusReason: s.value
          }
        });
        f.addEventListener(At, l), f.dispatchEvent(p), !p.defaultPrevented && (s.value == "keyboard" || !ga() || f.contains(document.activeElement)) && ye(r ?? document.body), f.removeEventListener(At, l), Wn.remove(a);
      }
    }
    return be(() => {
      e.trapped && h(), D(() => e.trapped, (f) => {
        f ? h() : y();
      });
    }), me(() => {
      e.trapped && y();
    }), {
      onKeydown: i
    };
  }
});
function ba(e, t, n, r, o, s) {
  return F(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var _a = /* @__PURE__ */ W(ha, [["render", ba], ["__file", "focus-trap.vue"]]);
const wa = ["fixed", "absolute"], Ea = U({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: x(Array),
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
    values: Vt,
    default: "bottom"
  },
  popperOptions: {
    type: x(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: wa,
    default: "absolute"
  }
}), $o = U({
  ...Ea,
  id: String,
  style: {
    type: x([String, Array, Object])
  },
  className: {
    type: x([String, Array, Object])
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
    type: x([String, Array, Object])
  },
  popperStyle: {
    type: x([String, Array, Object])
  },
  referenceEl: {
    type: x(Object)
  },
  triggerTargetEl: {
    type: x(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Ca = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Oa = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, s = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Ia(e), ...t]
  };
  return Pa(s, o == null ? void 0 : o.modifiers), s;
}, Ta = (e) => {
  if (se)
    return Oe(e);
};
function Ia(e) {
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
function Pa(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Sa = 0, Aa = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = H(Yt, void 0), s = A(), a = A(), i = _(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = _(() => {
    var d;
    const b = u(s), T = (d = u(a)) != null ? d : Sa;
    return {
      name: "arrow",
      enabled: !fr(b),
      options: {
        element: b,
        padding: T
      }
    };
  }), l = _(() => ({
    onFirstUpdate: () => {
      f();
    },
    ...Oa(e, [
      u(c),
      u(i)
    ])
  })), v = _(() => Ta(e.referenceEl) || u(r)), { attributes: m, state: h, styles: y, update: f, forceUpdate: p, instanceRef: g } = Rs(v, n, l);
  return D(g, (d) => t.value = d), be(() => {
    D(() => {
      var d;
      return (d = u(v)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      f();
    });
  }), {
    attributes: m,
    arrowRef: s,
    contentRef: n,
    instanceRef: g,
    state: h,
    styles: y,
    role: o,
    forceUpdate: p,
    update: f
  };
}, $a = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = zs(), s = ae("popper"), a = _(() => u(t).popper), i = A(Ae(e.zIndex) ? e.zIndex : o()), c = _(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), l = _(() => [
    { zIndex: u(i) },
    u(n).popper,
    e.popperStyle || {}
  ]), v = _(() => r.value === "dialog" ? "false" : void 0), m = _(() => u(n).arrow || {});
  return {
    ariaModal: v,
    arrowStyle: m,
    contentAttrs: a,
    contentClass: c,
    contentStyle: l,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Ae(e.zIndex) ? e.zIndex : o();
    }
  };
}, xa = (e, t) => {
  const n = A(!1), r = A();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (l) => {
      var v;
      ((v = l.detail) == null ? void 0 : v.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (l) => {
      e.visible && !n.value && (l.target && (r.value = l.target), n.value = !0);
    },
    onFocusoutPrevented: (l) => {
      e.trapping || (l.detail.focusReason === "pointer" && l.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Na = O({
  name: "ElPopperContent"
}), Ra = /* @__PURE__ */ O({
  ...Na,
  props: $o,
  emits: Ca,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: c,
      onFocusoutPrevented: l,
      onReleaseRequested: v
    } = xa(r, n), { attributes: m, arrowRef: h, contentRef: y, styles: f, instanceRef: p, role: g, update: d } = Aa(r), {
      ariaModal: b,
      arrowStyle: T,
      contentAttrs: w,
      contentClass: I,
      contentStyle: $,
      updateZIndex: C
    } = $a(r, {
      styles: f,
      attributes: m,
      role: g
    }), P = H(jn, void 0), k = A();
    ne(Oo, {
      arrowStyle: T,
      arrowRef: h,
      arrowOffset: k
    }), P && (P.addInputId || P.removeInputId) && ne(jn, {
      ...P,
      addInputId: vt,
      removeInputId: vt
    });
    let N;
    const B = (L = !0) => {
      d(), L && C();
    }, R = () => {
      B(!1), r.visible && r.focusOnShow ? s.value = !0 : r.visible === !1 && (s.value = !1);
    };
    return be(() => {
      D(() => r.triggerTargetEl, (L, z) => {
        N == null || N(), N = void 0;
        const V = u(L || y.value), M = u(z || y.value);
        mt(V) && (N = D([g, () => r.ariaLabel, b, () => r.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((q, le) => {
            jt(E[le]) ? V.removeAttribute(q) : V.setAttribute(q, E[le]);
          });
        }, { immediate: !0 })), M !== V && mt(M) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          M.removeAttribute(E);
        });
      }, { immediate: !0 }), D(() => r.visible, R, { immediate: !0 });
    }), me(() => {
      N == null || N(), N = void 0;
    }), t({
      popperContentRef: y,
      popperInstanceRef: p,
      updatePopper: B,
      contentStyle: $
    }), (L, z) => (S(), j("div", ge({
      ref_key: "contentRef",
      ref: y
    }, u(w), {
      style: u($),
      class: u(I),
      tabindex: "-1",
      onMouseenter: z[0] || (z[0] = (V) => L.$emit("mouseenter", V)),
      onMouseleave: z[1] || (z[1] = (V) => L.$emit("mouseleave", V))
    }), [
      ee(u(_a), {
        trapped: u(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": u(y),
        "focus-start-el": u(o),
        onFocusAfterTrapped: u(i),
        onFocusAfterReleased: u(a),
        onFocusin: u(c),
        onFocusoutPrevented: u(l),
        onReleaseRequested: u(v)
      }, {
        default: K(() => [
          F(L.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Fa = /* @__PURE__ */ W(Ra, [["__file", "content.vue"]]);
const ka = Je(ea), tn = Symbol("elTooltip"), X = U({
  ...Ms,
  ...$o,
  appendTo: {
    type: x([String, Object])
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
  ariaLabel: String,
  visible: {
    type: x(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), ze = U({
  ...So,
  disabled: Boolean,
  trigger: {
    type: x([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: x(Array),
    default: () => [gt.enter, gt.space]
  }
}), {
  useModelToggleProps: Ba,
  useModelToggleEmits: La,
  useModelToggle: ja
} = lo("visible"), Da = U({
  ...To,
  ...Ba,
  ...X,
  ...ze,
  ...Io,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Ma = [
  ...La,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ka = (e, t) => oo(e) ? e.includes(t) : e === t, Pe = (e, t, n) => (r) => {
  Ka(u(e), t) && n(r);
}, Ha = O({
  name: "ElTooltipTrigger"
}), Va = /* @__PURE__ */ O({
  ...Ha,
  props: ze,
  setup(e, { expose: t }) {
    const n = e, r = ae("tooltip"), { controlled: o, id: s, open: a, onOpen: i, onClose: c, onToggle: l } = H(tn, void 0), v = A(null), m = () => {
      if (u(o) || n.disabled)
        return !0;
    }, h = je(n, "trigger"), y = pe(m, Pe(h, "hover", i)), f = pe(m, Pe(h, "hover", c)), p = pe(m, Pe(h, "click", (w) => {
      w.button === 0 && l(w);
    })), g = pe(m, Pe(h, "focus", i)), d = pe(m, Pe(h, "focus", c)), b = pe(m, Pe(h, "contextmenu", (w) => {
      w.preventDefault(), l(w);
    })), T = pe(m, (w) => {
      const { code: I } = w;
      n.triggerKeys.includes(I) && (w.preventDefault(), l(w));
    });
    return t({
      triggerRef: v
    }), (w, I) => (S(), Y(u(ia), {
      id: u(s),
      "virtual-ref": w.virtualRef,
      open: u(a),
      "virtual-triggering": w.virtualTriggering,
      class: Q(u(r).e("trigger")),
      onBlur: u(d),
      onClick: u(p),
      onContextmenu: u(b),
      onFocus: u(g),
      onMouseenter: u(y),
      onMouseleave: u(f),
      onKeydown: u(T)
    }, {
      default: K(() => [
        F(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ua = /* @__PURE__ */ W(Va, [["__file", "trigger.vue"]]);
const Wa = O({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), za = /* @__PURE__ */ O({
  ...Wa,
  props: X,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = wo(), o = ae("tooltip"), s = A(null), a = A(!1), {
      controlled: i,
      id: c,
      open: l,
      trigger: v,
      onClose: m,
      onOpen: h,
      onShow: y,
      onHide: f,
      onBeforeShow: p,
      onBeforeHide: g
    } = H(tn, void 0), d = _(() => n.transition || `${o.namespace.value}-fade-in-linear`), b = _(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    me(() => {
      a.value = !0;
    });
    const T = _(() => u(b) ? !0 : u(l)), w = _(() => n.disabled ? !1 : u(l)), I = _(() => n.appendTo || r.value), $ = _(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), C = _(() => !u(l)), P = () => {
      f();
    }, k = () => {
      if (u(i))
        return !0;
    }, N = pe(k, () => {
      n.enterable && u(v) === "hover" && h();
    }), B = pe(k, () => {
      u(v) === "hover" && m();
    }), R = () => {
      var E, q;
      (q = (E = s.value) == null ? void 0 : E.updatePopper) == null || q.call(E), p == null || p();
    }, L = () => {
      g == null || g();
    }, z = () => {
      y(), M = rr(_(() => {
        var E;
        return (E = s.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (u(i))
          return;
        u(v) !== "hover" && m();
      });
    }, V = () => {
      n.virtualTriggering || m();
    };
    let M;
    return D(() => u(l), (E) => {
      E || M == null || M();
    }, {
      flush: "post"
    }), D(() => n.content, () => {
      var E, q;
      (q = (E = s.value) == null ? void 0 : E.updatePopper) == null || q.call(E);
    }), t({
      contentRef: s
    }), (E, q) => (S(), Y(Zo, {
      disabled: !E.teleported,
      to: u(I)
    }, [
      ee(Zn, {
        name: u(d),
        onAfterLeave: P,
        onBeforeEnter: R,
        onAfterEnter: z,
        onBeforeLeave: L
      }, {
        default: K(() => [
          u(T) ? ht((S(), Y(u(Fa), ge({
            key: 0,
            id: u(c),
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
            "popper-style": [E.popperStyle, u($)],
            "reference-el": E.referenceEl,
            "trigger-target-el": E.triggerTargetEl,
            visible: u(w),
            "z-index": E.zIndex,
            onMouseenter: u(N),
            onMouseleave: u(B),
            onBlur: V,
            onClose: u(m)
          }), {
            default: K(() => [
              a.value ? fe("v-if", !0) : F(E.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [kt, u(w)]
          ]) : fe("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var qa = /* @__PURE__ */ W(za, [["__file", "content.vue"]]);
const Ja = ["innerHTML"], Za = { key: 1 }, Ga = O({
  name: "ElTooltip"
}), Qa = /* @__PURE__ */ O({
  ...Ga,
  props: Da,
  emits: Ma,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Ds();
    const o = Bs(), s = A(), a = A(), i = () => {
      var d;
      const b = u(s);
      b && ((d = b.popperInstanceRef) == null || d.update());
    }, c = A(!1), l = A(), { show: v, hide: m, hasUpdateHandler: h } = ja({
      indicator: c,
      toggleReason: l
    }), { onOpen: y, onClose: f } = Ks({
      showAfter: je(r, "showAfter"),
      hideAfter: je(r, "hideAfter"),
      autoClose: je(r, "autoClose"),
      open: v,
      close: m
    }), p = _(() => Dt(r.visible) && !h.value);
    ne(tn, {
      controlled: p,
      id: o,
      open: Go(c),
      trigger: je(r, "trigger"),
      onOpen: (d) => {
        y(d);
      },
      onClose: (d) => {
        f(d);
      },
      onToggle: (d) => {
        u(c) ? f(d) : y(d);
      },
      onShow: () => {
        n("show", l.value);
      },
      onHide: () => {
        n("hide", l.value);
      },
      onBeforeShow: () => {
        n("before-show", l.value);
      },
      onBeforeHide: () => {
        n("before-hide", l.value);
      },
      updatePopper: i
    }), D(() => r.disabled, (d) => {
      d && c.value && (c.value = !1);
    });
    const g = (d) => {
      var b, T;
      const w = (T = (b = a.value) == null ? void 0 : b.contentRef) == null ? void 0 : T.popperContentRef, I = (d == null ? void 0 : d.relatedTarget) || document.activeElement;
      return w && w.contains(I);
    };
    return Qo(() => c.value && m()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: g,
      updatePopper: i,
      onOpen: y,
      onClose: f,
      hide: m
    }), (d, b) => (S(), Y(u(ka), {
      ref_key: "popperRef",
      ref: s,
      role: d.role
    }, {
      default: K(() => [
        ee(Ua, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: K(() => [
            d.$slots.default ? F(d.$slots, "default", { key: 0 }) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ee(qa, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": d.ariaLabel,
          "boundaries-padding": d.boundariesPadding,
          content: d.content,
          disabled: d.disabled,
          effect: d.effect,
          enterable: d.enterable,
          "fallback-placements": d.fallbackPlacements,
          "hide-after": d.hideAfter,
          "gpu-acceleration": d.gpuAcceleration,
          offset: d.offset,
          persistent: d.persistent,
          "popper-class": d.popperClass,
          "popper-style": d.popperStyle,
          placement: d.placement,
          "popper-options": d.popperOptions,
          pure: d.pure,
          "raw-content": d.rawContent,
          "reference-el": d.referenceEl,
          "trigger-target-el": d.triggerTargetEl,
          "show-after": d.showAfter,
          strategy: d.strategy,
          teleported: d.teleported,
          transition: d.transition,
          "virtual-triggering": d.virtualTriggering,
          "z-index": d.zIndex,
          "append-to": d.appendTo
        }, {
          default: K(() => [
            F(d.$slots, "content", {}, () => [
              d.rawContent ? (S(), j("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, Ja)) : (S(), j("span", Za, he(d.content), 1))
            ]),
            d.showArrow ? (S(), Y(u(oa), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : fe("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Ya = /* @__PURE__ */ W(Qa, [["__file", "tooltip.vue"]]);
const Xa = Je(Ya), qn = (e) => Ae(e) || qe(e) || oo(e), ei = U({
  accordion: Boolean,
  modelValue: {
    type: x([Array, String, Number]),
    default: () => Ir([])
  }
}), ti = {
  [ao]: qn,
  [io]: qn
}, xo = Symbol("collapseContextKey"), ni = (e, t) => {
  const n = A(En(e.modelValue)), r = (s) => {
    n.value = s;
    const a = e.accordion ? n.value[0] : n.value;
    t(ao, a), t(io, a);
  }, o = (s) => {
    if (e.accordion)
      r([n.value[0] === s ? "" : s]);
    else {
      const a = [...n.value], i = a.indexOf(s);
      i > -1 ? a.splice(i, 1) : a.push(s), r(a);
    }
  };
  return D(() => e.modelValue, () => n.value = En(e.modelValue), { deep: !0 }), ne(xo, {
    activeNames: n,
    handleItemClick: o
  }), {
    activeNames: n,
    setActiveNames: r
  };
}, oi = () => {
  const e = ae("collapse");
  return {
    rootKls: _(() => e.b())
  };
}, ri = O({
  name: "ElCollapse"
}), si = /* @__PURE__ */ O({
  ...ri,
  props: ei,
  emits: ti,
  setup(e, { expose: t, emit: n }) {
    const r = e, { activeNames: o, setActiveNames: s } = ni(r, n), { rootKls: a } = oi();
    return t({
      activeNames: o,
      setActiveNames: s
    }), (i, c) => (S(), j("div", {
      class: Q(u(a))
    }, [
      F(i.$slots, "default")
    ], 2));
  }
});
var ai = /* @__PURE__ */ W(si, [["__file", "collapse.vue"]]);
const ii = O({
  name: "ElCollapseTransition"
}), li = /* @__PURE__ */ O({
  ...ii,
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
    return (o, s) => (S(), Y(Zn, ge({
      name: u(t).b()
    }, Yo(r)), {
      default: K(() => [
        F(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var lt = /* @__PURE__ */ W(li, [["__file", "collapse-transition.vue"]]);
lt.install = (e) => {
  e.component(lt.name, lt);
};
const ci = lt, ui = U({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: x([String, Number]),
    default: void 0
  },
  disabled: Boolean
}), di = (e) => {
  const t = H(xo), { namespace: n } = ae("collapse"), r = A(!1), o = A(!1), s = Qt(), a = _(() => s.current++), i = _(() => {
    var h;
    return (h = e.name) != null ? h : `${n.value}-id-${s.prefix}-${u(a)}`;
  }), c = _(() => t == null ? void 0 : t.activeNames.value.includes(u(i)));
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
      e.disabled || (t == null || t.handleItemClick(u(i)), r.value = !1, o.value = !0);
    },
    handleEnterClick: () => {
      t == null || t.handleItemClick(u(i));
    }
  };
}, pi = (e, { focusing: t, isActive: n, id: r }) => {
  const o = ae("collapse"), s = _(() => [
    o.b("item"),
    o.is("active", u(n)),
    o.is("disabled", e.disabled)
  ]), a = _(() => [
    o.be("item", "header"),
    o.is("active", u(n)),
    { focusing: u(t) && !e.disabled }
  ]), i = _(() => [
    o.be("item", "arrow"),
    o.is("active", u(n))
  ]), c = _(() => o.be("item", "wrap")), l = _(() => o.be("item", "content")), v = _(() => o.b(`content-${u(r)}`)), m = _(() => o.b(`head-${u(r)}`));
  return {
    arrowKls: i,
    headKls: a,
    rootKls: s,
    itemWrapperKls: c,
    itemContentKls: l,
    scopedContentId: v,
    scopedHeadId: m
  };
}, fi = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"], vi = ["id", "aria-hidden", "aria-labelledby"], mi = O({
  name: "ElCollapseItem"
}), gi = /* @__PURE__ */ O({
  ...mi,
  props: ui,
  setup(e, { expose: t }) {
    const n = e, {
      focusing: r,
      id: o,
      isActive: s,
      handleFocus: a,
      handleHeaderClick: i,
      handleEnterClick: c
    } = di(n), {
      arrowKls: l,
      headKls: v,
      rootKls: m,
      itemWrapperKls: h,
      itemContentKls: y,
      scopedContentId: f,
      scopedHeadId: p
    } = pi(n, { focusing: r, isActive: s, id: o });
    return t({
      isActive: s
    }), (g, d) => (S(), j("div", {
      class: Q(u(m))
    }, [
      G("button", {
        id: u(p),
        class: Q(u(v)),
        "aria-expanded": u(s),
        "aria-controls": u(f),
        "aria-describedby": u(f),
        tabindex: g.disabled ? -1 : 0,
        type: "button",
        onClick: d[0] || (d[0] = (...b) => u(i) && u(i)(...b)),
        onKeydown: d[1] || (d[1] = Xo(Gn((...b) => u(c) && u(c)(...b), ["stop", "prevent"]), ["space", "enter"])),
        onFocus: d[2] || (d[2] = (...b) => u(a) && u(a)(...b)),
        onBlur: d[3] || (d[3] = (b) => r.value = !1)
      }, [
        F(g.$slots, "title", {}, () => [
          bt(he(g.title), 1)
        ]),
        ee(u(Co), {
          class: Q(u(l))
        }, {
          default: K(() => [
            ee(u(br))
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, fi),
      ee(u(ci), null, {
        default: K(() => [
          ht(G("div", {
            id: u(f),
            role: "region",
            class: Q(u(h)),
            "aria-hidden": !u(s),
            "aria-labelledby": u(p)
          }, [
            G("div", {
              class: Q(u(y))
            }, [
              F(g.$slots, "default")
            ], 2)
          ], 10, vi), [
            [kt, u(s)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
var No = /* @__PURE__ */ W(gi, [["__file", "collapse-item.vue"]]);
const yi = Je(ai, {
  CollapseItem: No
}), hi = Tr(No), bi = /* @__PURE__ */ O({
  inheritAttrs: !1
});
function _i(e, t, n, r, o, s) {
  return F(e.$slots, "default");
}
var wi = /* @__PURE__ */ W(bi, [["render", _i], ["__file", "collection.vue"]]);
const Ei = /* @__PURE__ */ O({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function Ci(e, t, n, r, o, s) {
  return F(e.$slots, "default");
}
var Oi = /* @__PURE__ */ W(Ei, [["render", Ci], ["__file", "collection-item.vue"]]);
const Ti = "data-el-collection-item", Ii = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), o = Symbol(n), s = {
    ...wi,
    name: t,
    setup() {
      const i = A(null), c = /* @__PURE__ */ new Map();
      ne(r, {
        itemMap: c,
        getItems: () => {
          const v = u(i);
          if (!v)
            return [];
          const m = Array.from(v.querySelectorAll(`[${Ti}]`));
          return [...c.values()].sort((y, f) => m.indexOf(y.ref) - m.indexOf(f.ref));
        },
        collectionRef: i
      });
    }
  }, a = {
    ...Oi,
    name: n,
    setup(i, { attrs: c }) {
      const l = A(null), v = H(r, void 0);
      ne(o, {
        collectionItemRef: l
      }), be(() => {
        const m = u(l);
        m && v.itemMap.set(m, {
          ref: m,
          ...c
        });
      }), me(() => {
        const m = u(l);
        v.itemMap.delete(m);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: o,
    ElCollection: s,
    ElCollectionItem: a
  };
}, $t = U({
  trigger: ze.trigger,
  effect: {
    ...X.effect,
    default: "light"
  },
  type: {
    type: x(String)
  },
  placement: {
    type: x(String),
    default: "bottom"
  },
  popperOptions: {
    type: x(Object),
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
    type: x([Number, String]),
    default: 0
  },
  maxHeight: {
    type: x([Number, String]),
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
    type: x(Object)
  },
  teleported: X.teleported
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
    type: Cr
  }
});
U({
  onKeydown: { type: x(Function) }
});
Ii("Dropdown");
const Pi = U({
  trigger: ze.trigger,
  placement: $t.placement,
  disabled: ze.disabled,
  visible: X.visible,
  transition: X.transition,
  popperOptions: $t.popperOptions,
  tabindex: $t.tabindex,
  content: X.content,
  popperStyle: X.popperStyle,
  popperClass: X.popperClass,
  enterable: {
    ...X.enterable,
    default: !0
  },
  effect: {
    ...X.effect,
    default: "light"
  },
  teleported: X.teleported,
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
}), Si = {
  "update:visible": (e) => Dt(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, Ai = "onUpdate:visible", $i = O({
  name: "ElPopover"
}), xi = /* @__PURE__ */ O({
  ...$i,
  props: Pi,
  emits: Si,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = _(() => r[Ai]), s = ae("popover"), a = A(), i = _(() => {
      var g;
      return (g = u(a)) == null ? void 0 : g.popperRef;
    }), c = _(() => [
      {
        width: ro(r.width)
      },
      r.popperStyle
    ]), l = _(() => [s.b(), r.popperClass, { [s.m("plain")]: !!r.content }]), v = _(() => r.transition === `${s.namespace.value}-fade-in-linear`), m = () => {
      var g;
      (g = a.value) == null || g.hide();
    }, h = () => {
      n("before-enter");
    }, y = () => {
      n("before-leave");
    }, f = () => {
      n("after-enter");
    }, p = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: i,
      hide: m
    }), (g, d) => (S(), Y(u(Xa), ge({
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
      "popper-class": u(l),
      "popper-style": u(c),
      teleported: g.teleported,
      persistent: g.persistent,
      "gpu-acceleration": u(v),
      "onUpdate:visible": u(o),
      onBeforeShow: h,
      onBeforeHide: y,
      onShow: f,
      onHide: p
    }), {
      content: K(() => [
        g.title ? (S(), j("div", {
          key: 0,
          class: Q(u(s).e("title")),
          role: "title"
        }, he(g.title), 3)) : fe("v-if", !0),
        F(g.$slots, "default", {}, () => [
          bt(he(g.content), 1)
        ])
      ]),
      default: K(() => [
        g.$slots.reference ? F(g.$slots, "reference", { key: 0 }) : fe("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var Ni = /* @__PURE__ */ W(xi, [["__file", "popover.vue"]]);
const Jn = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var Ri = {
  mounted(e, t) {
    Jn(e, t);
  },
  updated(e, t) {
    Jn(e, t);
  }
};
const Fi = "popover", ki = Or(Ri, Fi), Bi = Je(Ni, {
  directive: ki
});
const Li = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, ji = /* @__PURE__ */ G("path", {
  fill: "#D7D7D7",
  d: "M459.015 850.31a110.07 110.07 0 0 1 105.978 0L786.78 971.75a7.68 7.68 0 0 0 5.12.87c5.273-.921 9.727-7.474 8.498-15.103l-41.982-257.983a116.94 116.94 0 0 1 31.487-100.449L968.99 416.157a13.82 13.82 0 0 0 3.583-7.782c1.127-7.628-3.43-13.976-8.703-14.796l-247.744-37.988a112.63 112.63 0 0 1-84.424-63.587L520.605 57.521a11.47 11.47 0 0 0-4.966-5.376c-4.25-2.202-9.472-.358-12.185 5.376l-111.15 234.483a112.63 112.63 0 0 1-84.475 63.587L60.086 393.58a9.16 9.16 0 0 0-5.223 2.919 14.847 14.847 0 0 0 .154 19.66l179.088 182.876c25.804 26.367 37.425 63.792 31.486 100.45L223.61 957.516c-.512 3.175 0 6.451 1.382 9.216 2.816 5.58 7.987 7.27 12.236 4.966l221.787-121.44zm-197.212 166.391c-29.95 16.383-66.915 4.25-82.581-27.032a66.45 66.45 0 0 1-6.144-40.343l41.982-258.034a65.74 65.74 0 0 0-17.56-56.42L18.461 451.944a65.993 65.993 0 0 1-1.024-90.414c9.37-9.983 21.657-16.537 34.866-18.533l247.794-38.04a61.44 61.44 0 0 0 45.924-34.865l111.15-234.484c15-31.64 51.76-44.593 81.966-28.926 12.032 6.195 21.76 16.383 27.647 28.926l111.2 234.484a61.44 61.44 0 0 0 45.924 34.865l247.795 38.04c33.38 5.12 56.522 37.578 51.607 72.546-1.946 13.823-8.192 26.623-17.766 36.401L826.51 634.872c-14.336 14.694-20.94 35.787-17.561 56.47l41.982 257.984c5.631 34.814-16.742 67.785-50.071 73.724a58.88 58.88 0 0 1-38.654-6.4L540.367 895.21a58.88 58.88 0 0 0-56.778 0l-221.786 121.44z"
}, null, -1), Di = [
  ji
];
function Mi(e, t) {
  return S(), j("svg", Li, [...Di]);
}
const Ki = { render: Mi }, Hi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Vi = /* @__PURE__ */ G("path", {
  fill: "#FFEABB",
  d: "M851.349 383.512c43.677 6.347 61.117 60.021 29.512 90.828l-126.42 123.229a53.25 53.25 0 0 0-15.315 47.133l29.844 174.002c7.461 43.5-38.197 76.673-77.263 56.135l-156.263-82.152a53.25 53.25 0 0 0-49.559 0l-156.263 82.152c-39.066 20.538-84.724-12.635-77.263-56.135l29.844-174.002z"
}, null, -1), Ui = /* @__PURE__ */ G("path", {
  fill: "#F9C73D",
  d: "M716.565 911.044c-13.231.001-26.527-3.19-38.817-9.652L521.484 819.24a23.24 23.24 0 0 0-21.638 0l-156.264 82.152c-28.255 14.854-61.848 12.426-87.673-6.336-25.824-18.763-38.515-49.963-33.119-81.424l29.843-174.002a23.25 23.25 0 0 0-6.686-20.579l-126.42-123.229c-22.858-22.281-30.93-54.98-21.066-85.339s35.615-52.069 67.204-56.659l174.708-25.387a23.25 23.25 0 0 0 17.506-12.719l78.131-158.312C450.138 128.783 478.747 111 510.665 111c.002 0-.001 0 0 0 31.92 0 60.526 17.782 74.653 46.406l78.132 158.312a23.25 23.25 0 0 0 17.505 12.719l174.709 25.387c31.589 4.59 57.339 26.301 67.203 56.659s1.792 63.059-21.065 85.339l-126.42 123.229a23.25 23.25 0 0 0-6.687 20.578l29.844 174.003c5.396 31.461-7.294 62.661-33.119 81.424-14.591 10.6-31.667 15.987-48.855 15.988M510.666 171c-4.346 0-15.076 1.263-20.85 12.96l-78.132 158.312a83.23 83.23 0 0 1-62.682 45.542L174.295 413.2c-12.909 1.876-17.426 11.691-18.769 15.824s-3.458 14.728 5.883 23.833l126.419 123.229a83.23 83.23 0 0 1 23.942 73.688l-29.843 174.001c-2.205 12.856 5.734 20.186 9.249 22.74 3.516 2.555 12.939 7.838 24.485 1.77l156.264-82.152a83.23 83.23 0 0 1 77.479 0l156.263 82.152c11.548 6.071 20.97.785 24.485-1.77s11.454-9.884 9.249-22.74l-29.844-174.002a83.24 83.24 0 0 1 23.942-73.687l126.42-123.229c9.341-9.105 7.226-19.7 5.883-23.833s-5.859-13.948-18.769-15.824l-174.708-25.387a83.24 83.24 0 0 1-62.682-45.541L531.514 183.96c-5.773-11.697-16.503-12.96-20.848-12.96"
}, null, -1), Wi = [
  Vi,
  Ui
];
function zi(e, t) {
  return S(), j("svg", Hi, [...Wi]);
}
const qi = { render: zi }, Ji = O({
  name: "ShowCollect"
}), Zi = /* @__PURE__ */ O({
  ...Ji,
  props: {
    isCollect: { type: Boolean },
    isShow: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => ht((S(), j("div", null, [
      t.isCollect ? (S(), Y(u(qi), { key: 0 })) : (S(), Y(u(Ki), { key: 1 }))
    ], 512)), [
      [kt, t.isCollect || t.isShow]
    ]);
  }
}), Gi = { class: "jlg-menu" }, Qi = {
  key: 0,
  class: "jlg-menu-logo"
}, Yi = { class: "jlg-menu-first-level-menu-icon" }, Xi = { class: "jlg-menu-first-level-menu-text" }, el = { class: "second-level-menu-title" }, tl = ["onMouseenter", "onMouseleave", "onClick"], nl = O({
  name: "JlgMenu"
}), ol = /* @__PURE__ */ O({
  ...nl,
  props: {
    menuData: {},
    defaultActive: {},
    elPopoverProps: {}
  },
  emits: ["collectClick", "threeLevelMenuClick"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Bt(), s = A();
    function a(i) {
      return i.map((c) => ({
        ...c,
        _isShowCollect: !1,
        children: a(c.children ?? [])
      }));
    }
    return D(
      () => n.menuData,
      (i) => {
        s.value = a(i);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (i, c) => {
      const l = er("dir"), v = Bi;
      return S(), j("div", Gi, [
        u(o).logo ? (S(), j("div", Qi, [
          F(i.$slots, "logo", {}, void 0, !0)
        ])) : fe("", !0),
        G("div", null, [
          (S(!0), j(at, null, De(u(s), (m) => (S(), Y(v, ge({
            key: m.index,
            placement: "right",
            width: 400,
            trigger: "click",
            teleported: !1
          }, n.elPopoverProps), {
            reference: K(() => [
              G("div", {
                class: Q([
                  "jlg-menu-first-level-menu",
                  n.defaultActive === m.index ? "jlg-menu-first-level-menu-selected" : "jlg-menu-first-level-menu-no-selected"
                ])
              }, [
                G("div", Yi, [
                  F(i.$slots, "first-menu-icon" + m.index, {}, () => [
                    m.iconClass ? (S(), j("i", {
                      key: 0,
                      class: Q(m.iconClass)
                    }, null, 2)) : fe("", !0)
                  ], !0)
                ]),
                G("p", Xi, he(m.title), 1)
              ], 2)
            ]),
            default: K(() => [
              ee(l, { class: "jlg-menu-popover" }, {
                default: K(() => [
                  (S(!0), j(at, null, De(m.children, (h) => (S(), j("div", {
                    key: h.index,
                    class: "second-level-menu"
                  }, [
                    G("div", el, he(h.title), 1),
                    (S(!0), j(at, null, De(h.children, (y) => (S(), j("div", {
                      key: y.index,
                      class: "three-level-menu-title",
                      onMouseenter: (f) => y._isShowCollect = !0,
                      onMouseleave: (f) => y._isShowCollect = !1,
                      onClick: (f) => r("threeLevelMenuClick", y, [m, h, y])
                    }, [
                      bt(he(y.title) + " ", 1),
                      ee(Zi, {
                        "is-collect": y.isCollect,
                        "is-show": y._isShowCollect,
                        onClick: Gn((f) => r("collectClick", y, [m, h, y]), ["stop"])
                      }, null, 8, ["is-collect", "is-show", "onClick"])
                    ], 40, tl))), 128))
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
const nn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ct = /* @__PURE__ */ nn(ol, [["__scopeId", "data-v-3025145e"]]);
ct.install = (e) => {
  e.component(ct.name, ct);
};
const rl = O({
  name: "JlgGridLayout"
}), ut = /* @__PURE__ */ O({
  ...rl,
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
    ne("grid-layout-props", t);
    const n = (a, i) => Array.from({ length: i }, () => a).join(" "), r = _(() => n("1fr", t.columns)), o = _(() => n("1fr", t.rows)), s = _(() => ({
      width: t.width,
      height: t.height,
      padding: t.padding,
      display: t.inline ? "inline-grid" : "grid",
      "grid-template-columns": r.value,
      "grid-template-rows": o.value,
      "grid-auto-flow": t.flow,
      gap: t.gap
    }));
    return (a, i) => (S(), j("div", {
      class: "grid-layout",
      style: Ft(u(s))
    }, [
      F(a.$slots, "default")
    ], 4));
  }
});
ut.install = (e) => {
  e.component(ut.name, ut);
};
const sl = O({
  name: "JlgGridCell"
}), al = /* @__PURE__ */ O({
  ...sl,
  props: {
    top: { default: 0 },
    height: { default: 0 },
    width: { default: 0 },
    left: { default: 0 },
    center: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = H("grid-layout-props"), r = _(() => ({
      "grid-column": t.left && t.width ? t.left + "/ span " + t.width : "span " + t.width,
      "grid-row": t.top && t.height ? t.top + "/ span " + t.height : "span " + t.height,
      border: n.border ? "1px solid #ccc" : ""
    }));
    return (o, s) => (S(), j("div", {
      class: Q(["grid-cell", t.center ? "grid-cell-center" : ""]),
      style: Ft(u(r))
    }, [
      F(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const dt = /* @__PURE__ */ nn(al, [["__scopeId", "data-v-14088da3"]]);
dt.install = (e) => {
  e.component(dt.name, dt);
};
const il = O({
  name: "JlgCollapse"
}), pt = /* @__PURE__ */ O({
  ...il,
  props: {
    accordion: { type: Boolean },
    modelValue: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = Qn(), o = Bt(), s = _(() => ({
      ...n,
      ...r
    })), a = A(null), i = "_" + Date.now();
    ne("collapseKey", i);
    const c = (m) => {
      var h;
      (h = document.querySelector("#" + i + m)) == null || h.scrollIntoView({
        behavior: "smooth"
      });
    }, l = /* @__PURE__ */ new Set();
    return ne("addCollapseItem", (m) => {
      l.add(m);
    }), t({
      _ref: a,
      jumpAnchor: c,
      collapseItems: _(() => Array.from(l))
    }), (m, h) => {
      const y = yi;
      return S(), Y(y, ge({
        ref_key: "_ref",
        ref: a
      }, u(s)), Yn({ _: 2 }, [
        De(u(o), (f, p) => ({
          name: p,
          fn: K(() => [
            F(m.$slots, p)
          ])
        }))
      ]), 1040);
    };
  }
});
pt.install = (e) => {
  e.component(pt.name, pt);
};
const ll = O({
  name: "JlgCollapseItem"
}), cl = /* @__PURE__ */ O({
  ...ll,
  props: {
    title: {},
    name: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Qn(), r = Bt(), o = _(() => Object.keys(r).filter((l) => l !== "title")), s = A(null), a = _(() => ({
      ...t,
      ...n
    })), i = H("collapseKey"), c = H("addCollapseItem");
    return D(
      () => a.value,
      (l) => {
        l && c(l);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), (l, v) => {
      const m = Co, h = hi;
      return S(), Y(h, ge({
        id: u(i) + u(a).name,
        ref_key: "_ref",
        ref: s
      }, u(a)), Yn({
        title: K(() => {
          var y;
          return [
            F(l.$slots, "title", { _ref: u(s) }, () => [
              bt(he(u(a).title), 1)
            ], !0),
            ee(m, {
              class: Q(["el-collapse-item__arrow", (y = u(s)) != null && y.isActive ? "is-active" : "", "customize"])
            }, {
              default: K(() => [
                ee(u(wr))
              ]),
              _: 1
            }, 8, ["class"])
          ];
        }),
        _: 2
      }, [
        De(u(o), (y) => ({
          name: y,
          fn: K(() => [
            F(l.$slots, y, {}, void 0, !0)
          ])
        }))
      ]), 1040, ["id"]);
    };
  }
});
const ft = /* @__PURE__ */ nn(cl, [["__scopeId", "data-v-f8faa1e0"]]);
ft.install = (e) => {
  e.component(ft.name, ft);
};
const ul = [ct, ut, dt, pt, ft], Ro = function(e) {
  ul.forEach((t) => {
    t.name && e.component(t.name, t);
  });
};
typeof window < "u" && window.Vue && Ro(window.Vue);
const pl = { install: Ro };
export {
  pt as JlgCollapse,
  ft as JlgCollapseItem,
  dt as JlgGridCell,
  ut as JlgGridLayout,
  ct as JlgMenu,
  pl as default
};
