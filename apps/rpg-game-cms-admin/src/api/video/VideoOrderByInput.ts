import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  url?: SortOrder;
  description?: SortOrder;
  publishedAt?: SortOrder;
  duration?: SortOrder;
};
