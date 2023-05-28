"use client";
import { Card } from "@/components/Card";
import { SeePost } from "@/components/Post/SeePost";
import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";
import { PostShimmer } from "@/components/Shared/Shimmer/PostShimmer";
import { useGetPost } from "@/hooks/useGetPost";
import { PostStore } from "@/stores";

export default function Post({ params }: { params: { id: string } }) {
  const { post } = PostStore((state) => state);
  useGetPost(params.id);
  return (
    <LayoutPage>
      <div className="flex flex-row gap-8">
        {!post ? (
          <Card className="p-4 w-[65%] mt-32">
            <PostShimmer />
          </Card>
        ) : (
          <SeePost post={post} />
        )}
        <RightPanel />
      </div>
    </LayoutPage>
  );
}
