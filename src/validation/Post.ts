import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const postSchema = yup.object({
  image: yup.string().required("The image is required"),
  message: yup.string().required("The message is required"),
  title: yup.string().required("The title is required"),
});

export const PostResolve = yupResolver(postSchema);
