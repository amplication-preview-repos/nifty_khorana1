import { Module } from "@nestjs/common";
import { ImageBlockModuleBase } from "./base/imageBlock.module.base";
import { ImageBlockService } from "./imageBlock.service";
import { ImageBlockController } from "./imageBlock.controller";
import { ImageBlockResolver } from "./imageBlock.resolver";

@Module({
  imports: [ImageBlockModuleBase],
  controllers: [ImageBlockController],
  providers: [ImageBlockService, ImageBlockResolver],
  exports: [ImageBlockService],
})
export class ImageBlockModule {}
