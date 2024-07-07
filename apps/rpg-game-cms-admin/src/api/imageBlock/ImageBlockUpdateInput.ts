import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ImageBlockUpdateInput = {
  url?: string | null;
  description?: string | null;
  page?: PageWhereUniqueInput | null;
};
