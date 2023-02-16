<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import AboutSection from '$components/sections/skills/SkillsSection.svelte'
	import HeroSection from '$components/sections/hero/HeroSection.svelte'
	import WorksSection from '$components/sections/works/WorksSection.svelte'
</script>

<main class="relative mx-auto min-h-screen">
	<HeroSection />
	<div class="absolute inset-0 h-fit">
		<Navigation />
	</div>
	<AboutSection />
	<WorksSection />
</main>

<svelte:head>
	<title>Isaiah Collins | Home</title>
</svelte:head>
