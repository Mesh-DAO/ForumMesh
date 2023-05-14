import { ILoginResponse, ISignUpPayload, IUser } from "@/interfaces/IUsers";
import { Api } from "../providers";

function login(email: string, password: string) {
  return Api.post<ILoginResponse>("/auth/login", { email, password });
}

function signUp(data: ISignUpPayload) {
  return Api.post<IUser>("/v1/user", data);
}

export const AuthService = {
  login,
  signUp,
};