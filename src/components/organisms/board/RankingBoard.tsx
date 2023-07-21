import { Board } from "@/components/atoms/board";
import { Tab } from "@/components/atoms/button";
import { UserList } from "@/components/molecules/userList";
import React from "react";

export default function RankingBoard() {
  return (
    <Board isTab>
      <Tab />
      <UserList number={10} />
    </Board>
  );
}
