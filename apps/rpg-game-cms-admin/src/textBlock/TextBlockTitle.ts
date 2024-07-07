import { TextBlock as TTextBlock } from "../api/textBlock/TextBlock";

export const TEXTBLOCK_TITLE_FIELD = "id";

export const TextBlockTitle = (record: TTextBlock): string => {
  return record.id?.toString() || String(record.id);
};
