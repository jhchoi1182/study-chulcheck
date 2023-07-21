import React from "react";

interface BoardProps {
  children: React.ReactNode;
  isTab?: boolean;
  height?: "full";
}

export default function Board({
  children,
  isTab,
  height = "full",
}: BoardProps) {
  return (
    <section className="flex flex-col justify-center h-full basis-1/3 text-black">
      <div
        className={`w-full h-[${HEIGHT_VARIANT[height] - (isTab ? 40 : 0)}px] ${
          isTab && "mt-[40px]"
        } bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg`}
      >
        {children}
      </div>
    </section>
  );
}

const HEIGHT_VARIANT = {
  full: 800,
};
