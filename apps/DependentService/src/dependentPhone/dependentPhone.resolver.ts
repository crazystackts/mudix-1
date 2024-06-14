import * as graphql from "@nestjs/graphql";
import { DependentPhoneResolverBase } from "./base/dependentPhone.resolver.base";
import { DependentPhone } from "./base/DependentPhone";
import { DependentPhoneService } from "./dependentPhone.service";

@graphql.Resolver(() => DependentPhone)
export class DependentPhoneResolver extends DependentPhoneResolverBase {
  constructor(protected readonly service: DependentPhoneService) {
    super(service);
  }
}
