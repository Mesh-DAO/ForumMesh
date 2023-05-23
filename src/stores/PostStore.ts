import { IPost } from "@/interfaces";
import { create } from "zustand";

export interface PostStore {
  post: IPost | undefined;
  setPost: (post: IPost) => void;
  posts: IPost[];
  setPosts: (post: IPost[]) => void;
  filteredPosts: IPost[];
  setFilteredPosts: (title: string) => void;
  getOnePost: (id: string) => Promise<IPost>;
}
export const PostStore = create<PostStore>((set, get) => ({
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
  getOnePost: async (id: string) => {
    const { posts } = get();
    const post = posts.filter((item) => item.id === id);
    set(() => ({ post: post[0] }));
    return post[0];
  },
}));
