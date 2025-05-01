import { useContext, useState } from "react"
import { TodosContext } from "../../../context"
import {Button} from 'antd'
import { LanguageContext } from "../../../context"
import { translations } from "../../translations"
import './TodosList.css'
export default function TodosList() {
  const {todos, removeTodo, changeTodo} = useContext(TodosContext);
  const [editingTodo, setEditingTodo] = useState(null);
  const {language} = useContext(LanguageContext);
  const t = translations[language];
  const handleSave = () => {
    if (editingTodo) {
      changeTodo(editingTodo.id, editingTodo);
      setEditingTodo(null);
    }
  };


  return (
    <ul className="list_style">
      {todos.map((todo, index) => (
        <li key={index}>
          <div className="parent_container">
          <div className="info_container">
          <p className="todo_label">{t.todoLabel}: {todo.text}</p>
          <p className="priority_label">{t.priorityLabel}: {todo.priority}</p>
          </div>
          <div className="buttons_container">
          <Button className="control_button"onClick={() => setEditingTodo(todo)}>{t.editButton}</Button> 
          <Button className="control_button" onClick={() => removeTodo(index)}>{t.deleteButton}</Button>
          </div>
          </div>
          {editingTodo && editingTodo.id === todo.id && (
            <div className="edit_container">
              <input className="edit_text_holder" type="text" value={editingTodo.text} onChange={(element) => setEditingTodo({ ...editingTodo, text: element.target.value })} />
              <select className="edit_text_holder" type="text" value={editingTodo.priority} onChange={(element) => setEditingTodo({ ...editingTodo, priority: element.target.value })}>
                <option>{t.highPriority}</option>
                <option>{t.mediumPriority}</option>
                <option>{t.lowPriority}</option>
              </select>  
              <Button className="save_button" onClick={handleSave}>{t.saveButton}</Button>
            </div>
          )}
          </li>
      ))}
    </ul>
  )
}