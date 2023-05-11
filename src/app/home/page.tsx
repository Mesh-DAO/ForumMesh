import { AllPosts } from "@/components/Post/AllPosts";
import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";

export default function Home() {
  return (
    <LayoutPage>
      <div className="flex flex-row gap-8">
        <AllPosts />
        <RightPanel />
      </div>
    </LayoutPage>
  );
}
