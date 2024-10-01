import { jsx as r, jsxs as l } from "react/jsx-runtime";
import { useState as N, useCallback as f, useMemo as y } from "react";
import "node_modules/react-json-as-tree/dist/style.css";
const g = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-4",
    children: /* @__PURE__ */ r(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m8.25 4.5 7.5 7.5-7.5 7.5"
      }
    )
  }
), j = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-4",
    children: /* @__PURE__ */ r(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    )
  }
), k = ({
  name: e,
  root: t,
  customProps: s = {},
  leaveProps: a
}) => {
  const {
    expandIcon: c = /* @__PURE__ */ r(g, {}),
    collapseIcon: n = /* @__PURE__ */ r(j, {}),
    defaultExpanded: o = !0,
    branchHeadRenderer: i,
    indentation: u,
    hideDepthLines: m = !1
  } = s, [d, h] = N(o), v = f(() => {
    h((x) => !x);
  }, []);
  return /* @__PURE__ */ l("div", { className: "flex flex-col items-start justify-start", children: [
    /* @__PURE__ */ r("button", { type: "button", onClick: v, className: "name", children: (i == null ? void 0 : i(e, d)) ?? /* @__PURE__ */ l("div", { className: "flex justify-start items-center gap-2", children: [
      /* @__PURE__ */ r("div", { children: d ? n : c }),
      /* @__PURE__ */ r("div", { className: "name", children: e })
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `content pl-6 ${!d && "hidden"} ${m ? "" : "border-l"} border-l-slate-300`,
        style: u ? { paddingLeft: u + "px" } : void 0,
        children: /* @__PURE__ */ r(J, { root: t, branchProps: s, leaveProps: a })
      }
    )
  ] });
}, w = ({
  name: e,
  value: t,
  customProps: s = {}
}) => {
  const { hideKeys: a = !1, leaveRenderer: c } = s;
  return c ? c(e, t) : /* @__PURE__ */ l("div", { className: "flex items-center justify-start gap-2", children: [
    !a && /* @__PURE__ */ l("div", { className: "stem italic text-blue-800", children: [
      e,
      " :"
    ] }),
    /* @__PURE__ */ r("div", { className: "leave", children: t })
  ] });
}, O = (e, t, s) => {
  const a = y(
    () => Object.entries(e).map((n, o) => {
      if (typeof n[1] == "object") {
        let i = S(n[1]);
        return /* @__PURE__ */ r(
          k,
          {
            customProps: t,
            leaveProps: s,
            name: n[0],
            root: i
          },
          o + n[0]
        );
      } else
        return /* @__PURE__ */ r(
          w,
          {
            customProps: s,
            name: n[0],
            value: n[1]
          },
          o + n[0]
        );
    }),
    [e]
  );
  return f(() => /* @__PURE__ */ r("div", { className: "tree", children: a }), [a]);
}, p = (e) => Object.assign({}, e), b = (e) => {
  if (e === null)
    return { Error: "Please pass valid JavaScript object or JSON as an input" };
  if (typeof e == "object")
    return e;
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return { Error: "Invalid JSON !" };
    }
  return { Error: "Please pass valid JavaScript object or JSON as an input" };
}, S = (e) => Array.isArray(e) ? p(e) : e instanceof Map ? Object.fromEntries(e) : e instanceof Set ? p([...e]) : e, J = ({
  root: e,
  branchProps: t,
  leaveProps: s
}) => {
  const a = b(e);
  return O(a, t, s)();
};
export {
  J as Tree
};
//# sourceMappingURL=index.es.js.map
