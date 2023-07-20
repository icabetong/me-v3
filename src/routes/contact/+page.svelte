<script lang="ts">
	import Navigation from '$components/navigation/Navigation.svelte'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { Send } from '@steeze-ui/feather-icons'
	import { t } from '$lib/translations'
</script>

<Navigation />
<main class="box">
	<div
		class="flex flex-1 flex-col space-y-8 px-2 py-8 md:flex-row md:space-y-0 md:space-x-16 md:px-8 md:py-32">
		<div class="flex h-full flex-1 flex-col justify-center space-y-4">
			<h1 class="font-heading text-3xl font-semibold md:text-5xl">{$t('contact.title')}</h1>
			<p class="text-lg font-medium text-zinc-700 dark:text-zinc-300">
				{$t('contact.header')}
			</p>
			<p class="text-zinc-500">
				{$t('contact.summary')}
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
					<label for="name" class="form-label">{$t('common.field.name')}</label>
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
					<label for="email" class="form-label">{$t('common.field.email')}</label>
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
					<label for="subject" class="form-label">{$t('common.field.subject')}</label>
					<input
						required
						type="text"
						name="subject"
						id="subject"
						class="form-input"
						placeholder={$t('common.placeholder.subject')}
						aria-required="true" />
				</div>
				<div class="form-group">
					<label for="message" class="form-label">{$t('common.field.message')}</label>
					<textarea
						name="message"
						id="message"
						rows="8"
						placeholder={$t('common.placeholder.message')}
						class="form-input" />
				</div>
				<button type="submit" class="button-primary flex items-center px-8">
					<Icon src={Send} class="mr-4 h-4 w-4" />
					{$t('common.actions.send')}
				</button>
			</form>
		</div>
	</div>
</main>

<svelte:head>
	<title>Contact | icabetong</title>
</svelte:head>
