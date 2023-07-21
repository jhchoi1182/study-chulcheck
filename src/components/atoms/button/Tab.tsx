import React from "react";
import { Txt } from "../txt";

export default function Tab() {
  return (
    <div className="absolute">
      <div className="flex justify-center w-40 h-[40px] -mt-[40px] bg-white rounded-tl-lg rounded-tr-lg">
        <Txt color="black">아레나 랭킹</Txt>
      </div>
    </div>
  );
}
