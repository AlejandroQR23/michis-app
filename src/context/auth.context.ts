import { createContext, useContext, useState } from 'react';

export type auth = {
  token?: string;
  setToken: (token: string) => void;
};

export const AuthContext = createContext<auth>({
  token: undefined,
  setToken: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
