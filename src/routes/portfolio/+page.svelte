<script>
	export let data;
	
	let img_tag = "";

	function tag_all(){
		img_tag = "";
	}

	function tag_3d(){
		img_tag = "3D";
	}

	function tag_2d(){
		img_tag = "2D";
	}
</script>

<div class= filter>
	<ul>
	<li>Filters:</li>
	<li><button on:click={tag_all}>all</button></li>
	<li><button on:click={tag_3d}>3D</button></li>
	<li><button on:click={tag_2d}>2D</button></li></ul>
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