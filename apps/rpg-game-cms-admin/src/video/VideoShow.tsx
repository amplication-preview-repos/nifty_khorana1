import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="URL" source="url" />
        <TextField label="Description" source="description" />
        <TextField label="PublishedAt" source="publishedAt" />
        <TextField label="Duration" source="duration" />
      </SimpleShowLayout>
    </Show>
  );
};
