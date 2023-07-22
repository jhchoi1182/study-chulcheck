import { COLOR_VARIANT, TYPOGRAPH_VARIANT } from "@/utils/styles";
import { HTMLAttributes } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CloseProps extends HTMLAttributes<HTMLDivElement> {
  color: "white";
  className?: string;
}

export default function Close({ color, className, ...props }: CloseProps) {
  return (
    <div
      className={`absolute top-3 right-3 cursor-pointer ${COLOR_VARIANT[color]} ${TYPOGRAPH_VARIANT["medium"]} ${className}`}
      {...props}
    >
      <AiOutlineClose />
    </div>
  );
}
