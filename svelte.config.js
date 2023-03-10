import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/kit/vite'
import * as path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/components'),
			$data: path.resolve('./src/data'),
			$lib: path.resolve('./src/lib'),
			$shared: path.resolve('./src/shared'),
			$stores: path.resolve('./src/stores')
		}
	}
}

export default config
