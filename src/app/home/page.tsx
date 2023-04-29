import { Header } from "@/components/Header";
import { RightPanel } from "@/components/RightPanel";
import { SideBar } from "@/components/SideBar";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between h-screen w-full">
        <SideBar />
        <div></div>
        <RightPanel />
      </div>
      
    </>
  );
}
