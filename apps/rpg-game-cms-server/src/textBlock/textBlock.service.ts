import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextBlockServiceBase } from "./base/textBlock.service.base";

@Injectable()
export class TextBlockService extends TextBlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
