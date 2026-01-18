// src/auth/auth.ts
import { cookies } from "next/headers";
import { ROLES, RoleType } from "../constants/roles";

export interface AuthUser {
  id: string;
  email: string;
  role: RoleType;
}

const TOKEN_KEY = "auth_token";

/**
 * Get JWT from cookies (server-side only)
 */
export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_KEY)?.value ?? null;
}

/**
 * Decode token payload (NO verification here)
 * Verification must happen in backend API
 */
export async function getCurrentUser() {
  const token = await getAuthToken();
  if (!token) return null;

  try {
    const payload = JSON.parse( Buffer.from(token.split(".")[1], "base64").toString());

    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  } catch {
    return null;
  }
}


/**
 * Role check helper
 */
export function hasRole(user: AuthUser | null, roles: RoleType[]) {
  if (!user) return false;
  return roles.includes(user.role);
}
