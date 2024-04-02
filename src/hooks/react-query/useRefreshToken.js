import { useMutation } from "@tanstack/react-query";
import api from "../../api/http";

export default function useRefreshToken() {
  const refresh = useMutation({
    mutationKey: ["refresh"],
    mutationFn: (token) =>
      api.get("/user/refreshtoken", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    onSuccess: (r) => {
      return r;
    },
    onError: (r) => {
      return r;
    },
  });
  return refresh;
}
