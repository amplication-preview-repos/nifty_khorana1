import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type TextBlockUpdateInput = {
  content?: string | null;
  page?: PageWhereUniqueInput | null;
};
