import React, { useState } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = () => {
    if (edit) {
      setTodos((prevTodos) => {
        prevTodos[editIndex] = inputValue;
        return prevTodos;
      });

      setEdit(false);
      setEditIndex(-1);
      setInputValue("");
    } else {
      setTodos((prevValue) => {
        console.log(prevValue, "prev value");
        return [...prevValue, inputValue];
      });
      setInputValue("");
    }
  };
  const handleEdit = (index) => {
    console.log(index, "index");
    setEditIndex(index);
    setInputValue(todos[index]);
    setEdit(true);
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };
  return (
    <div>
      <input value={inputValue} onChange={handleInputValue} />
      <button type="button" onClick={handleSubmit}>
        {edit ? "Update" : "Add Todo"}
      </button>
      <ul>
        {todos.map((todo, index) => {
          console.log(todo, "todo");
          return (
            <li key={index}>
              {todo}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
