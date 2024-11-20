<script>
  	import "../app.css";
	import { setContext } from 'svelte';
	const { children } = $props();

	const slots = {};
  	setContext('layout-slots', slots);
</script>

{@render children()}

<svelte:head>
	<title>Nicholas Ross</title>

	<style lang="postcss">
	</style>

	<link
		rel="stylesheet"
		href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
	/>
</svelte:head>


<div class="flex flex-col">
	<!--#region header-->
	<img src="https://cdnb.artstation.com/p/users/covers/000/270/761/default/881a3eb81d6f71dbf63a203d241b6de3.jpg?1571870876" alt="banner" class="h-[30vh] flex place-content-center object-cover">
	<!--#endregion-->

	<!--#region nav-->
  	<div class="p-4 min-h-[5vh] flex sticky top-0 bg-[#333] place-content-center">
		<a class="text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" 
		href="/">Home</a>
		<a class="text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" 
		href="/portfolio">Portfolio</a>
		<a class="text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" 
		href="/about">About</a>
	</div>
	<!--#endregion-->

	<!--#region body-->
  	<div class="min-h-[60vh] flex flex-row">
		<div class="hidden lg:flex p-4 w-[20vw]">
			{@render slots.sidebarleft()}
		</div>
		<div class="w-[100vw] lg:w-[60vw]">
			{@render slots.bodytext()}
		</div>
		<div class="hidden lg:flex p-4 w-[20vw]">
			{@render slots.sidebarright()}
		</div>
	</div>
	<!--#endregion-->

	<!--#region footer-->
  	<div class="flex flex-col">
		<div class="p-4 h-[10vh] flex place-content-center">
			<a href="https://www.linkedin.com/in/nicholas-ross-a17023b0/" class="fa-brands fa-linkedin p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-full text-white bg-[#0077B5] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">linkedin</div>
			</a>
			<a href="https://www.github.com/lealchemist" class="fa-brands fa-github p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">github</div>
			</a>
			<a href="https://twitter.com/le_alchemist" class="fa-brands fa-twitter p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-[#1DA1F2] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">twitter</div>
			</a>
			<a href="https://lealchemist.bsky.social" class="fa-brands fa-bluesky p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-[#0085ff] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">bluesky</div>
			</a>
			<a href="https://www.youtube.com/@le_alchemist" class="fa-brands fa-youtube p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-[#FF0000] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">youtube</div>
			</a>
			<a href="https://patreon.com/NicholasRoss" class="fa-brands fa-patreon p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-[#f96854] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">patreon</div>
			</a>
		</div>
		<div class="flex place-content-center">
			Copyright © 2024
		</div>
	</div>
	<!--#endregion-->
</div>