import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkerService } from "./worker.service";
import { WorkerControllerBase } from "./base/worker.controller.base";

@swagger.ApiTags("workers")
@common.Controller("workers")
export class WorkerController extends WorkerControllerBase {
  constructor(protected readonly service: WorkerService) {
    super(service);
  }
}
