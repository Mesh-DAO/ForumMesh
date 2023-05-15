import { IPost, IUser } from "@/interfaces";
import { create } from "zustand";

export interface PostStore {
  post: IPost | undefined;
  setPost: (post: IPost) => void;
  posts: IPost[];
  setPosts: (post: IPost[]) => void;
  author: IUser | undefined;
  setAuthor: (author: IUser) => void;
}
export const PostStore = create<PostStore>((set) => ({
  post: undefined,
  setPost: (post: IPost) => set(() => ({ post })),
  posts: [],
  setPosts: (posts: IPost[]) => set(() => ({ posts })),
  author: undefined,
  setAuthor: (author: IUser) => set(() => ({ author })),
}));
