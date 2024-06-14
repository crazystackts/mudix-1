import { DependentContactAuthorization as TDependentContactAuthorization } from "../api/dependentContactAuthorization/DependentContactAuthorization";

export const DEPENDENTCONTACTAUTHORIZATION_TITLE_FIELD = "id";

export const DependentContactAuthorizationTitle = (
  record: TDependentContactAuthorization
): string => {
  return record.id?.toString() || String(record.id);
};
