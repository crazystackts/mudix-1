import { PaymentHistory as TPaymentHistory } from "../api/paymentHistory/PaymentHistory";

export const PAYMENTHISTORY_TITLE_FIELD = "paymentMethod";

export const PaymentHistoryTitle = (record: TPaymentHistory): string => {
  return record.paymentMethod?.toString() || String(record.id);
};
