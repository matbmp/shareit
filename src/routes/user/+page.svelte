<script lang="ts">
	import Account from 'virtual:icons/mdi/account-outline';
	import moment from 'moment';
	import {session} from '../../store'
	import { DeleteSession } from '../../network/lib/session';
	import { goto } from '$app/navigation';
	interface User {
		username: string;
		email: string;
		profileImageUrl: string | null;
		createdDate: Date;
		followersCount: number;
		followingCount: number;
	}

	let user: User = {
		username: 'Psychological-Map',
		email: 'mbiernacki531@gmail.com',
		profileImageUrl: null,
		createdDate: new Date(Date.now()),
		followersCount: 1,
		followingCount: 0
	};


</script>

<div class="flex flex-col items-center justify-center p-4">
	<div
		class="w-full lg:w-1/2 xl:w-1/3 flex flex-col items-center justify-center bg-gradient-to-b variant-gradient-primary-secondary rounded-2xl"
	>
		<div class="text-3xl mt-8">{$session?.user.username}</div>
		<div class="text-black/50 pb-8">
			Shearer since {user.createdDate.toLocaleDateString()} ({moment($session?.user.createdDate).fromNow()})
		</div>
		
			<img alt="" src={$session?.user.imageUrl} class="rounded-full bg-white h-60 w-60 mb-8" />
		
		
		<div class="bg-white self-stretch flex flex-col items-center p-4 rounded-b-2xl">
			<span class="text-xl p-2">{user.email}</span>
			<button class="btn variant-filled-tertiary self-stretch my-4" on:click={() => {
				DeleteSession().finally(() => goto('/'))
			}}>
			Log out
		</button>
		</div>
	</div>
</div>
