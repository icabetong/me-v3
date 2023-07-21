import type { LayoutLoad } from './$types'
import { locale, waitLocale } from 'svelte-i18n'
import '$lib/translations'
import { browser } from '$app/environment'

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch('/api/github', {
		method: 'POST',
		body: JSON.stringify({
			user: 'icabetong',
			repository: 'me-v3'
		})
	})

	if (browser) locale.set(window.navigator.language)
	await waitLocale()
	return await response.json()
}
