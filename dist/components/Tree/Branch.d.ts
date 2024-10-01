import { default as React } from 'react';
import { BranchCustomProps, LeaveCustomProps, objectType } from './types/types';
interface BranchProps {
    name: string;
    root: objectType;
    customProps?: BranchCustomProps;
    leaveProps?: LeaveCustomProps;
}
declare const Branch: React.FC<BranchProps>;
export default Branch;
