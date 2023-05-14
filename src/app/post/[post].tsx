import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";

export default function Home() {
  return (
    <LayoutPage>
      <div className="flex flex-row gap-8">
        
        <RightPanel />
      </div>
    </LayoutPage>
  );
}
