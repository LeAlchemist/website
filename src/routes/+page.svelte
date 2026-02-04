<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();

	let imgTag = $state('');

	function tag(tag: string) {
		imgTag = tag;
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="dropdown">
		<button class="dropbtn">Categories</button>
		<div class="dropdown-content">
			<button onclick={() => tag('')}>All</button>
			<button onclick={() => tag('3D Art')}>3D Art</button>
			<button onclick={() => tag('2D Art')}>2D Art</button>
		</div>
	</ul>

	<ul class="posts">
		{#each data.posts as post}
			{#if post.categories.includes(imgTag)}
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
			{:else if imgTag === ''}
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
			{/if}
		{/each}
	</ul>
</section>

<style>
	.dropdown {
		position: relative;
		z-index: 1;

		.dropbtn {
			padding: 16px;
			font-size: 16px;
			border: none;
			cursor: pointer;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			min-width: 200px;

			button {
				padding: 12px 16px;
				text-decoration: none;
				display: block;
			}
		}
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

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
				height: 114px;
				object-fit: cover;

				@media (min-width: 48rem) {
					height: 228px;
				}
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
