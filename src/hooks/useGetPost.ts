import { PostService } from "@/services/PostService";
import { PostStore } from "@/stores";
import { useEffect, useTransition } from "react";

export function useGetPost(id: string) {
  const { setPost, post } = PostStore((state) => state);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      PostService.findOne(id)
        .then(({ data }) => setPost(data))
        .catch((err) => console.error(err));
    });
  }, [id, setPost]);
  return { post, isPending };
}
