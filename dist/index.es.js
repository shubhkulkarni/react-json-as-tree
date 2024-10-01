import { jsx as r, jsxs as u } from "react/jsx-runtime";
import { useState as y, useCallback as m, useMemo as g } from "react";
import "./style.css";
const b = () => /* @__PURE__ */ r(
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
), w = ({
  name: e,
  root: t,
  customProps: n = {},
  leaveProps: a
}) => {
  const {
    expandIcon: c = /* @__PURE__ */ r(b, {}),
    collapseIcon: s = /* @__PURE__ */ r(j, {}),
    defaultExpanded: o = !0,
    branchHeadRenderer: i,
    indentation: p,
    hideDepthLines: h = !1,
    onBranchHeadClick: d
  } = n, [l, v] = y(o), x = m(() => {
    v((N) => !N), d == null || d(e, l, t);
  }, [e, l, t, d]);
  return /* @__PURE__ */ u("div", { className: "flex flex-col items-start justify-start", children: [
    /* @__PURE__ */ r("button", { type: "button", onClick: x, className: "name", children: (i == null ? void 0 : i(e, l, t)) ?? /* @__PURE__ */ u("div", { className: "flex justify-start items-center gap-2", children: [
      /* @__PURE__ */ r("div", { children: l ? s : c }),
      /* @__PURE__ */ r("div", { className: "name", children: e })
    ] }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `content pl-6 ${!l && "hidden"} ${h ? "" : "border-l"} border-l-slate-300`,
        style: p ? { paddingLeft: p + "px" } : void 0,
        children: /* @__PURE__ */ r(E, { root: t, branchProps: n, leaveProps: a })
      }
    )
  ] });
}, O = ({
  name: e,
  value: t,
  customProps: n = {}
}) => {
  const { hideKeys: a = !1, leaveRenderer: c, onLeaveClick: s } = n;
  return c ? c(e, t) : /* @__PURE__ */ u(
    "button",
    {
      onClick: () => s == null ? void 0 : s(e, t),
      className: "flex items-center justify-start gap-2",
      children: [
        !a && /* @__PURE__ */ u("div", { className: "stem italic text-blue-800", children: [
          e,
          " :"
        ] }),
        /* @__PURE__ */ r("div", { className: "leave", children: t })
      ]
    }
  );
}, k = (e, t, n) => {
  const a = g(
    () => Object.entries(e).map((s, o) => {
      if (typeof s[1] == "object") {
        let i = J(s[1]);
        return /* @__PURE__ */ r(
          w,
          {
            customProps: t,
            leaveProps: n,
            name: s[0],
            root: i
          },
          o + s[0]
        );
      } else
        return /* @__PURE__ */ r(
          O,
          {
            customProps: n,
            name: s[0],
            value: s[1]
          },
          o + s[0]
        );
    }),
    [e]
  );
  return m(() => /* @__PURE__ */ r("div", { className: "tree", children: a }), [a]);
}, f = (e) => Object.assign({}, e), S = (e) => {
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
}, J = (e) => Array.isArray(e) ? f(e) : e instanceof Map ? Object.fromEntries(e) : e instanceof Set ? f([...e]) : e, E = ({
  root: e,
  branchProps: t,
  leaveProps: n
}) => {
  const a = S(e);
  return k(a, t, n)();
};
export {
  E as Tree
};
//# sourceMappingURL=index.es.js.map
