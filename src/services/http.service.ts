


import { ENV } from "../config/env";
import { logError } from "./logger.service";
import { cookies } from "next/headers";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";


const apiUrl = ENV.API_BASE_URL;
async function request<T>(
  url: string,
  method: HttpMethod,
  body?: unknown
): Promise<T> {
       const cookieStore = await cookies(); // ✅ await required
   const token = cookieStore.get("auth_token")?.value;
  try {
    const res = await fetch(`${apiUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      "x-internal-key": process.env.INTERNAL_API_KEY!,
       ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    logError("HTTP request failed", { url, method, error });
    throw error;
  }
}

export const http = {
  get: <T>(url: string) => request<T>(url, "GET"),
  post: <T>(url: string, body: unknown) => request<T>(url, "POST", body),
  put: <T>(url: string, body: unknown) => request<T>(url, "PUT", body),
  delete: <T>(url: string) => request<T>(url, "DELETE"),
};


























// src/services/http.service.ts
//import { ENV } from "@/src/config/env";
//import { cookies } from "next/headers";
//type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// export async function serverFetch<T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<T> {
//   const cookieStore = await cookies(); // ✅ await required
//   const token = cookieStore.get("auth_token")?.value;

//   const res = await fetch(endpoint, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       "x-internal-key": process.env.INTERNAL_API_KEY!,
//       ...(token && { Authorization: `Bearer ${token}` }),
//       ...options.headers,
//     },
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(`Backend error ${res.status}`);
//   }

//   return res.json();
// }


