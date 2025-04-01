import { useContext, useState } from "react"
import { TodosContext } from "../../../context"
import {Button} from 'antd'
import './TodosList.css'
export default function TodosList() {
  const {todos, removeTodo, changeTodo} = useContext(TodosContext);
  const [editingTodo, setEditingTodo] = useState(null);
  
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
          <p>Todo: {todo.text}</p>
          <p>Priority: {todo.priority}</p>
          </div>
          <div className="buttons_container">
          <Button className="control_button"onClick={() => setEditingTodo(todo)}>Edit</Button> 
          <Button className="control_button" onClick={() => removeTodo(index)}>Delete</Button>
          </div>
          </div>
          {editingTodo && editingTodo.id === todo.id && (
            <div className="edit_container">
              <input className="edit_text_holder" type="text" value={editingTodo.text} onChange={(element) => setEditingTodo({ ...editingTodo, text: element.target.value })} />
              <input className="edit_text_holder" type="text" value={editingTodo.priority} onChange={(element) => setEditingTodo({ ...editingTodo, priority: element.target.value })} />
              <Button className="save_button" onClick={handleSave}>Save</Button>
            </div>
          )}
          </li>
      ))}
    </ul>
  )
}