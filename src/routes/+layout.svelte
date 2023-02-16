<script lang="ts">
	import { meta } from '$shared/const'
	import '../app.css'
</script>

<slot />

<svelte:head>
	<meta name="author" content={meta.author} />
	<meta name="description" content={meta.description} />

	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={meta.url} />
	<meta property="og:image" content={meta.url} />
	<meta property="og:imageAlt" content="Isaiah Collins Abetong Portfolio Site Image" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@icabetong" />
	<meta name="twitter:title" content="icabetong" />
	<meta name="twitter:description" content="Personal Portfolio website of Isaiah Collins Abetong" />
	<meta name="twitter:image" content={meta.url} />
</svelte:head>
