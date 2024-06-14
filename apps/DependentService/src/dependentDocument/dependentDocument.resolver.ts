import * as graphql from "@nestjs/graphql";
import { DependentDocumentResolverBase } from "./base/dependentDocument.resolver.base";
import { DependentDocument } from "./base/DependentDocument";
import { DependentDocumentService } from "./dependentDocument.service";

@graphql.Resolver(() => DependentDocument)
export class DependentDocumentResolver extends DependentDocumentResolverBase {
  constructor(protected readonly service: DependentDocumentService) {
    super(service);
  }
}
