import { useCallback, useMemo, useState } from "react";
import { objectType, primitive } from "./types";
import Branch from "./Branch";
import Leave from "./Leave";

export const useTree = (root: objectType) => {
  const tree = useMemo(
    () =>
      Object.entries(root).map((i, idx) => {
        if (typeof i[1] === "object") {
          let val = i[1];
          if (Array.isArray(i[1])) val = objectifyArr(val as unknown[]);
          return (
            <Branch key={idx + i[0]} name={i[0]} root={val as objectType} />
          );
        } else
          return (
            <Leave key={idx + i[0]} name={i[0]} value={i[1] as primitive} />
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
