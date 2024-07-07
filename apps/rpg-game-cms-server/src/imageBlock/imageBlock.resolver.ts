import * as graphql from "@nestjs/graphql";
import { ImageBlockResolverBase } from "./base/imageBlock.resolver.base";
import { ImageBlock } from "./base/ImageBlock";
import { ImageBlockService } from "./imageBlock.service";

@graphql.Resolver(() => ImageBlock)
export class ImageBlockResolver extends ImageBlockResolverBase {
  constructor(protected readonly service: ImageBlockService) {
    super(service);
  }
}
