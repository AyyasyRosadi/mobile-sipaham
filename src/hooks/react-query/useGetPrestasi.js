import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import api from "../../api/http";

export default function useGetPrestasi(nuwb, trigger) {
  const prestasi = useQuery({
    queryKey: ["get-prestasi"],
    queryFn: () => api.get(`/perizinan/prestasi/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      prestasi.refetch();
    }
  }, [nuwb, trigger]);
  return prestasi;
}
