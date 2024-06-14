import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentContactAuthorizationService } from "./dependentContactAuthorization.service";
import { DependentContactAuthorizationControllerBase } from "./base/dependentContactAuthorization.controller.base";

@swagger.ApiTags("dependentContactAuthorizations")
@common.Controller("dependentContactAuthorizations")
export class DependentContactAuthorizationController extends DependentContactAuthorizationControllerBase {
  constructor(
    protected readonly service: DependentContactAuthorizationService
  ) {
    super(service);
  }
}
