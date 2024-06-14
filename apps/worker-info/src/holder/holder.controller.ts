import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HolderService } from "./holder.service";
import { HolderControllerBase } from "./base/holder.controller.base";

@swagger.ApiTags("holders")
@common.Controller("holders")
export class HolderController extends HolderControllerBase {
  constructor(protected readonly service: HolderService) {
    super(service);
  }
}
