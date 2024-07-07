import * as graphql from "@nestjs/graphql";
import { TutorialResolverBase } from "./base/tutorial.resolver.base";
import { Tutorial } from "./base/Tutorial";
import { TutorialService } from "./tutorial.service";

@graphql.Resolver(() => Tutorial)
export class TutorialResolver extends TutorialResolverBase {
  constructor(protected readonly service: TutorialService) {
    super(service);
  }
}
