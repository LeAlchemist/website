<script>
	export let data;
</script>

<head>
	<style>
		img {
			width: 25vw;
		}

		.content {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	</style>
</head>

<h1>BLOG</h1>

{#each data.summaries as { slug, title, date, content }}
	<div class="title: {title}">
		<h2><a href="/blog/{slug}">{title}</a></h2>
	</div>
	<div class="date: {date}">{@html date}</div>
	<div class="content">{@html content}</div>
{/each}
