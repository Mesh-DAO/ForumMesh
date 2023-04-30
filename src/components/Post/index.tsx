import React from "react";
import { Comments } from "../Comments";
import { Dots } from "../Icons/Dots";
import { Shares } from "../Shares";
import { Tag } from "../Tag";
import { Title } from "../Title";
import { Views } from "../Views";
import { IPost } from "@/interfaces/Posts/IPost";

export function Post({ item }: { item: IPost }) {
  return (
    <div className="flex flex-col border-2 w-[50vw] border-[#EAEAEA] mr-[2%] ml-[25vw] p-[15px] gap-5 rounded-md">
        <div className="flex flex-row mb-[5%]">
          <img src={item.img} alt="foto perfil" />
          <div className="flex flex-row justify-between w-full">
            <div className="pl-[2%]">
              <Title bold={700} children={item.name} />
              <small>{item.time}</small>
            </div>
            <Dots />
          </div>
        </div>
        <div>
          <Title>
            <strong>{item.title}</strong>
          </Title>
          <Title>{item.content}</Title>
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
