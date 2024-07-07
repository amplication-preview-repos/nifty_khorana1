import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";

export const ImageBlockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="URL" source="url" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="page.id" reference="Page" label="Page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
