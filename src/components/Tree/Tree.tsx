import React from "react";
import { useJsonParser, useTree } from "./hooks/hooks";
import { TreeProps } from "./types/types";
import "./style.css";
import "node_modules/react-json-as-tree/dist/style.css";

const Tree: React.FC<TreeProps> = ({
  root,
  branchProps,
  leaveProps,
}: TreeProps) => {
  const parsed = useJsonParser(root);

  const renderTree = useTree(parsed, branchProps, leaveProps);

  return renderTree();
};

export default Tree;
