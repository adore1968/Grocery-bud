import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Item from "./Item";

function List() {
  const { list, clearList } = useGlobalContext();
  return (
    <div className="mt-5">
      {list.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
      <div className="text-center">
        <button
          onClick={() => clearList()}
          className="inline-block text-lg sm:text-xl text-red-500 mt-5"
        >
          Clear Items
        </button>
      </div>
    </div>
  );
}

export default List;
