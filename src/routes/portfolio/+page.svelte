<script>
	export let data;
</script>

<head>
	<style>
		
	</style>
</head>

<div class = "row">
	<div class= "column 3D">
		{#each data.summaries as {tag, image, description}}
			{#if tag.includes("3D")}
				<div class = "content">
					<div class= "image"><img src={image} alt={description}></div>
					<div class= "description">{description}</div>
				</div>
			{/if}
		{/each}
	</div>

	<div class = "column 2D">
		{#each data.summaries as {tag, image, description}}
			{#if tag.includes("2D")}
				<div class = "content">
					<div class= "image"><img src={image} alt={description}></div>
					<div class= "description">{description}</div>	
				</div>
			{/if}
		{/each}
	</div>
</div>