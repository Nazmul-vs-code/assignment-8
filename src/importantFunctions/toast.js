"use client";
import { toast } from "react-toastify";

export const showToast = (message, type = "success") => {
  if (type === "error") {
    return toast.error(message);
  }
  return toast.success(message);
};

