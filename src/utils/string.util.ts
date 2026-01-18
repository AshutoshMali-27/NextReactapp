// src/utils/string.util.ts
export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function truncate(text: string, length = 50): string {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}
