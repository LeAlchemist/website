import { posts } from './data';

export function load() {
    return {
        summaries: posts.map((post) => ({
            tag: post.tag,
            image: post.image,
            description: post.description
        }))
    };
}