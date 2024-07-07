import { SortOrder } from "../../util/SortOrder";

export type TutorialOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  publishedAt?: SortOrder;
  difficultyLevel?: SortOrder;
  title?: SortOrder;
};
