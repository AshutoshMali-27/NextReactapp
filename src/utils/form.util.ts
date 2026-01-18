// src/utils/form.util.ts
export function formDataToObject<T>(formData: FormData): T {
  return Object.fromEntries(formData.entries()) as T;
}
