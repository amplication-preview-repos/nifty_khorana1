import { TextBlockWhereInput } from "./TextBlockWhereInput";
import { TextBlockOrderByInput } from "./TextBlockOrderByInput";

export type TextBlockFindManyArgs = {
  where?: TextBlockWhereInput;
  orderBy?: Array<TextBlockOrderByInput>;
  skip?: number;
  take?: number;
};
