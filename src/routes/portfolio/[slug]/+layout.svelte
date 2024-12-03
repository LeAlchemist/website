<script>
   import { page } from '$app/stores';

   let {children} = $props();

</script>

    <div class= "sticky top-[80px] p-[5px] bg-white">
        <h2>{$page.data.post.title}</h2>
        <p>{$page.data.post.date}</p>
        <p>{@html $page.data.post.description}</p>
    </div>
    <div>
        {@render children()}
    </div>    