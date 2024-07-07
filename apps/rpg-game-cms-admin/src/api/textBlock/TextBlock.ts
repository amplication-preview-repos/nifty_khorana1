import { Page } from "../page/Page";

export type TextBlock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  page?: Page | null;
};
