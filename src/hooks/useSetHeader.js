import api from "../api/http";

export default function useSetHeader(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
