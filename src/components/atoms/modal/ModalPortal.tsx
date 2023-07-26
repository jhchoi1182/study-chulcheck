import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const element = document.getElementById("portal");

  if (!element) {
    return;
  }

  return ReactDOM.createPortal(children, element);
}
