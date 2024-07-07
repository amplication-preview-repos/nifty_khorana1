import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DownloadsServiceBase } from "./base/downloads.service.base";

@Injectable()
export class DownloadsService extends DownloadsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
