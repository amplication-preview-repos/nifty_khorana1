import * as graphql from "@nestjs/graphql";
import { DownloadsResolverBase } from "./base/downloads.resolver.base";
import { Downloads } from "./base/Downloads";
import { DownloadsService } from "./downloads.service";

@graphql.Resolver(() => Downloads)
export class DownloadsResolver extends DownloadsResolverBase {
  constructor(protected readonly service: DownloadsService) {
    super(service);
  }
}
