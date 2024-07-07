import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AboutWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  title?: StringNullableFilter;
};
