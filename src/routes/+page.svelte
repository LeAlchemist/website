<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug}
					><img
						src={post.preview}
						class="img"
						alt={'Preview image for ' + post.title}
						width="100%"
						height="100%"
					/></a
				>
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		grid-template-columns: auto;

		@media (min-width: 48rem) {
			grid-template-columns: auto auto;
		}

		@media (min-width: 64rem) {
			grid-template-columns: auto auto auto;
		}

		@media (min-width: 80rem) {
			grid-template-columns: auto auto auto auto;
		}

		.post {
			padding: 10px;
			position: relative;
			text-align: left;

			.img {
				width: 100%;
				height: 228px;
				object-fit: cover;
			}

			.title {
				position: absolute;
				top: 8px;
				font-size: var(--font-size-fluid-1);
				color: white;
				text-transform: capitalize;
				background-color: rgba(48, 48, 48, 0.75);
			}

			.date {
				position: absolute;
				top: 50px;
				color: white;
				background-color: rgba(48, 48, 48, 0.75);
			}

			.description {
				position: absolute;
				bottom: 8px;
				margin-top: var(--size-1);
				color: white;
				background-color: rgba(48, 48, 48, 0.75);
			}
		}
	}
</style>
