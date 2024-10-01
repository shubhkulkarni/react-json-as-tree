import we, { useState as vr, useCallback as Ce, useMemo as pr } from "react";
var Q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function hr() {
  if (Te) return $;
  Te = 1;
  var o = we, p = Symbol.for("react.element"), E = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, d, w) {
    var v, x = {}, S = null, k = null;
    w !== void 0 && (S = "" + w), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (k = d.ref);
    for (v in d) g.call(d, v) && !m.hasOwnProperty(v) && (x[v] = d[v]);
    if (_ && _.defaultProps) for (v in d = _.defaultProps, d) x[v] === void 0 && (x[v] = d[v]);
    return { $$typeof: p, type: _, key: S, ref: k, props: x, _owner: j.current };
  }
  return $.Fragment = E, $.jsx = T, $.jsxs = T, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function gr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = we, p = Symbol.for("react.element"), E = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), ee = Symbol.iterator, Pe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ie = !1, Ne = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === m || We || e === j || e === w || e === v || Ne || e === k || De || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === x || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case E:
          return "Portal";
        case m:
          return "Profiler";
        case j:
          return "StrictMode";
        case w:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case T:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return Le(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case S: {
            var s = e, u = s._payload, i = s._init;
            try {
              return O(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, I = 0, ne, ae, ie, oe, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Me() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ne
            }),
            info: C({}, e, {
              value: ae
            }),
            warn: C({}, e, {
              value: ie
            }),
            error: C({}, e, {
              value: oe
            }),
            group: C({}, e, {
              value: se
            }),
            groupCollapsed: C({}, e, {
              value: ue
            }),
            groupEnd: C({}, e, {
              value: le
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = A.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var K = !1, M;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ve();
    }
    function fe(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), y = n.stack.split(`
`), l = a.length - 1, c = y.length - 1; l >= 1 && c >= 0 && a[l] !== y[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== y[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== y[c]) {
                    var R = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, R), R;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        K = !1, U.current = u, Me(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", P = F ? Y(F) : "";
      return typeof e == "function" && M.set(e, P), P;
    }
    function Je(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case w:
          return Y("Suspense");
        case v:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case x:
            return V(e.type, r, t);
          case S: {
            var n = e, s = n._payload, u = n._init;
            try {
              return V(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, de = {}, ve = A.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, s) {
      {
        var u = Function.call.bind(N);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (J(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), J(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, J(s), h("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var Ke = Array.isArray;
    function q(e) {
      return Ke(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var W = A.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, z;
    z = {};
    function Xe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = O(W.current.type);
        z[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(W.current.type), e.ref), z[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, s, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, s) {
      {
        var u, i = {}, a = null, y = null;
        t !== void 0 && (he(t), a = "" + t), He(r) && (he(r.key), a = "" + r.key), Xe(r) && (y = r.ref, Ze(r, s));
        for (u in r)
          N.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || y) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, c), y && er(i, c);
        }
        return rr(e, a, y, s, n, W.current, i);
      }
    }
    var G = A.ReactCurrentOwner, me = A.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function be() {
      {
        if (G.current) {
          var e = O(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ee = {};
    function ar(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + O(e._owner.type) + "."), D(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && _e(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = ke(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              H(i.value) && _e(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var s = O(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var je = {};
    function xe(e, r, t, n, s, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = nr();
          y ? a += y : a += be();
          var l;
          e === null ? l = "null" : q(e) ? l = "array" : e !== void 0 && e.$$typeof === p ? (l = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = tr(e, r, t, s, u);
        if (c == null)
          return c;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (q(R)) {
                for (var F = 0; F < R.length; F++)
                  Re(R[F], e);
                Object.freeze && Object.freeze(R);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(R, e);
        }
        if (N.call(r, "key")) {
          var P = O(e), b = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), Z = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[P + Z]) {
            var fr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, P, fr, P), je[P + Z] = !0;
          }
        }
        return e === g ? or(c) : ir(c), c;
      }
    }
    function sr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return xe(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    L.Fragment = g, L.jsx = lr, L.jsxs = cr;
  }()), L;
}
process.env.NODE_ENV === "production" ? Q.exports = hr() : Q.exports = gr();
var f = Q.exports;
const yr = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-4",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m8.25 4.5 7.5 7.5-7.5 7.5"
      }
    )
  }
), mr = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-4",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    )
  }
), br = ({
  name: o,
  root: p,
  customProps: E = {},
  leaveProps: g
}) => {
  const {
    expandIcon: j = /* @__PURE__ */ f.jsx(yr, {}),
    collapseIcon: m = /* @__PURE__ */ f.jsx(mr, {}),
    defaultExpanded: T = !0,
    branchHeadRenderer: _,
    indentation: d,
    hideDepthLines: w = !1
  } = E, [v, x] = vr(T), S = Ce(() => {
    x((k) => !k);
  }, []);
  return /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-start justify-start", children: [
    /* @__PURE__ */ f.jsx("button", { type: "button", onClick: S, className: "name", children: (_ == null ? void 0 : _(o, v)) ?? /* @__PURE__ */ f.jsxs("div", { className: "flex justify-start items-center gap-2", children: [
      /* @__PURE__ */ f.jsx("div", { children: v ? m : j }),
      /* @__PURE__ */ f.jsx("div", { className: "name", children: o })
    ] }) }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: `content pl-6 ${!v && "hidden"} ${w ? "" : "border-l"} border-l-slate-300`,
        style: d ? { paddingLeft: d + "px" } : void 0,
        children: /* @__PURE__ */ f.jsx(xr, { root: p, branchProps: E, leaveProps: g })
      }
    )
  ] });
}, Er = ({
  name: o,
  value: p,
  customProps: E = {}
}) => {
  const { hideKeys: g = !1, leaveRenderer: j } = E;
  return j ? j(o, p) : /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-start gap-2", children: [
    !g && /* @__PURE__ */ f.jsxs("div", { className: "stem italic text-blue-800", children: [
      o,
      " :"
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "leave", children: p })
  ] });
}, _r = (o, p, E) => {
  const g = pr(
    () => Object.entries(o).map((m, T) => {
      if (typeof m[1] == "object") {
        let _ = jr(m[1]);
        return /* @__PURE__ */ f.jsx(
          br,
          {
            customProps: p,
            leaveProps: E,
            name: m[0],
            root: _
          },
          T + m[0]
        );
      } else
        return /* @__PURE__ */ f.jsx(
          Er,
          {
            customProps: E,
            name: m[0],
            value: m[1]
          },
          T + m[0]
        );
    }),
    [o]
  );
  return Ce(() => /* @__PURE__ */ f.jsx("div", { className: "tree", children: g }), [g]);
}, Se = (o) => Object.assign({}, o), Rr = (o) => {
  if (o === null)
    return { Error: "Please pass valid JavaScript object or JSON as an input" };
  if (typeof o == "object")
    return o;
  if (typeof o == "string")
    try {
      return JSON.parse(o);
    } catch {
      return { Error: "Invalid JSON !" };
    }
  return { Error: "Please pass valid JavaScript object or JSON as an input" };
}, jr = (o) => Array.isArray(o) ? Se(o) : o instanceof Map ? Object.fromEntries(o) : o instanceof Set ? Se([...o]) : o, xr = ({
  root: o,
  branchProps: p,
  leaveProps: E
}) => {
  const g = Rr(o);
  return _r(g, p, E)();
};
export {
  xr as Tree
};
//# sourceMappingURL=index.es.js.map
