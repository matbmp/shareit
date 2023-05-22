<script lang="ts">
	import { goto } from "$app/navigation";
	import { PostSession } from "../../network/lib/session";
	import { session } from "../../store";

	let error: string = '';
	let username: string;
	let password: string;
</script>

<div class="flex items-center justify-center">
	<div class="flex flex-col gap-4 w-1/4">
		<a href="/" class="self-center">
			<img alt="" src={'logo.jpg'} class="h-60 w-60 rounded-full my-4" />
		</a>
		<input class="input" type="text" placeholder="Username" bind:value={username} />
		<input class="input" type="password" id='password' placeholder="Password" bind:value={password} />
		<button type="button" class="btn variant-filled" on:click={() => {
			PostSession({username, password})
			.then(data => {
				$session = data;
				goto('/');
			})
			.catch(e => error=e)
		}}> Login </button>
		<div class='text-red-500'>{error}</div>
		<hr class="border-2 m-2" />
		<a href="/register" type="button" class="btn variant-soft-secondary">Register</a>
	</div>
</div>
