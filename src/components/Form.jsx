import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { isEdit, formText, setFormText, handleSubmit } = useGlobalContext();
  return (
    <div>
      <h1 className="text-2xl sm:text-4xl text-center font-bold text-gray-800 mb-5">
        Grocery Bud
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex items-center">
        <input
          type="text"
          placeholder="e.g. eggs"
          value={formText}
          onChange={(e) => setFormText(e.target.value)}
          className="w-[85%] bg-gray-800 text-white p-1.5 rounded text-lg sm:text-xl"
        />
        <button
          type="submit"
          className="w-[15%] h-10 bg-red-500 rounded-r text-white"
        >
          {isEdit ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
