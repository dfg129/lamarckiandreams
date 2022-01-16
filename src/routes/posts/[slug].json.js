import { posts } from './_posts'

export async function get(req) {
  const { slug } = req.params

  const sortedPosts = Object.keys(posts).map(key => posts[key])
  const post = sortedPostes.find(post => post.slug === slug)

  return {
    body: { post },
  }
}
