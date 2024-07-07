import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageBlockServiceBase } from "./base/imageBlock.service.base";

@Injectable()
export class ImageBlockService extends ImageBlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
