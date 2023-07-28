import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";
import RootLayout from "@/app/layout";
import { useSessionMock } from "../../jest.setup";

describe("로그인/회원가입 테스트", () => {
  test("로그인 버튼을 클릭하면 로그인 모달이 열린다", async () => {
    useSessionMock.mockReturnValueOnce({ data: null, status: "unauthenticated" });
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );

    userEvent.click(screen.getByRole("button", { name: "로그인" }));

    expect(await screen.findByLabelText("아이디")).toBeInTheDocument();
  });
});
