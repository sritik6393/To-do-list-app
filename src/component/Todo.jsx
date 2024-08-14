
import { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const handleDelete = (value) => {
    setTask(task.filter((cur) => cur !== value));
  };

  const handleClearAll = () => {
    setTask([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const todayDate = now.toLocaleDateString();
      const todayTime = now.toLocaleTimeString();
      setDateTime(`${todayDate} ${todayTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handlecheck =()=>{
    style={opacity:0}
  }

  return (
    <section className="todo-container">
      <header>
        <h1>To Do List</h1>
        <div className="date-time">
          <h3>{dateTime}</h3>
        </div>
      </header>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputValue(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="unorderedList">
        <ul>
          {task.map((cur, index) => (
            <li key={index} className="todo-item">
              <span className="btn-bar">{cur}</span>
              <button className="check-btn" onclic={()=>handlecheck({style})}>
                <FaRegCheckCircle />
              </button>
              <button className="delete-btn" onClick={() => handleDelete(cur)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleClearAll}>Clear All</button>
      </section>
    </section>
  );
};

export default Todo;

