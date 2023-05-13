import type { PageLoad } from "../$types"

export const load: PageLoad = () => {
   return {
      title: 'Me',
      description: 'This page is about me!'
   }
}