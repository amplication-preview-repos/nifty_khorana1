import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TutorialWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  difficultyLevel?: "Option1";
  title?: StringNullableFilter;
};
