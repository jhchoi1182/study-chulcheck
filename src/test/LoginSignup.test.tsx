import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";
import RootLayout from "@/app/layout";
import { useSessionMock } from "../../jest.setup";
import { LoginBox } from "@/components/molecules/modalContent";

describe("로그인/회원가입 테스트", () => {
  beforeEach(() => {
    useSessionMock.mockReturnValueOnce({ data: null, status: "unauthenticated" });
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
  });

  test("로그인 버튼을 클릭하면 로그인 모달이 열린다.", async () => {
    userEvent.click(screen.getByRole("button", { name: "로그인" }));
    expect(await screen.findByLabelText("close")).toBeInTheDocument();
  });

  test("닫기를 누르면 로그인 모달이 닫힌다.", async () => {
    const mockSetModalType = jest.fn();
    render(<LoginBox setModalType={mockSetModalType} />);
    await userEvent.click(screen.getByLabelText("close"));
    expect(mockSetModalType).toBeCalledWith("close");
  });
});
