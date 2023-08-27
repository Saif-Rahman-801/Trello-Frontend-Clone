import React from "react";

const AddItemForm = ({
  listForm,
  submitHandler,
  title,
  onChangeHandler,
  setEditMode,
}) => {
  const createHandler = (e) => {
    if (title !== "") {
      submitHandler(e);
    } else {
      alert("Please provide a valid title for the list");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => createHandler(e)}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder={
            listForm ? "Enter the list tite" : "Enter a title for this task"
          }
          value={title}
          onChange={onChangeHandler}
        ></textarea>
      </form>
      <div>
        <button onClick={(e) => createHandler(e)}>
          {listForm ? "Add list" : "Add task"}
        </button>
        <button onClick={(e) => setEditMode(false)}>
            Del
        </button>
      </div>
    </div>
  );
};

export default AddItemForm;
