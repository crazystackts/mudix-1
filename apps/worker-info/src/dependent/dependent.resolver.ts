import * as graphql from "@nestjs/graphql";
import { DependentResolverBase } from "./base/dependent.resolver.base";
import { Dependent } from "./base/Dependent";
import { DependentService } from "./dependent.service";

@graphql.Resolver(() => Dependent)
export class DependentResolver extends DependentResolverBase {
  constructor(protected readonly service: DependentService) {
    super(service);
  }
}
