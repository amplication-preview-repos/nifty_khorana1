import * as graphql from "@nestjs/graphql";
import { VideoBlockResolverBase } from "./base/videoBlock.resolver.base";
import { VideoBlock } from "./base/VideoBlock";
import { VideoBlockService } from "./videoBlock.service";

@graphql.Resolver(() => VideoBlock)
export class VideoBlockResolver extends VideoBlockResolverBase {
  constructor(protected readonly service: VideoBlockService) {
    super(service);
  }
}
