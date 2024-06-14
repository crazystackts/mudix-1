import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "acquisitionChannel";

export const OrderTitle = (record: TOrder): string => {
  return record.acquisitionChannel?.toString() || String(record.id);
};
