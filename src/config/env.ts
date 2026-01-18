export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL!,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
};