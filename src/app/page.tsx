import { MainSideBar } from "@/components/molecules/sidebar";
import { RankingBoard, RoomBoard } from "@/components/organisms/board";
import LoginModal from "@/components/organisms/modal/LoginModal";
import React from "react";

export default function Home() {
  return (
    <main className="flex items-center h-screen">
      <MainSideBar />
      <RankingBoard />
      <RoomBoard />
      <LoginModal />
    </main>
  );
}
