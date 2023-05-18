// import { PUBLIC_ANALYTICS_KEY } from '$env/static/public'
import { env } from '$env/dynamic/public';
import type { LayoutLoad } from './$types';

export const load = ( async ({ data }) => {
   // console.log(PUBLIC_ANALYTICS_KEY)
	return {
		...data,
		...{
			analytics_key: env.PUBLIC_ANALYTICS_KEY
		}
	};
}) satisfies LayoutLoad;
