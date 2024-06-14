import { Decimal } from "decimal.js";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type TicketUpdateInput = {
  cancellationDate?: Date;
  price?: Decimal;
  priceCategory?: string;
  priceDescription?: string;
  qrCode?: string;
  returnDeadline?: Date;
  seatCode?: string;
  sessions?: SessionWhereUniqueInput;
  ticketStatus?: string;
};
