import { Ubuntu } from "next/font/google";
import React from "react";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <span className={`${ubuntu.className} text-[42px] text-riseshine cursor-pointer, ${className}`} {...props}>
      StudySync
    </span>
  );
}
