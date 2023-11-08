import './App.css';
import React from "react";
import {useState} from "react";

export default function App() {

    const {todoData, setTodoData} = useState([
        {
            id : 1,
            title: "111",
            completed: false
        }
    ]);
    const {value, setValue} = useState("");

    console.log(todoData);

    /*컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체입니다. (State가 변경되면 컴
    포넌트는 리랜더링(Re-rendering)됩니다. 또한 State는 컴포넌트 안에서 관리됩니다.*/

    const listStyle = (completed) => {
        return {
            backgroundColor: completed ? "#fff" : "#888",
            color: completed ? "" : "#fff",
            textDecoration: completed ? "none" : "line-through",
        };
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

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
    }

    const changeFiled = (id) => {
        let newTodoData = todoData.map((data) => {
            if(data.id === id) {
                data.completed = !data.completed
            }
            return data;
        });
        setTodoData( newTodoData );
    }

    return (
        <div className="container">
            <div className="todoTop">
                <div className="title">
                    <h1>My To Do List</h1>
                    <form style={{display: "flex"}} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="value"
                            style={{flex: "10", padding: "5px"}}
                            placeholder="Title..."
                            value={value}
                            onChange={handleChange}
                        />
                        <input
                            type={"submit"}
                            value={"Add"}
                            className={"btn"}
                            style={{flex: "1"}}
                        />
                    </form>
                </div>
            </div>

            <ul>
                {todoData.map((data) => (
                    <li style={listStyle(data.completed)} key={data.id} className="" onClick={() => changeFiled(data.id)}>
                            {" "}{data.title}
                            <span  onClick={() => handleClick(data.id)}>x</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
