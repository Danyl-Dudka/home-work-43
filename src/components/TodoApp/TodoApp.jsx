import TodosProvider from "../providers/TodosProvider";
import NewTodo from "./NewTodo/NewTodo";
import TodosList from "./TodosList/TodosList";
import { useContext } from "react";
import { LanguageContext } from "../../context";
import { translations } from "../translations";
import './TodoApp.css'
export default function TodoApp() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="todo_application">
      <h3>{t.todoAppTitle}</h3>
      <TodosProvider>
        <NewTodo />
        <TodosList />
      </TodosProvider>
      {/* 1) todo input + button save */}
      {/* 2) show todos with buttons (done, remove) */}
    </div>
  )
}