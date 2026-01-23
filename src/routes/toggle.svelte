<script lang="ts">
	import { fly } from 'svelte/transition';
	import { theme } from '$lib/theme.svelte';
</script>

<button on:click={theme.toggle} aria-label="Toggle theme">
	{#if theme.current === 'dark'}
		<div in:fly={{ y: 10 }}>
			<i class="fa-solid fa-sun"></i>
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<i class="fa-solid fa-moon"></i>
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	button {
		font-size: var(--font-size-4);
		padding-right: 50px;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;

		> * {
			display: flex;
			gap: var(--size-2);
		}
	}
</style>
