import { ISignUpPayload, IUser } from "@/interfaces/IUsers";
import { Api } from "../providers";

function findAll() {
  return Api.get<IUser[]>("/v1/post");
}

function create(data: ISignUpPayload) {
  return Api.post<IUser>("/v1/post", data);
}

function findOne(id: string) {
  return Api.get<IUser>(`/v1/post/${id}`);
}

function updateOne(id: string, data: ISignUpPayload) {
  return Api.put<IUser>(`/v1/post/${id}`, data);
}

function deleteOne(id: string) {
  return Api.delete<IUser>(`/v1/post/${id}`);
}

export const UserService = {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
};
