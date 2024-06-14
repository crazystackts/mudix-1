import { Session } from "../session/Session";

export type Ticket = {
  cancellationDate: Date | null;
  id: number;
  price: number;
  priceCategory: string;
  priceDescription: string;
  qrCode: string;
  returnDeadline: Date | null;
  seatCode: string;
  session?: Session;
  ticketStatus: string;
};
