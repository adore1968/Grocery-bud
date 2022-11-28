import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Item from "./Item";

function List() {
  const { list, clearList } = useGlobalContext();
  return (
    <div>
      {list.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
      <button onClick={() => clearList()}>Clear Items</button>
    </div>
  );
}

export default List;
