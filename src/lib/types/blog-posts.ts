export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
}

export interface BlogPost extends Frontmatter {
  slug: string;
}
