import { DateHelper } from "@/helpers";
import { IPost } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";
import { Dots } from "../Icons";
import { Title } from "../Title";
import { Tag } from "../Tag";
import { Button } from "../Button";

export function PostOpened({ post }: { post: IPost }) {
  const [error, setError] = useState(false);
  const date = DateHelper.toFormat(post.createdAt);
  const image = !error
    ? post.image
    : `https://api.dicebear.com/6.x/pixel-art/svg?seed=${post.creatorName}`;

  return (
    <div className="flex flex-col border-2 w-[65%] border-[#EAEAEA] p-[15px] rounded-md gap-2 shadow-lg hover:border-[#c9c9c9] hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex w-full">
        <div className="w-10 h-10 border border-gray-500 rounded-full">
          <Image
            className="rounded-full"
            onError={() => setError(true)}
            src={image}
            loading="lazy"
            width={200}
            height={200}
            alt="fotoperfil"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="pl-[2%]">
            <Title bold={700}>{post.creatorName}</Title>
            <small>{date}</small>
          </div>
          <Dots />
        </div>
      </div>
      <div className="flex flex-col gap-6 pl-1">
        <Title bold={700}>{post.title}</Title>
        <Title>{post.message}</Title>
      </div>
      <div className="flex flex-row justify-between items-center">
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
