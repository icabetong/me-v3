<script lang="ts">
	import { fly } from 'svelte/transition'
	import { X } from '@steeze-ui/feather-icons'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { createEventDispatcher } from 'svelte'

	const dispatcher = createEventDispatcher()
	const dismiss = () => dispatcher('dismiss')

	export let show: boolean
</script>

{#if show}
	<div
		class="fixed top-0 right-0 z-10 flex min-h-screen w-80 flex-col overflow-y-hidden border-l border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 md:hidden"
		transition:fly={{ x: 320, opacity: 1 }}>
		<div class="mb-8 flex items-center justify-end">
			<button
				type="button"
				class="rounded hover:bg-zinc-200 dark:hover:bg-zinc-700"
				on:click={dismiss}>
				<Icon src={X} class="h-6 w-6" />
			</button>
		</div>
		<slot />
	</div>
{/if}
