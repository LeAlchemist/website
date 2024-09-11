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

        aside {
            position: sticky;
            top: 0;
            padding: 5px;
            height: 100px;
        }
    </style>
</head>

<div class= "layout">
    <main>
        <slot></slot>
    </main>

    <aside>
        <h3>{$page.data.post.title}</h3>
        <p>{$page.data.post.date}</p>
        <p>{@html $page.data.post.description}</p>
    </aside>
</div>