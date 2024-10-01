import { default as React } from 'react';
import { primitive, LeaveCustomProps } from './types/types';
interface LeaveProps {
    name: string;
    value: primitive;
    customProps?: LeaveCustomProps;
}
declare const Leave: React.FC<LeaveProps>;
export default Leave;
