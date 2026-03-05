import { Module } from '@nestjs/common';
import { PurchaseDetailService } from './purchase_detail.service';
import { PurchaseDetailController } from './purchase_detail.controller';

@Module({
  controllers: [PurchaseDetailController],
  providers: [PurchaseDetailService],
})
export class PurchaseDetailModule {}
