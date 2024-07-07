import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ImageBlockCreateInput = {
  url?: string | null;
  description?: string | null;
  page?: PageWhereUniqueInput | null;
};
