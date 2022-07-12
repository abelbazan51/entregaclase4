import React from "react";
import ItemCount from "../components/ItemCount";

export const ItemlistContainer = ({ greating }) => {
  const onAdd = (param) => {
    console.log(`usted indico ${param}`);
  };
  return (
    <>
      <div>{greating}</div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
};
