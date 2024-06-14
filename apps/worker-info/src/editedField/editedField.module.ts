import { Module } from "@nestjs/common";
import { EditedFieldModuleBase } from "./base/editedField.module.base";
import { EditedFieldService } from "./editedField.service";
import { EditedFieldController } from "./editedField.controller";
import { EditedFieldResolver } from "./editedField.resolver";

@Module({
  imports: [EditedFieldModuleBase],
  controllers: [EditedFieldController],
  providers: [EditedFieldService, EditedFieldResolver],
  exports: [EditedFieldService],
})
export class EditedFieldModule {}
