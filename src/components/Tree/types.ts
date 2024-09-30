export type objectType = Record<string, unknown>;

export type primitive = string | null | undefined | number | boolean;

export interface BranchCustomProps {
  expandIcon?: React.ReactElement;
  collapseIcon?: React.ReactElement;
  defaultExpanded?: boolean;
  branchHeadRenderer?: (name: string, isOpen: boolean) => React.ReactElement;
  indentation?: number;
  hideDepthLines?: boolean;
}

export interface LeaveCustomProps {
  hideKeys?: boolean;
  leaveRenderer?: (name: string, value: primitive) => React.ReactElement;
}
