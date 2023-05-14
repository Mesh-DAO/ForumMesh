"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { Post } from "./Post";
import { PostsShimmer } from "../Shimmer/PostsShimmer";

export function AllPosts() {
  const { posts } = useGetPosts();

  return (
    <div className="flex flex-col gap-8 h-full mt-32 w-[65%]">
      {posts.length === 0 ? (
        <PostsShimmer />
      ) : (
        posts.map((item) => {
          return <Post item={item} key={item.id} />;
        })
      )}
    </div>
  );
}
