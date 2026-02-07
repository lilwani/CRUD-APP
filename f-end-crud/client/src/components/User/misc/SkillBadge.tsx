import type React from "react";

interface IProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SkillBadge({ label, onClick }: IProps) {
  return (
    <button
      className="bg-amber-50 mx-2 font-semibold h-6 border-gray-300 border rounded box-border px-2 max-w-25 transition whitespace-nowrap text-ellipsis overflow-hidden text-gray-800 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 items-baseline"
      onClick={onClick}
      title={label === "..." ? "Click to view full history" : label}
    >
      {label}
    </button>
  );
}

export default SkillBadge;
