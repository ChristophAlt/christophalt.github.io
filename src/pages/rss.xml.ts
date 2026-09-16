import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME, SITE } from "@consts";

type Context = {
  site: string
}

function stripMarkdown(body: string) {
  return body
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
    .filter(post => !post.data.draft)
    .map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    }));

  const news = (await getCollection("news"))
    .filter(item => !item.data.draft)
    .map(item => {
      const summary = stripMarkdown(item.body ?? "");
      return {
        title: item.data.title ?? summary.slice(0, 80),
        description: summary,
        pubDate: item.data.date,
        link: item.data.inline ? "/news/" : `/news/${item.slug}/`,
      };
    });

  const items = [...blog, ...news]
    .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

  return rss({
    title: SITE.NAME,
    description: HOME.DESCRIPTION,
    site: context.site,
    items,
  });
}
