<script>
  	import "../app.css";
</script>

<svelte:head>
	<title>Nicholas Ross</title>

	<style lang="postcss">
	</style>

	<link
		rel="stylesheet"
		href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
	/>
</svelte:head>

<div class="flex flex-col space-y-4">
	<div class="p-4 h-[20vh] flex place-content-center">
		<h1>Nicholas Ross</h1>
	</div>
  	<div class="p-4 min-h-[5vh] flex sticky top-0 bg-[#333] place-content-center">
		<a class="text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" 
		href="/">Home</a>
		<a class="text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" 
		href="/portfolio">Portfolio</a>
		<a class="text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" 
		href="/about">About</a>
	</div>

	<!--body-->
  	<div class="min-h-[60vh] flex flex-row space-x-4">
		<div class="p-4 w-[20vw]"></div>
		<div class="p-4 w-[60vw]">
			<slot></slot>
		</div>
		<div class="p-4 w-[20vw]"></div>
	</div>

	<!--footer-->
  	<div class="flex flex-col">
		<div class="p-4 h-[10vh] flex place-content-center">
			<a href="https://www.linkedin.com/in/nicholas-ross-a17023b0/" class="fa-brands fa-linkedin p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-full text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">linkedin</div>
			</a>
			<a href="https://www.github.com/lealchemist" class="fa-brands fa-github p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">github</div>
			</a>
			<a href="https://twitter.com/le_alchemist" class="fa-brands fa-twitter p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">twitter</div>
			</a>
			<a href="https://www.youtube.com/@le_alchemist" class="fa-brands fa-youtube p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">youtube</div>
			</a>
			<a href="https://patreon.com/NicholasRoss" class="fa-brands fa-patreon p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
				<div class="hidden">patreon</div>
			</a>
		</div>
		<div class="flex place-content-center">
			Copyright © 2024
		</div>
	</div>
</div>