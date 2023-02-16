import type { RequestHandler } from './$types'
import { json } from '@sveltejs/kit'
import caseCoverter from '$shared/case-converter'

const endpoint = 'https://api.github.com/repos'

export const POST: RequestHandler = async ({ request }) => {
	const { repository, user } = await request.json()
	const response = await fetch(`${endpoint}/${user}/${repository}`)
	const data = await response.json()
	return json(caseCoverter(data))
}
