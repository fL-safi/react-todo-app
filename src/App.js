
import React, { useState } from "react";
import classes from "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const DummmyToDos = [
  {
    id: 1,
    toDo: "Learn JS"
  },

  {
    id: 2,
    toDo: "Commit to Git"
  }
]

function App() {

  const [toDo, setToDo] = useState([
    { toDo: 'Do all exercises!', id: 'g1' },
    { toDo: 'Finish the course!', id: 'g2' }
  ]);

  const ToDoHandler = (formtodo) => {
    const ArrivedToDo = {
      ...formtodo,
      id: Math.random().toString(),
      
    }
    console.log(ArrivedToDo);

    setToDo((prevData) => {
      return( 
        [ArrivedToDo, ...prevData]
        )
    })
  };

  const DeleteHandler = (toDoId) => {
    setToDo(prevtoDos => {
      const updatedToDos = prevtoDos.filter(todo => todo.id !== toDoId);
      console.log(toDoId);
      return updatedToDos;
    });
    console.log("deleted");
  };



  const updateHandler = (todoId, newValue) => {
    // if(!newValue.text || /^\s*$/.test(newValue.text)){
    //   return
    // }

    setToDo((prev) => prev.map(item => item.id === todoId ? newValue : item ) )
  };






  return (
    <React.Fragment>
      <div className={classes.container} >
        <ToDoForm onAddToDo={ToDoHandler}  />
        <ToDoList items={toDo} onDeleteItems={DeleteHandler} onUpdatedToDo = {updateHandler} />
      </div>
    </React.Fragment>
  );
}

export default App;
