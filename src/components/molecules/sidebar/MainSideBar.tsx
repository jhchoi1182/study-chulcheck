"use client";

import React from "react";
import { Logo } from "../../atoms/icons";
import { Text } from "../../atoms/text";
import { PiCrownDuotone } from "react-icons/pi";
import { Button } from "@/components/atoms/button";
import { useModalStore } from "@/libs/zustand";
import { TextWithIcon } from "../text";
import { signOut, useSession } from "next-auth/react";

export default function MainSideBar() {
  const { setModalType } = useModalStore();
  const { data: session } = useSession();
  console.log(session);

  return (
    <section className="flex flex-col items-center basis-1/3">
      <Logo />
      {session ? (
        <Button className="my-[60px]" onClick={() => signOut()}>
          로그아웃
        </Button>
      ) : (
        <Button className="my-[60px]" onClick={() => setModalType("login")}>
          로그인
        </Button>
      )}
      <div className="flex flex-col justify-around items-center h-[500px]">
        <Text>스터디 룸 만들기</Text>
        <Text>스터디 룸 참가하기</Text>
        <TextWithIcon leftIcon={<PiCrownDuotone className="text-riseshine" />}>아레나 참가하기</TextWithIcon>
      </div>
    </section>
  );
}
