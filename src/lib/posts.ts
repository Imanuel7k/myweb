import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export function postSlug(post: Post) {
  return post.id.replace(/\/index$/, "").replace(/\.(md|mdx)$/, "");
}

export function postUrl(post: Post) {
  return `/posts/${postSlug(post)}/`;
}

export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, includeYear = true) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: includeYear ? "numeric" : undefined,
    month: "long",
    day: "numeric",
  }).format(date);
}

export function readingMinutes(body = "") {
  const plain = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`$\[\](){}|\\-]/g, " ");
  const han = (plain.match(/[\u3400-\u9fff]/g) || []).length;
  const words = (plain.match(/[A-Za-z0-9]+/g) || []).length;
  return Math.max(1, Math.ceil((han + words * 2) / 420));
}

export function taxonomySlug(value: string) {
  return value.toLowerCase();
}
