import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoBlockServiceBase } from "./base/videoBlock.service.base";

@Injectable()
export class VideoBlockService extends VideoBlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
