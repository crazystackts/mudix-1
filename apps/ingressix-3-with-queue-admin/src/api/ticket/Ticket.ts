import { Decimal } from "decimal.js";
import { Session } from "../session/Session";

export type Ticket = {
  cancellationDate: Date;
  id: number;
  price: Decimal;
  priceCategory: string;
  priceDescription: string;
  qrCode: string;
  returnDeadline: Date;
  seatCode: string;
  sessions?: Session;
  ticketStatus: string;
};
