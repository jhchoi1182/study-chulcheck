import { Ubuntu } from "next/font/google";
import React from "react";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

export default function Logo({...props}) {
  return <span className={`${ubuntu.className} text-[42px] text-riseshine cursor-pointer`} {...props}>StudySync</span>;
}
