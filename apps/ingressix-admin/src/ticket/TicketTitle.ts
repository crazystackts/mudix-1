import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "priceCategory";

export const TicketTitle = (record: TTicket): string => {
  return record.priceCategory?.toString() || String(record.id);
};
