// src/services/popup.service.ts
import Swal from "sweetalert2";

export const popupService = {
  confirm(message: string) {
    return Swal.fire({
      title: "Confirm",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
  },

  success(message: string) {
    return Swal.fire("Success", message, "success");
  },

  error(message: string) {
    return Swal.fire("Error", message, "error");
  },
};
