<script>
	let { data } = $props();
	let processedContent = $state(data.content.replace(/\\n/g, '<br>'));
    // svelte 5 runes make me mad :(
    $effect(() => {
        processedContent = data.content.replace(/\\n/g, '<br>');
    })
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<div class="prose">
	{@html processedContent}
</div>
