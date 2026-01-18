// src/utils/permission.util.ts
import { RoleType } from "@/src/constants/roles";

export function isAdmin(role: RoleType) {
  return role === "ADMIN";
}
