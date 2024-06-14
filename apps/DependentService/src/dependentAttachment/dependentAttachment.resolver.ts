import * as graphql from "@nestjs/graphql";
import { DependentAttachmentResolverBase } from "./base/dependentAttachment.resolver.base";
import { DependentAttachment } from "./base/DependentAttachment";
import { DependentAttachmentService } from "./dependentAttachment.service";

@graphql.Resolver(() => DependentAttachment)
export class DependentAttachmentResolver extends DependentAttachmentResolverBase {
  constructor(protected readonly service: DependentAttachmentService) {
    super(service);
  }
}
