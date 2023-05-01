"use client";
import { IPost } from "@/interfaces/Posts/IPost";
import { Post } from ".";
import { useEffect, useState } from "react";
import { PostService } from "@/services/PostService";

export function AllPosts() {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  useEffect(() => {
    PostService.findAll()
      .then(({ data }) => setAllPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col gap-8 h-full mt-[20rem]">
      {allPosts.map((item: IPost) => {
        return <Post item={item} />;
      })}
    </div>
  );
}
