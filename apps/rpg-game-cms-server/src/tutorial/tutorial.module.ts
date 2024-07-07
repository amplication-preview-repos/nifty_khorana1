import { Module } from "@nestjs/common";
import { TutorialModuleBase } from "./base/tutorial.module.base";
import { TutorialService } from "./tutorial.service";
import { TutorialController } from "./tutorial.controller";
import { TutorialResolver } from "./tutorial.resolver";

@Module({
  imports: [TutorialModuleBase],
  controllers: [TutorialController],
  providers: [TutorialService, TutorialResolver],
  exports: [TutorialService],
})
export class TutorialModule {}
