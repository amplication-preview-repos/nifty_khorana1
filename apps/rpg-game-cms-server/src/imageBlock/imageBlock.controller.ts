import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageBlockService } from "./imageBlock.service";
import { ImageBlockControllerBase } from "./base/imageBlock.controller.base";

@swagger.ApiTags("imageBlocks")
@common.Controller("imageBlocks")
export class ImageBlockController extends ImageBlockControllerBase {
  constructor(protected readonly service: ImageBlockService) {
    super(service);
  }
}
