import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueActionService } from "./queueAction.service";
import { QueueActionControllerBase } from "./base/queueAction.controller.base";

@swagger.ApiTags("queueActions")
@common.Controller("queueActions")
export class QueueActionController extends QueueActionControllerBase {
  constructor(protected readonly service: QueueActionService) {
    super(service);
  }
}
