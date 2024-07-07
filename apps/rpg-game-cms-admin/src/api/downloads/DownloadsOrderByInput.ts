import { SortOrder } from "../../util/SortOrder";

export type DownloadsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  downloadUrl?: SortOrder;
};
