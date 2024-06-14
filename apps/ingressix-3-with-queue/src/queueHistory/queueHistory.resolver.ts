import * as graphql from "@nestjs/graphql";
import { QueueHistoryResolverBase } from "./base/queueHistory.resolver.base";
import { QueueHistory } from "./base/QueueHistory";
import { QueueHistoryService } from "./queueHistory.service";

@graphql.Resolver(() => QueueHistory)
export class QueueHistoryResolver extends QueueHistoryResolverBase {
  constructor(protected readonly service: QueueHistoryService) {
    super(service);
  }
}
