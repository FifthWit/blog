<script lang="ts">
    import { Collapsible } from "bits-ui";
    import { slide } from "svelte/transition";
    import { ChevronsUpDown } from 'lucide-svelte';


    let { data } = $props();
    let sidebarState = $state(data.sidebar);
</script>

<div class="h-screen w-48 border-r border-secondary-200 bg-background-50 p-2 flex flex-col *:my-2">
    <a href="/" class=" w-full text-primary-700 text-2xl font-bold text-center p-2 rounded-md">{import.meta.env.VITE_PUBLIC_NAME}</a>
    <Collapsible.Root>
        <div class="w-full flex flex-row justify-between text-xl items-center pl-2 font-semibold">
            Posts
            <Collapsible.Trigger class="font-semibold border border-background-100 hover:bg-background-100 border-opacity-35 p-2 rounded-lg justify-center flex flex-row">
                <ChevronsUpDown />
            </Collapsible.Trigger>
        </div>
        <Collapsible.Content
        transition={slide}
        class="flex flex-col *:w-full text-center"
        >
            {#each data.posts as post}
                <a class="font-semibold underline underline-offset-4 my-1 p-2 bg-background-100 hover:bg-background-200 transition-all duration-150 rounded-md" href={`/posts/${post.slug}`}>{post.title}</a>
            {/each}
        </Collapsible.Content>
    </Collapsible.Root>
</div>