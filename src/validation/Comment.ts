import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CommentSchema = yup.object({
  message: yup.string().required("The message is required"),
});

export const CommentResolve = yupResolver(CommentSchema);
