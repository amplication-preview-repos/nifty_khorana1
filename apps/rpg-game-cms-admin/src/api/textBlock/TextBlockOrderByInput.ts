import { SortOrder } from "../../util/SortOrder";

export type TextBlockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  pageId?: SortOrder;
};
