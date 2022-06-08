import React from "react";
import classes from "./ToDoList.module.css";
// import editButton from "./Assets/edit.svg";
import deleteButton from "./Assets/Delete.svg";
import editButton2 from "./Assets/Icons.svg";

const ToDoList = (props) => {

  const listRemoveHandler = () => {
    props.ondeleteHandler(props.id);

    // const checkValue = props.items.map((todo) => {
    //   return todo.id
    // })
    console.log(props.items.map((todo) => {
      return todo.id
    }));
  }

  return (
    <React.Fragment>
      <div className={classes.toDowrapper}>
        <div className={classes.ToDoClass}>
          <ul>
            {props.items.map((toDodata) => {
              return (
                <li  key={toDodata.id}  >
                  {toDodata.toDo}
                  <div className={classes.dummy}>
                    <img
                      className={classes.editBtn}
                      src={editButton2}
                      alt="edit"
                    />
                    <img
                      className={classes.deleteBtn}
                      src={deleteButton}
                      alt="delete"
                      onClick={listRemoveHandler}
                    />
                  </div>
                </li>
                
              );
            })}
          </ul>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoList;
