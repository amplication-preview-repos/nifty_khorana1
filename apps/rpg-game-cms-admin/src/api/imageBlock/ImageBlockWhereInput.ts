import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ImageBlockWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  description?: StringNullableFilter;
  page?: PageWhereUniqueInput;
};
