"use client";

import { useModalStore } from "@/libs/zustand";

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
