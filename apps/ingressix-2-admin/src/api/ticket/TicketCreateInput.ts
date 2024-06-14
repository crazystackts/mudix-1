import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type TicketCreateInput = {
  cancellationDate?: Date | null;
  price: number;
  priceCategory: string;
  priceDescription: string;
  qrCode: string;
  returnDeadline?: Date | null;
  seatCode: string;
  session: SessionWhereUniqueInput;
  ticketStatus: string;
};
