import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [formText, setFormText] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, text: "", style: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [itemID, setItemID] = useState(null);

  const showAlert = (show = false, text = "", style = "") => {
    return setAlert({ show, text, style });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formText) {
      showAlert(true, "Please enter a value", "red-500");
    } else if (isEdit) {
      showAlert(true, "Item edited to the list", "green-500");
      const newList = list.map((item) => {
        if (item.id === itemID) {
          return { ...item, title: formText };
        }
        return item;
      });
      setList(newList);
      setItemID(null);
      setIsEdit(false);
    } else {
      showAlert(true, "Item added to the list", "green-500");
      const newItem = { id: uuidv4(), title: formText };
      const newList = [...list, newItem];
      setList(newList);
    }
    setFormText("");
  };

  const clearList = () => {
    showAlert(true, "The list is empty", "red-500");
    setList([]);
  };

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setFormText(item.title);
    setItemID(item.id);
    setIsEdit(true);
  };

  const removeItem = (id) => {
    showAlert(true, "Item removed to the list", "red-500");
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <AppContext.Provider
      value={{
        formText,
        setFormText,
        list,
        alert,
        isEdit,
        handleSubmit,
        showAlert,
        clearList,
        removeItem,
        editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
