<script lang="ts" context="module">
	export const prerender = true;
	export const load = async ({ url, fetch }) => ({
		props: {
			path: url.pathname,
			res: await (await fetch('/posts.json')).json()
		}
	})
</script>

<script lang="ts">
	import Footer from './@components/footer.svelte'
	import Nav from './@components/nav.svelte'
    import '../app.css'
	import { posts, tags } from '$lib/stores/posts'
	export let t: boolean
	export let res: Dreams.Post[]
	// import { url } from '$app/stores';
	

	posts.set(res)
</script>

<Nav />

<main class="mx-auto max-w-[90ch] px-4 relative sm:px-6 lg: px-8 break-normal"> 
	<slot />
</main> 

<Footer />
