import { useEffect, useState } from "react";
import { TodosContext } from "../../context";
import { v4 as uuidv4 } from 'uuid';
export default function TodosProvider({children}) {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, [])

  const addNewTodo = (text, priority) => {
    const newTodo = {id: uuidv4(), text, priority}
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, id) => id !== index); 
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const changeTodo = (todoId, updatedTodo) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === todoId ? {...todo, ...updatedTodo} : todo
    );
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setEditingTodo(null)
  }

  


  return (
    <TodosContext.Provider value={{todos, addNewTodo, removeTodo, changeTodo}}>
      {children}
    </TodosContext.Provider>
  )
}