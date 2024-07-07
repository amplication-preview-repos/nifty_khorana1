import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TutorialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tutorials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Content" source="content" />
        <TextField label="PublishedAt" source="publishedAt" />
        <TextField label="DifficultyLevel" source="difficultyLevel" />
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
