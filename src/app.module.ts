import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesAndPermissionsModule } from './roles_and_permissions/roles_and_permissions.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { InventoryModule } from './inventory/inventory.module';
import { SaleModule } from './sale/sale.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';
import { ReportModule } from './report/report.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AuthModule, RolesAndPermissionsModule, ProductModule, UserModule, InventoryModule, SaleModule, PurchaseModule, ClientModule, ProviderModule, ReportModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
