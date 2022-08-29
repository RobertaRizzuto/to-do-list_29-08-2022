import Button from "./Components/Button";
import ToDoList from "./Components/ToDoList";
import ToDoListItem from "./Components/ToDoListItem";
import Form from "./Components/Form";
import Input from "./Components/Input";

import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [newVoice, setNewVoice] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    newVoice && setList([...list, newVoice]);
    setNewVoice("");
  };

  const onCancelClick = (e) => {
   list.splice(e.target.id, 1);
   setList([...list])

  };
  return (
    <div className="App">
      <h1>To-do List</h1>
      <ToDoList>
        {list.map((el, index) => (
          <ToDoListItem key={index} id={index}>
            <div>
              <Input type="checkbox" /> <span>{el}</span>
            </div>
            <Button
              type="button"
              textContent="x"
              id={index}
              className="togli"
              onClick={onCancelClick}
            />
          </ToDoListItem>
        ))}
      </ToDoList>
      <Form onSubmit={onHandleSubmit}>
        <Input setNewVoice={setNewVoice} value={newVoice} />
        <Button textContent="+" className="aggiungi" />
      </Form>
    </div>
  );
}

export default App;
