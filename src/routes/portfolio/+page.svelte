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

    import { getContext } from 'svelte';
    const slots = getContext('layout-slots');
    slots.bodytext = bodytext;
    slots.sidebarleft = sidebarleft;
    slots.sidebarright = sidebarright;
</script>

{#snippet bodytext()}
<!--#region filter bar-->
<div class= "flex flex-wrap place-content-center bg-[#333]">
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
</div>
<!--#endregion-->

<!--#region Images-->
<div class = "flex flex-wrap place-content-center gap-4">
	{#each data.summaries as {tag, slug, image, title}}
		{#if tag.includes(img_tag)}
				<a href="/portfolio/{slug}">
					<img src={image} alt={title} class="object-cover w-[100vw] lg:w-[250px] lg:h-[250px]">
				</a>
		{/if}
	{/each}
</div>
<!--#endregion-->
{/snippet}

{#snippet sidebarleft()}
{/snippet}

{#snippet sidebarright()}
{/snippet}