import { useTree } from "./hooks";
import { objectType } from "./types";

interface TreeProps {
  root: objectType;
}

const Tree: React.FC<TreeProps> = ({ root }: TreeProps) => {
  const renderTree = useTree(root);

  return renderTree();
};

export default Tree;
