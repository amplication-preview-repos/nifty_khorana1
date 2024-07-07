import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VideoBlockListRelationFilter } from "../videoBlock/VideoBlockListRelationFilter";
import { ImageBlockListRelationFilter } from "../imageBlock/ImageBlockListRelationFilter";
import { TextBlockListRelationFilter } from "../textBlock/TextBlockListRelationFilter";

export type PageWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  videoBlocks?: VideoBlockListRelationFilter;
  imageBlocks?: ImageBlockListRelationFilter;
  textBlocks?: TextBlockListRelationFilter;
};
