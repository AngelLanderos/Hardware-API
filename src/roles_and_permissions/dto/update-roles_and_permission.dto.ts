import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesAndPermissionDto } from './create-roles_and_permission.dto';

export class UpdateRolesAndPermissionDto extends PartialType(CreateRolesAndPermissionDto) {}
