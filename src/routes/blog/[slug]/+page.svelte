<script>
	export let data;
</script>

<head>
	<style>
		img {
			width: 75%;
			height: 75%;
		}
	</style>
</head>

<h1>{data.post.title}</h1>
<div><p>{@html data.post.date}</p></div>
<div>{@html data.post.content}</div>
