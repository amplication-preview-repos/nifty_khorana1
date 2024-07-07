import { SortOrder } from "../../util/SortOrder";

export type ImageBlockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  description?: SortOrder;
  pageId?: SortOrder;
};
