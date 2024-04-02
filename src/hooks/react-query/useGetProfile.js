import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "../../api/http";

export default function useGetProfile(nuwb, trigger) {
  const profile = useQuery({
    queryKey: ["get-profile"],
    queryFn: () => api.get(`/santri/${nuwb}`),
    enabled: nuwb && nuwb !== null ? true : false,
  });
  useEffect(() => {
    if (nuwb && nuwb !== null) {
      profile.refetch();
    }
  }, [nuwb, trigger]);
  return profile;
}
