import { useMutation } from "@tanstack/react-query";
import api from "../../api/http";

export default function useTopUp() {
  const topUp = useMutation({
    mutationKey: ["post-topUp"],
    mutationFn: (e) => api.post(`/spp/topup`, e),
    onSuccess: (r) => {
      return r;
    },
    onError: (r) => {
      return r;
    },
  });
  return topUp;
}
