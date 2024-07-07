import { VideoBlock as TVideoBlock } from "../api/videoBlock/VideoBlock";

export const VIDEOBLOCK_TITLE_FIELD = "url";

export const VideoBlockTitle = (record: TVideoBlock): string => {
  return record.url?.toString() || String(record.id);
};
