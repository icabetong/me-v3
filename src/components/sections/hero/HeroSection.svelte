<script lang="ts">
	import { onMount } from 'svelte'
	import { annotate, annotationGroup } from 'rough-notation'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Linkedin, Github, Download, FileText } from '@steeze-ui/feather-icons'
	import colors from '$shared/colors'
	import Particles from '$components/particles/Particles.svelte'

	let codeEl: HTMLElement
	let nameEl: HTMLElement
	let reactEl: HTMLElement
	let svelteEl: HTMLElement
	let gitEl: HTMLElement

	onMount(() => {
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
				Hello, my name is
			</div>
			<h1 bind:this={nameEl} class="my-4 inline-block text-4xl font-bold md:my-8 md:text-6xl">
				Isaiah Collins
			</h1>
			<p class="text-xl md:text-2xl">
				...and I turn <span bind:this={codeEl} class="font-semibold text-hit">
					ideas into code
				</span>
				for a living
			</p>
			<p class="mt-8 w-full font-body text-zinc-600 dark:text-zinc-400 md:w-1/2">
				A hardworking and compassionate developer, I develop web applications written in
				<span bind:this={reactEl}>React</span>, Angular or <span bind:this={svelteEl}>Svelte</span>,
				with experience writing Cypress UI and unit tests in Jest. Also comfortable in using various
				developer tools such as
				<span bind:this={gitEl}>Git</span> and Jira.
			</p>
			<div class="mt-8 flex flex-col font-body md:flex-row">
				<div class="hidden md:block">
					<button type="button" class="button-alternate">
						<Icon src={Linkedin} class="h-5 w-5" />
					</button>
					<button type="button" class="button-alternate">
						<Icon src={Github} class="h-5 w-5" />
					</button>
				</div>
				<button type="button" class="button-primary flex items-center justify-center">
					<Icon src={FileText} class="mr-2 h-5 w-5" />
					<span class="h-full">View Resume</span>
				</button>
			</div>
		</div>
	</div>
</section>