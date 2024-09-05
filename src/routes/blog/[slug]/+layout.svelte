<script>
	export let data;
</script>

<head>
	<style>
		@media (min-width: 960px) {
			.content {
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}

			.content img {
				width: 10vw;
			}

			.layout {
				display: grid;
				gap: 2em;
				grid-template-columns: 1fr 16em;
			}
		}
	</style>
</head>

<div class="layout">
	<main>
		<slot></slot>
	</main>

	<aside>
		<h2>More posts</h2>

		{#each data.summaries.slice(0, 5) as { slug, title, date, content }}
			<div class="title {title}">
				<h3><a href="/blog/{slug}">{title}</a></h3>
			</div>
			<div class="date {date}">{@html date}</div>
			<div class="content">{@html content}</div>
		{/each}
	</aside>
</div>
