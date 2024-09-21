<script>
	/**
     * @param {string} img_tag
     */
	export let img_tag = "";
	/**
     * @param {string} _tag
     */
	function imgtag(_tag){
		img_tag = _tag;
		
	}

	export let data;
</script>

<!--#region filter bar-->
<nav class= "w-[100vw] m-auto bg-[#333]">
	<div class= "text-white text-[20px] text-center list-none m-auto p-0 overflow-hidden w-[50vw]">
		<ul class = "list-none m-0 p-0 overflow-hidden w-[50vw]">
			<li class= "float-left">Filters: </li>
			<li class= "float-left">
				<button class="bg-[#333] border-none color-white text-center text-[100%] text-none min-w-[100px] cursor-pointer hover:bg-[#111]" on:click={() => imgtag("")}>View All</button>
			</li>
			<li class= "float-left">
				<button class="bg-[#333] border-none color-white text-center text-[100%] text-none min-w-[100px] cursor-pointer hover:bg-[#111]" on:click={() => imgtag("3D")}>View 3D</button>
			</li>
			<li class= "float-left">
				<button class="bg-[#333] border-none color-white text-center text-[100%] text-none min-w-[100px] cursor-pointer hover:bg-[#111]" on:click={() => imgtag("2D")}>View2D</button>
			</li>
		</ul>
	</div>
</nav>
<!--#endregion-->

<!--#region Images-->
	<div class = "flex flex-wrap ">
		{#each data.summaries as {tag, slug, image, title}}
			{#if tag.includes(img_tag)}
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