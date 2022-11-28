import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useGlobalContext } from "../context/AppContext";

function Item({ item }) {
  const { removeItem, editItem } = useGlobalContext();
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
      </div>
      <div>
        <button onClick={() => editItem(item.id)}>
          <BiEdit />
        </button>
        <button onClick={() => removeItem(item.id)}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
}

export default Item;
