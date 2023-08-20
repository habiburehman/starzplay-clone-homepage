import React, { useState, useEffect } from "react";
import styles from "./errorBoundary.module.css";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <h1 className={styles.errorUI}>Ah Snap! Something went wrong :(</h1>;
  }

  return children;
}

export default ErrorBoundary;
