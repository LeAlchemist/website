<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<div><p>{@html data.post.date}</p></div>
<div>{@html data.post.content}</div>