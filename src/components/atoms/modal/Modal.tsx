"use client";

import { useModalStore } from "@/libs/zustand";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

export function Portal({ children }: ModalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  if (!element) {
    return;
  }

  return ReactDOM.createPortal(children, element);
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
