import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useGlobalContext } from "../context/AppContext";

function Item({ item }) {
  const { removeItem, editItem } = useGlobalContext();
  return (
    <div className="mb-1 last:mb-0 flex justify-between items-center hover:bg-gray-800 hover:text-white rounded p-1.5 transition-colors">
      <div className="text-lg sm:text-xl">
        <h2>{item.title}</h2>
      </div>
      <div className="text-lg sm:text-xl">
        <button
          onClick={() => editItem(item.id)}
          className="mr-1 text-green-500"
        >
          <BiEdit />
        </button>
        <button onClick={() => removeItem(item.id)} className="text-red-500">
          <BiTrash />
        </button>
      </div>
    </div>
  );
}

export default Item;
