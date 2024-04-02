import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import api from "../../api/http";

export default function useGetHistoryPembayaran(nuwb, trigger) {
  const historyPembayaran = useQuery({
    queryKey: ["history-pembayaran"],
    queryFn: () => api.get(`/spp/log/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      historyPembayaran.refetch();
    }
  }, [nuwb, trigger]);
  return historyPembayaran;
}
