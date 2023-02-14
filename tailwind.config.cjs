/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				neu: '5px 5px 0px 0px #000',
				'neu-focused': '1px 2px 0px 0px #000'
			},
			fontFamily: {
				heading: ['Space Grotesk', 'sans-serif'],
				body: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
}
