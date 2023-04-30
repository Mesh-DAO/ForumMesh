import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { RightPanel } from "@/components/RightPanel";
import { SideBar } from "@/components/SideBar";

export default function Forum() {
  return (
      <div>
        <Header />
        <div className="flex items-center justify-between h-screen w-full">
          <SideBar />     
          <div className="flex flex-col gap-8 h-full mt-[20%]">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
          <RightPanel />
        </div>
      </div>
  );
}