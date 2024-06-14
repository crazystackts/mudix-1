import * as graphql from "@nestjs/graphql";
import { SocioeconomicInfoResolverBase } from "./base/socioeconomicInfo.resolver.base";
import { SocioeconomicInfo } from "./base/SocioeconomicInfo";
import { SocioeconomicInfoService } from "./socioeconomicInfo.service";

@graphql.Resolver(() => SocioeconomicInfo)
export class SocioeconomicInfoResolver extends SocioeconomicInfoResolverBase {
  constructor(protected readonly service: SocioeconomicInfoService) {
    super(service);
  }
}
