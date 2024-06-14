import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueuePositionService } from "./queuePosition.service";
import { QueuePositionControllerBase } from "./base/queuePosition.controller.base";

@swagger.ApiTags("queuePositions")
@common.Controller("queuePositions")
export class QueuePositionController extends QueuePositionControllerBase {
  constructor(protected readonly service: QueuePositionService) {
    super(service);
  }
}
