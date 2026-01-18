// src/utils/date.util.ts
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-IN").format(new Date(date));
}

export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}
