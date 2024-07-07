import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TutorialService } from "./tutorial.service";
import { TutorialControllerBase } from "./base/tutorial.controller.base";

@swagger.ApiTags("tutorials")
@common.Controller("tutorials")
export class TutorialController extends TutorialControllerBase {
  constructor(protected readonly service: TutorialService) {
    super(service);
  }
}
