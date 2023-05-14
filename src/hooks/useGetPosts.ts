import { PostService } from "@/services/PostService";
import { PostStore } from "@/stores";
import { useEffect, useTransition } from "react";

export function useGetPosts() {
  const { posts, setPosts } = PostStore((state) => state);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      PostService.findAll()
        .then(({ data }) => setPosts(data))
        .catch((err) => console.log(err));
    });
  }, []);
  return { posts, isPending };
}
