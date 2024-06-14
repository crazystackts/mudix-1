import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type TicketWhereInput = {
  cancellationDate?: DateTimeFilter;
  id?: IntFilter;
  price?: DecimalFilter;
  priceCategory?: StringFilter;
  priceDescription?: StringFilter;
  qrCode?: StringFilter;
  returnDeadline?: DateTimeFilter;
  seatCode?: StringFilter;
  sessions?: SessionWhereUniqueInput;
  ticketStatus?: StringFilter;
};
