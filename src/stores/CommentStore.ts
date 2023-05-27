import { IComment } from "@/interfaces";
import { create } from "zustand";

export interface CommentStore {
  comment: IComment | undefined;
  setComment: (comment: IComment) => void;
  comments: IComment[];
  setComments: (comments: IComment[]) => void;
  showComments: boolean;
  setShowComments: (showComments: boolean) => void;
}
export const CommentStore = create<CommentStore>((set, get) => ({
  comment: undefined,
  setComment: (comment) => set(() => ({ comment })),
  comments: [],
  setComments: (comments) => set(() => ({ comments })),
  showComments: false,
  setShowComments: (showComments) => set(() => ({ showComments })),
}));
