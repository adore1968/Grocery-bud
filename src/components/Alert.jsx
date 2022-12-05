import React, { useEffect } from "react";
import { useGlobalContext } from "../context/AppContext";

function Alert({ alert }) {
  const { showAlert, list } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div
      className={`text-center bg-${alert.style} bg-opacity-20 rounded p-1 mb-5 `}
    >
      <p className={`text-lg sm:text-xl capitalize text-${alert.style} `}>
        {alert.text}
      </p>
    </div>
  );
}

export default Alert;
