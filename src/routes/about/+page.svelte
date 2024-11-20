<script>
    import { getContext } from 'svelte';
    const slots = getContext('layout-slots');
    slots.bodytext = bodytext;
    slots.sidebarleft = sidebarleft;
    slots.sidebarright = sidebarright;
</script> 
 
{#snippet bodytext()}
<div class="flex place-content-center">
    <h1>Nicholas Vincent Ross</h1>
</div>
<div>
    <img src="https://cdnb.artstation.com/p/users/avatars/000/270/761/large/e41dadf3511f6be022a60dc10f2769a6.jpg?1580969795" alt="Nicholas Ross" class="rounded-full">
</div>
{/snippet}

{#snippet sidebarleft()}
{/snippet}

{#snippet sidebarright()}
{/snippet}