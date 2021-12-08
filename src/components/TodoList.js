import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);

  //funcion que nos agrega las tareas a la cola
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  //funcion que por medio del id y el nuevo valor
  //actualiza la tarea.
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //funcion que por meduo del id elimina toda la tarea de la cola.
  const removeTodo = (id) => {
    const removeA = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeA);
  };
  // por medio del id usamos una variable para mapear lo que hay
  // si el id que seleccionamos es igual al id existente
  //retorna el array actualizado y si es diferente retorna la lista igual sin cambios.
  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <h1>¿Cuál es el plan de hoy?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
