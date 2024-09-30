import { useCallback, useState } from "react";
import Tree from "./Tree";
import { BranchCustomProps, LeaveCustomProps, objectType } from "./types";
import React from "react";

interface BranchProps {
  name: string;
  root: objectType;
  customProps?: BranchCustomProps;
  leaveProps?: LeaveCustomProps;
}

const Branch: React.FC<BranchProps> = ({
  name,
  root,
  customProps = {},
  leaveProps,
}: BranchProps) => {
  const {
    expandIcon = "+",
    collapseIcon = "-",
    defaultExpanded = true,
  } = customProps;

  const [isOpen, setIsOpen] = useState<boolean>(defaultExpanded);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start">
      <button
        type="button"
        onClick={toggleOpen}
        className="name flex justify-start items-center gap-2"
      >
        <div>{isOpen ? collapseIcon : expandIcon}</div>
        <div className="name">{name}</div>
      </button>
      <div
        className={`content pl-6 ${
          !isOpen && "hidden"
        } border-l border-l-slate-300`}
      >
        <Tree root={root} branchProps={customProps} leaveProps={leaveProps} />
      </div>
    </div>
  );
};

export default Branch;
