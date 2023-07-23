export function getLanguageName(lang: string | null | undefined) {
	switch (lang) {
		case 'en':
			return 'English'
		case 'de':
			return 'Deutsch'
		default:
			return lang
	}
}

export function extractLocale(lang: string | null | undefined) {
	if (lang && lang.includes('-')) {
		const index = lang.indexOf('-')
		return lang.substring(0, index)
	}

	return lang
}
