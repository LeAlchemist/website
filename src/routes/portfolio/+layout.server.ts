import { posts } from './data';

export function load() {
    return {
        summaries: posts.map((post) => ({
            tag: post.tag,
            slug: post.slug,
            image: post.image[0],
            title: post.title,
            date: post.date,
            description: post.description
        }))
    };
}