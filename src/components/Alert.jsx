import React, { useEffect } from "react";
import { useGlobalContext } from "../context/AppContext";

function Alert({ alert }) {
  const { showAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div className={`text-${alert.style}`}>
      <p>{alert.text}</p>
    </div>
  );
}

export default Alert;
