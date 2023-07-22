import React from "react";
import { Text } from "../text";
import { FLEX_CENTER } from "@/utils/styles";

export default function Tab() {
  return (
    <div className="absolute">
      <div className={`w-40 h-[40px] -mt-[40px] bg-white rounded-tl-lg rounded-tr-lg ${FLEX_CENTER}`}>
        <Text color="black">아레나 랭킹</Text>
      </div>
    </div>
  );
}
