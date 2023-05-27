"use client";
import { SeePost } from "@/components/Post/SeePost";
import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";
import { PostStore } from "@/stores";
import { useEffect } from "react";

export default function Post({ params }: { params: { id: string } }) {
  const { getOnePost, post } = PostStore((state) => state);
  useEffect(() => {
    getOnePost(params.id);
  }, []);
  return (
    <LayoutPage>
      <div className="flex flex-row gap-8">
        <SeePost post={post!} />
        <RightPanel />
      </div>
    </LayoutPage>
  );
}
