import React, { useState } from "react";
import classes from "./ToDoList.module.css";
import deleteButton from "./Assets/Delete.svg";
import editButton2 from "./Assets/Icons.svg";
import ToDoForm from "./ToDoForm";

const ToDoListItems = (props, onUpdate ) => {

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

    const deleteHandler = () => {
        props.onDelete(props.id)
        console.log(props.id)
    };

    const updateHandler = () => {
      setEdit({
        id: props.id,
        value: props.value
      })
     
    };

    const updateSubmitHandler = (value) => {
      props.onUpdate(edit.id, value)
      setEdit({
        id: null,
        value: ''
      })
    };

    if(edit.id){
      return <ToDoForm edit={edit} onAddToDo={updateSubmitHandler} />
    }

  return (
    <React.Fragment>
    <div className={classes.ToDoClass_II} >
      <li  >
        {props.children}
        <div className={classes.dummy}>
        <img
          className={classes.editBtn}
          src={editButton2}
          alt="edit"
          onClick={updateHandler}
        />
        <img
          className={classes.deleteBtn}
          src={deleteButton}
          alt="delete"
          onClick={deleteHandler}
          
        />
      </div>
      </li>
      </div>
    </React.Fragment>
  );
};

export default ToDoListItems;
