import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../contact/$types";

// export const prerender = false;
export const ssr = false;

export const load: PageServerLoad = ({locals}) => {
   if (!locals.user) {
      redirect(302, '/slogin')
   }
}