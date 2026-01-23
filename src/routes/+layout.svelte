<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	let { children, data } = $props();
</script>

<div
	class="background"
	style="background-image: url(./Background/Sticker_Bomb_Oddities_basecolor.png);"
>
	<div class="layout">
		<Header />

		<main>
			<PageTransition url={data.url}>
				{@render children?.()}
			</PageTransition>
		</main>

		<Footer />
	</div>
</div>

<style>
	.background {
		background-size: 1024px;
		background-repeat: repeat;
	}

	.layout {
		min-height: 100vh;
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);

		@media (min-width: 1440px) {
			padding-inline: 0;
		}

		main {
			background-color: light-dark(#ffffff83, #00000083); /* Black w/opacity/see-through */

			/* Apply the blur effect to the background area */
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px); /* For Safari support */

			padding-block: var(--size-9);
		}
	}
</style>
