import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SocioeconomicInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SocioeconomicInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Family Income Code" source="familyIncomeCode" />
        <TextField label="Family Income Title" source="familyIncomeTitle" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
        <TextField label="Salary Code" source="salaryCode" />
        <TextField label="Salary Title" source="salaryTitle" />
      </Datagrid>
    </List>
  );
};
