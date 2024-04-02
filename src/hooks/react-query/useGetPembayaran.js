import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import api from "../../api/http";

export default function useGetPembayaran(nuwb,trigger) {
  const pembayaran = useQuery({
    queryKey: ["pembayaran-spp"],
    queryFn: () => api.get(`/spp/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      pembayaran.refetch();
    }
  }, [nuwb,trigger]);
  return pembayaran;
}
