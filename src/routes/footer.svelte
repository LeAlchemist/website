<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<div class="copyright">
		{config.title} &copy {new Date().getFullYear()}
	</div>

	<div class="disclaimer">
		All content on this site is my own. This site is built with SvelteKit, published on Github, and
		hosted on Cloudflare Pages.
	</div>

	<div class="socials">
		<a href={config.linkedIn} target="_blank" class="fa-brands fa-linkedin">
			<div class="social">linkedIn</div>
		</a>
		<a href={config.github} target="_blank" class="fa-brands fa-github">
			<div class="social">github</div>
		</a>
		<a href={config.twitter} target="_blank" class="fa-brands fa-twitter">
			<div class="social">twitter</div>
		</a>
		<a href={config.bsky} target="_blank" class="fa-brands fa-bluesky">
			<div class="social">bluesky</div>
		</a>
		<a href={config.youtube} target="_blank" class="fa-brands fa-youtube">
			<div class="social">youtube</div>
		</a>
		<a href={config.twitch} target="_blank" class="fa-brands fa-twitch">
			<div class="social">twitch</div>
		</a>
		<a href={config.patreon} target="_blank" class="fa-brands fa-patreon">
			<div class="social">patreon</div>
		</a>
	</div>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);

		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}

		.fa-brands {
			font-size: 24px;
			padding: 4px;
		}

		.fa-linkedin {
			color: #0077b5;
		}

		.fa-github {
			color: light-dark(black, white);
		}

		.fa-twitter {
			color: #1da1f2;
		}

		.fa-bluesky {
			color: #0085ff;
		}

		.fa-youtube {
			color: #ff0000;
		}

		.fa-twitch {
			color: #6441a5;
		}

		.fa-patreon {
			color: #f96854;
		}

		.social {
			display: none;
		}
	}
</style>
