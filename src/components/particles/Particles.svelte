<script lang="ts">
	import Particles from 'svelte-particles'
	import type { Engine } from 'tsparticles-engine'
	import { loadSlim } from 'tsparticles-slim'
	import particlesConfig from '$shared/particles'

	const init = async (engine: Engine) => await loadSlim(engine)
</script>

<div class="absolute h-full w-full object-cover">
	<Particles id="particles" options={particlesConfig} particlesInit={init} />
</div>
