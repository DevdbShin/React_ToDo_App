import './App.css';
import {useState, useCallback} from "react";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";

export default function App() {

    console.log("App component");

    const initData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

    const [todoData, setTodoData] = useState(initData);
    const [value, setValue] = useState("");

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    }, [todoData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id : Date.now(),
            title : value,
            completed : true,
        }
        setTodoData(prev =>
            [...prev, newTodo]
        );
        localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    };

    return (
        <div className={"container"}>

            <TodoForm value={value}
                      setValue={setValue}
                      handleSubmit={handleSubmit}
            />

            <Todolist todoData={todoData}
                      setTodoData={setTodoData}
                      handleClick={handleClick}
            />
        </div>
    );
}
