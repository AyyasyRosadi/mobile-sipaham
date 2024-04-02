import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api/http";
import { useEffect } from "react";

export default function useRefreshUser() {
  const refreshUser = useMutation({
    mutationKey: ["refresh-user"],
    mutationFn: () => api.get(`/santri/renew/data`),
    onSuccess: (r) => {
      return r;
    },
    onError: (r) => {
      return r;
    },
  });

  return refreshUser;
}
