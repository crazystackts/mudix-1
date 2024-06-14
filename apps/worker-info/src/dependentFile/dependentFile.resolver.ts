import * as graphql from "@nestjs/graphql";
import { DependentFileResolverBase } from "./base/dependentFile.resolver.base";
import { DependentFile } from "./base/DependentFile";
import { DependentFileService } from "./dependentFile.service";

@graphql.Resolver(() => DependentFile)
export class DependentFileResolver extends DependentFileResolverBase {
  constructor(protected readonly service: DependentFileService) {
    super(service);
  }
}
