import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type TicketCreateInput = {
  cancellationDate?: Date | null;
  item?: ItemWhereUniqueInput | null;
  price: number;
  priceCategory: string;
  priceDescription: string;
  qrCode: string;
  refundDeadline?: Date | null;
  seatCode: string;
  session: SessionWhereUniqueInput;
  status: string;
};
