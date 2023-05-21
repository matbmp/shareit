<script lang="ts">
	import ArrowUp from 'virtual:icons/mdi/arrow-up';
	import ArrowDown from 'virtual:icons/mdi/arrow-down';
	import Comment from 'virtual:icons/mdi/message-reply-text';
	import moment from 'moment';

	interface User {
		username: string;
		email: string;
		profileImageUrl: string | null;
	}
	interface Section {
		id: number;
		name: string;
	}
	interface Post {
		title: string;
		content: string;
		imageUrl: string | null;
		author: User;
		section: Section;
		creationDate: Date;
		commentCount: number;
		likes: number;
		dislikes: number;
	}

	let posts: Post[] = Array(10).fill({
		title: 'What is the biggest hint you have missed from a girl?',
		content: 'My worst expirience with this was when i were 17',
		imageUrl: null,
		author: {
			username: 'Psychological-Map',
			email: 'mbiernacki531@gmail.com',
			profileImageUrl: null
		},
		section: {
			id: 0,
			name: 'RandomQuestions'
		},
		creationDate: new Date(Date.now()),
		commentCount: 0,
		likes: 4,
		dislikes: 1
	});
</script>

<div>
	{#each posts as post}
		<div class="bg-violet-500/20 px-6 py-4 m-4 rounded-2xl">
			<div class="flex items-center py-2">
				<div class="rounded-full h-8 w-8 m-2 bg-purple-500" />
				<div>
					<span class="text-red-500">{post.author.username}</span>
					<br />
					<span class="text-green-500">{post.section.name}</span>
				</div>
				<div class="ms-auto text-black/75">
					{moment(post.creationDate).fromNow()}
				</div>
			</div>
			<div class="font-bold text-3xl py-2">{post.title}</div>
			{#if post.imageUrl !== null}
				<img src={post.imageUrl} alt="" />
			{/if}
			<div class="flex items-center py-2">
				<ArrowUp class="h-8 w-8" />
				<span class="text-xl px-2">{post.likes - post.dislikes}</span>
				<ArrowDown class="h-8 w-8" />
				<div class="ms-auto flex">
					<Comment class="h-8 w-8" /><span class="text-xl px-2">{post.commentCount}</span>
				</div>
			</div>
		</div>
	{/each}
</div>
