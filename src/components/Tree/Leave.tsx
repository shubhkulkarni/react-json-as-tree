import React from "react";
import { primitive, LeaveCustomProps } from "./types";

interface LeaveProps {
  name: string;
  value: primitive;
  customProps?: LeaveCustomProps;
}

const Leave: React.FC<LeaveProps> = ({
  name,
  value,
  customProps = {},
}: LeaveProps) => {
  const { hideKeys = false, leaveRenderer } = customProps;

  return leaveRenderer ? (
    leaveRenderer(name, value)
  ) : (
    <div className="flex items-center justify-start gap-2">
      {!hideKeys && <div className="stem italic text-blue-800">{name} :</div>}
      <div className="leave">{value}</div>
    </div>
  );
};

export default Leave;
