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
		description: 'Reminder app for tasks and events tailored specifically for students',
		repository: 'https://github.com/icabetong/fokus-android',
		frameworks: [Android, Kotlin],
		image: fokus
	},
	{
		name: 'coind',
		description: 'A realtime crypocurrency information app built using Flutter.',
		repository: 'https://github.com/icabetong/coind',
		frameworks: [Flutter, Dart],
		image: coind
	},
	{
		name: 'openauth',
		description:
			'A beautiful, secure and simple authenticator app that supports multiple protocols and services',
		repository: 'https://github.com/icabetong/openauth',
		frameworks: [Flutter, Dart],
		image: openauth
	}
]

export const web: Work[] = [
	{
		name: 'kantina',
		description: 'A small e-commerce website for the stalls inside the universities',
		repository: 'https://github.com/icabetong/kantina',
		frameworks: [Svelte, Typescript],
		image: kantina
	},
	{
		name: 'movieous',
		description: 'A sample theater reservation client built using React and Chakra-UI',
		repository: 'https://github.com/icabetong/movieous',
		frameworks: [React, Javascript],
		image: movieous
	},
	{
		name: 'zap',
		description:
			'A simple, easy to use and private file sharing service which utilizes the AnonFiles API service',
		repository: 'https://github.com/icabetong/zap',
		frameworks: [React, Typescript, Nextdotjs],
		image: zap
	}
]
