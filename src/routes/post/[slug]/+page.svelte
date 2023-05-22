<script lang="ts">
	import moment from 'moment';
	import ArrowUp from 'virtual:icons/mdi/arrow-up';
	import ArrowDown from 'virtual:icons/mdi/arrow-down';
	import Comment from 'virtual:icons/mdi/message-reply-text';
	import Delete from 'virtual:icons/mdi/delete';
	import {
	CommentLike,
		DeleteComment,
		GetComment,
		PostComment,
		PostLike,
		type PostResponse
	} from '../../../network/lib/post.js';
	import { session } from '../../../store.js';
	let post: PostResponse;
	let commentContent: string;

	export let data;
	$: post = data.post;
	$: commentPromise = GetComment(data.post.id, 0, 10);
</script>

<div class="mx-auto lg:w-1/2 flex flex-col gap-4">
	<div class="p-4 pb-2 variant-glass-tertiary">
		<div class="flex items-center">
			<div class="rounded-full h-8 w-8 m-2 variant-filled" />
			<div>
				<span>{post.author?.username}</span>
			</div>
			<div class="chip variant-soft-surface ms-auto">
				{moment(post.createdDate).fromNow()}
			</div>
		</div>
		{#if post.imageUrl !== null}
			<img src={post.imageUrl} alt="" />
		{/if}
		<div class="font-bold text-3xl py-2">{post.title}</div>
		{post.content}
		<div class="flex items-center py-2">
			<button
				on:click={() => {
					PostLike(post.id).then(() => {
						post.likes += post.isLiked ? -1 : 1;
						post.isLiked = !post.isLiked;
					});
				}}
			>
				<ArrowUp class={`h-8 w-8 ${post.isLiked ? 'text-green-500' : ''}`} />
			</button>
			<span class="text-xl px-2">{post.likes}</span>
		</div>
	</div>
	{#if $session !== null}
		<div class="flex flex-col gap-2">
			<textarea class="textarea" rows={3} bind:value={commentContent} />
			<button
				type="button"
				class="btn variant-filled ms-auto"
				on:click={() => {
					if (commentContent?.length > 0) {
						PostComment(data.post.id, { content: commentContent }).then(() => {
							commentPromise = GetComment(data.post.id, 0, 10);
						});
					}
				}}>Add comment</button
			>
		</div>
	{/if}

	{#await commentPromise}
		Loading comments...
	{:then comments}
		{#each comments as comment}
			<div class="variant-glass-tertiary p-4">
				<div class="flex items-center">
					<div class="rounded-full h-8 w-8 variant-filled" />
					<div class="mx-2 text-black/50">{comment.author.username}</div>
					<div class="chip variant-soft-surface">
						{moment(comment.createdDate).fromNow()}
					</div>
					{#if $session != null && $session.user.id == comment.author.id}
						<button
							class="ms-auto btn variant-filled-error"
							on:click={() => {
								DeleteComment(comment.id).then(() => {
									commentPromise = GetComment(data.post.id, 0, 10);
								});
							}}
						>
							<Delete />
						</button>
					{/if}
				</div>
				<div class="pt-2">
					{comment.content}
				</div>
				<div class="flex items-center justify-end py-2">
					<button
						on:click={() => {
							CommentLike(comment.id).then(() => {
								comment.likes += comment.isLiked ? -1 : 1;
								comment.isLiked = !comment.isLiked;
							});
						}}
					>
						<ArrowUp class={`h-8 w-8 ${post.isLiked ? 'text-green-500' : ''}`} />
					</button>
					<span class="text-xl px-2">{comment.likes}</span>
				</div>
			</div>
		{/each}
	{/await}
</div>
