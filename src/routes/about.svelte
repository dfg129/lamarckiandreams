<script context="module">
	export const load = async () => {
		try {
			const copy = await import(`../../copy/about.md`)
			return {
				props: {
					copy: copy.default,
				},
			}
		} catch (e) {
			return {
				status: 404,
				error: `Not gonna happen`
			}
		}
	}
</script>

<script>
	export let copy
</script>

<div class="mb-10 all-prose">
	<svelte:component this={copy} />
</div>

<div class="flex flex-col mb-20 w-full">
	<div class="divider" />
</div>
