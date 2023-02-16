<script lang="ts">
	import Particles from 'svelte-particles'
	import type { Engine } from 'tsparticles-engine'
	import { loadSlim } from 'tsparticles-slim'
	import getParticlesConfig from '$shared/particles'
	import theme from '$stores/theme'

	const init = async (engine: Engine) => await loadSlim(engine)
</script>

<div class="absolute h-full w-full object-cover">
	<Particles id="particles" options={getParticlesConfig($theme)} particlesInit={init} />
</div>
