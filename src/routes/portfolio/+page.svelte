<script>
	export let data;
	
	let img_tag = "";

	/**
     * @param {string} _tag
     */
	function imgtag(_tag){
		img_tag = _tag;
	}
</script>

<div class= filter>
	<ul>
	<li>Filters:</li>
	<li><button on:click={() => imgtag("")}>all</button></li>
	<li><button on:click={() => imgtag("3D")}>3D</button></li>
	<li><button on:click={() => imgtag("2D")}>2D</button></li></ul>
</div>
<div class = "row">
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes(img_tag)}
			<div class= "column 3D">
				<a href="/portfolio/{slug}">
					<div class = "content">
						<img src={image} alt={title} class= "image">
					<div class= "title"><h3>{title}</h3></div>
				</a>
			</div>
		{/if}
	{/each}
</div>