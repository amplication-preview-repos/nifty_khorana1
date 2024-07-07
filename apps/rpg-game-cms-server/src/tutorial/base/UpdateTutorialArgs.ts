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
import { TutorialWhereUniqueInput } from "./TutorialWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TutorialUpdateInput } from "./TutorialUpdateInput";

@ArgsType()
class UpdateTutorialArgs {
  @ApiProperty({
    required: true,
    type: () => TutorialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TutorialWhereUniqueInput)
  @Field(() => TutorialWhereUniqueInput, { nullable: false })
  where!: TutorialWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TutorialUpdateInput,
  })
  @ValidateNested()
  @Type(() => TutorialUpdateInput)
  @Field(() => TutorialUpdateInput, { nullable: false })
  data!: TutorialUpdateInput;
}

export { UpdateTutorialArgs as UpdateTutorialArgs };
