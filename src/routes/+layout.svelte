<script>
	import { page } from "$app/stores";
  	import "../app.css";
</script>

<head>
	<title>Nicholas Ross</title>

	<style lang="postcss">
	</style>

	<link
		rel="stylesheet"
		href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
	/>
</head>

<header>
	<h1>Nicholas Ross</h1>
</header>

<nav class= "bg-[#333]">
	<ul class= "list-none m-auto p-0 overflow-hidden w-[50vw]">
		<li class= "float-left">
			<a class="block text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" href="/" aria-current={$page.url.pathname === "/"}><h3>Home</h3></a>
		</li>

		<li class= "float-left">
			<a class="block text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" href="/portfolio" aria-current={$page.url.pathname === "/portfolio"}>Portfolio</a>
		</li>

		<!--<li class= "float-left">
			<a class="block text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" href="/blog" aria-current={$page.url.pathname === "/blog"}>Blog</a>
		</li>-->

		<li class= "float-left">
			<a class="block text-white text-center px-[16px] py-[14px] spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:bg-[#111]" href="/about" aria-current={$page.url.pathname === "/about"}>About</a>
		</li>
	</ul>
</nav>

	<slot></slot>

<footer class="m-auto text-center justify-left w-50vw">
	<!--social media links here-->
	<a href="https://www.linkedin.com/in/nicholas-ross-a17023b0/" class="fa-brands fa-linkedin p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
	</a>
	<a href="https://www.github.com/lealchemist" class="fa-brands fa-github p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
	</a>
	<a href="https://twitter.com/le_alchemist" class="fa-brands fa-twitter p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
	</a>
	<a href="https://www.youtube.com/@le_alchemist" class="fa-brands fa-youtube p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
	</a>
	<a href="https://patreon.com/NicholasRoss" class="fa-brands fa-patreon p-[16px] text-[16px] w-[48px] h-[48px] text-center rounded-[50%] text-white bg-black spring-bounce-60 spring-duration-300 transition-transform hover:scale-150 hover:z-10 hover:opacity-[50%]" target="_blank">
	</a>
</footer>
