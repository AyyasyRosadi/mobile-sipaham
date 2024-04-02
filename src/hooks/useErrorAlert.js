import React, { useEffect, useState } from "react";

export default function useErrorAlert(status) {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (status) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [status]);
  return showAlert;
}
