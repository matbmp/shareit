import { axiosClient } from "../axiosClient"
import type { SectionResponse } from "./section"
import type { UserResponse } from "./user"

interface PostRequest {
    title: string,
    content: string,
    imageUrl: string | null
}

interface CommentRequest {
    content: string
}

export interface CommentResponse {
    id: number,
    content: string;
    author: UserResponse;
    createdDate: Date;
    isLiked: boolean;
    likes: number;
}

export interface PostResponse {
    id: number,
    title: string,
    content: string,
    isLiked: boolean,
    likes: number,
    commentCount: number,
    imageUrl: string | null,
    createdDate: Date,
    author: UserResponse,
    section: SectionResponse
}

export function PostPost(request: PostRequest) {
    return axiosClient.post('/post', request)
}

export function DeletePost(id: number) {
    return axiosClient.delete(`/post/${id}`)
}

export function GetPosts(skip: number, take: number, refresh: boolean | undefined = undefined) {
    return axiosClient.get('/post', { params: { take, skip, refresh } }).then(response => response.data as PostResponse[])
}

export function GetPost(postId: number) {
    return axiosClient.get(`/post/${postId}`).then(response => response.data as PostResponse)

}

export function PostComment(postId: number, request: CommentRequest) {
    return axiosClient.post(`/post/${postId}/comment`, request)
}

export function GetComment(postId: number, skip: number, take: number) {
    return axiosClient.get(`/post/${postId}/comment`, { params: { skip, take } }).then(response => response.data as CommentResponse[])
}

export function DeleteComment(commentId: number) {
    return axiosClient.delete(`/post/comment/${commentId}`)
}

export function PostLike(postId: number){
    return axiosClient.post(`/post/${postId}/like`)
}

export function CommentLike(commentId: number){
    return axiosClient.post(`/post/comment/${commentId}/like`)
}