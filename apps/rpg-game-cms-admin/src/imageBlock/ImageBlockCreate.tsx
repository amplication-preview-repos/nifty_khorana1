import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";

export const ImageBlockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="URL" source="url" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="page.id" reference="Page" label="Page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
