export type objectType = Record<string, unknown>;

export type primitive = string | null | undefined | number | boolean;

export interface BranchCustomProps {
  expandIcon?: React.ReactElement;
  collapseIcon?: React.ReactElement;
  defaultExpanded?: boolean;
}

export interface LeaveCustomProps {
  hideKeys?: boolean;
}
