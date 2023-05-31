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
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostService } from "@/services";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export function SeePost({ post }: { post: IPost }) {
  const { push } = useRouter();
  const { votes } = useGetVotesByPost(post.id);
  const { createVote, loading } = useCreateVote(post.id);
  const { getComments } = useGetCommentsByPost();
  const [openOptions, setOpenOptions] = useState(false);
  const userVoted = votes.filter(
    (item) => item.userId === user.id && item.postId === post?.id
  );
  const user = StorageHelper.getItem("user");
  const userOwner = post.userId === user?.id;

  useEffect(() => {
    getComments(post.id);
  }, [getComments, post.id]);

  async function DeletePost() {
    try {
      const { status } = await PostService.deleteOne(post.id);
      if (status === 204) {
        toast.success("Post deleted!");
        return push("/");
      }
    } catch (error) {
      toast.error("Error to delete post!");
      console.error(error);
    }
  }

  if (!user) {
    return (
      <Title bold={500} size="lg" className="w-[65%] text-center mt-32">
        Não logado!
      </Title>
    );
  }

  if (!post) {
    return (
      <Card className="mt-32 w-[65%] p-4">
        <PostShimmer />
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full">
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
            {userOwner && (
              <div className="flex flex-col relative">
                <motion.button
                  className="absolute right-0 top-0"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  <Dots />
                </motion.button>
                <AnimatePresence>
                  {openOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 top-8 flex flex-col items-end gap-2 p-1"
                    >
                      <Link href={`/edit-post/${post.id}`}>
                        <Title
                          size="sm"
                          color="gray"
                          bold={500}
                          className="bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.2)] rounded w-max p-1"
                        >
                          Editar Post
                        </Title>
                      </Link>
                      <Title
                        onClick={DeletePost}
                        size="sm"
                        color="gray"
                        bold={500}
                        className="cursor-pointer bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.2)] rounded w-max p-1"
                      >
                        Deletar Post
                      </Title>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
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
