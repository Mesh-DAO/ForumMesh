"use client";
import { Card } from "@/components/Card";
import { PostOpened } from "@/components/Post";
import { LayoutPage } from "@/components/Shared";
import { PostShimmer } from "@/components/Shimmer/PostShimmer";
import { Title } from "@/components/Title";
import { useGetPosts } from "@/hooks";
import { useGetPostById } from "@/hooks/useGetPostById";
import { useGetProfile } from "@/hooks/useGetProfile";

export default function Post({ params }: { params: { post: string } }) {
  const { post, isComplete: postLoaded } = useGetPostById(params.post);
  const { profile, isComplete: profileLoaded } = useGetProfile(params.post);

  return (
    <LayoutPage>
      <div className="flex flex-row gap-8 pt-32">
        {!postLoaded ? (
          <Card className="p-5 w-[65%]">
            <PostShimmer />
          </Card>
        ) : (
          <PostOpened post={post!} />
        )}
      </div>
      <Title bold={500} size="xl">
        Comments
      </Title>
    </LayoutPage>
  );
}
