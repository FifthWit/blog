<script lang="ts">
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		setMode('dark');
	});
	let { children, data } = $props();
</script>

<ModeWatcher />
<div class="flex flex-row">
	<Sidebar {data} />
	{@render children()}
</div>
