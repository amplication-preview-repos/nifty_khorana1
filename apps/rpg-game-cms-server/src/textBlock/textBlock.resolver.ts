import * as graphql from "@nestjs/graphql";
import { TextBlockResolverBase } from "./base/textBlock.resolver.base";
import { TextBlock } from "./base/TextBlock";
import { TextBlockService } from "./textBlock.service";

@graphql.Resolver(() => TextBlock)
export class TextBlockResolver extends TextBlockResolverBase {
  constructor(protected readonly service: TextBlockService) {
    super(service);
  }
}
