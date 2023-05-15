"use client";
import { PostOpened } from "@/components/Post";
import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";
import { useGetPostAndProfile } from "@/hooks";
import { useRouter } from "next/router";

export default function Post() {
  const postId = "2";
  /* const { post, author } = useGetPostAndProfile(postId); */
  return (
    <LayoutPage>
      <div className="flex flex-row gap-8">
        {/* <PostOpened post={post!} /> */}
        <RightPanel />
      </div>
    </LayoutPage>
  );
}
