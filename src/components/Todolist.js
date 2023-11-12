import React from "react";
import axios from "../api/axios";

const Todolist = React.memo(({todoData, setTodoData, handleClick}) => {
    //const Todolist = ({todoData, setTodoData}) => {
    // console.log("List component");

    const changeCompleted = async (id) => {
        let item = {};
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed
                item.completed = data.completed;
                item.id = data.id;
            }
            return data;
        });

        const result = await axios.put("", [item]);
        console.log("upd = ", result);

        setTodoData( newTodoData );
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    return (
        <ul>
            {todoData.map((data) => (
                <li  key={data.id}
                     className={data.completed ? "" : "checked"}
                     onClick={() => changeCompleted(data.id)} >
                    {data.title}
                    <span onClick={(e) => {
                            e.stopPropagation()
                            handleClick(data.id)
                        }
                    }>x</span>
                </li>
            ))}
        </ul>
    )
});

export default Todolist;