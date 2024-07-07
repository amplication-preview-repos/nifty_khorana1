import { SortOrder } from "../../util/SortOrder";

export type AboutOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  title?: SortOrder;
};
