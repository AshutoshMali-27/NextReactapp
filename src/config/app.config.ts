// src/config/app.config.ts
import { ENV } from "./env";

export const APP_CONFIG = {
  isProd: ENV.NODE_ENV === "production",
  isDev: ENV.NODE_ENV === "development",

  api: {
    baseUrl: ENV.API_BASE_URL,
    timeout: 15000,
  },

  auth: {
    tokenHeader: "Authorization",
    tokenPrefix: "Bearer",
  },
};
