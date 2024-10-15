import { dev } from '$app/environment';
import type { Post } from '$lib/types';

export const getPosts = async () => {
	let posts: Post[] = [];

	const mdPaths = import.meta.glob('/posts/*/page.md', { eager: true });

	for (const path in mdPaths) {
		const file = mdPaths[path];
		const slug = path.split('/').slice(2)[0];

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } as Post;

			if (!post.draft) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
};