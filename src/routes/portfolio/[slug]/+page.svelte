<script>
    export let data;
</script>

{#each data.post.image as image}
    <div class= "m-auto text-left justify-content-left h-auto"><img src={image} alt={data.post.title}></div>
{/each}