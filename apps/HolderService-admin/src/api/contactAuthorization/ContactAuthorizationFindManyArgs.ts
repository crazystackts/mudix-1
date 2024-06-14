import { ContactAuthorizationWhereInput } from "./ContactAuthorizationWhereInput";
import { ContactAuthorizationOrderByInput } from "./ContactAuthorizationOrderByInput";

export type ContactAuthorizationFindManyArgs = {
  where?: ContactAuthorizationWhereInput;
  orderBy?: Array<ContactAuthorizationOrderByInput>;
  skip?: number;
  take?: number;
};
