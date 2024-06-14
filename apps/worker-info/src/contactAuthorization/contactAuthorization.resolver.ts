import * as graphql from "@nestjs/graphql";
import { ContactAuthorizationResolverBase } from "./base/contactAuthorization.resolver.base";
import { ContactAuthorization } from "./base/ContactAuthorization";
import { ContactAuthorizationService } from "./contactAuthorization.service";

@graphql.Resolver(() => ContactAuthorization)
export class ContactAuthorizationResolver extends ContactAuthorizationResolverBase {
  constructor(protected readonly service: ContactAuthorizationService) {
    super(service);
  }
}
