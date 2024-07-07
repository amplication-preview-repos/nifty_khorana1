import { ImageBlock as TImageBlock } from "../api/imageBlock/ImageBlock";

export const IMAGEBLOCK_TITLE_FIELD = "url";

export const ImageBlockTitle = (record: TImageBlock): string => {
  return record.url?.toString() || String(record.id);
};
