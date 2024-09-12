<script>
	export let data;
</script>

<h1>PORTFOLIO</h1>

<div class = "row">
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes("3D")}
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
	
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes("2D")}
			<div class = "column 2D">
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