
import { useState } from 'react';
// import Todo from "./component/Todo"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);
 

  let saveTodo = (event) => {
    event.preventDefault(); // Ensure this is called at the start

    let inputvalue = event.target.elements.inputvalue.value; // Correctly access the input value
    if (!todolist.includes(inputvalue) && inputvalue.trim() !== "") {
      let newTodo = [...todolist, inputvalue];
      setTodolist(newTodo);
      event.target.elements.inputvalue.value = ""; // Clear input field
    } else {
      alert( "Inputvalue entered by You is either already in the list or you may have entered empty text.");
    }
  };

  let list = todolist.map((item, index) => {
    return <Todoitems item={item} key={index} indexnumber={index} todolist={todolist} 
    setTodolist={setTodolist}></Todoitems>;
  });

  return ( <>
   
    <div className='App'>
    <h1>TO DO List</h1>
      <form className="form" onSubmit={saveTodo}>
        <input type="text" name="inputvalue"></input>
        <button>Save</button>
       
      </form>
      <ul className='list'>
          {list}
        </ul>
    </div>
    </>
 
  );
}

export default App;

function Todoitems({ item,indexnumber,todolist,setTodolist}) {
let deleterow=()=>{
  let finallist=todolist.filter((v,i)=>i !==indexnumber)
  setTodolist(finallist);
}
const [islinecut,setlinecut]=useState(true);
let lineontext=()=>{
 setlinecut(!islinecut);

}
  return (
    <>
      <li className={`listdecoration ${!islinecut ? "listdecorationgain" : " "}`}>{item} <span><i className="fa-solid fa-xmark" onClick={deleterow}></i></span> <span><i className="fa-solid fa-check" onClick={lineontext}></i></span></li>
      
    </>
  );
}
