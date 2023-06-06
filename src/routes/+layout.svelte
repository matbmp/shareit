<script lang="ts">
	// Your selected Skeleton theme:
	import '../theme.css'
	//import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	// import for popups
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { AppBar, AppShell, LightSwitch, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import Apps from 'virtual:icons/mdi/apps';
	import { session } from '../store';
	import { DeleteSession } from '../network/lib/session';
	import { goto } from '$app/navigation';

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};
</script>

<Drawer width="w-1/2">
	<div class="flex flex-col gap-6 p-6">
		{#if $session === null}
			<a href="/login" class="btn variant-filled-surface">Login</a>
		{:else}
			<a href="/post/create" class="btn variant-filled-surface">New post</a>
			<a href="/user" class="btn variant-filled-surface">Profile</a>
			<button
				on:click={() => DeleteSession().finally(() => goto('/'))}
				class="block btn variant-filled-surface">Logout</button
			>
		{/if}
	</div>
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			background="variant-filled-secondary"

			gridColumns="grid-cols-3"
			shadow="shadow-lg"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<div class="flex gap-4">
					{#if $session != null}
						<button class="lg:hidden text-4xl" on:click={() => drawerStore.open()}>
							<Apps />
						</button>
					{/if}
					<a href="/" class="flex items-center">
						<img alt="" src={'/logo.jpg'} class="h-8 w-8 rounded-full" />
						<div class="text-2xl px-2">ShareIt</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				

				{#if $session === null}
					<a href="/login" class="btn variant-filled-primary">Login</a>
				{:else}
					<div class="hidden lg:flex gap-4">
						<button class="btn variant-filled-primary" use:popup={popupClick}>
							<span>{$session.user?.username}</span>
						</button>
						<div class="card p-4 variant-glass-secondary" data-popup="popupClick">
							<div class="w-60 flex flex-col gap-4">
								<a href="/post/create" class="block btn variant-filled-surface">New post</a>
								<a href="/user" class="block btn variant-filled-surface">Profile</a>
								<button
									on:click={() => DeleteSession().finally(() => goto('/'))}
									class="block btn variant-filled-surface">Logout</button
								>
							</div>
						</div>
					</div>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
