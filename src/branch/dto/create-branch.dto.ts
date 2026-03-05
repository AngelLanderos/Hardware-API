import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsNumber()
  business_id: number;

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsDate()
  created_at: Date;
}
