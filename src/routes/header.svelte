<script lang="ts">
	import Toggle from './toggle.svelte';
	import * as config from '$lib/config';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/">Portfolio</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		background-color: light-dark(#ffffff83, #00000083); /* Black w/opacity/see-through */

		/* Apply the blur effect to the background area */
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px); /* For Safari support */

		padding-block: var(--size-5);

		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}

		.title {
			padding-left: 50px;
		}

		.links {
			margin-block: var(--size-7);

			@media (min-width: 768px) {
				display: flex;
				gap: var(--size-7);
				margin-block: 0;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
