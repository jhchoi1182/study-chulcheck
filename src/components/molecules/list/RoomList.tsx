"use client";

import { Txt } from "@/components/atoms/txt";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const mock = {
  data: {
    allUser: [
      {
        rooms: [
          {
            mode: "study",
            roomName: "안녕",
          },
          {
            mode: "arena",
            roomName: "아레나 룸",
          },
          {
            mode: "personal",
            roomName: "혼공쓰",
          },
        ],
      },
    ],
  },
};

export default function RoomList() {
  const enterRoom = () => {};

  return (
    <ul className="flex flex-col items-center">
      {mock.data.allUser[0].rooms.map(({ mode, roomName }, i) => {
        return (
          <li
            key={i}
            className="flex flex-col w-[289px] h-[163px] mb-7 bg-midnight rounded-lg cursor-pointer shadow-md hover:shadow-slate-400"
            onClick={enterRoom}
          >
            <span className="p-4 text-riseshine">{Mode[mode]}</span>
            <div className="p-4">
              <Txt>{roomName}</Txt>
            </div>
            <button className="self-end mt-auto pb-4 pr-4">
              <Txt color="riseshine" rigthIcon={<AiOutlineArrowRight />}>
                입장
              </Txt>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const Mode: { [key: string]: string } = {
  study: "스터디 룸",
  personal: "개인 스터디 룸",
  arena: "아레나 룸",
};
