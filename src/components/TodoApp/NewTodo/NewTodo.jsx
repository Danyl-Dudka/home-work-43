import { Button, Input } from "antd";
import { useContext, useState } from "react";
import { TodosContext } from "../../../context";
import './newTodo.css';
export default function NewTodo() {
  const [value, setValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const {addNewTodo} = useContext(TodosContext);

  const handleSaveValue = () => {
    addNewTodo(value, secondValue);
    setValue('');
    setSecondValue('');
  }

  return (
    <div>
      <form className="form_input_styles">
        <Input className="input_form" placeholder="Enter what you wanna do" value={value} onChange={event => setValue(event.target.value)} />
        <Input className="input_form" placeholder="Enter the priority" value={secondValue} onChange={event => setSecondValue(event.target.value)} />
        <Button className="add_button" onClick={handleSaveValue}>Add</Button>
      </form>
    </div>
  )
}