import React, { useState } from "react";

const NewToDoForm = ({ onClickCreate }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          onClickCreate(inputValue);
          setInputValue("");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default NewToDoForm;
