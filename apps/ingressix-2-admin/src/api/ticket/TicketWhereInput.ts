import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type TicketWhereInput = {
  cancellationDate?: DateTimeNullableFilter;
  id?: IntFilter;
  price?: FloatFilter;
  priceCategory?: StringFilter;
  priceDescription?: StringFilter;
  qrCode?: StringFilter;
  returnDeadline?: DateTimeNullableFilter;
  seatCode?: StringFilter;
  session?: SessionWhereUniqueInput;
  ticketStatus?: StringFilter;
};
