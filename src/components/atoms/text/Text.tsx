import { COLOR_VARIANT, TYPOGRAPH_VARIANT } from "@/utils/styles";
import React from "react";

interface TestProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "white" | "black" | "riseshine";
  size?: "medium";
  pointerEvents?: boolean;
}

export default function Test({
  size = "medium",
  color = "white",
  pointerEvents = true,
  className,
  ...props
}: TestProps) {
  return (
    <span
      className={`text-2xl font-semibold ${pointerEvents && "cursor-pointer"} ${COLOR_VARIANT[color]} ${
        TYPOGRAPH_VARIANT[size]
      } ${className}`}
      {...props}
    />
  );
}
