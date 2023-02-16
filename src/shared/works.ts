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

export const mobile: Work[] = [
	{
		name: 'fokus',
		description: 'Reminder app for tasks and events tailored specifically for students',
		repository: 'https://github.com/icabetong/fokus-android',
		frameworks: [Android, Kotlin],
		image: '/images/works/fokus.webp'
	},
	{
		name: 'coind',
		description: 'A realtime crypocurrency information app built using Flutter.',
		repository: 'https://github.com/icabetong/coind',
		frameworks: [Flutter, Dart],
		image: '/images/works/coind.webp'
	},
	{
		name: 'openauth',
		description:
			'A beautiful, secure and simple authenticator app that supports multiple protocols and services',
		repository: 'https://github.com/icabetong/openauth',
		frameworks: [Flutter, Dart],
		image: '/images/works/openauth.webp'
	}
]

export const web: Work[] = [
	{
		name: 'kantina',
		description: 'A small e-commerce website for the stalls inside the universities',
		repository: 'https://github.com/icabetong/kantina',
		frameworks: [Svelte, Typescript],
		image: '/images/works/kantina.webp'
	},
	{
		name: 'movieous',
		description: 'A sample theater reservation client built using React and Chakra-UI',
		repository: 'https://github.com/icabetong/movieous',
		frameworks: [React, Javascript],
		image: '/images/works/movieous.webp'
	},
	{
		name: 'zap',
		description:
			'A simple, easy to use and private file sharing service which utilizes the AnonFiles API service',
		repository: 'https://github.com/icabetong/zap',
		frameworks: [React, Typescript, Nextdotjs],
		image: '/images/works/zap.webp'
	}
]
