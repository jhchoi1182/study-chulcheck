import { Board } from "@/components/atoms/board";
import { Txt } from "@/components/atoms/txt";
import { RoomList } from "@/components/molecules/list";
import React from "react";

export default function RoomBoard() {
  return (
    <Board width="small">
      <div className="p-3 mb-6">
        <Txt color="black">스터디 룸 목록</Txt>
      </div>
      <RoomList />
    </Board>
  );
}
