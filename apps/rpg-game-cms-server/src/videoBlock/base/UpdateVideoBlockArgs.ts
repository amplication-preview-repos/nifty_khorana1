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
import { VideoBlockWhereUniqueInput } from "./VideoBlockWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VideoBlockUpdateInput } from "./VideoBlockUpdateInput";

@ArgsType()
class UpdateVideoBlockArgs {
  @ApiProperty({
    required: true,
    type: () => VideoBlockWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VideoBlockWhereUniqueInput)
  @Field(() => VideoBlockWhereUniqueInput, { nullable: false })
  where!: VideoBlockWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VideoBlockUpdateInput,
  })
  @ValidateNested()
  @Type(() => VideoBlockUpdateInput)
  @Field(() => VideoBlockUpdateInput, { nullable: false })
  data!: VideoBlockUpdateInput;
}

export { UpdateVideoBlockArgs as UpdateVideoBlockArgs };
