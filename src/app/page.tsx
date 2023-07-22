import { LoginModal } from "@/components/molecules/modal";
import { MainSideBar } from "@/components/molecules/sidebar";
import { RankingBoard, RoomBoard } from "@/components/organisms/board";
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
