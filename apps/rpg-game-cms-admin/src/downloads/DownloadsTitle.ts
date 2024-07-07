import { Downloads as TDownloads } from "../api/downloads/Downloads";

export const DOWNLOADS_TITLE_FIELD = "title";

export const DownloadsTitle = (record: TDownloads): string => {
  return record.title?.toString() || String(record.id);
};
