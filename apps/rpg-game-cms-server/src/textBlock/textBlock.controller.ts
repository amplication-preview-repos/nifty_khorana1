import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TextBlockService } from "./textBlock.service";
import { TextBlockControllerBase } from "./base/textBlock.controller.base";

@swagger.ApiTags("textBlocks")
@common.Controller("textBlocks")
export class TextBlockController extends TextBlockControllerBase {
  constructor(protected readonly service: TextBlockService) {
    super(service);
  }
}
