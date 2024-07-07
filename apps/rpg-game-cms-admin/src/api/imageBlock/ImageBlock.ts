import { Page } from "../page/Page";

export type ImageBlock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  description: string | null;
  page?: Page | null;
};
