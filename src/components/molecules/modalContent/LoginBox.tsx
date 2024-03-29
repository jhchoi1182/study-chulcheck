"use client";

import { CloseIcon, GoogleIcon, Logo } from "@/components/atoms/icons";
import { Input } from "@/components/atoms/input";
import React from "react";
import { Button } from "@/components/atoms/button";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

interface LoginBoxProps {
  setModalType: (type: ModalType) => void;
}

export default function LoginBox({ setModalType }: LoginBoxProps) {
  return (
    <div className="flex items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[540px] h-[450px] bg-midnight rounded-lg shadow-lg">
      <CloseIcon color="white" onClick={() => setModalType("close")} />
      <Logo className="mt-8 mb-10" />
      <Input label="아이디">
        <Input.Text />
      </Input>
      <Input label="비밀번호">
        <Input.Text />
      </Input>
      <div className="flex gap-9 mb-8">
        <Button size="medium">로그인</Button>
        <Button size="medium">회원가입</Button>
      </div>
      <div className="flex gap-28">
        <GoogleIcon onClick={() => signIn("google")} />
        <BsGithub
          aria-label="github"
          size={45}
          className="text-white cursor-pointer"
          onClick={() => signIn("github")}
        />
      </div>
    </div>
  );
}
