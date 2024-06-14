import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhoneService } from "./phone.service";
import { PhoneControllerBase } from "./base/phone.controller.base";

@swagger.ApiTags("phones")
@common.Controller("phones")
export class PhoneController extends PhoneControllerBase {
  constructor(protected readonly service: PhoneService) {
    super(service);
  }
}
