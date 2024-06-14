import * as graphql from "@nestjs/graphql";
import { PhoneResolverBase } from "./base/phone.resolver.base";
import { Phone } from "./base/Phone";
import { PhoneService } from "./phone.service";

@graphql.Resolver(() => Phone)
export class PhoneResolver extends PhoneResolverBase {
  constructor(protected readonly service: PhoneService) {
    super(service);
  }
}
