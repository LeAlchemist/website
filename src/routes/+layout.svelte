<script>
	import { page } from "$app/stores";
</script>

<head>
	<title>Nicholas Ross</title>

	<style>
		nav {
			background-color: #333;
			font-size: 100%;
		}

		nav ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			margin: auto;
			width: 50vw;
		}

		nav li {
			float: left;
		}

		nav li a {
			display: block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}

		nav li a:hover {
			background-color: #111;
		}

		footer {
			margin: auto;
			text-align: center;
			justify-content: left;
			width: 50vw;
		}

		footer .fa-brands {
			padding: 15px;
			font-size: 15px;
			width: 15px;
			text-align: center;
			text-decoration: none;
			border-radius: 50%;
			color: white;
			background-color: black;
		}

		/* Add a hover effect if you want */
		footer .fa-brands:hover {
			opacity: 0.7;
		}

		.body {
			margin: auto;
			min-height: 50vh;
			text-align: left;
			justify-content: left;
			width: 50vw;
		}
	</style>

	<link
		rel="stylesheet"
		href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
	/>
</head>

<header><h1>Nicholas Ross</h1></header>

<nav>
	<ul>
		<li>
			<a href="/" aria-current={$page.url.pathname === "/"}> Home </a>
		</li>

		<li>
			<a
				href="/portfolio"
				aria-current={$page.url.pathname === "/portfolio"}
			>
				Portfolio
			</a>
		</li>

		<li>
			<a href="/blog" aria-current={$page.url.pathname === "/blog"}>
				Blog
			</a>
		</li>

		<li>
			<a href="/about" aria-current={$page.url.pathname === "/about"}>
				About
			</a>
		</li>
	</ul>
</nav>

<div class="body">
	<slot></slot>
</div>

<footer>
	<!--social media links here-->
	<a
		href="https://www.linkedin.com/in/nicholas-ross-a17023b0/"
		class="fa-brands fa-linkedin"
		target="_blank"
	>
	</a>
	<a
		href="https://www.github.com/lealchemist"
		class="fa-brands fa-github"
		target="_blank"
	>
	</a>
	<a
		href="https://twitter.com/le_alchemist"
		class="fa-brands fa-twitter"
		target="_blank"
	>
	</a>
	<a
		href="https://www.youtube.com/@le_alchemist"
		class="fa-brands fa-youtube"
		target="_blank"
	>
	</a>
	<!-- <a href="https://patreon.com" class="fa-brands fa-patreon" target="_blank"></a> -->
</footer>
