import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import api from "../../api/http";

export default function useGetPerizinan(nuwb, trigger) {
  const perizinan = useQuery({
    queryKey: ["get-perizinan"],
    queryFn: () => api.get(`/perizinan/perizinan-santri/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      perizinan.refetch();
    }
  }, [nuwb, trigger]);
  return perizinan;
}
