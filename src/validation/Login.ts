import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object({
  username: yup.string().required("The username is required"),
  password: yup.string().required("The password is required"),
});

export const LoginResolve = yupResolver(loginSchema);
