import { writable, type Writable } from "svelte/store";
import { browser } from '$app/environment';
import type { SessionResponse } from "./network/lib/session";

const storedSession = (): SessionResponse | null => {
	if (browser) {
		const storageSession = localStorage.getItem('session');
		if (storageSession == null) return null;
		return JSON.parse(storageSession);
	}
	return null;
};

export const session: Writable<SessionResponse|null> = writable<SessionResponse|null>(storedSession())

if (browser) {
	session.subscribe((value) => {
		localStorage.setItem('session', JSON.stringify(value));
	});
}
