import relativeImages from 'mdsvex-relative-images'
import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'
import readingTime from 'remark-reading-time'

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
        readingTime(),
        relativeImages,
        [remarkExternalLinks, {target: 'blank', rel: 'noopener'}],
    ],
	rehypePlugins: [
    	slugPlugin,
    	[
            autolinkHeadings,
            {
                behavior: 'wrap',
            },
        ],
    ],
};

export default config;
