<script>
   import { page } from '$app/stores';
</script>

<head>
    <style>
        .body {
			margin: auto;
			min-height: 50vh;
			text-align: left;
			justify-content: left;
			width: 50vw;
		}

        .layout {
			display: grid;
		    gap: 2em;
		    grid-template-columns: 1fr 16em;
		}
    </style>
</head>

<div class= "layout">
    <main>
        <slot></slot>
    </main>

    <aside>
        {@html $page.data.post.description}
    </aside>
</div>