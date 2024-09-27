import { primitive } from "./types";

interface LeaveProps {
  name: string;
  value: primitive;
}

const Leave: React.FC<LeaveProps> = ({ name, value }: LeaveProps) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div className="stem italic text-blue-800">{name} :</div>
      <div className="leave">{value}</div>
    </div>
  );
};

export default Leave;
