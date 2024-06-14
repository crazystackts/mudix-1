import { PaymentHistoryWhereInput } from "./PaymentHistoryWhereInput";
import { PaymentHistoryOrderByInput } from "./PaymentHistoryOrderByInput";

export type PaymentHistoryFindManyArgs = {
  where?: PaymentHistoryWhereInput;
  orderBy?: Array<PaymentHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
