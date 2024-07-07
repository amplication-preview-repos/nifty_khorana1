import { VideoBlockWhereInput } from "./VideoBlockWhereInput";
import { VideoBlockOrderByInput } from "./VideoBlockOrderByInput";

export type VideoBlockFindManyArgs = {
  where?: VideoBlockWhereInput;
  orderBy?: Array<VideoBlockOrderByInput>;
  skip?: number;
  take?: number;
};
