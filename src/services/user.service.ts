// src/services/user.service.ts
import { http } from "./http.service";
import { User } from "@/src/models/user.model";
import { logInfo } from "./logger.service";
import { CreateUserInput, UpdateUserInput } from "../validations/user.schema";

export async function createUser(user: CreateUserInput) {
  return http.post("/users", user);
}
export async function getUsers() {
  return http.get<User[]>("/users");
}

export async function getUserById(id: string) {
  return http.get<User>(`/users/${id}`);
}

export async function updateUser(user: UpdateUserInput) {
  return http.post(`/users/${user.id}`, user);
}

export async function deleteUser(id: string) {
  await http.delete<void>(`/users/${id}`);
  logInfo("User deleted via API", { id });
}
