import { VideoBlockUpdateManyWithoutPagesInput } from "./VideoBlockUpdateManyWithoutPagesInput";
import { ImageBlockUpdateManyWithoutPagesInput } from "./ImageBlockUpdateManyWithoutPagesInput";
import { TextBlockUpdateManyWithoutPagesInput } from "./TextBlockUpdateManyWithoutPagesInput";

export type PageUpdateInput = {
  title?: string | null;
  videoBlocks?: VideoBlockUpdateManyWithoutPagesInput;
  imageBlocks?: ImageBlockUpdateManyWithoutPagesInput;
  textBlocks?: TextBlockUpdateManyWithoutPagesInput;
};
