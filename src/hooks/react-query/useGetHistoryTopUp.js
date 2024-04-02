import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import api from "../../api/http";

export default function useGetHistoryTopUp(nuwb, trigger) {
  const historyTopUp = useQuery({
    queryKey: ["hisory-topUp"],
    queryFn: () => api.get(`/spp/topup/log/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      historyTopUp.refetch();
    }
  }, [nuwb, trigger]);
  return historyTopUp;
}
