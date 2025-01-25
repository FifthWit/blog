<script lang="ts">
    import { goto } from '$app/navigation';
    let { data } = $props();
    let sidebarState = $state(data.sidebar);
</script>

<div class="h-screen w-48 border-r border-secondary-200 bg-background-50">
    <h2>Blog Posts</h2>
    <ul>
        {#each data.posts as post}
            <li><a href={`/posts/${post.slug}`}>{post.title}</a></li>
        {/each}
    </ul>
</div>