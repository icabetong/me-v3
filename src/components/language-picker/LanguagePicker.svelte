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
</script>

<Listbox bind:value={$locale} class="relative mt-2" horizontal>
	<ListboxButton class="button-alternate flex w-fit items-center text-center">
		<span>{$locale}</span>
		<Icon src={ChevronDown} class="ml-2 h-4 w-4" />
	</ListboxButton>
	<Transition
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0">
		<ListboxOptions>
			{#each $locales as locale}
				<ListboxOption value={locale}>
					{locale}
				</ListboxOption>
			{/each}
		</ListboxOptions>
	</Transition>
</Listbox>
