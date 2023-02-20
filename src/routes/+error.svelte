<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import Cat from '$lib/icons/Cat.svelte'
	import { goto } from '$app/navigation'
</script>

<Navigation />
<main class="box">
	<div
		class="flex flex-col items-center space-y-16 px-2 py-16 md:flex-row md:space-y-0 md:space-x-8 md:px-8 md:py-32">
		<div class="flex-1">
			<Cat />
		</div>
		<div class="flex-1">
			<h1 class="mb-2 text-3xl font-semibold">Uh oh, something broke</h1>
			<div class="mb-8 text-zinc-600 dark:text-zinc-400">
				<p>
					The page you are looking for doesn't exist. In the meantime, say hello to the Kobe the
					cat!
				</p>
			</div>
			<button type="button" class="button-primary transition-scale" on:click={() => goto('/')}>
				Go Back to Home
			</button>
		</div>
	</div>
</main>

<svelte:head>
	<title>Error | icabetong</title>
</svelte:head>
