// src/constants/roles.ts
export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
  AUDITOR: "AUDITOR",
} as const;

export type RoleType = (typeof ROLES)[keyof typeof ROLES];
