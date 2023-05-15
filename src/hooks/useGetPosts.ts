import { PostService } from "@/services/PostService";
import { PostStore } from "@/stores";
import { useEffect, useState, useTransition } from "react";

export function useGetPosts() {
  const { posts, setPosts } = PostStore((state) => state);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    PostService.findAll()
      .then(({ data }) => {
        setPosts(data);
        setIsComplete(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return { posts, isComplete };
}
