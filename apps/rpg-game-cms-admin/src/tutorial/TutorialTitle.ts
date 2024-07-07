import { Tutorial as TTutorial } from "../api/tutorial/Tutorial";

export const TUTORIAL_TITLE_FIELD = "title";

export const TutorialTitle = (record: TTutorial): string => {
  return record.title?.toString() || String(record.id);
};
