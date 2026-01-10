<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nicholas Ross</title>
</svelte:head>

<div class="flex flex-col">
	<!-- #region Header -->
	<div class="">
		<div>Nicholas Ross</div>
	</div>
	<!-- #endregion -->

	<!-- #region Navigation -->
	<div class="sticky top-0 flex place-content-center p-4">
		<a class="px-[16px] py-[14px]" href="/">Home</a>
		<a class="px-[16px] py-[14px]" href="/about">About</a>
		<a class="px-[16px] py-[14px]" href="/portfolio">Portfolio</a>
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
		<div class="flex place-content-center">Test</div>
		<!-- copyright -->
		<div class="flex place-content-center">&copy; 2024 Nicholas Ross</div>
	</div>
	<!--#endregion -->
</div>
