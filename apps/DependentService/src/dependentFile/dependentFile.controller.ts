import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DependentFileService } from "./dependentFile.service";
import { DependentFileControllerBase } from "./base/dependentFile.controller.base";

@swagger.ApiTags("dependentFiles")
@common.Controller("dependentFiles")
export class DependentFileController extends DependentFileControllerBase {
  constructor(protected readonly service: DependentFileService) {
    super(service);
  }
}
