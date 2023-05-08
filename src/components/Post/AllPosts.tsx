"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { Post } from "./Post";

export function AllPosts() {
  const posts = useGetPosts();

  return (
    <div className="flex flex-col gap-8 h-full mt-[20rem]">
      {posts.map((item) => {
        return <Post item={item} key={item.id} />;
      })}
    </div>
  );
}
