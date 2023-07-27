import { FLEX_CENTER } from "@/utils/styles";
import React, { HTMLAttributes } from "react";

interface BoardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isTab?: boolean;
  width?: "full" | "small";
}

export default function Board({ children, isTab, width = "full", className }: BoardProps) {
  return (
    <section className={`${FLEX_CENTER} relative flex-col h-full basis-1/3 text-black`}>
      <div
        className={`${WIDTH_VARIANT[width]} ${
          isTab ? "h-[760px] mt-[40px] rounded-tr-lg rounded-br-lg rounded-bl-lg" : "h-[800px] rounded-lg"
        } bg-white overflow-y-auto ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

const WIDTH_VARIANT = {
  full: "w-full",
  small: "w-[330px]",
};