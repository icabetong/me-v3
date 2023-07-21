<script lang="ts">
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from '@rgossiaux/svelte-headlessui'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { ChevronDown } from '@steeze-ui/feather-icons'
	import { locale, locales } from 'svelte-i18n'
	import { fade } from 'svelte/transition'
	import getLanguageName from '$shared/locale'
</script>

<Listbox bind:value={$locale} class="relative mt-2" let:open>
	<ListboxButton class="button-alternate flex w-fit items-center text-center">
		<span>{getLanguageName($locale)}</span>
		<Icon src={ChevronDown} class="ml-2 h-4 w-4" />
	</ListboxButton>
	{#if open}
		<div transition:fade>
			<ListboxOptions
				class="absolute -top-2 -translate-y-full transform overflow-hidden text-sm origin-top-right right-0 w-56 border dark:border-zinc-600 shadow-md bg-white text-zinc-600 rounded-md dark:bg-zinc-700 dark:text-white">
				{#each $locales as locale}
					<ListboxOption
						value={locale}
						class="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-500 cursor-pointer">
						{getLanguageName(locale)}
					</ListboxOption>
				{/each}
			</ListboxOptions>
		</div>
	{/if}
</Listbox>
