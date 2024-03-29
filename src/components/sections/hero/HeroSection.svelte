<script lang="ts">
	import { onMount } from 'svelte'
	import { annotate, annotationGroup } from 'rough-notation'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Linkedin, Github, FileText } from '@steeze-ui/feather-icons'
	import Particles from '$components/particles/Particles.svelte'
	import colors from '$shared/colors'
	import { links } from '$data/const'
	import { _ } from 'svelte-i18n'

	let codeEl: HTMLElement | null
	let nameEl: HTMLElement
	let reactEl: HTMLElement | null
	let svelteEl: HTMLElement | null
	let gitEl: HTMLElement | null

	onMount(() => {
		codeEl = document.querySelector('#code span')
		reactEl = document.querySelector('#summary #react')
		svelteEl = document.querySelector('#summary #svelte')
		gitEl = document.querySelector('#summary #git')
		if (!codeEl || !reactEl || !svelteEl || !gitEl) return

		const name = annotate(nameEl, { type: 'box', color: colors.piccolo, padding: [8, 16] })
		const code = annotate(codeEl, {
			type: 'highlight',
			padding: 12,
			color: colors.piccolo
		})
		const react = annotate(reactEl, { type: 'underline', color: colors.kirin })
		const svelte = annotate(svelteEl, { type: 'underline', color: colors.kirin })
		const git = annotate(gitEl, { type: 'underline', color: colors.chichi })

		annotationGroup([name, code, react, svelte, git]).show()
	})
</script>

<section class="relative">
	<Particles />
	<div class="box relative flex flex-col items-start py-32 font-heading font-medium md:py-48">
		<div class="px-2 md:px-8">
			<div class="font-body text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
				{$_('home.hero.greet')}
			</div>
			<h1 bind:this={nameEl} class="my-4 inline-block text-4xl font-bold md:my-8 md:text-6xl">
				Isaiah Collins
			</h1>
			<p id="code" class="text-xl md:text-2xl">
				{@html $_('home.hero.position')}
			</p>
			<p id="summary" class="mt-8 w-full font-body text-zinc-600 dark:text-zinc-400 md:w-1/2">
				{@html $_('home.hero.summary')}
			</p>
			<div class="mt-8 flex space-x-4 font-body md:flex-row">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={links.linkedin}
					class="transition-scale group p-2"
					aria-label="LinkedIn link">
					<Icon src={Linkedin} class="h-5 w-5 transition-all group-hover:text-hit" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={links.github}
					class="transition-scale group p-2"
					aria-label="GitHub link">
					<Icon src={Github} class="h-5 w-5 transition-all group-hover:text-hit" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={links.resume}
					class="button-primary transition-scale flex items-center justify-center">
					<Icon src={FileText} class="mr-2 h-5 w-5" />
					<span class="h-full">{$_('common.actions.view-resume')}</span>
				</a>
			</div>
		</div>
	</div>
</section>
