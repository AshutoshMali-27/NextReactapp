export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",

  USERS: "/users",
  USER_NEW: "/users/new",
  USER_EDIT: (id: string) => `/users/${id}`,

  BILLS: "/bills",
} as const;