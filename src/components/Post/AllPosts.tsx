"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { Post } from "./Post";
import { PostsShimmer } from "../Shimmer/PostsShimmer";
import { Title } from "../Title";

export function AllPosts() {
  const { posts, isComplete } = useGetPosts();

  return (
    <div className="flex flex-col gap-8 h-full mt-32 w-[65%]">
      {!isComplete ? (
        <PostsShimmer />
      ) : posts.length > 0 ? (
        posts.map((item) => {
          return <Post item={item} key={item.id} />;
        })
      ) : (
        <Title bold={500} size="xl">
          Dont have Posts
        </Title>
      )}
    </div>
  );
}
