import { BranchCustomProps, LeaveCustomProps, objectType } from '../types/types';
export declare const useTree: (root: objectType, branchProps?: BranchCustomProps, leaveProps?: LeaveCustomProps) => () => import("react/jsx-runtime").JSX.Element;
export declare const useJsonParser: (root: objectType | string) => any;
