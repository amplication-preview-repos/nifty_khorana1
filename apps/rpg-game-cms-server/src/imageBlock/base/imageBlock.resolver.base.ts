/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ImageBlock } from "./ImageBlock";
import { ImageBlockCountArgs } from "./ImageBlockCountArgs";
import { ImageBlockFindManyArgs } from "./ImageBlockFindManyArgs";
import { ImageBlockFindUniqueArgs } from "./ImageBlockFindUniqueArgs";
import { CreateImageBlockArgs } from "./CreateImageBlockArgs";
import { UpdateImageBlockArgs } from "./UpdateImageBlockArgs";
import { DeleteImageBlockArgs } from "./DeleteImageBlockArgs";
import { Page } from "../../page/base/Page";
import { ImageBlockService } from "../imageBlock.service";
@graphql.Resolver(() => ImageBlock)
export class ImageBlockResolverBase {
  constructor(protected readonly service: ImageBlockService) {}

  async _imageBlocksMeta(
    @graphql.Args() args: ImageBlockCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ImageBlock])
  async imageBlocks(
    @graphql.Args() args: ImageBlockFindManyArgs
  ): Promise<ImageBlock[]> {
    return this.service.imageBlocks(args);
  }

  @graphql.Query(() => ImageBlock, { nullable: true })
  async imageBlock(
    @graphql.Args() args: ImageBlockFindUniqueArgs
  ): Promise<ImageBlock | null> {
    const result = await this.service.imageBlock(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ImageBlock)
  async createImageBlock(
    @graphql.Args() args: CreateImageBlockArgs
  ): Promise<ImageBlock> {
    return await this.service.createImageBlock({
      ...args,
      data: {
        ...args.data,

        page: args.data.page
          ? {
              connect: args.data.page,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ImageBlock)
  async updateImageBlock(
    @graphql.Args() args: UpdateImageBlockArgs
  ): Promise<ImageBlock | null> {
    try {
      return await this.service.updateImageBlock({
        ...args,
        data: {
          ...args.data,

          page: args.data.page
            ? {
                connect: args.data.page,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ImageBlock)
  async deleteImageBlock(
    @graphql.Args() args: DeleteImageBlockArgs
  ): Promise<ImageBlock | null> {
    try {
      return await this.service.deleteImageBlock(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Page, {
    nullable: true,
    name: "page",
  })
  async getPage(@graphql.Parent() parent: ImageBlock): Promise<Page | null> {
    const result = await this.service.getPage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
