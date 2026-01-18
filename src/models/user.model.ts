// src/models/user.model.ts
export interface User {
  id?: string;
  fullName: string;
  email: string;
  roleId: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
