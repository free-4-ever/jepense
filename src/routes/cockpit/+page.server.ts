import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../contact/$types";

// export const prerender = false;
export const ssr = false;

export const load: PageServerLoad = ({locals}) => {
   // console.log(locals.user);
   if (typeof locals.user == 'undefined') {
      throw redirect(302, '/slogin')
   }

   return {
      title: 'Admin'
   }
}