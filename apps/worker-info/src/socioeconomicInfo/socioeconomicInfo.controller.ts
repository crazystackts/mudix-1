import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SocioeconomicInfoService } from "./socioeconomicInfo.service";
import { SocioeconomicInfoControllerBase } from "./base/socioeconomicInfo.controller.base";

@swagger.ApiTags("socioeconomicInfos")
@common.Controller("socioeconomicInfos")
export class SocioeconomicInfoController extends SocioeconomicInfoControllerBase {
  constructor(protected readonly service: SocioeconomicInfoService) {
    super(service);
  }
}
