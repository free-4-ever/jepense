import { PUBLIC_ANALYTICS_KEY } from '$env/static/public'
import type { LayoutLoad } from './$types';

export const load = ( async ({ data }) => {
   // console.log(PUBLIC_ANALYTICS_KEY)
	return {
		...data,
		...{
			analytics_key: PUBLIC_ANALYTICS_KEY
		}
	};
}) satisfies LayoutLoad;
