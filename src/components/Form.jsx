import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { isEdit, formText, setFormText, handleSubmit } = useGlobalContext();
  return (
    <div>
      <h1>Grocery Bud</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="e.g. eggs"
          value={formText}
          onChange={(e) => setFormText(e.target.value)}
        />
        <button type="submit">{isEdit ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
}

export default Form;
