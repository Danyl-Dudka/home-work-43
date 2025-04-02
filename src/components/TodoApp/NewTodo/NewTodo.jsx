import { Button, Input } from "antd";
import { TreeSelect } from "antd";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../context";
import { translations } from "../../translations";
import { TodosContext } from "../../../context";
import "./newTodo.css";
export default function NewTodo() {
  const [value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState(null);
  const { addNewTodo } = useContext(TodosContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const treeData = [
    {
      value: t.highPriority,
      title: t.highPriority,
    },
    {
      value: t.mediumPriority,
      title: t.mediumPriority,
    },
    {
      value: t.lowPriority,
      title: t.lowPriority,
    },
  ];

  const handleSaveValue = () => {
    addNewTodo(value, secondValue);
    setValue("");
    setSecondValue(null);
  };

  return (
    <div>
      <form className="form_input_styles">
        <Input
          className="input_form"
          placeholder={t.placeholderInput}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <TreeSelect
          className="form_select"
          showSearch
          style={{ width: "100%", fontSize: "26px" }}
          value={secondValue}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder={t.placeholderPriority}
          allowClear
          treeDefaultExpandAll
          onChange={(newValue) => setSecondValue(newValue)}
          treeData={treeData}
        />
        <Button className="add_button" onClick={handleSaveValue}>
          {t.addButton}
        </Button>
      </form>
    </div>
  );
}
