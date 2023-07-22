import { Text } from "@/components/atoms/text";
import { COLOR_VARIANT, TYPOGRAPH_VARIANT } from "@/utils/styles";
import { HTMLAttributes } from "react";

interface TextWithIconProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textColor?: "white" | "black" | "riseshine";
  size?: "medium";
}

export default function TextWithIcon({ leftIcon, rightIcon, textColor, size = "medium", children }: TextWithIconProps) {
  return (
    <div className={`flex items-center cursor-pointer ${TYPOGRAPH_VARIANT[size]}`}>
      {leftIcon && <span className="mr-[10px]">{leftIcon}</span>}
      <Text color={textColor} size={size}>
        {children}
      </Text>
      {rightIcon && <span className="ml-[10px]">{rightIcon}</span>}
    </div>
  );
}
