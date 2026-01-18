// src/services/toaster.service.ts
import toast from "react-hot-toast";

export const toasterService = {
  success(message: string) {
    toast.success(message);
  },

  error(message: string) {
    toast.error(message);
  },

  info(message: string) {
    toast(message);
  },
};
