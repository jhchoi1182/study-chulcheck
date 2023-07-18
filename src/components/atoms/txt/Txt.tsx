import { HTMLAttributes } from "react";

interface TxtProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "medium";
  onClick?: () => void;
}

export default function Txt({ children, icon, size = "medium", className, ...props }: TxtProps) {
  return (
    <div className={`flex items-center cursor-pointer ${TYPOGRAPH_VARIANT[size]} ${className}`} {...props}>
      {icon && <span className="mr-[10px]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

const TYPOGRAPH_VARIANT = {
  medium: "text-2xl font-semibold",
};
