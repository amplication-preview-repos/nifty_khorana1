export type News = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  publishedAt: Date | null;
  author: string | null;
};
