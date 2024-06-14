import { Item } from "../item/Item";
import { Session } from "../session/Session";

export type Ticket = {
  cancellationDate: Date | null;
  id: number;
  item?: Item | null;
  price: number;
  priceCategory: string;
  priceDescription: string;
  qrCode: string;
  refundDeadline: Date | null;
  seatCode: string;
  session?: Session;
  status: string;
};
