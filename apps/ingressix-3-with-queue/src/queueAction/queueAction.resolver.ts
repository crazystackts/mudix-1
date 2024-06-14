import * as graphql from "@nestjs/graphql";
import { QueueActionResolverBase } from "./base/queueAction.resolver.base";
import { QueueAction } from "./base/QueueAction";
import { QueueActionService } from "./queueAction.service";

@graphql.Resolver(() => QueueAction)
export class QueueActionResolver extends QueueActionResolverBase {
  constructor(protected readonly service: QueueActionService) {
    super(service);
  }
}
