"use client";

import { useModalStore } from "@/libs/zustand";
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

export function Portal({ children }: ModalProps) {
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.getElementById("portal");
  if (!node) {
    return null;
  }

  return ReactDOM.createPortal(children, node);
}

interface ModalBackDropProps extends React.HTMLAttributes<HTMLDivElement> {
  notClose?: boolean;
  children: React.ReactNode;
}

export const BackDrop = ({ notClose = true, children }: ModalBackDropProps) => {
  const { setModalType } = useModalStore();

  const toggleModal = notClose ? undefined : () => setModalType("close");

  return (
    <div onClick={toggleModal} className="absolute w-screen h-screen inset-0">
      {children}
    </div>
  );
};
