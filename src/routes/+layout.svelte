<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nicholas Ross</title>

	<style lang="postcss">
	</style>

	<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css" />
</svelte:head>

<div class="flex flex-col">
	<!-- #region Header -->
	<img
		src="https://cdnb.artstation.com/p/users/covers/000/270/761/default/881a3eb81d6f71dbf63a203d241b6de3.jpg?1571870876"
		alt="banner"
		class="flex h-[30vh] place-content-center"
	/>
	<!-- #endregion -->

	<!-- #region Navigation -->
	<div class="sticky top-0 flex place-content-center p-4">
		<a class="px-4 py-3.5" href="/">Home</a>
		<a class="px-4 py-3.5" href="/portfolio">Portfolio</a>
		<a class="px-4 py-3.5" href="/about">About</a>
	</div>
	<!--#endregion -->

	<!-- #region Body -->
	<div class="flex place-content-center p-4">
		{@render children()}
	</div>
	<!-- #endregion -->

	<!--#region Footer -->
	<div class="absolute inset-x-0 bottom-0 flex flex-col place-content-center p-4">
		<!-- social media links -->
		<div class="flex place-content-center">
			<a
				href="https://www.linkedin.com/in/nicholas-ross-a17023b0/"
				class="fa-brands fa-linkedin spring-bounce-60 spring-duration-300 h-12 w-12 rounded-full bg-[#0077B5] p-4 text-center text-[16px] text-white transition-transform hover:z-10 hover:scale-150 hover:opacity-50"
				target="_blank"
			>
				<div class="hidden">linkedin</div>
			</a>
			<a
				href="https://www.github.com/lealchemist"
				class="fa-brands fa-github spring-bounce-60 spring-duration-300 h-12 w-12 rounded-[50%] bg-black p-4 text-center text-[16px] text-white transition-transform hover:z-10 hover:scale-150 hover:opacity-50"
				target="_blank"
			>
				<div class="hidden">github</div>
			</a>
			<a
				href="https://twitter.com/le_alchemist"
				class="fa-brands fa-twitter spring-bounce-60 spring-duration-300 h-12 w-12 rounded-[50%] bg-[#1DA1F2] p-4 text-center text-[16px] text-white transition-transform hover:z-10 hover:scale-150 hover:opacity-50"
				target="_blank"
			>
				<div class="hidden">twitter</div>
			</a>
			<a
				href="https://lealchemist.bsky.social"
				class="fa-brands fa-bluesky spring-bounce-60 spring-duration-300 h-12 w-12 rounded-[50%] bg-[#0085ff] p-4 text-center text-[16px] text-white transition-transform hover:z-10 hover:scale-150 hover:opacity-50"
				target="_blank"
			>
				<div class="hidden">bluesky</div>
			</a>
			<a
				href="https://www.youtube.com/@le_alchemist"
				class="fa-brands fa-youtube spring-bounce-60 spring-duration-300 h-12 w-12 rounded-[50%] bg-[#FF0000] p-4 text-center text-[16px] text-white transition-transform hover:z-10 hover:scale-150 hover:opacity-50"
				target="_blank"
			>
				<div class="hidden">youtube</div>
			</a>
			<a
				href="https://patreon.com/NicholasRoss"
				class="fa-brands fa-patreon spring-bounce-60 spring-duration-300 h-12 w-12 rounded-[50%] bg-[#f96854] p-4 text-center text-[16px] text-white transition-transform hover:z-10 hover:scale-150 hover:opacity-50"
				target="_blank"
			>
				<div class="hidden">patreon</div>
			</a>
		</div>
		<!-- copyright -->
		<div class="flex place-content-center">&copy; 2024 Nicholas Ross</div>
	</div>
	<!--#endregion -->
</div>
