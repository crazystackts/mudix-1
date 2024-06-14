import * as graphql from "@nestjs/graphql";
import { QueuePositionResolverBase } from "./base/queuePosition.resolver.base";
import { QueuePosition } from "./base/QueuePosition";
import { QueuePositionService } from "./queuePosition.service";

@graphql.Resolver(() => QueuePosition)
export class QueuePositionResolver extends QueuePositionResolverBase {
  constructor(protected readonly service: QueuePositionService) {
    super(service);
  }
}
