import { DownloadsWhereInput } from "./DownloadsWhereInput";
import { DownloadsOrderByInput } from "./DownloadsOrderByInput";

export type DownloadsFindManyArgs = {
  where?: DownloadsWhereInput;
  orderBy?: Array<DownloadsOrderByInput>;
  skip?: number;
  take?: number;
};
