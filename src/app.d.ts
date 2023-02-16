// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { IconSource } from '@steeze-ui/svelte-icon/types'

declare global {
	namespace App {}
	type Work = {
		name: string
		description: string
		repository: string
		frameworks: typeof IconSource
		image: string
	}
}

export {}
