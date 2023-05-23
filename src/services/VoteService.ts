import { IVote } from "@/interfaces";
import { Api } from "../providers";

function findAll() {
  return Api.get<IVote[]>("/v1/votes");
}

function create(postId: string) {
  return Api.post<IVote>("/v1/votes", { postId });
}

function findAllByPost(id: string) {
  return Api.get<IVote[]>(`/v1/votes/post/${id}`);
}

function findAllByUser(id: string) {
  return Api.get<IVote[]>(`/v1/votes/user/${id}`);
}

function deleteOne(id: string) {
  return Api.delete<IVote>(`/v1/votes/${id}`);
}

export const VoteService = {
  findAll,
  findAllByPost,
  findAllByUser,
  create,
  deleteOne,
};
