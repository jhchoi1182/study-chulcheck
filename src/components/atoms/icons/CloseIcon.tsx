import { COLOR_VARIANT, TYPOGRAPH_VARIANT } from "@/utils/styles";
import { HTMLAttributes } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CloseIconProps extends HTMLAttributes<HTMLDivElement> {
  color: "white";
  className?: string;
  onClick: () => void;
}

export default function CloseIcon({ color, className, onClick }: CloseIconProps) {
  return (
    <div
      aria-label="close"
      className={`absolute top-3 right-3 cursor-pointer ${COLOR_VARIANT[color]} ${TYPOGRAPH_VARIANT["medium"]} ${className}`}
      onClick={onClick}
    >
      <AiOutlineClose />
    </div>
  );
}
