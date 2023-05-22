<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { session } from '../store';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			shadow="shadow-xl"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<a href="/" class="self-center flex items-center">
					<img alt="" src={'/logo.jpg'} class="h-8 w-8 rounded-full" />
					<div class="text-2xl px-2">ShareIt</div>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $session === null}
					<a href="/login" class="btn variant-filled">Login</a>
					{:else}
					<a href='/post/create' class='btn variant-filled-secondary'>New post</a>
					<a href="/user" class="btn variant-filled">{$session.user?.username}</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
