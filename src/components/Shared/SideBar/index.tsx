"use client";
import { PostStore } from "@/stores";
import {
  Search,
  List,
  Tag,
  HelpCircle,
  MessageCircle,
  Heart,
  Github,
  Instagram,
  Facebook,
} from "../../Icons";
import { MenuItem } from "./MenuItem";
import { Title } from "../../Title";
import { StorageHelper } from "@/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideBar() {
  const { setFilteredPosts } = PostStore((state) => state);
  const user = StorageHelper.getItem("user");
  const pathname = usePathname();

  return (
    <div className="fixed pt-24 pb-4 flex flex-col justify-between w-[20%] h-screen bg-white">
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center mb-5 pl-[10%]">
          <Search />
          <input
            placeholder="Search"
            onChange={({ target: { value } }) => setFilteredPosts(value)}
            className="ml-2 flex-grow no-underline outline-none no border-2 border-[#EAEAEA] rounded-md py-2 px-4 w-full h-[42px]"
          />
        </div>

        <div className="flex flex-col gap-6 w-[60%]">
          <div className="flex flex-col ">
            <Title size="sm" color="gray" className="pl-[20%] mb-[10px]">
              MENU
            </Title>
            <Link href={"/"}>
              <MenuItem active={pathname === "/"}>
                <List />
                Questions
              </MenuItem>
            </Link>
            <Link href={"/tags"}>
              <MenuItem active={pathname === "/tags"}>
                <Tag />
                Tags
              </MenuItem>
            </Link>
          </div>

          {user && (
            <div className="flex flex-col">
              <Title size="sm" color="gray" className="pl-[20%] mb-[10px]">
                PERSONAL NAVIGATOR
              </Title>
              <MenuItem active={pathname === "/profile?se=questions"}>
                <HelpCircle />
                Questions
              </MenuItem>
              <MenuItem active={pathname === "/profile?se=answers"}>
                <MessageCircle />
                Answers
              </MenuItem>
              <MenuItem active={pathname === "/profile?se=likes"}>
                <Heart />
                Likes & Votes
              </MenuItem>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-center">
        <Link href={"https://github.com/Mesh-DAO/ForumMesh"}>
          <Github />
        </Link>
        <Instagram />
        <Facebook />
      </div>
    </div>
  );
}
function getItem() {
  throw new Error("Function not implemented.");
}
