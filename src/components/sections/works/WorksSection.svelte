<script lang="ts">
	import Card from '$components/card/Card.svelte'
	import { mobile, web } from '$shared/works'
</script>

<section id="works" class="box">
	<h2>Works</h2>
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
</section>
