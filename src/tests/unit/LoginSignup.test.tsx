import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RootLayout from "@/app/layout";
import Home from "@/app/page";
import { signIn, useSession, setMockSessionValue } from "../__mocks__/next-auth/react";

describe("로그인/회원가입 테스트", () => {
  beforeEach(() => {
    setMockSessionValue({ data: null });

    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
  });

  test("로그인 버튼을 클릭하면 로그인 모달이 열리고 닫기를 누르면 닫힌다.", async () => {
    await userEvent.click(screen.getByRole("button", { name: "로그인" }));
    expect(await screen.findByLabelText("close")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText("close"));
    expect(screen.queryByText("close")).not.toBeInTheDocument();
  });

  test("구글 로그인 테스트", async () => {
    await userEvent.click(screen.getByRole("button", { name: "로그인" }));
    expect(await screen.findByLabelText("google")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText("google"));
    expect(signIn).toHaveBeenCalledWith("google");

    expect(useSession()).toEqual({
      data: {
        user: {
          name: "고야",
          email: "yhhnnmm@gmail.com",
        },
        expires: expect.any(String),
      },
    });
  });

  test("깃허브 로그인 테스트", async () => {
    await userEvent.click(screen.getByRole("button", { name: "로그인" }));
    expect(await screen.findByLabelText("github")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText("github"));
    expect(signIn).toHaveBeenCalledWith("github");

    expect(useSession()).toEqual({
      data: {
        user: {
          name: "고야",
          email: "yhhnnmm@gmail.com",
        },
        expires: expect.any(String),
      },
    });
  });
});
