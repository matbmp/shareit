import { axiosClient } from "../axiosClient";

interface PostRequest{
    username: string,
    password: string,
    email: string,
}

interface PutRequest{
    username: string | null,
    password: string | null
}

export interface UserResponse{
    id: number,
    username: string,
    email: string,
    createdDate: Date,
    imageUrl: string
}

export function PostUser(request: PostRequest){
    return axiosClient.post('/user', request).then(response => response.data)
}

export function PutUser(request: PutRequest){
    return axiosClient.put('/user', request)
}

export function DeleteUser(){
    return axiosClient.delete('/user')
}

export function GetUser(){
    return axiosClient.get('/user').then(response => response.data)
}