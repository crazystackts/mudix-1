import * as graphql from "@nestjs/graphql";
import { TicketResolverBase } from "./base/ticket.resolver.base";
import { Ticket } from "./base/Ticket";
import { TicketService } from "./ticket.service";

@graphql.Resolver(() => Ticket)
export class TicketResolver extends TicketResolverBase {
  constructor(protected readonly service: TicketService) {
    super(service);
  }
}
