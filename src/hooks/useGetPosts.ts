/* eslint-disable react-hooks/exhaustive-deps */
import { PostService } from "@/services/PostService";
import { PostStore } from "@/stores";
import { useEffect, useTransition } from "react";

export function useGetPosts() {
  const { posts, setPosts, filteredPosts } = PostStore((state) => state);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      PostService.findAll()
        .then(({ data }) => setPosts(data))
        .catch((err) => console.error(err));
    });
  }, []);
  return { posts, isPending, filteredPosts };
}
