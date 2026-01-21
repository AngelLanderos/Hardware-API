export class UserResponseDto {
  id: number;
  businessId: number;

  firstName: string;
  lastName: string;
  email: string;

  isActive: boolean;

  role: {
    id: number;
    name: string;
  };

  createdAt: Date;
  updatedAt: Date;
}
