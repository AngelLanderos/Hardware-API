import { Module } from '@nestjs/common';
import { InventoryMovementService } from './inventory_movement.service';
import { InventoryMovementController } from './inventory_movement.controller';

@Module({
  controllers: [InventoryMovementController],
  providers: [InventoryMovementService],
})
export class InventoryMovementModule {}
