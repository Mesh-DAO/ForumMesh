import { IVote } from "@/interfaces";
import { create } from "zustand";

export interface VoteStore {
  post: IVote | undefined;
  setPost: (post: IVote) => void;
  votes: IVote[];
  setVotes: (votes: IVote[]) => void;
}
export const VoteStore = create<VoteStore>((set, get) => ({
  post: undefined,
  setPost: (post: IVote) => set(() => ({ post })),
  votes: [],
  setVotes: (votes: IVote[]) => set(() => ({ votes })),
}));
