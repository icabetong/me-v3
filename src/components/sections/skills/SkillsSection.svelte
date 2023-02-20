<script lang="ts">
	import { inview } from 'svelte-inview'
	import { Icon } from '@steeze-ui/svelte-icon'
	import colors from '$shared/colors'
	import skills from '$data/skills'
	import { annotate, annotationGroup } from 'rough-notation'

	let animationDone: boolean = false
	let headingEl: HTMLElement
	let skillsEl: HTMLElement

	const showAnimation = () => {
		if (!animationDone) {
			setTimeout(function () {
				const headingAnimation = annotate(headingEl, {
					type: 'highlight',
					padding: 12,
					color: colors.hit
				})
				const skillsAnimation = annotate(skillsEl, {
					type: 'bracket',
					padding: 12,
					color: colors.kirin,
					brackets: ['left', 'right']
				})
				annotationGroup([headingAnimation, skillsAnimation]).show()
				animationDone = true
			}, 300)
		}
	}
</script>

<section id="skills" class="bg-zinc-100 py-24 dark:bg-zinc-800">
	<div class="box flex flex-col items-center md:grid md:grid-cols-5 md:gap-8">
		<div
			use:inview={{ unobserveOnEnter: true }}
			on:enter={showAnimation}
			class="mb-4 w-full px-2 text-center md:col-span-2 md:mb-0 md:px-8">
			<h2 bind:this={headingEl} class="inline font-heading text-3xl font-bold">Skills</h2>
			<p class="text-zinc-600 dark:text-zinc-400">
				Frameworks, Programming Languages and Tools that I am familiar and comfortable working with
			</p>
		</div>
		<div class="mt-4 px-4 md:col-span-3 md:mt-0">
			<ul
				bind:this={skillsEl}
				class="grid grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-300 sm:grid-cols-3 lg:grid-cols-4">
				{#each skills as skill}
					<li
						class="transition-scale flex flex-col items-center space-y-2 rounded-lg border border-transparent py-4 px-2 hover:border-piccolo hover:text-piccolo dark:hover:border-hit dark:hover:text-hit">
						<Icon src={skill.icon} class="h-6 w-6" />
						<div>{skill.name}</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
