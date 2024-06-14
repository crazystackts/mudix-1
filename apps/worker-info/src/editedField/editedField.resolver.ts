import * as graphql from "@nestjs/graphql";
import { EditedFieldResolverBase } from "./base/editedField.resolver.base";
import { EditedField } from "./base/EditedField";
import { EditedFieldService } from "./editedField.service";

@graphql.Resolver(() => EditedField)
export class EditedFieldResolver extends EditedFieldResolverBase {
  constructor(protected readonly service: EditedFieldService) {
    super(service);
  }
}
