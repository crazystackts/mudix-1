import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactAuthorizationService } from "./contactAuthorization.service";
import { ContactAuthorizationControllerBase } from "./base/contactAuthorization.controller.base";

@swagger.ApiTags("contactAuthorizations")
@common.Controller("contactAuthorizations")
export class ContactAuthorizationController extends ContactAuthorizationControllerBase {
  constructor(protected readonly service: ContactAuthorizationService) {
    super(service);
  }
}
