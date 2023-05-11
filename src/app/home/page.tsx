import { AllPosts } from "@/components/Post/AllPosts";
import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";

export default function Home() {
  return (
    <LayoutPage>
      <div className="flex justify-end gap-11 h-screen py-32">
        <AllPosts />
        <RightPanel />
      </div>
    </LayoutPage>
  );
}
