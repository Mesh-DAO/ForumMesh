import { PostStore } from "@/stores";
import { useEffect, useState } from "react";
import { PostService } from "@/services";

export function useGetPostById(id: string) {
  const { posts, setPost, setPosts, post } = PostStore((state) => state);
  const [isComplete, setIsComplete] = useState(false);
  async function getPosts() {
    const { data } = await PostService.findAll();
    setPosts(data);
  }
  useEffect(() => {
    async function Function() {
      if (posts.length === 0) {
        await getPosts();
      } else {
        const postFiltered = posts.filter((item) => item.id === id);
        setPost(postFiltered[0]);
        setIsComplete(true);
      }
    }
    Function();
  }, [posts]);
  return { post, isComplete };
}
