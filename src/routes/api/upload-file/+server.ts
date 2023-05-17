import type { RequestHandler } from './$types';
import { json, fail } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs/promises';

export const POST = (async ({request, url}) => {
	try {
		const data = Object.fromEntries(await request.formData());
      console.log(data);
		const filePath = path.join(
			'/stories_media',
			`${crypto.randomUUID()}.${(data.image as Blob).type.split('/')[1]}`
		);
      console.log(filePath);
		fs.writeFile('static'+filePath, Buffer.from(await (data.image as Blob).arrayBuffer()));
		// return new Response(String({ path: filePath }));
      return json({
         success: 1,
         file: {
            url: url.origin + filePath
         }
      });
	} catch (err) {
		throw fail(500, { err: err });
	}

	return json({});
}) satisfies RequestHandler;
