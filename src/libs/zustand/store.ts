"use client";

import { create } from "zustand";

declare global {
  type ModalType = "close" | "open" | "login" | "signup";
}

interface ModalState {
  modalType: ModalType;
  setModalType: (type: ModalType) => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  modalType: "close",
  setModalType: (type: ModalType) => set(() => ({ modalType: type })),
}));
