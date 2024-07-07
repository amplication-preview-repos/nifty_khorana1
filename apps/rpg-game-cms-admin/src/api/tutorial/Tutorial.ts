export type Tutorial = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  publishedAt: Date | null;
  difficultyLevel?: "Option1" | null;
  title: string | null;
};
