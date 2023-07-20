import i18n from 'sveltekit-i18n'

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./locales/en/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/en/home.json')).default
		},
		{
			locale: 'en',
			key: 'contact',
			rotues: ['/contact'],
			loader: async () => (await import('./locales/en/contact.json')).default
		},
		{
			locale: 'de',
			key: 'common',
			loader: async () => (await import('./locales/de/common.json')).default
		},
		{
			locale: 'de',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/de/home.json')).default
		},
		{
			locale: 'de',
			key: 'contact',
			rotues: ['/contact'],
			loader: async () => (await import('./locales/de/contact.json')).default
		}
	]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
