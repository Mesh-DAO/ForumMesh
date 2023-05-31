import { IComment } from "@/interfaces";
import { Api } from "../providers";

function findAll() {
  return Api.get<IComment[]>("/v1/comment");
}

function create(data: { message: string; post: string }) {
  return Api.post<IComment>("/v1/comment", data);
}

function findAllByPost(id: string) {
  return Api.get<IComment[]>(`/v1/comment/post/${id}`);
}

function findOne(id: string) {
  return Api.get<IComment>(`/v1/comment/${id}`);
}

function updateOne(id: string, data: { message: string; post: string }) {
  return Api.patch<IComment>(`/v1/comment/${id}`, data);
}

function deleteOne(id: string) {
  return Api.delete<IComment>(`/v1/comment/${id}`);
}

export const CommentService = {
  findAll,
  findOne,
  findAllByPost,
  create,
  updateOne,
  deleteOne,
};
