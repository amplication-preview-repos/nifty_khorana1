import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DownloadsService } from "./downloads.service";
import { DownloadsControllerBase } from "./base/downloads.controller.base";

@swagger.ApiTags("downloads")
@common.Controller("downloads")
export class DownloadsController extends DownloadsControllerBase {
  constructor(protected readonly service: DownloadsService) {
    super(service);
  }
}
