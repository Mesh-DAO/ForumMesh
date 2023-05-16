import { CreatePostForm } from '@/components/Forms/CreatePostForm';
import { RightPanel } from '@/components/RightPanel';
import { LayoutPage } from '@/components/Shared';

export default function CreatePost() {
	return (
		<LayoutPage>
			<main className="flex flex-row gap-8">
				<CreatePostForm />
				<RightPanel />
			</main>
		</LayoutPage>
	)
}
