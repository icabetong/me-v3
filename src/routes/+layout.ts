import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch('/api/github', {
		method: 'POST',
		body: JSON.stringify({
			user: 'icabetong',
			repository: 'me-v3'
		})
	})

	return await response.json()
}
