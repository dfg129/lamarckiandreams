import { CfnDBClusterParameterGroup } from "aws-cdk-lib/aws-rds"

interface GenPostsOptions {
    modules?: { [path: string]: Dreamer.Post.Module }
    postHtml?: boolean
}

type GenPostsFunction = (options?: GenPostsOptions) => Dreamer.Post[]

type GenTagsFunction = (posts: Dreamer.Post[]) => string[]

export const getPosts: GenPostsFunction = ({
    modules = import.meta.globEager<Dreamer.Post.Module>('/src/routes/**/*.{md,svelte.md}'),
    postHtml = false
} = {}) =>
    Object.entries(modules)
        .map(([, module]) => ({
          ...module.metadata,
          html:
            postHtml || ['note', 'reply'].includes(module.metadata?.layout)
              ? module.default
                .render()
                .html
                .replace(/[\u0000-\u001F]/g, '')
                .replace(/[\r\n]/g, '')
                .match(/<main [^]+>(.*?)<\/main>/gi)[0]
                .replace(/( style=")(.*?)(")/gi, '$2')
                .replace(/(<main>)(.*?)(<\/main>)/gi, '$2')
                : ''
        }))
        .sort((a: Dreamer.Post, b: Dreamer.Post) => (b.date ?? '1999-01-01').localCompare(a.date ?? '1999-01-01'))

        export const getTags: GenTagsFunction = posts => [
            ...new Set(posts.reduce((acc, posts) => (posts.tags ? [...acc, ...posts.tags] : acc), ['']).slice(1))
        ]