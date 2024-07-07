import { About as TAbout } from "../api/about/About";

export const ABOUT_TITLE_FIELD = "title";

export const AboutTitle = (record: TAbout): string => {
  return record.title?.toString() || String(record.id);
};
