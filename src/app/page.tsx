import { MainSideBar } from "@/components/molecules/sidebar";
import { RankingBoard } from "@/components/organisms/board";
import React from "react";

export default function Home() {
  return (
    <main className="flex items-center h-screen">
      <MainSideBar />
      {/* <div className="h-full py-[77px]"> */}
      <RankingBoard />
      {/* </div> */}
    </main>
  );
}
