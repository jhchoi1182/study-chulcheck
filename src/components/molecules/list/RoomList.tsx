"use client";

import { Text } from "@/components/atoms/text";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TextWithIcon } from "../text";

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
            className="flex flex-col w-[289px] h-[163px] mb-7 bg-midnight rounded-lg cursor-pointer shadow-md hover:shadow-xl"
            onClick={enterRoom}
          >
            <span className="p-4 text-riseshine">{Mode[mode]}</span>
            <div className="p-4">
              <Text>{roomName}</Text>
            </div>
            <button className="self-end mt-auto pb-4 pr-4">
              <TextWithIcon textColor="riseshine" rightIcon={<AiOutlineArrowRight className="text-riseshine" />}>
                입장
              </TextWithIcon>
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
