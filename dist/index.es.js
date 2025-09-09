import re, { forwardRef as Sn, createElement as pn, useState as z, useLayoutEffect as Es, useEffect as K, useRef as Q, useMemo as Z, useCallback as fe, createContext as wt, memo as ks, useReducer as Ds, useContext as Ve, cloneElement as Ts } from "react";
import { unstable_batchedUpdates as Tt, createPortal as Os } from "react-dom";
var Ot = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function As() {
  if (Bn) return ft;
  Bn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ft.Fragment = t, ft.jsx = n, ft.jsxs = n, ft;
}
var ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function _s() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === B ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case p:
          return "Fragment";
        case R:
          return "Profiler";
        case g:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case b:
            return "Portal";
          case N:
            return (h.displayName || "Context") + ".Provider";
          case x:
            return (h._context.displayName || "Context") + ".Consumer";
          case w:
            var M = h.render;
            return h = h.displayName, h || (h = M.displayName || M.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case k:
            return M = h.displayName || null, M !== null ? M : e(h.type) || "Memo";
          case E:
            M = h._payload, h = h._init;
            try {
              return e(h(M));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function n(h) {
      try {
        t(h);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var _ = M.error, I = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return _.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(h);
      }
    }
    function r(h) {
      if (h === p) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === E)
        return "<...>";
      try {
        var M = e(h);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var h = U.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (ee.call(h, "key")) {
        var M = Object.getOwnPropertyDescriptor(h, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function l(h, M) {
      function _() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: _,
        configurable: !0
      });
    }
    function d() {
      var h = e(this.type);
      return H[h] || (H[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function c(h, M, _, I, q, W, V, he) {
      return _ = W.ref, h = {
        $$typeof: y,
        type: h,
        key: M,
        props: W,
        _owner: q
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function u(h, M, _, I, q, W, V, he) {
      var X = M.children;
      if (X !== void 0)
        if (I)
          if (A(X)) {
            for (I = 0; I < X.length; I++)
              f(X[I]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (ee.call(M, "key")) {
        X = e(h);
        var se = Object.keys(M).filter(function(Pe) {
          return Pe !== "key";
        });
        I = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", O[X + I] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          X,
          se,
          X
        ), O[X + I] = !0);
      }
      if (X = null, _ !== void 0 && (n(_), X = "" + _), a(M) && (n(M.key), X = "" + M.key), "key" in M) {
        _ = {};
        for (var Y in M)
          Y !== "key" && (_[Y] = M[Y]);
      } else _ = M;
      return X && l(
        _,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), c(
        h,
        X,
        W,
        q,
        s(),
        _,
        V,
        he
      );
    }
    function f(h) {
      typeof h == "object" && h !== null && h.$$typeof === y && h._store && (h._store.validated = 1);
    }
    var v = re, y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), N = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), U = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, A = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var J, H = {}, j = v.react_stack_bottom_frame.bind(
      v,
      i
    )(), P = $(r(i)), O = {};
    ht.Fragment = p, ht.jsx = function(h, M, _, I, q) {
      var W = 1e4 > U.recentlyCreatedOwnerStacks++;
      return u(
        h,
        M,
        _,
        !1,
        I,
        q,
        W ? Error("react-stack-top-frame") : j,
        W ? $(r(h)) : P
      );
    }, ht.jsxs = function(h, M, _, I, q) {
      var W = 1e4 > U.recentlyCreatedOwnerStacks++;
      return u(
        h,
        M,
        _,
        !0,
        I,
        q,
        W ? Error("react-stack-top-frame") : j,
        W ? $(r(h)) : P
      );
    };
  })()), ht;
}
var Hn;
function Ms() {
  return Hn || (Hn = 1, process.env.NODE_ENV === "production" ? Ot.exports = As() : Ot.exports = _s()), Ot.exports;
}
var o = Ms();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ls = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Wn = (e) => {
  const t = Ls(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nr = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Is = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $s = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = Sn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: a,
    ...l
  }, d) => pn(
    "svg",
    {
      ref: d,
      ...$s,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Nr("lucide", s),
      ...!i && !Is(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([c, u]) => pn(c, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = (e, t) => {
  const n = Sn(
    ({ className: r, ...s }, i) => pn(Fs, {
      ref: i,
      iconNode: t,
      className: Nr(
        `lucide-${Ps(Wn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return n.displayName = Wn(e), n;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], nt = te("calendar", Us);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Bs = te("check", zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Vn = te("chevron-down", qs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], jr = te("chevron-left", Hs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Cr = te("chevron-right", Ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Jn = te("chevron-up", Vs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Ys = te("clock", Js);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
], Ks = te("columns-2", Xs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Rn = te("copy", Gs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Qs = te("download", Zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], to = te("ellipsis-vertical", eo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Sr = te("ellipsis", no);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], so = te("funnel", ro);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], io = te("grid-3x3", oo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
], lo = te("group", ao);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], uo = te("list", co);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], Yn = te("mail", fo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], mo = te("menu", ho);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], go = te("plus", po);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
], Xn = te("printer", xo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], yo = te("search", bo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], wo = te("settings", vo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], jo = te("tag", No);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], So = te("upload", Co);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], En = te("user", Ro), Eo = () => /* @__PURE__ */ o.jsxs("div", { className: "rounded-lg shadow-sm bg-white p-2 animate-pulse", children: [
  /* @__PURE__ */ o.jsx("div", { className: "flex items-start justify-between mb-1", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-start space-x-3", children: [
    /* @__PURE__ */ o.jsx("div", { className: "h-10 w-10 rounded-full bg-gray-300" }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ o.jsx("div", { className: "h-4 bg-gray-300 rounded w-24 mb-2" }),
      /* @__PURE__ */ o.jsx("div", { className: "h-3 bg-gray-200 rounded w-32" })
    ] })
  ] }) }),
  /* @__PURE__ */ o.jsxs("div", { className: "space-y-2 mb-1", children: [
    /* @__PURE__ */ o.jsx("div", { className: "h-3 bg-gray-200 rounded w-20" }),
    /* @__PURE__ */ o.jsx("div", { className: "h-3 bg-gray-200 rounded w-28" }),
    /* @__PURE__ */ o.jsx("div", { className: "h-3 bg-gray-200 rounded w-16" })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "flex justify-end space-x-2 border-t border-gray-100 pt-1", children: [
    /* @__PURE__ */ o.jsx("div", { className: "h-6 w-6 bg-gray-300 rounded" }),
    /* @__PURE__ */ o.jsx("div", { className: "h-6 w-6 bg-gray-300 rounded" }),
    /* @__PURE__ */ o.jsx("div", { className: "h-6 w-6 bg-gray-300 rounded" })
  ] })
] }), kn = (e, t, n) => {
  if (n(t), setTimeout(() => n(null), 1500), navigator?.clipboard?.writeText)
    navigator.clipboard.writeText(e).catch(() => {
      const r = document.createElement("textarea");
      r.value = e, document.body.appendChild(r), r.select(), document.execCommand("copy"), document.body.removeChild(r);
    });
  else {
    const r = document.createElement("textarea");
    r.value = e, document.body.appendChild(r), r.select(), document.execCommand("copy"), document.body.removeChild(r);
  }
}, ko = (e, t) => {
  let n = [];
  return console.log({ ROWWWWWW: e }), Object.entries(e).forEach(([r, s]) => {
    if (s == null || r === "id") return;
    const i = t[r];
    if (console.log({ datagrid: t }), !i || i.hidden) return;
    let a = s;
    i.formatter === "checkbox" ? a = s ? "Yes" : "No" : i.formatter === "date" && (a = new Date(s).toLocaleDateString()), n.push(`${i.label || r}: ${a}`), console.log(`${i.label || r}: ${a}`);
  }), n.join(`
`);
}, Do = (e, t) => {
  let n = "";
  return (t(e, "title") || e.name) && (n += `Title: ${t(e, "title") || e.name}
`), t(e, "descs") && (n += `Description: ${t(e, "descs")}
`), t(e, "counter") && (n += `Counter: ${t(e, "counter")}
`), t(e, "category") && (n += `Category: ${t(e, "category")}
`), t(e, "due_date") && (n += `Due Date: ${new Date(t(e, "due_date")).toLocaleDateString()}
`), n.trim();
}, To = ({
  config: e,
  paginatedGroupedData: t,
  hasButtons: n,
  visibleButtons: r,
  moreButtons: s,
  showExtraColumn: i,
  selectedRows: a,
  openDropdown: l,
  handleSelectRow: d,
  handleButtonClick: c,
  toggleDropdown: u,
  setOpenDropdown: f,
  getIconComponent: v,
  style: y
}) => {
  const { cards: b, datagrid: p, groupBy: g } = e, [R, x] = z(null), N = (S) => {
    if (!b?.colormap || !b?.colmap?.color) return "bg-white";
    const C = S[b.colmap.color], k = b.colormap[C];
    return {
      card_green: "bg-green-50 border-green-200",
      card_red: "bg-red-50 border-red-200",
      card_blue: "bg-blue-50 border-blue-200",
      card_yellow: "bg-yellow-50 border-yellow-200"
    }[k] || "bg-white border-gray-200";
  }, w = (S, C) => b?.colmap?.[C] && S[b.colmap[C]] || "";
  return /* @__PURE__ */ o.jsx("div", { className: "p-2 bg-muted", children: Object.keys(t).map((S) => /* @__PURE__ */ o.jsxs("div", { children: [
    g && /* @__PURE__ */ o.jsx("div", { className: "mb-4", children: /* @__PURE__ */ o.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
      p[g].label,
      ": ",
      S,
      " (",
      t[S].length,
      " records)"
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { className: y?.cardContainer || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2", children: t[S] && t[S].length > 0 ? t[S].map((C, k) => /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: y?.card || `border relative rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-200 ${N(C)}`,
        children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => {
                const E = ko(C, p);
                kn(E, `${C.id}-${k}`, x);
              },
              className: "inline-flex items-center absolute cursor-pointer right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-900",
              title: "Copy card content",
              children: R === `${C.id}-${k}` ? /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ o.jsx(Rn, { className: "w-4 h-4 text-gray-600" })
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "p-2 pb-2 flex items-start justify-between", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: w(C, "avatar") ? /* @__PURE__ */ o.jsx(
                "img",
                {
                  className: "h-10 w-10 rounded-full object-cover",
                  src: w(C, "avatar"),
                  alt: "",
                  onError: (E) => {
                    E.target.style.display = "none", E.target.nextSibling.style.display = "flex";
                  }
                }
              ) : /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: `h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center ${w(C, "avatar") ? "hidden" : "flex"}`,
                  children: /* @__PURE__ */ o.jsx(En, { className: "h-5 w-5 text-gray-600" })
                }
              ) }),
              /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ o.jsx("p", { className: "text-sm font-medium text-secondary line-clamp-1", children: w(C, "title") || C.name || C.userid || `Record ${k + 1}` }),
                w(C, "descs") && /* @__PURE__ */ o.jsx("p", { title: w(C, "descs"), className: "text-xs text-gray-500 line-clamp-1", children: w(C, "descs") })
              ] })
            ] }),
            i === "checkbox" && /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "checkbox",
                checked: a.has(C.id),
                onChange: () => d(C.id),
                className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "px-2 pb-2", children: [
            w(C, "category") && /* @__PURE__ */ o.jsx("div", { className: "mb-2", children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800", children: [
              /* @__PURE__ */ o.jsx(Tag, { className: "w-3 h-3 mr-1" }),
              w(C, "category")
            ] }) }),
            w(C, "due_date") && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center text-xs text-gray-500 mb-2", children: [
              /* @__PURE__ */ o.jsx(nt, { className: "w-3 h-3 mr-1" }),
              new Date(w(C, "due_date")).toLocaleDateString()
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "space-y-1 text-xs text-gray-600", children: Object.entries(C).slice(0, 3).map(([E, T]) => {
              if (!T || E === "id" || w(C, "title") === T) return null;
              const B = p[E];
              return !B || B.hidden ? null : /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ o.jsxs("span", { className: "text-gray-500", children: [
                  B.label,
                  ":"
                ] }),
                /* @__PURE__ */ o.jsx("span", { className: "font-medium truncate ml-2", children: B.formatter === "checkbox" ? /* @__PURE__ */ o.jsx(Bs, { className: `w-3 h-3 ${T ? "text-green-600" : "text-gray-400"}` }) : B.formatter === "date" ? new Date(T).toLocaleDateString() : String(T) })
              ] }, E);
            }) })
          ] }),
          n && /* @__PURE__ */ o.jsx("div", { className: "p-2 border-t border-gray-100 rounded-b-lg", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-end", children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex items-center  space-x-2", children: r.slice(0, 4).map(([E, T]) => /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => c(E, T, C),
                className: "inline-flex cursor-pointer items-center px-1 py-1 text-sm font-medium text-action",
                title: T.label,
                children: v(T.icon)
              },
              E
            )) }),
            (r.length > 4 || s.length > 0) && /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => u(C.id),
                  className: "inline-flex cursor-pointer items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500",
                  children: /* @__PURE__ */ o.jsx(Sr, { className: "w-3 h-3" })
                }
              ),
              l === C.id && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50", children: /* @__PURE__ */ o.jsxs("div", { className: "py-1", children: [
                r.slice(4).map(([E, T]) => /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: () => {
                      c(E, T, C), f(null);
                    },
                    className: "flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                    title: T.label,
                    children: [
                      /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: v(T.icon) }),
                      /* @__PURE__ */ o.jsx("span", { className: "truncate", children: T.label })
                    ]
                  },
                  E
                )),
                s.map(([E, T]) => /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: () => {
                      c(E, T, C), f(null);
                    },
                    className: "flex cursor-pointer items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                    title: T.label,
                    children: [
                      /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: v(T.icon) }),
                      /* @__PURE__ */ o.jsx("span", { className: "truncate", children: T.label })
                    ]
                  },
                  E
                ))
              ] }) })
            ] })
          ] }) })
        ]
      },
      k
    )) : /* @__PURE__ */ o.jsx("div", { className: "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2", children: Array.from({ length: 6 }).map((C, k) => /* @__PURE__ */ o.jsx(Eo, {}, k)) }) })
  ] }, S)) });
}, Oo = ({ columns: e }) => /* @__PURE__ */ o.jsx("tr", { className: "animate-pulse", children: e.map(([t]) => /* @__PURE__ */ o.jsx("td", { className: "px-4 sm:px-6 py-2", children: /* @__PURE__ */ o.jsx("div", { className: "h-4 w-4/5 shimmer rounded" }) }, t)) }), Ao = ({
  config: e,
  paginatedGroupedData: t,
  visibleColumns: n,
  hasButtons: r,
  visibleButtons: s,
  moreButtons: i,
  showExtraColumn: a,
  selectAll: l,
  selectedRows: d,
  openDropdown: c,
  handleSort: u,
  handleSelectAll: f,
  handleSelectRow: v,
  handleButtonClick: y,
  toggleDropdown: b,
  setOpenDropdown: p,
  parseStyle: g,
  formatCellValue: R,
  renderSortIcon: x,
  getIconComponent: N,
  style: w
}) => {
  const { datagrid: S, groupBy: C } = e, { wrapLines: k, rowClickSelection: E, stripedRows: T, fixFirstColumn: B, fixFirstTwoColumns: U, fixLastColumn: ee, compactMode: A } = e, [$, J] = z(null);
  return /* @__PURE__ */ o.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ o.jsx("div", { className: "overflow-x-auto", children: Object.keys(t).map((H) => /* @__PURE__ */ o.jsxs("div", { children: [
    C && /* @__PURE__ */ o.jsx("div", { className: "bg-gray-100 px-4 sm:px-6 py-2 ", children: /* @__PURE__ */ o.jsxs("h3", { className: "text-sm font-medium text-gray-700", children: [
      S[C].label,
      ": ",
      H,
      " (",
      t[H].length,
      " records)"
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { className: "min-w-full", id: "printable", children: /* @__PURE__ */ o.jsxs("table", { className: "min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t", children: [
      /* @__PURE__ */ o.jsx("thead", { className: w?.thead || "bg-muted text-action z-20", children: /* @__PURE__ */ o.jsxs("tr", { children: [
        r && /* @__PURE__ */ o.jsx("th", { className: w?.th || "px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32", children: "Actions" }),
        a === "checkbox" && /* @__PURE__ */ o.jsx("th", { className: w?.th || "px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider", children: /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "checkbox",
            checked: l,
            onChange: f,
            className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          }
        ) }),
        n.map(([j, P], O) => {
          const h = U && O < 2 || B && O === 0 ? "sticky left-0 bg-white z-10" : ee && O === n.length - 1 ? "sticky right-0 bg-white z-10" : "";
          return /* @__PURE__ */ o.jsx(
            "th",
            {
              className: `${w?.th || "px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider"} ${P.sortable ? "cursor-pointer hover:bg-gray-100" : ""} ${h}`,
              style: P.style ? g(P.style) : {},
              onClick: () => P.sortable && u(j),
              children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "truncate", children: P.label }),
                x(j)
              ] })
            },
            j
          );
        })
      ] }) }),
      /* @__PURE__ */ o.jsx("tbody", { className: w?.tbody || "bg-white divide-y divide-gray-200", children: t[H] && t[H].length > 0 ? t[H].map((j, P) => /* @__PURE__ */ o.jsxs(
        "tr",
        {
          className: `${w?.tr || "hover:bg-secondary"} 
                            ${E ? "cursor-pointer" : ""} 
                            ${A ? "text-xs py-0.5" : ""} 
                            ${T && P % 2 === 1 ? "bg-gray-50" : ""}`,
          onClick: () => E && v(j.id),
          children: [
            r && /* @__PURE__ */ o.jsx("td", { className: w?.td || "px-4 sm:px-6 py-1 whitespace-nowrap text-sm text-gray-900", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
              s.map(([O, h]) => /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => y(O, h, j),
                  className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                  title: h.label,
                  children: N(h.icon)
                },
                O
              )),
              i.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    onClick: () => b(j.id),
                    className: "inline-flex items-center px-1 py-1 text-xs font-medium text-gray-700 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    title: "More",
                    children: /* @__PURE__ */ o.jsx(to, { className: "w-4 h-4" })
                  }
                ),
                c === j.id && /* @__PURE__ */ o.jsx("div", { className: "absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50", children: /* @__PURE__ */ o.jsx("div", { className: "py-1", children: i.map(([O, h]) => /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: () => {
                      y(O, h, j), p(null);
                    },
                    className: "flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100",
                    title: h.label,
                    children: [
                      /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: N(h.icon) }),
                      /* @__PURE__ */ o.jsx("span", { className: "truncate block w-full text-left", children: h.label })
                    ]
                  },
                  O
                )) }) })
              ] })
            ] }) }),
            a === "checkbox" && /* @__PURE__ */ o.jsx("td", { className: w?.td || "px-4 sm:px-6 py-1 whitespace-nowrap text-sm text-gray-900", children: /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "checkbox",
                checked: d.has(j.id),
                onChange: () => v(j.id),
                className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              }
            ) }),
            n.map(([O, h], M) => {
              const _ = U && M < 2 || B && M === 0 ? "sticky left-0 bg-white z-10" : ee && M === n.length - 1 ? "sticky right-0 bg-white z-10" : "";
              return /* @__PURE__ */ o.jsx(
                "td",
                {
                  className: `${w?.td || "px-4 sm:px-6 py-1 text-sm text-gray-900"} ${_}`,
                  children: /* @__PURE__ */ o.jsxs("div", { className: "relative group flex items-center", children: [
                    /* @__PURE__ */ o.jsx("div", { className: k ? "whitespace-pre-wrap break-words max-w-none" : "truncate max-w-xs sm:max-w-none", children: R(j[O], h.formatter) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        onClick: () => kn(j[O] || "", `${j.id}-${O}`, J),
                        className: "absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer",
                        title: "Copy",
                        children: $ === `${j.id}-${O}` ? /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) }) : /* @__PURE__ */ o.jsx(Rn, { className: "w-4 h-4 text-gray-600" })
                      }
                    )
                  ] })
                },
                O
              );
            })
          ]
        },
        P
      )) : /* @__PURE__ */ o.jsx(o.Fragment, { children: Array.from({ length: 6 }).map((j, P) => /* @__PURE__ */ o.jsx(
        Oo,
        {
          columns: [
            ...r ? [["__actions", {}]] : [],
            ...a === "checkbox" ? [["__checkbox", {}]] : [],
            ...n
          ]
        },
        P
      )) }) })
    ] }) })
  ] }, H)) }) });
};
function _o() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Z(
    () => (r) => {
      t.forEach((s) => s(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Vt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function st(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Dn(e) {
  return "nodeType" in e;
}
function me(e) {
  var t, n;
  return e ? st(e) ? e : Dn(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Tn(e) {
  const {
    Document: t
  } = me(e);
  return e instanceof t;
}
function Nt(e) {
  return st(e) ? !1 : e instanceof me(e).HTMLElement;
}
function Rr(e) {
  return e instanceof me(e).SVGElement;
}
function ot(e) {
  return e ? st(e) ? e.document : Dn(e) ? Tn(e) ? e : Nt(e) || Rr(e) ? e.ownerDocument : document : document : document;
}
const Ee = Vt ? Es : K;
function Jt(e) {
  const t = Q(e);
  return Ee(() => {
    t.current = e;
  }), fe(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Mo() {
  const e = Q(null), t = fe((r, s) => {
    e.current = setInterval(r, s);
  }, []), n = fe(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function bt(e, t) {
  t === void 0 && (t = [e]);
  const n = Q(e);
  return Ee(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function jt(e, t) {
  const n = Q();
  return Z(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function $t(e) {
  const t = Jt(e), n = Q(null), r = fe(
    (s) => {
      s !== n.current && t?.(s, n.current), n.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Ft(e) {
  const t = Q();
  return K(() => {
    t.current = e;
  }, [e]), t.current;
}
let ln = {};
function Ct(e, t) {
  return Z(() => {
    if (t)
      return t;
    const n = ln[e] == null ? 0 : ln[e] + 1;
    return ln[e] = n, e + "-" + n;
  }, [e, t]);
}
function Er(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return r.reduce((i, a) => {
      const l = Object.entries(a);
      for (const [d, c] of l) {
        const u = i[d];
        u != null && (i[d] = u + e * c);
      }
      return i;
    }, {
      ...t
    });
  };
}
const rt = /* @__PURE__ */ Er(1), Ut = /* @__PURE__ */ Er(-1);
function Po(e) {
  return "clientX" in e && "clientY" in e;
}
function Yt(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = me(e.target);
  return t && e instanceof t;
}
function Lo(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = me(e.target);
  return t && e instanceof t;
}
function zt(e) {
  if (Lo(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return Po(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Je = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Je.Translate.toString(e), Je.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Kn = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Io(e) {
  return e.matches(Kn) ? e : e.querySelector(Kn);
}
const $o = {
  display: "none"
};
function Fo(e) {
  let {
    id: t,
    value: n
  } = e;
  return re.createElement("div", {
    id: t,
    style: $o
  }, n);
}
function Uo(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const s = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return re.createElement("div", {
    id: t,
    style: s,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function zo() {
  const [e, t] = z("");
  return {
    announce: fe((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const kr = /* @__PURE__ */ wt(null);
function Bo(e) {
  const t = Ve(kr);
  K(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function qo() {
  const [e] = z(() => /* @__PURE__ */ new Set()), t = fe((r) => (e.add(r), () => e.delete(r)), [e]);
  return [fe((r) => {
    let {
      type: s,
      event: i
    } = r;
    e.forEach((a) => {
      var l;
      return (l = a[s]) == null ? void 0 : l.call(a, i);
    });
  }, [e]), t];
}
const Ho = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Wo = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Vo(e) {
  let {
    announcements: t = Wo,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: s = Ho
  } = e;
  const {
    announce: i,
    announcement: a
  } = zo(), l = Ct("DndLiveRegion"), [d, c] = z(!1);
  if (K(() => {
    c(!0);
  }, []), Bo(Z(() => ({
    onDragStart(f) {
      let {
        active: v
      } = f;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(f) {
      let {
        active: v,
        over: y
      } = f;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: y
      }));
    },
    onDragOver(f) {
      let {
        active: v,
        over: y
      } = f;
      i(t.onDragOver({
        active: v,
        over: y
      }));
    },
    onDragEnd(f) {
      let {
        active: v,
        over: y
      } = f;
      i(t.onDragEnd({
        active: v,
        over: y
      }));
    },
    onDragCancel(f) {
      let {
        active: v,
        over: y
      } = f;
      i(t.onDragCancel({
        active: v,
        over: y
      }));
    }
  }), [i, t])), !d)
    return null;
  const u = re.createElement(re.Fragment, null, re.createElement(Fo, {
    id: r,
    value: s.draggable
  }), re.createElement(Uo, {
    id: l,
    announcement: a
  }));
  return n ? Os(u, n) : u;
}
var ie;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ie || (ie = {}));
function Bt() {
}
function Jo(e, t) {
  return Z(
    () => ({
      sensor: e,
      options: {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Yo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Z(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const ke = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Xo(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ko(e, t) {
  const n = zt(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Go(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function Zo(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Qo(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function Gn(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const ei = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = Gn(t, t.left, t.top), i = [];
  for (const a of r) {
    const {
      id: l
    } = a, d = n.get(l);
    if (d) {
      const c = Xo(Gn(d), s);
      i.push({
        id: l,
        data: {
          droppableContainer: a,
          value: c
        }
      });
    }
  }
  return i.sort(Go);
};
function ti(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), s = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), a = s - r, l = i - n;
  if (r < s && n < i) {
    const d = t.width * t.height, c = e.width * e.height, u = a * l, f = u / (d + c - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const ni = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const d = ti(l, t);
      d > 0 && s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return s.sort(Zo);
};
function ri(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Dr(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ke;
}
function si(e) {
  return function(n) {
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return s.reduce((a, l) => ({
      ...a,
      top: a.top + e * l.y,
      bottom: a.bottom + e * l.y,
      left: a.left + e * l.x,
      right: a.right + e * l.x
    }), {
      ...n
    });
  };
}
const oi = /* @__PURE__ */ si(1);
function Tr(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function ii(e, t, n) {
  const r = Tr(t);
  if (!r)
    return e;
  const {
    scaleX: s,
    scaleY: i,
    x: a,
    y: l
  } = r, d = e.left - a - (1 - s) * parseFloat(n), c = e.top - l - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = s ? e.width / s : e.width, f = i ? e.height / i : e.height;
  return {
    width: u,
    height: f,
    top: c,
    right: d + u,
    bottom: c + f,
    left: d
  };
}
const ai = {
  ignoreTransform: !1
};
function it(e, t) {
  t === void 0 && (t = ai);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: u
    } = me(e).getComputedStyle(e);
    c && (n = ii(n, c, u));
  }
  const {
    top: r,
    left: s,
    width: i,
    height: a,
    bottom: l,
    right: d
  } = n;
  return {
    top: r,
    left: s,
    width: i,
    height: a,
    bottom: l,
    right: d
  };
}
function Zn(e) {
  return it(e, {
    ignoreTransform: !0
  });
}
function li(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function ci(e, t) {
  return t === void 0 && (t = me(e).getComputedStyle(e)), t.position === "fixed";
}
function di(e, t) {
  t === void 0 && (t = me(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((s) => {
    const i = t[s];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function On(e, t) {
  const n = [];
  function r(s) {
    if (t != null && n.length >= t || !s)
      return n;
    if (Tn(s) && s.scrollingElement != null && !n.includes(s.scrollingElement))
      return n.push(s.scrollingElement), n;
    if (!Nt(s) || Rr(s) || n.includes(s))
      return n;
    const i = me(e).getComputedStyle(s);
    return s !== e && di(s, i) && n.push(s), ci(s, i) ? n : r(s.parentNode);
  }
  return e ? r(e) : n;
}
function Or(e) {
  const [t] = On(e, 1);
  return t ?? null;
}
function cn(e) {
  return !Vt || !e ? null : st(e) ? e : Dn(e) ? Tn(e) || e === ot(e).scrollingElement ? window : Nt(e) ? e : null : null;
}
function Ar(e) {
  return st(e) ? e.scrollX : e.scrollLeft;
}
function _r(e) {
  return st(e) ? e.scrollY : e.scrollTop;
}
function gn(e) {
  return {
    x: Ar(e),
    y: _r(e)
  };
}
var ae;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ae || (ae = {}));
function Mr(e) {
  return !Vt || !e ? !1 : e === document.scrollingElement;
}
function Pr(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Mr(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, s = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, a = e.scrollTop >= r.y, l = e.scrollLeft >= r.x;
  return {
    isTop: s,
    isLeft: i,
    isBottom: a,
    isRight: l,
    maxScroll: r,
    minScroll: t
  };
}
const ui = {
  x: 0.2,
  y: 0.2
};
function fi(e, t, n, r, s) {
  let {
    top: i,
    left: a,
    right: l,
    bottom: d
  } = n;
  r === void 0 && (r = 10), s === void 0 && (s = ui);
  const {
    isTop: c,
    isBottom: u,
    isLeft: f,
    isRight: v
  } = Pr(e), y = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, p = {
    height: t.height * s.y,
    width: t.width * s.x
  };
  return !c && i <= t.top + p.height ? (y.y = ae.Backward, b.y = r * Math.abs((t.top + p.height - i) / p.height)) : !u && d >= t.bottom - p.height && (y.y = ae.Forward, b.y = r * Math.abs((t.bottom - p.height - d) / p.height)), !v && l >= t.right - p.width ? (y.x = ae.Forward, b.x = r * Math.abs((t.right - p.width - l) / p.width)) : !f && a <= t.left + p.width && (y.x = ae.Backward, b.x = r * Math.abs((t.left + p.width - a) / p.width)), {
    direction: y,
    speed: b
  };
}
function hi(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: a,
      width: i,
      height: a
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: s
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: s,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Lr(e) {
  return e.reduce((t, n) => rt(t, gn(n)), ke);
}
function mi(e) {
  return e.reduce((t, n) => t + Ar(n), 0);
}
function pi(e) {
  return e.reduce((t, n) => t + _r(n), 0);
}
function Ir(e, t) {
  if (t === void 0 && (t = it), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: s,
    right: i
  } = t(e);
  Or(e) && (s <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const gi = [["x", ["left", "right"], mi], ["y", ["top", "bottom"], pi]];
class An {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = On(n), s = Lr(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, a, l] of gi)
      for (const d of a)
        Object.defineProperty(this, d, {
          get: () => {
            const c = l(r), u = s[i] - c;
            return this.rect[d] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class pt {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var s;
    (s = this.target) == null || s.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function xi(e) {
  const {
    EventTarget: t
  } = me(e);
  return e instanceof t ? e : ot(e);
}
function dn(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var je;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(je || (je = {}));
function Qn(e) {
  e.preventDefault();
}
function bi(e) {
  e.stopPropagation();
}
var G;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(G || (G = {}));
const $r = {
  start: [G.Space, G.Enter],
  cancel: [G.Esc],
  end: [G.Space, G.Enter, G.Tab]
}, yi = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case G.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case G.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case G.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case G.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Fr {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new pt(ot(n)), this.windowListeners = new pt(me(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(je.Resize, this.handleCancel), this.windowListeners.add(je.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(je.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Ir(r), n(ke);
  }
  handleKeyDown(t) {
    if (Yt(t)) {
      const {
        active: n,
        context: r,
        options: s
      } = this.props, {
        keyboardCodes: i = $r,
        coordinateGetter: a = yi,
        scrollBehavior: l = "smooth"
      } = s, {
        code: d
      } = t;
      if (i.end.includes(d)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(d)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, u = c ? {
        x: c.left,
        y: c.top
      } : ke;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = a(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (f) {
        const v = Ut(f, u), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const p of b) {
          const g = t.code, {
            isTop: R,
            isRight: x,
            isLeft: N,
            isBottom: w,
            maxScroll: S,
            minScroll: C
          } = Pr(p), k = hi(p), E = {
            x: Math.min(g === G.Right ? k.right - k.width / 2 : k.right, Math.max(g === G.Right ? k.left : k.left + k.width / 2, f.x)),
            y: Math.min(g === G.Down ? k.bottom - k.height / 2 : k.bottom, Math.max(g === G.Down ? k.top : k.top + k.height / 2, f.y))
          }, T = g === G.Right && !x || g === G.Left && !N, B = g === G.Down && !w || g === G.Up && !R;
          if (T && E.x !== f.x) {
            const U = p.scrollLeft + v.x, ee = g === G.Right && U <= S.x || g === G.Left && U >= C.x;
            if (ee && !v.y) {
              p.scrollTo({
                left: U,
                behavior: l
              });
              return;
            }
            ee ? y.x = p.scrollLeft - U : y.x = g === G.Right ? p.scrollLeft - S.x : p.scrollLeft - C.x, y.x && p.scrollBy({
              left: -y.x,
              behavior: l
            });
            break;
          } else if (B && E.y !== f.y) {
            const U = p.scrollTop + v.y, ee = g === G.Down && U <= S.y || g === G.Up && U >= C.y;
            if (ee && !v.x) {
              p.scrollTo({
                top: U,
                behavior: l
              });
              return;
            }
            ee ? y.y = p.scrollTop - U : y.y = g === G.Down ? p.scrollTop - S.y : p.scrollTop - C.y, y.y && p.scrollBy({
              top: -y.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, rt(Ut(f, this.referenceCoordinates), y));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Fr.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = $r,
      onActivation: s
    } = t, {
      active: i
    } = n;
    const {
      code: a
    } = e.nativeEvent;
    if (r.start.includes(a)) {
      const l = i.activatorNode.current;
      return l && e.target !== l ? !1 : (e.preventDefault(), s?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function er(e) {
  return !!(e && "distance" in e);
}
function tr(e) {
  return !!(e && "delay" in e);
}
class _n {
  constructor(t, n, r) {
    var s;
    r === void 0 && (r = xi(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: a
    } = i;
    this.props = t, this.events = n, this.document = ot(a), this.documentListeners = new pt(this.document), this.listeners = new pt(r), this.windowListeners = new pt(me(a)), this.initialCoordinates = (s = zt(i)) != null ? s : ke, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(je.Resize, this.handleCancel), this.windowListeners.add(je.DragStart, Qn), this.windowListeners.add(je.VisibilityChange, this.handleCancel), this.windowListeners.add(je.ContextMenu, Qn), this.documentListeners.add(je.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (tr(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (er(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: s
    } = this.props;
    s(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(je.Click, bi, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(je.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: s,
      props: i
    } = this, {
      onMove: a,
      options: {
        activationConstraint: l
      }
    } = i;
    if (!s)
      return;
    const d = (n = zt(t)) != null ? n : ke, c = Ut(s, d);
    if (!r && l) {
      if (er(l)) {
        if (l.tolerance != null && dn(c, l.tolerance))
          return this.handleCancel();
        if (dn(c, l.distance))
          return this.handleStart();
      }
      if (tr(l) && dn(c, l.tolerance))
        return this.handleCancel();
      this.handlePending(l, c);
      return;
    }
    t.cancelable && t.preventDefault(), a(d);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === G.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const vi = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Mn extends _n {
  constructor(t) {
    const {
      event: n
    } = t, r = ot(n.target);
    super(t, vi, r);
  }
}
Mn.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const wi = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var xn;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(xn || (xn = {}));
class Ni extends _n {
  constructor(t) {
    super(t, wi, ot(t.event.target));
  }
}
Ni.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === xn.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const un = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class ji extends _n {
  constructor(t) {
    super(t, un);
  }
  static setup() {
    return window.addEventListener(un.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(un.move.name, t);
    };
    function t() {
    }
  }
}
ji.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: s
    } = n;
    return s.length > 1 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
var gt;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(gt || (gt = {}));
var qt;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(qt || (qt = {}));
function Ci(e) {
  let {
    acceleration: t,
    activator: n = gt.Pointer,
    canScroll: r,
    draggingRect: s,
    enabled: i,
    interval: a = 5,
    order: l = qt.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: c,
    scrollableAncestorRects: u,
    delta: f,
    threshold: v
  } = e;
  const y = Ri({
    delta: f,
    disabled: !i
  }), [b, p] = Mo(), g = Q({
    x: 0,
    y: 0
  }), R = Q({
    x: 0,
    y: 0
  }), x = Z(() => {
    switch (n) {
      case gt.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case gt.DraggableRect:
        return s;
    }
  }, [n, s, d]), N = Q(null), w = fe(() => {
    const C = N.current;
    if (!C)
      return;
    const k = g.current.x * R.current.x, E = g.current.y * R.current.y;
    C.scrollBy(k, E);
  }, []), S = Z(() => l === qt.TreeOrder ? [...c].reverse() : c, [l, c]);
  K(
    () => {
      if (!i || !c.length || !x) {
        p();
        return;
      }
      for (const C of S) {
        if (r?.(C) === !1)
          continue;
        const k = c.indexOf(C), E = u[k];
        if (!E)
          continue;
        const {
          direction: T,
          speed: B
        } = fi(C, E, x, t, v);
        for (const U of ["x", "y"])
          y[U][T[U]] || (B[U] = 0, T[U] = 0);
        if (B.x > 0 || B.y > 0) {
          p(), N.current = C, b(w, a), g.current = B, R.current = T;
          return;
        }
      }
      g.current = {
        x: 0,
        y: 0
      }, R.current = {
        x: 0,
        y: 0
      }, p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      w,
      r,
      p,
      i,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      b,
      c,
      S,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const Si = {
  x: {
    [ae.Backward]: !1,
    [ae.Forward]: !1
  },
  y: {
    [ae.Backward]: !1,
    [ae.Forward]: !1
  }
};
function Ri(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Ft(t);
  return jt((s) => {
    if (n || !r || !s)
      return Si;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ae.Backward]: s.x[ae.Backward] || i.x === -1,
        [ae.Forward]: s.x[ae.Forward] || i.x === 1
      },
      y: {
        [ae.Backward]: s.y[ae.Backward] || i.y === -1,
        [ae.Forward]: s.y[ae.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function Ei(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return jt((s) => {
    var i;
    return t == null ? null : (i = r ?? s) != null ? i : null;
  }, [r, t]);
}
function ki(e, t) {
  return Z(() => e.reduce((n, r) => {
    const {
      sensor: s
    } = r, i = s.activators.map((a) => ({
      eventName: a.eventName,
      handler: t(a.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var yt;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(yt || (yt = {}));
var bn;
(function(e) {
  e.Optimized = "optimized";
})(bn || (bn = {}));
const nr = /* @__PURE__ */ new Map();
function Di(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: s
  } = t;
  const [i, a] = z(null), {
    frequency: l,
    measure: d,
    strategy: c
  } = s, u = Q(e), f = g(), v = bt(f), y = fe(function(R) {
    R === void 0 && (R = []), !v.current && a((x) => x === null ? R : x.concat(R.filter((N) => !x.includes(N))));
  }, [v]), b = Q(null), p = jt((R) => {
    if (f && !n)
      return nr;
    if (!R || R === nr || u.current !== e || i != null) {
      const x = /* @__PURE__ */ new Map();
      for (let N of e) {
        if (!N)
          continue;
        if (i && i.length > 0 && !i.includes(N.id) && N.rect.current) {
          x.set(N.id, N.rect.current);
          continue;
        }
        const w = N.node.current, S = w ? new An(d(w), w) : null;
        N.rect.current = S, S && x.set(N.id, S);
      }
      return x;
    }
    return R;
  }, [e, i, n, f, d]);
  return K(() => {
    u.current = e;
  }, [e]), K(
    () => {
      f || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), K(
    () => {
      i && i.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), K(
    () => {
      f || typeof l != "number" || b.current !== null || (b.current = setTimeout(() => {
        y(), b.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, f, y, ...r]
  ), {
    droppableRects: p,
    measureDroppableContainers: y,
    measuringScheduled: i != null
  };
  function g() {
    switch (c) {
      case yt.Always:
        return !1;
      case yt.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Pn(e, t) {
  return jt((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Ti(e, t) {
  return Pn(e, t);
}
function Oi(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Jt(t), s = Z(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return K(() => () => s?.disconnect(), [s]), s;
}
function Xt(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Jt(t), s = Z(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return K(() => () => s?.disconnect(), [s]), s;
}
function Ai(e) {
  return new An(it(e), e);
}
function rr(e, t, n) {
  t === void 0 && (t = Ai);
  const [r, s] = z(null);
  function i() {
    s((d) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = d ?? n) != null ? c : null;
      }
      const u = t(e);
      return JSON.stringify(d) === JSON.stringify(u) ? d : u;
    });
  }
  const a = Oi({
    callback(d) {
      if (e)
        for (const c of d) {
          const {
            type: u,
            target: f
          } = c;
          if (u === "childList" && f instanceof HTMLElement && f.contains(e)) {
            i();
            break;
          }
        }
    }
  }), l = Xt({
    callback: i
  });
  return Ee(() => {
    i(), e ? (l?.observe(e), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l?.disconnect(), a?.disconnect());
  }, [e]), r;
}
function _i(e) {
  const t = Pn(e);
  return Dr(e, t);
}
const sr = [];
function Mi(e) {
  const t = Q(e), n = jt((r) => e ? r && r !== sr && e && t.current && e.parentNode === t.current.parentNode ? r : On(e) : sr, [e]);
  return K(() => {
    t.current = e;
  }, [e]), n;
}
function Pi(e) {
  const [t, n] = z(null), r = Q(e), s = fe((i) => {
    const a = cn(i.target);
    a && n((l) => l ? (l.set(a, gn(a)), new Map(l)) : null);
  }, []);
  return K(() => {
    const i = r.current;
    if (e !== i) {
      a(i);
      const l = e.map((d) => {
        const c = cn(d);
        return c ? (c.addEventListener("scroll", s, {
          passive: !0
        }), [c, gn(c)]) : null;
      }).filter((d) => d != null);
      n(l.length ? new Map(l) : null), r.current = e;
    }
    return () => {
      a(e), a(i);
    };
    function a(l) {
      l.forEach((d) => {
        const c = cn(d);
        c?.removeEventListener("scroll", s);
      });
    }
  }, [s, e]), Z(() => e.length ? t ? Array.from(t.values()).reduce((i, a) => rt(i, a), ke) : Lr(e) : ke, [e, t]);
}
function or(e, t) {
  t === void 0 && (t = []);
  const n = Q(null);
  return K(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), K(() => {
    const r = e !== ke;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Ut(e, n.current) : ke;
}
function Li(e) {
  K(
    () => {
      if (!Vt)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function Ii(e, t) {
  return Z(() => e.reduce((n, r) => {
    let {
      eventName: s,
      handler: i
    } = r;
    return n[s] = (a) => {
      i(a, t);
    }, n;
  }, {}), [e, t]);
}
function Ur(e) {
  return Z(() => e ? li(e) : null, [e]);
}
const ir = [];
function $i(e, t) {
  t === void 0 && (t = it);
  const [n] = e, r = Ur(n ? me(n) : null), [s, i] = z(ir);
  function a() {
    i(() => e.length ? e.map((d) => Mr(d) ? r : new An(t(d), d)) : ir);
  }
  const l = Xt({
    callback: a
  });
  return Ee(() => {
    l?.disconnect(), a(), e.forEach((d) => l?.observe(d));
  }, [e]), s;
}
function zr(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Nt(t) ? t : e;
}
function Fi(e) {
  let {
    measure: t
  } = e;
  const [n, r] = z(null), s = fe((c) => {
    for (const {
      target: u
    } of c)
      if (Nt(u)) {
        r((f) => {
          const v = t(u);
          return f ? {
            ...f,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = Xt({
    callback: s
  }), a = fe((c) => {
    const u = zr(c);
    i?.disconnect(), u && i?.observe(u), r(u ? t(u) : null);
  }, [t, i]), [l, d] = $t(a);
  return Z(() => ({
    nodeRef: l,
    rect: n,
    setRef: d
  }), [n, l, d]);
}
const Ui = [{
  sensor: Mn,
  options: {}
}, {
  sensor: Fr,
  options: {}
}], zi = {
  current: {}
}, Mt = {
  draggable: {
    measure: Zn
  },
  droppable: {
    measure: Zn,
    strategy: yt.WhileDragging,
    frequency: bn.Optimized
  },
  dragOverlay: {
    measure: it
  }
};
class xt extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const Bi = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new xt(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Bt
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Mt,
  measureDroppableContainers: Bt,
  windowRect: null,
  measuringScheduled: !1
}, Br = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Bt,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Bt
}, St = /* @__PURE__ */ wt(Br), qr = /* @__PURE__ */ wt(Bi);
function qi() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new xt()
    }
  };
}
function Hi(e, t) {
  switch (t.type) {
    case ie.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case ie.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case ie.DragEnd:
    case ie.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case ie.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, s = new xt(e.droppable.containers);
      return s.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case ie.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: s
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const a = new xt(e.droppable.containers);
      return a.set(n, {
        ...i,
        disabled: s
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case ie.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const i = new xt(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function Wi(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: s
  } = Ve(St), i = Ft(r), a = Ft(n?.id);
  return K(() => {
    if (!t && !r && i && a != null) {
      if (!Yt(i) || document.activeElement === i.target)
        return;
      const l = s.get(a);
      if (!l)
        return;
      const {
        activatorNode: d,
        node: c
      } = l;
      if (!d.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [d.current, c.current]) {
          if (!u)
            continue;
          const f = Io(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, s, a, i]), null;
}
function Hr(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((s, i) => i({
    transform: s,
    ...r
  }), n) : n;
}
function Vi(e) {
  return Z(
    () => ({
      draggable: {
        ...Mt.draggable,
        ...e?.draggable
      },
      droppable: {
        ...Mt.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...Mt.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function Ji(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: s = !0
  } = e;
  const i = Q(!1), {
    x: a,
    y: l
  } = typeof s == "boolean" ? {
    x: s,
    y: s
  } : s;
  Ee(() => {
    if (!a && !l || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const c = t?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const u = n(c), f = Dr(u, r);
    if (a || (f.x = 0), l || (f.y = 0), i.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const v = Or(c);
      v && v.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, a, l, r, n]);
}
const Kt = /* @__PURE__ */ wt({
  ...ke,
  scaleX: 1,
  scaleY: 1
});
var We;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(We || (We = {}));
const Yi = /* @__PURE__ */ ks(function(t) {
  var n, r, s, i;
  let {
    id: a,
    accessibility: l,
    autoScroll: d = !0,
    children: c,
    sensors: u = Ui,
    collisionDetection: f = ni,
    measuring: v,
    modifiers: y,
    ...b
  } = t;
  const p = Ds(Hi, void 0, qi), [g, R] = p, [x, N] = qo(), [w, S] = z(We.Uninitialized), C = w === We.Initialized, {
    draggable: {
      active: k,
      nodes: E,
      translate: T
    },
    droppable: {
      containers: B
    }
  } = g, U = k != null ? E.get(k) : null, ee = Q({
    initial: null,
    translated: null
  }), A = Z(() => {
    var de;
    return k != null ? {
      id: k,
      // It's possible for the active node to unmount while dragging
      data: (de = U?.data) != null ? de : zi,
      rect: ee
    } : null;
  }, [k, U]), $ = Q(null), [J, H] = z(null), [j, P] = z(null), O = bt(b, Object.values(b)), h = Ct("DndDescribedBy", a), M = Z(() => B.getEnabled(), [B]), _ = Vi(v), {
    droppableRects: I,
    measureDroppableContainers: q,
    measuringScheduled: W
  } = Di(M, {
    dragging: C,
    dependencies: [T.x, T.y],
    config: _.droppable
  }), V = Ei(E, k), he = Z(() => j ? zt(j) : null, [j]), X = Rs(), se = Ti(V, _.draggable.measure);
  Ji({
    activeNode: k != null ? E.get(k) : null,
    config: X.layoutShiftCompensation,
    initialRect: se,
    measure: _.draggable.measure
  });
  const Y = rr(V, _.draggable.measure, se), Pe = rr(V ? V.parentElement : null), we = Q({
    activatorEvent: null,
    active: null,
    activeNode: V,
    collisionRect: null,
    collisions: null,
    droppableRects: I,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: B,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ce = B.getNodeFor((n = we.current.over) == null ? void 0 : n.id), Se = Fi({
    measure: _.dragOverlay.measure
  }), $e = (r = Se.nodeRef.current) != null ? r : V, Re = C ? (s = Se.rect) != null ? s : Y : null, Fe = !!(Se.nodeRef.current && Se.rect), Ye = _i(Fe ? null : Y), Qe = Ur($e ? me($e) : null), pe = Mi(C ? Ce ?? V : null), et = $i(pe), Te = Hr(y, {
    transform: {
      x: T.x - Ye.x,
      y: T.y - Ye.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: j,
    active: A,
    activeNodeRect: Y,
    containerNodeRect: Pe,
    draggingNodeRect: Re,
    over: we.current.over,
    overlayNodeRect: Se.rect,
    scrollableAncestors: pe,
    scrollableAncestorRects: et,
    windowRect: Qe
  }), Ue = he ? rt(he, T) : null, Xe = Pi(pe), ze = or(Xe), D = or(Xe, [Y]), L = rt(Te, ze), ne = Re ? oi(Re, Te) : null, le = A && ne ? f({
    active: A,
    collisionRect: ne,
    droppableRects: I,
    droppableContainers: M,
    pointerCoordinates: Ue
  }) : null, Le = Qo(le, "id"), [Oe, rn] = z(null), sn = Fe ? Te : rt(Te, D), Ns = ri(sn, (i = Oe?.rect) != null ? i : null, Y), on = Q(null), Un = fe(
    (de, be) => {
      let {
        sensor: ye,
        options: Be
      } = be;
      if ($.current == null)
        return;
      const Ne = E.get($.current);
      if (!Ne)
        return;
      const ve = de.nativeEvent, Ae = new ye({
        active: $.current,
        activeNode: Ne,
        event: ve,
        options: Be,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: we,
        onAbort(ce) {
          if (!E.get(ce))
            return;
          const {
            onDragAbort: _e
          } = O.current, Ie = {
            id: ce
          };
          _e?.(Ie), x({
            type: "onDragAbort",
            event: Ie
          });
        },
        onPending(ce, qe, _e, Ie) {
          if (!E.get(ce))
            return;
          const {
            onDragPending: dt
          } = O.current, He = {
            id: ce,
            constraint: qe,
            initialCoordinates: _e,
            offset: Ie
          };
          dt?.(He), x({
            type: "onDragPending",
            event: He
          });
        },
        onStart(ce) {
          const qe = $.current;
          if (qe == null)
            return;
          const _e = E.get(qe);
          if (!_e)
            return;
          const {
            onDragStart: Ie
          } = O.current, ct = {
            activatorEvent: ve,
            active: {
              id: qe,
              data: _e.data,
              rect: ee
            }
          };
          Tt(() => {
            Ie?.(ct), S(We.Initializing), R({
              type: ie.DragStart,
              initialCoordinates: ce,
              active: qe
            }), x({
              type: "onDragStart",
              event: ct
            }), H(on.current), P(ve);
          });
        },
        onMove(ce) {
          R({
            type: ie.DragMove,
            coordinates: ce
          });
        },
        onEnd: tt(ie.DragEnd),
        onCancel: tt(ie.DragCancel)
      });
      on.current = Ae;
      function tt(ce) {
        return async function() {
          const {
            active: _e,
            collisions: Ie,
            over: ct,
            scrollAdjustedTranslate: dt
          } = we.current;
          let He = null;
          if (_e && dt) {
            const {
              cancelDrop: ut
            } = O.current;
            He = {
              activatorEvent: ve,
              active: _e,
              collisions: Ie,
              delta: dt,
              over: ct
            }, ce === ie.DragEnd && typeof ut == "function" && await Promise.resolve(ut(He)) && (ce = ie.DragCancel);
          }
          $.current = null, Tt(() => {
            R({
              type: ce
            }), S(We.Uninitialized), rn(null), H(null), P(null), on.current = null;
            const ut = ce === ie.DragEnd ? "onDragEnd" : "onDragCancel";
            if (He) {
              const an = O.current[ut];
              an?.(He), x({
                type: ut,
                event: He
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), js = fe((de, be) => (ye, Be) => {
    const Ne = ye.nativeEvent, ve = E.get(Be);
    if (
      // Another sensor is already instantiating
      $.current !== null || // No active draggable
      !ve || // Event has already been captured
      Ne.dndKit || Ne.defaultPrevented
    )
      return;
    const Ae = {
      active: ve
    };
    de(ye, be.options, Ae) === !0 && (Ne.dndKit = {
      capturedBy: be.sensor
    }, $.current = Be, Un(ye, be));
  }, [E, Un]), zn = ki(u, js);
  Li(u), Ee(() => {
    Y && w === We.Initializing && S(We.Initialized);
  }, [Y, w]), K(
    () => {
      const {
        onDragMove: de
      } = O.current, {
        active: be,
        activatorEvent: ye,
        collisions: Be,
        over: Ne
      } = we.current;
      if (!be || !ye)
        return;
      const ve = {
        active: be,
        activatorEvent: ye,
        collisions: Be,
        delta: {
          x: L.x,
          y: L.y
        },
        over: Ne
      };
      Tt(() => {
        de?.(ve), x({
          type: "onDragMove",
          event: ve
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [L.x, L.y]
  ), K(
    () => {
      const {
        active: de,
        activatorEvent: be,
        collisions: ye,
        droppableContainers: Be,
        scrollAdjustedTranslate: Ne
      } = we.current;
      if (!de || $.current == null || !be || !Ne)
        return;
      const {
        onDragOver: ve
      } = O.current, Ae = Be.get(Le), tt = Ae && Ae.rect.current ? {
        id: Ae.id,
        rect: Ae.rect.current,
        data: Ae.data,
        disabled: Ae.disabled
      } : null, ce = {
        active: de,
        activatorEvent: be,
        collisions: ye,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: tt
      };
      Tt(() => {
        rn(tt), ve?.(ce), x({
          type: "onDragOver",
          event: ce
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Le]
  ), Ee(() => {
    we.current = {
      activatorEvent: j,
      active: A,
      activeNode: V,
      collisionRect: ne,
      collisions: le,
      droppableRects: I,
      draggableNodes: E,
      draggingNode: $e,
      draggingNodeRect: Re,
      droppableContainers: B,
      over: Oe,
      scrollableAncestors: pe,
      scrollAdjustedTranslate: L
    }, ee.current = {
      initial: Re,
      translated: ne
    };
  }, [A, V, le, ne, E, $e, Re, I, B, Oe, pe, L]), Ci({
    ...X,
    delta: T,
    draggingRect: ne,
    pointerCoordinates: Ue,
    scrollableAncestors: pe,
    scrollableAncestorRects: et
  });
  const Cs = Z(() => ({
    active: A,
    activeNode: V,
    activeNodeRect: Y,
    activatorEvent: j,
    collisions: le,
    containerNodeRect: Pe,
    dragOverlay: Se,
    draggableNodes: E,
    droppableContainers: B,
    droppableRects: I,
    over: Oe,
    measureDroppableContainers: q,
    scrollableAncestors: pe,
    scrollableAncestorRects: et,
    measuringConfiguration: _,
    measuringScheduled: W,
    windowRect: Qe
  }), [A, V, Y, j, le, Pe, Se, E, B, I, Oe, q, pe, et, _, W, Qe]), Ss = Z(() => ({
    activatorEvent: j,
    activators: zn,
    active: A,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: h
    },
    dispatch: R,
    draggableNodes: E,
    over: Oe,
    measureDroppableContainers: q
  }), [j, zn, A, Y, R, h, E, Oe, q]);
  return re.createElement(kr.Provider, {
    value: N
  }, re.createElement(St.Provider, {
    value: Ss
  }, re.createElement(qr.Provider, {
    value: Cs
  }, re.createElement(Kt.Provider, {
    value: Ns
  }, c)), re.createElement(Wi, {
    disabled: l?.restoreFocus === !1
  })), re.createElement(Vo, {
    ...l,
    hiddenTextDescribedById: h
  }));
  function Rs() {
    const de = J?.autoScrollEnabled === !1, be = typeof d == "object" ? d.enabled === !1 : d === !1, ye = C && !de && !be;
    return typeof d == "object" ? {
      ...d,
      enabled: ye
    } : {
      enabled: ye
    };
  }
}), Xi = /* @__PURE__ */ wt(null), ar = "button", Ki = "Draggable";
function Gi(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: s
  } = e;
  const i = Ct(Ki), {
    activators: a,
    activatorEvent: l,
    active: d,
    activeNodeRect: c,
    ariaDescribedById: u,
    draggableNodes: f,
    over: v
  } = Ve(St), {
    role: y = ar,
    roleDescription: b = "draggable",
    tabIndex: p = 0
  } = s ?? {}, g = d?.id === t, R = Ve(g ? Kt : Xi), [x, N] = $t(), [w, S] = $t(), C = Ii(a, t), k = bt(n);
  Ee(
    () => (f.set(t, {
      id: t,
      key: i,
      node: x,
      activatorNode: w,
      data: k
    }), () => {
      const T = f.get(t);
      T && T.key === i && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const E = Z(() => ({
    role: y,
    tabIndex: p,
    "aria-disabled": r,
    "aria-pressed": g && y === ar ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [r, y, p, g, b, u.draggable]);
  return {
    active: d,
    activatorEvent: l,
    activeNodeRect: c,
    attributes: E,
    isDragging: g,
    listeners: r ? void 0 : C,
    node: x,
    over: v,
    setNodeRef: N,
    setActivatorNodeRef: S,
    transform: R
  };
}
function Wr() {
  return Ve(qr);
}
const Zi = "Droppable", Qi = {
  timeout: 25
};
function Vr(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: s
  } = e;
  const i = Ct(Zi), {
    active: a,
    dispatch: l,
    over: d,
    measureDroppableContainers: c
  } = Ve(St), u = Q({
    disabled: n
  }), f = Q(!1), v = Q(null), y = Q(null), {
    disabled: b,
    updateMeasurementsFor: p,
    timeout: g
  } = {
    ...Qi,
    ...s
  }, R = bt(p ?? r), x = fe(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        c(Array.isArray(R.current) ? R.current : [R.current]), y.current = null;
      }, g);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), N = Xt({
    callback: x,
    disabled: b || !a
  }), w = fe((E, T) => {
    N && (T && (N.unobserve(T), f.current = !1), E && N.observe(E));
  }, [N]), [S, C] = $t(w), k = bt(t);
  return K(() => {
    !N || !S.current || (N.disconnect(), f.current = !1, N.observe(S.current));
  }, [S, N]), K(
    () => (l({
      type: ie.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: S,
        rect: v,
        data: k
      }
    }), () => l({
      type: ie.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), K(() => {
    n !== u.current.disabled && (l({
      type: ie.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), u.current.disabled = n);
  }, [r, i, n, l]), {
    active: a,
    rect: v,
    isOver: d?.id === r,
    node: S,
    over: d,
    setNodeRef: C
  };
}
function ea(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, s] = z(null), [i, a] = z(null), l = Ft(n);
  return !n && !r && l && s(l), Ee(() => {
    if (!i)
      return;
    const d = r?.key, c = r?.props.id;
    if (d == null || c == null) {
      s(null);
      return;
    }
    Promise.resolve(t(c, i)).then(() => {
      s(null);
    });
  }, [t, r, i]), re.createElement(re.Fragment, null, n, r ? Ts(r, {
    ref: a
  }) : null);
}
const ta = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function na(e) {
  let {
    children: t
  } = e;
  return re.createElement(St.Provider, {
    value: Br
  }, re.createElement(Kt.Provider, {
    value: ta
  }, t));
}
const ra = {
  position: "fixed",
  touchAction: "none"
}, sa = (e) => Yt(e) ? "transform 250ms ease" : void 0, oa = /* @__PURE__ */ Sn((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: s,
    children: i,
    className: a,
    rect: l,
    style: d,
    transform: c,
    transition: u = sa
  } = e;
  if (!l)
    return null;
  const f = s ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...ra,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: Je.Transform.toString(f),
    transformOrigin: s && r ? Ko(r, l) : void 0,
    transition: typeof u == "function" ? u(r) : u,
    ...d
  };
  return re.createElement(n, {
    className: a,
    style: v,
    ref: t
  }, i);
}), ia = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const s = {}, {
    styles: i,
    className: a
  } = e;
  if (i != null && i.active)
    for (const [l, d] of Object.entries(i.active))
      d !== void 0 && (s[l] = n.node.style.getPropertyValue(l), n.node.style.setProperty(l, d));
  if (i != null && i.dragOverlay)
    for (const [l, d] of Object.entries(i.dragOverlay))
      d !== void 0 && r.node.style.setProperty(l, d);
  return a != null && a.active && n.node.classList.add(a.active), a != null && a.dragOverlay && r.node.classList.add(a.dragOverlay), function() {
    for (const [d, c] of Object.entries(s))
      n.node.style.setProperty(d, c);
    a != null && a.active && n.node.classList.remove(a.active);
  };
}, aa = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Je.Transform.toString(t)
  }, {
    transform: Je.Transform.toString(n)
  }];
}, la = {
  duration: 250,
  easing: "ease",
  keyframes: aa,
  sideEffects: /* @__PURE__ */ ia({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function ca(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: s
  } = e;
  return Jt((i, a) => {
    if (t === null)
      return;
    const l = n.get(i);
    if (!l)
      return;
    const d = l.node.current;
    if (!d)
      return;
    const c = zr(a);
    if (!c)
      return;
    const {
      transform: u
    } = me(a).getComputedStyle(a), f = Tr(u);
    if (!f)
      return;
    const v = typeof t == "function" ? t : da(t);
    return Ir(d, s.draggable.measure), v({
      active: {
        id: i,
        data: l.data,
        node: d,
        rect: s.draggable.measure(d)
      },
      draggableNodes: n,
      dragOverlay: {
        node: a,
        rect: s.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: s,
      transform: f
    });
  });
}
function da(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: s
  } = {
    ...la,
    ...e
  };
  return (i) => {
    let {
      active: a,
      dragOverlay: l,
      transform: d,
      ...c
    } = i;
    if (!t)
      return;
    const u = {
      x: l.rect.left - a.rect.left,
      y: l.rect.top - a.rect.top
    }, f = {
      scaleX: d.scaleX !== 1 ? a.rect.width * d.scaleX / l.rect.width : 1,
      scaleY: d.scaleY !== 1 ? a.rect.height * d.scaleY / l.rect.height : 1
    }, v = {
      x: d.x - u.x,
      y: d.y - u.y,
      ...f
    }, y = s({
      ...c,
      active: a,
      dragOverlay: l,
      transform: {
        initial: d,
        final: v
      }
    }), [b] = y, p = y[y.length - 1];
    if (JSON.stringify(b) === JSON.stringify(p))
      return;
    const g = r?.({
      active: a,
      dragOverlay: l,
      ...c
    }), R = l.node.animate(y, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((x) => {
      R.onfinish = () => {
        g?.(), x();
      };
    });
  };
}
let lr = 0;
function ua(e) {
  return Z(() => {
    if (e != null)
      return lr++, lr;
  }, [e]);
}
const fa = /* @__PURE__ */ re.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: s,
    transition: i,
    modifiers: a,
    wrapperElement: l = "div",
    className: d,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: u,
    active: f,
    activeNodeRect: v,
    containerNodeRect: y,
    draggableNodes: b,
    droppableContainers: p,
    dragOverlay: g,
    over: R,
    measuringConfiguration: x,
    scrollableAncestors: N,
    scrollableAncestorRects: w,
    windowRect: S
  } = Wr(), C = Ve(Kt), k = ua(f?.id), E = Hr(a, {
    activatorEvent: u,
    active: f,
    activeNodeRect: v,
    containerNodeRect: y,
    draggingNodeRect: g.rect,
    over: R,
    overlayNodeRect: g.rect,
    scrollableAncestors: N,
    scrollableAncestorRects: w,
    transform: C,
    windowRect: S
  }), T = Pn(v), B = ca({
    config: r,
    draggableNodes: b,
    droppableContainers: p,
    measuringConfiguration: x
  }), U = T ? g.setRef : void 0;
  return re.createElement(na, null, re.createElement(ea, {
    animation: B
  }, f && k ? re.createElement(oa, {
    key: k,
    id: f.id,
    ref: U,
    as: l,
    activatorEvent: u,
    adjustScale: t,
    className: d,
    transition: i,
    rect: T,
    style: {
      zIndex: c,
      ...s
    },
    transform: E
  }, n) : null));
});
function Ln(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function ha(e, t) {
  return e.reduce((n, r, s) => {
    const i = t.get(r);
    return i && (n[s] = i), n;
  }, Array(e.length));
}
function At(e) {
  return e !== null && e >= 0;
}
function ma(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function pa(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Jr = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: s
  } = e;
  const i = Ln(t, r, n), a = t[s], l = i[s];
  return !l || !a ? null : {
    x: l.left - a.left,
    y: l.top - a.top,
    scaleX: l.width / a.width,
    scaleY: l.height / a.height
  };
}, _t = {
  scaleX: 1,
  scaleY: 1
}, ga = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: s,
    rects: i,
    overIndex: a
  } = e;
  const l = (t = i[n]) != null ? t : r;
  if (!l)
    return null;
  if (s === n) {
    const c = i[a];
    return c ? {
      x: 0,
      y: n < a ? c.top + c.height - (l.top + l.height) : c.top - l.top,
      ..._t
    } : null;
  }
  const d = xa(i, s, n);
  return s > n && s <= a ? {
    x: 0,
    y: -l.height - d,
    ..._t
  } : s < n && s >= a ? {
    x: 0,
    y: l.height + d,
    ..._t
  } : {
    x: 0,
    y: 0,
    ..._t
  };
};
function xa(e, t, n) {
  const r = e[t], s = e[t - 1], i = e[t + 1];
  return r ? n < t ? s ? r.top - (s.top + s.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : s ? r.top - (s.top + s.height) : 0 : 0;
}
const Yr = "Sortable", Xr = /* @__PURE__ */ re.createContext({
  activeIndex: -1,
  containerId: Yr,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Jr,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ba(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: s = Jr,
    disabled: i = !1
  } = e;
  const {
    active: a,
    dragOverlay: l,
    droppableRects: d,
    over: c,
    measureDroppableContainers: u
  } = Wr(), f = Ct(Yr, n), v = l.rect !== null, y = Z(() => r.map((C) => typeof C == "object" && "id" in C ? C.id : C), [r]), b = a != null, p = a ? y.indexOf(a.id) : -1, g = c ? y.indexOf(c.id) : -1, R = Q(y), x = !ma(y, R.current), N = g !== -1 && p === -1 || x, w = pa(i);
  Ee(() => {
    x && b && u(y);
  }, [x, y, b, u]), K(() => {
    R.current = y;
  }, [y]);
  const S = Z(
    () => ({
      activeIndex: p,
      containerId: f,
      disabled: w,
      disableTransforms: N,
      items: y,
      overIndex: g,
      useDragOverlay: v,
      sortedRects: ha(y, d),
      strategy: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, f, w.draggable, w.droppable, N, y, g, d, v, s]
  );
  return re.createElement(Xr.Provider, {
    value: S
  }, t);
}
const ya = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: s
  } = e;
  return Ln(n, r, s).indexOf(t);
}, va = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: s,
    items: i,
    newIndex: a,
    previousItems: l,
    previousContainerId: d,
    transition: c
  } = e;
  return !c || !r || l !== i && s === a ? !1 : n ? !0 : a !== s && t === d;
}, wa = {
  duration: 200,
  easing: "ease"
}, Kr = "transform", Na = /* @__PURE__ */ Je.Transition.toString({
  property: Kr,
  duration: 0,
  easing: "linear"
}), ja = {
  roleDescription: "sortable"
};
function Ca(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: s
  } = e;
  const [i, a] = z(null), l = Q(n);
  return Ee(() => {
    if (!t && n !== l.current && r.current) {
      const d = s.current;
      if (d) {
        const c = it(r.current, {
          ignoreTransform: !0
        }), u = {
          x: d.left - c.left,
          y: d.top - c.top,
          scaleX: d.width / c.width,
          scaleY: d.height / c.height
        };
        (u.x || u.y) && a(u);
      }
    }
    n !== l.current && (l.current = n);
  }, [t, n, r, s]), K(() => {
    i && a(null);
  }, [i]), i;
}
function Sa(e) {
  let {
    animateLayoutChanges: t = va,
    attributes: n,
    disabled: r,
    data: s,
    getNewIndex: i = ya,
    id: a,
    strategy: l,
    resizeObserverConfig: d,
    transition: c = wa
  } = e;
  const {
    items: u,
    containerId: f,
    activeIndex: v,
    disabled: y,
    disableTransforms: b,
    sortedRects: p,
    overIndex: g,
    useDragOverlay: R,
    strategy: x
  } = Ve(Xr), N = Ra(r, y), w = u.indexOf(a), S = Z(() => ({
    sortable: {
      containerId: f,
      index: w,
      items: u
    },
    ...s
  }), [f, s, w, u]), C = Z(() => u.slice(u.indexOf(a)), [u, a]), {
    rect: k,
    node: E,
    isOver: T,
    setNodeRef: B
  } = Vr({
    id: a,
    data: S,
    disabled: N.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: C,
      ...d
    }
  }), {
    active: U,
    activatorEvent: ee,
    activeNodeRect: A,
    attributes: $,
    setNodeRef: J,
    listeners: H,
    isDragging: j,
    over: P,
    setActivatorNodeRef: O,
    transform: h
  } = Gi({
    id: a,
    data: S,
    attributes: {
      ...ja,
      ...n
    },
    disabled: N.draggable
  }), M = _o(B, J), _ = !!U, I = _ && !b && At(v) && At(g), q = !R && j, W = q && I ? h : null, he = I ? W ?? (l ?? x)({
    rects: p,
    activeNodeRect: A,
    activeIndex: v,
    overIndex: g,
    index: w
  }) : null, X = At(v) && At(g) ? i({
    id: a,
    items: u,
    activeIndex: v,
    overIndex: g
  }) : w, se = U?.id, Y = Q({
    activeId: se,
    items: u,
    newIndex: X,
    containerId: f
  }), Pe = u !== Y.current.items, we = t({
    active: U,
    containerId: f,
    isDragging: j,
    isSorting: _,
    id: a,
    index: w,
    items: u,
    newIndex: Y.current.newIndex,
    previousItems: Y.current.items,
    previousContainerId: Y.current.containerId,
    transition: c,
    wasDragging: Y.current.activeId != null
  }), Ce = Ca({
    disabled: !we,
    index: w,
    node: E,
    rect: k
  });
  return K(() => {
    _ && Y.current.newIndex !== X && (Y.current.newIndex = X), f !== Y.current.containerId && (Y.current.containerId = f), u !== Y.current.items && (Y.current.items = u);
  }, [_, X, f, u]), K(() => {
    if (se === Y.current.activeId)
      return;
    if (se != null && Y.current.activeId == null) {
      Y.current.activeId = se;
      return;
    }
    const $e = setTimeout(() => {
      Y.current.activeId = se;
    }, 50);
    return () => clearTimeout($e);
  }, [se]), {
    active: U,
    activeIndex: v,
    attributes: $,
    data: S,
    rect: k,
    index: w,
    newIndex: X,
    items: u,
    isOver: T,
    isSorting: _,
    isDragging: j,
    listeners: H,
    node: E,
    overIndex: g,
    over: P,
    setNodeRef: M,
    setActivatorNodeRef: O,
    setDroppableNodeRef: B,
    setDraggableNodeRef: J,
    transform: Ce ?? he,
    transition: Se()
  };
  function Se() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ce || // Or to prevent items jumping to back to their "new" position when items change
      Pe && Y.current.newIndex === w
    )
      return Na;
    if (!(q && !Yt(ee) || !c) && (_ || we))
      return Je.Transition.toString({
        ...c,
        property: Kr
      });
  }
}
function Ra(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (r = e?.droppable) != null ? r : t.droppable
  };
}
G.Down, G.Right, G.Up, G.Left;
const Ea = ({
  config: e,
  filteredAndSortedData: t,
  hasButtons: n,
  visibleButtons: r,
  moreButtons: s,
  showExtraColumn: i,
  selectedRows: a,
  openDropdown: l,
  handleSelectRow: d,
  handleButtonClick: c,
  toggleDropdown: u,
  setOpenDropdown: f,
  getIconComponent: v,
  kanbanGroupBy: y
}) => {
  console.log({ kanbanGroupBy: y });
  const { kanban: b, datagrid: p } = e, g = Yo(Jo(Mn)), R = Z(() => !y || !t.length ? {} : t.reduce((A, $) => {
    const J = $[y] || "Unassigned";
    return A[J] || (A[J] = []), A[J].push($), A;
  }, {}), [t, y]), [x, N] = z(R), [w, S] = z(null), [C, k] = z(null);
  K(() => {
    N(R);
  }, [R]);
  const E = (A) => {
    const $ = A[b?.colmap?.color], J = b?.colormap?.[$];
    return {
      card_green: "bg-green-50 border-green-200",
      card_red: "bg-red-50 border-red-200",
      card_blue: "bg-blue-50 border-blue-200",
      card_yellow: "bg-yellow-50 border-yellow-200",
      card_purple: "bg-purple-50 border-purple-200",
      card_indigo: "bg-indigo-50 border-indigo-200",
      card_pink: "bg-pink-50 border-pink-200",
      card_gray: "bg-gray-50 border-gray-200"
    }[J] || "bg-white border-gray-200";
  }, T = (A, $) => A[b?.colmap?.[$]] || A[$] || "", B = (A) => {
    const { active: $, over: J } = A;
    if (k(null), !J || !w) return;
    const H = Object.keys(x).find(
      (P) => x[P].some((O) => O.id === w.id)
    ), j = J.data.current?.columnId || J.id;
    if (!(!H || !j)) {
      if (H === j) {
        const P = x[H].findIndex((h) => h.id === $.id), O = x[j].findIndex((h) => h.id === J.id);
        P !== O && O !== -1 && N((h) => ({
          ...h,
          [H]: Ln(h[H], P, O)
        }));
      } else {
        const P = [...x[H]].filter((M) => M.id !== w.id), O = [...x[j]], h = O.findIndex((M) => M.id === J.id);
        O.splice(h >= 0 ? h : O.length, 0, w), N((M) => ({
          ...M,
          [H]: P,
          [j]: O
        }));
      }
      S(null);
    }
  }, U = ({ row: A, columnId: $ }) => {
    const { attributes: J, listeners: H, setNodeRef: j, transform: P, transition: O, isDragging: h } = Sa({
      id: A.id,
      data: { columnId: $ }
    }), [M, _] = z(null), I = {
      transform: Je.Transform.toString(P),
      transition: O,
      zIndex: h ? 50 : "auto"
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: j,
        style: I,
        className: `${E(A)}  group relative border rounded-lg p-1 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 space-y-2`,
        onClick: () => S(A),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-start gap-1", children: [
            /* @__PURE__ */ o.jsx(
              "div",
              {
                ...J,
                ...H,
                className: "cursor-grab active:cursor-grabbing",
                children: T(A, "avatar") ? /* @__PURE__ */ o.jsx(
                  "img",
                  {
                    className: "h-8 w-8 rounded-full object-cover",
                    src: T(A, "avatar"),
                    alt: "Avatar"
                  }
                ) : /* @__PURE__ */ o.jsx("div", { className: "h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center", children: /* @__PURE__ */ o.jsx(En, { className: "h-4 w-4 text-gray-600" }) })
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "flex-1 min-w-0 cursor-grab active:cursor-grabbing",
                ...J,
                ...H,
                children: [
                  /* @__PURE__ */ o.jsx("h4", { className: "text-sm font-medium text-gray-900 truncate", children: T(A, "title") || A.name || "Untitled" }),
                  T(A, "descs") && /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500 line-clamp-2 h-[2rem]", children: T(A, "descs") })
                ]
              }
            ),
            T(A, "counter") && /* @__PURE__ */ o.jsx("div", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: T(A, "counter") })
          ] }),
          T(A, "category") && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [
            /* @__PURE__ */ o.jsx(jo, { className: "w-3 h-3 mr-1" }),
            T(A, "category")
          ] }) }),
          T(A, "due_date") && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center text-xs text-gray-500", children: [
            /* @__PURE__ */ o.jsx(nt, { className: "w-3 h-3 mr-1" }),
            new Date(T(A, "due_date")).toLocaleDateString()
          ] }),
          n && /* @__PURE__ */ o.jsx("div", { className: "px-3 py-1 bg-opacity-50 border-t border-gray-100 rounded-b-lg", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex items-center", children: r.slice(0, 5).map(([q, W]) => /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: (V) => {
                  V.stopPropagation(), c(q, W, A);
                },
                className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                title: W.label,
                children: v(W.icon)
              },
              q
            )) }),
            (r.length > 5 || s.length > 0) && /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: (q) => {
                    q.stopPropagation(), u(A.id);
                  },
                  className: "inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500",
                  children: /* @__PURE__ */ o.jsx(Sr, { className: "w-3 h-3" })
                }
              ),
              l === A.id && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50", children: /* @__PURE__ */ o.jsxs("div", { className: "py-1", children: [
                r.slice(5).map(([q, W]) => /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: (V) => {
                      V.stopPropagation(), c(q, W, A), f(null);
                    },
                    className: "flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                    title: W.label,
                    children: [
                      /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: v(W.icon) }),
                      /* @__PURE__ */ o.jsx("span", { className: "truncate", children: W.label })
                    ]
                  },
                  q
                )),
                s.map(([q, W]) => /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: (V) => {
                      V.stopPropagation(), c(q, W, A), f(null);
                    },
                    className: "flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                    title: W.label,
                    children: [
                      /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: v(W.icon) }),
                      /* @__PURE__ */ o.jsx("span", { className: "truncate", children: W.label })
                    ]
                  },
                  q
                ))
              ] }) })
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => {
                  const q = Do(A, T);
                  console.log({ content: q }), kn(q, `${A.id}-${$}`, _);
                },
                className: "inline-flex items-center absolute cursor-pointer right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-900",
                title: "Copy card content",
                children: M === `${A.id}-${$}` ? /* @__PURE__ */ o.jsx("span", { className: "text-xs text-gray-600", children: "Copied!" }) : /* @__PURE__ */ o.jsx(Rn, { className: "w-4 h-4 text-gray-600" })
              }
            )
          ] }) })
        ]
      }
    );
  }, ee = ({ id: A, cards: $ }) => {
    const { setNodeRef: J } = Vr({ id: A });
    return /* @__PURE__ */ o.jsxs("div", { ref: J, className: "w-78 flex-shrink-0", children: [
      /* @__PURE__ */ o.jsx("div", { className: "bg-muted px-2 py-1 border-b border-gray-200 rounded-t-lg", children: /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ o.jsx("h3", { className: "font-medium text-secondary truncate", children: A }),
        /* @__PURE__ */ o.jsx("span", { className: "text-xs bg-gray-200 rounded-full px-2 py-1", children: $.length })
      ] }) }),
      /* @__PURE__ */ o.jsx("div", { className: "bg-gray-50 p-2 thin-scrollbar space-y-2 rounded-b-lg min-h-96 max-h-96 overflow-y-auto", children: /* @__PURE__ */ o.jsx(ba, { items: $.map((H) => H.id), strategy: ga, children: $.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "min-h-[50px] rounded border border-dashed border-gray-300 flex items-center justify-center text-gray-400", children: "Drop here" }) : $.map((H) => /* @__PURE__ */ o.jsx(U, { row: H, columnId: A }, H.id)) }) })
    ] });
  };
  return y ? /* @__PURE__ */ o.jsx(
    Yi,
    {
      sensors: g,
      collisionDetection: ei,
      onDragEnd: B,
      onDragStart: ({ active: A }) => {
        const $ = t.find((J) => J.id === A.id);
        S($);
      },
      onDragOver: ({ over: A }) => {
        k(A?.id || null);
      },
      children: /* @__PURE__ */ o.jsxs("div", { className: "p-2 overflow-hidden", children: [
        /* @__PURE__ */ o.jsx("div", { className: "flex gap-2  overflow-x-auto pb-4", children: Object.keys(x).map((A) => /* @__PURE__ */ o.jsx(ee, { id: A, cards: x[A] }, A)) }),
        /* @__PURE__ */ o.jsx(fa, { children: w && /* @__PURE__ */ o.jsx("div", { className: `${E(w)} border rounded-lg p-3 shadow-md w-72`, children: /* @__PURE__ */ o.jsx("div", { className: "text-sm font-medium truncate", children: T(w, "title") || w.name || "Untitled" }) }) })
      ] })
    }
  ) : /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center h-64 text-gray-500", children: /* @__PURE__ */ o.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ o.jsx("div", { className: "text-lg font-medium mb-2", children: "Select a column to group by" }),
    /* @__PURE__ */ o.jsx("div", { className: "text-sm", children: "Choose a grouping option from the toolbar above" })
  ] }) });
}, ka = ({
  config: e,
  filteredAndSortedData: t,
  hasButtons: n,
  visibleButtons: r,
  moreButtons: s,
  showExtraColumn: i,
  selectedRows: a,
  openDropdown: l,
  handleSelectRow: d,
  handleButtonClick: c,
  toggleDropdown: u,
  setOpenDropdown: f,
  getIconComponent: v
}) => {
  const [y, b] = z(/* @__PURE__ */ new Date()), [p, g] = z(null), { calendar: R } = e, x = /* @__PURE__ */ new Date(), N = y.getMonth(), w = y.getFullYear(), S = new Date(w, N, 1), k = new Date(w, N + 1, 0).getDate(), E = S.getDay(), T = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], B = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  e?.date_col;
  function U(j) {
    const P = j?.calendar?.date_col || {}, O = j?.rows || t || [], h = {}, M = j?.calendar?.colmap?.title;
    return O.forEach((_) => {
      Object.entries(P).forEach(([I, q]) => {
        const W = _[I];
        if (!W) return;
        const V = new Date(W);
        if (isNaN(V.getTime())) return;
        const he = `${V.getFullYear()}-${String(V.getMonth() + 1).padStart(2, "0")}-${String(V.getDate()).padStart(2, "0")}`, X = {
          id: `${_.id}-${I}`,
          title: `${_[M] || "Unnamed"}`,
          eventType: _[I],
          eventColor: q,
          start: V.toISOString(),
          description: _.userid || "",
          backgroundColor: q,
          borderColor: q,
          textColor: "#fff",
          extendedProps: {
            ..._,
            sourceField: I
          }
        };
        h[he] || (h[he] = []), h[he].push(X);
      });
    }), console.log({ calendarEventsMap: h }), h;
  }
  const ee = Z(() => U(e), [e]), A = (j) => {
    b((P) => {
      const O = new Date(P);
      return O.setMonth(P.getMonth() + j), O;
    });
  }, J = (() => {
    const j = [], O = new Date(w, N - 1, 0).getDate();
    for (let _ = E - 1; _ >= 0; _--) {
      const I = O - _;
      j.push({
        day: I,
        isCurrentMonth: !1,
        isToday: !1,
        date: new Date(w, N - 1, I),
        events: []
      });
    }
    for (let _ = 1; _ <= k; _++) {
      const I = new Date(w, N, _), q = `${w}-${String(N + 1).padStart(2, "0")}-${String(_).padStart(2, "0")}`, W = I.toDateString() === x.toDateString();
      j.push({
        day: _,
        isCurrentMonth: !0,
        isToday: W,
        date: I,
        events: ee[q] || []
      });
    }
    const M = 42 - j.length;
    for (let _ = 1; _ <= M; _++)
      j.push({
        day: _,
        isCurrentMonth: !1,
        isToday: !1,
        date: new Date(w, N + 1, _),
        events: []
      });
    return j;
  })(), H = p ? ee[`${p.getFullYear()}-${String(p.getMonth() + 1).padStart(2, "0")}-${String(p.getDate()).padStart(2, "0")}`] || [] : [];
  return /* @__PURE__ */ o.jsxs("div", { className: "h-full flex flex-col bg-white", children: [
    /* @__PURE__ */ o.jsx("div", { className: "bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200/60 backdrop-blur-sm", children: /* @__PURE__ */ o.jsxs("div", { className: "px-3 py-2", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ o.jsx("div", { className: "flex items-center space-x-6", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center bg-white/70 backdrop-blur-sm rounded-lg py-1 shadow-sm border border-gray-200/50", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => A(-1),
              className: "p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-900",
              children: /* @__PURE__ */ o.jsx(jr, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ o.jsx(
                "select",
                {
                  value: N,
                  onChange: (j) => b(new Date(w, parseInt(j.target.value), 1)),
                  className: "appearance-none outline-0 bg-transparent text-action text-md font-semibold pr-6  cursor-pointer transition-colors",
                  children: T.map((j, P) => /* @__PURE__ */ o.jsx("option", { value: P, className: "bg-white text-action", children: j }, j))
                }
              ),
              /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "w-px h-6 bg-gray-300 " }),
            /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ o.jsx(
                "select",
                {
                  value: w,
                  onChange: (j) => b(new Date(parseInt(j.target.value), N, 1)),
                  className: "appearance-none bg-transparent text-md font-semibold text-action pr-6 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors",
                  children: Array.from({ length: 10 }, (j, P) => {
                    const O = (/* @__PURE__ */ new Date()).getFullYear() - 5 + P;
                    return /* @__PURE__ */ o.jsx("option", { value: O, className: "bg-white text-action", children: O }, O);
                  })
                }
              ),
              /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => A(1),
              className: "p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-900",
              children: /* @__PURE__ */ o.jsx(Cr, { className: "w-4 h-4" })
            }
          )
        ] }) }),
        /* @__PURE__ */ o.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => b(/* @__PURE__ */ new Date()),
            className: "inline-flex cursor-pointer items-center px-3 py-2 bg-action text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md",
            children: [
              /* @__PURE__ */ o.jsx(nt, { className: "w-4 h-4 mr-2" }),
              "Current Month"
            ]
          }
        ) })
      ] }),
      R?.notes_user && R?.date_col && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Event Types:" }),
          /* @__PURE__ */ o.jsx("div", { className: "flex items-center space-x-3", children: Object.entries(R.date_col).map(([j, P]) => /* @__PURE__ */ o.jsxs("div", { className: "flex items-center space-x-1 group", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full shadow-sm border-2 border-white group-hover:scale-110 transition-transform duration-200",
                  style: { backgroundColor: P }
                }
              ),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "absolute inset-0 w-3 h-3 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-200",
                  style: { backgroundColor: P }
                }
              )
            ] }),
            /* @__PURE__ */ o.jsx("span", { className: "text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors capitalize", children: j.replace(/_/g, " ") })
          ] }, j)) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "text-sm text-gray-500", children: /* @__PURE__ */ o.jsx("span", { className: "font-medium", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric"
        }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex-1 p-4", children: [
        /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-7 gap-px mb-2", children: B.map((j) => /* @__PURE__ */ o.jsx("div", { className: "p-2 text-center text-sm font-medium text-gray-500 bg-gray-50", children: j }, j)) }),
        /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden", children: J.map((j, P) => /* @__PURE__ */ o.jsxs(
          "div",
          {
            onClick: () => {
              j?.isCurrentMonth && g(j?.date);
            },
            className: `
                  min-h-24 p-2 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative
                  ${j?.isCurrentMonth ? "" : "text-gray-400 bg-gray-50"}
                  ${j?.isToday ? "bg-blue-50 border-2 border-blue-200" : ""}
                  ${p && j?.date?.toDateString() === p?.toDateString() ? "ring-2 ring-blue-500 ring-inset" : ""}
                `,
            children: [
              /* @__PURE__ */ o.jsx("div", { className: `
                  text-sm font-medium mb-1
                  ${j?.isToday ? "text-blue-600" : j?.isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                `, children: j?.day }),
              /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
                j?.events.slice(0, 3).map((O, h) => /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: "text-xs p-1 rounded text-white truncate cursor-pointer hover:opacity-80",
                    style: {
                      backgroundColor: O?.eventColor,
                      maxWidth: "100%"
                    },
                    title: `${O?.title} - ${O?.eventType?.replace(/_/g, " ")}`,
                    children: O?.title
                  },
                  h
                )),
                j?.events?.length > 3 && /* @__PURE__ */ o.jsxs("div", { className: "text-xs text-gray-500 text-center", children: [
                  "+",
                  j?.events?.length - 3,
                  " more"
                ] })
              ] })
            ]
          },
          P
        )) })
      ] }),
      p && /* @__PURE__ */ o.jsxs("div", { className: "w-80 border-l border-gray-200 bg-gray-50 flex flex-col", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "p-4 border-b border-gray-200 bg-white", children: [
          /* @__PURE__ */ o.jsxs("h3", { className: "font-medium text-gray-900 flex items-center", children: [
            /* @__PURE__ */ o.jsx(nt, { className: "w-4 h-4 mr-2" }),
            p?.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] }),
          /* @__PURE__ */ o.jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
            H?.length,
            " event",
            H?.length !== 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-3 max-h-screen overflow-x-hidden", children: H?.length > 0 ? H?.map((j, P) => /* @__PURE__ */ o.jsxs(
          "div",
          {
            onClick: () => {
              console.log(j);
            },
            className: "bg-white rounded-lg border border-gray-200 p-3 hover:shadow-sm transition-shadow",
            children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "flex items-start space-x-2 flex-1", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ o.jsx("div", { className: "h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center", children: /* @__PURE__ */ o.jsx(En, { className: "h-4 w-4 text-gray-600" }) }) }),
                  /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ o.jsx("h4", { className: "text-sm font-medium text-gray-900 truncate", children: j?.title }),
                    j?.description && /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500 truncate", children: j?.description })
                  ] })
                ] }),
                i === "checkbox" && /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: a.has(j?.id),
                    onChange: () => d(j?.id),
                    className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "mb-2", children: /* @__PURE__ */ o.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white",
                  style: { backgroundColor: j?.eventColor },
                  children: [
                    /* @__PURE__ */ o.jsx(Ys, { className: "w-3 h-3 mr-1" }),
                    j?.eventType?.replace(/_/g, " ").replace(/\b\w/g, (O) => O.toUpperCase())
                  ]
                }
              ) }),
              n && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-gray-100", children: [
                /* @__PURE__ */ o.jsx("div", { className: "flex items-center space-x-1", children: r.slice(0, 2).map(([O, h]) => /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    onClick: () => c(O, h, j),
                    className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                    title: h?.label,
                    children: v(h?.icon)
                  },
                  O
                )) }),
                (r?.length > 2 || s?.length > 0) && /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      onClick: () => u(j?.id),
                      className: "inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action",
                      children: /* @__PURE__ */ o.jsx("svg", { className: "w-3 h-3", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ o.jsx("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }) })
                    }
                  ),
                  l === j?.id && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50", children: /* @__PURE__ */ o.jsx("div", { className: "py-1", children: r?.slice(2)?.concat(s)?.map(([O, h]) => /* @__PURE__ */ o.jsxs(
                    "button",
                    {
                      onClick: () => {
                        c(O, h, j), f(null);
                      },
                      className: "flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                      title: h?.label,
                      children: [
                        /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: v(h?.icon) }),
                        /* @__PURE__ */ o.jsx("span", { className: "truncate", children: h?.label })
                      ]
                    },
                    O
                  )) }) })
                ] })
              ] })
            ]
          },
          P
        )) : /* @__PURE__ */ o.jsxs("div", { className: "text-center py-8 text-gray-400", children: [
          /* @__PURE__ */ o.jsx(nt, { className: "w-8 h-8 mx-auto mb-2" }),
          /* @__PURE__ */ o.jsx("p", { className: "text-sm", children: "No events on this date" })
        ] }) })
      ] })
    ] })
  ] });
};
function Gr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Da } = Object.prototype, { getPrototypeOf: In } = Object, { iterator: Gt, toStringTag: Zr } = Symbol, Zt = /* @__PURE__ */ ((e) => (t) => {
  const n = Da.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), De = (e) => (e = e.toLowerCase(), (t) => Zt(t) === e), Qt = (e) => (t) => typeof t === e, { isArray: at } = Array, vt = Qt("undefined");
function Rt(e) {
  return e !== null && !vt(e) && e.constructor !== null && !vt(e.constructor) && ge(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qr = De("ArrayBuffer");
function Ta(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qr(e.buffer), t;
}
const Oa = Qt("string"), ge = Qt("function"), es = Qt("number"), Et = (e) => e !== null && typeof e == "object", Aa = (e) => e === !0 || e === !1, Pt = (e) => {
  if (Zt(e) !== "object")
    return !1;
  const t = In(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Zr in e) && !(Gt in e);
}, _a = (e) => {
  if (!Et(e) || Rt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ma = De("Date"), Pa = De("File"), La = De("Blob"), Ia = De("FileList"), $a = (e) => Et(e) && ge(e.pipe), Fa = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ge(e.append) && ((t = Zt(e)) === "formdata" || // detect form-data instance
  t === "object" && ge(e.toString) && e.toString() === "[object FormData]"));
}, Ua = De("URLSearchParams"), [za, Ba, qa, Ha] = ["ReadableStream", "Request", "Response", "Headers"].map(De), Wa = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), at(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Rt(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let l;
    for (r = 0; r < a; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function ts(e, t) {
  if (Rt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ke = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ns = (e) => !vt(e) && e !== Ke;
function yn() {
  const { caseless: e } = ns(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && ts(t, s) || s;
    Pt(t[i]) && Pt(r) ? t[i] = yn(t[i], r) : Pt(r) ? t[i] = yn({}, r) : at(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && kt(arguments[r], n);
  return t;
}
const Va = (e, t, n, { allOwnKeys: r } = {}) => (kt(t, (s, i) => {
  n && ge(s) ? e[i] = Gr(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), Ja = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ya = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xa = (e, t, n, r) => {
  let s, i, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      a = s[i], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && In(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ka = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ga = (e) => {
  if (!e) return null;
  if (at(e)) return e;
  let t = e.length;
  if (!es(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Za = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && In(Uint8Array)), Qa = (e, t) => {
  const r = (e && e[Gt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, el = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, tl = De("HTMLFormElement"), nl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), cr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rl = De("RegExp"), rs = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  kt(n, (s, i) => {
    let a;
    (a = t(s, i, e)) !== !1 && (r[i] = a || s);
  }), Object.defineProperties(e, r);
}, sl = (e) => {
  rs(e, (t, n) => {
    if (ge(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ge(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ol = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return at(e) ? r(e) : r(String(e).split(t)), n;
}, il = () => {
}, al = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ll(e) {
  return !!(e && ge(e.append) && e[Zr] === "FormData" && e[Gt]);
}
const cl = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Et(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Rt(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = at(r) ? [] : {};
        return kt(r, (a, l) => {
          const d = n(a, s + 1);
          !vt(d) && (i[l] = d);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, dl = De("AsyncFunction"), ul = (e) => e && (Et(e) || ge(e)) && ge(e.then) && ge(e.catch), ss = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ke.addEventListener("message", ({ source: s, data: i }) => {
  s === Ke && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Ke.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ge(Ke.postMessage)
), fl = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ke) : typeof process < "u" && process.nextTick || ss, hl = (e) => e != null && ge(e[Gt]), m = {
  isArray: at,
  isArrayBuffer: Qr,
  isBuffer: Rt,
  isFormData: Fa,
  isArrayBufferView: Ta,
  isString: Oa,
  isNumber: es,
  isBoolean: Aa,
  isObject: Et,
  isPlainObject: Pt,
  isEmptyObject: _a,
  isReadableStream: za,
  isRequest: Ba,
  isResponse: qa,
  isHeaders: Ha,
  isUndefined: vt,
  isDate: Ma,
  isFile: Pa,
  isBlob: La,
  isRegExp: rl,
  isFunction: ge,
  isStream: $a,
  isURLSearchParams: Ua,
  isTypedArray: Za,
  isFileList: Ia,
  forEach: kt,
  merge: yn,
  extend: Va,
  trim: Wa,
  stripBOM: Ja,
  inherits: Ya,
  toFlatObject: Xa,
  kindOf: Zt,
  kindOfTest: De,
  endsWith: Ka,
  toArray: Ga,
  forEachEntry: Qa,
  matchAll: el,
  isHTMLForm: tl,
  hasOwnProperty: cr,
  hasOwnProp: cr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rs,
  freezeMethods: sl,
  toObjectSet: ol,
  toCamelCase: nl,
  noop: il,
  toFiniteNumber: al,
  findKey: ts,
  global: Ke,
  isContextDefined: ns,
  isSpecCompliantForm: ll,
  toJSONObject: cl,
  isAsyncFn: dl,
  isThenable: ul,
  setImmediate: ss,
  asap: fl,
  isIterable: hl
};
function F(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
m.inherits(F, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const os = F.prototype, is = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  is[e] = { value: e };
});
Object.defineProperties(F, is);
Object.defineProperty(os, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, i) => {
  const a = Object.create(os);
  return m.toFlatObject(e, a, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), F.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const ml = null;
function vn(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function as(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function dr(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = as(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function pl(e) {
  return m.isArray(e) && !e.some(vn);
}
const gl = m.toFlatObject(m, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function en(e, t, n) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = m.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, g) {
    return !m.isUndefined(g[p]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, a = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(t);
  if (!m.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(b) {
    if (b === null) return "";
    if (m.isDate(b))
      return b.toISOString();
    if (m.isBoolean(b))
      return b.toString();
    if (!d && m.isBlob(b))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(b) || m.isTypedArray(b) ? d && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function u(b, p, g) {
    let R = b;
    if (b && !g && typeof b == "object") {
      if (m.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), b = JSON.stringify(b);
      else if (m.isArray(b) && pl(b) || (m.isFileList(b) || m.endsWith(p, "[]")) && (R = m.toArray(b)))
        return p = as(p), R.forEach(function(N, w) {
          !(m.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? dr([p], w, i) : a === null ? p : p + "[]",
            c(N)
          );
        }), !1;
    }
    return vn(b) ? !0 : (t.append(dr(g, p, i), c(b)), !1);
  }
  const f = [], v = Object.assign(gl, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: vn
  });
  function y(b, p) {
    if (!m.isUndefined(b)) {
      if (f.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(b), m.forEach(b, function(R, x) {
        (!(m.isUndefined(R) || R === null) && s.call(
          t,
          R,
          m.isString(x) ? x.trim() : x,
          p,
          v
        )) === !0 && y(R, p ? p.concat(x) : [x]);
      }), f.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ur(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function $n(e, t) {
  this._pairs = [], e && en(e, this, t);
}
const ls = $n.prototype;
ls.append = function(t, n) {
  this._pairs.push([t, n]);
};
ls.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ur);
  } : ur;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function xl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function cs(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || xl;
  m.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = m.isURLSearchParams(t) ? t.toString() : new $n(t, n).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class fr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    m.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ds = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bl = typeof URLSearchParams < "u" ? URLSearchParams : $n, yl = typeof FormData < "u" ? FormData : null, vl = typeof Blob < "u" ? Blob : null, wl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bl,
    FormData: yl,
    Blob: vl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fn = typeof window < "u" && typeof document < "u", wn = typeof navigator == "object" && navigator || void 0, Nl = Fn && (!wn || ["ReactNative", "NativeScript", "NS"].indexOf(wn.product) < 0), jl = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cl = Fn && window.location.href || "http://localhost", Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fn,
  hasStandardBrowserEnv: Nl,
  hasStandardBrowserWebWorkerEnv: jl,
  navigator: wn,
  origin: Cl
}, Symbol.toStringTag, { value: "Module" })), ue = {
  ...Sl,
  ...wl
};
function Rl(e, t) {
  return en(e, new ue.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return ue.isNode && m.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function El(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function kl(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function us(e) {
  function t(n, r, s, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), d = i >= n.length;
    return a = !a && m.isArray(s) ? s.length : a, d ? (m.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !l) : ((!s[a] || !m.isObject(s[a])) && (s[a] = []), t(n, r, s[a], i) && m.isArray(s[a]) && (s[a] = kl(s[a])), !l);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return m.forEachEntry(e, (r, s) => {
      t(El(r), s, n, 0);
    }), n;
  }
  return null;
}
function Dl(e, t, n) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Dt = {
  transitional: ds,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = m.isObject(t);
    if (i && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t))
      return s ? JSON.stringify(us(t)) : t;
    if (m.isArrayBuffer(t) || m.isBuffer(t) || m.isStream(t) || m.isFile(t) || m.isBlob(t) || m.isReadableStream(t))
      return t;
    if (m.isArrayBufferView(t))
      return t.buffer;
    if (m.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Rl(t, this.formSerializer).toString();
      if ((l = m.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return en(
          l ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Dl(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Dt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (m.isResponse(t) || m.isReadableStream(t))
      return t;
    if (t && m.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ue.classes.FormData,
    Blob: ue.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Dt.headers[e] = {};
});
const Tl = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ol = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && Tl[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, hr = Symbol("internals");
function mt(e) {
  return e && String(e).trim().toLowerCase();
}
function Lt(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(Lt) : String(e);
}
function Al(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const _l = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fn(e, t, n, r, s) {
  if (m.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!m.isString(t)) {
    if (m.isString(r))
      return t.indexOf(r) !== -1;
    if (m.isRegExp(r))
      return r.test(t);
  }
}
function Ml(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Pl(e, t) {
  const n = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, a) {
        return this[r].call(this, t, s, i, a);
      },
      configurable: !0
    });
  });
}
let xe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, d, c) {
      const u = mt(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = m.findKey(s, u);
      (!f || s[f] === void 0 || c === !0 || c === void 0 && s[f] !== !1) && (s[f || d] = Lt(l));
    }
    const a = (l, d) => m.forEach(l, (c, u) => i(c, u, d));
    if (m.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (m.isString(t) && (t = t.trim()) && !_l(t))
      a(Ol(t), n);
    else if (m.isObject(t) && m.isIterable(t)) {
      let l = {}, d, c;
      for (const u of t) {
        if (!m.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = u[0]] = (d = l[c]) ? m.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      a(l, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = mt(t), t) {
      const r = m.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Al(s);
        if (m.isFunction(n))
          return n.call(this, s, r);
        if (m.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = mt(t), t) {
      const r = m.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || fn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(a) {
      if (a = mt(a), a) {
        const l = m.findKey(r, a);
        l && (!n || fn(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return m.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || fn(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return m.forEach(this, (s, i) => {
      const a = m.findKey(r, i);
      if (a) {
        n[a] = Lt(s), delete n[i];
        return;
      }
      const l = t ? Ml(i) : String(i).trim();
      l !== i && delete n[i], n[l] = Lt(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && m.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[hr] = this[hr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(a) {
      const l = mt(a);
      r[l] || (Pl(s, a), r[l] = !0);
    }
    return m.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
xe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
m.freezeMethods(xe);
function hn(e, t) {
  const n = this || Dt, r = t || n, s = xe.from(r.headers);
  let i = r.data;
  return m.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function fs(e) {
  return !!(e && e.__CANCEL__);
}
function lt(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError";
}
m.inherits(lt, F, {
  __CANCEL__: !0
});
function hs(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ll(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Il(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), u = r[i];
    a || (a = c), n[s] = d, r[s] = c;
    let f = i, v = 0;
    for (; f !== s; )
      v += n[f++], f = f % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), c - a < t)
      return;
    const y = u && c - u;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function $l(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const a = (c, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - n;
    f >= r ? a(c, u) : (s = c, i || (i = setTimeout(() => {
      i = null, a(s);
    }, r - f)));
  }, () => s && a(s)];
}
const Ht = (e, t, n = 3) => {
  let r = 0;
  const s = Il(50, 250);
  return $l((i) => {
    const a = i.loaded, l = i.lengthComputable ? i.total : void 0, d = a - r, c = s(d), u = a <= l;
    r = a;
    const f = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: d,
      rate: c || void 0,
      estimated: c && l && u ? (l - a) / c : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, mr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, pr = (e) => (...t) => m.asap(() => e(...t)), Fl = ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ue.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ue.origin),
  ue.navigator && /(msie|trident)/i.test(ue.navigator.userAgent)
) : () => !0, Ul = ue.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      m.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), m.isString(r) && a.push("path=" + r), m.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function zl(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Bl(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ms(e, t, n) {
  let r = !zl(t);
  return e && (r || n == !1) ? Bl(e, t) : t;
}
const gr = (e) => e instanceof xe ? { ...e } : e;
function Ze(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, f, v) {
    return m.isPlainObject(c) && m.isPlainObject(u) ? m.merge.call({ caseless: v }, c, u) : m.isPlainObject(u) ? m.merge({}, u) : m.isArray(u) ? u.slice() : u;
  }
  function s(c, u, f, v) {
    if (m.isUndefined(u)) {
      if (!m.isUndefined(c))
        return r(void 0, c, f, v);
    } else return r(c, u, f, v);
  }
  function i(c, u) {
    if (!m.isUndefined(u))
      return r(void 0, u);
  }
  function a(c, u) {
    if (m.isUndefined(u)) {
      if (!m.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, f) {
    if (f in t)
      return r(c, u);
    if (f in e)
      return r(void 0, c);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (c, u, f) => s(gr(c), gr(u), f, !0)
  };
  return m.forEach(Object.keys({ ...e, ...t }), function(u) {
    const f = d[u] || s, v = f(e[u], t[u], u);
    m.isUndefined(v) && f !== l || (n[u] = v);
  }), n;
}
const ps = (e) => {
  const t = Ze({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: a, auth: l } = t;
  t.headers = a = xe.from(a), t.url = cs(ms(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let d;
  if (m.isFormData(n)) {
    if (ue.hasStandardBrowserEnv || ue.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((d = a.getContentType()) !== !1) {
      const [c, ...u] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      a.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ue.hasStandardBrowserEnv && (r && m.isFunction(r) && (r = r(t)), r || r !== !1 && Fl(t.url))) {
    const c = s && i && Ul.read(i);
    c && a.set(s, c);
  }
  return t;
}, ql = typeof XMLHttpRequest < "u", Hl = ql && function(e) {
  return new Promise(function(n, r) {
    const s = ps(e);
    let i = s.data;
    const a = xe.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: c } = s, u, f, v, y, b;
    function p() {
      y && y(), b && b(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(s.method.toUpperCase(), s.url, !0), g.timeout = s.timeout;
    function R() {
      if (!g)
        return;
      const N = xe.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: N,
        config: e,
        request: g
      };
      hs(function(k) {
        n(k), p();
      }, function(k) {
        r(k), p();
      }, S), g = null;
    }
    "onloadend" in g ? g.onloadend = R : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, g.onabort = function() {
      g && (r(new F("Request aborted", F.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let w = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const S = s.transitional || ds;
      s.timeoutErrorMessage && (w = s.timeoutErrorMessage), r(new F(
        w,
        S.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in g && m.forEach(a.toJSON(), function(w, S) {
      g.setRequestHeader(S, w);
    }), m.isUndefined(s.withCredentials) || (g.withCredentials = !!s.withCredentials), l && l !== "json" && (g.responseType = s.responseType), c && ([v, b] = Ht(c, !0), g.addEventListener("progress", v)), d && g.upload && ([f, y] = Ht(d), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (u = (N) => {
      g && (r(!N || N.type ? new lt(null, e, g) : N), g.abort(), g = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const x = Ll(s.url);
    if (x && ue.protocols.indexOf(x) === -1) {
      r(new F("Unsupported protocol " + x + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, Wl = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(c) {
      if (!s) {
        s = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof F ? u : new lt(u instanceof Error ? u.message : u));
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => m.asap(l), d;
  }
}, Vl = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Jl = async function* (e, t) {
  for await (const n of Yl(e))
    yield* Vl(n, t);
}, Yl = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, xr = (e, t, n, r) => {
  const s = Jl(e, t);
  let i = 0, a, l = (d) => {
    a || (a = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          l(), d.close();
          return;
        }
        let f = u.byteLength;
        if (n) {
          let v = i += f;
          n(v);
        }
        d.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(d) {
      return l(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, tn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gs = tn && typeof ReadableStream == "function", Xl = tn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), xs = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Kl = gs && xs(() => {
  let e = !1;
  const t = new Request(ue.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), br = 64 * 1024, Nn = gs && xs(() => m.isReadableStream(new Response("").body)), Wt = {
  stream: Nn && ((e) => e.body)
};
tn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Wt[t] && (Wt[t] = m.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new F(`Response type '${t}' is not supported`, F.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Gl = async (e) => {
  if (e == null)
    return 0;
  if (m.isBlob(e))
    return e.size;
  if (m.isSpecCompliantForm(e))
    return (await new Request(ue.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (m.isArrayBufferView(e) || m.isArrayBuffer(e))
    return e.byteLength;
  if (m.isURLSearchParams(e) && (e = e + ""), m.isString(e))
    return (await Xl(e)).byteLength;
}, Zl = async (e, t) => {
  const n = m.toFiniteNumber(e.getContentLength());
  return n ?? Gl(t);
}, Ql = tn && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: i,
    timeout: a,
    onDownloadProgress: l,
    onUploadProgress: d,
    responseType: c,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: v
  } = ps(e);
  c = c ? (c + "").toLowerCase() : "text";
  let y = Wl([s, i && i.toAbortSignal()], a), b;
  const p = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let g;
  try {
    if (d && Kl && n !== "get" && n !== "head" && (g = await Zl(u, r)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (m.isFormData(r) && (C = S.headers.get("content-type")) && u.setContentType(C), S.body) {
        const [k, E] = mr(
          g,
          Ht(pr(d))
        );
        r = xr(S.body, br, k, E);
      }
    }
    m.isString(f) || (f = f ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    b = new Request(t, {
      ...v,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: R ? f : void 0
    });
    let x = await fetch(b, v);
    const N = Nn && (c === "stream" || c === "response");
    if (Nn && (l || N && p)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((T) => {
        S[T] = x[T];
      });
      const C = m.toFiniteNumber(x.headers.get("content-length")), [k, E] = l && mr(
        C,
        Ht(pr(l), !0)
      ) || [];
      x = new Response(
        xr(x.body, br, k, () => {
          E && E(), p && p();
        }),
        S
      );
    }
    c = c || "text";
    let w = await Wt[m.findKey(Wt, c) || "text"](x, e);
    return !N && p && p(), await new Promise((S, C) => {
      hs(S, C, {
        data: w,
        headers: xe.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: e,
        request: b
      });
    });
  } catch (R) {
    throw p && p(), R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, e, b),
      {
        cause: R.cause || R
      }
    ) : F.from(R, R && R.code, e, b);
  }
}), jn = {
  http: ml,
  xhr: Hl,
  fetch: Ql
};
m.forEach(jn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yr = (e) => `- ${e}`, ec = (e) => m.isFunction(e) || e === null || e === !1, bs = {
  getAdapter: (e) => {
    e = m.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let a;
      if (r = n, !ec(n) && (r = jn[(a = String(n)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map(yr).join(`
`) : " " + yr(i[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: jn
};
function mn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new lt(null, e);
}
function vr(e) {
  return mn(e), e.headers = xe.from(e.headers), e.data = hn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), bs.getAdapter(e.adapter || Dt.adapter)(e).then(function(r) {
    return mn(e), r.data = hn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = xe.from(r.headers), r;
  }, function(r) {
    return fs(r) || (mn(e), r && r.response && (r.response.data = hn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = xe.from(r.response.headers))), Promise.reject(r);
  });
}
const ys = "1.11.0", nn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  nn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wr = {};
nn.transitional = function(t, n, r) {
  function s(i, a) {
    return "[Axios v" + ys + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, l) => {
    if (t === !1)
      throw new F(
        s(a, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !wr[a] && (wr[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, l) : !0;
  };
};
nn.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function tc(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], a = t[i];
    if (a) {
      const l = e[i], d = l === void 0 || a(l, i, e);
      if (d !== !0)
        throw new F("option " + i + " must be " + d, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + i, F.ERR_BAD_OPTION);
  }
}
const It = {
  assertOptions: tc,
  validators: nn
}, Me = It.validators;
let Ge = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new fr(),
      response: new fr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ze(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && It.assertOptions(r, {
      silentJSONParsing: Me.transitional(Me.boolean),
      forcedJSONParsing: Me.transitional(Me.boolean),
      clarifyTimeoutError: Me.transitional(Me.boolean)
    }, !1), s != null && (m.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : It.assertOptions(s, {
      encode: Me.function,
      serialize: Me.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), It.assertOptions(n, {
      baseUrl: Me.spelling("baseURL"),
      withXsrfToken: Me.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && m.merge(
      i.common,
      i[n.method]
    );
    i && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete i[b];
      }
    ), n.headers = xe.concat(a, i);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (d = d && p.synchronous, l.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let u, f = 0, v;
    if (!d) {
      const b = [vr.bind(this), void 0];
      for (b.unshift(...l), b.push(...c), v = b.length, u = Promise.resolve(n); f < v; )
        u = u.then(b[f++], b[f++]);
      return u;
    }
    v = l.length;
    let y = n;
    for (f = 0; f < v; ) {
      const b = l[f++], p = l[f++];
      try {
        y = b(y);
      } catch (g) {
        p.call(this, g);
        break;
      }
    }
    try {
      u = vr.call(this, y);
    } catch (b) {
      return Promise.reject(b);
    }
    for (f = 0, v = c.length; f < v; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = Ze(this.defaults, t);
    const n = ms(t.baseURL, t.url, t.allowAbsoluteUrls);
    return cs(n, t.params, t.paramsSerializer);
  }
};
m.forEach(["delete", "get", "head", "options"], function(t) {
  Ge.prototype[t] = function(n, r) {
    return this.request(Ze(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, l) {
      return this.request(Ze(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Ge.prototype[t] = n(), Ge.prototype[t + "Form"] = n(!0);
});
let nc = class vs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const a = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(i);
      }, a;
    }, t(function(i, a, l) {
      r.reason || (r.reason = new lt(i, a, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new vs(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function rc(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function sc(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const Cn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Cn).forEach(([e, t]) => {
  Cn[t] = e;
});
function ws(e) {
  const t = new Ge(e), n = Gr(Ge.prototype.request, t);
  return m.extend(n, Ge.prototype, t, { allOwnKeys: !0 }), m.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ws(Ze(e, s));
  }, n;
}
const oe = ws(Dt);
oe.Axios = Ge;
oe.CanceledError = lt;
oe.CancelToken = nc;
oe.isCancel = fs;
oe.VERSION = ys;
oe.toFormData = en;
oe.AxiosError = F;
oe.Cancel = oe.CanceledError;
oe.all = function(t) {
  return Promise.all(t);
};
oe.spread = rc;
oe.isAxiosError = sc;
oe.mergeConfig = Ze;
oe.AxiosHeaders = xe;
oe.formToJSON = (e) => us(m.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = bs.getAdapter;
oe.HttpStatusCode = Cn;
oe.default = oe;
const {
  Axios: mc,
  AxiosError: pc,
  CanceledError: gc,
  isCancel: xc,
  CancelToken: bc,
  VERSION: yc,
  all: vc,
  Cancel: wc,
  isAxiosError: Nc,
  spread: jc,
  toFormData: Cc,
  AxiosHeaders: Sc,
  HttpStatusCode: Rc,
  formToJSON: Ec,
  getAdapter: kc,
  mergeConfig: Dc
} = oe;
function oc(e) {
  const t = {
    rowsPerPage: e.rowsPerPage,
    wrapLines: e.wrapLines,
    stripedRows: e.stripedRows,
    rowClickSelection: e.rowClickSelection,
    compactMode: e.compactMode,
    fixFirstColumn: e.fixFirstColumn,
    fixFirstTwoColumns: e.fixFirstTwoColumns,
    fixLastColumn: e.fixLastColumn,
    datagrid: Object.fromEntries(
      Object.entries(e.datagrid).map(([n, r]) => [
        n,
        { hidden: r.hidden }
      ])
    )
  };
  localStorage.setItem("tableOverrides", JSON.stringify(t));
}
function ic({ config: e, setConfig: t, setSettingsOpen: n }) {
  const [r, s] = z(""), [i, a] = z({ ...e }), [l, d] = z(
    Object.keys(e?.datagrid || {})
  ), c = Object.entries(i?.datagrid || {}).filter(
    ([x, N]) => N.label.toLowerCase().includes(r.toLowerCase())
  ), u = (x, N) => {
    x.dataTransfer.setData("text/plain", N);
  }, f = (x) => {
    x.preventDefault();
  }, v = (x, N) => {
    x.preventDefault();
    const w = parseInt(x.dataTransfer.getData("text/plain"));
    if (w === N) return;
    const S = [...l], C = S[w];
    S.splice(w, 1), S.splice(N, 0, C), d(S);
  }, y = () => {
    const x = {};
    l.forEach((w) => {
      x[w] = i.datagrid[w];
    });
    const N = {
      ...i,
      datagrid: x
    };
    t(N), oc(N), n(!1);
  }, b = () => {
    a({ ...e }), n(!1);
  }, p = (x, N) => {
    const w = { ...i }, S = x.split(".");
    let C = w;
    for (let k = 0; k < S.length - 1; k++)
      C[S[k]] || (C[S[k]] = {}), C = C[S[k]];
    C[S[S.length - 1]] = N, a(w);
  }, g = ({ checked: x, onChange: N }) => /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      onClick: () => N(!x),
      className: `relative  cursor-pointer inline-flex h-4 w-8 items-center rounded-full transition-all duration-200 ${x ? "bg-action shadow-primary/20" : "bg-gray-300"}`,
      children: /* @__PURE__ */ o.jsx(
        "span",
        {
          className: `inline-block h-3 w-3 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${x ? "translate-x-4" : "translate-x-0.5"}`
        }
      )
    }
  ), R = () => /* @__PURE__ */ o.jsxs("svg", { className: "w-4 h-4 text-gray-400 opacity-60", fill: "currentColor", viewBox: "0 0 20 20", children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "3", cy: "3", r: "2" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "3", cy: "10", r: "2" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "3", cy: "17", r: "2" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "10", cy: "3", r: "2" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "10", cy: "10", r: "2" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "10", cy: "17", r: "2" })
  ] });
  return /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col m-4 overflow-hidden", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between px-5 py-2 bg-gradient-to-r from-primary/5 to-primary/10", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("h2", { className: "text-lg font-semibold text-secondary", children: "Report Settings" }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-muted mt-0.5", children: "Customize your report view and columns" })
      ] }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: b,
          className: "p-2 hover:bg-white/80 cursor-pointer rounded-lg text-gray-500 hover:text-gray-700 transition-all duration-200",
          children: /* @__PURE__ */ o.jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ o.jsx("div", { className: "w-1/2 bg-gray-50/50 overflow-y-auto thin-scrollbar", children: /* @__PURE__ */ o.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ o.jsx("label", { className: "block text-sm font-medium text-secondary mb-1", children: "Rows per page" }),
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              value: i?.rowsPerPage || 10,
              onChange: (x) => p("rowsPerPage", parseInt(x.target.value)),
              className: `w-full text-sm bg-white rounded-lg px-3 py-2 transition-all 
                   border border-gray-300 focus:outline-none cursor-pointer 
                   focus:ring-gray-200 focus:border-gray-400`,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: 10, children: "10 rows" }),
                /* @__PURE__ */ o.jsx("option", { value: 25, children: "25 rows" }),
                /* @__PURE__ */ o.jsx("option", { value: 50, children: "50 rows" }),
                /* @__PURE__ */ o.jsx("option", { value: 100, children: "100 rows" })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Controls how many rows are displayed per page." })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-medium text-secondary mb-1", children: "Display Options" }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Wrap text in cells" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.wrapLines || !1,
                    onChange: (x) => p("wrapLines", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "If enabled, long text will wrap to multiple lines instead of being truncated." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Alternate row colors" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.stripedRows || !1,
                    onChange: (x) => p("stripedRows", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Improves readability by shading every alternate row." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Row click selection" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.rowClickSelection || !1,
                    onChange: (x) => p("rowClickSelection", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Allows selecting rows by clicking anywhere on the row." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Dense layout" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.compactMode || !1,
                    onChange: (x) => p("compactMode", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Reduces row height to fit more rows on the screen." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-medium text-secondary mb-1", children: "Column Pinning" }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Pin first column" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.fixFirstColumn || !1,
                    onChange: (x) => p("fixFirstColumn", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Keeps the first column fixed in place while scrolling horizontally." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Pin first two columns" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.fixFirstTwoColumns || !1,
                    onChange: (x) => p("fixFirstTwoColumns", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Keeps the first two columns visible during horizontal scrolling." })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-muted", children: "Pin last column" }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: i?.fixLastColumn || !1,
                    onChange: (x) => p("fixLastColumn", x)
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Locks the last column so it stays visible when scrolling." })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col bg-white", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "p-5 flex items-center justify-between bg-gray-50/30", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-medium text-secondary", children: "Column Visibility" }),
            /* @__PURE__ */ o.jsx("p", { className: "text-xs text-muted mt-0.5", children: "Drag to reorder • Toggle to show/hide" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "search",
                placeholder: "Search columns...",
                value: r,
                onChange: (x) => s(x.target.value),
                className: "text-sm bg-white rounded-lg pl-9 pr-4 py-2 w-48 outline outline-slate-300 focus:outline-1 border-0 transition-all"
              }
            ),
            /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 text-gray-400 absolute left-3 top-2.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex-1 overflow-y-auto  thin-scrollbar", children: [
          (r ? c : l.map((x) => [x, i.datagrid[x]])).map(([x, N], w) => /* @__PURE__ */ o.jsxs(
            "div",
            {
              draggable: !0,
              onDragStart: (S) => u(S, w),
              onDragOver: f,
              onDrop: (S) => v(S, w),
              className: "flex items-center gap-1 px-5 py-1.5 hover:bg-gray-50/50 cursor-move group transition-colors duration-150",
              children: [
                /* @__PURE__ */ o.jsx("div", { className: " text-lg  group-hover:opacity-100", children: /* @__PURE__ */ o.jsx(R, {}) }),
                /* @__PURE__ */ o.jsx("span", { className: "text-sm text-secondary flex-1 font-medium", children: N.label }),
                /* @__PURE__ */ o.jsx(
                  g,
                  {
                    checked: N.hidden !== !0,
                    onChange: (S) => {
                      a((C) => ({
                        ...C,
                        datagrid: {
                          ...C.datagrid,
                          [x]: {
                            ...C.datagrid[x],
                            hidden: !S
                            // toggle correctly
                          }
                        }
                      }));
                    }
                  }
                )
              ]
            },
            x
          )),
          (r ? c : l).length === 0 && /* @__PURE__ */ o.jsxs("div", { className: "p-8 text-center", children: [
            /* @__PURE__ */ o.jsx("div", { className: "text-gray-400 mb-2", children: /* @__PURE__ */ o.jsx("svg", { className: "w-8 h-8 mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0012 15c-2.34 0-4.464-.881-6.08-2.33" }) }) }),
            /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-500", children: "No columns found" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex justify-end gap-3 px-6 py-4 bg-gray-50/30", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: b,
          className: "px-5 py-2  cursor-pointer text-sm font-medium text-muted bg-white hover:bg-gray-50 rounded-lg transition-all duration-200",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: y,
          className: "px-5 py-2 cursor-pointer text-sm font-medium text-action bg-action hover:bg-action/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-200",
          children: "Apply Changes"
        }
      )
    ] })
  ] }) });
}
function ac(e, t) {
  if (!t) return e;
  const n = {
    ...e,
    rowsPerPage: t.rowsPerPage ?? e.rowsPerPage,
    wrapLines: t.wrapLines ?? e.wrapLines,
    stripedRows: t.stripedRows ?? e.stripedRows,
    rowClickSelection: t.rowClickSelection ?? e.rowClickSelection,
    compactMode: t.compactMode ?? e.compactMode,
    fixFirstColumn: t.fixFirstColumn ?? e.fixFirstColumn,
    fixFirstTwoColumns: t.fixFirstTwoColumns ?? e.fixFirstTwoColumns,
    fixLastColumn: t.fixLastColumn ?? e.fixLastColumn,
    datagrid: {}
  };
  return Object.keys(e.datagrid).forEach((r) => {
    const s = e.datagrid[r], i = t.datagrid?.[r];
    n.datagrid[r] = {
      ...s,
      hidden: i?.hidden ?? s.hidden ?? !1
    };
  }), n;
}
function lc(e, t) {
  if (!e && e !== !1) return "";
  switch (t?.toLowerCase()) {
    case "checkbox":
      return /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          checked: !!e,
          readOnly: !0,
          className: "w-4 h-4 text-green-600 accent-green-600 cursor-default"
        }
      );
    case "date":
      return new Date(e).toLocaleDateString();
    case "time":
      return new Date(e).toLocaleTimeString();
    case "datetime":
      return new Date(e).toLocaleString();
    case "currency":
      return new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(e);
    case "number":
    case "num":
      return /* @__PURE__ */ o.jsx("span", { className: "text-center", children: Number(e).toLocaleString() });
    case "url":
      return e ? /* @__PURE__ */ o.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: e }) : null;
    case "email":
      return e ? /* @__PURE__ */ o.jsx("a", { href: `mailto:${e}`, className: "text-blue-600 underline", children: e }) : null;
    case "tel":
    case "mob":
    case "phone":
    case "mobile":
      return e ? /* @__PURE__ */ o.jsx("a", { href: `tel:${e}`, className: "text-blue-600 underline", children: e }) : null;
    case "geoloc":
    case "geolocation":
    case "geoaddress":
      return e ? /* @__PURE__ */ o.jsx(
        "a",
        {
          href: `https://www.google.com/maps/place/${encodeURIComponent(e)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-600 underline",
          children: e
        }
      ) : null;
    case "color":
      return e ? /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ o.jsx("span", { className: "w-5 h-5 rounded-full border", style: { backgroundColor: e } }) }) : null;
    case "avatar":
      return /* @__PURE__ */ o.jsx(
        "img",
        {
          src: e || "/images/user.png",
          alt: "avatar",
          className: "w-8 h-8 rounded-full object-cover"
        }
      );
    case "photo":
    case "picture":
    case "media":
      return /* @__PURE__ */ o.jsx(
        "img",
        {
          src: e || "/images/noimg.png",
          alt: "media",
          className: "w-12 h-12 rounded object-cover"
        }
      );
    case "file":
    case "attachment":
      return e ? /* @__PURE__ */ o.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: "FILE" }) : "No File";
    case "json":
      try {
        const n = typeof e == "string" ? JSON.parse(e) : e;
        return /* @__PURE__ */ o.jsx("pre", { className: "whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded", children: JSON.stringify(n, null, 2) });
      } catch {
        return String(e);
      }
    case "pretty":
      return /* @__PURE__ */ o.jsx("pre", { className: "whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded", children: typeof e == "object" ? JSON.stringify(e, null, 2) : String(e) });
    case "uppercase":
      return String(e).toUpperCase();
    case "lowercase":
      return String(e).toLowerCase();
    case "html":
      return /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: e } });
    default:
      return String(e);
  }
}
function cc(e, t) {
  const r = { ...JSON.parse(localStorage.getItem("tableOverrides")) || {}, [e]: t };
  localStorage.setItem("tableOverrides", JSON.stringify(r));
}
function Tc({ report: e, style: t, methods: n, data: r, onButtonClick: s }) {
  const [i, a] = z(null), [l, d] = z(), [c, u] = z(""), [f, v] = z({ key: null, direction: "asc" }), [y, b] = z(null), [p, g] = z(1), [R, x] = z(/* @__PURE__ */ new Set()), [N, w] = z(!1), [S, C] = z(!1), [k, E] = z(null), [T, B] = z(!1), U = Q(null), [ee, A] = z(null), [$, J] = z([]), [H, j] = z(!1);
  K(() => {
    l && cc("template", l);
  }, [l]), K(() => {
    const D = JSON.parse(localStorage.getItem("tableOverrides")) || {}, L = ac(e, D);
    a(L), D?.template ? (console.log([D.template]), d(e[D?.template] ? D.template : null)) : L?.template && d(L.template);
  }, [e]), K(() => {
    const D = (L) => {
      U.current && !U.current.contains(L.target) && B(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, []), K(() => {
    (async () => {
      if (i?.source?.type === "API") {
        const L = {
          method: i?.source?.method,
          url: i?.source?.url,
          headers: i?.source?.headers
        }, { data: ne } = await oe(L);
        console.log({ data: ne }), J(ne?.data || []);
      } else r ? J(r) : i?.rows && J(i?.rows || []);
    })();
  }, [i]), K(() => {
  });
  const P = Z(() => {
    if (!$) return [];
    let D = $;
    return c && (D = D.filter((L) => Object.entries(i.datagrid).some(([ne, le]) => le.searchable ? String(L[ne] || "").toLowerCase().includes(c.toLowerCase()) : !1))), f.key && (D = [...D].sort((L, ne) => {
      const le = L[f.key], Le = ne[f.key];
      return le < Le ? f.direction === "asc" ? -1 : 1 : le > Le ? f.direction === "asc" ? 1 : -1 : 0;
    })), console.log({ filtered: D }), D;
  }, [i, c, f, $]), O = i?.rowsPerPage || 5, h = Math.ceil(P.length / O), M = (p - 1) * O, _ = M + O, I = P.slice(M, _), q = Z(() => y ? I.reduce((L, ne) => {
    const le = ne[y] || "Ungrouped";
    return L[le] || (L[le] = []), L[le].push(ne), L;
  }, {}) : { ungrouped: I }, [I, y]);
  if (!i)
    return /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center h-48", children: /* @__PURE__ */ o.jsx("div", { className: "text-gray-500", children: "Loading..." }) });
  const { title: W, toolbar: V, actions: he, buttons: X, datagrid: se } = i, Y = (D) => {
    se[D].sortable && (v((ne) => ({
      key: D,
      direction: ne.key === D && ne.direction === "asc" ? "desc" : "asc"
    })), g(1));
  }, Pe = (D) => {
    u(D), g(1);
  }, we = () => {
    if (N)
      x(/* @__PURE__ */ new Set());
    else {
      const D = I.map((L) => L.id);
      x(new Set(D));
    }
    w(!N);
  }, Ce = (D) => {
    const L = new Set(R);
    L.has(D) ? L.delete(D) : L.add(D), x(L), w(L.size === I.length);
  }, Se = (D) => D ? D.split(";").reduce((L, ne) => {
    const [le, Le] = ne.split(":");
    if (le && Le) {
      const Oe = le.trim().replace(/-([a-z])/g, (rn, sn) => sn.toUpperCase());
      L[Oe] = Le.trim();
    }
    return L;
  }, {}) : {}, $e = (D) => se[D].sortable ? f.key === D ? f.direction === "asc" ? /* @__PURE__ */ o.jsx(Jn, { className: "w-4 h-4" }) : /* @__PURE__ */ o.jsx(Vn, { className: "w-4 h-4" }) : /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o.jsx(Jn, { className: "w-3 h-3 text-gray-400" }),
    /* @__PURE__ */ o.jsx(Vn, { className: "w-3 h-3 text-gray-400 -mt-1" })
  ] }) : null, Re = (D) => D ? /* @__PURE__ */ o.jsx("i", { className: `${D}` }) : /* @__PURE__ */ o.jsx("i", { className: "fa fa-star" }), Fe = (D, L, ne) => {
    console.log("Button clicked:", D, L, ne), s(D, ne);
  }, Ye = (D) => {
    E(k === D ? null : D);
  }, Qe = Object.entries(se).filter(([D, L]) => L.groupable && !L.hidden).map(([D, L]) => ({ key: D, label: L.label })), pe = i.showExtraColumn, et = Object.entries(se).filter(([D, L]) => !L.hidden), Te = X ? Object.entries(X).filter(([D]) => D !== "more") : [], Ue = X?.more ? Object.entries(X.more) : [], Xe = Te.length > 0 || Ue.length > 0, ze = (D) => {
    B(!1), console.log("Exporting as:", D);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ o.jsxs("div", { className: " px-3 sm:px-3 py-2", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
        /* @__PURE__ */ o.jsxs("h1", { className: t?.title || "text-xl font-semibold text-gray-900 flex-shrink-0", children: [
          W,
          " ",
          /* @__PURE__ */ o.jsxs("span", { className: "text-sm", children: [
            "(",
            P.length,
            ")"
          ] }),
          " "
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "hidden sm:flex items-center gap-2 flex-shrink-0", children: [
          V?.print !== !1 && /* @__PURE__ */ o.jsxs(
            "button",
            {
              onClick: () => window.print(),
              className: "inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer",
              children: [
                /* @__PURE__ */ o.jsx(Xn, { className: "w-4 h-4 mr-1" }),
                "Print"
              ]
            }
          ),
          V?.export !== !1 && /* @__PURE__ */ o.jsxs("div", { className: "relative inline-block text-left", ref: U, children: [
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: () => B(!T),
                className: "inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer",
                children: [
                  /* @__PURE__ */ o.jsx(So, { className: "w-4 h-4 mr-1" }),
                  "Export"
                ]
              }
            ),
            T && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 z-50 mt-2 w-48 rounded-md bg-white border border-gray-200 shadow-lg", children: /* @__PURE__ */ o.jsxs("ul", { className: "py-1 text-sm  text-action", children: [
              /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => ze("print"),
                  className: "block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100",
                  children: "🖨️ Print Report"
                }
              ) }),
              /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => ze("csv"),
                  className: "block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100",
                  children: "📄 Export CSV"
                }
              ) }),
              /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => ze("xml"),
                  className: "block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100",
                  children: "📂 Export XML"
                }
              ) }),
              /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => ze("html"),
                  className: "block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100",
                  children: "🌐 Export HTML"
                }
              ) }),
              /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => ze("image"),
                  className: "block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100",
                  children: "🖼️ Export Image"
                }
              ) }),
              /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => ze("download"),
                  className: "block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100",
                  children: "⬇️ Download CSV"
                }
              ) })
            ] }) })
          ] }),
          V?.email !== !1 && /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: "inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer",
              children: [
                /* @__PURE__ */ o.jsx(Yn, { className: "w-4 h-4 mr-1" }),
                "Email"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
            onClick: () => C(!S),
            children: /* @__PURE__ */ o.jsx(mo, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: t?.searchBarContainer || "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-4", children: [
        V?.search !== !1 && /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-3 flex-1 lg:max-w-sm", children: /* @__PURE__ */ o.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ o.jsx(yo, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "search",
              placeholder: "Search...",
              value: c,
              onChange: (D) => Pe(D.target.value),
              className: "w-full pl-9 pr-4 py-1 text-slate-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            }
          )
        ] }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4", children: [
          (Qe.length > 0 || l === "kanban") && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
            /* @__PURE__ */ o.jsx(lo, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ o.jsx("span", { className: "text-sm text-gray-500", children: "Group by:" }),
            /* @__PURE__ */ o.jsxs(
              "select",
              {
                value: l === "kanban" ? ee || "" : y || "",
                onChange: (D) => {
                  l === "kanban" ? A(D.target.value || null) : b(D.target.value || null);
                },
                className: "px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ o.jsx("option", { value: "", children: "None" }),
                  l === "kanban" ? Object.entries(i?.kanban?.colkeys || {}).map(([D, L]) => /* @__PURE__ */ o.jsx("option", { value: D, children: L.label }, D)) : Qe.map((D) => /* @__PURE__ */ o.jsx("option", { value: D.key, children: D.label }, D.key))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "flex items-center bg-gray-100 rounded-lg p-1", children: [
              i?.datagrid && /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => d("table"),
                  title: "Table",
                  className: `inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${l === "table" || !l ? "bg-action shadow" : "text-gray-600 hover:text-gray-900"}`,
                  children: /* @__PURE__ */ o.jsx(uo, { className: "w-4 h-4 " })
                }
              ),
              i?.cards && /* @__PURE__ */ o.jsx(
                "button",
                {
                  title: "Cards",
                  onClick: () => d("cards"),
                  className: `inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${l === "cards" ? "bg-action shadow" : "text-gray-600 hover:text-gray-900"}`,
                  children: /* @__PURE__ */ o.jsx(io, { className: "w-4 h-4 " })
                }
              ),
              i?.kanban && /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => d("kanban"),
                  title: "Kanban",
                  className: `inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${l === "kanban" ? "bg-action shadow" : "text-gray-600 hover:text-gray-900"}`,
                  children: /* @__PURE__ */ o.jsx(Ks, { className: "w-4 h-4 " })
                }
              ),
              i?.calendar && /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => d("calendar"),
                  title: "Calender",
                  className: `inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${l === "calendar" ? "bg-action shadow" : "text-gray-600 hover:text-gray-900"}`,
                  children: /* @__PURE__ */ o.jsx(nt, { className: "w-4 h-4 " })
                }
              )
            ] }),
            he && Object.entries(he).map(([D, L]) => /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: () => Fe(D, L),
                className: "inline-flex items-center px-3 py-1.5 text-sm font-medium cursor-pointer bg-action rounded-md",
                children: [
                  /* @__PURE__ */ o.jsx(go, { className: "w-4 h-4 mr-1" }),
                  L?.label || "Add Record"
                ]
              },
              D
            )),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors  bg-action cursor-pointer",
                children: /* @__PURE__ */ o.jsx(so, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => j(!0),
                className: "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors  bg-action cursor-pointer",
                children: /* @__PURE__ */ o.jsx(wo, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] }),
      S && /* @__PURE__ */ o.jsxs("div", { className: "sm:hidden mt-4 flex flex-wrap gap-2", children: [
        V?.print && /* @__PURE__ */ o.jsxs("button", { className: "inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100", children: [
          /* @__PURE__ */ o.jsx(Xn, { className: "w-4 h-4 mr-1" }),
          "Print"
        ] }),
        V?.export?.csv && /* @__PURE__ */ o.jsxs("button", { className: "inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100", children: [
          /* @__PURE__ */ o.jsx(Qs, { className: "w-4 h-4 mr-1" }),
          "Export"
        ] }),
        V?.email && /* @__PURE__ */ o.jsxs("button", { className: "inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100", children: [
          /* @__PURE__ */ o.jsx(Yn, { className: "w-4 h-4 mr-1" }),
          "Email"
        ] })
      ] })
    ] }),
    (l === "table" || l === null || l === "cards") && h > 1 && /* @__PURE__ */ o.jsx("div", { className: "px-4 sm:px-6 py-1 sticky z-30 top-0 bg-white  border-y border-gray-200", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "text-sm text-gray-500", children: [
        "Showing ",
        M + 1,
        " to ",
        Math.min(_, P.length),
        " of ",
        P.length,
        " records"
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-center sm:justify-end gap-2", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => g((D) => Math.max(D - 1, 1)),
            disabled: p === 1,
            className: "inline-flex cursor-pointer items-center px-3 py-0.5 text-sm font-medium text-action  rounded-md   disabled:opacity-50 disabled:cursor-not-allowed",
            children: [
              /* @__PURE__ */ o.jsx(jr, { className: "w-4 h-4 mr-1" }),
              /* @__PURE__ */ o.jsx("span", { className: "hidden sm:inline", children: "Previous" }),
              /* @__PURE__ */ o.jsx("span", { className: "sm:hidden", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs("span", { className: "text-sm text-gray-700 px-2", children: [
          p,
          " of ",
          h
        ] }),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => g((D) => Math.min(D + 1, h)),
            disabled: p === h,
            className: "inline-flex cursor-pointer items-center px-3 py-0.5 text-sm font-medium text-action  rounded-md   disabled:opacity-50 disabled:cursor-not-allowed",
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "hidden sm:inline", children: "Next" }),
              /* @__PURE__ */ o.jsx("span", { className: "sm:hidden", children: "Next" }),
              /* @__PURE__ */ o.jsx(Cr, { className: "w-4 h-4 ml-1" })
            ]
          }
        )
      ] })
    ] }) }),
    pe === "checkbox" && R.size > 0 && /* @__PURE__ */ o.jsx("div", { className: "px-4 sm:px-6 py-2 bg-blue-50 border-t border-blue-200", children: /* @__PURE__ */ o.jsxs("div", { className: "text-sm text-blue-700", children: [
      R.size,
      " row",
      R.size !== 1 ? "s" : "",
      " selected"
    ] }) }),
    l === "cards" ? /* @__PURE__ */ o.jsx(
      To,
      {
        style: t?.cards,
        config: i,
        paginatedGroupedData: q,
        hasButtons: Xe,
        visibleButtons: Te,
        moreButtons: Ue,
        showExtraColumn: pe,
        selectedRows: R,
        openDropdown: k,
        handleSelectRow: Ce,
        handleButtonClick: Fe,
        toggleDropdown: Ye,
        setOpenDropdown: E,
        getIconComponent: Re
      }
    ) : l === "kanban" ? /* @__PURE__ */ o.jsx(
      Ea,
      {
        config: i,
        filteredAndSortedData: P,
        hasButtons: Xe,
        visibleButtons: Te,
        moreButtons: Ue,
        showExtraColumn: pe,
        selectedRows: R,
        openDropdown: k,
        handleSelectRow: Ce,
        handleButtonClick: Fe,
        toggleDropdown: Ye,
        setOpenDropdown: E,
        getIconComponent: Re,
        kanbanGroupBy: ee
      }
    ) : l === "calendar" ? /* @__PURE__ */ o.jsx(
      ka,
      {
        config: i,
        filteredAndSortedData: P,
        hasButtons: Xe,
        visibleButtons: Te,
        moreButtons: Ue,
        showExtraColumn: pe,
        selectedRows: R,
        openDropdown: k,
        handleSelectRow: Ce,
        handleButtonClick: Fe,
        toggleDropdown: Ye,
        setOpenDropdown: E,
        getIconComponent: Re,
        kanbanGroupBy: ee
      }
    ) : /* @__PURE__ */ o.jsx(
      Ao,
      {
        style: t?.table,
        config: i,
        paginatedGroupedData: q,
        visibleColumns: et,
        hasButtons: Xe,
        visibleButtons: Te,
        moreButtons: Ue,
        sortConfig: f,
        showExtraColumn: pe,
        selectAll: N,
        selectedRows: R,
        openDropdown: k,
        handleSort: Y,
        handleSelectAll: we,
        handleSelectRow: Ce,
        handleButtonClick: Fe,
        toggleDropdown: Ye,
        setOpenDropdown: E,
        parseStyle: Se,
        formatCellValue: lc,
        renderSortIcon: $e,
        getIconComponent: Re
      }
    ),
    k && /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "fixed inset-0 z-50",
        onClick: () => E(null)
      }
    ),
    H && /* @__PURE__ */ o.jsx(
      ic,
      {
        setSettingsOpen: j,
        config: i,
        setConfig: a
      }
    )
  ] });
}
export {
  Tc as Reports
};
