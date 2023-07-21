/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				piccolo: '#4E46B4',
				hit: '#40A69F',
				kirin: '#FFB319',
				chichi: '#FF4E64'
			},
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				body: ['Source Sans 3', 'sans-serif']
			}
		}
	},
	safelist: ['text-hit'],
	plugins: []
}
