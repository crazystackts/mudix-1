import * as graphql from "@nestjs/graphql";
import { HolderResolverBase } from "./base/holder.resolver.base";
import { Holder } from "./base/Holder";
import { HolderService } from "./holder.service";

@graphql.Resolver(() => Holder)
export class HolderResolver extends HolderResolverBase {
  constructor(protected readonly service: HolderService) {
    super(service);
  }
}
