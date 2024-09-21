<script>
   import { page } from '$app/stores';
</script>

<div class= "grid gap-[14em] grid-cols-2 m-auto text-left justify-content-left">
    <div>
        <slot></slot>
    </div>

    <div class= "sticky top-0 p-[5px] h-[100px] w-[25vw]">
        <h2>{$page.data.post.title}</h2>
        <p>{$page.data.post.date}</p>
        <p>{@html $page.data.post.description}</p>
    </div>
</div>