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
</script>

<!--#region filter bar-->
<div class=""> {img_tag}</div>
<div class= "w-[100vw] m-auto bg-[#333]">
	<div class= "text-white text-[20px] text-center">
		<ul class = "list-none m-0 p-0 overflow-hidden w-[50vw]">
			<li class= "float-left">Filters:</li>
			<li class= "float-left">{img_tag}</li>
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

<slot></slot>
