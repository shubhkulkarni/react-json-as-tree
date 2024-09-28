import { useCallback, useMemo, useState } from "react";
import { objectType, primitive } from "./types";
import Branch from "./Branch";
import Leave from "./Leave";

export const useTree = (root: objectType) => {
  const tree = useMemo(
    () =>
      Object.entries(root).map((i, idx) => {
        if (typeof i[1] === "object") {
          let val = objectify(i[1]);

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

export const useJsonParser = (root: objectType | string) => {
  const [result, setResult] = useState<objectType>({});
  const [error, setError] = useState<string | null>(null);

  if (typeof root === "object") return { result: root, error: null };

  if (typeof root === "string") {
    try {
      const data = JSON.parse(root);
      setResult(data);
    } catch (e) {
      setError("Invalid JSON!");
    }
  }
  return { result, error };
};

const objectify = (obj: object | null) => {
  if (Array.isArray(obj)) return objectifyArr(obj as unknown[]);

  if (obj instanceof Map) return Object.fromEntries(obj);

  if (obj instanceof Set) return objectifyArr([...obj]);

  return obj;
};
