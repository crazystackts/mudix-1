import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentHistoryService } from "./paymentHistory.service";
import { PaymentHistoryControllerBase } from "./base/paymentHistory.controller.base";

@swagger.ApiTags("paymentHistories")
@common.Controller("paymentHistories")
export class PaymentHistoryController extends PaymentHistoryControllerBase {
  constructor(protected readonly service: PaymentHistoryService) {
    super(service);
  }
}
