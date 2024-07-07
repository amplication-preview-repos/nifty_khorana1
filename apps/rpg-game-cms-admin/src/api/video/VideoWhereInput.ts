import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VideoWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  description?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
};
