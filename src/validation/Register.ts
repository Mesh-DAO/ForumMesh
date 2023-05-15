import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterSchema = yup.object({
  username: yup.string().required("The username is required"),
  email: yup
    .string()
    .required("The e-mail is required")
    .email("Format from email invalid"),
  password: yup.string().required("The password is required"),
});

export const RegisterResolve = yupResolver(RegisterSchema);
