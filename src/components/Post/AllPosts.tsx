"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { Post } from "./Post";
import { PostsShimmer } from "../Shared/Shimmer/PostsShimmer";
import { TagFiltersForm } from "../Forms/TagFiltersForm";

export function AllPosts() {
  const { posts } = useGetPosts();

  return (
    <div className="flex flex-col gap-8 h-full mt-32 w-[65%]">
      <TagFiltersForm />
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
