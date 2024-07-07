import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TutorialServiceBase } from "./base/tutorial.service.base";

@Injectable()
export class TutorialService extends TutorialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
