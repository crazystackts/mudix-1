import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FilialService } from "./filial.service";
import { FilialControllerBase } from "./base/filial.controller.base";

@swagger.ApiTags("filials")
@common.Controller("filials")
export class FilialController extends FilialControllerBase {
  constructor(protected readonly service: FilialService) {
    super(service);
  }
}
