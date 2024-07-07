import { Page } from "../page/Page";

export type VideoBlock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  page?: Page | null;
  url: string | null;
};
