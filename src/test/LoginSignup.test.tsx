import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";
import RootLayout from "@/app/layout";
import { useSessionMock } from "../../jest.setup";

describe("로그인/회원가입 테스트", () => {
  jest.mock("../libs/zustand", () => ({
    useModalStore: jest.fn(),
  }));
  const { useModalStore } = require("../libs/zustand");

  const mockSetModalType = jest.fn();
  jest.requireMock("../libs/zustand").useModalStore.mockImplementation(() => ({
    ...useModalStore,
    setModalType: mockSetModalType,
  }));

  beforeEach(() => {
    useSessionMock.mockReturnValue({ data: null, status: "unauthenticated" });
    mockSetModalType.mockImplementation((type) => {
      useModalStore().setModalType(type);
    });

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
