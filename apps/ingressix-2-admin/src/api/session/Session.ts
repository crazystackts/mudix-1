import { Event } from "../event/Event";
import { Order } from "../order/Order";
import { OrderItem } from "../orderItem/OrderItem";
import { Ticket } from "../ticket/Ticket";

export type Session = {
  event?: Event;
  id: string;
  maxTickets: number;
  order?: Array<Order>;
  orderItems?: Array<OrderItem>;
  remainingTickets: number;
  saleEndDate: Date;
  saleStartDate: Date;
  sessionDateTime: Date;
  sessionStatus: string;
  sessionType: string;
  tickets?: Array<Ticket>;
};
