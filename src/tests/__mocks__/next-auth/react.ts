export const useSessionMock = jest.fn();

const originalModule = jest.requireActual("next-auth/react");

const mockSession = {
  user: { username: "test" },
  expires: new Date(Date.now() + 86400 * 1000).toISOString(),
};

useSessionMock.mockReturnValue({ data: mockSession, status: "authenticated" });

export const useSession = useSessionMock;

export const SessionProvider = ({ children }: { children: React.ReactNode }) => children;

export default originalModule;
