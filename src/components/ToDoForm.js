import React, { useState } from "react";
import Button from "./UI/Button";
import classes from "./ToDoForm.module.css";

const ToDoForm = (props) => {
  const [inputToDo, setInputToDo] = useState(props.edit ? props.edit.value : "");

  const toDoInput = (event) => {
    setInputToDo(event.target.value)
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if(inputToDo.trim().length === ""){
      return
    }
    
    const formData = {
      toDo: inputToDo
    }

    console.log(formData);
    props.onAddToDo(formData);


    // props.onSubmit({
    //   id: Math.random(),
    //   text: inputToDo
    // })

  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.input} onSubmit={formSubmitHandler}>
          
          <div className={classes.wrapper} >
            <input type="text" id="todo" name="toDO" placeholder="Name" onChange={toDoInput} value={inputToDo} />
            <Button type="submit">Add To Do</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ToDoForm;
