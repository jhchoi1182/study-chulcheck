import React from "react";

import { TYPOGRAPH_VARIANT } from "@/utils/styles";
import { HTMLAttributes, ReactElement, cloneElement } from "react";

interface LabelWithInputProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
  label: string;
  onClick?: () => void;
}

export default function Input({ label, children, ...props }: LabelWithInputProps) {
  return (
    <div className="flex mb-10">
      <div className="w-36">
        <label htmlFor={label} className={`text-white ${TYPOGRAPH_VARIANT["medium"]}`}>
          {label}
        </label>
      </div>
      {cloneElement(children, {
        id: label,
        ...children.props,
      })}
    </div>
  );
}

Input.Text = function InputText({ ...props }: HTMLAttributes<HTMLInputElement>) {
  return <input className="rounded-lg text-black px-2 py-[6px]" {...props} />;
};
