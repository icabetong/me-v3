<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Sun, Moon } from '@steeze-ui/feather-icons'
	import { onMount } from 'svelte'
	import theme from '$stores/theme'

	// indicate if we're in dark mode or not
	// let dark: boolean
	// hide the control until we've decided what the intial mode is
	let hidden = true
	onMount(() => {
		// use the existence of the dark class on the html element for the initial value
		theme.set(document.documentElement.classList.contains('dark'))
		// show UI controls
		hidden = false
		// listen for changes so we auto-adjust based on system settings
		const matcher = window.matchMedia('(prefers-color-scheme: dark)')
		matcher.addEventListener('change', handleChange)
		return () => matcher.removeEventListener('change', handleChange)
	})
	function handleChange({ matches: dark }: MediaQueryListEvent) {
		// only set if we haven't overridden the theme
		if (!localStorage.theme) {
			setMode(dark)
		}
	}
	function toggle() {
		setMode(!$theme)
	}
	function setMode(value: boolean) {
		theme.set(value)
		// update page styling
		if ($theme) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		// store the theme as a local override
		localStorage.theme = $theme ? 'dark' : 'light'
		// if the toggled-to theme matches the system defined theme, clear the local override
		// this effectively provides a way to override or revert to "automatic" setting mode
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme')
		}
	}
</script>

<svelte:head>
	<!-- set dark mode class based on user preference / device settings (in head to avoid FOUC) -->
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	</script>
</svelte:head>

<button
	type="button"
	class:hidden
	on:click={toggle}
	class="group transform p-2 transition-all duration-150 hover:scale-110">
	<Icon src={$theme ? Sun : Moon} class="h-5 w-5 transition-all group-hover:text-hit" />
</button>
