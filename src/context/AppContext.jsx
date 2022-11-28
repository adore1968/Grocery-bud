import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [formText, setFormText] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, text: "", style: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [itemID, setItemID] = useState(null);

  return (
    <AppContext.Provider value={{ formText, setFormText, list, alert, isEdit }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
