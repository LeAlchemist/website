<script>
    export let data;
</script>

<h1>{data.post.title}</h1>
{#each data.post.image as image}
    <div class= "image"><img src={image} alt={data.post.title}></div>
{/each}