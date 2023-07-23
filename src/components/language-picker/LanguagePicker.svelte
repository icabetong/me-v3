<script lang="ts">
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		Transition
	} from '@rgossiaux/svelte-headlessui'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { ChevronDown } from '@steeze-ui/feather-icons'
	import { locale, locales } from 'svelte-i18n'
	import { getLanguageName, extractLocale } from '$shared/locale'
</script>

<Listbox bind:value={$locale} class="relative mt-2">
	<ListboxButton class="button-alternate flex w-fit items-center text-center">
		<span>{getLanguageName(extractLocale($locale))}</span>
		<Icon src={ChevronDown} class="ml-2 h-4 w-4" />
	</ListboxButton>
	<Transition
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
		class="absolute bottom-full origin-top-right right-0">
		<ListboxOptions
			class="absolute bottom-full mb-2 overflow-hidden text-sm origin-top-right right-0 w-56 border dark:border-zinc-600 shadow-md bg-white text-zinc-600 rounded-md dark:bg-zinc-700 dark:text-white">
			{#each $locales as locale}
				<ListboxOption
					value={locale}
					class="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-500 cursor-pointer">
					{getLanguageName(locale)}
				</ListboxOption>
			{/each}
		</ListboxOptions>
	</Transition>
</Listbox>
