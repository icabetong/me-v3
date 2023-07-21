export default function getLanguageName(lang: string | null | undefined) {
	switch (lang) {
		case 'en':
			return 'English'
		case 'de':
			return 'Deutsch'
		default:
			return lang
	}
}
