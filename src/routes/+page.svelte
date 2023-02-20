<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import SkillSection from '$components/sections/skills/SkillsSection.svelte'
	import HeroSection from '$components/sections/hero/HeroSection.svelte'
	import WorksSection from '$components/sections/works/WorksSection.svelte'
	import ContactSection from '$components/sections/contact/ContactSection.svelte'
</script>

<main class="relative mx-auto min-h-screen">
	<HeroSection />
	<div class="absolute inset-0 h-fit">
		<Navigation />
	</div>
	<SkillSection />
	<WorksSection />
	<ContactSection />
</main>

<svelte:head>
	<title>Isaiah Collins | Home</title>
</svelte:head>
