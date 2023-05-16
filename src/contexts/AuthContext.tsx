"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { StorageHelper } from "../helpers";
import { setBearerToken } from "../providers";
import { AuthService } from "../services";
import {
  IAuthContext,
  IUser,
  ISignUpPayload,
  ILoginResponse,
} from "@/interfaces";

const AuthContext = createContext<IAuthContext>(undefined!);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(
    StorageHelper.getItem("user")
  );
  const [token, setToken] = useState<string | undefined>(
    StorageHelper.getItem("token")
  );

  async function login(username: string, password: string) {
    const { status, data } = await AuthService.login(username, password);
    if (status === 200) {
      setToken(data.token);
      setUser(data.user);
      StorageHelper.setItem("user", data.user);
      StorageHelper.setItem("token", data.token);
    }
    return { status, data };
  }

  async function signUp(payload: ISignUpPayload) {
    const { status, data } = await AuthService.signUp(payload);
    if (status === 201) {
      setUser(data);
    }
  }

  useEffect(() => {
    if (token) {
      setBearerToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, login, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
