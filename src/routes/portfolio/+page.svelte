<script>
	export let data;
</script>

<div class = "row">
	{#each data.summaries as {tag, image, description}}
		{#if tag.includes("3D")}
			<div class= "column 3D">
				<div class = "content">
					<div class= "image"><img src={image} alt={description}></div>
					<div class= "description">{description}</div>
				</div>
			</div>
		{/if}
	{/each}
	
	{#each data.summaries as {tag, image, description}}
		{#if tag.includes("2D")}
			<div class = "column 2D">
				<div class = "content">
					<div class= "image"><img src={image} alt={description}></div>
					<div class= "description">{description}</div>	
				</div>
			</div>
		{/if}
	{/each}
</div>