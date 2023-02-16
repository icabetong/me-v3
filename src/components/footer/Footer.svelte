<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Github, Instagram, Linkedin, Mail, Twitter } from '@steeze-ui/feather-icons'
	import { links, meta } from '$shared/const'
	import GitStar from '$lib/icons/GitStar.svelte'
	import GitFork from '$lib/icons/GitFork.svelte'

	export let stars: number
	export let forks: number
	const items = [
		{ icon: Github, label: 'GitHub profile', link: links.github },
		{ icon: Linkedin, label: 'LinkedIn profile', link: links.linkedin },
		{ icon: Mail, label: 'Email', link: links.mail },
		{ icon: Twitter, label: 'Twitter profile', link: links.twitter },
		{ icon: Instagram, label: 'Instagram profile', link: links.instagram }
	]
</script>

<footer class="min-h-md py-12">
	<div class="box flex flex-col items-center justify-center">
		<ul class="grid grid-cols-5 gap-8 text-zinc-700 dark:text-zinc-300">
			{#each items as item}
				<li class="transition-scale hover:scale-120 hover:text-piccolo dark:hover:text-hit">
					<a target="_blank" rel="noopener noreferrer" href={item.link} aria-label={item.label}>
						<Icon src={item.icon} class="h-6 w-6" />
					</a>
				</li>
			{/each}
		</ul>
		<div class="mt-4 text-center text-zinc-500">
			© 2023
			<span class="font-semibold text-zinc-800 dark:text-zinc-50">{meta.author}</span>
			. All rights reserved.
		</div>
		<a
			href={meta.repository}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub Repository"
			class="mt-2 flex px-4 py-2">
			<div class="flex items-center space-x-4 text-zinc-700 dark:text-zinc-300">
				<div class="flex items-center">
					<GitStar classes="h-6 w-6 mr-4" />
					<span class="font-medium">{stars}</span>
				</div>
				<div class="flex items-center">
					<GitFork classes="h-6 w-6 mr-4" />
					<span class="font-medium">{forks}</span>
				</div>
			</div>
		</a>
	</div>
</footer>
