export interface Frontmatter {
  title: string;
  description: string;
  publishedOn: string;
}

export interface BlogPost extends Frontmatter {
  slug: string;
}
