<script lang="ts">
	import Sidebar from '$lib/sidebar/Sidebar.svelte'
	import Theme from '$lib/theme/Theme.svelte'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Menu } from '@steeze-ui/feather-icons'
	import { goto } from '$app/navigation'

	let show = false

	const toggleMenu = () => (show = !show)
	const navigateTo = (link: string) => {
		goto(link)
		toggleMenu()
	}
	const links = [
		{ route: '/#skills', label: 'Skills' },
		{ route: '/#works', label: 'Works' },
		{ route: '/contact', label: 'Contact' }
	]
</script>

<header class="box">
	<nav class="flex items-center justify-between py-6 px-2 md:px-8">
		<div>
			<a href="/" class="bg-clip-text text-xl font-semibold "> icabetong.me </a>
		</div>
		<div class="hidden md:block">
			<ul class="flex items-center space-x-8">
				{#each links as link}
					<li class=" transform transition-all duration-150 hover:scale-110">
						<a
							href={link.route}
							class="font-medium transition-all duration-150 ease-in-out hover:text-piccolo dark:hover:text-hit">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex items-center space-x-4">
			<Theme />
			<button class="md:hidden" type="button" on:click={toggleMenu} aria-label="navigation menu">
				<Icon src={Menu} class="h-5 w-5" />
			</button>
		</div>
	</nav>
</header>
<Sidebar {show} on:dismiss={toggleMenu}>
	<ul class="flex flex-col space-y-2">
		{#each links as link}
			<button
				class="rounded-lg px-4 py-2 text-start transition-all hover:bg-zinc-200 dark:hover:bg-zinc-700"
				type="button"
				on:click={() => navigateTo(link.route)}>
				{link.label}
			</button>
		{/each}
	</ul>
</Sidebar>
