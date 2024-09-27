import { useCallback, useState } from "react";
import Tree from "./Tree";
import { objectType } from "./types";
import React from "react";

interface BranchProps {
  name: string;
  root: objectType;
}

const Branch: React.FC<BranchProps> = ({ name, root }: BranchProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="name flex justify-start items-center gap-2">
        <button onClick={toggleOpen}>{open ? "-" : "+"}</button>
        <div className="name">{name}</div>
      </div>
      {open && (
        <div className="content ml-4">
          <Tree root={root} />
        </div>
      )}
    </div>
  );
};

export default Branch;
