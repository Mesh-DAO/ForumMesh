import { PostService, UserService } from "@/services";
import { PostStore } from "@/stores";
import { useEffect, useTransition } from "react";

export function useGetPostAndProfile(id?: string) {
  const { post, setPost, setAuthor, author } = PostStore((state) => state);
  const [isPending, startTransition] = useTransition();
  async function getData() {
    try {
      const { data: post } = await PostService.findOne(id!);
      setPost(post);
      const { data: profile } = await UserService.findOne(id!);
      setAuthor(profile);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    startTransition(() => {
      getData();
    });
  }, []);
  return { post, author, isPending };
}
