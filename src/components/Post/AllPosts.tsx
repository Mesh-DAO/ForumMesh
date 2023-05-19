"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { Post } from "./Post";
import { PostsShimmer } from "../Shimmer/PostsShimmer";

export function AllPosts() {
  const { posts, filteredPosts } = useGetPosts();

  const allPosts = filteredPosts.length > 0 ? filteredPosts : posts

  return (
    <div className="flex flex-col gap-8 h-full mt-32 w-[65%]">
      {allPosts.length === 0 ? (
        <PostsShimmer />
      ) : (
        allPosts.map((item) => {
          return <Post item={item} key={item.id} />;
        })
      )}
    </div>
  );
}
