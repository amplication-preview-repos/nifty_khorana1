/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageBlockWhereUniqueInput } from "./ImageBlockWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ImageBlockUpdateInput } from "./ImageBlockUpdateInput";

@ArgsType()
class UpdateImageBlockArgs {
  @ApiProperty({
    required: true,
    type: () => ImageBlockWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageBlockWhereUniqueInput)
  @Field(() => ImageBlockWhereUniqueInput, { nullable: false })
  where!: ImageBlockWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ImageBlockUpdateInput,
  })
  @ValidateNested()
  @Type(() => ImageBlockUpdateInput)
  @Field(() => ImageBlockUpdateInput, { nullable: false })
  data!: ImageBlockUpdateInput;
}

export { UpdateImageBlockArgs as UpdateImageBlockArgs };
