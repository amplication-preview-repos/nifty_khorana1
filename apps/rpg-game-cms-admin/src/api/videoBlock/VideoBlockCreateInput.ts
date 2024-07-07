import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type VideoBlockCreateInput = {
  description?: string | null;
  page?: PageWhereUniqueInput | null;
  url?: string | null;
};
