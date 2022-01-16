<script>
    import { authName, website } from '@lib/site-config'

    export let title
    export let description
    export let image
    export let url
</script>

<svelte:head>
    <link rel="canonical" href={url} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={authName} />
</svelte:head>
