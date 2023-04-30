import React from "react";
import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { RightPanel } from "@/components/RightPanel";
import { SideBar } from "@/components/SideBar";
import { AllPosts } from "@/components/Post/AllPosts";

export default function Forum() {
  return (
    <div>
      <Header />
      <div className="flex flex-row items-center justify-between h-screen w-full">
        <SideBar />
        <AllPosts />
        <RightPanel />
      </div>
    </div>
  );
}
