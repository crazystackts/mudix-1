import * as graphql from "@nestjs/graphql";
import { PaymentHistoryResolverBase } from "./base/paymentHistory.resolver.base";
import { PaymentHistory } from "./base/PaymentHistory";
import { PaymentHistoryService } from "./paymentHistory.service";

@graphql.Resolver(() => PaymentHistory)
export class PaymentHistoryResolver extends PaymentHistoryResolverBase {
  constructor(protected readonly service: PaymentHistoryService) {
    super(service);
  }
}
