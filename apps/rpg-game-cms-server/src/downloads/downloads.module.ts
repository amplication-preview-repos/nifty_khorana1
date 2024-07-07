import { Module } from "@nestjs/common";
import { DownloadsModuleBase } from "./base/downloads.module.base";
import { DownloadsService } from "./downloads.service";
import { DownloadsController } from "./downloads.controller";
import { DownloadsResolver } from "./downloads.resolver";

@Module({
  imports: [DownloadsModuleBase],
  controllers: [DownloadsController],
  providers: [DownloadsService, DownloadsResolver],
  exports: [DownloadsService],
})
export class DownloadsModule {}
