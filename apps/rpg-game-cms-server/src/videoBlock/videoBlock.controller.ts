import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoBlockService } from "./videoBlock.service";
import { VideoBlockControllerBase } from "./base/videoBlock.controller.base";

@swagger.ApiTags("videoBlocks")
@common.Controller("videoBlocks")
export class VideoBlockController extends VideoBlockControllerBase {
  constructor(protected readonly service: VideoBlockService) {
    super(service);
  }
}
