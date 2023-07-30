import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RootLayout from "@/app/layout";
import Home from "@/app/page";
import { useSessionMock } from "../__mocks__/next-auth/react";

describe("로그인/회원가입 테스트", () => {
  beforeEach(() => {
    useSessionMock.mockReturnValue({ data: null, status: "unauthenticated" });

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
});
