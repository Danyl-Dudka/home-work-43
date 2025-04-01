import TodosProvider from "../providers/TodosProvider";
import NewTodo from "./NewTodo/NewTodo";
import TodosList from "./TodosList/TodosList";
import './TodoApp.css'
export default function TodoApp() {
  return (
    <div className="todo_application">
      <h3>Todo Application</h3>
      <TodosProvider>
        <NewTodo />
        <TodosList />
      </TodosProvider>
      {/* 1) todo input + button save */}
      {/* 2) show todos with buttons (done, remove) */}
    </div>
  )
}