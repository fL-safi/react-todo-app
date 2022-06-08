import React from "react";
import classes from "./ToDoList.module.css";

import ToDoListItems from "./ToDoListItems";

const ToDoList = (props) => {
  const id = props.items.map((id) => {
    return id.id;
  });

  console.log(id);

  return (
    <React.Fragment>
      <div className={classes.toDowrapper}>
        <div className={classes.ToDoClass}>
          <ul>
            {props.items.map((toDodata) => {
              return (
                <ToDoListItems
                  key={toDodata.id}
                  id={toDodata.id}
                  value={toDodata.toDo}
                  onDelete={props.onDeleteItems}
                  onUpdate = {props.onUpdatedToDo}
                >
                  {toDodata.toDo}
                </ToDoListItems>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoList;
