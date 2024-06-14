import * as graphql from "@nestjs/graphql";
import { DependentContactResolverBase } from "./base/dependentContact.resolver.base";
import { DependentContact } from "./base/DependentContact";
import { DependentContactService } from "./dependentContact.service";

@graphql.Resolver(() => DependentContact)
export class DependentContactResolver extends DependentContactResolverBase {
  constructor(protected readonly service: DependentContactService) {
    super(service);
  }
}
