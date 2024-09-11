<script>
	export let data;
</script>

<h1>PORTFOLIO</h1>

<div class = "row">
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes("3D")}
			<div class= "column 3D">
				<div class = "content">
					<div class= "image">
						<svg width= 30vw height= 250>
							<a href="/portfolio/{slug}">
								<mask id= "rect">
									<rect width="500" height="500" fill=blue></rect>
								</mask>
								<image width= 30vw height= auto href={image}>
							</a>
						</svg>
					</div>
					<div class= "title"><h3>{title}</h3></div>
				</div>
			</div>
		{/if}
	{/each}
	
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes("2D")}
			<div class = "column 2D">
				<div class = "content">
					<div class= "image">
						<svg width= 30vw height= 250>
							<a href="/portfolio/{slug}">
								<mask id= "rect">
									<rect width="500" height="500" fill=blue></rect>
								</mask>
								<image width= 30vw height= auto href={image}>
							</a>
						</svg>
					</div>
					<div class= "title"><h3>{title}</h3></div>	
				</div>
			</div>
		{/if}
	{/each}
</div>