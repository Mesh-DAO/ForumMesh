import { CommentService } from "@/services";
import { CommentStore } from "@/stores";
import { useState } from "react";

export function useGetCommentsByPost() {
  const { setComments, comments } = CommentStore((state) => state);
  const [loading, setLoading] = useState(true);
  async function getComments(id: string) {
    try {
      const { data } = await CommentService.findAllByPost(id);
      setComments(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
    return comments;
  }
  return { getComments, loading };
}
