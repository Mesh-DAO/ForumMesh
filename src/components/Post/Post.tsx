"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dots, MessageSquare } from "../Icons";
import { Votes } from "./Shares";
import { Tag } from "../Tag";
import { Title } from "../Title";
import { IPost } from "@/interfaces";
import { DateHelper } from "@/helpers";
import { Comments } from "./Comments";
import { motion } from "framer-motion";
import { useGetCommentsByPost } from "@/hooks";
import { CommentStore } from "@/stores";
import { FiChevronsUp } from "react-icons/fi";

export function Post({ item }: { item: IPost }) {
  const [error, setError] = useState(false);
  const date = DateHelper.toFormat(item.createdAt);
  const { getComments } = useGetCommentsByPost();
  const { setShowComments, showComments, comments } = CommentStore();
  const image = !error
    ? item.image
    : `https://api.dicebear.com/6.x/pixel-art/svg?seed=${item.creatorName}`;

  const myPost = comments.length > 0 && comments[0].postId === item.id;

  return (
    <>
      <div className="flex flex-col relative border-2 w-[50vw] border-[#EAEAEA] rounded-md gap-2 shadow-lg hover:border-[#c9c9c9] hover:shadow-xl transition-all duration-300 ease-in-out">
        <Link href={`post/${item.id}`} className="p-[15px]">
          <div className="flex w-full">
            <div className="w-10 h-10 border border-gray-500 rounded-full">
              <Image
                className="rounded-full object-cover h-full"
                onError={() => setError(true)}
                src={image}
                loading="lazy"
                width={200}
                height={200}
                alt="fotoperfil"
              />
            </div>
            <div className="flex flex-col w-full pl-2">
              <Title bold={500} size="lg">
                @{item.creatorName.toLowerCase()}
              </Title>
              <Title bold={400} size="xs">
                {date}
              </Title>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Title bold={700} size="lg">
              {item.title}
            </Title>
            <Title size="sm">{item.message}</Title>
          </div>
          <div className="flex flex-row p-4 gap-4">
            <Tag>Silvio</Tag>
            <Tag>Santos</Tag>
            <Tag>Silvio Santos</Tag>
          </div>
        </Link>

        <div className="flex flex-row p-4 gap-2 absolute right-4 bottom-4">
          <span className="flex flex-row items-center gap-1">
            <MessageSquare />
            {item.numberComments}
          </span>
          <Votes votes={item.numberVotes} />
          {item.numberComments > 0 && (
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowComments(!showComments)}
            >
              {myPost && showComments ? (
                <div className="flex items-center gap-1 cursor-pointer bg-[rgba(0,0,0,.1)] p-2 rounded">
                  <FiChevronsUp color="#5271DB" />
                  <Title size="sm" bold={500} className="text-[#5271DB]">
                    Hide Comments
                  </Title>
                </div>
              ) : (
                <Title
                  bold={500}
                  onClick={() => getComments(item.id)}
                  size="sm"
                  className="bg-[rgba(0,0,0,.1)] p-2 rounded ml-2 hover:bg-[rgba(0,0,0,.2)] cursor-pointer"
                >
                  See comments
                </Title>
              )}
            </motion.button>
          )}
        </div>
      </div>
      <Comments isOpen={showComments && myPost} id={item.id} />
    </>
  );
}
