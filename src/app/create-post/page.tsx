import { CreatePostForm } from '@/components/Forms/CreatePostForm';
import { RightPanel } from '@/components/RightPanel';
import { LayoutPage } from '@/components/Shared';

export default function CreatePost() {
	return (
		<LayoutPage>
			<main className="flex gap-11 h-screen">
				<CreatePostForm />
				<RightPanel />
			</main>
		</LayoutPage>
	)
}
