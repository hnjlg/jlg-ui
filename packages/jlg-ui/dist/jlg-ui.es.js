import { getCurrentScope as Co, onScopeDispose as To, unref as v, watch as j, warn as Io, getCurrentInstance as De, inject as H, ref as A, computed as O, onMounted as ve, shallowRef as Po, onBeforeUnmount as pe, onBeforeMount as So, provide as le, defineComponent as N, renderSlot as K, openBlock as $, createElementBlock as D, normalizeClass as Ie, normalizeStyle as St, withDirectives as At, cloneVNode as Ao, Fragment as ot, Text as Ro, Comment as $o, createVNode as Ee, createBlock as re, mergeProps as We, withCtx as q, createCommentVNode as ce, nextTick as rn, toRef as Be, Teleport as No, Transition as xo, vShow as Dn, readonly as Fo, onDeactivated as ko, toDisplayString as Te, createTextVNode as Mn, createElementVNode as de, useSlots as Bo, resolveComponent as Lo, renderList as ht, withModifiers as jo } from "vue";
const ie = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e == null ? void 0 : e(r);
  if (n === !1 || !s)
    return t == null ? void 0 : t(r);
};
var sn;
const X = typeof window < "u", Do = (e) => typeof e == "string", Kn = () => {
}, Mo = X && ((sn = window == null ? void 0 : window.navigator) == null ? void 0 : sn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Un(e) {
  return typeof e == "function" ? e() : v(e);
}
function Ko(e) {
  return e;
}
function Vn(e) {
  return Co() ? (To(e), !0) : !1;
}
function be(e) {
  var t;
  const n = Un(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Hn = X ? window : void 0;
function yt(...e) {
  let t, n, o, r;
  if (Do(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Hn) : [t, n, o, r] = e, !t)
    return Kn;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((d) => d()), s.length = 0;
  }, l = (d, g, y, h) => (d.addEventListener(g, y, h), () => d.removeEventListener(g, y, h)), i = j(() => [be(t), Un(r)], ([d, g]) => {
    a(), d && s.push(...n.flatMap((y) => o.map((h) => l(d, y, h, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), a();
  };
  return Vn(c), c;
}
let an = !1;
function Uo(e, t, n = {}) {
  const { window: o = Hn, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  Mo && !an && (an = !0, Array.from(o.document.body.children).forEach((y) => y.addEventListener("click", Kn)));
  let l = !0;
  const i = (y) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((f) => f === y.target || y.composedPath().includes(f));
    {
      const f = be(h);
      return f && (y.target === f || y.composedPath().includes(f));
    }
  }), d = [
    yt(o, "click", (y) => {
      const h = be(e);
      if (!(!h || h === y.target || y.composedPath().includes(h))) {
        if (y.detail === 0 && (l = !i(y)), !l) {
          l = !0;
          return;
        }
        t(y);
      }
    }, { passive: !0, capture: s }),
    yt(o, "pointerdown", (y) => {
      const h = be(e);
      h && (l = !y.composedPath().includes(h) && !i(y));
    }, { passive: !0 }),
    a && yt(o, "blur", (y) => {
      var h;
      const f = be(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(f != null && f.contains(o.document.activeElement)) && t(y);
    })
  ].filter(Boolean);
  return () => d.forEach((y) => y());
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cn = "__vueuse_ssr_handlers__";
ln[cn] = ln[cn] || {};
var un;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(un || (un = {}));
var Vo = Object.defineProperty, pn = Object.getOwnPropertySymbols, Ho = Object.prototype.hasOwnProperty, Wo = Object.prototype.propertyIsEnumerable, fn = (e, t, n) => t in e ? Vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zo = (e, t) => {
  for (var n in t || (t = {}))
    Ho.call(t, n) && fn(e, n, t[n]);
  if (pn)
    for (var n of pn(t))
      Wo.call(t, n) && fn(e, n, t[n]);
  return e;
};
const qo = {
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
zo({
  linear: Ko
}, qo);
/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ct = () => {
}, Jo = Object.prototype.hasOwnProperty, dn = (e, t) => Jo.call(e, t), Zo = Array.isArray, Ye = (e) => typeof e == "function", pt = (e) => typeof e == "string", Rt = (e) => e !== null && typeof e == "object";
function Tt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function $t(e) {
  return e == null;
}
function Go(e) {
  return e === void 0;
}
const Nt = (e) => typeof e == "boolean", Me = (e) => typeof e == "number", lt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Qo = (e) => pt(e) ? !Number.isNaN(Number(e)) : !1;
class Yo extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = pt(e) ? new Yo(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Xo = "utils/dom/style";
function er(e, t = "px") {
  if (!e)
    return "";
  if (Me(e) || Qo(e))
    return `${e}${t}`;
  if (pt(e))
    return e;
  Ke(Xo, "binding value must be a string or number");
}
const Wn = "__epPropKey", S = (e) => e, tr = (e) => Rt(e) && !!e[Wn], xt = (e, t) => {
  if (!Rt(e) || tr(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, i = {
    type: s,
    required: !!o,
    validator: n || a ? (c) => {
      let d = !1, g = [];
      if (n && (g = Array.from(n), dn(e, "default") && g.push(r), d || (d = g.includes(c))), a && (d || (d = a(c))), !d && g.length > 0) {
        const y = [...new Set(g)].map((h) => JSON.stringify(h)).join(", ");
        Io(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Wn]: !0
  };
  return dn(e, "default") && (i.default = r), i;
}, J = (e) => Tt(Object.entries(e).map(([t, n]) => [
  t,
  xt(n, t)
])), nr = S([
  String,
  Object,
  Function
]), Ft = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, or = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), ct = {
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
}, bt = "el", rr = "is-", ye = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, sr = Symbol("namespaceContextKey"), kt = (e) => {
  const t = e || (De() ? H(sr, A(bt)) : A(bt));
  return O(() => v(t) || bt);
}, Ne = (e, t) => {
  const n = kt(t);
  return {
    namespace: n,
    b: (p = "") => ye(n.value, e, p, "", ""),
    e: (p) => p ? ye(n.value, e, "", p, "") : "",
    m: (p) => p ? ye(n.value, e, "", "", p) : "",
    be: (p, m) => p && m ? ye(n.value, e, p, m, "") : "",
    em: (p, m) => p && m ? ye(n.value, e, "", p, m) : "",
    bm: (p, m) => p && m ? ye(n.value, e, p, "", m) : "",
    bem: (p, m, u) => p && m && u ? ye(n.value, e, p, m, u) : "",
    is: (p, ...m) => {
      const u = m.length >= 1 ? m[0] : !0;
      return p && u ? `${rr}${p}` : "";
    },
    cssVar: (p) => {
      const m = {};
      for (const u in p)
        p[u] && (m[`--${n.value}-${u}`] = p[u]);
      return m;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const m = {};
      for (const u in p)
        p[u] && (m[`--${n.value}-${e}-${u}`] = p[u]);
      return m;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
}, ar = xt({
  type: S(Boolean),
  default: null
}), ir = xt({
  type: S(Function)
}), zn = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: ar,
    [n]: ir
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: l,
      shouldHideWhenRouteChanges: i,
      shouldProceed: c,
      onShow: d,
      onHide: g
    }) => {
      const y = De(), { emit: h } = y, f = y.props, p = O(() => Ye(f[n])), m = O(() => f[e] === null), u = (_) => {
        a.value !== !0 && (a.value = !0, l && (l.value = _), Ye(d) && d(_));
      }, w = (_) => {
        a.value !== !1 && (a.value = !1, l && (l.value = _), Ye(g) && g(_));
      }, C = (_) => {
        if (f.disabled === !0 || Ye(c) && !c())
          return;
        const I = p.value && X;
        I && h(t, !0), (m.value || !I) && u(_);
      }, b = (_) => {
        if (f.disabled === !0 || !X)
          return;
        const I = p.value && X;
        I && h(t, !1), (m.value || !I) && w(_);
      }, T = (_) => {
        Nt(_) && (f.disabled && _ ? p.value && h(t, !1) : a.value !== _ && (_ ? u() : w()));
      }, P = () => {
        a.value ? b() : C();
      };
      return j(() => f[e], T), i && y.appContext.config.globalProperties.$route !== void 0 && j(() => ({
        ...y.proxy.$route
      }), () => {
        i.value && a.value && b();
      }), ve(() => {
        T(f[e]);
      }), {
        hide: b,
        show: C,
        toggle: P,
        hasUpdateHandler: p
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
zn("modelValue");
var W = "top", Q = "bottom", Y = "right", z = "left", Bt = "auto", ze = [W, Q, Y, z], Pe = "start", Ue = "end", lr = "clippingParents", qn = "viewport", ke = "popper", cr = "reference", vn = ze.reduce(function(e, t) {
  return e.concat([t + "-" + Pe, t + "-" + Ue]);
}, []), Lt = [].concat(ze, [Bt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Pe, t + "-" + Ue]);
}, []), ur = "beforeRead", pr = "read", fr = "afterRead", dr = "beforeMain", vr = "main", mr = "afterMain", gr = "beforeWrite", hr = "write", yr = "afterWrite", br = [ur, pr, fr, dr, vr, mr, gr, hr, yr];
function se(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ee(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Se(e) {
  var t = ee(e).Element;
  return e instanceof t || e instanceof Element;
}
function G(e) {
  var t = ee(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ee(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !G(s) || !se(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var l = r[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Er(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(i, c) {
        return i[c] = "", i;
      }, {});
      !G(r) || !se(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Jn = { name: "applyStyles", enabled: !0, phase: "write", fn: wr, effect: Er, requires: ["computeStyles"] };
function oe(e) {
  return e.split("-")[0];
}
var we = Math.max, ut = Math.min, Ae = Math.round;
function Re(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (G(e) && t) {
    var s = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = Ae(n.width) / a || 1), s > 0 && (r = Ae(n.height) / s || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function Dt(e) {
  var t = Re(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Zn(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && jt(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function ue(e) {
  return ee(e).getComputedStyle(e);
}
function _r(e) {
  return ["table", "td", "th"].indexOf(se(e)) >= 0;
}
function me(e) {
  return ((Se(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ft(e) {
  return se(e) === "html" ? e : e.assignedSlot || e.parentNode || (jt(e) ? e.host : null) || me(e);
}
function mn(e) {
  return !G(e) || ue(e).position === "fixed" ? null : e.offsetParent;
}
function Or(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && G(e)) {
    var o = ue(e);
    if (o.position === "fixed")
      return null;
  }
  var r = ft(e);
  for (jt(r) && (r = r.host); G(r) && ["html", "body"].indexOf(se(r)) < 0; ) {
    var s = ue(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function qe(e) {
  for (var t = ee(e), n = mn(e); n && _r(n) && ue(n).position === "static"; )
    n = mn(n);
  return n && (se(n) === "html" || se(n) === "body" && ue(n).position === "static") ? t : n || Or(e) || t;
}
function Mt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Le(e, t, n) {
  return we(e, ut(t, n));
}
function Cr(e, t, n) {
  var o = Le(e, t, n);
  return o > n ? n : o;
}
function Gn() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Qn(e) {
  return Object.assign({}, Gn(), e);
}
function Yn(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Tr = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qn(typeof e != "number" ? e : Yn(e, ze));
};
function Ir(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = oe(n.placement), i = Mt(l), c = [z, Y].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!s || !a)) {
    var g = Tr(r.padding, n), y = Dt(s), h = i === "y" ? W : z, f = i === "y" ? Q : Y, p = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], m = a[i] - n.rects.reference[i], u = qe(s), w = u ? i === "y" ? u.clientHeight || 0 : u.clientWidth || 0 : 0, C = p / 2 - m / 2, b = g[h], T = w - y[d] - g[f], P = w / 2 - y[d] / 2 + C, _ = Le(b, P, T), I = i;
    n.modifiersData[o] = (t = {}, t[I] = _, t.centerOffset = _ - P, t);
  }
}
function Pr(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Zn(t.elements.popper, r) || (t.elements.arrow = r));
}
var Sr = { name: "arrow", enabled: !0, phase: "main", fn: Ir, effect: Pr, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function $e(e) {
  return e.split("-")[1];
}
var Ar = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Rr(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Ae(t * r) / r || 0, y: Ae(n * r) / r || 0 };
}
function gn(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, l = e.position, i = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, g = e.isFixed, y = a.x, h = y === void 0 ? 0 : y, f = a.y, p = f === void 0 ? 0 : f, m = typeof d == "function" ? d({ x: h, y: p }) : { x: h, y: p };
  h = m.x, p = m.y;
  var u = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), C = z, b = W, T = window;
  if (c) {
    var P = qe(n), _ = "clientHeight", I = "clientWidth";
    if (P === ee(n) && (P = me(n), ue(P).position !== "static" && l === "absolute" && (_ = "scrollHeight", I = "scrollWidth")), P = P, r === W || (r === z || r === Y) && s === Ue) {
      b = Q;
      var F = g && P === T && T.visualViewport ? T.visualViewport.height : P[_];
      p -= F - o.height, p *= i ? 1 : -1;
    }
    if (r === z || (r === W || r === Q) && s === Ue) {
      C = Y;
      var R = g && P === T && T.visualViewport ? T.visualViewport.width : P[I];
      h -= R - o.width, h *= i ? 1 : -1;
    }
  }
  var k = Object.assign({ position: l }, c && Ar), x = d === !0 ? Rr({ x: h, y: p }) : { x: h, y: p };
  if (h = x.x, p = x.y, i) {
    var B;
    return Object.assign({}, k, (B = {}, B[b] = w ? "0" : "", B[C] = u ? "0" : "", B.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)", B));
  }
  return Object.assign({}, k, (t = {}, t[b] = w ? p + "px" : "", t[C] = u ? h + "px" : "", t.transform = "", t));
}
function $r(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, i = l === void 0 ? !0 : l, c = { placement: oe(t.placement), variation: $e(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gn(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gn(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Xn = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: $r, data: {} }, Xe = { passive: !0 };
function Nr(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, l = a === void 0 ? !0 : a, i = ee(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Xe);
  }), l && i.addEventListener("resize", n.update, Xe), function() {
    s && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Xe);
    }), l && i.removeEventListener("resize", n.update, Xe);
  };
}
var eo = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Nr, data: {} }, xr = { left: "right", right: "left", bottom: "top", top: "bottom" };
function rt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return xr[t];
  });
}
var Fr = { start: "end", end: "start" };
function hn(e) {
  return e.replace(/start|end/g, function(t) {
    return Fr[t];
  });
}
function Kt(e) {
  var t = ee(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Ut(e) {
  return Re(me(e)).left + Kt(e).scrollLeft;
}
function kr(e) {
  var t = ee(e), n = me(e), o = t.visualViewport, r = n.clientWidth, s = n.clientHeight, a = 0, l = 0;
  return o && (r = o.width, s = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, l = o.offsetTop)), { width: r, height: s, x: a + Ut(e), y: l };
}
function Br(e) {
  var t, n = me(e), o = Kt(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = we(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = we(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Ut(e), i = -o.scrollTop;
  return ue(r || n).direction === "rtl" && (l += we(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: l, y: i };
}
function Vt(e) {
  var t = ue(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function to(e) {
  return ["html", "body", "#document"].indexOf(se(e)) >= 0 ? e.ownerDocument.body : G(e) && Vt(e) ? e : to(ft(e));
}
function je(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = to(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ee(o), a = r ? [s].concat(s.visualViewport || [], Vt(o) ? o : []) : o, l = t.concat(a);
  return r ? l : l.concat(je(ft(a)));
}
function It(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Lr(e) {
  var t = Re(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function yn(e, t) {
  return t === qn ? It(kr(e)) : Se(t) ? Lr(t) : It(Br(me(e)));
}
function jr(e) {
  var t = je(ft(e)), n = ["absolute", "fixed"].indexOf(ue(e).position) >= 0, o = n && G(e) ? qe(e) : e;
  return Se(o) ? t.filter(function(r) {
    return Se(r) && Zn(r, o) && se(r) !== "body";
  }) : [];
}
function Dr(e, t, n) {
  var o = t === "clippingParents" ? jr(e) : [].concat(t), r = [].concat(o, [n]), s = r[0], a = r.reduce(function(l, i) {
    var c = yn(e, i);
    return l.top = we(c.top, l.top), l.right = ut(c.right, l.right), l.bottom = ut(c.bottom, l.bottom), l.left = we(c.left, l.left), l;
  }, yn(e, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function no(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? oe(o) : null, s = o ? $e(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case W:
      i = { x: a, y: t.y - n.height };
      break;
    case Q:
      i = { x: a, y: t.y + t.height };
      break;
    case Y:
      i = { x: t.x + t.width, y: l };
      break;
    case z:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var c = r ? Mt(r) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case Pe:
        i[c] = i[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Ue:
        i[c] = i[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function Ve(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.boundary, a = s === void 0 ? lr : s, l = n.rootBoundary, i = l === void 0 ? qn : l, c = n.elementContext, d = c === void 0 ? ke : c, g = n.altBoundary, y = g === void 0 ? !1 : g, h = n.padding, f = h === void 0 ? 0 : h, p = Qn(typeof f != "number" ? f : Yn(f, ze)), m = d === ke ? cr : ke, u = e.rects.popper, w = e.elements[y ? m : d], C = Dr(Se(w) ? w : w.contextElement || me(e.elements.popper), a, i), b = Re(e.elements.reference), T = no({ reference: b, element: u, strategy: "absolute", placement: r }), P = It(Object.assign({}, u, T)), _ = d === ke ? P : b, I = { top: C.top - _.top + p.top, bottom: _.bottom - C.bottom + p.bottom, left: C.left - _.left + p.left, right: _.right - C.right + p.right }, F = e.modifiersData.offset;
  if (d === ke && F) {
    var R = F[r];
    Object.keys(I).forEach(function(k) {
      var x = [Y, Q].indexOf(k) >= 0 ? 1 : -1, B = [W, Q].indexOf(k) >= 0 ? "y" : "x";
      I[k] += R[B] * x;
    });
  }
  return I;
}
function Mr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, c = i === void 0 ? Lt : i, d = $e(o), g = d ? l ? vn : vn.filter(function(f) {
    return $e(f) === d;
  }) : ze, y = g.filter(function(f) {
    return c.indexOf(f) >= 0;
  });
  y.length === 0 && (y = g);
  var h = y.reduce(function(f, p) {
    return f[p] = Ve(e, { placement: p, boundary: r, rootBoundary: s, padding: a })[oe(p)], f;
  }, {});
  return Object.keys(h).sort(function(f, p) {
    return h[f] - h[p];
  });
}
function Kr(e) {
  if (oe(e) === Bt)
    return [];
  var t = rt(e);
  return [hn(e), t, hn(t)];
}
function Ur(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !0 : a, i = n.fallbackPlacements, c = n.padding, d = n.boundary, g = n.rootBoundary, y = n.altBoundary, h = n.flipVariations, f = h === void 0 ? !0 : h, p = n.allowedAutoPlacements, m = t.options.placement, u = oe(m), w = u === m, C = i || (w || !f ? [rt(m)] : Kr(m)), b = [m].concat(C).reduce(function(ge, ae) {
      return ge.concat(oe(ae) === Bt ? Mr(t, { placement: ae, boundary: d, rootBoundary: g, padding: c, flipVariations: f, allowedAutoPlacements: p }) : ae);
    }, []), T = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), I = !0, F = b[0], R = 0; R < b.length; R++) {
      var k = b[R], x = oe(k), B = $e(k) === Pe, U = [W, Q].indexOf(x) >= 0, M = U ? "width" : "height", L = Ve(t, { placement: k, boundary: d, rootBoundary: g, altBoundary: y, padding: c }), E = U ? B ? Y : z : B ? Q : W;
      T[M] > P[M] && (E = rt(E));
      var V = rt(E), ne = [];
      if (s && ne.push(L[x] <= 0), l && ne.push(L[E] <= 0, L[V] <= 0), ne.every(function(ge) {
        return ge;
      })) {
        F = k, I = !1;
        break;
      }
      _.set(k, ne);
    }
    if (I)
      for (var Je = f ? 3 : 1, vt = function(ge) {
        var ae = b.find(function(Ge) {
          var Fe = _.get(Ge);
          if (Fe)
            return Fe.slice(0, ge).every(function(_e) {
              return _e;
            });
        });
        if (ae)
          return F = ae, "break";
      }, xe = Je; xe > 0; xe--) {
        var Ze = vt(xe);
        if (Ze === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[o]._skip = !0, t.placement = F, t.reset = !0);
  }
}
var Vr = { name: "flip", enabled: !0, phase: "main", fn: Ur, requiresIfExists: ["offset"], data: { _skip: !1 } };
function bn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function wn(e) {
  return [W, Y, Q, z].some(function(t) {
    return e[t] >= 0;
  });
}
function Hr(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = Ve(t, { elementContext: "reference" }), l = Ve(t, { altBoundary: !0 }), i = bn(a, o), c = bn(l, r, s), d = wn(i), g = wn(c);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: g }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": g });
}
var Wr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Hr };
function zr(e, t, n) {
  var o = oe(e), r = [z, W].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * r, [z, Y].indexOf(o) >= 0 ? { x: l, y: a } : { x: a, y: l };
}
function qr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = Lt.reduce(function(d, g) {
    return d[g] = zr(g, t.rects, s), d;
  }, {}), l = a[t.placement], i = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = a;
}
var Jr = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: qr };
function Zr(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = no({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var oo = { name: "popperOffsets", enabled: !0, phase: "read", fn: Zr, data: {} };
function Gr(e) {
  return e === "x" ? "y" : "x";
}
function Qr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !1 : a, i = n.boundary, c = n.rootBoundary, d = n.altBoundary, g = n.padding, y = n.tether, h = y === void 0 ? !0 : y, f = n.tetherOffset, p = f === void 0 ? 0 : f, m = Ve(t, { boundary: i, rootBoundary: c, padding: g, altBoundary: d }), u = oe(t.placement), w = $e(t.placement), C = !w, b = Mt(u), T = Gr(b), P = t.modifiersData.popperOffsets, _ = t.rects.reference, I = t.rects.popper, F = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, R = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = { x: 0, y: 0 };
  if (P) {
    if (s) {
      var B, U = b === "y" ? W : z, M = b === "y" ? Q : Y, L = b === "y" ? "height" : "width", E = P[b], V = E + m[U], ne = E - m[M], Je = h ? -I[L] / 2 : 0, vt = w === Pe ? _[L] : I[L], xe = w === Pe ? -I[L] : -_[L], Ze = t.elements.arrow, ge = h && Ze ? Dt(Ze) : { width: 0, height: 0 }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gn(), Ge = ae[U], Fe = ae[M], _e = Le(0, _[L], ge[L]), ho = C ? _[L] / 2 - Je - _e - Ge - R.mainAxis : vt - _e - Ge - R.mainAxis, yo = C ? -_[L] / 2 + Je + _e + Fe + R.mainAxis : xe + _e + Fe + R.mainAxis, mt = t.elements.arrow && qe(t.elements.arrow), bo = mt ? b === "y" ? mt.clientTop || 0 : mt.clientLeft || 0 : 0, Zt = (B = k == null ? void 0 : k[b]) != null ? B : 0, wo = E + ho - Zt - bo, Eo = E + yo - Zt, Gt = Le(h ? ut(V, wo) : V, E, h ? we(ne, Eo) : ne);
      P[b] = Gt, x[b] = Gt - E;
    }
    if (l) {
      var Qt, _o = b === "x" ? W : z, Oo = b === "x" ? Q : Y, he = P[T], Qe = T === "y" ? "height" : "width", Yt = he + m[_o], Xt = he - m[Oo], gt = [W, z].indexOf(u) !== -1, en = (Qt = k == null ? void 0 : k[T]) != null ? Qt : 0, tn = gt ? Yt : he - _[Qe] - I[Qe] - en + R.altAxis, nn = gt ? he + _[Qe] + I[Qe] - en - R.altAxis : Xt, on = h && gt ? Cr(tn, he, nn) : Le(h ? tn : Yt, he, h ? nn : Xt);
      P[T] = on, x[T] = on - he;
    }
    t.modifiersData[o] = x;
  }
}
var Yr = { name: "preventOverflow", enabled: !0, phase: "main", fn: Qr, requiresIfExists: ["offset"] };
function Xr(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function es(e) {
  return e === ee(e) || !G(e) ? Kt(e) : Xr(e);
}
function ts(e) {
  var t = e.getBoundingClientRect(), n = Ae(t.width) / e.offsetWidth || 1, o = Ae(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function ns(e, t, n) {
  n === void 0 && (n = !1);
  var o = G(t), r = G(t) && ts(t), s = me(t), a = Re(e, r), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((se(t) !== "body" || Vt(s)) && (l = es(t)), G(t) ? (i = Re(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : s && (i.x = Ut(s))), { x: a.left + l.scrollLeft - i.x, y: a.top + l.scrollTop - i.y, width: a.width, height: a.height };
}
function os(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var i = t.get(l);
        i && r(i);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function rs(e) {
  var t = os(e);
  return br.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function ss(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function as(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var En = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _n() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ht(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? En : r;
  return function(a, l, i) {
    i === void 0 && (i = s);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, En, s), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} }, d = [], g = !1, y = { state: c, setOptions: function(p) {
      var m = typeof p == "function" ? p(c.options) : p;
      f(), c.options = Object.assign({}, s, c.options, m), c.scrollParents = { reference: Se(a) ? je(a) : a.contextElement ? je(a.contextElement) : [], popper: je(l) };
      var u = rs(as([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = u.filter(function(w) {
        return w.enabled;
      }), h(), y.update();
    }, forceUpdate: function() {
      if (!g) {
        var p = c.elements, m = p.reference, u = p.popper;
        if (_n(m, u)) {
          c.rects = { reference: ns(m, qe(u), c.options.strategy === "fixed"), popper: Dt(u) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
            return c.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var C = c.orderedModifiers[w], b = C.fn, T = C.options, P = T === void 0 ? {} : T, _ = C.name;
            typeof b == "function" && (c = b({ state: c, options: P, name: _, instance: y }) || c);
          }
        }
      }
    }, update: ss(function() {
      return new Promise(function(p) {
        y.forceUpdate(), p(c);
      });
    }), destroy: function() {
      f(), g = !0;
    } };
    if (!_n(a, l))
      return y;
    y.setOptions(i).then(function(p) {
      !g && i.onFirstUpdate && i.onFirstUpdate(p);
    });
    function h() {
      c.orderedModifiers.forEach(function(p) {
        var m = p.name, u = p.options, w = u === void 0 ? {} : u, C = p.effect;
        if (typeof C == "function") {
          var b = C({ state: c, name: m, instance: y, options: w }), T = function() {
          };
          d.push(b || T);
        }
      });
    }
    function f() {
      d.forEach(function(p) {
        return p();
      }), d = [];
    }
    return y;
  };
}
Ht();
var is = [eo, oo, Xn, Jn];
Ht({ defaultModifiers: is });
var ls = [eo, oo, Xn, Jn, Jr, Vr, Yr, Sr, Wr], cs = Ht({ defaultModifiers: ls });
const us = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const c = ps(i);
      Object.assign(a.value, c);
    },
    requires: ["computeStyles"]
  }, r = O(() => {
    const { onFirstUpdate: i, placement: c, strategy: d, modifiers: g } = v(n);
    return {
      onFirstUpdate: i,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...g || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Po(), a = A({
    styles: {
      popper: {
        position: v(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return j(r, (i) => {
    const c = v(s);
    c && c.setOptions(i);
  }, {
    deep: !0
  }), j([e, t], ([i, c]) => {
    l(), !(!i || !c) && (s.value = cs(i, c, v(r)));
  }), pe(() => {
    l();
  }), {
    state: O(() => {
      var i;
      return { ...((i = v(s)) == null ? void 0 : i.state) || {} };
    }),
    styles: O(() => v(a).styles),
    attributes: O(() => v(a).attributes),
    update: () => {
      var i;
      return (i = v(s)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = v(s)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: O(() => v(s))
  };
};
function ps(e) {
  const t = Object.keys(e.elements), n = Tt(t.map((r) => [r, e.styles[r] || {}])), o = Tt(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function On() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Vn(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Pt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, fs = Symbol("elIdInjection"), ro = () => De() ? H(fs, Pt) : Pt, ds = (e) => {
  const t = ro();
  !X && t === Pt && Ke("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = kt();
  return O(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Ce = [];
const Cn = (e) => {
  const t = e;
  t.key === ct.esc && Ce.forEach((n) => n(t));
}, vs = (e) => {
  ve(() => {
    Ce.length === 0 && document.addEventListener("keydown", Cn), X && Ce.push(e);
  }), pe(() => {
    Ce = Ce.filter((t) => t !== e), Ce.length === 0 && X && document.removeEventListener("keydown", Cn);
  });
};
let Tn;
const so = () => {
  const e = kt(), t = ro(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, ms = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, gs = () => {
  const { id: e, selector: t } = so();
  return So(() => {
    X && (process.env.NODE_ENV === "test" || !Tn && !document.body.querySelector(t.value)) && (Tn = ms(e.value));
  }), {
    id: e,
    selector: t
  };
}, hs = J({
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
}), ys = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = On(), {
    registerTimeout: a,
    cancelTimeout: l
  } = On();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const g = v(n);
        Me(g) && g > 0 && a(() => {
          r(d);
        }, g);
      }, v(e));
    },
    onClose: (d) => {
      l(), s(() => {
        r(d);
      }, v(t));
    }
  };
}, ao = Symbol("elForwardRef"), bs = (e) => {
  le(ao, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, ws = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), In = {
  current: 0
}, Pn = A(0), Es = 2e3, Sn = Symbol("elZIndexContextKey"), _s = Symbol("zIndexContextKey"), Os = (e) => {
  const t = De() ? H(Sn, In) : In, n = e || (De() ? H(_s, void 0) : void 0), o = O(() => {
    const a = v(n);
    return Me(a) ? a : Es;
  }), r = O(() => o.value + Pn.value), s = () => (t.current++, Pn.value = t.current, r.value);
  return !X && !H(Sn) && Ke("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const An = Symbol("formItemContextKey"), Wt = Symbol("popper"), io = Symbol("popperContent"), Cs = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], lo = J({
  role: {
    type: String,
    values: Cs,
    default: "tooltip"
  }
}), Ts = N({
  name: "ElPopper",
  inheritAttrs: !1
}), Is = /* @__PURE__ */ N({
  ...Ts,
  props: lo,
  setup(e, { expose: t }) {
    const n = e, o = A(), r = A(), s = A(), a = A(), l = O(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: l
    };
    return t(i), le(Wt, i), (c, d) => K(c.$slots, "default");
  }
});
var Ps = /* @__PURE__ */ te(Is, [["__file", "popper.vue"]]);
const co = J({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ss = N({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), As = /* @__PURE__ */ N({
  ...Ss,
  props: co,
  setup(e, { expose: t }) {
    const n = e, o = Ne("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = H(io, void 0);
    return j(() => n.arrowOffset, (l) => {
      r.value = l;
    }), pe(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (l, i) => ($(), D("span", {
      ref_key: "arrowRef",
      ref: s,
      class: Ie(v(o).e("arrow")),
      style: St(v(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Rs = /* @__PURE__ */ te(As, [["__file", "arrow.vue"]]);
const wt = "ElOnlyChild", $s = N({
  name: wt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = H(ao), s = ws((o = r == null ? void 0 : r.setForwardRef) != null ? o : Ct);
    return () => {
      var a;
      const l = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!l)
        return null;
      if (l.length > 1)
        return Ke(wt, "requires exact only one valid child."), null;
      const i = uo(l);
      return i ? At(Ao(i, n), [[s]]) : (Ke(wt, "no valid child node found"), null);
    };
  }
});
function uo(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Rt(n))
      switch (n.type) {
        case $o:
          continue;
        case Ro:
        case "svg":
          return Rn(n);
        case ot:
          return uo(n.children);
        default:
          return n;
      }
    return Rn(n);
  }
  return null;
}
function Rn(e) {
  const t = Ne("only-child");
  return Ee("span", {
    class: t.e("content")
  }, [e]);
}
const po = J({
  virtualRef: {
    type: S(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: S(Function)
  },
  onMouseleave: {
    type: S(Function)
  },
  onClick: {
    type: S(Function)
  },
  onKeydown: {
    type: S(Function)
  },
  onFocus: {
    type: S(Function)
  },
  onBlur: {
    type: S(Function)
  },
  onContextmenu: {
    type: S(Function)
  },
  id: String,
  open: Boolean
}), Ns = N({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), xs = /* @__PURE__ */ N({
  ...Ns,
  props: po,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = H(Wt, void 0);
    bs(r);
    const s = O(() => l.value ? n.id : void 0), a = O(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = O(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = O(() => l.value ? `${n.open}` : void 0);
    let c;
    return ve(() => {
      j(() => n.virtualRef, (d) => {
        d && (r.value = be(d));
      }, {
        immediate: !0
      }), j(r, (d, g) => {
        c == null || c(), c = void 0, lt(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((y) => {
          var h;
          const f = n[y];
          f && (d.addEventListener(y.slice(2).toLowerCase(), f), (h = g == null ? void 0 : g.removeEventListener) == null || h.call(g, y.slice(2).toLowerCase(), f));
        }), c = j([s, a, l, i], (y) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, f) => {
            $t(y[f]) ? d.removeAttribute(h) : d.setAttribute(h, y[f]);
          });
        }, { immediate: !0 })), lt(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((y) => g.removeAttribute(y));
      }, {
        immediate: !0
      });
    }), pe(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: r
    }), (d, g) => d.virtualTriggering ? ce("v-if", !0) : ($(), re(v($s), We({ key: 0 }, d.$attrs, {
      "aria-controls": v(s),
      "aria-describedby": v(a),
      "aria-expanded": v(i),
      "aria-haspopup": v(l)
    }), {
      default: q(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Fs = /* @__PURE__ */ te(xs, [["__file", "trigger.vue"]]);
const Et = "focus-trap.focus-after-trapped", _t = "focus-trap.focus-after-released", ks = "focus-trap.focusout-prevented", $n = {
  cancelable: !0,
  bubbles: !1
}, Bs = {
  cancelable: !0,
  bubbles: !1
}, Nn = "focusAfterTrapped", xn = "focusAfterReleased", Ls = Symbol("elFocusTrap"), zt = A(), dt = A(0), qt = A(0);
let et = 0;
const fo = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Fn = (e, t) => {
  for (const n of e)
    if (!js(n, t))
      return n;
}, js = (e, t) => {
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
}, Ds = (e) => {
  const t = fo(e), n = Fn(t, e), o = Fn(t.reverse(), e);
  return [n, o];
}, Ms = (e) => e instanceof HTMLInputElement && "select" in e, fe = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), qt.value = window.performance.now(), e !== n && Ms(e) && t && e.select();
  }
};
function kn(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Ks = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = kn(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = kn(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, Us = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (fe(o, t), document.activeElement !== n)
      return;
}, Bn = Ks(), Vs = () => dt.value > qt.value, tt = () => {
  zt.value = "pointer", dt.value = window.performance.now();
}, Ln = () => {
  zt.value = "keyboard", dt.value = window.performance.now();
}, Hs = () => (ve(() => {
  et === 0 && (document.addEventListener("mousedown", tt), document.addEventListener("touchstart", tt), document.addEventListener("keydown", Ln)), et++;
}), pe(() => {
  et--, et <= 0 && (document.removeEventListener("mousedown", tt), document.removeEventListener("touchstart", tt), document.removeEventListener("keydown", Ln));
}), {
  focusReason: zt,
  lastUserFocusTimestamp: dt,
  lastAutomatedFocusTimestamp: qt
}), nt = (e) => new CustomEvent(ks, {
  ...Bs,
  detail: e
}), Ws = N({
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
    Nn,
    xn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let o, r;
    const { focusReason: s } = Hs();
    vs((f) => {
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
    }, l = (f) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: p, altKey: m, ctrlKey: u, metaKey: w, currentTarget: C, shiftKey: b } = f, { loop: T } = e, P = p === ct.tab && !m && !u && !w, _ = document.activeElement;
      if (P && _) {
        const I = C, [F, R] = Ds(I);
        if (F && R) {
          if (!b && _ === R) {
            const x = nt({
              focusReason: s.value
            });
            t("focusout-prevented", x), x.defaultPrevented || (f.preventDefault(), T && fe(F, !0));
          } else if (b && [F, I].includes(_)) {
            const x = nt({
              focusReason: s.value
            });
            t("focusout-prevented", x), x.defaultPrevented || (f.preventDefault(), T && fe(R, !0));
          }
        } else if (_ === I) {
          const x = nt({
            focusReason: s.value
          });
          t("focusout-prevented", x), x.defaultPrevented || f.preventDefault();
        }
      }
    };
    le(Ls, {
      focusTrapRef: n,
      onKeydown: l
    }), j(() => e.focusTrapEl, (f) => {
      f && (n.value = f);
    }, { immediate: !0 }), j([n], ([f], [p]) => {
      f && (f.addEventListener("keydown", l), f.addEventListener("focusin", d), f.addEventListener("focusout", g)), p && (p.removeEventListener("keydown", l), p.removeEventListener("focusin", d), p.removeEventListener("focusout", g));
    });
    const i = (f) => {
      t(Nn, f);
    }, c = (f) => t(xn, f), d = (f) => {
      const p = v(n);
      if (!p)
        return;
      const m = f.target, u = f.relatedTarget, w = m && p.contains(m);
      e.trapped || u && p.contains(u) || (o = u), w && t("focusin", f), !a.paused && e.trapped && (w ? r = m : fe(r, !0));
    }, g = (f) => {
      const p = v(n);
      if (!(a.paused || !p))
        if (e.trapped) {
          const m = f.relatedTarget;
          !$t(m) && !p.contains(m) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const u = nt({
                focusReason: s.value
              });
              t("focusout-prevented", u), u.defaultPrevented || fe(r, !0);
            }
          }, 0);
        } else {
          const m = f.target;
          m && p.contains(m) || t("focusout", f);
        }
    };
    async function y() {
      await rn();
      const f = v(n);
      if (f) {
        Bn.push(a);
        const p = f.contains(document.activeElement) ? o : document.activeElement;
        if (o = p, !f.contains(p)) {
          const u = new Event(Et, $n);
          f.addEventListener(Et, i), f.dispatchEvent(u), u.defaultPrevented || rn(() => {
            let w = e.focusStartEl;
            pt(w) || (fe(w), document.activeElement !== w && (w = "first")), w === "first" && Us(fo(f), !0), (document.activeElement === p || w === "container") && fe(f);
          });
        }
      }
    }
    function h() {
      const f = v(n);
      if (f) {
        f.removeEventListener(Et, i);
        const p = new CustomEvent(_t, {
          ...$n,
          detail: {
            focusReason: s.value
          }
        });
        f.addEventListener(_t, c), f.dispatchEvent(p), !p.defaultPrevented && (s.value == "keyboard" || !Vs() || f.contains(document.activeElement)) && fe(o ?? document.body), f.removeEventListener(_t, c), Bn.remove(a);
      }
    }
    return ve(() => {
      e.trapped && y(), j(() => e.trapped, (f) => {
        f ? y() : h();
      });
    }), pe(() => {
      e.trapped && h();
    }), {
      onKeydown: l
    };
  }
});
function zs(e, t, n, o, r, s) {
  return K(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var qs = /* @__PURE__ */ te(Ws, [["render", zs], ["__file", "focus-trap.vue"]]);
const Js = ["fixed", "absolute"], Zs = J({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: S(Array),
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
    values: Lt,
    default: "bottom"
  },
  popperOptions: {
    type: S(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Js,
    default: "absolute"
  }
}), vo = J({
  ...Zs,
  id: String,
  style: {
    type: S([String, Array, Object])
  },
  className: {
    type: S([String, Array, Object])
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
    type: S([String, Array, Object])
  },
  popperStyle: {
    type: S([String, Array, Object])
  },
  referenceEl: {
    type: S(Object)
  },
  triggerTargetEl: {
    type: S(Object)
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
}), Gs = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Qs = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Xs(e), ...t]
  };
  return ea(s, r == null ? void 0 : r.modifiers), s;
}, Ys = (e) => {
  if (X)
    return be(e);
};
function Xs(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
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
        fallbackPlacements: o
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
function ea(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ta = 0, na = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = H(Wt, void 0), s = A(), a = A(), l = O(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = O(() => {
    var u;
    const w = v(s), C = (u = v(a)) != null ? u : ta;
    return {
      name: "arrow",
      enabled: !Go(w),
      options: {
        element: w,
        padding: C
      }
    };
  }), c = O(() => ({
    onFirstUpdate: () => {
      f();
    },
    ...Qs(e, [
      v(i),
      v(l)
    ])
  })), d = O(() => Ys(e.referenceEl) || v(o)), { attributes: g, state: y, styles: h, update: f, forceUpdate: p, instanceRef: m } = us(d, n, c);
  return j(m, (u) => t.value = u), ve(() => {
    j(() => {
      var u;
      return (u = v(d)) == null ? void 0 : u.getBoundingClientRect();
    }, () => {
      f();
    });
  }), {
    attributes: g,
    arrowRef: s,
    contentRef: n,
    instanceRef: m,
    state: y,
    styles: h,
    role: r,
    forceUpdate: p,
    update: f
  };
}, oa = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Os(), s = Ne("popper"), a = O(() => v(t).popper), l = A(Me(e.zIndex) ? e.zIndex : r()), i = O(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), c = O(() => [
    { zIndex: v(l) },
    v(n).popper,
    e.popperStyle || {}
  ]), d = O(() => o.value === "dialog" ? "false" : void 0), g = O(() => v(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: g,
    contentAttrs: a,
    contentClass: i,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = Me(e.zIndex) ? e.zIndex : r();
    }
  };
}, ra = (e, t) => {
  const n = A(!1), o = A();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var d;
      ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (o.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, sa = N({
  name: "ElPopperContent"
}), aa = /* @__PURE__ */ N({
  ...sa,
  props: vo,
  emits: Gs,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = ra(o, n), { attributes: g, arrowRef: y, contentRef: h, styles: f, instanceRef: p, role: m, update: u } = na(o), {
      ariaModal: w,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: T,
      contentStyle: P,
      updateZIndex: _
    } = oa(o, {
      styles: f,
      attributes: g,
      role: m
    }), I = H(An, void 0), F = A();
    le(io, {
      arrowStyle: C,
      arrowRef: y,
      arrowOffset: F
    }), I && (I.addInputId || I.removeInputId) && le(An, {
      ...I,
      addInputId: Ct,
      removeInputId: Ct
    });
    let R;
    const k = (B = !0) => {
      u(), B && _();
    }, x = () => {
      k(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return ve(() => {
      j(() => o.triggerTargetEl, (B, U) => {
        R == null || R(), R = void 0;
        const M = v(B || h.value), L = v(U || h.value);
        lt(M) && (R = j([m, () => o.ariaLabel, w, () => o.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((V, ne) => {
            $t(E[ne]) ? M.removeAttribute(V) : M.setAttribute(V, E[ne]);
          });
        }, { immediate: !0 })), L !== M && lt(L) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          L.removeAttribute(E);
        });
      }, { immediate: !0 }), j(() => o.visible, x, { immediate: !0 });
    }), pe(() => {
      R == null || R(), R = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: p,
      updatePopper: k,
      contentStyle: P
    }), (B, U) => ($(), D("div", We({
      ref_key: "contentRef",
      ref: h
    }, v(b), {
      style: v(P),
      class: v(T),
      tabindex: "-1",
      onMouseenter: U[0] || (U[0] = (M) => B.$emit("mouseenter", M)),
      onMouseleave: U[1] || (U[1] = (M) => B.$emit("mouseleave", M))
    }), [
      Ee(v(qs), {
        trapped: v(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": v(h),
        "focus-start-el": v(r),
        onFocusAfterTrapped: v(l),
        onFocusAfterReleased: v(a),
        onFocusin: v(i),
        onFocusoutPrevented: v(c),
        onReleaseRequested: v(d)
      }, {
        default: q(() => [
          K(B.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var ia = /* @__PURE__ */ te(aa, [["__file", "content.vue"]]);
const la = Ft(Ps), Jt = Symbol("elTooltip"), Z = J({
  ...hs,
  ...vo,
  appendTo: {
    type: S([String, Object])
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
    type: S(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), He = J({
  ...po,
  disabled: Boolean,
  trigger: {
    type: S([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: S(Array),
    default: () => [ct.enter, ct.space]
  }
}), {
  useModelToggleProps: ca,
  useModelToggleEmits: ua,
  useModelToggle: pa
} = zn("visible"), fa = J({
  ...lo,
  ...ca,
  ...Z,
  ...He,
  ...co,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), da = [
  ...ua,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], va = (e, t) => Zo(e) ? e.includes(t) : e === t, Oe = (e, t, n) => (o) => {
  va(v(e), t) && n(o);
}, ma = N({
  name: "ElTooltipTrigger"
}), ga = /* @__PURE__ */ N({
  ...ma,
  props: He,
  setup(e, { expose: t }) {
    const n = e, o = Ne("tooltip"), { controlled: r, id: s, open: a, onOpen: l, onClose: i, onToggle: c } = H(Jt, void 0), d = A(null), g = () => {
      if (v(r) || n.disabled)
        return !0;
    }, y = Be(n, "trigger"), h = ie(g, Oe(y, "hover", l)), f = ie(g, Oe(y, "hover", i)), p = ie(g, Oe(y, "click", (b) => {
      b.button === 0 && c(b);
    })), m = ie(g, Oe(y, "focus", l)), u = ie(g, Oe(y, "focus", i)), w = ie(g, Oe(y, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), C = ie(g, (b) => {
      const { code: T } = b;
      n.triggerKeys.includes(T) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: d
    }), (b, T) => ($(), re(v(Fs), {
      id: v(s),
      "virtual-ref": b.virtualRef,
      open: v(a),
      "virtual-triggering": b.virtualTriggering,
      class: Ie(v(o).e("trigger")),
      onBlur: v(u),
      onClick: v(p),
      onContextmenu: v(w),
      onFocus: v(m),
      onMouseenter: v(h),
      onMouseleave: v(f),
      onKeydown: v(C)
    }, {
      default: q(() => [
        K(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var ha = /* @__PURE__ */ te(ga, [["__file", "trigger.vue"]]);
const ya = N({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ba = /* @__PURE__ */ N({
  ...ya,
  props: Z,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = so(), r = Ne("tooltip"), s = A(null), a = A(!1), {
      controlled: l,
      id: i,
      open: c,
      trigger: d,
      onClose: g,
      onOpen: y,
      onShow: h,
      onHide: f,
      onBeforeShow: p,
      onBeforeHide: m
    } = H(Jt, void 0), u = O(() => n.transition || `${r.namespace.value}-fade-in-linear`), w = O(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    pe(() => {
      a.value = !0;
    });
    const C = O(() => v(w) ? !0 : v(c)), b = O(() => n.disabled ? !1 : v(c)), T = O(() => n.appendTo || o.value), P = O(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), _ = O(() => !v(c)), I = () => {
      f();
    }, F = () => {
      if (v(l))
        return !0;
    }, R = ie(F, () => {
      n.enterable && v(d) === "hover" && y();
    }), k = ie(F, () => {
      v(d) === "hover" && g();
    }), x = () => {
      var E, V;
      (V = (E = s.value) == null ? void 0 : E.updatePopper) == null || V.call(E), p == null || p();
    }, B = () => {
      m == null || m();
    }, U = () => {
      h(), L = Uo(O(() => {
        var E;
        return (E = s.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (v(l))
          return;
        v(d) !== "hover" && g();
      });
    }, M = () => {
      n.virtualTriggering || g();
    };
    let L;
    return j(() => v(c), (E) => {
      E || L == null || L();
    }, {
      flush: "post"
    }), j(() => n.content, () => {
      var E, V;
      (V = (E = s.value) == null ? void 0 : E.updatePopper) == null || V.call(E);
    }), t({
      contentRef: s
    }), (E, V) => ($(), re(No, {
      disabled: !E.teleported,
      to: v(T)
    }, [
      Ee(xo, {
        name: v(u),
        onAfterLeave: I,
        onBeforeEnter: x,
        onAfterEnter: U,
        onBeforeLeave: B
      }, {
        default: q(() => [
          v(C) ? At(($(), re(v(ia), We({
            key: 0,
            id: v(i),
            ref_key: "contentRef",
            ref: s
          }, E.$attrs, {
            "aria-label": E.ariaLabel,
            "aria-hidden": v(_),
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
            "popper-style": [E.popperStyle, v(P)],
            "reference-el": E.referenceEl,
            "trigger-target-el": E.triggerTargetEl,
            visible: v(b),
            "z-index": E.zIndex,
            onMouseenter: v(R),
            onMouseleave: v(k),
            onBlur: M,
            onClose: v(g)
          }), {
            default: q(() => [
              a.value ? ce("v-if", !0) : K(E.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Dn, v(b)]
          ]) : ce("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var wa = /* @__PURE__ */ te(ba, [["__file", "content.vue"]]);
const Ea = ["innerHTML"], _a = { key: 1 }, Oa = N({
  name: "ElTooltip"
}), Ca = /* @__PURE__ */ N({
  ...Oa,
  props: fa,
  emits: da,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    gs();
    const r = ds(), s = A(), a = A(), l = () => {
      var u;
      const w = v(s);
      w && ((u = w.popperInstanceRef) == null || u.update());
    }, i = A(!1), c = A(), { show: d, hide: g, hasUpdateHandler: y } = pa({
      indicator: i,
      toggleReason: c
    }), { onOpen: h, onClose: f } = ys({
      showAfter: Be(o, "showAfter"),
      hideAfter: Be(o, "hideAfter"),
      autoClose: Be(o, "autoClose"),
      open: d,
      close: g
    }), p = O(() => Nt(o.visible) && !y.value);
    le(Jt, {
      controlled: p,
      id: r,
      open: Fo(i),
      trigger: Be(o, "trigger"),
      onOpen: (u) => {
        h(u);
      },
      onClose: (u) => {
        f(u);
      },
      onToggle: (u) => {
        v(i) ? f(u) : h(u);
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
      updatePopper: l
    }), j(() => o.disabled, (u) => {
      u && i.value && (i.value = !1);
    });
    const m = (u) => {
      var w, C;
      const b = (C = (w = a.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef, T = (u == null ? void 0 : u.relatedTarget) || document.activeElement;
      return b && b.contains(T);
    };
    return ko(() => i.value && g()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: m,
      updatePopper: l,
      onOpen: h,
      onClose: f,
      hide: g
    }), (u, w) => ($(), re(v(la), {
      ref_key: "popperRef",
      ref: s,
      role: u.role
    }, {
      default: q(() => [
        Ee(ha, {
          disabled: u.disabled,
          trigger: u.trigger,
          "trigger-keys": u.triggerKeys,
          "virtual-ref": u.virtualRef,
          "virtual-triggering": u.virtualTriggering
        }, {
          default: q(() => [
            u.$slots.default ? K(u.$slots, "default", { key: 0 }) : ce("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Ee(wa, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": u.ariaLabel,
          "boundaries-padding": u.boundariesPadding,
          content: u.content,
          disabled: u.disabled,
          effect: u.effect,
          enterable: u.enterable,
          "fallback-placements": u.fallbackPlacements,
          "hide-after": u.hideAfter,
          "gpu-acceleration": u.gpuAcceleration,
          offset: u.offset,
          persistent: u.persistent,
          "popper-class": u.popperClass,
          "popper-style": u.popperStyle,
          placement: u.placement,
          "popper-options": u.popperOptions,
          pure: u.pure,
          "raw-content": u.rawContent,
          "reference-el": u.referenceEl,
          "trigger-target-el": u.triggerTargetEl,
          "show-after": u.showAfter,
          strategy: u.strategy,
          teleported: u.teleported,
          transition: u.transition,
          "virtual-triggering": u.virtualTriggering,
          "z-index": u.zIndex,
          "append-to": u.appendTo
        }, {
          default: q(() => [
            K(u.$slots, "content", {}, () => [
              u.rawContent ? ($(), D("span", {
                key: 0,
                innerHTML: u.content
              }, null, 8, Ea)) : ($(), D("span", _a, Te(u.content), 1))
            ]),
            u.showArrow ? ($(), re(v(Rs), {
              key: 0,
              "arrow-offset": u.arrowOffset
            }, null, 8, ["arrow-offset"])) : ce("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Ta = /* @__PURE__ */ te(Ca, [["__file", "tooltip.vue"]]);
const Ia = Ft(Ta), Pa = /* @__PURE__ */ N({
  inheritAttrs: !1
});
function Sa(e, t, n, o, r, s) {
  return K(e.$slots, "default");
}
var Aa = /* @__PURE__ */ te(Pa, [["render", Sa], ["__file", "collection.vue"]]);
const Ra = /* @__PURE__ */ N({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function $a(e, t, n, o, r, s) {
  return K(e.$slots, "default");
}
var Na = /* @__PURE__ */ te(Ra, [["render", $a], ["__file", "collection-item.vue"]]);
const xa = "data-el-collection-item", Fa = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), s = {
    ...Aa,
    name: t,
    setup() {
      const l = A(null), i = /* @__PURE__ */ new Map();
      le(o, {
        itemMap: i,
        getItems: () => {
          const d = v(l);
          if (!d)
            return [];
          const g = Array.from(d.querySelectorAll(`[${xa}]`));
          return [...i.values()].sort((h, f) => g.indexOf(h.ref) - g.indexOf(f.ref));
        },
        collectionRef: l
      });
    }
  }, a = {
    ...Na,
    name: n,
    setup(l, { attrs: i }) {
      const c = A(null), d = H(o, void 0);
      le(r, {
        collectionItemRef: c
      }), ve(() => {
        const g = v(c);
        g && d.itemMap.set(g, {
          ref: g,
          ...i
        });
      }), pe(() => {
        const g = v(c);
        d.itemMap.delete(g);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: s,
    ElCollectionItem: a
  };
}, Ot = J({
  trigger: He.trigger,
  effect: {
    ...Z.effect,
    default: "light"
  },
  type: {
    type: S(String)
  },
  placement: {
    type: S(String),
    default: "bottom"
  },
  popperOptions: {
    type: S(Object),
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
    type: S([Number, String]),
    default: 0
  },
  maxHeight: {
    type: S([Number, String]),
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
    type: S(Object)
  },
  teleported: Z.teleported
});
J({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: nr
  }
});
J({
  onKeydown: { type: S(Function) }
});
Fa("Dropdown");
const ka = J({
  trigger: He.trigger,
  placement: Ot.placement,
  disabled: He.disabled,
  visible: Z.visible,
  transition: Z.transition,
  popperOptions: Ot.popperOptions,
  tabindex: Ot.tabindex,
  content: Z.content,
  popperStyle: Z.popperStyle,
  popperClass: Z.popperClass,
  enterable: {
    ...Z.enterable,
    default: !0
  },
  effect: {
    ...Z.effect,
    default: "light"
  },
  teleported: Z.teleported,
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
}), Ba = {
  "update:visible": (e) => Nt(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, La = "onUpdate:visible", ja = N({
  name: "ElPopover"
}), Da = /* @__PURE__ */ N({
  ...ja,
  props: ka,
  emits: Ba,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = O(() => o[La]), s = Ne("popover"), a = A(), l = O(() => {
      var m;
      return (m = v(a)) == null ? void 0 : m.popperRef;
    }), i = O(() => [
      {
        width: er(o.width)
      },
      o.popperStyle
    ]), c = O(() => [s.b(), o.popperClass, { [s.m("plain")]: !!o.content }]), d = O(() => o.transition === `${s.namespace.value}-fade-in-linear`), g = () => {
      var m;
      (m = a.value) == null || m.hide();
    }, y = () => {
      n("before-enter");
    }, h = () => {
      n("before-leave");
    }, f = () => {
      n("after-enter");
    }, p = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: l,
      hide: g
    }), (m, u) => ($(), re(v(Ia), We({
      ref_key: "tooltipRef",
      ref: a
    }, m.$attrs, {
      trigger: m.trigger,
      placement: m.placement,
      disabled: m.disabled,
      visible: m.visible,
      transition: m.transition,
      "popper-options": m.popperOptions,
      tabindex: m.tabindex,
      content: m.content,
      offset: m.offset,
      "show-after": m.showAfter,
      "hide-after": m.hideAfter,
      "auto-close": m.autoClose,
      "show-arrow": m.showArrow,
      "aria-label": m.title,
      effect: m.effect,
      enterable: m.enterable,
      "popper-class": v(c),
      "popper-style": v(i),
      teleported: m.teleported,
      persistent: m.persistent,
      "gpu-acceleration": v(d),
      "onUpdate:visible": v(r),
      onBeforeShow: y,
      onBeforeHide: h,
      onShow: f,
      onHide: p
    }), {
      content: q(() => [
        m.title ? ($(), D("div", {
          key: 0,
          class: Ie(v(s).e("title")),
          role: "title"
        }, Te(m.title), 3)) : ce("v-if", !0),
        K(m.$slots, "default", {}, () => [
          Mn(Te(m.content), 1)
        ])
      ]),
      default: q(() => [
        m.$slots.reference ? K(m.$slots, "reference", { key: 0 }) : ce("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var Ma = /* @__PURE__ */ te(Da, [["__file", "popover.vue"]]);
const jn = (e, t) => {
  const n = t.arg || t.value, o = n == null ? void 0 : n.popperRef;
  o && (o.triggerRef = e);
};
var Ka = {
  mounted(e, t) {
    jn(e, t);
  },
  updated(e, t) {
    jn(e, t);
  }
};
const Ua = "popover", Va = or(Ka, Ua), Ha = Ft(Ma, {
  directive: Va
});
const Wa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, za = /* @__PURE__ */ de("path", {
  fill: "#D7D7D7",
  d: "M459.015 850.31a110.07 110.07 0 0 1 105.978 0L786.78 971.75a7.68 7.68 0 0 0 5.12.87c5.273-.921 9.727-7.474 8.498-15.103l-41.982-257.983a116.94 116.94 0 0 1 31.487-100.449L968.99 416.157a13.82 13.82 0 0 0 3.583-7.782c1.127-7.628-3.43-13.976-8.703-14.796l-247.744-37.988a112.63 112.63 0 0 1-84.424-63.587L520.605 57.521a11.47 11.47 0 0 0-4.966-5.376c-4.25-2.202-9.472-.358-12.185 5.376l-111.15 234.483a112.63 112.63 0 0 1-84.475 63.587L60.086 393.58a9.16 9.16 0 0 0-5.223 2.919 14.847 14.847 0 0 0 .154 19.66l179.088 182.876c25.804 26.367 37.425 63.792 31.486 100.45L223.61 957.516c-.512 3.175 0 6.451 1.382 9.216 2.816 5.58 7.987 7.27 12.236 4.966l221.787-121.44zm-197.212 166.391c-29.95 16.383-66.915 4.25-82.581-27.032a66.45 66.45 0 0 1-6.144-40.343l41.982-258.034a65.74 65.74 0 0 0-17.56-56.42L18.461 451.944a65.993 65.993 0 0 1-1.024-90.414c9.37-9.983 21.657-16.537 34.866-18.533l247.794-38.04a61.44 61.44 0 0 0 45.924-34.865l111.15-234.484c15-31.64 51.76-44.593 81.966-28.926 12.032 6.195 21.76 16.383 27.647 28.926l111.2 234.484a61.44 61.44 0 0 0 45.924 34.865l247.795 38.04c33.38 5.12 56.522 37.578 51.607 72.546-1.946 13.823-8.192 26.623-17.766 36.401L826.51 634.872c-14.336 14.694-20.94 35.787-17.561 56.47l41.982 257.984c5.631 34.814-16.742 67.785-50.071 73.724a58.88 58.88 0 0 1-38.654-6.4L540.367 895.21a58.88 58.88 0 0 0-56.778 0l-221.786 121.44z"
}, null, -1), qa = [
  za
];
function Ja(e, t) {
  return $(), D("svg", Wa, [...qa]);
}
const Za = { render: Ja }, Ga = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, Qa = /* @__PURE__ */ de("path", {
  fill: "#FFEABB",
  d: "M851.349 383.512c43.677 6.347 61.117 60.021 29.512 90.828l-126.42 123.229a53.25 53.25 0 0 0-15.315 47.133l29.844 174.002c7.461 43.5-38.197 76.673-77.263 56.135l-156.263-82.152a53.25 53.25 0 0 0-49.559 0l-156.263 82.152c-39.066 20.538-84.724-12.635-77.263-56.135l29.844-174.002z"
}, null, -1), Ya = /* @__PURE__ */ de("path", {
  fill: "#F9C73D",
  d: "M716.565 911.044c-13.231.001-26.527-3.19-38.817-9.652L521.484 819.24a23.24 23.24 0 0 0-21.638 0l-156.264 82.152c-28.255 14.854-61.848 12.426-87.673-6.336-25.824-18.763-38.515-49.963-33.119-81.424l29.843-174.002a23.25 23.25 0 0 0-6.686-20.579l-126.42-123.229c-22.858-22.281-30.93-54.98-21.066-85.339s35.615-52.069 67.204-56.659l174.708-25.387a23.25 23.25 0 0 0 17.506-12.719l78.131-158.312C450.138 128.783 478.747 111 510.665 111c.002 0-.001 0 0 0 31.92 0 60.526 17.782 74.653 46.406l78.132 158.312a23.25 23.25 0 0 0 17.505 12.719l174.709 25.387c31.589 4.59 57.339 26.301 67.203 56.659s1.792 63.059-21.065 85.339l-126.42 123.229a23.25 23.25 0 0 0-6.687 20.578l29.844 174.003c5.396 31.461-7.294 62.661-33.119 81.424-14.591 10.6-31.667 15.987-48.855 15.988M510.666 171c-4.346 0-15.076 1.263-20.85 12.96l-78.132 158.312a83.23 83.23 0 0 1-62.682 45.542L174.295 413.2c-12.909 1.876-17.426 11.691-18.769 15.824s-3.458 14.728 5.883 23.833l126.419 123.229a83.23 83.23 0 0 1 23.942 73.688l-29.843 174.001c-2.205 12.856 5.734 20.186 9.249 22.74 3.516 2.555 12.939 7.838 24.485 1.77l156.264-82.152a83.23 83.23 0 0 1 77.479 0l156.263 82.152c11.548 6.071 20.97.785 24.485-1.77s11.454-9.884 9.249-22.74l-29.844-174.002a83.24 83.24 0 0 1 23.942-73.687l126.42-123.229c9.341-9.105 7.226-19.7 5.883-23.833s-5.859-13.948-18.769-15.824l-174.708-25.387a83.24 83.24 0 0 1-62.682-45.541L531.514 183.96c-5.773-11.697-16.503-12.96-20.848-12.96"
}, null, -1), Xa = [
  Qa,
  Ya
];
function ei(e, t) {
  return $(), D("svg", Ga, [...Xa]);
}
const ti = { render: ei }, ni = N({
  name: "ShowCollect"
}), oi = /* @__PURE__ */ N({
  ...ni,
  props: {
    isCollect: { type: Boolean },
    isShow: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => At(($(), D("div", null, [
      t.isCollect ? ($(), re(v(ti), { key: 0 })) : ($(), re(v(Za), { key: 1 }))
    ], 512)), [
      [Dn, t.isCollect || t.isShow]
    ]);
  }
}), ri = { class: "jlg-menu" }, si = {
  key: 0,
  class: "jlg-menu-logo"
}, ai = { class: "jlg-menu-first-level-menu-icon" }, ii = { class: "jlg-menu-first-level-menu-text" }, li = { class: "second-level-menu-title" }, ci = ["onMouseenter", "onMouseleave", "onClick"], ui = N({
  name: "JlgMenu"
}), pi = /* @__PURE__ */ N({
  ...ui,
  props: {
    menuData: {},
    defaultActive: {},
    elPopoverProps: {}
  },
  emits: ["collectClick", "threeLevelMenuClick"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Bo(), s = A();
    function a(l) {
      return l.map((i) => ({
        ...i,
        _isShowCollect: !1,
        children: a(i.children ?? [])
      }));
    }
    return j(
      () => n.menuData,
      (l) => {
        s.value = a(l);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (l, i) => {
      const c = Lo("dir"), d = Ha;
      return $(), D("div", ri, [
        v(r).logo ? ($(), D("div", si, [
          K(l.$slots, "logo", {}, void 0, !0)
        ])) : ce("", !0),
        de("div", null, [
          ($(!0), D(ot, null, ht(v(s), (g) => ($(), re(d, We({
            key: g.index,
            placement: "right",
            width: 400,
            trigger: "click",
            teleported: !1
          }, n.elPopoverProps), {
            reference: q(() => [
              de("div", {
                class: Ie([
                  "jlg-menu-first-level-menu",
                  n.defaultActive === g.index ? "jlg-menu-first-level-menu-selected" : "jlg-menu-first-level-menu-no-selected"
                ])
              }, [
                de("div", ai, [
                  K(l.$slots, "first-menu-icon" + g.index, {}, () => [
                    g.iconClass ? ($(), D("i", {
                      key: 0,
                      class: Ie(g.iconClass)
                    }, null, 2)) : ce("", !0)
                  ], !0)
                ]),
                de("p", ii, Te(g.title), 1)
              ], 2)
            ]),
            default: q(() => [
              Ee(c, { class: "jlg-menu-popover" }, {
                default: q(() => [
                  ($(!0), D(ot, null, ht(g.children, (y) => ($(), D("div", {
                    key: y.index,
                    class: "second-level-menu"
                  }, [
                    de("div", li, Te(y.title), 1),
                    ($(!0), D(ot, null, ht(y.children, (h) => ($(), D("div", {
                      key: h.index,
                      class: "three-level-menu-title",
                      onMouseenter: (f) => h._isShowCollect = !0,
                      onMouseleave: (f) => h._isShowCollect = !1,
                      onClick: (f) => o("threeLevelMenuClick", h, [g, y, h])
                    }, [
                      Mn(Te(h.title) + " ", 1),
                      Ee(oi, {
                        "is-collect": h.isCollect,
                        "is-show": h._isShowCollect,
                        onClick: jo((f) => o("collectClick", h, [g, y, h]), ["stop"])
                      }, null, 8, ["is-collect", "is-show", "onClick"])
                    ], 40, ci))), 128))
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
const mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, st = /* @__PURE__ */ mo(pi, [["__scopeId", "data-v-3025145e"]]);
st.install = (e) => {
  e.component(st.name, st);
};
const fi = N({
  name: "GridLayout"
}), at = /* @__PURE__ */ N({
  ...fi,
  props: {
    padding: {},
    flow: {},
    rows: {},
    columns: {},
    gap: {},
    width: { default: "100%" },
    height: { default: "auto" },
    inline: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e;
    le("grid-layout-props", t);
    const n = (a, l) => Array.from({ length: l }, () => a).join(" "), o = O(() => n("1fr", t.columns)), r = O(() => n("1fr", t.rows)), s = O(() => ({
      width: t.width,
      height: t.height,
      padding: t.padding,
      display: t.inline ? "inline-grid" : "grid",
      "grid-template-columns": o.value,
      "grid-template-rows": r.value,
      "grid-auto-flow": t.flow,
      gap: t.gap
    }));
    return (a, l) => ($(), D("div", {
      class: "grid-layout",
      style: St(v(s))
    }, [
      K(a.$slots, "default")
    ], 4));
  }
});
at.install = (e) => {
  e.component(at.name, at);
};
const di = N({
  name: "GridCell"
}), vi = /* @__PURE__ */ N({
  ...di,
  props: {
    top: { default: 0 },
    height: { default: 0 },
    width: { default: 0 },
    left: { default: 0 },
    center: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = H("grid-layout-props"), o = O(() => ({
      "grid-column": t.left && t.width ? t.left + "/ span " + t.width : "span " + t.width,
      "grid-row": t.top && t.height ? t.top + "/ span " + t.height : "span " + t.height,
      border: n.border ? "1px solid #ccc" : ""
    }));
    return (r, s) => ($(), D("div", {
      class: Ie(["grid-cell", t.center ? "grid-cell-center" : ""]),
      style: St(v(o))
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const it = /* @__PURE__ */ mo(vi, [["__scopeId", "data-v-03f92792"]]);
it.install = (e) => {
  e.component(it.name, it);
};
const mi = [st, at, it], go = function(e) {
  mi.forEach((t) => {
    t.name && e.component(t.name, t);
  });
};
typeof window < "u" && window.Vue && go(window.Vue);
const hi = { install: go };
export {
  it as JlgGridCell,
  at as JlgGridLayout,
  st as JlgMenu,
  hi as default
};
