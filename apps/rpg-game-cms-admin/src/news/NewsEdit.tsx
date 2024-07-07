import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="PublishedAt" source="publishedAt" />
        <TextInput label="Author" source="author" />
      </SimpleForm>
    </Edit>
  );
};
