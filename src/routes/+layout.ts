import type { LayoutLoad } from './$types'
import { browser } from '$app/environment'
import { loadTranslations } from '$lib/translations'
import getBaseLocale from '$shared/locale'

export const load: LayoutLoad = async ({ fetch, url }) => {
	const { pathname } = url

	let initLocale = 'de' // get from cookie, user session, ...
	// if (browser) initLocale = getBaseLocale(window.navigator.language)

	const response = await fetch('/api/github', {
		method: 'POST',
		body: JSON.stringify({
			user: 'icabetong',
			repository: 'me-v3'
		})
	})

	await loadTranslations(initLocale, pathname) // keep this just before the `return`
	return await response.json()
}
