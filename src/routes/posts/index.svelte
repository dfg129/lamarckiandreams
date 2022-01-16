<script context="module">
    export async function load({ fetch }) {
        const res = await fetch(`/posts.json`)
    if (res.ok) {
    const { posts } = await res.json()
    return {
    props: { posts  },
    }
    }
    }
    </script>

    <script>
        import Head from '$lib/components/head.svelte'
        import PostCard from '$lib/components/post-card.svelte'

        export let posts
    </script>

    <Head title={`All the Pretty Horses`} />

    <div classs="flex flex-col flex-grow">
        <h1 class="font-bold mb-5 text-5xl">Saddle up!</h1>
        {#each posts as post}
            {#if psot.published}
                <PostCard {post} />
            {/if}
        {/each}
    </div>
