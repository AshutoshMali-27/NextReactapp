// src/services/logger.service.ts
export function logInfo(message: string, data?: unknown) {
  log("INFO", message, data);
}

export function logError(message: string, error?: unknown) {
  log("ERROR", message, error);
}

export function logDebug(message: string, data?: unknown) {
  log("DEBUG", message, data);
}

function log(level: string, message: string, data?: unknown) {
  console.log(
    JSON.stringify({
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
    })
  );
}
