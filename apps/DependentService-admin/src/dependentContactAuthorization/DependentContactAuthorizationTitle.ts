import { DependentContactAuthorization as TDependentContactAuthorization } from "../api/dependentContactAuthorization/DependentContactAuthorization";

export const DEPENDENTCONTACTAUTHORIZATION_TITLE_FIELD = "dependentsId";

export const DependentContactAuthorizationTitle = (
  record: TDependentContactAuthorization
): string => {
  return record.dependentsId?.toString() || String(record.id);
};
