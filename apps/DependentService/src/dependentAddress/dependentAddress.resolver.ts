import * as graphql from "@nestjs/graphql";
import { DependentAddressResolverBase } from "./base/dependentAddress.resolver.base";
import { DependentAddress } from "./base/DependentAddress";
import { DependentAddressService } from "./dependentAddress.service";

@graphql.Resolver(() => DependentAddress)
export class DependentAddressResolver extends DependentAddressResolverBase {
  constructor(protected readonly service: DependentAddressService) {
    super(service);
  }
}
