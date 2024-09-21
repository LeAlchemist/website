<script>
	import img_tag from './+layout.svelte'

	export let data;
</script>

<!--#region Images-->
	<div class = "flex flex-wrap ">
		{#each data.summaries as {tag, slug, image, title}}
			{#if tag.includes("")}
				<div class= "w-auto h-[300px] text-center line-[75px] font-[30px] ">
					<a href="/portfolio/{slug}">
						<div class = "relative">
							<img class="block w-[300px] h-[300px] p-[10px]" src={image} alt={title}>
						<div class= "absolute opacity-0 hover:opacity-[1] bottom-0 bg-black bg-opacity-[0.5] text-[#f1f1f1] w-[300px] h-[300px] text-[20px] text-center"><h3>{title}</h3></div>
					</a>
				</div>
			{/if}
		{/each}
	</div>
<!--#endregion-->