import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type TextBlockCreateInput = {
  content?: string | null;
  page?: PageWhereUniqueInput | null;
};
