import { TutorialWhereInput } from "./TutorialWhereInput";
import { TutorialOrderByInput } from "./TutorialOrderByInput";

export type TutorialFindManyArgs = {
  where?: TutorialWhereInput;
  orderBy?: Array<TutorialOrderByInput>;
  skip?: number;
  take?: number;
};
