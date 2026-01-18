// src/constants/messages.ts
export const MESSAGES = {
  SUCCESS: {
    USER_CREATED: "User created successfully",
    USER_UPDATED: "User updated successfully",
    USER_DELETED: "User deleted successfully",
  },

  ERROR: {
    GENERIC: "Something went wrong. Please try again.",
    UNAUTHORIZED: "You are not authorized to perform this action",
    INVALID_FORM: "Please correct the highlighted errors",
  },
} as const;
