import { IsDate, IsString } from "class-validator";

export class CreateBusinessDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsDate()
  created_at: Date;
};
