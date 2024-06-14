import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type TicketWhereInput = {
  cancellationDate?: DateTimeNullableFilter;
  id?: IntFilter;
  item?: ItemWhereUniqueInput;
  price?: FloatFilter;
  priceCategory?: StringFilter;
  priceDescription?: StringFilter;
  qrCode?: StringFilter;
  refundDeadline?: DateTimeNullableFilter;
  seatCode?: StringFilter;
  session?: SessionWhereUniqueInput;
  status?: StringFilter;
};
