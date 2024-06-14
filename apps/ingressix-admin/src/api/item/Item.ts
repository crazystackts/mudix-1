import { Order } from "../order/Order";
import { Session } from "../session/Session";
import { Ticket } from "../ticket/Ticket";

export type Item = {
  dateTime: Date;
  id: number;
  order?: Order;
  session?: Session;
  tickets?: Array<Ticket>;
};
