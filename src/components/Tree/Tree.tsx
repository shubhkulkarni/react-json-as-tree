import React from "react";
import { useJsonParser, useTree } from "./hooks";
import { BranchCustomProps, LeaveCustomProps, objectType } from "./types";

interface TreeProps {
  root: objectType | string;
  branchProps?: BranchCustomProps;
  leaveProps?: LeaveCustomProps;
}

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
