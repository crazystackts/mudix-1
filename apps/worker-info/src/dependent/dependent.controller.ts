import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentService } from "./dependent.service";
import { DependentControllerBase } from "./base/dependent.controller.base";

@swagger.ApiTags("dependents")
@common.Controller("dependents")
export class DependentController extends DependentControllerBase {
  constructor(protected readonly service: DependentService) {
    super(service);
  }
}
