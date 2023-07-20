export default function getBaseLocale(locale: string) {
	if (locale.includes('-')) return locale.slice(0, locale.indexOf('-'))

	return locale
}
