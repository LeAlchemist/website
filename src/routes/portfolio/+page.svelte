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

<h1>PORTFOLIO</h1>
<button on:click={tag_all}>all</button>
<button on:click={tag_3d}>3D</button>
<button on:click={tag_2d}>2D</button>
<div class = "row">
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes(img_tag)}
			<div class= "column 3D">
				<div class = "content">
						<a href="/portfolio/{slug}">
							<img src={image} alt={title} class= "image">
						</a>
					<div class= "title"><h3>{title}</h3></div>
				</div>
			</div>
		{/if}
	{/each}
</div>