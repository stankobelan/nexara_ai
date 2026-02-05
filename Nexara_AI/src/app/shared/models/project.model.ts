export type ProjectTag = 'AI' | 'Web' | 'Voice';

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  tags: ProjectTag[];
  imageUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}
