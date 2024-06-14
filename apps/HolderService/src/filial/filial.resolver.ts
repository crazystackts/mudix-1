import * as graphql from "@nestjs/graphql";
import { FilialResolverBase } from "./base/filial.resolver.base";
import { Filial } from "./base/Filial";
import { FilialService } from "./filial.service";

@graphql.Resolver(() => Filial)
export class FilialResolver extends FilialResolverBase {
  constructor(protected readonly service: FilialService) {
    super(service);
  }
}
