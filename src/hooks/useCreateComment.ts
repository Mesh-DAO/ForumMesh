import { CommentService } from "@/services";
import { CommentStore } from "@/stores";
import { useState } from "react";
import toast from "react-hot-toast";

export function useCreateComment(id: string) {
  const { comments, setComments } = CommentStore();
  const [loading, setLoading] = useState(false);
  async function createComment(values: { message: string }) {
    try {
      setLoading(true);
      const data = {
        message: values.message,
        post: id,
      };
      const { data: newComment } = await CommentService.create(data);
      toast.success("Comentário criado!");
      setComments([...comments, newComment]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar comentário!");
      setLoading(false);
    }
  }

  return { createComment, loading };
}
