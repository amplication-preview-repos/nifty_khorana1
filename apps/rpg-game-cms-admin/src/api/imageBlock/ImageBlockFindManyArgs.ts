import { ImageBlockWhereInput } from "./ImageBlockWhereInput";
import { ImageBlockOrderByInput } from "./ImageBlockOrderByInput";

export type ImageBlockFindManyArgs = {
  where?: ImageBlockWhereInput;
  orderBy?: Array<ImageBlockOrderByInput>;
  skip?: number;
  take?: number;
};
