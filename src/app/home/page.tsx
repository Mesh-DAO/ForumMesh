import { AllPosts } from "@/components/Post/AllPosts";
import { RightPanel } from "@/components/RightPanel";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-between">
      <AllPosts />
      <RightPanel />
    </div>
  );
}
