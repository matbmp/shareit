<script lang="ts">
	let username: string;
	let password: string;
</script>

<div style:height="100svh" class="flex items-center justify-center">
	<div class="flex flex-col gap-4 w-1/4">
		<a href="/" class='self-center'>
			<img alt="" src={'logo.jpg'} class="h-60 w-60 rounded-full my-4 " />
		</a>
		<input class="input" type="text" placeholder="Username" bind:value={username} />
		<input class="input" type="password" placeholder="Password" bind:value={password} />
		<button type="button" class="btn variant-filled">Login</button>
		<hr class="border-2 m-2" />
		<a href="/register" type="button" class="btn variant-soft-secondary">Register</a>
	</div>
</div>
