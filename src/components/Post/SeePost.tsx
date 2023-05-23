"use client";
import Image from "next/image";
import { Dots } from "../Icons";
import { Title } from "../Title";
import { Comments } from "./Comments";
import { Shares } from "./Shares";
import { Views } from "./Views";
import { DateHelper } from "@/helpers";
import { Tag } from "../Tag";
import { IPost } from "@/interfaces";
import { Button } from "../Button";

export function SeePost({ post }: { post?: IPost }) {
  const date = DateHelper.toFormat(post?.createdAt);
  return (
    <div className="flex flex-col border-2 mt-32 w-[50vw] border-[#EAEAEA] p-4 rounded-md gap-2 shadow-lg hover:border-[#c9c9c9] hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex w-full">
        <div className="w-10 h-10 border border-gray-500 rounded-full">
          <Image
            className="rounded-full object-cover h-full"
            src={post?.image as string}
            loading="lazy"
            width={200}
            height={200}
            alt="fotoperfil"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="pl-[2%]">
            <Title bold={700}>{post?.creatorName}</Title>
            <small>{date}</small>
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

        <Button color="blue">Vote</Button>
      </div>
    </div>
  );
}
