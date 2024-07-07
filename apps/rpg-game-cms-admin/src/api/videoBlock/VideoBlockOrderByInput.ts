import { SortOrder } from "../../util/SortOrder";

export type VideoBlockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  pageId?: SortOrder;
  url?: SortOrder;
};
