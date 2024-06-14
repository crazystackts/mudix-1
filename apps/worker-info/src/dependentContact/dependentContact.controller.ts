import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentContactService } from "./dependentContact.service";
import { DependentContactControllerBase } from "./base/dependentContact.controller.base";

@swagger.ApiTags("dependentContacts")
@common.Controller("dependentContacts")
export class DependentContactController extends DependentContactControllerBase {
  constructor(protected readonly service: DependentContactService) {
    super(service);
  }
}
