<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import AboutSection from '$components/sections/skills/SkillsSection.svelte'
	import HeroSection from '$components/sections/hero/HeroSection.svelte'
</script>

<main class="relative mx-auto min-h-screen">
	<HeroSection />
	<div class="absolute inset-0 h-fit">
		<Navigation />
	</div>
	<AboutSection />
</main>

<svelte:head>
	<title>Isaiah Collins | Home</title>
</svelte:head>
