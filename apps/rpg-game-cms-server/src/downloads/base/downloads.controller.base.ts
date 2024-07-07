/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DownloadsService } from "../downloads.service";
import { DownloadsCreateInput } from "./DownloadsCreateInput";
import { Downloads } from "./Downloads";
import { DownloadsFindManyArgs } from "./DownloadsFindManyArgs";
import { DownloadsWhereUniqueInput } from "./DownloadsWhereUniqueInput";
import { DownloadsUpdateInput } from "./DownloadsUpdateInput";

export class DownloadsControllerBase {
  constructor(protected readonly service: DownloadsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Downloads })
  async createDownloads(
    @common.Body() data: DownloadsCreateInput
  ): Promise<Downloads> {
    return await this.service.createDownloads({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        downloadUrl: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Downloads] })
  @ApiNestedQuery(DownloadsFindManyArgs)
  async downloadsItems(@common.Req() request: Request): Promise<Downloads[]> {
    const args = plainToClass(DownloadsFindManyArgs, request.query);
    return this.service.downloadsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        downloadUrl: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Downloads })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async downloads(
    @common.Param() params: DownloadsWhereUniqueInput
  ): Promise<Downloads | null> {
    const result = await this.service.downloads({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        downloadUrl: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Downloads })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDownloads(
    @common.Param() params: DownloadsWhereUniqueInput,
    @common.Body() data: DownloadsUpdateInput
  ): Promise<Downloads | null> {
    try {
      return await this.service.updateDownloads({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,
          downloadUrl: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Downloads })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDownloads(
    @common.Param() params: DownloadsWhereUniqueInput
  ): Promise<Downloads | null> {
    try {
      return await this.service.deleteDownloads({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,
          downloadUrl: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
