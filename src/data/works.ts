import {
	Android,
	Kotlin,
	Flutter,
	Dart,
	Javascript,
	Typescript,
	React,
	Nextdotjs,
	Svelte
} from '@steeze-ui/simple-icons'
import fokus from '$lib/assets/fokus.webp'
import coind from '$lib/assets/coind.webp'
import openauth from '$lib/assets/openauth.webp'
import kantina from '$lib/assets/kantina.webp'
import movieous from '$lib/assets/movieous.webp'
import zap from '$lib/assets/zap.webp'

export const mobile: Work[] = [
	{
		name: 'fokus',
		repository: 'https://github.com/icabetong/fokus-android',
		frameworks: [Android, Kotlin],
		image: fokus
	},
	{
		name: 'coind',
		repository: 'https://github.com/icabetong/coind',
		frameworks: [Flutter, Dart],
		image: coind
	},
	{
		name: 'openauth',
		repository: 'https://github.com/icabetong/openauth',
		frameworks: [Flutter, Dart],
		image: openauth
	}
]

export const web: Work[] = [
	{
		name: 'kantina',
		repository: 'https://github.com/icabetong/kantina',
		frameworks: [Svelte, Typescript],
		image: kantina
	},
	{
		name: 'movieous',
		repository: 'https://github.com/icabetong/movieous',
		frameworks: [React, Javascript],
		image: movieous
	},
	{
		name: 'zap',
		repository: 'https://github.com/icabetong/zap',
		frameworks: [React, Typescript, Nextdotjs],
		image: zap
	}
]
