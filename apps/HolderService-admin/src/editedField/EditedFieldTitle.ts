import { EditedField as TEditedField } from "../api/editedField/EditedField";

export const EDITEDFIELD_TITLE_FIELD = "fieldName";

export const EditedFieldTitle = (record: TEditedField): string => {
  return record.fieldName?.toString() || String(record.id);
};
