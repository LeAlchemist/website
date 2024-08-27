<script>
	export let data;
</script>

<h1>blog</h1>

{#each data.summaries as { slug, title, date, content }}
	<div class="title: {title}">
		<h2><a href="/blog/{slug}">{title}</a></h2>
	</div>
	<div class="date: {date}"><p>{@html date}</p></div>
	<div class="content"><p>{@html content}</p></div>
{/each}

<style>
	.content {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
