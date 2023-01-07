import SelectInput from "@mui/material/Select/SelectInput";
import React, { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [info, setInfo] = useState({
    inputValue: "",
    password: "",
  });
  const { inputValue, password } = info;
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = () => {
    if (edit) {
      setTodos((prevTodos) => {
        prevTodos[editIndex] = info;
        return prevTodos;
      });

      setEdit(false);
      setEditIndex(-1);

    } else {
      setTodos((prevValue) => {
        return [...prevValue, info];
      });
      setInfo({ ...info, inputValue: "", password: "" });
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index)
    setInfo(todos[index]);
    setEdit(true);
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputValue = ({ target: { value } }) => {
    setInfo({ ...info, inputValue: value });
  };
  console.log(info);
  const handlePassword = ({ target: { value } }) => {
    setInfo({ ...info, password: value });
  };
  return (
    <div>
      <input value={inputValue} onChange={handleInputValue} />
      <input value={password} onChange={handlePassword} />
      <button type="button" onClick={handleSubmit}>
        {edit ? "Update" : "Add Todo"}
      </button>

      <ul>
        {todos.map((tod, index) => {
          console.log(tod, "todo");
          return (
            <li key={index}>
              <p> {tod.inputValue} </p>
              <p> {tod.password}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
