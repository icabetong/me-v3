<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import HeroSection from '$components/sections/hero/HeroSection.svelte'
</script>

<main class="relative mx-auto min-h-screen">
	<HeroSection />
	<div class="absolute inset-0 h-fit">
		<Navigation />
	</div>
</main>

<svelte:head>
	<title>Isaiah Collins | Home</title>
</svelte:head>
