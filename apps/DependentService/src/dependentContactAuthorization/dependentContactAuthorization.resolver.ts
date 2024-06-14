import * as graphql from "@nestjs/graphql";
import { DependentContactAuthorizationResolverBase } from "./base/dependentContactAuthorization.resolver.base";
import { DependentContactAuthorization } from "./base/DependentContactAuthorization";
import { DependentContactAuthorizationService } from "./dependentContactAuthorization.service";

@graphql.Resolver(() => DependentContactAuthorization)
export class DependentContactAuthorizationResolver extends DependentContactAuthorizationResolverBase {
  constructor(
    protected readonly service: DependentContactAuthorizationService
  ) {
    super(service);
  }
}
