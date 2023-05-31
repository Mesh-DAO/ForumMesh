import { IPost, IPostPayload } from "@/interfaces";
import { Api } from "../providers";

function findAll() {
  return Api.get<IPost[]>("/v1/post");
}

function create(data: IPostPayload) {
  return Api.post<IPost>("/v1/post", data);
}

function findOne(id: string) {
  return Api.get<IPost>(`/v1/post/${id}`);
}

function updateOne(id: string, data: IPostPayload) {
  return Api.patch<IPost>(`/v1/post/${id}`, data);
}

function deleteOne(id: string) {
  return Api.delete<IPost>(`/v1/post/${id}`);
}

export const PostService = {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
};
