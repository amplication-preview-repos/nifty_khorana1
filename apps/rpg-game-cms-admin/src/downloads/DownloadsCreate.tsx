import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DownloadsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="DownloadURL" source="downloadUrl" />
      </SimpleForm>
    </Create>
  );
};
