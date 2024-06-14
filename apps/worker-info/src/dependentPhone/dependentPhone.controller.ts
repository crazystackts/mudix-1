import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentPhoneService } from "./dependentPhone.service";
import { DependentPhoneControllerBase } from "./base/dependentPhone.controller.base";

@swagger.ApiTags("dependentPhones")
@common.Controller("dependentPhones")
export class DependentPhoneController extends DependentPhoneControllerBase {
  constructor(protected readonly service: DependentPhoneService) {
    super(service);
  }
}
