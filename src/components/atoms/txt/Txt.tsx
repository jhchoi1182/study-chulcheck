import { FLEX_CENTER } from "@/util/styles";
import { HTMLAttributes } from "react";

interface TxtProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "medium";
  color?: "white" | "black";
  onClick?: () => void;
}

export default function Txt({
  children,
  icon,
  size = "medium",
  color = "white",
  className,
  ...props
}: TxtProps) {
  return (
    <div
      className={`${FLEX_CENTER} cursor-pointer ${TYPOGRAPH_VARIANT[size]} ${FONT_VARIANT[color]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-[10px]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

const FONT_VARIANT = {
  white: "text-white",
  black: "text-black",
};

const TYPOGRAPH_VARIANT = {
  medium: "text-2xl font-semibold",
};
