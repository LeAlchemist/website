<script>
    export let data;

    import { getContext } from 'svelte';
    const slots = getContext('layout-slots');
    slots.bodytext = bodytext;
    slots.sidebarleft = sidebarleft;
    slots.sidebarright = sidebarright;
</script>

{#snippet bodytext()}
{#each data.post.image as image}
    <div class= "m-auto text-left justify-content-left w-[50vw] h-auto"><img src={image} alt={data.post.title}></div>
{/each}
{/snippet}

{#snippet sidebarleft()}
{/snippet}

{#snippet sidebarright()}
{/snippet}