// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			user: {
				name: String
				// role: String
			}
		}

		type User = {
			id: String
			username: String
		}
	}
}

export {};

