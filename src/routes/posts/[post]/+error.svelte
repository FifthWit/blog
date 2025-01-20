<script lang="ts">
	import { page } from '$app/state';
</script>

{#if page.error}
	<div class="flex h-screen w-full items-center justify-center">
		<div class="text-center">
			<h1 class="text-5xl">{page.error.message}</h1>
			<br />
			<a href="/" class="text-2xl underline">Go Home</a>
		</div>
	</div>
{/if}
