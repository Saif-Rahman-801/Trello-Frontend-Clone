import React from "react";

const AddItem = ({ listAddItem, setEditMode }) => {
  return (
    <div
      className={
        listAddItem ? "add-item list-add-item" : "add-item task-add-item"
      }
    >
      <button className="add-item-icon">Add</button>
      <p>{listAddItem ? "Add another List" : "Add a Card"}</p>
    </div>
  );
};

export default AddItem;
