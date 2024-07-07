import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type VideoBlockWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  page?: PageWhereUniqueInput;
  url?: StringNullableFilter;
};
