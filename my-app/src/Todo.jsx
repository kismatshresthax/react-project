import SelectInput from "@mui/material/Select/SelectInput";
import React, { useState } from "react";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
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
    
    <div style={{
                textAlign: 'center',
                backgroundColor:"grey-green",
    }}>
      <h1>ADD USERNAME</h1>
      <TextField style={{padding:5,margin:20}} label="first name" variant="standard"  value={inputValue} onChange={handleInputValue} />
      <TextField style={{padding:5,margin:20}}  label="Last name" variant="standard" value={password} onChange={handlePassword} />
      <Button style={{padding:5,margin:30}} variant ="contained"  type="button" onClick={handleSubmit}>
        {edit ? "Update" : "Add Todo"}
      </Button>
    

      <ul>
        {todos.map((tod, index) => {
          console.log(tod, "todo");
          return (
            <li key={index}>
              <p> {tod.inputValue} </p>
              <p> {tod.password}</p>
              <Button style={{padding:5,margin:20}}  variant="outlined"  onClick={() => handleEdit(index)}>Edit</Button>
              <Button style={{padding:5,margin:20}}  variant="outlined"  onClick={() => handleDelete(index)}>Delete</Button>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};
export default TodoList;
