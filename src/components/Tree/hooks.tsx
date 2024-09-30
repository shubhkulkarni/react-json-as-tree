import { useCallback, useMemo } from "react";
import {
  BranchCustomProps,
  LeaveCustomProps,
  objectType,
  primitive,
} from "./types";
import Branch from "./Branch";
import Leave from "./Leave";

export const useTree = (
  root: objectType,
  branchProps?: BranchCustomProps,
  leaveProps?: LeaveCustomProps
) => {
  const tree = useMemo(
    () =>
      Object.entries(root).map((i, idx) => {
        if (typeof i[1] === "object") {
          let val = objectify(i[1]);

          return (
            <Branch
              customProps={branchProps}
              leaveProps={leaveProps}
              key={idx + i[0]}
              name={i[0]}
              root={val as objectType}
            />
          );
        } else
          return (
            <Leave
              customProps={leaveProps}
              key={idx + i[0]}
              name={i[0]}
              value={i[1] as primitive}
            />
          );
      }),
    [root]
  );

  const renderTree = useCallback(() => {
    return <div className="tree">{tree}</div>;
  }, [tree]);

  return renderTree;
};

const objectifyArr = (list: unknown[]) => Object.assign({}, list);

export const useJsonParser = (root: objectType | string) => {
  if (typeof root === "object") {
    return root;
  }

  if (typeof root === "string") {
    try {
      const result = JSON.parse(root);
      return result;
    } catch (_e) {
      return { Error: "Invalid JSON !" };
    }
  }

  return { Error: "Please pass valid JavaScript object or JSON as input" };
};

const objectify = (obj: object | null) => {
  if (Array.isArray(obj)) return objectifyArr(obj as unknown[]);

  if (obj instanceof Map) return Object.fromEntries(obj);

  if (obj instanceof Set) return objectifyArr([...obj]);

  return obj;
};
