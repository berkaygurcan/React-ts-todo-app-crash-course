
import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
//ts ile dependencies yükleyince onların ilgili typelarını da npm ile yüklememiz gerekiyor
//https://www.npmjs.com/package/@types/react-beautiful-dnd

function App() {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  
  const handleAdd= (e: React.FormEvent) => {
    
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {
        id: Date.now(),
        todo,
        isDone: false
      }])
      setTodo("") //inputu boşalttık
    }
  };

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    if(!destination) return; //nullsa return et
    if(destination.droppableId===source.droppableId &&
      destination.index===source.index ) return //aynı yere bırakıldıysa 

    let add,active =todos,complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add); // hiçbirşey silmeyip ekledik
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  }



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;