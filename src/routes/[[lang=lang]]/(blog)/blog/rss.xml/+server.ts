/* refer to "../feed/rss-skeleton.xml" for more info */

// todo: make dynamic rss feed, by "lang" `param`, and by "tags" `searchParam`

import info from '$lib/info';
import type { BlogPost } from '$lib/types/blog-posts';

export async function GET({ fetch, params, url }) {
  const tags = url.searchParams.get('tags');
  const method = url.searchParams.get('method');

  const response = await fetch(
    `/api/posts?lang=${params.lang ?? 'en'}${tags ? `&tags=${tags}` : ''}${
      method ? `&method=${method}` : ''
    }`
  );
  const posts: BlogPost[] = await response.json();

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
    <link href="${blogUrl}/rss.xml" rel="self" type="application/atom+xml"/>
    <link href="${blogUrl}/" rel="alternate" type="text/html"/>
    <updated>${new Date()}</updated>
    <id>${blogUrl}/rss.xml</id>
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
					<id>${blogUrl}/${post.slug}</id>
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

//   const xml = `
// 	<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
// 	<channel>
// 		<title>${info.title}</title>
// 		<description>${info.description}</description>
// 		<link>${info.url}</link>
// 		<atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml"/>
// 		${posts
//       .map(
//         (post) => `
// 				<item>
// 					<title>${post.title}</title>
// 					<description>${post.description}</description>
// 					<link>${blogUrl}/${post.slug}</link>
// 					<guid isPermaLink="true">${blogUrl}/${post.slug}</guid>
// 					<pubDate>${new Date(post.date).toUTCString()}</pubDate>
// 				</item>
// 			`
//       )
//       .join('')}
// 	</channel>
// </rss>`;
