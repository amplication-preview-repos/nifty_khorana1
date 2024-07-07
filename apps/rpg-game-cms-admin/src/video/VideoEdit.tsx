import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="PublishedAt" source="publishedAt" />
        <NumberInput step={1} label="Duration" source="duration" />
      </SimpleForm>
    </Edit>
  );
};
