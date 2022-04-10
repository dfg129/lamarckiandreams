import vercel from '@sveltejs/adapter-vercel'
import preprocess from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'
import path from 'path'
import mdsvexConfig from './mdsvex.config.js'
import adapterAuto from '@sveltejs/adapter-auto'
import adapterNode from '@sveltejs/adapter-node'
import adapterStatic from '@sveltejs/adapter-static'
import Icons from 'unplugin-icons/vite'
import postcss from './postcss.config.js'
import { VerificationEmailStyle } from 'aws-cdk-lib/aws-cognito'



/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [mdsvex(mdsvexConfig),preprocess()],
	kit: {
		// adapter: Object.keys(process.env).some(key => ['VERCEL', 'CF_PAGES', 'NETLIFY'].includes(key))
		//   ? adapterAuto()
		//   : process.env.ADAPTER === 'node'
		//   ? adapterNode({ out: 'build' })
		//   : adapterStatic({
		// 	  pages: 'build',
		// 	  assets: 'build',
		// 	  fallback: null
		// 	}),
		adapter: vercel(),
		csp: { mode: 'auto' },
		prerender: { default: true },
		vite: {
		  mode: process.env.MODE || 'production',
		  envPrefix: 'URARA_',
		  css: { postcss },
		  define: {
			  'process.env': process.env,
		  },
		//   plugins: [
		// 	Icons({
		// 	  autoInstall: true,
		// 	  compiler: 'svelte',
		// 	  defaultClass: 'inline-block w-6 h-6'
		// 	})
		//   ]
		}
	}
}


export default config
