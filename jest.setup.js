// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { server } from "./src/mock/server.js";

export const useSessionMock = jest.fn();

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual("next-auth/react");

  const mockSession = {
    user: { username: "test" },
    expires: new Date(Date.now() + 86400 * 1000).toISOString(),
  };

  useSessionMock.mockReturnValue({ data: mockSession, status: "authenticated" });

  return {
    ...originalModule,
    useSession: useSessionMock,
    SessionProvider: ({ children }) => children,
  };
});

beforeAll(() => server.listen());

afterEach(() => {
  jest.resetAllMocks();
  server.resetHandlers();
});

afterAll(() => server.close());
