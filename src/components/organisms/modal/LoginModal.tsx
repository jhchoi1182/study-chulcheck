"use client";

import { Modal, ModalPortal } from "@/components/atoms/modal";
import LoginBox from "@/components/molecules/modalContent/LoginBox";
import { useModalStore } from "@/libs/zustand";
import React from "react";

export default function LoginModal() {
  const { modalType, setModalType } = useModalStore();
  return (
    <>
      {modalType === "login" && (
        <ModalPortal>
          <Modal.BackDrop>
            <LoginBox setModalType={setModalType} />
          </Modal.BackDrop>
        </ModalPortal>
      )}
    </>
  );
}
