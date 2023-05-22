<script lang="ts">
	import { goto } from "$app/navigation";
	import { PostPost } from "../../../network/lib/post";

	let title: string = '';
	let content: string = ''
</script>

<div class="flex flex-col items-center justify-center pt-8">
	<div class="flex flex-col gap-4 w-1/3">
		<input type="text" class="input" placeholder="Title" bind:value={title} />
		<textarea
			class="textarea"
			rows="4"
			placeholder="body text(optional)"
			bind:value={content}
		/>
		<button type="button" class="btn variant-filled" on:click={() => {
			PostPost({title, content, imageUrl: null}).then(() => {
				goto('/');
			})
		}}>
		Post
	</button>
	</div>
</div>
