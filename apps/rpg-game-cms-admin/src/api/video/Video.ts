export type Video = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  url: string | null;
  description: string | null;
  publishedAt: Date | null;
  duration: number | null;
};
