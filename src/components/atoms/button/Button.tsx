import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

export default function Button({ size = "large", className, ...props }: ButtonProps) {
  return (
    <button
      className={`${SIZE_VARIANTS[size]} bg-riseshine text-black rounded-full font-semibold ${className}`}
      {...props}
    />
  );
}

const SIZE_VARIANTS = {
  small: "w-24 h-8 text-xl",
  medium: "w-32 h-10 text-[24px]",
  large: "w-36 h-12 text-[28px]",
};
