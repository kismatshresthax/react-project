
import React, { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = () => {

    setTodos((prevValue) => {
      console.log(prevValue, "prev value");
      
      let arrValue = [...prevValue];
      arrValue.push(inputValue);
      return arrValue;
    });
    setInputValue("");
    // }
  };
  // console.log(todos, "todos");
  const handleEdit = (index) => {
    console.log(index, "index");
    setInputValue(todos[index]);
    setEdit(true);
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos, "tet");
    setTodos(newTodos);
  };
  console.log(todos, "todos");


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
        //   return (
        //     <li key={index}>
        //       {todo}
        //       {/* <button onClick={() => handleEdit(index)}>Edit</button>
        //       <button onClick={() => handleDelete(index)}>Delete</button> */}
        //     </li>
        //   );
        })}
      </ul>
    </div>
  );
};
export default TodoList;