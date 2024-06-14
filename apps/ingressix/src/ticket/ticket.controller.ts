import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TicketService } from "./ticket.service";
import { TicketControllerBase } from "./base/ticket.controller.base";

@swagger.ApiTags("tickets")
@common.Controller("tickets")
export class TicketController extends TicketControllerBase {
  constructor(protected readonly service: TicketService) {
    super(service);
  }
}
