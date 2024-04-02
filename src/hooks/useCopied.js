import React, { useEffect } from "react";

export default function useCopied(showCopied,setShowCopied) {
  useEffect(() => {
    if (showCopied) {
      const interval = setInterval(() => {
        setShowCopied(false);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [showCopied]);
  return showCopied;
}
