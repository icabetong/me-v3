<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Send } from '@steeze-ui/feather-icons'
</script>

<Navigation />
<main class="box">
	<div class="flex flex-1 flex-col px-2 py-24 md:flex-row md:space-x-16 md:px-8 md:py-32">
		<div class="flex h-full flex-1 flex-col justify-center space-y-4">
			<h1 class="font-heading text-5xl font-semibold">Got a project for me?</h1>
			<p class="text-lg font-medium text-zinc-700 dark:text-zinc-300">
				Let's create something together
			</p>
			<p class="text-zinc-500">
				Feel free to get in touch with me, I am always open to discussing new projects, creative
				ideas or opportunities to be part of your visions.
			</p>
		</div>
		<div class="flex h-full flex-1 flex-col justify-center">
			<form
				action="/success"
				name="contact"
				data-netlify="true"
				method="POST"
				class="flex flex-col items-center space-y-4">
				<div class="form-group">
					<label for="name" class="form-label">Name</label>
					<input
						required
						type="text"
						name="name"
						id="name"
						class="form-input"
						placeholder="John Doe"
						aria-required="true" />
				</div>
				<div class="form-group">
					<label for="email" class="form-label">Email Address</label>
					<input
						required
						type="email"
						name="email"
						id="email"
						class="form-input"
						placeholder="john.doe@example.com"
						aria-required="true" />
				</div>
				<div class="form-group">
					<label for="subject" class="form-label">Subject</label>
					<input
						required
						type="text"
						name="subject"
						id="subject"
						class="form-input"
						placeholder="A nice subject"
						aria-required="true" />
				</div>
				<div class="form-group">
					<label for="message" class="form-label">Message</label>
					<textarea
						name="message"
						id="message"
						rows="8"
						placeholder="Tell me more"
						class="form-input" />
				</div>
				<button type="submit" class="button-primary flex items-center px-8">
					<Icon src={Send} class="mr-4 h-4 w-4" />
					Send
				</button>
			</form>
		</div>
	</div>
</main>

<svelte:head>
	<title>Contact | icabetong</title>
</svelte:head>
