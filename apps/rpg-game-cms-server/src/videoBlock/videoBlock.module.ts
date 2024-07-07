import { Module } from "@nestjs/common";
import { VideoBlockModuleBase } from "./base/videoBlock.module.base";
import { VideoBlockService } from "./videoBlock.service";
import { VideoBlockController } from "./videoBlock.controller";
import { VideoBlockResolver } from "./videoBlock.resolver";

@Module({
  imports: [VideoBlockModuleBase],
  controllers: [VideoBlockController],
  providers: [VideoBlockService, VideoBlockResolver],
  exports: [VideoBlockService],
})
export class VideoBlockModule {}
