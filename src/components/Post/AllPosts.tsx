"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { Post } from "./Post";
import { PostsShimmer } from "../Shared/Shimmer/PostsShimmer";
import { TagFiltersForm } from "../Forms/TagFiltersForm";
import { PostStore } from "@/stores";

export function AllPosts() {
  const { posts, filteredPosts } = useGetPosts();
  const { selectedTag } = PostStore();
  const allPosts = filteredPosts.length > 0 ? filteredPosts : posts;

  const hotPosts = [...allPosts].sort((a, b) => {
    return b.numberComments - a.numberComments;
  });

  const recentPosts = [...allPosts].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  const topPosts = [...allPosts].sort((a, b) => {
    return b.numberVotes - a.numberVotes;
  });

  return (
    <div className="flex flex-col gap-8 h-full my-32 w-[65%]">
      <TagFiltersForm />
      {allPosts.length === 0 ? (
        <PostsShimmer />
      ) : selectedTag === "new" ? (
        recentPosts.map((item, index) => <Post item={item} key={index} />)
      ) : selectedTag === "top" ? (
        topPosts.map((item, index) => <Post item={item} key={index} />)
      ) : selectedTag === "hot" ? (
        hotPosts.map((item, index) => <Post item={item} key={index} />)
      ) : null}
    </div>
  );
}
