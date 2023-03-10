import type { ISourceOptions } from 'tsparticles-engine'
import colors from 'tailwindcss/colors'

export default function getParticleConfig(dark: boolean): ISourceOptions {
	const color = dark ? colors.white : colors.zinc[600]
	return {
		fullScreen: false,
		particles: {
			number: {
				value: 50,
				density: {
					enable: true,
					value_area: 1280
				}
			},
			color: {
				value: color
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: color
				},
				polygon: {
					nb_sides: 5
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 2,
				random: false,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 80,
				color: colors.zinc[500],
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 0.5,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: false,
					mode: 'grab'
				},
				onclick: {
					enable: false,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 100,
					line_linked: {
						opacity: 0.5
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	}
}
