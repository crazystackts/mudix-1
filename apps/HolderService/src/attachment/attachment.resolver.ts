import * as graphql from "@nestjs/graphql";
import { AttachmentResolverBase } from "./base/attachment.resolver.base";
import { Attachment } from "./base/Attachment";
import { AttachmentService } from "./attachment.service";

@graphql.Resolver(() => Attachment)
export class AttachmentResolver extends AttachmentResolverBase {
  constructor(protected readonly service: AttachmentService) {
    super(service);
  }
}
