import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { GetPost } from '../../../network/lib/post';

export const load = (async ({ params }) => {
    const postId = parseInt(params.slug)
    let post
    try{
        post = await GetPost(postId)
    } catch(e){
        throw error(404,{
            message: "NotFound"
        })
    }
    return {
        post
    }
}) satisfies PageLoad;