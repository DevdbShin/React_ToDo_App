import './App.css';
import {useState, useCallback, useEffect} from "react";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";
import axios from "./api/axios";

export default function App() {
    //console.log("App component");

    const fetchTodoData = async () => {
        const result = await axios.get("");
        console.log(result.data);
        setTodoData(result.data);
    }

    useEffect(() => {
        fetchTodoData();
    }, []);

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleClick = useCallback(async (id) => {
        const result = await axios.delete("", {
            data :[id]
        });
        console.log("del = ", result);

        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    }, [todoData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newTodo = {
            id : '',
            title : value,
            completed : true,
        }

        const result = await axios.post("", [newTodo]);
        newTodo.id = result.data[0];

        console.log("add = ", newTodo);

        setTodoData(prev =>
            [...prev, newTodo]
        );
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
