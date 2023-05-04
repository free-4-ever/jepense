import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../contact/$types";

// export const prerender = false;
export const ssr = false;

export const load: PageServerLoad = async ({locals, parent}) => {
   // console.log(locals.user);
   const parentData = await parent()
   console.log(parentData.user)

   if (typeof parentData.user == 'undefined') {
      throw redirect(302, '/slogin')
   }
   // if (typeof locals.session == 'undefined') {
   // }

   return {
      title: 'Admin',
   }
}