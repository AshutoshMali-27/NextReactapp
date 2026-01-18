// src/validations/user.schema.ts
import { z } from "zod";

export const createUserSchema = z.object({
  fullName: z
.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),

  email: z.string().email("Invalid email address"),

  roleId: z.number().int().positive("Role is required"),

  isActive: z.boolean(),
});

export const updateUserSchema = createUserSchema.extend({
  id: z.string().uuid("Invalid user id"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
