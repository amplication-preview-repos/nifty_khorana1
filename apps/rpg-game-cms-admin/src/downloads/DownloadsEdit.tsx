import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DownloadsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="DownloadURL" source="downloadUrl" />
      </SimpleForm>
    </Edit>
  );
};
