import rss from "@astrojs/rss";
import { getPublishedPosts, postUrl } from "../lib/posts";

export async function GET(context: { site?: URL }) {
  const posts = await getPublishedPosts();
  return rss({
    title: "ℵ₁",
    description: "井的个人博客",
    site: context.site ?? new URL("https://aleph1.top"),
    customData: "<language>zh-cn</language>",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      categories: [...post.data.categories, ...post.data.tags],
    })),
  });
}
