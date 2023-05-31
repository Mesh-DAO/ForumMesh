"use client";
import Image from "next/image";
import { Dots } from "../Icons";
import { Title } from "../Title";
import { DateHelper, StorageHelper } from "@/helpers";
import { Tag } from "../Tag";
import { IPost } from "@/interfaces";
import { Button } from "../Button";
import { useGetVotesByPost } from "@/hooks/useGetVotesByPost";
import { useCreateVote, useGetCommentsByPost } from "@/hooks";
import { PostShimmer } from "../Shared/Shimmer/PostShimmer";
import { Card } from "../Card";
import { Comments } from "./Comments";
import { useEffect } from "react";

export function SeePost({ post }: { post: IPost }) {
  const user = StorageHelper.getItem("user");
  if (!user)
    return (
      <Title bold={500} size="lg" className="w-[65%] text-center mt-32">
        Não logado!
      </Title>
    );
  const { votes } = useGetVotesByPost(post.id);
  const { createVote, loading } = useCreateVote(post.id);
  const { getComments } = useGetCommentsByPost();
  const userVoted = votes.filter(
    (item) => item.userId === user.id && item.postId === post?.id
  );

  useEffect(() => {
    getComments(post.id);
  }, []);

  if (!post) {
    return (
      <Card className="mt-32 w-[65%] p-4">
        <PostShimmer />
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border-2 mt-32 w-[50vw] border-[#EAEAEA] p-4 rounded-md gap-2 shadow-lg hover:border-[#c9c9c9] hover:shadow-xl transition-all duration-300 ease-in-out">
        <div className="flex w-full">
          <div className="w-10 h-10 border border-gray-500 rounded-full">
            <Image
              className="rounded-full object-cover h-full"
              src={post.image}
              loading="lazy"
              width={200}
              height={200}
              alt="fotoperfil"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="pl-[2%]">
              <Title bold={700}>{post?.creatorName.toLowerCase()}</Title>
              <small>{DateHelper.toFormat(post?.createdAt)}</small>
            </div>
            <Dots />
          </div>
        </div>
        <div className="flex flex-col gap-6 pl-1">
          <Title bold={700}>{post?.title}</Title>
          <Title>{post?.message}</Title>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row p-4 gap-4">
            <Tag>Silvio</Tag>
            <Tag>Santos</Tag>
            <Tag>Silvio Santos</Tag>
          </div>

          <Button
            color="blue"
            disable={userVoted.length > 0}
            onClick={createVote}
          >
            {loading ? "Loading..." : userVoted.length > 0 ? "Voted" : "Vote"}
          </Button>
        </div>
      </div>
      <Comments isOpen={true} id={post.id} slice={50} />
    </div>
  );
}
