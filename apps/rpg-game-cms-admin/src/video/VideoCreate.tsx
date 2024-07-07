import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const VideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="PublishedAt" source="publishedAt" />
        <NumberInput step={1} label="Duration" source="duration" />
      </SimpleForm>
    </Create>
  );
};
