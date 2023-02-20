<script lang="ts">
	import { inview } from 'svelte-inview'
	import { annotate } from 'rough-notation'
	import Card from '$components/card/Card.svelte'
	import { mobile, web } from '$data/works'
	import colors from '$shared/colors'

	let animationDone: boolean = false
	let titleEl: HTMLElement
	const showAnimation = () => {
		if (!animationDone) {
			setTimeout(function () {
				annotate(titleEl, {
					type: 'circle',
					padding: [16, 48],
					color: colors.chichi
				}).show()
				animationDone = true
			}, 500)
		}
	}
</script>

<section id="works">
	<div class="box flex flex-col items-center py-16">
		<h2
			use:inview={{ unobserveOnEnter: true }}
			on:enter={showAnimation}
			bind:this={titleEl}
			class="inline font-heading text-3xl font-bold">
			Works
		</h2>
		<div class="mt-8 flex flex-col items-center justify-center space-y-16">
			<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each mobile as work}
					<Card {work} />
				{/each}
			</ul>
			<ul class="space-y-8">
				{#each web as work}
					<Card {work} />
				{/each}
			</ul>
		</div>
	</div>
</section>
