import { IPost } from "@/interfaces";
import { create } from "zustand";

export interface PostStore {
  post: IPost | undefined;
  setPost: (post: IPost) => void;
  posts: IPost[];
  setPosts: (post: IPost[]) => void;
  filteredPosts: IPost[];
  setFilteredPosts: (title: string) => void;
}
export const PostStore = create<PostStore>((set) => ({
  post: undefined,
  setPost: (post: IPost) => set(() => ({ post })),
  posts: [],
  setPosts: (posts: IPost[]) => set(() => ({ posts })),
  filteredPosts: [],
  setFilteredPosts: (title: string) => {
    set((state) => ({
      filteredPosts: state.posts.filter((post) => post.title.includes(title))
    }));
  },
}));
