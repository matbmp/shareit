<script lang="ts">
	import { goto } from "$app/navigation";
	import { PostUser } from "../../network/lib/user";

	let error: string = '';
	let username: string;
	let email: string;
	let password: string;
</script>

<div class="flex items-center justify-center">
	<div class="flex flex-col gap-4 w-1/4 lg:w-1/4 w-full p-4">
		<a href="/" class="self-center">
			<img alt="" src={'logo.jpg'} class="h-60 w-60 rounded-full my-4" />
		</a>
		<input class="input" type="text" placeholder="Username" bind:value={username} />
		<input class="input" type="email" placeholder="Email" bind:value={email} />
		<input class="input" type="password" placeholder="Password" bind:value={password} />
		<button type="button" class="btn variant-filled" on:click={() => {
			PostUser({username, password, email}).then(() => { goto('/login')}).catch(e => error=e)
		}}> 
			Register 
		</button>
		<div class='text-red-500'>{error}</div>
	</div>
</div>
