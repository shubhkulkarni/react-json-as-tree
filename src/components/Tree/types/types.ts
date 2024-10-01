export type objectType = Record<string, unknown>;

export type primitive = string | null | undefined | number | boolean;

export interface BranchCustomProps {
  expandIcon?: React.ReactElement;
  collapseIcon?: React.ReactElement;
  defaultExpanded?: boolean;
  branchHeadRenderer?: (
    name: string,
    isOpen: boolean,
    root: objectType
  ) => React.ReactElement;
  indentation?: number;
  hideDepthLines?: boolean;
  onBranchHeadClick?: (name: string, isOpen: boolean, root: objectType) => void | Promise<void>;
}

export interface LeaveCustomProps {
  hideKeys?: boolean;
  leaveRenderer?: (name: string, value: primitive) => React.ReactElement;
  onLeaveClick?: (name: string, value: primitive) => void | Promise<void>;
}

export interface TreeProps {
  root: objectType | string;
  branchProps?: BranchCustomProps;
  leaveProps?: LeaveCustomProps;
}
