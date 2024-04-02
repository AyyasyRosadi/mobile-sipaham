import { useMutation } from "@tanstack/react-query";
import api from "../../api/http";

export default function usePembayaran() {
  const pembayaran = useMutation({
    mutationKey: ["post-pembayaran"],
    mutationFn: (nuwb) => api.get(`/spp/pembayaran/${nuwb}`),
    onSuccess: (r) => {
      return r;
    },
    onError: (r) => {
      return r;
    },
  });
  return pembayaran;
}
