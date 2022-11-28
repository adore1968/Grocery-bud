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
    <div
      className={`text-center bg-${alert.style} bg-opacity-20 rounded p-1 mb-5`}
    >
      <p className={`text-lg sm:text-xl capitalize text-${alert.style} `}>
        {alert.text}
      </p>
    </div>
  );
}

export default Alert;
