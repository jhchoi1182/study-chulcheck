import React from "react";
import { Logo } from "../../atoms/icons";
import { Txt } from "../../atoms/txt";
import { PiCrownDuotone } from "react-icons/pi";
import { Button } from "@/components/atoms/button";

export default function MainSideBar() {
  return (
    <section className="flex flex-col items-center basis-1/3">
      <Logo />
      <Button className="my-[60px]">로그인</Button>
      <div className="flex flex-col justify-around items-center h-[500px]">
        <Txt>스터디 룸 만들기</Txt>
        <Txt>스터디 룸 참가하기</Txt>
        <Txt leftIcon={<PiCrownDuotone className="text-riseshine" />}>
          아레나 참가하기
        </Txt>
      </div>
    </section>
  );
}
