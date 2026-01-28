// The Custom feed, based on the `tags` searchParams

export const trailingSlash = 'ignore';

import { filterPosts } from '$lib/helpers/utils';
import info from '$lib/info';
import type { BlogPost } from '$lib/types/blog-posts';

export async function GET({ fetch, params, url }) {
  // const lang = url.searchParams.get('lang');
  // const tags = url.searchParams.get('tags');
  // const method = (url.searchParams.get('method') as 'some' | 'every') ?? 'some';

  const response = await fetch(`/api/posts`);
  let posts: BlogPost[] = await response.json();

  // if (lang) {
  //   posts = filterPosts(posts, 'lang', lang);
  // } else if (!lang && !tags?.length && params.lang) {
  //   posts = filterPosts(posts, 'lang', params.lang);
  // } else if (!lang && tags?.length) {
  //   posts = posts;
  // } else {
  posts = filterPosts(posts, 'lang', 'en');
  // }

  /*   if (tags) {
    posts = filterPosts(posts, 'tags', tags.split(','), method);
  } */

  const urlWithLang = `${info.url}/${params.lang ?? 'en'}`;
  const blogUrl = `${urlWithLang}/blog`;

  const headers = { 'Content-Type': 'application/xml' };

  const xml = `
		<feed xmlns="http://www.w3.org/2005/Atom">
    <generator uri="https://kit.svelte.dev/" version="2.4.3">SvelteKit</generator>
    <lastBuildDate>${new Date()}</lastBuildDate>
    <managingEditor>${info.email}</managingEditor>
    <webMaster>${info.email}</webMaster>
    <skipHours>
      <hour>1</hour>
      <hour>2</hour>
      <hour>3</hour>
      <hour>4</hour>
      <hour>5</hour>
      <hour>6</hour>
      <hour>7</hour>
      <hour>8</hour>
      <hour>9</hour>
      <hour>10</hour>
      <hour>11</hour>
      <hour>12</hour>
    </skipHours>
    <skipDays>
      <day>Monday</day>
      <day>Tuesday</day>
      <day>Wednesday</day>
      <day>Thursday</day>
    </skipDays>
    <link href="${info.url}${
    url.pathname
  }?tags=tags&amp;method=method" rel="self" type="application/atom+xml"/>
    <link href="${blogUrl}/" rel="alternate" type="text/html"/>
    <updated>${posts[0]?.updated ?? posts[0]?.date}</updated>
    <id>${info.url}${url.pathname}?tags=tags&amp;method=method</id>
    <title type="html">Hosam Hamdy Blog Feed</title>
    <subtitle>${info.description}</subtitle>
		${posts.map(
      (post) =>
        `<entry>
					<title type="html">${post.title}</title>
					<link href="${blogUrl}/${post.slug}" rel="alternate" type="text/html" title="${
          post.title
        }"/>
					<published>${post.date}</published>
					<updated>${post.updated ?? post.date}</updated>
					<id>hAbuMustafa/${post.slug}</id>
					<content type="html" xml:base="${blogUrl}/${post.slug}">
							<![CDATA[${post.description}]]>
					</content>
					<author>
							<name>Hosam Hamdy</name>
					</author>
					<summary type="html">
							<![CDATA[${post.description}]]>
					</summary>
			</entry>`
    )}
</feed>
	`.trim();

  return new Response(xml, { headers });
}
