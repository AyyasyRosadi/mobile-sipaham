import { useMutation } from "@tanstack/react-query";
import api from "../../api/http";

export default function useResetPassword() {
  const resetPassword = useMutation({
    mutationKey: ["post-reset"],
    mutationFn: (e) => api.post(`/user/reset/password`, e),
    onSuccess: (r) => {
      return r;
    },
    onError: (r) => {
      return r;
    },
  });
  return resetPassword;
}
