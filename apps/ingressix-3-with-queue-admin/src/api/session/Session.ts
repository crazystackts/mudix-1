import { Event } from "../event/Event";
import { OrderItem } from "../orderItem/OrderItem";
import { Order } from "../order/Order";
import { QueuePosition } from "../queuePosition/QueuePosition";
import { Ticket } from "../ticket/Ticket";

export type Session = {
  events?: Event;
  id: string;
  maxTickets: number;
  orderItems?: Array<OrderItem>;
  orders?: Array<Order>;
  queuePositions?: Array<QueuePosition>;
  remainingTickets: number;
  saleEndDate: Date;
  saleStartDate: Date;
  sessionDateTime: Date;
  sessionStatus: string;
  sessionType: string;
  tickets?: Array<Ticket>;
};
