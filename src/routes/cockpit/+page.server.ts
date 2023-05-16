import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../contact/$types";

// export const prerender = false;
export const ssr = false;

export const load: PageServerLoad = async ({locals, parent}) => {
   const parentData = await parent()

   if (typeof parentData.user == 'undefined') {
      throw redirect(302, '/slogin')
   }

   return {
      title: 'Admin',
   }
}