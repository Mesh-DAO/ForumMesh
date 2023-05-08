import { PostService } from "@/services/PostService";
import { PostStore } from "@/stores";
import { useEffect } from "react";

export function useGetPosts() {
  const { posts, setPosts } = PostStore((state) => state);
  useEffect(() => {
    PostService.findAll()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return posts;
}
