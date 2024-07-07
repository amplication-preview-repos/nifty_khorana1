/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class TextBlockUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => PageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PageWhereUniqueInput)
  @IsOptional()
  @Field(() => PageWhereUniqueInput, {
    nullable: true,
  })
  page?: PageWhereUniqueInput | null;
}

export { TextBlockUpdateInput as TextBlockUpdateInput };
