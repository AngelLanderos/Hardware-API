import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { BusinessUserModule } from './business_user/business_user.module';
import { RolModule } from './rol/rol.module';
import { PermissionModule } from './permission/permission.module';
import { RolePermissionModule } from './role_permission/role_permission.module';
import { UserRoleModule } from './user_role/user_role.module';
import { CategoryModule } from './category/category.module';
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';
import { SaleModule } from './sale/sale.module';
import { SaleDetailModule } from './sale_detail/sale_detail.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseDetailModule } from './purchase_detail/purchase_detail.module';
import { InventoryMovementModule } from './inventory_movement/inventory_movement.module';
import { BusinessModule } from './business/business.module';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      autoLoadEntities: true, //Automaticamente sincroniza las entidades que creemos
      synchronize: true
    }),
    CommonModule,
    UserModule,
    ProductModule,
    BusinessUserModule,
    RolModule,
    PermissionModule,
    RolePermissionModule,
    UserRoleModule,
    ClientModule,
    CategoryModule,
    ProviderModule,
    SaleModule,
    SaleDetailModule,
    PurchaseModule,
    PurchaseDetailModule,
    InventoryMovementModule,
    BusinessModule,
    BranchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
