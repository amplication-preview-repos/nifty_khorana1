import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VideoBlockTitle } from "../videoBlock/VideoBlockTitle";
import { ImageBlockTitle } from "../imageBlock/ImageBlockTitle";
import { TextBlockTitle } from "../textBlock/TextBlockTitle";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
