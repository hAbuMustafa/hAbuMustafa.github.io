export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  updated?: string;
}

export interface BlogPost extends Frontmatter {
  slug: string;
}
