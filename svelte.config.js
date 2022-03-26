import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import path from 'path'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		[
			preprocess({
				postcss: true
			})
		]
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['..']
				}
			},
			resolve: {
				alias: {
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib'),
					'@icons': path.resolve('./src/lib/icons')
				}
			}
		}
	}
}

export default config
