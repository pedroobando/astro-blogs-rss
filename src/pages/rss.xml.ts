import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export const GET = (async ({ params, request, site }) => {
  const blogPosts = await getCollection('blog');

  return rss({
    // `<title>` field in output xml
    title: 'Blog de Peter',
    // `<description>` field in output xml
    description: 'A humble Astronaut’s guide to the stars',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map(({ data, id: slug, body }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      xmlns: {
        media: 'http://search.yahoo.com/mrss/',
      },
      link: `/posts/${slug}`,
      content: sanitizeHtml(parser.render(body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    // (optional) inject custom xml
    customData: `<language>es-ve</language>`,
  });
}) satisfies APIRoute;
