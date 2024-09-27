import { useCallback, useMemo } from "react";
import { objectType, primitive } from "./types";
import Branch from "./Branch";
import Leave from "./Leave";

export const useTree = (root: objectType) => {
  const tree = useMemo(
    () =>
      Object.entries(root).map((i) => {
        if (typeof i[1] === "object") {
          let val = i[1];
          if (Array.isArray(i[1])) val = objectifyArr(val as unknown[]);
          return <Branch name={i[0]} root={val as objectType} />;
        } else return <Leave name={i[0]} value={i[1] as primitive} />;
      }),
    []
  );

  const renderTree = useCallback(() => {
    return <div className="tree">{tree}</div>;
  }, []);

  return renderTree;
};

const objectifyArr = (list: unknown[]) => Object.assign({}, list);
