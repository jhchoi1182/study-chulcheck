import { HTMLAttributes } from "react";

interface TxtProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rigthIcon?: React.ReactNode;
  center?: boolean;
  size?: "medium";
  color?: "white" | "black" | "riseshine";
  onClick?: () => void;
}

export default function Txt({
  children,
  leftIcon,
  rigthIcon,
  center,
  size = "medium",
  color = "white",
  className,
  ...props
}: TxtProps) {
  return (
    <div
      className={`flex items-center ${
        center && "justify-center"
      } cursor-pointer ${TYPOGRAPH_VARIANT[size]} ${
        FONT_VARIANT[color]
      } ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-[10px]">{leftIcon}</span>}
      <span>{children}</span>
      {rigthIcon && <span className="ml-[10px]">{rigthIcon}</span>}
    </div>
  );
}

const FONT_VARIANT = {
  white: "text-white",
  black: "text-black",
  riseshine: "text-riseshine",
};

const TYPOGRAPH_VARIANT = {
  medium: "text-2xl font-semibold",
};
