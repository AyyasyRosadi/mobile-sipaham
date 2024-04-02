import { useEffect, useState } from "react";

export default function useShowAlert(status) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    if (status && status !== "IDDLE") {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }, [status]);
  return showMessage;
}
