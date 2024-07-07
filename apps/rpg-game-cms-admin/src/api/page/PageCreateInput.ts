import { VideoBlockCreateNestedManyWithoutPagesInput } from "./VideoBlockCreateNestedManyWithoutPagesInput";
import { ImageBlockCreateNestedManyWithoutPagesInput } from "./ImageBlockCreateNestedManyWithoutPagesInput";
import { TextBlockCreateNestedManyWithoutPagesInput } from "./TextBlockCreateNestedManyWithoutPagesInput";

export type PageCreateInput = {
  title?: string | null;
  videoBlocks?: VideoBlockCreateNestedManyWithoutPagesInput;
  imageBlocks?: ImageBlockCreateNestedManyWithoutPagesInput;
  textBlocks?: TextBlockCreateNestedManyWithoutPagesInput;
};
