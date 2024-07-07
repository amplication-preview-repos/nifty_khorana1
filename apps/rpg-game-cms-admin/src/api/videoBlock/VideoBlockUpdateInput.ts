import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type VideoBlockUpdateInput = {
  description?: string | null;
  page?: PageWhereUniqueInput | null;
  url?: string | null;
};
