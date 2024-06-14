import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentDocumentService } from "./dependentDocument.service";
import { DependentDocumentControllerBase } from "./base/dependentDocument.controller.base";

@swagger.ApiTags("dependentDocuments")
@common.Controller("dependentDocuments")
export class DependentDocumentController extends DependentDocumentControllerBase {
  constructor(protected readonly service: DependentDocumentService) {
    super(service);
  }
}
