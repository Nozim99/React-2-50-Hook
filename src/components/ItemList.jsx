import React, { useEffect, useState } from "react";

function ItemList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItem = getItems();
    setItems(newItem);
  }, [getItems]);

  return (
    <ul>
      {items.map(i=><li key={i}>{i}</li>)}
    </ul>
  )
}

export default ItemList;
