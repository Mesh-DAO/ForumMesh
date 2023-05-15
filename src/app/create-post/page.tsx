import { CreatePostForm } from '@/components/Forms/CreatePostForm';
import { RightPanel } from '@/components/RightPanel';
import { LayoutPage } from '@/components/Shared';

export default function CreatePost() {
	return (
		<LayoutPage>
			<main className="flex justify-end gap-11 h-screen py-32">
				<CreatePostForm />
				<RightPanel />
			</main>
		</LayoutPage>
	)
}
