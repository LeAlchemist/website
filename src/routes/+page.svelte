    <script>
        import { getContext } from 'svelte';
        const slots = getContext('layout-slots');
        slots.bodytext = bodytext;
        slots.sidebarleft = sidebarleft;
        slots.sidebarright = sidebarright;
    </script>
    
    {#snippet bodytext()}
    <h1>Welcome to my site</h1>
    <h3>Hey look a new website</h3>
    <p>This is going to be a new exciting adventure</p>
    {/snippet}

    {#snippet sidebarleft()}
    {/snippet}

    {#snippet sidebarright()}
    {/snippet}
    