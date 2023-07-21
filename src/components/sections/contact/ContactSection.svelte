<script lang="ts">
	import { fly } from 'svelte/transition'
	import { inview } from 'svelte-inview'
	import { onMount } from 'svelte'
	import { _ } from 'svelte-i18n'

	let visible: boolean = false

	onMount(() => {})
</script>

<section class="relative h-72 bg-zinc-100 dark:bg-zinc-800">
	<div class="box py-16">
		<div
			use:inview={{ unobserveOnEnter: true }}
			on:enter={() => (visible = true)}
			class="flex flex-col items-center justify-center space-y-4">
			{#if visible}
				<h3 in:fly={{ y: 80, duration: 1000 }} class="font-heading text-2xl font-bold md:text-4xl">
					{$_('home.contact.header')}
				</h3>
				<p
					in:fly={{ y: 50, duration: 1500 }}
					class="text-center text-lg text-zinc-600 dark:text-zinc-400">
					{$_('home.contact.summary')}
				</p>
				<a
					in:fly={{ y: 20, duration: 2000 }}
					href="/contact"
					rel="noopener noreferrer"
					class="button-primary transition-scale px-16 py-4 text-center text-lg">
					{$_('common.actions.say-hello')}
				</a>
			{/if}
		</div>
	</div>
</section>
