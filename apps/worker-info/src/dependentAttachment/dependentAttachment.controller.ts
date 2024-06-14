import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentAttachmentService } from "./dependentAttachment.service";
import { DependentAttachmentControllerBase } from "./base/dependentAttachment.controller.base";

@swagger.ApiTags("dependentAttachments")
@common.Controller("dependentAttachments")
export class DependentAttachmentController extends DependentAttachmentControllerBase {
  constructor(protected readonly service: DependentAttachmentService) {
    super(service);
  }
}
