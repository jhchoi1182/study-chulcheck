import { Board } from "@/components/atoms/board";
import { Text } from "@/components/atoms/text";
import { RoomList } from "@/components/molecules/list";
import React from "react";

export default function RoomBoard() {
  return (
    <Board width="small">
      <div className="p-3 mb-6">
        <Text color="black" pointerEvents={false}>
          스터디 룸 목록
        </Text>
      </div>
      <RoomList />
    </Board>
  );
}
