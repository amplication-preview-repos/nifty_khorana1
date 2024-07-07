import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type TextBlockWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  page?: PageWhereUniqueInput;
};
