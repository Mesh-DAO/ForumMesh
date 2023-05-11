import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const createUserFormSchema = yup.object({
  username: yup
    .string()
    .required("The username is required")
    .min(6, "The username need from in the minimum 6 characters"),
  email: yup
    .string()
    .required("The e-mail is required")
    .email("Format from email invalid"),
  password: yup
    .string()
    .required("The password is required")
    .min(6, "The password need from in the minimum 6 characters"),
  repeatPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const createUserFormResolve = yupResolver(createUserFormSchema);
