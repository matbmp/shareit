import { axiosClient } from "../axiosClient"
import type { UserResponse } from "./user"

interface PostRequest{
    username: string,
    password: string
}

export interface SessionResponse{
    key: string,
    user: UserResponse
}

export function PostSession(request: PostRequest){
    return axiosClient.post('/session', request).then(response => response.data as SessionResponse)
}

export function DeleteSession(){
    return axiosClient.delete('/session')
}