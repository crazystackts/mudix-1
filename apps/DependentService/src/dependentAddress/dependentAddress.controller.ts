import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentAddressService } from "./dependentAddress.service";
import { DependentAddressControllerBase } from "./base/dependentAddress.controller.base";

@swagger.ApiTags("dependentAddresses")
@common.Controller("dependentAddresses")
export class DependentAddressController extends DependentAddressControllerBase {
  constructor(protected readonly service: DependentAddressService) {
    super(service);
  }
}
