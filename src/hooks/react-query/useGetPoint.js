import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import api from "../../api/http";

export default function useGetPoint(nuwb, trigger) {
  const point = useQuery({
    queryKey: ["get-point"],
    queryFn: () => api.get(`/perizinan/point/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      point.refetch();
    }
  }, [nuwb, trigger]);
  return point;
}
