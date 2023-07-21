<script lang="ts">
	import { Github } from '@steeze-ui/feather-icons'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { _ } from 'svelte-i18n'

	export let work: Work
</script>

<li class="group flex cursor-pointer flex-col items-center text-center">
	<div class="h-76 max-w-xl overflow-hidden">
		<img src={work.image} alt={work.name} />
	</div>
	<div class="mb-6 flex flex-col items-center">
		<div class="mr-4 mt-2 flex items-center justify-center text-2xl">
			<div
				class="font-heading font-semibold transition-all ease-in-out group-hover:-translate-x-2 group-hover:text-piccolo dark:group-hover:text-hit">
				{work.name}
			</div>
			<div class="hidden h-full items-center space-x-3 text-piccolo group-hover:flex dark:text-hit">
				{#each work.frameworks as framework}
					<Icon src={framework} class="h-4 w-4" />
				{/each}
			</div>
		</div>

		<p
			class="w-2/3 text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50">
			{$_(`home.works.${work.name}`)}
		</p>
	</div>
	<a
		href={work.repository}
		target="_blank"
		rel="noopener noreferrer"
		class="button-alternate transition-scale flex w-fit items-center text-center opacity-0 transition-all ease-in-out group-hover:opacity-100">
		<Icon src={Github} class="mr-2 h-5 w-5" />
		<span>View on GitHub</span>
	</a>
</li>
