import { useState } from "react";
function Form({onAddTodo})
{
    const [inputValue, setInputValue] = useState("");
    const handleInputValue = (value) => {
        setInputValue(value);
      };
      const handleSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");

      }
    return<>
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
    </>
}
export default Form