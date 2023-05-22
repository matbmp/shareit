<script lang="ts">
	import ArrowUp from 'virtual:icons/mdi/arrow-up';
	import Comment from 'virtual:icons/mdi/message-reply-text';
	import moment from 'moment';
	import { GetPosts, PostLike, type PostResponse } from '../network/lib/post';

	let postsPromise = GetPosts(0, 10, true);
</script>

<div class="lg:w-3/5 mx-auto">
	{#await postsPromise}
		Loading...
	{:then posts}
		{#each posts as post}
			<div class="variant-glass-tertiary px-4 py-2 m-4 rounded-2xl">
				<div class="flex items-center">
					<div class="rounded-full h-8 w-8 m-2 variant-filled" />
					<div>
						<span>{post.author?.username}</span>
					</div>
					<div class="ms-auto text-black/75">
						{moment(post.createdDate).fromNow()}
					</div>
				</div>
				<a href="/post/{post.id}">
					<div class="font-bold text-3xl py-2">{post.title}</div>
					{#if post.imageUrl !== null}
						<img src={post.imageUrl} alt="" />
					{/if}
				</a>
				<div class="flex items-center py-2">
					<button
						on:click={() => {
							PostLike(post.id).then(() => {
								post.likes += post.isLiked ? -1 : 1
								post.isLiked = !post.isLiked
							});
						}}
					>
						<ArrowUp class={`h-8 w-8  ${post.isLiked ? 'text-green-500' : ''}`} />
					</button>
					<span class={`text-xl px-2`}>{post.likes}</span>
					<a href="/post/{post.id}" class="ms-auto flex">
						<Comment class="h-8 w-8" /><span class="text-xl px-2">{post.commentCount ?? ''}</span>
					</a>
				</div>
			</div>
		{/each}
	{/await}
</div>
