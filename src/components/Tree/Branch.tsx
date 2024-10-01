import React, { useCallback, useState } from "react";
import Tree from "./Tree";
import { BranchCustomProps, LeaveCustomProps, objectType } from "./types/types";
import Expand from "./Icons/Expand";
import Collapse from "./Icons/Collapse";

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
    expandIcon = <Expand />,
    collapseIcon = <Collapse />,
    defaultExpanded = true,
    branchHeadRenderer,
    indentation,
    hideDepthLines = false,
  } = customProps;

  const [isOpen, setIsOpen] = useState<boolean>(defaultExpanded);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start">
      <button type="button" onClick={toggleOpen} className="name">
        {branchHeadRenderer?.(name, isOpen) ?? (
          <div className="flex justify-start items-center gap-2">
            <div>{isOpen ? collapseIcon : expandIcon}</div>
            <div className="name">{name}</div>
          </div>
        )}
      </button>
      <div
        className={`content pl-6 ${!isOpen && "hidden"} ${
          !hideDepthLines ? "border-l" : ""
        } border-l-slate-300`}
        style={indentation ? { paddingLeft: indentation + "px" } : undefined}
      >
        <Tree root={root} branchProps={customProps} leaveProps={leaveProps} />
      </div>
    </div>
  );
};

export default Branch;
