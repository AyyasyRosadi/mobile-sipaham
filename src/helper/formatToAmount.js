import { useEffect } from "react";

export default function formatToAmount(value, setValue) {
  useEffect(() => {
    setValue((e) => e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."));
  }, [value]);
}
