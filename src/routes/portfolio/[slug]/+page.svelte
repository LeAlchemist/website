<script>
    export let data;
</script>

{#each data.post.image as image}
    <div class= "m-auto text-left justify-content-left w-[50vw] h-auto"><img src={image} alt={data.post.title}></div>
{/each}