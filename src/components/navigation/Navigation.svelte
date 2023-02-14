<script lang="ts">
	import Sidebar from '$lib/sidebar/Sidebar.svelte'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Menu } from '@steeze-ui/feather-icons'

	let show = false

	const toggleMenu = () => (show = !show)
	const links = [
		{ route: '#about', label: 'About' },
		{ route: '#skills', label: 'Skills' },
		{ route: '#works', label: 'Works' }
	]
</script>

<header class="box">
	<nav class="flex items-center justify-between py-6 px-2 md:px-0">
		<div>
			<a href="/" class="bg-clip-text text-xl font-semibold "> icabetong.me </a>
		</div>
		<div class="hidden md:block">
			<ul class="flex items-center space-x-8">
				{#each links as link}
					<li>
						<a href={link.route} class="font-medium hover:text-purple-600">{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="hidden md:block">
			<a
				href="/contact"
				class="border border-zinc-900 bg-white px-4 py-2 shadow-neu focus:translate-y-1 focus:shadow-neu-focused"
				>Let's Talk</a>
		</div>
		<div class="md:hidden">
			<button type="button" on:click={toggleMenu}>
				<Icon src={Menu} class="h-5 w-5" />
			</button>
		</div>
	</nav>
</header>
<Sidebar {show} on:dismiss={toggleMenu}>
	<ul class="flex flex-col space-y-6">
		<li>
			<a href="#about">About</a>
		</li>
		<li>
			<a href="#skills">Skills</a>
		</li>
		<li>
			<a href="#works">Works</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>
</Sidebar>
