import axios from 'axios';
import { session } from '../store';
import { get } from 'svelte/store';


export const baseServerUrl = `http://64.226.117.46/`;

export const axiosClient = axios.create({
	baseURL: baseServerUrl,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

axiosClient.interceptors.request.use((config) => {
	const s = get(session);
	if(s !== null){
		config.headers.Authorization = s.key
	}
	return config;
})