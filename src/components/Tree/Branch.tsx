import { useCallback, useState } from "react";
import Tree from "./Tree";
import { BranchCustomProps, objectType } from "./types";
import React from "react";

interface BranchProps {
  name: string;
  root: objectType;
  customProps?: BranchCustomProps;
}

const Branch: React.FC<BranchProps> = ({ name, root }: BranchProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="name flex justify-start items-center gap-2">
        <button type="button" onClick={toggleOpen}>
          {isOpen ? "-" : "+"}
        </button>
        <div className="name">{name}</div>
      </div>
      <div className={`content ml-6 ${!isOpen && "hidden"}`}>
        <Tree root={root} />
      </div>
    </div>
  );
};

export default Branch;
