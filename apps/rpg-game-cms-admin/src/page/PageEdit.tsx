import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VideoBlockTitle } from "../videoBlock/VideoBlockTitle";
import { ImageBlockTitle } from "../imageBlock/ImageBlockTitle";
import { TextBlockTitle } from "../textBlock/TextBlockTitle";

export const PageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput
          source="videoBlocks"
          reference="VideoBlock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoBlockTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="imageBlocks"
          reference="ImageBlock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageBlockTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="textBlocks"
          reference="TextBlock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TextBlockTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
