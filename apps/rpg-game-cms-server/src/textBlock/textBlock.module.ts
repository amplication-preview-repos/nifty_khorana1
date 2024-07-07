import { Module } from "@nestjs/common";
import { TextBlockModuleBase } from "./base/textBlock.module.base";
import { TextBlockService } from "./textBlock.service";
import { TextBlockController } from "./textBlock.controller";
import { TextBlockResolver } from "./textBlock.resolver";

@Module({
  imports: [TextBlockModuleBase],
  controllers: [TextBlockController],
  providers: [TextBlockService, TextBlockResolver],
  exports: [TextBlockService],
})
export class TextBlockModule {}
