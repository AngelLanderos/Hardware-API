import { Module } from '@nestjs/common';
import { BusinessUserService } from './business_user.service';
import { BusinessUserController } from './business_user.controller';

@Module({
  controllers: [BusinessUserController],
  providers: [BusinessUserService],
})
export class BusinessUserModule {}
