import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EditedFieldService } from "./editedField.service";
import { EditedFieldControllerBase } from "./base/editedField.controller.base";

@swagger.ApiTags("editedFields")
@common.Controller("editedFields")
export class EditedFieldController extends EditedFieldControllerBase {
  constructor(protected readonly service: EditedFieldService) {
    super(service);
  }
}
