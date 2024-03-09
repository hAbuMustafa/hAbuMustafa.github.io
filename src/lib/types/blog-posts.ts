export interface Frontmatter {
  title: string;
  author: string;
  description: string;
  date: string;
  tags: string[];
  lang?: string;
  published?: true;
  updated?: string;
}

export interface BlogPost extends Frontmatter {
  slug: string;
}
