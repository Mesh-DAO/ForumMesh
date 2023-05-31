import { UpdatePostForm } from "@/components/Forms/UpdatePostForm";
import { RightPanel } from "@/components/RightPanel";
import { LayoutPage } from "@/components/Shared";

export default function EditPost({ params }: { params: { id: string } }) {
  return (
    <LayoutPage>
      <main className="flex gap-11 h-screen">
        <UpdatePostForm postId={params.id} />
        <RightPanel />
      </main>
    </LayoutPage>
  );
}
