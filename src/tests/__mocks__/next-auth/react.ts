export const SessionProvider = ({ children }: { children: React.ReactNode }) => children;
export const useSession = jest.fn();
export const signIn = jest.fn();

let mockSessionValue: MockValue = {
  data: {
    user: {
      name: "고야",
      email: "yhhnnmm@gmail.com",
    },
    expires: new Date(Date.now() + 86400 * 1000).toISOString(),
  },
};

useSession.mockImplementation(() => mockSessionValue);

signIn.mockImplementation((provider) => {
  mockSessionValue = {
    data: {
      user: {
        name: "고야",
        email: "yhhnnmm@gmail.com",
      },
      expires: new Date(Date.now() + 86400 * 1000).toISOString(),
    },
  };
  return Promise.resolve();
});

interface MockValue {
  data: {
    user: {
      name: string;
      email: string;
    };
    expires: string;
  } | null;
}

export const setMockSessionValue = (newValue: MockValue) => {
  mockSessionValue = newValue;
};
