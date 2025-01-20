<script>
	let { data } = $props();
	const processedContent = data.content.replace(/\\n/g, '<br>');
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<div class="prose">
	{@html processedContent}
</div>
