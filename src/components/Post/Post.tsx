/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import { Comments } from "../Comments";
import { Dots } from "../Icons";
import { Shares } from "../Shares";
import { Tag } from "../Tag";
import { Title } from "../Title";
import { Views } from "../Views";
import { IPost } from "@/interfaces/IPosts/IPost";
import { DateHelper } from "@/helpers";
import Image from "next/image";

export function Post({ item, key }: { item: IPost; key: string }) {
  const [error, setError] = useState(false);
  const date = DateHelper.toFormat(item.createdAt);
  const image = !error
    ? item.image
    : `https://api.dicebear.com/6.x/pixel-art/svg?seed=${"asd"}`;

  return (
    <div
      key={key}
      className="flex flex-col border-2 w-[50vw] border-[#EAEAEA] ml-[25vw] p-[15px] rounded-md gap-2"
    >
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
            <Title bold={700}>{item.creatorName}</Title>
            <small>{date}</small>
          </div>
          <Dots />
        </div>
      </div>
      <div className="flex flex-col gap-6 pl-1">
        <Title bold={700}>{item.title}</Title>
        <Title>{item.message}</Title>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row p-4 gap-4">
          <Tag>Silvio</Tag>
          <Tag>Santos</Tag>
          <Tag>Silvio Santos</Tag>
        </div>

        <div className="flex flex-row p-4 gap-2">
          <Views />
          <Comments />
          <Shares />
        </div>
      </div>
    </div>
  );
}
